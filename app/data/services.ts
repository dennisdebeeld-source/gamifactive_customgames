export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Consultancy',
    description: 'Strategy and concept validation',
    icon: '💡'
  },
  {
    title: 'Design & Development',
    description: 'Board and digital games',
    icon: '🎨'
  },
  {
    title: 'Workshops',
    description: 'Gamification introduction',
    icon: '🔧'
  },
  {
    title: 'Implementation & Evaluation',
    description: 'Metrics and reporting',
    icon: '📈'
  }
];
