import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#f5f5f5] text-gray-800 pt-20">
      <div className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
             <h2 className="text-4xl font-bold text-brand-purple mb-2">Vamos</h2>
             <h2 className="text-4xl font-bold text-brand-purple mb-8">Conversar?</h2>
             
             <div className="space-y-6">
                 <div className="flex items-center gap-4 group">
                     <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                     </div>
                     <span className="font-medium text-gray-600">contato@guiafacil.com</span>
                 </div>
                 
                 <div className="flex items-center gap-4 group">
                     <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        <Phone className="w-5 h-5" />
                     </div>
                     <span className="font-medium text-gray-600">+55 (47) 2102 1010</span>
                 </div>

                 <div className="flex items-center gap-4 group">
                     <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        <Clock className="w-5 h-5" />
                     </div>
                     <span className="font-medium text-gray-600">08h às 12h e das 13h30min às 18h</span>
                 </div>

                 <div className="flex items-center gap-4 group">
                     <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        <MapPin className="w-5 h-5" />
                     </div>
                     <span className="font-medium text-gray-600">Av. Martin Luther, 399, Centro<br/>Blumenau - SC CEP: 89012-010</span>
                 </div>
             </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
              <form className="space-y-4">
                  <input type="text" placeholder="Seu Nome" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" />
                  <input type="text" placeholder="Nome da Sua Empresa" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" />
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple outline-none bg-white text-gray-500">
                      <option>Segmento de Atuação Da Empresa</option>
                      <option>Varejo</option>
                      <option>Indústria</option>
                      <option>Serviços</option>
                  </select>
                  <input type="text" placeholder="Seu WhatsApp" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" />
                  <input type="text" placeholder="Sua Cidade" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" />
                  
                  <button type="button" className="w-full bg-brand-purple hover:bg-brand-darkPurple text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-purple-200">
                      Cadastrar
                  </button>
              </form>
          </div>
        </div>
      </div>

      <div className="bg-[#111] py-8 text-white border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tighter">GUIA FÁCIL</span>
                <span className="text-xs text-gray-500 mt-1">e-marketing</span>
            </div>
            
            <div className="flex space-x-6">
                <a href="#" className="hover:text-brand-purple transition"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="hover:text-brand-purple transition"><Facebook className="w-5 h-5"/></a>
                <a href="#" className="hover:text-brand-purple transition"><Linkedin className="w-5 h-5"/></a>
            </div>

            <div className="text-xs text-gray-500 text-center md:text-right">
                <p>2025 | DESENVOLVIDO POR GUIA FÁCIL COMUNICAÇÃO LTDA</p>
                <p>CNPJ 01.659.667/0001-63</p>
            </div>
        </div>
      </div>
    </footer>
  );
};