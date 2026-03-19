import React from 'react';
import campaignImg from '../Gemini_Generated_Image_7qduno7qduno7qdu.png';

const ThankYou = ({ onShare }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-background-light dark:bg-background-dark max-w-[430px] mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between z-10">
        <div className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">Campaign Update</h2>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 relative py-10">
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow pointer-events-none opacity-50"></div>
        
        {/* Main Icon */}
        <div className="relative mb-8 bounce-drop">
          <div className="w-32 h-32 bg-primary/20 dark:bg-primary/10 rounded-full flex items-center justify-center relative z-10">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-5xl !font-bold">how_to_reg</span>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/40 rounded-full blur-sm"></div>
          <div className="absolute -bottom-1 -left-4 w-12 h-12 bg-primary/30 rounded-full blur-md"></div>
        </div>
        
        {/* Message */}
        <div className="text-center space-y-4 z-10">
          <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-extrabold leading-[1.1] tracking-tight fade-up">
            Thank you for your voice, <span className="text-primary italic block">Amarachi for Senator</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[280px] mx-auto fade-up stagger-1">
            Your contribution helps shape the future of the Software Engineering department.
          </p>
        </div>

        {/* Action Card */}
        <div className="mt-12 w-full bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-sm border border-primary/10 fade-up stagger-2">
          <div className="flex items-center gap-4 mb-6 text-left">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-slate-100 font-bold">Spread the Word</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Help us reach more students across the 400L block.</p>
            </div>
          </div>
          
          <button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 relative overflow-hidden transition-all active:scale-[0.98] shimmer-btn"
            onClick={onShare}
          >
            <span className="material-symbols-outlined">share</span>
            <span className="text-lg">Share Poll with Classmates</span>
          </button>
        </div>

        {/* Campaign Image */}
        <div className="mt-8 w-full fade-up stagger-3">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md border-4 border-white dark:border-slate-800">
            <img 
              alt="University students collaborating" 
              className="w-full h-full object-cover" 
              src={campaignImg} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
