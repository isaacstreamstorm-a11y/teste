export interface ServiceItem {
  id: string;
  title: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: React.ElementType;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}