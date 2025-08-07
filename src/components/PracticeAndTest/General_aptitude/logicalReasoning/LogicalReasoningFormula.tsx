import React from 'react';
import { BookOpen, Users, Navigation, Grid3X3, Puzzle, Hash, Brain, FileText, TrendingUp, Target } from 'lucide-react';
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

const LogicalReasoningFormula: React.FC = () => {
  const navigate = useNavigate();

  const formulas: TopicFormulas = {
    'coding-decoding': [
      {
        title: "Common Coding-Decoding Patterns",
        description: "Here are the most used tricks you'll see in exams:",
        examples: [
          "A. Letter Shifting: New Letter = Original Letter Position ± n",
          "B. Reverse Order: Letters are reversed before applying any shift",
          "C. Opposite Letters: Opposite = 27 - Letter Position",
          "D. Alternating Shifts: Different shifts for alternate letters",
          "E. Number Coding: Use alphabet positions (A=1, B=2… Z=26)",
          "F. Word + Number Mix: Add sum/difference of positions"
        ]
      },
      {
        title: "Quick Step-by-Step Solving Approach",
        description: "Compare the given word & its code → Look for position changes.",
        examples: [
          "Check for a constant difference between letters (forward/backward)",
          "See if the word is reversed before/after shifting",
          "Check if opposite letters or number coding is used",
          "Once the pattern is clear → apply it to the new word"
        ]
      },
      {
        title: "Placement-Style Examples",
        description: "Practice with these common patterns:",
        examples: [
          "Example 1: 'BOOK' → 'ERRO' (+3 shift), so 'PEN' → 'SHQ'",
          "Example 2: 'MOBILE' → 'NPDJMF' (+1 each), so 'LAPTOP' → 'MBQUQP'",
          "Example 3: 'DOG' → 26 (sum of positions), so 'CAT' → 24",
          "Example 4: 'BAT' → 'YZG' (opposite letters), so 'CAT' → 'XZG'"
        ]
      }
    ],
    'blood-relations': [
      {
        title: "Blood Relation Basics",
        description: "Blood relation questions check your ability to analyze family connections using given statements.",
        examples: [
          "Direct Relations: Father, Mother, Son, Daughter, Brother, Sister",
          "Indirect Relations: Uncle, Aunt, Nephew, Niece, Cousin, In-laws",
          "Generational Terms: Grandfather, Grandmother, Grandson, Granddaughter"
        ]
      },
      {
        title: "Quick Approach (Formula Method)",
        description: "Step 1: Break down the statement. Split into small parts like: 'A is the brother of B.'",
        examples: [
          "Step 2: Use symbols - Male = +, Female = -, Marriage = ×, Parent → Child = ↓",
          "Step 3: Draw a family tree - Quick diagram = fewer mistakes",
          "Step 4: Answer in terms of the asked person - Convert statements carefully"
        ]
      },
      {
        title: "Common Short Tricks",
        description: "Memorize these quick shortcuts for faster solving:",
        examples: [
          "'My father's son' → Me (if male) or My brother (if from another perspective)",
          "'My mother's husband' → My father",
          "'My mother's brother' → My maternal uncle",
          "'My father's father' → My grandfather"
        ]
      },
      {
        title: "Examples",
        description: "Practice with these common patterns:",
        examples: [
          "Example 1: 'He is my mother's only son's son' → My son",
          "Example 2: A is B's brother, B is C's sister, C is D's father → A is D's uncle",
          "Example 3: 'She is my mother's father's only daughter' → My mother"
        ]
      },
      {
        title: "Quick Tip for Exams",
        description: "Always find the reference person first (usually 'my' in the statement).",
        examples: [
          "Work step-by-step (don't try to solve mentally in one go)",
          "Draw simple diagrams for multi-level problems",
          "Use symbols and family tree for complex relationships"
        ]
      }
    ],
    'directions-distance': [
      {
        title: "Direction Basics",
        description: "Direction questions test your ability to understand spatial relationships and movement patterns.",
        examples: [
          "Cardinal Directions: North, South, East, West",
          "Intercardinal Directions: Northeast, Northwest, Southeast, Southwest",
          "Clockwise Rotation: Right turn increases direction by 90°",
          "Anticlockwise Rotation: Left turn decreases direction by 90°"
        ]
      },
      {
        title: "Distance Calculation",
        description: "Use these formulas for distance and displacement problems:",
        examples: [
          "Pythagoras Theorem: For right-angled triangles, a² + b² = c²",
          "Distance = √[(x₂-x₁)² + (y₂-y₁)²] for coordinate geometry",
          "Net Displacement = √(North-South)² + (East-West)²",
          "Average Speed = Total Distance / Total Time"
        ]
      },
      {
        title: "Common Patterns",
        description: "Recognize these common direction patterns:",
        examples: [
          "Pattern 1: Person moves in a square/rectangle pattern",
          "Pattern 2: Person moves in a circular pattern",
          "Pattern 3: Person moves in a zigzag pattern",
          "Pattern 4: Person moves in a spiral pattern"
        ]
      },
      {
        title: "Quick Solving Tips",
        description: "Follow these steps for direction problems:",
        examples: [
          "Step 1: Draw a simple diagram with starting point",
          "Step 2: Mark each movement with direction and distance",
          "Step 3: Calculate final position using coordinates",
          "Step 4: Find shortest distance from final to starting point"
        ]
      }
    ],
    'seating-arrangements': [
      {
        title: "Seating Arrangement Types",
        description: "Different types of seating arrangement problems you'll encounter:",
        examples: [
          "Linear Arrangement: People sitting in a straight line",
          "Circular Arrangement: People sitting around a circle",
          "Rectangular Arrangement: People sitting around a rectangle",
          "Square Arrangement: People sitting around a square"
        ]
      },
      {
        title: "Solving Approach",
        description: "Systematic approach to solve seating arrangement problems:",
        examples: [
          "Step 1: Identify the type of arrangement (linear/circular)",
          "Step 2: Note down all given conditions and constraints",
          "Step 3: Start with fixed positions or definite information",
          "Step 4: Use elimination method for remaining positions"
        ]
      },
      {
        title: "Common Conditions",
        description: "Types of conditions you'll encounter:",
        examples: [
          "Position-based: A sits 3rd from left, B sits 2nd from right",
          "Adjacent conditions: A sits next to B, C sits between A and D",
          "Facing conditions: A faces north, B faces south",
          "Color/attribute conditions: A wears red, B wears blue"
        ]
      },
      {
        title: "Quick Tips",
        description: "Remember these tips for faster solving:",
        examples: [
          "Always draw a diagram - visual representation helps",
          "Use symbols for quick notation (L=left, R=right, N=north)",
          "Start with the most definite information first",
          "Use elimination method for multiple choice questions"
        ]
      }
    ],
    'puzzles': [
      {
        title: "Puzzle Types",
        description: "Different types of logical puzzles you'll encounter:",
        examples: [
          "Blood Relations: Family tree and relationship puzzles",
          "Direction Sense: Direction and distance puzzles",
          "Seating Arrangement: Linear and circular seating puzzles",
          "Syllogism: Logical reasoning with statements and conclusions"
        ]
      },
      {
        title: "Solving Strategy",
        description: "General approach for solving logical puzzles:",
        examples: [
          "Step 1: Read all information carefully",
          "Step 2: Identify the type of puzzle",
          "Step 3: Draw diagrams or use tables",
          "Step 4: Apply logical reasoning step by step"
        ]
      },
      {
        title: "Common Techniques",
        description: "Useful techniques for puzzle solving:",
        examples: [
          "Elimination Method: Remove impossible options",
          "Contradiction Method: Find statements that contradict",
          "Assumption Method: Assume and verify",
          "Venn Diagram: For overlapping categories"
        ]
      }
    ]
  };

  const getTopicTitle = (topic: string): string => {
    const topicMap: { [key: string]: string } = {
      'coding-decoding': 'Coding-Decoding',
      'blood-relations': 'Blood Relations',
      'directions-distance': 'Directions & Distance',
      'seating-arrangements': 'Seating Arrangements',
      'puzzles': 'Puzzles',
      'series': 'Series',
      'syllogisms-venn': 'Syllogisms & Venn Diagrams',
      'statement-assumption': 'Statement & Assumption',
      'ranking-order': 'Ranking & Order',
      'analogies-odd': 'Analogies & Odd One Out'
    };
    
    return topicMap[topic] || 'Coding-Decoding';
  };

  const getTopicIcon = (topic: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'coding-decoding': <BookOpen className="text-blue-600" />,
      'blood-relations': <Users className="text-green-600" />,
      'directions-distance': <Navigation className="text-purple-600" />,
      'seating-arrangements': <Grid3X3 className="text-orange-600" />,
      'puzzles': <Puzzle className="text-red-600" />,
      'series': <Hash className="text-indigo-600" />,
      'syllogisms-venn': <Brain className="text-teal-600" />,
      'statement-assumption': <FileText className="text-pink-600" />,
      'ranking-order': <TrendingUp className="text-cyan-600" />,
      'analogies-odd': <Target className="text-yellow-600" />
    };
    
    return iconMap[topic] || <BookOpen className="text-blue-600" />;
  };

  const handleStartPractice = (topic: string) => {
    navigate(`/logical-reasoning/practice/${topic}`);
  };

  const handleGoBack = () => {
    navigate('/logical-reasoning');
  };

  return (
    <FormulaPage
      formulas={formulas}
      getTopicTitle={getTopicTitle}
      getTopicIcon={getTopicIcon}
      onStartPractice={handleStartPractice}
      onGoBack={handleGoBack}
      sectionName="Logical Reasoning"
    />
  );
};

export default LogicalReasoningFormula; 