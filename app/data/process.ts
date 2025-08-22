export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Explore',
    description: 'We analyze your challenge and determine how gamification can help.'
  },
  {
    number: 2,
    title: 'Design',
    description: 'Together we create a concept that perfectly fits your target audience.'
  },
  {
    number: 3,
    title: 'Build',
    description: 'Our team develops the game or gamification solution tailored to your needs.'
  },
  {
    number: 4,
    title: 'Measure',
    description: 'We implement and measure the impact to prove that it works.'
  }
];
