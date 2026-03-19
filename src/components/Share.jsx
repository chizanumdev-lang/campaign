import React from 'react';

const Share = ({ onClose }) => {
  const shareMessage = "Hey! I just shared my thoughts on the SE Senator election. Take the poll here and let your voice be heard!";
  const shareUrl = window.location.href;

  const handleShare = (platform) => {
    let url = '';
    switch(platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl + '\n' + shareMessage);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose}></div>
        
        {/* Modal Container */}
        <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl pb-12 transition-all duration-500 ease-out spring-in border border-white/10 overflow-hidden">
            <div className="flex justify-center pt-3 pb-6">
                <div className="w-10 h-1.5 bg-slate-400/20 rounded-full"></div>
            </div>
            
            <div className="px-6">
                <h3 className="text-slate-900 dark:text-white text-[28px] font-bold text-center mb-8 font-display">Spread the Word</h3>
                
                <div className="grid grid-cols-4 gap-4 mb-10 px-2">
                    <div className="flex flex-col items-center gap-2.5" onClick={() => handleShare('whatsapp')}>
                        <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-[#25D366] shadow-sm border border-slate-200 dark:border-slate-700 cursor-pointer hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.54 4.187 1.564 6.007L0 24l6.142-1.612a11.821 11.821 0 005.904 1.569h.005c6.632 0 12.028-5.398 12.033-12.033 0-3.212-1.25-6.232-3.522-8.508z"></path>
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">WhatsApp</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2.5" onClick={() => handleShare('twitter')}>
                        <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700 cursor-pointer hover:scale-110 transition-transform">
                            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Twitter</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2.5" onClick={() => handleShare('copy')}>
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-sm border border-primary/20 cursor-pointer hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">link</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Copy Link</span>
                    </div>

                    <div className="flex flex-col items-center gap-2.5">
                        <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-[#E4405F] shadow-sm border border-slate-200 dark:border-slate-700 cursor-pointer hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Instagram</span>
                    </div>
                </div>
                
                <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] font-sans">Draft Message</span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-200 font-sans leading-relaxed text-[15px] font-medium italic">
                        "{shareMessage}"
                    </p>
                </div>
                
                <button 
                  onClick={() => handleShare('whatsapp')}
                  className="w-full bg-primary text-white font-bold py-5 px-6 rounded-2xl flex items-center justify-center gap-3 font-sans shadow-xl active:scale-[0.98] transition-all hover:opacity-90"
                >
                    <span className="material-symbols-outlined text-2xl">send</span>
                    <span className="text-lg tracking-tight">Share to Friends</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default Share;
