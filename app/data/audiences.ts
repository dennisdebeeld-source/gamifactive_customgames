export interface Audience {
  title: string;
  description: string;
  useCases: string[];
  caseTeaser: string;
}

export const audiences: Audience[] = [
  {
    title: 'Universities',
    description: 'Subject education, curriculum innovation and blended learning',
    useCases: ['Subject Education', 'Curriculum Innovation', 'Blended Learning'],
    caseTeaser: 'Result: 28% higher knowledge retention after four weeks in a pilot with master students.'
  },
  {
    title: 'Hospitals and Pharma',
    description: 'Patient education, internal training and conferences',
    useCases: ['Patient Education', 'Internal Training', 'Conferences'],
    caseTeaser: 'Result: 40% more engagement in patient education sessions.'
  },
  {
    title: 'Foundations and Associations',
    description: 'Awareness, fundraising and community building',
    useCases: ['Awareness', 'Fundraising', 'Community Building'],
    caseTeaser: 'Result: 3x more donations after awareness campaign.'
  },
  {
    title: 'Corporate Training',
    description: 'Onboarding, compliance and change management',
    useCases: ['Onboarding', 'Compliance', 'Change Management'],
    caseTeaser: 'Result: 50% time savings in onboarding process.'
  }
];
