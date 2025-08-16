export interface Company {
  id: string;
  name: string;
  logo: string;
  color: string;
  description: string;
  examTypes: ExamType[];
}

export interface ExamType {
  id: string;
  name: string;
  description: string;
  sections: ExamSection[];
}

export interface Subsection {
  id: string;
  name: string;
  questionCount: number;
  duration: number; // in minutes
}

export interface ExamSection {
  id: string;
  name: string;
  questionCount: number;
  duration: number; // in minutes
  subsections?: Subsection[]; // Optional subsections for nested structure
}

export interface Question {
  id: string;
  sectionId: string;
  subsectionId?: string; // Optional for nested structure
  question: string;
  questionType?: 'single-choice' | 'multiple-choice' | 'true-false' | 'drag-drop';
  options: string[];
  correctAnswer: number | number[]; // Single number for single-choice, array for multiple-choice
  explanation?: string;
  dragDropItems?: string[]; // For drag & drop questions
  difficulty?: 'easy' | 'medium' | 'hard';
  topic?: string;
}

export interface ExamState {
  currentSection: number;
  currentQuestion: number;
  answers: Record<string, number>;
  timeLeft: Record<string, number>;
  isCompleted: boolean;
  isStarted: boolean;
}

export interface ExamResult {
  totalQuestions: number;
  answeredQuestions: number;
  notAnsweredQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number;
  percentage: number;
  sectionResults: SectionResult[];
  timeTaken: number;
  passed: boolean;
}

export interface SectionResult {
  sectionId: string;
  sectionName: string;
  totalQuestions: number;
  answeredQuestions: number;
  notAnsweredQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number;
  percentage: number;
}

export interface UserProgress {
  examId: string;
  companyId: string;
  examTypeId: string;
  startTime: Date;
  endTime?: Date;
  state: ExamState;
  result?: ExamResult;
}

export type QuestionStatus = 
  | 'not-visited'
  | 'not-answered'
  | 'current'
  | 'answered'
  | 'marked'
  | 'answered-marked';

export interface ExamInstructions {
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