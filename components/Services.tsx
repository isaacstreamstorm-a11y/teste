import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como podemos <span className="text-white">te ajudar?</span>
          </h2>
          <p className="text-gray-400">Potencialize o seu negócio online com nosso serviços.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer">
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 to-brand-purple/20 group-hover:from-brand-darkPurple/90 transition-colors duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg inline-block mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white uppercase leading-tight">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <button className="bg-brand-green hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                FALAR COM ESPECIALISTA
            </button>
        </div>
      </div>
    </section>
  );
};