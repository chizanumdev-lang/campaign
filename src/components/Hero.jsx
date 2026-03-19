import React from 'react';
import heroImg from '../Gemini_Generated_Image_kdq976kdq976kdq9.png';

const Hero = ({ onStart }) => {
  return (
    <div className="flex flex-col gap-12 py-12 px-6">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div 
          className="w-full lg:w-1/2 bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-3xl shadow-2xl border-8 border-white dark:border-slate-800 fade-up transition-transform hover:scale-[1.02]"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>

        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-3 bg-primary/10 w-fit px-4 py-2 rounded-full border border-primary/20 fade-up">
              <span className="material-symbols-outlined text-primary text-sm">campaign</span>
              <span className="text-primary font-black text-xs uppercase tracking-widest">Senator Campaign 2024</span>
            </div>
            <h1 className="text-slate-950 dark:text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter fade-up stagger-1">
              Voting for <br/><span className="text-primary">Amarachi Agunnam</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-xl lg:text-2xl font-medium leading-relaxed max-w-xl fade-up stagger-2">
              Your voice shapes my agenda. Together, we build a better engineering culture for 400L Software Engineering.
            </p>
          </div>
          <button 
            className="flex w-full lg:w-fit cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-12 bg-primary text-white text-xl font-bold shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all fade-up stagger-3 pulse border-2 border-primary/20"
            onClick={onStart}
          >
            <span className="truncate">Take the Campaign Poll</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
