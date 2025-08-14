import React from 'react';
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
import PracticeComponent from '../common/PracticeComponent';
import { codingDecodingQuestions } from './data/codingDecodingData';
import { bloodRelationsQuestions } from './data/bloodRelationsData';
import { directionsDistanceQuestions } from './data/DirectionSenseData';
import { seatingArrangementsQuestions } from './data/seatingArrangementsData';
import { puzzlesQuestions } from './data/puzzlesData';
import { seriesQuestions } from './data/SeriesData';
import { syllogismsQuestions } from './data/syllogismsData';
import { statementAssumptionQuestions } from './data/StatementAssumptionDtat';
import { rankingOrderQuestions } from './data/rankingOrderData';
import { analogiesQuestions } from './data/AnalogiesData';

const LogicalReasoningPractice: React.FC = () => {
  const categories = [
    {
      id: 'coding-decoding',
      name: 'Coding-Decoding',
      icon: <Code className="w-5 h-5" />,
      description: 'Pattern recognition and code interpretation'
    },
    {
      id: 'blood-relations',
      name: 'Blood Relations',
      icon: <Users className="w-5 h-5" />,
      description: 'Family tree and relationship problems'
    },
    {
      id: 'directions-sense',
      name: 'Directions Sense',
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
    },
    {
      id: 'series',
      name: 'Series',
      icon: <Hash className="w-5 h-5" />,
      description: 'Number, letter, and mixed series patterns'
    },
    {
      id: 'syllogisms',
      name: 'Syllogisms',
      icon: <Brain className="w-5 h-5" />,
      description: 'Logical reasoning with syllogisms'
    },
    {
      id: 'statement-assumption',
      name: 'Statement & Assumption',
      icon: <FileText className="w-5 h-5" />,
      description: 'Analyze statements and assumptions'
    },
    {
      id: 'ranking-order',
      name: 'Ranking & Order',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Ranking and ordering problems'
    },
    {
      id: 'analogies',
      name: 'Analogies',
      icon: <Target className="w-5 h-5" />,
      description: 'Find analogies and identify patterns'
    }
  ];

  const getQuestions = (topic: string) => {
    switch (topic) {
      case 'coding-decoding':
        return codingDecodingQuestions;
      case 'blood-relations':
        return bloodRelationsQuestions;
      case 'directions-sense':
        return directionsDistanceQuestions;
      case 'seating-arrangements':
        return seatingArrangementsQuestions;
      case 'puzzles':
        return puzzlesQuestions;
      case 'series':
        return seriesQuestions;
      case 'syllogisms':
        return syllogismsQuestions;
      case 'statement-assumption':
        return statementAssumptionQuestions;
      case 'ranking-order':
        return rankingOrderQuestions;
      case 'analogies':
        return analogiesQuestions;
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
      case 'directions-sense':
        return 'Directions Sense';
      case 'seating-arrangements':
        return 'Seating Arrangements';
      case 'puzzles':
        return 'Puzzles';
      case 'series':
        return 'Series';
      case 'syllogisms':
        return 'Syllogisms';
      case 'statement-assumption':
        return 'Statement & Assumption';
      case 'ranking-order':
        return 'Ranking & Order';
      case 'analogies':
        return 'Analogies';
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