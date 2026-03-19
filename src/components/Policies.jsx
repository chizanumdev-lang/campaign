import React from 'react';
import policy1Img from '../academic-support.png';
import policy2Img from '../student-welfare.png';
import policy3Img from '../Gemini_Generated_Image_5v65bx5v65bx5v65.png';
import policy4Img from '../class-unity.png';


const policies = [
  { 
    icon: 'school', 
    title: 'Academic Support', 
    desc: 'I will introduce one-on-one tutoring sessions for students who feel more comfortable learning in a personal setting. This initiative will encourage peer support and make academic help more accessible.',
    img: policy1Img
  },
  { 
    icon: 'favorite', 
    title: 'Student Welfare', 
    desc: 'I will create space for regular check-ins and discussion sessions where students can express their concerns, share ideas, and feel heard. These conversations will help me better understand the needs of the class and respond intentionally.',
    img: policy2Img
  },
  { 
    icon: 'chat', 
    title: 'Clear Communication', 
    desc: 'I will ensure that important updates, opportunities, and information are passed across clearly and promptly, so every student stays informed.',
    img: policy3Img
  },
  { 
    icon: 'groups', 
    title: 'Class Unity', 
    desc: 'As we approach the end of our journey together, I want to strengthen the bond within our class and help create a final year experience that feels more connected, inclusive, and meaningful.',
    img: policy4Img // Reusing an image since I only have 3 generated ones
  }
];

const Policies = () => {
  return (
    <section className="py-12 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-slate-950 dark:text-white text-4xl font-black leading-tight tracking-tight mb-12 fade-up">Our Shared Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {policies.map((p, i) => (
          <div key={i} className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-transform hover:scale-[1.01] fade-up stagger-${i}`}>
            <div className="w-full bg-center bg-no-repeat h-48 bg-cover" style={{ backgroundImage: `url("${p.img}")` }}></div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">{p.icon}</span>
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">{p.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {p.desc}
              </p>
              <a 
                href="https://wa.me/2348060738014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex w-fit items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Policies;
