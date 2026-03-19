import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Policies from './components/Policies'
import Poll from './components/Poll'
import ThankYou from './components/ThankYou'
import Share from './components/Share'

const pollData = [
  {
    id: 1,
    question: "What matters most in a class leader?",
    options: [
      { label: "Someone who listens", sub: "" },
      { label: "Someone active", sub: "" },
      { label: "Someone experienced", sub: "" },
      { label: "Someone popular", sub: "" }
    ]
  },
  {
    id: 2,
    question: "Would you be interested in peer-to-peer academic support?",
    options: [
      { label: "Yes, I need it", sub: "" },
      { label: "I can help others", sub: "" },
      { label: "Both", sub: "" },
      { label: "Not really", sub: "" }
    ]
  },
  {
    id: 3,
    question: "What should be our top priority this semester?",
    options: [
      { label: "Better communication", sub: "" },
      { label: "Academic support (tutorials)", sub: "" },
      { label: "Stronger class unity", sub: "" },
      { label: "Opportunities (internships, etc.)", sub: "" }
    ]
  }
];

function App() {
  const [view, setView] = useState('landing');
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState([]);
  const [voteCount, setVoteCount] = useState(1240);
  const [displayCount, setDisplayCount] = useState(0);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    // Fetch initial stats from backend
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.total) {
          // If we have actual votes, we can add them to a base number or just use them
          // Let's assume the base is 1240 and we add new ones
          setVoteCount(1240 + data.total);
        }
      })
      .catch(err => console.error('Error fetching stats:', err));
  }, []);

  useEffect(() => {
    if (view === 'landing') {
        let start = 0;
        const end = voteCount;
        const duration = 2000;
        let startTimestamp = null;
        
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setDisplayCount(Math.floor(progress * end));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
    }
  }, [voteCount, view]);

  const startPoll = () => setView('poll');

  const handleNext = (val) => {
    const updated = [...selections];
    updated[currentStep] = val;
    setSelections(updated);
    if (currentStep < pollData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setView('landing');
    }
  };

  const submitFinalVote = (isYes) => {
    // Send background request to save results
    fetch('/api/poll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        selections: selections,
        votedForAmarachi: isYes
      })
    })
    .then(() => {
      if (isYes) setVoteCount(prev => prev + 1);
      setView('thanks');
    })
    .catch(err => {
      console.error('Error submitting vote:', err);
      // Fallback to showing thanks even if DB fails
      if (isYes) setVoteCount(prev => prev + 1);
      setView('thanks');
    });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 antialiased font-sans">
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
          {view === 'landing' && (
            <div className="flex flex-col gap-8">
              <Hero onStart={startPoll} />
              
              <div className="px-6 flex flex-col gap-8 max-w-4xl mx-auto w-full">
                {/* Ready to Vote Counter Card */}
                <div className="py-2 fade-up">
                  <div className="flex flex-col gap-4 rounded-3xl p-8 bg-primary/10 border border-primary/20 shadow-sm transition-all hover:bg-primary/15">
                    <div className="flex items-center justify-between">
                      <p className="text-slate-800 dark:text-slate-200 text-lg font-bold tracking-tight">Voter Engagement</p>
                      <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse outline outline-4 outline-green-500/20"></span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <p className="text-slate-950 dark:text-white tracking-tighter text-5xl font-black">
                          {displayCount.toLocaleString()}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">students registered to vote</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400 text-base font-bold">
                      <span className="material-symbols-outlined text-xl">trending_up</span>
                      <span>+15% positive swing this week</span>
                    </div>
                  </div>
                </div>

                <Policies />
              </div>

              <footer className="py-16 mt-12 flex flex-col items-center gap-8 bg-slate-900/[0.03] dark:bg-white/[0.03] border-t border-slate-200 dark:border-slate-800 px-6">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowShare(true)}
                    className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
                  >
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <a className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform" href="mailto:support@amarachi2024.com">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                  <a className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform" href="#">
                    <span className="material-symbols-outlined">forum</span>
                  </a>
                </div>
                <div className="text-center">
                  <p className="text-slate-500 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest">Authorized by the Campaign Committee for Amarachi Aguinam</p>
                  <p className="text-slate-400 dark:text-slate-600 text-[10px] mt-2">© 2024 SE Student Association. All rights reserved.</p>
                </div>
              </footer>
            </div>
          )}

          {view === 'poll' && (
            <Poll 
              data={pollData} 
              currentStep={currentStep} 
              onNext={handleNext} 
              onBack={handleBack}
              onFinal={submitFinalVote}
            />
          )}

          {view === 'thanks' && <ThankYou onShare={() => setShowShare(true)} />}

          {showShare && <Share onClose={() => setShowShare(false)} />}
      </div>
    </div>
  )
}

export default App
