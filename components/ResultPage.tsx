
import React from 'react';
import { IMAGES, EXPERT_NAME, WHATSAPP_LINK } from '../constants';

interface ResultPageProps {
  answers: string[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  const handleWhatsAppWithQuiz = (withEvaluation: boolean) => {
    if (withEvaluation) {
      const text = `Olá Dra. Crystal! Acabei de completar o quiz no site. Meus objetivos: ${answers.join(', ')}. Gostaria de saber mais sobre seu método.`;
      window.open(`${WHATSAPP_LINK}&text=${encodeURIComponent(text)}`, '_blank');
    } else {
      window.open(WHATSAPP_LINK, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8b5e3c]/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-sm flex flex-col items-center gap-5 animate-fadeIn relative z-10">
        
        {/* Top Highlight Badge & Headline - More Compact */}
        <header className="text-center space-y-3">
          <div className="inline-block py-1.5 px-4 rounded-full bg-[#8b5e3c] text-white text-[9px] font-black tracking-[0.3em] uppercase shadow-md animate-pulse">
            Perfil Compatível • Paciente Ideal
          </div>
          <h1 className="text-xl md:text-2xl font-serif italic text-[#2d1e17] leading-tight px-2 font-bold">
            "O Método Dra. {EXPERT_NAME} é o ideal para a naturalidade que você busca."
          </h1>
          <p className="text-[#4a3728] text-[10px] font-bold tracking-[0.2em] opacity-60 uppercase">Análise de Compatibilidade Concluída</p>
        </header>

        {/* Hero Image - Compact Luxury Frame */}
        <div className="relative w-44 h-56 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-1">
          <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d1e17]/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-0 right-0 text-center">
             <p className="text-white font-signature text-xl leading-none">{EXPERT_NAME}</p>
             <p className="text-white/60 text-[7px] uppercase tracking-widest font-black mt-0.5">Sua Próxima Transformação</p>
          </div>
        </div>

        {/* Context Text - Short & Powerful */}
        <p className="text-[#4a3728] text-xs text-center px-4 leading-relaxed font-medium">
          Com base no seu perfil, você é elegível para uma <span className="text-[#8b5e3c] font-bold">consultoria personalizada</span> exclusiva.
        </p>

        {/* CTA Buttons - Compact Grouping */}
        <div className="w-full space-y-3 px-2">
          <button 
            onClick={() => handleWhatsAppWithQuiz(true)}
            className="group relative w-full py-4 px-6 rounded-2xl text-white font-bold text-sm shadow-xl active:scale-95 transition-all overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #8b5e3c 0%, #b58963 100%)' }}
          >
            <span className="relative z-10">ENVIAR MINHA AVALIAÇÃO AGORA</span>
            <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>

          <button 
            onClick={() => handleWhatsAppWithQuiz(false)}
            className="w-full py-4 px-6 rounded-2xl bg-white/80 backdrop-blur-sm text-[#2d1e17] font-bold text-sm active:scale-95 transition-all border border-[#8b5e3c]/20 shadow-sm hover:border-[#8b5e3c]/40"
          >
            FALAR SEM COMPROMISSO
          </button>

          <button 
            onClick={onContinue}
            className="w-full py-2 px-6 text-[#8b5e3c]/60 font-black text-[9px] tracking-[0.2em] uppercase active:scale-95 transition-all hover:text-[#8b5e3c]"
          >
            Continuar para o site
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ResultPage;
