export const arithmeticAptitudeQuestions = [
  {
    id: 'aa-1',
    question: "What is 15% of 240?",
    options: ["36", "32", "38", "34"],
    correctAnswer: 0,
    explanation: "15% of 240 = (15/100) × 240 = 36",
    difficulty: 'easy' as const
  },
  {
    id: 'aa-2',
    question: "If a train travels 60 km in 45 minutes, what is its speed in km/hr?",
    options: ["75 km/hr", "80 km/hr", "85 km/hr", "90 km/hr"],
    correctAnswer: 1,
    explanation: "Speed = Distance/Time = 60/(45/60) = 60/(3/4) = 80 km/hr",
    difficulty: 'medium' as const
  },
  {
    id: 'aa-3',
    question: "A shopkeeper sells an article for Rs. 480 and gains 20%. What is the cost price?",
    options: ["Rs. 400", "Rs. 420", "Rs. 440", "Rs. 460"],
    correctAnswer: 0,
    explanation: "If CP = x, then SP = x + 20% of x = 1.2x = 480, so x = 400",
    difficulty: 'medium' as const
  },
  {
    id: 'aa-4',
    question: "What is the compound interest on Rs. 1000 for 2 years at 10% per annum?",
    options: ["Rs. 200", "Rs. 210", "Rs. 220", "Rs. 230"],
    correctAnswer: 1,
    explanation: "CI = P(1+r/100)^n - P = 1000(1.1)^2 - 1000 = 1210 - 1000 = 210",
    difficulty: 'hard' as const
  },
  {
    id: 'aa-5',
    question: "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    options: ["35", "37", "39", "41"],
    correctAnswer: 0,
    explanation: "Sum of 5 numbers = 5×27 = 135. Sum of 4 numbers = 4×25 = 100. Excluded number = 135-100 = 35",
    difficulty: 'medium' as const
  }
];

// Generate remaining 235 questions programmatically for demo
for (let i = 6; i <= 240; i++) {
  arithmeticAptitudeQuestions.push({
    id: `aa-${i}`,
    question: `Arithmetic Question ${i}: Calculate the mathematical expression for problem ${i}?`,
    options: [
      `${i * 2}`,
      `${i * 3}`,
      `${i * 4}`,
      `${i * 5}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for Arithmetic question ${i}: This involves mathematical calculations and formulas.`,
    difficulty: (['easy', 'medium', 'hard'] as const)[Math.floor(Math.random() * 3)]
  });
}