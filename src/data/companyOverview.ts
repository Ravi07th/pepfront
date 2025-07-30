export interface Company {
  id: string;
  name: string;
  // link: string;
  fullName: string;
  type: string;
  logo?: string;
  primaryColor: string;
  sections: {
    overview: OverviewSection;
    syllabus: SyllabusSection;
    tests: TestSection;
  };
}

export interface OverviewSection {
  title: string;
  description: string;
  highlights: string[]; // Array format
  examPattern: {
    platform?: string;
    duration?: string;
    rounds?: number;
    difficulty?: string;
  };
  eligibility: string[];
  keyPoints: string[];
}

export interface SyllabusSection {
  title: string;
  description: string;
  topics: SyllabusTopic[];
  preparation: string[];
}

export interface SyllabusTopic {
  section: string;
  duration?: string;
  topics: string[];
  difficulty?: string;
}

export interface TestSection {
  title: string;
  description: string;
  mockTests: MockTest[];
  practiceTests: PracticeTest[];
}

export interface MockTest {
  name: string;
  duration: string;
  questions: number;
  difficulty: string;
  topics: string[];
}

export interface PracticeTest {
  name: string;
  questions: number;
  topics: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  hasDropdown?: boolean;
  children?: NavigationItem[];
}

export const companies: Company[] = [
  {
    id: 'tcs',
    name: 'TCS',
    fullName: 'Tata Consultancy Services',
    type: 'IT Services',
    primaryColor: '37 99 235',
    sections: {
      overview: {
        title: 'TCS NQT Syllabus for Freshers 2025',
        description: 'Tata Consultancy Services (TCS) is India\'s largest IT services company and a global leader in digital transformation. Founded in 1968 and headquartered in Mumbai, it operates in 149 locations across 46 countries with 600,000+ employees worldwide. TCS NQT (National Qualifier Test) serves as the gateway for freshers to join TCS through various roles including Ninja, Digital, and Prime profiles.',
        highlights: [
          'India\'s largest IT services company',
          'Founded in 1968, Mumbai HQ',
          '600K+ employees globally',
          'Services: IT consulting, digital transformation',
          'Focus on AI, cloud, automation',
          'Strong learning & innovation culture'
        ],
        examPattern: {
          platform: 'TCS iON Assessment Platform',
          duration: '190 minutes',
          rounds: 2,
          difficulty: 'Medium to High'
        },
        eligibility: [
          'Full-time degree: B.E./B.Tech/M.E./M.Tech/MCA/M.Sc (CS/IT/Electronics) for tech roles',
          'Year of Passing: Current batch (e.g., 2025) or as specified in hiring notification',
          'Minimum marks: 60% or above in 10th, 12th, UG & PG throughout academics',
          'No active backlogs (must be cleared before joining)',
          'Maximum 2 years gap in entire academic career',
          'Age limit: No specific age limit mentioned',
          'No prior work experience required for fresher roles'
        ],
        keyPoints: [
          'Foundation Round: Numerical Ability – 20 questions (25 minutes)',
          'Foundation Round: Verbal Ability – 25 questions (25 minutes)',
          'Foundation Round: Reasoning Ability – 20 questions (25 minutes)',
          'Advanced Round: Advanced Quantitative & Reasoning – 15 questions (25 minutes shared)',
          'Advanced Round: Advanced Coding – 3 questions (90 minutes)'
        ]
      }
      ,
      syllabus: {
        title: 'TCS NQT Syllabus for Freshers 2025',
        description: 'Comprehensive syllabus covering Foundation and Advanced sections of TCS National Qualifier Test with emphasis on aptitude, reasoning, and advanced coding skills for various TCS profiles including Ninja, Digital, and Prime.',
        topics: [
          {
            section: '1st Section – Foundation Round (Part A)',
            duration: '75 minutes',
            difficulty: 'Medium',
            topics: [
              'Numerical Ability – 25 minutes (20 questions)',
              'Verbal Ability – 25 minutes (25 questions)',
              'Reasoning Ability – 25 minutes (20 questions)'
            ]
          },
          {
            section: '2nd Section – Advanced Quantitative & Reasoning',
            duration: '25 minutes (shared)',
            difficulty: 'High',
            topics: [
              'Advanced Quantitative Ability (15 questions shared)',
              'Advanced Reasoning Ability (15 questions shared)',
              'Complex Mathematical Problems & Advanced Logic'
            ]
          },
          {
            section: '3rd Section – Advanced Coding Round',
            duration: '90 minutes',
            difficulty: 'High',
            topics: [
              '3 Coding Problems (Languages: C, C++, Java, Python, Perl)',
              'Algorithm Implementation & Problem Solving',
              'Data Structures & Programming Logic'
            ]
          }
        ],
        preparation: [
          'Master numerical ability topics: number systems, arithmetic, geometry, data interpretation',
          'Practice verbal ability: reading comprehension, grammar, sentence correction, vocabulary',
          'Strengthen reasoning: puzzles, arrangements, syllogisms, coding-decoding, blood relations',
          'Focus on advanced quantitative and reasoning for complex problem-solving',
          'Code regularly in C, C++, Java, Python for advanced coding section',
          'Solve previous year TCS NQT papers and practice time management'
        ]
      }
      ,
      tests: {
        title: 'TCS NQT Practice Tests',
        description: 'Comprehensive mock tests designed after TCS NQT pattern including Foundation and Advanced sections with focus on aptitude, reasoning, and coding assessment.',
        mockTests: [
          {
            name: 'TCS NQT Complete Mock Test',
            duration: '190 minutes',
            questions: 83,
            difficulty: 'Medium to High',
            topics: ['Foundation Section', 'Advanced Quantitative & Reasoning', 'Advanced Coding']
          }
        ],
        practiceTests: [
          {
            name: 'Foundation Section Practice',
            questions: 65,
            topics: ['Numerical Ability MCQs', 'Verbal Ability Tests', 'Reasoning Ability Puzzles']
          },
          {
            name: 'Advanced Coding Practice',
            questions: 18,
            topics: ['Algorithm implementation', 'Data structure problems', 'Programming logic']
          }
        ]
      }

    }
  },
  {
    id: 'accenture',
    name: 'Accenture',
    fullName: 'Accenture Private Limited',
    type: 'IT Services',
    primaryColor: '147 51 234',
    sections: {
      overview: {
        title: 'Accenture Syllabus for Freshers 2025',
        description: 'Accenture is a leading global professional services company specializing in consulting, technology services, and digital transformation. Founded in 1989 and headquartered in Dublin, Ireland, it operates in over 120 countries with approximately 500,000+ employees worldwide. Accenture\'s fresher recruitment program focuses on identifying talented graduates through comprehensive assessments, offering extensive training programs, career development opportunities, and exposure to cutting-edge technologies including AI, cloud computing, and automation solutions.',
        highlights: [
          'Global professional services leader',
          'Founded in 1989, Dublin headquarters',
          '500K+ employees across 120+ countries',
          'Services: Strategy, consulting, digital, technology, operations',
          'Focus areas: AI, cloud, automation, cybersecurity',
          'Comprehensive learning & development programs',
          'Multiple career tracks for fresh graduates',
          'Strong emphasis on innovation and digital transformation'
        ],
        examPattern: {
          platform: 'AON-CoCubes Assessment Platform',
          duration: '155 minutes',
          rounds: 3,
          difficulty: 'Medium to High'
        }
        ,
        eligibility: [
          'Full-time degree: B.E./B.Tech/M.E./M.Tech/MCA/M.Sc (CS/IT) for tech roles; B.Sc/BCA/BBA/B.A/B.Com/B.Voc/BMS for non-tech roles',
          'Year of Passing: Current batch (e.g., 2025) or as specified in hiring notification',
          'Minimum marks: 60% or 6.5 CGPA throughout academics in 10th, 12th, UG & PG',
          'No active backlogs at the time of appearing for assessment',
          'Maximum 1 year gap between 10th standard and graduation',
          'Age limit: 18-30 years at the time of assessment',
          'Maximum 11 months of work experience allowed',
          'Minimum 3 months gap from previous Accenture application',
          'Must be Indian citizen or hold PIO/OCI card'
        ],
        keyPoints: [
          'English Ability – 17 questions (shared 90 minutes with cognitive sections)',
          'Critical Reasoning and Problem Solving – 18 questions',
          'Abstract Reasoning – 15 questions',
          'Common Applications and MS Office – 12 questions',
          'Pseudo Code – 18 questions',
          'Fundamentals of Networking, Security, and Cloud – 10 questions',
          'Coding Round – 2 questions (45 minutes)',
          'Communication Assessment – 20-25 questions (20 minutes)'
        ]


      },
      syllabus: {
        title: 'Accenture Syllabus for Freshers 2025',
        description: 'Detailed syllabus covering Cognitive Assessment, Technical Assessment, Coding Round, and Communication Assessment with emphasis on analytical reasoning, technical knowledge, and programming skills.',
        topics: [
          {
            section: '1st Section – Cognitive Assessment',
            duration: '90 minutes (shared)',
            difficulty: 'Medium to High',
            topics: [
              'English Ability – 17 questions (Grammar, comprehension, vocabulary)',
              'Critical Reasoning & Problem Solving – 18 questions',
              'Abstract Reasoning – 15 questions (Visual reasoning, patterns)'
            ]
          },
          {
            section: '2nd Section – Technical Assessment',
            duration: '90 minutes (shared)',
            difficulty: 'Medium',
            topics: [
              'Common Applications & MS Office – 12 questions',
              'Pseudo Code – 18 questions (Algorithm logic, programming concepts)',
              'Networking, Security & Cloud Fundamentals – 10 questions'
            ]
          },
          {
            section: '3rd Section – Coding Round',
            duration: '45 minutes',
            difficulty: 'High',
            topics: [
              '2 Programming Questions (Languages: C, C++, Java, Python, .NET)',
              'Object-Oriented Programming Concepts',
              'Algorithm Implementation & Optimization'
            ]
          },
          {
            section: '4th Section – Communication Assessment',
            duration: '20 minutes',
            difficulty: 'Medium',
            topics: [
              'Sentence Mastery & Vocabulary – 20-25 questions',
              'Fluency & Pronunciation Assessment',
              'Verbal Communication Skills Evaluation'
            ]
          }
        ],
        preparation: [
          'Practice English ability: sentence correction, reading comprehension, grammar',
          'Strengthen critical reasoning: arrangements, analogies, logical sequences',
          'Master abstract reasoning: visual patterns, flowcharts, directional sense',
          'Learn MS Office applications, networking basics, and cloud fundamentals',
          'Practice pseudo code and algorithm logic extensively',
          'Code in multiple languages: C, C++, Java, Python for programming round',
          'Improve verbal communication and pronunciation skills'
        ]
      },
      tests: {
        title: 'Accenture Practice Tests',
        description: 'Mock tests modeled after Accenture assessment pattern including cognitive, technical, coding, and communication rounds with industry-relevant scenarios.',
        mockTests: [
          {
            name: 'Accenture Complete Assessment Mock',
            duration: '155 minutes',
            questions: 92,
            difficulty: 'Medium to High',
            topics: ['Cognitive Assessment', 'Technical Assessment', 'Coding Round', 'Communication Assessment']
          }
        ],
        practiceTests: [
          {
            name: 'Cognitive & Technical Assessment Practice',
            questions: 75,
            topics: ['English ability tests', 'Critical reasoning puzzles', 'Technical MCQs', 'Pseudo code logic']
          },
          {
            name: 'Programming & Communication Practice',
            questions: 22,
            topics: ['Coding problems in multiple languages', 'Verbal communication assessment']
          }
        ]
      }
    }
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    fullName: 'Cognizant Technology Solutions Corporation',
    type: 'IT Services and Consulting',
    primaryColor: '16 185 129',
    sections: {
      overview: {
        title: 'Cognizant GenC Syllabus for Freshers 2025',
        description: 'Cognizant Technology Solutions is a leading multinational technology company that provides IT services, consulting and business process outsourcing services. The company actively recruits fresh graduates through campus placements via the Generation Cognizant (GenC) program.',
        highlights: [
          'GenC program for fresh graduates Technical',
          'Technical and soft skills training',
          'Multiple technology streams',
          'Competitive pay with incentives',
          'Focus on diversity and inclusion',
        ],
        examPattern: {
          platform: 'Superset Assessment Platform',
          duration: '260 minutes',
          rounds: 3,
          difficulty: 'Medium to High'
        },
        eligibility: [
          'Full-time degree: B.E./B.Tech/M.E./M.Tech/MCA/M.Sc (IT/CS/ECE/EEE)',
          'Year of Passing: Current batch (e.g., 2025) or as mentioned in specific drive',
          'Minimum marks: 60% or above in 10th, 12th, Diploma, UG & PG',
          'No active backlogs (must be cleared before joining)',
          'Overall academic gap allowed: Maximum 2 years between education milestones',
          'No gap during degree (continuous education required)',
          'Minimum 18 years at the time of application'
        ],
        keyPoints: [
          'Communication Assessment: 60 minutes (60 questions - elimination round)',
          'Aptitude Assessment: 80 minutes (Numerical: 25, Logical: 35, Verbal: 20)',
          'Technical Assessment: Cluster-based; coding and technical MCQs, 105–120 minutes',
          'Aptitude covers: Quantitative (basic math to DI, series, probability), Reasoning (deductive/inductive logic, patterns), Verbal (reading, comprehension, grammar)',
          'Technical: Java, Python, SQL, Web/CSS/JS or Cloud fundamentals depending on skill cluster',
          'Interview rounds: Technical and HR after clearing assessments'
        ]
      },
      syllabus: {
        title: 'Cognizant GenC Syllabus for Freshers 2025',
        description: 'Comprehensive Generation Cognizant syllabus covering Communication Assessment, Aptitude Assessment, and Technical Assessment with focus on English proficiency, analytical skills, and technical competency.',
        topics: [
          {
            section: '1st Section – Communication Assessment (Elimination Round)',
            duration: '60 minutes',
            difficulty: 'Medium',
            topics: [
              'Reading Sentences – 8 questions',
              'Repeat Sentences – 16 questions (Verbal fluency)',
              'Jumbled Sentences – 10 questions',
              'Question and Answer – 24 questions',
              'Story Telling – 2 questions'
            ]
          },
          {
            section: '2nd Section – Aptitude Assessment',
            duration: '80 minutes',
            difficulty: 'Medium',
            topics: [
              'Numerical Ability – 25 questions (Number systems, geometry, percentages)',
              'Logical Reasoning – 35 questions (Puzzles, arrangements, coding-decoding)',
              'Verbal Ability – 20 questions (Grammar, comprehension, vocabulary)'
            ]
          },
          {
            section: '3rd Section – Technical Assessment',
            duration: '120 minutes',
            difficulty: 'High',
            topics: [
              'Cluster 1 – 3 questions (Java, ANSI SQL, HTML, CSS, JavaScript)',
              'Cluster 2 – 3 questions (ANSI SQL, Python, Cloud Computing)',
              'Technical MCQs on Programming Fundamentals'
            ]
          }
        ],
        preparation: [
          'Focus heavily on communication skills as it\'s an elimination round',
          'Practice reading, speaking, and sentence construction extensively',
          'Master numerical ability: percentages, ratios, geometry, data interpretation',
          'Strengthen logical reasoning: puzzles, arrangements, series, blood relations',
          'Improve English grammar, vocabulary, and reading comprehension',
          'Choose between Cluster 1 (Java/Web technologies) or Cluster 2 (Python/Cloud)',
          'Practice coding in Java or Python based on chosen cluster',
          'Learn database concepts and SQL queries thoroughly'
        ]
      },
      tests: {
        title: 'Cognizant GenC Practice Tests',
        description: 'Mock tests designed for Generation Cognizant assessment pattern with emphasis on communication proficiency, aptitude skills, and technical competency evaluation.',
        mockTests: [
          {
            name: 'Cognizant GenC Complete Mock Test',
            duration: '260 minutes',
            questions: 86,
            difficulty: 'Medium to High',
            topics: ['Communication Assessment', 'Aptitude Assessment', 'Technical Assessment']
          }
        ],
        practiceTests: [
          {
            name: 'Communication Skills Practice',
            questions: 60,
            topics: ['Reading & grammar tests', 'Speaking & listening exercises', 'Sentence construction practice']
          },
          {
            name: 'Technical Cluster Practice',
            questions: 6,
            topics: ['Java/Web development problems', 'Python/Cloud computing scenarios', 'Database query challenges']
          }
        ]
      }
    }
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    fullName: 'Capgemini Technology Services',
    type: 'IT Consulting and Services',
    primaryColor: '59 130 246',
    sections: {
      overview: {
        title: 'Capgemini Syllabus for Freshers 2025',
        description: 'Capgemini is a global leader in consulting, technology services, and digital transformation. Founded in 1967 and headquartered in Paris, it operates in 50+ countries with over 3.5 lakh employees. The company focuses on innovation in AI, cloud, and digital solutions, offering a collaborative work culture and strong career growth opportunities.',
        highlights: [
          'Global IT & consulting firm',
          'Founded in 1967, Paris HQ',
          '3.5L+ employees worldwide',
          'Services: IT, consulting, outsourcing',
          'Focus on AI, cloud, digital',
          'Strong growth & learning culture'
        ],
        examPattern: {
          platform: 'Capgemini Assessment Platform',
          duration: '120–150 minutes',
          rounds: 5,
          difficulty: 'Medium'
        },
        eligibility: [
          'Full-time degree: B.E./B.Tech/M.E./M.Tech/MCA/M.Sc (IT/CS) only',
          'Year of Passing: Current batch (e.g., 2025) or as specified in hiring notification',
          'Minimum marks: 60% or above in 10th, 12th, Diploma, UG & PG',
          'No active backlogs (must be cleared before joining)',
          'Maximum 2 years gap between academic milestones (10th to graduation)',
          'No gap during degree (must complete in regular stipulated time)',
          'Minimum 18 years at the time of appearing for assessment'
        ],
        keyPoints: [
          'Pseudo Code – 30 minutes',
          'English Communication Test – 30 minutes',
          'Game-Based Aptitude – 20-30 minutes',
          'Behavioral Competency Test – 20 minutes',
          'Coding Round (for Exceller/Elite profiles) – 45-60 minutes'
        ]
      },
      syllabus: {
        title: 'Capgemini Exceller Syllabus 2025',
        description: 'Detailed syllabus covering all sections of the Capgemini Exceller recruitment assessment with emphasis on technical skills, game-based aptitude, and communication.',
        topics: [
          {
            section: '1st Section – Technical & English Assessment',
            duration: '70 minutes',
            difficulty: 'Medium',
            topics: [
              'Pseudo Code / Programming Logic – 30 minutes',
              'English Communication Test – 30 minutes',
              'Essay Writing (WET) – 10 minutes'
            ]
          },
          {
            section: '2nd Section – Game-Based Aptitude',
            duration: '20–30 minutes',
            difficulty: 'Medium to High',
            topics: [
              'Cognitive Ability Games',
              'Decision-Making & Logical Reasoning Games',
              'Pattern Recognition & Problem-Solving'
            ]
          },
          {
            section: '3rd Section – Behavioral Competency Profiling',
            duration: '20 minutes (approx.)',
            difficulty: 'Medium',
            topics: [
              'Situational Judgment Questions',
              'Work Style & Personality Assessment',
              'Teamwork & Leadership Profiling'
            ]
          },
          {
            section: '4th Section – Coding Round (For Exceller/Elite Roles)',
            duration: '45–60 minutes',
            difficulty: 'High',
            topics: [
              '2 Coding Problems (Languages: C, C++, Java, Python)',
              'Focus on Logic, Time & Space Optimization'
            ]
          }
        ],
        preparation: [
          'Practice pseudo-code and programming logic (loops, arrays, functions)',
          'Work on English grammar, essay writing & comprehension',
          'Play cognitive and logic-based aptitude games online',
          'Prepare for coding questions in C, C++, Java, or Python',
          'Understand behavioral profiling and answer consistently'
        ]
      },

      tests: {
        title: 'Capgemini (Exceller) Practice Tests',
        description: 'Mock tests modeled after the Capgemini Exceller assessment pattern including technical, essay, game-based and language focus.',
        mockTests: [
          {
            name: 'Capgemini Exceller Full Mock Test',
            duration: '120 minutes',
            questions: 50,
            difficulty: 'Medium',
            topics: ['Technical Test', 'English Communication', 'Game‑based Aptitude', 'Coding']
          }
        ],
        practiceTests: [
          {
            name: 'Gaming Aptitude Practice',
            questions: 4,
            topics: ['Sample versions of grid, motion, digit, switch challenges']
          },
          {
            name: 'Pseudo-code & Technical Practice',
            questions: 20,
            topics: ['Pseudo-code logic', 'Basic DSA MCQs']
          }
        ]
      }
    }
  }
];

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

export const getCompanyNames = (): string[] => {
  return companies.map(company => company.name);
};
