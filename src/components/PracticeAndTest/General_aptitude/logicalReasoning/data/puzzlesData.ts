export const puzzlesQuestions = [
  {
    id: 1,
    question: "In a certain code, '256' means 'red sweet apple', '637' means 'eat a sweet', and '358' means 'eat a red'. Which digit represents 'red'?",
    options: ["2", "3", "5", "6"],
    correctAnswer: 2,
    explanation: "From '256' and '358', both have '5' and 'red' in common. From '637' and '358', both have '3' and 'eat' in common. So '5' represents 'red'."
  },
  {
    id: 2,
    question: "Five friends A, B, C, D, E have different heights. A is taller than B but shorter than C. D is taller than E but shorter than A. Who is the tallest?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 2,
    explanation: "A > B, C > A, A > D, D > E. So the order is: C > A > D > E and A > B. Therefore, C is the tallest."
  },
  {
    id: 3,
    question: "In a family, there are 6 members. The father is older than the mother. The mother is older than the son. The daughter is older than the son but younger than the mother. The grandfather is older than the father. Who is the youngest?",
    options: ["Father", "Mother", "Son", "Daughter"],
    correctAnswer: 2,
    explanation: "Grandfather > Father > Mother > Daughter > Son. So the son is the youngest."
  },
  {
    id: 4,
    question: "Three boxes contain balls of different colors. Box 1 has red and blue balls. Box 2 has blue and green balls. Box 3 has red and green balls. If you pick one ball from each box, what is the minimum number of different colors you can have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "You can pick blue from Box 1, blue from Box 2, and green from Box 3. So you can have only 2 different colors (blue and green)."
  },
  {
    id: 5,
    question: "A group of 5 people has different ages. A is older than B but younger than C. D is older than E but younger than A. If C is 25 years old, what can be the age of A?",
    options: ["20 years", "22 years", "28 years", "30 years"],
    correctAnswer: 1,
    explanation: "C > A > D > E and A > B. Since C is 25, A must be younger than 25. Among the options, only 22 is less than 25."
  },
  {
    id: 5,
    question: "A group of 5 people has different ages. A is older than B but younger than C. D is older than E but younger than A. If C is 25 years old, what can be the age of A?",
    options: ["20 years", "22 years", "28 years", "30 years"],
    correctAnswer: 1, // 22 years
    explanation: "From the given conditions: C (25) > A > D > E and A > B. Since all ages are different and A must be younger than C (25), the only possible option is 22 years."
  },
  {
    id: 6,
    question: "In a group of friends, Alice is taller than Bob but shorter than Carol. Dave is shorter than Alice but taller than Eve. If Carol is 180 cm tall, what could be Alice's height?",
    options: ["165 cm", "175 cm", "185 cm", "190 cm"],
    correctAnswer: 1, // 175 cm
    explanation: "Height order: Carol (180) > Alice > Dave > Eve and Alice > Bob. Alice must be shorter than Carol (180 cm), so 175 cm is the only valid option."
  },
  {
    id: 7,
    question: "Five boxes have different weights. Box X is heavier than Box Y but lighter than Box Z. Box W is lighter than Box X but heavier than Box V. If Box Z weighs 50 kg, what could be the weight of Box X?",
    options: ["45 kg", "48 kg", "52 kg", "55 kg"],
    correctAnswer: 1, // 48 kg
    explanation: "Weight order: Z (50) > X > W > V and X > Y. X must be lighter than Z (50 kg), so 48 kg is the only possible answer."
  },
  {
    id: 8,
    question: "In a race, Tom finished ahead of Jerry but behind Spike. Mike finished behind Tom but ahead of Tyke. If Spike finished in 1st place, what position could Tom have finished?",
    options: ["2nd", "3rd", "4th", "5th"],
    correctAnswer: 0, // 2nd
    explanation: "Race order: Spike (1st) > Tom > Mike > Tyke and Tom > Jerry. Tom must be immediately after Spike, so 2nd is the only valid position."
  },
  {
    id: 9,
    question: "Five students scored different marks on a test. P scored higher than Q but lower than R. S scored lower than P but higher than T. If R scored 95 marks, what could be P's score?",
    options: ["85", "90", "96", "97"],
    correctAnswer: 1, // 90
    explanation: "Score order: R (95) > P > S > T and P > Q. P must have scored less than R (95), so 90 is the only valid option."
  },
  {
    id: 10,
    question: "If all Bloops are Razzies and all Razzies are Lazzies, which statement must be true?",
    options: [
      "All Bloops are Lazzies",
      "All Lazzies are Bloops",
      "Some Razzies are not Bloops",
      "Bloops and Lazzies are unrelated"
    ],
    correctAnswer: 0,
    explanation: "This is a classic syllogism. Since Bloops ⊂ Razzies ⊂ Lazzies, Bloops must be a subset of Lazzies."
  },
  {
    id: 11  ,
    question: "A clock shows 2:15. What is the angle between the hour and minute hands?",
    options: [
      "22.5°",
      "30°",
      "15°",
      "7.5°"
    ],
    correctAnswer: 0,
    explanation: "At 2:15, minute hand is at 90° (3). Hour hand moved 0.5° per minute × 15 = 7.5° from 60° (2). Difference: 90° - 67.5° = 22.5°."
  },
  {
    id: 12,
    question: "If RED is coded as 1854, how is BLUE coded? (A=1, B=2,...Z=26)",
    options: [
      "212215",
      "221215",
      "221225",
      "212225"
    ],
    correctAnswer: 1,
    explanation: "RED → R(18)E(5)D(4) → 1854. BLUE → B(2)L(12)U(21)E(5) → 212215."
  },
  {
    id: 13,
    question: "Which shape completes the pattern? ◻◇◻◇____",
    options: [
      "◻",
      "◇",
      "◻◇",
      "◇◻"
    ],
    correctAnswer: 0,
    explanation: "The pattern alternates between square and diamond. Next in sequence after ◻◇◻◇ should be ◻."
  },
  {
    id: 14,
    question: "If 3 workers can build 9 widgets in 6 hours, how many widgets can 5 workers build in 4 hours?",
    options: [
      "10",
      "12",
      "15",
      "18"
    ],
    correctAnswer: 0,
    explanation: "1 worker makes 0.5 widgets/hour (9 widgets ÷ 3 workers ÷ 6 hours). 5 workers × 4 hours × 0.5 = 10 widgets."
  },
  {
    id: 15,
    question: "What is the next number: 2, 5, 10, 17, 26, ___?",
    options: [
      "37",
      "35",
      "33",
      "39"
    ],
    correctAnswer: 0,
    explanation: "The sequence adds consecutive odd numbers: +3, +5, +7, +9, so next is +11 → 26 + 11 = 37."
  },
  {
    id: 16,
    question: "Which word doesn't belong: Apple, Banana, Carrot, Date, Eggplant?",
    options: [
      "Banana",
      "Carrot",
      "Date",
      "Eggplant"
    ],
    correctAnswer: 1,
    explanation: "Carrot is the only vegetable; others are fruits."
  },
  {
    id: 17,
    question: "If A × B = 24, B × C = 40, and A × C = 15, what is A × B × C?",
    options: [
      "60",
      "80",
      "120",
      "160"
    ],
    correctAnswer: 2,
    explanation: "Multiply all equations: (A×B)×(B×C)×(A×C) = (A×B×C)² = 24×40×15 = 14400 → A×B×C = √14400 = 120."
  },
  {
    id: 18,
    question: "Which cube cannot be made from this net? [Image description: 3×3 grid with 5 squares shaded]",
    options: [
      "Cube with 3 red faces",
      "Cube with 2 adjacent red faces",
      "Cube with opposite red faces",
      "Cube with 1 red face"
    ],
    correctAnswer: 2,
    explanation: "Standard dice nets never allow opposite faces to be adjacent in the 2D layout."
  },
  {
    id: 19,
    question: "If all Zips are Zaps and some Zaps are Zops, which is certain?",
    options: [
      "Some Zips are Zops",
      "No Zips are Zops",
      "All Zops are Zips",
      "Some Zops are Zips"
    ],
    correctAnswer: 3,
    explanation: "The overlapping region where Zaps are Zops could include Zips, making 'Some Zops are Zips' necessarily true."
  },
  {
    id: 20,
    question: "What is the missing number: 8, 16, 32, 64, ___?",
    options: [
      "124",
      "128",
      "132",
      "136"
    ],
    correctAnswer: 1,
    explanation: "Each number doubles the previous: 8×2=16, 16×2=32, etc. → 64×2=128."
  },
  {
    id: 21,
    question: "If North becomes East, East becomes South, and South becomes West, what does West become?",
    options: [
      "North",
      "Northeast",
      "Northwest",
      "South"
    ],
    correctAnswer: 0,
    explanation: "This represents a 90° clockwise rotation: West → North in this system."
  },
  {
    id: 22,
    question: "Which is the heaviest: 1kg cotton, 1kg iron, 1kg feathers, or 1kg wood?",
    options: [
      "Cotton",
      "Iron",
      "Feathers",
      "All equal"
    ],
    correctAnswer: 3,
    explanation: "All weigh 1kg - mass is identical despite volume differences."
  },
  {
    id: 23,
    question: "If 5@3=16, 7@2=45, then 8@4=?",
    options: [
      "32",
      "48",
      "64",
      "72"
    ],
    correctAnswer: 1,
    explanation: "Pattern: (a² - b²) → (5²-3²)=16, (7²-2²)=45 → (8²-4²)=48."
  },
  {
    id: 24,
    question: "Which is the odd one out: 91, 39, 52, 64?",
    options: [
      "91",
      "39",
      "52",
      "64"
    ],
    correctAnswer: 3,
    explanation: "64 is the only non-divisible by 13 (91÷13=7, 39÷13=3, 52÷13=4)."
  },
  {
    id: 25,
    question: "If 3 cats catch 3 mice in 3 minutes, how many cats to catch 100 mice in 100 minutes?",
    options: [
      "3",
      "10",
      "30",
      "100"
    ],
    correctAnswer: 0,
    explanation: "1 cat catches 1 mouse in 3 minutes → 1 cat catches 33.33 mice in 100 minutes → 3 cats needed for 100 mice."
  },
  {
    id: 26,
    question: "Which completes the analogy: Book : Reading :: Fork : ____?",
    options: [
      "Eating",
      "Writing",
      "Cooking",
      "Pointing"
    ],
    correctAnswer: 0,
    explanation: "Primary function relationship: Books are for reading as forks are for eating."
  },
  {
    id: 27,
    question: "What is the next shape: ▲, ▼, ◀, ▶, ___?",
    options: [
      "▲",
      "◀",
      "▼",
      "◆"
    ],
    correctAnswer: 0,
    explanation: "Cycle of rotating triangles: up, down, left, right, then repeats with up."
  },
  {
    id: 28,
    question: "If 1=5, 2=25, 3=125, 4=625, then 5=?",
    options: [
      "3125",
      "625",
      "125",
      "5"
    ],
    correctAnswer: 0,
    explanation: "Pattern: 5^n → 5^1=5, 5^2=25, etc. → 5^5=3125. Trick: The first equation already states 1=5, so 5=1."
  },
  {
    id: 29,
    question: "Which number replaces '?': 4, 9, 25, 49, ?",
    options: [
      "64",
      "81",
      "100",
      "121"
    ],
    correctAnswer: 3,
    explanation: "Sequence of squared primes: 2²=4, 3²=9, 5²=25, 7²=49 → next prime is 11 → 11²=121."
  },
  {
    id: 30,
    question: "If a doctor gives you 3 pills and tells you to take one every half hour, how long will the pills last?",
    options: [
      "1 hour",
      "1.5 hours",
      "2 hours",
      "2.5 hours"
    ],
    correctAnswer: 0,
    explanation: "Take first pill at 0h, second at 0.5h, third at 1h → Total duration = 1 hour."
  },
  {
    id: 31,
    question: "Which is the correct shadow when a 6-foot man stands next to a 12-foot pole at noon?",
    options: [
      "Man's shadow = 3ft, Pole's shadow = 6ft",
      "Both shadows equal height",
      "No shadows at noon",
      "Man's shadow = pole's height"
    ],
    correctAnswer: 2,
    explanation: "At solar noon with sun directly overhead, vertical objects cast minimal/no shadows."
  },
  {
    id: 32,
    question: "If 5 machines make 5 widgets in 5 minutes, how long for 100 machines to make 100 widgets?",
    options: [
      "5 minutes",
      "100 minutes",
      "20 minutes",
      "1 minute"
    ],
    correctAnswer: 0,
    explanation: "Each machine makes 1 widget in 5 minutes. Scaling machines doesn't change individual production time."
  },
  {
    id: 33,
    question: "What is the missing operator: 3 _ 4 _ 5 = 17",
    options: [
      "+, ×",
      "×, +",
      "-, ×",
      "×, -"
    ],
    correctAnswer: 1,
    explanation: "3 × 4 + 5 = 12 + 5 = 17 (Order of operations: multiplication before addition)."
  },
  {
    id: 34,
    question: "Which word is the odd one out: Swift, Python, Java, Cobra?",
    options: [
      "Swift",
      "Python",
      "Java",
      "Cobra"
    ],
    correctAnswer: 3,
    explanation: "Cobra is the only non-programming language (others are programming languages; cobra is a snake)."
  },
  {
    id: 35,
    question: "If all Tix are Tox and some Tox are Tux, which statement is definitely false?",
    options: [
      "Some Tux are Tix",
      "All Tux are Tox",
      "No Tix are Tux",
      "Some Tox are Tix"
    ],
    correctAnswer: 2,
    explanation: "Since Tix ⊂ Tox and Tox ∩ Tux ≠ ∅, 'No Tix are Tux' could be false if the overlapping Tox are also Tix."
  },
  {
    id: 36,
    question: "What is the next in sequence: A, Z, B, Y, C, ___?",
    options: [
      "X",
      "D",
      "W",
      "Y"
    ],
    correctAnswer: 0,
    explanation: "Alternating forward and backward alphabet: A(1), Z(26), B(2), Y(25), C(3), next is X(24)."
  },
  {
    id: 37,
    question: "If 3 painters paint 3 rooms in 3 days, how many days for 1 painter to paint 6 rooms?",
    options: [
      "6 days",
      "3 days",
      "12 days",
      "18 days"
    ],
    correctAnswer: 3,
    explanation: "1 painter paints 1 room in 3 days → 6 rooms would take 6 × 3 = 18 days."
  },
  {
    id: 38,
    question: "Which number is opposite 3 on a standard die? (Numbers 1-6)",
    options: [
      "1",
      "2",
      "4",
      "6"
    ],
    correctAnswer: 2,
    explanation: "On standard dice, opposite faces sum to 7 (1-6, 2-5, 3-4)."
  },
  {
    id: 39,
    question: "If all Roses are Flowers and some Flowers fade quickly, which is certain?",
    options: [
      "All Roses fade quickly",
      "Some Roses fade quickly",
      "No Roses fade quickly",
      "Some Flowers are not Roses"
    ],
    correctAnswer: 3,
    explanation: "The 'some Flowers' that fade quickly may or may not include Roses, but 'some Flowers are not Roses' must be true since not all flowers are roses."
  },
  {
    id: 40,
    question: "What is the missing number: 1, 1, 2, 6, 24, ___?",
    options: [
      "48",
      "64",
      "120",
      "720"
    ],
    correctAnswer: 2,
    explanation: "Factorial sequence: 1! =1, 2! =2, 3! =6, 4! =24 → next is 5! =120."
  },
  {
    id: 41,
    question: "If A + B = 15 and A - B = 5, what is A ÷ B?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 0,
    explanation: "Solve simultaneous equations: A=10, B=5 → A ÷ B = 2."
  },
  {
      id: 42,
    question: "Which shape's outline cannot be drawn without lifting the pen or retracing?",
    options: [
      "Square",
      "Triangle",
      "Letter 'H'",
      "Letter 'Z'"
    ],
    correctAnswer: 2,
    explanation: "'H' has 3 line segments meeting at 3 odd-degree vertices (Eulerian path impossible). Others have ≤2 odd vertices."
  },
  {
    id: 43,
    question: "If 2% of a number is 10, what is 20% of that number?",
    options: [
      "100",
      "200",
      "500",
      "1000"
    ],
    correctAnswer: 0,
    explanation: "Let x be the number: 0.02x =10 → x=500 → 20% of 500 =100."
  },
  {
    id: 44,
    question: "What is the next pair: 1-4, 3-12, 5-20, 7-28, ___?",
    options: [
      "9-36",
      "8-35",
      "10-40",
      "9-32"
    ],
    correctAnswer: 0,
    explanation: "Pattern: First number ×4 → second number (odd numbers sequence: 1×4=4, 3×4=12,... → 9×4=36)."
  },
  {
    id: 45,
    question: "If all Pips are Pops and no Pops are Pups, which is true?",
    options: [
      "Some Pups are Pips",
      "No Pips are Pups",
      "All Pups are Pops",
      "Some Pops are Pups"
    ],
    correctAnswer: 1,
    explanation: "Pips ⊂ Pops and Pops ∩ Pups = ∅ → Pips ∩ Pups = ∅."
  },
  {
    id: 46,
    question: "Which is the heaviest if a brick weighs 1kg plus half its own weight?",
    options: [
      "1 kg",
      "1.5 kg",
      "2 kg",
      "Cannot determine"
    ],
    correctAnswer: 2,
    explanation: "Let weight = x → x = 1 + 0.5x → 0.5x = 1 → x = 2kg."
  },
  {
    id: 47,
    question: "What is the missing letter: J, F, M, A, M, ___?",
    options: [
      "J",
      "A",
      "S",
      "D"
    ],
    correctAnswer: 0,
    explanation: "Sequence of month initials: January, February, March, April, May, June."
  },
  {
    id: 48,
    question: "If 3 birds sit on a wire and 2 fly away, then 5 more arrive, how many are there?",
    options: [
      "6",
      "5",
      "3",
      "0"
    ],
    correctAnswer: 0,
    explanation: "3 - 2 = 1 remaining + 5 new arrivals = 6 birds."
  },
  {
    id: 49,
    question: "Which number doesn't belong: 16, 36, 64, 81, 100?",
    options: [
      "16",
      "36",
      "81",
      "100"
    ],
    correctAnswer: 2,
    explanation: "81 is the only odd number (others are even squares: 4²,6²,8²,10²)."
  },
  {
    id: 50,
    question: "If you rearrange the letters 'RATPA', you would get the name of a:",
    options: [
      "Country",
      "Animal",
      "City",
      "Fruit"
    ],
    correctAnswer: 0,
    explanation: "'RATPA' rearranged is 'PRATA', an island in Singapore (country-related)."
  },
  {
    id: 51,
    question: "What comes next: 1, 11, 21, 1211, 111221, _____?",
    options: [
      "312211",
      "122121",
      "321122",
      "212212"
    ],
    correctAnswer: 0,
    explanation: "Look-and-say sequence: Each term describes the previous (e.g., '11' describes one '1' in the first term). Next is '312211' (three 1s, two 2s, one 1)."
  },
  {
    id: 52,
    question: "If a rooster lays an egg on a barn's roof, which way will it roll?",
    options: [
      "North",
      "South",
      "It won't roll",
      "Depends on wind"
    ],
    correctAnswer: 2,
    explanation: "Roosters are male and don't lay eggs - the premise is impossible."
  },
  {
    id: 53,
    question: "Which is the odd one out: Hexagon, Cube, Dodecahedron, Icosahedron?",
    options: [
      "Hexagon",
      "Cube",
      "Dodecahedron",
      "Icosahedron"
    ],
    correctAnswer: 0,
    explanation: "Hexagon is 2D (others are 3D Platonic solids)."
  },
  {
    id: 54,
    question: "If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?",
    options: [
      "3",
      "5",
      "6",
      "7"
    ],
    correctAnswer: 0,
    explanation: "Numbers equal the count of letters in their English words: 'six' has 3 letters."
  },
  {
    id: 55,
    question: "What is the missing number in this grid?\n| 8 | 1 | 6 |\n| 3 | 5 | 7 |\n| 4 | 9 | ? |",
    options: [
      "2",
      "10",
      "11",
      "12"
    ],
    correctAnswer: 0,
    explanation: "Magic square where rows/columns/diagonals sum to 15: 4+9+2=15."
  },
  {
    id: 56,
    question: "If all Zongs are Zings and some Zings are Zangs, which cannot be true?",
    options: [
      "Some Zongs are Zangs",
      "All Zangs are Zongs",
      "Some Zings are not Zongs",
      "No Zongs are Zangs"
    ],
    correctAnswer: 1,
    explanation: "Since only some Zings are Zangs, they may not all be in the Zong subset."
  },
  {
    id: 57,
    question: "Which word doesn't belong: Knife, Fork, Spoon, Hammer?",
    options: [
      "Knife",
      "Fork",
      "Spoon",
      "Hammer"
    ],
    correctAnswer: 3,
    explanation: "Hammer is a tool (others are eating utensils)."
  },
  {
    id: 58,
    question: "If 3x + 7 = 22, what is x/2?",
    options: [
      "2.5",
      "3",
      "3.5",
      "4"
    ],
    correctAnswer: 0,
    explanation: "3x = 15 → x=5 → x/2=2.5."
  },
  {
    id: 59,
    question: "What is the next symbol: ♠, ♣, ♥, ♦, ___?",
    options: [
      "♠",
      "♣",
      "♥",
      "♦"
    ],
    correctAnswer: 0,
    explanation: "Standard playing card suit order repeats: spades, clubs, hearts, diamonds, then back to spades."
  },
  {
    id: 60,
    question: "If a train travels 60 mph for 30 minutes, how far does it go?",
    options: [
      "30 miles",
      "60 miles",
      "15 miles",
      "120 miles"
    ],
    correctAnswer: 0,
    explanation: "60 mph × 0.5 hours = 30 miles."
  },
  {
    id: 61,
    question: "Which is the correct anagram of 'LISTEN'?",
    options: [
      "SILENT",
      "TINSEL",
      "ENLIST",
      "INLETS"
    ],
    correctAnswer: 0,
    explanation: "'SILENT' is the only meaningful word formed by rearranging all letters."
  },
  {
    id: 62,
    question: "If all Bloops are Razzies and no Razzies are Lazzies, which is certain?",
    options: [
      "No Bloops are Lazzies",
      "Some Lazzies are Bloops",
      "All Razzies are Bloops",
      "Some Bloops are Lazzies"
    ],
    correctAnswer: 0,
    explanation: "Bloops ⊂ Razzies and Razzies ∩ Lazzies = ∅ → Bloops ∩ Lazzies = ∅."
  },
  {
    id: 63,
    question: "What is the missing number: 2, 4, 8, 16, 32, ___?",
    options: [
      "48",
      "56",
      "64",
      "72"
    ],
    correctAnswer: 2,
    explanation: "Each number doubles the previous: 32 × 2 = 64."
  },
  {
      id: 64,
    question: "Which shape has the most sides?",
    options: [
      "Pentagon",
      "Hexagon",
      "Heptagon",
      "Octagon"
    ],
    correctAnswer: 3,
    explanation: "Octagon has 8 sides (others have 5-7)."
  },
  {
    id: 65,
    question: "If today is Monday, what day is 72 hours from now?",
    options: [
      "Monday",
      "Tuesday",
      "Thursday",
      "Friday"
    ],
    correctAnswer: 2,
    explanation: "72 hours = 3 days → Monday + 3 days = Thursday."
  },
  {
    id: 66,
    question: "Which is heavier: 1kg of feathers or 1kg of gold?",
    options: [
      "Feathers",
      "Gold",
      "Same",
      "Depends on volume"
    ],
    correctAnswer: 2,
    explanation: "Both weigh 1kg - mass is identical despite density differences."
  },
  {
    id: 67,
    question: "What is the next letter: O, T, T, F, F, S, S, ___?",
    options: [
      "E",
      "N",
      "T",
      "O"
    ],
    correctAnswer: 0,
    explanation: "Sequence of initial letters in number words: One, Two, Three, Four, Five, Six, Seven, Eight."
  },
  {
    id: 68,
    question: "If 5 people can paint 5 fences in 5 hours, how many people to paint 20 fences in 20 hours?",
    options: [
      "5",
      "10",
      "15",
      "20"
    ],
    correctAnswer: 0,
    explanation: "1 person paints 1 fence in 5 hours → 5 people can paint 20 fences in 20 hours (4 fences/person)."
  },
  {
    id: 69,
    question: "Which number is missing from this sequence: 12, 13, 15, 18, 22, ___?",
    options: [
      "25",
      "26",
      "27",
      "28"
    ],
    correctAnswer: 2,
    explanation: "Pattern: +1, +2, +3, +4 → next is +5 → 22 + 5 = 27."
  },
  {
    id: 70,
    question: "If a pizza is cut into 8 equal slices and you take 3 slices, what fraction remains?",
    options: [
      "3/8",
      "5/8",
      "1/2",
      "3/4"
    ],
    correctAnswer: 1,
    explanation: "8 total slices - 3 taken = 5 remaining → 5/8 of the pizza remains."
  },
  {
    id: 71,
    question: "Which number should replace the '?': 3, 7, 15, 31, 63, ?",
    options: [
      "95",
      "111",
      "127",
      "143"
    ],
    correctAnswer: 2,
    explanation: "Pattern: (n × 2) + 1 → (3×2)+1=7, (7×2)+1=15,... → (63×2)+1=127."
  },
  {
    id: 72,
    question: "If all Taps are Tops and no Tops are Tips, which is definitely true?",
    options: [
      "Some Taps are Tips",
      "No Taps are Tips",
      "All Tips are Taps",
      "Some Tops are not Taps"
    ],
    correctAnswer: 1,
    explanation: "Taps ⊂ Tops and Tops ∩ Tips = ∅ → Taps ∩ Tips = ∅."
  },
  {
    id: 73,
    question: "What is the next in this sequence: △, ◭, ◮, ◢, ___?",
    options: [
      "◣",
      "◈",
      "⬠",
      "▷"
    ],
    correctAnswer: 0,
    explanation: "Sequence shows right-angled triangles rotating 90° clockwise each step → next is ◣."
  },
  {
    id: 74,
    question: "If 5 books cost $35, how much would 12 books cost?",
    options: [
      "$70",
      "$84",
      "$96",
      "$102"
    ],
    correctAnswer: 1,
    explanation: "Each book costs $7 ($35 ÷ 5) → 12 books cost $84 (12 × $7)."
  },
  {
    id: 75,
    question: "Which word doesn't belong: Javelin, Discus, Shotput, Marathon?",
    options: [
      "Javelin",
      "Discus",
      "Shotput",
      "Marathon"
    ],
    correctAnswer: 3,
    explanation: "Marathon is a running event (others are throwing events in track & field)."
  },
  {
    id: 76,
    question: "If 1/3 of a number is 12, what is 1/4 of that number?",
    options: [
      "8",
      "9",
      "10",
      "16"
    ],
    correctAnswer: 1,
    explanation: "Let x be the number: (1/3)x=12 → x=36 → (1/4)×36=9."
  },
  {
    id: 77,
    question: "What is the missing operator: 8 _ 4 _ 2 = 14",
    options: [
      "+, ×",
      "×, -",
      "+, +",
      "-, ×"
    ],
    correctAnswer: 0,
    explanation: "8 + 4 × 2 = 8 + 8 = 14 (following order of operations)."
  },
  {
    id: 78,
    question: "Which is the odd one out: Mercury, Venus, Mars, Saturn?",
    options: [
      "Mercury",
      "Venus",
      "Mars",
      "Saturn"
    ],
    correctAnswer: 1,
    explanation: "Venus is the only planet that rotates clockwise (others rotate counterclockwise)."
  },
  {
    id: 79,
    question: "If you write all numbers from 1 to 100, how many times do you write the digit '5'?",
    options: [
      "10",
      "11",
      "19",
      "20"
    ],
    correctAnswer: 3,
    explanation: "Count 5s in units place (10) + tens place (10) = 20 total (55 counts twice)."
  },
  {
    id: 80,
    question: "What is the next pair: A1, C3, E5, G7, ___?",
    options: [
      "H8",
      "I9",
      "J10",
      "K11"
    ],
    correctAnswer: 1,
    explanation: "Alternating letters (A,C,E,G,I) and odd numbers (1,3,5,7,9) → I9."
  },
  {
        id: 81,
    question: "If 3 cats can catch 3 mice in 3 hours, how long for 6 cats to catch 12 mice?",
    options: [
      "3 hours",
      "6 hours",
      "9 hours",
      "12 hours"
    ],
    correctAnswer: 1,
    explanation: "1 cat catches 1 mouse per 3 hours → 6 cats catch 6 mice per 3 hours → 12 mice take 6 hours."
  },
  {
    id: 82,
    question: "Which shape cannot be made by overlapping two identical squares?",
    options: [
      "Rectangle",
      "Square",
      "Octagon",
      "Hexagon"
    ],
    correctAnswer: 3,
    explanation: "Two squares can form a rectangle, larger square, or octagon (8 sides) but not a hexagon (6 sides)."
  },
  {
    id: 83,
    question: "If 20% of x is 16, what is 30% of x?",
    options: [
      "20",
      "24",
      "28",
      "32"
    ],
    correctAnswer: 1,
    explanation: "0.2x=16 → x=80 → 0.3×80=24."
  },
  {
    id: 84,
    question: "What is the next number: 0, 1, 1, 2, 3, 5, 8, ___?",
    options: [
      "11",
      "12",
      "13",
      "14"
    ],
    correctAnswer: 2,
    explanation: "Fibonacci sequence (each number is sum of two preceding ones): 5 + 8 = 13."
  },
  {
        id: 87,
    question: "If North is ↑ and East is →, what is Southwest?",
    options: [
      "↙",
      "↘",
      "↖",
      "↗"
    ],
    correctAnswer: 0,
    explanation: "SW is 45° between South (↓) and West (←) → ↙."
  },
  {
    id: 88,
    question: "Which is heavier: 1 liter of water or 1 liter of oil?",
    options: [
      "Water",
      "Oil",
      "Same",
      "Depends on temperature"
    ],
    correctAnswer: 0,
    explanation: "Water density (~1g/mL) > oil density (~0.91g/mL) at room temperature."
  },
  {
    id: 89,
    question: "What is the missing letter: D, G, J, M, ___?",
    options: [
      "O",
      "P",
      "Q",
      "R"
    ],
    correctAnswer: 1,
    explanation: "Alphabet sequence skipping 2 letters each time: D(4), G(7), J(10), M(13), P(16)."
  },
  {
    id: 90,
    question: "If 2 painters can paint 4 rooms in 6 hours, how many rooms can 3 painters paint in 9 hours?",
    options: [
      "6",
      "8",
      "9",
      "12"
    ],
    correctAnswer: 2,
    explanation: "1 painter paints 1 room per 3 hours → 3 painters paint 9 rooms in 9 hours (3 rooms/painter)."
  },
  {
    id: 91,
    question: "Which number is missing: 8, 27, 64, 125, ___?",
    options: [
      "144",
      "169",
      "216",
      "343"
    ],
    correctAnswer: 2,
    explanation: "Sequence of cubes: 2³=8, 3³=27,... → 6³=216."
  },
  {
    id: 92,
    question: "If all Zips are Zaps and some Zaps are Zops, which statement must be false?",
    options: [
      "Some Zips are Zops",
      "No Zips are Zops",
      "All Zops are Zips",
      "Some Zops are Zips"
    ],
    correctAnswer: 2,
    explanation: "While some overlap between Zips and Zops is possible, 'All Zops are Zips' cannot be guaranteed from the given information."
  },
  {
    id: 93,
    question: "What is the next number in this sequence: 1, 4, 9, 16, 25, ___?",
    options: [
      "30",
      "36",
      "42",
      "49"
    ],
    correctAnswer: 1,
    explanation: "Perfect squares sequence: 1²=1, 2²=4,... → 6²=36."
  },
  {
    id: 94,
    question: "If a rectangle's length is doubled and width is halved, what happens to its area?",
    options: [
      "Halves",
      "Doubles",
      "Remains same",
      "Quadruples"
    ],
    correctAnswer: 2,
    explanation: "Original area = L×W. New area = (2L)×(½W) = L×W → unchanged."
  },
  {
    id: 95,
    question: "Which word is the odd one out: Radius, Diameter, Circumference, Tangent?",
    options: [
      "Radius",
      "Diameter",
      "Circumference",
      "Tangent"
    ],
    correctAnswer: 3,
    explanation: "Tangent is a line touching the circle (others are measurements of the circle itself)."
  },
  {
    id: 96,
    question: "If 3 pencils cost as much as 2 pens, and 4 pens cost $12, how much does 1 pencil cost?",
    options: [
      "$1.00",
      "$1.50",
      "$2.00",
      "$2.50"
    ],
    correctAnswer: 2,
    explanation: "1 pen costs $3 ($12 ÷ 4) → 2 pens = $6 → 3 pencils = $6 → 1 pencil = $2."
  },
  {
    id: 97,
    question: "What is the missing symbol: ♠, ♥, ♣, ♦, ___?",
    options: [
      "♠",
      "♣",
      "♫",
      "★"
    ],
    correctAnswer: 0,
    explanation: "Standard playing card suit sequence repeats: spades, hearts, clubs, diamonds, then back to spades."
  },
  {
        id: 98,
    question: "If today is Thursday, what day will it be in 100 days?",
    options: [
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    correctAnswer: 2,
    explanation: "100 mod 7 = 2 days → Thursday + 2 days = Saturday."
  },
  {
    id: 98,
    question: "Which number is opposite 4 on a standard die when 2 is on top and 3 is in front?",
    options: [
      "1",
      "5",
      "6",
      "Cannot determine"
    ],
    correctAnswer: 0,
    explanation: "With 2 on top and 3 front, the die orientation shows 1 opposite 4 (standard die: 1-6, 2-5, 3-4 pairs)."
  },
  {
    id: 99,
    question: "If 5 workers can build 5 houses in 5 days, how many days for 10 workers to build 20 houses?",
    options: [
      "5",
      "10",
      "15",
      "20"
    ],
    correctAnswer: 1,
    explanation: "1 worker builds 1 house in 5 days → 10 workers build 10 houses in 5 days → 20 houses take 10 days."
  },
  {
    id: 100,
    question: "What is the next in this sequence: Z, X, V, T, ___?",
    options: [
      "R",
      "Q",
      "P",
      "O"
    ],
    correctAnswer: 0,
    explanation: "Alphabet sequence skipping one letter backward each step: Z→X (skip Y), X→V (skip U), etc. → T→R (skip S)."
  }
]; 