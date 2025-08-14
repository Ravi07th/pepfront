export interface QuantitativeTopic {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  duration: number; // in minutes
}

export interface QuantitativeQuestion {
  id: string;
  topicId: string;
  question: string;
  questionType?: 'single-choice' | 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: number | number[];
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard' | string;
  diagram?: string;
}

export interface QuantitativeExamState {
  currentTopic: number;
  currentQuestion: number;
  answers: Record<string, number>;
  timeLeft: Record<string, number>;
  isCompleted: boolean;
  isStarted: boolean;
}

export interface QuantitativeExamResult {
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  score: number;
  percentage: number;
  topicResults: TopicResult[];
  timeTaken: number;
  passed: boolean;
}

export interface TopicResult {
  topicId: string;
  topicName: string;
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  score: number;
  percentage: number;
}

export type QuantitativeQuestionStatus = 
  | 'not-visited'
  | 'not-answered'
  | 'current'
  | 'answered'
  | 'marked'
  | 'answered-marked';

export interface QuantitativeExamInstructions {
  title: string;
  description: string;
  rules: string[];
  colorLegend: ColorLegendItem[];
  additionalNotes?: string[];
}

export interface ColorLegendItem {
  color: string;
  label: string;
  description: string;
} 