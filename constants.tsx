import { Users, DollarSign, Globe, Award } from 'lucide-react';
import { ServiceItem, StatItem, TimelineEvent } from './types';

export const MENU_ITEMS = [
  { label: 'INÍCIO', href: '#home' },
  { label: 'SERVIÇOS', href: '#services' },
  { label: 'SOBRE NÓS', href: '#about' },
  { label: 'AVALIAÇÕES', href: '#testimonials' },
  { label: 'PARCERIAS', href: '#partners' },
  { label: 'CONTATO', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: '+80 mil', label: 'CLIENTES ATENDIDOS', icon: Users },
  { value: '+9.5 milhões', label: 'INVESTIDO E GERENCIADO PELO NOSSO TIME', icon: DollarSign },
  { value: '+1,000', label: 'SITES DESENVOLVIDOS', icon: Globe },
  { value: '2 Prêmios', label: 'MELHOR QUALIDADE DE CONTAS GOOGLE ADS', icon: Award },
];

export const SERVICES: ServiceItem[] = [
  { id: '1', title: 'Meta Ads', image: 'https://picsum.photos/400/300?random=1' },
  { id: '2', title: 'Google Ads', image: 'https://picsum.photos/400/300?random=2' },
  { id: '3', title: 'Social Media', image: 'https://picsum.photos/400/300?random=3' },
  { id: '4', title: 'Criação De Site', image: 'https://picsum.photos/400/300?random=4' },
  { id: '5', title: 'Google Meu Negócio', image: 'https://picsum.photos/400/300?random=5' },
  { id: '6', title: 'Guiafacil.Com', image: 'https://picsum.photos/400/300?random=6' },
  { id: '7', title: 'Lista Amarela', image: 'https://picsum.photos/400/300?random=7' },
  { id: '8', title: 'Orce Fácil', image: 'https://picsum.photos/400/300?random=8' },
];

export const TIMELINE: TimelineEvent[] = [
  { year: '1997', title: 'Início', description: 'Início das vendas de listas telefônicas em Blumenau.' },
  { year: '2002', title: 'Publicação', description: 'Publicação do primeiro site na web, o guiafacil.com.br' },
  { year: '2013', title: 'Parceria', description: 'Início da parceria com o Google Brasil.' },
  { year: '2016', title: 'Premiado', description: 'Premiado pelo Google pelo 2º vez como Melhor Qualidade.' },
  { year: '2018', title: '1 Milhão', description: 'Primeiro milhão de usuários em um mês.' },
  { year: '2020', labelPosition: 'top', title: 'Freemium', description: 'Inclusão Digital Freemium de PMEs.' },
  { year: '2023', labelPosition: 'bottom', title: 'Lançamento', description: 'Lançamento Orce Fácil.' },
] as any; // Using any to bypass strict layout props for simplicity in this demo