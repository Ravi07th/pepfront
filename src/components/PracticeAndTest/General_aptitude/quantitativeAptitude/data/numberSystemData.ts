import { QuantitativeQuestion } from '../types';

export const numberSystemQuestions: QuantitativeQuestion[] = [
  {
    id: 'ns-1',
    topicId: 'number-system',
    question: 'What is the HCF of 24 and 36?',
    options: ['6', '8', '12', '18'],
    correctAnswer: 2,
    explanation: 'Prime factorization: 24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 12',
    difficulty: 'easy'
  },
  {
    id: 'ns-2',
    topicId: 'number-system',
    question: 'Find the LCM of 15, 20, and 25.',
    options: ['150', '300', '450', '600'],
    correctAnswer: 1,
    explanation: 'Prime factorization: 15 = 3 × 5, 20 = 2² × 5, 25 = 5². LCM = 2² × 3 × 5² = 300',
    difficulty: 'medium'
  },
  {
    id: 'ns-3',
    topicId: 'number-system',
    question: 'A number when divided by 6 leaves remainder 2, when divided by 8 leaves remainder 4. What is the smallest such number?',
    options: ['14', '20', '26', '32'],
    correctAnswer: 1,
    explanation: 'Using Chinese Remainder Theorem or trial: 20 ÷ 6 = 3 remainder 2, 20 ÷ 8 = 2 remainder 4',
    difficulty: 'hard'
  },
  {
    id: 'ns-4',
    topicId: 'number-system',
    question: 'Which of the following numbers is divisible by 9?',
    options: ['12345', '23456', '34567', '45678'],
    correctAnswer: 3,
    explanation: 'Sum of digits of 45678 = 4+5+6+7+8 = 30, which is divisible by 9',
    difficulty: 'easy'
  },
  {
    id: 'ns-5',
    topicId: 'number-system',
    question: 'Find the unit digit of 7^2023.',
    options: ['1', '3', '7', '9'],
    correctAnswer: 2,
    explanation: 'Cyclic pattern: 7¹=7, 7²=49, 7³=343, 7⁴=2401. Pattern repeats every 4. 2023 ÷ 4 = 505 remainder 3. So unit digit is 7',
    difficulty: 'hard'
  },
{
      id: 'ns-6',
      topicId: 'number-system',
      question: "What is the HCF of 24 and 36?",
      options: ['6', '8', '12', '18'],
      correctAnswer: 2,
      explanation: "Prime factorization: 24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 12"
    },
    {
      id: 'ns-7',
      topicId: 'number-system',
      question: "Find the LCM of 15, 20, and 25.",
      options: ['150', '300', '450', '600'],
      correctAnswer: 1,
      explanation: "Prime factorization: 15 = 3 × 5, 20 = 2² × 5, 25 = 5². LCM = 2² × 3 × 5² = 300"
    },
    {
      id: 'ns-8',
      topicId: 'number-system',
      question: "If 20% of a number is 40, what is 60% of the same number?",
      options: ['80', '100', '120', '140'],
      correctAnswer: 2,
      explanation: "20% = 40, so 100% = 40 × 5 = 200. 60% of 200 = 120"
    },
    {
      id: 'ns-9',
      topicId: 'number-system',
      question: "The ratio of boys to girls in a class is 3:2. If there are 25 students, how many girls are there?",
      options: ['8', '10', '12', '15'],
      correctAnswer: 1,
      explanation: "Ratio 3:2 means 3+2=5 parts. 25 students ÷ 5 = 5 students per part. Girls = 2 parts = 10"
    },
    {
      id: 'ns-10',
      topicId: 'number-system',
      question: "A man buys a watch for Rs. 1950 and sells it for Rs. 2200. What is his profit percentage?",
      options: ['12.8%', '14.2%', '15.8%', '16.4%'],
      correctAnswer: 0,
      explanation: "Profit = 2200 - 1950 = 250. Profit % = (250/1950) × 100 = 12.8%"
    },
    {
      id: 'ns-11',
      topicId: 'number-system',
      question: "What is the HCF of 48, 72, and 96?",
      options: ['12', '16', '24', '32'],
      correctAnswer: 2,
      explanation: "Prime factorization: 48 = 2⁴ × 3, 72 = 2³ × 3², 96 = 2⁵ × 3. HCF = 2³ × 3 = 24"
    },
    {
      id: 'ns-12',
      topicId: 'number-system',
      question: "Find the LCM of 12, 18, and 24.",
      options: ['36', '48', '72', '96'],
      correctAnswer: 2,
      explanation: "Prime factorization: 12 = 2² × 3, 18 = 2 × 3², 24 = 2³ × 3. LCM = 2³ × 3² = 72"
    },
    {
      id: 'ns-13',
      topicId: 'number-system',
      question: "If the ratio of A:B:C is 2:3:4 and the sum is 180, what is the value of C?",
      options: ['60', '70', '80', '90'],
      correctAnswer: 2,
      explanation: "Ratio 2:3:4 means 2+3+4=9 parts. 180 ÷ 9 = 20 per part. C = 4 parts = 4 × 20 = 80"
    },
    {
      id: 'ns-14',
      topicId: 'number-system',
      question: "What is the smallest number that when divided by 8, 12, and 16 leaves remainder 3?",
      options: ['51', '99', '147', '195'],
      correctAnswer: 0,
      explanation: "LCM of 8, 12, 16 = 48. Required number = 48 + 3 = 51"
    },
    {
      id: 'ns-15',
      topicId: 'number-system',
      question: "If a number is divisible by both 6 and 8, it must also be divisible by:",
      options: ['12', '16', '24', '48'],
      correctAnswer: 2,
      explanation: "If a number is divisible by 6 and 8, it must be divisible by their LCM, which is 24"
    },
    {
      id: 'ns-16',
      topicId: 'number-system',
      question: "The sum of two numbers is 50 and their HCF is 10. How many such pairs are possible?",
      options: ['1', '2', '3', '4'],
      correctAnswer: 1,
      explanation: "Possible pairs: (10, 40), (20, 30). Only 2 pairs where both numbers are divisible by 10"
    },
    {
      id: 'ns-17 ',
      topicId: 'number-system',
      question: "If the HCF of two numbers is 12 and their LCM is 72, what is the product of the numbers?",
      options: ['864', '720', '648', '576'],
      correctAnswer: 0,
      explanation: "Product = HCF × LCM = 12 × 72 = 864"
    },
    {
      id: 'ns-18',
      topicId: 'number-system',
      question: "What is the greatest number that divides 43, 91, and 183 leaving the same remainder in each case?",
      options: ['4', '8', '12', '16'],
      correctAnswer: 0,
      explanation: "The required number is the HCF of (91-43), (183-91), and (183-43), which is HCF of 48, 92, 140 = 4"
    },
    {
      id: 'ns-19',
      topicId: 'number-system',
      question: "If the ratio of two numbers is 3:4 and their HCF is 15, what are the numbers?",
      options: ['30, 40', '45, 60', '60, 80', '75, 100'],
      correctAnswer: 1,
      explanation: "Let the numbers be 3x and 4x. HCF = x = 15. So numbers are 3×15 = 45 and 4×15 = 60"
    },
    {
      id: 'ns-20',
      topicId: 'number-system',
      question: "What is the smallest 4-digit number divisible by 12, 15, and 18?",
      options: ['1080', '1200', '1260', '1440'],
      correctAnswer: 0,
      explanation: "LCM of 12, 15, 18 = 180. Smallest 4-digit number divisible by 180 is 1080"
    }
  ];
