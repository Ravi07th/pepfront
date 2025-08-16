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

// Import TCS NQT questions
export { allTCSNQTQuestions } from './data/tcsNQTQuestions';

// Import Cognizant questions
export { allCognizantQuestions } from './data/cognizantQuestions';

// Import Wipro questions
export { allWiproQuestions } from './data/wiproQuestions';

// Import Capgemini questions
export { allCapgeminiQuestions } from './data/capgeminiQuestions';

// Import Most Asked Coding Questions
export { allMostAskedQuestions } from './data/mostAskedQuestions';

// Create a combined MNC questions object
import { allAmazonQuestions } from './data/amazonQuestions';
import { allGoogleQuestions } from './data/googleQuestions';
import { allAccentureQuestions } from './data/accentureQuestions';
import { allMicrosoftQuestions } from './data/microsoftQuestions';
import { allTCSNQTQuestions } from './data/tcsNQTQuestions';
import { allCognizantQuestions } from './data/cognizantQuestions';
import { allWiproQuestions } from './data/wiproQuestions';
import { allCapgeminiQuestions } from './data/capgeminiQuestions';
import { allMostAskedQuestions } from './data/mostAskedQuestions';

export const mncCodingQuestions = {
  amazon: allAmazonQuestions,
  google: allGoogleQuestions,
  accenture: allAccentureQuestions,
  microsoft: allMicrosoftQuestions,
  tcsnqt: allTCSNQTQuestions,
  cognizant: allCognizantQuestions,
  wipro: allWiproQuestions,
  capgemini: allCapgeminiQuestions,
  top30: allMostAskedQuestions,
  // Add other companies here as we create them
};

// Export all questions as a single array
export const allMNCQuestions = [
  ...allAmazonQuestions,
  ...allGoogleQuestions,
  ...allAccentureQuestions,
  ...allMicrosoftQuestions,
  ...allTCSNQTQuestions,
  ...allCognizantQuestions,
  ...allWiproQuestions,
  ...allCapgeminiQuestions,
];

// Export sampleQuestions for backward compatibility
export const sampleQuestions = {
  amazon: allAmazonQuestions,
  google: allGoogleQuestions,
  accenture: allAccentureQuestions,
  microsoft: allMicrosoftQuestions,
  tcsnqt: allTCSNQTQuestions,
  cognizant: allCognizantQuestions,
  wipro: allWiproQuestions,
  capgemini: allCapgeminiQuestions,
  top30: allMostAskedQuestions,
  // Add other companies here as we create them
};
