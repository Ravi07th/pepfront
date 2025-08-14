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
    },
    {
      id: "pr-21",
      topicId: "percentage-ratio",
      question: "If 40% of a number is 120, what is 75% of the same number?",
      options: ["200", "210", "225", "240"],
      correctAnswer: 2,
      explanation: "40% = 120 → 100% = 300 → 75% of 300 = 225"
  },
  {
      id: "pr-22",
      topicId: "percentage-ratio",
      question: "A shirt's price increased from $80 to $100. What is the percentage increase?",
      options: ["20%", "25%", "30%", "35%"],
      correctAnswer: 1,
      explanation: "Increase = $20 → (20/80)×100 = 25%"
  },
  {
      id: "pr-23",
      topicId: "percentage-ratio",
      question: "If 15% of a number is 45, what is 125% of the same number?",
      options: ["300", "325", "350", "375"],
      correctAnswer: 3,
      explanation: "15% = 45 → 100% = 300 → 125% of 300 = 375"
  },
  {
      id: "pr-24",
      topicId: "percentage-ratio",
      question: "A student scored 72 out of 120. What percentage is this?",
      options: ["55%", "60%", "65%", "70%"],
      correctAnswer: 1,
      explanation: "(72/120)×100 = 60%"
  },
  {
      id: "pr-25",
      topicId: "percentage-ratio",
      question: "If 37.5% of a number is 90, what is 62.5% of the same number?",
      options: ["120", "135", "150", "165"],
      correctAnswer: 2,
      explanation: "37.5% = 90 → 100% = 240 → 62.5% of 240 = 150"
  },
  {
      id: "pr-26",
      topicId: "percentage-ratio",
      question: "A product's price decreased by 30%. If the new price is $140, what was the original price?",
      options: ["$180", "$190", "$200", "$210"],
      correctAnswer: 2,
      explanation: "70% = $140 → 100% = (140/70)×100 = $200"
  },
  {
      id: "pr-27",
      topicId: "percentage-ratio",
      question: "What is 33⅓% of a number whose 66⅔% is 180?",
      options: ["75", "80", "85", "90"],
      correctAnswer: 3,
      explanation: "66⅔% = 180 → 100% = 270 → 33⅓% of 270 = 90"
  },
  {
      id: "pr-28",
      topicId: "percentage-ratio",
      question: "A salary increased by 20% and then decreased by 20%. What is the net percentage change?",
      options: ["4% decrease", "2% decrease", "No change", "4% increase"],
      correctAnswer: 0,
      explanation: "Net effect = (1.2 × 0.8) - 1 = 0.96 - 1 = 4% decrease"
  },
  {
      id: "pr-29",
      topicId: "percentage-ratio",
      question: "If 12.5% of a number is 25, what is 87.5% of the same number?",
      options: ["150", "165", "175", "185"],
      correctAnswer: 2,
      explanation: "12.5% = 25 → 100% = 200 → 87.5% of 200 = 175"
  },
  {
      id: "pr-30",
      topicId: "percentage-ratio",
      question: "A population increased from 25,000 to 30,000. What is the percentage increase?",
      options: ["18%", "20%", "22%", "25%"],
      correctAnswer: 1,
      explanation: "Increase = 5,000 → (5,000/25,000)×100 = 20%"
  },
  {
      id: "pr-31",
      topicId: "percentage-ratio",
      question: "If 22% of a number is 66, what is 133% of the same number?",
      options: ["350", "380", "399", "420"],
      correctAnswer: 2,
      explanation: "22% = 66 → 100% = 300 → 133% of 300 = 399"
  },
  {
      id: "pr-32",
      topicId: "percentage-ratio",
      question: "A discount of 15% on $400 is equal to what percentage of $600?",
      options: ["10%", "12%", "15%", "20%"],
      correctAnswer: 0,
      explanation: "15% of 400 = $60 → (60/600)×100 = 10%"
  },
  {
      id: "pr-33",
      topicId: "percentage-ratio",
      question: "If 16% of a number is 64, what is 84% of the same number?",
      options: ["300", "320", "336", "350"],
      correctAnswer: 2,
      explanation: "16% = 64 → 100% = 400 → 84% of 400 = 336"
  },
  {
      id: "pr-34",
      topicId: "percentage-ratio",
      question: "A company's profits increased by 25% in Q1 and then by 40% in Q2. What is the total percentage increase?",
      options: ["65%", "70%", "75%", "80%"],
      correctAnswer: 2,
      explanation: "Net effect = (1.25 × 1.40) - 1 = 1.75 - 1 = 75% increase"
  },
  {
      id: "pr-35",
      topicId: "percentage-ratio",
      question: "What is 17.5% of a number whose 35% is 210?",
      options: ["95", "100", "105", "110"],
      correctAnswer: 2,
      explanation: "35% = 210 → 100% = 600 → 17.5% of 600 = 105"
  },
  {
      id: "pr-36",
      topicId: "percentage-ratio",
      question: "A car's value depreciated by 15% annually. If its current value is $34,000, what was its value 2 years ago?",
      options: ["$45,000", "$46,000", "$47,000", "$48,000"],
      correctAnswer: 2,
      explanation: "Value = Original × (0.85)² = 34,000 → Original = 34,000/0.7225 ≈ 47,000"
  },
  {
      id: "pr-37",
      topicId: "percentage-ratio",
      question: "If 28% of a number is 112, what is 143% of the same number?",
      options: ["520", "550", "572", "600"],
      correctAnswer: 2,
      explanation: "28% = 112 → 100% = 400 → 143% of 400 = 572"
  },
  {
      id: "pr-38",
      topicId: "percentage-ratio",
      question: "A shop gives successive discounts of 10% and 20%. What is the equivalent single discount?",
      options: ["28%", "30%", "32%", "35%"],
      correctAnswer: 0,
      explanation: "Net effect = 1 - (0.9 × 0.8) = 1 - 0.72 = 28% discount"
  },
  {
      id: "pr-39",
      topicId: "percentage-ratio",
      question: "What is 14.28% of a number whose 42.85% is 300?",
      options: ["90", "95", "100", "105"],
      correctAnswer: 2,
      explanation: "42.85% ≈ 3/7 = 300 → Number = 700 → 14.28% ≈ 1/7 of 700 = 100"
  },
  {
      id: "pr-40",
      topicId: "percentage-ratio",
      question: "A salary was first increased by 15% and then the new salary was increased by 20%. The total increase is what percent of the original salary?",
      options: ["35%", "38%", "40%", "42%"],
      correctAnswer: 1,
      explanation: "Net effect = (1.15 × 1.20) - 1 = 1.38 - 1 = 38% increase"
  },

    {
        "id": "pr-41",
        "topicId": "percentage-ratio",
        "question": "If 18% of a number is 72, what is 82% of the same number?",
        "options": ["312", "328", "336", "348"],
        "correctAnswer": 1,
        "explanation": "18% = 72 → 100% = 400 → 82% of 400 = 328"
    },
    {
        "id": "pr-42",
        "topicId": "percentage-ratio",
        "question": "A stock price decreased from $150 to $120. What is the percentage decrease?",
        "options": ["15%", "18%", "20%", "25%"],
        "correctAnswer": 2,
        "explanation": "Decrease = $30 → (30/150)×100 = 20%"
    },
    {
        "id": "pr-43",
        "topicId": "percentage-ratio",
        "question": "If 27.5% of a number is 55, what is 72.5% of the same number?",
        "options": ["135", "140", "145", "150"],
        "correctAnswer": 2,
        "explanation": "27.5% = 55 → 100% = 200 → 72.5% of 200 = 145"
    },
    {
        "id": "pr-44",
        "topicId": "percentage-ratio",
        "question": "A student answered 45 out of 60 questions correctly. What percentage were incorrect?",
        "options": ["20%", "22%", "25%", "28%"],
        "correctAnswer": 2,
        "explanation": "Incorrect = 15 → (15/60)×100 = 25%"
    },
    {
        "id": "pr-45",
        "topicId": "percentage-ratio",
        "question": "What is 16.66% of a number whose 33.33% is 240?",
        "options": ["110", "115", "120", "125"],
        "correctAnswer": 2,
        "explanation": "33.33% ≈ 1/3 = 240 → Number = 720 → 16.66% ≈ 1/6 of 720 = 120"
    },
    {
        "id": "pr-46",
        "topicId": "percentage-ratio",
        "question": "A product's price increased by 12% to $560. What was its original price?",
        "options": ["$480", "$490", "$500", "$510"],
        "correctAnswer": 2,
        "explanation": "112% = $560 → 100% = 560/1.12 = $500"
    },
    {
        "id": "pr-47",
        "topicId": "percentage-ratio",
        "question": "If 11.11% of a number is 45, what is 88.88% of the same number?",
        "options": ["340", "350", "360", "370"],
        "correctAnswer": 2,
        "explanation": "11.11% ≈ 1/9 = 45 → Number = 405 → 88.88% ≈ 8/9 of 405 = 360"
    },
    {
        "id": "pr-48",
        "topicId": "percentage-ratio",
        "question": "A company's revenue increased by 15% in Q1 and decreased by 10% in Q2. What is the net percentage change?",
        "options": ["3.5% increase", "4% increase", "4.5% increase", "5% increase"],
        "correctAnswer": 0,
        "explanation": "Net effect = (1.15 × 0.90) - 1 = 1.035 - 1 = 3.5% increase"
    },
    {
        "id": "pr-49",
        "topicId": "percentage-ratio",
        "question": "If 37.5% of a number is 135, what is 62.5% of the same number?",
        "options": ["210", "215", "220", "225"],
        "correctAnswer": 3,
        "explanation": "37.5% = 135 → 100% = 360 → 62.5% of 360 = 225"
    },
    {
        "id": "pr-50",
        "topicId": "percentage-ratio",
        "question": "A population decreased from 80,000 to 72,000. What is the percentage decrease?",
        "options": ["8%", "9%", "10%", "12%"],
        "correctAnswer": 2,
        "explanation": "Decrease = 8,000 → (8,000/80,000)×100 = 10%"
    },
    {
        "id": "pr-51",
        "topicId": "percentage-ratio",
        "question": "If 24% of a number is 96, what is 126% of the same number?",
        "options": ["480", "496", "504", "512"],
        "correctAnswer": 2,
        "explanation": "24% = 96 → 100% = 400 → 126% of 400 = 504"
    },
    {
        "id": "pr-52",
        "topicId": "percentage-ratio",
        "question": "A discount of 25% on $800 is equal to what percentage of $1000?",
        "options": ["18%", "20%", "22%", "25%"],
        "correctAnswer": 1,
        "explanation": "25% of 800 = $200 → (200/1000)×100 = 20%"
    },
    {
        "id": "pr-53",
        "topicId": "percentage-ratio",
        "question": "If 19% of a number is 76, what is 81% of the same number?",
        "options": ["304", "314", "324", "334"],
        "correctAnswer": 2,
        "explanation": "19% = 76 → 100% = 400 → 81% of 400 = 324"
    },
    {
        "id": "pr-54",
        "topicId": "percentage-ratio",
        "question": "A price increased by 10% and then decreased by 15%. What is the net percentage change?",
        "options": ["5.5% decrease", "6% decrease", "6.5% decrease", "7% decrease"],
        "correctAnswer": 2,
        "explanation": "Net effect = (1.10 × 0.85) - 1 = 0.935 - 1 = 6.5% decrease"
    },
    {
        "id": "pr-55",
        "topicId": "percentage-ratio",
        "question": "What is 12.5% of a number whose 37.5% is 270?",
        "options": ["80", "85", "90", "95"],
        "correctAnswer": 2,
        "explanation": "37.5% = 270 → 100% = 720 → 12.5% of 720 = 90"
    },
    {
        "id": "pr-56",
        "topicId": "percentage-ratio",
        "question": "A car's value depreciated by 12% annually. If its current value is $38,720, what was its value 3 years ago?",
        "options": ["$50,000", "$52,000", "$54,000", "$56,000"],
        "correctAnswer": 0,
        "explanation": "Value = Original × (0.88)³ = 38,720 → Original = 38,720/0.681472 ≈ 50,000"
    },
    {
        "id": "pr-57",
        "topicId": "percentage-ratio",
        "question": "If 28% of a number is 140, what is 147% of the same number?",
        "options": ["705", "715", "725", "735"],
        "correctAnswer": 3,
        "explanation": "28% = 140 → 100% = 500 → 147% of 500 = 735"
    },
    {
        "id": "pr-58",
        "topicId": "percentage-ratio",
        "question": "A shop gives successive discounts of 15% and 25%. What is the equivalent single discount?",
        "options": ["36.25%", "37.5%", "38.75%", "40%"],
        "correctAnswer": 0,
        "explanation": "Net effect = 1 - (0.85 × 0.75) = 1 - 0.6375 = 36.25% discount"
    },
    {
        "id": "pr-59",
        "topicId": "percentage-ratio",
        "question": "What is 8.33% of a number whose 25% is 180?",
        "options": ["55", "58", "60", "62"],
        "correctAnswer": 2,
        "explanation": "25% = 180 → 100% = 720 → 8.33% ≈ 1/12 of 720 = 60"
    },
    {
        "id": "pr-60",
        "topicId": "percentage-ratio",
        "question": "A salary was first increased by 10% and then the new salary was increased by 15%. The total increase is what percent of the original salary?",
        "options": ["25.5%", "26%", "26.5%", "27%"],
        "correctAnswer": 2,
        "explanation": "Net effect = (1.10 × 1.15) - 1 = 1.265 - 1 = 26.5% increase"
    },
      {
          "id": "pr-61",
          "topicId": "percentage-ratio",
          "question": "If 22.5% of a number is 90, what is 77.5% of the same number?",
          "options": ["300", "310", "320", "330"],
          "correctAnswer": 1,
          "explanation": "22.5% = 90 → 100% = 400 → 77.5% of 400 = 310"
      },
      {
          "id": "pr-62",
          "topicId": "percentage-ratio",
          "question": "A laptop's price decreased from $1200 to $900. What is the percentage decrease?",
          "options": ["20%", "22%", "25%", "28%"],
          "correctAnswer": 2,
          "explanation": "Decrease = $300 → (300/1200)×100 = 25%"
      },
      {
          "id": "pr-63",
          "topicId": "percentage-ratio",
          "question": "If 16.66% of a number is 50, what is 83.33% of the same number?",
          "options": ["240", "245", "250", "255"],
          "correctAnswer": 2,
          "explanation": "16.66% ≈ 1/6 = 50 → Number = 300 → 83.33% ≈ 5/6 of 300 = 250"
      },
      {
          "id": "pr-64",
          "topicId": "percentage-ratio",
          "question": "A student scored 84 out of 120 in math. What percentage is this?",
          "options": ["68%", "70%", "72%", "75%"],
          "correctAnswer": 1,
          "explanation": "(84/120)×100 = 70%"
      },
      {
          "id": "pr-65",
          "topicId": "percentage-ratio",
          "question": "What is 14.28% of a number whose 42.85% is 210?",
          "options": ["65", "68", "70", "72"],
          "correctAnswer": 2,
          "explanation": "42.85% ≈ 3/7 = 210 → Number = 490 → 14.28% ≈ 1/7 of 490 = 70"
      },
      {
          "id": "pr-66",
          "topicId": "percentage-ratio",
          "question": "A product's price increased by 8% to $648. What was its original price?",
          "options": ["$580", "$590", "$600", "$610"],
          "correctAnswer": 2,
          "explanation": "108% = $648 → 100% = 648/1.08 = $600"
      },
      {
          "id": "pr-67",
          "topicId": "percentage-ratio",
          "question": "If 12.5% of a number is 75, what is 87.5% of the same number?",
          "options": ["500", "515", "525", "550"],
          "correctAnswer": 2,
          "explanation": "12.5% = 75 → 100% = 600 → 87.5% of 600 = 525"
      },
      {
          "id": "pr-68",
          "topicId": "percentage-ratio",
          "question": "A company's profits increased by 10% in Q1 and decreased by 5% in Q2. What is the net percentage change?",
          "options": ["4.5% increase", "5% increase", "5.5% increase", "6% increase"],
          "correctAnswer": 0,
          "explanation": "Net effect = (1.10 × 0.95) - 1 = 1.045 - 1 = 4.5% increase"
      },
      {
          "id": "pr-69",
          "topicId": "percentage-ratio",
          "question": "If 31.25% of a number is 125, what is 68.75% of the same number?",
          "options": ["265", "270", "275", "280"],
          "correctAnswer": 2,
          "explanation": "31.25% = 125 → 100% = 400 → 68.75% of 400 = 275"
      },
      {
          "id": "pr-70",
          "topicId": "percentage-ratio",
          "question": "A town's population increased from 50,000 to 62,500. What is the percentage increase?",
          "options": ["22%", "23%", "24%", "25%"],
          "correctAnswer": 3,
          "explanation": "Increase = 12,500 → (12,500/50,000)×100 = 25%"
      },
      {
          "id": "pr-71",
          "topicId": "percentage-ratio",
          "question": "If 18% of a number is 108, what is 132% of the same number?",
          "options": ["760", "780", "792", "810"],
          "correctAnswer": 2,
          "explanation": "18% = 108 → 100% = 600 → 132% of 600 = 792"
      },
      {
          "id": "pr-72",
          "topicId": "percentage-ratio",
          "question": "A discount of 30% on $700 is equal to what percentage of $1050?",
          "options": ["18%", "20%", "22%", "25%"],
          "correctAnswer": 1,
          "explanation": "30% of 700 = $210 → (210/1050)×100 = 20%"
      },
      {
          "id": "pr-73",
          "topicId": "percentage-ratio",
          "question": "If 21% of a number is 105, what is 79% of the same number?",
          "options": ["385", "390", "395", "400"],
          "correctAnswer": 2,
          "explanation": "21% = 105 → 100% = 500 → 79% of 500 = 395"
      },
      {
          "id": "pr-74",
          "topicId": "percentage-ratio",
          "question": "A price increased by 12% and then decreased by 18%. What is the net percentage change?",
          "options": ["7.84% decrease", "8.16% decrease", "8.48% decrease", "8.72% decrease"],
          "correctAnswer": 1,
          "explanation": "Net effect = (1.12 × 0.82) - 1 = 0.9184 - 1 = 8.16% decrease"
      },
      {
          "id": "pr-75",
          "topicId": "percentage-ratio",
          "question": "What is 11.11% of a number whose 33.33% is 270?",
          "options": ["80", "85", "90", "95"],
          "correctAnswer": 2,
          "explanation": "33.33% ≈ 1/3 = 270 → Number = 810 → 11.11% ≈ 1/9 of 810 = 90"
      },
      {
          "id": "pr-76",
          "topicId": "percentage-ratio",
          "question": "A car's value depreciated by 10% annually. If its current value is $43,740, what was its value 3 years ago?",
          "options": ["$55,000", "$57,000", "$59,000", "$60,000"],
          "correctAnswer": 3,
          "explanation": "Value = Original × (0.90)³ = 43,740 → Original = 43,740/0.729 ≈ 60,000"
      },
      {
          "id": "pr-77",
          "topicId": "percentage-ratio",
          "question": "If 24% of a number is 144, what is 146% of the same number?",
          "options": ["846", "864", "876", "888"],
          "correctAnswer": 2,
          "explanation": "24% = 144 → 100% = 600 → 146% of 600 = 876"
      },
      {
          "id": "pr-78",
          "topicId": "percentage-ratio",
          "question": "A shop gives successive discounts of 20% and 15%. What is the equivalent single discount?",
          "options": ["32%", "34%", "36%", "38%"],
          "correctAnswer": 0,
          "explanation": "Net effect = 1 - (0.80 × 0.85) = 1 - 0.68 = 32% discount"
      },
      {
          "id": "pr-79",
          "topicId": "percentage-ratio",
          "question": "What is 9.09% of a number whose 27.27% is 210?",
          "options": ["65", "68", "70", "72"],
          "correctAnswer": 2,
          "explanation": "27.27% ≈ 3/11 = 210 → Number = 770 → 9.09% ≈ 1/11 of 770 = 70"
      },
      {
          "id": "pr-80",
          "topicId": "percentage-ratio",
          "question": "A salary was first increased by 12% and then the new salary was increased by 18%. The total increase is what percent of the original salary?",
          "options": ["30.16%", "31.16%", "32.16%", "33.16%"],
          "correctAnswer": 2,
          "explanation": "Net effect = (1.12 × 1.18) - 1 = 1.3216 - 1 = 32.16% increase"
      },
      
        {
            "id": "pr-81",
            "topicId": "percentage-ratio",
            "question": "If 17.5% of a number is 105, what is 82.5% of the same number?",
            "options": ["485", "490", "495", "500"],
            "correctAnswer": 2,
            "explanation": "17.5% = 105 → 100% = 600 → 82.5% of 600 = 495"
        },
        {
            "id": "pr-82",
            "topicId": "percentage-ratio",
            "question": "A smartphone's price decreased from $800 to $640. What is the percentage decrease?",
            "options": ["18%", "20%", "22%", "25%"],
            "correctAnswer": 1,
            "explanation": "Decrease = $160 → (160/800)×100 = 20%"
        },
        {
            "id": "pr-83",
            "topicId": "percentage-ratio",
            "question": "If 13.33% of a number is 60, what is 86.66% of the same number?",
            "options": ["380", "390", "400", "410"],
            "correctAnswer": 1,
            "explanation": "13.33% ≈ 2/15 = 60 → Number = 450 → 86.66% ≈ 13/15 of 450 = 390"
        },
        {
            "id": "pr-84",
            "topicId": "percentage-ratio",
            "question": "A student answered 91 out of 130 questions correctly. What percentage were incorrect?",
            "options": ["28%", "30%", "32%", "35%"],
            "correctAnswer": 1,
            "explanation": "Incorrect = 39 → (39/130)×100 = 30%"
        },
        {
            "id": "pr-85",
            "topicId": "percentage-ratio",
            "question": "What is 15% of a number whose 45% is 270?",
            "options": ["80", "85", "90", "95"],
            "correctAnswer": 2,
            "explanation": "45% = 270 → 100% = 600 → 15% of 600 = 90"
        },
        {
            "id": "pr-86",
            "topicId": "percentage-ratio",
            "question": "A product's price increased by 5% to $630. What was its original price?",
            "options": ["$580", "$590", "$600", "$610"],
            "correctAnswer": 2,
            "explanation": "105% = $630 → 100% = 630/1.05 = $600"
        },
        {
            "id": "pr-87",
            "topicId": "percentage-ratio",
            "question": "If 11% of a number is 55, what is 89% of the same number?",
            "options": ["425", "435", "445", "455"],
            "correctAnswer": 2,
            "explanation": "11% = 55 → 100% = 500 → 89% of 500 = 445"
        },
        {
            "id": "pr-88",
            "topicId": "percentage-ratio",
            "question": "A company's revenue increased by 8% in Q1 and decreased by 3% in Q2. What is the net percentage change?",
            "options": ["4.76% increase", "4.86% increase", "4.96% increase", "5.06% increase"],
            "correctAnswer": 0,
            "explanation": "Net effect = (1.08 × 0.97) - 1 = 1.0476 - 1 = 4.76% increase"
        },
        {
            "id": "pr-89",
            "topicId": "percentage-ratio",
            "question": "If 42% of a number is 210, what is 58% of the same number?",
            "options": ["280", "285", "290", "295"],
            "correctAnswer": 2,
            "explanation": "42% = 210 → 100% = 500 → 58% of 500 = 290"
        },
        {
            "id": "pr-90",
            "topicId": "percentage-ratio",
            "question": "A city's population increased from 75,000 to 90,000. What is the percentage increase?",
            "options": ["18%", "20%", "22%", "25%"],
            "correctAnswer": 1,
            "explanation": "Increase = 15,000 → (15,000/75,000)×100 = 20%"
        },
        {
            "id": "pr-91",
            "topicId": "percentage-ratio",
            "question": "If 19% of a number is 95, what is 131% of the same number?",
            "options": ["635", "645", "655", "665"],
            "correctAnswer": 2,
            "explanation": "19% = 95 → 100% = 500 → 131% of 500 = 655"
        },
        {
            "id": "pr-92",
            "topicId": "percentage-ratio",
            "question": "A discount of 18% on $750 is equal to what percentage of $900?",
            "options": ["14%", "15%", "16%", "17%"],
            "correctAnswer": 1,
            "explanation": "18% of 750 = $135 → (135/900)×100 = 15%"
        },
        {
            "id": "pr-93",
            "topicId": "percentage-ratio",
            "question": "If 23% of a number is 115, what is 77% of the same number?",
            "options": ["375", "380", "385", "390"],
            "correctAnswer": 2,
            "explanation": "23% = 115 → 100% = 500 → 77% of 500 = 385"
        },
        {
            "id": "pr-94",
            "topicId": "percentage-ratio",
            "question": "A price increased by 15% and then decreased by 12%. What is the net percentage change?",
            "options": ["1.2% increase", "1.5% increase", "1.8% increase", "2.0% increase"],
            "correctAnswer": 0,
            "explanation": "Net effect = (1.15 × 0.88) - 1 = 1.012 - 1 = 1.2% increase"
        },
        {
            "id": "pr-95",
            "topicId": "percentage-ratio",
            "question": "What is 12% of a number whose 36% is 216?",
            "options": ["70", "72", "74", "76"],
            "correctAnswer": 1,
            "explanation": "36% = 216 → 100% = 600 → 12% of 600 = 72"
        },
        {
            "id": "pr-96",
            "topicId": "percentage-ratio",
            "question": "A car's value depreciated by 8% annually. If its current value is $38,416, what was its value 3 years ago?",
            "options": ["$46,000", "$47,000", "$48,000", "$49,000"],
            "correctAnswer": 2,
            "explanation": "Value = Original × (0.92)³ = 38,416 → Original = 38,416/0.778688 ≈ 48,000"
        },
        {
            "id": "pr-97",
            "topicId": "percentage-ratio",
            "question": "If 27% of a number is 135, what is 143% of the same number?",
            "options": ["705", "715", "725", "735"],
            "correctAnswer": 1,
            "explanation": "27% = 135 → 100% = 500 → 143% of 500 = 715"
        },
        {
            "id": "pr-98",
            "topicId": "percentage-ratio",
            "question": "A shop gives successive discounts of 10% and 12%. What is the equivalent single discount?",
            "options": ["20.8%", "21.2%", "21.6%", "22.0%"],
            "correctAnswer": 0,
            "explanation": "Net effect = 1 - (0.90 × 0.88) = 1 - 0.792 = 20.8% discount"
        },
        {
            "id": "pr-99",
            "topicId": "percentage-ratio",
            "question": "What is 8% of a number whose 24% is 144?",
            "options": ["46", "47", "48", "49"],
            "correctAnswer": 2,
            "explanation": "24% = 144 → 100% = 600 → 8% of 600 = 48"
        },
        {
            "id": "pr-100",
            "topicId": "percentage-ratio",
            "question": "A salary was first increased by 15% and then the new salary was increased by 10%. The total increase is what percent of the original salary?",
            "options": ["25.5%", "26.0%", "26.5%", "27.0%"],
            "correctAnswer": 2,
            "explanation": "Net effect = (1.15 × 1.10) - 1 = 1.265 - 1 = 26.5% increase"
        }
    
  

  ];
