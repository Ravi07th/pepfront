export const englishComprehensionQuestions = [
  {
    id: 'ec-1',
    question: "Which sentence is grammatically correct?",
    options: [
      "Neither of the students have completed their homework.",
      "Neither of the students has completed their homework.",
      "Neither of the students have completed his homework.",
      "Neither of the students has completed his homework."
    ],
    correctAnswer: 1,
    explanation: "'Neither' is singular, so it takes 'has'. 'Their' is acceptable for gender-neutral reference.",
    difficulty: 'medium' as const
  },
  {
    id: 'ec-2',
    question: "Choose the correct passive voice: 'The chef prepared the meal.'",
    options: [
      "The meal was prepared by the chef.",
      "The meal is prepared by the chef.",
      "The meal has been prepared by the chef.",
      "The meal had been prepared by the chef."
    ],
    correctAnswer: 0,
    explanation: "Simple past active becomes simple past passive: was + past participle.",
    difficulty: 'easy' as const
  },
  {
    id: 'ec-3',
    question: "Identify the figure of speech: 'The wind whispered through the trees.'",
    options: ["Metaphor", "Simile", "Personification", "Alliteration"],
    correctAnswer: 2,
    explanation: "Personification gives human qualities (whispering) to non-human things (wind).",
    difficulty: 'medium' as const
  },
  {
    id: 'ec-4',
    question: "Choose the correct form: 'If I _____ you, I would study harder.'",
    options: ["was", "were", "am", "will be"],
    correctAnswer: 1,
    explanation: "In hypothetical conditions, use 'were' for all persons (subjunctive mood).",
    difficulty: 'hard' as const
  },
  {
    id: 'ec-5',
    question: "What does the idiom 'break the ice' mean?",
    options: [
      "To destroy something frozen",
      "To start a conversation",
      "To solve a problem",
      "To make someone angry"
    ],
    correctAnswer: 1,
    explanation: "'Break the ice' means to initiate conversation or interaction in a social setting.",
    difficulty: 'easy' as const
  }
];

// Generate remaining 235 questions programmatically for demo
for (let i = 6; i <= 240; i++) {
  englishComprehensionQuestions.push({
    id: `ec-${i}`,
    question: `English Comprehension Question ${i}: Select the grammatically correct sentence for case ${i}?`,
    options: [
      ` ${i}`,
      `Grammar option B for question ${i}`,
      `Grammar option C for question ${i}`,
      `Grammar option D for question ${i}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for English question ${i}: This tests grammar and comprehension skills.`,
    difficulty: (['easy', 'medium', 'hard'] as const)[Math.floor(Math.random() * 3)]
  });
}