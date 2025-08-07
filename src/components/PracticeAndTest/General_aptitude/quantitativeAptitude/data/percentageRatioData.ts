import { QuantitativeQuestion } from '../types';

export const percentageRatioQuestions: QuantitativeQuestion[] = [
  {
    id: 'pr-1',
    topicId: 'percentage-ratio',
    question: 'If 20% of a number is 40, what is 60% of the same number?',
    options: ['80', '100', '120', '140'],
    correctAnswer: 2,
    explanation: '20% = 40, so 100% = 40 × 5 = 200. 60% of 200 = 120',
    difficulty: 'easy'
  },
  {
    id: 'pr-2',
    topicId: 'percentage-ratio',
    question: 'The ratio of boys to girls in a class is 3:2. If there are 25 students, how many girls are there?',
    options: ['8', '10', '12', '15'],
    correctAnswer: 1,
    explanation: 'Ratio 3:2 means 3+2=5 parts. 25 students ÷ 5 = 5 students per part. Girls = 2 parts = 10',
    difficulty: 'medium'
  },
  {
    id: 'pr-3',
    topicId: 'percentage-ratio',
    question: 'A number is increased by 20% and then decreased by 20%. What is the net change?',
    options: ['No change', '4% decrease', '4% increase', '20% decrease'],
    correctAnswer: 1,
    explanation: 'Let original number be 100. After 20% increase = 120. After 20% decrease = 120 × 0.8 = 96. Net change = 4% decrease',
    difficulty: 'medium'
  },
  {
    id: 'pr-4',
    topicId: 'percentage-ratio',
    question: 'If A:B = 2:3 and B:C = 4:5, what is A:C?',
    options: ['8:15', '6:15', '8:12', '6:12'],
    correctAnswer: 0,
    explanation: 'A:B = 2:3, B:C = 4:5. To combine ratios, make B same: A:B = 8:12, B:C = 12:15. So A:C = 8:15',
    difficulty: 'hard'
  },
  {
    id: 'pr-5',
    topicId: 'percentage-ratio',
    question: 'A shopkeeper marks his goods 25% above cost price and allows 10% discount. What is his profit percentage?',
    options: ['12.5%', '15%', '17.5%', '20%'],
    correctAnswer: 0,
    explanation: 'Let CP = 100. MP = 125. SP after 10% discount = 125 × 0.9 = 112.5. Profit = 12.5%',
    difficulty: 'hard'
  },
    {
      id: 'pr-6',
      topicId: 'percentage-ratio',
      question: "If 15% of a number is 45, what is 25% of the same number?",
      options: ['60', '75', '90', '105'],
      correctAnswer: 1,
      explanation: "15% = 45, so 100% = 45 × (100/15) = 300. 25% of 300 = 75"
    },
    {
      id: 'pr-7',
      topicId: 'percentage-ratio',
      question: "A shopkeeper offers a discount of 20% on a shirt. If the original price was Rs. 800, what is the selling price?",
      options: ['Rs. 600', 'Rs. 640', 'Rs. 720', 'Rs. 760'],
      correctAnswer: 1,
      explanation: "Discount = 20% of 800 = 160. Selling price = 800 - 160 = Rs. 640"
    },
    {
      id: 'pr-8',
      topicId: 'percentage-ratio',
      question: "If the population of a town increases by 15% annually, what will be the population after 2 years if the current population is 10,000?",
      options: ['11,500', '12,025', '13,225', '14,000'],
      correctAnswer: 2,
      explanation: "After 1 year: 10,000 × 1.15 = 11,500. After 2 years: 11,500 × 1.15 = 13,225"
    },
    {
      id: 'pr-9',
      topicId: 'percentage-ratio',
      question: "A student scores 85% in the first test and 90% in the second test. What is his average percentage?",
      options: ['87.5%', '88%', '88.5%', '89%'],
      correctAnswer: 0,
      explanation: "Average = (85 + 90) ÷ 2 = 175 ÷ 2 = 87.5%"
    },
    {
      id: 'pr-10',
      topicId: 'percentage-ratio',
      question: "If 30% of a number is 60, what is 50% of the same number?",
      options: ['80', '100', '120', '150'],
      correctAnswer: 1,
      explanation: "30% = 60, so 100% = 60 × (100/30) = 200. 50% of 200 = 100"
    },
    {
      id: 'pr-11',
      topicId: 'percentage-ratio',
      question: "A number is increased by 20% and then decreased by 20%. What is the net change?",
      options: ['No change', '4% decrease', '4% increase', '8% decrease'],
      correctAnswer: 1,
      explanation: "Let original number be 100. After 20% increase: 120. After 20% decrease: 120 × 0.8 = 96. Net change = 4% decrease"
    },
    {
      id: 'pr-12',
      topicId: 'percentage-ratio',
      question: "If 40% of a number is equal to 60% of another number, what is the ratio of the first to the second?",
      options: ['2:3', '3:2', '3:4', '4:3'],
      correctAnswer: 1,
      explanation: "40% of A = 60% of B. So 0.4A = 0.6B. Therefore A/B = 0.6/0.4 = 3/2"
    },
    {
      id: 'pr-13',
      topicId: 'percentage-ratio',
      question: "A man's salary was increased by 10% and then decreased by 10%. What is the percentage change in his salary?",
      options: ['1% increase', '1% decrease', 'No change', '10% decrease'],
      correctAnswer: 1,
      explanation: "Let original salary be 100. After 10% increase: 110. After 10% decrease: 110 × 0.9 = 99. Net change = 1% decrease"
    },
    {
      id: 'pr-14',
      topicId: 'percentage-ratio',
      question: "If 25% of a number is 75, what is 75% of the same number?",
      options: ['150', '200', '225', '250'],
      correctAnswer: 2,
      explanation: "25% = 75, so 100% = 75 × 4 = 300. 75% of 300 = 225"
    },
    {
      id: 'pr-15',
      topicId: 'percentage-ratio',
      question: "A shopkeeper marks his goods 30% above cost price and allows a discount of 20%. What is his profit percentage?",
      options: ['4%', '6%', '8%', '10%'],
      correctAnswer: 0,
      explanation: "Let CP = 100. MP = 130. SP after discount = 130 × 0.8 = 104. Profit % = 4%"
    },
    {
      id: 'pr-16',
      topicId: 'percentage-ratio',
      question: "If the price of a commodity increases by 20% and then decreases by 20%, what is the net effect?",
      options: ['No change', '4% decrease', '4% increase', '8% decrease'],
      correctAnswer: 1,
      explanation: "Let original price be 100. After 20% increase: 120. After 20% decrease: 120 × 0.8 = 96. Net effect = 4% decrease"
    },
    {
      id: 'pr-17',
      topicId: 'percentage-ratio',
      question: "A student gets 20% marks and fails by 30 marks. Another student gets 32% marks and gets 42 marks more than the passing marks. What are the passing marks?",
      options: ['200', '250', '300', '350'],
      correctAnswer: 1,
      explanation: "Let total marks be x. 20% of x + 30 = 32% of x - 42. So 0.12x = 72. Therefore x = 600. Passing marks = 20% of 600 + 30 = 150 + 30 = 180"
    },
    {
      id: 'pr-18',
      topicId: 'percentage-ratio',
      question: "If 60% of a number is 120, what is 80% of the same number?",
      options: ['140', '160', '180', '200'],
      correctAnswer: 1,
      explanation: "60% = 120, so 100% = 120 × (100/60) = 200. 80% of 200 = 160"
    },
    {
        id: 'pr-19',
        topicId: 'percentage-ratio',
      question: "A number is first increased by 25% and then decreased by 25%. What is the net change?",
      options: ['No change', '6.25% decrease', '6.25% increase', '12.5% decrease'],
      correctAnswer: 1,
      explanation: "Let original number be 100. After 25% increase: 125. After 25% decrease: 125 × 0.75 = 93.75. Net change = 6.25% decrease"
    },
    {
      id: 'pr-20',
      topicId: 'percentage-ratio',
      question: "If 35% of a number is 70, what is 65% of the same number?",
      options: ['120', '130', '140', '150'],
      correctAnswer: 1,
      explanation: "35% = 70, so 100% = 70 × (100/35) = 200. 65% of 200 = 130"
    }
  ];
