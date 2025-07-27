import { Question } from './questions';

export const verbalReasoningQuestions: Question[] = [
  {
    id: 'vr-1',
    question: "Choose the word that is most similar to 'GREGARIOUS':",
    options: ["Sociable", "Solitary", "Aggressive", "Timid"],
    correctAnswer: 0,
    explanation: "Gregarious means sociable or fond of company.",
    difficulty: 'medium' as const
  },
  {
    id: 'vr-2',
    question: "Complete the analogy: Book : Read :: Food : ?",
    options: ["Cook", "Eat", "Buy", "Serve"],
    correctAnswer: 1,
    explanation: "Books are meant to be read, and food is meant to be eaten.",
    difficulty: 'easy' as const
  },
  {
    id: 'vr-3',
    question: "Choose the correctly spelled word:",
    options: ["Occassion", "Occasion", "Ocasion", "Occation"],
    correctAnswer: 1,
    explanation: "The correct spelling is 'Occasion' with double 'c' and single 's'.",
    difficulty: 'easy' as const
  },
  {
    id: 'vr-4',
    question: "What is the antonym of 'AUGMENT'?",
    options: ["Increase", "Enhance", "Diminish", "Amplify"],
    correctAnswer: 2,
    explanation: "Augment means to increase, so its antonym is diminish.",
    difficulty: 'medium' as const
  },
  {
    id: 'vr-5',
    question: "Choose the word that doesn't belong: Happy, Joyful, Elated, Morose",
    options: ["Happy", "Joyful", "Elated", "Morose"],
    correctAnswer: 3,
    explanation: "Morose means sad/gloomy, while others mean happy/cheerful.",
    difficulty: 'easy' as const
  }
];

// Generate remaining 235 questions programmatically for demo
for (let i = 6; i <= 240; i++) {
  verbalReasoningQuestions.push({
    id: `vr-${i}`,
    question: `Verbal Reasoning Question ${i}: Choose the most appropriate word for context ${i}?`,
    options: [
      `Word A for question ${i}`,
      `Word B for question ${i}`,
      `Word C for question ${i}`,
      `Word D for question ${i}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for Verbal question ${i}: This tests vocabulary and reasoning skills.`,
    difficulty: (['easy', 'medium', 'hard'] as const)[Math.floor(Math.random() * 3)] as 'easy' | 'medium' | 'hard'
  });
}