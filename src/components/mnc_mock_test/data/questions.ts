import { Question } from '../types';
import { tcsNqtQuestions, shuffleQuestions } from './tcsNqtQuestions';

import { cognizantGencQuestions } from './cognizantGencData';
import { wiproQuestions } from './wiproData';
import { accentureQuestions } from './accentureData';
import { infosysQuestions } from './infosysData';
import { microsoftQuestions } from './microsoftData';
import { hclQuestions } from './hclData';
import { capgeminiQuestions } from './capgeminiData';


// TCS NQT Questions (imported from separate file)
export { tcsNqtQuestions } from './tcsNqtQuestions';




// Cognizant GenC Questions (imported from separate file)
export { cognizantGencQuestions } from './cognizantGencData';

// Wipro Questions (imported from separate file)
export { wiproQuestions } from './wiproData';

// Accenture Questions (imported from separate file)
export { accentureQuestions } from './accentureData';



// Helper function to get questions by company and exam type
export const getQuestionsByCompanyAndExam = (companyId: string, examTypeId: string): Question[] => {
  switch (`${companyId}-${examTypeId}`) {
    case 'tcs-nqt-nqt':
      return tcsNqtQuestions;
    case 'tcs-nqt':
      return tcsNqtQuestions;


    case 'cognizant-genc':
      return cognizantGencQuestions;
    case 'cognizant-genc-elevate':
      return cognizantGencQuestions; // Using same questions for now
    case 'wipro-mock-test':
      return wiproQuestions;
    case 'accenture-mock-test':
      return accentureQuestions;
    case 'infosys-online-aptitude-test':
      return infosysQuestions;
    case 'microsoft-azure-fundamentals':
      return microsoftQuestions;
    case 'hcl-online-screening':
      return hclQuestions;
    case 'capgemini-online-assessment':
      return capgeminiQuestions;

    default:
      return [];
  }
};

// Helper function to get shuffled questions by company and exam
export const getShuffledQuestionsByCompanyAndExam = (companyId: string, examTypeId: string): Question[] => {
  let questions: Question[] = [];
  
  if (companyId === 'tcs-nqt' && examTypeId === 'nqt') {
    questions = tcsNqtQuestions;


  } else if (companyId === 'cognizant') {
    questions = cognizantGencQuestions; // Using cognizantGencQuestions for now
  } else if (companyId === 'wipro') {
    questions = wiproQuestions; // Using wiproQuestions for now
  } else if (companyId === 'accenture') {
    questions = accentureQuestions; // Using accentureQuestions for now
  } else if (companyId === 'infosys') {
    questions = infosysQuestions; // Using infosysQuestions for now
  } else if (companyId === 'microsoft') {
    questions = getRandomMicrosoftQuestions(); // Use random selection for Microsoft
  } else if (companyId === 'hcl') {
    questions = hclQuestions; // Using hclQuestions for now
  } else if (companyId === 'capgemini') {
    questions = capgeminiQuestions; // Using capgeminiQuestions for now
  }
  
  return shuffleQuestions(questions);
};

// Helper function to get limited questions by section with specified counts
export const getLimitedQuestionsByCompanyAndExam = (companyId: string, examTypeId: string): Question[] => {
  let allQuestions: Question[] = [];
  
  // Load questions based on company and exam type
  if (companyId === 'tcs-nqt' && examTypeId === 'nqt') {
    allQuestions = tcsNqtQuestions;


  } else if (companyId === 'cognizant' && examTypeId === 'genc') {
    allQuestions = cognizantGencQuestions;
  } else if (companyId === 'wipro' && examTypeId === 'mock-test') {
    allQuestions = wiproQuestions;
  } else if (companyId === 'accenture' && examTypeId === 'mock-test') {
    allQuestions = accentureQuestions;
  } else if (companyId === 'infosys' && examTypeId === 'online-aptitude-test') {
    allQuestions = infosysQuestions;
  } else if (companyId === 'microsoft' && examTypeId === 'azure-fundamentals') {
    allQuestions = getRandomMicrosoftQuestions();
  } else if (companyId === 'hcl' && examTypeId === 'online-screening') {
    allQuestions = hclQuestions;
  } else if (companyId === 'capgemini' && examTypeId === 'online-assessment') {
    allQuestions = capgeminiQuestions;
  }
  
  // If no questions found, return empty array
  if (allQuestions.length === 0) {
    console.warn(`No questions found for ${companyId}-${examTypeId}`);
    return [];
  }
  
  // Define the required question counts for each section based on company
  let sectionLimits: Record<string, number> = {};
  
  if (companyId === 'tcs-nqt' && examTypeId === 'nqt') {
    sectionLimits = {
      'numerical-ability': 20,      // Section 1: 20 questions
      'reasoning-ability': 20,      // Section 2: 20 questions
      'verbal-ability': 25,         // Section 3: 25 questions
      'advanced-quants-logical': 15 // Section 4: 15 questions
    };

  } else if (companyId === 'infosys' && examTypeId === 'online-aptitude-test') {
    sectionLimits = {
      'logical-reasoning': 15,             // Section 1: 15 questions
      'quantitative-aptitude': 10,         // Section 2: 10 questions
      'verbal-ability': 40                 // Section 3: 40 questions
    };
  } else if (companyId === 'cognizant' && examTypeId === 'genc') {
    sectionLimits = {
      'quantitative-aptitude': 16,        // Quantitative Aptitude: 16 questions
      'logical-reasoning': 14,            // Logical Reasoning: 14 questions
      'verbal-ability': 25                // Verbal Ability: 25 questions
    };
  } else if (companyId === 'wipro' && examTypeId === 'mock-test') {
    sectionLimits = {
      'quantitative-aptitude': 16,        // Quantitative Aptitude: 16 questions
      'logical-reasoning': 14,            // Logical Reasoning: 14 questions
      'verbal-ability': 18                // Verbal Ability: 18 questions
    };
  } else if (companyId === 'accenture' && examTypeId === 'mock-test') {
    sectionLimits = {
      'verbal-ability': 17,               // Verbal Ability: 17 questions
      'critical-reasoning': 18,           // Critical Reasoning: 18 questions
      'abstract-reasoning': 15,           // Abstract Reasoning: 15 questions
      'pseudocode': 18,                   // Pseudocode: 18 questions
      'ms-office-computer-fundamentals': 12, // MS Office & Computer Fundamentals: 12 questions
      'networking-cloud-security': 10     // Networking / Cloud / Security: 10 questions
    };
  } else if (companyId === 'hcl' && examTypeId === 'online-screening') {
    sectionLimits = {
      'numerical-aptitude': 15,           // Numerical Aptitude: 15 questions
      'logical-reasoning': 15,            // Logical Reasoning: 15 questions
      'verbal-ability': 15,               // Verbal Ability: 15 questions
      'computer-fundamentals': 30         // Computer Fundamentals: 30 questions
    };
  } else if (companyId === 'capgemini' && examTypeId === 'online-assessment') {
    sectionLimits = {
      'technical-mcq': 30,                // Technical MCQ: 30 questions
      'english-communication': 30,        // English Communication: 30 questions
      'game-based-aptitude': 4,          // Game-based Aptitude: 4 questions
      'behavioural-competency': 100       // Behavioural Competency: 100 questions
    };
  } else {
    // For other companies, return all questions without limits
    return allQuestions;
  }
  
  const limitedQuestions: Question[] = [];
  
  // Process each section
  Object.entries(sectionLimits).forEach(([sectionId, limit]) => {
    const sectionQuestions = allQuestions.filter(q => q.sectionId === sectionId);
    
    if (sectionQuestions.length > 0) {
      // Shuffle the questions for this section
      const shuffledSectionQuestions = shuffleQuestions([...sectionQuestions]);
      
      // Take only the specified number of questions
      const selectedQuestions = shuffledSectionQuestions.slice(0, limit);
      
      limitedQuestions.push(...selectedQuestions);
    } else {
      console.warn(`No questions found for section ${sectionId} in ${companyId}-${examTypeId}`);
    }
  });
  
  console.log(`Returning ${limitedQuestions.length} questions for ${companyId}-${examTypeId}`);
  return limitedQuestions;
};

// Helper function to get random Microsoft questions based on section requirements
const getRandomMicrosoftQuestions = (): Question[] => {
  const allMicrosoftQuestions = microsoftQuestions;
  
  // Separate questions by section
  const cloudConceptsQuestions = allMicrosoftQuestions.filter(q => q.sectionId === 'cloud-concepts');
  const azureArchitectureQuestions = allMicrosoftQuestions.filter(q => q.sectionId === 'azure-architecture-services');
  const azureManagementQuestions = allMicrosoftQuestions.filter(q => q.sectionId === 'azure-management-governance');
  
  // Randomly select questions for each section based on the specified ranges
  const getRandomQuestions = (questions: Question[], minCount: number, maxCount: number): Question[] => {
    const shuffled = shuffleQuestions([...questions]); // Create a copy and shuffle
    const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    return shuffled.slice(0, count);
  };
  
  // Select questions for each section
  const selectedCloudConcepts = getRandomQuestions(cloudConceptsQuestions, 12, 15);
  const selectedAzureArchitecture = getRandomQuestions(azureArchitectureQuestions, 17, 20);
  const selectedAzureManagement = getRandomQuestions(azureManagementQuestions, 15, 18);
  
  // Combine all selected questions
  return [...selectedCloudConcepts, ...selectedAzureArchitecture, ...selectedAzureManagement];
};

// Helper function to get questions by section
export const getQuestionsBySection = (companyId: string, examTypeId: string, sectionId: string): Question[] => {
  const allQuestions = getQuestionsByCompanyAndExam(companyId, examTypeId);
  return allQuestions.filter(question => question.sectionId === sectionId);
};

// Helper function to get shuffled questions by section
export const getShuffledQuestionsBySection = (companyId: string, examTypeId: string, sectionId: string): Question[] => {
  const allQuestions = getShuffledQuestionsByCompanyAndExam(companyId, examTypeId);
  return shuffleQuestions(allQuestions.filter(q => q.sectionId === sectionId));
};

// Helper function to get limited questions by section
export const getLimitedQuestionsBySection = (companyId: string, examTypeId: string, sectionId: string): Question[] => {
  const allQuestions = getLimitedQuestionsByCompanyAndExam(companyId, examTypeId);
  return allQuestions.filter(q => q.sectionId === sectionId);
}; 