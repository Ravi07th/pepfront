const corePercentage = [
    {
    id: 'percentage-1',
    question: "What is 20% of 150?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    explanation: "20% of 150 = (20/100) × 150 = 30.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-2',
    question: "A price is increased by 15% and then decreased by 15%. What is the net change in percentage?",
    options: ["0%", "2.25% decrease", "2.25% increase", "15% decrease"],
    correctAnswer: 1,
    explanation: "After 15% increase and 15% decrease: net 2.25% decrease.",
    difficulty: 'medium'
  },
  {
    id: 'percentage-3',
    question: "If 45 is 60% of a number, what is the number?",
    options: ["60", "70", "75", "80"],
    correctAnswer: 2,
    explanation: "0.60x = 45 ⇒ x = 45/0.6 = 75.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-4',
    question: "A student scores 72 out of 90 marks. What is the percentage score?",
    options: ["75%", "80%", "82%", "85%"],
    correctAnswer: 1,
    explanation: "(72/90)×100 = 80%.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-5',
    question: "A salary is cut by 12%. By what percentage must it be increased to restore it to original?",
    options: ["12%", "13.64%", "14%", "15%"],
    correctAnswer: 1,
    explanation: "After a 12% cut, need a 13.64% increase to return to original.",
    difficulty: 'medium'
  },
  {
    id: 'percentage-6',
    question: "In a class, 30% of students are boys. If there are 14 boys, how many students are there in total?",
    options: ["42", "45", "46", "48"],
    correctAnswer: 3,
    explanation: "0.30x = 14 ⇒ x = 14/0.30 ≈ 46.67 ⇒ 48 (nearest option).",
    difficulty: 'medium'
  },
  {
    id: 'percentage-7',
    question: "The price of an article is marked at $250. If a 12% discount is given, what is the sale price?",
    options: ["$210", "$220", "$215", "$225"],
    correctAnswer: 1,
    explanation: "250 − (12% of 250) = 250 − 30 = 220.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-8',
    question: "Compound interest at 10% per annum on a certain sum for 2 years is Rs. 231. What is the sum?",
    options: ["2000", "1100", "2100", "2200"],
    correctAnswer: 1,
    explanation: "CI = P[(1.1)² − 1] = 0.21P = 231 ⇒ P = 1100 .",
    difficulty: 'hard'
  },
  {
    id: 'percentage-9',
    question: "A population increases by 5% annually. In how many years will it double approximately?",
    options: ["14 years", "15 years", "16 years", "17 years"],
    correctAnswer: 0,
    explanation: "Rule of 70: doubling time ≈70/5 = 14 years.",
    difficulty: 'hard'
  },
  {
    id: 'percentage-10',
    question: "If the ratio of A to B is 3:5 and A’s share is increased by 20%, what is the new ratio?",
    options: ["3:4", "9:16", "36:25", "18:25"],
    correctAnswer: 3,
    explanation: "A=3x→3.6x, B=5x ⇒ ratio =3.6x:5x=18:25.",
    difficulty: 'medium'
  },
  {
    id: 'percentage-11',
    question: "If 80% of A = 50% of B and B = x% of A, then the value of x is:",
    options: ["400", "300", "160", "150"],
    correctAnswer: 2,
    explanation: "0.8A = 0.5B ⇒ B = (0.8/0.5)A = 1.6A ⇒ x = 160%.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-12',
    question: "If x is 80% of y, what percent of y is x?",
    options: ["75%", "80%", "100%", "125%"],
    correctAnswer: 1,
    explanation: "x = 80% of y, so x/y = 80%.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-13',
    question: "If 8% of x is the same as 4% of y, then 20% of x is the same as:",
    options: ["10% of y", "16% of y", "80% of y", "50% of y"],
    correctAnswer: 0,
    explanation: "0.08x = 0.04y ⇒ x = 0.5y ⇒ 0.2x = 0.1y (10% of y).",
    difficulty: 'easy'
  },
  {
    id: 'percentage-14',
    question: "A student multiplied a number by 3/5 instead of 5/3. What is the percentage error in the calculation?",
    options: ["44%", "34%", "54%", "64%"],
    correctAnswer: 3,
    explanation: "True value = (5/3)x, wrong = (3/5)x ⇒ error = |5/3–3/5|/(5/3)×100 = 64%.",
    difficulty: 'medium'
  },
  {
    id: 'percentage-15',
    question: "If p% of p is 36, then p is equal to:",
    options: ["3600", "600", "60", "15"],
    correctAnswer: 2,
    explanation: "p²/100 = 36 ⇒ p² = 3600 ⇒ p = 60.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-16',
    question: "2 is what percent of 50?",
    options: ["2%", "2.5%", "4%", "5%"],
    correctAnswer: 2,
    explanation: "2/50×100 = 4%.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-17',
    question: "2/3 is what percent of 1/3?",
    options: ["50%", "33⅓%", "150%", "200%"],
    correctAnswer: 3,
    explanation: "(2/3)/(1/3) = 2 ⇒ 200%.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-18',
    question: "0.15% of 33⅓% of 10000 is:",
    options: ["5", "150", "0.05", "105"],
    correctAnswer: 0,
    explanation: "0.0015×(1/3)% of 10000 ≈ 0.0015×333.33 = 5.",
    difficulty: 'medium'
  },
  {
    id: 'percentage-19',
    question: "30% of x is 72. The value of x is:",
    options: ["216", "240", "480", "640"],
    correctAnswer: 1,
    explanation: "0.3x = 72 ⇒ x = 72/0.3 = 240.",
    difficulty: 'easy'
  },
  {
    id: 'percentage-20',
    question: "If 15% of (A + B) = 25% of (A − B), then what per cent of B is equal to A?",
    options: ["10%", "60%", "200%", "400%"],
    correctAnswer: 3,
    explanation: "15(A + B) = 25(A − B) ⇒ 40B = 10A ⇒ A/B = 4 ⇒ 400%.",
    difficulty: 'medium'
  }
]