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
  }
]; 