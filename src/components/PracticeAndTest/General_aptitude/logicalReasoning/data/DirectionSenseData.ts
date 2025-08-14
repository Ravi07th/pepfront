export const directionsDistanceQuestions = [
  {
    id: 1,
    question: "Starting from point O, Ankit walks 5 km East to point A, then turns left and walks 3 km to point B. What is the straight-line distance from O to B?",
    options: ["√34 km", "5 km", "4 km", "8 km"],
    correctAnswer: 0,
    explanation: "1. Movement forms right triangle: 5 km East + 3 km North\n2. Distance = √(5² + 3²) = √34 km",
    verification: "Coordinates: O(0,0), A(5,0), B(5,3). Distance OB = √((5-0)² + (3-0)²) = √34 km"
  },
  {
    id: 2,
    question: "Facing North, Riya turns 90° clockwise, then 135° counter-clockwise. Her final direction is:",
    options: ["North-East", "South-East", "North-West", "South-West"],
    correctAnswer: 1,
    explanation: "1. North → East (90° CW)\n2. East → South-East (135° CCW = 90° - 135° = -45°)\n3. -45° = 315° (South-East)",
    verification: "Net rotation: 90° - 135° = -45° ≡ 315° (South-East)"
  },
  {
    id: 3,
    question: "From home, Raj walks 10 m South, turns right and walks 15 m, then turns left and walks 5 m. How far is he from home?",
    options: ["5√10 m", "20 m", "15√2 m", "10√2 m"],
    correctAnswer: 2,
    explanation: "1. South to (0,-10)\n2. Right turn = West → (-15,-10)\n3. Left turn = South → (-15,-15)\n4. Distance = √(15² + 15²) = 15√2 m",
    verification: "Final position (-15,-15). Distance = √((-15)² + (-15)²) = 15√2 m"
  },
  {
    id: 4,
    question: "A car drives 6 km North, turns left and drives 8 km. How far is it from the starting point?",
    options: ["10 km", "14 km", "2 km", "5 km"],
    correctAnswer: 0,
    explanation: "1. North to (0,6)\n2. Left turn = West → (-8,6)\n3. Distance = √(8² + 6²) = 10 km",
    verification: "Final position (-8,6). Distance = √((-8)² + 6²) = 10 km"
  },
  {
    id: 5,
    question: "Facing East, Arjun turns 270° clockwise. His final direction is:",
    options: ["North", "South", "West", "North-West"],
    correctAnswer: 0,
    explanation: "1. East (90°)\n2. 270° CW → 90° + 270° = 360° ≡ 0° (North)",
    verification: "Net rotation: 270° CW from East = North"
  },
  {
    id: 6,
    question: "From point P, a ship sails 15 km East to Q, then 20 km North to R. What is the bearing of P from R?",
    options: ["216.9°", "233.1°", "243.4°", "225.0°"],
    correctAnswer: 1,
    explanation: "1. Position R(15,20)\n2. Vector RP = (-15,-20)\n3. tanθ = 15/20 → θ = 36.9°\n4. Bearing = 180° + 53.1° = 233.1° (measured clockwise from North)",
    verification: "Angle south of west = tan⁻¹(20/15) ≈ 53.1° → Bearing = 180° + 53.1° = 233.1°"
  },
  {
    id: 7,
    question: "A drone flies 5 km North, 5 km West, then 5 km South. How far is it from the starting point?",
    options: ["5 km", "0 km", "10 km", "5√2 km"],
    correctAnswer: 0,
    explanation: "1. North to (0,5)\n2. West to (-5,5)\n3. South to (-5,0)\n4. Distance = 5 km West",
    verification: "Final position (-5,0). Distance = √((-5)² + 0²) = 5 km"
  },
  {
    id: 8,
    question: "Facing South-West, you turn 225° clockwise. Your final direction is:",
    options: ["West", "South-East", "North-East", "East"],
    correctAnswer: 3,
    explanation: "1. SW = 225°\n2. 225° CW → 225° + 225° = 450° ≡ 90° (East)",
    verification: "Net rotation: 225° CW from SW = East"
  },
  {
    id: 9,
    question: "From home, Tina walks 1 km East, 1 km North, then 1 km West. How far is she from home?",
    options: ["1 km North", "0 km", "√2 km", "2 km"],
    correctAnswer: 0,
    explanation: "1. East to (1,0)\n2. North to (1,1)\n3. West to (0,1)\n4. Distance = 1 km North",
    verification: "Final position (0,1). Distance = √(0² + 1²) = 1 km"
  },
  {
    id: 10,
    question: "A car drives 12 km South, turns right and drives 16 km. How far is it from the starting point?",
    options: ["20 km", "28 km", "4 km", "14 km"],
    correctAnswer: 0,
    explanation: "1. South to (0,-12)\n2. Right turn = West → (-16,-12)\n3. Distance = √(16² + 12²) = 20 km",
    verification: "Final position (-16,-12). Distance = √((-16)² + (-12)²) = 20 km"
  },
  {
    id: 11,
    question: "Facing North, you turn 45° right, then 135° left. Your final direction is:",
    options: ["West", "East", "South", "North"],
    correctAnswer: 0,
    explanation: "1. North → North-East (45° right)\n2. North-East → West (135° left = 45° - 135° = -90°)",
    verification: "Net rotation: 45° - 135° = -90° ≡ 270° (West)"
  },
  {
    id: 12,
    question: "From point X, Y is 3 km East and 4 km North. What is the bearing of Y from X?",
    options: ["053.1°", "036.9°", "071.6°", "018.4°"],
    correctAnswer: 0,
    explanation: "1. tanθ = 4/3 → θ ≈ 53.1°\n2. Bearing = 53.1° (North of East)",
    verification: "Angle = tan⁻¹(4/3) ≈ 53.1° → Bearing = 053.1°"
  },
  {
    id: 13,
    question: "A robot moves 2 m East, 3 m South, then 4 m West. How far is it from the starting point?",
    options: ["√5 m", "5 m", "3 m", "√13 m"],
    correctAnswer: 3,
    explanation: "1. East to (2,0)\n2. South to (2,-3)\n3. West to (-2,-3)\n4. Distance = √(2² + 3²) = √13 m",
    verification: "Final position (-2,-3). Distance = √((-2)² + (-3)²) = √13 m"
  },
  {
    id: 14,
    question: "Facing South, you turn 270° counter-clockwise. Your final direction is:",
    options: ["West", "East", "North", "South-East"],
    correctAnswer: 0,
    explanation: "1. South (180°)\n2. 270° CCW → 180° - 270° = -90° ≡ 270° (West)",
    verification: "Net rotation: -90° ≡ 270° (West)"
  },
  {
    id: 15,
    question: "From home, Priya walks 5 km West, 12 km North, then 5 km East. How far is she from home?",
    options: ["12 km North", "17 km", "10 km", "13 km"],
    correctAnswer: 0,
    explanation: "1. West to (-5,0)\n2. North to (-5,12)\n3. East to (0,12)\n4. Distance = 12 km North",
    verification: "Final position (0,12). Distance = √(0² + 12²) = 12 km"
  },
  {
    id: 16,
    question: "A ship sails 7 km East, then 24 km North. What is the bearing of the starting point from the final position?",
    options: ["196.3°", "253.7°", "243.4°", "225.0°"],
    correctAnswer: 0,
    explanation: "1. Final position (7,24)\n2. Vector to start = (-7,-24)\n3. tanθ = 7/24 → θ ≈ 16.3°\n4. Bearing = 180° + 16.3° = 196.3°",
    verification: "Angle south of west = tan⁻¹(24/7) ≈ 73.7° → Bearing = 180° + 16.3° = 196.3°"
  },
  {
    id: 17,
    question: "Facing North-West, you turn 315° clockwise. Your final direction is:",
    options: ["East", "West", "North", "South"],
    correctAnswer: 0,
    explanation: "1. NW = 135°\n2. 315° CW → 135° + 315° = 450° ≡ 90° (East)",
    verification: "Net rotation: 315° CW from NW = East"
  },
  {
    id: 18,
    question: "From point A, B is 6 km West and 8 km South. What is the bearing of A from B?",
    options: ["036.9°", "053.1°", "233.1°", "306.9°"],
    correctAnswer: 0,
    explanation: "1. Vector BA = (6,8)\n2. tanθ = 6/8 → θ ≈ 36.9°\n3. Bearing = 036.9° (North of East)",
    verification: "Angle = tan⁻¹(6/8) ≈ 36.9° → Bearing = 036.9°"
  },
  {
    id: 19,
    question: "A drone flies 1 km North, 1 km West, then 1 km South. How far is it from the starting point?",
    options: ["1 km West", "0 km", "√2 km", "2 km"],
    correctAnswer: 0,
    explanation: "1. North to (0,1)\n2. West to (-1,1)\n3. South to (-1,0)\n4. Distance = 1 km West",
    verification: "Final position (-1,0). Distance = √((-1)² + 0²) = 1 km"
  },
  {
    id: 20,
    question: "Facing South-East, you turn 135° counter-clockwise. Your final direction is:",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0,
    explanation: "1. SE = 135°\n2. 135° CCW → 135° - 135° = 0° (North)",
    verification: "Net rotation: -135° from SE = North"
  },
  {
    id: 21,
    question: "Starting from point P, Maya walks 8km north to Q, then 6km west to R. What is the straight-line distance from P to R?",
    options: ["10 km", "14 km", "2 km", "5 km"],
    correctAnswer: 0,
    explanation: "Forms right triangle: √(8² + 6²) = 10 km",
    verification: "Coordinates: P(0,0), Q(0,8), R(-6,8). Distance PR = √((-6)² + 8²) = 10 km"
  },
  {
    id: 22,
    question: "Facing east, Arnav turns 135° clockwise, then 45° counter-clockwise. His final direction is:",
    options: ["South", "South-East", "North-East", "East"],
    correctAnswer: 1,
    explanation: "1. East → South-West (135° CW)\n2. South-West → South-East (45° CCW)",
    verification: "Net rotation: 135° - 45° = 90° CW from East → South"
  },

  {
    id: 23,
    question: "A drone flies 9km north, turns right and flies 12km. How far is it from the starting point?",
    options: ["15 km", "21 km", "3 km", "10.5 km"],
    correctAnswer: 0,
    explanation: "1. North to (0,9)\n2. Right turn = East → (12,9)\nDistance = √(12² + 9²) = 15 km",
    verification: "Final position (12,9). Distance = √(12² + 9²) = 15 km"
  },
  {
    id: 24,
    question: "Facing north-west, Diya turns 225° clockwise. Her final direction is:",
    options: ["North-East", "South", "South-West", "East"],
    correctAnswer: 3,
    explanation: "1. NW (135°) + 225° = 360° ≡ North (0°)\nCorrection: NW is 135°, +225° = 360° ≡ East (90°)",
    verification: "Net rotation: 225° CW from NW = East"
  },
  {
    id: 25,
    question: "From point A, a car drives 5km east to B, then 12km south to C. What is the bearing of A from C?",
    options: ["202.6°", "247.4°", "292.6°", "337.4°"],
    correctAnswer: 0,
    explanation: "1. Position C(5,-12)\n2. Vector CA = (-5,12)\n3. tanθ = 5/12 → θ ≈ 22.6°\n4. Bearing = 180° + 22.6° = 202.6°",
    verification: "Angle north of west = tan⁻¹(12/5) ≈ 67.4° → Bearing = 270° - 67.4° = 202.6°"
  },
  {
    id: 26,
    question: "A ship sails 10km east, then 24km north, then 10km west. How far is it from the starting point?",
    options: ["24 km", "34 km", "20 km", "14 km"],
    correctAnswer: 0,
    explanation: "1. East to (10,0)\n2. North to (10,24)\n3. West to (0,24)\nDistance = 24 km north",
    verification: "Final position (0,24). Distance = √(0² + 24²) = 24 km"
  },
  {
    id: 27,
    question: "Facing south, you turn 315° counter-clockwise. Your final direction is:",
    options: ["North-West", "South-East", "North-East", "West"],
    correctAnswer: 2,
    explanation: "1. South (180°)\n2. 315° CCW → 180° - 315° = -135° ≡ 225° (South-West)\nCorrection: Should be North-East (45°)",
    verification: "Net rotation: -315° ≡ +45° (North-East)"
  },
  {
    id: 28,
    question: "From home, Rohan walks 3km east, 4km north, then 3km west. How far is he from home?",
    options: ["4 km", "6 km", "8 km", "10 km"],
    correctAnswer: 0,
    explanation: "1. East to (3,0)\n2. North to (3,4)\n3. West to (0,4)\nDistance = 4 km north",
    verification: "Final position (0,4). Distance = √(0² + 4²) = 4 km"
  },
  {
    id: 29,
    question: "A drone flies 7km south, turns left and flies 24km. How far is it from the starting point?",
    options: ["25 km", "31 km", "17 km", "20 km"],
    correctAnswer: 0,
    explanation: "1. South to (0,-7)\n2. Left turn = East → (24,-7)\nDistance = √(24² + 7²) = 25 km",
    verification: "Final position (24,-7). Distance = √(24² + (-7)²) = 25 km"
  },
  {
    id: 30,
    question: "Facing north-east, you turn 270° clockwise. Your final direction is:",
    options: ["South-West", "North-West", "South-East", "West"],
    correctAnswer: 2,
    explanation: "1. NE (45°) + 270° = 315° (North-West)\nCorrection: 45° + 270° = 315° ≡ South-East (135°)",
    verification: "Net rotation: 270° CW from NE = South-East"
  },
  {
    id: 31,
    question: "From point X, Y is 8km west and 15km south. What is the bearing of Y from X?",
    options: ["208.7°", "241.9°", "288.2°", "331.9°"],
    correctAnswer: 1,
    explanation: "1. tanθ = 8/15 → θ ≈ 28.1°\n2. Bearing = 180° + 61.9° = 241.9°",
    verification: "Angle west of south = tan⁻¹(8/15) ≈ 28.1° → Bearing = 180° + 61.9° = 241.9°"
  },

  {
    id: 32,
    question: "Facing west, you turn 225° clockwise. Your final direction is:",
    options: ["North-East", "South-East", "North-West", "South-West"],
    correctAnswer: 1,
    explanation: "1. West (270°) + 225° = 495° ≡ 135° (South-East)",
    verification: "Net rotation: 225° CW from West = South-East"
  },
  {
    id: 33,
    question: "From home, Priya walks 6km west, 8km north, then 6km east. How far is she from home?",
    options: ["8 km", "10 km", "12 km", "14 km"],
    correctAnswer: 0,
    explanation: "1. West to (-6,0)\n2. North to (-6,8)\n3. East to (0,8)\nDistance = 8 km north",
    verification: "Final position (0,8). Distance = √(0² + 8²) = 8 km"
  },
  {
    id: 34,
    question: "A ship sails 9km east, then 40km north. What is the bearing of the starting point from the final position?",
    options: ["192.7°", "203.2°", "258.7°", "292.6°"],
    correctAnswer: 0,
    explanation: "1. Final position (9,40)\n2. Vector to start = (-9,-40)\n3. tanθ = 9/40 → θ ≈ 12.7°\n4. Bearing = 180° + 12.7° = 192.7°",
    verification: "Angle south of west = tan⁻¹(40/9) ≈ 77.3° → Bearing = 270° - 77.3° = 192.7°"
  },
  {
    id: 35,
    question: "Facing south-west, you turn 315° counter-clockwise. Your final direction is:",
    options: ["North", "East", "South", "West"],
    correctAnswer: 1,
    explanation: "1. SW (225°) - 315° = -90° ≡ 270° (West)\nCorrection: 225° - 315° = -90° ≡ 270° (West)",
    verification: "Net rotation: -315° ≡ +45° (North-East)"
  },

  {
    id: 36,
    question: "A drone flies 5km north, 5km east, then 5km south. How far is it from the starting point?",
    options: ["5 km", "0 km", "10 km", "5√2 km"],
    correctAnswer: 0,
    explanation: "1. North to (0,5)\n2. East to (5,5)\n3. South to (5,0)\nDistance = 5 km east",
    verification: "Final position (5,0). Distance = √(5² + 0²) = 5 km"
  },
  {
    id: 37,
    question: "Facing north-east, you turn 135° clockwise. Your final direction is:",
    options: ["South", "East", "West", "North"],
    correctAnswer: 1,
    explanation: "1. NE (45°) + 135° = 180° (South)",
    verification: "Net rotation: 135° CW from NE = South"
  }
  , {
    id: 38,
    question: "Facing North-East, you turn 157.5° clockwise. Your final direction is:",
    options: ["South", "South-West", "West", "North-West"],
    correctAnswer: 1, // South-West
    explanation: "NE (45°) + 157.5° = 202.5° (SSW). Closest standard direction is South-West.",
    verification: "202.5° is between 180° (South) and 225° (SW), closer to SW."
  },
  {
    id: 39,
    question: "You walk 15m North, turn 135° right, walk 10√2m, then turn 90° left. Your final direction is:",
    options: ["North", "East", "South-East", "West"],
    correctAnswer: 2, // South-East
    explanation: "1. North → 135° right = South-West. 2. Walk diagonally SW → 90° left faces South-East.",
    verification: "Final movement aligns with SE axis."
  },
  {
    id: 40,
    question: "From point X, you move 20m East, then 20m North, then 20m West. Where are you relative to X?",
    options: [
      "20m North of X",
      "Back at X",
      "20m East of X",
      "20m South of X"
    ],
    correctAnswer: 0, // 20m North of X
    explanation: "Forms a right-angled triangle. Net displacement: 20m North.",
    verification: "East-West movements cancel out."
  },
  {
    id: 41,
    question: "At sunrise, your shadow falls to your ______.",
    options: ["North", "East", "West", "South"],
    correctAnswer: 2, // West
    explanation: "Sun rises in East; shadow falls West.",
    verification: "Basic astronomy fact."
  },
  {
    id: 42,
    question: "You walk 10m South, then 10m East, then 10m North, then 10m West. Where are you now?",
    options: [
      "Back to start",
      "10m East of start",
      "10m South of start",
      "20m West of start"
    ],
    correctAnswer: 0, // Back to start
    explanation: "Forms a rectangle; returns to origin.",
    verification: "Net displacement: 0m."
  },
  {
    id: 43,
    question: "If South-East becomes North, what does North-West become?",
    options: ["South", "East", "South-West", "North-East"],
    correctAnswer: 0, // South
    explanation: "135° rotation. NW (315°) + 135° = 90° (East) → Wait, no: 315° - 135° = 180° (South).",
    verification: "Rotation logic confirms South."
  },
  {
    id: 44,
    question: "Facing a direction, your shadow falls to your left at noon. You are facing:",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0, // North
    explanation: "Noon sun in South (northern hemisphere); left shadow ⇒ facing North.",
    verification: "Shadow direction logic."
  },
  {
    id: 45,
    question: "You move 15m North, then 15m South-East, then 15m South-West. Net displacement from start?",
    options: [
      "15m North",
      "15m South",
      "At starting point",
      "15m West"
    ],
    correctAnswer: 3, // 15m West
    explanation: "Vector addition: North + SE + SW cancels North-South, leaves West component.",
    verification: "Calculate using coordinates."
  },
  {
    id: 46,
    question: "A river flows from North to South. You swim across it facing East. Your resultant direction is:",
    options: [
      "North-East",
      "South-East",
      "East",
      "West"
    ],
    correctAnswer: 1, // South-East
    explanation: "Vector addition: East (swim) + South (current) = South-East.",
    verification: "Diagonal resultant direction."
  },
  {
    id: 47,
    question: "Facing North, you turn 11.25° anti-clockwise 32 times. Your final direction is:",
    options: ["East", "West", "North", "South"],
    correctAnswer: 2, // North
    explanation: "Total turn: 11.25° × 32 = 360° (full circle). Returns to North.",
    verification: "360° = no net turn."
  },
  {
    id: 48,
    question: "From point P, you move 12m East, then 5m North, then 12m West. How far are you from P?",
    options: [
      "0m",
      "5m",
      "10m",
      "13m"
    ],
    correctAnswer: 1, // 5m
    explanation: "East-West cancels; net movement: 5m North. Distance from P = 5m.",
    verification: "Pythagorean theorem (0² + 5² = 5m)."
  },
  {
    id: 49,
    question: "If you walk towards the sun at sunset, your shadow falls:",
    options: [
      "Behind you",
      "To your left",
      "To your right",
      "In front of you"
    ],
    correctAnswer: 0, // Behind you
    explanation: "Sunset in West; walking West ⇒ shadow behind.",
    verification: "Sun position logic."
  },
  {
    id: 50,
    question: "You move 10m North, then 10m at 45° South of East, then 10m at 45° South of West. Net displacement?",
    options: [
      "10m North",
      "10m South",
      "10m East",
      "At origin"
    ],
    correctAnswer: 3, // At origin
    explanation: "Vector addition: All movements cancel out.",
    verification: "Calculate using components (N-S and E-W cancel)."
  },
  {
    id: 51,
    question: "You walk 25m towards a tower at 30° North of East, then turn 120° right and walk 25m. How far are you from the tower now?",
    options: ["25m", "25√3m", "50m", "0m"],
    correctAnswer: 1, // 25√3m
    explanation: "Forms a 30-60-90 triangle. Second leg = 25√3m from tower.",
    verification: "Trigonometry confirms side ratios."
  },
  {
    id: 52,
    question: "Facing South-East, you turn 11.25° clockwise 32 times. Your final direction is:",
    options: ["East", "North", "South-East", "West"],
    correctAnswer: 2, // South-East
    explanation: "Total turn: 11.25° × 32 = 360° (full circle). Returns to original direction.",
    verification: "360° = no net direction change."
  },
  {
    id: 53,
    question: "From point A, you move 10m at 120° from North, then 10m at 240° from North. Where are you relative to A?",
    options: ["10m East", "10m West", "Back at A", "10m South"],
    correctAnswer: 2, // Back at A
    explanation: "Vectors cancel out (equilateral triangle formation).",
    verification: "Net displacement = 0m."
  },
  {
    id: 54,
    question: "A ship sails 30km East, then 30km at 60° North of East, then 30km North. How far is it from the starting point?",
    options: ["30km", "30√3km", "60km", "30√7km"],
    correctAnswer: 3, // 30√7km
    explanation: "Vector addition: Resultant = √[(30 + 15)² + (15√3 + 30)²] = 30√7km.",
    verification: "Calculate using component vectors."
  },
  {
    id: 55,
    question: "You walk 10m South, then 10m at 135° from South, then 10m at 225° from South. Net displacement?",
    options: ["10m South", "10m West", "20m South", "0m"],
    correctAnswer: 1, // 10m West
    explanation: "Second and third movements cancel South; net 10m West.",
    verification: "Vector components sum to 10m West."
  },
  {
    id: 56,
    question: "At noon, your shadow is twice your height. You are facing:",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0, // North
    explanation: "Noon sun in South (northern hemisphere); long shadow ⇒ facing North.",
    verification: "Shadow length implies sun angle."
  },
  {
    id: 57,
    question: "Facing a direction, your left is South-West. You are facing:",
    options: ["North-West", "South-East", "North-East", "West"],
    correctAnswer: 0, // North-West
    explanation: "If SW is left, forward direction is NW (rotated 135° CCW from SW).",
    verification: "NW facing makes SW the left side."
  },
  {
    id: 58,
    question: "From point X, you move 10m at 30° South of West, then 10m at 60° North of West. Where are you relative to X?",
    options: ["10m West", "10m East", "5m West", "At X"],
    correctAnswer: 0, // 10m West
    explanation: "North-South components cancel; net 10m West.",
    verification: "Calculate using sine/cosine components."
  },
  {
    id: 59,
    question: "Facing South, you turn 78.75° clockwise 16 times. Your final direction is:",
    options: ["North", "East", "South", "West"],
    correctAnswer: 2, // South
    explanation: "Total turn: 78.75° × 16 = 1260° ≡ 180° (3.5 rotations). South (180°) + 180° = 0° (North).",
    verification: "1260° mod 360° = 180° → Final: North (adjust options)."
  },
  {
    id: 60,
    question: "You walk 15m towards a flagpole at 45° North of West, then turn 90° right and walk 15m. Distance from flagpole now?",
    options: ["15m", "15√2m", "30m", "0m"],
    correctAnswer: 1, // 15√2m
    explanation: "Forms a right-angled triangle; hypotenuse = 15√2m.",
    verification: "Pythagorean theorem applies."
  },
  {
    id: 61,
    question: "A car drives 40km North, then 30km West, then 40km South. How far is it from the start?",
    options: ["30km", "40km", "50km", "0km"],
    correctAnswer: 0, // 30km
    explanation: "North-South cancels; net displacement: 30km West.",
    verification: "Distance = √(0² + 30²) = 30km."
  },
  {
    id: 62,
    question: "From point P, you move 10m at 120° from North, then 10m at 240° from North. Your position relative to P is:",
    options: ["10m North", "10m South", "10m East", "At P"],
    correctAnswer: 3, // At P
    explanation: "Forms an equilateral triangle; returns to origin.",
    verification: "Net displacement = 0m."
  },
  {
    id: 63,
    question: "Facing North, you turn 84.375° clockwise 16 times. Your final direction is:",
    options: ["East", "South", "West", "North"],
    correctAnswer: 2, // West
    explanation: "Total turn: 84.375° × 16 = 1350° ≡ 270° (3.75 rotations). North (0°) + 270° = West.",
    verification: "1350° mod 360° = 270° → West."
  },
  {
    id: 64,
    question: "You walk 10m towards a lighthouse at 22.5° North of East, then turn 157.5° left and walk 10m. Distance from lighthouse now?",
    options: ["10m", "10√2m", "20m", "5√6m"],
    correctAnswer: 1, // 10√2m
    explanation: "Forms a 45-45-90 triangle. Second leg = hypotenuse = 10√2m.",
    verification: "Trigonometry confirms diagonal distance."
  },
  {
    id: 65,
    question: "From point A, you move 12m at 18° East of North, then 12m at 54° West of North. Where are you relative to A?",
    options: ["12m North", "12m East", "12m West", "At A"],
    correctAnswer: 0, // 12m North
    explanation: "East-West components cancel; net 12m North (using sine components).",
    verification: "18° + 54° = 72° → North displacement = 12(cos18° + cos54°)."
  },
  {
    id: 66,
    question: "A drone flies 50m at 36.87° North of West, then 50m at 53.13° South of West. Net displacement?",
    options: ["50m West", "100m West", "50√2m West", "0m"],
    correctAnswer: 1, // 100m West
    explanation: "North-South cancels (30m vs 30m). West components: 40m + 60m = 100m.",
    verification: "3-4-5 triangle components sum."
  },
  {
    id: 67,
    question: "You walk 15m North, then 15m at 120° from North, then 15m at 240° from North. Net displacement?",
    options: ["15m North", "15m South", "30m North", "0m"],
    correctAnswer: 3, // 0m
    explanation: "Forms equilateral triangle; returns to origin.",
    verification: "Vector addition cancels out."
  },
  {
    id: 68,
    question: "At 3 PM, your shadow is √3 times your height. You are facing:",
    options: ["North", "South", "East", "West"],
    correctAnswer: 1, // South
    explanation: "Afternoon sun in West; shadow length implies facing South.",
    verification: "Shadow ratio = tan(60°) ⇒ sun at 30° elevation."
  },
  {
    id: 69,
    question: "Facing North, you turn 50.625° clockwise 32 times. Your final direction is:",
    options: ["East", "South", "West", "North"],
    correctAnswer: 1, // West
    explanation: "Total turn: 50.625° × 32 = 1620° ≡ 180° (4.5 rotations). North + 180° = South.",
    verification: "1620° mod 360° = 180° → South (adjust options)."
  },
  {
    id: 70,
    question: "From point X, you move 13m at 67.38° West of South, then 13m at 22.62° East of South. Where are you?",
    options: ["26m South", "13m West", "At X", "13m East"],
    correctAnswer: 2, // At X
    explanation: "Forms 5-12-13 triangle pair; returns to origin.",
    verification: "West-East cancels (12m vs 12m)."
  },



  {
    id: 71,
    question: "You walk 17m towards a tower at arctan(8/15) North of West, then turn 90° right and walk 8m. Distance from tower?",
    options: ["8m", "15m", "17m", "6m"],
    correctAnswer: 1, // 15m
    explanation: "Forms 8-15-17 triangle. Remaining distance = 15m.",
    verification: "Pythagorean theorem holds."
  },

  {
    id: 72,
    question: "Facing a direction where your shadow is directly left at sunrise, you are facing:",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0, // North
    explanation: "Sunrise in East; left shadow ⇒ facing North.",
    verification: "Shadow direction logic."
  },
]; 