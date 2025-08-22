export interface Case {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

export const cases: Case[] = [
  {
    title: 'Immunology Masterclass',
    challenge: 'Master students struggled with complex immunology concepts and had low engagement during lectures.',
    solution: 'Development of an interactive board game that simulates immunological processes and introduces competition.',
    result: '28% higher knowledge retention after four weeks and 85% of students reported being more motivated.',
    image: '/images/case-immunology.jpg'
  },
  {
    title: 'Hospital Patient Education',
    challenge: 'Patients did not understand their treatment well and had many questions during consultations.',
    solution: 'Digital game that guides patients through their treatment with interactive scenarios and rewards.',
    result: '40% more engagement in education sessions and 30% fewer questions during consultations.',
    image: '/images/case-patient.jpg'
  },
  {
    title: 'Pharmaceutical Training',
    challenge: 'Employees needed to learn complex compliance procedures but found traditional training boring.',
    solution: 'Gamified learning platform with levels, badges and real-time feedback for compliance training.',
    result: '50% time savings in training and 95% pass rate on compliance tests.',
    image: '/images/case-pharma.jpg'
  }
];
