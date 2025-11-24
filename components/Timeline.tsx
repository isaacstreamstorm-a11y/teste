import React from 'react';
import { TIMELINE } from '../constants';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-darkPurple to-brand-purple overflow-hidden relative">
      {/* Background Curves SVG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
             <path fill="#fff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V96Z"></path>
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">Linha do tempo</h2>
          <p className="text-purple-200">da Guia Fácil e-Marketing</p>
        </div>

        {/* Desktop Wave Timeline Representation */}
        <div className="hidden lg:flex justify-between items-center relative mt-24">
            {/* The line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 rounded-full"></div>
            
            {TIMELINE.map((event, index) => {
                const isTop = index % 2 === 0;
                return (
                    <div key={index} className="relative flex flex-col items-center group w-32">
                        {/* Point */}
                        <div className="w-6 h-6 bg-white rounded-full z-10 border-4 border-brand-purple shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                        
                        {/* Card */}
                        <div className={`absolute w-48 text-center transition-all duration-300 opacity-80 group-hover:opacity-100 ${isTop ? 'bottom-10' : 'top-10'}`}>
                             <h3 className="text-2xl font-bold text-white mb-1">{event.year}</h3>
                             <p className="text-sm font-bold text-purple-100 mb-1">{event.title}</p>
                             <p className="text-xs text-purple-200 leading-tight">{event.description}</p>
                        </div>
                        
                        {/* Connecting Line */}
                        <div className={`absolute left-1/2 w-0.5 h-10 bg-white/20 -translate-x-1/2 ${isTop ? 'bottom-6' : 'top-6'}`}></div>
                    </div>
                )
            })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-8 pl-4 border-l-2 border-white/20">
            {TIMELINE.map((event, index) => (
                <div key={index} className="relative pl-6">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white rounded-full border-2 border-brand-purple"></div>
                    <span className="text-3xl font-bold text-white block mb-2">{event.year}</span>
                    <h4 className="text-lg font-bold text-purple-100">{event.title}</h4>
                    <p className="text-purple-200 text-sm">{event.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};