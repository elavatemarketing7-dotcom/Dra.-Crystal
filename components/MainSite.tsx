
import React from 'react';
import { 
  EXPERT_NAME, 
  IMAGES, 
  WHATSAPP_LINK, 
  GALLERY_RESULTS, 
  TRUST_CARDS, 
  OTHER_PROOFS, 
  TESTIMONIALS,
  LOCATION,
  INSTAGRAM_LINK
} from '../constants';

const MainSite: React.FC = () => {
  const sections = [
    { id: 'sobre', label: 'THE EXPERT' },
    { id: 'resultados', label: 'PORTFOLIO' },
    { id: 'metodo', label: 'PHILOSOPHY' },
    { id: 'depoimentos', label: 'SOCIETY' },
    { id: 'local', label: 'LOCATION' },
    { id: 'contato', label: 'BOOKING' }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fcfaf7] min-h-screen">
      {/* Premium Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#8b5e3c]/5 py-5 overflow-hidden shadow-sm">
        <div className="marquee-content flex gap-12 px-6 items-center">
          {[...sections, ...sections].map((section, idx) => (
            <button
              key={`${section.id}-${idx}`}
              onClick={() => scrollToSection(section.id)}
              className="text-[#2d1e17]/40 text-[9px] font-black tracking-[0.4em] whitespace-nowrap hover:text-[#8b5e3c] transition-all uppercase"
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section - Magazine Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-end p-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf7] via-[#fcfaf7]/30 to-black/5" />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="relative z-10 max-w-4xl w-full mb-16 animate-heroIn">
          <span className="inline-block py-2 px-6 rounded-full bg-[#8b5e3c] text-white text-[9px] tracking-[0.5em] uppercase font-black mb-8 shadow-2xl">
            Sua Beleza, Nosso Propósito
          </span>
          
          <h1 className="text-6xl md:text-8xl font-serif italic text-[#2d1e17] mb-8 leading-[0.95] font-bold tracking-tight">
            Dra. {EXPERT_NAME} <br/> 
            <span className="text-[#8b5e3c] text-4xl md:text-6xl block mt-4 opacity-90 drop-shadow-sm">A Arte da Naturalidade.</span>
          </h1>
          
          <p className="text-[#2d1e17] text-lg md:text-2xl mb-12 font-medium max-w-xl mx-auto leading-relaxed">
            Harmonização Facial de alta performance com resultados que <span className="italic font-serif opacity-80 border-b border-[#8b5e3c]/30">não parecem</span> procedimentos.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block py-7 px-16 rounded-full text-white font-bold text-xl shadow-[0_30px_60px_-15px_rgba(139,94,60,0.5)] active:scale-95 transition-all hover:-translate-y-1 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8b5e3c 0%, #b58963 100%)' }}
            >
              <span className="relative z-10">AGENDAR EXPERIÊNCIA</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </a>
            <p className="text-[#8b5e3c] text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Consultas Exclusivas • Rio de Janeiro</p>
          </div>
        </div>
      </section>

      {/* Video Section - Cinematic Focus */}
      <section className="py-32 px-6 bg-white" id="video">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-5/12 aspect-[9/16] rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(45,30,23,0.3)] relative border-[12px] border-[#fcfaf7]">
            <video 
              src={IMAGES.video} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-white/20 rounded-[28px]" />
          </div>
          <div className="w-full md:w-7/12 text-center md:text-left space-y-10">
            <h3 className="text-[#8b5e3c] text-[10px] font-black tracking-[0.5em] uppercase">Behind the Scenes</h3>
            <p className="text-[#2d1e17] text-3xl md:text-4xl font-light italic leading-[1.3] font-serif pr-8">
              "Beleza realçada com <span className="font-bold border-b-2 border-[#8b5e3c]/20">técnica, sensibilidade e propósito</span>. Resultados que transformam sem apagar quem você é."
            </p>
            <div className="flex justify-center md:justify-start">
               <div className="w-20 h-[1px] bg-[#8b5e3c]/20" />
            </div>
            <p className="text-[#4a3728] text-lg font-light leading-relaxed opacity-70">
              Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única.
            </p>
          </div>
        </div>
      </section>

      {/* Who Am I - Narrative Style */}
      <section className="py-32 px-6 relative bg-[#fcfaf7]" id="sobre">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#8b5e3c]/5 rounded-full blur-3xl" />
             <div className="grid grid-cols-2 gap-6 relative z-10">
               <img src={IMAGES.about1} alt="Crystal" className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover mt-12 transform -rotate-2" />
               <img src={IMAGES.about2} alt="Espaço" className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover transform rotate-2" />
             </div>
          </div>
          <div className="space-y-10">
            <span className="text-[#8b5e3c] text-[10px] font-black tracking-[0.5em] uppercase">The Expert</span>
            <h2 className="text-5xl font-serif italic text-[#2d1e17] leading-tight">Propósito Além <br/>da Estética.</h2>
            <p className="text-[#4a3728] font-light leading-relaxed text-xl">
              Minha missão é devolver a autoestima através de um olhar clínico apurado e uma mão artística. Não trabalho com padrões, trabalho com a <span className="font-bold text-[#8b5e3c]">sua essência</span>.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "Expertise", text: "Formação em centros de excelência." },
                { label: "Exclusive Method", text: "Protocolos personalizados e únicos." },
                { label: "Natural Result", text: "Foco total na harmonia facial real." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#8b5e3c] mt-2.5 shadow-[0_0_10px_#8b5e3c]" />
                   <div>
                     <h4 className="text-[#2d1e17] font-black text-[10px] uppercase tracking-widest mb-1">{item.label}</h4>
                     <p className="text-[#4a3728] text-sm opacity-60">{item.text}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Portfolio - High End Scrolling */}
      <section className="py-32 bg-white overflow-hidden" id="resultados">
        <div className="max-w-6xl mx-auto text-center mb-24 px-6">
          <h2 className="text-[#8b5e3c] text-[10px] font-black tracking-[0.5em] uppercase mb-6">Gallery of Art</h2>
          <h3 className="text-5xl font-serif italic text-[#2d1e17] mb-4">Portfólio de Transformações</h3>
          <p className="text-[#4a3728]/40 text-xs font-black uppercase tracking-[0.2em]">Seleção Exclusiva Dra. Crystal Santos</p>
        </div>

        <div className="relative group">
          <div className="gallery-marquee flex gap-8">
            {[...GALLERY_RESULTS, ...GALLERY_RESULTS].map((img, i) => (
              <div 
                key={i} 
                className="w-[350px] aspect-square rounded-[40px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(45,30,23,0.15)] transition-transform duration-700 hover:scale-[1.03] flex-shrink-0"
              >
                <img 
                  src={img} 
                  alt={`Portfolio ${i+1}`} 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            ))}
          </div>
          {/* Subtle Side Overlays for focus */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-[#fcfaf7]" id="metodo">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {TRUST_CARDS.map((card, i) => (
              <div key={i} className="group p-10 rounded-[40px] bg-white shadow-sm hover:shadow-2xl transition-all duration-700 border border-[#8b5e3c]/5 hover:-translate-y-2">
                <div className="text-[#8b5e3c] text-3xl font-serif italic mb-8 opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                <h4 className="text-[#2d1e17] text-2xl font-serif italic font-bold mb-4">{card.title}</h4>
                <p className="text-[#4a3728] text-base leading-relaxed opacity-60 font-light">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Society / Testimonials - Editorial Grid */}
      <section className="py-32 px-6 bg-white" id="depoimentos">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-[#8b5e3c] text-[10px] font-black tracking-[0.5em] uppercase mb-6">Society</h2>
          <h3 className="text-5xl font-serif italic text-[#2d1e17]">Vozes que Inspiram</h3>
          <p className="text-[#4a3728]/50 text-base mt-4 font-light">A satisfação das nossas pacientes é o nosso maior legado.</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
            {TESTIMONIALS.map((img, i) => (
              <div 
                key={i} 
                className="break-inside-avoid rounded-[40px] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2"
              >
                <img 
                  src={img} 
                  alt={`Depoimento ${i+1}`} 
                  className="w-full h-auto block" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed Style Grid */}
      <section className="py-32 px-6 bg-[#fcfaf7]" id="provas">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_PROOFS.map((img, i) => (
            <div key={i} className="aspect-square rounded-[30px] overflow-hidden shadow-xl border border-white">
              <img src={img} alt={`Social ${i}`} className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" />
            </div>
          ))}
        </div>
      </section>

      {/* Map - Integrated Seamlessly */}
      <section className="py-32 px-6 bg-white" id="local">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <span className="text-[#8b5e3c] text-[10px] font-black tracking-[0.5em] uppercase">The Sanctuary</span>
               <h2 className="text-5xl font-serif italic text-[#2d1e17]">Localização <br/>Privilegiada</h2>
               <div className="space-y-2">
                 <p className="text-[#2d1e17] text-2xl font-serif font-bold italic">{LOCATION}</p>
                 <p className="text-[#4a3728] opacity-60 font-light">Atendimento com hora marcada em ambiente de luxo e total privacidade.</p>
               </div>
               <a 
                 href={WHATSAPP_LINK}
                 target="_blank"
                 className="inline-block border-b-2 border-[#8b5e3c] pb-2 text-[#8b5e3c] font-black text-[10px] tracking-[0.4em] uppercase hover:opacity-70 transition-opacity"
               >
                 Abrir no Google Maps
               </a>
             </div>
             <div className="w-full h-[500px] rounded-[50px] overflow-hidden shadow-[0_50px_100px_-30px_rgba(45,30,23,0.3)] grayscale-[0.8] hover:grayscale-0 transition-all duration-[2s]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117606.31174627237!2d-43.305419999999995!3d-22.906411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f251d85272f76f!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1715694857412!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* Final Booking CTA */}
      <section className="py-48 px-6 text-center relative overflow-hidden bg-[#2d1e17]" id="contato">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8b5e3c] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-tight">Agende sua <br/>Avaliação.</h2>
          <p className="text-white/60 text-xl font-light max-w-xl mx-auto leading-relaxed">
            Sinta-se segura com quem é referência em naturalidade e técnica refinada no Rio de Janeiro.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-8 px-20 rounded-full text-white font-bold text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
            style={{ background: 'linear-gradient(135deg, #8b5e3c 0%, #b58963 100%)' }}
          >
            QUERO AGENDAR AGORA
          </a>
        </div>
      </section>

      {/* Footer - Minimalist Luxury */}
      <footer className="py-24 px-6 border-t border-[#8b5e3c]/5 bg-white text-center">
        <div className="max-w-lg mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif italic text-[#2d1e17] font-bold">Dra. {EXPERT_NAME}</h2>
            <p className="text-[#8b5e3c] text-[10px] font-black uppercase tracking-[0.5em]">Harmonização Facial de Alta Performance</p>
          </div>
          
          <div className="flex justify-center gap-12">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-[#2d1e17] text-[10px] font-black uppercase tracking-widest hover:text-[#8b5e3c] transition-colors">Instagram</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#2d1e17] text-[10px] font-black uppercase tracking-widest hover:text-[#8b5e3c] transition-colors">WhatsApp</a>
          </div>

          <div className="pt-12">
            <p className="text-[9px] text-[#2d1e17]/30 uppercase tracking-[0.4em] font-black">
              © 2024 • Crystal Santos • All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-heroIn {
          animation: heroIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default MainSite;