
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, IMAGES, EXPERT_NAME } from '../constants';

interface QuizProps {
  onComplete: (answers: string[]) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-[#fcfaf7] relative flex flex-col overflow-hidden">
      {/* Background Hero Image - Faded */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
        <img src={IMAGES.hero} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col p-4 max-w-md mx-auto w-full">
        {/* Compact Header */}
        <header className="flex items-center justify-between mb-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-[#8b5e3c] overflow-hidden shadow-md">
              <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#8b5e3c] text-[8px] tracking-widest uppercase font-bold leading-none">Avaliação Pessoal</p>
              <h3 className="text-[#2d1e17] text-xs font-serif font-bold">Dra. {EXPERT_NAME}</h3>
            </div>
          </div>
          <button onClick={onSkip} className="text-[#8b5e3c] text-[10px] font-bold uppercase tracking-widest">Pular Quiz</button>
        </header>

        {/* Progress Bar - More Compact */}
        <div className="mb-4">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[#4a3728] text-[10px] uppercase tracking-wider font-semibold opacity-70">
              Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-[#8b5e3c] font-bold text-[10px]">{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-[#8b5e3c]/10 rounded-full w-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%`, background: '#8b5e3c' }}
            />
          </div>
        </div>

        {/* Question Area - Optimized for Height */}
        <div className="flex-1 flex flex-col justify-center animate-fadeIn py-2">
          <h2 className="text-xl md:text-2xl text-[#2d1e17] font-serif italic mb-6 leading-tight text-center">
            {QUIZ_QUESTIONS[currentStep].text}
          </h2>

          <div className="grid gap-3">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full py-4 px-5 rounded-xl bg-white/80 backdrop-blur-sm text-center text-[#2d1e17] text-sm font-semibold transition-all hover:border-[#8b5e3c] active:scale-[0.97] border border-[#8b5e3c]/10 shadow-sm"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Small detail at bottom */}
        <footer className="mt-auto py-4 text-center">
          <p className="text-[#8b5e3c]/40 text-[8px] uppercase tracking-widest font-bold">Método Crystal Santos • Exclusividade em cada detalhe</p>
        </footer>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Quiz;
