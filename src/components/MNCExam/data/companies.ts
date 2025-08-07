import { Company } from '../types';

export const companies: Company[] = [
  {
    id: 'tcs-nqt',
    name: 'TCS NQT',
    logo: '/images/tcs.jpg',
    color: '#0066CC',
    description: 'Tata Consultancy Services - National Qualifier Test',
    examTypes: [
      {
        id: 'nqt',
        name: 'TCS NQT',
        description: 'National Qualifier Test - Foundation and Advanced sections',
        sections: [
          {
            id: 'numerical-ability',
            name: 'Numerical Ability',
            questionCount: 20,
            duration: 25,
          },
          {
            id: 'reasoning-ability',
            name: 'Reasoning Ability',
            questionCount: 20,
            duration: 25,
          },
          {
            id: 'verbal-ability',
            name: 'Verbal Ability',
            questionCount: 25,
            duration: 25,
          },
          {
            id: 'advanced-quants-logical',
            name: 'Advanced Quants and Logical Reasoning',
            questionCount: 15,
            duration: 25,
          },
        ],
      },
    ],
  },


  {
    id: 'cognizant',
    name: 'Cognizant',
    logo: '/images/cognizant.png',
    color: '#1F4E79',
    description: 'Cognizant - Global IT services and consulting',
    examTypes: [
      {
        id: 'genc',
        name: 'Cognizant GenC 2025',
        description: 'GenC - Graduate Engineer Next Generation - Complete 2025 exam pattern with Communication, Aptitude, and Technical assessments',
        sections: [
          {
            id: 'quantitative-aptitude',
            name: 'Quantitative Aptitude',
            questionCount: 16,
            duration: 25,
          },
          {
            id: 'logical-reasoning',
            name: 'Logical Reasoning',
            questionCount: 14,
            duration: 25,
          },
          {
            id: 'verbal-ability',
            name: 'Verbal Ability',
            questionCount: 25,
            duration: 20,
          },
        ],
      },
    ],
  },
  {
    id: 'wipro',
    name: 'Wipro',
    logo: '/images/wipro.jpg',
    color: '#0066CC',
    description: 'Wipro - Global IT services and consulting',
    examTypes: [
      {
        id: 'mock-test',
        name: 'Wipro Mock Test',
        description: 'Single-phase online assessment',
        sections: [
          {
            id: 'quantitative-aptitude',
            name: 'Quantitative Aptitude',
            questionCount: 16,
            duration: 16,
          },
          {
            id: 'logical-reasoning',
            name: 'Logical Reasoning',
            questionCount: 14,
            duration: 14,
          },
          {
            id: 'verbal-ability',
            name: 'Verbal Ability',
            questionCount: 18,
            duration: 18,
          },
        ],
      },
    ],
  },
  {
    id: 'accenture',
    name: 'Accenture',
    logo: '/images/accenture.jpg',
    color: '#A100FF',
    description: 'Accenture - Global professional services company',
    examTypes: [
      {
        id: 'mock-test',
        name: 'Accenture Mock Test',
        description: 'Comprehensive assessment with verbal ability, critical reasoning, abstract reasoning, pseudocode, MS Office, and networking',
        sections: [
          {
            id: 'verbal-ability',
            name: 'Verbal Ability',
            questionCount: 17,
            duration: 17,
          },
          {
            id: 'critical-reasoning',
            name: 'Critical Reasoning',
            questionCount: 18,
            duration: 18,
          },
          {
            id: 'abstract-reasoning',
            name: 'Abstract Reasoning',
            questionCount: 15,
            duration: 15,
          },
          {
            id: 'pseudocode',
            name: 'Pseudocode',
            questionCount: 18,
            duration: 20,
          },
          {
            id: 'ms-office-computer-fundamentals',
            name: 'MS Office & Computer Fundamentals',
            questionCount: 12,
            duration: 10,
          },
          {
            id: 'networking-cloud-security',
            name: 'Networking / Cloud / Security',
            questionCount: 10,
            duration: 10,
          },
        ],
      },
    ],
  },
  {
    id: 'infosys',
    name: 'Infosys',
    logo: '/images/infosys.jpg',
    color: '#0073E6',
    description: 'Infosys - Global technology services and consulting',
    examTypes: [
      {
        id: 'online-aptitude-test',
        name: 'Infosys Online Aptitude Test',
        description: 'Comprehensive aptitude test with logical reasoning, quantitative aptitude, and verbal ability',
        sections: [
          {
            id: 'logical-reasoning',
            name: 'Logical Reasoning',
            questionCount: 15,
            duration: 25,
          },
          {
            id: 'quantitative-aptitude',
            name: 'Quantitative Aptitude',
            questionCount: 10,
            duration: 35,
          },
          {
            id: 'verbal-ability',
            name: 'Verbal Ability',
            questionCount: 40,
            duration: 35,
          },
        ],
      },
    ],
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: '/images/microsoft.jpg',
    color: '#0078D4',
    description: 'Microsoft - Technology company and cloud services provider',
    examTypes: [
      {
        id: 'azure-fundamentals',
        name: 'Microsoft Azure Fundamentals (AZ-900)',
        description: 'Fundamentals level exam covering Azure cloud concepts, services, security, and pricing. Questions are randomly selected from a large pool. 45 minutes, passing score 700/1000.',
        sections: [
          {
            id: 'cloud-concepts',
            name: 'Describe Cloud Concepts (25-30%)',
            questionCount: 12,
            duration: 15,
          },
          {
            id: 'azure-architecture-services',
            name: 'Describe Azure Architecture & Services (35-40%)',
            questionCount: 18,
            duration: 20,
          },
          {
            id: 'azure-management-governance',
            name: 'Describe Azure Management & Governance (30-35%)',
            questionCount: 16,
            duration: 10,
          },
        ],
      },
    ],
  },
  {
    id: 'hcl',
    name: 'HCL',
    logo: '/images/hcl.jpg',
    color: '#FF6600',
    description: 'HCL Technologies - Global IT services company',
    examTypes: [
      {
        id: 'online-screening',
        name: 'HCL Online Screening',
        description: 'HCL\'s comprehensive online screening test with 5 sections covering aptitude, reasoning, and technical fundamentals',
        sections: [
          {
            id: 'numerical-aptitude',
            name: 'Numerical Aptitude',
            questionCount: 15,
            duration: 15,
          },
          {
            id: 'verbal-ability',
            name: 'Verbal Ability',
            questionCount: 15,
            duration: 15,
          },
          {
            id: 'logical-reasoning',
            name: 'Logical Reasoning',
            questionCount: 15,
            duration: 15,
          },
          {
            id: 'computer-fundamentals',
            name: 'Computer Fundamentals',
            questionCount: 30,
            duration: 30,
          },
        ],
      },
    ],
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    logo: '/images/capgemini.jpg',
    color: '#FF6B35',
    description: 'Capgemini - Global consulting, technology services and digital transformation',
    examTypes: [
      {
        id: 'online-assessment',
        name: 'Capgemini Online Assessment',
        description: 'Comprehensive assessment covering technical skills and English communication',
        sections: [
          {
            id: 'technical-mcq',
            name: 'Technical MCQ (Pseudo-code)',
            questionCount: 30,
            duration: 30,
          },
          {
            id: 'english-communication',
            name: 'English Communication',
            questionCount: 30,
            duration: 30,
          },
          {
            id: 'game-based-aptitude',
            name: 'Game-based Aptitude Challenges',
            questionCount: 4,
            duration: 30,
          },
          {
            id: 'behavioural-competency',
            name: 'Behavioural Competency',
            questionCount: 100,
            duration: 20,
          },
        ],
      },
    ],
  },
];

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

export const getExamTypeById = (companyId: string, examTypeId: string) => {
  const company = getCompanyById(companyId);
  return company?.examTypes.find(examType => examType.id === examTypeId);
}; 