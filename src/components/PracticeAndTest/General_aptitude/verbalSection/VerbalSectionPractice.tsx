import React from 'react';
import { MessageSquare, BookOpen, FileText, Book, Brain } from 'lucide-react';
import PracticeComponent from '../common/PracticeComponent';
import { 
  readingComprehensionQuestions, 
  sentenceCompletionQuestions, 
  vocabularyQuestions, 
  grammarQuestions, 
  verbalReasoningQuestions 
} from './data/verbalData';

const VerbalSectionPractice: React.FC = () => {
  const categories = [
    {
      id: 'reading-comprehension',
      name: 'Reading Comprehension',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Passage analysis and understanding'
    },
    {
      id: 'sentence-completion',
      name: 'Sentence Completion',
      icon: <FileText className="w-5 h-5" />,
      description: 'Fill in the blanks and context'
    },
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      icon: <Book className="w-5 h-5" />,
      description: 'Word meanings and usage'
    },
    {
      id: 'grammar',
      name: 'Grammar',
      icon: <MessageSquare className="w-5 h-5" />,
      description: 'Grammar rules and corrections'
    },
    {
      id: 'verbal-reasoning',
      name: 'Verbal Reasoning',
      icon: <Brain className="w-5 h-5" />,
      description: 'Logical thinking and analogies'
    }
  ];

  const getQuestions = (topic: string) => {
    switch (topic) {
      case 'reading-comprehension':
        return readingComprehensionQuestions;
      case 'sentence-completion':
        return sentenceCompletionQuestions;
      case 'vocabulary':
        return vocabularyQuestions;
      case 'grammar':
        return grammarQuestions;
      case 'verbal-reasoning':
        return verbalReasoningQuestions;
      default:
        return readingComprehensionQuestions;
    }
  };

  const getTopicTitle = (topic: string) => {
    switch (topic) {
      case 'reading-comprehension':
        return 'Reading Comprehension';
      case 'sentence-completion':
        return 'Sentence Completion';
      case 'vocabulary':
        return 'Vocabulary';
      case 'grammar':
        return 'Grammar';
      case 'verbal-reasoning':
        return 'Verbal Reasoning';
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