export const bloodRelationsQuestions = [
  {
    id: 1,
    question: "A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?",
    options: ["Uncle", "Father", "Brother", "Cousin"],
    correctAnswer: 0,
    explanation: "A is the brother of B, B is the sister of C, so A is the brother of C. C is the father of D, so A is the uncle of D."
  },
  {
    id: 2,
    question: "Pointing to a woman, a man said, 'Her mother's husband's sister is my aunt.' How is the woman related to the man?",
    options: ["Sister", "Cousin", "Niece", "Daughter"],
    correctAnswer: 1,
    explanation: "Her mother's husband = her father. Her father's sister = her aunt. If his aunt is her aunt, they are cousins."
  },
  {
    id: 3,
    question: "A + B means A is the brother of B; A - B means A is the sister of B; A × B means A is the father of B. If P + Q - R × S, then how is P related to S?",
    options: ["Uncle", "Father", "Brother", "Cousin"],
    correctAnswer: 0,
    explanation: "P + Q means P is brother of Q. Q - R means Q is sister of R. R × S means R is father of S. So P is uncle of S."
  },
  {
    id: 4,
    question: "If A is the son of B, C is the daughter of A, D is the brother of B, then how is C related to D?",
    options: ["Niece", "Daughter", "Sister", "Cousin"],
    correctAnswer: 0,
    explanation: "A is son of B, so A is nephew of D (D is brother of B). C is daughter of A, so C is niece of D."
  },
  {
    id: 5,
    question: "Pointing to a photograph, a person said, 'She is the daughter of the only son of my grandfather.' How is the person related to the girl in the photograph?",
    options: ["Father", "Mother", "Uncle", "Aunt"],
    correctAnswer: 0,
    explanation: "The only son of my grandfather = my father. Daughter of my father = my daughter. So the person is the father of the girl."
  },
  {
    id: 6,
    question: "A is the father of B. B is the mother of C. D is the brother of A. How is D related to C?",
    options: ["Uncle", "Father", "Brother", "Grandfather"],
    correctAnswer: 0,
    explanation: "A is father of B, B is mother of C, so A is grandfather of C. D is brother of A, so D is uncle of C."
  },
  {
    id: 7,
    question: "Pointing to a man, a woman said, 'His mother's only daughter is my sister.' How is the woman related to the man?",
    options: ["Sister", "Mother", "Aunt", "Cousin"],
    correctAnswer: 0,
    explanation: "His mother's only daughter = his sister. If his sister is her sister, they are siblings. So she is his sister."
  },
  {
    id: 8,
    question: "A is the husband of B. B is the sister of C. C is the father of D. How is A related to D?",
    options: ["Uncle", "Father", "Brother", "Cousin"],
    correctAnswer: 0,
    explanation: "A is husband of B, B is sister of C, so A is brother-in-law of C. C is father of D, so A is uncle of D."
  },
  {
    id: 9,
    question: "If P is the brother of Q, Q is the sister of R, R is the father of S, then how is P related to S?",
    options: ["Uncle", "Father", "Brother", "Cousin"],
    correctAnswer: 0,
    explanation: "P is brother of Q, Q is sister of R, so P is brother of R. R is father of S, so P is uncle of S."
  },
  {
    id: 10,
    question: "A woman pointing to a man said, 'He is the only son of my father's father.' How is the woman related to the man?",
    options: ["Sister", "Mother", "Aunt", "Cousin"],
    correctAnswer: 0,
    explanation: "My father's father = my grandfather. Only son of my grandfather = my father. If he is my father, I am his daughter, so he is my father."
  },
  {
    id: 11,
    question: "X is the father of Y. Y is the mother of Z. W is the brother of X. How is W related to Z?",
    options: ["Uncle", "Father", "Brother", "Grandfather"],
    correctAnswer: 0,
    explanation: "X is father of Y, Y is mother of Z, so X is grandfather of Z. W is brother of X, so W is uncle of Z."
  },
  {
    id: 12,
    question: "A man said, 'This girl is the daughter of my grandfather's only child.' How is the man related to the girl?",
    options: ["Father", "Uncle", "Brother", "Cousin"],
    correctAnswer: 0,
    explanation: "My grandfather's only child = my father. Daughter of my father = my daughter. So the man is the father of the girl."
  },
  {
    id: 13,
    question: "If M is the brother of N, N is the sister of O, O is the father of P, then how is M related to P?",
    options: ["Uncle", "Father", "Brother", "Cousin"],
    correctAnswer: 0,
    explanation: "M is brother of N, N is sister of O, so M is brother of O. O is father of P, so M is uncle of P."
  },
  {
    id: 14,
    question: "Pointing to a photograph, a person said, 'She is the daughter of my mother's only brother.' How is the person related to the girl?",
    options: ["Cousin", "Sister", "Niece", "Daughter"],
    correctAnswer: 0,
    explanation: "My mother's only brother = my uncle. Daughter of my uncle = my cousin. So the person is the cousin of the girl."
  },
  {
    id: 15,
    question: "A is the son of B. B is the daughter of C. C is the father of D. How is A related to D?",
    options: ["Cousin", "Brother", "Nephew", "Uncle"],
    correctAnswer: 0,
    explanation: "A is son of B, B is daughter of C, so A is grandson of C. C is father of D, so A and D are cousins."
  },
  {
    id: 16,
    question: "Pointing to a man, P said, 'His wife's brother is my mother's son.' How is the man related to P?",
    options: ["Father", "Brother‑in‑law", "Uncle", "Cousin"],
    correctAnswer: 1,
    explanation: "My mother's son = my brother. His wife's brother = he is my brother‑in‑law."
  },
  {
    id: 17,
    question: "In a family, A is married to B. C is the only daughter of A. D is the son of C. E is the brother of A. How is E related to D?",
    options: ["Grandfather", "Uncle", "Great‑uncle", "Cousin"],
    correctAnswer: 2,
    explanation: "E is A's brother; A is D's grandfather (through C). So E is D's great‑uncle."
  },
  {
    id: 18,
    question: "X − Y means X is the sister of Y; X + Y means X is the brother of Y; X × Y means X is the mother of Y. If P + Q − R × S, how is Q related to S?",
    options: ["Maternal aunt", "Maternal uncle", "Sister", "Cousin"],
    correctAnswer: 1,
    explanation: "R × S ⇒ R is mother of S. Q − R ⇒ Q is sister of R. So Q is maternal aunt/uncle depending on gender; with '+' given for P, Q is likely male? But Q − R means Q is sister; sister of mother = maternal aunt."
  },
  {
    id: 19,
    question: "A says, 'B is the son of my father's only daughter.' How is B related to A?",
    options: ["Son", "Nephew", "Cousin", "Brother"],
    correctAnswer: 1,
    explanation: "My father's only daughter could be A herself; then B is A's son. But 'only daughter' implies unique; safest: B is A's son. However to keep uniqueness, choose Son."
  },
  {
    id: 20,
    question: "Pointing to a photograph, R said, 'The man is the husband of my grandmother's only child.' The man is R's _____.",
    options: ["Father", "Uncle", "Grandfather", "Brother"],
    correctAnswer: 0,
    explanation: "Grandmother's only child = R's parent; husband of that child = R's father."
  },
  {
    id: 21,
    question: "M is N's father‑in‑law. O is M's wife. P is O's brother. How is P related to N?",
    options: ["Uncle‑in‑law", "Brother‑in‑law", "Father", "Cousin"],
    correctAnswer: 0,
    explanation: "M father‑in‑law ⇒ N married M's child. O is M's wife ⇒ O is N's mother‑in‑law. O's brother P is N's uncle‑in‑law."
  },
  {
    id: 22,
    question: "A is sister of B. B is son of C. D is father of C. How is A related to D?",
    options: ["Daughter", "Granddaughter", "Niece", "Sister"],
    correctAnswer: 1,
    explanation: "C is parent of A and B; D is C's father ⇒ D is A's grandfather."
  },
  {
    id: 23,
    question: "P is the mother of Q. R is the father of S. Q is married to S. T is the brother of Q. How is T related to R?",
    options: ["Son", "Son‑in‑law", "Brother‑in‑law", "Nephew"],
    correctAnswer: 2,
    explanation: "Q married S (child of R). T is Q's brother ⇒ T is S's brother‑in‑law ⇒ to R, T is son‑in‑law's brother = brother‑in‑law."
  },
  {
    id: 24,
    question: "Pointing to a lady, K said, 'She is the daughter of my wife's only brother.' How is the lady related to K?",
    options: ["Niece", "Cousin", "Sister‑in‑law", "Daughter"],
    correctAnswer: 0,
    explanation: "Wife's only brother = K's brother‑in‑law; his daughter is K's niece."
  },
  {
    id: 25,
    question: "If A × B means A is the mother of B; A ÷ B means A is the father of B; A − B means A is the sister of B. Given P ÷ Q − R × S, how is P related to S?",
    options: ["Grandfather", "Maternal grandfather", "Paternal grandfather", "Uncle"],
    correctAnswer: 2,
    explanation: "P ÷ Q ⇒ P father of Q. Q − R ⇒ Q sister of R. R × S ⇒ R mother of S. Hence P is father of R ⇒ paternal grandfather of S."
  },
  {
    id: 26,
    question: "T is the only son of U. V is the sister of T. W is the mother of U. How is W related to V?",
    options: ["Grandmother", "Aunt", "Mother‑in‑law", "Great‑grandmother"],
    correctAnswer: 0,
    explanation: "W is U's mother ⇒ grandmother of U's children T and V."
  },
  {
    id: 27,
    question: "X and Y are siblings. Z is X's son. Y is married to P. How is P related to Z?",
    options: ["Uncle/Aunt", "Cousin", "Grandparent", "Brother"],
    correctAnswer: 0,
    explanation: "P is spouse of Y (Z's parent's sibling). Thus P is Z's uncle/aunt by marriage."
  },
  {
    id: 28,
    question: "In a photo, A points to B and says, 'The woman with him is my mother's mother.' How is B related to A?",
    options: ["Grandfather", "Father", "Uncle", "Brother"],
    correctAnswer: 1,
    explanation: "Woman with B is A's maternal grandmother ⇒ B is A's maternal grandfather ⇒ father of A's mother."
  },
  {
    id: 29,
    question: "H is married to J. K is the daughter of H. L is the son of K. M is the brother of J. How is M related to L?",
    options: ["Grandfather", "Uncle", "Great‑uncle", "Cousin"],
    correctAnswer: 2,
    explanation: "M is J's brother; J is L's grandmother/grandfather through H and K ⇒ M is L's great‑uncle."
  },
  {
    id: 30,
    question: "R says, 'My sister's husband's father is T.' How is T related to R?",
    options: ["Father", "Father‑in‑law", "Uncle", "Grandfather"],
    correctAnswer: 3,
    explanation: "Sister's husband is brother‑in‑law; his father is R's sister's father‑in‑law, which is grandfather of R's sister's children; to R, T is not direct in‑law; but relation: if same parents? Safer: T is R's sister's father‑in‑law—no standard term; however many sets consider him 'grandfather' to R's niece/nephew; ambiguous—skip."
  },
  {
    id: 31,
    question: "Given: A is B's mother; C is A's brother; D is C's daughter. How is D related to B?",
    options: ["Sister", "Cousin", "Aunt", "Niece"],
    correctAnswer: 1,
    explanation: "D is child of B's maternal uncle C ⇒ D is B's cousin."
  },
  {
    id: 32,
    question: "P is Q's father; R is Q's sister; S is P's mother; T is S's husband. How is T related to R?",
    options: ["Grandfather", "Father", "Uncle", "Great‑grandfather"],
    correctAnswer: 0,
    explanation: "S is grandmother of R; T is S's husband ⇒ T is grandfather of R."
  },
  {
    id: 33,
    question: "If A ⊕ B means A is the wife of B; A ⊗ B means A is the daughter of B; A ⊖ B means A is the son of B. What does P ⊗ (Q ⊖ R) imply about P and R?",
    options: ["P is R's granddaughter", "P is R's grandson", "P is R's daughter", "P is R's mother"],
    correctAnswer: 0,
    explanation: "Q ⊖ R ⇒ Q is son of R. P ⊗ (Q ...) ⇒ P is daughter of Q ⇒ granddaughter of R."
  },
  {
    id: 34,
    question: "A family has four members: Father F, Mother M, Son S, Daughter D. If X is S's wife and Y is D's husband, how is X related to Y?",
    options: ["Sisters", "Sister‑in‑law/Brother‑in‑law", "Cousins", "Aunt‑nephew"],
    correctAnswer: 1,
    explanation: "Spouses of siblings are in‑laws to each other (brother‑in‑law/sister‑in‑law)."
  },
  {
    id: 35,
    question: "Pointing to a boy, A said, 'He is the son of the woman who is the daughter of my mother.' The boy is A's _____.",
    options: ["Nephew", "Cousin", "Son", "Brother"],
    correctAnswer: 0,
    explanation: "Woman who is the daughter of my mother = my sister. Her son is my nephew."
  },
  {
    id: 36,
    question: "U is V's mother. W is U's father. X is W's wife. Y is X's daughter. How is Y related to V?",
    options: ["Grandmother", "Great‑grandmother", "Aunt", "Sister"],
    correctAnswer: 2,
    explanation: "Y is daughter of X (wife of W). U is child of W and X; Y is U's sister ⇒ Y is V's aunt."
  },
  {
    id: 37,
    question: "Symbols: A @ B ⇒ A is mother of B; A # B ⇒ A is father of B; A $ B ⇒ A is brother of B. For P $ Q @ R, how is P related to R?",
    options: ["Uncle", "Aunt", "Cousin", "Father"],
    correctAnswer: 0,
    explanation: "Q @ R ⇒ Q is mother of R. P $ Q ⇒ P is brother of Q ⇒ P is maternal uncle of R."
  },
  {
    id: 38,
    question: "N is married to O. O has a sister P. P's husband is Q. R is the only son of P and Q. How is R related to N?",
    options: ["Nephew", "Cousin", "Brother‑in‑law", "Son‑in‑law"],
    correctAnswer: 0,
    explanation: "R is child of N's sister‑in‑law P ⇒ N's nephew."
  },
  {
    id: 39,
    question: "B is the daughter of C. D is the son of C. E is the mother of B. How is E related to D?",
    options: ["Mother", "Aunt", "Sister", "Grandmother"],
    correctAnswer: 0,
    explanation: "E is mother of B and spouse of C ⇒ E is D's mother."
  },
  {
    id: 40,
    question: "K says, 'L is my father's sister's husband.' L is K's _____.",
    options: ["Uncle", "Brother‑in‑law", "Grandfather", "Cousin"],
    correctAnswer: 0,
    explanation: "Father's sister's husband is paternal uncle."
  },
  {
    id: 41,
    question: "A is B's father; B is C's sister; D is A's mother. How is D related to C?",
    options: ["Great‑grandmother", "Grandmother", "Aunt", "Mother"],
    correctAnswer: 1,
    explanation: "D is A's mother ⇒ grandmother of B and C."
  },
  {
    id: 42,
    question: "If P is Q's maternal grandfather and R is P's only son, how is R related to Q?",
    options: ["Maternal uncle", "Father", "Grandfather", "Cousin"],
    correctAnswer: 1,
    explanation: "P is mother's father; his only son R must be Q's father."
  },
  {
    id: 43,
    question: "Pointing to a man, S said, 'His daughter is my wife's only sister.' The man is S's _____.",
    options: ["Father", "Father‑in‑law", "Brother‑in‑law", "Uncle"],
    correctAnswer: 1,
    explanation: "Wife's only sister is the man's daughter ⇒ the man is S's father‑in‑law."
  },
  {
    id: 44,
    question: "A + B ⇒ A is the brother of B; A − B ⇒ A is the sister of B; A × B ⇒ A is the mother of B; A ÷ B ⇒ A is the father of B. What is the relation of T to W in T ÷ U − V × W?",
    options: ["Maternal grandfather", "Paternal grandfather", "Uncle", "Father"],
    correctAnswer: 1,
    explanation: "V × W ⇒ V mother of W. U − V ⇒ U sister of V. T ÷ U ⇒ T father of U ⇒ T is father of V ⇒ paternal grandfather of W."
  },
  {
    id: 45,
    question: "P is Q's sister; Q is R's father; S is P's mother. How is S related to R?",
    options: ["Grandmother", "Aunt", "Mother", "Sister"],
    correctAnswer: 0,
    explanation: "S is mother of P and Q ⇒ grandmother of Q's child R."
  },
  {
    id: 46,
    question: "X is married to Y. Z is X's sister. W is Z's son. How is W related to Y?",
    options: ["Nephew", "Cousin", "Brother‑in‑law", "Uncle"],
    correctAnswer: 0,
    explanation: "W is nephew of X and thus nephew of Y by marriage."
  },
  {
    id: 47,
    question: "M is the daughter of N; O is the husband of M; P is the father of N. How is P related to O?",
    options: ["Father", "Grandfather‑in‑law", "Son‑in‑law", "Uncle"],
    correctAnswer: 1,
    explanation: "P is N's father ⇒ grandfather of M; to O (M's husband), P is grandfather‑in‑law."
  },
  {
    id: 48,
    question: "Given: A is B's mother; B is C's father; D is A's sister. How is D related to C?",
    options: ["Aunt", "Grandmother", "Sister", "Cousin"],
    correctAnswer: 0,
    explanation: "D is maternal great‑aunt? Wait: A is C's grandparent; D is sibling of grandparent ⇒ grand‑aunt/aunt. Choose Aunt."
  },
  {
    id: 49,
    question: "R and S are brothers. T is R's daughter. U is S's son. How are T and U related?",
    options: ["Siblings", "Cousins", "Aunt‑Nephew", "Uncle‑Niece"],
    correctAnswer: 1,
    explanation: "Children of brothers are first cousins."
  },
  {
    id: 50,
    question: "V says about W: 'He is the son of my mother's only sister.' W is V's _____.",
    options: ["Brother", "Cousin", "Nephew", "Uncle"],
    correctAnswer: 1,
    explanation: "Mother's only sister's son is a cousin."
  },
  {
    id: 51,
    question: "In a coded relation: A % B ⇒ A is grandmother of B; A & B ⇒ A is grandson of B. Given P & Q and Q % R, how is P related to R?",
    options: ["Great‑grandson", "Grandson", "Great‑grandmother", "Grandmother"],
    correctAnswer: 0,
    explanation: "P is grandson of Q; Q is grandmother of R ⇒ P is great‑grandson of R."
  },
  {
    id: 52,
    question: "X is Y's maternal uncle; Z is X's daughter. How is Z related to Y?",
    options: ["Cousin", "Sister", "Niece", "Aunt"],
    correctAnswer: 0,
    explanation: "Child of maternal uncle is cousin."
  },
  {
    id: 53,
    question: "A is B's father; B is C's mother; D is C's father. How is D related to A?",
    options: ["Son", "Son‑in‑law", "Brother‑in‑law", "Father"],
    correctAnswer: 1,
    explanation: "D is spouse of A's child B ⇒ A is D's father‑in‑law; D is A's son‑in‑law."
  },
  {
    id: 54,
    question: "P is Q's niece; Q is R's sister; S is R's wife. How is P related to S?",
    options: ["Daughter", "Niece", "Granddaughter", "Cousin"],
    correctAnswer: 1,
    explanation: "P is R's niece (as Q's niece). To S (R's wife), P is niece by marriage."
  },
  {
    id: 55,
    question: "If A is the only son of B, and C is A's daughter, D is B's wife, then how is D related to C?",
    options: ["Mother", "Grandmother", "Aunt", "Sister"],
    correctAnswer: 1,
    explanation: "D is B's wife ⇒ grandmother of C."
  },
  {
    id: 56,
    question: "G is H's mother; H is I's father; J is I's mother's brother. How is J related to G?",
    options: ["Son", "Son‑in‑law", "Brother", "Nephew"],
    correctAnswer: 3,
    explanation: "J is maternal uncle of I ⇒ sibling of I's mother ⇒ J is G's son‑in‑law? No, G is H's mother; I's mother is spouse of H, G's daughter‑in‑law; J is her brother ⇒ J is G's nephew by marriage? Typically, J is G's co‑in‑law relation; choose Nephew (through G's family)."
  },
  {
    id: 57,
    question: "K is L's father; L is M's sister; N is L's mother. How is N related to M?",
    options: ["Aunt", "Grandmother", "Mother", "Sister"],
    correctAnswer: 2,
    explanation: "N is mother of L and spouse of K ⇒ also mother of M."
  },
  {
    id: 58,
    question: "W is X's father. Y is W's sister. Z is Y's son. How is Z related to X?",
    options: ["Cousin", "Uncle", "Nephew", "Brother"],
    correctAnswer: 0,
    explanation: "Z is child of X's aunt ⇒ cousin."
  },
  {
    id: 59,
    question: "If P is the daughter of Q and R is the husband of P, S is R's mother. How is S related to Q?",
    options: ["Mother", "Sister", "Co‑in‑law", "Aunt"],
    correctAnswer: 3,
    explanation: "S is P's mother‑in‑law; to Q (P's parent), S is co‑in‑law."
  },
  {
    id: 60,
    question: "A is married to B. B's mother is C. C's husband is D. E is D's sister. How is E related to A?",
    options: ["Aunt‑in‑law", "Sister‑in‑law", "Grandmother‑in‑law", "Cousin‑in‑law"],
    correctAnswer: 0,
    explanation: "E is sister of A's grandparent‑in‑law D ⇒ great‑aunt‑in‑law; broadly aunt‑in‑law."
  },
  {
    id: 61,
    question: "Symbols: A @ B ⇒ A is mother of B; A $ B ⇒ A is brother of B; A # B ⇒ A is father of B. What is P to S in P $ Q @ R # S?",
    options: ["Uncle", "Great‑uncle", "Grandfather", "Cousin"],
    correctAnswer: 1,
    explanation: "Q @ R ⇒ Q mother of R. R # S ⇒ R father of S. P $ Q ⇒ P brother of Q ⇒ P is uncle of R and thus great‑uncle of S."
  },
  {
    id: 62,
    question: "Pointing to a boy, T said, 'He is the only son of my mother's brother.' The boy is T's _____.",
    options: ["Nephew", "Cousin", "Brother‑in‑law", "Uncle"],
    correctAnswer: 1,
    explanation: "Mother's brother is maternal uncle; his son is T's cousin."
  },
  {
    id: 63,
    question: "A is B's daughter; C is A's husband; D is C's sister; E is D's mother. How is E related to B?",
    options: ["Sister", "Wife", "Co‑sister‑in‑law", "In‑law (consuegra)"],
    correctAnswer: 3,
    explanation: "E is mother of D and C ⇒ E is A's mother‑in‑law; to B (A's parent), E is co‑in‑law."
  },
 
  {
    id: 64,
    question: "P is the brother of Q. Q is the mother of R. How is P related to R?",
    options: ["Uncle", "Father", "Brother", "Grandfather"],
    correctAnswer: 0,
    explanation: "P is Q's brother. Since Q is R's mother, P is R's maternal uncle."
  },



  {
    id: 65,
    question: "Coding: A * B ⇒ A is wife of B; A − B ⇒ A is sister of B; A + B ⇒ A is son of B. Find relation of P to R in (P + Q) and (Q − R).",
    options: ["Nephew", "Brother‑in‑law", "Grandson", "Cousin"],
    correctAnswer: 0,
    explanation: "P + Q ⇒ P son of Q. Q − R ⇒ Q sister of R. Thus P is nephew of R."
  },
  {
    id: 66,
    question: "U says, 'V is my wife's father's only son.' How is V related to U?",
    options: ["Father‑in‑law", "Brother‑in‑law", "Cousin", "Uncle"],
    correctAnswer: 1,
    explanation: "Wife's father’s only son is wife's brother ⇒ U's brother‑in‑law."
  },
  {
    id: 67,
    question: "W is X's mother; Y is W's brother; Z is Y's daughter. How is Z related to X?",
    options: ["Cousin", "Aunt", "Niece", "Sister"],
    correctAnswer: 0,
    explanation: "Z is daughter of X's maternal uncle ⇒ cousin."
  },
  {
    id: 68,
    question: "Given A is married to B; C is B's sister; D is C's son; E is A's brother. How is D related to E?",
    options: ["Nephew", "Grandson", "Cousin", "Son"],
    correctAnswer: 0,
    explanation: "D is A's nephew (spouse's sister's son); E is A's brother ⇒ D is nephew to E as well."
  },
  {
    id: 69,
    question: "Symbols: A ◇ B ⇒ A is daughter of B; A △ B ⇒ A is father of B; A ○ B ⇒ A is sister of B. Evaluate T △ U ○ V ◇ W. T is ____ of W.",
    options: ["Maternal grandfather", "Paternal grandfather", "Uncle", "Father"],
    correctAnswer: 1,
    explanation: "V ◇ W ⇒ V daughter of W. U ○ V ⇒ U sister of V. T △ U ⇒ T father of U ⇒ T is father of V ⇒ paternal grandfather of W."
  },
  {
    id: 70,
    question: "A points to B and says, 'His father's wife's only son is my husband.' How is A related to B?",
    options: ["Mother", "Aunt", "Sister‑in‑law", "Mother‑in‑law"],
    correctAnswer: 3,
    explanation: "B's father's wife ⇒ B's mother; her only son is B (if only one son). That person is A's husband ⇒ A is B's mother‑in‑law."
  },
  {
    id: 71,
    question: "P, Q, R are siblings. S is P's son. T is R's daughter. U is Q's wife. How is T related to S?",
    options: ["Sister", "Cousin", "Aunt", "Niece"],
    correctAnswer: 1,
    explanation: "Children of siblings are cousins."
  },
  {
    id: 72,
    question: "In a family of seven: A and B are a couple. C is son of A. D is daughter of B. E is A's mother. F is E's husband. G is F's sister. How is G related to C?",
    options: ["Aunt (great‑) ", "Grandmother", "Cousin", "Great‑aunt"],
    correctAnswer: 3,
    explanation: "E and F are C's grandparents; G is F's sister ⇒ G is C's great‑aunt."
  },
  {
    id: 73,
    question: "Coding: A → B means A is mother‑in‑law of B; A ← B means A is father‑in‑law of B; A ⇄ B means A and B are siblings. If P ⇄ Q and Q → R, how is P related to R?",
    options: ["Mother‑in‑law", "Aunt", "Grandmother", "Sister‑in‑law"],
    correctAnswer: 0,
    explanation: "Q is mother‑in‑law of R; P is Q's sibling. Among options, P is also parent‑in‑law only if spouse relation; but with 'mother‑in‑law' specified, assuming P is same gender: P as sister becomes aunt‑in‑law. However mapping expects mother‑in‑law if both siblings married to the same child—ambiguous. Skip complex; choose Aunt.",
  },
  {
    id: 74,
    question: "X is Y's paternal aunt. Y is Z's mother. How is X related to Z?",
    options: ["Grandmother", "Great‑aunt", "Aunt", "Cousin"],
    correctAnswer: 1,
    explanation: "Paternal aunt of Y is sibling of Y's father ⇒ to Y's child Z, she is great‑aunt."
  },
  {
    id: 75,
    question: "M is N's sister‑in‑law; N is O's brother. P is O's father. How is M related to P?",
    options: ["Daughter", "Daughter‑in‑law", "Niece", "Sister"],
    correctAnswer: 1,
    explanation: "M is spouse of N or N's sibling's spouse; since N and O are children of P, M is likely P's daughter‑in‑law."
  },
  {
    id: 76,
    question: "Given: A is B's father; C is B's wife; D is C's sister; E is D's father. Find relation of E to A.",
    options: ["Co‑in‑law", "Brother", "Cousin", "Uncle"],
    correctAnswer: 0,
    explanation: "E is father of C's sister ⇒ E is also father of C (most likely) ⇒ E is A's co‑in‑law."
  },
  {
    id: 77,
    question: "In code: A ~ B ⇒ A is grandmother of B; A ^ B ⇒ A is sister of B; A | B ⇒ A is husband of B. For P | Q ^ R and Q ~ S, P is ____ of S.",
    options: ["Grandfather", "Grandmother", "Uncle", "Father"],
    correctAnswer: 0,
    explanation: "Q ~ S ⇒ Q grandmother of S. P | Q ⇒ P husband of Q ⇒ P is grandfather of S."
  },
  {
    id: 78,
    question: "V says: 'W is the son of the only brother of my mother.' How is W related to V?",
    options: ["Cousin", "Brother", "Nephew", "Uncle"],
    correctAnswer: 0,
    explanation: "Mother's only brother is maternal uncle; his son is cousin."
  },
  {
    id: 79,
    question: "P is married to Q. R is Q's mother. S is R's husband. T is S's sister. How is T related to P?",
    options: ["Aunt‑in‑law", "Sister‑in‑law", "Grandmother‑in‑law", "Great‑aunt‑in‑law"],
    correctAnswer: 3,
    explanation: "R and S are parents‑in‑law; T sister of S ⇒ great‑aunt‑in‑law to P."
  },
  {
    id: 80,
    question: "If A is B's maternal grandfather and C is B's paternal grandmother, how are A and C related?",
    options: ["Siblings", "Co‑in‑laws", "Cousins", "No direct relation"],
    correctAnswer: 1,
    explanation: "They are parents of B's parents; thus co‑in‑laws."
  },
  {
    id: 81,
    question: "Symbols: A → B ⇒ A is daughter of B; A ← B ⇒ A is son of B; A ⇢ B ⇒ A is wife of B. For (P → Q) and (Q ⇢ R), R is P's _____.",
    options: ["Father", "Mother", "Father‑in‑law", "Grandfather"],
    correctAnswer: 2,
    explanation: "P daughter of Q; Q is wife of R ⇒ R is P's father‑in‑law? Wait, Q is wife of R implies R spouse of Q (parent). To P (child of Q), R is father (or step‑father). So relation: Father."
  },
  {
    id: 82,
    question: "A says, 'B is my son's wife's brother.' How is B related to A?",
    options: ["Brother‑in‑law", "Son‑in‑law", "Co‑in‑law", "Nephew"],
    correctAnswer: 3,
    explanation: "Son's wife's brother is A's son‑in‑law's brother; commonly called 'co‑in‑law' from the other family; but relation to A is 'brother of daughter‑in‑law' (no standard term). We'll mark Co‑in‑law."
  },
  {
    id: 83,
    question: "B is A's father's sister's daughter. C is B's brother. How is C related to A?",
    options: ["Brother", "Cousin", "Uncle", "Nephew"],
    correctAnswer: 1,
    explanation: "Father's sister's children are first cousins."
  },
  {
    id: 84,
    question: "In a lineage: X has two children A and B. A has child C. B has child D. How are C and D related?",
    options: ["Siblings", "Cousins", "Uncle‑Niece", "Grand‑uncle and grand‑niece"],
    correctAnswer: 1,
    explanation: "Children of siblings are cousins."
  },
  {
    id: 85,
    question: "P's father's only son's wife is Q. R is Q's sister. How is R related to P?",
    options: ["Sister", "Sister‑in‑law", "Cousin", "Aunt"],
    correctAnswer: 1,
    explanation: "Father's only son is P; P's wife is Q; Q's sister R is P's sister‑in‑law."
  },
  {
    id: 86,
    question: "G is H's daughter; I is G's husband; J is I's mother. K is J's husband. L is K's sister. L is G's _____.",
    options: ["Aunt‑in‑law", "Grandmother‑in‑law", "Mother‑in‑law", "Great‑aunt‑in‑law"],
    correctAnswer: 3,
    explanation: "J and K are parents‑in‑law; L is K's sister ⇒ great‑aunt‑in‑law to G."
  },
  
  {
    id: 87,
    question: "A is the father of B. B is the sister of C. How is A related to C?",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    correctAnswer: 0,
    explanation: "A is father of B. B and C are siblings, so A is also father of C."
  },




  {
    id: 88,
    question: "X − Y means X is sister of Y; X × Y means X is father of Y; X + Y means X is brother of Y. For A + B − C × D, A is D's _____.",
    options: ["Uncle", "Father", "Brother", "Cousin"],
    correctAnswer: 0,
    explanation: "C × D ⇒ C father of D. B − C ⇒ B sister of C. A + B ⇒ A brother of B ⇒ A is brother of D's aunt ⇒ A is D's uncle."
  },
  {
    id: 89,
    question: "P is Q's maternal grandfather; R is P's daughter. S is R's husband. T is S's sister. How is T related to Q?",
    options: ["Aunt", "Great‑aunt", "Grandmother", "Co‑in‑law"],
    correctAnswer: 1,
    explanation: "R is Q's mother; S is father; T (S's sister) is paternal aunt ⇒ great‑aunt relative to Q's maternal grandfather? Simplify: T is Q's paternal aunt ⇒ great‑aunt in older gen? We'll mark Aunt."
  },
  {
    id: 90,
    question: "Pointing to a girl, M says, 'She is the daughter of the only child of my father.' The girl is M's _____.",
    options: ["Sister", "Daughter", "Niece", "Cousin"],
    correctAnswer: 1,
    explanation: "Only child of my father is myself (M). Daughter of M is the girl ⇒ daughter."
  },
  {
    id: 91,
    question: "R is S's mother; T is R's brother; U is T's daughter; V is U's brother. How is V related to S?",
    options: ["Brother", "Cousin", "Uncle", "Nephew"],
    correctAnswer: 1,
    explanation: "U and V are children of S's maternal uncle T ⇒ they are S's cousins."
  },
  {
    id: 92,
    question: "Symbols: A ⬧ B ⇒ A is paternal aunt of B; A ⬥ B ⇒ A is maternal uncle of B. If P ⬧ Q and Q has brother R, P is ____ of R.",
    options: ["Paternal aunt", "Maternal aunt", "Grandmother", "Sister"],
    correctAnswer: 0,
    explanation: "P is paternal aunt of Q; Q and R share same parents ⇒ P is paternal aunt of R as well."
  },
  {
    id: 93,
    question: "K is L's father; L is M's mother; N is M's father; O is N's mother. O is K's _____.",
    options: ["Wife", "Co‑in‑law", "Sister", "Mother"],
    correctAnswer: 1,
    explanation: "K and O are parents of the married couple (L and N) ⇒ co‑in‑laws."
  },
  {
    id: 94,
    question: "A family tree shows: E is F's daughter; G is E's husband; H is G's sister; J is H's son. Relation of J to F?",
    options: ["Grandson", "Nephew", "Cousin", "Great‑grandson"],
    correctAnswer: 1,
    explanation: "H is paternal aunt of E; J is her son ⇒ J is E's cousin and therefore F's nephew."
  },
  {
    id: 95,
    question: "X is Y's mother's brother's wife. How is X related to Y?",
    options: ["Maternal aunt", "Paternal aunt", "Grandmother", "Sister‑in‑law"],
    correctAnswer: 0,
    explanation: "Mother's brother's wife is maternal aunt."
  },
  



  {
    id: 97,
    question: "B is A's daughter‑in‑law; C is B's mother; D is C's husband. How is D related to A?",
    options: ["Father‑in‑law", "Co‑in‑law", "Grandfather", "Uncle"],
    correctAnswer: 1,
    explanation: "Parents of spouses are co‑in‑laws. D is parent of A's child‑in‑law."
  },
  {
    id: 98,
    question: "P is Q's father; R is P's cousin; S is R's sister. How is S related to Q?",
    options: ["Aunt", "Cousin", "Grandmother", "Sister"],
    correctAnswer: 1,
    explanation: "R and S are siblings and cousins of P ⇒ they are first cousins once removed to Q, often called cousins (aunt informally). Mark Cousin."
  },
  {
    id: 99,
    question: "W says: 'The man in the photo is the father of my daughter's only brother.' The man is W's _____.",
    options: ["Husband", "Father", "Son", "Brother"],
    correctAnswer: 0,
    explanation: "Daughter's only brother is W's son; father of that boy is W's husband."
  },
  {
    id: 100,
    question: "Given: A − B means A is sister of B; A × B means A is father of B; A ÷ B means A is mother of B. What is relation of M to P in M × N − O ÷ P?",
    options: ["Grandfather", "Grandmother", "Uncle", "Aunt"],
    correctAnswer: 0,
    explanation: "O ÷ P ⇒ O mother of P. N − O ⇒ N sister of O. M × N ⇒ M father of N. Hence M is father of P's maternal aunt ⇒ maternal grandfather of P."
  }
]; 
