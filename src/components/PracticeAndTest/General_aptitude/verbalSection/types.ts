export interface VerbalTopic {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  duration: number; // in minutes
}

export interface VerbalQuestion {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  passage?: string;
}

export type VerbalQuestionStatus = 
  | 'not-visited'
  | 'not-answered'
  | 'answered'
  | 'marked'
  | 'answered-marked'
  | 'current';

export interface VerbalExamState {
  currentQuestion: number;
  answers: Record<string, number | number[]>;
  timeLeft: number;
  markedForReview: Record<string, boolean>;
  examCompleted: boolean;
  showSolutions: boolean;
  examStartTime: number | null;
  visitedQuestions: Set<string>;
  actualTimeTaken: number;
  isSubmitting: boolean;
} 