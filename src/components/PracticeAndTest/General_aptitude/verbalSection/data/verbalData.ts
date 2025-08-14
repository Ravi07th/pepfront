import { readingComprehensionQuestions } from './readingComprehensionData';
import { sentenceCompletionQuestions } from './sentenceCompletionData';
import { activepassiveVoiceQuestions } from './activepassiveVoiceData';
import { idiomsPhraseQuestions } from './idiomsPhraseData';
import { paraJumblesQuestions } from './paraJumblesData';
import { sportingErrorQuestions } from './sportingErrorData';
import { tenseSubjectVerbAgreementQuestions } from './tenseSubjectVerbAgreementData';

// Export all verbal section questions
export {
  readingComprehensionQuestions,
  sentenceCompletionQuestions,
  activepassiveVoiceQuestions,
  idiomsPhraseQuestions,
  paraJumblesQuestions,
  sportingErrorQuestions,
  tenseSubjectVerbAgreementQuestions
};

// Export as verbal reasoning questions (combining all types)
export const verbalReasoningQuestions = [
  ...readingComprehensionQuestions,
  ...sentenceCompletionQuestions,
  ...activepassiveVoiceQuestions,
  ...idiomsPhraseQuestions,
  ...paraJumblesQuestions,
  ...sportingErrorQuestions,
  ...tenseSubjectVerbAgreementQuestions
];

// Export as vocabulary questions (using sentence completion and idioms)
export const vocabularyQuestions = [
  ...sentenceCompletionQuestions,
  ...idiomsPhraseQuestions
];

// Export as grammar questions (using grammar-related topics)
export const grammarQuestions = [
  ...activepassiveVoiceQuestions,
  ...sportingErrorQuestions,
  ...tenseSubjectVerbAgreementQuestions
];
