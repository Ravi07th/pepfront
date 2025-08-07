import React from 'react';
import { Hash, Calculator, Percent, TrendingUp, Clock, Users, BarChart3, Target, Square, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FormulaPage from '../common/FormulaPage';

interface Formula {
  title: string;
  description: string;
  examples: string[];
}

interface TopicFormulas {
  [key: string]: Formula[];
}

const QuantitativeAptitudeFormula: React.FC = () => {
  const navigate = useNavigate();

  const formulas: TopicFormulas = {
    'number-system': [
      {
        title: "Divisibility Rules",
        description: "Quick ways to check if a number is divisible by another:",
        examples: [
          "Divisible by 2: Last digit is even (0,2,4,6,8)",
          "Divisible by 3: Sum of digits is divisible by 3",
          "Divisible by 4: Last two digits form a number divisible by 4",
          "Divisible by 5: Last digit is 0 or 5",
          "Divisible by 6: Divisible by both 2 and 3",
          "Divisible by 8: Last three digits form a number divisible by 8",
          "Divisible by 9: Sum of digits is divisible by 9",
          "Divisible by 10: Last digit is 0"
        ]
      },
      {
        title: "HCF & LCM",
        description: "Methods to find Highest Common Factor and Least Common Multiple:",
        examples: [
          "HCF by Prime Factorization: Find common prime factors with lowest powers",
          "LCM by Prime Factorization: Find all prime factors with highest powers",
          "HCF × LCM = Product of two numbers",
          "For three numbers: LCM(a,b,c) = LCM(LCM(a,b), c)",
          "For three numbers: HCF(a,b,c) = HCF(HCF(a,b), c)"
        ]
      },
      {
        title: "Remainder Theorems",
        description: "Important theorems for remainder problems:",
        examples: [
          "Euler's Theorem: If a and n are coprime, a^φ(n) ≡ 1 (mod n)",
          "Fermat's Little Theorem: If p is prime, a^(p-1) ≡ 1 (mod p)",
          "Chinese Remainder Theorem: For simultaneous congruences",
          "Wilson's Theorem: (p-1)! ≡ -1 (mod p) for prime p"
        ]
      }
    ],
    'percentage-ratio': [
      {
        title: "Percentage Basics",
        description: "Fundamental percentage calculations:",
        examples: [
          "Percentage = (Part/Whole) × 100",
          "Part = (Percentage × Whole) / 100",
          "Whole = (Part × 100) / Percentage",
          "Percentage Change = ((New - Old) / Old) × 100",
          "Successive Percentage: Final = Original × (1 ± p1/100) × (1 ± p2/100)"
        ]
      },
      {
        title: "Ratio & Proportion",
        description: "Key concepts and formulas:",
        examples: [
          "Ratio: a:b = a/b (simplified form)",
          "Proportion: a:b :: c:d means a/b = c/d",
          "Mean Proportion: If a:b :: b:c, then b² = ac",
          "Third Proportion: If a:b :: b:c, then c = b²/a",
          "Fourth Proportion: If a:b :: c:d, then d = bc/a"
        ]
      },
      {
        title: "Mixture & Alligation",
        description: "Methods for mixture problems:",
        examples: [
          "Alligation Rule: (Cheaper - Mean) / (Mean - Dearer) = Quantity of Dearer / Quantity of Cheaper",
          "Weighted Average: (n1×a1 + n2×a2) / (n1 + n2)",
          "Replacement: Final = Initial × (1 - r/100)^n",
          "Successive Replacement: Use alligation for multiple replacements"
        ]
      }
    ],
    'profit-loss-interest': [
      {
        title: "Profit & Loss",
        description: "Essential formulas for business mathematics:",
        examples: [
          "Profit = Selling Price - Cost Price",
          "Loss = Cost Price - Selling Price",
          "Profit % = (Profit / CP) × 100",
          "Loss % = (Loss / CP) × 100",
          "Selling Price = CP × (1 ± Profit/Loss % / 100)",
          "Cost Price = SP / (1 ± Profit/Loss % / 100)"
        ]
      },
      {
        title: "Simple Interest",
        description: "Basic interest calculations:",
        examples: [
          "Simple Interest = (Principal × Rate × Time) / 100",
          "Amount = Principal + Simple Interest",
          "Principal = (SI × 100) / (Rate × Time)",
          "Rate = (SI × 100) / (Principal × Time)",
          "Time = (SI × 100) / (Principal × Rate)"
        ]
      },
      {
        title: "Compound Interest",
        description: "Compound interest formulas:",
        examples: [
          "Amount = P(1 + r/100)^n",
          "Compound Interest = P[(1 + r/100)^n - 1]",
          "For half-yearly: Rate = r/2, Time = 2n",
          "For quarterly: Rate = r/4, Time = 4n",
          "Difference between CI and SI = P(r/100)² (for 2 years)"
        ]
      }
    ],
    'time-speed-distance': [
      {
        title: "Basic Formulas",
        description: "Fundamental relationships:",
        examples: [
          "Speed = Distance / Time",
          "Distance = Speed × Time",
          "Time = Distance / Speed",
          "Average Speed = Total Distance / Total Time",
          "Relative Speed = Sum of speeds (opposite direction)",
          "Relative Speed = Difference of speeds (same direction)"
        ]
      },
      {
        title: "Trains & Platforms",
        description: "Special cases for train problems:",
        examples: [
          "Time to cross platform = (Train length + Platform length) / Speed",
          "Time to cross pole = Train length / Speed",
          "Time to cross another train = (L1 + L2) / (S1 ± S2)",
          "Time to cross man = Train length / Speed"
        ]
      },
      {
        title: "Boats & Streams",
        description: "Upstream and downstream problems:",
        examples: [
          "Downstream Speed = Boat Speed + Stream Speed",
          "Upstream Speed = Boat Speed - Stream Speed",
          "Boat Speed = (Downstream + Upstream) / 2",
          "Stream Speed = (Downstream - Upstream) / 2"
        ]
      }
    ],
    'time-work-pipes': [
      {
        title: "Time & Work",
        description: "Work efficiency problems:",
        examples: [
          "Work = Efficiency × Time",
          "Efficiency = Work / Time",
          "Time = Work / Efficiency",
          "If A can do work in 'a' days, work done in 1 day = 1/a",
          "If A and B work together: 1/A + 1/B = 1/Total Time",
          "Efficiency ratio = Time ratio (inverse)"
        ]
      },
      {
        title: "Pipes & Cisterns",
        description: "Pipe filling and emptying problems:",
        examples: [
          "Filling pipe: Positive efficiency",
          "Emptying pipe: Negative efficiency",
          "Net efficiency = Sum of all pipe efficiencies",
          "Time to fill/empty = 1 / Net efficiency",
          "If pipe A fills in 'a' hours, B empties in 'b' hours: 1/a - 1/b = Net rate"
        ]
      }
    ]
  };

  const getTopicTitle = (topic: string): string => {
    const topicMap: { [key: string]: string } = {
      'number-system': 'Number System',
      'simplification-approximation': 'Simplification & Approximation',
      'percentage-ratio': 'Percentage & Ratio-Proportion',
      'profit-loss-interest': 'Profit & Loss, Simple & Compound Interest',
      'time-speed-distance': 'Time, Speed & Distance',
      'time-work-pipes': 'Time & Work, Pipes & Cisterns',
      'averages-mixtures': 'Averages & Mixtures',
      'permutation-probability': 'Permutation & Combination, Probability',
      'mensuration-geometry': 'Mensuration & Geometry',
      'algebra-equations': 'Algebra & Linear Equations',
      'data-interpretation': 'Data Interpretation (DI)'
    };
    
    return topicMap[topic] || 'Number System';
  };

  const getTopicIcon = (topic: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'number-system': <Hash className="text-blue-600" />,
      'simplification-approximation': <Calculator className="text-green-600" />,
      'percentage-ratio': <Percent className="text-purple-600" />,
      'profit-loss-interest': <TrendingUp className="text-orange-600" />,
      'time-speed-distance': <Clock className="text-red-600" />,
      'time-work-pipes': <Users className="text-indigo-600" />,
      'averages-mixtures': <BarChart3 className="text-teal-600" />,
      'permutation-probability': <Target className="text-pink-600" />,
      'mensuration-geometry': <Square className="text-cyan-600" />,
      'algebra-equations': <Calculator className="text-yellow-600" />,
      'data-interpretation': <PieChart className="text-emerald-600" />
    };
    
    return iconMap[topic] || <Hash className="text-blue-600" />;
  };

  const handleStartPractice = (topic: string) => {
    navigate(`/quantitative-aptitude/practice/${topic}`);
  };

  const handleGoBack = () => {
    navigate('/quantitative-aptitude');
  };

  return (
    <FormulaPage
      formulas={formulas}
      getTopicTitle={getTopicTitle}
      getTopicIcon={getTopicIcon}
      onStartPractice={handleStartPractice}
      onGoBack={handleGoBack}
      sectionName="Quantitative Aptitude"
    />
  );
};

export default QuantitativeAptitudeFormula; 