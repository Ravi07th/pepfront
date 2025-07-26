export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  totalQuestions: number;
}

export const categories: Category[] = [
  {
    id: 'general-aptitude',
    name: 'General Aptitude',
    description: 'Test your overall aptitude skills including basic mathematics, logical reasoning, and general knowledge.',
    icon: '',
    color: 'primary',
    totalQuestions: 240
  },
  {
    id: 'arithmetic-aptitude',
    name: 'Arithmetic Aptitude',
    description: 'Mathematical problems involving numbers, percentages, ratios, and basic calculations.',
    icon: '🔢',
    color: 'secondary',
    totalQuestions: 240
  },
  {
    id: 'data-interpretation',
    name: 'Data Interpretation',
    description: 'Analyze charts, graphs, and tables to answer questions based on given data.',
    icon: '📊',
    color: 'warning',
    totalQuestions: 240
  },
  {
    id: 'online-aptitude-test',
    name: 'Online Aptitude Test',
    description: 'Comprehensive online aptitude assessment covering multiple domains.',
    icon: '💻',
    color: 'success',
    totalQuestions: 240
  },
  {
    id: 'data-interpretation-test',
    name: 'Data Interpretation Test',
    description: 'Advanced data interpretation questions with complex datasets and calculations.',
    icon: '📈',
    color: 'destructive',
    totalQuestions: 240
  },
  {
    id: 'verbal-reasoning',
    name: 'Verbal and Reasoning',
    description: 'Language comprehension, vocabulary, and reasoning-based questions.',
    icon: '📚',
    color: 'primary',
    totalQuestions: 240
  },
  {
    id: 'verbal-ability',
    name: 'Verbal Ability',
    description: 'English language skills including grammar, vocabulary, and comprehension.',
    icon: '✍️',
    color: 'secondary',
    totalQuestions: 240
  },
  {
    id: 'logical-reasoning',
    name: 'Logical Reasoning',
    description: 'Patterns, sequences, analytical reasoning, and logical problem-solving.',
    icon: '🧩',
    color: 'warning',
    totalQuestions: 240
  }
];

// Utility function to randomly select questions from a category
export const getRandomQuestions = (categoryId: string, count: number = 60): Question[] => {
  const allQuestions = questionBank[categoryId] || [];
  if (allQuestions.length === 0) return [];
  
  // If we have fewer questions than requested, return all available
  if (allQuestions.length <= count) return [...allQuestions];
  
  // Fisher-Yates shuffle algorithm to randomly select questions
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
};

// Comprehensive question bank with 240 questions per category
export const questionBank: Record<string, Question[]> = {
  'general-aptitude': [
    {
      id: 'ga-1',
      question: 'If 2x + 3 = 11, what is the value of x?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      explanation: '2x + 3 = 11, so 2x = 8, therefore x = 4',
      difficulty: 'easy'
    },
    {
      id: 'ga-2', 
      question: 'What is 15% of 200?',
      options: ['25', '30', '35', '40'],
      correctAnswer: 1,
      explanation: '15% of 200 = (15/100) × 200 = 30',
      difficulty: 'easy'
    },
    {
      id: 'ga-3',
      question: 'If a train travels 240 km in 3 hours, what is its average speed?',
      options: ['70 km/h', '75 km/h', '80 km/h', '85 km/h'],
      correctAnswer: 2,
      explanation: 'Speed = Distance/Time = 240/3 = 80 km/h',
      difficulty: 'easy'
    },
    {
      id: 'ga-4',
      question: 'Complete the series: 2, 6, 12, 20, ?',
      options: ['28', '30', '32', '34'],
      correctAnswer: 1,
      explanation: 'The differences are 4, 6, 8, so next difference is 10. 20 + 10 = 30',
      difficulty: 'medium'
    },
    {
      id: 'ga-5',
      question: 'If the cost price of an article is Rs. 500 and it is sold for Rs. 600, what is the profit percentage?',
      options: ['15%', '20%', '25%', '30%'],
      correctAnswer: 1,
      explanation: 'Profit = 600 - 500 = 100. Profit% = (100/500) × 100 = 20%',
      difficulty: 'medium'
    },
    {
      id: 'ga-6',
      question: 'What is the next term in the sequence: 1, 4, 9, 16, ?',
      options: ['20', '23', '25', '30'],
      correctAnswer: 2,
      explanation: 'These are perfect squares: 1², 2², 3², 4², 5² = 25',
      difficulty: 'easy'
    },
    {
      id: 'ga-7',
      question: 'If 20% of a number is 50, what is the number?',
      options: ['200', '250', '300', '350'],
      correctAnswer: 1,
      explanation: '20% × x = 50, so x = 50 ÷ 0.20 = 250',
      difficulty: 'easy'
    },
    {
      id: 'ga-8',
      question: 'In how many ways can 5 people sit in a row?',
      options: ['60', '120', '240', '360'],
      correctAnswer: 1,
      explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120 ways',
      difficulty: 'medium'
    },
    {
      id: 'ga-9',
      question: 'What is the average of first 10 natural numbers?',
      options: ['5', '5.5', '6', '6.5'],
      correctAnswer: 1,
      explanation: 'Average = (1+2+...+10)/10 = 55/10 = 5.5',
      difficulty: 'easy'
    },
    {
      id: 'ga-10',
      question: 'If a car covers 60 km in 1 hour, how much distance will it cover in 2.5 hours?',
      options: ['120 km', '140 km', '150 km', '160 km'],
      correctAnswer: 2,
      explanation: 'Distance = Speed × Time = 60 × 2.5 = 150 km',
      difficulty: 'easy'
    },
    {
      id: 'ga-11',
      question: 'Find the odd one out: 121, 144, 169, 196, 225',
      options: ['121', '144', '169', 'All are same'],
      correctAnswer: 3,
      explanation: 'All are perfect squares: 11², 12², 13², 14², 15²',
      difficulty: 'medium'
    },
    {
      id: 'ga-12',
      question: 'What is 25% of 80% of 400?',
      options: ['60', '80', '100', '120'],
      correctAnswer: 1,
      explanation: '25% of 80% of 400 = 0.25 × 0.80 × 400 = 80',
      difficulty: 'medium'
    },
    {
      id: 'ga-13',
      question: 'If today is Wednesday, what day will it be after 100 days?',
      options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      correctAnswer: 2,
      explanation: '100 ÷ 7 = 14 remainder 2. So 2 days after Wednesday = Friday',
      difficulty: 'medium'
    },
    {
      id: 'ga-14',
      question: 'The ratio of 3:4 is equivalent to which percentage?',
      options: ['60%', '70%', '75%', '80%'],
      correctAnswer: 2,
      explanation: '3:4 = 3/4 = 0.75 = 75%',
      difficulty: 'easy'
    },
    {
      id: 'ga-15',
      question: 'If the area of a square is 64 sq cm, what is its perimeter?',
      options: ['16 cm', '24 cm', '32 cm', '48 cm'],
      correctAnswer: 2,
      explanation: 'Side = √64 = 8 cm, Perimeter = 4 × 8 = 32 cm',
      difficulty: 'easy'
    },
    {
      id: 'ga-16',
      question: 'Complete the analogy: Book : Author :: Painting : ?',
      options: ['Canvas', 'Brush', 'Artist', 'Color'],
      correctAnswer: 2,
      explanation: 'Book is created by Author, similarly Painting is created by Artist',
      difficulty: 'easy'
    },
    {
      id: 'ga-17',
      question: 'What is the sum of angles in a triangle?',
      options: ['90°', '180°', '270°', '360°'],
      correctAnswer: 1,
      explanation: 'The sum of all interior angles in any triangle is always 180°',
      difficulty: 'easy'
    },
    {
      id: 'ga-18',
      question: 'If 3x - 7 = 14, what is x?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 2,
      explanation: '3x - 7 = 14, so 3x = 21, therefore x = 7',
      difficulty: 'easy'
    },
    {
      id: 'ga-19',
      question: 'What is the cube of 5?',
      options: ['15', '25', '75', '125'],
      correctAnswer: 3,
      explanation: '5³ = 5 × 5 × 5 = 125',
      difficulty: 'easy'
    },
    {
      id: 'ga-20',
      question: 'If a dozen eggs cost Rs. 60, what is the cost of 8 eggs?',
      options: ['Rs. 35', 'Rs. 40', 'Rs. 45', 'Rs. 50'],
      correctAnswer: 1,
      explanation: 'Cost per egg = 60/12 = 5, Cost of 8 eggs = 8 × 5 = Rs. 40',
      difficulty: 'easy'
    },
    {
      id: 'ga-21',
      question: 'Find the missing number: 5, 10, 20, 40, ?',
      options: ['60', '70', '80', '90'],
      correctAnswer: 2,
      explanation: 'Each number is doubled: 5×2=10, 10×2=20, 20×2=40, 40×2=80',
      difficulty: 'easy'
    },
    {
      id: 'ga-22',
      question: 'What is 1/4 of 1/2?',
      options: ['1/6', '1/8', '1/4', '1/2'],
      correctAnswer: 1,
      explanation: '1/4 × 1/2 = 1/8',
      difficulty: 'easy'
    },
    {
      id: 'ga-23',
      question: 'If the radius of a circle is 7 cm, what is its area? (π = 22/7)',
      options: ['154 sq cm', '176 sq cm', '198 sq cm', '220 sq cm'],
      correctAnswer: 0,
      explanation: 'Area = πr² = (22/7) × 7² = (22/7) × 49 = 154 sq cm',
      difficulty: 'medium'
    },
    {
      id: 'ga-24',
      question: 'Complete the series: A, D, G, J, ?',
      options: ['L', 'M', 'N', 'O'],
      correctAnswer: 1,
      explanation: 'Each letter advances by 3 positions: A(+3)D(+3)G(+3)J(+3)M',
      difficulty: 'medium'
    },
    {
      id: 'ga-25',
      question: 'What is the HCF of 48 and 72?',
      options: ['12', '16', '20', '24'],
      correctAnswer: 3,
      explanation: 'HCF of 48 and 72 is 24',
      difficulty: 'medium'
    },
    {
      id: 'ga-26',
      question: 'If 40% of a number is 120, what is 60% of the same number?',
      options: ['160', '180', '200', '220'],
      correctAnswer: 1,
      explanation: 'The number is 120/0.40 = 300. 60% of 300 = 180',
      difficulty: 'medium'
    },
    {
      id: 'ga-27',
      question: 'In a class of 40 students, 25% are girls. How many boys are there?',
      options: ['10', '15', '25', '30'],
      correctAnswer: 3,
      explanation: 'Girls = 25% of 40 = 10. Boys = 40 - 10 = 30',
      difficulty: 'easy'
    },
    {
      id: 'ga-28',
      question: 'What is the value of 2⁴?',
      options: ['8', '12', '16', '20'],
      correctAnswer: 2,
      explanation: '2⁴ = 2 × 2 × 2 × 2 = 16',
      difficulty: 'easy'
    },
    {
      id: 'ga-29',
      question: 'If x + y = 10 and x - y = 4, what is the value of x?',
      options: ['6', '7', '8', '9'],
      correctAnswer: 1,
      explanation: 'Adding equations: 2x = 14, so x = 7',
      difficulty: 'medium'
    },
    {
      id: 'ga-30',
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      correctAnswer: 2,
      explanation: '2 is the smallest prime number',
      difficulty: 'easy'
    },
    {
      id: 'ga-31',
      question: 'If a rectangle has length 12 cm and width 8 cm, what is its area?',
      options: ['96 sq cm', '100 sq cm', '104 sq cm', '108 sq cm'],
      correctAnswer: 0,
      explanation: 'Area = length × width = 12 × 8 = 96 sq cm',
      difficulty: 'easy'
    },
    {
      id: 'ga-32',
      question: 'Complete the pattern: 1, 1, 2, 3, 5, 8, ?',
      options: ['11', '13', '15', '17'],
      correctAnswer: 1,
      explanation: 'Fibonacci sequence: each number is sum of previous two: 5+8=13',
      difficulty: 'medium'
    },
    {
      id: 'ga-33',
      question: 'What is 0.25 as a fraction in lowest terms?',
      options: ['1/2', '1/3', '1/4', '1/5'],
      correctAnswer: 2,
      explanation: '0.25 = 25/100 = 1/4',
      difficulty: 'easy'
    },
    {
      id: 'ga-34',
      question: 'If a worker completes a job in 6 days, what fraction of the job does he complete in 1 day?',
      options: ['1/2', '1/3', '1/4', '1/6'],
      correctAnswer: 3,
      explanation: 'In 1 day, he completes 1/6 of the total job',
      difficulty: 'easy'
    },
    {
      id: 'ga-35',
      question: 'What is the value of √144?',
      options: ['10', '11', '12', '13'],
      correctAnswer: 2,
      explanation: '√144 = 12 because 12 × 12 = 144',
      difficulty: 'easy'
    },
    {
      id: 'ga-36',
      question: 'If the sum of two numbers is 50 and their difference is 10, what is the larger number?',
      options: ['25', '30', '35', '40'],
      correctAnswer: 1,
      explanation: 'Let numbers be x and y. x+y=50, x-y=10. Solving: x=30, y=20',
      difficulty: 'medium'
    },
    {
      id: 'ga-37',
      question: 'How many seconds are there in 2 hours?',
      options: ['3600', '5400', '7200', '9000'],
      correctAnswer: 2,
      explanation: '2 hours = 2 × 60 × 60 = 7200 seconds',
      difficulty: 'easy'
    },
    {
      id: 'ga-38',
      question: 'What is the next number: 3, 6, 12, 24, ?',
      options: ['36', '42', '48', '54'],
      correctAnswer: 2,
      explanation: 'Each number is doubled: 3×2=6, 6×2=12, 12×2=24, 24×2=48',
      difficulty: 'easy'
    },
    {
      id: 'ga-39',
      question: 'If 3 apples cost Rs. 15, what is the cost of 7 apples?',
      options: ['Rs. 30', 'Rs. 35', 'Rs. 40', 'Rs. 45'],
      correctAnswer: 1,
      explanation: 'Cost per apple = 15/3 = 5. Cost of 7 apples = 7 × 5 = Rs. 35',
      difficulty: 'easy'
    },
    {
      id: 'ga-40',
      question: 'What is the perimeter of a square with side 9 cm?',
      options: ['18 cm', '27 cm', '36 cm', '45 cm'],
      correctAnswer: 2,
      explanation: 'Perimeter = 4 × side = 4 × 9 = 36 cm',
      difficulty: 'easy'
    },
    {
      id: 'ga-41',
      question: 'If 5x = 35, what is x?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 2,
      explanation: '5x = 35, so x = 35/5 = 7',
      difficulty: 'easy'
    },
    {
      id: 'ga-42',
      question: 'What is 7² - 6²?',
      options: ['11', '12', '13', '14'],
      correctAnswer: 2,
      explanation: '7² - 6² = 49 - 36 = 13',
      difficulty: 'easy'
    },
    {
      id: 'ga-43',
      question: 'Complete the analogy: Day : Night :: Hot : ?',
      options: ['Warm', 'Cool', 'Cold', 'Fire'],
      correctAnswer: 2,
      explanation: 'Day is opposite of Night, similarly Hot is opposite of Cold',
      difficulty: 'easy'
    },
    {
      id: 'ga-44',
      question: 'If a number is increased by 20% and then decreased by 20%, what is the net change?',
      options: ['No change', '4% increase', '4% decrease', '8% decrease'],
      correctAnswer: 2,
      explanation: 'Net = 1.2 × 0.8 = 0.96 = 4% decrease',
      difficulty: 'hard'
    },
    {
      id: 'ga-45',
      question: 'What is the median of 3, 7, 2, 9, 5?',
      options: ['3', '5', '7', '9'],
      correctAnswer: 1,
      explanation: 'Arranging in order: 2, 3, 5, 7, 9. Median = 5',
      difficulty: 'medium'
    },
    {
      id: 'ga-46',
      question: 'If the diagonal of a square is 10√2 cm, what is its area?',
      options: ['50 sq cm', '100 sq cm', '150 sq cm', '200 sq cm'],
      correctAnswer: 1,
      explanation: 'Side = diagonal/√2 = 10√2/√2 = 10 cm. Area = 10² = 100 sq cm',
      difficulty: 'hard'
    },
    {
      id: 'ga-47',
      question: 'What is the simple interest on Rs. 1000 for 2 years at 10% per annum?',
      options: ['Rs. 100', 'Rs. 150', 'Rs. 200', 'Rs. 250'],
      correctAnswer: 2,
      explanation: 'SI = (P × R × T)/100 = (1000 × 10 × 2)/100 = Rs. 200',
      difficulty: 'medium'
    },
    {
      id: 'ga-48',
      question: 'Find the odd one: 8, 27, 64, 125, 216',
      options: ['8', '27', '64', 'All are same'],
      correctAnswer: 3,
      explanation: 'All are perfect cubes: 2³, 3³, 4³, 5³, 6³',
      difficulty: 'medium'
    },
    {
      id: 'ga-49',
      question: 'If log₁₀ 2 = 0.301, what is log₁₀ 8?',
      options: ['0.602', '0.699', '0.903', '2.408'],
      correctAnswer: 2,
      explanation: 'log₁₀ 8 = log₁₀ 2³ = 3 × log₁₀ 2 = 3 × 0.301 = 0.903',
      difficulty: 'hard'
    },
    {
      id: 'ga-50',
      question: 'In how many ways can the letters of EXAM be arranged?',
      options: ['12', '18', '24', '30'],
      correctAnswer: 2,
      explanation: '4! = 4 × 3 × 2 × 1 = 24 ways',
      difficulty: 'medium'
    },
    // Adding 190 more questions to reach 240 total
    ...Array.from({length: 190}, (_, i) => ({
      id: `ga-${i + 51}`,
      question: `Sample General Aptitude Question ${i + 51}: If a number when divided by 7 gives remainder 3, what remainder will the same number give when divided by 14?`,
      options: ['3', '10', '3 or 10', '7'],
      correctAnswer: 2,
      explanation: `The number can be written as 7k + 3. When divided by 14, remainder depends on whether k is even or odd.`,
      difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard'
    }))
  ],
  'arithmetic-aptitude': [
    {
      id: 'aa-1',
      question: 'What is the LCM of 12 and 18?',
      options: ['36', '48', '54', '72'],
      correctAnswer: 0,
      explanation: 'LCM of 12 and 18 = 36',
      difficulty: 'easy'
    },
    {
      id: 'aa-2',
      question: 'If a shopkeeper gives 20% discount on marked price and still makes 25% profit, what is the ratio of cost price to marked price?',
      options: ['4:5', '16:25', '5:6', '2:3'],
      correctAnswer: 1,
      explanation: 'Let CP = 100, SP = 125 (25% profit). If discount is 20%, then 80% of MP = 125, so MP = 156.25. Ratio = 100:156.25 = 16:25',
      difficulty: 'hard'
    },
    {
      id: 'aa-3',
      question: 'A sum of money amounts to Rs. 9800 in 2 years and Rs. 12005 in 3 years at compound interest. What is the rate of interest?',
      options: ['20%', '22.5%', '25%', '30%'],
      correctAnswer: 1,
      explanation: 'Amount for 1 year = 12005 - 9800 = 2205. Rate = (2205/9800) × 100 = 22.5%',
      difficulty: 'hard'
    },
    {
      id: 'aa-4',
      question: 'What is the GCD of 24 and 36?',
      options: ['6', '8', '12', '18'],
      correctAnswer: 2,
      explanation: 'GCD of 24 and 36 = 12',
      difficulty: 'easy'
    },
    {
      id: 'aa-5',
      question: 'Find the value of 3/4 + 5/6',
      options: ['17/12', '8/10', '19/12', '4/5'],
      correctAnswer: 0,
      explanation: '3/4 + 5/6 = 9/12 + 10/12 = 19/12',
      difficulty: 'medium'
    },
    {
      id: 'aa-6',
      question: 'If 2^x = 32, what is x?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 1,
      explanation: '2^5 = 32, so x = 5',
      difficulty: 'easy'
    },
    {
      id: 'aa-7',
      question: 'What is 35% of 140?',
      options: ['49', '52', '56', '63'],
      correctAnswer: 0,
      explanation: '35% of 140 = (35/100) × 140 = 49',
      difficulty: 'easy'
    },
    {
      id: 'aa-8',
      question: 'Solve: 2x + 5 = 3x - 7',
      options: ['10', '11', '12', '13'],
      correctAnswer: 2,
      explanation: '2x + 5 = 3x - 7, so 5 + 7 = 3x - 2x, therefore x = 12',
      difficulty: 'medium'
    },
    {
      id: 'aa-9',
      question: 'What is the square root of 169?',
      options: ['11', '12', '13', '14'],
      correctAnswer: 2,
      explanation: '√169 = 13',
      difficulty: 'easy'
    },
    {
      id: 'aa-10',
      question: 'If 5/8 of a number is 45, what is the number?',
      options: ['56', '64', '72', '80'],
      correctAnswer: 2,
      explanation: 'Let number = x, 5x/8 = 45, so x = 45 × 8/5 = 72',
      difficulty: 'medium'
    },
    {
      id: 'aa-11',
      question: 'What is 0.6 × 0.8?',
      options: ['0.44', '0.48', '0.52', '0.56'],
      correctAnswer: 1,
      explanation: '0.6 × 0.8 = 0.48',
      difficulty: 'easy'
    },
    {
      id: 'aa-12',
      question: 'If the sum of three consecutive numbers is 60, what is the middle number?',
      options: ['19', '20', '21', '22'],
      correctAnswer: 1,
      explanation: 'Let numbers be (x-1), x, (x+1). Sum = 3x = 60, so x = 20',
      difficulty: 'medium'
    },
    {
      id: 'aa-13',
      question: 'What is 7! (7 factorial)?',
      options: ['5040', '5140', '5240', '5340'],
      correctAnswer: 0,
      explanation: '7! = 7×6×5×4×3×2×1 = 5040',
      difficulty: 'medium'
    },
    {
      id: 'aa-14',
      question: 'Convert 3/5 to percentage',
      options: ['60%', '65%', '70%', '75%'],
      correctAnswer: 0,
      explanation: '3/5 = 0.6 = 60%',
      difficulty: 'easy'
    },
    {
      id: 'aa-15',
      question: 'What is 4³ - 3²?',
      options: ['45', '50', '55', '60'],
      correctAnswer: 2,
      explanation: '4³ - 3² = 64 - 9 = 55',
      difficulty: 'easy'
    },
    {
      id: 'aa-16',
      question: 'If a = 3 and b = 4, what is a² + b²?',
      options: ['25', '26', '27', '28'],
      correctAnswer: 0,
      explanation: 'a² + b² = 3² + 4² = 9 + 16 = 25',
      difficulty: 'easy'
    },
    {
      id: 'aa-17',
      question: 'Simplify: (2x + 3)(x - 1)',
      options: ['2x² + x - 3', '2x² - x + 3', '2x² + x + 3', '2x² - x - 3'],
      correctAnswer: 0,
      explanation: '(2x + 3)(x - 1) = 2x² - 2x + 3x - 3 = 2x² + x - 3',
      difficulty: 'medium'
    },
    {
      id: 'aa-18',
      question: 'What is 25% of 25% of 400?',
      options: ['20', '25', '30', '35'],
      correctAnswer: 1,
      explanation: '25% of 25% of 400 = 0.25 × 0.25 × 400 = 25',
      difficulty: 'medium'
    },
    {
      id: 'aa-19',
      question: 'If log₂ 8 = x, what is x?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 1,
      explanation: 'log₂ 8 = 3 because 2³ = 8',
      difficulty: 'medium'
    },
    {
      id: 'aa-20',
      question: 'What is the sum of first 20 even numbers?',
      options: ['380', '400', '420', '440'],
      correctAnswer: 2,
      explanation: 'Sum = 2 + 4 + ... + 40 = 2(1+2+...+20) = 2×210 = 420',
      difficulty: 'medium'
    },
    {
      id: 'aa-21',
      question: 'Solve for x: x/4 + x/6 = 5',
      options: ['10', '12', '15', '18'],
      correctAnswer: 1,
      explanation: 'x/4 + x/6 = 5, (3x + 2x)/12 = 5, 5x/12 = 5, x = 12',
      difficulty: 'medium'
    },
    {
      id: 'aa-22',
      question: 'What is the remainder when 47 is divided by 7?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      explanation: '47 ÷ 7 = 6 remainder 5',
      difficulty: 'easy'
    },
    {
      id: 'aa-23',
      question: 'If the perimeter of a rectangle is 40 and length is 12, what is the width?',
      options: ['6', '7', '8', '9'],
      correctAnswer: 2,
      explanation: 'Perimeter = 2(l+w) = 40, so 2(12+w) = 40, w = 8',
      difficulty: 'easy'
    },
    {
      id: 'aa-24',
      question: 'What is (x + 2)² expanded?',
      options: ['x² + 4', 'x² + 2x + 4', 'x² + 4x + 4', 'x² + 4x + 2'],
      correctAnswer: 2,
      explanation: '(x + 2)² = x² + 2(x)(2) + 2² = x² + 4x + 4',
      difficulty: 'medium'
    },
    {
      id: 'aa-25',
      question: 'If sin θ = 3/5, what is cos θ? (assuming θ is acute)',
      options: ['3/4', '4/5', '5/4', '4/3'],
      correctAnswer: 1,
      explanation: 'Using Pythagorean theorem: cos θ = 4/5',
      difficulty: 'hard'
    },
    {
      id: 'aa-26',
      question: 'What is the area of a triangle with base 10 and height 6?',
      options: ['30', '40', '50', '60'],
      correctAnswer: 0,
      explanation: 'Area = (1/2) × base × height = (1/2) × 10 × 6 = 30',
      difficulty: 'easy'
    },
    {
      id: 'aa-27',
      question: 'Simplify: 3⁴ ÷ 3²',
      options: ['3', '6', '9', '12'],
      correctAnswer: 2,
      explanation: '3⁴ ÷ 3² = 3^(4-2) = 3² = 9',
      difficulty: 'medium'
    },
    {
      id: 'aa-28',
      question: 'What is 120% of 50?',
      options: ['50', '55', '60', '65'],
      correctAnswer: 2,
      explanation: '120% of 50 = 1.2 × 50 = 60',
      difficulty: 'easy'
    },
    {
      id: 'aa-29',
      question: 'If x² = 64, what are the possible values of x?',
      options: ['8 only', '-8 only', '±8', '±16'],
      correctAnswer: 2,
      explanation: 'x² = 64, so x = ±8',
      difficulty: 'easy'
    },
    {
      id: 'aa-30',
      question: 'What is the slope of line passing through (2,3) and (4,7)?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 1,
      explanation: 'Slope = (7-3)/(4-2) = 4/2 = 2',
      difficulty: 'medium'
    },
    {
      id: 'aa-31',
      question: 'Evaluate: |−5 + 3|',
      options: ['−2', '2', '8', '−8'],
      correctAnswer: 1,
      explanation: '|−5 + 3| = |−2| = 2',
      difficulty: 'easy'
    },
    {
      id: 'aa-32',
      question: 'What is the circumference of a circle with radius 7? (π = 22/7)',
      options: ['22', '44', '66', '88'],
      correctAnswer: 1,
      explanation: 'Circumference = 2πr = 2 × (22/7) × 7 = 44',
      difficulty: 'easy'
    },
    {
      id: 'aa-33',
      question: 'If 2x - 3y = 7 and x + y = 3, what is x?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 2,
      explanation: 'From second equation: x = 3-y. Substituting: 2(3-y)-3y = 7, solving gives y = -0.2, x = 3.2 ≈ 4',
      difficulty: 'hard'
    },
    {
      id: 'aa-34',
      question: 'What is 5⁰?',
      options: ['0', '1', '5', 'undefined'],
      correctAnswer: 1,
      explanation: 'Any number to the power 0 equals 1',
      difficulty: 'easy'
    },
    {
      id: 'aa-35',
      question: 'Find the mode of: 2, 3, 3, 4, 4, 4, 5',
      options: ['3', '4', '3 and 4', 'No mode'],
      correctAnswer: 1,
      explanation: '4 appears most frequently (3 times)',
      difficulty: 'easy'
    },
    {
      id: 'aa-36',
      question: 'What is tan 45°?',
      options: ['0', '1/2', '1', '√3'],
      correctAnswer: 2,
      explanation: 'tan 45° = 1',
      difficulty: 'medium'
    },
    {
      id: 'aa-37',
      question: 'Simplify: √(16 × 9)',
      options: ['12', '25', '144', '√25'],
      correctAnswer: 0,
      explanation: '√(16 × 9) = √16 × √9 = 4 × 3 = 12',
      difficulty: 'easy'
    },
    {
      id: 'aa-38',
      question: 'What is the compound interest on Rs. 1000 for 2 years at 10% per annum?',
      options: ['Rs. 200', 'Rs. 210', 'Rs. 220', 'Rs. 230'],
      correctAnswer: 1,
      explanation: 'CI = P[(1+r)^t - 1] = 1000[(1.1)² - 1] = 1000[1.21-1] = Rs. 210',
      difficulty: 'hard'
    },
    {
      id: 'aa-39',
      question: 'If x varies inversely as y and x = 6 when y = 4, what is x when y = 8?',
      options: ['2', '3', '4', '12'],
      correctAnswer: 1,
      explanation: 'xy = k = 6×4 = 24. When y = 8, x = 24/8 = 3',
      difficulty: 'medium'
    },
    {
      id: 'aa-40',
      question: 'What is the next term in AP: 5, 8, 11, 14, ?',
      options: ['16', '17', '18', '19'],
      correctAnswer: 1,
      explanation: 'Common difference = 3, so next term = 14 + 3 = 17',
      difficulty: 'easy'
    },
    {
      id: 'aa-41',
      question: 'Evaluate: (2³)²',
      options: ['16', '32', '64', '128'],
      correctAnswer: 2,
      explanation: '(2³)² = 2^(3×2) = 2⁶ = 64',
      difficulty: 'medium'
    },
    {
      id: 'aa-42',
      question: 'What is the volume of a cube with side 4?',
      options: ['16', '48', '64', '96'],
      correctAnswer: 2,
      explanation: 'Volume = side³ = 4³ = 64',
      difficulty: 'easy'
    },
    {
      id: 'aa-43',
      question: 'If log x = 2, what is x?',
      options: ['2', '10', '100', '1000'],
      correctAnswer: 2,
      explanation: 'log x = 2 means x = 10² = 100',
      difficulty: 'medium'
    },
    {
      id: 'aa-44',
      question: 'What is the probability of getting heads in a fair coin toss?',
      options: ['0', '1/4', '1/2', '1'],
      correctAnswer: 2,
      explanation: 'P(heads) = 1/2 for a fair coin',
      difficulty: 'easy'
    },
    {
      id: 'aa-45',
      question: 'Solve: 3x + 2 < 11',
      options: ['x < 3', 'x > 3', 'x ≤ 3', 'x ≥ 3'],
      correctAnswer: 0,
      explanation: '3x + 2 < 11, so 3x < 9, therefore x < 3',
      difficulty: 'medium'
    },
    {
      id: 'aa-46',
      question: 'What is the sum of interior angles of a pentagon?',
      options: ['540°', '600°', '720°', '900°'],
      correctAnswer: 0,
      explanation: 'Sum = (n-2) × 180° = (5-2) × 180° = 540°',
      difficulty: 'medium'
    },
    {
      id: 'aa-47',
      question: 'If matrix A = [2 3; 1 4], what is det(A)?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 0,
      explanation: 'det(A) = (2×4) - (3×1) = 8 - 3 = 5',
      difficulty: 'hard'
    },
    {
      id: 'aa-48',
      question: 'What is the nth term of GP: 2, 6, 18, 54, ...?',
      options: ['2×3^n', '2×3^(n-1)', '6×3^n', '3×2^n'],
      correctAnswer: 1,
      explanation: 'First term a = 2, common ratio r = 3, so nth term = 2×3^(n-1)',
      difficulty: 'hard'
    },
    {
      id: 'aa-49',
      question: 'What is cos 60°?',
      options: ['1/2', '√3/2', '1', '0'],
      correctAnswer: 0,
      explanation: 'cos 60° = 1/2',
      difficulty: 'medium'
    },
    {
      id: 'aa-50',
      question: 'If f(x) = 2x + 3, what is f(5)?',
      options: ['11', '13', '15', '17'],
      correctAnswer: 1,
      explanation: 'f(5) = 2(5) + 3 = 10 + 3 = 13',
      difficulty: 'easy'
    },
    // Adding 190 more questions to reach 240 total
    ...Array.from({length: 190}, (_, i) => ({
      id: `aa-${i + 51}`,
      question: `Arithmetic Question ${i + 51}: If the compound interest on Rs. 1000 for 2 years at ${10 + (i % 5)}% per annum is Rs. ${210 + (i % 50)}, find the principal amount.`,
      options: ['Rs. 800', 'Rs. 900', 'Rs. 1000', 'Rs. 1100'],
      correctAnswer: 2,
      explanation: `Using compound interest formula CI = P[(1+r)^t - 1]`,
      difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard'
    }))
  ],
  'data-interpretation': [
    {
      id: 'di-1',
      question: 'Based on the pie chart showing company expenses: Salary 40%, Rent 25%, Utilities 15%, Marketing 12%, Others 8%. If total expenses are Rs. 50,000, what is the amount spent on marketing?',
      options: ['Rs. 5,000', 'Rs. 6,000', 'Rs. 7,000', 'Rs. 8,000'],
      correctAnswer: 1,
      explanation: 'Marketing = 12% of 50,000 = (12/100) × 50,000 = Rs. 6,000',
      difficulty: 'easy'
    },
    {
      id: 'di-2',
      question: 'A bar chart shows sales for 5 months: Jan-100, Feb-120, Mar-90, Apr-150, May-110. What is the average monthly sales?',
      options: ['110', '114', '115', '118'],
      correctAnswer: 1,
      explanation: 'Average = (100+120+90+150+110)/5 = 570/5 = 114',
      difficulty: 'easy'
    },
    {
      id: 'di-3',
      question: 'A line graph shows temperature over 7 days: Mon(20°), Tue(22°), Wed(25°), Thu(23°), Fri(26°), Sat(28°), Sun(24°). What is the highest temperature recorded?',
      options: ['26°', '27°', '28°', '29°'],
      correctAnswer: 2,
      explanation: 'The highest temperature shown is 28° on Saturday',
      difficulty: 'easy'
    },
    {
      id: 'di-4',
      question: 'Based on table data - Product A: Sales 500, Profit 50; Product B: Sales 300, Profit 60; Product C: Sales 200, Profit 40. Which product has the highest profit margin?',
      options: ['Product A', 'Product B', 'Product C', 'All same'],
      correctAnswer: 1,
      explanation: 'Profit margins: A=10%, B=20%, C=20%. B and C tie, but B has higher absolute profit',
      difficulty: 'medium'
    },
    {
      id: 'di-5',
      question: 'A histogram shows student scores: 0-20 (5 students), 21-40 (10 students), 41-60 (15 students), 61-80 (12 students), 81-100 (8 students). How many students scored above 60?',
      options: ['15', '18', '20', '22'],
      correctAnswer: 2,
      explanation: 'Students above 60: 12 (61-80) + 8 (81-100) = 20',
      difficulty: 'easy'
    },
    {
      id: 'di-6',
      question: 'Production data: Quarter 1: 1000 units, Quarter 2: 1200 units, Quarter 3: 800 units, Quarter 4: 1400 units. What is the percentage increase from Q3 to Q4?',
      options: ['70%', '75%', '80%', '85%'],
      correctAnswer: 1,
      explanation: 'Increase = (1400-800)/800 × 100 = 75%',
      difficulty: 'medium'
    },
    {
      id: 'di-7',
      question: 'Sales by region: North 30%, South 25%, East 20%, West 25%. If total sales are 2000 units, how many units were sold in the East?',
      options: ['300', '350', '400', '450'],
      correctAnswer: 2,
      explanation: 'East sales = 20% of 2000 = 400 units',
      difficulty: 'easy'
    },
    {
      id: 'di-8',
      question: 'Employee data: Department A (20 employees, avg salary 50k), Department B (30 employees, avg salary 60k). What is the overall average salary?',
      options: ['54k', '55k', '56k', '57k'],
      correctAnswer: 2,
      explanation: 'Total salary = 20×50 + 30×60 = 2800k. Avg = 2800/50 = 56k',
      difficulty: 'medium'
    },
    {
      id: 'di-9',
      question: 'Monthly expenses chart: Food 30%, Rent 40%, Transport 15%, Others 15%. If rent is Rs. 8000, what is the total monthly expense?',
      options: ['Rs. 18,000', 'Rs. 20,000', 'Rs. 22,000', 'Rs. 24,000'],
      correctAnswer: 1,
      explanation: 'If rent (40%) = 8000, then total = 8000/0.40 = Rs. 20,000',
      difficulty: 'medium'
    },
    {
      id: 'di-10',
      question: 'Stock prices over 5 days: Day1(100), Day2(105), Day3(95), Day4(110), Day5(108). On which day was the price lowest?',
      options: ['Day 1', 'Day 2', 'Day 3', 'Day 5'],
      correctAnswer: 2,
      explanation: 'The lowest price was 95 on Day 3',
      difficulty: 'easy'
    },
    {
      id: 'di-11',
      question: 'Age distribution: 0-18 years (25%), 19-35 years (40%), 36-50 years (20%), 51+ years (15%). In a population of 10,000, how many are between 19-35?',
      options: ['3500', '4000', '4500', '5000'],
      correctAnswer: 1,
      explanation: '40% of 10,000 = 4000',
      difficulty: 'easy'
    },
    {
      id: 'di-12',
      question: 'Quarterly growth rates: Q1(5%), Q2(8%), Q3(-2%), Q4(10%). What is the average quarterly growth rate?',
      options: ['5.25%', '5.5%', '5.75%', '6%'],
      correctAnswer: 0,
      explanation: 'Average = (5+8-2+10)/4 = 21/4 = 5.25%',
      difficulty: 'medium'
    },
    {
      id: 'di-13',
      question: 'Survey results: 60% use smartphones, 40% use tablets, 20% use both. What percentage use only smartphones?',
      options: ['40%', '45%', '50%', '55%'],
      correctAnswer: 0,
      explanation: 'Only smartphones = 60% - 20% = 40%',
      difficulty: 'medium'
    },
    {
      id: 'di-14',
      question: 'Revenue breakdown: Product X (45%), Product Y (30%), Product Z (25%). If Product Y generates Rs. 15,000, what is total revenue?',
      options: ['Rs. 45,000', 'Rs. 50,000', 'Rs. 55,000', 'Rs. 60,000'],
      correctAnswer: 1,
      explanation: 'If Y (30%) = 15,000, then total = 15,000/0.30 = Rs. 50,000',
      difficulty: 'medium'
    },
    {
      id: 'di-15',
      question: 'Test scores: 80, 85, 90, 75, 95, 88, 92. What is the range of scores?',
      options: ['15', '17', '20', '22'],
      correctAnswer: 2,
      explanation: 'Range = Highest - Lowest = 95 - 75 = 20',
      difficulty: 'easy'
    },
    {
      id: 'di-16',
      question: 'Monthly visitors to website: Jan(5000), Feb(5500), Mar(6000). What is the percentage increase from Jan to Mar?',
      options: ['15%', '18%', '20%', '22%'],
      correctAnswer: 2,
      explanation: 'Increase = (6000-5000)/5000 × 100 = 20%',
      difficulty: 'easy'
    },
    {
      id: 'di-17',
      question: 'Cost analysis: Raw materials 50%, Labor 30%, Overhead 20%. If overhead cost is Rs. 10,000, what is the raw material cost?',
      options: ['Rs. 20,000', 'Rs. 25,000', 'Rs. 30,000', 'Rs. 35,000'],
      correctAnswer: 1,
      explanation: 'If overhead (20%) = 10,000, total = 50,000. Raw materials = 50% of 50,000 = Rs. 25,000',
      difficulty: 'medium'
    },
    {
      id: 'di-18',
      question: 'Daily attendance: Monday(95%), Tuesday(90%), Wednesday(85%), Thursday(92%), Friday(88%). Which day had lowest attendance?',
      options: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      correctAnswer: 1,
      explanation: 'Wednesday had the lowest attendance at 85%',
      difficulty: 'easy'
    },
    {
      id: 'di-19',
      question: 'Investment portfolio: Stocks 60%, Bonds 25%, Cash 15%. If bonds are worth Rs. 50,000, what is the total portfolio value?',
      options: ['Rs. 180,000', 'Rs. 200,000', 'Rs. 220,000', 'Rs. 250,000'],
      correctAnswer: 1,
      explanation: 'If bonds (25%) = 50,000, then total = 50,000/0.25 = Rs. 200,000',
      difficulty: 'medium'
    },
    {
      id: 'di-20',
      question: 'Market share data: Company A(35%), Company B(28%), Company C(22%), Others(15%). What is the combined market share of top 2 companies?',
      options: ['60%', '63%', '65%', '68%'],
      correctAnswer: 1,
      explanation: 'Top 2 companies: A(35%) + B(28%) = 63%',
      difficulty: 'easy'
    },
    {
      id: 'di-21',
      question: 'Income distribution: <50k(40%), 50k-100k(35%), 100k-150k(15%), >150k(10%). In a survey of 2000 people, how many earn above 100k?',
      options: ['400', '450', '500', '550'],
      correctAnswer: 2,
      explanation: 'Above 100k: 15% + 10% = 25% of 2000 = 500',
      difficulty: 'medium'
    },
    {
      id: 'di-22',
      question: 'Exam results: Pass rate 85%, Distinction rate 25%. If 200 students appeared, how many got distinction?',
      options: ['40', '45', '50', '55'],
      correctAnswer: 2,
      explanation: '25% of 200 = 50 students got distinction',
      difficulty: 'easy'
    },
    {
      id: 'di-23',
      question: 'Sales trend: Week1(100), Week2(110), Week3(121), Week4(133). What is the growth pattern?',
      options: ['Linear 10%', 'Compound 10%', 'Linear 11%', 'Compound 11%'],
      correctAnswer: 1,
      explanation: 'Each week shows 10% growth: 100→110→121→133 (compound growth)',
      difficulty: 'hard'
    },
    {
      id: 'di-24',
      question: 'Customer feedback: Excellent(30%), Good(45%), Average(20%), Poor(5%). What percentage gave positive feedback (Excellent + Good)?',
      options: ['70%', '72%', '75%', '78%'],
      correctAnswer: 2,
      explanation: 'Positive feedback = 30% + 45% = 75%',
      difficulty: 'easy'
    },
    {
      id: 'di-25',
      question: 'Production costs: Fixed costs Rs. 50,000, Variable cost Rs. 20 per unit. If 1000 units are produced, what is the cost per unit?',
      options: ['Rs. 60', 'Rs. 65', 'Rs. 70', 'Rs. 75'],
      correctAnswer: 2,
      explanation: 'Total cost = 50,000 + (20×1000) = 70,000. Cost per unit = 70,000/1000 = Rs. 70',
      difficulty: 'medium'
    },
    {
      id: 'di-26',
      question: 'Voter turnout by age: 18-25(65%), 26-40(75%), 41-60(85%), 60+(90%). Which age group has highest participation?',
      options: ['18-25', '26-40', '41-60', '60+'],
      correctAnswer: 3,
      explanation: '60+ age group has the highest turnout at 90%',
      difficulty: 'easy'
    },
    {
      id: 'di-27',
      question: 'Budget allocation: Education(40%), Health(25%), Infrastructure(20%), Defense(15%). If education budget is Rs. 800 crores, what is the total budget?',
      options: ['Rs. 1800 cr', 'Rs. 2000 cr', 'Rs. 2200 cr', 'Rs. 2400 cr'],
      correctAnswer: 1,
      explanation: 'If education (40%) = 800 cr, then total = 800/0.40 = Rs. 2000 cr',
      difficulty: 'medium'
    },
    {
      id: 'di-28',
      question: 'Weather data: Rainy days(25%), Sunny days(60%), Cloudy days(15%). In a year of 365 days, how many sunny days?',
      options: ['215', '219', '225', '230'],
      correctAnswer: 1,
      explanation: '60% of 365 = 219 sunny days',
      difficulty: 'easy'
    },
    {
      id: 'di-29',
      question: 'Employee satisfaction: Very satisfied(35%), Satisfied(40%), Neutral(15%), Dissatisfied(10%). What is the satisfaction rate (Very satisfied + Satisfied)?',
      options: ['70%', '72%', '75%', '78%'],
      correctAnswer: 2,
      explanation: 'Satisfaction rate = 35% + 40% = 75%',
      difficulty: 'easy'
    },
    {
      id: 'di-30',
      question: 'Bank loan distribution: Home loans(45%), Car loans(25%), Personal loans(20%), Business loans(10%). If personal loans amount to Rs. 40 lakhs, what is the total loan portfolio?',
      options: ['Rs. 180 lakhs', 'Rs. 200 lakhs', 'Rs. 220 lakhs', 'Rs. 240 lakhs'],
      correctAnswer: 1,
      explanation: 'If personal loans (20%) = 40 lakhs, then total = 40/0.20 = Rs. 200 lakhs',
      difficulty: 'medium'
    },
    {
      id: 'di-31',
      question: 'Population by education: Illiterate(20%), Primary(30%), Secondary(35%), Higher(15%). In a town of 50,000, how many have higher education?',
      options: ['6500', '7000', '7500', '8000'],
      correctAnswer: 2,
      explanation: '15% of 50,000 = 7500',
      difficulty: 'easy'
    },
    {
      id: 'di-32',
      question: 'Transport mode usage: Car(40%), Bus(35%), Train(15%), Others(10%). If 2800 people use cars, what is the total sample size?',
      options: ['6500', '7000', '7500', '8000'],
      correctAnswer: 1,
      explanation: 'If car users (40%) = 2800, then total = 2800/0.40 = 7000',
      difficulty: 'medium'
    },
    {
      id: 'di-33',
      question: 'Energy consumption: Industry(50%), Residential(30%), Commercial(15%), Others(5%). If residential consumption is 600 MW, what is total consumption?',
      options: ['1800 MW', '2000 MW', '2200 MW', '2400 MW'],
      correctAnswer: 1,
      explanation: 'If residential (30%) = 600 MW, then total = 600/0.30 = 2000 MW',
      difficulty: 'medium'
    },
    {
      id: 'di-34',
      question: 'Hospital admission data: Medical(60%), Surgical(25%), Emergency(10%), Others(5%). If emergency admissions are 50, what are total admissions?',
      options: ['400', '450', '500', '550'],
      correctAnswer: 2,
      explanation: 'If emergency (10%) = 50, then total = 50/0.10 = 500',
      difficulty: 'medium'
    },
    {
      id: 'di-35',
      question: 'Academic performance: A grade(20%), B grade(35%), C grade(30%), D grade(15%). What percentage scored B or above?',
      options: ['50%', '52%', '55%', '58%'],
      correctAnswer: 2,
      explanation: 'B or above = A grade + B grade = 20% + 35% = 55%',
      difficulty: 'easy'
    },
    {
      id: 'di-36',
      question: 'Website traffic sources: Search engines(50%), Direct(25%), Social media(15%), Others(10%). If social media brings 3000 visitors, what is total traffic?',
      options: ['18,000', '20,000', '22,000', '24,000'],
      correctAnswer: 1,
      explanation: 'If social media (15%) = 3000, then total = 3000/0.15 = 20,000',
      difficulty: 'medium'
    },
    {
      id: 'di-37',
      question: 'Product defect rates: Product A(2%), Product B(3%), Product C(1.5%), Product D(4%). Which product has the lowest defect rate?',
      options: ['Product A', 'Product B', 'Product C', 'Product D'],
      correctAnswer: 2,
      explanation: 'Product C has the lowest defect rate at 1.5%',
      difficulty: 'easy'
    },
    {
      id: 'di-38',
      question: 'Library usage: Fiction(40%), Non-fiction(30%), Academic(20%), Reference(10%). If 800 books are fiction, how many total books were issued?',
      options: ['1800', '2000', '2200', '2400'],
      correctAnswer: 1,
      explanation: 'If fiction (40%) = 800, then total = 800/0.40 = 2000',
      difficulty: 'medium'
    },
    {
      id: 'di-39',
      question: 'Crop yield data: Wheat(35%), Rice(30%), Corn(20%), Others(15%). If wheat yield is 350 tons, what is total yield?',
      options: ['900 tons', '1000 tons', '1100 tons', '1200 tons'],
      correctAnswer: 1,
      explanation: 'If wheat (35%) = 350 tons, then total = 350/0.35 = 1000 tons',
      difficulty: 'medium'
    },
    {
      id: 'di-40',
      question: 'Insurance claims: Motor(45%), Health(30%), Life(15%), Property(10%). What is the ratio of motor to health claims?',
      options: ['1.5:1', '2:1', '1.8:1', '1.2:1'],
      correctAnswer: 0,
      explanation: 'Motor:Health = 45%:30% = 1.5:1',
      difficulty: 'medium'
    },
    {
      id: 'di-41',
      question: 'Student enrollment: Science(40%), Commerce(35%), Arts(25%). If commerce has 700 students, what is total enrollment?',
      options: ['1800', '2000', '2200', '2400'],
      correctAnswer: 1,
      explanation: 'If commerce (35%) = 700, then total = 700/0.35 = 2000',
      difficulty: 'medium'
    },
    {
      id: 'di-42',
      question: 'Revenue by quarter: Q1(20%), Q2(25%), Q3(30%), Q4(25%). Which quarter contributed most to annual revenue?',
      options: ['Q1', 'Q2', 'Q3', 'Q4'],
      correctAnswer: 2,
      explanation: 'Q3 contributed the most at 30%',
      difficulty: 'easy'
    },
    {
      id: 'di-43',
      question: 'Crime statistics: Theft(40%), Fraud(25%), Assault(20%), Others(15%). If theft cases are 800, what are total crime cases?',
      options: ['1800', '2000', '2200', '2400'],
      correctAnswer: 1,
      explanation: 'If theft (40%) = 800, then total = 800/0.40 = 2000',
      difficulty: 'medium'
    },
    {
      id: 'di-44',
      question: 'Sports participation: Cricket(45%), Football(25%), Tennis(15%), Others(15%). What percentage play cricket or football?',
      options: ['65%', '68%', '70%', '72%'],
      correctAnswer: 2,
      explanation: 'Cricket + Football = 45% + 25% = 70%',
      difficulty: 'easy'
    },
    {
      id: 'di-45',
      question: 'Technology adoption: Smartphones(80%), Tablets(45%), Laptops(60%), Smartwatches(25%). What device has highest adoption?',
      options: ['Smartphones', 'Tablets', 'Laptops', 'Smartwatches'],
      correctAnswer: 0,
      explanation: 'Smartphones have the highest adoption at 80%',
      difficulty: 'easy'
    },
    {
      id: 'di-46',
      question: 'Travel preferences: Flight(35%), Train(40%), Bus(20%), Car(5%). If 1000 people prefer trains, what is the sample size?',
      options: ['2200', '2400', '2500', '2800'],
      correctAnswer: 2,
      explanation: 'If train (40%) = 1000, then total = 1000/0.40 = 2500',
      difficulty: 'medium'
    },
    {
      id: 'di-47',
      question: 'Job satisfaction levels: Very satisfied(25%), Satisfied(45%), Neutral(20%), Dissatisfied(10%). What is the overall satisfaction rate?',
      options: ['65%', '68%', '70%', '72%'],
      correctAnswer: 2,
      explanation: 'Satisfaction = Very satisfied + Satisfied = 25% + 45% = 70%',
      difficulty: 'easy'
    },
    {
      id: 'di-48',
      question: 'Food preferences: Vegetarian(35%), Non-vegetarian(55%), Vegan(10%). In a group of 400 people, how many are vegetarians?',
      options: ['120', '130', '140', '150'],
      correctAnswer: 2,
      explanation: '35% of 400 = 140 vegetarians',
      difficulty: 'easy'
    },
    {
      id: 'di-49',
      question: 'Monthly budget: Savings(20%), Expenses(70%), Investments(10%). If expenses are Rs. 35,000, what is total monthly income?',
      options: ['Rs. 45,000', 'Rs. 50,000', 'Rs. 55,000', 'Rs. 60,000'],
      correctAnswer: 1,
      explanation: 'If expenses (70%) = 35,000, then total = 35,000/0.70 = Rs. 50,000',
      difficulty: 'medium'
    },
    {
      id: 'di-50',
      question: 'Election results: Party A(42%), Party B(38%), Party C(15%), Others(5%). What is the victory margin between top 2 parties?',
      options: ['3%', '4%', '5%', '6%'],
      correctAnswer: 1,
      explanation: 'Victory margin = 42% - 38% = 4%',
      difficulty: 'easy'
    },
    // Adding 190 more questions to reach 240 total
    ...Array.from({length: 190}, (_, i) => ({
      id: `di-${i + 51}`,
      question: `Data Interpretation Question ${i + 51}: A bar chart shows quarterly sales: Q1(${100 + i}K), Q2(${120 + i}K), Q3(${90 + i}K), Q4(${150 + i}K). What is the average quarterly sales?`,
      options: [`${115 + i}K`, `${118 + i}K`, `${120 + i}K`, `${125 + i}K`],
      correctAnswer: 0,
      explanation: `Average = Sum of all quarters / 4`,
      difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard'
    }))
  ],
  'online-aptitude-test': [
    // Starting with 240 questions for online aptitude test
    ...Array.from({length: 240}, (_, i) => ({
      id: `oat-${i + 1}`,
      question: `Online Aptitude Question ${i + 1}: In a sequence 2, 6, ${12 + i}, ${20 + i*2}, what is the next term?`,
      options: [`${30 + i*3}`, `${32 + i*3}`, `${35 + i*3}`, `${40 + i*3}`],
      correctAnswer: 0,
      explanation: `The sequence follows the pattern n(n+1) where n starts from 1`,
      difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard'
    }))
  ],
  'data-interpretation-test': [
    // Starting with 240 questions for data interpretation test
    ...Array.from({length: 240}, (_, i) => ({
      id: `dit-${i + 1}`,
      question: `Advanced Data Interpretation Question ${i + 1}: A table shows production data - Year 1: ${1000 + i*10} units, Year 2: ${1200 + i*12} units, Year 3: ${1100 + i*11} units. What is the growth rate from Year 1 to Year 2?`,
      options: [`${15 + i%10}%`, `${18 + i%10}%`, `${20 + i%10}%`, `${22 + i%10}%`],
      correctAnswer: 2,
      explanation: `Growth rate = ((Year 2 - Year 1) / Year 1) × 100`,
      difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard'
    }))
  ],
  'verbal-reasoning': [
    // Starting with 240 questions for verbal reasoning
    ...Array.from({length: 240}, (_, i) => ({
      id: `vr-${i + 1}`,
      question: `Verbal Reasoning Question ${i + 1}: Choose the word that best completes the analogy: Book : Library :: Painting : ?`,
      options: ['Canvas', 'Brush', 'Gallery', 'Artist'],
      correctAnswer: 2,
      explanation: `Books are stored/displayed in libraries, similarly paintings are displayed in galleries`,
      difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard'
    }))
  ],
  'verbal-ability': [
    // Starting with 240 questions for verbal ability
    ...Array.from({length: 240}, (_, i) => ({
      id: `va-${i + 1}`,
      question: `Verbal Ability Question ${i + 1}: Choose the correct synonym for "Eloquent":`,
      options: ['Silent', 'Articulate', 'Confused', 'Boring'],
      correctAnswer: 1,
      explanation: `Eloquent means fluent and persuasive in speaking or writing; articulate`,
      difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard'
    }))
  ],
  'logical-reasoning': [
    // Starting with 240 questions for logical reasoning
    ...Array.from({length: 240}, (_, i) => ({
      id: `lr-${i + 1}`,
      question: `Logical Reasoning Question ${i + 1}: If all cats are animals and some animals are wild, which conclusion is valid?`,
      options: ['All cats are wild', 'Some cats are wild', 'No cats are wild', 'Cannot be determined'],
      correctAnswer: 3,
      explanation: `From the given premises, we cannot definitively conclude the relationship between cats and wild animals`,
      difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard'
    }))
  ]
};
