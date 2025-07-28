import { generalAptitudeQuestions } from './generalAptitude';
import { arithmeticAptitudeQuestions } from './arithmeticAptitudeQuestions';
import { verbalReasoningQuestions } from './verbalReasoning';
import { englishComprehensionQuestions } from './englishComprehension';
import { numberSystemQuestions } from './numberSystemQuestions';
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
  isPlacementTest?: boolean;
}

export const categories: Category[] = [
  {
    id: 'placement-test',
    name: 'Placement Test',
    description: 'Comprehensive test with questions from multiple sections (90 questions, 120 mins)',
    icon: '🏆',
    color: 'secondary',
    totalQuestions: 90
  },
  {
    id: 'general-aptitude',
    name: 'General Aptitude',
    description: 'Test your overall aptitude skills including basic mathematics, logical reasoning, and general knowledge.',
    icon: '🧠',
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
  },
  //My code
  {
    id: 'number-system',
    name: 'Number System',
    description: 'Test your overall aptitude skills including basic mathematics, logical reasoning, and general knowledge.',
    icon: '🧠',
    color: 'primary',
    totalQuestions: 240
  },
];

// Utility function to randomly select questions from a category
export const getRandomQuestions = (categoryId: string, count: number = 60): Question[] => {
  if (categoryId === 'placement-test') {
    // For placement test, get 30 questions from each of the three categories
    const generalQuestions = questionBank['general-aptitude'] || [];
    //my code 
    const numberQuestion = questionBank['number-system'] || [];

    const arithmeticQuestions = questionBank['arithmetic-aptitude'] || [];
    const verbalQuestions = questionBank['verbal-reasoning'] || [];
    
    const shuffledGeneral = [...generalQuestions];
    for (let i = shuffledGeneral.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledGeneral[i], shuffledGeneral[j]] = [shuffledGeneral[j], shuffledGeneral[i]];
    }
    
    const shuffledArithmetic = [...arithmeticQuestions];
    for (let i = shuffledArithmetic.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArithmetic[i], shuffledArithmetic[j]] = [shuffledArithmetic[j], shuffledArithmetic[i]];
    }
    
   

    
    const shuffledVerbal = [...verbalQuestions];
    for (let i = shuffledVerbal.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledVerbal[i], shuffledVerbal[j]] = [shuffledVerbal[j], shuffledVerbal[i]];
    }
    // My code
     const shuffledNumber = [...numberQuestion];
    for (let i = shuffledNumber.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNumber[i], shuffledNumber[j]] = [shuffledNumber[j], shuffledNumber[i]];
    }
    
    
    // Combine and shuffle all selected questions
    const allQuestions = [
      ...shuffledGeneral.slice(0, 30),
      //mycode
      ...shuffledNumber.slice(0,30),
      ...shuffledArithmetic.slice(0, 30),
      ...shuffledVerbal.slice(0, 30)
    ];
    
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    return allQuestions;
  }
  
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

// Question bank mapping
export const questionBank: Record<string, Question[]> = {
  'general-aptitude': generalAptitudeQuestions,
  //My code
  'number-aptitude': numberSystemQuestions,
  'arithmetic-aptitude': arithmeticAptitudeQuestions,
  'verbal-reasoning': verbalReasoningQuestions,
  'english-comprehension': englishComprehensionQuestions,
  'data-interpretation': generalAptitudeQuestions, // Using same for now
  'online-aptitude-test': generalAptitudeQuestions, // Using same for now
  'data-interpretation-test': generalAptitudeQuestions, // Using same for now
  'verbal-ability': englishComprehensionQuestions, // Using same for now
  'logical-reasoning': generalAptitudeQuestions // Using same for now
};

export const questionsByCategory = {
  "General Aptitude": generalAptitudeQuestions,
  //My code
  "Number System": numberSystemQuestions,
  "Arithmetic Aptitude": arithmeticAptitudeQuestions,
  "Verbal and Reasoning": verbalReasoningQuestions,
  "English Comprehension": englishComprehensionQuestions
};