import React from 'react';
import SectionPage from '@/components/common/SectionPage';
import { 
  Hash, 
  Calculator, 
  Percent, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3, 
  Target, 
  Square, 
  Navigation,
  Droplets
} from 'lucide-react';

const QuantitativeAptitude: React.FC = () => {
  const quantitativeTopics = [
    {
      id: 'number-system',
      name: 'Number System',
      description: 'Master divisibility, HCF & LCM, and remainder problems.',
      icon: <Hash className="text-blue-600" />,
      totalQuestions: 60
    },
    {
      id: 'ages',
      name: 'Ages',
      description: 'Master age-related problems.',
      icon: <Users className="text-cyan-600" />,
      totalQuestions: 60
    },
    {
      id: 'percentage-ratio',
      name: 'Percentage & Ratio',
      description: 'Master percentage calculations and ratio-proportion problems.',
      icon: <Percent className="text-purple-600" />,
      totalQuestions: 60
    },
    {
      id: 'profit-loss',
      name: 'Profit & Loss',
      description: 'Solve business mathematics and profit-loss problems.',
      icon: <TrendingUp className="text-orange-600" />,
      totalQuestions: 60
    },
    {
      id: 'time-work',
      name: 'Time & Work',
      description: 'Solve work efficiency and time management problems.',
      icon: <Clock className="text-red-600" />,
      totalQuestions: 60
    },
    {
      id: 'speed-distance',
      name: 'Speed & Distance',
      description: 'Master time, speed, and distance relationship problems.',
      icon: <Navigation className="text-indigo-600" />,
      totalQuestions: 60
    },
    {
      id: 'mixture-alligation',
      name: 'Mixture & Alligation',
      description: 'Master mixing problems and alligation techniques.',
      icon: <Droplets className="text-teal-600" />,
      totalQuestions: 60
    },
    {
      id: 'simple-compound-interest',
      name: 'Simple & Compound Interest',
      description: 'Learn interest calculation and compound growth problems.',
      icon: <Calculator className="text-green-600" />,
      totalQuestions: 60
    },
    {
      id: 'pipe-cistern',
      name: 'Pipes & Cisterns',
      description: 'Solve pipe filling and emptying problems.',
      icon: <Users className="text-cyan-600" />,
      totalQuestions: 60
    },
    {
      id: 'averages',
      name: 'Averages',
      description: 'Master average calculations and weighted averages.',
      icon: <BarChart3 className="text-pink-600" />,
      totalQuestions: 60
    },
    {
      id: 'permutation-combination',
      name: 'Permutation & Combination',
      description: 'Learn counting techniques and arrangement problems.',
      icon: <Target className="text-yellow-600" />,
      totalQuestions: 60
    },
    {
      id: 'probability',
      name: 'Probability',
      description: 'Master probability calculations and chance problems.',
      icon: <Square className="text-emerald-600" />,
      totalQuestions: 60
    },
    {
      id: 'algebra-linear-equations',
      name: 'Algebra & Linear Equations',
      description: 'Solve algebraic expressions and linear equation problems.',
      icon: <Calculator className="text-blue-600" />,
      totalQuestions: 60
    }
  ];

  const handleStartTest = (topicId: string, type: 'practice' | 'test') => {
    console.log(`Starting ${type} for ${topicId}`);
    if (type === 'test') {
      // Navigate to instructions page first
      window.location.href = `/quantitative-aptitude/instructions/${topicId}`;
    } else {
      // Navigate to formula page first (like logical reasoning)
      window.location.href = `/quantitative-aptitude/formula/${topicId}`;
    }
  };

  return (
    <SectionPage
      title="Quantitative Aptitude"
      subtitle="Master mathematical concepts and problem-solving techniques"
      topics={quantitativeTopics}
      onStartTest={handleStartTest}
    />
  );
};

export default QuantitativeAptitude; 