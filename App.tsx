
import React, { useState } from 'react';
import { AppView } from './types';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import MainSite from './components/MainSite';
import { IMAGES, EXPERT_NAME, WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('LANDING');
  const [quizData, setQuizData] = useState<string[]>([]);

  const startQuiz = () => setView('QUIZ');
  const goToMainSite = () => setView('MAIN_SITE');
  const openWhatsApp = () => window.open(WHATSAPP_LINK, '_blank');
  
  const handleQuizComplete = (answers: string[]) => {
    setQuizData(answers);
    setView('LOADING');
    setTimeout(() => {
      setView('RESULT');
    }, 2500);
  };

  if (view === 'LANDING') {
    return (
      <div className="min-h-screen relative flex flex-col items-center justify-center p-8 overflow-hidden bg-[#fcfaf7]">
        {/* Background Sophistication */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-15 grayscale transition-transform duration-[20s] scale-110 animate-slowZoom"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#fcfaf7] via-transparent to-[#fcfaf7] z-[1]" />

        <div className="relative z-10 w-full max-w-lg text-center flex flex-col items-center gap-10">
          <header className="animate-fadeIn">
            <span className="text-[#8b5e3c] text-[10px] tracking-[0.5em] uppercase mb-4 font-black block">The Experience</span>
            <h1 className="text-5xl md:text-6xl font-serif italic text-[#2d1e17] leading-tight mb-2 drop-shadow-sm">
              Dra. {EXPERT_NAME}
            </h1>
            <div className="w-12 h-[1px] bg-[#8b5e3c]/30 mx-auto mt-4" />
          </header>

          <p className="text-[#4a3728] text-xl font-light leading-relaxed max-w-sm">
            Descubra o caminho para sua melhor versão através de uma avaliação <span className="italic font-serif font-medium">exclusiva e personalizada</span>.
          </p>

          <div className="flex flex-col gap-5 w-full max-w-sm">
            {/* Botão Principal: Quiz */}
            <button 
              onClick={startQuiz}
              className="group relative w-full py-6 px-8 rounded-full text-white font-bold text-lg shadow-[0_20px_40px_-10px_rgba(139,94,60,0.4)] transition-all active:scale-[0.98] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8b5e3c 0%, #b58963 100%)' }}
            >
              <div className="relative z-10">INICIAR AVALIAÇÃO EXCLUSIVA</div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Botão Secundário: WhatsApp */}
            <button 
              onClick={openWhatsApp}
              className="w-full py-5 px-8 rounded-full border border-[#25D366]/40 bg-white/40 text-[#128C7E] font-bold text-lg shadow-sm transition-all active:scale-95 flex items-center justify-center gap-3 backdrop-blur-sm hover:bg-[#25D366]/5"
            >
              <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-2.32 0-4.591 1.342-4.591 3.234 0 .463.102.906.305 1.322l-1.545 2.561 2.592-1.545c.414.203.858.306 1.321.306 2.321 0 4.592-1.341 4.592-3.233s-2.271-3.233-4.592-3.233h-.074zm0-1.172c2.965 0 5.763 1.637 5.763 4.405 0 2.768-2.798 4.405-5.763 4.405-.591 0-1.157-.065-1.688-.201l-3.344 2.052 1.969-3.344c-.201-.591-.266-1.157-.266-1.688 0-2.965 1.637-5.763 4.405-5.763 2.768 0 4.405 1.637 4.405 4.405s-1.637 4.405-4.405 4.405zm-11.031 7c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z"/>
              </svg>
              WHATSAPP DIRETO
            </button>
            
            {/* Link terciário: Site Direto */}
            <button 
              onClick={goToMainSite}
              className="w-full py-2 px-8 text-[#2d1e17]/50 font-bold text-[10px] tracking-[0.3em] transition-all hover:text-[#8b5e3c] active:scale-95 uppercase mt-2"
            >
              Pular para o conteúdo principal
            </button>
          </div>

          <footer className="mt-8 text-[#8b5e3c]/40 text-[9px] uppercase tracking-[0.4em] font-bold">
            Refinement • Art • Science
          </footer>
        </div>
        
        <style>{`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .animate-slowZoom {
            animation: slowZoom 30s ease-in-out infinite alternate;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.2s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  if (view === 'QUIZ') {
    return <Quiz onComplete={handleQuizComplete} onSkip={goToMainSite} />;
  }

  if (view === 'LOADING') {
    return (
      <div className="min-h-screen bg-[#fcfaf7] flex flex-col items-center justify-center p-8 text-center">
        <div className="relative w-24 h-24 mb-10">
          <div className="absolute inset-0 border-t-2 border-[#8b5e3c]/30 rounded-full"></div>
          <div className="absolute inset-0 border-t-2 border-[#8b5e3c] rounded-full animate-spin"></div>
        </div>
        <h2 className="text-3xl font-serif italic text-[#2d1e17] mb-6 animate-pulse">Analisando Perfil...</h2>
        <div className="w-full max-w-xs h-[2px] bg-[#8b5e3c]/10 rounded-full overflow-hidden">
          <div className="h-full animate-[loading_2.5s_cubic-bezier(0.65,0,0.35,1)]" style={{ width: '100%', transformOrigin: 'left', background: '#8b5e3c' }}></div>
        </div>
        <style>{`
          @keyframes loading {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
        `}</style>
      </div>
    );
  }

  if (view === 'RESULT') {
    return <ResultPage answers={quizData} onContinue={goToMainSite} />;
  }

  return <MainSite />;
};

export default App;