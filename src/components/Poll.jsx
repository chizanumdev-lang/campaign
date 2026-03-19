import React, { useState } from 'react';
import portraitImg from '../Gemini_Generated_Image_5v65bx5v65bx5v65.png';

const Poll = ({ data, currentStep, onNext, onBack, onFinal }) => {
  const [selected, setSelected] = useState(null);
  const [isFinalStep, setIsFinalStep] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const step = data[currentStep];
  const progressPerc = ((currentStep + 1) / (data.length)) * 100;

  const handleNextClick = () => {
    if (!selected && !isFinalStep) {
      const btn = document.getElementById('next-btn');
      btn.classList.add('shake');
      setTimeout(() => btn.classList.remove('shake'), 300);
      return;
    }
    
    if (currentStep < data.length - 1) {
      onNext(selected);
      setSelected(null);
    } else {
      onNext(selected);
      setIsFinalStep(true);
    }
  };

  const handleBackClick = () => {
      if (isFinalStep) {
          setIsFinalStep(false);
      } else {
          onBack();
      }
  };

  if (isRecording) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center gap-4">
              <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase">Updating election records...</p>
          </div>
      );
  }

  return (
    <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto py-12 px-6">
      {/* Progress Section */}
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-primary font-black text-sm tracking-[0.2em] uppercase">
              {isFinalStep ? 'Final Step' : `Step ${currentStep + 1} of ${data.length}`}
            </span>
            <p className="text-slate-900 dark:text-white text-3xl font-black tracking-tight mt-1">Campaign Survey</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-bold">
            {isFinalStep ? 'Almost there' : `${Math.round(progressPerc)}%`}
          </p>
        </div>
        <div className="h-3 w-full bg-primary/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(22,163,74,0.4)]" 
            style={{ width: isFinalStep ? '100%' : `${progressPerc}%` }}
          ></div>
        </div>
      </div>

      <main className="flex-1 flex flex-col px-6">
        {!isFinalStep ? (
          <div className="slide-in" key={currentStep}>
            <h1 className="font-display text-3xl font-bold leading-tight pt-8 pb-10 text-slate-900 dark:text-slate-100">
              {step.question}
            </h1>
            <div className="flex flex-col gap-4">
              {step.options.map((opt, i) => (
                <label 
                  key={i}
                  className={`group relative flex items-center justify-between cursor-pointer rounded-xl border-2 p-5 transition-all active:scale-[0.98] fade-up stagger-${i} ${selected === opt.label ? 'border-primary bg-primary/5' : 'border-primary/10 bg-white dark:bg-background-dark/50'}`}
                  onClick={() => setSelected(opt.label)}
                >
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-slate-800 dark:text-slate-200">{opt.label}</span>
                    {opt.sub && <span className="text-xs text-slate-500">{opt.sub}</span>}
                  </div>
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${selected === opt.label ? 'border-primary bg-primary' : 'border-primary/30'}`}>
                    <div className={`h-2 w-2 rounded-full bg-white transition-opacity ${selected === opt.label ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center spring-in">
            <div className="mb-8 relative">
              <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1 bg-white dark:bg-slate-800 shadow-lg">
                <img 
                    alt="Candidate portrait" 
                    className="w-full h-full rounded-full object-cover" 
                    src={portraitImg}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-md flex items-center justify-center border-2 border-background-light">
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>
            <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-bold leading-tight pb-3">
              Will you be voting for <span className="text-primary">Amarachi Aguinam</span>?
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg px-4 mb-10">
              400L Software Engineering Senator Candidate
            </p>
            <div className="flex flex-col gap-4 w-full">
              <button 
                className="flex items-center justify-center gap-3 overflow-hidden rounded-xl h-16 px-6 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20 border-2 border-transparent active:scale-95 transition-all hover:bg-primary/90"
                onClick={() => { setIsRecording(true); setTimeout(() => onFinal(true), 1500); }}
              >
                <span className="text-2xl">✅</span>
                <span>Yes, I will!</span>
              </button>
              <button 
                className="flex items-center justify-center gap-3 overflow-hidden rounded-xl h-16 px-6 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-lg font-bold shadow-sm border-2 border-primary/30 active:scale-95 transition-all hover:bg-primary/5"
                onClick={() => { setIsRecording(true); setTimeout(() => onFinal(false), 1500); }}
              >
                <span className="text-2xl">🤔</span>
                <span>Still deciding</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      {!isFinalStep && (
        <footer className="p-6 pb-10">
          <button 
            id="next-btn"
            className="w-full flex h-14 items-center justify-center rounded-xl bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95"
            onClick={handleNextClick}
          >
            <span>{currentStep === data.length - 1 ? 'Final Step' : 'Next Step'}</span>
            <span className="material-symbols-outlined ml-2">chevron_right</span>
          </button>
          <p className="text-center text-slate-400 text-xs mt-6 font-medium">Your response will be used to shape our 2024 agenda.</p>
        </footer>
      )}
    </div>
  );
};

export default Poll;
