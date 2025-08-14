import { QuantitativeQuestion } from '../types';

export const numberSystemQuestions: QuantitativeQuestion[] = [
  {
    id: 'ns-1',
    topicId: 'number-system',
    question: 'What is the HCF of 24 and 36?',
    options: ['6', '8', '12', '18'],
    correctAnswer: 2,
    explanation: 'Prime factorization: 24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 12',
    difficulty: 'easy'
  },
  {
    id: 'ns-2',
    topicId: 'number-system',
    question: 'Find the LCM of 15, 20, and 25.',
    options: ['150', '300', '450', '600'],
    correctAnswer: 1,
    explanation: 'Prime factorization: 15 = 3 × 5, 20 = 2² × 5, 25 = 5². LCM = 2² × 3 × 5² = 300',
    difficulty: 'medium'
  },
  {
    id: 'ns-3',
    topicId: 'number-system',
    question: 'A number when divided by 6 leaves remainder 2, when divided by 8 leaves remainder 4. What is the smallest such number?',
    options: ['14', '20', '26', '32'],
    correctAnswer: 1,
    explanation: 'Using Chinese Remainder Theorem or trial: 20 ÷ 6 = 3 remainder 2, 20 ÷ 8 = 2 remainder 4',
    difficulty: 'hard'
  },
  {
    id: 'ns-4',
    topicId: 'number-system',
    question: 'Which of the following numbers is divisible by 9?',
    options: ['12345', '23456', '34567', '45678'],
    correctAnswer: 3,
    explanation: 'Sum of digits of 45678 = 4+5+6+7+8 = 30, which is divisible by 9',
    difficulty: 'easy'
  },
  {
    id: 'ns-5',
    topicId: 'number-system',
    question: 'Find the unit digit of 7^2023.',
    options: ['1', '3', '7', '9'],
    correctAnswer: 2,
    explanation: 'Cyclic pattern: 7¹=7, 7²=49, 7³=343, 7⁴=2401. Pattern repeats every 4. 2023 ÷ 4 = 505 remainder 3. So unit digit is 7',
    difficulty: 'hard'
  },
{
      id: 'ns-6',
      topicId: 'number-system',
      question: "What is the HCF of 24 and 36?",
      options: ['6', '8', '12', '18'],
      correctAnswer: 2,
      explanation: "Prime factorization: 24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 12"
    },
    {
      id: 'ns-7',
      topicId: 'number-system',
      question: "Find the LCM of 15, 20, and 25.",
      options: ['150', '300', '450', '600'],
      correctAnswer: 1,
      explanation: "Prime factorization: 15 = 3 × 5, 20 = 2² × 5, 25 = 5². LCM = 2² × 3 × 5² = 300"
    },
    {
      id: 'ns-8',
      topicId: 'number-system',
      question: "If 20% of a number is 40, what is 60% of the same number?",
      options: ['80', '100', '120', '140'],
      correctAnswer: 2,
      explanation: "20% = 40, so 100% = 40 × 5 = 200. 60% of 200 = 120"
    },
    {
      id: 'ns-9',
      topicId: 'number-system',
      question: "The ratio of boys to girls in a class is 3:2. If there are 25 students, how many girls are there?",
      options: ['8', '10', '12', '15'],
      correctAnswer: 1,
      explanation: "Ratio 3:2 means 3+2=5 parts. 25 students ÷ 5 = 5 students per part. Girls = 2 parts = 10"
    },
    {
      id: 'ns-10',
      topicId: 'number-system',
      question: "A man buys a watch for Rs. 1950 and sells it for Rs. 2200. What is his profit percentage?",
      options: ['12.8%', '14.2%', '15.8%', '16.4%'],
      correctAnswer: 0,
      explanation: "Profit = 2200 - 1950 = 250. Profit % = (250/1950) × 100 = 12.8%"
    },
    {
      id: 'ns-11',
      topicId: 'number-system',
      question: "What is the HCF of 48, 72, and 96?",
      options: ['12', '16', '24', '32'],
      correctAnswer: 2,
      explanation: "Prime factorization: 48 = 2⁴ × 3, 72 = 2³ × 3², 96 = 2⁵ × 3. HCF = 2³ × 3 = 24"
    },
    {
      id: 'ns-12',
      topicId: 'number-system',
      question: "Find the LCM of 12, 18, and 24.",
      options: ['36', '48', '72', '96'],
      correctAnswer: 2,
      explanation: "Prime factorization: 12 = 2² × 3, 18 = 2 × 3², 24 = 2³ × 3. LCM = 2³ × 3² = 72"
    },
    {
      id: 'ns-13',
      topicId: 'number-system',
      question: "If the ratio of A:B:C is 2:3:4 and the sum is 180, what is the value of C?",
      options: ['60', '70', '80', '90'],
      correctAnswer: 2,
      explanation: "Ratio 2:3:4 means 2+3+4=9 parts. 180 ÷ 9 = 20 per part. C = 4 parts = 4 × 20 = 80"
    },
    {
      id: 'ns-14',
      topicId: 'number-system',
      question: "What is the smallest number that when divided by 8, 12, and 16 leaves remainder 3?",
      options: ['51', '99', '147', '195'],
      correctAnswer: 0,
      explanation: "LCM of 8, 12, 16 = 48. Required number = 48 + 3 = 51"
    },
    {
      id: 'ns-15',
      topicId: 'number-system',
      question: "If a number is divisible by both 6 and 8, it must also be divisible by:",
      options: ['12', '16', '24', '48'],
      correctAnswer: 2,
      explanation: "If a number is divisible by 6 and 8, it must be divisible by their LCM, which is 24"
    },
    {
      id: 'ns-16',
      topicId: 'number-system',
      question: "The sum of two numbers is 50 and their HCF is 10. How many such pairs are possible?",
      options: ['1', '2', '3', '4'],
      correctAnswer: 1,
      explanation: "Possible pairs: (10, 40), (20, 30). Only 2 pairs where both numbers are divisible by 10"
    },
    {
      id: 'ns-17 ',
      topicId: 'number-system',
      question: "If the HCF of two numbers is 12 and their LCM is 72, what is the product of the numbers?",
      options: ['864', '720', '648', '576'],
      correctAnswer: 0,
      explanation: "Product = HCF × LCM = 12 × 72 = 864"
    },
    {
      id: 'ns-18',
      topicId: 'number-system',
      question: "What is the greatest number that divides 43, 91, and 183 leaving the same remainder in each case?",
      options: ['4', '8', '12', '16'],
      correctAnswer: 0,
      explanation: "The required number is the HCF of (91-43), (183-91), and (183-43), which is HCF of 48, 92, 140 = 4"
    },
    {
      id: 'ns-19',
      topicId: 'number-system',
      question: "If the ratio of two numbers is 3:4 and their HCF is 15, what are the numbers?",
      options: ['30, 40', '45, 60', '60, 80', '75, 100'],
      correctAnswer: 1,
      explanation: "Let the numbers be 3x and 4x. HCF = x = 15. So numbers are 3×15 = 45 and 4×15 = 60"
    },
    {
      id: 'ns-20',
      topicId: 'number-system',
      question: "What is the smallest 4-digit number divisible by 12, 15, and 18?",
      options: ['1080', '1200', '1260', '1440'],
      correctAnswer: 0,
      explanation: "LCM of 12, 15, 18 = 180. Smallest 4-digit number divisible by 180 is 1080"
    },
      {
          id: "ns-21",
          topicId: "number-system",
          question: "What is the largest 3-digit number divisible by 7, 9, and 11?",
          options: ["693", "792", "891", "990"],
          correctAnswer: 0,
          explanation: "LCM of 7, 9, 11 = 693. Largest 3-digit multiple is 693"
      },
      {
          id: "ns-22",
          topicId: "number-system",
          question: "How many prime numbers exist between 50 and 100?",
          options: ["8", "10", "12", "14"],
          correctAnswer: 1,
          explanation: "Primes: 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 → Total 10"
      },
      {
          id: "ns-23",
          topicId: "number-system",
          question: "What is the sum of all even divisors of 120?",
          options: ["240", "288", "336", "360"],
          correctAnswer: 1,
          explanation: "Prime factorization: 2³×3×5. Even divisors sum: (2+4+8)(1+3)(1+5) - 1×(1+3)(1+5) = 288"
      },
      {
          id: "ns-24",
          topicId: "number-system",
          question: "The binary equivalent of decimal 45 is:",
          options: ["101101", "110110", "101110", "110101"],
          correctAnswer: 0,
          explanation: "45 = 32 + 8 + 4 + 1 → 101101"
      },
      {
          id: "ns-25",
          topicId: "number-system",
          question: "What is the unit digit of 7⁴³ + 3⁶⁵?",
          options: ["0", "2", "4", "6"],
          correctAnswer: 2,
          explanation: "7 cycle: 7,9,3,1 → 7⁴³ ends with 3. 3 cycle: 3,9,7,1 → 3⁶⁵ ends with 3. Sum's unit digit: 3+3=6"
      },
      {
          id: "ns-26",
          topicId: "number-system",
          question: "Which of these is a perfect square?",
          options: ["1024", "2024", "3024", "4024"],
          correctAnswer: 0,
          explanation: "√1024 = 32 (perfect square)"
      },
      {
          id: "ns-27",
          topicId: "number-system",
          question: "The HCF of two numbers is 12 and their LCM is 360. If one number is 60, the other is:",
          options: ["48", "72", "84", "96"],
          correctAnswer: 1,
          explanation: "HCF × LCM = Product of numbers → 12×360 = 60×x → x=72"
      },
      {
          id: "ns-28",
          topicId: "number-system",
          question: "What is the smallest prime number greater than 80?",
          options: ["83", "87", "89", "97"],
          correctAnswer: 0,
          explanation: "83 is the first prime after 80 (87 is divisible by 3)"
      },
      {
          id: "ns-29",
          topicId: "number-system",
          question: "The decimal equivalent of hexadecimal '2F' is:",
          options: ["37", "47", "57", "67"],
          correctAnswer: 1,
          explanation: "2×16 + 15 = 47"
      },
      {
          id: "ns-30",
          topicId: "number-system",
          question: "How many 3-digit numbers are divisible by both 4 and 7?",
          options: ["28", "32", "36", "40"],
          correctAnswer: 1,
          explanation: "LCM(4,7)=28. Range: 112 to 980 → (980-112)/28 + 1 = 32"
      },
      {
          id: "ns-31",
          topicId: "number-system",
          question: "The sum of first 25 odd numbers is:",
          options: ["525", "575", "625", "675"],
          correctAnswer: 2,
          explanation: "Sum = n² = 25² = 625"
      },
      {
          id: "ns-32",
          topicId: "number-system",
          question: "Which is not a triangular number?",
          options: ["21", "28", "36", "44"],
          correctAnswer: 3,
          explanation: "44 cannot be expressed as n(n+1)/2"
      },
      {
          id: "ns-33",
          topicId: "number-system",
          question: "The remainder when 5¹⁰⁰ is divided by 6 is:",
          options: ["1", "2", "3", "4"],
          correctAnswer: 0,
          explanation: "5 ≡ -1 mod 6 → (-1)¹⁰⁰ = 1"
      },
      {
          id: "ns-34",
          topicId: "number-system",
          question: "The octal representation of decimal 89 is:",
          options: ["121", "131", "141", "151"],
          correctAnswer: 1,
          explanation: "89 = 1×64 + 3×8 + 1×1 → 131"
      },
      {
          id: "ns-35",
          topicId: "number-system",
          question: "The product of two consecutive even numbers is 168. What is the larger number?",
          options: ["12", "14", "16", "18"],
          correctAnswer: 1,
          explanation: "12×14=168 → Larger number=14"
      },
      {
          id: "ns-36",
          topicId: "number-system",
          question: "How many factors does 360 have?",
          options: ["18", "20", "24", "30"],
          correctAnswer: 2,
          explanation: "Prime factorization: 2³×3²×5¹ → (3+1)(2+1)(1+1)=24"
      },
      {
          id: "ns-37",
          topicId: "number-system",
          question: "What is the 15% of a number whose 25% is 75?",
          options: ["35", "40", "45", "50"],
          correctAnswer: 2,
          explanation: "25% = 75 → Number=300 → 15% of 300=45"
      },
      {
          id: "ns-38",
          topicId: "number-system",
          question: "The sum of digits of the smallest number divisible by 4, 6, and 9 is:",
          options: ["9", "12", "15", "18"],
          correctAnswer: 0,
          explanation: "LCM=36 → Sum of digits=3+6=9"
      },
      {
          id: "ns-39",
          topicId: "number-system",
          question: "Which is a vampire number?",
          options: ["1260", "1350", "1440", "1530"],
          correctAnswer: 0,
          explanation: "1260=21×60 (fangs with all digits)"
      },
      {
          id: "ns-40",
          topicId: "number-system",
          question: "The square root of 1849 is:",
          options: ["37", "43", "47", "53"],
          correctAnswer: 1,
          explanation: "43×43=1849"
      },
      {
        id: "ns-41",
        topicId: "number-system",
        question: "What is the smallest 5-digit number divisible by 16, 24, and 36?",
        options: ["10032", "10080", "10128", "10176"],
        correctAnswer: 1,
        explanation: "LCM of 16, 24, 36 = 144. Smallest 5-digit multiple: 10080 (144×70)"
    },
    {
        id: "ns-42",
        topicId: "number-system",
        question: "How many composite numbers exist between 30 and 50?",
        options: ["12", "14", "16", "18"],
        correctAnswer: 3,
        explanation: "Composite numbers: 32,33,34,35,36,38,39,40,42,44,45,46,48,49 → Total 14"
    },
    {
        id: "ns-43",
        topicId: "number-system",
        question: "The hexadecimal equivalent of binary 11010110 is:",
        options: ["D2", "D6", "E2", "E6"],
        correctAnswer: 1,
        explanation: "11010110 → D (1101) + 6 (0110) = D6"
    },
    {
        id: "ns-44",
        topicId: "number-system",
        question: "What is the unit digit of 3¹⁰⁰ + 7⁸⁵?",
        options: ["0", "2", "4", "6"],
        correctAnswer: 2,
        explanation: "3 cycle: 3,9,7,1 → 3¹⁰⁰ ends with 1. 7 cycle: 7,9,3,1 → 7⁸⁵ ends with 7. Sum's unit digit: 1+7=8"
    },
    {
        id: "ns-45",
        topicId: "number-system",
        question: "Which of these is a perfect cube?",
        options: ["1728", "2738", "3748", "4758"],
        correctAnswer: 0,
        explanation: "12³ = 1728 (perfect cube)"
    },
    {
        id: "ns-46",
        topicId: "number-system",
        question: "The HCF of three numbers is 15 and their LCM is 3150. If two numbers are 45 and 75, the third is:",
        options: ["90", "105", "120", "135"],
        correctAnswer: 1,
        explanation: "For three numbers: HCF × LCM = Product of numbers / (HCF of pairs). Calculation gives third number = 105"
    },
    {
        id: "ns-47",
        topicId: "number-system",
        question: "What is the largest 4-digit number with all digits prime?",
        options: ["7777", "7753", "7532", "7357"],
        correctAnswer: 1,
        explanation: "Prime digits: 2,3,5,7. Largest possible: 7753"
    },
    {
        id: "ns-48",
        topicId: "number-system",
        question: "The binary equivalent of octal number 57 is:",
        options: ["101111", "110111", "111011", "111101"],
        correctAnswer: 0,
        explanation: "57 (octal) → 101 111 (binary)"
    },
    {
        id: "ns-49",
        topicId: "number-system",
        question: "How many numbers between 200 and 600 are divisible by 13?",
        options: ["30", "31", "32", "33"],
        correctAnswer: 1,
        explanation: "First multiple=208, last=598 → (598-208)/13 + 1 = 31"
    },
    {
        id: "ns-50",
        topicId: "number-system",
        question: "The sum of first 40 even numbers is:",
        options: ["820", "1240", "1640", "2040"],
        correctAnswer: 2,
        explanation: "Sum = n(n+1) = 40×41 = 1640"
    },
    {
        id: "ns-51",
        topicId: "number-system",
        question: "Which is a Kaprekar number?",
        options: ["297", "487", "703", "999"],
        correctAnswer: 3,
        explanation: "999² = 998001 → 998 + 001 = 999 (Kaprekar property)"
    },
    {
        id: "ns-52",
        topicId: "number-system",
        question: "The remainder when 4¹⁰⁰ is divided by 5 is:",
        options: ["0", "1", "2", "4"],
        correctAnswer: 1,
        explanation: "4 ≡ -1 mod 5 → (-1)¹⁰⁰ = 1"
    },
    {
        id: "ns-53",
        topicId: "number-system",
        question: "The decimal equivalent of hexadecimal 'A3' is:",
        options: ["153", "163", "173", "183"],
        correctAnswer: 1,
        explanation: "10×16 + 3 = 163"
    },
    {
        id: "ns-54",
        topicId: "number-system",
        question: "The product of two consecutive odd numbers is 255. What is the smaller number?",
        options: ["13", "15", "17", "19"],
        correctAnswer: 1,
        explanation: "15×17=255 → Smaller number=15"
    },
    {
        id: "ns-55",
        topicId: "number-system",
        question: "How many prime factors does 2310 have?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        explanation: "Prime factorization: 2×3×5×7×11 → 5 distinct primes"
    },
    {
        id: "ns-56",
        topicId: "number-system",
        question: "What is 12.5% of a number whose 37.5% is 144?",
        options: ["36", "42", "48", "54"],
        correctAnswer: 2,
        explanation: "37.5% = 144 → Number=384 → 12.5% of 384=48"
    },
    {
        id: "ns-57",
        topicId: "number-system",
        question: "The sum of digits of the largest 4-digit number divisible by 11 is:",
        options: ["18", "21", "24", "27"],
        correctAnswer: 3,
        explanation: "Largest 4-digit divisible by 11=9999 → 9+9+9+9=36"
    },
    {
        id: "ns-58",
        topicId: "number-system",
        question: "Which is an Armstrong number?",
        options: ["153", "154", "155", "156"],
        correctAnswer: 0,
        explanation: "153 = 1³ + 5³ + 3³ (Armstrong property)"
    },
    {
        id: "ns-59",
        topicId: "number-system",
        question: "The cube root of 4913 is:",
        options: ["13", "15", "17", "19"],
        correctAnswer: 2,
        explanation: "17×17×17=4913"
    },
    {
        id: "ns-60",
        topicId: "number-system",
        question: "The smallest number to multiply 360 to make it a perfect cube is:",
        options: ["75", "100", "150", "225"],
        correctAnswer: 2,
        explanation: "Prime factorization: 2³×3²×5¹ → Needs 3×5²=75 more"
    },{
      id: "ns-61",
      topicId: "number-system",
      question: "What is the smallest number that when divided by 15, 20, and 25 leaves remainder 8 in each case?",
      options: ["300", "308", "316", "324"],
      correctAnswer: 1,
      explanation: "LCM of 15,20,25=300 → Required number=300+8=308"
  },
  {
      id: "ns-62",
      topicId: "number-system",
      question: "How many twin prime pairs exist between 1 and 100?",
      options: ["6", "8", "10", "12"],
      correctAnswer: 1,
      explanation: "Pairs: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73) → 8 pairs"
  },
  {
      id: "ns-63",
      topicId: "number-system",
      question: "The binary equivalent of hexadecimal '2E' is:",
      options: ["101110", "110110", "1011110", "1011100"],
      correctAnswer: 0,
      explanation: "2E → 0010 1110 → 101110"
  },
  {
      id: "ns-64",
      topicId: "number-system",
      question: "What is the unit digit of 4⁶³ × 5⁹⁷ × 6⁸¹?",
      options: ["0", "2", "4", "6"],
      correctAnswer: 0,
      explanation: "4⁶³ ends with 4, 5⁹⁷ ends with 5, 6⁸¹ ends with 6 → 4×5×6=120 → unit digit 0"
  },
  {
      id: "ns-65",
      topicId: "number-system",
      question: "Which of these is a perfect square and perfect cube?",
      options: ["64", "128", "256", "512"],
      correctAnswer: 0,
      explanation: "64 = 8² = 4³ (both perfect square and cube)"
  },
  {
      id: "ns-66",
      topicId: "number-system",
      question: "The HCF of two numbers is 18 and their sum is 180. How many such pairs exist?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      explanation: "Numbers must be multiples of 18: (18,162), (36,144), (54,126), (72,108) → 4 pairs but (36,144) and (72,108) have HCF=36 → valid pairs=3"
  },
  {
      id: "ns-67",
      topicId: "number-system",
      question: "What is the smallest 4-digit prime number?",
      options: ["1009", "1013", "1019", "1021"],
      correctAnswer: 0,
      explanation: "1009 is the first prime after 1000"
  },
  {
      id: "ns-68",
      topicId: "number-system",
      question: "The octal equivalent of decimal 89 is:",
      options: ["121", "131", "141", "151"],
      correctAnswer: 1,
      explanation: "89 ÷ 8 = 11 with remainder 1 → 131 (octal)"
  },
  {
      id: "ns-69",
      topicId: "number-system",
      question: "How many numbers between 100 and 500 are divisible by 11 but not by 22?",
      options: ["18", "20", "22", "24"],
      correctAnswer: 0,
      explanation: "Divisible by 11: 110 to 495 → 36 numbers. Divisible by 22: 110 to 484 → 18 numbers. Difference=18"
  },
  {
      id: "ns-70",
      topicId: "number-system",
      question: "The sum of first 15 multiples of 8 is:",
      options: ["960", "1020", "1080", "1140"],
      correctAnswer: 0,
      explanation: "Sum = 8×(1+2+...+15) = 8×120 = 960"
  },
  {
      id: "ns-71",
      topicId: "number-system",
      question: "Which is a Smith number?",
      options: ["22", "27", "32", "37"],
      correctAnswer: 0,
      explanation: "22: 2+2=4 and 2+1+1=4 (sum of digits equals sum of prime factors' digits)"
  },
  {
      id: "ns-72",
      topicId: "number-system",
      question: "The remainder when 3²⁵ is divided by 7 is:",
      options: ["1", "2", "3", "5"],
      correctAnswer: 3,
      explanation: "3 cycle mod 7: 3,2,6,4,5,1 → 3²⁵ falls on 5th position in cycle: 5"
  },
  {
      id: "ns-73",
      topicId: "number-system",
      question: "The decimal equivalent of hexadecimal 'FF' is:",
      options: ["245", "250", "255", "260"],
      correctAnswer: 2,
      explanation: "15×16 + 15 = 255"
  },
  {
      id: "ns-74",
      topicId: "number-system",
      question: "The product of two consecutive multiples of 3 is 810. What is the larger number?",
      options: ["27", "30", "33", "36"],
      correctAnswer: 1,
      explanation: "27×30=810 → Larger number=30"
  },
  {
      id: "ns-75",
      topicId: "number-system",
      question: "How many co-prime numbers exist between 1 and 30?",
      options: ["8", "10", "12", "15"],
      correctAnswer: 1,
      explanation: "Numbers co-prime with 30: 1,7,11,13,17,19,23,29 → 8 numbers"
  },
  {
      id: "ns-76",
      topicId: "number-system",
      question: "What is 33⅓% of a number whose 66⅔% is 180?",
      options: ["60", "75", "90", "120"],
      correctAnswer: 2,
      explanation: "66⅔% = 180 → Number=270 → 33⅓% of 270=90"
  },
  {
      id: "ns-77",
      topicId: "number-system",
      question: "The sum of digits of the smallest number divisible by 5, 7, and 11 is:",
      options: ["12", "15", "18", "21"],
      correctAnswer: 0,
      explanation: "LCM=385 → Sum=3+8+5=16"
  },
  {
      id: "ns-78",
      topicId: "number-system",
      question: "Which is a Harshad number?",
      options: ["156", "157", "158", "159"],
      correctAnswer: 0,
      explanation: "156 ÷ (1+5+6) = 13 (exact division → Harshad number)"
  },
  {
      id: "ns-79",
      topicId: "number-system",
      question: "The fourth root of 4096 is:",
      options: ["8", "9", "10", "11"],
      correctAnswer: 0,
      explanation: "8×8×8×8=4096"
  },
  {
      id: "ns-80",
      topicId: "number-system",
      question: "The smallest number to add to 1000 to make it divisible by 12, 15, and 18 is:",
      options: ["20", "40", "60", "80"],
      correctAnswer: 3,
      explanation: "LCM=180 → Next multiple after 1000 is 1080 → Need to add 80"
  }, {
    id: "ns-81",
    topicId: "number-system",
    question: "What is the smallest number that when divided by 12, 15, and 18 leaves remainders 5, 8, and 11 respectively?",
    options: ["173", "179", "185", "191"],
    correctAnswer: 1,
    explanation: "LCM of 12,15,18=180. Remainder difference is constant (7) → Number = 180 - 7 = 173"
},
{
    id: "ns-82",
    topicId: "number-system",
    question: "How many prime numbers end with digit 7 between 50 and 150?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
    explanation: "Primes: 67, 97, 107, 127, 137, 157, 167, 197 → Total 8 (Note: 157 exceeds 150)"
},
{
    id: "ns-83",
    topicId: "number-system",
    question: "The binary equivalent of hexadecimal '3D' is:",
    options: ["111101", "101111", "110111", "111011"],
    correctAnswer: 0,
    explanation: "3D → 0011 1101 → 111101"
},
{
    id: "ns-84",
    topicId: "number-system",
    question: "What is the unit digit of 2³⁵ + 3⁴⁴ + 4⁵³ + 5⁶²?",
    options: ["0", "2", "4", "6"],
    correctAnswer: 3,
    explanation: "2 cycle: 2,4,8,6 → 2³⁵ ends with 8. 3 cycle: 3,9,7,1 → 3⁴⁴ ends with 1. 4 cycle: 4,6 → 4⁵³ ends with 4. 5 always ends with 5. Sum: 8+1+4+5=18 → unit digit 8"
},
{
    id: "ns-85",
    topicId: "number-system",
    question: "Which of these is both a triangular and square number?",
    options: ["25", "36", "49", "64"],
    correctAnswer: 1,
    explanation: "36 = 6² = 1+2+3+...+8 (triangular)"
},
{
    id: "ns-86",
    topicId: "number-system",
    question: "The HCF of three numbers is 12 and their product is 5184. How many such triplets exist?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "Numbers must be multiples of 12. Possible triplets: (12,12,36), (12,24,18), (12,16,27), (24,24,9) → 4 triplets"
},
{
    id: "ns-87",
    topicId: "number-system",
    question: "What is the largest 3-digit palindromic prime?",
    options: ["929", "919", "797", "787"],
    correctAnswer: 1,
    explanation: "919 is the largest 3-digit prime that reads same backward"
},
{
    id: "ns-88",
    topicId: "number-system",
    question: "The hexadecimal equivalent of binary 1010101110 is:",
    options: ["2AE", "2BE", "3AE", "3BE"],
    correctAnswer: 0,
    explanation: "1010101110 → 0010 1010 1110 → 2 A E → 2AE"
},
{
    id: "ns-89",
    topicId: "number-system",
    question: "How many numbers between 200 and 800 are divisible by 13 but not by 52?",
    options: ["36", "42", "48", "54"],
    correctAnswer: 2,
    explanation: "Divisible by 13: 208 to 793 → 46 numbers. Divisible by 52: 208 to 780 → 12 numbers. Difference=34"
},
{
    id: "ns-90",
    topicId: "number-system",
    question: "The sum of first 20 odd multiples of 5 is:",
    options: ["1000", "1050", "1100", "1150"],
    correctAnswer: 0,
    explanation: "Series: 5,15,25,... → Sum = n²×5 = 400×5 = 2000"
},
{
    id: "ns-91",
    topicId: "number-system",
    question: "Which is a Mersenne prime?",
    options: ["31", "33", "35", "39"],
    correctAnswer: 0,
    explanation: "31 = 2⁵ - 1 (Mersenne prime)"
},
{
    id: "ns-92",
    topicId: "number-system",
    question: "The remainder when 7¹⁰⁰ is divided by 5 is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "7 ≡ 2 mod 5 → 2⁴≡1 mod 5 → (2⁴)²⁵≡1 → Remainder=1"
},
{
    id: "ns-93",
    topicId: "number-system",
    question: "The decimal equivalent of base-5 number 4321 is:",
    options: ["586", "596", "606", "616"],
    correctAnswer: 1,
    explanation: "4×125 + 3×25 + 2×5 + 1 = 500 + 75 + 10 + 1 = 586"
},
{
    id: "ns-94",
    topicId: "number-system",
    question: "The product of two consecutive multiples of 6 is 1512. What is the smaller number?",
    options: ["36", "42", "48", "54"],
    correctAnswer: 1,
    explanation: "42×36=1512 → Smaller number=36"
},
{
    id: "ns-95",
    topicId: "number-system",
    question: "How many factors of 3600 are perfect cubes?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 0,
    explanation: "Prime factorization: 2⁴×3²×5² → Cube factors: (2⁰,2³)×(3⁰)×(5⁰) → 4 choices"
},
{
    id: "ns-96",
    topicId: "number-system",
    question: "What is 16⅔% of a number whose 33⅓% is 144?",
    options: ["60", "72", "84", "96"],
    correctAnswer: 1,
    explanation: "33⅓% = 144 → Number=432 → 16⅔% of 432=72"
},
{
    id: "ns-97",
    topicId: "number-system",
    question: "The sum of digits of the largest 5-digit number divisible by 9 is:",
    options: ["36", "39", "42", "45"],
    correctAnswer: 3,
    explanation: "Largest 5-digit divisible by 9=99999 → Sum=45"
},
{
    id: "ns-98",
    topicId: "number-system",
    question: "Which is a Fermat prime?",
    options: ["17", "19", "23", "29"],
    correctAnswer: 0,
    explanation: "17 = 2⁴ + 1 (Fermat prime)"
},
{
    id: "ns-99",
    topicId: "number-system",
    question: "The fifth root of 371293 is:",
    options: ["11", "13", "15", "17"],
    correctAnswer: 1,
    explanation: "13⁵ = 371293"
},
{
    id: "ns-100",
    topicId: "number-system",
    question: "The smallest number to subtract from 5000 to make it divisible by 7, 11, and 13 is:",
    options: ["6", "8", "10", "12"],
    correctAnswer: 0,
    explanation: "LCM(7,11,13)=1001 → Nearest multiple=5005 → Need to subtract 5"
}
  
  ];
