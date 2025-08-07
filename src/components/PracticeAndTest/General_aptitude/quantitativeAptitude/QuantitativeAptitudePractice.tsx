import React from 'react';
import { Calculator, Percent, TrendingUp, Clock, Navigation, Droplets, Users, BarChart3, Target, Square, PieChart, Hash } from 'lucide-react';
import PracticeComponent from '../common/PracticeComponent';
import { numberSystemQuestions } from './data/numberSystemData';
import { percentageRatioQuestions } from './data/percentageRatioData';
import { profitLossQuestions } from './data/profit&lossData';
import { timeWorkQuestions } from './data/time&WorkData';
import { timeSpeedDistanceQuestions } from './data/timeSpeed&Distance';
import { mixtureAlligationQuestions } from './data/mixtureAlligationData';
import { simpleAndCompoundInterestQuestions } from './data/simple&CompoundInterestData';
import { pipeAndCisternQuestions } from './data/pipeAndCisternData';
import { averagesQuestions } from './data/averagesData';
import { permutationAndCombinationQuestions } from './data/permutationAndCombinationData';
import { probabilityQuestions } from './data/probabilityData';
import { algebraAndLinearEquationsQuestions } from './data/algebraAndlinearEquationsData';
import { dataInterpretationQuestions } from './data/dataInterpretationData';

const QuantitativeAptitudePractice: React.FC = () => {
  const categories = [
    {
      id: 'number-system',
      name: 'Number System',
      icon: <Hash className="w-5 h-5" />,
      description: 'HCF, LCM, ratios and proportions'
    },
    {
      id: 'percentage-ratio',
      name: 'Percentage & Ratio',
      icon: <Percent className="w-5 h-5" />,
      description: 'Percentage calculations and applications'
    },
    {
      id: 'profit-loss',
      name: 'Profit & Loss',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Business mathematics and transactions'
    },
    {
      id: 'time-work',
      name: 'Time & Work',
      icon: <Clock className="w-5 h-5" />,
      description: 'Work efficiency and time management'
    },
    {
      id: 'speed-distance',
      name: 'Speed & Distance',
      icon: <Navigation className="w-5 h-5" />,
      description: 'Motion problems and calculations'
    },
    {
      id: 'mixture-alligation',
      name: 'Mixture & Alligation',
      icon: <Droplets className="w-5 h-5" />,
      description: 'Mixing and alligation problems'
    },
    {
      id: 'simple-compound-interest',
      name: 'Simple & Compound Interest',
      icon: <Calculator className="w-5 h-5" />,
      description: 'Interest calculations and compound growth'
    },
    {
      id: 'pipe-cistern',
      name: 'Pipes & Cisterns',
      icon: <Users className="w-5 h-5" />,
      description: 'Pipe filling and emptying problems'
    },
    {
      id: 'averages',
      name: 'Averages',
      icon: <BarChart3 className="w-5 h-5" />,
      description: 'Average calculations and weighted averages'
    },
    {
      id: 'permutation-combination',
      name: 'Permutation & Combination',
      icon: <Target className="w-5 h-5" />,
      description: 'Counting techniques and arrangements'
    },
    {
      id: 'probability',
      name: 'Probability',
      icon: <Square className="w-5 h-5" />,
      description: 'Probability calculations and chance problems'
    },
    {
      id: 'algebra-linear-equations',
      name: 'Algebra & Linear Equations',
      icon: <Calculator className="w-5 h-5" />,
      description: 'Algebraic expressions and linear equations'
    },
    {
      id: 'data-interpretation',
      name: 'Data Interpretation',
      icon: <PieChart className="w-5 h-5" />,
      description: 'Tables, graphs, and chart analysis'
    }
  ];

  const getQuestions = (topic: string) => {
    switch (topic) {
      case 'number-system':
        return numberSystemQuestions;
      case 'percentage-ratio':
        return percentageRatioQuestions;
      case 'profit-loss':
        return profitLossQuestions;
      case 'time-work':
        return timeWorkQuestions;
      case 'speed-distance':
        return timeSpeedDistanceQuestions;
      case 'mixture-alligation':
        return mixtureAlligationQuestions;
      case 'simple-compound-interest':
        return simpleAndCompoundInterestQuestions;
      case 'pipe-cistern':
        return pipeAndCisternQuestions;
      case 'averages':
        return averagesQuestions;
      case 'permutation-combination':
        return permutationAndCombinationQuestions;
      case 'probability':
        return probabilityQuestions;
      case 'algebra-linear-equations':
        return algebraAndLinearEquationsQuestions;
      case 'data-interpretation':
        return dataInterpretationQuestions;
      default:
        return numberSystemQuestions;
    }
  };

  const getTopicTitle = (topic: string) => {
    switch (topic) {
      case 'number-system':
        return 'Number System';
      case 'percentage-ratio':
        return 'Percentage & Ratio';
      case 'profit-loss':
        return 'Profit & Loss';
      case 'time-work':
        return 'Time & Work';
      case 'speed-distance':
        return 'Speed & Distance';
      case 'mixture-alligation':
        return 'Mixture & Alligation';
      case 'simple-compound-interest':
        return 'Simple & Compound Interest';
      case 'pipe-cistern':
        return 'Pipes & Cisterns';
      case 'averages':
        return 'Averages';
      case 'permutation-combination':
        return 'Permutation & Combination';
      case 'probability':
        return 'Probability';
      case 'algebra-linear-equations':
        return 'Algebra & Linear Equations';
      case 'data-interpretation':
        return 'Data Interpretation';
      default:
        return 'Quantitative Aptitude';
    }
  };

  return (
    <PracticeComponent
      sectionName="Quantitative Aptitude"
      sectionIcon={<Calculator className="w-6 h-6" />}
      categories={categories}
      getQuestions={getQuestions}
      getTopicTitle={getTopicTitle}
      navigatePath="/quantitative-aptitude/practice"
      backPath="/quantitative-aptitude"
    />
  );
};

export default QuantitativeAptitudePractice; 