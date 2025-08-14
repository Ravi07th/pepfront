export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  icon?: string;
}

export const categories: Category[] = [
  {
    id: 'general-aptitude',
    name: 'General Aptitude',
    description: 'Basic aptitude questions covering various topics',
    questionCount: 50
  },
  {
    id: 'verbal-ability',
    name: 'Verbal Ability',
    description: 'English language and communication skills',
    questionCount: 40
  },
  {
    id: 'logical-reasoning',
    name: 'Logical Reasoning',
    description: 'Analytical and logical thinking questions',
    questionCount: 45
  },
  {
    id: 'quantitative-aptitude',
    name: 'Quantitative Aptitude',
    description: 'Mathematics and numerical ability',
    questionCount: 60
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Coding and programming concepts',
    questionCount: 80
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Computer science and technical concepts',
    questionCount: 70
  }
];

export const questions: Question[] = [
  {
    id: 1,
    text: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
    options: ["24", "32", "30", "28"],
    correctAnswer: 1,
    explanation: "Each number is multiplied by 2 to get the next number. 16 × 2 = 32",
    category: "general-aptitude",
    difficulty: "easy"
  },
  {
    id: 2,
    text: "Which of the following is a prime number?",
    options: ["15", "21", "23", "25"],
    correctAnswer: 2,
    explanation: "23 is a prime number as it has no divisors other than 1 and itself",
    category: "general-aptitude",
    difficulty: "medium"
  },
  {
    id: 3,
    text: "What is the synonym of 'Eloquent'?",
    options: ["Silent", "Articulate", "Confused", "Rude"],
    correctAnswer: 1,
    explanation: "Eloquent means fluent or persuasive in speaking",
    category: "general-aptitude",
    difficulty: "medium"
  },
  {
    id: 4,
    text: "What is the antonym of 'Benevolent'?",
    options: ["Kind", "Generous", "Malevolent", "Charitable"],
    correctAnswer: 2,
    explanation: "Malevolent means having or showing a wish to do evil to others",
    category: "verbal-ability",
    difficulty: "medium"
  },
  {
    id: 5,
    text: "Choose the correct form: 'Neither the students nor the teacher _____ present.'",
    options: ["was", "were", "is", "are"],
    correctAnswer: 0,
    explanation: "When 'neither...nor' is used, the verb agrees with the closer subject",
    category: "verbal-ability",
    difficulty: "hard"
  },
  {
    id: 6,
    text: "If all roses are flowers and some flowers are red, then:",
    options: ["All roses are red", "Some roses are red", "No roses are red", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "The given statements don't provide enough information to determine the relationship between roses and red",
    category: "logical-reasoning",
    difficulty: "medium"
  },
  {
    id: 7,
    text: "Complete the pattern: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    correctAnswer: 1,
    explanation: "The difference between consecutive terms increases by 2: 4, 6, 8, 10, 12",
    category: "logical-reasoning",
    difficulty: "hard"
  },
  {
    id: 8,
    text: "A train travels 300 km in 4 hours. What is its speed in km/h?",
    options: ["60", "65", "70", "75"],
    correctAnswer: 3,
    explanation: "Speed = Distance/Time = 300/4 = 75 km/h",
    category: "quantitative-aptitude",
    difficulty: "easy"
  },
  {
    id: 9,
    text: "If x + y = 10 and x - y = 4, what is the value of x?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "Adding the equations: 2x = 14, so x = 7",
    category: "quantitative-aptitude",
    difficulty: "medium"
  },
  {
    id: 10,
    text: "What is the output of: console.log(2 + '2')?",
    options: ["4", "22", "NaN", "Error"],
    correctAnswer: 1,
    explanation: "JavaScript converts the number to string and concatenates: '2' + '2' = '22'",
    category: "programming",
    difficulty: "easy"
  },
  {
    id: 11,
    text: "What is the time complexity of binary search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 1,
    explanation: "Binary search divides the search space in half each time, giving O(log n) complexity",
    category: "programming",
    difficulty: "medium"
  },
  {
    id: 12,
    text: "What is a stack data structure?",
    options: ["LIFO", "FIFO", "Random access", "Tree structure"],
    correctAnswer: 0,
    explanation: "Stack follows Last In First Out (LIFO) principle",
    category: "technical",
    difficulty: "easy"
  },
  {
    id: 13,
    text: "What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "High Tech Transfer Process", "Home Transfer Protocol", "Hyper Transfer Protocol"],
    correctAnswer: 0,
    explanation: "HTTP stands for HyperText Transfer Protocol",
    category: "technical",
    difficulty: "easy"
  }
];

// Question bank organized by category
export const questionBank: Record<string, Record<string, Question[]>> = {
  'general-aptitude': {
    'basic': [
      {
        id: 1,
        text: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: ["24", "32", "30", "28"],
        correctAnswer: 1,
        explanation: "Each number is multiplied by 2 to get the next number. 16 × 2 = 32",
        category: "general-aptitude",
        difficulty: "easy"
      },
      {
        id: 2,
        text: "Which of the following is a prime number?",
        options: ["15", "21", "23", "25"],
        correctAnswer: 2,
        explanation: "23 is a prime number as it has no divisors other than 1 and itself",
        category: "general-aptitude",
        difficulty: "medium"
      }
    ],
    'advanced': [
      {
        id: 3,
        text: "What is the synonym of 'Eloquent'?",
        options: ["Silent", "Articulate", "Confused", "Rude"],
        correctAnswer: 1,
        explanation: "Eloquent means fluent or persuasive in speaking",
        category: "general-aptitude",
        difficulty: "medium"
      }
    ]
  },
  'verbal-ability': {
    'vocabulary': [
      {
        id: 4,
        text: "What is the antonym of 'Benevolent'?",
        options: ["Kind", "Generous", "Malevolent", "Charitable"],
        correctAnswer: 2,
        explanation: "Malevolent means having or showing a wish to do evil to others",
        category: "verbal-ability",
        difficulty: "medium"
      }
    ],
    'grammar': [
      {
        id: 5,
        text: "Choose the correct form: 'Neither the students nor the teacher _____ present.'",
        options: ["was", "were", "is", "are"],
        correctAnswer: 0,
        explanation: "When 'neither...nor' is used, the verb agrees with the closer subject",
        category: "verbal-ability",
        difficulty: "hard"
      }
    ]
  },
  'logical-reasoning': {
    'deduction': [
      {
        id: 6,
        text: "If all roses are flowers and some flowers are red, then:",
        options: ["All roses are red", "Some roses are red", "No roses are red", "Cannot be determined"],
        correctAnswer: 3,
        explanation: "The given statements don't provide enough information to determine the relationship between roses and red",
        category: "logical-reasoning",
        difficulty: "medium"
      }
    ],
    'induction': [
      {
        id: 7,
        text: "Complete the pattern: 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        correctAnswer: 1,
        explanation: "The difference between consecutive terms increases by 2: 4, 6, 8, 10, 12",
        category: "logical-reasoning",
        difficulty: "hard"
      }
    ]
  },
  'quantitative-aptitude': {
    'arithmetic': [
      {
        id: 8,
        text: "A train travels 300 km in 4 hours. What is its speed in km/h?",
        options: ["60", "65", "70", "75"],
        correctAnswer: 3,
        explanation: "Speed = Distance/Time = 300/4 = 75 km/h",
        category: "quantitative-aptitude",
        difficulty: "easy"
      }
    ],
    'algebra': [
      {
        id: 9,
        text: "If x + y = 10 and x - y = 4, what is the value of x?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        explanation: "Adding the equations: 2x = 14, so x = 7",
        category: "quantitative-aptitude",
        difficulty: "medium"
      }
    ]
  },
  'programming': {
    'basics': [
      {
        id: 10,
        text: "What is the output of: console.log(2 + '2')?",
        options: ["4", "22", "NaN", "Error"],
        correctAnswer: 1,
        explanation: "JavaScript converts the number to string and concatenates: '2' + '2' = '22'",
        category: "programming",
        difficulty: "easy"
      }
    ],
    'algorithms': [
      {
        id: 11,
        text: "What is the time complexity of binary search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 1,
        explanation: "Binary search divides the search space in half each time, giving O(log n) complexity",
        category: "programming",
        difficulty: "medium"
      }
    ]
  },
  'technical': {
    'computer-science': [
      {
        id: 12,
        text: "What is a stack data structure?",
        options: ["LIFO", "FIFO", "Random access", "Tree structure"],
        correctAnswer: 0,
        explanation: "Stack follows Last In First Out (LIFO) principle",
        category: "technical",
        difficulty: "easy"
      }
    ],
    'networking': [
      {
        id: 13,
        text: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "High Tech Transfer Process", "Home Transfer Protocol", "Hyper Transfer Protocol"],
        correctAnswer: 0,
        explanation: "HTTP stands for HyperText Transfer Protocol",
        category: "technical",
        difficulty: "easy"
      }
    ]
  }
};

// Helper function to get random questions
export const getRandomQuestions = (categoryId: string, count: number): Question[] => {
  if (!questionBank[categoryId]) return [];

  // Combine all subsections' questions
  const allQuestions: Question[] = Object.values(questionBank[categoryId]).flat();

  if (allQuestions.length <= count) return allQuestions;

  // Shuffle and return first 'count'
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
