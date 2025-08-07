import { Question } from '../types';

export const infosysQuestions: Question[] = [
  // Logical Reasoning Questions (15 questions)
  {
    id: 'infosys-logical-1',
    sectionId: 'logical-reasoning',
    question: 'In a certain code language, if "APPLE" is written as "BQQMF", then how is "ORANGE" written?',
    options: ['PSBOHF', 'PSBOIF', 'PSBOGF', 'PSBOJF'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward in the alphabet. A→B, P→Q, P→Q, L→M, E→F. So ORANGE becomes PSBOHF.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-2',
    sectionId: 'logical-reasoning',
    question: 'If all roses are flowers and some flowers are red, then which statement must be true?',
    options: [
      'All roses are red',
      'Some roses are red',
      'No roses are red',
      'All red things are roses'
    ],
    correctAnswer: 1,
    explanation: 'Since all roses are flowers and some flowers are red, it follows that some roses must be red.',
    difficulty: 'easy',
    topic: 'Logical Reasoning'
  },
  {
    id: 'infosys-logical-3',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    explanation: 'The difference between consecutive terms increases by 2: +4, +6, +8, +10, +12. So 30 + 12 = 42.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-4',
    sectionId: 'logical-reasoning',
    question: 'In a family of 6 members, A is the father of B, C is the mother of D, E is the sister of F. If B is the brother of D, then what is the relationship between A and C?',
    options: ['Husband and Wife', 'Brother and Sister', 'Father and Daughter', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'A is father of B, C is mother of D, and B and D are siblings. So A and C are husband and wife.',
    difficulty: 'hard',
    topic: 'Blood Relations'
  },
  {
    id: 'infosys-logical-5',
    sectionId: 'logical-reasoning',
    question: 'If in a certain language, "COMPUTER" is coded as "RFUVQNPC", then how is "PRINTER" coded?',
    options: ['QSJOUFS', 'QSJOUFT', 'QSJOUFU', 'QSJOUFV'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. P→Q, R→S, I→J, N→O, T→U, E→F, R→S.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-6',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 3:15. What is the angle between the hour and minute hands?',
    options: ['7.5°', '15°', '22.5°', '30°'],
    correctAnswer: 0,
    explanation: 'At 3:15, hour hand is at 3.25 hours (3 + 15/60) = 97.5°. Minute hand is at 90°. Difference = 7.5°.',
    difficulty: 'medium',
    topic: 'Clock Problems'
  },
  {
    id: 'infosys-logical-7',
    sectionId: 'logical-reasoning',
    question: 'If all managers are leaders and some leaders are innovators, then which statement must be true?',
    options: [
      'All managers are innovators',
      'Some managers are innovators',
      'No managers are innovators',
      'All innovators are managers'
    ],
    correctAnswer: 1,
    explanation: 'Since all managers are leaders and some leaders are innovators, it follows that some managers must be innovators.',
    difficulty: 'medium',
    topic: 'Logical Reasoning'
  },
  {
    id: 'infosys-logical-8',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 2, 5, 10, 17, 26, ?',
    options: ['35', '37', '39', '41'],
    correctAnswer: 1,
    explanation: 'The difference between consecutive terms increases by 2: +3, +5, +7, +9, +11. So 26 + 11 = 37.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-9',
    sectionId: 'logical-reasoning',
    question: 'In a row of 40 children, R is 11th from the right end and T is 31st from the left end. How many children are there between R and T?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 0,
    explanation: 'R is 11th from right = 30th from left. T is 31st from left. So there are 0 children between them.',
    difficulty: 'hard',
    topic: 'Ranking'
  },
  {
    id: 'infosys-logical-10',
    sectionId: 'logical-reasoning',
    question: 'If "PENCIL" is written as "QFOEJM", then how is "PAPER" written?',
    options: ['QBQFS', 'QBQFT', 'QBQFU', 'QBQFV'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. P→Q, A→B, P→Q, E→F, R→S.',
    difficulty: 'easy',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-11',
    sectionId: 'logical-reasoning',
    question: 'A man walks 5 km towards North, then turns right and walks 3 km, then turns left and walks 2 km. How far is he from his starting point?',
    options: ['6 km', '7 km', '8 km', '10 km'],
    correctAnswer: 0,
    explanation: 'Using Pythagoras theorem: √(3² + 5²) = √(9 + 25) = √34 ≈ 6 km.',
    difficulty: 'medium',
    topic: 'Direction Sense'
  },
  {
    id: 'infosys-logical-12',
    sectionId: 'logical-reasoning',
    question: 'If all students are learners and some learners are teachers, then which statement must be true?',
    options: [
      'All students are teachers',
      'Some students are teachers',
      'No students are teachers',
      'All teachers are students'
    ],
    correctAnswer: 1,
    explanation: 'Since all students are learners and some learners are teachers, it follows that some students must be teachers.',
    difficulty: 'easy',
    topic: 'Logical Reasoning'
  },
  {
    id: 'infosys-logical-13',
    sectionId: 'logical-reasoning',
    question: 'Complete the pattern: 1, 3, 6, 10, 15, ?',
    options: ['20', '21', '22', '23'],
    correctAnswer: 1,
    explanation: 'The difference between consecutive terms increases by 1: +2, +3, +4, +5, +6. So 15 + 6 = 21.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-14',
    sectionId: 'logical-reasoning',
    question: 'In a family, A is the brother of B, C is the sister of A, D is the brother of C. What is the relationship between B and D?',
    options: ['Brother and Sister', 'Brother and Brother', 'Sister and Brother', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'A is brother of B, C is sister of A, D is brother of C. So B and D are brother and sister.',
    difficulty: 'medium',
    topic: 'Blood Relations'
  },
  {
    id: 'infosys-logical-15',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 6:30. What is the angle between the hour and minute hands?',
    options: ['15°', '30°', '45°', '60°'],
    correctAnswer: 0,
    explanation: 'At 6:30, hour hand is at 6.5 hours = 195°. Minute hand is at 180°. Difference = 15°.',
    difficulty: 'medium',
    topic: 'Clock Problems'
  },
  {
    id: 'infosys-logical-16',
    sectionId: 'logical-reasoning',
    question: 'If "TRAIN" is written as "USBJO", then how is "PLANE" written?',
    options: ['QMBOF', 'QNBOF', 'QNBOE', 'QMBOG'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. P→Q, L→M, A→B, N→O, E→F.',
    difficulty: 'easy',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-17',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: 3, 8, 15, 24, 35, ?',
    options: ['48', '50', '52', '54'],
    correctAnswer: 0,
    explanation: 'The difference between consecutive terms increases by 2: +5, +7, +9, +11, +13. So 35 + 13 = 48.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-18',
    sectionId: 'logical-reasoning',
    question: 'In a certain code, "PENCIL" is written as "QFOEJM", then "BOOK" is written as?',
    options: ['CPPL', 'CPPM', 'CPPN', 'CPPO'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. B→C, O→P, O→P, K→L.',
    difficulty: 'easy',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-19',
    sectionId: 'logical-reasoning',
    question: 'If all doctors are professionals and some professionals are teachers, then which statement must be true?',
    options: [
      'All doctors are teachers',
      'Some doctors are teachers',
      'No doctors are teachers',
      'All teachers are doctors'
    ],
    correctAnswer: 1,
    explanation: 'Since all doctors are professionals and some professionals are teachers, it follows that some doctors must be teachers.',
    difficulty: 'medium',
    topic: 'Logical Reasoning'
  },
  {
    id: 'infosys-logical-20',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 4:20. What is the angle between the hour and minute hands?',
    options: ['10°', '15°', '20°', '25°'],
    correctAnswer: 0,
    explanation: 'At 4:20, hour hand is at 4.33 hours = 130°. Minute hand is at 120°. Difference = 10°.',
    difficulty: 'medium',
    topic: 'Clock Problems'
  },
  {
    id: 'infosys-logical-21',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 1, 4, 9, 16, 25, ?',
    options: ['36', '35', '37', '38'],
    correctAnswer: 0,
    explanation: 'The series follows the pattern of perfect squares: 1², 2², 3², 4², 5², 6² = 36.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-22',
    sectionId: 'logical-reasoning',
    question: 'In a family, A is the father of B, C is the mother of A, D is the brother of C. What is the relationship between B and D?',
    options: ['Uncle and Niece/Nephew', 'Cousins', 'Siblings', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'A is father of B, C is mother of A, D is brother of C. So D is uncle of B.',
    difficulty: 'medium',
    topic: 'Blood Relations'
  },
  {
    id: 'infosys-logical-23',
    sectionId: 'logical-reasoning',
    question: 'If "HAPPY" is written as "IBQQZ", then how is "SMILE" written?',
    options: ['TNJMF', 'TNJMG', 'TNJME', 'TNJMD'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. S→T, M→N, I→J, L→M, E→F.',
    difficulty: 'easy',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-24',
    sectionId: 'logical-reasoning',
    question: 'A man walks 3 km towards East, then turns left and walks 4 km, then turns right and walks 5 km. How far is he from his starting point?',
    options: ['8 km', '10 km', '12 km', '15 km'],
    correctAnswer: 0,
    explanation: 'Using Pythagoras theorem: √(3² + 4²) = √(9 + 16) = √25 = 5 km. Then add 5 km = 10 km total.',
    difficulty: 'hard',
    topic: 'Direction Sense'
  },
  {
    id: 'infosys-logical-25',
    sectionId: 'logical-reasoning',
    question: 'Complete the pattern: 2, 4, 8, 16, 32, ?',
    options: ['64', '60', '68', '72'],
    correctAnswer: 0,
    explanation: 'Each term is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-26',
    sectionId: 'logical-reasoning',
    question: 'If all engineers are graduates and some graduates are managers, then which statement must be true?',
    options: [
      'All engineers are managers',
      'Some engineers are managers',
      'No engineers are managers',
      'All managers are engineers'
    ],
    correctAnswer: 1,
    explanation: 'Since all engineers are graduates and some graduates are managers, it follows that some engineers must be managers.',
    difficulty: 'medium',
    topic: 'Logical Reasoning'
  },
  {
    id: 'infosys-logical-27',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 7:45. What is the angle between the hour and minute hands?',
    options: ['37.5°', '45°', '52.5°', '60°'],
    correctAnswer: 0,
    explanation: 'At 7:45, hour hand is at 7.75 hours = 232.5°. Minute hand is at 270°. Difference = 37.5°.',
    difficulty: 'medium',
    topic: 'Clock Problems'
  },
  {
    id: 'infosys-logical-28',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 5, 11, 19, 29, 41, ?',
    options: ['55', '56', '57', '58'],
    correctAnswer: 0,
    explanation: 'The difference between consecutive terms increases by 2: +6, +8, +10, +12, +14. So 41 + 14 = 55.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-29',
    sectionId: 'logical-reasoning',
    question: 'In a row of 50 students, P is 15th from the left end and Q is 20th from the right end. How many students are there between P and Q?',
    options: ['15', '16', '17', '18'],
    correctAnswer: 0,
    explanation: 'P is 15th from left = 15th position. Q is 20th from right = 31st from left. Students between = 31 - 15 - 1 = 15.',
    difficulty: 'hard',
    topic: 'Ranking'
  },
  {
    id: 'infosys-logical-30',
    sectionId: 'logical-reasoning',
    question: 'If "WORLD" is written as "XPSME", then how is "PEACE" written?',
    options: ['QFBFD', 'QFBFE', 'QFBFG', 'QFBFH'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. P→Q, E→F, A→B, C→D, E→F.',
    difficulty: 'easy',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-31',
    sectionId: 'logical-reasoning',
    question: 'A man walks 6 km towards South, then turns right and walks 8 km, then turns left and walks 3 km. How far is he from his starting point?',
    options: ['10 km', '12 km', '15 km', '17 km'],
    correctAnswer: 0,
    explanation: 'Using Pythagoras theorem: √(6² + 8²) = √(36 + 64) = √100 = 10 km.',
    difficulty: 'medium',
    topic: 'Direction Sense'
  },
  {
    id: 'infosys-logical-32',
    sectionId: 'logical-reasoning',
    question: 'Complete the pattern: 1, 2, 4, 7, 11, ?',
    options: ['16', '17', '18', '19'],
    correctAnswer: 0,
    explanation: 'The difference between consecutive terms increases by 1: +1, +2, +3, +4, +5. So 11 + 5 = 16.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-33',
    sectionId: 'logical-reasoning',
    question: 'If all scientists are researchers and some researchers are professors, then which statement must be true?',
    options: [
      'All scientists are professors',
      'Some scientists are professors',
      'No scientists are professors',
      'All professors are scientists'
    ],
    correctAnswer: 1,
    explanation: 'Since all scientists are researchers and some researchers are professors, it follows that some scientists must be professors.',
    difficulty: 'medium',
    topic: 'Logical Reasoning'
  },
  {
    id: 'infosys-logical-34',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 9:30. What is the angle between the hour and minute hands?',
    options: ['105°', '120°', '135°', '150°'],
    correctAnswer: 0,
    explanation: 'At 9:30, hour hand is at 9.5 hours = 285°. Minute hand is at 180°. Difference = 105°.',
    difficulty: 'medium',
    topic: 'Clock Problems'
  },
  {
    id: 'infosys-logical-35',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 3, 7, 13, 21, 31, ?',
    options: ['43', '44', '45', '46'],
    correctAnswer: 0,
    explanation: 'The difference between consecutive terms increases by 2: +4, +6, +8, +10, +12. So 31 + 12 = 43.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-36',
    sectionId: 'logical-reasoning',
    question: 'In a family, A is the son of B, C is the daughter of A, D is the wife of B. What is the relationship between C and D?',
    options: ['Grandmother and Granddaughter', 'Mother and Daughter', 'Sister and Brother', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'A is son of B, C is daughter of A, D is wife of B. So D is grandmother of C.',
    difficulty: 'medium',
    topic: 'Blood Relations'
  },
  {
    id: 'infosys-logical-37',
    sectionId: 'logical-reasoning',
    question: 'If "BRAVE" is written as "CSBWF", then how is "HONOR" written?',
    options: ['IPOPR', 'IPOPQ', 'IPOPP', 'IPOPO'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. H→I, O→P, N→O, O→P, R→S.',
    difficulty: 'easy',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-38',
    sectionId: 'logical-reasoning',
    question: 'A man walks 4 km towards West, then turns right and walks 3 km, then turns left and walks 6 km. How far is he from his starting point?',
    options: ['7 km', '8 km', '9 km', '10 km'],
    correctAnswer: 0,
    explanation: 'Using Pythagoras theorem: √(4² + 3²) = √(16 + 9) = √25 = 5 km. Then add 6 km = 11 km total.',
    difficulty: 'hard',
    topic: 'Direction Sense'
  },
  {
    id: 'infosys-logical-39',
    sectionId: 'logical-reasoning',
    question: 'Complete the pattern: 2, 6, 12, 20, 30, ?',
    options: ['42', '44', '46', '48'],
    correctAnswer: 0,
    explanation: 'The difference between consecutive terms increases by 2: +4, +6, +8, +10, +12. So 30 + 12 = 42.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-40',
    sectionId: 'logical-reasoning',
    question: 'If all lawyers are professionals and some professionals are consultants, then which statement must be true?',
    options: [
      'All lawyers are consultants',
      'Some lawyers are consultants',
      'No lawyers are consultants',
      'All consultants are lawyers'
    ],
    correctAnswer: 1,
    explanation: 'Since all lawyers are professionals and some professionals are consultants, it follows that some lawyers must be consultants.',
    difficulty: 'medium',
    topic: 'Logical Reasoning'
  },
  {
    id: 'infosys-logical-41',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 2:45. What is the angle between the hour and minute hands?',
    options: ['172.5°', '180°', '187.5°', '195°'],
    correctAnswer: 0,
    explanation: 'At 2:45, hour hand is at 2.75 hours = 82.5°. Minute hand is at 270°. Difference = 187.5°.',
    difficulty: 'medium',
    topic: 'Clock Problems'
  },
  {
    id: 'infosys-logical-42',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 4, 9, 16, 25, 36, ?',
    options: ['49', '50', '51', '52'],
    correctAnswer: 0,
    explanation: 'The series follows the pattern of perfect squares: 2², 3², 4², 5², 6², 7² = 49.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'infosys-logical-43',
    sectionId: 'logical-reasoning',
    question: 'In a row of 60 people, X is 25th from the left end and Y is 30th from the right end. How many people are there between X and Y?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 0,
    explanation: 'X is 25th from left = 25th position. Y is 30th from right = 31st from left. People between = 31 - 25 - 1 = 5.',
    difficulty: 'hard',
    topic: 'Ranking'
  },
  {
    id: 'infosys-logical-44',
    sectionId: 'logical-reasoning',
    question: 'If "TRUTH" is written as "USVUI", then how is "FALSE" written?',
    options: ['GBMTF', 'GBMTG', 'GBMTH', 'GBMTI'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. F→G, A→B, L→M, S→T, E→F.',
    difficulty: 'easy',
    topic: 'Coding-Decoding'
  },
  {
    id: 'infosys-logical-45',
    sectionId: 'logical-reasoning',
    question: 'A man walks 7 km towards North, then turns right and walks 5 km, then turns left and walks 4 km. How far is he from his starting point?',
    options: ['8 km', '10 km', '12 km', '15 km'],
    correctAnswer: 0,
    explanation: 'Using Pythagoras theorem: √(5² + 7²) = √(25 + 49) = √74 ≈ 8.6 km.',
    difficulty: 'medium',
    topic: 'Direction Sense'
  },

  // Quantitative Aptitude Questions (10 questions)
  {
    id: 'infosys-quant-1',
    sectionId: 'quantitative-aptitude',
    question: 'A sum of money becomes Rs. 1,200 in 2 years and Rs. 1,500 in 5 years at simple interest. What is the principal amount?',
    options: ['Rs. 800', 'Rs. 900', 'Rs. 1,000', 'Rs. 1,100'],
    correctAnswer: 0,
    explanation: 'Interest for 3 years = 1500 - 1200 = Rs. 300. So annual interest = Rs. 100. Principal = 1200 - (100 × 2) = Rs. 800.',
    difficulty: 'medium',
    topic: 'Simple Interest'
  },
  {
    id: 'infosys-quant-2',
    sectionId: 'quantitative-aptitude',
    question: 'A train running at 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
    options: ['150 m', '180 m', '200 m', '250 m'],
    correctAnswer: 0,
    explanation: 'Speed = 60 km/hr = 60 × 5/18 = 50/3 m/s. Length = Speed × Time = 50/3 × 9 = 150 m.',
    difficulty: 'medium',
    topic: 'Time and Distance'
  },
  {
    id: 'infosys-quant-3',
    sectionId: 'quantitative-aptitude',
    question: 'The average age of a family of 5 members is 20 years. If the youngest member is 5 years old, what is the average age of the other 4 members?',
    options: ['22.5 years', '23.75 years', '25 years', '26.25 years'],
    correctAnswer: 1,
    explanation: 'Total age = 5 × 20 = 100 years. Age of other 4 = 100 - 5 = 95 years. Average = 95/4 = 23.75 years.',
    difficulty: 'medium',
    topic: 'Average'
  },
  {
    id: 'infosys-quant-4',
    sectionId: 'quantitative-aptitude',
    question: 'A shopkeeper sells an article at a profit of 20%. If the cost price is Rs. 500, what is the selling price?',
    options: ['Rs. 600', 'Rs. 650', 'Rs. 700', 'Rs. 750'],
    correctAnswer: 0,
    explanation: 'Profit = 20% of 500 = Rs. 100. Selling price = Cost price + Profit = 500 + 100 = Rs. 600.',
    difficulty: 'easy',
    topic: 'Profit and Loss'
  },
  {
    id: 'infosys-quant-5',
    sectionId: 'quantitative-aptitude',
    question: 'If 15 workers can complete a work in 12 days, how many days will 20 workers take to complete the same work?',
    options: ['8 days', '9 days', '10 days', '12 days'],
    correctAnswer: 1,
    explanation: 'Using M1D1 = M2D2: 15 × 12 = 20 × D2. So D2 = (15 × 12)/20 = 9 days.',
    difficulty: 'medium',
    topic: 'Time and Work'
  },
  {
    id: 'infosys-quant-6',
    sectionId: 'quantitative-aptitude',
    question: 'A mixture contains milk and water in the ratio 3:2. If 10 liters of water is added, the ratio becomes 3:4. What is the initial quantity of the mixture?',
    options: ['25 liters', '30 liters', '35 liters', '40 liters'],
    correctAnswer: 0,
    explanation: 'Let initial mixture be 5x liters (3x milk + 2x water). After adding 10L water: 3x/(2x+10) = 3/4. Solving: x = 5. Initial mixture = 5x = 25 liters.',
    difficulty: 'hard',
    topic: 'Ratio and Proportion'
  },
  {
    id: 'infosys-quant-7',
    sectionId: 'quantitative-aptitude',
    question: 'The speed of a boat in still water is 10 km/hr and the speed of the stream is 2 km/hr. What is the time taken to go 24 km downstream?',
    options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'],
    correctAnswer: 0,
    explanation: 'Downstream speed = 10 + 2 = 12 km/hr. Time = Distance/Speed = 24/12 = 2 hours.',
    difficulty: 'easy',
    topic: 'Boats and Streams'
  },
  {
    id: 'infosys-quant-8',
    sectionId: 'quantitative-aptitude',
    question: 'A rectangular field has length 20 m and breadth 15 m. What is the cost of fencing it at Rs. 10 per meter?',
    options: ['Rs. 600', 'Rs. 700', 'Rs. 800', 'Rs. 900'],
    correctAnswer: 1,
    explanation: 'Perimeter = 2(l + b) = 2(20 + 15) = 70 m. Cost = 70 × 10 = Rs. 700.',
    difficulty: 'easy',
    topic: 'Mensuration'
  },
  {
    id: 'infosys-quant-9',
    sectionId: 'quantitative-aptitude',
    question: 'If the compound interest on a sum for 2 years at 10% per annum is Rs. 210, what is the simple interest on the same sum for the same period?',
    options: ['Rs. 200', 'Rs. 210', 'Rs. 220', 'Rs. 230'],
    correctAnswer: 0,
    explanation: 'Let principal be P. CI = P[(1 + 10/100)² - 1] = 210. So P = 1000. SI = (1000 × 10 × 2)/100 = Rs. 200.',
    difficulty: 'hard',
    topic: 'Compound Interest'
  },
  {
    id: 'infosys-quant-10',
    sectionId: 'quantitative-aptitude',
    question: 'A number when divided by 5 leaves remainder 3. What is the remainder when the same number is divided by 15?',
    options: ['3', '8', '13', 'Cannot be determined'],
    correctAnswer: 2,
    explanation: 'Let number be 5k + 3. When divided by 15: (5k + 3)/15 = k/3 + 3/15. Remainder is 3.',
    difficulty: 'medium',
    topic: 'Number System'
  },
  {
    id: 'infosys-quant-11',
    sectionId: 'quantitative-aptitude',
    question: 'A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?',
    options: ['12.5%', '15%', '18%', '20%'],
    correctAnswer: 0,
    explanation: 'If principal doubles, interest = principal. So P = P×R×8/100. Therefore R = 100/8 = 12.5%.',
    difficulty: 'medium',
    topic: 'Simple Interest'
  },
  {
    id: 'infosys-quant-12',
    sectionId: 'quantitative-aptitude',
    question: 'A car travels 120 km in 2 hours. What is its speed in m/s?',
    options: ['16.67 m/s', '20 m/s', '25 m/s', '30 m/s'],
    correctAnswer: 0,
    explanation: 'Speed = 120 km/2 hours = 60 km/hr = 60 × 5/18 = 16.67 m/s.',
    difficulty: 'easy',
    topic: 'Time and Distance'
  },
  {
    id: 'infosys-quant-13',
    sectionId: 'quantitative-aptitude',
    question: 'The average of 5 numbers is 25. If one number is excluded, the average becomes 23. What is the excluded number?',
    options: ['33', '35', '37', '39'],
    correctAnswer: 0,
    explanation: 'Total of 5 numbers = 5 × 25 = 125. Total of 4 numbers = 4 × 23 = 92. Excluded number = 125 - 92 = 33.',
    difficulty: 'medium',
    topic: 'Average'
  },
  {
    id: 'infosys-quant-14',
    sectionId: 'quantitative-aptitude',
    question: 'A shopkeeper marks his goods 20% above cost price and allows a discount of 10%. What is his profit percentage?',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswer: 0,
    explanation: 'Let CP = 100. MP = 120. SP = 120 × 0.9 = 108. Profit = 108 - 100 = 8%.',
    difficulty: 'medium',
    topic: 'Profit and Loss'
  },
  {
    id: 'infosys-quant-15',
    sectionId: 'quantitative-aptitude',
    question: 'If 12 men can complete a work in 18 days, how many days will 8 men take to complete the same work?',
    options: ['24 days', '27 days', '30 days', '36 days'],
    correctAnswer: 1,
    explanation: 'Using M1D1 = M2D2: 12 × 18 = 8 × D2. So D2 = (12 × 18)/8 = 27 days.',
    difficulty: 'medium',
    topic: 'Time and Work'
  },
  {
    id: 'infosys-quant-16',
    sectionId: 'quantitative-aptitude',
    question: 'A mixture contains alcohol and water in the ratio 4:3. If 7 liters of water is added, the ratio becomes 4:5. What is the initial quantity of the mixture?',
    options: ['28 liters', '35 liters', '42 liters', '49 liters'],
    correctAnswer: 0,
    explanation: 'Let initial mixture be 7x liters (4x alcohol + 3x water). After adding 7L water: 4x/(3x+7) = 4/5. Solving: x = 4. Initial mixture = 7x = 28 liters.',
    difficulty: 'hard',
    topic: 'Ratio and Proportion'
  },
  {
    id: 'infosys-quant-17',
    sectionId: 'quantitative-aptitude',
    question: 'The speed of a boat in still water is 12 km/hr and the speed of the stream is 3 km/hr. What is the time taken to go 36 km upstream?',
    options: ['4 hours', '5 hours', '6 hours', '8 hours'],
    correctAnswer: 0,
    explanation: 'Upstream speed = 12 - 3 = 9 km/hr. Time = Distance/Speed = 36/9 = 4 hours.',
    difficulty: 'easy',
    topic: 'Boats and Streams'
  },
  {
    id: 'infosys-quant-18',
    sectionId: 'quantitative-aptitude',
    question: 'A circular field has radius 14 m. What is the cost of fencing it at Rs. 15 per meter?',
    options: ['Rs. 1,320', 'Rs. 1,380', 'Rs. 1,440', 'Rs. 1,500'],
    correctAnswer: 0,
    explanation: 'Circumference = 2πr = 2 × 22/7 × 14 = 88 m. Cost = 88 × 15 = Rs. 1,320.',
    difficulty: 'medium',
    topic: 'Mensuration'
  },
  {
    id: 'infosys-quant-19',
    sectionId: 'quantitative-aptitude',
    question: 'If the compound interest on a sum for 3 years at 12% per annum is Rs. 1,728, what is the principal amount?',
    options: ['Rs. 4,000', 'Rs. 4,500', 'Rs. 5,000', 'Rs. 5,500'],
    correctAnswer: 0,
    explanation: 'Let principal be P. CI = P[(1 + 12/100)³ - 1] = 1,728. So P = 4,000.',
    difficulty: 'hard',
    topic: 'Compound Interest'
  },
  {
    id: 'infosys-quant-20',
    sectionId: 'quantitative-aptitude',
    question: 'A number when divided by 6 leaves remainder 4. What is the remainder when the same number is divided by 12?',
    options: ['4', '6', '8', '10'],
    correctAnswer: 0,
    explanation: 'Let number be 6k + 4. When divided by 12: (6k + 4)/12 = k/2 + 4/12. Remainder is 4.',
    difficulty: 'medium',
    topic: 'Number System'
  },
  {
    id: 'infosys-quant-21',
    sectionId: 'quantitative-aptitude',
    question: 'A sum of money becomes Rs. 2,000 in 3 years and Rs. 2,500 in 6 years at simple interest. What is the principal amount?',
    options: ['Rs. 1,500', 'Rs. 1,600', 'Rs. 1,700', 'Rs. 1,800'],
    correctAnswer: 0,
    explanation: 'Interest for 3 years = 2500 - 2000 = Rs. 500. So annual interest = Rs. 166.67. Principal = 2000 - (166.67 × 3) = Rs. 1,500.',
    difficulty: 'medium',
    topic: 'Simple Interest'
  },
  {
    id: 'infosys-quant-22',
    sectionId: 'quantitative-aptitude',
    question: 'A train running at 72 km/hr crosses a platform in 20 seconds. If the length of the train is 200 m, what is the length of the platform?',
    options: ['200 m', '300 m', '400 m', '500 m'],
    correctAnswer: 0,
    explanation: 'Speed = 72 km/hr = 72 × 5/18 = 20 m/s. Total distance = 20 × 20 = 400 m. Platform length = 400 - 200 = 200 m.',
    difficulty: 'medium',
    topic: 'Time and Distance'
  },
  {
    id: 'infosys-quant-23',
    sectionId: 'quantitative-aptitude',
    question: 'The average age of a family of 6 members is 25 years. If the youngest member is 8 years old, what is the average age of the other 5 members?',
    options: ['28.4 years', '29.2 years', '30 years', '31.2 years'],
    correctAnswer: 0,
    explanation: 'Total age = 6 × 25 = 150 years. Age of other 5 = 150 - 8 = 142 years. Average = 142/5 = 28.4 years.',
    difficulty: 'medium',
    topic: 'Average'
  },
  {
    id: 'infosys-quant-24',
    sectionId: 'quantitative-aptitude',
    question: 'A shopkeeper sells an article at a loss of 15%. If the cost price is Rs. 800, what is the selling price?',
    options: ['Rs. 680', 'Rs. 720', 'Rs. 760', 'Rs. 800'],
    correctAnswer: 0,
    explanation: 'Loss = 15% of 800 = Rs. 120. Selling price = Cost price - Loss = 800 - 120 = Rs. 680.',
    difficulty: 'easy',
    topic: 'Profit and Loss'
  },
  {
    id: 'infosys-quant-25',
    sectionId: 'quantitative-aptitude',
    question: 'If 18 workers can complete a work in 15 days, how many days will 27 workers take to complete the same work?',
    options: ['8 days', '9 days', '10 days', '12 days'],
    correctAnswer: 2,
    explanation: 'Using M1D1 = M2D2: 18 × 15 = 27 × D2. So D2 = (18 × 15)/27 = 10 days.',
    difficulty: 'medium',
    topic: 'Time and Work'
  },
  {
    id: 'infosys-quant-26',
    sectionId: 'quantitative-aptitude',
    question: 'A mixture contains milk and water in the ratio 5:2. If 14 liters of water is added, the ratio becomes 5:4. What is the initial quantity of the mixture?',
    options: ['49 liters', '56 liters', '63 liters', '70 liters'],
    correctAnswer: 0,
    explanation: 'Let initial mixture be 7x liters (5x milk + 2x water). After adding 14L water: 5x/(2x+14) = 5/4. Solving: x = 7. Initial mixture = 7x = 49 liters.',
    difficulty: 'hard',
    topic: 'Ratio and Proportion'
  },
  {
    id: 'infosys-quant-27',
    sectionId: 'quantitative-aptitude',
    question: 'The speed of a boat in still water is 15 km/hr and the speed of the stream is 5 km/hr. What is the time taken to go 40 km downstream?',
    options: ['2 hours', '2.5 hours', '3 hours', '4 hours'],
    correctAnswer: 0,
    explanation: 'Downstream speed = 15 + 5 = 20 km/hr. Time = Distance/Speed = 40/20 = 2 hours.',
    difficulty: 'easy',
    topic: 'Boats and Streams'
  },
  {
    id: 'infosys-quant-28',
    sectionId: 'quantitative-aptitude',
    question: 'A square field has side 25 m. What is the cost of fencing it at Rs. 12 per meter?',
    options: ['Rs. 1,200', 'Rs. 1,300', 'Rs. 1,400', 'Rs. 1,500'],
    correctAnswer: 0,
    explanation: 'Perimeter = 4 × side = 4 × 25 = 100 m. Cost = 100 × 12 = Rs. 1,200.',
    difficulty: 'easy',
    topic: 'Mensuration'
  },
  {
    id: 'infosys-quant-29',
    sectionId: 'quantitative-aptitude',
    question: 'If the compound interest on a sum for 2 years at 15% per annum is Rs. 1,035, what is the simple interest on the same sum for the same period?',
    options: ['Rs. 900', 'Rs. 1,000', 'Rs. 1,100', 'Rs. 1,200'],
    correctAnswer: 0,
    explanation: 'Let principal be P. CI = P[(1 + 15/100)² - 1] = 1,035. So P = 3,000. SI = (3000 × 15 × 2)/100 = Rs. 900.',
    difficulty: 'hard',
    topic: 'Compound Interest'
  },
  {
    id: 'infosys-quant-30',
    sectionId: 'quantitative-aptitude',
    question: 'A number when divided by 8 leaves remainder 5. What is the remainder when the same number is divided by 16?',
    options: ['5', '8', '13', 'Cannot be determined'],
    correctAnswer: 2,
    explanation: 'Let number be 8k + 5. When divided by 16: (8k + 5)/16 = k/2 + 5/16. Remainder is 5.',
    difficulty: 'medium',
    topic: 'Number System'
  },

  // Verbal Ability Questions (40 questions)
  {
    id: 'infosys-verbal-1',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes the sentence: The manager was _____ about the new policy implementation.',
    options: ['ambivalent', 'resolute', 'indifferent', 'confused'],
    correctAnswer: 1,
    explanation: 'Resolute means determined and unwavering, which fits the context of a manager being firm about policy implementation.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-2',
    sectionId: 'verbal-ability',
    question: 'Identify the correct synonym for "Ubiquitous":',
    options: ['Rare', 'Common', 'Omnipresent', 'Unique'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present everywhere or existing everywhere, which is synonymous with omnipresent.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-3',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Benevolent":',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (wishing evil or harm to others).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-4',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The company\'s profits have been _____ over the past year.',
    options: ['declining', 'decline', 'declined', 'declines'],
    correctAnswer: 0,
    explanation: 'The sentence requires a present participle form "declining" to describe the ongoing state of profits.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-5',
    sectionId: 'verbal-ability',
    question: 'Choose the word that is most opposite in meaning to "Ephemeral":',
    options: ['Temporary', 'Permanent', 'Brief', 'Short-lived'],
    correctAnswer: 1,
    explanation: 'Ephemeral means lasting for a very short time, so its opposite is permanent (lasting forever).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-6',
    sectionId: 'verbal-ability',
    question: 'Identify the correct meaning of the idiom "Break the ice":',
    options: ['To cause trouble', 'To start a conversation', 'To end a relationship', 'To solve a problem'],
    correctAnswer: 1,
    explanation: 'To break the ice means to initiate conversation in a social setting, especially when people don\'t know each other.',
    difficulty: 'easy',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-7',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Neither the manager nor the employees _____ satisfied with the new policy.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'When using "neither...nor", the verb agrees with the subject closer to it. Here "manager" is singular, so use "is".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-8',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the novel was so complex that many readers found it confusing.',
    options: ['plot', 'character', 'setting', 'theme'],
    correctAnswer: 0,
    explanation: 'Plot refers to the sequence of events in a story, which can be complex and confusing.',
    difficulty: 'easy',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-9',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Pragmatic":',
    options: ['Idealistic', 'Practical', 'Theoretical', 'Abstract'],
    correctAnswer: 1,
    explanation: 'Pragmatic means dealing with things sensibly and realistically, which is synonymous with practical.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-10',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The research findings _____ the initial hypothesis.',
    options: ['support', 'supports', 'supporting', 'supported'],
    correctAnswer: 0,
    explanation: 'The sentence requires the present tense form "support" to match the subject "findings" (plural).',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-11',
    sectionId: 'verbal-ability',
    question: 'Identify the meaning of "Serendipity":',
    options: ['Bad luck', 'Good luck', 'Finding something valuable by chance', 'Planning ahead'],
    correctAnswer: 2,
    explanation: 'Serendipity means the occurrence and development of events by chance in a happy or beneficial way.',
    difficulty: 'hard',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-12',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Concise":',
    options: ['Brief', 'Verbose', 'Clear', 'Precise'],
    correctAnswer: 1,
    explanation: 'Concise means brief and to the point, so its antonym is verbose (using more words than necessary).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-13',
    sectionId: 'verbal-ability',
    question: 'Select the appropriate word: The _____ of the storm caused widespread damage.',
    options: ['severity', 'severely', 'severe', 'severeness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "severity" to describe the intensity of the storm.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-14',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Hit the nail on the head":',
    options: ['To cause injury', 'To be exactly right', 'To work hard', 'To make a mistake'],
    correctAnswer: 1,
    explanation: 'To hit the nail on the head means to be exactly right or accurate about something.',
    difficulty: 'easy',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-15',
    sectionId: 'verbal-ability',
    question: 'Identify the synonym for "Eloquent":',
    options: ['Silent', 'Articulate', 'Confused', 'Quiet'],
    correctAnswer: 1,
    explanation: 'Eloquent means fluent or persuasive in speaking or writing, which is synonymous with articulate.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-16',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The team _____ working on this project for three months.',
    options: ['has been', 'have been', 'is been', 'are been'],
    correctAnswer: 0,
    explanation: 'The sentence requires present perfect continuous tense with singular subject "team", so use "has been".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-17',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the situation became clear after the investigation.',
    options: ['gravity', 'gravely', 'grave', 'graveness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "gravity" to describe the seriousness of the situation.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-18',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "Diligent":',
    options: ['Hardworking', 'Lazy', 'Careful', 'Thorough'],
    correctAnswer: 1,
    explanation: 'Diligent means having or showing care and conscientiousness, so its antonym is lazy.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-19',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Each of the students _____ responsible for their own work.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'When using "each of", the verb agrees with "each" (singular), so use "is".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-20',
    sectionId: 'verbal-ability',
    question: 'Identify the meaning of "Ubiquitous":',
    options: ['Rare', 'Common', 'Present everywhere', 'Unique'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-21',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Persistent":',
    options: ['Temporary', 'Tenacious', 'Weak', 'Fragile'],
    correctAnswer: 1,
    explanation: 'Persistent means continuing firmly in a course of action despite difficulty, which is synonymous with tenacious.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-22',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The company\'s success _____ on the quality of its products.',
    options: ['depend', 'depends', 'depending', 'depended'],
    correctAnswer: 1,
    explanation: 'The sentence requires present tense form "depends" to match the singular subject "success".',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-23',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the argument was lost on the audience.',
    options: ['nuance', 'nuanced', 'nuancing', 'nuances'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "nuance" to describe the subtle difference in the argument.',
    difficulty: 'hard',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-24',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Bite the bullet":',
    options: ['To eat something hard', 'To endure a painful situation', 'To fight back', 'To give up'],
    correctAnswer: 1,
    explanation: 'To bite the bullet means to endure a painful or difficult situation bravely.',
    difficulty: 'medium',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-25',
    sectionId: 'verbal-ability',
    question: 'Identify the antonym for "Optimistic":',
    options: ['Hopeful', 'Pessimistic', 'Confident', 'Positive'],
    correctAnswer: 1,
    explanation: 'Optimistic means hopeful and confident about the future, so its antonym is pessimistic.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-26',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: The data _____ analyzed thoroughly before the report was published.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 0,
    explanation: 'The sentence requires past tense form "was" to match the singular subject "data" and past context.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-27',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "Arduous":',
    options: ['Easy', 'Difficult', 'Simple', 'Light'],
    correctAnswer: 1,
    explanation: 'Arduous means involving or requiring strenuous effort, which is synonymous with difficult.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-28',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The _____ of the problem requires immediate attention.',
    options: ['urgency', 'urgent', 'urgently', 'urgeness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "urgency" to describe the pressing nature of the problem.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-29',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Pull someone\'s leg":',
    options: ['To hurt someone', 'To tease or joke with someone', 'To help someone', 'To criticize someone'],
    correctAnswer: 1,
    explanation: 'To pull someone\'s leg means to tease or joke with someone in a friendly way.',
    difficulty: 'easy',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-30',
    sectionId: 'verbal-ability',
    question: 'Identify the antonym for "Concise":',
    options: ['Brief', 'Verbose', 'Clear', 'Precise'],
    correctAnswer: 1,
    explanation: 'Concise means brief and to the point, so its antonym is verbose (using more words than necessary).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-31',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Neither the manager nor the employees _____ satisfied with the decision.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'When using "neither...nor", the verb agrees with the subject closer to it. Here "manager" is singular.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-32',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the situation was not immediately apparent.',
    options: ['gravity', 'gravely', 'grave', 'graveness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "gravity" to describe the seriousness of the situation.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-33',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Resilient":',
    options: ['Weak', 'Fragile', 'Tough', 'Brittle'],
    correctAnswer: 2,
    explanation: 'Resilient means able to withstand or recover quickly from difficult conditions, which is synonymous with tough.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-34',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The research team _____ working on this project for over a year.',
    options: ['has been', 'have been', 'is been', 'are been'],
    correctAnswer: 0,
    explanation: 'The sentence requires present perfect continuous tense with singular subject "team", so use "has been".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-35',
    sectionId: 'verbal-ability',
    question: 'Identify the meaning of "Ephemeral":',
    options: ['Permanent', 'Temporary', 'Long-lasting', 'Enduring'],
    correctAnswer: 1,
    explanation: 'Ephemeral means lasting for a very short time or transitory.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-36',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Benevolent":',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (wishing evil or harm to others).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-37',
    sectionId: 'verbal-ability',
    question: 'Select the correct form: The committee _____ unanimous in their decision.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'The sentence requires present tense form "is" to match the singular subject "committee".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-38',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the novel was captivating from start to finish.',
    options: ['plot', 'character', 'setting', 'theme'],
    correctAnswer: 0,
    explanation: 'Plot refers to the sequence of events in a story, which can be captivating.',
    difficulty: 'easy',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-39',
    sectionId: 'verbal-ability',
    question: 'Identify the synonym for "Pragmatic":',
    options: ['Idealistic', 'Practical', 'Theoretical', 'Abstract'],
    correctAnswer: 1,
    explanation: 'Pragmatic means dealing with things sensibly and realistically, which is synonymous with practical.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-40',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The company\'s performance _____ significantly over the past quarter.',
    options: ['improve', 'improves', 'improved', 'improving'],
    correctAnswer: 2,
    explanation: 'The sentence requires past tense form "improved" to match the past time reference "over the past quarter".',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-41',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes the sentence: The project was _____ due to lack of funding.',
    options: ['abandoned', 'abandoning', 'abandons', 'abandon'],
    correctAnswer: 0,
    explanation: 'The sentence requires a past participle form "abandoned" to describe the completed action.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-42',
    sectionId: 'verbal-ability',
    question: 'Identify the correct synonym for "Meticulous":',
    options: ['Careless', 'Careful', 'Thorough', 'Sloppy'],
    correctAnswer: 2,
    explanation: 'Meticulous means showing great attention to detail, which is synonymous with thorough.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-43',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Diligent":',
    options: ['Hardworking', 'Lazy', 'Careful', 'Thorough'],
    correctAnswer: 1,
    explanation: 'Diligent means having or showing care and conscientiousness, so its antonym is lazy.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-44',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The committee _____ to review the proposal next week.',
    options: ['meets', 'meet', 'meeting', 'met'],
    correctAnswer: 0,
    explanation: 'The sentence requires present tense form "meets" to match the singular subject "committee".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-45',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the argument was compelling.',
    options: ['logic', 'logical', 'logically', 'logician'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "logic" to describe the reasoning of the argument.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-46',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Pull yourself together":',
    options: ['To help someone', 'To calm down and control yourself', 'To work hard', 'To give up'],
    correctAnswer: 1,
    explanation: 'To pull yourself together means to calm down and regain control of your emotions.',
    difficulty: 'medium',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-47',
    sectionId: 'verbal-ability',
    question: 'Identify the synonym for "Eloquent":',
    options: ['Silent', 'Articulate', 'Confused', 'Quiet'],
    correctAnswer: 1,
    explanation: 'Eloquent means fluent or persuasive in speaking or writing, which is synonymous with articulate.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-48',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The data _____ analyzed thoroughly before the report was published.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 0,
    explanation: 'The sentence requires past tense form "was" to match the singular subject "data" and past context.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-49',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the situation became clear after investigation.',
    options: ['gravity', 'gravely', 'grave', 'graveness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "gravity" to describe the seriousness of the situation.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-50',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "Optimistic":',
    options: ['Hopeful', 'Pessimistic', 'Confident', 'Positive'],
    correctAnswer: 1,
    explanation: 'Optimistic means hopeful and confident about the future, so its antonym is pessimistic.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-51',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Each of the students _____ responsible for their own work.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'When using "each of", the verb agrees with "each" (singular), so use "is".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-52',
    sectionId: 'verbal-ability',
    question: 'Identify the meaning of "Ubiquitous":',
    options: ['Rare', 'Common', 'Present everywhere', 'Unique'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-53',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Persistent":',
    options: ['Temporary', 'Tenacious', 'Weak', 'Fragile'],
    correctAnswer: 1,
    explanation: 'Persistent means continuing firmly in a course of action despite difficulty, which is synonymous with tenacious.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-54',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The company\'s success _____ on the quality of its products.',
    options: ['depend', 'depends', 'depending', 'depended'],
    correctAnswer: 1,
    explanation: 'The sentence requires present tense form "depends" to match the singular subject "success".',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-55',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the argument was lost on the audience.',
    options: ['nuance', 'nuanced', 'nuancing', 'nuances'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "nuance" to describe the subtle difference in the argument.',
    difficulty: 'hard',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-56',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Bite the bullet":',
    options: ['To eat something hard', 'To endure a painful situation', 'To fight back', 'To give up'],
    correctAnswer: 1,
    explanation: 'To bite the bullet means to endure a painful or difficult situation bravely.',
    difficulty: 'medium',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-57',
    sectionId: 'verbal-ability',
    question: 'Identify the antonym for "Concise":',
    options: ['Brief', 'Verbose', 'Clear', 'Precise'],
    correctAnswer: 1,
    explanation: 'Concise means brief and to the point, so its antonym is verbose (using more words than necessary).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-58',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Neither the manager nor the employees _____ satisfied with the decision.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'When using "neither...nor", the verb agrees with the subject closer to it. Here "manager" is singular.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-59',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the situation was not immediately apparent.',
    options: ['gravity', 'gravely', 'grave', 'graveness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "gravity" to describe the seriousness of the situation.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-60',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Resilient":',
    options: ['Weak', 'Fragile', 'Tough', 'Brittle'],
    correctAnswer: 2,
    explanation: 'Resilient means able to withstand or recover quickly from difficult conditions, which is synonymous with tough.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-61',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The research team _____ working on this project for over a year.',
    options: ['has been', 'have been', 'is been', 'are been'],
    correctAnswer: 0,
    explanation: 'The sentence requires present perfect continuous tense with singular subject "team", so use "has been".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-62',
    sectionId: 'verbal-ability',
    question: 'Identify the meaning of "Ephemeral":',
    options: ['Permanent', 'Temporary', 'Long-lasting', 'Enduring'],
    correctAnswer: 1,
    explanation: 'Ephemeral means lasting for a very short time or transitory.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-63',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Benevolent":',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (wishing evil or harm to others).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-64',
    sectionId: 'verbal-ability',
    question: 'Select the correct form: The committee _____ unanimous in their decision.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'The sentence requires present tense form "is" to match the singular subject "committee".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-65',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the novel was captivating from start to finish.',
    options: ['plot', 'character', 'setting', 'theme'],
    correctAnswer: 0,
    explanation: 'Plot refers to the sequence of events in a story, which can be captivating.',
    difficulty: 'easy',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-66',
    sectionId: 'verbal-ability',
    question: 'Identify the synonym for "Pragmatic":',
    options: ['Idealistic', 'Practical', 'Theoretical', 'Abstract'],
    correctAnswer: 1,
    explanation: 'Pragmatic means dealing with things sensibly and realistically, which is synonymous with practical.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-67',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The company\'s performance _____ significantly over the past quarter.',
    options: ['improve', 'improves', 'improved', 'improving'],
    correctAnswer: 2,
    explanation: 'The sentence requires past tense form "improved" to match the past time reference "over the past quarter".',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-68',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes the sentence: The project was _____ due to lack of funding.',
    options: ['abandoned', 'abandoning', 'abandons', 'abandon'],
    correctAnswer: 0,
    explanation: 'The sentence requires a past participle form "abandoned" to describe the completed action.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-69',
    sectionId: 'verbal-ability',
    question: 'Identify the correct synonym for "Meticulous":',
    options: ['Careless', 'Careful', 'Thorough', 'Sloppy'],
    correctAnswer: 2,
    explanation: 'Meticulous means showing great attention to detail, which is synonymous with thorough.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-70',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Diligent":',
    options: ['Hardworking', 'Lazy', 'Careful', 'Thorough'],
    correctAnswer: 1,
    explanation: 'Diligent means having or showing care and conscientiousness, so its antonym is lazy.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-71',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The committee _____ to review the proposal next week.',
    options: ['meets', 'meet', 'meeting', 'met'],
    correctAnswer: 0,
    explanation: 'The sentence requires present tense form "meets" to match the singular subject "committee".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-72',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the argument was compelling.',
    options: ['logic', 'logical', 'logically', 'logician'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "logic" to describe the reasoning of the argument.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-73',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Pull yourself together":',
    options: ['To help someone', 'To calm down and control yourself', 'To work hard', 'To give up'],
    correctAnswer: 1,
    explanation: 'To pull yourself together means to calm down and regain control of your emotions.',
    difficulty: 'medium',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-74',
    sectionId: 'verbal-ability',
    question: 'Identify the synonym for "Eloquent":',
    options: ['Silent', 'Articulate', 'Confused', 'Quiet'],
    correctAnswer: 1,
    explanation: 'Eloquent means fluent or persuasive in speaking or writing, which is synonymous with articulate.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-75',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The data _____ analyzed thoroughly before the report was published.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 0,
    explanation: 'The sentence requires past tense form "was" to match the singular subject "data" and past context.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-76',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the situation became clear after investigation.',
    options: ['gravity', 'gravely', 'grave', 'graveness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "gravity" to describe the seriousness of the situation.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-77',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "Optimistic":',
    options: ['Hopeful', 'Pessimistic', 'Confident', 'Positive'],
    correctAnswer: 1,
    explanation: 'Optimistic means hopeful and confident about the future, so its antonym is pessimistic.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-78',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Each of the students _____ responsible for their own work.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'When using "each of", the verb agrees with "each" (singular), so use "is".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-79',
    sectionId: 'verbal-ability',
    question: 'Identify the meaning of "Ubiquitous":',
    options: ['Rare', 'Common', 'Present everywhere', 'Unique'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-80',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Persistent":',
    options: ['Temporary', 'Tenacious', 'Weak', 'Fragile'],
    correctAnswer: 1,
    explanation: 'Persistent means continuing firmly in a course of action despite difficulty, which is synonymous with tenacious.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-81',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The company\'s success _____ on the quality of its products.',
    options: ['depend', 'depends', 'depending', 'depended'],
    correctAnswer: 1,
    explanation: 'The sentence requires present tense form "depends" to match the singular subject "success".',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-82',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the argument was lost on the audience.',
    options: ['nuance', 'nuanced', 'nuancing', 'nuances'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "nuance" to describe the subtle difference in the argument.',
    difficulty: 'hard',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-83',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Bite the bullet":',
    options: ['To eat something hard', 'To endure a painful situation', 'To fight back', 'To give up'],
    correctAnswer: 1,
    explanation: 'To bite the bullet means to endure a painful or difficult situation bravely.',
    difficulty: 'medium',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-84',
    sectionId: 'verbal-ability',
    question: 'Identify the antonym for "Concise":',
    options: ['Brief', 'Verbose', 'Clear', 'Precise'],
    correctAnswer: 1,
    explanation: 'Concise means brief and to the point, so its antonym is verbose (using more words than necessary).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-85',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Neither the manager nor the employees _____ satisfied with the decision.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'When using "neither...nor", the verb agrees with the subject closer to it. Here "manager" is singular.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-86',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the situation was not immediately apparent.',
    options: ['gravity', 'gravely', 'grave', 'graveness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "gravity" to describe the seriousness of the situation.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-87',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Resilient":',
    options: ['Weak', 'Fragile', 'Tough', 'Brittle'],
    correctAnswer: 2,
    explanation: 'Resilient means able to withstand or recover quickly from difficult conditions, which is synonymous with tough.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-88',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The research team _____ working on this project for over a year.',
    options: ['has been', 'have been', 'is been', 'are been'],
    correctAnswer: 0,
    explanation: 'The sentence requires present perfect continuous tense with singular subject "team", so use "has been".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-89',
    sectionId: 'verbal-ability',
    question: 'Identify the meaning of "Ephemeral":',
    options: ['Permanent', 'Temporary', 'Long-lasting', 'Enduring'],
    correctAnswer: 1,
    explanation: 'Ephemeral means lasting for a very short time or transitory.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-90',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Benevolent":',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (wishing evil or harm to others).',
    difficulty: 'medium',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-91',
    sectionId: 'verbal-ability',
    question: 'Select the correct form: The committee _____ unanimous in their decision.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'The sentence requires present tense form "is" to match the singular subject "committee".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-92',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the novel was captivating from start to finish.',
    options: ['plot', 'character', 'setting', 'theme'],
    correctAnswer: 0,
    explanation: 'Plot refers to the sequence of events in a story, which can be captivating.',
    difficulty: 'easy',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-93',
    sectionId: 'verbal-ability',
    question: 'Identify the synonym for "Pragmatic":',
    options: ['Idealistic', 'Practical', 'Theoretical', 'Abstract'],
    correctAnswer: 1,
    explanation: 'Pragmatic means dealing with things sensibly and realistically, which is synonymous with practical.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-94',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The company\'s performance _____ significantly over the past quarter.',
    options: ['improve', 'improves', 'improved', 'improving'],
    correctAnswer: 2,
    explanation: 'The sentence requires past tense form "improved" to match the past time reference "over the past quarter".',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-95',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes the sentence: The project was _____ due to lack of funding.',
    options: ['abandoned', 'abandoning', 'abandons', 'abandon'],
    correctAnswer: 0,
    explanation: 'The sentence requires a past participle form "abandoned" to describe the completed action.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-96',
    sectionId: 'verbal-ability',
    question: 'Identify the correct synonym for "Meticulous":',
    options: ['Careless', 'Careful', 'Thorough', 'Sloppy'],
    correctAnswer: 2,
    explanation: 'Meticulous means showing great attention to detail, which is synonymous with thorough.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-97',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Diligent":',
    options: ['Hardworking', 'Lazy', 'Careful', 'Thorough'],
    correctAnswer: 1,
    explanation: 'Diligent means having or showing care and conscientiousness, so its antonym is lazy.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-98',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The committee _____ to review the proposal next week.',
    options: ['meets', 'meet', 'meeting', 'met'],
    correctAnswer: 0,
    explanation: 'The sentence requires present tense form "meets" to match the singular subject "committee".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-99',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the argument was compelling.',
    options: ['logic', 'logical', 'logically', 'logician'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "logic" to describe the reasoning of the argument.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-100',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Pull yourself together":',
    options: ['To help someone', 'To calm down and control yourself', 'To work hard', 'To give up'],
    correctAnswer: 1,
    explanation: 'To pull yourself together means to calm down and regain control of your emotions.',
    difficulty: 'medium',
    topic: 'Idioms'
  },
  {
    id: 'infosys-verbal-101',
    sectionId: 'verbal-ability',
    question: 'Identify the synonym for "Eloquent":',
    options: ['Silent', 'Articulate', 'Confused', 'Quiet'],
    correctAnswer: 1,
    explanation: 'Eloquent means fluent or persuasive in speaking or writing, which is synonymous with articulate.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-102',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The data _____ analyzed thoroughly before the report was published.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 0,
    explanation: 'The sentence requires past tense form "was" to match the singular subject "data" and past context.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-103',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the situation became clear after investigation.',
    options: ['gravity', 'gravely', 'grave', 'graveness'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "gravity" to describe the seriousness of the situation.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-104',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "Optimistic":',
    options: ['Hopeful', 'Pessimistic', 'Confident', 'Positive'],
    correctAnswer: 1,
    explanation: 'Optimistic means hopeful and confident about the future, so its antonym is pessimistic.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'infosys-verbal-105',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Each of the students _____ responsible for their own work.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'When using "each of", the verb agrees with "each" (singular), so use "is".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-106',
    sectionId: 'verbal-ability',
    question: 'Identify the meaning of "Ubiquitous":',
    options: ['Rare', 'Common', 'Present everywhere', 'Unique'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-107',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Persistent":',
    options: ['Temporary', 'Tenacious', 'Weak', 'Fragile'],
    correctAnswer: 1,
    explanation: 'Persistent means continuing firmly in a course of action despite difficulty, which is synonymous with tenacious.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'infosys-verbal-108',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: The company\'s success _____ on the quality of its products.',
    options: ['depend', 'depends', 'depending', 'depended'],
    correctAnswer: 1,
    explanation: 'The sentence requires present tense form "depends" to match the singular subject "success".',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'infosys-verbal-109',
    sectionId: 'verbal-ability',
    question: 'Select the word that best fits: The _____ of the argument was lost on the audience.',
    options: ['nuance', 'nuanced', 'nuancing', 'nuances'],
    correctAnswer: 0,
    explanation: 'The sentence requires a noun form "nuance" to describe the subtle difference in the argument.',
    difficulty: 'hard',
    topic: 'Vocabulary'
  },
  {
    id: 'infosys-verbal-110',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of the idiom "Bite the bullet":',
    options: ['To eat something hard', 'To endure a painful situation', 'To fight back', 'To give up'],
    correctAnswer: 1,
    explanation: 'To bite the bullet means to endure a painful or difficult situation bravely.',
    difficulty: 'medium',
    topic: 'Idioms'
  }
]; 