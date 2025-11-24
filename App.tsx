import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { AIChatBot } from './components/AIChatBot';

function App() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        
        {/* Value Proposition Strip */}
        <div className="bg-[#111] py-16 border-y border-white/5">
           <div className="container mx-auto px-6 text-center">
              <h3 className="text-2xl md:text-3xl font-medium">
                 Você cuida do seu negócio, e <span className="text-brand-purple font-bold">nós cuidamos da sua divulgação!</span>
              </h3>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                 Aumente a visibilidade do seu negócio no Google e atraia novos clientes para impulsionar suas vendas.
              </p>
              <button className="mt-8 bg-brand-green hover:bg-green-500 text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider transition-colors">
                 Conheça Nossas Soluções
              </button>
           </div>
        </div>

        <Stats />
        <Services />
        <About />
        <Timeline />
        
        {/* Testimonial Placeholder (Based on print layout) */}
        <section className="py-20 bg-[#0a0a0a]">
           <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
               <div>
                   <h2 className="text-4xl font-bold mb-4">O que nossos <br/> clientes dizem</h2>
                   <p className="text-gray-400">Depoimentos reais de quem já alcançou resultados incríveis conosco.</p>
               </div>
               <div className="bg-[#151515] p-8 rounded-2xl border border-brand-purple/30 relative">
                   <div className="text-brand-purple text-6xl font-serif absolute top-4 left-6">"</div>
                   <p className="text-gray-300 italic pt-8 pb-6 relative z-10">
                       Ótima experiência, profissionais qualificados e atenciosos! Possuem o melhor Website e fazem anúncios no Ads com excelência, nos trouxeram ótimos resultados.
                   </p>
                   <div className="flex items-center justify-between border-t border-white/10 pt-4">
                       <span className="font-bold text-white uppercase text-sm">Oppo Imóveis</span>
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                           <span className="text-black font-bold text-xs">LOGO</span>
                       </div>
                   </div>
               </div>
           </div>
        </section>

        {/* Purple Partnership Bar */}
        <div className="bg-gradient-to-r from-brand-purple to-blue-600 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8 text-center md:text-left">
                <div>
                   <span className="text-3xl font-bold text-white block">+80 mil</span>
                   <span className="text-white/80 text-sm">clientes atendidos</span>
                </div>
                <div className="flex gap-8 opacity-80 grayscale mix-blend-screen">
                    {/* Placeholder logos for partners in the blue bar */}
                    {[1,2,3].map(i => (
                        <div key={i} className="h-8 w-24 bg-white/30 rounded"></div>
                    ))}
                </div>
            </div>
        </div>

        {/* Commercial Partnership Callout */}
        <section className="relative py-32">
            <div className="absolute inset-0">
                <img src="https://picsum.photos/1200/600?random=office" alt="Background" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10 flex justify-center">
                <div className="bg-white/90 backdrop-blur text-black p-10 max-w-2xl text-center rounded-lg shadow-2xl">
                    <h2 className="text-3xl font-bold mb-4">Parceria & Representação Comercial</h2>
                    <p className="text-gray-600 mb-8">
                        Se torne um parceiro ou representante comercial da Guia Fácil, oferecendo nossas soluções digitais e ajude milhares de negócios a impulsionarem.
                    </p>
                    <button className="bg-brand-purple text-white font-bold py-3 px-8 rounded hover:bg-brand-darkPurple transition">
                        SEJA UM PARCEIRO
                    </button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
}

export default App;