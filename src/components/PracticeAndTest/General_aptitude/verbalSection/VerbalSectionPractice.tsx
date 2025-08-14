import React from 'react';
import { 
  BookOpen, 
  Link, 
  CheckCircle, 
  Puzzle, 
  MessageSquare, 
  FileText, 
  BookMarked 
} from 'lucide-react';
import PracticeComponent from '../common/PracticeComponent';
import { readingComprehensionQuestions } from './data/readingComprehensionData';
import { tenseSubjectVerbAgreementQuestions } from './data/tenseSubjectVerbAgreementData';
import { sportingErrorQuestions } from './data/sportingErrorData';
import { paraJumblesQuestions } from './data/paraJumblesData';
import { idiomsPhraseQuestions } from './data/idiomsPhraseData';
import { sentenceCompletionQuestions } from './data/sentenceCompletionData';
import { activepassiveVoiceQuestions } from './data/activepassiveVoiceData';

const VerbalSectionPractice: React.FC = () => {
  const categories = [
    {
      id: 'reading-comprehension',
      name: 'Reading Comprehension',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Practice reading comprehension with short and medium length passages'
    },
    {
      id: 'tenses-subject-verb-agreement',
      name: 'Tenses, Subject and Verb Agreement',
      icon: <Link className="w-5 h-5" />,
      description: 'Master sentence completion and paragraph organization'
    },
    {
      id: 'spotting-error',
      name: 'Spotting Error',
      icon: <CheckCircle className="w-5 h-5" />,
      description: 'Identify and correct grammatical errors in sentences'
    },
    {
      id: 'para-jumbles',
      name: 'Para Jumbles',
      icon: <Puzzle className="w-5 h-5" />,
      description: 'Arrange jumbled sentences in logical order'
    },
    {
      id: 'idioms-phrases',
      name: 'Idioms and Phrases',
      icon: <MessageSquare className="w-5 h-5" />,
      description: 'Enhance vocabulary and word usage skills'
    },
    {
      id: 'sentence-completion',
      name: 'Sentence Completion',
      icon: <FileText className="w-5 h-5" />,
      description: 'Improve sentence structure and grammar usage'
    },
    {
      id: 'active-passive-voice',
      name: 'Active and Passive Voice',
      icon: <BookMarked className="w-5 h-5" />,
      description: 'Master English grammar rules and applications'
    }
  ];

  const getQuestions = (topic: string) => {
    switch (topic) {
      case 'reading-comprehension':
        return readingComprehensionQuestions;
      case 'tenses-subject-verb-agreement':
        return tenseSubjectVerbAgreementQuestions;
      case 'spotting-error':
        return sportingErrorQuestions;
      case 'para-jumbles':
        return paraJumblesQuestions;
      case 'idioms-phrases':
        return idiomsPhraseQuestions;
      case 'sentence-completion':
        return sentenceCompletionQuestions;
      case 'active-passive-voice':
        return activepassiveVoiceQuestions;
      default:
        return readingComprehensionQuestions;
    }
  };

  const getTopicTitle = (topic: string) => {
    switch (topic) {
      case 'reading-comprehension':
        return 'Reading Comprehension';
      case 'tenses-subject-verb-agreement':
        return 'Tenses, Subject and Verb Agreement';
      case 'spotting-error':
        return 'Spotting Error';
      case 'para-jumbles':
        return 'Para Jumbles';
      case 'idioms-phrases':
        return 'Idioms and Phrases';
      case 'sentence-completion':
        return 'Sentence Completion';
      case 'active-passive-voice':
        return 'Active and Passive Voice';
      default:
        return 'Verbal Section';
    }
  };

  return (
    <PracticeComponent
      sectionName="Verbal Section"
      sectionIcon={<MessageSquare className="w-6 h-6" />}
      categories={categories}
      getQuestions={getQuestions}
      getTopicTitle={getTopicTitle}
      navigatePath="/verbal-ability/practice"
      backPath="/verbal-ability"
    />
  );
};

export default VerbalSectionPractice; 