import React from 'react';
import { BookOpen, Users, Navigation, Grid3X3, Puzzle } from 'lucide-react';
import PracticeComponent from '../common/PracticeComponent';
import { codingDecodingQuestions } from './data/codingDecodingData';
import { bloodRelationsQuestions } from './data/bloodRelationsData';
import { directionsDistanceQuestions } from './data/directionsDistanceData';
import { seatingArrangementsQuestions } from './data/seatingArrangementsData';
import { puzzlesQuestions } from './data/puzzlesData';

const LogicalReasoningPractice: React.FC = () => {
  const categories = [
    {
      id: 'coding-decoding',
      name: 'Coding-Decoding',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Pattern recognition and code interpretation'
    },
    {
      id: 'blood-relations',
      name: 'Blood Relations',
      icon: <Users className="w-5 h-5" />,
      description: 'Family tree and relationship problems'
    },
    {
      id: 'directions-distance',
      name: 'Directions & Distance',
      icon: <Navigation className="w-5 h-5" />,
      description: 'Direction and distance-based problems'
    },
    {
      id: 'seating-arrangements',
      name: 'Seating Arrangements',
      icon: <Grid3X3 className="w-5 h-5" />,
      description: 'Linear and circular seating puzzles'
    },
    {
      id: 'puzzles',
      name: 'Puzzles',
      icon: <Puzzle className="w-5 h-5" />,
      description: 'Logical puzzles and brain teasers'
    }
  ];

  const getQuestions = (topic: string) => {
    switch (topic) {
      case 'coding-decoding':
        return codingDecodingQuestions;
      case 'blood-relations':
        return bloodRelationsQuestions;
      case 'directions-distance':
        return directionsDistanceQuestions;
      case 'seating-arrangements':
        return seatingArrangementsQuestions;
      case 'puzzles':
        return puzzlesQuestions;
      default:
        return codingDecodingQuestions;
    }
  };

  const getTopicTitle = (topic: string) => {
    switch (topic) {
      case 'coding-decoding':
        return 'Coding-Decoding';
      case 'blood-relations':
        return 'Blood Relations';
      case 'directions-distance':
        return 'Directions & Distance';
      case 'seating-arrangements':
        return 'Seating Arrangements';
      case 'puzzles':
        return 'Puzzles';
      default:
        return 'Logical Reasoning';
    }
  };

  return (
    <PracticeComponent
      sectionName="Logical Reasoning"
      sectionIcon={<Puzzle className="w-6 h-6" />}
      categories={categories}
      getQuestions={getQuestions}
      getTopicTitle={getTopicTitle}
      navigatePath="/logical-reasoning/practice"
      backPath="/logical-reasoning"
    />
  );
};

export default LogicalReasoningPractice; 