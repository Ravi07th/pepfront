// Export all exam pattern components and data
export { default as ExamPatternDisplay } from './ExamPatternDisplay';
export { default as DetailedSyllabus } from './DetailedSyllabus';
export { 
  companyExamPatterns2025,
  ExamPattern,
  ExamSection,
  getExamPatternByCompany,
  getAllCompanies,
  getExamPatternsByYear,
  getExamPatternsByDifficulty
} from './CompanyExamPatterns2025';

// Re-export types for convenience
export type { ExamPattern, ExamSection } from './CompanyExamPatterns2025'; 