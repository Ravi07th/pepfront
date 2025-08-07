export const seatingArrangementsQuestions = [
  {
    id: 1,
    question: "Six friends A, B, C, D, E, F are sitting in a circle facing the center. A is between B and C. D is opposite to A. E is between C and F. Who is sitting opposite to C?",
    options: ["A", "B", "D", "F"],
    correctAnswer: 2,
    explanation: "A is between B and C, so order is B-A-C. D is opposite A. E is between C and F, so order is C-E-F. Since D is opposite A, and A is between B and C, D must be opposite C."
  },
  {
    id: 2,
    question: "Eight people P, Q, R, S, T, U, V, W are sitting around a circular table. P is opposite to R. Q is between P and S. T is between R and U. V is opposite to Q. Who is sitting between W and T?",
    options: ["P", "Q", "R", "U"],
    correctAnswer: 3,
    explanation: "P is opposite R. Q is between P and S. T is between R and U. V is opposite Q. So the arrangement is: P-Q-S-V-R-T-U-W. Between W and T is U."
  },
  {
    id: 3,
    question: "Five students A, B, C, D, E are sitting in a row facing North. A is not at either end. B is to the immediate right of A. C is at one end. D is to the immediate left of E. Who is sitting in the middle?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 0,
    explanation: "A is not at either end, so A is in the middle. B is to the right of A. C is at one end. D is to the left of E. So the arrangement is: C-A-B-D-E or E-D-A-B-C. In both cases, A is in the middle."
  },
  {
    id: 4,
    question: "Six friends are sitting in a circle. A is opposite to D. B is between A and C. E is between C and F. Who is sitting opposite to B?",
    options: ["C", "D", "E", "F"],
    correctAnswer: 2,
    explanation: "A is opposite D. B is between A and C. E is between C and F. So the arrangement is: A-B-C-E-F-D. B is opposite E."
  },
  {
    id: 5,
    question: "Seven people are sitting in a row facing South. A is at one end. B is between A and C. D is between C and E. F is between E and G. Who is sitting in the middle?",
    options: ["C", "D", "E", "F"],
    correctAnswer: 1,
    explanation: "A is at one end. B is between A and C. D is between C and E. F is between E and G. So the arrangement is: A-B-C-D-E-F-G. D is in the middle."
  },
  {
    id: 6,
    question: "Eight people are sitting around a circular table. P is opposite to R. Q is between P and S. T is between R and U. V is opposite to Q. W is between U and V. Who is sitting between S and W?",
    options: ["P", "Q", "R", "T"],
    correctAnswer: 3,
    explanation: "P is opposite R. Q is between P and S. T is between R and U. V is opposite Q. W is between U and V. So the arrangement is: P-Q-S-T-R-U-W-V. Between S and W is T."
  },
  {
    id: 7,
    question: "Six friends A, B, C, D, E, F are sitting in a row facing North. A is at one end. B is to the immediate right of A. C is between B and D. E is between D and F. Who is sitting in the middle?",
    options: ["B", "C", "D", "E"],
    correctAnswer: 2,
    explanation: "A is at one end. B is to the right of A. C is between B and D. E is between D and F. So the arrangement is: A-B-C-D-E-F. D is in the middle."
  },
  {
    id: 8,
    question: "Seven people are sitting in a circle. A is opposite to D. B is between A and C. E is between C and F. G is between F and A. Who is sitting opposite to C?",
    options: ["A", "B", "E", "F"],
    correctAnswer: 2,
    explanation: "A is opposite D. B is between A and C. E is between C and F. G is between F and A. So the arrangement is: A-B-C-E-F-G-D. C is opposite E."
  },
  {
    id: 9,
    question: "Five students P, Q, R, S, T are sitting in a row facing South. P is not at either end. Q is to the immediate left of P. R is between P and S. T is at one end. Who is sitting in the middle?",
    options: ["P", "Q", "R", "S"],
    correctAnswer: 0,
    explanation: "P is not at either end, so P is in the middle. Q is to the left of P. R is between P and S. T is at one end. So the arrangement is: T-Q-P-R-S. P is in the middle."
  },
  {
    id: 10,
    question: "Six friends are sitting around a circular table. A is opposite to D. B is between A and C. E is between C and F. Who is sitting between B and E?",
    options: ["A", "C", "D", "F"],
    correctAnswer: 1,
    explanation: "A is opposite D. B is between A and C. E is between C and F. So the arrangement is: A-B-C-E-F-D. Between B and E is C."
  },
  {
    id: 11,
    question: "Eight people are sitting in a row facing North. A is at one end. B is between A and C. D is between C and E. F is between E and G. H is at the other end. Who is sitting in the middle?",
    options: ["C", "D", "E", "F"],
    correctAnswer: 1,
    explanation: "A is at one end. B is between A and C. D is between C and E. F is between E and G. H is at the other end. So the arrangement is: A-B-C-D-E-F-G-H. D is in the middle."
  },
  {
    id: 12,
    question: "Seven people are sitting around a circular table. P is opposite to R. Q is between P and S. T is between R and U. V is opposite to Q. W is between U and V. Who is sitting opposite to T?",
    options: ["P", "Q", "S", "W"],
    correctAnswer: 2,
    explanation: "P is opposite R. Q is between P and S. T is between R and U. V is opposite Q. W is between U and V. So the arrangement is: P-Q-S-T-R-U-W-V. T is opposite S."
  },
  {
    id: 13,
    question: "Six friends are sitting in a row facing South. A is not at either end. B is to the immediate right of A. C is between B and D. E is between D and F. Who is sitting in the middle?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 2,
    explanation: "A is not at either end. B is to the right of A. C is between B and D. E is between D and F. So the arrangement is: F-E-D-C-B-A or A-B-C-D-E-F. In both cases, C is in the middle."
  },
  {
    id: 14,
    question: "Eight people are sitting around a circular table. A is opposite to D. B is between A and C. E is between C and F. G is between F and H. H is opposite to B. Who is sitting between A and G?",
    options: ["B", "C", "D", "F"],
    correctAnswer: 1,
    explanation: "A is opposite D. B is between A and C. E is between C and F. G is between F and H. H is opposite B. So the arrangement is: A-B-C-E-F-G-H-D. Between A and G is C."
  },
  {
    id: 15,
    question: "Five students are sitting in a row facing North. A is at one end. B is between A and C. D is between C and E. Who is sitting in the middle?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 2,
    explanation: "A is at one end. B is between A and C. D is between C and E. So the arrangement is: A-B-C-D-E. C is in the middle."
  }
]; 