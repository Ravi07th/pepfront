import { QuantitativeQuestion } from "../types";
export const permutationAndCombinationQuestions: QuantitativeQuestion[] = 
[
    {
      "id": "pc-1",
      "topicId": "permutation-combination",
      "question": "How many different ways can 3 students be selected from a group of 10?",
      "options": ["120", "720", "210", "30"],
      "correctAnswer": 2,
      "explanation": "Number of ways = 10C3 = 10! / (3! × 7!) = 120",
      "difficulty": "easy"
    },
    {
      "id": "pc-2",
      "topicId": "permutation-combination",
      "question": "In how many ways can 5 books be arranged on a shelf?",
      "options": ["60", "120", "240", "120"],
      "correctAnswer": 3,
      "explanation": "Number of arrangements = 5! = 120",
      "difficulty": "easy"
    },
    {
        "id": "pc-3",
        "topicId": "permutation-combination",
        "question": "How many words can be formed by using 3 letters from the word \"DELHI\"?",
        "options": ["60", "120", "30", "90"],
        "correctAnswer": 0,
        "explanation": "Total letters = 5, select and arrange 3: 5P3 = 5!/(5-3)! = 5! / 2! = 120/2 = 60",
        "difficulty": "easy"
      },
    {
      "id": "pc-4",
      "topicId": "permutation-combination",
      "question": "How many 4-digit numbers can be formed using digits 1 to 9 without repetition?",
      "options": ["3024", "4032", "4536", "5040"],
      "correctAnswer": 1,
      "explanation": "Number of ways = 9P4 = 9×8×7×6 = 3024",
      "difficulty": "medium"
    },
    {
        "id": "pc-5",
        "topicId": "permutation-combination",
        "question": "How many words can be formed by using the letters from the word \"DRIVER\" such that all the vowels are always together?",
        "options": ["120", "60", "240", "180"],
        "correctAnswer": 0,
        "explanation": "Treat vowels IE as a single letter. Number of letters = 5 (D, R, V, R, IE) with R repeating twice. Arrangements = 5!/2! = 60; vowels can be arranged 2! ways; total = 60×2 = 120",
        "difficulty": "medium"
      },
      {
        "id": "pc-6",
        "topicId": "permutation-combination",
        "question": "In how many ways can we select a team of 4 students from a given choice of 15?",
        "options": ["1365", "1500", "1200", "1580"],
        "correctAnswer": 0,
        "explanation": "Number of ways = 15C4 = 15! / (4! × 11!) = (15 × 14 × 13 × 12) / (4 × 3 × 2 × 1) = 1365",
        "difficulty": "easy"
      },
    {
      "id": "pc-7",
      "topicId": "permutation-combination",
      "question": "How many 5-letter words (not necessarily meaningful) can be formed using the first 10 alphabets with repetition allowed?",
      "options": ["100000", "125000", "150000", "160000"],
      "correctAnswer": 0,
      "explanation": "Each position can be filled with any of 10 letters, total = 10^5 = 100000",
      "difficulty": "easy"
    },
    {
        "id": "pc-8",
        "topicId": "permutation-combination",
        "question": "In how many ways can a group of 5 members be formed by selecting 3 boys out of 6 and 2 girls out of 5?",
        "options": ["200", "180", "240", "150"],
        "correctAnswer": 0,
        "explanation": "3 boys out of 6 = 6C3 = 20; 2 girls out of 5 = 5C2 = 10; Total ways = 20 × 10 = 200",
        "difficulty": "medium"
      },
    {
      "id": "pc-9",
      "topicId": "permutation-combination",
      "question": "From 8 different balls, how many ways can we select 3 balls one after another without replacement?",
      "options": ["56", "336", "512", "672"],
      "correctAnswer": 1,
      "explanation": "Number of permutations = 8P3 = 8×7×6 = 336",
      "difficulty": "easy"
    },
    {
      "id": "pc-10",
      "topicId": "permutation-combination",
      "question": "How many ways can the letters of the word ‘BANANA’ be arranged?",
      "options": ["60", "90", "120", "720"],
      "correctAnswer": 0,
      "explanation": "Total letters = 6; A repeated 3 times, N repeated 2 times; Number of arrangements = 6!/(3!×2!) = 720/12 = 60",
      "difficulty": "medium"
    },
    {
      "id": "pc-11",
      "topicId": "permutation-combination",
      "question": "A committee of 4 is chosen from 10 men and 6 women. What is the probability that the committee has exactly 2 women?",
      "options": ["0.38", "0.24", "0.27", "0.33"],
      "correctAnswer": 3,
      "explanation": "Number with 2 women = 6C2 × 10C2 = 15 × 45 = 675; total committees = 16C4 = 1820; Probability = 675/1820 ≈ 0.37",
      "difficulty": "hard"
    },
    {
      "id": "pc-12",
      "topicId": "permutation-combination",
      "question": "How many three-digit numbers are there with digits in strictly increasing order?",
      "options": ["84", "120", "124", "130"],
      "correctAnswer": 0,
      "explanation": "Choose any 3 distinct digits from 1 to 9 and arrange in increasing order (only one way), so number = 9C3 = 84",
      "difficulty": "medium"
    },
    {
        "id": "pc-13",
        "topicId": "permutation-combination",
        "question": "How many words can be formed by using the letters from the word \"DRIVER\" such that all the vowels are never together?",
        "options": ["240", "360", "120", "180"],
        "correctAnswer": 0,
        "explanation": "Total words = 6!/2! = 360; words with vowels together = 120; Hence, vowels never together = 360 - 120 = 240",
        "difficulty": "medium"
      },
    {
      "id": "pc-14",
      "topicId": "permutation-combination",
      "question": "In how many ways can 4 out of 7 different prizes be distributed among 4 out of 10 different students, one prize per student?",
      "options": ["840", "5040", "30240", "50400"],
      "correctAnswer": 2,
      "explanation": "Choose 4 students: 10C4=210; arrange 4 prizes among them: 4! = 24; total = 210 × 24 = 5040",
      "difficulty": "medium"
    },
    {
        "id": "pc-15",
        "topicId": "permutation-combination",
        "question": "How many words can be formed by using 4 letters from the word \"COMPUTER\"?",
        "options": ["1680", "840", "1260", "1120"],
        "correctAnswer": 0,
        "explanation": "Number of letters = 8; number of 4-letter arrangements = 8P4 = 8! / 4! = 40320 / 24 = 1680",
        "difficulty": "medium"
      },
    
    {
      "id": "pc-16",
      "topicId": "permutation-combination",
      "question": "How many different bracelets can be made from 6 distinct beads?",
      "options": ["60", "120", "360", "720"],
      "correctAnswer": 0,
      "explanation": "Bracelets consider rotations and reflections; number = (6-1)! / 2 = 60",
      "difficulty": "hard"
    },
    {
      "id": "pc-17",
      "topicId": "permutation-combination",
      "question": "How many 5-digit numbers can be formed using digits 1-7 with repetition allowed and digits in non-increasing order?",
      "options": ["252", "462", "792", "1287"],
      "correctAnswer": 1,
      "explanation": "Number of non-increasing sequences = Combination with repetition: 7+5-1C5 = 11C5 = 462",
      "difficulty": "hard"
    },
    {
        "id": "pc-18",
        "topicId": "permutation-combination",
        "question": "How many words can be formed by using the letters from the word \"BALLOON\" such that all the vowels (A and both O's) are always together?",
        "options": ["180", "120", "240", "150"],
        "correctAnswer": 0,
        "explanation": "Treat vowels A and O's as one unit; letters = 5 with L repeating twice; arrangements = 5!/2! = 60; vowels can be arranged in 3! ways; total = 60 × 6 = 180",
        "difficulty": "medium"
      },
   
    {
      "id": "pc-19",
      "topicId": "permutation-combination",
      "question": "Find the number of ways to choose a president and a vice-president from a group of 12 people.",
      "options": ["132", "144", "156", "168"],
      "correctAnswer": 1,
      "explanation": "Number of ways = 12P2 = 12 × 11 = 132 ",
      "difficulty": "easy"
    },
    {
        "id": "pc-20",
        "topicId": "permutation-combination",
        "question": "How many 5 card combinations out of a deck of 52 cards contain exactly one ace?",
        "options": ["778320", "800000", "765432", "700000"],
        "correctAnswer": 0,
        "explanation": "Select 1 ace out of 4: 4C1 = 4; select 4 cards out of remaining 48: 48C4 = 194580; total = 4 × 194580 = 778320",
        "difficulty": "hard"
      },
  ];
  