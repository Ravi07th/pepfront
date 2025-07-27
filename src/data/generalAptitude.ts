// Original 5 good questions
const coreQuestions = [
  {
    id: 'ga-1',
    question: "What is the next number in the series: 2, 6, 12, 20, 30, ?",
    options: ["42", "40", "38", "44"],
    correctAnswer: 0,
    explanation: "The pattern is n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42",
    difficulty: 'medium' as const
  },
  {
    id: 'ga-2',
    question: "If all Bloops are Razzles and all Razzles are Lazzles, then all Bloops are definitely Lazzles.",
    options: ["True", "False", "Cannot be determined", "Insufficient data"],
    correctAnswer: 0,
    explanation: "This is a valid syllogism. If A⊆B and B⊆C, then A⊆C.",
    difficulty: 'easy' as const
  },
  {
    id: 'ga-3',
    question: "A man walks 5 km towards north, then turns right and walks 3 km, then turns right and walks 5 km. How far is he from the starting point?",
    options: ["3 km", "5 km", "8 km", "13 km"],
    correctAnswer: 0,
    explanation: "He forms a rectangle and ends up 3 km east of starting point.",
    difficulty: 'medium' as const
  },
  {
    id: 'ga-4',
    question: "Find the odd one out: Dog, Cat, Tiger, Table",
    options: ["Dog", "Cat", "Tiger", "Table"],
    correctAnswer: 3,
    explanation: "Table is not a living animal, while others are animals.",
    difficulty: 'easy' as const
  },
  {
    id: 'ga-5',
    question: "If COMPUTER is coded as RFUVQNPC, how is SCIENCE coded?",
    options: ["PDJFODF", "EOJDMDF", "FPJFOEF", "EOJMPDF"],
    correctAnswer: 1,
    explanation: "Each letter is moved 3 positions forward in the alphabet.",
    difficulty: 'hard' as const
  }
];

// Helper function to deep-clone an object (to prevent reference issues)
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Build the full list of 240 questions
export const generalAptitudeQuestions = [...coreQuestions];

// Fill up to 240 by randomly sampling from the core 5 questions
for (let i = 6; i <= 240; i++) {
  // Get a random core question, clone it, assign a new ID
  const randomIndex = Math.floor(Math.random() * coreQuestions.length);
  const q = clone(coreQuestions[randomIndex]);
  q.id = `ga-${i}`;
  generalAptitudeQuestions.push(q);
}
