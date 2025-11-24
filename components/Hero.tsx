import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-dark">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Muito Mais Que Uma <br />
            <span className="gradient-text">Agência De Marketing</span>
          </h1>
          <p className="text-gray-400 text-lg md:max-w-xl">
            Não apenas gerenciamos sua presença online, nós potencializamos seu negócio com estratégias comprovadas e campanhas eficientes.
          </p>
          
          <div className="flex items-center gap-4 py-4">
             <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <img key={i} src={`https://picsum.photos/50/50?random=${i+20}`} className="w-10 h-10 rounded-full border-2 border-brand-dark" alt="User" />
               ))}
             </div>
             <div className="text-sm text-gray-400">
               <span className="text-brand-purple font-bold">+ 80.000</span> empresas <br/> confiam em nossos serviços
             </div>
          </div>

          <button className="bg-brand-green hover:bg-green-500 text-white font-bold py-4 px-8 rounded-md transition-all transform hover:scale-105 shadow-lg shadow-green-900/50 uppercase tracking-wide">
            AGENDAR CONSULTORIA
          </button>
        </div>

        <div className="relative hidden md:block">
           {/* Abstract Phone/App Representation */}
           <div className="relative mx-auto w-full max-w-md h-[500px] bg-gradient-to-b from-gray-800 to-black rounded-[3rem] border-8 border-gray-900 shadow-2xl p-4 flex flex-col justify-end overflow-hidden">
              <img src="https://picsum.photos/600/800?random=hero" alt="App interface" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
              <div className="relative z-10 bg-brand-dark/80 backdrop-blur p-4 rounded-2xl mb-8 border border-white/10">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white font-bold">GF</div>
                     <div>
                        <p className="font-bold text-white text-sm">Crescimento Confirmado</p>
                        <p className="text-green-400 text-xs">+125% este mês</p>
                     </div>
                  </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-10 -right-12 bg-brand-purple text-white p-3 rounded-lg text-xs font-bold shadow-lg transform rotate-12">
                 +28 Anos de Experiência
              </div>
              <div className="absolute bottom-32 -left-12 bg-blue-600 text-white p-3 rounded-lg text-xs font-bold shadow-lg transform -rotate-6">
                 +80 mil Clientes
              </div>
           </div>
        </div>
      </div>
      
      {/* Logos Bar - Custom implementation matching the reference */}
      <div className="container mx-auto px-6 mt-24">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Meta */}
            <div className="bg-[#151515] border border-white/5 rounded-2xl h-24 flex items-center justify-center gap-3 hover:border-white/20 transition-all duration-300 group cursor-default">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5.67c-1.57 0-2.88.5-3.8 1.45-1.5 1.55-1.9 3.53-3.7 3.53-1.07 0-1.87-.8-1.87-1.83 0-1.04.83-1.82 1.9-1.82.72 0 1.63.38 2.37.9.22.15.53.14.7-.08l.8-1.07c.2-.27.14-.64-.13-.84C7.38 5.2 6.13 4.7 4.9 4.7c-2.53 0-4.7 1.9-4.7 4.5s2.1 4.53 4.67 4.53c1.62 0 2.92-.5 3.86-1.48 1.5-1.56 1.9-3.55 3.73-3.55 1.03 0 1.83.8 1.83 1.83 0 1.04-.83 1.82-1.9 1.82-.72 0-1.63-.38-2.37-.9-.22-.15-.53-.14-.7.08l-.8 1.07c-.2.27-.14.64.13.84.9 0.7 2.15 1.2 3.38 1.2 2.53 0 4.7-1.9 4.7-4.5S20.5 5.67 17.93 5.67c-1.62 0-2.92.5-3.86 1.48z"/>
                </svg>
                <span className="text-white text-xl font-medium tracking-tight">Meta</span>
            </div>

            {/* Google Ads */}
            <div className="bg-[#151515] border border-white/5 rounded-2xl h-24 flex items-center justify-center gap-3 hover:border-white/20 transition-all duration-300 group cursor-default">
                <div className="relative w-8 h-8">
                   <svg viewBox="0 0 48 48" className="w-full h-full">
                       <path fill="#FBC02D" d="M29.8 22L42.2 44H32L21.8 25z" transform="rotate(-10 32 33)"/>
                       <path fill="#1976D2" d="M27.2 16L16.2 35l-9.5-17L21 2z"/>
                       <path fill="#43A047" d="M12.8 44H6l7.8-13.8L21 44z"/>
                   </svg>
                </div>
                <span className="text-white text-xl font-medium tracking-tight">Google Ads</span>
            </div>

            {/* Google Meu Negócio */}
            <div className="bg-[#151515] border border-white/5 rounded-2xl h-24 flex items-center justify-center gap-3 px-4 hover:border-white/20 transition-all duration-300 group cursor-default">
                <div className="flex flex-col items-start leading-tight">
                    <span className="text-white font-bold text-lg">Google</span>
                    <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wide">Meu Negócio</span>
                </div>
                {/* Store Icon */}
                <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 6H6c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V8c0-1.1-.9-2-2-2zm-6 9h-2v-2h2v2zm6-9v2H6V8h12zM5 12h14v8H5v-8zm2 2v4h2v-4H7zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z" opacity="0"/> 
                    {/* Better Storefront Path */}
                    <path d="M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.06c-.91 0-1.69.61-1.91 1.52L2.1 8.89c-.24 1.02.31 2.12 1.33 2.56.23.1.48.15.73.15.77 0 1.48-.46 1.79-1.16l.66-1.44h10.78l.66 1.44c.3.7.1.46 1.79 1.16.25 0 .5-.05.73-.15 1.02-.44 1.57-1.54 1.33-2.56zM20 12v8h-3v-6h-4v6H7v-8H5v10h14v-10h-2z" fill="white"/>
                    <text x="9" y="19" fontSize="6" fontWeight="bold" fill="#151515">G</text>
                </svg>
            </div>

            {/* GuiaFácil websites */}
            <div className="bg-[#151515] border border-white/5 rounded-2xl h-24 flex items-center justify-center gap-2 hover:border-white/20 transition-all duration-300 group cursor-default">
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <path d="M12 22s-8-4.5-8-11a8 8 0 1 1 16 0c0 6.5-8 11-8 11z" />
                   <circle cx="12" cy="10" r="4.5" strokeWidth="1"/>
                   <path d="M12 5.5a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 1 0-9" strokeWidth="1" strokeDasharray="1 1"/>
                   <path d="M8 10h8" strokeWidth="0.5"/>
                   <path d="M12 6v8" strokeWidth="0.5"/>
                </svg>
                <div className="flex flex-col items-start leading-none">
                    <span className="text-white font-bold text-lg">GuiaFácil</span>
                    <span className="text-gray-400 text-xs font-light self-end w-full text-right">websites</span>
                </div>
            </div>

            {/* guiafacil.com */}
            <div className="bg-[#151515] border border-white/5 rounded-2xl h-24 flex items-center justify-center gap-2 hover:border-white/20 transition-all duration-300 group cursor-default">
                <div className="relative">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="12" cy="12" r="9" />
                         <path d="M12 3a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                         <path d="M2 12h20" />
                    </svg>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white text-[8px] font-bold text-black flex items-center justify-center rounded-full border border-black">g</div>
                </div>
                <span className="text-white font-light text-lg">guiafacil.com</span>
            </div>

         </div>
      </div>
    </section>
  );
};