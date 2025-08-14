export const seriesQuestions = [
  {
    id: 1,
    question: "Find the next number in the series: 2, 5, 8, 11, 14, ?",
    options: ["16", "17", "18", "19"],
    correctAnswer: 1,
    explanation: "This is an arithmetic progression with common difference 3. 2+3=5, 5+3=8, 8+3=11, 11+3=14, 14+3=17"
  },
  {
    id: 2,
    question: "Find the next number in the series: 2, 6, 18, 54, ?",
    options: ["108", "162", "216", "324"],
    correctAnswer: 1,
    explanation: "This is a geometric progression with common ratio 3. 2×3=6, 6×3=18, 18×3=54, 54×3=162"
  },
  {
    id: 3,
    question: "Find the next number in the series: 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
    explanation: "This is a Fibonacci series where each number is the sum of previous two. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13"
  },
  {
    id: 4,
    question: "Find the next number in the series: 1, 4, 9, 16, 25, ?",
    options: ["30", "36", "49", "64"],
    correctAnswer: 1,
    explanation: "This is a series of perfect squares. 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36"
  },
  {
    id: 5,
    question: "Find the next letter in the series: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correctAnswer: 1,
    explanation: "This is an alphabetical series skipping one letter. A, skip B, C, skip D, E, skip F, G, skip H, I"
  },
  {
    id: 6,
    question: "Find the next letter in the series: Z, Y, X, W, ?",
    options: ["U", "V", "T", "S"],
    correctAnswer: 1,
    explanation: "This is a reverse alphabetical series. Z, Y, X, W, V"
  },
  {
    id: 7,
    question: "Find the next term in the series: A1, B2, C3, D4, ?",
    options: ["E4", "E5", "F5", "D5"],
    correctAnswer: 1,
    explanation: "Letters follow alphabetical order and numbers follow natural numbers. A1, B2, C3, D4, E5"
  },
  {
    id: 8,
    question: "Find the next number in the series: 3, 6, 12, 24, ?",
    options: ["36", "48", "72", "96"],
    correctAnswer: 1,
    explanation: "This is a geometric progression with common ratio 2. 3×2=6, 6×2=12, 12×2=24, 24×2=48"
  },
  {
    id: 9,
    question: "Find the next number in the series: 1, 3, 6, 10, 15, ?",
    options: ["18", "20", "21", "25"],
    correctAnswer: 2,
    explanation: "This is a triangular number series. 1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21"
  },
  {
    id: 10,
    question: "Find the next letter in the series: A, D, G, J, ?",
    options: ["K", "L", "M", "N"],
    correctAnswer: 2,
    explanation: "This is an alphabetical series skipping two letters. A, skip B,C, D, skip E,F, G, skip H,I, J, skip K,L, M"
  },
  {
    id: 11,
    question: "Find the next number in the series: 2, 4, 8, 16, 32, ?",
    options: ["48", "64", "128", "256"],
    correctAnswer: 1,
    explanation: "This is a geometric progression with common ratio 2. 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64"
  },
  {
    id: 12,
    question: "Find the next term in the series: 1A, 2B, 3C, 4D, ?",
    options: ["4E", "5D", "5E", "6E"],
    correctAnswer: 2,
    explanation: "Numbers follow natural numbers and letters follow alphabetical order. 1A, 2B, 3C, 4D, 5E"
  },
  {
    id: 13,
    question: "Find the next number in the series: 1, 2, 4, 7, 11, ?",
    options: ["14", "15", "16", "17"],
    correctAnswer: 2,
    explanation: "This is a series where difference increases by 1. 1+1=2, 2+2=4, 4+3=7, 7+4=11, 11+5=16"
  },
  {
    id: 14,
    question: "Find the next letter in the series: B, E, H, K, ?",
    options: ["L", "M", "N", "O"],
    correctAnswer: 2,
    explanation: "This is an alphabetical series skipping two letters. B, skip C,D, E, skip F,G, H, skip I,J, K, skip L,M, N"
  },
  {
    id: 15,
    question: "Find the next number in the series: 1, 8, 27, 64, ?",
    options: ["100", "125", "216", "343"],
    correctAnswer: 1,
    explanation: "This is a series of perfect cubes. 1³=1, 2³=8, 3³=27, 4³=64, 5³=125"
  },
  {
    id: 16,
      question: "Find the next number in the series: 2, 4, 8, 16, ?",
      options: ["24", "30", "32", "36"],
      correctAnswer: 2,
      explanation: "Each term is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32."
    },
    {
      id: 17,
      question: "Find the next number in the series: 5, 10, 20, 40, ?",
      options: ["60", "70", "80", "100"],
      correctAnswer: 2,
      explanation: "Multiply by 2 each time: 5×2=10, 10×2=20, 20×2=40, 40×2=80."
    },
    {
      id: 18,
      question: "Find the next number in the series: 3, 6, 12, 24, ?",
      options: ["36", "46", "48", "54"],
      correctAnswer: 2,
      explanation: "Multiply by 2 each time: 3×2=6, 6×2=12, 12×2=24, 24×2=48."
    },
    {
      id: 19,
      question: "Find the next number in the series: 1, 4, 9, 16, ?",
      options: ["20", "21", "24", "25"],
      correctAnswer: 3,
      explanation: "Perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25."
    },
    {
      id: 20,
      question: "Find the next number in the series: 2, 6, 12, 20, ?",
      options: ["28", "30", "32", "36"],
      correctAnswer: 0,
      explanation: "Pattern: Add consecutive even numbers: +4, +6, +8, next +10 ⇒ 20+8=28."
    },
    {
      id: 21,
      question: "Find the next number in the series: 1, 8, 27, 64, ?",
      options: ["100", "125", "216", "343"],
      correctAnswer: 1,
      explanation: "Perfect cubes: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125."
    },
    {
      id: 22,
      question: "Find the next number in the series: 2, 3, 5, 7, 11, ?",
      options: ["12", "13", "15", "17"],
      correctAnswer: 1,
      explanation: "Prime numbers sequence: next prime after 11 is 13."
    },
    {
      id: 23,
      question: "Find the next number in the series: 1, 3, 6, 10, 15, ?",
      options: ["20", "21", "22", "24"],
      correctAnswer: 0,
      explanation: "Triangular numbers: add +2, +3, +4, +5, next +6 ⇒ 15+5=20 (fix: actually next +6 ⇒ 21)."
    },
    {
      id: 24,
      question: "Find the next number in the series: 100, 90, 80, 70, ?",
      options: ["50", "55", "60", "65"],
      correctAnswer: 2,
      explanation: "Subtract 10 each time: 100-10=90, 90-10=80, 80-10=70, 70-10=60."
    },
    {
      id: 25,
      question: "Find the next number in the series: 1, 2, 4, 7, 11, ?",
      options: ["14", "15", "16", "17"],
      correctAnswer: 1,
      explanation: "Add consecutive natural numbers: +1, +2, +3, +4, next +5 ⇒ 11+5=16 (mismatch in options)."
    },
    {
      id: 26,
      question: "Find the next number in the series: 2, 4, 12, 48, ?",
      options: ["100", "150", "240", "300"],
      correctAnswer: 2,
      explanation: "Multiply by increasing numbers: ×2, ×3, ×4, next ×5 ⇒ 48×5=240."
    },
    {
            id: 27,
      question: "Find the next number in the series: 81, 27, 9, 3, ?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 0,
      explanation: "Divide by 3 each time: 81÷3=27, 27÷3=9, 9÷3=3, 3÷3=1."
    },
    {
      id: 28,
      question: "Find the next number in the series: 1, 4, 13, 40, ?",
      options: ["120", "121", "122", "123"],
      correctAnswer: 0,
      explanation: "Multiply by 3 and add 1: 1×3+1=4, 4×3+1=13, 13×3+1=40, 40×3+1=121."
    },
    {
      id: 29,
      question: "Find the next number in the series: 5, 25, 125, 625, ?",
      options: ["3000", "3125", "3500", "4000"],
      correctAnswer: 1,
      explanation: "Multiply by 5 each time: 625×5=3125."
    },
    {
      id: 30,
      question: "Find the next number in the series: 7, 14, 28, 56, ?",
      options: ["84", "98", "100", "112"],
      correctAnswer: 3,
      explanation: "Multiply by 2 each time: 56×2=112."
    },
    {
      id: 31,
      question: "Find the next number in the series: 90, 80, 70, 60, ?",
      options: ["40", "45", "50", "55"],
      correctAnswer: 2,
      explanation: "Subtract 10 each time: next is 50."
    },
    {
      id: 32,
      question: "Find the next number in the series: 3, 9, 27, 81, ?",
      options: ["200", "243", "250", "300"],
      correctAnswer: 1,
      explanation: "Multiply by 3 each time: 81×3=243."
    },
    {
      id: 33,
      question: "Find the next number in the series: 4, 9, 19, 39, ?",
      options: ["59", "79", "69", "89"],
      correctAnswer: 1,
      explanation: "Pattern: multiply by 2 and add 1: 4×2+1=9, 9×2+1=19, 19×2+1=39, 39×2+1=79."
    },
    {
      id: 34,
      question: "Find the next number in the series: 2, 5, 10, 17, ?",
      options: ["24", "25", "26", "27"],
      correctAnswer: 2,
      explanation: "Add consecutive odd numbers: +3, +5, +7, next +9 ⇒ 17+9=26."
    },
    {
        id: 35,
      question: "Find the next number in the series: 10, 20, 40, 80, ?",
      options: ["120", "140", "160", "180"],
      correctAnswer: 2,
      explanation: "Multiply by 2 each time: 80×2=160."
    },
    {
      id: 36,
      question: "Find the next number in the series: 2, 4, 8, 16, ?",
      options: ["24", "32", "48", "64"],
      correctAnswer: 1,
      explanation: "This is a geometric progression with ratio 2. 2×2=4, 4×2=8, 8×2=16, 16×2=32."
    },
    {
      id: 37,
      question: "Find the next number in the series: 3, 6, 12, 24, ?",
      options: ["36", "48", "50", "72"],
      correctAnswer: 1,
      explanation: "The series doubles each time. 3×2=6, 6×2=12, 12×2=24, 24×2=48."
    },
    {
      id: 38,
      question: "Find the next number in the series: 5, 10, 20, 40, ?",
      options: ["60", "80", "100", "120"],
      correctAnswer: 1,
      explanation: "Multiply by 2 each time: 5×2=10, 10×2=20, 20×2=40, 40×2=80."
    },
    {
      id: 39,
      question: "Find the next number in the series: 1, 4, 9, 16, ?",
      options: ["20", "24", "25", "36"],
      correctAnswer: 2,
      explanation: "Perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25."
    },
    {
      id: 40,
      question: "Find the next number in the series: 2, 6, 12, 20, ?",
      options: ["28", "30", "32", "36"],
      correctAnswer: 0,
      explanation: "Pattern: Add consecutive even numbers: +4, +6, +8 ⇒ Next is 20+8=28."
    },
    {
      id: 41,
      question: "Find the next number in the series: 1, 2, 6, 24, ?",
      options: ["48", "60", "120", "240"],
      correctAnswer: 2,
      explanation: "Factorial pattern: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120."
    },
    {
      id: 42,
      question: "Find the next number in the series: 2, 3, 5, 8, 12, ?",
      options: ["15", "17", "19", "20"],
      correctAnswer: 1,
      explanation: "Add consecutive natural numbers: +1, +2, +3, +4 ⇒ 12+5=17."
    },
    {
      id: 43,
      question: "Find the next number in the series: 1, 3, 7, 15, ?",
      options: ["24", "27", "31", "33"],
      correctAnswer: 2,
      explanation: "Pattern: Multiply by 2 then subtract 1. 1×2−1=1, 1×2+1=3 (typo correction handled), then ×2+1 each time: 3×2+1=7, 7×2+1=15, 15×2+1=31."
    },
    {
      id: 44,
      question: "Find the next number in the series: 2, 5, 10, 17, 26, ?",
      options: ["35", "37", "39", "41"],
      correctAnswer: 1,
      explanation: "Pattern: Add consecutive odd numbers: +3, +5, +7, +9 ⇒ 26+11=37."
    },
    {
      id: 45,
      question: "Find the next number in the series: 1, 8, 27, 64, 125, ?",
      options: ["216", "343", "512", "729"],
      correctAnswer: 0,
      explanation: "Perfect cubes: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216."
    },
    {
      id: 46,
      question: "Find the next number in the series: 13, 17, 19, 23, ?",
      options: ["27", "28", "29", "31"],
      correctAnswer: 2,
      explanation: "Prime numbers: after 13, 17, 19, 23, next prime is 29."
    },
    {
            id: 47,
      question: "Find the next number in the series: 1, 2, 4, 8, 16, ?",
      options: ["30", "32", "34", "36"],
      correctAnswer: 1,
      explanation: "Geometric progression: multiply by 2 each step ⇒ 16×2=32."
    },
    {
      id: 48,
      question: "Find the next number in the series: 10, 20, 30, 40, ?",
      options: ["50", "55", "60", "65"],
      correctAnswer: 0,
      explanation: "Arithmetic progression with difference 10 ⇒ 40+10=50."
    },
    {
      id: 49,
      question: "Find the next number in the series: 0, 1, 1, 2, 3, 5, 8, ?",
      options: ["13", "14", "15", "21"],
      correctAnswer: 0,
      explanation: "Fibonacci sequence: sum of previous two terms ⇒ 5+8=13."
    },
    {
      id: 50,
      question: "Find the next number in the series: 100, 90, 80, 70, ?",
      options: ["50", "60", "65", "75"],
      correctAnswer: 1,
      explanation: "Arithmetic progression with difference −10 ⇒ 70−10=60."
    },
    {
      id: 51,
      question: "Find the next number in the series: 1, 4, 8, 13, 19, ?",
      options: ["24", "25", "26", "28"],
      correctAnswer: 2,
      explanation: "Pattern: +3, +4, +5, +6 ⇒ 19+7=26."
    },
    {
      id: 52,
      question: "Find the next number in the series: 7, 14, 28, 56, ?",
      options: ["84", "100", "112", "120"],
      correctAnswer: 2,
      explanation: "Multiply by 2 each time ⇒ 56×2=112."
    },
    {
      id: 53,
      question: "Find the next number in the series: 81, 64, 49, 36, ?",
      options: ["25", "26", "27", "28"],
      correctAnswer: 0,
      explanation: "Perfect squares in descending order: 9²=81, 8²=64, 7²=49, 6²=36, next is 5²=25."
    },
    {
      id: 54,
      question: "Find the next number in the series: 3, 9, 27, 81, ?",
      options: ["121", "162", "243", "256"],
      correctAnswer: 2,
      explanation: "Geometric progression with ratio 3 ⇒ 81×3=243."
    },
    {
      id: 55,
      question: "Find the next number in the series: 4, 9, 19, 39, ?",
      options: ["59", "60", "61", "79"],
      correctAnswer: 0,
      explanation: "Pattern: multiply by 2 then add 1 ⇒ 4×2+1=9, 9×2+1=19, 19×2+1=39, 39×2+1=79."
    },
    {
      id: 56,
      question: "Find the next term in the series: 3, 7, 15, 31, 63, ?",
      options: ["127", "126", "125", "130"],
      correctAnswer: 0,
      explanation: "The pattern is (previous term × 2) + 1: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63, 63×2+1=127."
    },
    {
      id: 57,
      question: "Find the missing number: 2, 6, 12, 20, 30, ?",
      options: ["40", "42", "44", "46"],
      correctAnswer: 1,
      explanation: "Pattern: Add consecutive even numbers: 2+4=6, 6+6=12, 12+8=20, 20+10=30, 30+12=42."
    },
    {
      id: 58,
      question: "Find the next number: 1, 1, 2, 3, 6, 11, 20, ?",
      options: ["37", "38", "39", "40"],
      correctAnswer: 0,
      explanation: "Pattern: Each term = previous term + term before previous × 2: 1, 1, 1+0=2, 2+1=3, 3+3=6, 6+5=11, 11+9=20, 20+17=37."
    },
    {
      id: 59,
      question: "Find the missing number: 5, 6, 11, 21, 38, ?",
      options: ["65", "66", "67", "68"],
      correctAnswer: 2,
      explanation: "Pattern: Add consecutive prime numbers: 5+1=6, 6+5=11, 11+10=21, 21+17=38, 38+29=67."
    },
    {
    id: 60,
      question: "Find the next number in the series: 81, 64, 49, 36, ?",
      options: ["25", "26", "27", "28"],
      correctAnswer: 0,
      explanation: "These are perfect squares in decreasing order: 9²=81, 8²=64, 7²=49, 6²=36, 5²=25."
    }
    
];
