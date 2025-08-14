export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: 'website' | 'article' | 'profile';
  structuredData?: object;
}

export const defaultSEO: SEOConfig = {
  title: 'PrepCampus - Your Ultimate Exam Preparation Platform',
  description: 'Master your exams with PrepCampus! Access comprehensive practice tests, mock exams, study materials, and expert guidance for competitive exams.',
  keywords: 'exam preparation, practice tests, mock exams, competitive exams, study materials, online learning, test prep',
  image: '/images/mylogo.png',
  url: 'https://prepcampus.com',
  type: 'website'
};

export const pageSEOConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'PrepCampus - Your Ultimate Exam Preparation Platform | Practice Tests, Mock Exams & Study Materials',
    description: 'Master your competitive exams with PrepCampus! Access 5000+ practice questions, mock tests, and study materials for TCS, Infosys, Amazon, Google, and more.',
    keywords: 'exam preparation, practice tests, mock exams, competitive exams, TCS, Infosys, Amazon, Google, coding practice, aptitude tests, reasoning, verbal ability, placement preparation',
    image: '/images/mylogo.png',
    url: 'https://prepcampus.com',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "PrepCampus",
      "description": "Your Ultimate Exam Preparation Platform",
      "url": "https://prepcampus.com"
    }
  },
  examPrep: {
    title: 'Exam Preparation - Practice Tests & Study Materials',
    description: 'Master your competitive exams with PrepCampus! Access comprehensive practice tests, mock exams, and study materials for quantitative aptitude, logical reasoning, verbal ability, and programming.',
    keywords: 'exam preparation, practice tests, mock exams, competitive exams, quantitative aptitude, logical reasoning, verbal ability, programming practice, placement preparation',
    image: '/images/exam-prep.jpg',
    url: 'https://prepcampus.com/exam-prep',
    type: 'website'
  },
  programming: {
    title: 'Programming Practice - Coding Questions & Solutions',
    description: 'Practice coding with 1000+ programming questions from top companies. Master data structures, algorithms, and coding concepts for technical interviews.',
    keywords: 'programming practice, coding questions, data structures, algorithms, technical interview, coding practice, programming problems',
    image: '/images/programming.jpg',
    url: 'https://prepcampus.com/programming',
    type: 'website'
  },
  quantitativeAptitude: {
    title: 'Quantitative Aptitude Practice - Math Questions & Solutions',
    description: 'Master quantitative aptitude with comprehensive practice tests covering percentages, ratios, time & work, speed & distance, and more mathematical concepts.',
    keywords: 'quantitative aptitude, math practice, percentage, ratio proportion, time work, speed distance, mathematical reasoning',
    image: '/images/quantitative-aptitude.jpg',
    url: 'https://prepcampus.com/quantitative-aptitude',
    type: 'website'
  },
  logicalReasoning: {
    title: 'Logical Reasoning Practice - Reasoning Questions & Solutions',
    description: 'Enhance your logical reasoning skills with practice tests on coding-decoding, blood relations, directions, seating arrangements, and more.',
    keywords: 'logical reasoning, reasoning practice, coding decoding, blood relations, directions, seating arrangements, logical thinking',
    image: '/images/logical-reasoning.jpg',
    url: 'https://prepcampus.com/logical-reasoning',
    type: 'website'
  },
  verbalAbility: {
    title: 'Verbal Ability Practice - English Questions & Solutions',
    description: 'Improve your verbal ability with practice tests on error detection, synonyms, antonyms, idioms, reading comprehension, and more English concepts.',
    keywords: 'verbal ability, english practice, error detection, synonyms antonyms, idioms phrases, reading comprehension, english grammar',
    image: '/images/verbal-ability.jpg',
    url: 'https://prepcampus.com/verbal-ability',
    type: 'website'
  },
  mockTests: {
    title: 'Mock Tests - Real Exam Simulation & Practice',
    description: 'Take realistic mock tests that simulate actual exam conditions. Get detailed analysis, performance insights, and improvement suggestions.',
    keywords: 'mock tests, exam simulation, practice tests, performance analysis, exam preparation, test practice',
    image: '/images/mock-tests.jpg',
    url: 'https://prepcampus.com/mock-tests',
    type: 'website'
  },
  companyOverview: {
    title: 'Company Overview - Exam Patterns & Preparation Guide',
    description: 'Explore company-specific exam patterns, syllabus, and preparation strategies for TCS, Infosys, Amazon, Google, and other top companies.',
    keywords: 'company overview, exam patterns, TCS, Infosys, Amazon, Google, company preparation, placement patterns',
    image: '/images/company-overview.jpg',
    url: 'https://prepcampus.com/company-overview',
    type: 'website'
  },
  blog: {
    title: 'Blog - Exam Preparation Tips & Insights',
    description: 'Read expert tips, strategies, and insights on exam preparation, interview techniques, and career guidance.',
    keywords: 'exam preparation blog, study tips, interview tips, career guidance, preparation strategies',
    image: '/images/blog.jpg',
    url: 'https://prepcampus.com/blog',
    type: 'website'
  },
  contact: {
    title: 'Contact Us - Get in Touch with PrepCampus',
    description: 'Contact PrepCampus for support, feedback, or inquiries. We\'re here to help you with your exam preparation journey.',
    keywords: 'contact prepcampus, support, feedback, inquiry, help, customer service',
    image: '/images/contact.jpg',
    url: 'https://prepcampus.com/contact',
    type: 'website'
  }
};

export const getSEOConfig = (page: string): SEOConfig => {
  return pageSEOConfigs[page] || defaultSEO;
};

export const generateStructuredData = (type: string, data: any) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "PrepCampus",
    "url": "https://prepcampus.com"
  };

  return { ...baseData, ...data };
};

export const socialMediaConfig = {
  twitter: {
    handle: '@prepcampus',
    site: '@prepcampus',
    cardType: 'summary_large_image'
  },
  facebook: {
    appId: 'your-facebook-app-id',
    type: 'website'
  },
  linkedin: {
    company: 'prepcampus'
  }
};
