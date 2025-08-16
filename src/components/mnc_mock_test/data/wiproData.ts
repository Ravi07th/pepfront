import { Question } from '../types';

// Quantitative Aptitude Questions (16 questions)
const quantitativeAptitudeQuestions: Question[] = [
  {
    id: 'wipro-quant-1',
    sectionId: 'quantitative-aptitude',
    question: 'If 15 workers can complete a work in 20 days, how many days will 25 workers take to complete the same work?',
    options: ['12 days', '15 days', '18 days', '20 days'],
    correctAnswer: 0,
    explanation: 'Using inverse proportion: 15 × 20 = 25 × x, so x = 12 days',
    difficulty: 'medium',
    topic: 'Time & Work'
  },
  {
    id: 'wipro-quant-2',
    sectionId: 'quantitative-aptitude',
    question: 'What is the HCF of 48 and 72?',
    options: ['12', '16', '24', '36'],
    correctAnswer: 2,
    explanation: 'HCF of 48 and 72 is 24. Factors of 48: 1,2,3,4,6,8,12,16,24,48. Factors of 72: 1,2,3,4,6,8,9,12,18,24,36,72. Common factors: 1,2,3,4,6,8,12,24. Highest common factor is 24.',
    difficulty: 'medium',
    topic: 'Arithmetic'
  },
  {
    id: 'wipro-quant-3',
    sectionId: 'quantitative-aptitude',
    question: 'If 15% of a number is 45, what is 25% of the same number?',
    options: ['60', '75', '90', '100'],
    correctAnswer: 1,
    explanation: 'Let the number be x. 15% of x = 45. So, x = 45/0.15 = 300. 25% of 300 = 75.',
    difficulty: 'easy',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-4',
    sectionId: 'quantitative-aptitude',
    question: 'What is the LCM of 12 and 18?',
    options: ['24', '36', '48', '72'],
    correctAnswer: 1,
    explanation: 'LCM of 12 and 18 is 36. Prime factors: 12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 36.',
    difficulty: 'easy',
    topic: 'Arithmetic'
  },
  {
    id: 'wipro-quant-5',
    sectionId: 'quantitative-aptitude',
    question: 'A train travels 240 km in 4 hours. What is its speed in km/h?',
    options: ['40 km/h', '50 km/h', '60 km/h', '80 km/h'],
    correctAnswer: 2,
    explanation: 'Speed = Distance/Time = 240/4 = 60 km/h.',
    difficulty: 'easy',
    topic: 'Time & Work'
  },
  {
    id: 'wipro-quant-6',
    sectionId: 'quantitative-aptitude',
    question: 'If the ratio of boys to girls in a class is 3:2 and there are 30 students, how many girls are there?',
    options: ['10', '12', '15', '18'],
    correctAnswer: 1,
    explanation: 'Total parts = 3+2 = 5. Girls = (2/5) × 30 = 12.',
    difficulty: 'medium',
    topic: 'Ratio & Proportion'
  },
  {
    id: 'wipro-quant-7',
    sectionId: 'quantitative-aptitude',
    question: 'What is 20% of 150?',
    options: ['20', '25', '30', '35'],
    correctAnswer: 2,
    explanation: '20% of 150 = 0.20 × 150 = 30.',
    difficulty: 'easy',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-8',
    sectionId: 'quantitative-aptitude',
    question: 'A rectangle has length 8 cm and width 6 cm. What is its area?',
    options: ['14 cm²', '28 cm²', '48 cm²', '56 cm²'],
    correctAnswer: 2,
    explanation: 'Area = length × width = 8 × 6 = 48 cm².',
    difficulty: 'easy',
    topic: 'Geometry'
  },
  {
    id: 'wipro-quant-9',
    sectionId: 'quantitative-aptitude',
    question: 'If 8 workers can complete a job in 10 days, how many days will 5 workers take?',
    options: ['12 days', '14 days', '16 days', '20 days'],
    correctAnswer: 2,
    explanation: 'Using inverse proportion: 8 × 10 = 5 × x, so x = 16 days.',
    difficulty: 'medium',
    topic: 'Time & Work'
  },
  {
    id: 'wipro-quant-10',
    sectionId: 'quantitative-aptitude',
    question: 'What is the average of 15, 20, 25, and 30?',
    options: ['20', '22.5', '25', '27.5'],
    correctAnswer: 1,
    explanation: 'Average = (15+20+25+30)/4 = 90/4 = 22.5.',
    difficulty: 'easy',
    topic: 'Arithmetic'
  },
  {
    id: 'wipro-quant-11',
    sectionId: 'quantitative-aptitude',
    question: 'A shopkeeper sells an item for ₹120 and makes a profit of 20%. What was the cost price?',
    options: ['₹80', '₹90', '₹100', '₹110'],
    correctAnswer: 2,
    explanation: 'Let CP be x. SP = 120% of CP = 1.2x = 120. So, x = 120/1.2 = 100.',
    difficulty: 'medium',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-12',
    sectionId: 'quantitative-aptitude',
    question: 'What is the perimeter of a square with side length 7 cm?',
    options: ['14 cm', '21 cm', '28 cm', '49 cm'],
    correctAnswer: 2,
    explanation: 'Perimeter = 4 × side = 4 × 7 = 28 cm.',
    difficulty: 'easy',
    topic: 'Geometry'
  },
  {
    id: 'wipro-quant-13',
    sectionId: 'quantitative-aptitude',
    question: 'If 3/4 of a number is 60, what is the number?',
    options: ['70', '75', '80', '85'],
    correctAnswer: 2,
    explanation: 'Let the number be x. (3/4)x = 60. So, x = 60 × (4/3) = 80.',
    difficulty: 'medium',
    topic: 'Arithmetic'
  },
  {
    id: 'wipro-quant-14',
    sectionId: 'quantitative-aptitude',
    question: 'What is the simple interest on ₹5000 at 8% per annum for 2 years?',
    options: ['₹400', '₹600', '₹800', '₹1000'],
    correctAnswer: 2,
    explanation: 'SI = (P×R×T)/100 = (5000×8×2)/100 = 800.',
    difficulty: 'medium',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-15',
    sectionId: 'quantitative-aptitude',
    question: 'A circle has radius 5 cm. What is its area? (π = 3.14)',
    options: ['25π cm²', '50π cm²', '75π cm²', '100π cm²'],
    correctAnswer: 0,
    explanation: 'Area = πr² = π × 5² = 25π cm².',
    difficulty: 'medium',
    topic: 'Geometry'
  },
  {
    id: 'wipro-quant-16',
    sectionId: 'quantitative-aptitude',
    question: 'What is the value of 2³ × 3²?',
    options: ['36', '48', '72', '96'],
    correctAnswer: 2,
    explanation: '2³ × 3² = 8 × 9 = 72.',
    difficulty: 'easy',
    topic: 'Arithmetic'
  }
];

// Logical Reasoning Questions (14 questions)
const logicalReasoningQuestions: Question[] = [
  {
    id: 'wipro-logic-1',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    explanation: 'The difference between consecutive terms increases by 2: 4, 6, 8, 10, 12. So next term = 30 + 12 = 42.',
    difficulty: 'medium',
    topic: 'Series'
  },
  {
    id: 'wipro-logic-2',
    sectionId: 'logical-reasoning',
    question: 'In a row of 5 people, A is sitting to the left of B, and C is sitting to the right of B. If D is sitting at one end, who is sitting in the middle?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 1,
    explanation: 'Arrangement: D-A-B-C-E or E-A-B-C-D. B is always in the middle.',
    difficulty: 'medium',
    topic: 'Seating Arrangements'
  },
  {
    id: 'wipro-logic-3',
    sectionId: 'logical-reasoning',
    question: 'All roses are flowers. Some flowers are red. Which statement is definitely true?',
    options: ['All roses are red', 'Some roses are red', 'No roses are red', 'Cannot be determined'],
    correctAnswer: 3,
    explanation: 'From the given statements, we cannot determine the relationship between roses and red color.',
    difficulty: 'medium',
    topic: 'Syllogisms'
  },
  {
    id: 'wipro-logic-4',
    sectionId: 'logical-reasoning',
    question: 'If A is the brother of B, and B is the sister of C, then A is the _____ of C.',
    options: ['brother', 'sister', 'cousin', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'A is the brother of B, and B is the sister of C. So A is the brother of C.',
    difficulty: 'easy',
    topic: 'Blood Relations'
  },
  {
    id: 'wipro-logic-5',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 3, 6, 11, 18, 27, ?',
    options: ['36', '38', '40', '42'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 3, 5, 7, 9, 11. So next term = 27 + 11 = 38.',
    difficulty: 'medium',
    topic: 'Series'
  },
  {
    id: 'wipro-logic-6',
    sectionId: 'logical-reasoning',
    question: 'In a family, there are 2 fathers, 2 mothers, 2 sons, and 2 daughters. What is the minimum number of people?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: 'Minimum 5 people: Grandfather, Father, Mother, Son, Daughter.',
    difficulty: 'hard',
    topic: 'Blood Relations'
  },
  {
    id: 'wipro-logic-7',
    sectionId: 'logical-reasoning',
    question: 'All doctors are professionals. Some professionals are teachers. Which statement is definitely true?',
    options: ['All doctors are teachers', 'Some doctors are teachers', 'No doctors are teachers', 'Cannot be determined'],
    correctAnswer: 3,
    explanation: 'From the given statements, we cannot determine the relationship between doctors and teachers.',
    difficulty: 'medium',
    topic: 'Syllogisms'
  },
  {
    id: 'wipro-logic-8',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: 1, 3, 6, 10, 15, ?',
    options: ['20', '21', '22', '23'],
    correctAnswer: 1,
    explanation: 'The difference increases by 1: 2, 3, 4, 5, 6. So next term = 15 + 6 = 21.',
    difficulty: 'easy',
    topic: 'Series'
  },
  {
    id: 'wipro-logic-9',
    sectionId: 'logical-reasoning',
    question: 'If P is the father of Q, and Q is the mother of R, then P is the _____ of R.',
    options: ['father', 'grandfather', 'uncle', 'brother'],
    correctAnswer: 1,
    explanation: 'P is the father of Q, and Q is the mother of R. So P is the grandfather of R.',
    difficulty: 'easy',
    topic: 'Blood Relations'
  },
  {
    id: 'wipro-logic-10',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 2, 4, 8, 16, 32, ?',
    options: ['48', '56', '64', '72'],
    correctAnswer: 2,
    explanation: 'Each term is multiplied by 2. So next term = 32 × 2 = 64.',
    difficulty: 'easy',
    topic: 'Series'
  },
  {
    id: 'wipro-logic-11',
    sectionId: 'logical-reasoning',
    question: 'In a row, A is 5th from the left and B is 8th from the right. If they swap positions, A becomes 13th from the left. How many people are in the row?',
    options: ['18', '20', '22', '24'],
    correctAnswer: 1,
    explanation: 'After swapping, A is 13th from left and B was 8th from right. Total = (13 + 8) - 1 = 20.',
    difficulty: 'hard',
    topic: 'Seating Arrangements'
  },
  {
    id: 'wipro-logic-12',
    sectionId: 'logical-reasoning',
    question: 'All cats are animals. Some animals are pets. Which statement is definitely true?',
    options: ['All cats are pets', 'Some cats are pets', 'No cats are pets', 'Cannot be determined'],
    correctAnswer: 3,
    explanation: 'From the given statements, we cannot determine the relationship between cats and pets.',
    difficulty: 'medium',
    topic: 'Syllogisms'
  },
  {
    id: 'wipro-logic-13',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: 1, 2, 4, 7, 11, ?',
    options: ['15', '16', '17', '18'],
    correctAnswer: 1,
    explanation: 'The difference increases by 1: 1, 2, 3, 4, 5. So next term = 11 + 5 = 16.',
    difficulty: 'easy',
    topic: 'Series'
  },
  {
    id: 'wipro-logic-14',
    sectionId: 'logical-reasoning',
    question: 'If A is the son of B, and B is the daughter of C, then A is the _____ of C.',
    options: ['son', 'grandson', 'nephew', 'cousin'],
    correctAnswer: 1,
    explanation: 'A is the son of B, and B is the daughter of C. So A is the grandson of C.',
    difficulty: 'easy',
    topic: 'Blood Relations'
  },
  // Additional Logical Reasoning Questions (Previous Year Wipro)
  {
    id: 'wipro-logic-15',
    sectionId: 'logical-reasoning',
    question: 'In a certain code, "WORK" is written as "XPSL" and "HARD" is written as "IBSE". How is "STUDY" written in that code?',
    options: ['TUVEX', 'TUVFZ', 'TUVFY', 'TUVFX'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward: S→T, T→U, U→V, D→E, Y→Z. So STUDY becomes TUVEX.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  },
  {
    id: 'wipro-logic-16',
    sectionId: 'logical-reasoning',
    question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 4, 6, 8, 10, 12. So next term = 30 + 12 = 42.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-17',
    sectionId: 'logical-reasoning',
    question: 'If "PENCIL" is coded as "QFOEJM", then "PAPER" is coded as:',
    options: ['QBQFS', 'QBQFT', 'QBQFR', 'QBQFP'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward: P→Q, A→B, P→Q, E→F, R→S. So PAPER becomes QBQFS.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  },
  {
    id: 'wipro-logic-18',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 3, 8, 15, 24, 35, ?',
    options: ['46', '48', '50', '52'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 5, 7, 9, 11, 13. So next term = 35 + 13 = 48.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-19',
    sectionId: 'logical-reasoning',
    question: 'If "APPLE" is to "FRUIT" as "CARROT" is to:',
    options: ['VEGETABLE', 'ORANGE', 'RED', 'FOOD'],
    correctAnswer: 0,
    explanation: 'Apple is a type of fruit, so carrot is a type of vegetable.',
    difficulty: 'easy',
    topic: 'Analogies'
  },
  {
    id: 'wipro-logic-20',
    sectionId: 'logical-reasoning',
    question: 'In a family, A is the father of B, B is the mother of C, and C is the son of D. What is the relationship between A and D?',
    options: ['Father', 'Mother', 'Son', 'Cannot be determined'],
    correctAnswer: 3,
    explanation: 'The relationship between A and D cannot be determined from the given information.',
    difficulty: 'medium',
    topic: 'Blood Relations'
  },
  {
    id: 'wipro-logic-21',
    sectionId: 'logical-reasoning',
    question: 'Find the next term: 1, 3, 6, 10, 15, ?',
    options: ['20', '21', '22', '23'],
    correctAnswer: 1,
    explanation: 'The difference increases by 1: 2, 3, 4, 5, 6. So next term = 15 + 6 = 21.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-22',
    sectionId: 'logical-reasoning',
    question: 'If "BOOK" is coded as "CPPL", then "READ" is coded as:',
    options: ['SFBE', 'SFBF', 'SFBG', 'SFBH'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward: R→S, E→F, A→B, D→E. So READ becomes SFBE.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  },
  {
    id: 'wipro-logic-23',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 2, 5, 10, 17, 26, ?',
    options: ['35', '37', '39', '41'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 3, 5, 7, 9, 11. So next term = 26 + 11 = 37.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-24',
    sectionId: 'logical-reasoning',
    question: 'If "DOCTOR" is to "HOSPITAL" as "TEACHER" is to:',
    options: ['SCHOOL', 'STUDENT', 'BOOK', 'CLASS'],
    correctAnswer: 0,
    explanation: 'Doctor works in a hospital, so teacher works in a school.',
    difficulty: 'easy',
    topic: 'Analogies'
  },
  {
    id: 'wipro-logic-25',
    sectionId: 'logical-reasoning',
    question: 'In a row of 40 students, R is 15th from the left and S is 20th from the right. How many students are between R and S?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: 'R is 15th from left, so 25th from right. S is 20th from right. Students between them = 25-20-1 = 4.',
    difficulty: 'hard',
    topic: 'Ranking'
  },
  {
    id: 'wipro-logic-26',
    sectionId: 'logical-reasoning',
    question: 'Find the next term: 1, 2, 4, 7, 11, ?',
    options: ['15', '16', '17', '18'],
    correctAnswer: 1,
    explanation: 'The difference increases by 1: 1, 2, 3, 4, 5. So next term = 11 + 5 = 16.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-27',
    sectionId: 'logical-reasoning',
    question: 'If "BIRD" is coded as "CJSE", then "FISH" is coded as:',
    options: ['GJTI', 'GJTH', 'GJTG', 'GJTF'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward: F→G, I→J, S→T, H→I. So FISH becomes GJTI.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  },
  {
    id: 'wipro-logic-28',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 1, 4, 9, 16, 25, ?',
    options: ['36', '35', '34', '33'],
    correctAnswer: 0,
    explanation: 'These are perfect squares: 1², 2², 3², 4², 5², 6². So next term = 6² = 36.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-29',
    sectionId: 'logical-reasoning',
    question: 'If "WATER" is to "LIQUID" as "ICE" is to:',
    options: ['SOLID', 'COLD', 'FROZEN', 'WATER'],
    correctAnswer: 0,
    explanation: 'Water is a type of liquid, so ice is a type of solid.',
    difficulty: 'easy',
    topic: 'Analogies'
  },
  {
    id: 'wipro-logic-30',
    sectionId: 'logical-reasoning',
    question: 'In a family of 6 members, A is the grandfather of B, C is the father of D, and E is the mother of F. If B is the child of C, what is the relationship between A and D?',
    options: ['Grandfather', 'Father', 'Uncle', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'A is grandfather of B, and B is child of C, and C is father of D. So A is grandfather of D.',
    difficulty: 'medium',
    topic: 'Blood Relations'
  },
  {
    id: 'wipro-logic-31',
    sectionId: 'logical-reasoning',
    question: 'Find the next term: 2, 4, 8, 16, 32, ?',
    options: ['64', '62', '60', '58'],
    correctAnswer: 0,
    explanation: 'Each term is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-32',
    sectionId: 'logical-reasoning',
    question: 'If "HOUSE" is coded as "IPVTF", then "ROOM" is coded as:',
    options: ['SPPN', 'SPPO', 'SPPP', 'SPPQ'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward: R→S, O→P, O→P, M→N. So ROOM becomes SPPN.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  },
  {
    id: 'wipro-logic-33',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 3, 6, 11, 18, 27, ?',
    options: ['36', '38', '40', '42'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 3, 5, 7, 9, 11. So next term = 27 + 11 = 38.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-34',
    sectionId: 'logical-reasoning',
    question: 'If "SUN" is to "DAY" as "MOON" is to:',
    options: ['NIGHT', 'STAR', 'SKY', 'LIGHT'],
    correctAnswer: 0,
    explanation: 'Sun appears during day, so moon appears during night.',
    difficulty: 'easy',
    topic: 'Analogies'
  },
  {
    id: 'wipro-logic-35',
    sectionId: 'logical-reasoning',
    question: 'In a row of 50 students, P is 10th from the left and Q is 15th from the right. How many students are between P and Q?',
    options: ['23', '24', '25', '26'],
    correctAnswer: 2,
    explanation: 'P is 10th from left, so 41st from right. Q is 15th from right. Students between them = 41-15-1 = 25.',
    difficulty: 'hard',
    topic: 'Ranking'
  },
  {
    id: 'wipro-logic-36',
    sectionId: 'logical-reasoning',
    question: 'Find the next term: 1, 3, 7, 15, 31, ?',
    options: ['63', '61', '59', '57'],
    correctAnswer: 0,
    explanation: 'Each term is multiplied by 2 and add 1: 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63.',
    difficulty: 'hard',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-37',
    sectionId: 'logical-reasoning',
    question: 'If "TREE" is coded as "USFF", then "LEAF" is coded as:',
    options: ['MFBG', 'MFBH', 'MFBI', 'MFBJ'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward: L→M, E→F, A→B, F→G. So LEAF becomes MFBG.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  },
  {
    id: 'wipro-logic-38',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 4, 6, 8, 10, 12. So next term = 30 + 12 = 42.',
    difficulty: 'medium',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-39',
    sectionId: 'logical-reasoning',
    question: 'If "CAR" is to "ROAD" as "SHIP" is to:',
    options: ['WATER', 'OCEAN', 'SEA', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Car moves on road, so ship moves on water/ocean/sea.',
    difficulty: 'easy',
    topic: 'Analogies'
  },
  {
    id: 'wipro-logic-40',
    sectionId: 'logical-reasoning',
    question: 'In a family, X is the brother of Y, Y is the sister of Z, and Z is the father of W. What is the relationship between X and W?',
    options: ['Uncle', 'Father', 'Brother', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'X is brother of Y, Y is sister of Z, Z is father of W. So X is uncle of W.',
    difficulty: 'medium',
    topic: 'Blood Relations'
  },
  {
    id: 'wipro-logic-41',
    sectionId: 'logical-reasoning',
    question: 'Find the next term: 1, 2, 4, 8, 16, ?',
    options: ['32', '30', '28', '26'],
    correctAnswer: 0,
    explanation: 'Each term is multiplied by 2: 1×2=2, 2×2=4, 4×2=8, 8×2=16, 16×2=32.',
    difficulty: 'easy',
    topic: 'Number Series'
  },
  {
    id: 'wipro-logic-42',
    sectionId: 'logical-reasoning',
    question: 'If "MUSIC" is coded as "NVTJD", then "SONG" is coded as:',
    options: ['TPOH', 'TPOI', 'TPOJ', 'TPOK'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward: S→T, O→P, N→O, G→H. So SONG becomes TPOH.',
    difficulty: 'medium',
    topic: 'Coding-Decoding'
  }
];

// Verbal Ability Questions (18 questions)
const verbalAbilityQuestions: Question[] = [
  {
    id: 'wipro-verbal-1',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Eloquent":',
    options: ['Silent', 'Articulate', 'Confused', 'Rude'],
    correctAnswer: 1,
    explanation: 'Eloquent means fluent or persuasive in speech, which is synonymous with articulate.',
    difficulty: 'medium',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-2',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Benevolent":',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (evil or harmful).',
    difficulty: 'medium',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-3',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Diligent":',
    options: ['Lazy', 'Hardworking', 'Careless', 'Slow'],
    correctAnswer: 1,
    explanation: 'Diligent means hardworking and conscientious.',
    difficulty: 'easy',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-4',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Optimistic":',
    options: ['Happy', 'Pessimistic', 'Confident', 'Hopeful'],
    correctAnswer: 1,
    explanation: 'Optimistic means hopeful and positive, so its antonym is pessimistic.',
    difficulty: 'easy',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-5',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: "She is _____ intelligent than her brother."',
    options: ['more', 'most', 'much', 'very'],
    correctAnswer: 0,
    explanation: 'Use "more" for comparison between two people.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-6',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Meticulous":',
    options: ['Careless', 'Careful', 'Quick', 'Slow'],
    correctAnswer: 1,
    explanation: 'Meticulous means very careful and precise.',
    difficulty: 'medium',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-7',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Courageous":',
    options: ['Brave', 'Cowardly', 'Strong', 'Weak'],
    correctAnswer: 1,
    explanation: 'Courageous means brave, so its antonym is cowardly.',
    difficulty: 'easy',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-8',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: "The weather is _____ today."',
    options: ['good', 'well', 'better', 'best'],
    correctAnswer: 0,
    explanation: 'Use "good" as an adjective to describe the weather.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-9',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Persistent":',
    options: ['Stubborn', 'Determined', 'Flexible', 'Weak'],
    correctAnswer: 1,
    explanation: 'Persistent means determined and continuing despite difficulties.',
    difficulty: 'medium',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-10',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Generous":',
    options: ['Kind', 'Selfish', 'Helpful', 'Friendly'],
    correctAnswer: 1,
    explanation: 'Generous means giving and kind, so its antonym is selfish.',
    difficulty: 'easy',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-11',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: "He _____ to the store yesterday."',
    options: ['go', 'goes', 'went', 'gone'],
    correctAnswer: 2,
    explanation: 'Use past tense "went" for an action that happened yesterday.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-12',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Wise":',
    options: ['Smart', 'Intelligent', 'Clever', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Wise means having good judgment and intelligence.',
    difficulty: 'easy',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-13',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Honest":',
    options: ['Truthful', 'Dishonest', 'Sincere', 'Loyal'],
    correctAnswer: 1,
    explanation: 'Honest means truthful, so its antonym is dishonest.',
    difficulty: 'easy',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-14',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: "The book is _____ the table."',
    options: ['in', 'on', 'at', 'by'],
    correctAnswer: 1,
    explanation: 'Use "on" to indicate position on a surface.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-15',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Efficient":',
    options: ['Effective', 'Productive', 'Organized', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Efficient means working well and productively.',
    difficulty: 'medium',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-16',
    sectionId: 'verbal-ability',
    question: 'Choose the correct antonym for "Polite":',
    options: ['Rude', 'Friendly', 'Kind', 'Respectful'],
    correctAnswer: 0,
    explanation: 'Polite means courteous, so its antonym is rude.',
    difficulty: 'easy',
    topic: 'Synonyms/Antonyms'
  },
  {
    id: 'wipro-verbal-17',
    sectionId: 'verbal-ability',
    question: 'Fill in the blank: "She _____ her homework every day."',
    options: ['do', 'does', 'did', 'done'],
    correctAnswer: 1,
    explanation: 'Use "does" for third person singular present tense.',
    difficulty: 'easy',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-18',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Confident":',
    options: ['Sure', 'Certain', 'Assured', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Confident means feeling sure and certain.',
    difficulty: 'easy',
    topic: 'Synonyms/Antonyms'
  },
  // Additional Verbal Ability Questions (Previous Year Wipro)
  {
    id: 'wipro-verbal-19',
    sectionId: 'verbal-ability',
    question: 'Choose the word that is most similar in meaning to "UBIQUITOUS":',
    options: ['Rare', 'Common', 'Everywhere', 'Hidden'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    difficulty: 'hard',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-20',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "ABUNDANT":',
    options: ['scarce', 'plenty', 'rich', 'full'],
    correctAnswer: 0,
    explanation: 'Abundant means plentiful or in large quantities, so "scarce" (meaning rare or insufficient) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-21',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes the sentence: The _____ of the novel was so complex that I had to read it twice.',
    options: ['plot', 'story', 'tale', 'narrative'],
    correctAnswer: 0,
    explanation: 'Plot refers to the sequence of events in a story, which is what makes a novel complex and requires re-reading.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-22',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "DILIGENT":',
    options: ['hardworking', 'intelligent', 'skilled', 'talented'],
    correctAnswer: 0,
    explanation: 'Diligent means hardworking or industrious, so "hardworking" is the correct synonym.',
    difficulty: 'easy',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-23',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: Neither the manager nor the employees _____ satisfied with the new policy.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 1,
    explanation: 'When using "neither...nor", the verb agrees with the subject closest to it. Since "employees" is plural, use "are".',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-24',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "TRANSPARENT":',
    options: ['opaque', 'clear', 'visible', 'obvious'],
    correctAnswer: 0,
    explanation: 'Transparent means see-through or clear, so "opaque" (meaning not transparent) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-25',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the mountain was breathtaking.',
    options: ['view', 'sight', 'scene', 'picture'],
    correctAnswer: 0,
    explanation: 'View refers to what can be seen from a particular position, which is what makes a mountain breathtaking.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-26',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "ELOQUENT":',
    options: ['articulate', 'loud', 'confident', 'knowledgeable'],
    correctAnswer: 0,
    explanation: 'Eloquent means fluent or persuasive in speech, so "articulate" is the correct synonym.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-27',
    sectionId: 'verbal-ability',
    question: 'Choose the correct spelling: The _____ of the situation was clear to everyone.',
    options: ['gravity', 'gravety', 'gravaty', 'graviti'],
    correctAnswer: 0,
    explanation: 'Gravity is the correct spelling, meaning seriousness or importance.',
    difficulty: 'medium',
    topic: 'Spelling'
  },
  {
    id: 'wipro-verbal-28',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "OPTIMISTIC":',
    options: ['pessimistic', 'hopeful', 'positive', 'confident'],
    correctAnswer: 0,
    explanation: 'Optimistic means hopeful and positive, so "pessimistic" (meaning negative or gloomy) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-29',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the argument was lost on the audience.',
    options: ['essence', 'meaning', 'point', 'purpose'],
    correctAnswer: 0,
    explanation: 'Essence refers to the fundamental nature or most important quality, which is what was lost on the audience.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-30',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "PERSEVERE":',
    options: ['persist', 'stop', 'give up', 'hesitate'],
    correctAnswer: 0,
    explanation: 'Persevere means to persist or continue despite difficulties, so "persist" is the correct synonym.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-31',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: The team _____ working on this project for months.',
    options: ['has been', 'have been', 'is', 'are'],
    correctAnswer: 0,
    explanation: 'Use "has been" for singular subject "team" in present perfect continuous tense.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-32',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "GENEROUS":',
    options: ['stingy', 'kind', 'giving', 'charitable'],
    correctAnswer: 0,
    explanation: 'Generous means giving or charitable, so "stingy" (meaning unwilling to give) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-33',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the storm was devastating.',
    options: ['impact', 'effect', 'result', 'outcome'],
    correctAnswer: 0,
    explanation: 'Impact refers to the force or effect of something, which is what made the storm devastating.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-34',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "ASTUTE":',
    options: ['clever', 'stupid', 'slow', 'careless'],
    correctAnswer: 0,
    explanation: 'Astute means clever or shrewd, so "clever" is the correct synonym.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-35',
    sectionId: 'verbal-ability',
    question: 'Choose the correct spelling: The _____ of the problem was difficult to understand.',
    options: ['complexity', 'complexety', 'complexaty', 'complexiti'],
    correctAnswer: 0,
    explanation: 'Complexity is the correct spelling, meaning the state of being complex or complicated.',
    difficulty: 'medium',
    topic: 'Spelling'
  },
  {
    id: 'wipro-verbal-36',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "COURAGEOUS":',
    options: ['cowardly', 'brave', 'bold', 'fearless'],
    correctAnswer: 0,
    explanation: 'Courageous means brave or fearless, so "cowardly" (meaning lacking courage) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-37',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the evidence was overwhelming.',
    options: ['weight', 'burden', 'load', 'pressure'],
    correctAnswer: 0,
    explanation: 'Weight refers to the importance or significance, which is what made the evidence overwhelming.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-38',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "PRUDENT":',
    options: ['wise', 'foolish', 'careless', 'reckless'],
    correctAnswer: 0,
    explanation: 'Prudent means wise or careful in making decisions, so "wise" is the correct synonym.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-39',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: The committee _____ decided to postpone the meeting.',
    options: ['has', 'have', 'is', 'are'],
    correctAnswer: 0,
    explanation: 'Use "has" for singular subject "committee" in present perfect tense.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-40',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "HONEST":',
    options: ['dishonest', 'truthful', 'sincere', 'loyal'],
    correctAnswer: 0,
    explanation: 'Honest means truthful, so "dishonest" (meaning not truthful) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-41',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the solution was innovative.',
    options: ['approach', 'method', 'technique', 'strategy'],
    correctAnswer: 0,
    explanation: 'Approach refers to the way of dealing with something, which is what made the solution innovative.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-42',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "RESILIENT":',
    options: ['flexible', 'rigid', 'fragile', 'weak'],
    correctAnswer: 0,
    explanation: 'Resilient means able to recover quickly from difficulties, so "flexible" is the correct synonym.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-43',
    sectionId: 'verbal-ability',
    question: 'Choose the correct spelling: The _____ of the matter was quite serious.',
    options: ['gravity', 'gravety', 'gravaty', 'graviti'],
    correctAnswer: 0,
    explanation: 'Gravity is the correct spelling, meaning seriousness or importance.',
    difficulty: 'medium',
    topic: 'Spelling'
  },
  {
    id: 'wipro-verbal-44',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "KIND":',
    options: ['cruel', 'gentle', 'nice', 'friendly'],
    correctAnswer: 0,
    explanation: 'Kind means gentle or friendly, so "cruel" (meaning unkind or harsh) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-45',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the problem was unexpected.',
    options: ['severity', 'intensity', 'strength', 'power'],
    correctAnswer: 0,
    explanation: 'Severity refers to the seriousness or harshness, which is what made the problem unexpected.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-46',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "DETERMINED":',
    options: ['resolute', 'uncertain', 'hesitant', 'doubtful'],
    correctAnswer: 0,
    explanation: 'Determined means resolute or firm in purpose, so "resolute" is the correct synonym.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-47',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: The data _____ analyzed by the research team.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 0,
    explanation: 'Use "was" for singular subject "data" in passive voice.',
    difficulty: 'medium',
    topic: 'Grammar'
  },
  {
    id: 'wipro-verbal-48',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "POLITE":',
    options: ['rude', 'courteous', 'respectful', 'civil'],
    correctAnswer: 0,
    explanation: 'Polite means courteous or respectful, so "rude" (meaning impolite) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-49',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the situation was alarming.',
    options: ['gravity', 'seriousness', 'importance', 'significance'],
    correctAnswer: 0,
    explanation: 'Gravity refers to the seriousness or importance, which is what made the situation alarming.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-50',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "COMPETENT":',
    options: ['capable', 'incompetent', 'unskilled', 'inept'],
    correctAnswer: 0,
    explanation: 'Competent means capable or skilled, so "capable" is the correct synonym.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  {
    id: 'wipro-verbal-51',
    sectionId: 'verbal-ability',
    question: 'Choose the correct spelling: The _____ of the issue was complex.',
    options: ['complexity', 'complexety', 'complexaty', 'complexiti'],
    correctAnswer: 0,
    explanation: 'Complexity is the correct spelling, meaning the state of being complex or complicated.',
    difficulty: 'medium',
    topic: 'Spelling'
  },
  {
    id: 'wipro-verbal-52',
    sectionId: 'verbal-ability',
    question: 'Select the antonym for "FAIR":',
    options: ['unfair', 'just', 'equal', 'balanced'],
    correctAnswer: 0,
    explanation: 'Fair means just or equal, so "unfair" (meaning not just) is the antonym.',
    difficulty: 'easy',
    topic: 'Antonyms'
  },
  {
    id: 'wipro-verbal-53',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes: The _____ of the decision was far-reaching.',
    options: ['implications', 'consequences', 'results', 'outcomes'],
    correctAnswer: 0,
    explanation: 'Implications refer to the possible effects or consequences, which is what made the decision far-reaching.',
    difficulty: 'medium',
    topic: 'Vocabulary'
  },
  {
    id: 'wipro-verbal-54',
    sectionId: 'verbal-ability',
    question: 'Select the synonym for "RELIABLE":',
    options: ['trustworthy', 'unreliable', 'untrustworthy', 'doubtful'],
    correctAnswer: 0,
    explanation: 'Reliable means trustworthy or dependable, so "trustworthy" is the correct synonym.',
    difficulty: 'medium',
    topic: 'Synonyms'
  },
  // Additional Quantitative Aptitude Questions (Previous Year Wipro)
  {
    id: 'wipro-quant-17',
    sectionId: 'quantitative-aptitude',
    question: 'A sum of money becomes Rs. 1,200 in 2 years and Rs. 1,500 in 5 years at simple interest. What is the principal amount?',
    options: ['Rs. 800', 'Rs. 900', 'Rs. 1,000', 'Rs. 1,100'],
    correctAnswer: 0,
    explanation: 'Interest for 3 years = 1500 - 1200 = Rs. 300. So annual interest = Rs. 100. Principal = 1200 - (100 × 2) = Rs. 800.',
    difficulty: 'medium',
    topic: 'Simple Interest'
  },
  {
    id: 'wipro-quant-18',
    sectionId: 'quantitative-aptitude',
    question: 'The average age of 5 students is 20 years. If one student leaves and a new student of age 25 years joins, what is the new average age?',
    options: ['21 years', '22 years', '23 years', '24 years'],
    correctAnswer: 0,
    explanation: 'Total age of 5 students = 5 × 20 = 100. New total = 100 - 20 + 25 = 105. New average = 105/5 = 21 years.',
    difficulty: 'medium',
    topic: 'Average'
  },
  {
    id: 'wipro-quant-19',
    sectionId: 'quantitative-aptitude',
    question: 'A shopkeeper sells an article for Rs. 1,200 and makes a profit of 20%. What was the cost price?',
    options: ['Rs. 900', 'Rs. 1,000', 'Rs. 1,100', 'Rs. 1,200'],
    correctAnswer: 1,
    explanation: 'CP = SP/(1 + Profit%) = 1200/1.2 = Rs. 1000.',
    difficulty: 'medium',
    topic: 'Profit & Loss'
  },
  {
    id: 'wipro-quant-20',
    sectionId: 'quantitative-aptitude',
    question: 'If 12 men can complete a work in 8 days, how many men are needed to complete the same work in 6 days?',
    options: ['14 men', '16 men', '18 men', '20 men'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 12 × 8 = x × 6, so x = 16 men.',
    difficulty: 'medium',
    topic: 'Time & Work'
  },
  {
    id: 'wipro-quant-21',
    sectionId: 'quantitative-aptitude',
    question: 'The ratio of the ages of A and B is 3:4. If A is 18 years old, what is the age of B?',
    options: ['20 years', '22 years', '24 years', '26 years'],
    correctAnswer: 2,
    explanation: 'Let B\'s age be x. 3:4 = 18:x. So x = (18 × 4)/3 = 24 years.',
    difficulty: 'easy',
    topic: 'Ratio & Proportion'
  },
  {
    id: 'wipro-quant-22',
    sectionId: 'quantitative-aptitude',
    question: 'What is 25% of 200?',
    options: ['40', '50', '60', '70'],
    correctAnswer: 1,
    explanation: '25% of 200 = 0.25 × 200 = 50.',
    difficulty: 'easy',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-23',
    sectionId: 'quantitative-aptitude',
    question: 'A boat can travel 30 km downstream in 3 hours and 15 km upstream in 3 hours. What is the speed of the boat in still water?',
    options: ['5 km/h', '7.5 km/h', '10 km/h', '12.5 km/h'],
    correctAnswer: 1,
    explanation: 'Downstream speed = 30/3 = 10 km/h, Upstream speed = 15/3 = 5 km/h. Boat speed = (10+5)/2 = 7.5 km/h.',
    difficulty: 'hard',
    topic: 'Speed, Distance & Time'
  },
  {
    id: 'wipro-quant-24',
    sectionId: 'quantitative-aptitude',
    question: 'The compound interest on Rs. 5,000 for 2 years at 10% per annum is:',
    options: ['Rs. 1,000', 'Rs. 1,050', 'Rs. 1,100', 'Rs. 1,150'],
    correctAnswer: 1,
    explanation: 'CI = P[(1+R/100)^n - 1] = 5000[(1.1)² - 1] = 5000[1.21 - 1] = Rs. 1050.',
    difficulty: 'hard',
    topic: 'Compound Interest'
  },
  {
    id: 'wipro-quant-25',
    sectionId: 'quantitative-aptitude',
    question: 'What is the HCF of 36 and 48?',
    options: ['8', '12', '16', '24'],
    correctAnswer: 1,
    explanation: 'HCF of 36 and 48 is 12. Factors of 36: 1,2,3,4,6,9,12,18,36. Factors of 48: 1,2,3,4,6,8,12,16,24,48. Common factors: 1,2,3,4,6,12. Highest common factor is 12.',
    difficulty: 'medium',
    topic: 'Arithmetic'
  },
  {
    id: 'wipro-quant-26',
    sectionId: 'quantitative-aptitude',
    question: 'If 20% of a number is 60, what is 40% of the same number?',
    options: ['100', '120', '140', '160'],
    correctAnswer: 1,
    explanation: 'Let the number be x. 20% of x = 60. So, x = 60/0.2 = 300. 40% of 300 = 120.',
    difficulty: 'medium',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-27',
    sectionId: 'quantitative-aptitude',
    question: 'What is the LCM of 15 and 20?',
    options: ['30', '45', '60', '75'],
    correctAnswer: 2,
    explanation: 'LCM of 15 and 20 is 60. Prime factors: 15 = 3×5, 20 = 2²×5. LCM = 2²×3×5 = 60.',
    difficulty: 'medium',
    topic: 'Arithmetic'
  },
  {
    id: 'wipro-quant-28',
    sectionId: 'quantitative-aptitude',
    question: 'A car travels 180 km in 3 hours. What is its speed in km/h?',
    options: ['45 km/h', '50 km/h', '60 km/h', '75 km/h'],
    correctAnswer: 2,
    explanation: 'Speed = Distance/Time = 180/3 = 60 km/h.',
    difficulty: 'easy',
    topic: 'Speed, Distance & Time'
  },
  {
    id: 'wipro-quant-29',
    sectionId: 'quantitative-aptitude',
    question: 'If the ratio of boys to girls in a class is 4:3 and there are 35 students, how many boys are there?',
    options: ['15', '18', '20', '25'],
    correctAnswer: 2,
    explanation: 'Total parts = 4+3 = 7. Boys = (4/7) × 35 = 20.',
    difficulty: 'medium',
    topic: 'Ratio & Proportion'
  },
  {
    id: 'wipro-quant-30',
    sectionId: 'quantitative-aptitude',
    question: 'What is 30% of 250?',
    options: ['60', '65', '70', '75'],
    correctAnswer: 3,
    explanation: '30% of 250 = 0.30 × 250 = 75.',
    difficulty: 'easy',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-31',
    sectionId: 'quantitative-aptitude',
    question: 'A square has side length 10 cm. What is its area?',
    options: ['80 cm²', '90 cm²', '100 cm²', '120 cm²'],
    correctAnswer: 2,
    explanation: 'Area = side² = 10² = 100 cm².',
    difficulty: 'easy',
    topic: 'Geometry'
  },
  {
    id: 'wipro-quant-32',
    sectionId: 'quantitative-aptitude',
    question: 'If 10 workers can complete a job in 12 days, how many days will 8 workers take?',
    options: ['12 days', '14 days', '15 days', '18 days'],
    correctAnswer: 2,
    explanation: 'Using inverse proportion: 10 × 12 = 8 × x, so x = 15 days.',
    difficulty: 'medium',
    topic: 'Time & Work'
  },
  {
    id: 'wipro-quant-33',
    sectionId: 'quantitative-aptitude',
    question: 'What is the average of 10, 15, 20, 25, and 30?',
    options: ['18', '20', '22', '25'],
    correctAnswer: 1,
    explanation: 'Average = (10+15+20+25+30)/5 = 100/5 = 20.',
    difficulty: 'easy',
    topic: 'Average'
  },
  {
    id: 'wipro-quant-34',
    sectionId: 'quantitative-aptitude',
    question: 'A sum of money doubles itself in 10 years at simple interest. What is the rate of interest?',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswer: 1,
    explanation: 'If money doubles, SI = Principal. So P = P×R×10/100. R = 100/10 = 10%.',
    difficulty: 'medium',
    topic: 'Simple Interest'
  },
  {
    id: 'wipro-quant-35',
    sectionId: 'quantitative-aptitude',
    question: 'The perimeter of a rectangle is 24 cm and its length is 8 cm. What is its width?',
    options: ['2 cm', '4 cm', '6 cm', '8 cm'],
    correctAnswer: 1,
    explanation: 'Perimeter = 2(l+b). 24 = 2(8+b). 12 = 8+b. b = 4 cm.',
    difficulty: 'medium',
    topic: 'Geometry'
  },
  {
    id: 'wipro-quant-36',
    sectionId: 'quantitative-aptitude',
    question: 'If 25% of a number is 75, what is the number?',
    options: ['200', '250', '300', '350'],
    correctAnswer: 2,
    explanation: 'Let the number be x. 25% of x = 75. So, x = 75/0.25 = 300.',
    difficulty: 'medium',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-37',
    sectionId: 'quantitative-aptitude',
    question: 'What is the HCF of 24 and 36?',
    options: ['6', '8', '12', '18'],
    correctAnswer: 2,
    explanation: 'HCF of 24 and 36 is 12. Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. Common factors: 1,2,3,4,6,12. Highest common factor is 12.',
    difficulty: 'medium',
    topic: 'Arithmetic'
  },
  {
    id: 'wipro-quant-38',
    sectionId: 'quantitative-aptitude',
    question: 'If 40% of a number is 80, what is 60% of the same number?',
    options: ['100', '120', '140', '160'],
    correctAnswer: 1,
    explanation: 'Let the number be x. 40% of x = 80. So, x = 80/0.4 = 200. 60% of 200 = 120.',
    difficulty: 'medium',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-39',
    sectionId: 'quantitative-aptitude',
    question: 'What is the LCM of 18 and 24?',
    options: ['36', '48', '72', '96'],
    correctAnswer: 2,
    explanation: 'LCM of 18 and 24 is 72. Prime factors: 18 = 2×3², 24 = 2³×3. LCM = 2³×3² = 72.',
    difficulty: 'medium',
    topic: 'Arithmetic'
  },
  {
    id: 'wipro-quant-40',
    sectionId: 'quantitative-aptitude',
    question: 'A train travels 300 km in 5 hours. What is its speed in km/h?',
    options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'],
    correctAnswer: 2,
    explanation: 'Speed = Distance/Time = 300/5 = 60 km/h.',
    difficulty: 'easy',
    topic: 'Speed, Distance & Time'
  },
  {
    id: 'wipro-quant-41',
    sectionId: 'quantitative-aptitude',
    question: 'If the ratio of men to women in an office is 3:2 and there are 50 employees, how many women are there?',
    options: ['15', '18', '20', '25'],
    correctAnswer: 2,
    explanation: 'Total parts = 3+2 = 5. Women = (2/5) × 50 = 20.',
    difficulty: 'medium',
    topic: 'Ratio & Proportion'
  },
  {
    id: 'wipro-quant-42',
    sectionId: 'quantitative-aptitude',
    question: 'What is 35% of 200?',
    options: ['60', '65', '70', '75'],
    correctAnswer: 2,
    explanation: '35% of 200 = 0.35 × 200 = 70.',
    difficulty: 'easy',
    topic: 'Percentage'
  },
  {
    id: 'wipro-quant-43',
    sectionId: 'quantitative-aptitude',
    question: 'A circle has radius 7 cm. What is its area? (π = 22/7)',
    options: ['154 cm²', '154 cm²', '154 cm²', '154 cm²'],
    correctAnswer: 0,
    explanation: 'Area = πr² = (22/7) × 7² = (22/7) × 49 = 154 cm².',
    difficulty: 'medium',
    topic: 'Geometry'
  },
  {
    id: 'wipro-quant-44',
    sectionId: 'quantitative-aptitude',
    question: 'If 6 workers can complete a job in 15 days, how many workers are needed to complete the same job in 10 days?',
    options: ['8 workers', '9 workers', '10 workers', '12 workers'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 6 × 15 = x × 10, so x = 9 workers.',
    difficulty: 'medium',
    topic: 'Time & Work'
  },
  {
    id: 'wipro-quant-45',
    sectionId: 'quantitative-aptitude',
    question: 'What is the average of 12, 18, 24, 30, and 36?',
    options: ['22', '24', '26', '28'],
    correctAnswer: 1,
    explanation: 'Average = (12+18+24+30+36)/5 = 120/5 = 24.',
    difficulty: 'easy',
    topic: 'Average'
  },
  {
    id: 'wipro-quant-46',
    sectionId: 'quantitative-aptitude',
    question: 'A sum of money triples itself in 15 years at simple interest. What is the rate of interest?',
    options: ['10%', '12%', '15%', '20%'],
    correctAnswer: 3,
    explanation: 'If money triples, SI = 2P. So 2P = P×R×15/100. R = 200/15 = 13.33% ≈ 20%.',
    difficulty: 'hard',
    topic: 'Simple Interest'
  },
  {
    id: 'wipro-quant-47',
    sectionId: 'quantitative-aptitude',
    question: 'The area of a rectangle is 48 cm² and its length is 12 cm. What is its width?',
    options: ['3 cm', '4 cm', '6 cm', '8 cm'],
    correctAnswer: 1,
    explanation: 'Area = length × width. 48 = 12 × width. Width = 48/12 = 4 cm.',
    difficulty: 'medium',
    topic: 'Geometry'
  },
  {
    id: 'wipro-quant-48',
    sectionId: 'quantitative-aptitude',
    question: 'If 30% of a number is 90, what is the number?',
    options: ['250', '280', '300', '350'],
    correctAnswer: 2,
    explanation: 'Let the number be x. 30% of x = 90. So, x = 90/0.3 = 300.',
    difficulty: 'medium',
    topic: 'Percentage'
  },

];

// Combine all questions
export const wiproQuestions: Question[] = [
  ...quantitativeAptitudeQuestions,
  ...logicalReasoningQuestions,
  ...verbalAbilityQuestions
];

// Shuffle function for questions
export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper functions
export const getAllWiproQuestions = (): Question[] => {
  return shuffleQuestions(wiproQuestions);
};

export const getWiproQuestionsBySection = (sectionId: string): Question[] => {
  return shuffleQuestions(wiproQuestions.filter(q => q.sectionId === sectionId));
}; 