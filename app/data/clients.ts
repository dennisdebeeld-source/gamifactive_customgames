export interface Client {
  name: string;
  type: 'university' | 'hospital' | 'foundation' | 'company';
  logo: string;
}

export const clients: Client[] = [
  {
    name: 'Louisiana State University',
    type: 'university',
    logo: '/logos/lsu.svg'
  },
  {
    name: 'LUMC',
    type: 'hospital',
    logo: '/logos/lumc.svg'
  },
  {
    name: 'Erasmus MC',
    type: 'hospital',
    logo: '/logos/erasmus-mc.svg'
  },
  {
    name: 'Stichting voor Afweerstoornissen',
    type: 'foundation',
    logo: '/logos/afweerstoornissen.svg'
  },
  {
    name: 'ImmunoWars',
    type: 'company',
    logo: '/logos/immunowars.svg'
  }
];
