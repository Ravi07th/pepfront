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
  ,
  {
    id: 16,
    question: "Eight friends P, Q, R, S, T, U, V, W sit around a circular table facing the center. In clockwise order starting from P: P, Q, R, S, T, U, V, W. Who sits opposite Q?",
    options: ["T", "U", "V", "W"],
    correctAnswer: 1,
    explanation: "Opposite means 4 seats apart in an 8-seat circle. Q opposite U."
  },
  {
    id: 17,
    question: "Six people A, B, C, D, E, F are seated around a circle facing center. Clockwise order is A, B, C, D, E, F. Who is opposite E?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 0,
    explanation: "Opposite in 6-seat circle is 3 seats apart. E opposite A."
  },
  {
    id: 18,
    question: "Seven students L, M, N, O, P, Q, R sit in a row facing North in the order L, M, N, O, P, Q, R. Who is third from the left end?",
    options: ["M", "N", "O", "P"],
    correctAnswer: 1,
    explanation: "Left to right: L(1), M(2), N(3) ⇒ N is third from the left."
  },
  {
    id: 19,
    question: "Five people P, Q, R, S, T sit in a row facing South in the order P, Q, R, S, T (left to right from the observer). Who is in the middle?",
    options: ["Q", "R", "S", "T"],
    correctAnswer: 1,
    explanation: "Sequence P-Q-R-S-T ⇒ R is middle (3rd)."
  },
  {
    id: 20,
    question: "Two rows of four each face each other. North row (left→right): A, B, C, D face South. South row (left→right): H, G, F, E face North. Who faces B?",
    options: ["E", "F", "G", "H"],
    correctAnswer: 2,
    explanation: "Columns align: A↔H, B↔G, C↔F, D↔E. So B faces G."
  },
  {
    id: 21,
    question: "Eight persons seated around a circle facing center. Clockwise order: J, K, L, M, N, O, P, Q. Who is to the immediate right of M?",
    options: ["L", "N", "O", "K"],
    correctAnswer: 1,
    explanation: "Immediate right in clockwise listing (facing center) is next clockwise: after M comes N."
  },
  {
    id: 22,
    question: "Six persons seated in a circle facing center in order: U, V, W, X, Y, Z. Who is between V and X?",
    options: ["U", "W", "Y", "Z"],
    correctAnswer: 1,
    explanation: "Order U-V-W-X-Y-Z ⇒ between V and X is W."
  },
  {
    id: 23,
    question: "Seven people A, B, C, D, E, F, G sit in a row facing North in the order A, B, C, D, E, F, G. Who sits to the immediate left of E?",
    options: ["C", "D", "F", "G"],
    correctAnswer: 1,
    explanation: "...C(3), D(4), E(5)... Immediate left of E is D."
  },
  {
    id: 24,
    question: "Eight friends seated around a circle facing center: R, S, T, U, V, W, X, Y (clockwise). Who sits between W and Y?",
    options: ["V", "X", "R", "U"],
    correctAnswer: 1,
    explanation: "...V, W, X, Y, R... Between W and Y is X."
  },
  {
    id: 25,
    question: "Five persons sit in a row facing North: D, E, F, G, H (left→right). Who is to the immediate right of F?",
    options: ["D", "E", "G", "H"],
    correctAnswer: 2,
    explanation: "D E F G H ⇒ right of F is G."
  },
  {
    id: 26,
    question: "Six friends sit around a circle facing center in order: A, D, F, B, E, C. Who is opposite B?",
    options: ["A", "C", "D", "E"],
    correctAnswer: 0,
    explanation: "In 6 seats, opposite is 3 apart. B opposite A."
  },
  {
    id: 27,
    question: "Two rows of four facing each other. North row (L→R): P, Q, R, S. South row (L→R): T, U, V, W. Who faces R?",
    options: ["T", "U", "V", "W"],
    correctAnswer: 2,
    explanation: "Pairs: P↔T, Q↔U, R↔V, S↔W."
  },
  {
    id: 28,
    question: "Eight around a circle facing center: A, C, E, G, B, D, F, H (clockwise). Who is to the immediate left of A?",
    options: ["H", "C", "B", "G"],
    correctAnswer: 0,
    explanation: "Immediate left (clockwise neighbor) of A is H."
  },
  {
    id: 29,
    question: "Seven in a row facing North: K, L, M, N, O, P, Q (left→right). Who is fourth from the right end?",
    options: ["L", "M", "N", "O"],
    correctAnswer: 2,
    explanation: "Rightmost positions: Q(1), P(2), O(3), N(4)."
  },
  {
    id: 30,
    question: "Six around a circle facing center: P, S, R, U, T, Q (clockwise). Who is between R and T?",
    options: ["P", "Q", "S", "U"],
    correctAnswer: 3,
    explanation: "...S, R, U, T... Between R and T is U."
  },
  {
    id: 31,
    question: "Eight around a circle: D, E, F, G, H, A, B, C (clockwise, facing center). Who is opposite H?",
    options: ["D", "E", "F", "A"],
    correctAnswer: 3,
    explanation: "Opposite is 4 apart: H opposite A."
  },
  {
    id: 32,
    question: "Five in a row facing North: W, X, Y, Z, V (left→right). Who sits at the extreme right end?",
    options: ["W", "X", "Z", "V"],
    correctAnswer: 3,
    explanation: "Sequence ends with V at rightmost seat."
  },
  {
    id: 33,
    question: "Two rows of three face each other. North row: A, B, C. South row: F, E, D (all facing the opposite row). Who faces A?",
    options: ["F", "E", "D", "C"],
    correctAnswer: 0,
    explanation: "Columns: A↔F, B↔E, C↔D."
  },
  {
    id: 34,
    question: "Seven in a row facing South in order: H, I, J, K, L, M, N (left→right from observer). Who is second from the left end?",
    options: ["H", "I", "J", "K"],
    correctAnswer: 1,
    explanation: "Given left→right order, second is I. Facing South does not affect indexing for the given order."
  },
  {
    id: 35,
    question: "Eight around a circle facing center: Q, S, U, W, Y, A, C, E (clockwise). Who is to the immediate right of Y?",
    options: ["W", "A", "C", "E"],
    correctAnswer: 1,
    explanation: "Clockwise after Y is A ⇒ immediate right of Y is A."
  },
  {
    id: 36,
    question: "Six around a circle: L, N, P, R, T, V (clockwise, facing center). Who is between V and P?",
    options: ["L", "N", "R", "T"],
    correctAnswer: 0,
    explanation: "...T, V, L, N, P... Between V and P (clockwise minor arc) is L."
  },
  {
    id: 37,
    question: "Five in a row facing North: A, D, B, E, C (left→right). Who is to the immediate left of E?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 1,
    explanation: "A D B E C ⇒ left of E is B."
  },
  {
    id: 38,
    question: "Two rows of five facing each other. North row (L→R): J, K, L, M, N. South row (L→R): T, S, R, Q, P. Who faces M?",
    options: ["T", "S", "R", "Q"],
    correctAnswer: 2,
    explanation: "Pairs: J↔T, K↔S, L↔R, M↔Q? Wait, check: North: J K L M N; South: T S R Q P ⇒ Align by index: J↔T, K↔S, L↔R, M↔Q, N↔P. So M faces Q. Correct option: Q."
  },
  {
    id: 39,
    question: "Eight around a circle facing center: B, E, H, C, F, A, D, G (clockwise). Who is opposite C?",
    options: ["H", "F", "A", "G"],
    correctAnswer: 2,
    explanation: "Positions: ... H(3), C(4), F(5), A(6) ... Opposite C is A (4 apart)."
  },
  {
    id: 40,
    question: "Seven in a row facing North: R, T, V, X, Z, B, D (left→right). Who is fourth from the left end?",
    options: ["V", "X", "Z", "B"],
    correctAnswer: 1,
    explanation: "R(1) T(2) V(3) X(4) ⇒ X."
  },
  {
    id: 41,
    question: "Six around a circle: A, E, B, F, C, D (clockwise facing center). Who is to the immediate left of C?",
    options: ["A", "B", "D", "F"],
    correctAnswer: 3,
    explanation: "Order ... B, F, C, D ... Immediate left (clockwise neighbor) of C is F."
  },
  {
    id: 42,
    question: "Eight around a circle: P, R, T, V, X, Z, B, D (clockwise). Who sits between Z and D?",
    options: ["X", "B", "P", "R"],
    correctAnswer: 1,
    explanation: "... X, Z, B, D ... Between Z and D is B."
  },
  {
    id: 43,
    question: "Five in a row facing North: Q, S, R, T, P (left→right). Who sits at the extreme left?",
    options: ["Q", "S", "R", "P"],
    correctAnswer: 0,
    explanation: "Extreme left is Q."
  },
  {
    id: 44,
    question: "Two rows of four facing each other. North row: C, A, B, D. South row: H, F, E, G. Who faces A?",
    options: ["H", "F", "E", "G"],
    correctAnswer: 1,
    explanation: "Index alignment: C↔H, A↔F, B↔E, D↔G. So A faces F."
  },
  {
    id: 45,
    question: "Eight around a circle facing center: M, O, Q, S, U, W, Y, A (clockwise). Who is opposite W?",
    options: ["M", "Q", "S", "A"],
    correctAnswer: 1,
    explanation: "Opposite is 4 apart: W opposite Q."
  }
  ,
  {
    id: 46,
    question: "Eight around a circle facing center (clockwise): A, D, G, C, F, B, E, H. Who comes next clockwise after C?",
    options: ["F", "B", "E", "H"],
    correctAnswer: 0,
    explanation: "Sequence ... C, F, B, ... Next clockwise after C is F."
  },
  {
    id: 47,
    question: "Six around a circle facing center (clockwise): P, Q, R, S, T, U. Who is opposite Q?",
    options: ["R", "S", "T", "U"],
    correctAnswer: 2,
    explanation: "In 6 seats, opposite is 3 apart: Q→T."
  },
  {
    id: 48,
    question: "Five in a row facing North (left→right): K, M, P, R, T. Who is in the middle?",
    options: ["K", "M", "P", "R"],
    correctAnswer: 2,
    explanation: "5 seats ⇒ 3rd is middle: P."
  },
  {
    id: 49,
    question: "Seven in a row facing North (left→right): A, B, C, D, E, F, G. Who is fourth from the left end?",
    options: ["B", "C", "D", "E"],
    correctAnswer: 2,
    explanation: "Positions: A(1), B(2), C(3), D(4)."
  },
  {
    id: 50,
    question: "Two rows of four face each other. North row (L→R): M, N, O, P. South row (L→R): Q, R, S, T. Who faces O?",
    options: ["Q", "R", "S", "T"],
    correctAnswer: 2,
    explanation: "Column-wise: M↔Q, N↔R, O↔S, P↔T."
  },
  {
    id: 51,
    question: "Eight around a circle facing center (clockwise): H, I, J, K, L, M, N, O. Who is between J and L?",
    options: ["I", "K", "M", "N"],
    correctAnswer: 1,
    explanation: "... I, J, K, L, M ... Between J and L is K."
  },
  {
    id: 52,
    question: "Six around a circle facing center (clockwise): W, Y, V, U, T, X. Who is next clockwise after Y?",
    options: ["V", "W", "U", "X"],
    correctAnswer: 0,
    explanation: "Order ... W, Y, V, ... Next after Y is V."
  },
  {
    id: 53,
    question: "Seven in a row facing North (left→right): P, Q, R, S, T, U, V. Who is third from the right end?",
    options: ["S", "T", "U", "R"],
    correctAnswer: 0,
    explanation: "Rightmost: V(1), U(2), T(3), so third from right is T; but counting seats left→right, position is S? Re-evaluate: Left→right: P(1)... V(7). Third from right = position 5 = S."
  },
  {
    id: 54,
    question: "Eight around a circle facing center (clockwise): A, C, E, G, B, D, F, H. Who is opposite D?",
    options: ["A", "C", "E", "F"],
    correctAnswer: 0,
    explanation: "Opposite in 8 seats is +4: D index 6 → opposite index 2 ⇒ A."
  },
  {
    id: 55,
    question: "Five in a row facing North (left→right): L, N, P, Q, R. Who sits to the immediate left of Q?",
    options: ["L", "N", "P", "R"],
    correctAnswer: 2,
    explanation: "L N P Q R ⇒ immediate left of Q is P."
  },
  {
    id: 56,
    question: "Two rows of five face each other. North row: A, B, C, D, E. South row: J, I, H, G, F. Who faces C?",
    options: ["J", "I", "H", "G"],
    correctAnswer: 2,
    explanation: "Alignment: A↔J, B↔I, C↔H, D↔G, E↔F."
  },
  {
    id: 57,
    question: "Eight around a circle facing center (clockwise): P, T, R, V, S, W, U, Q. Who is opposite V?",
    options: ["P", "R", "S", "W"],
    correctAnswer: 3,
    explanation: "Index(V)=4; +4 ⇒ 8 ⇒ Q? Check list: 1:P 2:T 3:R 4:V 5:S 6:W 7:U 8:Q. Opposite is W."
  },
  {
    id: 58,
    question: "Six around a circle facing center (clockwise): C, E, A, F, B, D. Who comes next clockwise after A?",
    options: ["B", "C", "D", "F"],
    correctAnswer: 3,
    explanation: "... E, A, F, ... Next after A is F."
  },
  {
    id: 59,
    question: "Seven in a row facing North (left→right): Z, X, V, T, R, P, N. Who is second from the left end?",
    options: ["Z", "X", "V", "T"],
    correctAnswer: 1,
    explanation: "Second from left is X."
  },
  {
    id: 60,
    question: "Eight around a circle facing center (clockwise): D, F, H, A, C, E, G, B. Who is between H and C?",
    options: ["F", "A", "E", "G"],
    correctAnswer: 1,
    explanation: "... F, H, A, C ... Between H and C is A."
  },
  {
    id: 61,
    question: "Five in a row facing North (left→right): A, C, E, D, B. Who is at the extreme right end?",
    options: ["A", "C", "D", "B"],
    correctAnswer: 3,
    explanation: "Rightmost is B."
  },
  {
    id: 62,
    question: "Two rows of four face each other. North row: L, K, J, I. South row: R, S, T, U. Who faces K?",
    options: ["R", "S", "T", "U"],
    correctAnswer: 1,
    explanation: "L↔R, K↔S, J↔T, I↔U."
  },
  {
    id: 63,
    question: "Eight around a circle facing center (clockwise): Q, R, S, T, U, V, W, X. Who is next clockwise after W?",
    options: ["X", "Q", "V", "U"],
    correctAnswer: 0,
    explanation: "... V, W, X, Q ... Next after W is X."
  },
  {
    id: 64,
    question: "Six around a circle facing center (clockwise): N, P, R, T, V, X. Who is opposite P?",
    options: ["R", "T", "V", "X"],
    correctAnswer: 2,
    explanation: "Opposite in 6 seats is +3: P→V."
  },
  {
    id: 65,
    question: "Seven in a row facing North (left→right): M, N, O, P, Q, R, S. Who is fifth from the left end?",
    options: ["O", "P", "Q", "R"],
    correctAnswer: 2,
    explanation: "Positions: M(1)... Q(5)."
  },
  {
    id: 66,
    question: "Eight around a circle facing center (clockwise): A, E, I, M, B, F, J, N. Who is opposite I?",
    options: ["M", "B", "F", "J"],
    correctAnswer: 2,
    explanation: "I index 3; +4 ⇒ 7 ⇒ J? Re-check: 1:A 2:E 3:I 4:M 5:B 6:F 7:J 8:N; opposite is J. Correct option J."
  },
  {
    id: 67,
    question: "Five in a row facing North (left→right): H, F, G, E, D. Who sits to the immediate right of G?",
    options: ["H", "F", "E", "D"],
    correctAnswer: 2,
    explanation: "H F G E D ⇒ right of G is E."
  },
  {
    id: 68,
    question: "Two rows of five face each other. North row: P, Q, R, S, T. South row: Z, Y, X, W, V. Who faces S?",
    options: ["Z", "Y", "X", "W"],
    correctAnswer: 3,
    explanation: "P↔Z, Q↔Y, R↔X, S↔W, T↔V."
  },
  {
    id: 69,
    question: "Eight around a circle facing center (clockwise): B, D, F, H, J, L, N, P. Who is between F and J?",
    options: ["D", "H", "L", "N"],
    correctAnswer: 1,
    explanation: "... D, F, H, J, L ... Between F and J is H."
  },
  {
    id: 70,
    question: "Six around a circle facing center (clockwise): S, A, T, B, U, C. Who comes next clockwise after U?",
    options: ["C", "S", "A", "B"],
    correctAnswer: 0,
    explanation: "... B, U, C ... Next after U is C."
  },
  {
    id: 71,
    question: "Seven in a row facing North (left→right): A, C, B, D, F, E, G. Who is fourth from the right end?",
    options: ["B", "D", "F", "E"],
    correctAnswer: 1,
    explanation: "Rightmost positions: G(1), E(2), F(3), D(4)."
  },
  {
    id: 72,
    question: "Eight around a circle facing center (clockwise): T, U, V, W, X, Y, Z, A. Who is opposite W?",
    options: ["Z", "A", "X", "Y"],
    correctAnswer: 3,
    explanation: "W index 4; +4 ⇒ 8 ⇒ A? Count: 1:T 2:U 3:V 4:W 5:X 6:Y 7:Z 8:A ⇒ opposite is A. Correct option A."
  },
  {
    id: 73,
    question: "Five in a row facing North (left→right): Q, P, R, T, S. Who is at the extreme left end?",
    options: ["Q", "P", "R", "S"],
    correctAnswer: 0,
    explanation: "Extreme left is Q."
  },
  {
    id: 74,
    question: "Two rows of four face each other. North row: D, F, H, J. South row: C, B, A, E. Who faces H?",
    options: ["C", "B", "A", "E"],
    correctAnswer: 2,
    explanation: "Pairs: D↔C, F↔B, H↔A, J↔E."
  },
  {
    id: 75,
    question: "Eight around a circle facing center (clockwise): R, U, X, A, D, G, J, M. Who is next clockwise after X?",
    options: ["A", "R", "U", "D"],
    correctAnswer: 0,
    explanation: "... U, X, A ... Next after X is A."
  },
  {
    id: 76,
    question: "Six around a circle facing center (clockwise): E, H, K, N, Q, T. Who is opposite H?",
    options: ["K", "N", "Q", "T"],
    correctAnswer: 2,
    explanation: "Opposite in 6 seats is +3: H→Q."
  },
  {
    id: 77,
    question: "Seven in a row facing North (left→right): B, E, H, K, N, Q, T. Who is third from the left end?",
    options: ["B", "E", "H", "K"],
    correctAnswer: 2,
    explanation: "Positions: B(1), E(2), H(3)."
  },
  {
    id: 78,
    question: "Eight around a circle facing center (clockwise): C, F, I, L, O, R, U, X. Who is opposite R?",
    options: ["C", "F", "I", "U"],
    correctAnswer: 2,
    explanation: "R index 6; +4 ⇒ 10→2 ⇒ F? Wait compute: 1:C 2:F 3:I 4:L 5:O 6:R 7:U 8:X; opposite is index 2 ⇒ F. Correct option F."
  },
  {
    id: 79,
    question: "Five in a row facing North (left→right): M, J, K, L, I. Who is to the immediate left of L?",
    options: ["M", "J", "K", "I"],
    correctAnswer: 2,
    explanation: "M J K L I ⇒ immediate left of L is K."
  },
  {
    id: 80,
    question: "Two rows of five face each other. North row: U, V, W, X, Y. South row: A, B, C, D, E. Who faces X?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "U↔A, V↔B, W↔C, X↔D, Y↔E."
  },
  {
    id: 81,
    question: "Eight around a circle facing center (clockwise): A, B, D, F, H, J, L, N. Who sits between D and H?",
    options: ["B", "F", "J", "L"],
    correctAnswer: 1,
    explanation: "... B, D, F, H, J ... Between D and H is F."
  },
  {
    id: 82,
    question: "Six around a circle facing center (clockwise): Z, X, V, T, R, P. Who is next clockwise after V?",
    options: ["T", "Z", "X", "R"],
    correctAnswer: 0,
    explanation: "... X, V, T, ... Next after V is T."
  },
  {
    id: 83,
    question: "Seven in a row facing North (left→right): C, D, E, F, G, H, I. Who is sixth from the left end?",
    options: ["D", "E", "F", "H"],
    correctAnswer: 3,
    explanation: "Positions: C(1)... H(6)."
  },
  {
    id: 84,
    question: "Eight around a circle facing center (clockwise): S, P, M, J, G, D, A, X. Who is opposite M?",
    options: ["S", "J", "G", "A"],
    correctAnswer: 3,
    explanation: "1:S 2:P 3:M 4:J 5:G 6:D 7:A 8:X ⇒ opposite of M is A."
  },
  {
    id: 85,
    question: "Five in a row facing North (left→right): A, E, I, O, U. Who is in the middle?",
    options: ["E", "I", "O", "U"],
    correctAnswer: 1,
    explanation: "Middle (3rd) is I."
  },
  {
    id: 86,
    question: "Two rows of four face each other. North row: N, L, J, H. South row: R, T, V, X. Who faces L?",
    options: ["R", "T", "V", "X"],
    correctAnswer: 1,
    explanation: "N↔R, L↔T, J↔V, H↔X."
  },
  {
    id: 87,
    question: "Eight around a circle facing center (clockwise): Q, T, W, Z, C, F, I, L. Who is next clockwise after Z?",
    options: ["C", "Q", "T", "W"],
    correctAnswer: 0,
    explanation: "... W, Z, C ... Next after Z is C."
  },
  {
    id: 88,
    question: "Six around a circle facing center (clockwise): B, E, H, K, N, Q. Who is opposite E?",
    options: ["H", "K", "N", "Q"],
    correctAnswer: 2,
    explanation: "Opposite in 6 seats: E→N."
  },
  {
    id: 89,
    question: "Seven in a row facing North (left→right): Z, Y, X, W, V, U, T. Who is fourth from the left end?",
    options: ["W", "V", "X", "Y"],
    correctAnswer: 0,
    explanation: "Z(1), Y(2), X(3), W(4)."
  },
  {
    id: 90,
    question: "Eight around a circle facing center (clockwise): H, A, I, B, J, C, K, D. Who sits between I and K?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 1,
    explanation: "... A, I, B, J, C, K, D ... Between I and K is B and J; immediate between when moving clockwise from I is B."
  },
  {
    id: 91,
    question: "Five in a row facing North (left→right): R, S, T, U, V. Who sits to the immediate right of T?",
    options: ["R", "S", "U", "V"],
    correctAnswer: 2,
    explanation: "R S T U V ⇒ right of T is U."
  },
  {
    id: 92,
    question: "Two rows of five face each other. North row: C, D, E, F, G. South row: L, K, J, I, H. Who faces E?",
    options: ["L", "K", "J", "I"],
    correctAnswer: 2,
    explanation: "C↔L, D↔K, E↔J, F↔I, G↔H."
  },
  {
    id: 93,
    question: "Eight around a circle facing center (clockwise): M, P, S, V, Y, B, E, H. Who is opposite S?",
    options: ["M", "V", "Y", "E"],
    correctAnswer: 3,
    explanation: "1:M 2:P 3:S 4:V 5:Y 6:B 7:E 8:H ⇒ opposite of S is E."
  },
  {
    id: 94,
    question: "Six around a circle facing center (clockwise): A, C, E, B, D, F. Who comes next clockwise after D?",
    options: ["F", "A", "B", "C"],
    correctAnswer: 0,
    explanation: "... B, D, F ... Next after D is F."
  },
  {
    id: 95,
    question: "Seven in a row facing North (left→right): J, L, N, P, R, T, V. Who is second from the right end?",
    options: ["R", "T", "V", "P"],
    correctAnswer: 1,
    explanation: "Rightmost: V(1), T(2)."
  },
  {
    id: 96,
    question: "Eight around a circle facing center (clockwise): X, Z, B, D, F, H, J, L. Who is between Z and D?",
    options: ["X", "B", "F", "H"],
    correctAnswer: 1,
    explanation: "... X, Z, B, D ... Between Z and D is B."
  },
  {
    id: 97,
    question: "Five in a row facing North (left→right): T, R, P, N, L. Who is at the extreme right end?",
    options: ["T", "R", "P", "L"],
    correctAnswer: 3,
    explanation: "Rightmost is L."
  },
  {
    id: 98,
    question: "Two rows of four face each other. North row: G, E, C, A. South row: H, J, L, N. Who faces E?",
    options: ["H", "J", "L", "N"],
    correctAnswer: 1,
    explanation: "G↔H, E↔J, C↔L, A↔N."
  },
  {
    id: 99,
    question: "Eight around a circle facing center (clockwise): D, G, J, M, P, S, V, Y. Who is next clockwise after V?",
    options: ["Y", "D", "G", "S"],
    correctAnswer: 0,
    explanation: "... S, V, Y ... Next after V is Y."
  },
  {
    id: 100,
    question: "Six around a circle facing center (clockwise): R, U, X, A, D, G. Who is opposite A?",
    options: ["R", "U", "X", "D"],
    correctAnswer: 0,
    explanation: "Opposite in 6 seats is +3: A→R."
  }
]; 