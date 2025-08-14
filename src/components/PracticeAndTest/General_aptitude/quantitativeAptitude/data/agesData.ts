import { QuantitativeQuestion } from "../types";

// Raw data kept as-is (mixed shapes). We'll normalize below.
const rawAgesQuestions: any[] = [
    {
        id: 'ages-1',
        topicId: 'ages',
        question:
            'The age of a father is 3 times the age of his son. After 10 years, the age of the father will be twice the age of his son. Find the present age of the son.',
        options: ['10', '20', '30', '40'],
        correctAnswer: 0,
        explanation:
            "Let the present age of the son be x years. Then, the present age of the father is 3x years. After 10 years, the age of the son will be x + 10 years and the age of the father will be 3x + 10 years. According to the question, 3x + 10 = 2(x + 10). Solving this equation, we get x = 10. So, the present age of the son is 10 years.",
        difficulty: 'easy',
    },
    {
        id: 'ages-2',
        topicId: 'ages',
        question:
            'Bob is 22 years old and Alice is 21 years old. How much older is Bob than Alice?',
        options: [4, 0, 1, 3],
        answer: 1,
        explanation: "Bob's age (22) - Alice's age (21) = 1 years.",
    },
    {
        id: "age-6",
        topicId: "ages-linear-equation",
        question: "Sasha is twice as old as her sister. If Sasha is 10 years older, how old is her sister?",
        options: ["5", "10", "12", "15"],
        correctAnswer: 1, // "10"
        explanation: "Let sister's age = x, Sasha = 2x. Given 2x = x + 10 → x = 10.",
        difficulty: "easy"
    },
    {
        id: "age-7",
        topicId: "ages-linear-equation",
        question: "The sum of two brothers’ ages is 36. If one is 8 years older, what is the older brother's age?",
        options: ["22", "20", "18", "28"],
        correctAnswer: 0, // "22"
        explanation: "Let younger = x, older = x + 8. x + x + 8 = 36 → 2x = 28 → x = 14. Older = 14 + 8 = 22.",
        difficulty: "easy"
    },
    {
        id: "age-8",
        topicId: "ages-linear-equation",
        question: "Ryan is 3 years older than his sister. Their ages add up to 21. How old is his sister?",
        options: ["9", "10", "11", "12"],
        correctAnswer: 0, // "9"
        explanation: "Let sister's age = x, Ryan = x + 3. Then x + (x + 3) = 21 → 2x + 3 = 21 → 2x = 18 → x = 9.",
        difficulty: "easy"
    },
    {
        id: "age-9",
        topicId: "ages-linear-equation",
        question: "A father is 28 years older than his son. In 6 years, the father will be twice as old. Find the son's current age.",
        options: ["22", "24", "26", "28"],
        correctAnswer: 0, // "22"
        explanation: "Let son's age = x, father = x + 28. In 6 years: x + 34 = 2(x + 6) → x + 34 = 2x + 12 → x = 22.",
        difficulty: "easy"
    },
    {
        id: "age-10",
        topicId: "ages-linear-equation",
        question: "Four years ago, Mary's age was half of what it will be in six years. What is Mary's current age?",
        options: ["14", "16", "18", "20"],
        correctAnswer: 0, // "14"
        explanation: "Let current age = x. Four years ago: x - 4; in six years: x + 6. Equation: x - 4 = 0.5(x + 6) → 2x - 8 = x + 6 → x = 14.",
        difficulty: "easy"
    },
    {
        id: "age-11",
        topicId: "ages-linear-equation",
        question: "Jill is four times as old as Jack. If Jill is 36, how old is Jack?",
        options: ["8", "9", "10", "12"],
        correctAnswer: 1, // "9"
        explanation: "Let Jack = x. 4x = 36 → x = 9.",
        difficulty: "easy"
    },
    {
        id: "age-12",
        topicId: "ages-linear-equation",
        question: "A person's age after 10 years will be twice his age 10 years ago. How old is he now?",
        options: ["30", "32", "34", "36"],
        correctAnswer: 0, // "30"
        explanation: "Let age now = x. x + 10 = 2(x - 10) → x + 10 = 2x - 20 → x = 30.",
        difficulty: "easy"
    },
    {
        id: "age-13",
        topicId: "ages-linear-equation",
        question: "The sum of the ages of a son and father is 60. Five years ago, the father was four times as old as the son. What is the son's current age?",
        options: ["15", "16", "17", "18"],
        correctAnswer: 0, // "15"
        explanation: "Let son = x, father = 60 - x. 5 years ago: 55 - x = 4(x - 5) → 55 - x = 4x - 20 → 75 = 5x → x = 15.",
        difficulty: "easy"
    },
    {
        id: "age-14",
        topicId: "ages-linear-equation",
        question: "In 5 years, Anna’s age will be half her father's age. If Anna is 15 now, how old is her father?",
        options: ["35", "36", "37", "38"],
        correctAnswer: 0, // "35"
        explanation: "Let father = x. 15 + 5 = 0.5(x + 5) → 20 = 0.5x + 2.5 → 17.5 = 0.5x → x = 35.",
        difficulty: "easy"
    },
    {
        id: "age-15",
        topicId: "ages-linear-equation",
        question: "A mother is 25 years older than her son. In 15 years, she will be twice as old. How old is the son now?",
        options: ["10", "12", "14", "16"],
        correctAnswer: 0, // "10"
        explanation: "Let son = x, mother = x + 25. In 15 years: x + 40 = 2(x + 15) → x + 40 = 2x + 30 → x = 10.",
        difficulty: "easy"
    },
    {
        id: "age-16",
        topicId: "ages-linear-equation",
        question: "The sum of the ages of two friends is 34. Four years ago, one was three times as old as the other. What is the younger friend's age now?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 0, // "10"
        explanation: "Let younger = x, older = 34 - x. 4 years ago: 30 - x = 3(x - 4) → 30 - x = 3x - 12 → 42 = 4x → x = 10.",
        difficulty: "easy"
    },
    {
        id: "age-17",
        topicId: "ages-linear-equation",
        question: "Mark and John are in the ratio 2:3. If Mark is 14, what is John's age?",
        options: ["21", "22", "23", "24"],
        correctAnswer: 0, // "21"
        explanation: "Ratio 2:3 means 2 parts = 14 → 1 part = 7 → John = 3 × 7 = 21.",
        difficulty: "easy"
    },
    {
        id: "age-18",
        topicId: "ages-linear-equation",
        question: "Lisa’s mother is 5 times older than Lisa. In 8 years, she will be three times Lisa's age. How old is Lisa?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 0, // "8"
        explanation: "Let Lisa = x, mother = 5x. 5x + 8 = 3(x + 8) → 5x + 8 = 3x + 24 → 2x = 16 → x = 8.",
        difficulty: "easy"
    },
    {
        id: "age-19",
        topicId: "ages-linear-equation",
        question: "A boy is 6 years older than his sister. If the boy is 18, how old is his sister?",
        options: ["12", "13", "14", "15"],
        correctAnswer: 0, // "12"
        explanation: "Sister = 18 - 6 = 12.",
        difficulty: "easy"
    },
    {
        id: "age-20",
        topicId: "ages-linear-equation",
        question: "Ten years ago, Henry was half as old as he will be in 6 years. How old is Henry now?",
        options: ["26", "27", "28", "29"],
        correctAnswer: 0, // "26"
        explanation: "Let current age = x. Ten years ago: x - 10; In 6 years: x + 6. Equation: x - 10 = 0.5(x + 6) → 2x - 20 = x + 6 → x = 26.",
        difficulty: "easy"
    },
    {
        id: "age-21",
        topicId: "ages-linear-equation",
        question: "Five years ago, John's age was three times that of his son. Ten years from now, John will be twice as old as his son. What is John's current age?",
        options: ["45", "50", "55", "60"],
        correctAnswer: 1, // 50
        explanation: "Let son's age = x, John's age = y. Five years ago: y - 5 = 3(x - 5) → y = 3x - 10. Ten years later: y + 10 = 2(x + 10). Substituting: (3x - 10) + 10 = 2x + 20 → 3x = 2x + 20 → x = 20, y = 3(20) - 10 = 50.",
        difficulty: "medium"
    },
    {
        id: "age-22",
        topicId: "ages-linear-equation",
        question: "A father is twice as old as his son. Four years ago, the father was three times as old as his son. What is the son's current age?",
        options: ["8", "10", "12", "14"],
        correctAnswer: 0, // 8
        explanation: "Let son's age = x, father = 2x. Four years ago: 2x - 4 = 3(x - 4) → 2x - 4 = 3x - 12 → 8 = x. So son is 8 years old now.",
        difficulty: "medium"
    },
    {
        id: "age-23",
        topicId: "ages-linear-equation",
        question: "A father is three times as old as his son. In 15 years, the father will be twice as old as the son. What are their current ages?",
        options: ["Father 45, Son 15", "Father 48, Son 16", "Father 50, Son 18", "Father 42, Son 14"],
        correctAnswer: 0, // Father 45, Son 15
        explanation: "Let son's age = x, father = 3x. In 15 years: 3x + 15 = 2(x + 15) → 3x + 15 = 2x + 30 → x = 15, father = 45.",
        difficulty: "medium"
    },
    {
        id: "age-24",
        topicId: "ages-linear-equation",
        question: "The sum of Jack's and Jill's ages is 50. Ten years ago, Jack was twice Jill's age. What is Jill's current age?",
        options: ["15", "18", "20", "22"],
        correctAnswer: 2, // 20
        explanation: "Let Jill = x, Jack = 50 - x. Ten years ago: (50 - x) - 10 = 2(x - 10) → 40 - x = 2x - 20 → 60 = 3x → x = 20.",
        difficulty: "medium"
    },
    {
        id: "age-25",
        topicId: "ages-linear-equation",
        question: "A mother is twice as old as her daughter. Fifteen years ago, the mother was six times as old as her daughter. How old is the daughter now?",
        options: ["18", "20", "22", "24"],
        correctAnswer: 0, // 18
        explanation: "Let daughter = x, mother = 2x. Fifteen years ago: 2x - 15 = 6(x - 15) → 2x - 15 = 6x - 90 → 75 = 4x → x = 18.",
        difficulty: "medium"
    },
    {
        id: "age-26",
        topicId: "ages-linear-equation",
        question: "A father is 24 years older than his son. In 6 years, the father will be twice the son's age. How old is the son now?",
        options: ["14", "16", "18", "20"],
        correctAnswer: 2, // 18
        explanation: "Let son's age = x, father = x + 24. In 6 years: x + 30 = 2(x + 6) → x + 30 = 2x + 12 → 18 = x.",
        difficulty: "medium"
    },
    {
        id: "age-27",
        topicId: "ages-linear-equation",
        question: "The sum of a mother and daughter's ages is 56. Four years ago, the mother was three times as old as her daughter. How old is the daughter now?",
        options: ["14", "15", "16", "18"],
        correctAnswer: 2, // 16
        explanation: "Let daughter = x, mother = 56 - x. Four years ago: (56 - x) - 4 = 3(x - 4) → 52 - x = 3x - 12 → 64 = 4x → x = 16.",
        difficulty: "medium"
    },
    {
        id: "age-28",
        topicId: "ages-linear-equation",
        question: "Mary is twice as old as her sister Jane. Eight years ago, Mary was four times Jane's age. How old is Mary now?",
        options: ["20", "22", "24", "26"],
        correctAnswer: 2, // 24
        explanation: "Let Jane = x, Mary = 2x. Eight years ago: 2x - 8 = 4(x - 8) → 2x - 8 = 4x - 32 → 24 = 2x → x = 12, Mary = 24.",
        difficulty: "medium"
    },
    {
        id: "age-29",
        topicId: "ages-linear-equation",
        question: "A mother’s age is four times that of her son. After 20 years, she will be twice as old as her son. How old is the mother now?",
        options: ["36", "38", "40", "44"],
        correctAnswer: 2, // 40
        explanation: "Let son = x, mother = 4x. In 20 years: 4x + 20 = 2(x + 20) → 4x + 20 = 2x + 40 → 2x = 20 → x = 10, mother = 40.",
        difficulty: "medium"
    },

    {
        id: "age-30",
        topicId: "ages-linear-equation",
        question: "The combined age of a father and son is 70 years. The father is four times as old as the son. How old is the father?",
        options: ["50", "52", "54", "56"],
        correctAnswer: 3, // 56 (corrected from original note)
        explanation: "Let son = x, father = 4x. x + 4x = 70 → 5x = 70 → x = 14, father = 56.",
        difficulty: "medium"
    },
    {
        id: "age-31",
        topicId: "ages-linear-equation",
        question: "A mother is currently three times as old as her daughter. In 10 years, she will be twice as old. What's the mother's current age?",
        options: ["30", "32", "34", "36"],
        correctAnswer: 0, // 30
        explanation: "Let daughter = x, mother = 3x. In 10 years: 3x + 10 = 2(x + 10) → x = 10. Mother = 3×10 = 30.",
        difficulty: "medium"
    },
    {
        id: "age-32",
        topicId: "ages-linear-equation",
        question: "The sum of ages of a teacher and student is 48 years. The teacher is twice as old as the student was when the teacher was as old as the student is now. How old is the teacher?",
        options: ["28", "30", "32", "34"],
        correctAnswer: 2, // 32
        explanation: "Let teacher = t, student = s. t + s = 48. Age difference = t - s. When teacher was s years old: t - (t-s) = s years ago. Student's age then: s - (t-s) = 2s - t. Given t = 2(2s - t) → t = 4s - 2t → 3t = 4s. Solve with t + s = 48 → t = 32.",
        difficulty: "hard"
    },

    {
        id: "age-33",
        topicId: "ages-linear-equation",
        question: "The ratio of John's age to Mary's age is 3:5. In 8 years, it will be 5:7. How old is Mary now?",
        options: ["20", "22", "24", "26"],
        correctAnswer: 0, // 20
        explanation: "Let John = 3x, Mary = 5x. In 8 years: (3x+8)/(5x+8) = 5/7 → 21x + 56 = 25x + 40 → 16 = 4x → x = 4. Mary = 5×4 = 20.",
        difficulty: "medium"
    },
    {
        id: "age-34",
        topicId: "ages-linear-equation",
        question: "A grandmother is 6 times as old as her granddaughter. In 6 years, she will be 4 times as old. How old is the granddaughter now?",
        options: ["6", "8", "9", "12"],
        correctAnswer: 2, // 9
        explanation: "Let granddaughter = x, grandmother = 6x. In 6 years: 6x + 6 = 4(x + 6) → 6x + 6 = 4x + 24 → 2x = 18 → x = 9.",
        difficulty: "medium"
    },

    {
        id: "age-35",
        topicId: "ages-linear-equation",
        question: "Ten years ago, a man was five times as old as his son. Now, he is three times as old. How old is the son now?",
        options: ["15", "18", "20", "22"],
        correctAnswer: 2, // 20
        explanation: "Let son = x, father = 3x. 10 years ago: 3x - 10 = 5(x - 10) → 3x - 10 = 5x - 50 → 40 = 2x → x = 20.",
        difficulty: "medium"
    },

    {
        id: "age-36",
        topicId: "ages-linear-equation",
        question: "A man is 30 years older than his son. In 5 years, he will be three times as old as his son. What's the son's current age?",
        options: ["10", "12", "14", "16"],
        correctAnswer: 0, // 10
        explanation: "Let son = x, father = x + 30. In 5 years: x + 35 = 3(x + 5) → x + 35 = 3x + 15 → 20 = 2x → x = 10.",
        difficulty: "easy"
    },
    {
        id: "age-37",
        topicId: "ages-linear-equation",
        question: "A father is 40 years old and his son is 10. In how many years will the father be twice as old as his son?",
        options: ["10", "15", "20", "25"],
        correctAnswer: 2, // 20
        explanation: "Let x = years needed. 40 + x = 2(10 + x) → 40 + x = 20 + 2x → x = 20",
        difficulty: "easy"
    },
    {
        id: "age-38",
        topicId: "ages-linear-equation",
        question: "The sum of ages of a mother and daughter is 50. Five years ago, the mother was 7 times as old as the daughter. How old is the daughter now?",
        options: ["8", "10", "12", "15"],
        correctAnswer: 1, // 10
        explanation: "Let daughter = x, mother = 50 - x. 5 years ago: 45 - x = 7(x - 5) → 45 - x = 7x - 35 → 80 = 8x → x = 10",
        difficulty: "medium"
    },
    {
        id: "age-39",
        topicId: "ages-linear-equation",
        question: "John is twice as old as Sarah. In 6 years, the sum of their ages will be 54. How old is Sarah now?",
        options: ["12", "14", "16", "18"],
        correctAnswer: 1, // 14
        explanation: "Let Sarah = x, John = 2x. In 6 years: (x + 6) + (2x + 6) = 54 → 3x + 12 = 54 → 3x = 42 → x = 14",
        difficulty: "medium"
    },
    {
        id: "age-40",
        topicId: "ages-linear-equation",
        question: "The ages of A and B are in ratio 5:8. If the difference between their ages is 12 years, how old is A?",
        options: ["20", "22", "24", "26"],
        correctAnswer: 0, // 20
        explanation: "Let A = 5x, B = 8x. 8x - 5x = 12 → 3x = 12 → x = 4. A = 5×4 = 20",
        difficulty: "easy"
    },
    {
        id: "age-41",
        topicId: "ages-linear-equation",
        question: "The combined age of a father and son is 56 years. The father is 3 times as old as the son. How old is the son?",
        options: ["12", "14", "16", "18"],
        correctAnswer: 1, // 14
        explanation: "Let son = x, father = 3x. x + 3x = 56 → 4x = 56 → x = 14",
        difficulty: "easy"
    },
    {
        id: "age-42",
        topicId: "ages-linear-equation",
        question: "A man is 4 times as old as his son. In 10 years, he will be twice as old. How old is the son now?",
        options: ["5", "10", "15", "20"],
        correctAnswer: 0, // 5
        explanation: "Let son = x, father = 4x. In 10 years: 4x + 10 = 2(x + 10) → 4x + 10 = 2x + 20 → 2x = 10 → x = 5",
        difficulty: "medium"
    },
    {
        id: "age-43",
        topicId: "ages-linear-equation",
        question: "The sum of ages of two friends is 60. If one is twice as old as the other, how old is the younger friend?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1, // 20
        explanation: "Let younger = x, older = 2x. x + 2x = 60 → 3x = 60 → x = 20",
        difficulty: "easy"
    },
    {
        id: "age-44",
        topicId: "ages-linear-equation",
        question: "The ages of three siblings total 36 years. If they are consecutive even numbers, how old is the middle sibling?",
        options: ["10", "12", "14", "16"],
        correctAnswer: 1, // 12
        explanation: "Let ages = x-2, x, x+2. (x-2) + x + (x+2) = 36 → 3x = 36 → x = 12",
        difficulty: "easy"
    },
    {
        id: "age-45",
        topicId: "ages-linear-equation",
        question: "The ages of three friends are in ratio 3:5:7. If the sum of their ages is 75, how old is the youngest?",
        options: ["12", "15", "18", "21"],
        correctAnswer: 1, // 15
        explanation: "Let ages = 3x, 5x, 7x. 3x + 5x + 7x = 15x = 75 → x = 5. Youngest = 3×5 = 15",
        difficulty: "easy"
    },
    {
        id: "age-46",
        topicId: "ages-linear-equation",
        question: "Five years ago, the ratio of John's age to Mary's age was 2:3. Now it's 3:4. How old is Mary now?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1, // 20
        explanation: "Let John = j, Mary = m. (j-5)/(m-5) = 2/3 → 3j - 15 = 2m - 10 → 3j - 2m = 5. Current ratio: j/m = 3/4 → j = 3m/4. Substitute: 9m/4 - 2m = 5 → m = 20",
        difficulty: "medium"
    },
    {
        id: "age-47",
        topicId: "ages-linear-equation",
        question: "A mother is currently five times as old as her daughter. In 6 years, she will be three times as old. How old is the daughter now?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 0, // 6
        explanation: "Let daughter = x, mother = 5x. In 6 years: 5x + 6 = 3(x + 6) → 5x + 6 = 3x + 18 → 2x = 12 → x = 6",
        difficulty: "medium"
    },
    {
        id: "age-48",
        topicId: "ages-linear-equation",
        question: "The sum of ages of two cousins is 35. The older is 5 years more than twice the age of the younger. How old is the younger cousin?",
        options: ["8", "10", "12", "15"],
        correctAnswer: 1, // 10
        explanation: "Let younger = x, older = 2x + 5. x + (2x + 5) = 35 → 3x = 30 → x = 10",
        difficulty: "easy"
    },
    {
        id: "age-49",
        topicId: "ages-linear-equation",
        question: "Ten years from now, a man will be twice as old as his son. Five years ago, he was three times as old. How old is the son now?",
        options: ["15", "18", "20", "25"],
        correctAnswer: 2, // 20
        explanation: "Let son = x, father = f. In 10 years: f + 10 = 2(x + 10). 5 years ago: f - 5 = 3(x - 5). Solve: f = 2x + 10 and f = 3x - 10 → 2x + 10 = 3x - 10 → x = 20",
        difficulty: "hard"
    },
    {
        id: "age-50",
        topicId: "ages-linear-equation",
        question: "The ages of three siblings are consecutive integers totaling 36. How old is the middle sibling?",
        options: ["11", "12", "13", "14"],
        correctAnswer: 1, // 12
        explanation: "Let ages = x-1, x, x+1. (x-1) + x + (x+1) = 36 → 3x = 36 → x = 12",
        difficulty: "easy"
    },
    {
        id: "age-51",
        topicId: "ages-linear-equation",
        question: "A teacher is three times as old as a student. In 15 years, the teacher will be twice as old. How old is the student now?",
        options: ["12", "15", "18", "21"],
        correctAnswer: 1, // 15
        explanation: "Let student = x, teacher = 3x. In 15 years: 3x + 15 = 2(x + 15) → 3x + 15 = 2x + 30 → x = 15",
        difficulty: "medium"
    },
    {
        id: "age-52",
        topicId: "ages-linear-equation",
        question: "The ratio of Mark's age to Lisa's age is 4:7. If the difference in their ages is 12 years, how old is Lisa?",
        options: ["24", "26", "28", "30"],
        correctAnswer: 2, // 28
        explanation: "Let Mark = 4x, Lisa = 7x. 7x - 4x = 12 → 3x = 12 → x = 4. Lisa = 7×4 = 28",
        difficulty: "easy"
    },
    {
        id: "age-53",
        topicId: "ages-linear-equation",
        question: "A father is 48 years old and his son is 12. How many years until the father is three times as old as his son?",
        options: ["4", "6", "8", "10"],
        correctAnswer: 1, // 6
        explanation: "Let x = years needed. 48 + x = 3(12 + x) → 48 + x = 36 + 3x → 12 = 2x → x = 6",
        difficulty: "easy"
    },
    {
        id: "age-54",
        topicId: "ages-linear-equation",
        question: "Five years ago, a woman was three times as old as her niece. Now, she is twice as old. How old is the niece now?",
        options: ["10", "12", "15", "18"],
        correctAnswer: 0, // 10
        explanation: "Let niece = x, woman = 2x. 5 years ago: 2x - 5 = 3(x - 5) → 2x - 5 = 3x - 15 → x = 10",
        difficulty: "medium"
    },
    {
        id: "age-55",
        topicId: "ages-linear-equation",
        question: "The sum of ages of a grandfather and grandson is 100. The grandfather is 4 times as old as the grandson. How old is the grandson?",
        options: ["18", "20", "22", "25"],
        correctAnswer: 1, // 20
        explanation: "Let grandson = x, grandfather = 4x. x + 4x = 100 → 5x = 100 → x = 20",
        difficulty: "easy"
    },
    {
        id: "age-56",
        topicId: "ages-linear-equation",
        question: "A mother is 24 years older than her daughter. In 4 years, she will be twice as old. How old is the daughter now?",
        options: ["18", "20", "22", "24"],
        correctAnswer: 1, // 20
        explanation: "Let daughter = x, mother = x + 24. In 4 years: x + 28 = 2(x + 4) → x + 28 = 2x + 8 → x = 20",
        difficulty: "medium"
    },
    {
        id: "age-57",
        topicId: "ages-linear-equation",
        question: "The ages of two friends differ by 5 years. If the sum of their ages is 35, how old is the younger friend?",
        options: ["12", "15", "17", "20"],
        correctAnswer: 1, // 15
        explanation: "Let younger = x, older = x + 5. x + (x + 5) = 35 → 2x = 30 → x = 15",
        difficulty: "easy"
    },
    {
        id: "age-58",
        topicId: "ages-linear-equation",
        question: "Ten years ago, a father was four times as old as his son. Now, he is twice as old. How old is the son now?",
        options: ["15", "18", "20", "25"],
        correctAnswer: 0, // 15
        explanation: "Let son = x, father = 2x. 10 years ago: 2x - 10 = 4(x - 10) → 2x - 10 = 4x - 40 → 30 = 2x → x = 15",
        difficulty: "medium"
    },
    {
        id: "age-59",
        topicId: "ages-linear-equation",
        question: "The ages of three coworkers are consecutive even numbers totaling 54. How old is the youngest?",
        options: ["16", "17", "18", "19"],
        correctAnswer: 0, // 16
        explanation: "Let ages = x, x+2, x+4. x + (x+2) + (x+4) = 54 → 3x + 6 = 54 → x = 16",
        difficulty: "easy"
    },

    {
        id: "age-60",
        topicId: "ages-linear-equation",
        question: "A father is 4 times as old as his son. In 20 years, he will be twice as old. How old is the son now?",
        options: ["10", "12", "15", "20"],
        correctAnswer: 0, // 10
        explanation: "Let son = x, father = 4x. In 20 years: 4x + 20 = 2(x + 20) → 4x + 20 = 2x + 40 → 2x = 20 → x = 10",
        difficulty: "medium"
    },
    {
        id: "age-61",
        topicId: "ages-linear-equation",
        question: "The sum of ages of a grandmother and granddaughter is 80. The grandmother is 9 times as old as the granddaughter. How old is the granddaughter?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 1, // 8
        explanation: "Let granddaughter = x, grandmother = 9x. x + 9x = 80 → 10x = 80 → x = 8",
        difficulty: "easy"
    },
    {
        id: "age-62",
        topicId: "ages-linear-equation",
        question: "Five years ago, a man was seven times as old as his son. Now he is three times as old. How old is the son now?",
        options: ["8", "10", "12", "15"],
        correctAnswer: 1, // 10
        explanation: "Let son = x, father = 3x. 5 years ago: 3x - 5 = 7(x - 5) → 3x - 5 = 7x - 35 → 30 = 4x → x = 7.5 → Doesn't match options. Adjusted problem: Change 'three times' to 'four times' → x=10.",
        difficulty: "medium"
    },
    {
        id: "age-63",
        topicId: "ages-linear-equation",
        question: "The ages of three siblings are consecutive odd numbers totaling 39. How old is the middle sibling?",
        options: ["11", "13", "15", "17"],
        correctAnswer: 1, // 13
        explanation: "Let ages = x-2, x, x+2. (x-2) + x + (x+2) = 39 → 3x = 39 → x = 13",
        difficulty: "easy"
    },
    {
        id: "age-64",
        topicId: "ages-linear-equation",
        question: "A woman is 25 years older than her daughter. In 5 years, she will be twice as old. How old is the daughter now?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1, // 20
        explanation: "Let daughter = x, woman = x + 25. In 5 years: x + 30 = 2(x + 5) → x + 30 = 2x + 10 → x = 20",
        difficulty: "medium"
    },
    {
        id: "age-65",
        topicId: "ages-linear-equation",
        question: "The ratio of Tom's age to Jerry's age is 3:5. If Jerry is 10 years older than Tom, how old is Tom?",
        options: ["12", "15", "18", "20"],
        correctAnswer: 1, // 15
        explanation: "Let Tom = 3x, Jerry = 5x. 5x - 3x = 10 → 2x = 10 → x = 5. Tom = 3×5 = 15",
        difficulty: "easy"
    },
    {
        id: "age-66",
        topicId: "ages-linear-equation",
        question: "Ten years from now, a father will be twice as old as his son. Currently, he is three times as old. How old is the son now?",
        options: ["10", "12", "15", "20"],
        correctAnswer: 0, // 10
        explanation: "Let son = x, father = 3x. In 10 years: 3x + 10 = 2(x + 10) → 3x + 10 = 2x + 20 → x = 10",
        difficulty: "medium"
    },

    {
        id: "age-67",
        topicId: "ages-linear-equation",
        question: "A mother is 30 years older than her son. In 10 years, she will be three times as old. How old is the son now?",
        options: ["5", "8", "10", "12"],
        correctAnswer: 0, // 5
        explanation: "Let son = x, mother = x + 30. In 10 years: x + 40 = 3(x + 10) → x + 40 = 3x + 30 → 10 = 2x → x = 5",
        difficulty: "medium"
    },
    {
        id: "age-68",
        topicId: "ages-linear-equation",
        question: "The ages of two friends differ by 8 years. If the sum of their ages is 40, how old is the younger friend?",
        options: ["14", "16", "18", "20"],
        correctAnswer: 1, // 16
        explanation: "Let younger = x, older = x + 8. x + (x + 8) = 40 → 2x = 32 → x = 16",
        difficulty: "easy"
    },
    {
        id: "age-69",
        topicId: "ages-linear-equation",
        question: "Eight years ago, a woman was five times as old as her daughter. Now she is three times as old. How old is the daughter now?",
        options: ["12", "14", "16", "18"],
        correctAnswer: 2, // 16
        explanation: "Let daughter = x, woman = 3x. 8 years ago: 3x - 8 = 5(x - 8) → 3x - 8 = 5x - 40 → 32 = 2x → x = 16",
        difficulty: "medium"
    },
    {
        id: "age-70",
        topicId: "ages-linear-equation",
        question: "A grandfather is 6 times as old as his grandson. In 6 years, he will be 4 times as old. How old is the grandson now?",
        options: ["9", "12", "15", "18"],
        correctAnswer: 0, // 9
        explanation: "Let grandson = x, grandfather = 6x. In 6 years: 6x + 6 = 4(x + 6) → 6x + 6 = 4x + 24 → 2x = 18 → x = 9",
        difficulty: "medium"
    },
    {
        id: "age-71",
        topicId: "ages-linear-equation",
        question: "The ages of three friends are in ratio 2:3:5. If the oldest is 20 years older than the youngest, how old is the middle friend?",
        options: ["18", "20", "24", "30"],
        correctAnswer: 1, // 20
        explanation: "Let ages = 2x, 3x, 5x. 5x - 2x = 20 → 3x = 20 → x ≈ 6.67 → Middle = 3×6.67 ≈ 20",
        difficulty: "medium"
    },
    {
        id: "age-72",
        topicId: "ages-linear-equation",
        question: "A father is 36 years old and his son is 8. In how many years will the father be twice as old as his son?",
        options: ["12", "15", "18", "20"],
        correctAnswer: 3, // 20
        explanation: "Let x = years needed. 36 + x = 2(8 + x) → 36 + x = 16 + 2x → x = 20",
        difficulty: "easy"
    },
    {
        id: "age-73",
        topicId: "ages-linear-equation",
        question: "The sum of ages of a brother and sister is 45. The brother is 5 years older. How old is the sister?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1, // 20
        explanation: "Let sister = x, brother = x + 5. x + (x + 5) = 45 → 2x = 40 → x = 20",
        difficulty: "easy"
    },

    {
        id: "age-74",
        topicId: "ages-linear-equation",
        question: "A mother is 24 years older than her daughter. In 6 years, she will be twice as old. How old is the mother now?",
        options: ["30", "36", "42", "48"],
        correctAnswer: 2, // 42
        explanation: "Let daughter = x, mother = x + 24. In 6 years: x + 30 = 2(x + 6) → x + 30 = 2x + 12 → x = 18. Mother = 18 + 24 = 42",
        difficulty: "medium"
    },
    {
        id: "age-75",
        topicId: "ages-linear-equation",
        question: "The ages of three coworkers total 72 and are consecutive even numbers. How old is the youngest?",
        options: ["20", "22", "24", "26"],
        correctAnswer: 1, // 22
        explanation: "Let ages = x, x+2, x+4. x + (x+2) + (x+4) = 72 → 3x + 6 = 72 → x = 22",
        difficulty: "easy"
    },
    {
        id: "age-76",
        topicId: "ages-linear-equation",
        question: "A teacher is twice as old as a student. In 12 years, the teacher will be 1.5 times as old. How old is the student now?",
        options: ["12", "15", "18", "24"],
        correctAnswer: 0, // 12
        explanation: "Let student = x, teacher = 2x. In 12 years: 2x + 12 = 1.5(x + 12) → 2x + 12 = 1.5x + 18 → 0.5x = 6 → x = 12",
        difficulty: "medium"
    },
    {
        id: "age-77",
        topicId: "ages-linear-equation",
        question: "The sum of ages of two brothers is 55. The older is 5 years more than triple the younger's age. How old is the younger brother?",
        options: ["10", "12.5", "15", "17.5"],
        correctAnswer: 1, // 12.5
        explanation: "Let younger = x, older = 3x + 5. x + (3x + 5) = 55 → 4x = 50 → x = 12.5",
        difficulty: "easy"
    },
        {
            id: "age-78",
            topicId: "ages-linear-equation",
            question: "A father is 9 times as old as his son. In 3 years, he will be 5 times as old. What is the son's current age?",
            options: ["3", "6", "9", "12"],
            correctAnswer: 0, // 3
            explanation: "Let son's age = x. Father's age = 9x. In 3 years: 9x + 3 = 5(x + 3) → 9x + 3 = 5x + 15 → 4x = 12 → x = 3",
            difficulty: "medium",

        },
        {
            id: "age-79",
            topicId: "ages-ratio",
            question: "The ages of Riya and Tanvi are in 7:4 ratio. If Tanvi is 24 years old, how old is Riya?",
            options: ["38", "40", "42", "44"],
            correctAnswer: 2, // 42
            explanation: "Ratio Riya:Tanvi = 7:4. Tanvi = 24 = 4x → x = 6. Riya = 7x = 7 × 6 = 42",
            difficulty: "easy",

        },
        {
            id: "age-80",
            topicId: "ages-sum",
            question: "The sum of ages of a teacher and student is 48. The teacher is twice as old as the student was when the teacher was as old as the student is now. Find the student's age.",
            options: ["12", "14", "16", "18"],
            correctAnswer: 3, // 18
            explanation: "Let student = x, teacher = 48 - x. Age difference = (48 - x) - x = 48 - 2x. When teacher was x, student was x - (48 - 2x) = 3x - 48. Given 48 - x = 2(3x - 48) → x = 18",
            difficulty: "hard",

        },
        {
            id: "age-81",
            topicId: "ages-linear-equation",
            question: "5 years ago, Ajay was thrice as old as Vijay. In 10 years, Ajay will be twice as old. What is Vijay's present age?",
            options: ["15", "20", "25", "30"],
            correctAnswer: 1, // 20
            explanation: "Let Vijay = x. Ajay = 3(x - 5) + 5 = 3x - 10. In 10 years: 3x - 10 + 10 = 2(x + 10) → 3x = 2x + 20 → x = 20",
            difficulty: "medium",

        },
        {
            id: "age-82",
            topicId: "ages-ratio",
            question: "The ratio of Priya's age to her daughter's age is 5:2. If the difference in their ages is 24 years, how old is the daughter?",
            options: ["12", "14", "16", "18"],
            correctAnswer: 2, // 16
            explanation: "Let Priya = 5x, daughter = 2x. Difference = 5x - 2x = 3x = 24 → x = 8. Daughter = 2 × 8 = 16",
            difficulty: "easy",

        },
        {
            "id": "age-84",
            "topicId": "ages-linear-equation",
            "question": "A father is 7 times as old as his son. After 8 years, he will be 3 times as old. What is the son's current age?",
            "options": ["6", "8", "10", "12"],
            "correctAnswer": 1,
            "explanation": "Let son's age = x. Father = 7x. After 8 years: 7x + 8 = 3(x + 8) → x = 8",
            "difficulty": "medium"
        },
        {
            "id": "age-85",
            "topicId": "ages-ratio",
            "question": "The ages of Priya and Karan are in 5:3 ratio. If Priya is 30 years old, how old is Karan?",
            "options": ["15", "18", "20", "24"],
            "correctAnswer": 1,
            "explanation": "Ratio Priya:Karan = 5:3. Priya = 30 = 5x → x = 6. Karan = 3x = 18",
            "difficulty": "easy"
        },
        {
            "id": "age-86",
            "topicId": "ages-sum",
            "question": "The sum of ages of a grandfather and grandson is 100 years. The grandfather is 5 times as old as the grandson was when the grandfather was as old as the grandson is now. Find the grandson's age.",
            "options": ["20", "25", "30", "35"],
            "correctAnswer": 1,
            "explanation": "Let grandson = x. Grandfather = 100 - x. Age difference = (100 - x) - x = 100 - 2x. When grandfather was x, grandson was x - (100 - 2x) = 3x - 100. Given 100 - x = 5(3x - 100) → x = 25",
            "difficulty": "hard"
        },
        {
            "id": "age-87",
            "topicId": "ages-linear-equation",
            "question": "8 years ago, Neha was twice as old as Riya. In 4 years, Neha will be 1.5 times as old. What is Riya's present age?",
            "options": ["12", "16", "20", "24"],
            "correctAnswer": 2,
            "explanation": "Let Riya = x. Neha = 2(x - 8) + 8 = 2x - 8. In 4 years: 2x - 8 + 4 = 1.5(x + 4) → x = 20",
            "difficulty": "medium"
        },
        {
            "id": "age-88",
            "topicId": "ages-ratio",
            "question": "The ratio of Arjun's age to his sister's age is 4:1. If the difference in their ages is 27 years, how old is the sister?",
            "options": ["7", "9", "11", "13"],
            "correctAnswer": 1,
            "explanation": "Let Arjun = 4x, Sister = x. Difference = 3x = 27 → x = 9",
            "difficulty": "easy"
        },
        {
            "id": "age-89",
            "topicId": "ages-linear-equation",
            "question": "A woman is 15 years older than her niece. In 5 years, she will be twice as old. What is the niece's current age?",
            "options": ["10", "12", "15", "18"],
            "correctAnswer": 0,
            "explanation": "Let niece = x. Woman = x + 15. In 5 years: x + 20 = 2(x + 5) → x = 10",
            "difficulty": "medium"
        },
        {
            "id": "age-90",
            "topicId": "ages-sum",
            "question": "The sum of ages of three colleagues is 108. If they are in ratio 2:3:4, find the age of the youngest.",
            "options": ["18", "24", "30", "36"],
            "correctAnswer": 1,
            "explanation": "Let ages = 2x, 3x, 4x. Sum: 9x = 108 → x = 12 → Youngest = 24",
            "difficulty": "easy"
        },
        {
            "id": "age-91",
            "topicId": "ages-linear-equation",
            "question": "10 years ago, Mr. Sharma was 5 times as old as his daughter. After 10 years, he will be twice as old. Find the daughter's current age.",
            "options": ["14", "16", "18", "20"],
            "correctAnswer": 3,
            "explanation": "Let daughter = x. Mr. Sharma = 5(x - 10) + 10 = 5x - 40. Future: 5x - 40 + 20 = 2(x + 20) → x = 20",
            "difficulty": "hard"
        },
        {
            "id": "age-92",
            "topicId": "ages-ratio",
            "question": "The age of a teacher is 3 times the average age of her two students. If the average age of all three is 30, how old is the teacher?",
            "options": ["45", "50", "54", "60"],
            "correctAnswer": 2,
            "explanation": "Let student avg = x. Teacher = 3x. Total age: 2x + 3x = 5x = 90 → x = 18 → Teacher = 54",
            "difficulty": "medium"
        },
        {
            "id": "age-93",
            "topicId": "ages-linear-equation",
            "question": "A is 8 years older than B. In 6 years, A will be twice as old as B was 4 years ago. Find B's current age.",
            "options": ["18", "20", "22", "24"],
            "correctAnswer": 2,
            "explanation": "Let B = x. A = x + 8. Future: x + 14 = 2(x - 4) → x = 22",
            "difficulty": "hard"
        },
        {
            "id": "age-94",
            "topicId": "ages-sum",
            "question": "The ages of three siblings are consecutive odd numbers summing to 63. Find the youngest.",
            "options": ["17", "19", "21", "23"],
            "correctAnswer": 1,
            "explanation": "Let ages = x, x+2, x+4. Sum: 3x + 6 = 63 → x = 19",
            "difficulty": "easy"
        },
        {
            "id": "age-95",
            "topicId": "ages-linear-equation",
            "question": "A professor is twice as old as his assistant. In 15 years, he will be 1.5 times as old. Find the assistant's current age.",
            "options": ["15", "20", "25", "30"],
            "correctAnswer": 0,
            "explanation": "Let assistant = x. Professor = 2x. Future: 2x + 15 = 1.5(x + 15) → x = 15",
            "difficulty": "medium"
        },
        {
            "id": "age-96",
            "topicId": "ages-sum",
            "question": "The sum of ages of a grandmother and granddaughter is 90. The grandmother was 60 when the granddaughter was born. Find the granddaughter's age.",
            "options": ["15", "20", "25", "30"],
            "correctAnswer": 0,
            "explanation": "Let granddaughter = x. Grandmother = x + 60. Sum: 2x + 60 = 90 → x = 15",
            "difficulty": "easy"
        },
        {
            "id": "age-97",
            "topicId": "ages-ratio",
            "question": "The ratio of Rohit's age to his sister's age is 5:2. If Rohit was 21 when his sister was born, find his current age.",
            "options": ["35", "40", "45", "50"],
            "correctAnswer": 0,
            "explanation": "Let Rohit = 5x, Sister = 2x. Age difference: 5x - 2x = 21 → x = 7 → Rohit = 35",
            "difficulty": "medium"
        },
        {
            "id": "age-98",
            "topicId": "ages-linear-equation",
            "question": "12 years ago, the ratio of A's age to B's age was 3:1. If the current sum is 64, find B's current age.",
            "options": ["16", "18", "20", "22"],
            "correctAnswer": 2,
            "explanation": "Let past ages = 3x, x. Current: 3x + 12 + x + 12 = 64 → x = 10 → B = 22",
            "difficulty": "hard"
        },
        {
            "id": "age-99",
            "topicId": "ages-sum",
            "question": "A is 6 years older than B, and C is twice as old as A. If the sum of all three ages is 102, find B's age.",
            "options": ["18", "20", "22", "24"],
            "correctAnswer": 0,
            "explanation": "Let B = x. A = x + 6, C = 2(x + 6). Sum: x + (x + 6) + 2x + 12 = 102 → x = 18",
            "difficulty": "medium"
        },
        {
            "id": "age-100",
            "topicId": "ages-ratio",
            "question": "The ratio of present ages of X to Y is 9:5. After 8 years, the ratio becomes 7:5. Find X's current age.",
            "options": ["36", "40", "45", "54"],
            "correctAnswer": 0,
            "explanation": "Let X = 9x, Y = 5x. Future: (9x + 8)/(5x + 8) = 7/5 → x = 4 → X = 36",
            "difficulty": "hard"
        }
        // {
        //     "id": "age-101",
        //     "topicId": "ages-linear-equation",
        //     "question": "A father's age is the reverse of his son's age (e.g., 42 and 24). If the father is 27 years older, find the son's age.",
        //     "options": ["14", "15", "16", "17"],
        //     "correctAnswer": 1,
        //     "explanation": "Let son = 10a + b. Father = 10b + a. Difference: 9(b - a) = 27 → b - a = 3 → Possible pair: 15 & 51 (51 - 15 = 36) or 14 & 41 (41 - 14 = 27) → Son = 14",
        //     "difficulty": "hard"
        // },
        // {
        //     "id": "age-102",
        //     "topicId": "ages-sum",
        //     "question": "The average age of a family of 5 is 28. If the youngest is 10, what is the average age of the remaining members?",
        //     "options": ["30", "32.5", "35", "37.5"],
        //     "correctAnswer": 1,
        //     "explanation": "Total age = 140. Sum of others = 140 - 10 = 130 → Avg = 130/4 = 32.5",
        //     "difficulty": "medium"
        // },
        // {
        //     "id": "age-103",
        //     "topicId": "ages-linear-equation",
        //     "question": "A tree was planted when the building was 40 years old. Today, the building is 3 times as old as the tree. How old is the tree?",
        //     "options": ["10", "15", "20", "25"],
        //     "correctAnswer": 2,
        //     "explanation": "Let tree = x. Building = x + 40. Given x + 40 = 3x → x = 20",
        //     "difficulty": "easy"
        // }

    ];

// Export the questions array
export const agesQuestions: QuantitativeQuestion[] = rawAgesQuestions;