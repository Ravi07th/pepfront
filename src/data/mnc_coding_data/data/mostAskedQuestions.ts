// Most Asked Coding Questions
// This file contains the most frequently asked coding questions from top companies
// Combined from Amazon, Google, Microsoft, Accenture, and TCS NQT

import { allAmazonQuestions } from './amazonQuestions';
import { allGoogleQuestions } from './googleQuestions';
import { allAccentureQuestions } from './accentureQuestions';
import { allMicrosoftQuestions } from './microsoftQuestions';
import { allTCSNQTQuestions } from './tcsNQTQuestions';

// Define the Question type
export interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string[];
  input1: string;
  input2: string;
  explanation: string;
  output1: string;
  output2: string;
  constraints: string;
  isCompleted?: boolean;
  timeEstimate?: string;
  successRate?: number;
  lastAttempted?: string;
  solutions?: {
    [languageId: string]: {
      [approachId: string]: {
        code: string;
        explanation: string;
        timeComplexity: string;
        spaceComplexity: string;
      };
    };
  };
}

// Helper function to remove duplicates based on question ID
// This ensures that if the same question appears in multiple company collections,
// it only appears once in the final list (first occurrence is kept)
const removeDuplicates = (questions: Question[]): Question[] => {
  const seen = new Set<string>();
  return questions.filter(question => {
    if (seen.has(question.id)) {
      return false;
    }
    seen.add(question.id);
    return true;
  });
};

// Helper function to sort by difficulty (Easy -> Medium -> Hard)
const sortByDifficulty = (questions: Question[]): Question[] => {
  const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
  return questions.sort((a, b) => {
    return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
  });
};

// Combine all questions from different companies, remove duplicates, and sort by difficulty
const allQuestions = [
  ...allAmazonQuestions,
  ...allGoogleQuestions,
  ...allAccentureQuestions,
  ...allMicrosoftQuestions,
  ...allTCSNQTQuestions
];

// Get statistics for logging
const totalQuestions = allQuestions.length;
const uniqueQuestions = removeDuplicates(allQuestions);
const finalQuestions = sortByDifficulty(uniqueQuestions);

export const allMostAskedQuestions: Question[] = finalQuestions;

// Export the combined questions
export default allMostAskedQuestions;

// Also export individual company questions for reference
export {
  allAmazonQuestions,
  allGoogleQuestions,
  allAccentureQuestions,
  allMicrosoftQuestions,
  allTCSNQTQuestions
};
