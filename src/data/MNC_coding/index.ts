// MNC Coding Questions Index
// Export all company-specific coding questions

// Import Amazon questions
export { allAmazonQuestions } from './data/amazonQuestions';
export type { Question } from './data/amazonQuestions';

// Import Google questions
export { allGoogleQuestions } from './data/googleQuestions';

// Import Accenture questions
export { allAccentureQuestions } from './data/accentureQuestions';

// Import Microsoft questions
export { allMicrosoftQuestions } from './data/microsoftQuestions';

// Create a combined MNC questions object
import { allAmazonQuestions } from './data/amazonQuestions';
import { allGoogleQuestions } from './data/googleQuestions';
import { allAccentureQuestions } from './data/accentureQuestions';
import { allMicrosoftQuestions } from './data/microsoftQuestions';

export const mncCodingQuestions = {
  amazon: allAmazonQuestions,
  google: allGoogleQuestions,
  accenture: allAccentureQuestions,
  microsoft: allMicrosoftQuestions,
  // Add other companies here as we create them
  // tcs: allTcsQuestions,
  // cognizant: allCognizantQuestions,
  // top30: allTop30Questions
};

// Export all questions as a single array
export const allMNCQuestions = [
  ...allAmazonQuestions,
  ...allGoogleQuestions,
  ...allAccentureQuestions,
  ...allMicrosoftQuestions,
  // ...allTcsQuestions,
  // ...allCognizantQuestions,
  // ...allTop30Questions
];

// Export sampleQuestions for backward compatibility
export const sampleQuestions = {
  amazon: allAmazonQuestions,
  google: allGoogleQuestions,
  accenture: allAccentureQuestions,
  microsoft: allMicrosoftQuestions,
  // Add other companies here as we create them
  // tcs: allTcsQuestions,
  // cognizant: allCognizantQuestions,
  // top30: allTop30Questions
};
