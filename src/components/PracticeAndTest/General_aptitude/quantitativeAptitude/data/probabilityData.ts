import { QuantitativeQuestion } from "../types";

export const probabilityQuestions: QuantitativeQuestion[] = 
[
    {
      "id": "prob-1",
      "topicId": "probability",
      "question": "A coin is tossed 3 times. What is the probability of getting at least one head?",
      "options": ["1/8", "7/8", "1/2", "3/8"],
      "correctAnswer": 1,
      "explanation": "Probability of no head (all tails) = (1/2)^3 = 1/8; Hence probability of at least one head = 1 - 1/8 = 7/8",
      "difficulty": "easy"
    },
    {
      "id": "prob-2",
      "topicId": "probability",
      "question": "Two cards are drawn from a pack of 52 cards. Find the probability that both are diamonds or both are kings.",
      "options": ["33/221", "11/221", "5/221", "22/221"],
      "correctAnswer": 0,
      "explanation": "Number of ways to choose 2 diamonds = 13C2=78; ways to choose 2 kings = 4C2=6; total favorable=84; total ways=52C2=1326; Probability=84/1326=33/221",
      "difficulty": "medium"
    },
    {
      "id": "prob-3",
      "topicId": "probability",
      "question": "There are 5 green and 7 red balls. Two balls are selected one by one without replacement. Find the probability that first is green and second is red.",
      "options": ["5/12", "7/12", "35/132", "7/11"],
      "correctAnswer": 2,
      "explanation": "P(first green)=5/12; P(second red after first green)=7/11; Total=5/12*7/11=35/132",
      "difficulty": "medium"
    },
    {
      "id": "prob-4",
      "topicId": "probability",
      "question": "From a pack of 52 cards, three cards are drawn at random. Find the probability that each card is from a different suit.",
      "options": ["33/1105", "1/17", "11/130", "12/221"],
      "correctAnswer": 0,
      "explanation": "Total ways to choose 3 cards=52C3=22100; one from each different suit=4C3*(13C1)^3=4*13*13*13=8788; Probability=8788/22100=33/1105",
      "difficulty": "hard"
    },
    {
      "id": "prob-5",
      "topicId": "probability",
      "question": "A bag contains 6 white and 4 black balls. Two balls are drawn at random. Find the probability that both the balls are of the same color.",
      "options": ["7/15", "9/20", "1/3", "2/5"],
      "correctAnswer": 0,
      "explanation": "Ways to choose 2 white=6C2=15; 2 black=4C2=6; total favorable =21; total ways=10C2=45; Probability=21/45=7/15",
      "difficulty": "easy"
    },
    {
      "id": "prob-6",
      "topicId": "probability",
      "question": "An unbiased die is tossed. Find the probability of getting an even number.",
      "options": ["1/3", "1/6", "1/2", "2/3"],
      "correctAnswer": 2,
      "explanation": "Even numbers on die = {2,4,6}, favorable=3; total possible=6; Probability=3/6=1/2",
      "difficulty": "easy"
    },
    {
      "id": "prob-7",
      "topicId": "probability",
      "question": "Two dice are rolled. What is the probability that the sum is 9?",
      "options": ["1/9", "1/8", "1/6", "1/12"],
      "correctAnswer": 0,
      "explanation": "Number of ways sum 9: (3,6),(4,5),(5,4),(6,3)=4; total outcomes=36; Probability=4/36=1/9",
      "difficulty": "medium"
    },
    {
      "id": "prob-8",
      "topicId": "probability",
      "question": "A bag has 7 red and 4 blue balls. Two balls are drawn at random with replacement. Find the probability of getting balls of different colors.",
      "options": ["56/121", "28/121", "14/121", "70/121"],
      "correctAnswer": 0,
      "explanation": "P(red then blue)=7/11*4/11=28/121; P(blue then red)=4/11*7/11=28/121; total=56/121",
      "difficulty": "medium"
    },
    {
      "id": "prob-9",
      "topicId": "probability",
      "question": "A test consists of 10 true/false questions. What is the probability that a student guessing answers correctly gets at least 8 answers right?",
      "options": ["0.0547", "0.0544", "0.056", "0.057"],
      "correctAnswer": 0,
      "explanation": "Use binomial probability P(X≥8) = P(8)+P(9)+P(10) with p=0.5, n=10; Sum ≈ 0.0547",
      "difficulty": "hard"
    },
    {
      "id": "prob-10",
      "topicId": "probability",
      "question": "A quiz has 8 multiple-choice questions, each with 4 options. A student guesses all answers. Find the probability of answering exactly 6 questions correctly.",
      "options": ["0.024", "0.03", "0.04", "0.05"],
      "correctAnswer": 0,
      "explanation": "Binomial probability: C(8,6)*(1/4)^6*(3/4)^2 ≈ 0.024",
      "difficulty": "hard"
    },
    {
      "id": "prob-11",
      "topicId": "probability",
      "question": "A box contains 4 black, 5 white, and 6 red balls. Two balls are drawn randomly. What is the probability that both balls are of the same color?",
      "options": ["7/30", "13/45", "8/31", "7/25"],
      "correctAnswer": 1,
      "explanation": "Favorable = 4C2 + 5C2 + 6C2 = 6 + 10 + 15 = 31; Total = 15C2 = 105; Probability = 31/105 = 13/45",
      "difficulty": "medium"
    },
    {
      "id": "prob-12",
      "topicId": "probability",
      "question": "From a group of 30 students, 18 like cricket and 12 like football. If a student is selected at random, what is the probability that the student likes football?",
      "options": ["2/5", "3/5", "1/3", "1/2"],
      "correctAnswer": 0,
      "explanation": "Total students=30; football likers=12; Probability = 12/30 = 2/5",
      "difficulty": "easy"
    },
    {
        "id": "prob-13",
        "topicId": "probability",
        "question": "A coin is tossed 3 times. What is the probability of getting at least one head?",
        "options": ["1/8", "7/8", "1/2", "3/8"],
        "correctAnswer": 1,
        "explanation": "Probability of no head (all tails) = (1/2)^3 = 1/8; Hence probability of at least one head = 1 - 1/8 = 7/8",
        "difficulty": "easy"
      },
      {
        "id": "prob-14",
        "topicId": "probability",
        "question": "Two cards are drawn from a pack of 52 cards. Find the probability that both are diamonds or both are kings.",
        "options": ["33/221", "11/221", "5/221", "22/221"],
        "correctAnswer": 0,
        "explanation": "Number of ways to choose 2 diamonds = 13C2=78; ways to choose 2 kings = 4C2=6; total favorable=84; total ways=52C2=1326; Probability=84/1326=33/221",
        "difficulty": "medium"
      },
    {
      "id": "prob-15",
      "topicId": "probability",
      "question": "A company produces 60%, 25% and 15% of output from machines A, B, and C. Defective rates are 2%, 3%, and 4%. If a product is defective, find probability it was produced by machine C.",
      "options": ["1/6", "1/5", "1/7", "1/8"],
      "correctAnswer": 0,
      "explanation": "Use Bayes theorem: P(C|def) = P(def|C)*P(C) / total defect = (0.04*0.15) / (0.6*0.02+0.25*0.03+0.15*0.04) = 0.006 / 0.0365 ≈ 1/6",
      "difficulty": "hard"
    },
    {
        "id": "prob-16",
        "topicId": "probability",
        "question": "There are 5 green and 7 red balls. Two balls are selected one by one without replacement. Find the probability that first is green and second is red.",
        "options": ["5/12", "7/12", "35/132", "7/11"],
        "correctAnswer": 2,
        "explanation": "P(first green)=5/12; P(second red after first green)=7/11; Total=5/12*7/11=35/132",
        "difficulty": "medium"
      },
    {
      "id": "prob-17",
      "topicId": "probability",
      "question": "The probability that a randomly chosen number from 1 to 90 is a perfect square is:",
      "options": ["1/10", "1/9", "1/8", "1/7"],
      "correctAnswer": 0,
      "explanation": "Perfect squares ≤ 90: 1,4,9,16,25,36,49,64,81 (9 numbers); Probability=9/90=1/10",
      "difficulty": "easy"
    },
    {
      "id": "prob-18",
      "topicId": "probability",
      "question": "From a pack of 52 cards, one card is drawn. What is the probability that it is a numbered card (2 to 10)?",
      "options": ["9/13", "10/13", "11/13", "12/13"],
      "correctAnswer": 0,
      "explanation": "Numbered cards per suit = 9; total suits=4; total numbered=36; Probability=36/52=9/13",
      "difficulty": "easy"
    },
    {
      "id": "prob-19",
      "topicId": "probability",
      "question": "A die is rolled. What is the probability of getting a number that is a multiple of 3?",
      "options": ["1/6", "1/3", "1/2", "1/4"],
      "correctAnswer": 1,
      "explanation": "Multiples of 3 are {3,6}, 2 favorable outcomes; total 6 outcomes; probability=2/6=1/3",
      "difficulty": "easy"
    },
    {
      "id": "prob-20",
      "topicId": "probability",
      "question": "Two dice are thrown. What is the probability that both dice show different numbers?",
      "options": ["5/6", "1/6", "1/3", "1/2"],
      "correctAnswer": 0,
      "explanation": "Total outcomes=36; same numbers=6; different=30; probability=30/36=5/6",
      "difficulty": "medium"
    }
  ];
  