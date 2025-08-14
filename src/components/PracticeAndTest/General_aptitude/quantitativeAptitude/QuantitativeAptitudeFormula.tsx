import React from 'react';
import { Hash, Calculator, Percent, TrendingUp, Clock, Users, BarChart3, Target, Square, PieChart } from 'lucide-react';
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

const QuantitativeAptitudeFormula: React.FC = () => {
  const navigate = useNavigate();
  const { topicId } = useParams<{ topicId: string }>();

  const formulas: TopicFormulas = {
    'algebra-and-linear-equations': [
      {
        title: "Algebraic Identities & Laws",
        description: "These are fundamental mathematical identities that help simplify complex expressions and solve equations efficiently. They are derived from basic arithmetic operations and are used extensively in factorization and equation solving.",
        examples: [
          "(a + b)² = a² + 2ab + b² - Square of sum: Used when you need to expand expressions like (x+3)²",
          "(a – b)² = a² – 2ab + b² - Square of difference: Used for expressions like (x-2)²",
          "(a + b)(a – b) = a² – b² - Difference of squares: Very useful for factorization",
          "(x + a)(x + b) = x² + (a + b)x + ab - Product of two binomials with same first term",
          "(x – a)(x – b) = x² – (a + b)x + ab - Product of two binomials with same first term",
          "(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca - Square of trinomial",
          "a³ + b³ = (a + b)(a² – ab + b²) - Sum of cubes factorization",
          "a³ – b³ = (a – b)(a² + ab + b²) - Difference of cubes factorization"
        ]
      },
      {
        title: "Factorization Techniques",
        description: "Factorization is the process of breaking down complex expressions into simpler factors. This is crucial for solving equations and simplifying expressions. Different methods are used based on the structure of the expression.",
        examples: [
          "Common Factor Method: Extract the greatest common factor from all terms (e.g., 2x² + 4x = 2x(x + 2))",
          "Grouping Method: Group terms that have common factors and factorize each group separately",
          "Using Standard Identities: Apply algebraic identities like a² - b² = (a+b)(a-b) for quick factorization",
          "Trial and Error: For quadratic expressions, find factors that multiply to give the constant term and add to give the coefficient of x"
        ]
      },
      {
        title: "Linear Equations - Foundation",
        description: "Linear equations are the building blocks of algebra. They represent relationships where variables are raised only to the first power. Understanding these is essential for solving more complex mathematical problems.",
        examples: [
          "One Variable Form: ax + b = 0 where 'a' and 'b' are constants, 'x' is the variable",
          "Solution Formula: x = –b/a (when a ≠ 0) - This gives the value of x that makes the equation true",
          "Two Variable Form: ax + by + c = 0 and dx + ey + f = 0 - System of equations",
          "Graphical Interpretation: Each equation represents a straight line, solution is the point of intersection"
        ]
      },
      {
        title: "Solving Systems of Linear Equations",
        description: "When you have multiple linear equations with the same variables, you need systematic methods to find the values that satisfy all equations simultaneously. These methods are fundamental in algebra and have applications in various fields.",
        examples: [
          "Substitution Method: Solve one equation for one variable, then substitute this expression into the other equation. Best when one variable has coefficient 1.",
          "Elimination Method: Add or subtract equations to eliminate one variable. Multiply equations if necessary to align coefficients.",
          "Cross Multiplication Method: For equations ax + by + c = 0 and dx + ey + f = 0:",
          "x = (bf – ce) / (ae – bd) and y = (cd – af) / (ae – bd)",
          "Matrix Method: Use determinants and matrices for larger systems (advanced topic)"
        ]
      },
      {
        title: "Practical Examples with Step-by-Step Solutions",
        description: "These examples demonstrate how to apply the formulas and methods in real problem-solving scenarios. Practice these patterns to build confidence in solving similar problems.",
        examples: [
          "Example 1 - Expanding Algebraic Expression:",
          "Problem: Expand (3x + 4)²",
          "Solution: Using (a + b)² = a² + 2ab + b²",
          "= (3x)² + 2 × (3x) × 4 + 4²",
          "= 9x² + 24x + 16",
          "",
          "Example 2 - Solving System of Equations:",
          "Problem: Solve 2x + 3y = 12 and x – y = 1",
          "Step 1: From second equation, x = y + 1",
          "Step 2: Substitute into first equation: 2(y + 1) + 3y = 12",
          "Step 3: Simplify: 2y + 2 + 3y = 12",
          "Step 4: Combine like terms: 5y + 2 = 12",
          "Step 5: Solve: 5y = 10 → y = 2",
          "Step 6: Find x: x = 2 + 1 = 3",
          "Answer: x = 3, y = 2"
        ]
      }
    ],
    'number-system': [
      {
        title: "Divisibility Rules - Quick Mental Math",
        description: "Divisibility rules are shortcuts that help you quickly determine if one number is divisible by another without performing long division. These rules are based on patterns in the decimal number system and are extremely useful for mental calculations and problem-solving.",
        examples: [
          "Divisible by 2: Last digit must be even (0, 2, 4, 6, 8) - Example: 1234 is divisible by 2 because 4 is even",
          "Divisible by 3: Sum of all digits must be divisible by 3 - Example: 123 (1+2+3=6, 6÷3=2) ✓",
          "Divisible by 4: Last two digits must form a number divisible by 4 - Example: 1236 (36÷4=9) ✓",
          "Divisible by 5: Last digit must be 0 or 5 - Example: 1235 ends with 5 ✓",
          "Divisible by 6: Must be divisible by both 2 AND 3 - Example: 1236 (even AND sum=12÷3=4) ✓",
          "Divisible by 8: Last three digits must form a number divisible by 8 - Example: 12344 (344÷8=43) ✓",
          "Divisible by 9: Sum of all digits must be divisible by 9 - Example: 1233 (1+2+3+3=9÷9=1) ✓",
          "Divisible by 10: Must end with 0 - Example: 1230 ends with 0 ✓"
        ]
      },
      {
        title: "HCF (GCD) & LCM - Fundamental Concepts",
        description: "Highest Common Factor (HCF) and Least Common Multiple (LCM) are fundamental concepts in number theory. HCF is the largest number that divides two or more numbers exactly, while LCM is the smallest number that is a multiple of two or more numbers. These concepts are essential for solving problems involving fractions, ratios, and time calculations.",
        examples: [
          "HCF by Prime Factorization: Break numbers into prime factors, take common factors with lowest powers",
          "Example: HCF of 24 and 36: 24=2³×3, 36=2²×3² → HCF=2²×3=12",
          "LCM by Prime Factorization: Take all prime factors with highest powers from all numbers",
          "Example: LCM of 24 and 36: 24=2³×3, 36=2²×3² → LCM=2³×3²=72",
          "Important Relationship: HCF(a,b) × LCM(a,b) = a × b (for two numbers)",
          "For three numbers: LCM(a,b,c) = LCM(LCM(a,b), c) - Apply recursively",
          "For three numbers: HCF(a,b,c) = HCF(HCF(a,b), c) - Apply recursively"
        ]
      },
      {
        title: "Remainder Theorems - Advanced Number Theory",
        description: "Remainder theorems provide powerful tools for solving complex problems involving remainders and divisibility. These theorems are particularly useful in competitive exams and advanced mathematics. They help find remainders of large numbers without performing actual division.",
        examples: [
          "Euler's Theorem: If 'a' and 'n' are coprime (HCF=1), then a^φ(n) ≡ 1 (mod n)",
          "φ(n) is Euler's totient function - count of numbers less than n that are coprime to n",
          "Fermat's Little Theorem: If 'p' is prime and 'a' is not divisible by p, then a^(p-1) ≡ 1 (mod p)",
          "Chinese Remainder Theorem: Solves simultaneous congruences efficiently",
          "Wilson's Theorem: For prime 'p', (p-1)! ≡ -1 (mod p) - Useful for primality testing",
          "Application Example: Find remainder when 7^100 is divided by 13",
          "Since 7 and 13 are coprime, by Fermat's theorem: 7^12 ≡ 1 (mod 13)",
          "7^100 = 7^(8×12 + 4) = (7^12)^8 × 7^4 ≡ 1^8 × 7^4 ≡ 7^4 ≡ 9 (mod 13)"
        ]
      }
    ],
    'percentage-ratio': [
      {
        title: "Percentage Fundamentals - The Building Blocks",
        description: "Percentage is a way to express a number as a fraction of 100. It's one of the most commonly used mathematical concepts in daily life, business, and competitive exams. Understanding percentages is crucial for solving problems related to profit/loss, interest, population growth, and many other real-world scenarios.",
        examples: [
          "Basic Formula: Percentage = (Part/Whole) × 100 - Expresses what part of the whole something represents",
          "Finding Part: Part = (Percentage × Whole) / 100 - When you know the percentage and whole, find the part",
          "Finding Whole: Whole = (Part × 100) / Percentage - When you know the part and percentage, find the whole",
          "Percentage Change: ((New Value - Old Value) / Old Value) × 100 - Measures increase or decrease",
          "Successive Percentage: Final = Original × (1 ± p1/100) × (1 ± p2/100) - For multiple percentage changes",
          "Example: If price increases by 10% then decreases by 5%, final = original × 1.10 × 0.95"
        ]
      },
      {
        title: "Ratio & Proportion - Comparative Mathematics",
        description: "Ratio compares two quantities by division, while proportion states that two ratios are equal. These concepts are fundamental in solving problems involving comparisons, mixtures, time and work, and many other mathematical scenarios. They form the basis for understanding relationships between quantities.",
        examples: [
          "Ratio Definition: a:b = a/b (simplified form) - Represents the relative size of two quantities",
          "Proportion: a:b :: c:d means a/b = c/d - States that two ratios are equal",
          "Mean Proportion: If a:b :: b:c, then b² = ac - The middle term is the geometric mean",
          "Third Proportion: If a:b :: b:c, then c = b²/a - The third term in continued proportion",
          "Fourth Proportion: If a:b :: c:d, then d = bc/a - The fourth term when three are known",
          "Compound Ratio: (a:b) × (c:d) = ac:bd - Product of two ratios"
        ]
      },
      {
        title: "Mixture & Alligation - Advanced Percentage Applications",
        description: "Mixture and alligation problems involve combining different ingredients with different characteristics to achieve a desired result. This concept is widely used in chemistry, economics, and business. The alligation method provides a systematic approach to solve such problems efficiently.",
        examples: [
          "Alligation Rule: (Cheaper - Mean) / (Mean - Dearer) = Quantity of Dearer / Quantity of Cheaper",
          "This rule helps find the ratio in which two ingredients should be mixed to get a desired average",
          "Weighted Average: (n1×a1 + n2×a2) / (n1 + n2) - When quantities have different weights",
          "Replacement Formula: Final = Initial × (1 - r/100)^n - When 'r'% is replaced 'n' times",
          "Successive Replacement: Use alligation method for multiple replacements with different concentrations",
          "Example: Mix 60% and 80% solutions to get 70% solution",
          "Ratio = (80-70) : (70-60) = 10:10 = 1:1 (equal quantities needed)"
        ]
      }
    ],
    'profit-loss': [
      {
        title: "Profit & Loss Fundamentals - Business Mathematics",
        description: "Profit and Loss is a fundamental concept in business mathematics that deals with the financial outcomes of buying and selling goods or services. Understanding these concepts is essential for business decisions, investment analysis, and competitive exams. The key is to understand the relationship between Cost Price (CP), Selling Price (SP), and the resulting profit or loss.",
        examples: [
          "Profit Calculation: Profit = Selling Price - Cost Price - When SP > CP, you make a profit",
          "Loss Calculation: Loss = Cost Price - Selling Price - When CP > SP, you incur a loss",
          "Profit Percentage: Profit % = (Profit / CP) × 100 - Expresses profit as a percentage of cost",
          "Loss Percentage: Loss % = (Loss / CP) × 100 - Expresses loss as a percentage of cost",
          "Selling Price with Profit: SP = CP × (1 + Profit % / 100) - When you know CP and profit %",
          "Selling Price with Loss: SP = CP × (1 - Loss % / 100) - When you know CP and loss %",
          "Cost Price from SP: CP = SP / (1 ± Profit/Loss % / 100) - Reverse calculation"
        ]
      },
      {
        title: "Marked Price & Discount - Retail Mathematics",
        description: "Marked Price (MP) is the price displayed on an item, while discount is the reduction in price offered to customers. This concept is crucial in retail business, sales promotions, and understanding consumer pricing strategies. The relationship between MP, discount, and final selling price is fundamental to pricing decisions.",
        examples: [
          "Discount Amount: Discount = Marked Price - Selling Price - The actual amount reduced",
          "Discount Percentage: Discount % = (Discount / MP) × 100 - Expresses discount as percentage of MP",
          "Selling Price with Discount: SP = MP × (1 - Discount % / 100) - Final price after discount",
          "Marked Price from SP: MP = SP / (1 - Discount % / 100) - Reverse calculation",
          "Successive Discounts: Final SP = MP × (1 - d1/100) × (1 - d2/100) - Multiple discounts",
          "Equivalent Single Discount: For two discounts d1% and d2%, equivalent = d1 + d2 - (d1×d2)/100",
          "Example: MP = ₹100, Discount = 20%, SP = 100 × (1 - 20/100) = ₹80"
        ]
      },
      {
        title: "Advanced Profit & Loss Scenarios",
        description: "These examples demonstrate practical applications of profit and loss concepts in real-world scenarios. Understanding these patterns helps in solving complex business problems and making informed financial decisions. Practice these examples to build confidence in handling various profit/loss situations.",
        examples: [
          "Example 1 - Basic Profit Calculation:",
          "Problem: CP = ₹100, SP = ₹120",
          "Profit = 120 - 100 = ₹20",
          "Profit % = (20/100) × 100 = 20%",
          "This means you earned 20% profit on your investment",
          "",
          "Example 2 - Discount and Final Price:",
          "Problem: MP = ₹200, Discount = 15%",
          "SP = 200 × (1 - 15/100) = 200 × 0.85 = ₹170",
          "Customer pays ₹170 for an item marked at ₹200",
          "",
          "Example 3 - Finding Cost Price:",
          "Problem: SP = ₹90, Loss = 10%",
          "CP = 90 / (1 - 10/100) = 90 / 0.9 = ₹100",
          "The item was originally purchased for ₹100"
        ]
      }
    ],
    'simple-compound-interest': [
      {
        title: "Simple Interest - Linear Growth",
        description: "Simple Interest is calculated only on the principal amount (initial investment) for the entire time period. The interest earned remains constant each year, making it a linear growth model. This concept is fundamental in banking, loans, and basic financial calculations. Simple interest is easier to calculate and understand compared to compound interest.",
        examples: [
          "Basic Formula: Simple Interest = (Principal × Rate × Time) / 100 - The fundamental SI formula",
          "Amount Calculation: Amount = Principal + Simple Interest - Total value after interest",
          "Principal from SI: Principal = (SI × 100) / (Rate × Time) - Reverse calculation",
          "Rate from SI: Rate = (SI × 100) / (Principal × Time) - Find interest rate",
          "Time from SI: Time = (SI × 100) / (Principal × Rate) - Find time period",
          "Key Point: Interest remains constant each year - No interest on interest",
          "Example: P = ₹1000, R = 10%, T = 3 years",
          "SI = (1000 × 10 × 3) / 100 = ₹300 (same each year)"
        ]
      },
      {
        title: "Compound Interest - Exponential Growth",
        description: "Compound Interest is calculated on both the principal and the accumulated interest from previous periods. This creates exponential growth, where the interest earned increases each year. Compound interest is more complex but more realistic for most financial scenarios, as it reflects how money actually grows in investments and savings accounts.",
        examples: [
          "Amount Formula: Amount = P(1 + r/100)^n - Principal grows exponentially",
          "Compound Interest: CI = P[(1 + r/100)^n - 1] - Interest earned over time",
          "Half-yearly Compounding: Rate = r/2, Time = 2n - Interest calculated twice a year",
          "Quarterly Compounding: Rate = r/4, Time = 4n - Interest calculated four times a year",
          "Monthly Compounding: Rate = r/12, Time = 12n - Interest calculated monthly",
          "CI vs SI Difference: For 2 years, Difference = P(r/100)² - Shows power of compounding",
          "Example: P = ₹1000, R = 10%, T = 2 years",
          "Amount = 1000(1 + 10/100)² = 1000 × 1.21 = ₹1210"
        ]
      },
      {
        title: "Practical Interest Calculations",
        description: "These examples demonstrate real-world applications of interest calculations. Understanding the difference between simple and compound interest is crucial for making informed financial decisions, whether you're investing money or taking loans. The examples show how compound interest can significantly outperform simple interest over longer periods.",
        examples: [
          "Example 1 - Simple Interest Calculation:",
          "Problem: P = ₹1000, R = 10%, T = 2 years",
          "SI = (1000 × 10 × 2) / 100 = ₹200",
          "Amount = 1000 + 200 = ₹1200",
          "Note: Interest is ₹100 each year (constant)",
          "",
          "Example 2 - Compound Interest Calculation:",
          "Problem: P = ₹1000, R = 10%, T = 2 years",
          "Amount = 1000(1 + 10/100)² = 1000 × 1.21 = ₹1210",
          "CI = 1210 - 1000 = ₹210",
          "Note: Interest is ₹100 in 1st year, ₹110 in 2nd year (increasing)",
          "",
          "Example 3 - Comparing SI vs CI:",
          "For P = ₹1000, R = 10%, T = 2 years:",
          "SI = ₹200, CI = ₹210",
          "Difference = ₹10 = 1000 × (10/100)²"
        ]
      }
    ],
    'time-speed-distance': [
      {
        title: "Basic Speed, Distance & Time Relationships",
        description: "Speed, Distance, and Time are interconnected concepts that form the foundation of motion problems. Understanding these relationships is crucial for solving problems involving travel, transportation, and any scenario where objects move from one point to another. These formulas are fundamental in physics and have wide applications in daily life.",
        examples: [
          "Speed Formula: Speed = Distance / Time - How fast something is moving",
          "Distance Formula: Distance = Speed × Time - How far something travels",
          "Time Formula: Time = Distance / Speed - How long a journey takes",
          "Average Speed: Total Distance / Total Time - Overall speed for entire journey",
          "Relative Speed (Opposite Direction): Sum of speeds - When objects move towards each other",
          "Relative Speed (Same Direction): Difference of speeds - When objects move in same direction",
          "Unit Conversion: 1 km/h = 5/18 m/s - Important for unit conversions",
          "Example: Distance = 60 km, Time = 2 hours, Speed = 60/2 = 30 km/h"
        ]
      },
      {
        title: "Train Problems - Special Cases",
        description: "Train problems involve scenarios where trains cross stationary objects (like poles or platforms) or moving objects (like other trains or people). These problems require understanding of relative motion and the concept that a train must travel its own length plus the length of the object it's crossing. These are common in competitive exams.",
        examples: [
          "Crossing a Platform: Time = (Train length + Platform length) / Speed",
          "The train must travel its entire length plus the platform length",
          "Crossing a Pole: Time = Train length / Speed - Only train length matters",
          "Crossing Another Train: Time = (L1 + L2) / (S1 ± S2) - Add lengths, consider relative speed",
          "Crossing a Person: Time = Train length / Speed - Same as crossing a pole",
          "Key Concept: When crossing, the train must travel its own length",
          "Example: Train length = 200m, Speed = 72 km/h = 20 m/s",
          "Time to cross pole = 200/20 = 10 seconds"
        ]
      },
      {
        title: "Boats & Streams - Water Current Problems",
        description: "Boats and streams problems involve scenarios where a boat travels in water that has a current. The boat's speed relative to the water (boat speed) and the water's speed (stream speed) combine to give the actual speed. These problems are common in competitive exams and test understanding of relative motion.",
        examples: [
          "Downstream Speed: Boat Speed + Stream Speed - When boat moves with current",
          "Upstream Speed: Boat Speed - Stream Speed - When boat moves against current",
          "Boat Speed: (Downstream + Upstream) / 2 - Average of downstream and upstream",
          "Stream Speed: (Downstream - Upstream) / 2 - Half the difference",
          "Key Point: Downstream is faster, upstream is slower",
          "Example: Downstream = 15 km/h, Upstream = 9 km/h",
          "Boat Speed = (15 + 9)/2 = 12 km/h",
          "Stream Speed = (15 - 9)/2 = 3 km/h"
        ]
      },
      {
        title: "Advanced Motion Problems",
        description: "These examples demonstrate practical applications of speed, distance, and time concepts in real-world scenarios. Understanding these patterns helps in solving complex motion problems and making travel-related calculations. The examples show how to apply the formulas in various situations.",
        examples: [
          "Example 1 - Basic Speed Calculation:",
          "Problem: Distance = 120 km, Time = 2 hours",
          "Speed = 120/2 = 60 km/h",
          "This means the object travels 60 kilometers every hour",
          "",
          "Example 2 - Train Crossing Platform:",
          "Problem: Train length = 200m, Platform length = 300m, Speed = 72 km/h",
          "Convert speed: 72 km/h = 72 × 5/18 = 20 m/s",
          "Time = (200 + 300)/20 = 500/20 = 25 seconds",
          "",
          "Example 3 - Average Speed for Round Trip:",
          "Problem: Going speed = 60 km/h, Return speed = 40 km/h, Distance = 120 km each way",
          "Total distance = 240 km, Total time = 120/60 + 120/40 = 2 + 3 = 5 hours",
          "Average speed = 240/5 = 48 km/h"
        ]
      }
    ],
    'time-work': [
      {
        title: "Time & Work Fundamentals - Efficiency Problems",
        description: "Time and Work problems deal with how efficiently people or machines can complete tasks. These problems are fundamental in project management, business operations, and understanding productivity. The key concept is that work done is directly proportional to time and efficiency. Understanding these relationships helps in planning and resource allocation.",
        examples: [
          "Work Formula: Work = Efficiency × Time - Amount of work completed",
          "Efficiency Formula: Efficiency = Work / Time - How fast work is done",
          "Time Formula: Time = Work / Efficiency - How long work takes",
          "Individual Efficiency: If A can do work in 'a' days, work done in 1 day = 1/a",
          "Combined Efficiency: If A and B work together: 1/A + 1/B = 1/Total Time",
          "Efficiency Ratio: Efficiency ratio = Time ratio (inverse relationship)",
          "Key Concept: More efficiency means less time, more time means less efficiency",
          "Example: A takes 10 days, B takes 15 days, together: 1/10 + 1/15 = 1/6 days"
        ]
      },
      {
        title: "Work & Wages - Payment Distribution",
        description: "Work and Wages problems involve distributing payment among workers based on their contribution to the work. This concept is crucial in business management, project planning, and understanding fair compensation. The principle is that wages should be proportional to the work done and the efficiency of workers.",
        examples: [
          "Wage Proportionality: Wages ∝ Work done - More work, more pay",
          "Efficiency Relationship: Wages ∝ Efficiency - More efficient workers earn more",
          "Efficiency Ratio: If A:B efficiency = 2:3, then wages = 2:3",
          "Time and Efficiency: If A works for 'a' days, B for 'b' days: wages = a×efficiency_A : b×efficiency_B",
          "Combined Work: Total wages distributed based on individual contributions",
          "Key Point: Wages are proportional to both time worked and efficiency",
          "Example: A:B efficiency = 2:3, total wages = ₹500",
          "A's share = 500 × 2/(2+3) = ₹200, B's share = ₹300"
        ]
      },
      {
        title: "Advanced Work Problems",
        description: "These examples demonstrate practical applications of time and work concepts in real-world scenarios. Understanding these patterns helps in solving complex work problems and making informed decisions about project planning and resource allocation. The examples show how to apply the formulas in various work situations.",
        examples: [
          "Example 1 - Combined Work Efficiency:",
          "Problem: A can do work in 10 days, B in 15 days",
          "A's efficiency = 1/10 per day, B's efficiency = 1/15 per day",
          "Combined efficiency = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6",
          "Total time = 6 days (inverse of combined efficiency)",
          "",
          "Example 2 - Wage Distribution:",
          "Problem: A:B efficiency = 2:3, wages = ₹500",
          "A's share = 500 × 2/(2+3) = 500 × 2/5 = ₹200",
          "B's share = 500 × 3/(2+3) = 500 × 3/5 = ₹300",
          "",
          "Example 3 - Work with Different Time Periods:",
          "Problem: A works for 5 days, B works for 3 days, A:B efficiency = 2:1",
          "A's contribution = 5 × 2 = 10 units, B's contribution = 3 × 1 = 3 units",
          "Wage ratio = 10:3, if total wages = ₹130",
          "A's share = 130 × 10/13 = ₹100, B's share = ₹30"
        ]
      }
    ],
    'pipe-cistern': [
      {
        title: "Pipes & Cisterns Fundamentals - Flow Problems",
        description: "Pipes and Cisterns problems deal with how quickly containers can be filled or emptied by different pipes. These problems are similar to time and work problems but involve the concept of flow rates. Understanding these concepts is crucial for solving problems involving water tanks, swimming pools, and any scenario where multiple sources contribute to filling or emptying a container.",
        examples: [
          "Filling Pipe: Positive efficiency - Adds water to the container",
          "Emptying Pipe: Negative efficiency - Removes water from the container",
          "Net Efficiency: Sum of all pipe efficiencies - Overall effect on the container",
          "Time to Fill/Empty: 1 / Net efficiency - Time required for complete operation",
          "Key Concept: Filling pipes have positive values, emptying pipes have negative values",
          "Example: If pipe A fills in 10 hours, B empties in 8 hours",
          "Net rate = 1/10 - 1/8 = (8-10)/80 = -2/80 = -1/40",
          "Time to empty = 40 hours (negative means emptying)"
        ]
      },
      {
        title: "Multiple Pipes - Complex Scenarios",
        description: "Multiple pipes scenarios involve combinations of filling and emptying pipes working simultaneously or in sequence. These problems require careful analysis of the net effect of all pipes. Understanding how to combine different pipe efficiencies is essential for solving complex tank filling problems.",
        examples: [
          "Two Filling Pipes: If A fills in 'a' hours, B fills in 'b' hours: 1/a + 1/b = 1/total time",
          "Filling and Emptying: If A fills in 'a' hours, B empties in 'b' hours: 1/a - 1/b = 1/total time",
          "Three Pipes: 1/a + 1/b + 1/c = 1/total time (all filling) or consider signs for emptying",
          "Alternate Filling: Calculate work done in 2 hours, then find total time",
          "Key Point: Add filling rates, subtract emptying rates",
          "Example: A fills in 12 hours, B fills in 8 hours",
          "Combined rate = 1/12 + 1/8 = 2/24 + 3/24 = 5/24",
          "Time to fill = 24/5 = 4.8 hours"
        ]
      },
      {
        title: "Advanced Pipe Problems",
        description: "These examples demonstrate practical applications of pipes and cisterns concepts in real-world scenarios. Understanding these patterns helps in solving complex flow problems and making calculations for water management systems. The examples show how to apply the formulas in various pipe configurations.",
        examples: [
          "Example 1 - Two Filling Pipes:",
          "Problem: A fills in 10 hours, B fills in 15 hours",
          "A's rate = 1/10 per hour, B's rate = 1/15 per hour",
          "Combined rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6",
          "Time to fill = 6 hours",
          "",
          "Example 2 - Filling and Emptying:",
          "Problem: A fills in 12 hours, B empties in 8 hours",
          "A's rate = 1/12 (filling), B's rate = -1/8 (emptying)",
          "Net rate = 1/12 - 1/8 = 2/24 - 3/24 = -1/24",
          "Time to empty = 24 hours (negative means emptying)",
          "",
          "Example 3 - Three Pipes:",
          "Problem: A fills in 6 hours, B fills in 8 hours, C empties in 12 hours",
          "Net rate = 1/6 + 1/8 - 1/12 = 4/24 + 3/24 - 2/24 = 5/24",
          "Time to fill = 24/5 = 4.8 hours"
        ]
      }
    ],
    'averages': [
      {
        title: "Average Fundamentals - Central Tendency",
        description: "Average (arithmetic mean) is a measure of central tendency that represents the typical value of a set of numbers. It's calculated by summing all values and dividing by the count of values. Understanding averages is fundamental in statistics, data analysis, and everyday calculations. Averages help us understand the typical performance or value in a dataset.",
        examples: [
          "Basic Average: Average = Sum of observations / Number of observations - The fundamental formula",
          "Sum Calculation: Sum = Average × Number of observations - Reverse calculation",
          "Count Calculation: Number of observations = Sum / Average - Find how many items",
          "Key Relationship: If average of 'n' numbers is 'a', then sum = n × a",
          "Adding New Value: If a new number 'x' is added: New average = (n×a + x) / (n+1)",
          "Removing Value: If a number 'x' is removed: New average = (n×a - x) / (n-1)",
          "Example: Average of 5 numbers = 20, Sum = 5 × 20 = 100",
          "If 25 is added: New average = (100 + 25) / 6 = 20.83"
        ]
      },
      {
        title: "Weighted Average - Importance-Based Calculations",
        description: "Weighted average gives different importance (weights) to different values based on their significance. This concept is crucial in academic grading, financial calculations, and any scenario where some values are more important than others. Weighted averages provide a more accurate representation when values have different levels of importance.",
        examples: [
          "Weighted Average Formula: (n1×a1 + n2×a2 + ...) / (n1 + n2 + ...) - Weights × values",
          "Equal Weights: If weights are equal, weighted average = simple average",
          "Age Problems: Total age = Average age × Number of people - Useful for age-related questions",
          "Replacement Problems: Use weighted average concept for mixture problems",
          "Academic Grades: Final grade = (credit1×grade1 + credit2×grade2) / (credit1 + credit2)",
          "Key Point: Values with higher weights have more influence on the final average",
          "Example: 10 students (avg 60) and 15 students (avg 70)",
          "Weighted average = (10×60 + 15×70) / (10+15) = 1650/25 = 66"
        ]
      },
      {
        title: "Advanced Average Problems",
        description: "These examples demonstrate practical applications of average concepts in real-world scenarios. Understanding these patterns helps in solving complex average problems and making informed decisions based on data analysis. The examples show how to apply the formulas in various situations involving averages.",
        examples: [
          "Example 1 - Basic Average with Addition:",
          "Problem: Average of 5 numbers = 20",
          "Sum = 5 × 20 = 100",
          "If 25 is added: New average = (100 + 25) / 6 = 20.83",
          "The average increases because the new value (25) is higher than the original average (20)",
          "",
          "Example 2 - Weighted Average Calculation:",
          "Problem: 10 students (avg 60) and 15 students (avg 70)",
          "Total sum = 10×60 + 15×70 = 600 + 1050 = 1650",
          "Total students = 10 + 15 = 25",
          "Weighted average = 1650/25 = 66",
          "",
          "Example 3 - Average with Replacement:",
          "Problem: Average of 6 numbers = 18, one number is replaced with 24",
          "Original sum = 6 × 18 = 108",
          "New sum = 108 - (old number) + 24",
          "If old number was 12: New sum = 108 - 12 + 24 = 120",
          "New average = 120/6 = 20"
        ]
      }
    ],
    'mixture-alligation': [
      {
        title: "Mixture Fundamentals - Combining Different Values",
        description: "Mixture problems involve combining different ingredients with different characteristics to achieve a desired result. This concept is widely used in chemistry, economics, business, and everyday life. Understanding mixtures helps in solving problems related to blending, pricing, and optimization. The key is to find the right proportion of ingredients to achieve the desired average value.",
        examples: [
          "Basic Mixture: If two ingredients of different values are mixed together",
          "Alligation Rule: (Cheaper - Mean) / (Mean - Dearer) = Quantity of Dearer / Quantity of Cheaper",
          "This rule helps find the exact ratio needed to achieve the desired average value",
          "Mean Value: Mean = (n1×a1 + n2×a2) / (n1 + n2) - Weighted average of ingredients",
          "Quantity Ratio: Quantity ratio = (Mean - Dearer) : (Cheaper - Mean)",
          "Key Concept: The ratio is inversely proportional to the distance from the mean",
          "Example: Mix ₹60/kg and ₹80/kg to get ₹70/kg",
          "Ratio = (80-70) : (70-60) = 10:10 = 1:1 (equal quantities needed)"
        ]
      },
      {
        title: "Replacement Problems - Successive Changes",
        description: "Replacement problems involve removing a portion of a mixture and replacing it with another substance. This concept is common in chemistry, manufacturing, and quality control. Understanding replacement helps in solving problems involving dilution, concentration changes, and iterative processes. The key is to track how the composition changes with each replacement.",
        examples: [
          "Single Replacement: Final = Initial × (1 - r/100)^n - When 'r'% is replaced 'n' times",
          "Successive Replacement: Use alligation method for multiple replacements with different concentrations",
          "For 'n' replacements: Final = Initial × (1 - r/100)^n - Exponential decay pattern",
          "If 'r'% is replaced 'n' times: Final = Initial × (1 - r/100)^n",
          "Key Point: Each replacement reduces the original concentration exponentially",
          "Example: 20% of solution replaced with water",
          "Final concentration = Initial × (1 - 20/100) = Initial × 0.8",
          "After 2 replacements: Final = Initial × 0.8² = Initial × 0.64"
        ]
      },
      {
        title: "Advanced Mixture Applications",
        description: "These examples demonstrate practical applications of mixture and alligation concepts in real-world scenarios. Understanding these patterns helps in solving complex mixture problems and making informed decisions about blending, pricing, and optimization. The examples show how to apply the formulas in various mixture situations.",
        examples: [
          "Example 1 - Basic Alligation:",
          "Problem: Mix ₹60/kg and ₹80/kg to get ₹70/kg",
          "Using alligation rule: (80-70) : (70-60) = 10:10 = 1:1",
          "Equal quantities of both ingredients are needed",
          "This means 1 kg of ₹60 + 1 kg of ₹80 = 2 kg of ₹70",
          "",
          "Example 2 - Replacement Problem:",
          "Problem: 20% of solution replaced with water",
          "Final concentration = Initial × (1 - 20/100) = Initial × 0.8",
          "If initial concentration was 80%: Final = 80% × 0.8 = 64%",
          "",
          "Example 3 - Multiple Replacements:",
          "Problem: 25% replaced 3 times with water",
          "Final = Initial × (1 - 25/100)³ = Initial × 0.75³ = Initial × 0.421875",
          "If initial was 100%: Final = 100% × 0.421875 = 42.1875%"
        ]
      }
    ],
    'permutation-combination': [
      {
        title: "Permutation Fundamentals - Arrangement Problems",
        description: "Permutation deals with the arrangement of objects in a specific order. The order matters in permutations - ABC is different from BAC. This concept is fundamental in probability, statistics, and combinatorics. Understanding permutations helps in solving problems involving seating arrangements, password creation, and any scenario where order is important.",
        examples: [
          "Basic Permutation: nPr = n! / (n-r)! - Arranging 'r' objects from 'n' objects",
          "Full Permutation: nPn = n! - Arranging all 'n' objects",
          "Circular Arrangement: (n-1)! - Arranging objects in a circle (one position is fixed)",
          "Identical Objects: n! / (p! × q! × r!) - When some objects are identical",
          "Linear Arrangement with Restrictions: Use subtraction method for restricted arrangements",
          "Key Concept: Order matters in permutations - ABC ≠ BAC",
          "Example: Arrange 3 people from 5: 5P3 = 5!/(5-3)! = 5!/2! = 60 ways",
          "Circular arrangement of 4 people: (4-1)! = 3! = 6 ways"
        ]
      },
      {
        title: "Combination Fundamentals - Selection Problems",
        description: "Combination deals with the selection of objects without considering order. The order doesn't matter in combinations - selecting A,B,C is the same as selecting C,B,A. This concept is crucial in probability, statistics, and decision-making problems. Understanding combinations helps in solving problems involving team selection, committee formation, and any scenario where only selection matters.",
        examples: [
          "Basic Combination: nCr = n! / (r! × (n-r)!) - Selecting 'r' objects from 'n' objects",
          "Special Cases: nC0 = 1, nCn = 1 - Selecting none or all objects",
          "Symmetry Property: nCr = nC(n-r) - Selecting 'r' is same as rejecting 'n-r'",
          "Pascal's Identity: nCr + nC(r-1) = (n+1)Cr - Important recursive relationship",
          "Total Ways: Sum of all possible combinations for different values of 'r'",
          "Key Concept: Order doesn't matter in combinations - ABC = BAC",
          "Example: Select 3 from 7 people: 7C3 = 7!/(3!×4!) = 35 ways",
          "Select 2 from 5: 5C2 = 5!/(2!×3!) = 10 ways"
        ]
      },
      {
        title: "Advanced Permutation & Combination Problems",
        description: "These examples demonstrate practical applications of permutation and combination concepts in real-world scenarios. Understanding these patterns helps in solving complex counting problems and making informed decisions about arrangements and selections. The examples show how to apply the formulas in various situations.",
        examples: [
          "Example 1 - Basic Permutation:",
          "Problem: Arrange 5 people in a row",
          "5P5 = 5! = 5×4×3×2×1 = 120 ways",
          "Each person can be in any position, so we multiply all possibilities",
          "",
          "Example 2 - Basic Combination:",
          "Problem: Select 3 from 7 people",
          "7C3 = 7! / (3! × 4!) = (7×6×5×4×3×2×1) / ((3×2×1) × (4×3×2×1))",
          "= 5040 / (6 × 24) = 5040 / 144 = 35 ways",
          "",
          "Example 3 - Circular Arrangement:",
          "Problem: Arrange 4 people around a circular table",
          "(4-1)! = 3! = 6 ways",
          "One person's position is fixed to avoid identical arrangements",
          "",
          "Example 4 - Identical Objects:",
          "Problem: Arrange letters in 'MISSISSIPPI'",
          "Total letters = 11, M=1, I=4, S=4, P=2",
          "Ways = 11! / (1! × 4! × 4! × 2!) = 34650 ways"
        ]
      }
    ],
    'probability': [
      {
        title: "Probability Fundamentals - Chance and Likelihood",
        description: "Probability is a measure of the likelihood that an event will occur. It ranges from 0 (impossible) to 1 (certain). Understanding probability is fundamental in statistics, decision-making, risk assessment, and many real-world applications. Probability helps us make informed decisions under uncertainty and understand random phenomena.",
        examples: [
          "Basic Probability: Probability = Favorable outcomes / Total outcomes - The fundamental formula",
          "Complement Rule: P(A) + P(A') = 1 - Probability of event plus probability of not event",
          "Union Rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) - Probability of A or B or both",
          "Intersection Rule: P(A ∩ B) = P(A) × P(B) - When events are independent",
          "Conditional Probability: P(A/B) = P(A ∩ B) / P(B) - Probability of A given B has occurred",
          "Key Concept: Probability ranges from 0 to 1, where 0 = impossible, 1 = certain",
          "Example: Probability of getting head in coin toss = 1/2 = 0.5",
          "Probability of getting 6 on dice = 1/6 ≈ 0.167"
        ]
      },
      {
        title: "Special Probability Scenarios",
        description: "Different scenarios have different probability calculations based on the nature of the experiment. Understanding these special cases helps in solving complex probability problems and making accurate calculations for various situations. These scenarios are common in competitive exams and real-world applications.",
        examples: [
          "Dice Problems: Total outcomes = 6^n for 'n' dice - Each die has 6 faces",
          "Coin Problems: Total outcomes = 2^n for 'n' coins - Each coin has 2 faces",
          "Card Problems: Total outcomes = 52 for standard deck - 52 cards in deck",
          "Birthday Problems: Use complement probability - Easier to find probability of no match",
          "Geometric Probability: Area of favorable region / Total area - For continuous outcomes",
          "Key Point: For complex scenarios, often easier to find complement probability",
          "Example: Probability of getting sum 7 with two dice",
          "Favorable: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes",
          "Total: 6×6 = 36 outcomes, P(Sum=7) = 6/36 = 1/6"
        ]
      },
      {
        title: "Advanced Probability Applications",
        description: "These examples demonstrate practical applications of probability concepts in real-world scenarios. Understanding these patterns helps in solving complex probability problems and making informed decisions under uncertainty. The examples show how to apply the formulas in various probability situations.",
        examples: [
          "Example 1 - Basic Probability:",
          "Problem: Probability of getting head in coin toss",
          "Favorable outcomes = 1 (head), Total outcomes = 2 (head, tail)",
          "P(Head) = 1/2 = 0.5 = 50%",
          "",
          "Example 2 - Dice Probability:",
          "Problem: Probability of getting sum 7 with two dice",
          "Favorable combinations: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)",
          "Favorable outcomes = 6, Total outcomes = 6×6 = 36",
          "P(Sum=7) = 6/36 = 1/6 ≈ 0.167",
          "",
          "Example 3 - Card Probability:",
          "Problem: Probability of drawing an ace from standard deck",
          "Favorable outcomes = 4 (4 aces), Total outcomes = 52 (total cards)",
          "P(Ace) = 4/52 = 1/13 ≈ 0.077",
          "",
          "Example 4 - Birthday Problem:",
          "Problem: Probability that at least 2 people share birthday in group of 23",
          "Use complement: P(At least 2) = 1 - P(All different)",
          "P(All different) = (365×364×...×343) / 365^23 ≈ 0.493",
          "P(At least 2) = 1 - 0.493 = 0.507 (surprisingly high!)"
        ]
      }
    ],
    'mensuration-geometry': [
      {
        title: "2D Geometry - Plane Figures and Areas",
        description: "Two-dimensional geometry deals with flat shapes and their properties. Understanding area and perimeter calculations is fundamental in construction, design, and many practical applications. These formulas help in calculating space requirements, material needs, and understanding geometric relationships. Mastery of 2D geometry is essential for solving complex spatial problems.",
        examples: [
          "Rectangle: Area = l × b, Perimeter = 2(l + b) - Most common quadrilateral",
          "Square: Area = a², Perimeter = 4a - All sides equal, all angles 90°",
          "Triangle: Area = ½ × b × h, Perimeter = a + b + c - Sum of three sides",
          "Circle: Area = πr², Circumference = 2πr - Perfect round shape",
          "Parallelogram: Area = b × h - Opposite sides parallel and equal",
          "Trapezium: Area = ½ × (a + b) × h - One pair of parallel sides",
          "Key Concept: Area measures space inside, perimeter measures boundary length",
          "Example: Rectangle with l=10, b=5: Area = 10×5 = 50 sq units, Perimeter = 2(10+5) = 30 units"
        ]
      },
      {
        title: "3D Geometry - Solid Figures and Volumes",
        description: "Three-dimensional geometry deals with solid shapes and their properties. Understanding volume and surface area calculations is crucial in engineering, architecture, and manufacturing. These formulas help in calculating capacity, material requirements, and understanding spatial relationships. 3D geometry extends 2D concepts into the third dimension.",
        examples: [
          "Cube: Volume = a³, Surface Area = 6a² - All faces are squares",
          "Cuboid: Volume = l × b × h, Surface Area = 2(lb + bh + lh) - Rectangular box",
          "Cylinder: Volume = πr²h, Surface Area = 2πr(h + r) - Circular base and top",
          "Sphere: Volume = 4/3 × πr³, Surface Area = 4πr² - Perfect round solid",
          "Cone: Volume = 1/3 × πr²h, Surface Area = πr(l + r) - Circular base, pointed top",
          "Key Concept: Volume measures space inside, surface area measures outer covering",
          "Example: Cube with side 4: Volume = 4³ = 64 cubic units, Surface Area = 6×4² = 96 sq units"
        ]
      },
      {
        title: "Advanced Geometry Applications",
        description: "These examples demonstrate practical applications of geometry concepts in real-world scenarios. Understanding these patterns helps in solving complex geometric problems and making calculations for construction, design, and spatial planning. The examples show how to apply the formulas in various geometric situations.",
        examples: [
          "Example 1 - Rectangle Calculations:",
          "Problem: Rectangle with l=10, b=5",
          "Area = 10 × 5 = 50 sq units",
          "Perimeter = 2(10 + 5) = 2 × 15 = 30 units",
          "This rectangle covers 50 square units of area and has a boundary of 30 units",
          "",
          "Example 2 - Circle Calculations:",
          "Problem: Circle with radius r=7",
          "Area = π × 7² = 49π sq units ≈ 153.94 sq units",
          "Circumference = 2π × 7 = 14π units ≈ 43.98 units",
          "",
          "Example 3 - Cube Calculations:",
          "Problem: Cube with side length 6",
          "Volume = 6³ = 216 cubic units",
          "Surface Area = 6 × 6² = 6 × 36 = 216 sq units",
          "Interesting: For a cube, volume and surface area have same numerical value when side = 6",
          "",
          "Example 4 - Cylinder Calculations:",
          "Problem: Cylinder with r=5, h=10",
          "Volume = π × 5² × 10 = 250π cubic units ≈ 785.4 cubic units",
          "Surface Area = 2π × 5(10 + 5) = 2π × 5 × 15 = 150π sq units ≈ 471.2 sq units"
        ]
      }
    ],
    'data-interpretation': [
      {
        title: "Data Interpretation Basics",
        description: "Key concepts for DI problems:",
        examples: [
          "Read the question carefully before looking at data",
          "Identify the type of chart/graph",
          "Look for patterns and trends",
          "Use approximation for quick calculations",
          "Check units and scales carefully"
        ]
      },
      {
        title: "Chart Types",
        description: "Different types of data representation:",
        examples: [
          "Bar Chart: Compare quantities across categories",
          "Line Graph: Show trends over time",
          "Pie Chart: Show parts of a whole",
          "Table: Raw data in organized format",
          "Venn Diagram: Show overlapping sets"
        ]
      },
      {
        title: "Quick Calculation Tips",
        description: "Methods for faster calculations:",
        examples: [
          "Use approximation: 22.7% ≈ 23%",
          "Break complex calculations: 15% of 240 = 10% + 5% = 24 + 12 = 36",
          "Use ratios for comparison",
          "Cross-multiplication for percentages",
          "Unit conversion: 1 lakh = 100,000"
        ]
      }
    ]
  };

  const getTopicTitle = (topic: string): string => {
    const topicMap: { [key: string]: string } = {
      'algebra-and-linear-equations': 'Algebra & Linear Equations',
      'number-system': 'Number System',
      'percentage-ratio': 'Percentage & Ratio',
      'profit-loss': 'Profit & Loss',
      'simple-compound-interest': 'Simple & Compound Interest',
      'time-speed-distance': 'Time, Speed & Distance',
      'time-work': 'Time & Work',
      'pipe-cistern': 'Pipes & Cisterns',
      'averages': 'Averages',
      'mixture-alligation': 'Mixture & Alligation',
      'permutation-combination': 'Permutation & Combination',
      'probability': 'Probability',
      'mensuration-geometry': 'Mensuration & Geometry',
      'data-interpretation': 'Data Interpretation'
    };
    
    return topicMap[topic] || 'Quantitative Aptitude';
  };

  const getTopicIcon = (topic: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'algebra-and-linear-equations': <Calculator className="text-blue-600" />,
      'number-system': <Hash className="text-green-600" />,
      'percentage-ratio': <Percent className="text-purple-600" />,
      'profit-loss': <TrendingUp className="text-orange-600" />,
      'simple-compound-interest': <TrendingUp className="text-red-600" />,
      'time-speed-distance': <Clock className="text-indigo-600" />,
      'time-work': <Users className="text-teal-600" />,
      'pipe-cistern': <Users className="text-pink-600" />,
      'averages': <BarChart3 className="text-cyan-600" />,
      'mixture-alligation': <BarChart3 className="text-yellow-600" />,
      'permutation-combination': <Target className="text-emerald-600" />,
      'probability': <Target className="text-rose-600" />,
      'mensuration-geometry': <Square className="text-violet-600" />,
      'data-interpretation': <PieChart className="text-slate-600" />
    };
    
    return iconMap[topic] || <Calculator className="text-blue-600" />;
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