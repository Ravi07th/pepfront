export interface ExamPattern {
  companyId: string;
  companyName: string;
  examName: string;
  year: number;
  platform: string;
  totalDuration: string;
  totalQuestions: number;
  sections: ExamSection[];
  eligibility: string[];
  careerPortal: string;
  selectionProcess: string[];
  preparationTips: string[];
}

export interface ExamSection {
  name: string;
  duration: string;
  questions?: number;
  topics: ExamTopic[];
  description: string;
}

export interface ExamTopic {
  name: string;
  subTopics: string[];
  description?: string;
}

export const companyExamPatterns2025: ExamPattern[] = [
  // TCS NQT 2025
  {
    companyId: 'tcs-nqt',
    companyName: 'TCS',
    examName: 'TCS NQT (National Qualifier Test)',
    year: 2025,
    platform: 'TCS iON Assessment Platform',
    totalDuration: '190 minutes',
    totalQuestions: 83,
    sections: [
      {
        name: '🧠 Part A – Foundation Section',
        duration: '75 minutes',
        questions: 65,
        topics: [
          {
            name: 'A. Numerical Ability',
            subTopics: [
              'Number System (LCM & HCF, divisibility, decimals)',
              'Percentages, Profit & Loss, Time & Work, Speed–Distance–Time',
              'Ratios, Averages, Mixtures & Allegations, Probability',
              'Permutation & Combinations',
              'Algebra & Equations',
              'Geometry & Mensuration',
              'Data Interpretation (charts, tables, graphs)'
            ],
            description: 'Mathematical concepts and problem-solving skills'
          },
          {
            name: 'B. Reasoning Ability',
            subTopics: [
              'Coding–Decoding, Blood Relations, Directions, Seating Arrangements',
              'Syllogisms, Analogies, Statement Assumption/Conclusion',
              'Data Arrangements, Puzzles, Data Sufficiency',
              'Cubes, Paper Cuts/Folds, Visual & Spatial Reasoning, Venn Diagrams'
            ],
            description: 'Logical thinking and analytical reasoning'
          },
          {
            name: 'C. Verbal Ability',
            subTopics: [
              'Reading Comprehension, Sentence Rearrangement',
              'Sentence Correction, Error Detection',
              'Fill in the Blanks, Cloze Test',
              'Synonyms & Antonyms, Para Jumbles',
              'Grammar: articles, tenses, conjunctions, prepositions'
            ],
            description: 'English language proficiency and communication skills'
          }
        ],
        description: ' Verbal Ability (25 Q),  Reasoning Ability (20 Q),  Numerical Ability (20 Q)'
      },
      {
        name: '🧪 Part B – Advanced Section',
        duration: '115 minutes',
        questions: 18,
        topics: [
          {
            name: 'A. Advanced Quantitative Aptitude',
            subTopics: [
              'More complex versions of Foundation topics',
              'Additional: Progressions (AP/GP), Logarithms',
              'Advanced Geometry & Mensuration',
              'Complex mathematical problem-solving'
            ],
            description: 'Advanced mathematical concepts and problem-solving'
          },
          {
            name: 'B. Advanced Reasoning Ability',
            subTopics: [
              'Higher difficulty puzzles and logical reasoning',
              'Complex seating arrangements and spatial reasoning',
              'Advanced Venn diagrams and assumption/conclusion',
              'Paper cuts/folds and advanced pattern recognition'
            ],
            description: 'Advanced logical thinking and analytical reasoning'
          },
          {
            name: 'C. Advanced Coding (Hands-on)',
            subTopics: [
              'Core Data Structures & Algorithms: arrays, strings, linked lists, stacks, queues, trees, graphs',
              'Coding operations: recursion, dynamic programming, sorting, multidimensional arrays',
              'Logical & scenario-based problems, matrix and string manipulation, shortest path algorithms',
              'Practical programming and algorithm implementation'
            ],
            description: 'Practical programming and algorithm implementation'
          }
        ],
        description: 'Advanced Aptitude & Reasoning and 2-3 coding questions or Some time not eligible for ninja profile'
      }
    ],
    eligibility: [
      'B.E./B.Tech/M.E./M.Tech/MCA/M.Sc (CS/IT/Electronics)',
      'Minimum 60% in 10th, 12th, UG & PG',
      'No active backlogs',
      'Maximum 2 years gap allowed',
      'Current batch (2025) or as specified'
    ],
    careerPortal: 'https://www.tcs.com/careers',
    selectionProcess: [
      'Online Assessment (NQT) - Foundation Section - 75 minutes with 65 questions covering Numerical, Reasoning, and Verbal abilities',
      'Advanced Section - 115 minutes with 18 questions including coding problems and advanced aptitude',
      'Technical Interview - 45-60 minutes focusing on programming concepts, data structures, and problem-solving',
      'HR Interview - 30-45 minutes covering behavioral questions, career goals, and company fit',
      'Document Verification - Final step to verify academic credentials and eligibility criteria'
    ],
    preparationTips: [
      'Focus on logical reasoning and quantitative aptitude for Foundation',
      'Practice coding problems on platforms like HackerRank for Advanced',
      'Improve English communication skills and grammar',
      'Solve previous year TCS NQT questions',
      'Time management is crucial - 75 min for Foundation, 115 min for Advanced',
      'Clear Foundation section first to access Advanced section',
      'Practice data structures and algorithms for coding section',
      'Work on speed and accuracy in numerical ability'
    ]
  },

  // TCS Digital 2025
  {
    companyId: 'tcs-digital',
    companyName: 'TCS',
    examName: 'TCS Digital & Prime (Advanced Section of NQT)',
    year: 2025,
    platform: 'TCS iON Assessment Platform',
    totalDuration: '115 minutes',
    totalQuestions: 18,
    sections: [
      {
        name: '🧠 Advanced Quantitative Ability',
        duration: '25 minutes',
        questions: 10,
        topics: [
          {
            name: 'A. High-difficulty Quantitative Questions',
            subTopics: [
              'Number System, Percentages, Ratios, Profit & Loss',
              'Time & Work, Time & Speed, Series, Progressions (AP/GP)',
              'Logarithms, Geometry & Mensuration',
              'Data Interpretation, Probability, Permutations & Combinations'
            ],
            description: 'Advanced mathematical concepts and complex problem-solving'
          }
        ],
        description: 'Must pass to qualify for Digital/Prime roles'
      },
      {
        name: '🧪 Advanced Reasoning Ability',
        duration: '25 minutes',
        questions: 5,
        topics: [
          {
            name: 'A. Tough Logical and Verbal Reasoning',
            subTopics: [
              'Word patterns, numerical patterns, letter analogy',
              'Blood Relations, Seating Arrangements, Distance & Direction',
              'Odd One Out, Symbols/Notations, Prepositional & Visual reasoning',
              'Cube/Paper folding, Data sufficiency, Decision making, Syllogism'
            ],
            description: 'Advanced logical reasoning and analytical thinking'
          }
        ],
        description: 'Shared time with Quantitative section'
      },
      {
        name: '💻 Advanced Coding',
        duration: '90 minutes',
        questions: 3,
        topics: [
          {
            name: 'A. Data Structures and Algorithms',
            subTopics: [
              'Arrays, strings, recursion, dynamic programming, matrices',
              'Backtracking, sorting algorithms, hashmaps, optimization',
              'Problem statements favor clean logic and edge-case handling',
              'Languages: C, C++, C#, Java, Python 2/3, Perl, Ruby, Scala'
            ],
            description: 'Advanced programming and algorithmic problem-solving'
          }
        ],
        description: 'Solve ≥ 1 → Digital role; all 3 → Prime role'
      }
    ],
    eligibility: [
      'B.E/B.Tech in Computer Science, IT, Electronics, or related branches',
      'M.E/M.Tech in Computer Science, IT, or related branches',
      'MCA (Master of Computer Applications)',
      'Minimum 60% aggregate in graduation',
      'No backlogs at the time of joining',
      'Good academic record throughout education'
    ],
    careerPortal: 'https://www.tcs.com/careers/india',
         selectionProcess: [
       'Online Application and Registration - Initial application through TCS career portal with profile creation',
       'TCS Digital & Prime Aptitude Test - 180 minutes assessment covering aptitude, programming, and English skills',
       'Technical Interview (Programming focused) - 45-60 minutes deep dive into coding, algorithms, and technical concepts',
       'HR Interview - 30-45 minutes discussing career aspirations, company values, and behavioral scenarios',
       'Document Verification - Comprehensive verification of academic records, certificates, and eligibility documents',
       'Offer Letter and Joining - Final offer letter with joining date and orientation details'
     ],
    preparationTips: [
      'Focus on programming fundamentals and data structures',
      'Practice coding problems on platforms like HackerRank, LeetCode',
      'Strengthen mathematical and logical reasoning skills',
      'Improve English communication and comprehension',
      'Practice time management for the aptitude section',
      'Stay updated with latest programming trends and technologies'
    ]
  },

  // Infosys 2025
  {
    companyId: 'infosys',
    companyName: 'Infosys',
    examName: 'Infosys Fresher Recruitment Process',
    year: 2025,
    platform: 'Infosys Assessment Platform',
    totalDuration: '100 minutes',
    totalQuestions: 74,
    sections: [
      {
        name: '🧠 Logical/Analytical Reasoning',
        duration: '25 minutes',
        questions: 15,
        topics: [
          {
            name: 'A. Puzzles & Arrangements',
            subTopics: [
              'Blood relations and family tree problems',
              'Direction sense and spatial reasoning',
              'Seating arrangements and ordering',
              'Logical puzzles and brain teasers'
            ],
            description: 'Complex logical reasoning and puzzle-solving skills'
          },
          {
            name: 'B. Coding-Decoding & Series',
            subTopics: [
              'Pattern recognition in coding-decoding',
              'Number and letter series completion',
              'Cryptarithmetic problems',
              'Logical sequence and pattern analysis'
            ],
            description: 'Pattern recognition and sequence analysis'
          },
          {
            name: 'C. Syllogisms & Deduction',
            subTopics: [
              'Syllogisms and logical deductions',
              'Statement and argument analysis',
              'Data sufficiency problems',
              'Critical reasoning and analytical thinking'
            ],
            description: 'Advanced analytical and critical thinking'
          }
        ],
        description: ' Logical thinking and analytical reasoning with strict sectional cutoff (70-80%)'
      },
      {
        name: '📊 Quantitative Ability',
        duration: '25 minutes',
        questions: 10,
        topics: [
          {
            name: 'A. Arithmetic & Percentages',
            subTopics: [
              'Percentage calculations and applications',
              'Ratio and proportion problems',
              'Profit and loss calculations',
              'Simple and compound interest'
            ],
            description: 'Core arithmetic and business mathematics'
          },
          {
            name: 'B. Time, Work & Mixtures',
            subTopics: [
              'Time and work problems with efficiency',
              'Mixtures and allegations',
              'Ages and time-based problems',
              'Speed, distance, and time calculations'
            ],
            description: 'Time management and mixture problems'
          },
          {
            name: 'C. Data Interpretation & Geometry',
            subTopics: [
              'Bar charts, pie charts, and line graphs',
              'Table data analysis and interpretation',
              'Geometry and mensuration',
              'Number series and mathematical patterns'
            ],
            description: 'Data analysis and geometric problem-solving'
          }
        ],
        description: 'Mathematical reasoning with focus on arithmetic and data interpretation'
      },
      {
        name: '📝 Verbal Ability',
        duration: '35 minutes',
        questions: 40,
        topics: [
          {
            name: 'A. Reading Comprehension',
            subTopics: [
              'Passage reading and analysis',
              'Main idea and supporting details',
              'Inference and conclusion drawing',
              'Context-based vocabulary understanding'
            ],
            description: 'Advanced reading and comprehension skills'
          },
          {
            name: 'B. Grammar & Sentence Correction',
            subTopics: [
              'Parts of speech and sentence structure',
              'Sentence correction and error detection',
              'Para-jumbles and sentence arrangement',
              'Grammar rules and language accuracy'
            ],
            description: 'English grammar mastery and sentence correction'
          },
          {
            name: 'C. Vocabulary & Critical Reasoning',
            subTopics: [
              'Word relationships and analogies',
              'Vocabulary building and word usage',
              'Critical reasoning and logical connections',
              'Verbal reasoning and language precision'
            ],
            description: 'Vocabulary enhancement and critical reasoning'
          }
        ],
        description: 'English language proficiency and communication skills (40 questions in 35 minutes)'
      },
      {
        name: '💻 Pseudo-code',
        duration: '10 minutes',
        questions: 5,
        topics: [
          {
            name: 'A. Programming Logic',
            subTopics: [
              'Variables, data types, and operators',
              'Control structures and loops',
              'Arrays and basic data structures',
              'Function calls and modular programming'
            ],
            description: 'Language-agnostic programming logic'
          },
          {
            name: 'B. Algorithm Analysis',
            subTopics: [
              'Basic DSA concepts and implementation',
              'Complexity analysis and optimization',
              'C/C++ style programming questions',
              'Problem-solving with pseudocode'
            ],
            description: 'Algorithm understanding and complexity analysis'
          }
        ],
        description: 'Programming logic in language-agnostic pseudocode format'
      },
      {
        name: '🧩 Puzzle Solving',
        duration: '5 minutes',
        questions: 4,
        topics: [
          {
            name: 'A. Number Puzzles',
            subTopics: [
              'Mathematical puzzles and brain teasers',
              'Number sequence and pattern recognition',
              'Logic-based number problems',
              'Cryptic mathematical reasoning'
            ],
            description: 'Mathematical puzzle-solving and pattern recognition'
          },
          {
            name: 'B. Visual Puzzles',
            subTopics: [
              'Visual pattern recognition',
              'Spatial reasoning and visualization',
              'Logical deduction from visual cues',
              'Complex visual problem-solving'
            ],
            description: 'Visual reasoning and spatial problem-solving'
          }
        ],
        description: 'Number and visual puzzles requiring logical analysis'
      }
    ],
    eligibility: [
      'B.E./B.Tech in any discipline (Computer Science preferred for SP/DSE)',
      'Minimum 60% in 10th, 12th, and graduation',
      'No active backlogs at the time of joining',
      'Good communication and analytical skills',
      '2023, 2024, 2025 batch students eligible',
      'InfyTQ certification beneficial for Specialist Programmer roles'
    ],
    careerPortal: 'https://career.infosys.com',
    selectionProcess: [
      'Round 1 - Online Aptitude Test - Fixed question round with Logical/Analytical Reasoning (~15 Qs), Quantitative Ability (~10 Qs), Verbal Ability (40 Qs), Pseudo-code (~5 Qs), and Puzzle (~4 Qs)',
      'Round 2 - Technical Interview - Live technical discussion covering DSA fundamentals, programming language proficiency (C/C++/Java/Python), OOP/DBMS/SQL basics, and algorithmic reasoning (no fixed MCQs)',
      'Round 3 - HR Interview - Behavioral and personal fit round covering motivation, communication skills, career goals, and alignment with Infosys culture and values (5-10 conversational questions, dialogue-based evaluation)',
      'Document Verification - Final verification of academic credentials, certificates, and eligibility requirements before offer letter'
    ],
    preparationTips: [
      'Practice sectional mocks under strict timing to clear each cutoff (70-80% sectional requirement)',
      'Strengthen logical and puzzle reasoning through varied puzzles, series, and cryptic deduction problems',
      'For quantitative ability, prioritize arithmetic, data interpretation, mixtures, and speed-accuracy balance',
      'Build vocabulary, grammar clarity, reading speed, and practice reading comprehension passages (40 verbal questions in 35 minutes)',
      'Master pseudo-code logic focusing on arrays, loops, conditionals, and complexity analysis',
      'For technical interview, prepare DSA fundamentals, programming concepts, and problem-solving approaches',
      'Practice behavioral questions for HR interview covering self-introduction, motivation, strengths/weaknesses, and project experiences (5-10 conversational questions)',
      'Practice time management and sectional cutoff strategies for the main aptitude test'
    ]
  },

  // Wipro 2025
  {
    companyId: 'wipro',
    companyName: 'Wipro',
    examName: 'Wipro Fresher Recruitment Process',
    year: 2025,
    platform: 'Wipro Assessment Platform',
    totalDuration: '130 minutes',
    totalQuestions: 57,
    sections: [
      {
        name: '📊 Quantitative Aptitude',
        duration: '18 minutes',
        questions: 18,
        topics: [
          {
            name: 'A. Arithmetic & Calculations',
            subTopics: [
              'Percentages, profit & loss, ratios',
              'Time-speed-work problems',
              'Averages, mixtures & allegations',
              'Probability and permutations'
            ],
            description: 'Mathematical reasoning and calculation skills'
          },
          {
            name: 'B. Data Interpretation',
            subTopics: [
              'Charts, tables, and graphs analysis',
              'Data sufficiency problems',
              'Statistical data interpretation',
              'Complex mathematical scenarios'
            ],
            description: 'Data analysis and interpretation skills'
          }
        ],
        description: 'Mathematical aptitude with focus on arithmetic and data interpretation'
      },
      {
        name: '🧩 Logical Reasoning',
        duration: '14 minutes',
        questions: 16,
        topics: [
          {
            name: 'A. Series & Patterns',
            subTopics: [
              'Number series and mathematical patterns',
              'Letter series and alphabetical patterns',
              'Mixed series and complex patterns',
              'Missing term identification'
            ],
            description: 'Pattern recognition and series completion'
          },
          {
            name: 'B. Arrangements & Puzzles',
            subTopics: [
              'Seating arrangements and positioning',
              'Blood relations and family trees',
              'Coding-decoding and symbol patterns',
              'Decision tables and logical deductions'
            ],
            description: 'Logical thinking and arrangement skills'
          },
          {
            name: 'C. Syllogisms & Logic',
            subTopics: [
              'Syllogistic reasoning',
              'Statement-assumption-conclusion',
              'Odd-one-out problems',
              'Logical consistency and validity'
            ],
            description: 'Logical reasoning and deductive thinking'
          }
        ],
        description: 'Logical thinking and analytical reasoning with focus on patterns and arrangements'
      },
      {
        name: '📝 Verbal Ability',
        duration: '18 minutes',
        questions: 20,
        topics: [
          {
            name: 'A. Reading Comprehension',
            subTopics: [
              'Passage analysis and interpretation',
              'Main idea and supporting details',
              'Inference and conclusion drawing',
              'Critical reading and analysis'
            ],
            description: 'Reading comprehension and passage analysis'
          },
          {
            name: 'B. Grammar & Vocabulary',
            subTopics: [
              'Grammar rules and sentence correction',
              'Vocabulary and word usage',
              'Synonyms, antonyms, and analogies',
              'Sentence completion and fill-in-the-blanks'
            ],
            description: 'English language proficiency and vocabulary'
          }
        ],
        description: 'English language proficiency and communication skills'
      },
      {
        name: '✍️ Essay Writing',
        duration: '20 minutes',
        questions: 1,
        topics: [
          {
            name: 'A. Structured Writing',
            subTopics: [
              'Argumentative and persuasive essays',
              'Descriptive and narrative writing',
              'Essay structure and organization',
              'Grammar and style in essays'
            ],
            description: 'Structured writing and argumentation skills'
          },
          {
            name: 'B. Topic Analysis',
            subTopics: [
              'General and technology topics',
              'Abstract and scenario-based topics',
              'Clear and coherent composition',
              '200-400 word structured essays'
            ],
            description: 'Essay writing on various topics with focus on clarity'
          }
        ],
        description: 'Written communication skills with structured essay composition'
      },
      {
        name: '💻 Coding Test',
        duration: '60 minutes',
        questions: 2,
        topics: [
          {
            name: 'A. Programming Fundamentals',
            subTopics: [
              'Variables, data types, and operators',
              'Control structures and loops',
              'Functions and modular programming',
              'Basic input/output operations'
            ],
            description: 'Core programming concepts and syntax'
          },
          {
            name: 'B. Data Structures & Algorithms',
            subTopics: [
              'Arrays and string manipulation',
              'Linked lists and dynamic memory',
              'Stacks, queues, and trees',
              'Sorting and searching algorithms'
            ],
            description: 'Data structures and algorithmic problem-solving'
          },
          {
            name: 'C. Problem Solving',
            subTopics: [
              'Array/matrix manipulation',
              'String processing and searches',
              'Linked list operations',
              'Stack applications and algorithms'
            ],
            description: 'Algorithmic thinking and problem-solving approaches'
          }
        ],
        description: 'Programming and coding skills with focus on hidden test cases'
      }
    ],
    eligibility: [
      'B.E./B.Tech (all branches except Fashion Tech, Agriculture, Textile)',
      'M.E./M.Tech (integrated courses)',
      'Minimum 60% in 10th, 12th, and graduation (6.0 CGPA+)',
      'No active backlogs (max 1 allowed but must be cleared before joining)',
      'Education gap: Max 3 years from 10th to graduation',
      'Age limit: Up to 25 years',
      '2022, 2023, 2024, 2025 batch students',
      'Indian citizenship or PIO/OCI allowed'
    ],
    careerPortal: 'https://careers.wipro.com',
    selectionProcess: [
      'Round 1 - Online Assessment (Mac Test) - 128 minutes comprehensive test covering Quantitative Aptitude (~18 Qs), Logical Reasoning (~16 Qs), Verbal Ability (~20 Qs), Essay Writing (1 essay), and Coding Test (2 problems) with sectional cutoffs',
      'Round 2 - Voice Assessment - 15-20 minutes prompt-based spoken English test evaluating fluency, pronunciation, and response clarity',
      'Round 3 - Business Discussion - Semi-formal interaction discussing essay topics, team scenarios, or business situations to assess communication confidence and business awareness',
      'Round 4 - Technical Interview - Deep dive into DSA fundamentals, programming language proficiency (C/C++/Java/Python), core CS topics (OOPS, DBMS, OS, Networking), and project-based questions from resume',
      'Round 5 - HR Interview - Final round focused on background, behavioral fit, relocation willingness, career aspirations, and alignment with Wipro values',
      'Document Verification - Final verification of academic credentials, certificates, and eligibility requirements before offer letter'
    ],
    preparationTips: [
      'Master sectional time constraints (18 min for quant, 14 for logic, 18 for verbal, 20 for essay, 60 for coding)',
      'Practice hidden test-case coding problems focusing on arrays, strings, linked lists, and sorting/searching algorithms',
      'Write essays focused on clarity, strong vocabulary, and minimal grammar mistakes (200-400 words)',
      'Strengthen quantitative skills in arithmetic, ratios, probability, data interpretation, and speed-accuracy balance',
      'Develop logical reasoning through series, puzzles, arrangements, and decision tables',
      'Build vocabulary, grammar clarity, and reading speed for verbal section',
      'Practice voice assessment with speaking prompts and extempore topics',
      'Prepare for business discussion rounds with team scenarios and business awareness',
      'Revise DSA fundamentals, OOPs, DBMS, and prepare behavioral responses for interview rounds',
      'Note: WILP variant (BCA/BSc graduates) has simplified online round (60-80 min) with no coding test'
    ]
  },

  // Cognizant 2025
  {
    companyId: 'cognizant',
    companyName: 'Cognizant',
    examName: 'Cognizant GenC 2025',
    year: 2025,
    platform: 'Cognizant Assessment Platform',
    totalDuration: '260 minutes (~4 hours 20 min)',
    totalQuestions: 143,
    sections: [
      {
        name: '🗣️ Communication Assessment',
        duration: '58 minutes',
        questions: 60,
        topics: [
          {
            name: 'A. Reading Comprehension',
            subTopics: [
              'Passage reading and analysis',
              'Main idea and supporting details',
              'Inference and conclusion drawing',
              'Context-based vocabulary understanding',
              'Critical reading and comprehension skills'
            ],
            description: 'Advanced reading and comprehension skills'
          },
          {
            name: 'B. Listening/Speaking Prompts',
            subTopics: [
              'Professional communication scenarios',
              'Client interaction and problem-solving',
              'Team collaboration and feedback',
              'Presentation skills and public speaking',
              'Active listening and response generation'
            ],
            description: 'Professional communication and listening skills'
          },
          {
            name: 'C. Storytelling',
            subTopics: [
              'Narrative structure and organization',
              'Engaging opening and conclusion',
              'Emotional connection and relatability',
              'Professional story development',
              'Clear and concise storytelling'
            ],
            description: 'Storytelling and narrative communication skills'
          }
        ],
        description: 'Communication skills assessment with focus on reading, listening, speaking, and storytelling'
      },
      {
        name: '🧠 Aptitude Assessment',
        duration: '100 minutes',
        questions: 80,
        topics: [
          {
            name: 'A. Quantitative Aptitude (25 Qs)',
            subTopics: [
              'Number system and arithmetic operations',
              'Percentage, profit & loss, time & work',
              'Ratio and proportion, averages, mixtures',
              'Data interpretation and analysis',
              'Geometry, mensuration, and algebra'
            ],
            description: 'Mathematical reasoning and quantitative analysis'
          },
          {
            name: 'B. Logical Reasoning (35 Qs)',
            subTopics: [
              'Blood relations and family tree problems',
              'Direction sense and spatial reasoning',
              'Coding-decoding and pattern recognition',
              'Syllogisms and logical deductions',
              'Seating arrangements and puzzles'
            ],
            description: 'Analytical thinking and logical problem-solving'
          },
          {
            name: 'C. Verbal Ability (20 Qs)',
            subTopics: [
              'Reading comprehension and passage analysis',
              'Grammar rules and sentence structure',
              'Vocabulary and word relationships',
              'Verbal analogies and reasoning',
              'Sentence correction and error detection'
            ],
            description: 'English language proficiency and communication'
          }
        ],
        description: 'Quant (25 Qs), Reasoning (35 Qs), Verbal (20 Qs), Comprehensive aptitude with shared timer and single submit button'
      },
      {
        name: '💻 Technical Assessment',
        duration: '105-120 minutes',
        questions: 3,
        topics: [
          {
            name: 'A. Cluster 1 - Java/SQL/Web UI (120 minutes)',
            subTopics: [
              'Coding (Java): arrays, strings, searching/sorting, OOP, exception handling',
              'SQL tasks: complex queries, joins, DDL/DML/constraints',
              'Web UI component: HTML, CSS, JS-based task',
              'Advanced programming and algorithmic problem-solving',
              'Database management and SQL expertise'
            ],
            description: 'Java-based development with SQL and web UI components'
          },
          {
            name: 'B. Cluster 2 - Python/SQL/Cloud (105 minutes)',
            subTopics: [
              'Coding (Python): DSA, file handling, OOP, modules',
              'SQL queries: similar to Cluster 1',
              'Cloud fundamentals MCQs: concepts, service models, providers, virtualization',
              'Python programming with data structures and algorithms',
              'Cloud computing and database management skills'
            ],
            description: 'Python-based development with SQL and cloud computing'
          }
        ],
        description: 'Technical assessment with 3 major tasks. Candidates select one cluster (subject to availability): Cluster 1 (Java/SQL/Web UI) - 120 minutes, Cluster 2 (Python/SQL/Cloud) - 105 minutes'
      }
    ],
    eligibility: [
      'B.E./B.Tech in any discipline (Computer Science preferred for technical roles)',
      'Minimum 60% in 10th, 12th, and graduation',
      'No active backlogs at the time of joining',
      'Good communication and analytical skills',
      '2023, 2024, 2025 batch students eligible',
      'Strong technical foundation for technical assessment'
    ],
    careerPortal: 'https://careers.cognizant.com',
    selectionProcess: [
      'Communication Assessment - 58 minutes assessment covering reading, listening/speaking, and storytelling skills',
      'Aptitude Assessment - 100 minutes comprehensive test covering Quantitative (25 Qs), Reasoning (35 Qs), and Verbal (20 Qs) with shared timer',
      'Technical Assessment - 105-120 minutes with 3 major tasks: cluster-specific coding, SQL database management, and cloud/UI development',
      'Technical Interview - 45-60 minutes deep dive into programming concepts, technical knowledge, and problem-solving',
      'HR Interview - 30-45 minutes covering behavioral questions, career goals, and company culture alignment',
      'Document Verification - Final verification of academic credentials and eligibility requirements'
    ],
    preparationTips: [
      'Focus on communication skills for the first round - practice reading, listening, and storytelling',
      'Master aptitude topics with emphasis on logical reasoning (35 Qs) and quantitative aptitude (25 Qs)',
      'Practice time management for the shared timer in aptitude assessment',
      'Prepare for technical assessment with coding, SQL, and cloud/UI development skills',
      'Work on cluster-specific technical skills based on your specialization',
      'Improve English communication and comprehension skills',
      'Solve Cognizant previous year papers and mock tests',
      'Practice storytelling and professional communication scenarios'
    ]
  },

  // Capgemini 2025
  {
    companyId: 'capgemini',
    companyName: 'Capgemini',
    examName: 'Capgemini Fresher Recruitment Process',
    year: 2025,
    platform: 'Capgemini Assessment Platform',
    totalDuration: '104 minutes',
    totalQuestions: 164,
    sections: [
      {
        name: '💻 Pseudo-code Technical MCQs',
        duration: '30 minutes',
        questions: 30,
        topics: [
          {
            name: 'A. Data Structures & Algorithms',
            subTopics: [
              'Arrays, linked lists, stacks, and queues',
              'Sorting and searching algorithms',
              'Time and space complexity analysis',
              'Basic programming logic and flow control'
            ],
            description: 'Programming logic and algorithmic thinking'
          },
          {
            name: 'B. Programming Concepts',
            subTopics: [
              'Variables, data types, and operators',
              'Control structures and loops',
              'Functions and modular programming',
              'Code analysis and debugging techniques'
            ],
            description: 'Core programming concepts and syntax'
          }
        ],
        description: 'Technical aptitude with focus on programming logic and DSA fundamentals'
      },
      {
        name: '📝 English Communication Test',
        duration: '30 minutes',
        questions: 30,
        topics: [
          {
            name: 'A. Grammar & Vocabulary',
            subTopics: [
              'Grammar rules and sentence correction',
              'Vocabulary and word usage',
              'Synonyms, antonyms, and analogies',
              'Sentence completion and fill-in-the-blanks'
            ],
            description: 'English language proficiency and vocabulary'
          },
          {
            name: 'B. Reading Comprehension',
            subTopics: [
              'Passage analysis and interpretation',
              'Main idea and supporting details',
              'Inference and conclusion drawing',
              'Critical reading and analysis'
            ],
            description: 'Reading comprehension and passage analysis'
          },
          {
            name: 'C. Cloze Tests',
            subTopics: [
              'Context-based word selection',
              'Logical flow and coherence',
              'Grammar and vocabulary in context',
              'Text completion and understanding'
            ],
            description: 'Context-based language understanding and application'
          }
        ],
        description: 'English language proficiency and communication skills'
      },
      {
        name: '🎮 Game-based Aptitude',
        duration: '24 minutes',
        questions: 4,
        topics: [
          {
            name: 'A. Deductive & Inductive Logic',
            subTopics: [
              'Logical reasoning and pattern recognition',
              'Sequence completion and analysis',
              'Decision-making and problem-solving',
              'Critical thinking and analysis'
            ],
            description: 'Logical reasoning and analytical thinking'
          },
          {
            name: 'B. Memory & Planning',
            subTopics: [
              'Memory retention and recall tasks',
              'Strategic planning and execution',
              'Multi-step problem solving',
              'Attention and concentration tests'
            ],
            description: 'Memory, planning, and cognitive assessment'
          },
          {
            name: 'C. Motion Grids & Switch Puzzles',
            subTopics: [
              'Visual pattern identification',
              'Spatial reasoning and visualization',
              'Switch-based logic puzzles',
              'Motion and movement analysis'
            ],
            description: 'Visual-spatial reasoning and puzzle solving'
          }
        ],
        description: 'Interactive aptitude assessment through gamified challenges'
      },
      {
        name: '🧠 Behavioral Competency Test',
        duration: '20 minutes',
        questions: 100,
        topics: [
          {
            name: 'A. Situational Judgment',
            subTopics: [
              'Workplace scenarios and decision-making',
              'Team collaboration and conflict resolution',
              'Professional ethics and integrity',
              'Adaptability and problem-solving'
            ],
            description: 'Situational judgment and workplace scenarios'
          },
          {
            name: 'B. Personality Assessment',
            subTopics: [
              'Leadership and teamwork traits',
              'Communication and interpersonal skills',
              'Stress management and resilience',
              'Career motivation and goals'
            ],
            description: 'Personality traits and behavioral competencies'
          }
        ],
        description: 'Behavioral assessment and personality evaluation'
      }
    ],
    eligibility: [
      'BE/B.Tech/ME/M.Tech in relevant branches (CS, IT, IS, CE, ECE, Electrical, AI, Robotics)',
      'MCA or MSc in CS/IT',
      'Minimum 60% in 10th, 12th, and graduation (aggregate of 7 semesters)',
      'No active backlogs at the time of assessment and joining',
      'Education gap: No more than 2 years gap overall',
      'Age limit: Typically 18–25 years (depending on drive)',
      '2023, 2024, 2025 batch students',
      'Relocation flexibility and willingness to work in different locations and shifts'
    ],
    careerPortal: 'https://careers.capgemini.com',
    selectionProcess: [
      'Round 1 - Online Assessment (Aptitude & Behavioral) - 105 minutes comprehensive test covering Pseudo-code Technical MCQs (30 Qs), English Communication Test (30 Qs), Game-based Aptitude (4 games), and Behavioral Competency Test (100 items) with sectional cutoffs (~70%)',
      'Round 2 - Coding Assessment (For higher-package roles) - Selected candidates for Analyst/Senior Analyst roles with C, C++, Java (sometimes Python) coding tasks of medium difficulty',
      'Round 3 - Spoken English Assessment - Virtual elimination-based test focusing on reading, speaking, comprehending, and listening fluency',
      'Round 4 - Screening Interview - General discussion covering background, interests, and fit for Capgemini',
      'Round 5 - Technical Interview - Deep dive into DSA fundamentals, DBMS, networking, OS, and role-specific domain knowledge with possible live coding',
      'Round 6 - HR Interview - Final round discussing resume, motivations, and alignment with Capgemini culture',
      'Document Verification - Final verification of academic credentials and eligibility requirements'
    ],
    preparationTips: [
      'Practice pseudo-code MCQs focusing on loops, conditionals, arrays, and basic DSA logic',
      'Sharpen English skills in grammar, error spotting, comprehension, and vocabulary',
      'Familiarize with game-type logic puzzles like motion grids and switch puzzles to train reasoning',
      'Prepare for psychometric scenarios with decisive and consistent behavioral choices',
      'Practice coding readiness with medium-level DSA tasks using standard languages (if applicable)',
      'Revise CS fundamentals including OOP/DBMS and prepare behavioral questions for interviews',
      'Focus on time management with strict sectional time constraints',
      'Practice spoken English assessment with reading and speaking prompts',
      'Prepare for technical interview with DSA, networking, and domain-specific knowledge'
    ]
  },

  // Accenture 2025
  {
    companyId: 'accenture',
    companyName: 'Accenture',
    examName: 'Accenture Fresher Recruitment Process',
    year: 2025,
    platform: 'Accenture Assessment Platform',
    totalDuration: '90 minutes',
    totalQuestions: 90,
    sections: [
      {
        name: '🧠 Cognitive Ability',
        duration: '50 minutes',
        questions: 50,
        topics: [
          {
            name: 'A. English Ability',
            subTopics: [
              'Reading comprehension and passage analysis',
              'Grammar rules and sentence correction',
              'Vocabulary and word relationships',
              'Verbal analogies and reasoning'
            ],
            description: 'English language proficiency and communication skills'
          },
          {
            name: 'B. Critical Reasoning & Problem Solving',
            subTopics: [
              'Logical reasoning and analytical thinking',
              'Blood relations and family tree problems',
              'Direction sense and spatial reasoning',
              'Coding-decoding and pattern recognition'
            ],
            description: 'Critical thinking and problem-solving abilities'
          },
          {
            name: 'C. Abstract Reasoning',
            subTopics: [
              'Visual pattern identification and analysis',
              'Sequence completion and series problems',
              'Spatial reasoning and visualization',
              'Non-verbal reasoning and pattern recognition'
            ],
            description: 'Abstract thinking and pattern recognition'
          }
        ],
        description: 'Cognitive skills assessment covering English, reasoning, and abstract thinking'
      },
      {
        name: '💻 Technical Aptitude',
        duration: '40 minutes',
        questions: 40,
        topics: [
          {
            name: 'A. Common Applications & Microsoft Office',
            subTopics: [
              'MS Word, Excel, PowerPoint proficiency',
              'Document formatting and presentation skills',
              'Data analysis and spreadsheet operations',
              'Office productivity tools and applications'
            ],
            description: 'Office productivity and application skills'
          },
          {
            name: 'B. Pseudocode & Programming Logic',
            subTopics: [
              'Algorithm design and flowcharts',
              'Programming logic and problem-solving',
              'Code analysis and debugging',
              'Basic programming concepts and syntax'
            ],
            description: 'Programming logic and algorithmic thinking'
          },
          {
            name: 'C. Networking, Security & Cloud Fundamentals',
            subTopics: [
              'OSI model and network protocols',
              'Basic security concepts and protocols',
              'Cloud computing fundamentals',
              'Computer network and infrastructure basics'
            ],
            description: 'Networking, security, and cloud computing basics'
          }
        ],
        description: 'Technical knowledge assessment for both technical and non-technical roles'
      }
    ],
    eligibility: [
      'For Technical Roles (ASE, AASE): BE/B.Tech, ME/M.Tech, MCA, or M.Sc (CS/IT)',
      'For Non-Technical Roles: B.Sc, BBA, BCA, BA, B.Com accepted (non-engineering)',
      'Batches: 2023, 2024, 2025 (some drives include 2022)',
      'Academic Score: ≥ 60% or ≥ 6.5 CGPA in 10th, 12th, and graduation/PG',
      'No active backlog at application or joining',
      'Education Gap: Max 1-year gap allowed (post-10th and before graduation only)',
      'Experience: Freshers or < 11 months full-time experience; no prior Accenture interview in last 3 months',
      'Age Limit: Typically 18–25 or up to 30 years, depending on role',
      'Citizenship: Indian, PIO/OCI; Nepal/Bhutan nationals may apply without visa restrictions'
    ],
    careerPortal: 'https://careers.accenture.com',
    selectionProcess: [
      'Stage 1 - Online Written Assessment - 90 minutes for technical roles covering Cognitive Ability (50 MCQs/50 min) and Technical Aptitude (40 MCQs/40 min) with cumulative sectional & overall cut-offs around 60–70%',
      'Stage 2 - Communication Assessment - 20–30 minutes focusing on sentence mastery, vocabulary, short speaking tasks, and pronunciation evaluation (mandatory for most roles)',
      'Stage 3 - Technical Interview - Deep dive into coding/DSA fundamentals, algorithms, OOP, DBMS, networking, cloud basics with possible live coding or pseudo-code discussions',
      'Stage 4 - HR Interview - Final evaluation of personal fit, motivations, background, career goals, and flexibility for shifts and relocation',
      'Document Verification - Final verification of academic credentials and eligibility requirements'
    ],
    preparationTips: [
      'Master cognitive ability with focus on English, critical reasoning, and abstract thinking',
      'Practice technical aptitude covering MS Office, programming logic, and networking fundamentals',
      'Prepare for communication assessment with sentence mastery and pronunciation practice',
      'Revise coding fundamentals, DSA, OOP, DBMS, and networking for technical interview',
      'Practice behavioral questions and prepare responses for HR interview',
      'Focus on time management with strict sectional time constraints',
      'Practice mock tests with cumulative sectional and overall cut-off strategies',
      'Prepare for both technical and non-technical role requirements',
      'Note: Many online stages are conducted virtually with background verifications after offer'
    ]
  },

  // HCL 2025
  {
    companyId: 'hcl',
    companyName: 'HCL',
    examName: 'HCL Fresher Recruitment Process',
    year: 2025,
    platform: 'HCL Assessment Platform',
    totalDuration: '105-125 minutes',
    totalQuestions: 77,
    sections: [
      {
        name: '📊 Quantitative Ability',
        duration: '15 minutes',
        questions: 15,
        topics: [
          {
            name: 'A. Arithmetic & Calculations',
            subTopics: [
              'Percentages, profit & loss, ratios',
              'Time-speed-work problems',
              'Averages, mixtures & allegations',
              'Probability and permutations'
            ],
            description: 'Mathematical reasoning and calculation skills'
          },
          {
            name: 'B. Data Interpretation',
            subTopics: [
              'Charts, tables, and graphs analysis',
              'Data sufficiency problems',
              'Statistical data interpretation',
              'Complex mathematical scenarios'
            ],
            description: 'Data analysis and interpretation skills'
          }
        ],
        description: 'Mathematical aptitude with focus on arithmetic and data interpretation'
      },
      {
        name: '🧩 Logical Reasoning',
        duration: '15 minutes',
        questions: 15,
        topics: [
          {
            name: 'A. Series & Patterns',
            subTopics: [
              'Number series and mathematical patterns',
              'Letter series and alphabetical patterns',
              'Mixed series and complex patterns',
              'Missing term identification'
            ],
            description: 'Pattern recognition and series completion'
          },
          {
            name: 'B. Arrangements & Puzzles',
            subTopics: [
              'Seating arrangements and positioning',
              'Blood relations and family trees',
              'Coding-decoding and symbol patterns',
              'Decision tables and logical deductions'
            ],
            description: 'Logical thinking and arrangement skills'
          }
        ],
        description: 'Logical thinking and analytical reasoning with focus on patterns and arrangements'
      },
      {
        name: '📝 Verbal Ability',
        duration: '15 minutes',
        questions: 15,
        topics: [
          {
            name: 'A. Reading Comprehension',
            subTopics: [
              'Passage analysis and interpretation',
              'Main idea and supporting details',
              'Inference and conclusion drawing',
              'Critical reading and analysis'
            ],
            description: 'Reading comprehension and passage analysis'
          },
          {
            name: 'B. Grammar & Vocabulary',
            subTopics: [
              'Grammar rules and sentence correction',
              'Vocabulary and word usage',
              'Synonyms, antonyms, and analogies',
              'Sentence completion and fill-in-the-blanks'
            ],
            description: 'English language proficiency and vocabulary'
          }
        ],
        description: 'English language proficiency and communication skills'
      },
      {
        name: '💻 Computer Fundamentals',
        duration: '30 minutes',
        questions: 30,
        topics: [
          {
            name: 'A. Programming Logic & Pseudo-code',
            subTopics: [
              'Algorithm design and flowcharts',
              'Programming logic and problem-solving',
              'Code analysis and debugging',
              'Basic programming concepts and syntax'
            ],
            description: 'Programming logic and algorithmic thinking'
          },
          {
            name: 'B. Core CS Concepts',
            subTopics: [
              'Object-Oriented Programming (OOP)',
              'Database Management Systems (DBMS)',
              'Operating Systems fundamentals',
              'Computer Networks and protocols'
            ],
            description: 'Core computer science concepts and fundamentals'
          },
          {
            name: 'C. Data Structures & Algorithms',
            subTopics: [
              'Arrays, linked lists, and dynamic memory',
              'Stacks, queues, trees, and graphs',
              'Sorting and searching algorithms',
              'Time and space complexity analysis'
            ],
            description: 'Data organization and algorithmic thinking'
          }
        ],
        description: 'Technical knowledge assessment covering programming and CS fundamentals'
      },
      {
        name: '📝 Pen-and-Paper Coding Round',
        duration: '20 minutes',
        questions: 2,
        topics: [
          {
            name: 'A. Manual Coding Tasks',
            subTopics: [
              'Write code manually in any programming language',
              'Problem-solving under pressure and time constraints',
              'Algorithm implementation and logic development',
              'Code structure and syntax accuracy'
            ],
            description: 'Onsite manual coding assessment focusing on problem-solving skills'
          },
          {
            name: 'B. Programming Fundamentals',
            subTopics: [
              'Basic programming concepts and syntax',
              'Control structures and loops',
              'Functions and modular programming',
              'Data structure implementation'
            ],
            description: 'Core programming skills and logical thinking'
          }
        ],
        description: 'Onsite pen-and-paper coding round where candidates write code manually within time limits'
      },
  
    ],
    eligibility: [
      'BE/B.Tech, ME/M.Tech in core engineering branches (CSE, IT, ECE, EEE, Mechanical, etc.)',
      'Academic cut-off: ≥ 60-75% or ≥ 6.0 CGPA on all academic levels (10th, 12th, Graduation)',
      'No active backlog at the time of application or joining',
      'Education gap: Ideally none; some drives allow max 1-2 years total gap',
      'Age limit: Usually ≤ 25 years',
      'Batches: 2023, 2024, 2025 (occasionally 2022 depending on drive)',
      'Flexible relocation/shifts required'
    ],
    careerPortal: 'https://careers.hcl.com',
    selectionProcess: [
      'Round 1 - Online Test (Aptitude & Technical Logic) - 75-95 minutes adaptive format with ~75 questions covering Quantitative Ability (15 Qs), Logical Reasoning (15 Qs), Verbal Ability (15 Qs), and Computer Fundamentals (30 Qs) with sectional and overall cut-offs',
      'Round 2 - Group Discussion (GD) - 20 minutes with 14-16 participants discussing topics like "Social Media for Professionals" evaluating communication clarity, logical thought, and respectful participation',
      'Round 3 - Pen-and-Paper Coding - Candidates write code manually in any language within time limit focusing on problem-solving under pressure',
      'Round 4 - Technical Interview - 10-30 minutes resume discussion, previous round code explanation, core CS questions (JIT compiler, polymorphism, test scenarios)',
      'Round 5 - HR Interview - 5-10 minutes behavioral & motivation-based questions covering self-intro, strengths/weaknesses, long-term goals, willingness to relocate or shift',
      'Document Verification - Final verification of academic credentials and eligibility requirements'
    ],
    preparationTips: [
      'Practice aptitude & reasoning: arithmetic, series, coding-decoding, puzzles',
      'Sharpen verbal skills: comprehension, grammar error spotting, vocabulary',
      'Master computer fundamentals: pseudo-code logic, basic DS&A, SQL concepts, OS, and networking basics',
      'Practice coding: solve 1-2 problems like printing patterns, Armstrong number, string/array logic manually under 20 min',
      'Develop GD skills: thoughtful opinions, active listening, concise participation',
      'Prepare for interviews: revise resume projects, be ready to solve code you wrote earlier, prepare behavioral responses',
      'Focus on time management with strict sectional time constraints',
      'Note: Test difficulty ranges from moderate to high for programming section; aptitude is moderate'
    ]
  },

  // Tech Mahindra 2025
  {
    companyId: 'tech-mahindra',
    companyName: 'Tech Mahindra',
    examName: 'Tech Mahindra Fresher Recruitment 2025',
    year: 2025,
    platform: 'Tech Mahindra Assessment Platform',
    totalDuration: '~215 minutes (4 rounds)',
    totalQuestions: 135,
    sections: [
      {
        name: '🧪 Round 1 — Online Aptitude Test',
        duration: '85 minutes (60 + 25)',
        questions: 37,
        topics: [
          {
            name: 'A. Logical Reasoning (~12 Qs)',
            subTopics: [
              'Blood relations and family tree problems',
              'Direction sense and spatial reasoning',
              'Coding-decoding and pattern recognition',
              'Syllogisms and logical deductions',
              'Seating arrangements and puzzles'
            ],
            description: 'Analytical thinking and logical problem-solving'
          },
          {
            name: 'B. Quantitative Ability (~12 Qs)',
            subTopics: [
              'Number system and arithmetic operations',
              'Percentage, profit & loss, time & work',
              'Ratio and proportion, averages, mixtures',
              'Data interpretation and analysis',
              'Geometry, mensuration, and algebra'
            ],
            description: 'Mathematical reasoning and quantitative analysis'
          },
          {
            name: 'C. English (~12 Qs)',
            subTopics: [
              'Grammar, vocabulary, reading comprehension',
              'Sentence correction and error detection',
              'Fill in the blanks and cloze test',
              'Synonyms, antonyms, and verbal analogies',
              'Para jumbles and sentence rearrangement'
            ],
            description: 'English language proficiency and communication'
          },
          {
            name: 'D. Essay/Story Writing (1 task)',
            subTopics: [
              'Choose and write a short narrative/story/essay',
              'Given prompt-based writing',
              '200-300 word narratives in ~25 minutes',
              'General or abstract topics',
              'Clear and structured writing'
            ],
            description: 'Creative writing and narrative skills assessment'
          }
        ],
        description: 'Logical, Quant, English + Essay	36 MCQs + 1 essay. Strict sectional timing applies—cannot navigate back, elimination if you miss a section'
      },
      {
        name: '⚙️ Round 2 — Technical + Psychometric Test',
        duration: '90 minutes',
        questions: 98,
        topics: [
          {
            name: 'A. Computer Programming MCQs (12 Qs)',
            subTopics: [
              'Programming fundamentals and logic',
              'Variables, data types, and operators',
              'Control structures and loops',
              'Functions and modular programming',
              'Object-oriented programming concepts'
            ],
            description: 'Core programming concepts and syntax'
          },
          {
            name: 'B. Computer Science MCQs (12 Qs)',
            subTopics: [
              'Data structures and algorithms',
              'Operating systems and networking',
              'Database management systems',
              'Software engineering concepts',
              'Computer architecture and organization'
            ],
            description: 'Computer science fundamentals and concepts'
          },
          {
            name: 'C. Automata Fix (2 tasks)',
            subTopics: [
              'Coding-like tasks with partially complete code',
              'Fill in remaining logic (~70% shown, complete ~30%)',
              'Programming logic and problem-solving',
              'Code debugging and testing',
              'Algorithm implementation'
            ],
            description: 'Advanced programming and code completion skills'
          },
          {
            name: 'D. Personality/Psychometric Test (~72 Qs)',
            subTopics: [
              'Situational judgment tests',
              'Personality assessment questions',
              'Decision-making scenarios',
              'Behavioral and situational questions',
              'Professional attitude and work style'
            ],
            description: 'Personality and behavioral assessment'
          }
        ],
        description: 'Aimed to assess programming logic, CS concepts, decision-making, and personality traits'
      },
      {
        name: '🗣️ Round 3 — Conversational/Verbal Communication',
        duration: '15-20 minutes',
        questions: 2,
        topics: [
          {
            name: 'A. Spoken English Fluency',
            subTopics: [
              'Professional communication scenarios',
              'One-on-one speaking prompts',
              'Clear and structured speech',
              'Articulation and pronunciation',
              'Conversational format evaluation'
            ],
            description: 'Evaluates spoken English fluency and articulation'
          },
          {
            name: 'B. Verbal Communication Skills',
            subTopics: [
              'Q&A or brief speaking tasks',
              'Professional communication scenarios',
              'Active listening and response generation',
              'Presentation skills and public speaking',
              'Small groups or 1:1 setting'
            ],
            description: 'Professional communication and speaking skills'
          }
        ],
        description: 'Reading a paragraph aloud, Speaking on a random topic for 1–2 minutes Answering simple conversational questions (self‑intro, opinion‑based)'
      }
    ],
    eligibility: [
      'B.E./B.Tech in any discipline',
      'Minimum 60-70% aggregate academics (10th, 12th, graduation)',
      'No active backlogs at the time of joining',
      'Good communication and analytical skills',
      '2023, 2024, 2025 batch students eligible',
      'Two CTC packages: 3.25 LPA (Rounds 1-2) or 5.5 LPA (Supercoder track)'
    ],
    careerPortal: 'https://careers.techmahindra.com',
    selectionProcess: [
      'Round 1 - Online Aptitude Test - 85 minutes with Logical, Quant, English + Essay writing',
      'Round 2 - Technical + Psychometric Test - 90 minutes with Programming MCQs, CS MCQs, Automata Fix, and Personality test',
      'Round 3 - Conversational/Verbal Communication - 15-20 minutes spoken English evaluation',
      'Round 4 - Technical + HR Interviews - 50-75 minutes covering technical knowledge and behavioral aspects',
      'All rounds are elimination-based with no negative marking often reported',
      'Document Verification - Final verification of academic credentials and eligibility requirements'
    ],
    preparationTips: [
      'Practice timed aptitude problems by section (quant, reasoning, verbal) under strict limits',
      'Write 200-300 word narratives in ~25 minutes on general or abstract topics for essay',
      'Review MCQs on programming fundamentals (OOP, data types, algorithms, networking, OS basics)',
      'Practice logic completion problems for Automata Fix—understanding code snippets to finish tasks',
      'Prepare for situational judgment tests and personality assessment examples',
      'Simulate one-on-one speaking prompts and practice clear, structured speech',
      'Brush up on data structures, SQL, coding scenarios, projects explanation, and behavioral questions',
      'Solve Tech Mahindra previous year papers and mock tests',
      'Work on time management for strict sectional timing'
    ]
  },

  // Amazon 2025
  {
    companyId: 'amazon',
    companyName: 'Amazon',
    examName: 'Amazon SDE-I Online Assessment (OA)',
    year: 2025,
    platform: 'Amazon Assessment Platform (HackerRank)',
    totalDuration: '200 minutes (2.5-3 hours)',
    totalQuestions: 49,
    sections: [
      {
        name: '🐛 Code Debugging (OA1)',
        duration: '20 minutes',
        questions: 7,
        topics: [
          {
            name: 'A. Debugging MCQs',
            subTopics: [
              'Logic or syntax bug fixes in code samples',
              'Java, C, C++ code debugging',
              'Algorithm logic correction',
              'Code snippet analysis and fixes'
            ],
            description: 'Debugging MCQs for new graduate/intern roles only'
          }
        ],
        description: '7 debugging MCQs or snippet fixes in 20 minutes for intern/new grad roles'
      },
      {
        name: '💻 Coding Assessment (OA2)',
        duration: '70 minutes',
        questions: 2,
        topics: [
          {
            name: 'A. Programming Problems',
            subTopics: [
              'Arrays, strings, hashmaps, sliding window',
              'Recursion, dynamic programming',
              'Graph algorithms and optimization',
              'One easy/medium, one medium/hard problem'
            ],
            description: 'Two coding problems with focus on data structures and algorithms'
          },
          {
            name: 'B. Language Support',
            subTopics: [
              'C, C++, Java, Python, JavaScript',
              'Ruby, Swift, C# allowed',
              'Code optimization and efficiency',
              'Test case management and edge cases'
            ],
            description: 'Multiple programming languages supported with focus on efficiency'
          }
        ],
        description: 'Two problems: one easy/medium, one medium/hard in 70 minutes'
      },
      {
        name: '🎯 Work Simulation (OA3)',
        duration: '60 minutes',
        questions: 1,
        topics: [
          {
            name: 'A. Scenario-Based Modules',
            subTopics: [
              'Typical SDE decision scenarios',
              'Workplace situation handling',
              'Technical problem-solving in context',
              'Amazon culture and principles application'
            ],
            description: 'Scenario-based modules mimicking typical SDE decisions'
          }
        ],
        description: 'Work simulation with scenario-based modules mimicking typical SDE decisions'
      },
      {
        name: '🧭 Work Style Assessment (OA3)',
        duration: '15 minutes',
        questions: 15,
        topics: [
          {
            name: 'A. Amazon Leadership Principles',
            subTopics: [
              'Customer Obsession and ownership',
              'Earn Trust and dive deep',
              'Have backbone and deliver results',
              'Insist on highest standards',
              'Think big and bias for action'
            ],
            description: 'Slider-style situational judgment aligned with Amazon Leadership Principles'
          }
        ],
        description: 'Slider-style situational judgment aligned with Amazon Leadership Principles'
      },
      {
        name: '🧠 Logical Reasoning (Optional)',
        duration: '35 minutes',
        questions: 24,
        topics: [
          {
            name: 'A. Deductive/Inductive Reasoning',
            subTopics: [
              'Logical reasoning MCQs',
              'Pattern recognition and analysis',
              'Critical thinking assessment',
              'May appear separately or bundled in OA3'
            ],
            description: 'Deductive/inductive reasoning assessment'
          }
        ],
        description: '24 MCQs in 35 minutes on deductive/inductive reasoning (may appear separately or bundled)'
      }
    ],
    eligibility: [
      'Bachelor\'s degree or higher in Computer Science, Computer Engineering, or closely related fields (Software Engineering, Information Science)',
      'Batch eligibility: 2022, 2023, 2024, 2025 graduates (some internal listings may reference 2023-2024 primarily)',
      'Work experience: Up to 1 year of non-internship software development experience preferred; freshers without internships still eligible',
      'Technical fit: Proficiency in at least one programming language (C++, Java, Python, or Perl)',
      'Strong foundational knowledge: Data Structures & Algorithms, Complexity Analysis, Object-Oriented Programming (OOP), Problem-solving and logical design',
      'Preferred qualifications: Previous technical internship or substantial project experience highly valued',
      'Familiarity with distributed systems, cloud infrastructure (AWS), microservices architecture, and database design considered a plus',
      'Clear communication skills and ability to articulate technical problems and solutions preferred',
      'Only full-time degree holders eligible; part-time or correspondence programs not accepted',
      'Avoid applying again if taken Amazon interview or assessment within last 6 months'
    ],
    careerPortal: 'https://www.amazon.jobs',
         selectionProcess: [
      'Stage 1 - Online Assessment (OA) - Up to 4 components totaling around 180 minutes (2.5-3 hours) including Code Debugging (20 min), Coding Assessment (70 min), Work Simulation (60 min), Work Style Assessment (15 min), and optional Logical Reasoning (35 min)',
      'Stage 2 - Technical Interview (1-2 rounds) - 45-60 minutes each focusing on coding problems, system design, and technical deep-dive questions',
      'Stage 3 - Bar Raiser / Leadership Round - 45-60 minutes assessing leadership principles, behavioral scenarios, and Amazon culture fit',
      'Stage 4 - HR Interview - 30-45 minutes covering career goals, behavioral questions, and final company alignment',
       'Document Verification - Final verification of academic credentials, work authorization, and eligibility requirements'
     ],
    preparationTips: [
      'Practice LeetCode Medium-level problems focusing on arrays, strings, hashmaps, sliding window, recursion, DP',
      'Prepare for debugging rounds (OA1) with code analysis and bug identification practice',
      'Study Amazon\'s Leadership Principles thoroughly for work simulation and style assessment',
      'Practice scenario-based decision making aligned with Amazon culture',
      'Take full mock OAs under timed conditions (2.5-3 hours)',
      'Focus on coding efficiency and optimization with multiple test cases',
      'Prepare for both easy/medium and medium/hard coding problems',
      'Practice logical reasoning if that section appears in your OA',
      'Note: Many candidates finish OA within ~2.5 hours, but full sessions can extend to 3-4 hours depending on sections included'
    ]
  },

  // Microsoft 2025
  {
    companyId: 'microsoft',
    companyName: 'Microsoft',
    examName: 'Microsoft SDE-I Online Assessment',
    year: 2025,
    platform: 'Microsoft Assessment Platform (Codility/HackerRank)',
    totalDuration: '~180 minutes',
    totalQuestions: 3,
    sections: [
      {
        name: '💻 Online Coding Assessment',
        duration: '60-90 minutes',
        questions: 2,
        topics: [
          {
            name: 'A. Algorithm Problems',
            subTopics: [
              'Arrays, Linked Lists, Binary Trees, Graphs',
              'Dynamic Programming, string manipulation',
              'Search and sort algorithms',
              'Hash maps and advanced data structures'
            ],
            description: 'Medium-level DSA questions (easy to medium/hard difficulty)'
          },
          {
            name: 'B. Problem Solving',
            subTopics: [
              'Complex algorithmic challenges',
              'Multi-step problem solving',
              'Code optimization and efficiency',
              'Time and space complexity analysis'
            ],
            description: 'Complex problem-solving and algorithmic optimization'
          }
        ],
        description: 'Online coding assessment with algorithmic problems (≥60% score required to proceed)'
      },
      {
        name: '🧠 Technical Interview Rounds',
        duration: '45 minutes each',
        questions: 1,
        topics: [
          {
            name: 'A. Coding & DSA',
            subTopics: [
              'Medium-level DSA questions (trees, DP, graphs, hashmaps)',
              'Live coding with peer engineers',
              'Google Docs for virtual interviews',
              'Algorithm analysis and improvement'
            ],
            description: 'Technical coding rounds with live peer engineers'
          },
          {
            name: 'B. System Design (Optional)',
            subTopics: [
              'Low-level system design',
              'Design patterns and architecture',
              'Database design and optimization',
              'Performance and scalability considerations'
            ],
            description: 'Optional low-level system design for standout candidates'
          }
        ],
        description: '2-3 technical interview rounds focusing on coding and system design'
      },
      {
        name: '👥 Behavioral/Leadership Round',
        duration: '45 minutes',
        
        topics: [
          {
            name: 'A. Behavioral Assessment',
            subTopics: [
              'Problem-solving and ownership',
              'Collaboration and teamwork',
              'Growth mindset and learning',
              'Leadership principles'
            ],
            description: 'Behavioral leadership evaluation (AA - As Appropriate round)'
          }
        ],
        description: 'Behavioral round evaluating leadership principles and collaboration'
      }
    ],
    eligibility: [
      'Bachelor\'s, Master\'s, or dual degree in Computer Science / Computer Engineering / equivalent',
      'Class X & XII: ≥70%, Graduation/PG: ≥6.0 CGPA or 70%',
      'Allowed maximum 2 years academic gap, no active backlogs at time of application or joining',
      'Proficiency in C, C++, Java, C#, Python, JavaScript, etc.',
      'Strong grasp of DSA, OOP concepts, complexity analysis, and problem-solving',
      'Internship or project experience preferred (not mandatory)',
      'Knowledge of Azure/cloud systems is beneficial',
      '2022, 2023, 2024, 2025 batch students eligible'
    ],
         selectionProcess: [
      'Online Coding Assessment - 60-90 minutes with 2-4 coding questions on Codility/HackerRank (≥60% score required)',
      'Interview Loop (3-5 rounds) - 2-3 Technical/coding rounds (45 min each) with peer engineers',
      'System Design Round (Optional) - Low-level design for standout candidates, HLD rare at this level',
      'Behavioral/Leadership Round - 45 minutes evaluating problem-solving, ownership, collaboration, growth mindset',
      'HR Interview - 30-45 minutes covering resume, motivations, strengths/weaknesses, situational and culture fit questions'
     ],
    preparationTips: [
      'Strengthen DSA: Solve 100+ medium self-tagged Microsoft questions on LeetCode (trees, DP, graph, string, arrays)',
      'Practice mock interviews on Google Docs to simulate live rounds',
      'Prepare low-level design examples like designing a calendar, call-logging service, or cache system',
      'Frame behavioral stories using STAR format—highlight leadership, learning, collaboration',
      'Ensure clean resume documentation and readiness to discuss any project experience or internship confidently',
      'Focus on passing the online assessment (≥60%) as it\'s the major bottleneck',
      'Practice coding explanations clearly and demonstrate collaborative mindset in behavioral rounds',
      'Referrals significantly improve chances of getting the OA link'
    ],
    careerPortal: 'https://careers.microsoft.com'
  },

  // Amazon 2025
  {
    companyId: 'amazon',
    companyName: 'Amazon',
    examName: 'Amazon SDE-I Online Assessment (OA)',
    year: 2025,
    platform: 'Amazon Assessment Platform (HackerRank)',
    totalDuration: '200 minutes (2.5-3 hours)',
    totalQuestions: 49,
    sections: [
      {
        name: '🐛 Code Debugging (OA1)',
        duration: '20 minutes',
        questions: 7,
        topics: [
          {
            name: 'A. Debugging MCQs',
            subTopics: [
              'Logic or syntax bug fixes in code samples',
              'Java, C, C++ code debugging',
              'Algorithm logic correction',
              'Code snippet analysis and fixes'
            ],
            description: 'Debugging MCQs for new graduate/intern roles only'
          }
        ],
        description: '7 debugging MCQs or snippet fixes in 20 minutes for intern/new grad roles'
      },
      {
        name: '💻 Coding Assessment (OA2)',
        duration: '70 minutes',
        questions: 2,
        topics: [
          {
            name: 'A. Programming Problems',
            subTopics: [
              'Arrays, strings, hashmaps, sliding window',
              'Recursion, dynamic programming',
              'Graph algorithms and optimization',
              'One easy/medium, one medium/hard problem'
            ],
            description: 'Two coding problems with focus on data structures and algorithms'
          },
          {
            name: 'B. Language Support',
            subTopics: [
              'C, C++, Java, Python, JavaScript',
              'Ruby, Swift, C# allowed',
              'Code optimization and efficiency',
              'Test case management and edge cases'
            ],
            description: 'Multiple programming languages supported with focus on efficiency'
          }
        ],
        description: 'Two problems: one easy/medium, one medium/hard in 70 minutes'
      },
      {
        name: '🎯 Work Simulation (OA3)',
        duration: '60 minutes',
        questions: 1,
        topics: [
          {
            name: 'A. Scenario-Based Modules',
            subTopics: [
              'Typical SDE decision scenarios',
              'Workplace situation handling',
              'Technical problem-solving in context',
              'Amazon culture and principles application'
            ],
            description: 'Scenario-based modules mimicking typical SDE decisions'
          }
        ],
        description: 'Work simulation with scenario-based modules mimicking typical SDE decisions'
      },
      {
        name: '🧭 Work Style Assessment (OA3)',
        duration: '15 minutes',
        questions: 15,
        topics: [
          {
            name: 'A. Amazon Leadership Principles',
            subTopics: [
              'Customer Obsession and ownership',
              'Earn Trust and dive deep',
              'Have backbone and deliver results',
              'Insist on highest standards',
              'Think big and bias for action'
            ],
            description: 'Slider-style situational judgment aligned with Amazon Leadership Principles'
          }
        ],
        description: 'Slider-style situational judgment aligned with Amazon Leadership Principles'
      },
      {
        name: '🧠 Logical Reasoning (Optional)',
        duration: '35 minutes',
        questions: 24,
        topics: [
          {
            name: 'A. Deductive/Inductive Reasoning',
            subTopics: [
              'Logical reasoning MCQs',
              'Pattern recognition and analysis',
              'Critical thinking assessment',
              'May appear separately or bundled in OA3'
            ],
            description: 'Deductive/inductive reasoning assessment'
          }
        ],
        description: '24 MCQs in 35 minutes on deductive/inductive reasoning (may appear separately or bundled)'
      }
    ],
    eligibility: [
      'Bachelor\'s degree or higher in Computer Science, Computer Engineering, or closely related fields (Software Engineering, Information Science)',
      'Batch eligibility: 2022, 2023, 2024, 2025 graduates (some internal listings may reference 2023-2024 primarily)',
      'Work experience: Up to 1 year of non-internship software development experience preferred; freshers without internships still eligible',
      'Technical fit: Proficiency in at least one programming language (C++, Java, Python, or Perl)',
      'Strong foundational knowledge: Data Structures & Algorithms, Complexity Analysis, Object-Oriented Programming (OOP), Problem-solving and logical design',
      'Preferred qualifications: Previous technical internship or substantial project experience highly valued',
      'Familiarity with distributed systems, cloud infrastructure (AWS), microservices architecture, and database design considered a plus',
      'Clear communication skills and ability to articulate technical problems and solutions preferred',
      'Only full-time degree holders eligible; part-time or correspondence programs not accepted',
      'Avoid applying again if taken Amazon interview or assessment within last 6 months'
    ],
    careerPortal: 'https://www.amazon.jobs',
         selectionProcess: [
      'Stage 1 - Online Assessment (OA) - Up to 4 components totaling around 180 minutes (2.5-3 hours) including Code Debugging (20 min), Coding Assessment (70 min), Work Simulation (60 min), Work Style Assessment (15 min), and optional Logical Reasoning (35 min)',
      'Stage 2 - Technical Interview (1-2 rounds) - 45-60 minutes each focusing on coding problems, system design, and technical deep-dive questions',
      'Stage 3 - Bar Raiser / Leadership Round - 45-60 minutes assessing leadership principles, behavioral scenarios, and Amazon culture fit',
      'Stage 4 - HR Interview - 30-45 minutes covering career goals, behavioral questions, and final company alignment',
       'Document Verification - Final verification of academic credentials, work authorization, and eligibility requirements'
     ],
    preparationTips: [
      'Practice LeetCode Medium-level problems focusing on arrays, strings, hashmaps, sliding window, recursion, DP',
      'Prepare for debugging rounds (OA1) with code analysis and bug identification practice',
      'Study Amazon\'s Leadership Principles thoroughly for work simulation and style assessment',
      'Practice scenario-based decision making aligned with Amazon culture',
      'Take full mock OAs under timed conditions (2.5-3 hours)',
      'Focus on coding efficiency and optimization with multiple test cases',
      'Prepare for both easy/medium and medium/hard coding problems',
      'Practice logical reasoning if that section appears in your OA',
      'Note: Many candidates finish OA within ~2.5 hours, but full sessions can extend to 3-4 hours depending on sections included'
    ]
  },

  // Google 2025
  {
    companyId: 'google',
    companyName: 'Google',
    examName: 'Google SDE-I Online Assessment (OA)',
    year: 2025,
    platform: 'Google Assessment Platform',
    totalDuration: '~180 minutes',
    totalQuestions: 2,
    sections: [
      {
        name: '💻 Online Coding Assessment (OA)',
        duration: '60-90 minutes',
        questions: 2,
        topics: [
          {
            name: 'A. Algorithm Problems',
            subTopics: [
              'Arrays, strings, and linked lists',
              'Trees, graphs, and dynamic programming',
              'Hash tables and advanced data structures',
              'Sorting and searching algorithms'
            ],
            description: 'Medium to hard difficulty DS&A problems'
          },
          {
            name: 'B. Problem Solving',
            subTopics: [
              'Complex algorithmic challenges',
              'Multi-step problem solving',
              'Code optimization and efficiency',
              'Time and space complexity analysis'
            ],
            description: 'Complex problem-solving and algorithmic optimization'
          }
        ],
        description: 'Online coding assessment with 2 DS&A problems (medium to hard difficulty)'
      },
      {
        name: '📞 Technical Phone Screen(s)',
        duration: '30-60 minutes each',
        topics: [
          {
            name: 'A. Live Coding',
            subTopics: [
              'Live coding in Google Docs',
              'Step-by-step logic explanation',
              'No autocomplete or IDE features',
              'Real-time problem solving'
            ],
            description: 'Live coding assessment via Google Meet/Hangout'
          },
          {
            name: 'B. Technical Discussion',
            subTopics: [
              'Algorithm analysis and optimization',
              'Code review and improvements',
              'Technical concept explanations',
              'Problem-solving methodology'
            ],
            description: 'Technical discussion and code review'
          }
        ],
        description: '1-2 rounds of technical phone screens with live coding'
      },
      {
        name: '🎯 Full-Loop Virtual Onsite Interview',
        duration: '45 minutes each round',
        topics: [
          {
            name: 'A. Coding Rounds (2-3)',
            subTopics: [
              'DSA problems: graphs, DP, arrays, trees',
              'Test case explanation and analysis',
              'Complexity analysis and optimizations',
              'Live coding with peer engineers'
            ],
            description: '2-3 coding rounds focusing on DSA problems'
          },
          {
            name: 'B. Googliness/Behavioral Round',
            subTopics: [
              'Attitude and collaboration evaluation',
              'Motivation and adaptability assessment',
              'Situational conversations',
              'Teamwork and communication skills'
            ],
            description: 'Behavioral evaluation using situational conversations'
          },
          {
            name: 'C. System Design Round (Optional)',
            subTopics: [
              'Low-level system design',
              'Architecture and scalability',
              'Database design and optimization',
              'Performance considerations'
            ],
            description: 'Optional system design for standout candidates'
          }
        ],
        description: '3-5 round interview loop including coding, behavioral, and optional system design'
      }
    ],
    eligibility: [
      'Bachelor\'s degree or higher in Computer Science, Computer Engineering, or closely related fields (e.g., Software Engineering, Information Science)',
      'Fresh graduates from 2022, 2023, 2024, and 2025 batches can apply',
      'Up to 1 year of non-internship software development experience preferred',
      'Proficiency in at least one programming language: C++, Java, Python, or Perl',
      'Strong foundational knowledge in Data Structures & Algorithms, Complexity Analysis, Object-Oriented Programming (OOP)',
      'Problem-solving and logical design skills required',
      'Previous technical internship or substantial project experience highly valued',
      'Familiarity with distributed systems, cloud infrastructure (AWS), microservices architecture, and database design is a plus',
      'Clear communication skills and ability to articulate technical problems and solutions',
      'Only full-time degree holders eligible (part-time or correspondence programs not accepted)',
      'Not eligible if interviewed in past 6 months'
    ],
         selectionProcess: [
      'Online Coding Assessment (OA) - 60-90 minutes with 2 coding problems (medium to hard difficulty) on DS&A',
      'Technical Phone Screen(s) - 1-2 rounds, 30-60 minutes each via Google Meet with live coding in Google Docs',
      'Full-Loop Virtual Onsite Interview - 3-5 rounds total including 2-3 coding rounds, Googliness/behavioral round, and optional system design',
      'Coding Rounds - 45 minutes each focusing on DSA problems (graphs, DP, arrays, trees) with live coding',
      'Googliness Round - Evaluates attitude, collaboration, motivation, and adaptability using situational conversations',
      'System Design Round (Optional) - Rare for SDE I, generally for senior/new-graduate targeted roles or standout candidates'
     ],
    preparationTips: [
      'Strong grip on Data Structures & Algorithms—daily practice on platforms like LeetCode',
      'Regular mock interviews in Google Docs to simulate actual coding rounds',
      'Behavioral preparation using STAR framework (e.g., teamwork, leadership, problem-solving examples)',
      'Optional low-level design knowledge may be helpful for standout candidates or specific teams',
      'Keep a clear, ATS-optimized resume featuring coding projects, internships, and clear role contributions',
      'Practice explaining test cases, complexity, and optimizations clearly',
      'Focus on medium-level questions in each interview round (often graph/DP problems)',
      'Prepare for situational conversations in the Googliness round',
      'Google\'s online assessments are harder than the interviews—they\'re the primary filter'
    ],
    careerPortal: 'https://careers.google.com'
  }
];

// Helper functions
export const getExamPatternByCompany = (companyId: string): ExamPattern | undefined => {
  return companyExamPatterns2025.find(pattern => pattern.companyId === companyId);
};

export const getAllCompanies = (): string[] => {
  return companyExamPatterns2025.map(pattern => pattern.companyName);
};

export const getExamPatternsByYear = (year: number): ExamPattern[] => {
  return companyExamPatterns2025.filter(pattern => pattern.year === year);
};

export const getExamPatternsByDifficulty = (difficulty: string): ExamPattern[] => {
  return companyExamPatterns2025.filter(pattern => 
    pattern.sections.some(section => section.description.toLowerCase().includes(difficulty.toLowerCase()))
  );
}; 