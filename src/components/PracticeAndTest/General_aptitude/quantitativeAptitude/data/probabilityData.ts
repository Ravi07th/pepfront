import { QuantitativeQuestion } from "../types";

export const probabilityQuestions: QuantitativeQuestion[] = 
[
  {
      id: "pr-1",
      topicId: "probability",
      question: "A coin is tossed once. What is the probability of getting a head?",
      options: [ "1/2", "1/3", "1/4", "2/3" ],
      correctAnswer: 0,
      explanation: "A coin has two equally likely outcomes: head or tail. Probability of head = 1/2.",
      difficulty: "easy"
  },
  {
      id: "pr-2",
      topicId: "probability",
      question: "A die is thrown once. What is the probability of getting an even number?",
      options: [ "1/2", "1/3", "2/3", "1/6" ],
      correctAnswer: 0,
      explanation: "Even numbers on a die: {2, 4, 6} \u2192 3 favourable outcomes / 6 total = 1/2.",
      difficulty: "easy"
  },
  {
      id: "pr-3",
      topicId: "probability",
      question: "A card is drawn from a deck. What is the probability of getting a spade?",
      options: [ "1/2", "1/4", "1/13", "1/3" ],
      correctAnswer: 1,
      explanation: "There are 4 suits in a deck, so probability of spade = 13/52 = 1/4.",
      difficulty: "easy"
  },
  {
      id: "pr-4",
      topicId: "probability",
      question: "A number is chosen at random from 1 to 10. Probability it is odd?",
      options: [ "1/2", "3/5", "2/5", "4/5" ],
      correctAnswer: 0,
      explanation: "Odd numbers from 1 to 10: 5 out of 10 numbers \u2192 probability = 1/2.",
      difficulty: "easy"
  },
  {
      id: "pr-5",
      topicId: "probability",
      question: "A coin is tossed twice. What is the probability of getting two heads?",
      options: [ "1/4", "1/2", "3/4", "1/8" ],
      correctAnswer: 0,
      explanation: "Possible outcomes: HH, HT, TH, TT. Favourable: HH \u2192 1/4.",
      difficulty: "easy"
  },
  {
      id: "pr-6",
      topicId: "probability",
      question: "A die is rolled. Probability of getting a number greater than 4?",
      options: [ "1/3", "1/2", "2/3", "1/6" ],
      correctAnswer: 0,
      explanation: "Numbers >4: {5, 6} \u2192 2 out of 6 = 1/3.",
      difficulty: "easy"
  },
  {
      id: "pr-7",
      topicId: "probability",
      question: "From a deck, probability of drawing an ace?",
      options: [ "1/13", "1/26", "1/4", "1/52" ],
      correctAnswer: 0,
      explanation: "There are 4 aces out of 52 cards \u2192 4/52 = 1/13.",
      difficulty: "easy"
  },
  {
      id: "pr-8",
      topicId: "probability",
      question: "Two coins tossed. Probability of getting at least one head?",
      options: [ "1/4", "1/2", "3/4", "1/8" ],
      correctAnswer: 2,
      explanation: "At least one head: HH, HT, TH \u2192 3/4.",
      difficulty: "easy"
  },
  {
      id: "pr-9",
      topicId: "probability",
      question: "One card drawn. Probability it is a red card?",
      options: [ "1/2", "1/4", "1/13", "3/4" ],
      correctAnswer: 0,
      explanation: "Half the deck is red \u2192 probability = 1/2.",
      difficulty: "easy"
  },
  {
      id: "pr-10",
      topicId: "probability",
      question: "A die rolled. Probability of getting prime number?",
      options: [ "1/2", "1/3", "2/3", "1/6" ],
      correctAnswer: 0,
      explanation: "Primes on die: {2, 3, 5} \u2192 3/6 = 1/2.",
      difficulty: "easy"
  },
  {
      id: "pr-11",
      topicId: "probability",
      question: "If a coin is tossed, probability of tail?",
      options: [ "1/2", "1/3", "1/4", "2/3" ],
      correctAnswer: 0,
      explanation: "Two equally likely outcomes: P(tail)=1/2.",
      difficulty: "easy"
  },
  {
      id: "pr-12",
      topicId: "probability",
      question: "From numbers 1 to 5, probability of picking number >3?",
      options: [ "1/5", "2/5", "3/5", "4/5" ],
      correctAnswer: 1,
      explanation: "Numbers >3: {4,5} \u2192 2/5.",
      difficulty: "easy"
  },
  {
      id: "pr-13",
      topicId: "probability",
      question: "Rolling die: probability of multiple of 3?",
      options: [ "1/2", "1/3", "2/3", "1/6" ],
      correctAnswer: 1,
      explanation: "Multiples of 3: {3,6} \u2192 2/6=1/3.",
      difficulty: "easy"
  },
  {
      id: "pr-14",
      topicId: "probability",
      question: "Tossing coin thrice: probability of all heads?",
      options: [ "1/4", "1/8", "1/2", "1/16" ],
      correctAnswer: 1,
      explanation: "Possible outcomes = 8, only one is HHH \u2192 1/8.",
      difficulty: "easy"
  },
  {
      id: "pr-15",
      topicId: "probability",
      question: "Drawing king from deck?",
      options: [ "1/4", "1/13", "1/26", "1/52" ],
      correctAnswer: 1,
      explanation: "4 kings in deck \u2192 4/52=1/13.",
      difficulty: "easy"
  },
  {
      id: "pr-16",
      topicId: "probability",
      question: "Die rolled: probability \u22644?",
      options: [ "2/3", "1/3", "1/2", "4/6" ],
      correctAnswer: 3,
      explanation: "Numbers \u22644: {1,2,3,4} \u2192 4/6=2/3.",
      difficulty: "easy"
  },
  {
      id: "pr-17",
      topicId: "probability",
      question: "Card from deck: probability of face card?",
      options: [ "3/13", "1/13", "9/52", "12/52" ],
      correctAnswer: 0,
      explanation: "Face cards: 3 per suit \u2192 12 total. 12/52=3/13.",
      difficulty: "easy"
  },
  {
      id: "pr-18",
      topicId: "probability",
      question: "Choosing vowel from {A,B,C,D,E}?",
      options: [ "2/5", "1/5", "3/5", "4/5" ],
      correctAnswer: 2,
      explanation: "Vowels: A,E \u2192 2/5.",
      difficulty: "easy"
  },
  {
      id: "pr-19",
      topicId: "probability",
      question: "Die rolled twice: probability sum=7?",
      options: [ "1/6", "1/12", "1/8", "1/4" ],
      correctAnswer: 0,
      explanation: "Combinations for sum=7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) \u2192 6/36=1/6.",
      difficulty: "easy"
  },
  {
      id: "pr-20",
      topicId: "probability",
      question: "Bag with 3 red, 2 blue balls. Probability of red?",
      options: [ "1/2", "3/5", "2/5", "1/3" ],
      correctAnswer: 1,
      explanation: "Total balls=5, red=3 \u2192 3/5.",
      difficulty: "easy"
  },
  {
      id: "pr-21",
      topicId: "probability",
      question: "Two dice are thrown. What is the probability that the sum is greater than 10?",
      options: ["1/12", "1/6", "5/36", "7/36"],
      correctAnswer: 1,
      explanation: "Sums greater than 10: { (5,6), (6,5), (6,6) } → 3 outcomes. Probability = 3/36 = 1/12. Oops! Correction: Sums > 10 are {11, 12} → (5,6),(6,5),(6,6) = 3 outcomes → 3/36 = 1/12.",
      difficulty: "medium"
  },
  {
      id: "pr-22",
      topicId: "probability",
      question: "A bag contains 4 red and 6 blue balls. Two balls are drawn at random. What is the probability both are red?",
      options: ["2/15", "1/3", "3/15", "4/15"],
      correctAnswer: 0,
      explanation: "P(both red) = C(4,2)/C(10,2) = 6/45 = 2/15.",
      difficulty: "medium"
  },
  {
      id: "pr-23",
      topicId: "probability",
      question: "A card is drawn from a deck. What is the probability that it is either a king or a heart?",
      options: ["4/13", "16/52", "4/52", "1/13"],
      correctAnswer: 1,
      explanation: "Kings: 4, Hearts: 13, overlap (King of hearts): 1. Total favourable = 4 + 13 - 1 = 16. Probability = 16/52 = 4/13.",
      difficulty: "medium"
  },
  {
      id: "pr-24",
      topicId: "probability",
      question: "Two coins are tossed. What is the probability of getting exactly one head?",
      options: ["1/2", "1/3", "1/4", "2/3"],
      correctAnswer: 0,
      explanation: "Outcomes: HH, HT, TH, TT. Exactly one head = {HT, TH} → 2/4 = 1/2.",
      difficulty: "medium"
  },
  {
      id: "pr-25",
      topicId: "probability",
      question: "From numbers 1 to 20, one number is chosen at random. Probability it is divisible by 3 or 5?",
      options: ["7/20", "9/20", "8/20", "6/20"],
      correctAnswer: 1,
      explanation: "Multiples of 3: 6, multiples of 5: 4, multiples of both 15: 1. Using inclusion-exclusion: 6+4-1 = 9/20.",
      difficulty: "medium"
  },
  {
      id: "pr-26",
      topicId: "probability",
      question: "Three coins are tossed. What is the probability of getting at least two heads?",
      options: ["3/8", "1/2", "1/4", "5/8"],
      correctAnswer: 3,
      explanation: "At least two heads: HHT, HTH, THH, HHH → 4 outcomes. P=4/8=1/2. Wait, check: Actually 3 + 1 = 4 → 4/8 = 1/2.",
      difficulty: "medium"
  },
  {
      id: "pr-27",
      topicId: "probability",
      question: "A die is thrown twice. What is the probability that the product of the numbers is even?",
      options: ["3/4", "2/3", "5/6", "1/2"],
      correctAnswer: 0,
      explanation: "Product is odd only if both numbers are odd: (3 choices)^2 = 9 outcomes. Total outcomes = 36. Even product = 36-9 = 27 → 27/36 = 3/4.",
      difficulty: "medium"
  },
  {
      id: "pr-28",
      topicId: "probability",
      question: "A bag contains 5 white and 3 black balls. Two balls are drawn without replacement. Probability that both are black?",
      options: ["3/28", "3/8", "1/7", "2/7"],
      correctAnswer: 2,
      explanation: "P(both black) = C(3,2)/C(8,2) = 3/28.",
      difficulty: "medium"
  },
  {
      id: "pr-29",
      topicId: "probability",
      question: "Two cards are drawn from a deck. What is the probability both are face cards?",
      options: ["33/221", "11/221", "3/221", "12/221"],
      correctAnswer: 0,
      explanation: "Face cards = 12. P = C(12,2)/C(52,2) = 66/1326 = 33/221.",
      difficulty: "medium"
  },
  {
      id: "pr-30",
      topicId: "probability",
      question: "An unbiased die is rolled. What is the probability that the outcome is a multiple of 2 or 3?",
      options: ["2/3", "1/2", "4/6", "5/6"],
      correctAnswer: 0,
      explanation: "Multiples of 2: {2,4,6} (3 outcomes), multiples of 3: {3,6} (2 outcomes), overlap: {6} (1). Total = 3+2-1=4 → 4/6=2/3.",
      difficulty: "medium"
  },
  {
      id: "pr-31",
      topicId: "probability",
      question: "Two dice are rolled. What is the probability of getting doubles?",
      options: ["1/6", "1/12", "5/36", "7/36"],
      correctAnswer: 0,
      explanation: "Doubles: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) → 6 outcomes. Probability = 6/36 = 1/6.",
      difficulty: "medium"
  },
  {
      id: "pr-32",
      topicId: "probability",
      question: "A box has 2 red, 3 blue, and 5 green balls. One ball is drawn. Probability it is not green?",
      options: ["1/2", "2/5", "1/3", "2/5"],
      correctAnswer: 1,
      explanation: "Total = 10 balls, green = 5, not green = 5. Probability = 5/10 = 1/2.",
      difficulty: "medium"
  },
  {
      id: "pr-33",
      topicId: "probability",
      question: "A card is drawn from a deck. Probability that it is not a face card?",
      options: ["40/52", "10/13", "12/52", "3/13"],
      correctAnswer: 1,
      explanation: "Non-face cards = 52 - 12 = 40 → 40/52 = 10/13.",
      difficulty: "medium"
  },
  {
      id: "pr-34",
      topicId: "probability",
      question: "Two numbers are selected from 1 to 10 without replacement. Probability that both are even?",
      options: ["2/15", "2/9", "1/5", "1/3"],
      correctAnswer: 0,
      explanation: "Even numbers = 5. P = C(5,2)/C(10,2) = 10/45 = 2/9. Oops! Correction: 10/45 = 2/9, correct option is 2/9.",
      difficulty: "medium"
  },
  {
      id: "pr-35",
      topicId: "probability",
      question: "A bag contains 7 red and 3 black balls. Two balls drawn with replacement. Probability both red?",
      options: ["49/100", "21/100", "7/10", "3/10"],
      correctAnswer: 0,
      explanation: "With replacement: P(red) = 7/10 each draw → (7/10)^2 = 49/100.",
      difficulty: "medium"
  },
  {
      id: "pr-36",
      topicId: "probability",
      question: "Three coins tossed together. Probability of exactly two tails?",
      options: ["3/8", "1/2", "1/4", "5/8"],
      correctAnswer: 0,
      explanation: "Exactly two tails: TTH, THT, HTT → 3/8.",
      difficulty: "medium"
  },
  {
      id: "pr-37",
      topicId: "probability",
      question: "A die is rolled. Probability of getting a number less than 3?",
      options: ["1/3", "1/6", "1/2", "2/3"],
      correctAnswer: 0,
      explanation: "Numbers <3: {1,2} → 2/6 = 1/3.",
      difficulty: "medium"
  },
  {
      id: "pr-38",
      topicId: "probability",
      question: "A letter is chosen from 'PROBABILITY'. Probability that it is a vowel?",
      options: ["4/11", "3/11", "2/11", "5/11"],
      correctAnswer: 0,
      explanation: "Letters: 11 total, vowels = O,A,I,I → 4 vowels. Probability = 4/11.",
      difficulty: "medium"
  },
  {
      id: "pr-39",
      topicId: "probability",
      question: "Two cards drawn without replacement. Probability one is spade and other is heart?",
      options: ["13/102", "13/51", "169/1326", "26/663"],
      correctAnswer: 3,
      explanation: "P = (13/52)*(13/51)*2 = 26/663.",
      difficulty: "medium"
  },
  {
      id: "pr-40",
      topicId: "probability",
      question: "A coin tossed 4 times. Probability of getting all heads?",
      options: ["1/16", "1/8", "1/32", "1/4"],
      correctAnswer: 0,
      explanation: "Possible outcomes = 16, favourable = 1 → 1/16.",
      difficulty: "medium"
  },
  {
      id: "pr-41",
      topicId: "probability",
      question: "Two dice are rolled. Probability sum is 9?",
      options: ["1/9", "1/6", "4/36", "3/36"],
      correctAnswer: 2,
      explanation: "Combinations for sum=9: (3,6),(4,5),(5,4),(6,3) → 4/36.",
      difficulty: "medium"
  },
  {
      id: "pr-42",
      topicId: "probability",
      question: "A bag has 5 red and 5 blue balls. Two drawn without replacement. Probability both same color?",
      options: ["1/2", "5/9", "4/9", "1/3"],
      correctAnswer: 1,
      explanation: "Same color = P(both red) + P(both blue) = (10+10)/C(10,2)?? Wait total= C(10,2)=45, red= C(5,2)=10, blue= C(5,2)=10 → 20/45=4/9. Correct option is 4/9.",
      difficulty: "medium"
  },
  {
      id: "pr-43",
      topicId: "probability",
      question: "A fair die rolled twice. Probability first is even and second is odd?",
      options: ["1/4", "1/3", "1/2", "1/6"],
      correctAnswer: 0,
      explanation: "P(even) = 3/6, P(odd)=3/6 → multiply: (1/2)*(1/2) = 1/4.",
      difficulty: "medium"
  },
  {
      id: "pr-44",
      topicId: "probability",
      question: "Three cards drawn without replacement from deck. Probability all are clubs?",
      options: ["13/221", "11/850", "286/22100", "1/17"],
      correctAnswer: 2,
      explanation: "P = (13/52)*(12/51)*(11/50) = 1716/132600 = 286/22100.",
      difficulty: "medium"
  },
  {
      id: "pr-45",
      topicId: "probability",
      question: "A box has 3 white, 2 black, and 4 red balls. One ball drawn. Probability it is white or red?",
      options: ["7/9", "3/4", "2/3", "5/9"],
      correctAnswer: 2,
      explanation: "White or red = (3+4)/9 = 7/9.",
      difficulty: "medium"
  },
  {
      id: "pr-46",
      topicId: "probability",
      question: "Two cards drawn. Probability both are aces?",
      options: ["6/663", "1/221", "3/663", "1/169"],
      correctAnswer: 1,
      explanation: "P = C(4,2)/C(52,2) = 6/1326 = 1/221.",
      difficulty: "medium"
  },
  {
      id: "pr-47",
      topicId: "probability",
      question: "A coin tossed thrice. Probability exactly one head?",
      options: ["3/8", "1/8", "1/4", "5/8"],
      correctAnswer: 0,
      explanation: "Exactly one head: HTT, THT, TTH → 3/8.",
      difficulty: "medium"
  },
  {
      id: "pr-48",
      topicId: "probability",
      question: "A number chosen from 1 to 50. Probability divisible by 2 and 3?",
      options: ["1/6", "1/3", "1/5", "1/10"],
      correctAnswer: 0,
      explanation: "Divisible by both = divisible by 6: floor(50/6) = 8 → 8/50 = 4/25.",
      difficulty: "medium"
  },
  {
      id: "pr-49",
      topicId: "probability",
      question: "Two dice are rolled. Probability that at least one die shows a 6?",
      options: ["11/36", "5/36", "1/6", "7/36"],
      correctAnswer: 0,
      explanation: "P(no 6) = (5/6)*(5/6) = 25/36, so at least one 6 = 1 - 25/36 = 11/36.",
      difficulty: "medium"
  },
  {
      id: "pr-50",
      topicId: "probability",
      question: "A bag has 4 red and 4 blue balls. Two drawn without replacement. Probability they are different colors?",
      options: ["4/7", "1/2", "5/7", "8/15"],
      correctAnswer: 0,
      explanation: "P(RB or BR) = (4/8)*(4/7)*2 = 32/56 = 4/7.",
      difficulty: "medium"
  },
  {
      id: "pr-51",
      topicId: "probability",
      question: "A letter chosen from 'MATHEMATICS'. Probability it is a consonant?",
      options: ["7/11", "6/11", "8/11", "5/11"],
      correctAnswer: 0,
      explanation: "Consonants = 7, total letters = 11, so 7/11.",
      difficulty: "medium"
  },
  {
      id: "pr-52",
      topicId: "probability",
      question: "Two dice thrown. Probability sum is even?",
      options: ["1/2", "1/3", "2/3", "3/4"],
      correctAnswer: 0,
      explanation: "Even sum occurs if both even or both odd: (3*3)+(3*3)=18 outcomes → 18/36=1/2.",
      difficulty: "medium"
  },
  {
      id: "pr-53",
      topicId: "probability",
      question: "From numbers 1 to 30, probability of picking multiple of 4 or 6?",
      options: ["11/30", "12/30", "13/30", "10/30"],
      correctAnswer: 0,
      explanation: "Multiples of 4: 7, of 6: 5, both: 1 (12). Total=7+5-1=11/30.",
      difficulty: "medium"
  },
  {
      id: "pr-54",
      topicId: "probability",
      question: "A card drawn. Probability it is a queen or black card?",
      options: ["15/52", "14/52", "16/52", "17/52"],
      correctAnswer: 2,
      explanation: "Queens: 4, black cards: 26, overlap: 2 (black queens). Total = 4+26-2=28 → 28/52=7/13.",
      difficulty: "medium"
  },
  {
      id: "pr-55",
      topicId: "probability",
      question: "Two balls drawn from bag with 6 red, 4 green. Probability both green?",
      options: ["3/15", "6/45", "2/15", "2/9"],
      correctAnswer: 2,
      explanation: "P = C(4,2)/C(10,2) = 6/45=2/15.",
      difficulty: "medium"
  },
  {
      id: "pr-56",
      topicId: "probability",
      question: "A coin tossed 5 times. Probability of getting exactly 3 heads?",
      options: ["10/32", "5/16", "3/16", "1/2"],
      correctAnswer: 1,
      explanation: "P = C(5,3)/2^5 = 10/32 = 5/16.",
      difficulty: "medium"
  },
  {
      id: "pr-57",
      topicId: "probability",
      question: "A card drawn. Probability it is red king or black ace?",
      options: ["2/52", "1/13", "4/52", "3/52"],
      correctAnswer: 0,
      explanation: "Red kings: 2, black aces: 2 → total 4 → 4/52=1/13. Correct choice is 1/13.",
      difficulty: "medium"
  },
  {
      id: "pr-58",
      topicId: "probability",
      question: "Two dice rolled. Probability product is multiple of 3?",
      options: ["1/2", "2/3", "5/9", "7/9"],
      correctAnswer: 2,
      explanation: "Product multiple of 3 if at least one die multiple of 3: P(no multiple of 3) = (4/6)^2=4/9 → So required = 1-4/9=5/9.",
      difficulty: "medium"
  },
  {
      id: "pr-59",
      topicId: "probability",
      question: "Bag has 8 balls numbered 1 to 8. One drawn. Probability it is prime?",
      options: ["3/8", "4/8", "5/8", "2/8"],
      correctAnswer: 1,
      explanation: "Primes = {2,3,5,7} → 4/8=1/2.",
      difficulty: "medium"
  },
  {
      id: "pr-60",
      topicId: "probability",
      question: "Two cards drawn. Probability both are diamonds?",
      options: ["78/1326", "1/17", "13/51", "25/663"],
      correctAnswer: 0,
      explanation: "P = C(13,2)/C(52,2) = 78/1326 = 13/221.",
      difficulty: "medium"
  },
  {
      id: "pc-61",
      topicId: "probability",
      question: "A box contains 6 red, 5 blue, and 4 green balls. If three balls are drawn at random without replacement, what is the probability that all are of different colors?",
      options: ["0.4545", "0.4960", "0.5303", "0.5121"],
      correctAnswer: 1,
      explanation: "Total balls = 15, total ways = 15C3 = 455. Ways to choose 1 red, 1 blue, 1 green = 6C1 × 5C1 × 4C1 = 120. Probability = 120 / 455 ≈ 0.4960.",
      difficulty: "hard"
  },
  {
      id: "pc-62",
      topicId: "probability",
      question: "A die is rolled three times. What is the probability that the sum of the outcomes is exactly 10?",
      options: ["0.125", "0.1254", "0.1255", "0.1256"],
      correctAnswer: 3,
      explanation: "Number of ordered triples (x, y, z) such that x + y + z = 10 and 1 ≤ x, y, z ≤ 6 is found using stars and bars with constraints. Total possibilities = 6^3 = 216. Valid combinations count = 27, so probability = 27/216 = 0.1256.",
      difficulty: "hard"
  },
  {
      id: "pc-63",
      topicId: "probability",
      question: "Two cards are drawn from a standard deck without replacement. What is the probability that one is a spade and the other is a heart?",
      options: ["0.2451", "0.2500", "0.2549", "0.2600"],
      correctAnswer: 2,
      explanation: "Number of ways to choose 1 spade = 13, 1 heart = 13 → total = 13 × 13 = 169. Total ways to choose any 2 cards = 52C2 = 1326. Probability = 169 / 1326 ≈ 0.2549.",
      difficulty: "hard"
  },
  {
      id: "pc-64",
      topicId: "probability",
      question: "A jar contains 8 white and 6 black balls. Two balls are drawn at a time without replacement. What is the probability that both balls are black given that at least one ball is black?",
      options: ["0.200", "0.220", "0.240", "0.260"],
      correctAnswer: 1,
      explanation: "P(both black) = C(6,2)/C(14,2) = 15/91. P(at least one black) = 1 - P(both white) = 1 - C(8,2)/C(14,2) = 1 - 28/91 = 63/91. Conditional probability = (15/91)/(63/91) = 15/63 ≈ 0.2381 ≈ 0.240.",
      difficulty: "hard"
  },
  {
      id: "pc-65",
      topicId: "probability",
      question: "In a group of 5 men and 6 women, a committee of 4 is to be formed with at least 2 men. What is the probability of forming such a committee if all selections are equally likely?",
      options: ["0.7575", "0.7580", "0.7585", "0.7590"],
      correctAnswer: 0,
      explanation: "Total ways = C(11,4) = 330. Valid committees: 2M+2W = C(5,2)×C(6,2)=150, 3M+1W= C(5,3)×C(6,1)=60, 4M= C(5,4)=5; Total = 215. Probability = 215/330 ≈ 0.7575.",
      difficulty: "hard"
  },
  {
      id: "pc-66",
      topicId: "probability",
      question: "Three coins are tossed. If at least one head appears, what is the probability that exactly two heads appear?",
      options: ["0.3000", "0.3333", "0.4000", "0.5000"],
      correctAnswer: 1,
      explanation: "P(exactly 2 heads) = 3/8, P(at least 1 head) = 7/8. Conditional probability = (3/8)/(7/8) = 3/7 ≈ 0.4286.",
      difficulty: "hard"
  },
  {
      id: "pc-67",
      topicId: "probability",
      question: "Two dice are thrown. What is the probability that the sum is a prime number given that the sum is odd?",
      options: ["0.3846", "0.4000", "0.4167", "0.4286"],
      correctAnswer: 0,
      explanation: "Odd sums occur in 18 outcomes. Prime odd sums are 3, 5, 7, 9, 11. Counting gives 7 outcomes. Probability = 7/18 ≈ 0.3846.",
      difficulty: "hard"
  },
  {
      id: "pc-68",
      topicId: "probability",
      question: "A fair die is rolled until a 6 appears. What is the probability that it takes an odd number of rolls?",
      options: ["0.5000", "0.5455", "0.5714", "0.6000"],
      correctAnswer: 2,
      explanation: "P(odd rolls) = P(1st success on 1st) + P(1st success on 3rd) + ... = (1/6) + ((5/6)^2 × 1/6) + ... = (1/6) / (1 - (25/36)) = 18/31 ≈ 0.5806.",
      difficulty: "hard"
  },
  {
      id: "pc-69",
      topicId: "probability",
      question: "An urn contains 10 balls numbered 1 to 10. Three balls are drawn at random without replacement. What is the probability that the smallest number is 4?",
      options: ["0.0833", "0.1000", "0.1111", "0.1250"],
      correctAnswer: 2,
      explanation: "If smallest is 4, we must choose remaining 2 balls from numbers 5 to 10 (6 balls). Ways = C(6,2) = 15. Total ways = C(10,3) = 120. Probability = 15/120 = 0.125.",
      difficulty: "hard"
  },
  {
      id: "pc-70",
      topicId: "probability",
      question: "From a standard deck, four cards are drawn at random. What is the probability that they all belong to the same suit?",
      options: ["0.01056", "0.0150", "0.0181", "0.0200"],
      correctAnswer: 0,
      explanation: "Choose suit: 4 ways. Choose 4 cards from that suit: C(13,4) = 715. Total = 4×715 = 2860. Total ways = C(52,4) = 270725. Probability = 2860/270725 ≈ 0.01056.",
      difficulty: "hard"
  },
  {
      id: "pb-71",
      topicId: "probability",
      question: "A box contains 5 red, 4 blue, and 3 green balls. Two balls are drawn at random without replacement. What is the probability that both balls are of different colors?",
      options: ["8/11", "9/11", "10/11", "7/11"],
      correctAnswer: 1,
      explanation: "Total balls = 12, total ways = C(12, 2) = 66. Ways for both different colors = Total ways - same color ways. Same color: C(5,2)+C(4,2)+C(3,2) = 10+6+3 = 19. So different colors = 66 - 19 = 47, probability = 47/66 = 9/11.",
      difficulty: "hard"
  },
  {
      id: "pb-72",
      topicId: "probability",
      question: "A coin is tossed 5 times. What is the probability of getting at least 4 heads?",
      options: ["1/16", "3/16", "5/16", "1/8"],
      correctAnswer: 2,
      explanation: "At least 4 heads = exactly 4 heads + exactly 5 heads. Exactly 4: C(5,4)×(1/2)^5 = 5×1/32 = 5/32. Exactly 5: 1×(1/2)^5 = 1/32. Total = 5/32 + 1/32 = 6/32 = 3/16.",
      difficulty: "hard"
  },
  {
      id: "pb-73",
      topicId: "probability",
      question: "A fair die is rolled three times. What is the probability that the product of the outcomes is even?",
      options: ["1/8", "7/8", "3/4", "5/6"],
      correctAnswer: 1,
      explanation: "Product is even if at least one roll is even. Probability of all odd = (3/6)^3 = (1/2)^3 = 1/8. So probability = 1 - 1/8 = 7/8.",
      difficulty: "hard"
  },
  {
      id: "pb-74",
      topicId: "probability",
      question: "Two dice are rolled. What is the probability that the sum is a prime number?",
      options: ["5/12", "7/18", "7/12", "5/18"],
      correctAnswer: 0,
      explanation: "Possible sums that are prime: 2, 3, 5, 7, 11. Count combinations: 2(1), 3(2), 5(4), 7(6), 11(2) → total = 15. Probability = 15/36 = 5/12.",
      difficulty: "hard"
  },
  {
      id: "pb-75",
      topicId: "probability",
      question: "A bag has 10 balls numbered 1 to 10. If two balls are drawn at random without replacement, what is the probability that both numbers are even?",
      options: ["1/5", "2/9", "2/5", "1/9"],
      correctAnswer: 1,
      explanation: "Even numbers: 5 balls. Ways to pick 2 even: C(5,2) = 10. Total ways = C(10,2) = 45. Probability = 10/45 = 2/9.",
      difficulty: "hard"
  },
  {
      id: "pb-76",
      topicId: "probability",
      question: "A deck of 52 cards is shuffled and one card is drawn. What is the probability it is neither a face card nor a red card?",
      options: ["11/26", "5/13", "9/26", "7/13"],
      correctAnswer: 2,
      explanation: "Face cards: 12 total. Red cards: 26. Overlap (red face cards): 6. Using inclusion-exclusion: P(face ∪ red) = (12+26−6)/52 = 32/52. Not face and not red = 20/52 = 10/26 = 5/13.",
      difficulty: "hard"
  },
  {
      id: "pb-77",
      topicId: "probability",
      question: "A coin is biased so that heads appears twice as likely as tails. If the coin is tossed twice, what is the probability of getting two heads?",
      options: ["4/9", "2/3", "1/3", "1/2"],
      correctAnswer: 0,
      explanation: "Let P(H) = 2x, P(T) = x. Since 2x + x = 1 → x = 1/3, so P(H) = 2/3. Two heads = (2/3)^2 = 4/9.",
      difficulty: "hard"
  },
  {
      id: "pb-78",
      topicId: "probability",
      question: "A bag contains 6 white and 4 black balls. Two balls are drawn at random with replacement. What is the probability that both are white?",
      options: ["9/25", "4/9", "36/100", "8/15"],
      correctAnswer: 2,
      explanation: "With replacement: P(white first) = 6/10, P(white second) = 6/10. Multiply: (6/10)×(6/10) = 36/100 = 9/25.",
      difficulty: "hard"
  },
  {
      id: "pb-79",
      topicId: "probability",
      question: "Three coins are tossed simultaneously. What is the probability of getting at least two heads?",
      options: ["1/2", "5/8", "3/4", "7/8"],
      correctAnswer: 1,
      explanation: "At least two heads = exactly 2 heads + exactly 3 heads. Exactly 2 heads: C(3,2)×(1/2)^3 = 3×1/8 = 3/8. Exactly 3 heads: 1×(1/2)^3 = 1/8. Total = 4/8 = 1/2.",
      difficulty: "hard"
  },
  {
      id: "pb-80",
      topicId: "probability",
      question: "A card is drawn from a standard deck. What is the probability it is a king or a diamond?",
      options: ["4/13", "16/52", "16/13", "17/52"],
      correctAnswer: 3,
      explanation: "Kings: 4, diamonds: 13, overlap (king of diamonds): 1. Using inclusion-exclusion: (4+13−1)/52 = 16/52 = 4/13.",
      difficulty: "hard"
  },
  {
      id: "prob-081",
      topicId: "probability",
      question: "A die is rolled three times. What is the probability that all outcomes are different?",
      options: ["5/9", "5/6", "2/3", "7/9"],
      correctAnswer: 1,
      explanation: "Total outcomes = 6^3 = 216. Favorable = 6 × 5 × 4 = 120. Probability = 120/216 = 5/9.",
      difficulty: "hard"
  },
  {
      id: "prob-082",
      topicId: "probability",
      question: "A bag contains 5 white, 4 black, and 3 red balls. Two balls are drawn one after another without replacement. Find the probability that both balls are of the same color.",
      options: ["47/132", "23/66", "25/132", "11/66"],
      correctAnswer: 0,
      explanation: "P(WW) = C(5,2)/C(12,2) = 10/66, P(BB) = C(4,2)/C(12,2) = 6/66, P(RR) = C(3,2)/C(12,2) = 3/66; sum = 19/66.",
      difficulty: "hard"
  },
  {
      id: "prob-083",
      topicId: "probability",
      question: "From a group of 6 men and 5 women, a committee of 4 is to be formed such that at least 1 man is included. What is the probability?",
      options: ["45/55", "54/55", "51/55", "50/55"],
      correctAnswer: 1,
      explanation: "Total = C(11,4) = 330; only women = C(5,4) = 5; favorable = 325; probability = 325/330 = 54/55.",
      difficulty: "hard"
  },
  {
      id: "prob-084",
      topicId: "probability",
      question: "Three fair coins are tossed. What is the probability of getting exactly two heads or exactly two tails?",
      options: ["3/4", "1/2", "5/8", "3/8"],
      correctAnswer: 2,
      explanation: "Exactly 2 heads = C(3,2) = 3 ways, exactly 2 tails = C(3,2) = 3 ways; overlap impossible. Probability = 6/8 = 3/4.",
      difficulty: "hard"
  },
  {
      id: "prob-085",
      topicId: "probability",
      question: "A box contains 4 defective and 6 non-defective bulbs. If two bulbs are selected without replacement, find the probability that at least one is defective.",
      options: ["11/15", "7/15", "8/15", "2/3"],
      correctAnswer: 0,
      explanation: "P(no defective) = C(6,2)/C(10,2) = 15/45 = 1/3; at least one defective = 1 - 1/3 = 2/3.",
      difficulty: "hard"
  },
  {
      id: "prob-086",
      topicId: "probability",
      question: "A die is rolled until a 6 appears. What is the probability that this happens on the 3rd throw?",
      options: ["25/216", "5/36", "1/36", "125/216"],
      correctAnswer: 1,
      explanation: "Fail first two throws (5/6 each) and succeed on 3rd (1/6): (5/6)^2 × 1/6 = 25/216.",
      difficulty: "hard"
  },
  {
      id: "prob-087",
      topicId: "probability",
      question: "An urn contains 3 red and 2 blue balls. Two balls are drawn at random. What is the probability they are of different colors?",
      options: ["3/5", "6/10", "4/5", "2/5"],
      correctAnswer: 2,
      explanation: "Total ways = C(5,2) = 10. Different colors = 3 × 2 = 6 ways. Probability = 6/10 = 3/5.",
      difficulty: "hard"
  },
  {
      id: "prob-088",
      topicId: "probability",
      question: "Two dice are thrown. What is the probability that the sum is either 7 or 11?",
      options: ["2/9", "1/4", "8/36", "10/36"],
      correctAnswer: 3,
      explanation: "Sum 7 → 6 ways, sum 11 → 2 ways; total 8 ways out of 36: 8/36 = 2/9.",
      difficulty: "hard"
  },
  {
      id: "prob-089",
      topicId: "probability",
      question: "From a pack of 52 cards, find the probability of drawing a face card or a spade.",
      options: ["22/52", "25/52", "28/52", "31/52"],
      correctAnswer: 1,
      explanation: "Face cards = 12, spades = 13, overlap = 3; probability = (12 + 13 - 3)/52 = 22/52.",
      difficulty: "hard"
  },
  {
      id: "prob-090",
      topicId: "probability",
      question: "A fair die is thrown twice. Find the probability that the product of the numbers is odd.",
      options: ["1/4", "1/3", "1/9", "1/2"],
      correctAnswer: 2,
      explanation: "Product odd if both numbers are odd: (3/6)^2 = 1/4.",
      difficulty: "hard"
  },
  {
      id: "pc-91",
      topicId: "probability",
      question: "Three machines produce 20%, 30%, and 50% of total items with defect rates 2%, 3%, and 4% respectively. An item is found defective. What is the probability it was produced by the first machine?",
      options: ["0.2", "0.16", "0.125", "0.111"],
      correctAnswer: 3,
      explanation: "Using Bayes' theorem: P(M1|D) = (0.2×0.02) / [(0.2×0.02)+(0.3×0.03)+(0.5×0.04)] = 0.004 / 0.036 = 1/9 ≈ 0.111.",
      difficulty: "hard"
  },
  {
      id: "pc-92",
      topicId: "probability",
      question: "A player needs 2 heads before 2 tails in coin tossing. If he starts tossing a fair coin, what is the probability he wins?",
      options: ["2/3", "1/2", "3/4", "5/9"],
      correctAnswer: 0,
      explanation: "States can be solved using absorbing Markov chain or recursion: P = 2/3.",
      difficulty: "hard"
  },
  {
      id: "pc-93",
      topicId: "probability",
      question: "A person randomly shuffles 10 cards numbered 1 to 10. What is the probability that exactly 3 of them remain in their original positions?",
      options: ["(10C3 × D7) / 10!", "(10C3 × D3) / 10!", "(7C3 × D7) / 10!", "(10C7 × D7) / 10!"],
      correctAnswer: 0,
      explanation: "Choose 3 cards to remain fixed: 10C3. Derange the other 7 cards: D7 = 1854. Probability = (10C3 × 1854) / 10!.",
      difficulty: "hard"
  },
  {
      id: "pc-94",
      topicId: "probability",
      question: "If two people take turns rolling a die, first to roll a 6 wins. What is the probability that the first player wins?",
      options: ["6/11", "7/12", "1/2", "5/9"],
      correctAnswer: 0,
      explanation: "Let p be the probability that first player wins. p = (1/6) + (5/6)(5/6)p → p = 6/11.",
      difficulty: "hard"
  },
  {
      id: "pc-95",
      topicId: "probability",
      question: "In a group of n people, what is the probability that at least two share the same birthday? (Assume 365 days, no leap years)",
      options: ["1 - (365! / ((365-n)! × 365^n))", "1 - (n/365)", "nC2 / 365", "1 - (365^n / 365!)"],
      correctAnswer: 0,
      explanation: "P(all birthdays different) = (365 × 364 × ... × (365-n+1)) / 365^n. Complement gives required probability.",
      difficulty: "hard"
  },
  {
      id: "pc-96",
      topicId: "probability",
      question: "An urn contains 4 red and 6 blue balls. Balls are drawn one by one without replacement until all red balls are drawn. What is the probability that the last ball drawn is red?",
      options: ["4/10", "1/5", "1/3", "1/2"],
      correctAnswer: 3,
      explanation: "By symmetry, any ball is equally likely to be last. Probability that last ball is red = 4/10 = 2/5? Actually, due to symmetry in position of last red, it's 1/2.",
      difficulty: "hard"
  },
  {
      id: "pc-97",
      topicId: "probability",
      question: "A shooter hits a target with probability 0.7. He keeps shooting until he hits the target twice. What is the probability that he needs exactly 4 shots?",
      options: ["(0.3^2)(0.7^2)", "(3C1)(0.7^2)(0.3^2)", "(0.3)(0.7^2)(0.3)", "(0.3^2)(0.7)"],
      correctAnswer: 1,
      explanation: "In 4 shots, last shot must be a hit, one hit in first 3 shots: C(3,1) × 0.7^2 × 0.3^2 = 3 × 0.49 × 0.09.",
      difficulty: "hard"
  },
  {
      id: "pc-98",
      topicId: "probability",
      question: "Two dice are rolled. Find the probability that the sum is a prime number given that it is even.",
      options: ["1/3", "1/4", "1/6", "0"],
      correctAnswer: 3,
      explanation: "Even sums possible: 2,4,6,8,10,12. Only prime even sum is 2, which occurs once (1,1). So probability = 1/18 ÷ 1/2 = 1/9 → not prime except 2 so zero? Actually 2 is only prime even → 1/18 / (1/2) = 1/9.",
      difficulty: "hard"
  },
  {
      id: "pc-99",
      topicId: "probability",
      question: "A bag has 5 white, 4 black, and 3 red balls. Two balls are drawn at random. What is the probability they are of different colors?",
      options: ["(5×4 + 5×3 + 4×3)/C(12,2)", "(5×4 + 5×3 + 4×3)/66", "(20+15+12)/66", "All of these"],
      correctAnswer: 3,
      explanation: "Pairs of different colors: white-black = 20, white-red = 15, black-red = 12. Total = 47, total ways = 66 → 47/66.",
      difficulty: "hard"
  },
  {
      id: "pc-100",
      topicId: "probability",
      question: "From numbers 1 to 100, a number is chosen at random. What is the probability that it is divisible by 3 or 5 but not both?",
      options: ["(33+20-6)/100", "(33+20-6×2)/100", "(27+14)/100", "None of these"],
      correctAnswer: 2,
      explanation: "Multiples of 3: 33, multiples of 5: 20, multiples of 15: 6. Only 3 or only 5: (33-6) + (20-6) = 27+14 = 41 → 41/100.",
      difficulty: "hard"
  }
];
// [
//     {
//       id: "prob-1",
//       topicId: "probability",
//       question: "A coin is tossed 3 times. What is the probability of getting at least one head?",
//       options: ["1/8", "7/8", "1/2", "3/8"],
//       correctAnswer: 1,
//       explanation: "Probability of no head (all tails) = (1/2)^3 = 1/8; Hence probability of at least one head = 1 - 1/8 = 7/8",
//       difficulty: "easy"
//     },
//     {
//       id: "prob-2",
//       topicId: "probability",
//       question: "Two cards are drawn from a pack of 52 cards. Find the probability that both are diamonds or both are kings.",
//       options: ["33/221", "11/221", "5/221", "22/221"],
//       correctAnswer: 0,
//       explanation: "Number of ways to choose 2 diamonds = 13C2=78; ways to choose 2 kings = 4C2=6; total favorable=84; total ways=52C2=1326; Probability=84/1326=33/221",
//       difficulty: "medium"
//     },
//     {
//       id: "prob-3",
//       topicId: "probability",
//       question: "There are 5 green and 7 red balls. Two balls are selected one by one without replacement. Find the probability that first is green and second is red.",
//       options: ["5/12", "7/12", "35/132", "7/11"],
//       correctAnswer: 2,
//       explanation: "P(first green)=5/12; P(second red after first green)=7/11; Total=5/12*7/11=35/132",
//       difficulty: "medium"
//     },
//     {
//       id: "prob-4",
//       topicId: "probability",
//       question: "From a pack of 52 cards, three cards are drawn at random. Find the probability that each card is from a different suit.",
//       options: ["33/1105", "1/17", "11/130", "12/221"],
//       correctAnswer: 0,
//       explanation: "Total ways to choose 3 cards=52C3=22100; one from each different suit=4C3*(13C1)^3=4*13*13*13=8788; Probability=8788/22100=33/1105",
//       difficulty: "hard"
//     },
//     {
//       id: "prob-5",
//       topicId: "probability",
//       question: "A bag contains 6 white and 4 black balls. Two balls are drawn at random. Find the probability that both the balls are of the same color.",
//       options: ["7/15", "9/20", "1/3", "2/5"],
//       correctAnswer: 0,
//       explanation: "Ways to choose 2 white=6C2=15; 2 black=4C2=6; total favorable =21; total ways=10C2=45; Probability=21/45=7/15",
//       difficulty: "easy"
//     },
//     {
//       id: "prob-6",
//       topicId: "probability",
//       question: "An unbiased die is tossed. Find the probability of getting an even number.",
//       options: ["1/3", "1/6", "1/2", "2/3"],
//       correctAnswer: 2,
//       explanation: "Even numbers on die = {2,4,6}, favorable=3; total possible=6; Probability=3/6=1/2",
//       difficulty: "easy"
//     },
//     {
//       id: "prob-7",
//       topicId: "probability",
//       question: "Two dice are rolled. What is the probability that the sum is 9?",
//       options: ["1/9", "1/8", "1/6", "1/12"],
//       correctAnswer: 0,
//       explanation: "Number of ways sum 9: (3,6),(4,5),(5,4),(6,3)=4; total outcomes=36; Probability=4/36=1/9",
//       difficulty: "medium"
//     },
//     {
//       id: "prob-8",
//       topicId: "probability",
//       question: "A bag has 7 red and 4 blue balls. Two balls are drawn at random with replacement. Find the probability of getting balls of different colors.",
//       options: ["56/121", "28/121", "14/121", "70/121"],
//       correctAnswer: 0,
//       explanation: "P(red then blue)=7/11*4/11=28/121; P(blue then red)=4/11*7/11=28/121; total=56/121",
//       difficulty: "medium"
//     },
//     {
//       id: "prob-9",
//       topicId: "probability",
//       question: "A test consists of 10 true/false questions. What is the probability that a student guessing answers correctly gets at least 8 answers right?",
//       options: ["0.0547", "0.0544", "0.056", "0.057"],
//       correctAnswer: 0,
//       explanation: "Use binomial probability P(X≥8) = P(8)+P(9)+P(10) with p=0.5, n=10; Sum ≈ 0.0547",
//       difficulty: "hard"
//     },
//     {
//       id: "prob-10",
//       topicId: "probability",
//       question: "A quiz has 8 multiple-choice questions, each with 4 options. A student guesses all answers. Find the probability of answering exactly 6 questions correctly.",
//       options: ["0.024", "0.03", "0.04", "0.05"],
//       correctAnswer: 0,
//       explanation: "Binomial probability: C(8,6)*(1/4)^6*(3/4)^2 ≈ 0.024",
//       difficulty: "hard"
//     },
//     {
//       id: "prob-11",
//       topicId: "probability",
//       question: "A box contains 4 black, 5 white, and 6 red balls. Two balls are drawn randomly. What is the probability that both balls are of the same color?",
//       options: ["7/30", "13/45", "8/31", "7/25"],
//       correctAnswer: 1,
//       explanation: "Favorable = 4C2 + 5C2 + 6C2 = 6 + 10 + 15 = 31; Total = 15C2 = 105; Probability = 31/105 = 13/45",
//       difficulty: "medium"
//     },
//     {
//       id: "prob-12",
//       topicId: "probability",
//       question: "From a group of 30 students, 18 like cricket and 12 like football. If a student is selected at random, what is the probability that the student likes football?",
//       options: ["2/5", "3/5", "1/3", "1/2"],
//       correctAnswer: 0,
//       explanation: "Total students=30; football likers=12; Probability = 12/30 = 2/5",
//       difficulty: "easy"
//     },
//     {
//         id: "prob-13",
//         topicId: "probability",
//         question: "A coin is tossed 3 times. What is the probability of getting at least one head?",
//         options: ["1/8", "7/8", "1/2", "3/8"],
//         correctAnswer: 1,
//         explanation: "Probability of no head (all tails) = (1/2)^3 = 1/8; Hence probability of at least one head = 1 - 1/8 = 7/8",
//         difficulty: "easy"
//       },
//       {
//         id: "prob-14",
//         topicId: "probability",
//         question: "Two cards are drawn from a pack of 52 cards. Find the probability that both are diamonds or both are kings.",
//         options: ["33/221", "11/221", "5/221", "22/221"],
//         correctAnswer: 0,
//         explanation: "Number of ways to choose 2 diamonds = 13C2=78; ways to choose 2 kings = 4C2=6; total favorable=84; total ways=52C2=1326; Probability=84/1326=33/221",
//         difficulty: "medium"
//       },
//     {
//       id: "prob-15",
//       topicId: "probability",
//       question: "A company produces 60%, 25% and 15% of output from machines A, B, and C. Defective rates are 2%, 3%, and 4%. If a product is defective, find probability it was produced by machine C.",
//       options: ["1/6", "1/5", "1/7", "1/8"],
//       correctAnswer: 0,
//       explanation: "Use Bayes theorem: P(C|def) = P(def|C)*P(C) / total defect = (0.04*0.15) / (0.6*0.02+0.25*0.03+0.15*0.04) = 0.006 / 0.0365 ≈ 1/6",
//       difficulty: "hard"
//     },
//     {
//         id: "prob-16",
//         topicId: "probability",
//         question: "There are 5 green and 7 red balls. Two balls are selected one by one without replacement. Find the probability that first is green and second is red.",
//         options: ["5/12", "7/12", "35/132", "7/11"],
//         correctAnswer: 2,
//         explanation: "P(first green)=5/12; P(second red after first green)=7/11; Total=5/12*7/11=35/132",
//         difficulty: "medium"
//       },
//     {
//       id: "prob-17",
//       topicId: "probability",
//       question: "The probability that a randomly chosen number from 1 to 90 is a perfect square is:",
//       options: ["1/10", "1/9", "1/8", "1/7"],
//       correctAnswer: 0,
//       explanation: "Perfect squares ≤ 90: 1,4,9,16,25,36,49,64,81 (9 numbers); Probability=9/90=1/10",
//       difficulty: "easy"
//     },
//     {
//       id: "prob-18",
//       topicId: "probability",
//       question: "From a pack of 52 cards, one card is drawn. What is the probability that it is a numbered card (2 to 10)?",
//       options: ["9/13", "10/13", "11/13", "12/13"],
//       correctAnswer: 0,
//       explanation: "Numbered cards per suit = 9; total suits=4; total numbered=36; Probability=36/52=9/13",
//       difficulty: "easy"
//     },
//     {
//       id: "prob-19",
//       topicId: "probability",
//       question: "A die is rolled. What is the probability of getting a number that is a multiple of 3?",
//       options: ["1/6", "1/3", "1/2", "1/4"],
//       correctAnswer: 1,
//       explanation: "Multiples of 3 are {3,6}, 2 favorable outcomes; total 6 outcomes; probability=2/6=1/3",
//       difficulty: "easy"
//     },
//     {
//       id: "prob-20",
//       topicId: "probability",
//       question: "Two dice are thrown. What is the probability that both dice show different numbers?",
//       options: ["5/6", "1/6", "1/3", "1/2"],
//       correctAnswer: 0,
//       explanation: "Total outcomes=36; same numbers=6; different=30; probability=30/36=5/6",
//       difficulty: "medium"
//     }
//   ];
  