import React from 'react';
import SectionPage from '@/components/common/SectionPage';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Link, 
  CheckCircle, 
  Puzzle, 
  MessageSquare, 
  FileText, 
  BookMarked 
} from 'lucide-react';

const VerbalSection: React.FC = () => {
  const navigate = useNavigate();
  const verbalTopics = [
    {
      id: 'reading-comprehension',
      name: 'Reading Comprehension',
      description: 'Practice reading comprehension with short and medium length passages.',
      icon: <BookOpen className="text-blue-600" />,
      totalQuestions: 60
    },
    {
      id: 'tenses-subject-verb-agreement',
      name: 'Tenses, Subject and Verb Agreement',
      description: 'Master sentence completion and paragraph organization.',
      icon: <Link className="text-green-600" />,
      totalQuestions: 60
    },
    {
      id: 'spotting-error',
      name: 'Spotting Error',
      description: 'Identify and correct grammatical errors in sentences.',
      icon: <CheckCircle className="text-purple-600" />,
      totalQuestions: 60
    },
    {
      id: 'para-jumbles',
      name: 'Para Jumbles',
      description: 'Arrange jumbled sentences in logical order.',
      icon: <Puzzle className="text-orange-600" />,
      totalQuestions: 60
    },
    {
      id: 'idioms-phrases',
      name: 'Idioms and Phrases',
      description: 'Enhance vocabulary and word usage skills.',
      icon: <MessageSquare className="text-red-600" />,
      totalQuestions: 60
    },
    {
      id: 'sentence-completion',
      name: 'Sentence Completion',
      description: 'Improve sentence structure and grammar usage.',
      icon: <FileText className="text-indigo-600" />,
      totalQuestions: 60
    },
    {
      id: 'active-passive-voice',
      name: 'Active and Passive Voice',
      description: 'Master English grammar rules and applications.',
      icon: <BookMarked className="text-teal-600" />,
      totalQuestions: 60
    }
  ];

  const handleStartTest = (topicId: string, type: 'practice' | 'test') => {
    console.log(`Starting ${type} for ${topicId}`);
    if (type === 'test') {
      // Navigate to instructions page first
      navigate(`/verbal-ability/instructions/${topicId}`);
    } else {
      // Navigate to formula page first (like logical reasoning)
      navigate(`/verbal-ability/formula/${topicId}`);
    }
  };

  return (
    <SectionPage
      title="Verbal Ability"
      subtitle="Master English language skills and comprehension"
      topics={verbalTopics}
      onStartTest={handleStartTest}
    />
  );
};

export default VerbalSection; 