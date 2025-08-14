// Mock Test Components
export { default as MockTestHome } from './MockTestHome';

// Mock Test Types
export interface MockTestCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  questionCount: number;
  duration: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  color: string;
  bgColor: string;
  route: string;
}
