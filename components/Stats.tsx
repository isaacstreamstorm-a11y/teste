import React from 'react';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Somos uma Agência <span className="text-white">Parceira do Google</span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STATS.map((stat, index) => {
             const Icon = stat.icon;
             return (
                <div key={index} className="bg-brand-purple rounded-xl p-8 text-center hover:bg-brand-darkPurple transition-colors duration-300 group shadow-lg shadow-purple-900/20">
                    <div className="inline-flex p-3 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-purple-100 text-xs uppercase font-medium tracking-wide">{stat.label}</p>
                </div>
             );
          })}
        </div>

        <div className="mt-16 flex justify-between items-center bg-[#151515] p-8 rounded-2xl border border-white/5">
             <h3 className="text-2xl font-bold">Certificação Google</h3>
             <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-500">G</span>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-bold">Google</span>
                        <span className="text-xs text-gray-400">Partner</span>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};