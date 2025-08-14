export interface LogicalTopic {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  duration: number; // in minutes
}

export interface LogicalQuestion {
  id: string;
  topicId: string;
  question: string;
  questionType?: 'single-choice' | 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: number | number[];
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard' | string;
}

export interface LogicalExamState {
  currentTopic: number;
  currentQuestion: number;
  answers: Record<string, number>;
  timeLeft: Record<string, number>;
  isCompleted: boolean;
  isStarted: boolean;
}

export interface LogicalExamResult {
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

export type LogicalQuestionStatus = 
  | 'not-visited'
  | 'not-answered'
  | 'current'
  | 'answered'
  | 'marked'
  | 'answered-marked';

export interface LogicalExamInstructions {
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