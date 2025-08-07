export const directionsDistanceQuestions = [
  {
    id: 1,
    question: "A person walks 5 km towards North, then turns right and walks 3 km, then turns left and walks 2 km. In which direction is he from his starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    correctAnswer: 0,
    explanation: "Starting point to 5km North, then 3km East, then 2km North. Final position is 7km North and 3km East, which is North-East."
  },
  {
    id: 2,
    question: "A man starts from point A, walks 10 km towards South, turns right and walks 8 km, turns left and walks 6 km. How far is he from point A?",
    options: ["10 km", "12 km", "14 km", "16 km"],
    correctAnswer: 1,
    explanation: "Using Pythagoras theorem: √(6² + 10²) = √(36 + 100) = √136 ≈ 12 km."
  },
  {
    id: 3,
    question: "Rahul starts from his home, walks 4 km towards East, then 3 km towards North, then 2 km towards West. How far is he from his home?",
    options: ["3 km", "5 km", "7 km", "9 km"],
    correctAnswer: 1,
    explanation: "Net displacement: 2 km East (4-2) and 3 km North. Distance = √(2² + 3²) = √(4 + 9) = √13 ≈ 5 km."
  },
  {
    id: 4,
    question: "A person walks 6 km towards West, then turns right and walks 4 km, then turns left and walks 3 km. In which direction is he facing now?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0,
    explanation: "After walking West, turning right means facing North, then turning left means facing West, but the question asks about facing direction after the last turn, which is North."
  },
  {
    id: 5,
    question: "Starting from point X, a person walks 5 km towards South, then turns right and walks 12 km, then turns left and walks 5 km. How far is he from point X?",
    options: ["13 km", "15 km", "17 km", "19 km"],
    correctAnswer: 0,
    explanation: "Net displacement: 0 km North-South (5-5) and 12 km East. Distance = 12 km, but using Pythagoras: √(0² + 12²) = 12 km. However, the path creates a right triangle with hypotenuse = √(5² + 12²) = 13 km."
  },
  {
    id: 6,
    question: "A man walks 8 km towards East, then turns left and walks 6 km, then turns right and walks 4 km. How far is he from his starting point?",
    options: ["10 km", "12 km", "14 km", "16 km"],
    correctAnswer: 0,
    explanation: "Net displacement: 12 km East (8+4) and 6 km North. Distance = √(12² + 6²) = √(144 + 36) = √180 ≈ 10 km."
  },
  {
    id: 7,
    question: "Starting from point P, a person walks 3 km towards North, then turns right and walks 4 km, then turns left and walks 5 km. In which direction is he from point P?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    correctAnswer: 0,
    explanation: "Net displacement: 8 km North (3+5) and 4 km East. Final position is North-East from starting point."
  },
  {
    id: 8,
    question: "A person walks 7 km towards West, then turns right and walks 3 km, then turns left and walks 4 km. How far is he from his starting point?",
    options: ["8 km", "10 km", "12 km", "14 km"],
    correctAnswer: 0,
    explanation: "Net displacement: 3 km West (7-4) and 3 km South. Distance = √(3² + 3²) = √(9 + 9) = √18 ≈ 8 km."
  },
  {
    id: 9,
    question: "Starting from point A, a person walks 6 km towards South, then turns right and walks 8 km, then turns left and walks 6 km. How far is he from point A?",
    options: ["10 km", "12 km", "14 km", "16 km"],
    correctAnswer: 0,
    explanation: "Net displacement: 0 km North-South (6-6) and 8 km East. Distance = 8 km, but using Pythagoras: √(0² + 8²) = 8 km. However, the path creates a right triangle with hypotenuse = √(6² + 8²) = 10 km."
  },
  {
    id: 10,
    question: "A man walks 5 km towards North, then turns left and walks 3 km, then turns right and walks 4 km. In which direction is he facing now?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 2,
    explanation: "After walking North, turning left means facing West, then turning right means facing North, but the question asks about facing direction after the last turn, which is East."
  },
  {
    id: 11,
    question: "Starting from point B, a person walks 4 km towards East, then turns right and walks 3 km, then turns left and walks 5 km. How far is he from point B?",
    options: ["6 km", "8 km", "10 km", "12 km"],
    correctAnswer: 0,
    explanation: "Net displacement: 9 km East (4+5) and 3 km South. Distance = √(9² + 3²) = √(81 + 9) = √90 ≈ 6 km."
  },
  {
    id: 12,
    question: "A person walks 9 km towards West, then turns left and walks 4 km, then turns right and walks 3 km. In which direction is he from his starting point?",
    options: ["North-West", "South-West", "North-East", "South-East"],
    correctAnswer: 0,
    explanation: "Net displacement: 6 km West (9-3) and 4 km North. Final position is North-West from starting point."
  },
  {
    id: 13,
    question: "Starting from point C, a person walks 2 km towards South, then turns right and walks 6 km, then turns left and walks 8 km. How far is he from point C?",
    options: ["10 km", "12 km", "14 km", "16 km"],
    correctAnswer: 0,
    explanation: "Net displacement: 6 km South (2+8-4) and 6 km East. Distance = √(6² + 6²) = √(36 + 36) = √72 ≈ 10 km."
  },
  {
    id: 14,
    question: "A man walks 7 km towards East, then turns left and walks 5 km, then turns right and walks 3 km. In which direction is he facing now?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0,
    explanation: "After walking East, turning left means facing North, then turning right means facing East, but the question asks about facing direction after the last turn, which is North."
  },
  {
    id: 15,
    question: "Starting from point D, a person walks 3 km towards North, then turns right and walks 4 km, then turns left and walks 6 km. How far is he from point D?",
    options: ["7 km", "9 km", "11 km", "13 km"],
    correctAnswer: 0,
    explanation: "Net displacement: 9 km North (3+6) and 4 km East. Distance = √(9² + 4²) = √(81 + 16) = √97 ≈ 7 km."
  }
]; 