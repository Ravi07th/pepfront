import React from 'react';
import { BookOpen, Users, Navigation, Grid3X3, Puzzle, Hash, Brain, FileText, TrendingUp, Target } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const { topicId } = useParams<{ topicId: string }>();

  const formulas: TopicFormulas = {
    'analogies': [
      {
        title: "Basic Formula for Analogies",
        description: "A : B :: C : D (Read as 'A is to B as C is to D')",
        examples: [
          "Meaning: The relationship between A and B is the same as the relationship between C and D."
        ]
      },
      {
        title: "Steps to Solve",
        description: "Follow these systematic steps:",
        examples: [
          "1. Identify the relationship between A and B",
          "2. Apply the same relationship to C to find D",
          "3. Keep in mind types of relationships:",
          "   • Synonym (similar meaning)",
          "   • Antonym (opposite meaning)",
          "   • Part–Whole (engine : car)",
          "   • Function (knife : cut)",
          "   • Cause–Effect (fire : heat)",
          "   • Degree (warm : hot)",
          "   • Classification (sparrow : bird)",
          "   • Symbolic/Representation (dove : peace)"
        ]
      },
      {
        title: "Quick Tip Formula",
        description: "(A → B) = (C → ?)",
        examples: [
          "Replace A → B with the exact relation in words",
          "Apply the same relation to C to get the answer"
        ]
      },
      {
        title: "Two Examples",
        description: "Practice with these common patterns:",
        examples: [
          "Example 1 (Synonym type): Hot : Warm :: Big : ?",
          "Relation: 'Hot' and 'Warm' are similar in meaning",
          "Answer: Large",
          "",
          "Example 2 (Function type): Pen : Write :: Knife : ?",
          "Relation: A pen is used to write; a knife is used to cut",
          "Answer: Cut"
        ]
      }
    ],
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
      }
    ],
    'directions-sense': [
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
        title: "Quick Solving Tips",
        description: "Follow these steps for direction problems:",
        examples: [
          "Step 1: Draw a simple diagram with starting point",
          "Step 2: Mark each movement with direction and distance",
          "Step 3: Calculate final position using coordinates",
          "Step 4: Find shortest distance from final to starting point"
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
    ],
    'series': [
      {
        title: "Series Types",
        description: "Different types of series you'll encounter:",
        examples: [
          "Number Series: Arithmetic, Geometric, Mixed patterns",
          "Letter Series: Alphabetical patterns and sequences",
          "Mixed Series: Combination of numbers and letters",
          "Symbol Series: Mathematical symbols and operators"
        ]
      },
      {
        title: "Number Series Patterns",
        description: "Common patterns in number series:",
        examples: [
          "Arithmetic Progression: Constant difference (2, 5, 8, 11, 14)",
          "Geometric Progression: Constant ratio (2, 6, 18, 54, 162)",
          "Fibonacci Series: Sum of previous two (1, 1, 2, 3, 5, 8)",
          "Square/Cube Series: Perfect squares/cubes (1, 4, 9, 16, 25)"
        ]
      },
      {
        title: "Letter Series Patterns",
        description: "Common patterns in letter series:",
        examples: [
          "Alphabetical Order: A, B, C, D, E...",
          "Skip Pattern: A, C, E, G, I... (skip 1)",
          "Reverse Order: Z, Y, X, W, V...",
          "Mixed Pattern: A1, B2, C3, D4..."
        ]
      },
      {
        title: "Quick Solving Tips",
        description: "Steps to solve series problems:",
        examples: [
          "Step 1: Look for obvious patterns first",
          "Step 2: Check for arithmetic/geometric progressions",
          "Step 3: Look for alternating patterns",
          "Step 4: Use elimination method for complex series"
        ]
      }
    ],
    'syllogisms': [
      {
        title: "Syllogism Basics",
        description: "Syllogism is a form of logical reasoning with statements and conclusions.",
        examples: [
          "Statement Types: All, Some, No, Some not",
          "Venn Diagram: Visual representation of logical relationships",
          "Logical Connectives: And, Or, If-then, Only if"
        ]
      },
      {
        title: "Venn Diagram Rules",
        description: "Rules for drawing Venn diagrams:",
        examples: [
          "All A are B: Circle A inside circle B",
          "Some A are B: Overlapping circles",
          "No A are B: Separate circles",
          "Some A are not B: Circle A partially outside circle B"
        ]
      },
      {
        title: "Logical Rules",
        description: "Important logical rules to remember:",
        examples: [
          "All + All = All (If all A are B and all B are C, then all A are C)",
          "All + Some = Some (If all A are B and some B are C, then some A are C)",
          "Some + Some = No conclusion (If some A are B and some B are C)",
          "No + Any = No conclusion"
        ]
      },
      {
        title: "Quick Solving Tips",
        description: "Steps to solve syllogism problems:",
        examples: [
          "Step 1: Draw Venn diagram for given statements",
          "Step 2: Check each conclusion against the diagram",
          "Step 3: Follow logical rules strictly",
          "Step 4: Eliminate options that don't follow rules"
        ]
      }
    ],
    'statement-assumption': [
      {
        title: "Statement and Assumption Basics",
        description: "These questions test your ability to identify implicit assumptions in statements.",
        examples: [
          "Statement: A given fact or opinion",
          "Assumption: An implicit belief that supports the statement",
          "Conclusion: A logical inference from the statement"
        ]
      },
      {
        title: "Types of Assumptions",
        description: "Different types of assumptions you'll encounter:",
        examples: [
          "Positive Assumption: Supports the statement",
          "Negative Assumption: Contradicts the statement",
          "Neutral Assumption: Neither supports nor contradicts",
          "Implicit Assumption: Not directly stated but implied"
        ]
      },
      {
        title: "Quick Solving Tips",
        description: "Steps to solve assumption questions:",
        examples: [
          "Step 1: Read the statement carefully",
          "Step 2: Identify what the statement is trying to convey",
          "Step 3: Check if the assumption supports the statement",
          "Step 4: Eliminate options that don't logically connect"
        ]
      },
      {
        title: "Common Patterns",
        description: "Recognize these common patterns:",
        examples: [
          "Pattern 1: Statement about improvement → Assumption about current state",
          "Pattern 2: Statement about action → Assumption about benefit",
          "Pattern 3: Statement about comparison → Assumption about criteria",
          "Pattern 4: Statement about cause → Assumption about effect"
        ]
      }
    ],
    'ranking-order': [
      {
        title: "Ranking and Order Basics",
        description: "These questions test your ability to arrange items in order based on given conditions.",
        examples: [
          "Ranking: Arranging items from highest to lowest or vice versa",
          "Ordering: Arranging items in a specific sequence",
          "Position: Finding the position of an item in a sequence"
        ]
      },
      {
        title: "Common Question Types",
        description: "Different types of ranking questions:",
        examples: [
          "Height/Weight Ranking: Tallest to shortest, heaviest to lightest",
          "Age Ranking: Oldest to youngest",
          "Performance Ranking: Best to worst performance",
          "Speed Ranking: Fastest to slowest"
        ]
      },
      {
        title: "Quick Solving Tips",
        description: "Steps to solve ranking problems:",
        examples: [
          "Step 1: List all items and their given positions",
          "Step 2: Use elimination method for unknown positions",
          "Step 3: Draw a simple diagram if needed",
          "Step 4: Cross-check with all given conditions"
        ]
      },
      {
        title: "Common Patterns",
        description: "Recognize these common patterns:",
        examples: [
          "Pattern 1: A is taller than B, B is taller than C → A > B > C",
          "Pattern 2: A is 3rd from top, B is 2nd from bottom",
          "Pattern 3: A is between B and C",
          "Pattern 4: A is not the tallest but taller than B"
        ]
      }
    ]
  };

  const getTopicTitle = (topic: string): string => {
    const topicMap: { [key: string]: string } = {
      'analogies': 'Analogies',
      'coding-decoding': 'Coding-Decoding',
      'blood-relations': 'Blood Relations',
      'directions-sense': 'Directions Sense',
      'seating-arrangements': 'Seating Arrangements',
      'puzzles': 'Puzzles',
      'series': 'Series',
      'syllogisms': 'Syllogisms',
      'statement-assumption': 'Statement and Assumption',
      'ranking-order': 'Ranking and Order'
    };
    
    return topicMap[topic] || 'Logical Reasoning';
  };

  const getTopicIcon = (topic: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'analogies': <Target className="text-yellow-600" />,
      'coding-decoding': <BookOpen className="text-blue-600" />,
      'blood-relations': <Users className="text-green-600" />,
      'directions-sense': <Navigation className="text-purple-600" />,
      'seating-arrangements': <Grid3X3 className="text-orange-600" />,
      'puzzles': <Puzzle className="text-red-600" />,
      'series': <Hash className="text-indigo-600" />,
      'syllogisms': <Brain className="text-teal-600" />,
      'statement-assumption': <FileText className="text-pink-600" />,
      'ranking-order': <TrendingUp className="text-cyan-600" />
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