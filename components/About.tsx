import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
           <span className="text-brand-purple font-bold tracking-wider text-sm uppercase">Sobre a</span>
           <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-white">Guia Fácil e-Marketing</h2>
           
           <p className="text-gray-300 leading-relaxed mb-6">
             Com mais de 28 anos de atuação e 80 mil clientes atendidos, oferecemos soluções em marketing para os mais variados segmentos do mercado em todo o Brasil.
           </p>
           
           <p className="text-gray-300 leading-relaxed mb-8">
             Ganhamos 2 vezes o título de Melhor Qualidade de Contas Google Ads da América Latina disputado entre os parceiros com o selo Premier Partner Google Ads para PMEs.
           </p>

           <div className="inline-block bg-white px-4 py-2 rounded shadow-sm">
               <span className="text-blue-500 font-bold text-xl">Google</span> <span className="text-gray-600 font-bold">Partner</span>
           </div>
        </div>

        <div className="relative">
             <div className="absolute inset-0 bg-brand-purple/20 transform rotate-3 rounded-3xl"></div>
             <img 
               src="https://picsum.photos/600/400?random=team" 
               alt="Team working" 
               className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
             />
             <div className="absolute -bottom-6 -right-6 bg-[#222] p-4 rounded-xl border border-gray-700 shadow-xl">
                 <p className="text-white font-bold text-lg">GUIA FÁCIL</p>
                 <p className="text-gray-400 text-xs">e-marketing</p>
             </div>
        </div>
      </div>
    </section>
  );
};