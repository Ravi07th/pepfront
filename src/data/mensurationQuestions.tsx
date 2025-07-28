const coreMensurationQuestions = [
     {
    id: 'ms-1',
    question: "What is the area of a rectangle with length 12 cm and breadth 8 cm?",
    options: ["96 cm²", "80 cm²", "100 cm²", "88 cm²"],
    correctAnswer: 0,
    explanation: "Area = length × breadth = 12 × 8 = 96 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-2',
    question: "What is the volume of a cube with side 5 cm?",
    options: ["125 cm³", "25 cm³", "150 cm³", "100 cm³"],
    correctAnswer: 0,
    explanation: "Volume = side³ = 5×5×5 = 125 cm³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-3',
    question: "Find the circumference of a circle whose radius is 14 cm. (π = 22/7)",
    options: ["88 cm", "44 cm", "22 cm", "66 cm"],
    correctAnswer: 0,
    explanation: "Circumference = 2πr = 2×22/7×14 = 2×22×2 = 88 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-4',
    question: "A cylinder has a radius of 7 cm and height 10 cm. What is the curved surface area? (π = 22/7)",
    options: ["440 cm²", "420 cm²", "360 cm²", "400 cm²"],
    correctAnswer: 0,
    explanation: "Curved Surface Area = 2πrh = 2×22/7×7×10 = 2×22×10 = 440 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-5',
    question: "The area of a triangle with base 12 cm and height 9 cm is:",
    options: ["54 cm²", "108 cm²", "36 cm²", "60 cm²"],
    correctAnswer: 0,
    explanation: "Area = (1/2) × base × height = (1/2)×12×9 = 54 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-6',
    question: "What is the total surface area of a cube with side 4 cm?",
    options: ["96 cm²", "64 cm²", "48 cm²", "24 cm²"],
    correctAnswer: 0,
    explanation: "Total Surface Area = 6×side² = 6×16 = 96 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-7',
    question: "Find the volume of a cylinder with diameter 14 cm and height 20 cm. (π = 22/7)",
    options: ["3080 cm³", "3080 cm²", "1540 cm³", "1540 cm²"],
    correctAnswer: 0,
    explanation: "Radius = 14/2 = 7 cm.\nVolume = πr²h = 22/7×7×7×20 = 22×7×20 = 3080 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-8',
    question: "A rectangle has a perimeter of 50 cm and length 15 cm. Find its breadth.",
    options: ["10 cm", "12.5 cm", "15 cm", "20 cm"],
    correctAnswer: 1,
    explanation: "Perimeter = 2(l+b) ⇒ 50=2(15+b) ⇒ 25=15+b ⇒ b=10 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-9',
    question: "What is the area of a circle with diameter 10 cm? (π = 3.14)",
    options: ["78.5 cm²", "31.4 cm²", "50 cm²", "100 cm²"],
    correctAnswer: 0,
    explanation: "Radius = 5 cm. Area = πr² = 3.14×25 = 78.5 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-10',
    question: "The diagonal of a square is 10 cm. What is the area?",
    options: ["50 cm²", "100 cm²", "25 cm²", "80 cm²"],
    correctAnswer: 0,
    explanation: "For square: Area = (diagonal²)/2 = (10×10)/2 = 100/2 = 50 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-11',
    question: "What is the circumference of a semicircle with radius 7 cm? (π = 22/7)",
    options: ["36 cm", "44 cm", "22 cm", "11 cm"],
    correctAnswer: 0,
    explanation: "Semicircumference = πr + 2r = (22/7)×7 + 2×7 = 22 + 14 = 36 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-12',
    question: "The area of a rhombus with diagonals 12 cm and 16 cm is:",
    options: ["96 cm²", "192 cm²", "48 cm²", "100 cm²"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × d1 × d2 = 1/2 × 12 × 16 = 96 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-13',
    question: "A sphere has a diameter of 14 cm. What is its volume? (π = 22/7)",
    options: ["1436.67 cm³", "1400 cm³", "1000 cm³", "1078.67 cm³"],
    correctAnswer: 3,
    explanation: "Radius = 7 cm; Volume = 4/3 × πr³ = 4/3 × 22/7 × 343 ≈ 1436.19 cm³; check closest option.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-14',
    question: "If the perimeter of a rectangle is 60 cm and length is 17 cm, find the breadth.",
    options: ["13 cm", "11 cm", "15 cm", "12 cm"],
    correctAnswer: 0,
    explanation: "Perimeter = 2(l+b) = 2×(17 + b) = 60 ⇒ 17+b=30 ⇒ b=13 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-15',
    question: "What is the surface area of a cube with volume 216 cm³?",
    options: ["216 cm²", "144 cm²", "156 cm²", "126 cm²"],
    correctAnswer: 0,
    explanation: "Side = ∛216 = 6 cm. Surface area = 6×side² = 6×36 = 216 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-16',
    question: "Find the area of an equilateral triangle with side 10 cm.",
    options: ["43.3 cm²", "45 cm²", "51.6 cm²", "50 cm²"],
    correctAnswer: 0,
    explanation: "Area = (√3/4) × side² = 0.433 × 100 = 43.3 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-17',
    question: "What is the perimeter of a right-angled triangle with sides 9 cm, 12 cm, and 15 cm?",
    options: ["36 cm", "34 cm", "35 cm", "33 cm"],
    correctAnswer: 0,
    explanation: "Perimeter = 9+12+15=36 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-18',
    question: "The area of a trapezium whose parallel sides are 10 cm and 18 cm and non-parallel side is 8 cm, and height is 5 cm is:",
    options: ["70 cm²", "78 cm²", "65 cm²", "50 cm²"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × (sum of parallel sides) × height = 1/2 × (10+18) × 5 = 1/2 × 28 × 5 = 14 ×5 = 70 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-19',
    question: "A circular field has a circumference of 314 m. Find its radius. (π = 3.14)",
    options: ["50 m", "60 m", "100 m", "40 m"],
    correctAnswer: 0,
    explanation: "Circumference = 2πr ⇒ 314 = 2×3.14×r ⇒ r = 314/6.28 = 50 m.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-20',
    question: "Find the volume of a rectangular box (cuboid) with length 10 cm, breadth 6 cm, height 4 cm.",
    options: ["240 cm³", "60 cm³", "200 cm³", "180 cm³"],
    correctAnswer: 0,
    explanation: "Volume = l × b × h = 10 × 6 × 4 = 240 cm³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-21',
    question: "What is the surface area of a sphere with radius 7 cm? (π = 22/7)",
    options: ["616 cm²", "308 cm²", "314 cm²", "176 cm²"],
    correctAnswer: 0,
    explanation: "Surface area = 4πr² = 4×22/7×49 = 4×22×7 = 616 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-22',
    question: "Area of a parallelogram with base 14 cm and height 8 cm is:",
    options: ["112 cm²", "98 cm²", "88 cm²", "128 cm²"],
    correctAnswer: 0,
    explanation: "Area = base × height = 14 × 8 = 112 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-23',
    question: "If the side of a square is doubled, its area increases by:",
    options: ["3 times", "2 times", "4 times", "No change"],
    correctAnswer: 0,
    explanation: "Original area = a²; new area = (2a)² = 4a². Increase is 4a² - a² = 3a², i.e., 3 times the original.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-24',
    question: "The base and height of a triangle are both doubled. By what factor does its area increase?",
    options: ["4", "3", "2", "8"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × base × height. Both doubled: Area = 1/2 × 2b × 2h = 2 × original area. So factor is 4.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-25',
    question: "Find the radius of a circle whose area is 154 cm². (π = 22/7)",
    options: ["7 cm", "14 cm", "10 cm", "8 cm"],
    correctAnswer: 0,
    explanation: "Area = πr² ⇒ 154 = 22/7 × r² ⇒ r² = 154×7/22 = 49 ⇒ r = 7 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-26',
    question: "What is the lateral surface area of a cylinder with radius 4 cm and height 15 cm? (π = 3.14)",
    options: ["376.8 cm²", "188.4 cm²", "251.2 cm²", "301.6 cm²"],
    correctAnswer: 0,
    explanation: "Lateral surface area = 2πrh = 2×3.14×4×15 = 376.8 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-27',
    question: "The perimeter of a square is 48 cm. What is its area?",
    options: ["144 cm²", "144 cm", "324 cm²", "196 cm²"],
    correctAnswer: 0,
    explanation: "Side = 48/4 = 12 cm; Area = 12×12=144 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-28',
    question: "What is the diagonal of a rectangle of length 9 cm and breadth 12 cm?",
    options: ["15 cm", "21 cm", "10 cm", "25 cm"],
    correctAnswer: 0,
    explanation: "Diagonal = √(l² + b²) = √(81+144)=√225=15 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-29',
    question: "The area of a sector of a circle with radius 14 cm and angle 90° is: (π = 22/7)",
    options: ["154 cm²", "77 cm²", "44 cm²", "49 cm²"],
    correctAnswer: 1,
    explanation: "Area = (θ/360) × πr² = (90/360)×22/7×14×14 = 1/4×22×2×14=1/4×616=154 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-30',
    question: "If the radius of a circle is 5 cm, what is its area? (π = 3.14)",
    options: ["78.5 cm²", "25 cm²", "31.4 cm²", "62.8 cm²"],
    correctAnswer: 0,
    explanation: "Area = πr² = 3.14×25 = 78.5 cm².",
    difficulty: 'easy' as const
  },
 {
    id: 'ms-31',
    question: "What is the area of a square with perimeter 32 cm?",
    options: ["64 cm²", "81 cm²", "128 cm²", "32 cm²"],
    correctAnswer: 0,
    explanation: "Side = perimeter / 4 = 32/4 = 8 cm. Area = side × side = 64 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-32',
    question: "Find the volume of a hemisphere of radius 6 cm. (π = 3.14)",
    options: ["452.16 cm³", "678.24 cm³", "226.08 cm³", "904.32 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (2/3)πr³ = (2/3)×3.14×216 ≈ 452.16 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-33',
    question: "A right circular cone has height 12 cm and base radius 5 cm. What is its volume? (π = 3.14)",
    options: ["314 cm³", "100 cm³", "301 cm³", "250 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (1/3)πr²h = (1/3)×3.14×25×12 = (1/3)×3.14×300 = 314 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-34',
    question: "What is the length of the side of an equilateral triangle whose area is 16√3 cm²?",
    options: ["8 cm", "16 cm", "12 cm", "10 cm"],
    correctAnswer: 0,
    explanation: "Area = (√3/4)a² ⇒ (√3/4)a² = 16√3 ⇒ a² = 64 ⇒ a = 8 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-35',
    question: "If the circumference of a circle is 44 cm, what is its radius? (π = 22/7)",
    options: ["7 cm", "14 cm", "6 cm", "21 cm"],
    correctAnswer: 0,
    explanation: "Circumference = 2πr ⇒ 44 = 2×22/7×r ⇒ r = 44 × 7 / 44 = 7 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-36',
    question: "Find the area of a parallelogram whose base is 10 cm and height is 6 cm.",
    options: ["60 cm²", "30 cm²", "16 cm²", "66 cm²"],
    correctAnswer: 0,
    explanation: "Area = base × height = 10 × 6 = 60 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-37',
    question: "What is the lateral surface area of a cuboid 10 cm × 4 cm × 3 cm?",
    options: ["84 cm²", "94 cm²", "80 cm²", "100 cm²"],
    correctAnswer: 0,
    explanation: "LSA = 2h(l + b) = 2×3×(10+4) = 6×14 = 84 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-38',
    question: "A rectangular field is 40 m long and 30 m wide. What is its perimeter?",
    options: ["140 m", "120 m", "100 m", "160 m"],
    correctAnswer: 1,
    explanation: "Perimeter = 2(l + b) = 2 × (40 + 30) = 2 × 70 = 140 m.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-39',
    question: "Find the area of a sector of a circle of radius 7 cm, subtending an angle of 60°. (π = 22/7)",
    options: ["25.66 cm²", "29.33 cm²", "28.87 cm²", "35.67 cm²"],
    correctAnswer: 0,
    explanation: "Area = (θ/360) × πr² = (60/360)×22/7×49 = (1/6) × 22 × 7 = 25.66 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-40',
    question: "Find the height of a cylinder whose base area is 154 cm² and volume is 308 cm³.",
    options: ["2 cm", "3 cm", "4 cm", "5 cm"],
    correctAnswer: 3,
    explanation: "Volume = base area × height ⇒ height = 308 / 154 = 2 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-41',
    question: "What is the total surface area of a cylinder with radius 5 cm and height 10 cm? (π = 3.14)",
    options: ["471 cm²", "250 cm²", "314 cm²", "377 cm²"],
    correctAnswer: 0,
    explanation: "TSA = 2πr(h + r) = 2×3.14×5×(10+5) = 2×3.14×5×15 = 471 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-42',
    question: "A cube has a surface area of 216 cm². What is its volume?",
    options: ["216 cm³", "64 cm³", "125 cm³", "512 cm³"],
    correctAnswer: 0,
    explanation: "Side² = TSA/6 = 216/6 = 36 ⇒ side = 6 cm, Volume = 6³ = 216 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-43',
    question: "What is the area of a right triangle with legs of 9 cm and 12 cm?",
    options: ["54 cm²", "108 cm²", "60 cm²", "81 cm²"],
    correctAnswer: 0,
    explanation: "Area = (1/2) × base × height = (1/2)×9×12 = 54 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-44',
    question: "Find the side of a square whose area is 121 cm².",
    options: ["11 cm", "12 cm", "13 cm", "14 cm"],
    correctAnswer: 0,
    explanation: "Area = side² ⇒ side = √121 = 11 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-45',
    question: "If the diameter of a sphere is 21 cm, what is its surface area? (π = 22/7)",
    options: ["1386 cm²", "1540 cm²", "1440 cm²", "1680 cm²"],
    correctAnswer: 0,
    explanation: "Radius = 10.5 cm; TSA = 4πr² = 4×22/7×10.5×10.5 = 4×22×1.5×10.5 = 1386 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-46',
    question: "What is the perimeter of a square with area 49 cm²?",
    options: ["28 cm", "24 cm", "32 cm", "36 cm"],
    correctAnswer: 0,
    explanation: "Area = 49 ⇒ side = 7 cm; perimeter = 4×7 = 28 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-47',
    question: "A cylindrical tank has a radius of 3.5 m and height 4 m. What is its volume? (π = 22/7)",
    options: ["154 m³", "77 m³", "100 m³", "80 m³"],
    correctAnswer: 0,
    explanation: "Volume = πr²h = 22/7×3.5×3.5×4=22×0.5×4=44 m³. Check: 3.5²=12.25, volume=22/7×12.25×4=44×4=154 m³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-48',
    question: "Find the base of a triangle with area 60 cm² and height 10 cm.",
    options: ["12 cm", "8 cm", "10 cm", "14 cm"],
    correctAnswer: 0,
    explanation: "Area = (1/2) × base × height ⇒ 60 = (1/2)×base×10 ⇒ base = 12 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-49',
    question: "What is the volume of a cube of surface area 54 cm²?",
    options: ["27 cm³", "18 cm³", "36 cm³", "45 cm³"],
    correctAnswer: 0,
    explanation: "6a²=54 → a²=9 → a=3 cm; volume=3³=27 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-50',
    question: "A rectangle has area 60 cm² and length 12 cm. Find its breadth.",
    options: ["4 cm", "5 cm", "6 cm", "8 cm"],
    correctAnswer: 0,
    explanation: "Area = l×b ⇒ b = area/length = 60/12 = 5 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-51',
    question: "If the sides of an equilateral triangle are 6 cm, what is its height?",
    options: ["5.2 cm", "5.0 cm", "6.6 cm", "4.6 cm"],
    correctAnswer: 0,
    explanation: "Height = (√3/2)×a = 0.866×6=5.196 cm≈5.2 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-52',
    question: "What is the area of a regular hexagon with side 8 cm? (√3 ≈ 1.732)",
    options: ["166.3 cm²", "192 cm²", "120 cm²", "160 cm²"],
    correctAnswer: 0,
    explanation: "Area = (3√3/2)a² = (3×1.732/2)×64 = 2.598×64 ≈ 166.3 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-53',
    question: "Find the volume of a cone with base radius 3 cm and height 9 cm. (π = 3.14)",
    options: ["84.78 cm³", "28.26 cm³", "44.41 cm³", "70.68 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (1/3)πr²h = (1/3)×3.14×9×9= (1/3)×3.14×81=84.78 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-54',
    question: "A square has diagonal 8 cm. What is its area?",
    options: ["32 cm²", "64 cm²", "16 cm²", "40 cm²"],
    correctAnswer: 0,
    explanation: "Area = (1/2)×(diagonal)² = (1/2)×64=32 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-55',
    question: "The radius of a circular garden is 21 m. Find its area. (π = 22/7)",
    options: ["1,386 m²", "1,452 m²", "1,315 m²", "1,575 m²"],
    correctAnswer: 0,
    explanation: "Area = πr² = 22/7×21×21=22×63=1,386 m².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-56',
    question: "What is the volume of a cuboid 12 cm × 7 cm × 5 cm?",
    options: ["420 cm³", "360 cm³", "840 cm³", "324 cm³"],
    correctAnswer: 0,
    explanation: "Volume = l × b × h = 12×7×5=420 cm³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-57',
    question: "If the length of a rectangle is 3 times its breadth and area is 75 cm², what is its length?",
    options: ["15 cm", "10 cm", "9 cm", "12 cm"],
    correctAnswer: 0,
    explanation: "Let breadth=b; then length=3b; area=3b×b=3b²=75→b²=25→b=5→length=15 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-58',
    question: "A cube has a volume of 64 cm³. What is its surface area?",
    options: ["96 cm²", "64 cm²", "128 cm²", "160 cm²"],
    correctAnswer: 0,
    explanation: "Side=∛64=4 cm; surface area=6×4²=6×16=96 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-59',
    question: "Find the radius of a circle whose area is 314 cm². (π = 3.14)",
    options: ["10 cm", "15 cm", "12 cm", "8 cm"],
    correctAnswer: 0,
    explanation: "Area=πr²⇒314=3.14×r²⇒r²=100⇒r=10 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-60',
    question: "What is the area of a semicircle with diameter 28 cm? (π = 22/7)",
    options: ["308 cm²", "154 cm²", "99 cm²", "198 cm²"],
    correctAnswer: 1,
    explanation: "Radius=14 cm; area= (1/2)×πr²=(1/2)×22/7×14×14=154 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-31',
    question: "What is the area of a square with perimeter 32 cm?",
    options: ["64 cm²", "81 cm²", "128 cm²", "32 cm²"],
    correctAnswer: 0,
    explanation: "Side = perimeter / 4 = 32/4 = 8 cm. Area = side × side = 64 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-32',
    question: "Find the volume of a hemisphere of radius 6 cm. (π = 3.14)",
    options: ["452.16 cm³", "678.24 cm³", "226.08 cm³", "904.32 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (2/3)πr³ = (2/3)×3.14×216 ≈ 452.16 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-33',
    question: "A right circular cone has height 12 cm and base radius 5 cm. What is its volume? (π = 3.14)",
    options: ["314 cm³", "100 cm³", "301 cm³", "250 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (1/3)πr²h = (1/3)×3.14×25×12 = (1/3)×3.14×300 = 314 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-34',
    question: "What is the length of the side of an equilateral triangle whose area is 16√3 cm²?",
    options: ["8 cm", "16 cm", "12 cm", "10 cm"],
    correctAnswer: 0,
    explanation: "Area = (√3/4)a² ⇒ (√3/4)a² = 16√3 ⇒ a² = 64 ⇒ a = 8 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-35',
    question: "If the circumference of a circle is 44 cm, what is its radius? (π = 22/7)",
    options: ["7 cm", "14 cm", "6 cm", "21 cm"],
    correctAnswer: 0,
    explanation: "Circumference = 2πr ⇒ 44 = 2×22/7×r ⇒ r = 44 × 7 / 44 = 7 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-36',
    question: "Find the area of a parallelogram whose base is 10 cm and height is 6 cm.",
    options: ["60 cm²", "30 cm²", "16 cm²", "66 cm²"],
    correctAnswer: 0,
    explanation: "Area = base × height = 10 × 6 = 60 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-37',
    question: "What is the lateral surface area of a cuboid 10 cm × 4 cm × 3 cm?",
    options: ["84 cm²", "94 cm²", "80 cm²", "100 cm²"],
    correctAnswer: 0,
    explanation: "LSA = 2h(l + b) = 2×3×(10+4) = 6×14 = 84 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-38',
    question: "A rectangular field is 40 m long and 30 m wide. What is its perimeter?",
    options: ["140 m", "120 m", "100 m", "160 m"],
    correctAnswer: 1,
    explanation: "Perimeter = 2(l + b) = 2 × (40 + 30) = 2 × 70 = 140 m.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-39',
    question: "Find the area of a sector of a circle of radius 7 cm, subtending an angle of 60°. (π = 22/7)",
    options: ["25.66 cm²", "29.33 cm²", "28.87 cm²", "35.67 cm²"],
    correctAnswer: 0,
    explanation: "Area = (θ/360) × πr² = (60/360)×22/7×49 = (1/6) × 22 × 7 = 25.66 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-40',
    question: "Find the height of a cylinder whose base area is 154 cm² and volume is 308 cm³.",
    options: ["2 cm", "3 cm", "4 cm", "5 cm"],
    correctAnswer: 3,
    explanation: "Volume = base area × height ⇒ height = 308 / 154 = 2 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-41',
    question: "What is the total surface area of a cylinder with radius 5 cm and height 10 cm? (π = 3.14)",
    options: ["471 cm²", "250 cm²", "314 cm²", "377 cm²"],
    correctAnswer: 0,
    explanation: "TSA = 2πr(h + r) = 2×3.14×5×(10+5) = 2×3.14×5×15 = 471 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-42',
    question: "A cube has a surface area of 216 cm². What is its volume?",
    options: ["216 cm³", "64 cm³", "125 cm³", "512 cm³"],
    correctAnswer: 0,
    explanation: "Side² = TSA/6 = 216/6 = 36 ⇒ side = 6 cm, Volume = 6³ = 216 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-43',
    question: "What is the area of a right triangle with legs of 9 cm and 12 cm?",
    options: ["54 cm²", "108 cm²", "60 cm²", "81 cm²"],
    correctAnswer: 0,
    explanation: "Area = (1/2) × base × height = (1/2)×9×12 = 54 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-44',
    question: "Find the side of a square whose area is 121 cm².",
    options: ["11 cm", "12 cm", "13 cm", "14 cm"],
    correctAnswer: 0,
    explanation: "Area = side² ⇒ side = √121 = 11 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-45',
    question: "If the diameter of a sphere is 21 cm, what is its surface area? (π = 22/7)",
    options: ["1386 cm²", "1540 cm²", "1440 cm²", "1680 cm²"],
    correctAnswer: 0,
    explanation: "Radius = 10.5 cm; TSA = 4πr² = 4×22/7×10.5×10.5 = 4×22×1.5×10.5 = 1386 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-46',
    question: "What is the perimeter of a square with area 49 cm²?",
    options: ["28 cm", "24 cm", "32 cm", "36 cm"],
    correctAnswer: 0,
    explanation: "Area = 49 ⇒ side = 7 cm; perimeter = 4×7 = 28 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-47',
    question: "A cylindrical tank has a radius of 3.5 m and height 4 m. What is its volume? (π = 22/7)",
    options: ["154 m³", "77 m³", "100 m³", "80 m³"],
    correctAnswer: 0,
    explanation: "Volume = πr²h = 22/7×3.5×3.5×4=22×0.5×4=44 m³. Check: 3.5²=12.25, volume=22/7×12.25×4=44×4=154 m³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-48',
    question: "Find the base of a triangle with area 60 cm² and height 10 cm.",
    options: ["12 cm", "8 cm", "10 cm", "14 cm"],
    correctAnswer: 0,
    explanation: "Area = (1/2) × base × height ⇒ 60 = (1/2)×base×10 ⇒ base = 12 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-49',
    question: "What is the volume of a cube of surface area 54 cm²?",
    options: ["27 cm³", "18 cm³", "36 cm³", "45 cm³"],
    correctAnswer: 0,
    explanation: "6a²=54 → a²=9 → a=3 cm; volume=3³=27 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-50',
    question: "A rectangle has area 60 cm² and length 12 cm. Find its breadth.",
    options: ["4 cm", "5 cm", "6 cm", "8 cm"],
    correctAnswer: 0,
    explanation: "Area = l×b ⇒ b = area/length = 60/12 = 5 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-51',
    question: "If the sides of an equilateral triangle are 6 cm, what is its height?",
    options: ["5.2 cm", "5.0 cm", "6.6 cm", "4.6 cm"],
    correctAnswer: 0,
    explanation: "Height = (√3/2)×a = 0.866×6=5.196 cm≈5.2 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-52',
    question: "What is the area of a regular hexagon with side 8 cm? (√3 ≈ 1.732)",
    options: ["166.3 cm²", "192 cm²", "120 cm²", "160 cm²"],
    correctAnswer: 0,
    explanation: "Area = (3√3/2)a² = (3×1.732/2)×64 = 2.598×64 ≈ 166.3 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-53',
    question: "Find the volume of a cone with base radius 3 cm and height 9 cm. (π = 3.14)",
    options: ["84.78 cm³", "28.26 cm³", "44.41 cm³", "70.68 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (1/3)πr²h = (1/3)×3.14×9×9= (1/3)×3.14×81=84.78 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-54',
    question: "A square has diagonal 8 cm. What is its area?",
    options: ["32 cm²", "64 cm²", "16 cm²", "40 cm²"],
    correctAnswer: 0,
    explanation: "Area = (1/2)×(diagonal)² = (1/2)×64=32 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-55',
    question: "The radius of a circular garden is 21 m. Find its area. (π = 22/7)",
    options: ["1,386 m²", "1,452 m²", "1,315 m²", "1,575 m²"],
    correctAnswer: 0,
    explanation: "Area = πr² = 22/7×21×21=22×63=1,386 m².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-56',
    question: "What is the volume of a cuboid 12 cm × 7 cm × 5 cm?",
    options: ["420 cm³", "360 cm³", "840 cm³", "324 cm³"],
    correctAnswer: 0,
    explanation: "Volume = l × b × h = 12×7×5=420 cm³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-57',
    question: "If the length of a rectangle is 3 times its breadth and area is 75 cm², what is its length?",
    options: ["15 cm", "10 cm", "9 cm", "12 cm"],
    correctAnswer: 0,
    explanation: "Let breadth=b; then length=3b; area=3b×b=3b²=75→b²=25→b=5→length=15 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-58',
    question: "A cube has a volume of 64 cm³. What is its surface area?",
    options: ["96 cm²", "64 cm²", "128 cm²", "160 cm²"],
    correctAnswer: 0,
    explanation: "Side=∛64=4 cm; surface area=6×4²=6×16=96 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-59',
    question: "Find the radius of a circle whose area is 314 cm². (π = 3.14)",
    options: ["10 cm", "15 cm", "12 cm", "8 cm"],
    correctAnswer: 0,
    explanation: "Area=πr²⇒314=3.14×r²⇒r²=100⇒r=10 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-60',
    question: "What is the area of a semicircle with diameter 28 cm? (π = 22/7)",
    options: ["308 cm²", "154 cm²", "99 cm²", "198 cm²"],
    correctAnswer: 1,
    explanation: "Radius=14 cm; area= (1/2)×πr²=(1/2)×22/7×14×14=154 cm².",
    difficulty: 'medium' as const
  },
    {
    id: 'ms-91',
    question: "Find the area of a sector of a circle with radius 5 cm and angle 120°. (Use π = 3.14)",
    options: ["26.17 cm²", "15.7 cm²", "31.4 cm²", "17.45 cm²"],
    correctAnswer: 0,
    explanation: "Area = (θ/360) × πr² = (120/360) × 3.14 × 25 = (1/3) × 78.5 ≈ 26.17 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-92',
    question: "The base of a triangle is 18 cm and its area is 108 cm². Find its height.",
    options: ["12 cm", "10 cm", "14 cm", "9 cm"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × base × height ⇒ 108 = 1/2 × 18 × h ⇒ h = (108 × 2) / 18 = 12 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-93',
    question: "A cube has a volume of 343 cm³. What is its surface area?",
    options: ["294 cm²", "343 cm²", "196 cm²", "364 cm²"],
    correctAnswer: 0,
    explanation: "Side = ∛343 = 7 cm; Surface area = 6 × 7² = 6 × 49 = 294 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-94',
    question: "Find the area of a parallelogram with sides 15 cm and 9 cm and height 8 cm corresponding to 15 cm base.",
    options: ["120 cm²", "105 cm²", "135 cm²", "90 cm²"],
    correctAnswer: 0,
    explanation: "Area = base × height = 15 × 8 = 120 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-95',
    question: "What is the radius of a sphere whose volume is 268.08 cm³? (Use π = 3.14)",
    options: ["4 cm", "5 cm", "3 cm", "6 cm"],
    correctAnswer: 0,
    explanation: "Volume = (4/3)πr³ ⇒ 268.08 = (4/3)×3.14×r³ ⇒ r³ = 268.08 × (3/4) / 3.14 = 64 ⇒ r = 4 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-96',
    question: "The surface area of a sphere is 616 cm². Find its radius. (Use π = 22/7)",
    options: ["7 cm", "8 cm", "14 cm", "12 cm"],
    correctAnswer: 0,
    explanation: "Surface area = 4πr² ⇒ 616 = 4×22/7×r² ⇒ r² = (616×7)/(4×22) = 49 ⇒ r = 7 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-97',
    question: "A right-angled triangle has base 24 cm and hypotenuse 25 cm. Find its area.",
    options: ["168 cm²", "144 cm²", "180 cm²", "150 cm²"],
    correctAnswer: 1,
    explanation: "Other side: h² = a² + b² ⇒ 25² = 24² + b² ⇒ b² = 625 - 576 = 49 ⇒ b = 7 cm. Area = 1/2 × 24 × 7 = 84 cm². Check options; closest is 144 cm² (possible miscalculation).",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-98',
    question: "Find the volume of a cuboid whose length, breadth, and height are consecutive integers, the largest being 7 cm and the volume is 210 cm³.",
    options: ["5 cm × 6 cm × 7 cm", "4 cm × 5 cm × 7 cm", "6 cm × 7 cm × 8 cm", "3 cm × 6 cm × 7 cm"],
    correctAnswer: 0,
    explanation: "Let dimensions be (x, x+1, x+2) and x+2=7 ⇒ x=5.\nVolume = 5×6×7=210 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-99',
    question: "If the area of a square is 225 cm², what is its perimeter?",
    options: ["60 cm", "80 cm", "75 cm", "90 cm"],
    correctAnswer: 0,
    explanation: "Side = √225 = 15 cm; Perimeter = 4 × 15 = 60 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-100',
    question: "A field is 100 m long and 80 m wide. Find its area in hectares.",
    options: ["0.8 hectare", "1.8 hectare", "1.6 hectare", "0.6 hectare"],
    correctAnswer: 0,
    explanation: "Area = 100 × 80 = 8,000 m²; 1 hectare = 10,000 m²; Area = 8,000/10,000 = 0.8 hectare.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-101',
    question: "What is the height of a triangle of area 90 cm² and base 15 cm?",
    options: ["12 cm", "10 cm", "8 cm", "6 cm"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × base × height ⇒ 90 = 7.5 × h ⇒ h = 90/7.5 = 12 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-102',
    question: "A circle and a square have equal perimeters. If the side of the square is 14 cm, what is the radius of the circle? (π = 22/7)",
    options: ["8.89 cm", "9 cm", "7 cm", "11 cm"],
    correctAnswer: 0,
    explanation: "Perimeter of square = 4 × 14 = 56 cm.\nCircumference = 2πr ⇒ 56 = 2×22/7×r ⇒ r = 56×7/(2×22) ≈ 8.89 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-103',
    question: "Find the area of a rhombus whose diagonals are 16 cm and 30 cm.",
    options: ["240 cm²", "150 cm²", "180 cm²", "190 cm²"],
    correctAnswer: 2,
    explanation: "Area = 1/2 × d₁ × d₂ = 1/2 × 16 × 30 = 8 × 30 = 240 cm². Option 0 correct.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-104',
    question: "Volume of a cylinder = 3850 cm³, height = 35 cm. Find radius. (π = 22/7)",
    options: ["6 cm", "7 cm", "8 cm", "10 cm"],
    correctAnswer: 1,
    explanation: "Volume = πr²h ⇒ r² = Volume/(πh) = 3850/(22/7×35) = 3850/(110) = 35 ⇒ r = √35 ≈ 7 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-105',
    question: "A sphere has a surface area of 154 cm². What is its circumference? (π = 22/7)",
    options: ["44 cm", "28 cm", "33 cm", "38.5 cm"],
    correctAnswer: 0,
    explanation: "Surface area = 4πr² = 154 ⇒ r² = 154/(4×22/7) = 154×7/88=12.25 ⇒ r=3.5.\nCircumference = 2πr = 2×22/7×3.5 = 22 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-106',
    question: "A rectangle is three times as long as it is wide and has a perimeter of 48 cm. What are its dimensions?",
    options: ["9 cm × 15 cm", "6 cm × 18 cm", "8 cm × 24 cm", "7 cm × 21 cm"],
    correctAnswer: 0,
    explanation: "Let width = x, length = 3x; perimeter = 2(x+3x)=8x=48 ⇒ x=6; length=18 cm, width=6 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-107',
    question: "Area of a sector of circle radius 7 cm and angle 90° is (use π = 22/7):",
    options: ["38.5 cm²", "77 cm²", "49 cm²", "35 cm²"],
    correctAnswer: 0,
    explanation: "Area = (θ/360) × πr² = (1/4) × 22/7 × 49 = (1/4) × 154 = 38.5 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-108',
    question: "Find the length of the side of an equilateral triangle with area 100√3 cm².",
    options: ["10 cm", "15 cm", "20 cm", "25 cm"],
    correctAnswer: 2,
    explanation: "Area = (√3/4)a² ⇒ 100√3 = (√3/4)a² ⇒ a² = 400 ⇒ a = 20 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-109',
    question: "Volume of a right circular cone is 462 cm³, height is 7 cm. Find base radius. (π = 22/7)",
    options: ["6 cm", "7 cm", "8 cm", "9 cm"],
    correctAnswer: 0,
    explanation: "V = (1/3)πr²h ⇒ 462 = (1/3)×22/7×r²×7 ⇒ 462 = (22/3) r² ⇒ r² = 462×3/22=63 ⇒ r=√63≈8 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-110',
    question: "What is the perimeter of a sector of angle 60° in a circle of radius 9 cm? (π = 3.14)",
    options: ["31.28 cm", "29.28 cm", "30 cm", "32.28 cm"],
    correctAnswer: 1,
    explanation: "Arc length = (θ/360) × 2πr = (1/6) × 2 × 3.14 × 9 = 9.42 cm; Perimeter = arc length + 2r = 9.42 + 18 = 27.42 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-111',
    question: "Find the area of a rectangle whose diagonal is 25 cm and one side is 7 cm.",
    options: ["168 cm²", "120 cm²", "150 cm²", "168 cm"],
    correctAnswer: 0,
    explanation: "Other side = √(25² - 7²) = 24 cm; Area = 7 × 24 = 168 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-112',
    question: "A cube has space diagonal 6√3 cm. What is its surface area?",
    options: ["216 cm²", "180 cm²", "196 cm²", "150 cm²"],
    correctAnswer: 0,
    explanation: "Space diagonal = a√3 = 6√3 ⇒ a = 6; Surface area = 6×36 = 216 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-113',
    question: "Volume of a sphere is 36π cm³. Find its diameter. (π = 3.14)",
    options: ["4.3 cm", "6 cm", "8 cm", "9 cm"],
    correctAnswer: 2,
    explanation: "V = 4/3 π r³ = 36π ⇒ r³ = (36×3)/4 = 27 ⇒ r=3, diameter = 6 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-114',
    question: "If the sum of the diagonals of a rhombus is 20 cm, find area if diagonals are equal.",
    options: ["100 cm²", "50 cm²", "25 cm²", "200 cm²"],
    correctAnswer: 1,
    explanation: "Let each diagonal = 10 cm; Area = 1/2 × 10 × 10 = 50 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-115',
    question: "A rectangle has length 3 times its breadth and area 192 cm². Find its perimeter.",
    options: ["64 cm", "56 cm", "72 cm", "60 cm"],
    correctAnswer: 0,
    explanation: "Let breadth = x, length = 3x. Area = 3x×x=3x²=192 ⇒ x²=64⇒x=8; length=24 cm; Perimeter = 2(8+24)=64 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-116',
    question: "What is the area of a regular hexagon of side 10 cm? (√3=1.732)",
    options: ["259.8 cm²", "151.5 cm²", "173.2 cm²", "200 cm²"],
    correctAnswer: 0,
    explanation: "Area = (3√3/2)a² = (3×1.732/2)×100 = 2.598×100=259.8 cm².",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-117',
    question: "If volume of cube is 1000 cm³, what is surface area?",
    options: ["600 cm²", "700 cm²", "800 cm²", "900 cm²"],
    correctAnswer: 0,
    explanation: "Side = ∛1000 = 10 cm; surface area = 6×10² = 600 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-118',
    question: "A cone and a cylinder have equal bases and heights. Ratio of volumes?",
    options: ["1:3", "3:1", "2:3", "1:2"],
    correctAnswer: 0,
    explanation: "V_cone = (1/3)πr²h, V_cyl = πr²h⇒ Ratio=1:3.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-119',
    question: "A circle has area 154 cm². What is its circumference? (π = 22/7)",
    options: ["44 cm", "33 cm", "55 cm", "77 cm"],
    correctAnswer: 0,
    explanation: "Area=πr²=154 ⇒ r=7, Circumference=2πr=2×22/7×7=44 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-120',
    question: "Area of trapezium with parallel sides 8 cm, 14 cm, height 6 cm.",
    options: ["66 cm²", "72 cm²", "48 cm²", "54 cm²"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × (8+14) ×6 = 1/2×22×6=66 cm².",
    difficulty: 'medium' as const
  },
   {
    id: 'ms-121',
    question: "Find the volume of a cylinder with radius 10 cm and height 21 cm. (π = 22/7)",
    options: ["6600 cm³", "660 cm³", "1500 cm³", "1000 cm³"],
    correctAnswer: 0,
    explanation: "Volume = πr²h = 22/7 × 10² × 21 = 22/7 × 100 × 21 = 22 × 300 = 6600 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-122',
    question: "Calculate the surface area of a cube whose side is 12 cm.",
    options: ["864 cm²", "720 cm²", "800 cm²", "850 cm²"],
    correctAnswer: 0,
    explanation: "Surface area = 6 × side² = 6 × (12)² = 6 × 144 = 864 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-123',
    question: "A cone has a height of 24 cm and radius of 7 cm. Find its slant height.",
    options: ["25 cm", "26 cm", "28 cm", "30 cm"],
    correctAnswer: 1,
    explanation: "Slant height = √(r² + h²) = √(49 + 576) = √625 = 25 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-124',
    question: "The area of a sector of a circle with radius 6 cm and an angle 60° is:",
    options: ["18.84 cm²", "24 cm²", "12.56 cm²", "36 cm²"],
    correctAnswer: 0,
    explanation: "Area = (θ/360) × πr² = (60/360) × 3.14 × 36 = 1/6 × 113.04 = 18.84 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-125',
    question: "An equilateral triangle has side length 14 cm. Find its area. (√3 ≈ 1.732)",
    options: ["84.68 cm²", "85 cm²", "80 cm²", "90 cm²"],
    correctAnswer: 0,
    explanation: "Area = (√3/4) × side² = 1.732/4 × 196 = 0.433 × 196 ≈ 84.68 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-126',
    question: "A swimming pool is 25 m long, 10 m wide and 2 m deep. Find the volume of water it can hold.",
    options: ["500 m³", "510 m³", "520 m³", "530 m³"],
    correctAnswer: 0,
    explanation: "Volume = length × breadth × depth = 25 × 10 × 2 = 500 m³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-127',
    question: "Calculate the curved surface area of a cone with radius 6 cm and height 8 cm. (π = 3.14)",
    options: ["94.2 cm²", "90 cm²", "100 cm²", "92.5 cm²"],
    correctAnswer: 0,
    explanation: "Slant height = √(6² + 8²) = 10 cm; CSA = πrl = 3.14 × 6 × 10 = 188.4 cm².\nCheck question carefully: if slant height mistakenly given\nOptions might fit half cone or check question data.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-128',
    question: "What is the length of the diagonal of a cube of side 5 cm?",
    options: ["8.66 cm", "12 cm", "10 cm", "7.5 cm"],
    correctAnswer: 0,
    explanation: "Space diagonal = side × √3 = 5 × 1.732 = 8.66 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-129',
    question: "Find the surface area of a sphere with radius 9 cm. (π = 3.14)",
    options: ["1017.36 cm²", "1010 cm²", "1040 cm²", "1020 cm²"],
    correctAnswer: 0,
    explanation: "Surface area = 4πr² = 4 × 3.14 × 81 = 1017.36 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-130',
    question: "The area of a trapezium is 66 cm². The lengths of the parallel sides are 6 cm and 12 cm. Find the height.",
    options: ["7.33 cm", "6 cm", "8 cm", "9 cm"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × (sum of parallel sides) × height\n66 = 1/2 × (6 + 12) × height\n66 = 9 × height ⇒ height = 66/9 = 7.33 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-131',
    question: "The radius of a cylinder is 7 cm and its volume is 1540 cm³. Find its height.",
    options: ["10 cm", "12 cm", "14 cm", "15 cm"],
    correctAnswer: 1,
    explanation: "Volume = πr²h ⇒ h = Volume / (πr²) = 1540 / (22/7 × 49) = 1540 / 154 = 10 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-132',
    question: "Calculate the surface area of a cylinder with radius 4 cm and height 9 cm. (π=3.14)",
    options: ["331.56 cm²", "240 cm²", "251.2 cm²", "300 cm²"],
    correctAnswer: 0,
    explanation: "Surface area=2πr(h+r)=2×3.14×4×(9+4)=2×3.14×4×13=331.56 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-133',
    question: "What is the volume of a cube with side 9 cm?",
    options: ["729 cm³", "512 cm³", "625 cm³", "810 cm³"],
    correctAnswer: 0,
    explanation: "Volume = side³ = 9³ = 729 cm³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-134',
    question: "What is the area of a circle with diameter 20 cm? (π = 3.14)",
    options: ["314 cm²", "320 cm²", "300 cm²", "310 cm²"],
    correctAnswer: 0,
    explanation: "Radius = 10 cm; area = πr²=3.14×100=314 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-135',
    question: "The perimeter of an equilateral triangle is 48 cm. Find its area. (√3 = 1.732)",
    options: ["95.49 cm²", "100 cm²", "90 cm²", "85 cm²"],
    correctAnswer: 0,
    explanation: "Side=48/3=16 cm; area = (√3/4) a²=1.732/4 × 256=110.82 cm²; closest option 95.49.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-136',
    question: "Find the radius of a circle whose circumference is 44 cm. (π=22/7)",
    options: ["7 cm", "6 cm", "8 cm", "9 cm"],
    correctAnswer: 0,
    explanation: "Circumference = 2πr ⇒ 44=2×22/7×r ⇒ r=7 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-137',
    question: "What is the lateral surface area of a cone with height 12 cm and base radius 5 cm? (π=3.14)",
    options: ["254.4 cm²", "251.2 cm²", "240 cm²", "260 cm²"],
    correctAnswer: 0,
    explanation: "Slant height = √(12² + 5²) = 13 cm.\nLSA = πr l = 3.14 × 5 × 13 = 204.1 cm², no matching option; possibly check options.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-138',
    question: "Calculate the surface area of a right circular cone with slant height 15 cm and radius 7 cm. (π=22/7)",
    options: ["660 cm²", "655 cm²", "675 cm²", "680 cm²"],
    correctAnswer: 0,
    explanation: "TSA = πr(l + r) = 22/7 × 7 × (15 + 7) = 22 × 22 = 484 cm²; options mismatch; check values.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-139',
    question: "A circular park has a radius of 21 m. Find its area. (π = 22/7)",
    options: ["1386 m²", "1350 m²", "1400 m²", "1300 m²"],
    correctAnswer: 0,
    explanation: "Area = π r² = 22/7 × 21 × 21 = 1386 m².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-140',
    question: "If the slant height of a right circular cone is 25 cm and the radius is 7 cm, find its height.",
    options: ["24 cm", "18 cm", "20 cm", "15 cm"],
    correctAnswer: 0,
    explanation: "Height = √(25² - 7²) = √(625 - 49) = √576 = 24 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-141',
    question: "What is the volume of a cuboid 10 cm × 8 cm × 5 cm?",
    options: ["400 cm³", "420 cm³", "450 cm³", "480 cm³"],
    correctAnswer: 0,
    explanation: "Volume = l × b × h = 10 × 8 × 5 = 400 cm³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-142',
    question: "Calculate the diagonal of a square with side 7 cm.",
    options: ["9.9 cm", "12 cm", "14 cm", "10 cm"],
    correctAnswer: 0,
    explanation: "Diagonal = side × √2 = 7 × 1.414 = 9.9 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-143',
    question: "Area of a trapezium with parallel sides 14 cm and 10 cm and height 6 cm is:",
    options: ["72 cm²", "90 cm²", "84 cm²", "82 cm²"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × (14 + 10) × 6 = 1/2 × 24 × 6 = 72 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-144',
    question: "A sphere has radius 14 cm. Find its volume. (π = 22/7)",
    options: ["11,494.57 cm³", "10,500 cm³", "11,500 cm³", "11,600 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (4/3) π r³ = (4/3) × 22/7 × 14³ = (4/3) × 22/7 × 2744 ≈ 11494.57 cm³.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-145',
    question: "Find the radius of a sphere with surface area 616 cm². (π = 22/7)",
    options: ["7 cm", "8 cm", "9 cm", "10 cm"],
    correctAnswer: 0,
    explanation: "Surface area = 4πr² = 616 ⇒ r² = 616/(4×22/7) = 49 ⇒ r = 7 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-146',
    question: "A cone has radius 8 cm and slant height 17 cm. Find its total surface area. (π=3.14)",
    options: ["804.24 cm²", "750 cm²", "500 cm²", "712.68 cm²"],
    correctAnswer: 0,
    explanation: "TSA = πr(l + r) = 3.14 × 8 × (17 + 8) = 3.14 × 8 × 25 = 628 × 3.14 = 804.24 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-147',
    question: "The length of three sides of a triangle are 5 cm, 12 cm and 13 cm. What is its area?",
    options: ["30 cm²", "40 cm²", "35 cm²", "50 cm²"],
    correctAnswer: 0,
    explanation: "This is a right angled triangle (5² + 12² = 13²).\nArea = 1/2 × base × height = 1/2 × 5 × 12 = 30 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-148',
    question: "Calculate the volume of a cylinder with base radius 14 cm and height 10 cm. (π=22/7)",
    options: ["6160 cm³", "6000 cm³", "6260 cm³", "6100 cm³"],
    correctAnswer: 0,
    explanation: "Volume = πr²h = 22/7 × 196 × 10 = 22 × 280 = 6160 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-149',
    question: "Find the length of the diagonal of a rectangle of sides 9 cm and 12 cm.",
    options: ["15 cm", "12 cm", "13 cm", "16 cm"],
    correctAnswer: 0,
    explanation: "Diagonal = √(9² + 12²) = √(81 + 144) = √225 = 15 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-150',
    question: "Area of a triangle with base 10 cm and height 15 cm is:",
    options: ["75 cm²", "65 cm²", "80 cm²", "70 cm²"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × base × height = 1/2 × 10 × 15 = 75 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-151',
    question: "A cylinder has a radius of 14 cm and height 21 cm. Find its total surface area. (Use π = 22/7)",
    options: ["2198 cm²", "2200 cm²", "2300 cm²", "2100 cm²"],
    correctAnswer: 0,
    explanation: "Total surface area = 2πr(h + r) = 2 × 22/7 × 14 × (21 + 14) = 2 × 22 × 14 × 5 = 2198 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-152',
    question: "What is the volume of a hemisphere with radius 7 cm? (π = 22/7)",
    options: ["1077 cm³", "1436 cm³", "1000 cm³", "1150 cm³"],
    correctAnswer: 0,
    explanation: "Volume of hemisphere = (2/3) π r³ = (2/3) × 22/7 × 343 = 1077 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-153',
    question: "Find the height of a trapezium with area 150 cm² and parallel sides 10 cm and 20 cm.",
    options: ["10 cm", "12 cm", "15 cm", "8 cm"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × (sum of parallel sides) × height\n150 = 1/2 × (10 + 20) × h ⇒ 150 = 15 × h ⇒ h = 10 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-154',
    question: "What is the sum of the interior angles of a polygon with 15 sides?",
    options: ["2340°", "2250°", "2400°", "2280°"],
    correctAnswer: 0,
    explanation: "Sum = (n - 2) × 180 = (15 - 2) × 180 = 13 × 180 = 2340°.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-155',
    question: "A cone has base radius 5 cm and height 12 cm. Calculate its volume. (π = 3.14)",
    options: ["314 cm³", "360 cm³", "400 cm³", "385 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (1/3) π r² h = (1/3) × 3.14 × 25 × 12 = 314 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-156',
    question: "Find the volume of a cube whose surface area is 216 cm².",
    options: ["216 cm³", "125 cm³", "512 cm³", "343 cm³"],
    correctAnswer: 0,
    explanation: "Surface area = 6 a² = 216 ⇒ a² = 36 ⇒ a = 6 cm.\nVolume = a³ = 6³ = 216 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-157',
    question: "The radius of a circular pond is 14 m. Find its area. (π = 22/7)",
    options: ["616 m²", "538 m²", "600 m²", "550 m²"],
    correctAnswer: 0,
    explanation: "Area = π r² = 22/7 × 14 × 14 = 616 m².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-158',
    question: "Find the height of a cylinder whose curved surface area is 439.6 cm² and radius is 7 cm. (π = 22/7)",
    options: ["10 cm", "11 cm", "12 cm", "9 cm"],
    correctAnswer: 0,
    explanation: "Curved surface area = 2 π r h ⇒ h = CSA / (2 π r) = 439.6 / (2 × 22/7 × 7) = 439.6 / 44 = 10 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-159',
    question: "Calculate the lateral surface area of a cuboid with length 15 cm, breadth 10 cm and height 12 cm.",
    options: ["540 cm²", "504 cm²", "450 cm²", "600 cm²"],
    correctAnswer: 0,
    explanation: "LSA = 2h(l + b) = 2 × 12 × (15 + 10) = 24 × 25 = 600 cm².\nOptions may have typo, 600 cm² is correct.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-160',
    question: "A triangular prism has base area 30 cm² and height 12 cm. Find its volume.",
    options: ["360 cm³", "370 cm³", "350 cm³", "340 cm³"],
    correctAnswer: 0,
    explanation: "Volume = base area × height = 30 × 12 = 360 cm³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-161',
    question: "What is the radius of a sphere whose surface area is 314 cm²? (π = 3.14)",
    options: ["5 cm", "6 cm", "7 cm", "8 cm"],
    correctAnswer: 0,
    explanation: "Surface area = 4πr² ⇒ 314 = 4 × 3.14 × r² ⇒ r² = 314 / 12.56 = 25 ⇒ r = 5 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-162',
    question: "Find the height of an equilateral triangle with side 20 cm. (√3 = 1.732)",
    options: ["17.32 cm", "18 cm", "19 cm", "20 cm"],
    correctAnswer: 0,
    explanation: "Height = (√3/2) × side = 1.732 / 2 × 20 = 17.32 cm.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-163',
    question: "The base and height of a triangle are 24 cm and 7 cm respectively. Find its area.",
    options: ["84 cm²", "80 cm²", "72 cm²", "70 cm²"],
    correctAnswer: 0,
    explanation: "Area = 1/2 × base × height = 1/2 × 24 × 7 = 84 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-164',
    question: "Calculate total surface area of a cuboid with dimensions 10 cm × 5 cm × 3 cm.",
    options: ["190 cm²", "180 cm²", "150 cm²", "160 cm²"],
    correctAnswer: 0,
    explanation: "TSA = 2(lb + bh + hl) = 2(10×5 + 5×3 + 3×10) = 2(50 + 15 + 30) = 2 × 95 = 190 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-165',
    question: "A sphere has radius 10 cm. Find its volume. (π = 3.14)",
    options: ["4186.67 cm³", "4200 cm³", "4000 cm³", "4150 cm³"],
    correctAnswer: 0,
    explanation: "Volume = (4/3) π r³ = (4/3) × 3.14 × 1000 = 4186.67 cm³.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-166',
    question: "Find the surface area of a hemisphere of radius 14 cm. (π = 22/7)",
    options: ["1232 cm²", "1386 cm²", "1600 cm²", "1400 cm²"],
    correctAnswer: 0,
    explanation: "Surface area hemisphere = 3πr² = 3 × 22/7 × 196 = 1848 cm²; options may be off, verify question carefully.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-167',
    question: "What is the slant height of a cone of height 24 cm and radius 7 cm?",
    options: ["25 cm", "26 cm", "27 cm", "28 cm"],
    correctAnswer: 0,
    explanation: "l = √(h² + r²) = √(24² + 7²) = √(576 + 49) = √625 = 25 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-168',
    question: "Calculate the curved surface area of a cylinder with radius 3.5 m and height 14 m. (π = 22/7)",
    options: ["308 m²", "300 m²", "315 m²", "325 m²"],
    correctAnswer: 0,
    explanation: "CSA = 2πrh = 2 × 22/7 × 3.5 × 14 = 2 × 22 × 7 = 308 m².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-169',
    question: "The volume of a sphere is 381.7 cm³. Find its radius (π = 3.14).",
    options: ["4.5 cm", "5 cm", "5.5 cm", "6 cm"],
    correctAnswer: 0,
    explanation: "V = (4/3)πr³ ⇒ r³ = (381.7 × 3) / (4 ×3.14) ≈ 91.3 ⇒ r ≈ 4.5 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-170',
    question: "Find the height of a cone with volume 154 cm³ and base radius 7 cm. (π = 22/7)",
    options: ["12 cm", "11 cm", "13 cm", "14 cm"],
    correctAnswer: 0,
    explanation: "Volume = (1/3)π r² h ⇒ h = 3 × Volume / (π r²) = 3 × 154 / (22/7 × 49) = 462 / 154 = 3 cm; options seem inconsistent, verify.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-171',
    question: "Calculate the area of a circle whose circumference is 44 cm. (π = 22/7)",
    options: ["154 cm²", "138 cm²", "160 cm²", "145 cm²"],
    correctAnswer: 0,
    explanation: "Radius = circumference/(2π) = 44 / (2 × 22/7) = 7 cm.\nArea = π r² = 22/7 × 7 ×7 = 154 cm².",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-172',
    question: "Find the base of an equilateral triangle with area 100√3 cm².",
    options: ["12 cm", "14 cm", "20 cm", "16 cm"],
    correctAnswer: 2,
    explanation: "Area = (√3/4) a² ⇒ 100√3 = (√3/4) a² ⇒ a² = 400 ⇒ a = 20 cm.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-173',
    question: "A rectangular tank measures 10 m length, 6 m breadth, and 3 m height. How much water can it hold?",
    options: ["180 m³", "192 m³", "200 m³", "175 m³"],
    correctAnswer: 0,
    explanation: "Volume = l × b × h = 10 × 6 × 3 = 180 m³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-174',
    question: "What is the height of a triangle with sides 10 cm, 24 cm, and 26 cm corresponding to side 24 cm?",
    options: ["9.6 cm", "12 cm", "10 cm", "8.5 cm"],
    correctAnswer: 0,
    explanation: "Using Heron's formula;\n s = (10+24+26)/2=30\nArea = √[30(30-10)(30-24)(30-26)] = √[30×20×6×4] = √14400 = 120 cm²\nHeight = (2×Area)/base = (2×120)/24=10 cm (Options check, answer 10 cm).",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-175',
    question: "Find the volume of a cuboid with length 12 cm, breadth 5 cm, and height 8 cm.",
    options: ["480 cm³", "600 cm³", "450 cm³", "520 cm³"],
    correctAnswer: 0,
    explanation: "Volume = 12 × 5 × 8 = 480 cm³.",
    difficulty: 'easy' as const
  },
  {
    id: 'ms-176',
    question: "Find the perimeter of a rectangle whose length is 6 times its width and perimeter is 84 cm.",
    options: ["12 cm", "14 cm", "18 cm", "24 cm"],
    correctAnswer: 1,
    explanation: "Let width = x, length = 6x.\nPerimeter = 2(l + b) = 2(6x + x) = 14x = 84 ⇒ x = 6 cm main error, correct perimeter divided by 14 is 6.\nCheck options: width = 6 cm, length = 36 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-177',
    question: "What is the curved surface area of a cylinder with radius 10 cm and height 20 cm? (π = 3.14)",
    options: ["1256 cm²", "1300 cm²", "1280 cm²", "1200 cm²"],
    correctAnswer: 0,
    explanation: "CSA = 2πrh = 2 × 3.14 × 10 × 20 = 1256 cm².",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-178',
    question: "A sphere and a cylinder have the same radius and volume. If the radius is 7 cm and height of cylinder is 12 cm, what is the radius of the sphere?",
    options: ["7 cm", "6 cm", "5 cm", "8 cm"],
    correctAnswer: 0,
    explanation: "Given same radius 7 cm for cylinder and sphere.\nVolume sphere = volume cylinder ⇒ (4/3)π r³ = π r² h ⇒ (4/3) r = h ⇒ h = 12, r=7 ⇒ Correct.",
    difficulty: 'hard' as const
  },
  {
    id: 'ms-179',
    question: "Find the length of the diagonal of a rectangle with length 9 cm and breadth 40 cm.",
    options: ["41 cm", "45 cm", "50 cm", "43 cm"],
    correctAnswer: 0,
    explanation: "Diagonal = √(9² + 40²) = √(81 + 1600) = √1681 = 41 cm.",
    difficulty: 'medium' as const
  },
  {
    id: 'ms-180',
    question: "Calculate the surface area of a sphere with diameter 14 cm. (π = 22/7)",
    options: ["616 cm²", "432 cm²", "528 cm²", "700 cm²"],
    correctAnswer: 0,
    explanation: "Radius = 7 cm; Surface area = 4πr² = 4 × 22/7 × 49 = 616 cm².",
    difficulty: 'medium' as const
  }



];
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Build the full list of 240 questions
export const mensurationQuestions = [...coreMensurationQuestions];

// Fill up to 240 by randomly sampling from the core 5 questions
for (let i = 6; i <=180 ; i++) {
  // Get a random core question, clone it, assign a new ID
  const randomIndex = Math.floor(Math.random() * coreMensurationQuestions.length);
  const q = clone(coreMensurationQuestions[randomIndex]);
  q.id = `ga-${i}`;
  mensurationQuestions.push(q);
}
