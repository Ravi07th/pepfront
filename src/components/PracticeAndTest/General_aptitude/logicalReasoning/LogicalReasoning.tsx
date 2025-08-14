import React from 'react';
import SectionPage from '@/components/common/SectionPage';
import { 
  Code, 
  Users, 
  Navigation, 
  Grid3X3, 
  Puzzle, 
  Hash, 
  Brain, 
  FileText, 
  TrendingUp, 
  Target 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LogicalReasoning: React.FC = () => {
  const navigate = useNavigate();
  const logicalTopics = [
    {
      id: 'coding-decoding',
      name: 'Coding-Decoding',
      description: 'Master the art of pattern recognition and code interpretation.',
      icon: <Code className="text-blue-600" />,
      totalQuestions: 60
    },
    {
      id: 'blood-relations',
      name: 'Blood Relations',
      description: 'Solve complex family tree and relationship problems.',
      icon: <Users className="text-green-600" />,
      totalQuestions: 60
    },
    {
      id: 'directions-sense',
      name: 'Directions Sense',
      description: 'Navigate through direction and distance-based problems.',
      icon: <Navigation className="text-purple-600" />,
      totalQuestions: 60
    },
    {
      id: 'seating-arrangements',
      name: 'Seating Arrangements',
      description: 'Solve linear and circular seating arrangement puzzles.',
      icon: <Grid3X3 className="text-orange-600" />,
      totalQuestions: 60
    },
    {
      id: 'puzzles',
      name: 'Puzzles',
      description: 'Tackle various types of logical puzzles and brain teasers.',
      icon: <Puzzle className="text-red-600" />,
      totalQuestions: 60
    },
    {
      id: 'series',
      name: 'Series',
      description: 'Identify patterns in number, letter, and mixed series.',
      icon: <Hash className="text-indigo-600" />,
      totalQuestions: 60
    },
    {
      id: 'syllogisms',
      name: 'Syllogisms',
      description: 'Master logical reasoning with syllogisms and Venn diagrams.',
      icon: <Brain className="text-teal-600" />,
      totalQuestions: 60
    },
    {
      id: 'statement-assumption',
      name: 'Statement and Assumption',
      description: 'Analyze statements, assumptions, and conclusions.',
      icon: <FileText className="text-pink-600" />,
      totalQuestions: 60
    },
    {
      id: 'ranking-order',
      name: 'Ranking and Order',
      description: 'Solve ranking and ordering problems efficiently.',
      icon: <TrendingUp className="text-cyan-600" />,
      totalQuestions: 60
    },
    {
      id: 'analogies',
      name: 'Analogies',
      description: 'Find analogies and identify the odd element in groups.',
      icon: <Target className="text-yellow-600" />,
      totalQuestions: 60
    }
  ];

  const handleStartTest = (topicId: string, type: 'practice' | 'test') => {
    if (type === 'practice') {
      navigate(`/logical-reasoning/formula/${topicId}`);
    } else {
      // Handle mock test navigation - go to instructions first
      navigate(`/logical-reasoning/instructions/${topicId}`);
    }
  };

  return (
    <SectionPage
      title="Logical Reasoning"
      subtitle="Master analytical thinking and problem-solving skills"
      topics={logicalTopics}
      onStartTest={handleStartTest}
    />
  );
};

export default LogicalReasoning; 