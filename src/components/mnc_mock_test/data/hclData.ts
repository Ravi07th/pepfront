import { Question } from '../types';

export const hclQuestions: Question[] = [
  // Numerical Aptitude Section (15 questions)
  {
    id: 'hcl-numerical-1',
    sectionId: 'numerical-aptitude',
    question: 'If a train travels 300 km in 4 hours, what is its speed in km/h?',
    questionType: 'single-choice',
    options: ['60 km/h', '75 km/h', '80 km/h', '90 km/h'],
    correctAnswer: 1,
    explanation: 'Speed = Distance/Time = 300/4 = 75 km/h'
  },
  {
    id: 'hcl-numerical-2',
    sectionId: 'numerical-aptitude',
    question: 'A shopkeeper sells an article for Rs. 1200 and makes a profit of 20%. What was the cost price?',
    questionType: 'single-choice',
    options: ['Rs. 900', 'Rs. 1000', 'Rs. 1100', 'Rs. 1150'],
    correctAnswer: 1,
    explanation: 'CP = SP/(1 + Profit%) = 1200/1.2 = Rs. 1000'
  },
  {
    id: 'hcl-numerical-3',
    sectionId: 'numerical-aptitude',
    question: 'In how many ways can 5 people be seated around a circular table?',
    questionType: 'single-choice',
    options: ['24', '120', '60', '720'],
    correctAnswer: 0,
    explanation: 'Circular permutation = (n-1)! = 4! = 24'
  },
  {
    id: 'hcl-numerical-4',
    sectionId: 'numerical-aptitude',
    question: 'If 15 workers can complete a job in 12 days, how many days will 20 workers take?',
    questionType: 'single-choice',
    options: ['8 days', '9 days', '10 days', '11 days'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 15×12 = 20×x, x = 9 days'
  },
  {
    id: 'hcl-numerical-5',
    sectionId: 'numerical-aptitude',
    question: 'What is the simple interest on Rs. 5000 at 8% per annum for 2 years?',
    questionType: 'single-choice',
    options: ['Rs. 600', 'Rs. 800', 'Rs. 1000', 'Rs. 1200'],
    correctAnswer: 1,
    explanation: 'SI = P×R×T/100 = 5000×8×2/100 = Rs. 800'
  },
  {
    id: 'hcl-numerical-6',
    sectionId: 'numerical-aptitude',
    question: 'A number is increased by 20% and then decreased by 20%. What is the net change?',
    questionType: 'single-choice',
    options: ['No change', '4% decrease', '4% increase', '20% decrease'],
    correctAnswer: 1,
    explanation: 'Net change = 1.2 × 0.8 = 0.96, so 4% decrease'
  },
  {
    id: 'hcl-numerical-7',
    sectionId: 'numerical-aptitude',
    question: 'What is the average of first 10 natural numbers?',
    questionType: 'single-choice',
    options: ['5', '5.5', '6', '6.5'],
    correctAnswer: 1,
    explanation: 'Average = (1+2+...+10)/10 = 55/10 = 5.5'
  },
  {
    id: 'hcl-numerical-8',
    sectionId: 'numerical-aptitude',
    question: 'If 3x + 2y = 12 and x - y = 2, what is the value of x?',
    questionType: 'single-choice',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'From x-y=2, y=x-2. Substituting: 3x+2(x-2)=12, 5x-4=12, x=4'
  },
  {
    id: 'hcl-numerical-9',
    sectionId: 'numerical-aptitude',
    question: 'A pipe can fill a tank in 6 hours. Another pipe can empty it in 8 hours. If both are opened together, how long will it take to fill the tank?',
    questionType: 'single-choice',
    options: ['12 hours', '24 hours', '48 hours', 'Cannot be determined'],
    correctAnswer: 1,
    explanation: '1/6 - 1/8 = 1/24, so 24 hours'
  },
  {
    id: 'hcl-numerical-10',
    sectionId: 'numerical-aptitude',
    question: 'What is the HCF of 36 and 48?',
    questionType: 'single-choice',
    options: ['6', '12', '18', '24'],
    correctAnswer: 1,
    explanation: 'HCF of 36 and 48 is 12'
  },
  {
    id: 'hcl-numerical-11',
    sectionId: 'numerical-aptitude',
    question: 'A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?',
    questionType: 'single-choice',
    options: ['10%', '12.5%', '15%', '20%'],
    correctAnswer: 1,
    explanation: 'If money doubles, SI = P. So P = P×R×8/100, R = 12.5%'
  },
  {
    id: 'hcl-numerical-12',
    sectionId: 'numerical-aptitude',
    question: 'What is the value of 15% of 80?',
    questionType: 'single-choice',
    options: ['10', '12', '15', '18'],
    correctAnswer: 1,
    explanation: '15% of 80 = 15/100 × 80 = 12'
  },
  {
    id: 'hcl-numerical-13',
    sectionId: 'numerical-aptitude',
    question: 'If the ratio of boys to girls in a class is 3:2 and there are 30 students, how many girls are there?',
    questionType: 'single-choice',
    options: ['10', '12', '15', '18'],
    correctAnswer: 1,
    explanation: 'Girls = 2/(3+2) × 30 = 2/5 × 30 = 12'
  },
  {
    id: 'hcl-numerical-14',
    sectionId: 'numerical-aptitude',
    question: 'What is the square root of 144?',
    questionType: 'single-choice',
    options: ['10', '12', '14', '16'],
    correctAnswer: 1,
    explanation: '√144 = 12'
  },
  {
    id: 'hcl-numerical-15',
    sectionId: 'numerical-aptitude',
    question: 'If a car travels 180 km in 3 hours, what is its average speed?',
    questionType: 'single-choice',
    options: ['45 km/h', '50 km/h', '60 km/h', '65 km/h'],
    correctAnswer: 2,
    explanation: 'Average speed = Distance/Time = 180/3 = 60 km/h'
  },
  {
    id: 'hcl-numerical-16',
    sectionId: 'numerical-aptitude',
    question: 'A sum of Rs. 8000 amounts to Rs. 9200 in 3 years at simple interest. What is the rate of interest?',
    questionType: 'single-choice',
    options: ['4%', '5%', '6%', '7%'],
    correctAnswer: 1,
    explanation: 'SI = 9200 - 8000 = 1200. Rate = (1200×100)/(8000×3) = 5%'
  },
  {
    id: 'hcl-numerical-17',
    sectionId: 'numerical-aptitude',
    question: 'What is the compound interest on Rs. 5000 for 2 years at 10% per annum?',
    questionType: 'single-choice',
    options: ['Rs. 1000', 'Rs. 1050', 'Rs. 1100', 'Rs. 1150'],
    correctAnswer: 1,
    explanation: 'CI = P[(1+r/100)^n - 1] = 5000[(1.1)^2 - 1] = 5000[1.21-1] = Rs. 1050'
  },
  {
    id: 'hcl-numerical-18',
    sectionId: 'numerical-aptitude',
    question: 'If the cost price of an article is Rs. 400 and the selling price is Rs. 500, what is the profit percentage?',
    questionType: 'single-choice',
    options: ['20%', '25%', '30%', '35%'],
    correctAnswer: 1,
    explanation: 'Profit = 500 - 400 = 100. Profit% = (100/400)×100 = 25%'
  },
  {
    id: 'hcl-numerical-19',
    sectionId: 'numerical-aptitude',
    question: 'A train 200 meters long crosses a platform 300 meters long in 20 seconds. What is the speed of the train?',
    questionType: 'single-choice',
    options: ['25 m/s', '30 m/s', '35 m/s', '40 m/s'],
    correctAnswer: 0,
    explanation: 'Total distance = 200 + 300 = 500m. Speed = 500/20 = 25 m/s'
  },
  {
    id: 'hcl-numerical-20',
    sectionId: 'numerical-aptitude',
    question: 'What is the value of 20% of 150?',
    questionType: 'single-choice',
    options: ['25', '30', '35', '40'],
    correctAnswer: 1,
    explanation: '20% of 150 = (20/100) × 150 = 30'
  },
  {
    id: 'hcl-numerical-21',
    sectionId: 'numerical-aptitude',
    question: 'If 12 men can complete a work in 8 days, how many men are needed to complete it in 6 days?',
    questionType: 'single-choice',
    options: ['14', '16', '18', '20'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 12×8 = x×6, x = 16 men'
  },
  {
    id: 'hcl-numerical-22',
    sectionId: 'numerical-aptitude',
    question: 'What is the LCM of 12 and 18?',
    questionType: 'single-choice',
    options: ['24', '36', '48', '72'],
    correctAnswer: 1,
    explanation: 'LCM of 12 and 18 = 36'
  },
  {
    id: 'hcl-numerical-23',
    sectionId: 'numerical-aptitude',
    question: 'A number when divided by 5 leaves remainder 3. What is the remainder when the same number is divided by 15?',
    questionType: 'single-choice',
    options: ['3', '6', '9', '12'],
    correctAnswer: 0,
    explanation: 'If number = 5k + 3, then when divided by 15, remainder will be 3'
  },
  {
    id: 'hcl-numerical-24',
    sectionId: 'numerical-aptitude',
    question: 'What is the value of 3² × 4³?',
    questionType: 'single-choice',
    options: ['144', '288', '576', '1152'],
    correctAnswer: 1,
    explanation: '3² × 4³ = 9 × 64 = 576'
  },
  {
    id: 'hcl-numerical-25',
    sectionId: 'numerical-aptitude',
    question: 'If the ratio of ages of A and B is 3:5 and B is 25 years old, what is the age of A?',
    questionType: 'single-choice',
    options: ['12 years', '15 years', '18 years', '20 years'],
    correctAnswer: 1,
    explanation: 'A:B = 3:5. If B = 25, then A = (3/5) × 25 = 15 years'
  },
  {
    id: 'hcl-numerical-26',
    sectionId: 'numerical-aptitude',
    question: 'What is the average of first 20 natural numbers?',
    questionType: 'single-choice',
    options: ['9.5', '10', '10.5', '11'],
    correctAnswer: 2,
    explanation: 'Average = (1+2+...+20)/20 = 210/20 = 10.5'
  },
  {
    id: 'hcl-numerical-27',
    sectionId: 'numerical-aptitude',
    question: 'If 2x + 3y = 12 and x + y = 5, what is the value of y?',
    questionType: 'single-choice',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'From x+y=5, x=5-y. Substituting: 2(5-y)+3y=12, 10-2y+3y=12, y=2'
  },
  {
    id: 'hcl-numerical-28',
    sectionId: 'numerical-aptitude',
    question: 'What is the square root of 225?',
    questionType: 'single-choice',
    options: ['12', '13', '14', '15'],
    correctAnswer: 3,
    explanation: '√225 = 15'
  },
  {
    id: 'hcl-numerical-29',
    sectionId: 'numerical-aptitude',
    question: 'A pipe can fill a tank in 4 hours. Another pipe can fill it in 6 hours. If both are opened together, how long will it take?',
    questionType: 'single-choice',
    options: ['2 hours', '2.4 hours', '3 hours', '3.5 hours'],
    correctAnswer: 1,
    explanation: '1/4 + 1/6 = 5/12. Time = 12/5 = 2.4 hours'
  },
  {
    id: 'hcl-numerical-30',
    sectionId: 'numerical-aptitude',
    question: 'What is the value of 15% of 200?',
    questionType: 'single-choice',
    options: ['25', '30', '35', '40'],
    correctAnswer: 1,
    explanation: '15% of 200 = (15/100) × 200 = 30'
  },
  {
    id: 'hcl-numerical-31',
    sectionId: 'numerical-aptitude',
    question: 'If a number is increased by 25% and then decreased by 20%, what is the net change?',
    questionType: 'single-choice',
    options: ['No change', '5% increase', '5% decrease', '10% increase'],
    correctAnswer: 0,
    explanation: 'Net change = 1.25 × 0.8 = 1.0, so no change'
  },
  {
    id: 'hcl-numerical-32',
    sectionId: 'numerical-aptitude',
    question: 'What is the HCF of 24 and 36?',
    questionType: 'single-choice',
    options: ['6', '8', '12', '18'],
    correctAnswer: 2,
    explanation: 'HCF of 24 and 36 is 12'
  },
  {
    id: 'hcl-numerical-33',
    sectionId: 'numerical-aptitude',
    question: 'If 8 workers can complete a job in 10 days, how many days will 5 workers take?',
    questionType: 'single-choice',
    options: ['12 days', '14 days', '16 days', '18 days'],
    correctAnswer: 2,
    explanation: 'Using inverse proportion: 8×10 = 5×x, x = 16 days'
  },
  {
    id: 'hcl-numerical-34',
    sectionId: 'numerical-aptitude',
    question: 'What is the simple interest on Rs. 6000 at 6% per annum for 3 years?',
    questionType: 'single-choice',
    options: ['Rs. 900', 'Rs. 1000', 'Rs. 1080', 'Rs. 1200'],
    correctAnswer: 2,
    explanation: 'SI = P×R×T/100 = 6000×6×3/100 = Rs. 1080'
  },
  {
    id: 'hcl-numerical-35',
    sectionId: 'numerical-aptitude',
    question: 'A boat travels 20 km upstream in 4 hours and 20 km downstream in 2 hours. What is the speed of the stream?',
    questionType: 'single-choice',
    options: ['2.5 km/h', '3 km/h', '3.5 km/h', '4 km/h'],
    correctAnswer: 0,
    explanation: 'Upstream speed = 20/4 = 5 km/h, Downstream speed = 20/2 = 10 km/h. Stream speed = (10-5)/2 = 2.5 km/h'
  },
  {
    id: 'hcl-numerical-36',
    sectionId: 'numerical-aptitude',
    question: 'What is the value of 5³?',
    questionType: 'single-choice',
    options: ['75', '100', '125', '150'],
    correctAnswer: 2,
    explanation: '5³ = 5 × 5 × 5 = 125'
  },
  {
    id: 'hcl-numerical-37',
    sectionId: 'numerical-aptitude',
    question: 'If the cost price of an article is Rs. 300 and the loss is 20%, what is the selling price?',
    questionType: 'single-choice',
    options: ['Rs. 220', 'Rs. 240', 'Rs. 260', 'Rs. 280'],
    correctAnswer: 1,
    explanation: 'Loss = 20% of 300 = 60. Selling price = 300 - 60 = Rs. 240'
  },
  {
    id: 'hcl-numerical-38',
    sectionId: 'numerical-aptitude',
    question: 'What is the average of 15, 20, 25, 30, 35?',
    questionType: 'single-choice',
    options: ['22', '23', '24', '25'],
    correctAnswer: 3,
    explanation: 'Average = (15+20+25+30+35)/5 = 125/5 = 25'
  },
  {
    id: 'hcl-numerical-39',
    sectionId: 'numerical-aptitude',
    question: 'If 3x - 2y = 8 and x + y = 6, what is the value of x?',
    questionType: 'single-choice',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'From x+y=6, y=6-x. Substituting: 3x-2(6-x)=8, 3x-12+2x=8, 5x=20, x=4'
  },
  {
    id: 'hcl-numerical-40',
    sectionId: 'numerical-aptitude',
    question: 'What is the cube root of 64?',
    questionType: 'single-choice',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: '∛64 = 4'
  },
  {
    id: 'hcl-numerical-41',
    sectionId: 'numerical-aptitude',
    question: 'A sum of money doubles itself in 10 years at simple interest. What is the rate of interest?',
    questionType: 'single-choice',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswer: 1,
    explanation: 'If money doubles, SI = P. So P = P×R×10/100, R = 10%'
  },
  {
    id: 'hcl-numerical-42',
    sectionId: 'numerical-aptitude',
    question: 'What is the value of 40% of 250?',
    questionType: 'single-choice',
    options: ['80', '90', '100', '110'],
    correctAnswer: 2,
    explanation: '40% of 250 = (40/100) × 250 = 100'
  },
  {
    id: 'hcl-numerical-43',
    sectionId: 'numerical-aptitude',
    question: 'If 6 men can complete a work in 12 days, how many men are needed to complete it in 8 days?',
    questionType: 'single-choice',
    options: ['8', '9', '10', '12'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 6×12 = x×8, x = 9 men'
  },
  {
    id: 'hcl-numerical-44',
    sectionId: 'numerical-aptitude',
    question: 'What is the LCM of 8 and 12?',
    questionType: 'single-choice',
    options: ['16', '20', '24', '32'],
    correctAnswer: 2,
    explanation: 'LCM of 8 and 12 = 24'
  },
  {
    id: 'hcl-numerical-45',
    sectionId: 'numerical-aptitude',
    question: 'A train 150 meters long crosses a pole in 10 seconds. What is the speed of the train?',
    questionType: 'single-choice',
    options: ['12 m/s', '15 m/s', '18 m/s', '20 m/s'],
    correctAnswer: 1,
    explanation: 'Speed = Distance/Time = 150/10 = 15 m/s'
  },

  // Verbal Ability Section (15 questions)
  {
    id: 'hcl-verbal-1',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Eloquent":',
    questionType: 'single-choice',
    options: ['Silent', 'Articulate', 'Confused', 'Angry'],
    correctAnswer: 1,
    explanation: 'Eloquent means fluent or persuasive in speaking, which is synonymous with articulate.'
  },
  {
    id: 'hcl-verbal-2',
    sectionId: 'verbal-ability',
    question: 'Identify the correct sentence:',
    questionType: 'single-choice',
    options: ['Me and him went to the store', 'He and I went to the store', 'Him and I went to the store', 'Me and he went to the store'],
    correctAnswer: 1,
    explanation: 'The correct form uses subject pronouns: "He and I went to the store."'
  },
  {
    id: 'hcl-verbal-3',
    sectionId: 'verbal-ability',
    question: 'Choose the word that best completes the sentence: "The weather was so _____ that we decided to stay indoors."',
    questionType: 'single-choice',
    options: ['Pleasant', 'Inclement', 'Beautiful', 'Warm'],
    correctAnswer: 1,
    explanation: 'Inclement means severe or harsh, which fits the context of staying indoors.'
  },
  {
    id: 'hcl-verbal-4',
    sectionId: 'verbal-ability',
    question: 'What is the antonym of "Benevolent"?',
    questionType: 'single-choice',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (wishing evil).'
  },
  {
    id: 'hcl-verbal-5',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: "Neither the students nor the teacher _____ present."',
    questionType: 'single-choice',
    options: ['Was', 'Were', 'Is', 'Are'],
    correctAnswer: 0,
    explanation: 'With "neither...nor", the verb agrees with the closer subject (teacher), so "was" is correct.'
  },
  {
    id: 'hcl-verbal-6',
    sectionId: 'verbal-ability',
    question: 'Identify the figure of speech: "Life is a journey."',
    questionType: 'single-choice',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    correctAnswer: 1,
    explanation: 'This is a metaphor as it directly compares life to a journey without using "like" or "as".'
  },
  {
    id: 'hcl-verbal-7',
    sectionId: 'verbal-ability',
    question: 'Choose the correct meaning of "Ubiquitous":',
    questionType: 'single-choice',
    options: ['Rare', 'Present everywhere', 'Expensive', 'Beautiful'],
    correctAnswer: 1,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.'
  },
  {
    id: 'hcl-verbal-8',
    sectionId: 'verbal-ability',
    question: 'Which word is misspelled?',
    questionType: 'single-choice',
    options: ['Accommodate', 'Accommodate', 'Accommodate', 'Accommodate'],
    correctAnswer: 0,
    explanation: 'The correct spelling is "Accommodate" (with double \'c\' and double \'m\').'
  },
  {
    id: 'hcl-verbal-9',
    sectionId: 'verbal-ability',
    question: 'Choose the correct preposition: "She is good _____ mathematics."',
    questionType: 'single-choice',
    options: ['At', 'In', 'On', 'With'],
    correctAnswer: 0,
    explanation: 'The correct preposition is "at" when referring to proficiency in a subject.'
  },
  {
    id: 'hcl-verbal-10',
    sectionId: 'verbal-ability',
    question: 'What is the plural form of "Criterion"?',
    questionType: 'single-choice',
    options: ['Criterions', 'Criteria', 'Criterias', 'Criterion'],
    correctAnswer: 1,
    explanation: 'The plural form of "criterion" is "criteria".'
  },
  {
    id: 'hcl-verbal-11',
    sectionId: 'verbal-ability',
    question: 'Choose the correct synonym for "Pragmatic":',
    questionType: 'single-choice',
    options: ['Idealistic', 'Practical', 'Theoretical', 'Abstract'],
    correctAnswer: 1,
    explanation: 'Pragmatic means dealing with things sensibly and realistically, which is synonymous with practical.'
  },
  {
    id: 'hcl-verbal-12',
    sectionId: 'verbal-ability',
    question: 'Identify the correct sentence:',
    questionType: 'single-choice',
    options: ['The data is ready', 'The data are ready', 'The datas is ready', 'The datas are ready'],
    correctAnswer: 0,
    explanation: 'Data is typically treated as a singular noun in modern usage, so "The data is ready" is correct.'
  },
  {
    id: 'hcl-verbal-13',
    sectionId: 'verbal-ability',
    question: 'What is the meaning of "Serendipity"?',
    questionType: 'single-choice',
    options: ['Bad luck', 'Good luck', 'Finding something valuable by chance', 'Hard work'],
    correctAnswer: 2,
    explanation: 'Serendipity means the occurrence and development of events by chance in a happy or beneficial way.'
  },
  {
    id: 'hcl-verbal-14',
    sectionId: 'verbal-ability',
    question: 'Choose the correct form: "Each of the students _____ a book."',
    questionType: 'single-choice',
    options: ['Have', 'Has', 'Having', 'Had'],
    correctAnswer: 1,
    explanation: 'With "each of", the verb should be singular, so "has" is correct.'
  },
  {
    id: 'hcl-verbal-15',
    sectionId: 'verbal-ability',
    question: 'What is the antonym of "Concise"?',
    questionType: 'single-choice',
    options: ['Brief', 'Verbose', 'Clear', 'Accurate'],
    correctAnswer: 1,
    explanation: 'Concise means brief and to the point, so its antonym is verbose (wordy).'
  },

  // Logical Reasoning Section (15 questions)
  {
    id: 'hcl-logical-1',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: 2, 6, 12, 20, 30, ?',
    questionType: 'single-choice',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 4, 6, 8, 10, 12. So 30 + 12 = 42'
  },
  {
    id: 'hcl-logical-2',
    sectionId: 'logical-reasoning',
    question: 'If A = 1, B = 2, C = 3, then what is the value of CAB?',
    questionType: 'single-choice',
    options: ['312', '321', '123', '213'],
    correctAnswer: 0,
    explanation: 'CAB = C(3) + A(1) + B(2) = 312'
  },
  {
    id: 'hcl-logical-3',
    sectionId: 'logical-reasoning',
    question: 'All roses are flowers. Some flowers are red. Which statement is true?',
    questionType: 'single-choice',
    options: ['All roses are red', 'Some roses are red', 'No roses are red', 'Cannot be determined'],
    correctAnswer: 1,
    explanation: 'Since all roses are flowers and some flowers are red, some roses could be red.'
  },
  {
    id: 'hcl-logical-4',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 3, 7, 15, 31, ?',
    questionType: 'single-choice',
    options: ['63', '65', '67', '69'],
    correctAnswer: 0,
    explanation: 'Each number is multiplied by 2 and 1 is added: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63'
  },
  {
    id: 'hcl-logical-5',
    sectionId: 'logical-reasoning',
    question: 'If P means +, Q means -, R means ×, S means ÷, then what is 6R4P2Q3?',
    questionType: 'single-choice',
    options: ['23', '25', '27', '29'],
    correctAnswer: 0,
    explanation: '6R4P2Q3 = 6×4+2-3 = 24+2-3 = 23'
  },
  {
    id: 'hcl-logical-6',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 3:15. What is the angle between the hour and minute hands?',
    questionType: 'single-choice',
    options: ['7.5°', '15°', '22.5°', '30°'],
    correctAnswer: 0,
    explanation: 'At 3:15, hour hand is at 3.25 hours = 97.5°, minute hand at 90°. Difference = 7.5°'
  },
  {
    id: 'hcl-logical-7',
    sectionId: 'logical-reasoning',
    question: 'Complete the analogy: Book is to Library as Car is to:',
    questionType: 'single-choice',
    options: ['Road', 'Garage', 'Driver', 'Fuel'],
    correctAnswer: 1,
    explanation: 'A book is stored in a library, similarly a car is stored in a garage.'
  },
  {
    id: 'hcl-logical-8',
    sectionId: 'logical-reasoning',
    question: 'If RED is coded as 1854, how is BLUE coded?',
    questionType: 'single-choice',
    options: ['212215', '212214', '212213', '212212'],
    correctAnswer: 0,
    explanation: 'R=18, E=5, D=4. So B=2, L=12, U=21, E=5 = 212215'
  },
  {
    id: 'hcl-logical-9',
    sectionId: 'logical-reasoning',
    question: 'Find the odd one out:',
    questionType: 'single-choice',
    options: ['Triangle', 'Square', 'Circle', 'Rectangle'],
    correctAnswer: 2,
    explanation: 'Circle is the only curved shape, others are polygons.'
  },
  {
    id: 'hcl-logical-10',
    sectionId: 'logical-reasoning',
    question: 'If 5 workers can complete a job in 10 days, how many workers are needed to complete it in 5 days?',
    questionType: 'single-choice',
    options: ['8', '10', '12', '15'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 5×10 = x×5, x = 10 workers'
  },
  {
    id: 'hcl-logical-11',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: Z, Y, X, W, V, ?',
    questionType: 'single-choice',
    options: ['U', 'T', 'S', 'R'],
    correctAnswer: 0,
    explanation: 'The series goes backwards in the alphabet: Z, Y, X, W, V, U'
  },
  {
    id: 'hcl-logical-12',
    sectionId: 'logical-reasoning',
    question: 'If A + B = 10 and A - B = 4, what is the value of A?',
    questionType: 'single-choice',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'Adding the equations: 2A = 14, A = 7'
  },
  {
    id: 'hcl-logical-13',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 1, 3, 6, 10, 15, ?',
    questionType: 'single-choice',
    options: ['20', '21', '22', '23'],
    correctAnswer: 1,
    explanation: 'The difference increases by 1: 2, 3, 4, 5, 6. So 15 + 6 = 21'
  },
  {
    id: 'hcl-logical-14',
    sectionId: 'logical-reasoning',
    question: 'If all cats are animals and some animals are pets, then:',
    questionType: 'single-choice',
    options: ['All cats are pets', 'Some cats are pets', 'No cats are pets', 'Cannot be determined'],
    correctAnswer: 1,
    explanation: 'Since all cats are animals and some animals are pets, some cats could be pets.'
  },
  {
    id: 'hcl-logical-15',
    sectionId: 'logical-reasoning',
    question: 'Complete the analogy: Doctor is to Hospital as Teacher is to:',
    questionType: 'single-choice',
    options: ['Classroom', 'School', 'Student', 'Book'],
    correctAnswer: 1,
    explanation: 'A doctor works in a hospital, similarly a teacher works in a school.'
  },
  {
    id: 'hcl-logical-16',
    sectionId: 'logical-reasoning',
    question: 'If "TRAIN" is written as "USBJO", then how is "PLANE" written?',
    questionType: 'single-choice',
    options: ['QMBOF', 'QNBOF', 'QNBOE', 'QMBOG'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. P→Q, L→M, A→B, N→O, E→F.'
  },
  {
    id: 'hcl-logical-17',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 2, 6, 12, 20, 30, 42, ?',
    questionType: 'single-choice',
    options: ['54', '56', '58', '60'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 4, 6, 8, 10, 12, 14. So 42 + 14 = 56'
  },
  {
    id: 'hcl-logical-18',
    sectionId: 'logical-reasoning',
    question: 'If A = 1, B = 2, C = 3, D = 4, then what is the value of BAD?',
    questionType: 'single-choice',
    options: ['214', '241', '124', '142'],
    correctAnswer: 0,
    explanation: 'BAD = B(2) + A(1) + D(4) = 214'
  },
  {
    id: 'hcl-logical-19',
    sectionId: 'logical-reasoning',
    question: 'All students are learners. Some learners are teachers. Which statement is true?',
    questionType: 'single-choice',
    options: ['All students are teachers', 'Some students are teachers', 'No students are teachers', 'Cannot be determined'],
    correctAnswer: 1,
    explanation: 'Since all students are learners and some learners are teachers, some students could be teachers.'
  },
  {
    id: 'hcl-logical-20',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: 1, 3, 7, 15, 31, ?',
    questionType: 'single-choice',
    options: ['63', '65', '67', '69'],
    correctAnswer: 0,
    explanation: 'Each number is multiplied by 2 and 1 is added: 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63'
  },
  {
    id: 'hcl-logical-21',
    sectionId: 'logical-reasoning',
    question: 'If P means +, Q means -, R means ×, S means ÷, then what is 8R3P4Q2?',
    questionType: 'single-choice',
    options: ['26', '28', '30', '32'],
    correctAnswer: 0,
    explanation: '8R3P4Q2 = 8×3+4-2 = 24+4-2 = 26'
  },
  {
    id: 'hcl-logical-22',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 4:20. What is the angle between the hour and minute hands?',
    questionType: 'single-choice',
    options: ['10°', '15°', '20°', '25°'],
    correctAnswer: 0,
    explanation: 'At 4:20, hour hand is at 4.33 hours = 130°, minute hand at 120°. Difference = 10°'
  },
  {
    id: 'hcl-logical-23',
    sectionId: 'logical-reasoning',
    question: 'Complete the analogy: Bird is to Nest as Fish is to:',
    questionType: 'single-choice',
    options: ['Water', 'Ocean', 'Coral', 'Sea'],
    correctAnswer: 2,
    explanation: 'A bird lives in a nest, similarly a fish lives in coral.'
  },
  {
    id: 'hcl-logical-24',
    sectionId: 'logical-reasoning',
    question: 'If RED is coded as 1854, how is GREEN coded?',
    questionType: 'single-choice',
    options: ['71855514', '71855515', '71855516', '71855517'],
    correctAnswer: 0,
    explanation: 'R=18, E=5, D=4. So G=7, R=18, E=5, E=5, N=14 = 71855514'
  },
  {
    id: 'hcl-logical-25',
    sectionId: 'logical-reasoning',
    question: 'Find the odd one out:',
    questionType: 'single-choice',
    options: ['Apple', 'Orange', 'Banana', 'Carrot'],
    correctAnswer: 3,
    explanation: 'Carrot is a vegetable, others are fruits.'
  },
  {
    id: 'hcl-logical-26',
    sectionId: 'logical-reasoning',
    question: 'If 4 workers can complete a job in 12 days, how many workers are needed to complete it in 8 days?',
    questionType: 'single-choice',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 4×12 = x×8, x = 6 workers'
  },
  {
    id: 'hcl-logical-27',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: A, D, G, J, M, ?',
    questionType: 'single-choice',
    options: ['O', 'P', 'Q', 'R'],
    correctAnswer: 1,
    explanation: 'The series skips 2 letters: A, D, G, J, M, P'
  },
  {
    id: 'hcl-logical-28',
    sectionId: 'logical-reasoning',
    question: 'If A + B = 15 and A - B = 5, what is the value of A?',
    questionType: 'single-choice',
    options: ['8', '9', '10', '11'],
    correctAnswer: 2,
    explanation: 'Adding the equations: 2A = 20, A = 10'
  },
  {
    id: 'hcl-logical-29',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 1, 4, 9, 16, 25, ?',
    questionType: 'single-choice',
    options: ['30', '35', '36', '40'],
    correctAnswer: 2,
    explanation: 'The series represents perfect squares: 1², 2², 3², 4², 5², 6² = 36'
  },
  {
    id: 'hcl-logical-30',
    sectionId: 'logical-reasoning',
    question: 'If all doctors are professionals and some professionals are engineers, then:',
    questionType: 'single-choice',
    options: ['All doctors are engineers', 'Some doctors are engineers', 'No doctors are engineers', 'Cannot be determined'],
    correctAnswer: 1,
    explanation: 'Since all doctors are professionals and some professionals are engineers, some doctors could be engineers.'
  },
  {
    id: 'hcl-logical-31',
    sectionId: 'logical-reasoning',
    question: 'Complete the analogy: Chef is to Kitchen as Pilot is to:',
    questionType: 'single-choice',
    options: ['Airport', 'Cockpit', 'Plane', 'Sky'],
    correctAnswer: 1,
    explanation: 'A chef works in a kitchen, similarly a pilot works in a cockpit.'
  },
  {
    id: 'hcl-logical-32',
    sectionId: 'logical-reasoning',
    question: 'If "HAPPY" is written as "IBQQZ", then how is "SMILE" written?',
    questionType: 'single-choice',
    options: ['TNJMF', 'TNJMG', 'TNJMF', 'TNJMG'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by 1 position forward. S→T, M→N, I→J, L→M, E→F.'
  },
  {
    id: 'hcl-logical-33',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 3, 8, 15, 24, 35, ?',
    questionType: 'single-choice',
    options: ['46', '48', '50', '52'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 5, 7, 9, 11, 13. So 35 + 13 = 48'
  },
  {
    id: 'hcl-logical-34',
    sectionId: 'logical-reasoning',
    question: 'If A = 2, B = 4, C = 6, D = 8, then what is the value of CAD?',
    questionType: 'single-choice',
    options: ['682', '686', '688', '690'],
    correctAnswer: 1,
    explanation: 'CAD = C(6) + A(2) + D(8) = 686'
  },
  {
    id: 'hcl-logical-35',
    sectionId: 'logical-reasoning',
    question: 'All flowers are plants. Some plants are trees. Which statement is true?',
    questionType: 'single-choice',
    options: ['All flowers are trees', 'Some flowers are trees', 'No flowers are trees', 'Cannot be determined'],
    correctAnswer: 1,
    explanation: 'Since all flowers are plants and some plants are trees, some flowers could be trees.'
  },
  {
    id: 'hcl-logical-36',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: 2, 4, 8, 16, 32, ?',
    questionType: 'single-choice',
    options: ['64', '66', '68', '70'],
    correctAnswer: 0,
    explanation: 'Each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64'
  },
  {
    id: 'hcl-logical-37',
    sectionId: 'logical-reasoning',
    question: 'If P means +, Q means -, R means ×, S means ÷, then what is 6R4P3Q1?',
    questionType: 'single-choice',
    options: ['26', '28', '30', '32'],
    correctAnswer: 0,
    explanation: '6R4P3Q1 = 6×4+3-1 = 24+3-1 = 26'
  },
  {
    id: 'hcl-logical-38',
    sectionId: 'logical-reasoning',
    question: 'A clock shows 5:30. What is the angle between the hour and minute hands?',
    questionType: 'single-choice',
    options: ['15°', '20°', '25°', '30°'],
    correctAnswer: 0,
    explanation: 'At 5:30, hour hand is at 5.5 hours = 165°, minute hand at 180°. Difference = 15°'
  },
  {
    id: 'hcl-logical-39',
    sectionId: 'logical-reasoning',
    question: 'Complete the analogy: Soldier is to Army as Sailor is to:',
    questionType: 'single-choice',
    options: ['Ship', 'Navy', 'Ocean', 'Port'],
    correctAnswer: 1,
    explanation: 'A soldier belongs to an army, similarly a sailor belongs to a navy.'
  },
  {
    id: 'hcl-logical-40',
    sectionId: 'logical-reasoning',
    question: 'If BLUE is coded as 212215, how is RED coded?',
    questionType: 'single-choice',
    options: ['1854', '1855', '1856', '1857'],
    correctAnswer: 0,
    explanation: 'B=2, L=12, U=21, E=5. So R=18, E=5, D=4 = 1854'
  },
  {
    id: 'hcl-logical-41',
    sectionId: 'logical-reasoning',
    question: 'Find the odd one out:',
    questionType: 'single-choice',
    options: ['Lion', 'Tiger', 'Leopard', 'Wolf'],
    correctAnswer: 3,
    explanation: 'Wolf is not a big cat, others are big cats.'
  },
  {
    id: 'hcl-logical-42',
    sectionId: 'logical-reasoning',
    question: 'If 6 workers can complete a job in 15 days, how many workers are needed to complete it in 10 days?',
    questionType: 'single-choice',
    options: ['8', '9', '10', '12'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 6×15 = x×10, x = 9 workers'
  },
  {
    id: 'hcl-logical-43',
    sectionId: 'logical-reasoning',
    question: 'Complete the series: B, E, H, K, N, ?',
    questionType: 'single-choice',
    options: ['O', 'P', 'Q', 'R'],
    correctAnswer: 2,
    explanation: 'The series skips 2 letters: B, E, H, K, N, Q'
  },
  {
    id: 'hcl-logical-44',
    sectionId: 'logical-reasoning',
    question: 'If A + B = 20 and A - B = 8, what is the value of B?',
    questionType: 'single-choice',
    options: ['4', '6', '8', '10'],
    correctAnswer: 1,
    explanation: 'Subtracting the equations: 2B = 12, B = 6'
  },
  {
    id: 'hcl-logical-45',
    sectionId: 'logical-reasoning',
    question: 'Find the missing number: 2, 6, 12, 20, 30, 42, 56, ?',
    questionType: 'single-choice',
    options: ['70', '72', '74', '76'],
    correctAnswer: 1,
    explanation: 'The difference increases by 2: 4, 6, 8, 10, 12, 14, 16. So 56 + 16 = 72'
  },

  // Computer Fundamentals Section (30 questions)
  {
    id: 'hcl-computer-1',
    sectionId: 'computer-fundamentals',
    question: 'What is the primary function of RAM?',
    questionType: 'single-choice',
    options: ['Permanent storage', 'Temporary storage', 'Processing data', 'Displaying output'],
    correctAnswer: 1,
    explanation: 'RAM (Random Access Memory) provides temporary storage for data and programs currently in use.'
  },
  {
    id: 'hcl-computer-2',
    sectionId: 'computer-fundamentals',
    question: 'Which of the following is NOT a programming language?',
    questionType: 'single-choice',
    options: ['Java', 'Python', 'HTML', 'C++'],
    correctAnswer: 2,
    explanation: 'HTML is a markup language, not a programming language.'
  },
  {
    id: 'hcl-computer-3',
    sectionId: 'computer-fundamentals',
    question: 'What does CPU stand for?',
    questionType: 'single-choice',
    options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Personal Unit', 'Computer Processing Unit'],
    correctAnswer: 0,
    explanation: 'CPU stands for Central Processing Unit.'
  },
  {
    id: 'hcl-computer-4',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure follows LIFO principle?',
    questionType: 'single-choice',
    options: ['Queue', 'Stack', 'Tree', 'Graph'],
    correctAnswer: 1,
    explanation: 'Stack follows LIFO (Last In, First Out) principle.'
  },
  {
    id: 'hcl-computer-5',
    sectionId: 'computer-fundamentals',
    question: 'What is the binary equivalent of decimal 25?',
    questionType: 'single-choice',
    options: ['11001', '10101', '11101', '10011'],
    correctAnswer: 0,
    explanation: '25 in decimal = 11001 in binary (16+8+1)'
  },
  {
    id: 'hcl-computer-6',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for secure web browsing?',
    questionType: 'single-choice',
    options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
    correctAnswer: 1,
    explanation: 'HTTPS (HTTP Secure) is used for secure web browsing.'
  },
  {
    id: 'hcl-computer-7',
    sectionId: 'computer-fundamentals',
    question: 'What is the time complexity of linear search?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'Linear search has O(n) time complexity as it may need to check all elements.'
  },
  {
    id: 'hcl-computer-8',
    sectionId: 'computer-fundamentals',
    question: 'Which of the following is an object-oriented programming concept?',
    questionType: 'single-choice',
    options: ['Inheritance', 'Recursion', 'Iteration', 'Sorting'],
    correctAnswer: 0,
    explanation: 'Inheritance is a fundamental concept in object-oriented programming.'
  },
  {
    id: 'hcl-computer-9',
    sectionId: 'computer-fundamentals',
    question: 'What is the function of an operating system?',
    questionType: 'single-choice',
    options: ['Only running applications', 'Managing hardware and software resources', 'Only storing data', 'Only displaying graphics'],
    correctAnswer: 1,
    explanation: 'An operating system manages hardware and software resources of a computer.'
  },
  {
    id: 'hcl-computer-10',
    sectionId: 'computer-fundamentals',
    question: 'Which database model is based on tables?',
    questionType: 'single-choice',
    options: ['Hierarchical', 'Network', 'Relational', 'Object-oriented'],
    correctAnswer: 2,
    explanation: 'Relational database model is based on tables with rows and columns.'
  },
  {
    id: 'hcl-computer-11',
    sectionId: 'computer-fundamentals',
    question: 'What is a firewall?',
    questionType: 'single-choice',
    options: ['A physical wall', 'A network security device', 'A type of virus', 'A programming language'],
    correctAnswer: 1,
    explanation: 'A firewall is a network security device that monitors and controls incoming and outgoing network traffic.'
  },
  {
    id: 'hcl-computer-12',
    sectionId: 'computer-fundamentals',
    question: 'Which sorting algorithm has the best average-case time complexity?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: 'Quick Sort has O(n log n) average-case time complexity, which is better than the others.'
  },
  {
    id: 'hcl-computer-13',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of DNS?',
    questionType: 'single-choice',
    options: ['To store data', 'To translate domain names to IP addresses', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'DNS (Domain Name System) translates human-readable domain names to IP addresses.'
  },
  {
    id: 'hcl-computer-14',
    sectionId: 'computer-fundamentals',
    question: 'Which programming paradigm focuses on functions?',
    questionType: 'single-choice',
    options: ['Object-oriented', 'Procedural', 'Functional', 'Logic'],
    correctAnswer: 2,
    explanation: 'Functional programming paradigm focuses on functions and avoids changing state and mutable data.'
  },
  {
    id: 'hcl-computer-15',
    sectionId: 'computer-fundamentals',
    question: 'What is the maximum value that can be stored in a byte?',
    questionType: 'single-choice',
    options: ['127', '255', '256', '1024'],
    correctAnswer: 1,
    explanation: 'A byte can store values from 0 to 255 (2^8 - 1).'
  },
  {
    id: 'hcl-computer-16',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure is best for implementing a queue?',
    questionType: 'single-choice',
    options: ['Stack', 'Array', 'Linked List', 'Tree'],
    correctAnswer: 2,
    explanation: 'Linked List is best for implementing a queue due to efficient insertion and deletion at both ends.'
  },
  {
    id: 'hcl-computer-17',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a compiler?',
    questionType: 'single-choice',
    options: ['To execute programs', 'To translate high-level code to machine code', 'To debug programs', 'To store data'],
    correctAnswer: 1,
    explanation: 'A compiler translates high-level programming language code to machine code.'
  },
  {
    id: 'hcl-computer-18',
    sectionId: 'computer-fundamentals',
    question: 'Which network topology is most fault-tolerant?',
    questionType: 'single-choice',
    options: ['Bus', 'Star', 'Ring', 'Mesh'],
    correctAnswer: 3,
    explanation: 'Mesh topology is most fault-tolerant as it has multiple paths between nodes.'
  },
  {
    id: 'hcl-computer-19',
    sectionId: 'computer-fundamentals',
    question: 'What is the primary key in a database?',
    questionType: 'single-choice',
    options: ['A key that opens the database', 'A unique identifier for each record', 'A password', 'An index'],
    correctAnswer: 1,
    explanation: 'A primary key is a unique identifier for each record in a database table.'
  },
  {
    id: 'hcl-computer-20',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for email transmission?',
    questionType: 'single-choice',
    options: ['HTTP', 'FTP', 'SMTP', 'SSH'],
    correctAnswer: 2,
    explanation: 'SMTP (Simple Mail Transfer Protocol) is used for email transmission.'
  },
  {
    id: 'hcl-computer-21',
    sectionId: 'computer-fundamentals',
    question: 'What is the time complexity of binary search?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'Binary search has O(log n) time complexity as it divides the search space in half each time.'
  },
  {
    id: 'hcl-computer-22',
    sectionId: 'computer-fundamentals',
    question: 'Which of the following is a non-volatile memory?',
    questionType: 'single-choice',
    options: ['RAM', 'ROM', 'Cache', 'Register'],
    correctAnswer: 1,
    explanation: 'ROM (Read Only Memory) is non-volatile memory that retains data even when power is off.'
  },
  {
    id: 'hcl-computer-23',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of an API?',
    questionType: 'single-choice',
    options: ['To store data', 'To provide a way for different software to communicate', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'API (Application Programming Interface) provides a way for different software applications to communicate.'
  },
  {
    id: 'hcl-computer-24',
    sectionId: 'computer-fundamentals',
    question: 'Which sorting algorithm is stable?',
    questionType: 'single-choice',
    options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 2,
    explanation: 'Merge Sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements.'
  },
  {
    id: 'hcl-computer-25',
    sectionId: 'computer-fundamentals',
    question: 'What is the function of a router?',
    questionType: 'single-choice',
    options: ['To connect devices in a LAN', 'To connect different networks', 'To store data', 'To process data'],
    correctAnswer: 1,
    explanation: 'A router connects different networks and forwards data packets between them.'
  },
  {
    id: 'hcl-computer-26',
    sectionId: 'computer-fundamentals',
    question: 'Which programming language is interpreted?',
    questionType: 'single-choice',
    options: ['C++', 'Java', 'Python', 'C'],
    correctAnswer: 2,
    explanation: 'Python is an interpreted language, meaning it executes code line by line without prior compilation.'
  },
  {
    id: 'hcl-computer-27',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of an index in a database?',
    questionType: 'single-choice',
    options: ['To store data', 'To speed up data retrieval', 'To encrypt data', 'To compress data'],
    correctAnswer: 1,
    explanation: 'An index in a database speeds up data retrieval by providing quick access to specific data.'
  },
  {
    id: 'hcl-computer-28',
    sectionId: 'computer-fundamentals',
    question: 'Which network protocol is connectionless?',
    questionType: 'single-choice',
    options: ['TCP', 'UDP', 'HTTP', 'FTP'],
    correctAnswer: 1,
    explanation: 'UDP (User Datagram Protocol) is connectionless, while TCP is connection-oriented.'
  },
  {
    id: 'hcl-computer-29',
    sectionId: 'computer-fundamentals',
    question: 'What is the time complexity of inserting an element at the beginning of an array?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'Inserting at the beginning of an array requires shifting all elements, giving O(n) time complexity.'
  },
  {
    id: 'hcl-computer-30',
    sectionId: 'computer-fundamentals',
    question: 'Which of the following is a design pattern?',
    questionType: 'single-choice',
    options: ['Singleton', 'Variable', 'Function', 'Class'],
    correctAnswer: 0,
    explanation: 'Singleton is a design pattern that ensures a class has only one instance.'
  },
  {
    id: 'hcl-computer-31',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a virtual machine?',
    questionType: 'single-choice',
    options: ['To create physical hardware', 'To run multiple operating systems on one machine', 'To store data permanently', 'To connect to the internet'],
    correctAnswer: 1,
    explanation: 'A virtual machine allows running multiple operating systems on a single physical machine.'
  },
  {
    id: 'hcl-computer-32',
    sectionId: 'computer-fundamentals',
    question: 'Which programming language is known for its garbage collection?',
    questionType: 'single-choice',
    options: ['C', 'C++', 'Java', 'Assembly'],
    correctAnswer: 2,
    explanation: 'Java has automatic garbage collection that manages memory allocation and deallocation.'
  },
  {
    id: 'hcl-computer-33',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a cache memory?',
    questionType: 'single-choice',
    options: ['To store data permanently', 'To speed up data access', 'To connect to networks', 'To display graphics'],
    correctAnswer: 1,
    explanation: 'Cache memory speeds up data access by storing frequently used data closer to the CPU.'
  },
  {
    id: 'hcl-computer-34',
    sectionId: 'computer-fundamentals',
    question: 'Which of the following is a markup language?',
    questionType: 'single-choice',
    options: ['Java', 'Python', 'XML', 'C++'],
    correctAnswer: 2,
    explanation: 'XML (eXtensible Markup Language) is a markup language used for storing and transporting data.'
  },
  {
    id: 'hcl-computer-35',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of an interrupt in computer systems?',
    questionType: 'single-choice',
    options: ['To stop the computer', 'To signal the CPU about an event', 'To increase memory', 'To connect devices'],
    correctAnswer: 1,
    explanation: 'An interrupt signals the CPU about an important event that requires immediate attention.'
  },
  {
    id: 'hcl-computer-36',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure is best for implementing a priority queue?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Heap', 'Stack'],
    correctAnswer: 2,
    explanation: 'Heap is the best data structure for implementing a priority queue due to efficient insertion and deletion.'
  },
  {
    id: 'hcl-computer-37',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a semaphore in operating systems?',
    questionType: 'single-choice',
    options: ['To store data', 'To synchronize processes', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A semaphore is used to synchronize processes and control access to shared resources.'
  },
  {
    id: 'hcl-computer-38',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for file transfer?',
    questionType: 'single-choice',
    options: ['HTTP', 'FTP', 'SMTP', 'SSH'],
    correctAnswer: 1,
    explanation: 'FTP (File Transfer Protocol) is used for transferring files between systems.'
  },
  {
    id: 'hcl-computer-39',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a deadlock in operating systems?',
    questionType: 'single-choice',
    options: ['To improve performance', 'A situation where processes are waiting for each other', 'To allocate memory', 'To schedule tasks'],
    correctAnswer: 1,
    explanation: 'A deadlock occurs when two or more processes are waiting for each other to release resources.'
  },
  {
    id: 'hcl-computer-40',
    sectionId: 'computer-fundamentals',
    question: 'Which of the following is a distributed database?',
    questionType: 'single-choice',
    options: ['MySQL', 'MongoDB', 'Oracle', 'All of the above'],
    correctAnswer: 3,
    explanation: 'All of these can be configured as distributed databases across multiple locations.'
  },
  {
    id: 'hcl-computer-41',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a load balancer?',
    questionType: 'single-choice',
    options: ['To store data', 'To distribute network traffic', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A load balancer distributes network traffic across multiple servers to improve performance and reliability.'
  },
  {
    id: 'hcl-computer-42',
    sectionId: 'computer-fundamentals',
    question: 'Which algorithm is used for finding the shortest path in a graph?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Dijkstra\'s Algorithm', 'Binary Search', 'Quick Sort'],
    correctAnswer: 1,
    explanation: 'Dijkstra\'s Algorithm is used to find the shortest path between nodes in a weighted graph.'
  },
  {
    id: 'hcl-computer-43',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a proxy server?',
    questionType: 'single-choice',
    options: ['To store data', 'To act as an intermediary between clients and servers', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A proxy server acts as an intermediary between clients and servers, providing caching and security benefits.'
  },
  {
    id: 'hcl-computer-44',
    sectionId: 'computer-fundamentals',
    question: 'Which programming paradigm focuses on objects?',
    questionType: 'single-choice',
    options: ['Procedural', 'Object-oriented', 'Functional', 'Logic'],
    correctAnswer: 1,
    explanation: 'Object-oriented programming focuses on objects that contain data and code.'
  },
  {
    id: 'hcl-computer-45',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a virtual private network (VPN)?',
    questionType: 'single-choice',
    options: ['To store data', 'To provide secure remote access', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A VPN provides secure remote access to a private network over a public network.'
  },
  {
    id: 'hcl-computer-46',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure is best for implementing a hash table?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 0,
    explanation: 'Array is the best data structure for implementing a hash table due to direct access capability.'
  },
  {
    id: 'hcl-computer-47',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a kernel in an operating system?',
    questionType: 'single-choice',
    options: ['To display graphics', 'To manage hardware and provide core services', 'To store data', 'To connect to networks'],
    correctAnswer: 1,
    explanation: 'The kernel is the core of an operating system that manages hardware and provides essential services.'
  },
  {
    id: 'hcl-computer-48',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for secure shell access?',
    questionType: 'single-choice',
    options: ['HTTP', 'FTP', 'SSH', 'SMTP'],
    correctAnswer: 2,
    explanation: 'SSH (Secure Shell) is used for secure remote access to systems.'
  },
  {
    id: 'hcl-computer-49',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a buffer in computer systems?',
    questionType: 'single-choice',
    options: ['To store data temporarily', 'To encrypt data', 'To compress files', 'To connect devices'],
    correctAnswer: 0,
    explanation: 'A buffer stores data temporarily to handle differences in data flow rates between devices.'
  },
  {
    id: 'hcl-computer-50',
    sectionId: 'computer-fundamentals',
    question: 'Which algorithm is used for sorting with O(n log n) average time complexity?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: 'Quick Sort has O(n log n) average time complexity, making it efficient for most datasets.'
  },
  {
    id: 'hcl-computer-51',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a virtual memory?',
    questionType: 'single-choice',
    options: ['To increase physical RAM', 'To use disk space as memory', 'To store data permanently', 'To connect devices'],
    correctAnswer: 1,
    explanation: 'Virtual memory allows using disk space as an extension of RAM when physical memory is insufficient.'
  },
  {
    id: 'hcl-computer-52',
    sectionId: 'computer-fundamentals',
    question: 'Which programming language is interpreted and dynamically typed?',
    questionType: 'single-choice',
    options: ['C', 'Java', 'Python', 'C++'],
    correctAnswer: 2,
    explanation: 'Python is both interpreted and dynamically typed, meaning type checking occurs at runtime.'
  },
  {
    id: 'hcl-computer-53',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a mutex in operating systems?',
    questionType: 'single-choice',
    options: ['To store data', 'To provide mutual exclusion', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A mutex provides mutual exclusion, ensuring only one process can access a shared resource at a time.'
  },
  {
    id: 'hcl-computer-54',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for secure web browsing?',
    questionType: 'single-choice',
    options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
    correctAnswer: 1,
    explanation: 'HTTPS (HTTP Secure) is used for secure web browsing with encryption.'
  },
  {
    id: 'hcl-computer-55',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a garbage collector?',
    questionType: 'single-choice',
    options: ['To store data', 'To automatically free unused memory', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A garbage collector automatically frees memory that is no longer in use by the program.'
  },
  {
    id: 'hcl-computer-56',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure is best for implementing a stack?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 0,
    explanation: 'Array is the best data structure for implementing a stack due to efficient push and pop operations.'
  },
  {
    id: 'hcl-computer-57',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a context switch in operating systems?',
    questionType: 'single-choice',
    options: ['To store data', 'To switch between processes', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A context switch saves the state of one process and loads the state of another process.'
  },
  {
    id: 'hcl-computer-58',
    sectionId: 'computer-fundamentals',
    question: 'Which algorithm is used for finding the minimum spanning tree?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Kruskal\'s Algorithm', 'Binary Search', 'Quick Sort'],
    correctAnswer: 1,
    explanation: 'Kruskal\'s Algorithm is used to find the minimum spanning tree of a weighted graph.'
  },
  {
    id: 'hcl-computer-59',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a reverse proxy?',
    questionType: 'single-choice',
    options: ['To store data', 'To act as a front-end for backend servers', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A reverse proxy acts as a front-end for backend servers, providing load balancing and security.'
  },
  {
    id: 'hcl-computer-60',
    sectionId: 'computer-fundamentals',
    question: 'Which programming paradigm focuses on mathematical functions?',
    questionType: 'single-choice',
    options: ['Procedural', 'Object-oriented', 'Functional', 'Logic'],
    correctAnswer: 2,
    explanation: 'Functional programming focuses on mathematical functions and avoids changing state.'
  },
  {
    id: 'hcl-computer-61',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a content delivery network (CDN)?',
    questionType: 'single-choice',
    options: ['To store data', 'To deliver content from servers closer to users', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A CDN delivers content from servers located closer to users to improve loading speed.'
  },
  {
    id: 'hcl-computer-62',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure is best for implementing a binary search tree?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 2,
    explanation: 'Tree is the best data structure for implementing a binary search tree due to hierarchical structure.'
  },
  {
    id: 'hcl-computer-63',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a process scheduler in operating systems?',
    questionType: 'single-choice',
    options: ['To store data', 'To allocate CPU time to processes', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A process scheduler allocates CPU time to different processes based on scheduling algorithms.'
  },
  {
    id: 'hcl-computer-64',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for domain name resolution?',
    questionType: 'single-choice',
    options: ['HTTP', 'DNS', 'FTP', 'SMTP'],
    correctAnswer: 1,
    explanation: 'DNS (Domain Name System) is used for resolving domain names to IP addresses.'
  },
  {
    id: 'hcl-computer-65',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a memory leak?',
    questionType: 'single-choice',
    options: ['To improve performance', 'A situation where memory is not freed', 'To allocate memory', 'To schedule tasks'],
    correctAnswer: 1,
    explanation: 'A memory leak occurs when a program fails to free memory that is no longer needed.'
  },
  {
    id: 'hcl-computer-66',
    sectionId: 'computer-fundamentals',
    question: 'Which algorithm is used for finding the longest common subsequence?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Dynamic Programming', 'Binary Search', 'Quick Sort'],
    correctAnswer: 1,
    explanation: 'Dynamic Programming is used to find the longest common subsequence between two sequences.'
  },
  {
    id: 'hcl-computer-67',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a web server?',
    questionType: 'single-choice',
    options: ['To store data', 'To serve web pages and handle HTTP requests', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A web server serves web pages and handles HTTP requests from clients.'
  },
  {
    id: 'hcl-computer-68',
    sectionId: 'computer-fundamentals',
    question: 'Which programming paradigm focuses on rules and logic?',
    questionType: 'single-choice',
    options: ['Procedural', 'Object-oriented', 'Functional', 'Logic'],
    correctAnswer: 3,
    explanation: 'Logic programming focuses on rules and logical relationships between facts.'
  },
  {
    id: 'hcl-computer-69',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a database index?',
    questionType: 'single-choice',
    options: ['To store data', 'To speed up data retrieval', 'To encrypt data', 'To compress data'],
    correctAnswer: 1,
    explanation: 'A database index speeds up data retrieval by providing quick access to specific data.'
  },
  {
    id: 'hcl-computer-70',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure is best for implementing a graph?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Tree', 'Adjacency Matrix'],
    correctAnswer: 3,
    explanation: 'Adjacency Matrix is the best data structure for implementing a graph due to efficient edge operations.'
  },
  {
    id: 'hcl-computer-71',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a thread in operating systems?',
    questionType: 'single-choice',
    options: ['To store data', 'To execute code within a process', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A thread is the smallest unit of execution within a process, allowing concurrent execution.'
  },
  {
    id: 'hcl-computer-72',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for email transmission?',
    questionType: 'single-choice',
    options: ['HTTP', 'FTP', 'SMTP', 'SSH'],
    correctAnswer: 2,
    explanation: 'SMTP (Simple Mail Transfer Protocol) is used for email transmission between servers.'
  },
  {
    id: 'hcl-computer-73',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a race condition?',
    questionType: 'single-choice',
    options: ['To improve performance', 'A situation where behavior depends on timing', 'To allocate memory', 'To schedule tasks'],
    correctAnswer: 1,
    explanation: 'A race condition occurs when the behavior of a system depends on the relative timing of events.'
  },
  {
    id: 'hcl-computer-74',
    sectionId: 'computer-fundamentals',
    question: 'Which algorithm is used for finding the maximum flow in a network?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Ford-Fulkerson Algorithm', 'Binary Search', 'Quick Sort'],
    correctAnswer: 1,
    explanation: 'Ford-Fulkerson Algorithm is used to find the maximum flow in a flow network.'
  },
  {
    id: 'hcl-computer-75',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a load testing tool?',
    questionType: 'single-choice',
    options: ['To store data', 'To test system performance under load', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A load testing tool tests how a system performs under expected and peak load conditions.'
  },
  {
    id: 'hcl-computer-76',
    sectionId: 'computer-fundamentals',
    question: 'Which programming paradigm focuses on procedures and functions?',
    questionType: 'single-choice',
    options: ['Procedural', 'Object-oriented', 'Functional', 'Logic'],
    correctAnswer: 0,
    explanation: 'Procedural programming focuses on procedures and functions that operate on data.'
  },
  {
    id: 'hcl-computer-77',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a database transaction?',
    questionType: 'single-choice',
    options: ['To store data', 'To ensure data consistency', 'To encrypt data', 'To compress data'],
    correctAnswer: 1,
    explanation: 'A database transaction ensures data consistency by grouping related operations together.'
  },
  {
    id: 'hcl-computer-78',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure is best for implementing a circular queue?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 0,
    explanation: 'Array is the best data structure for implementing a circular queue due to efficient enqueue and dequeue.'
  },
  {
    id: 'hcl-computer-79',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a system call in operating systems?',
    questionType: 'single-choice',
    options: ['To store data', 'To request services from the kernel', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A system call is a way for a program to request services from the operating system kernel.'
  },
  {
    id: 'hcl-computer-80',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for secure file transfer?',
    questionType: 'single-choice',
    options: ['HTTP', 'SFTP', 'SMTP', 'SSH'],
    correctAnswer: 1,
    explanation: 'SFTP (SSH File Transfer Protocol) is used for secure file transfer over SSH.'
  },
  {
    id: 'hcl-computer-81',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a memory fragmentation?',
    questionType: 'single-choice',
    options: ['To improve performance', 'A situation where memory is divided into small pieces', 'To allocate memory', 'To schedule tasks'],
    correctAnswer: 1,
    explanation: 'Memory fragmentation occurs when memory is divided into small, non-contiguous pieces.'
  },
  {
    id: 'hcl-computer-82',
    sectionId: 'computer-fundamentals',
    question: 'Which algorithm is used for finding the strongly connected components?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Tarjan\'s Algorithm', 'Binary Search', 'Quick Sort'],
    correctAnswer: 1,
    explanation: 'Tarjan\'s Algorithm is used to find strongly connected components in a directed graph.'
  },
  {
    id: 'hcl-computer-83',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a monitoring tool?',
    questionType: 'single-choice',
    options: ['To store data', 'To track system performance and health', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A monitoring tool tracks system performance, health, and availability in real-time.'
  },
  {
    id: 'hcl-computer-84',
    sectionId: 'computer-fundamentals',
    question: 'Which programming paradigm focuses on data and behavior together?',
    questionType: 'single-choice',
    options: ['Procedural', 'Object-oriented', 'Functional', 'Logic'],
    correctAnswer: 1,
    explanation: 'Object-oriented programming focuses on data and behavior together in objects.'
  },
  {
    id: 'hcl-computer-85',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a database backup?',
    questionType: 'single-choice',
    options: ['To store data', 'To protect against data loss', 'To encrypt data', 'To compress data'],
    correctAnswer: 1,
    explanation: 'A database backup protects against data loss by creating copies of important data.'
  },
  {
    id: 'hcl-computer-86',
    sectionId: 'computer-fundamentals',
    question: 'Which data structure is best for implementing a skip list?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 1,
    explanation: 'Linked List is the best data structure for implementing a skip list due to efficient insertion and deletion.'
  },
  {
    id: 'hcl-computer-87',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a page fault in operating systems?',
    questionType: 'single-choice',
    options: ['To store data', 'A situation where a page is not in memory', 'To encrypt data', 'To compress files'],
    correctAnswer: 1,
    explanation: 'A page fault occurs when a program tries to access a page that is not currently in physical memory.'
  },
  {
    id: 'hcl-computer-88',
    sectionId: 'computer-fundamentals',
    question: 'Which protocol is used for network time synchronization?',
    questionType: 'single-choice',
    options: ['HTTP', 'NTP', 'FTP', 'SMTP'],
    correctAnswer: 1,
    explanation: 'NTP (Network Time Protocol) is used for synchronizing time across computer systems.'
  },
  {
    id: 'hcl-computer-89',
    sectionId: 'computer-fundamentals',
    question: 'What is the purpose of a thrashing in operating systems?',
    questionType: 'single-choice',
    options: ['To improve performance', 'A situation where system spends more time swapping than executing', 'To allocate memory', 'To schedule tasks'],
    correctAnswer: 1,
    explanation: 'Thrashing occurs when a system spends more time swapping pages than executing programs.'
  },
  {
    id: 'hcl-computer-90',
    sectionId: 'computer-fundamentals',
    question: 'Which algorithm is used for finding the articulation points in a graph?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Tarjan\'s Algorithm', 'Binary Search', 'Quick Sort'],
    correctAnswer: 1,
    explanation: 'Tarjan\'s Algorithm is used to find articulation points (cut vertices) in a graph.'
  },
]; 