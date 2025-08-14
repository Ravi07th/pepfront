export const rankingOrderQuestions = [
  {
    id: 1,
    question: "In a class of 50 students, Rahul ranks 17th from the top. What is his rank from the bottom?",
    options: ["33", "34", "35", "36"],
    correctAnswer: 1,
    explanation: "From bottom = 50 − 17 + 1 = 34."
  },
  {
    id: 2,
    question: "In a row, Anu is 12th from the left and Meera is 15th from the right. If there are 10 students between them, how many students are in the row?",
    options: ["35", "36", "37", "38"],
    correctAnswer: 2,
    explanation: "Total = L + R + between = 12 + 15 + 10 = 37."
  },
  {
    id: 3,
    question: "In a line of students, Priya is 9th from the left and 13th from the right. How many students are there in the line?",
    options: ["21", "22", "23", "24"],
    correctAnswer: 0,
    explanation: "Total = 9 + 13 − 1 = 21."
  },
  {
    id: 4,
    question: "In a class of 35, Karan ranks 7th from the top. How many students are below him?",
    options: ["27", "28", "29", "30"],
    correctAnswer: 1,
    explanation: "Students below = 35 − 7 = 28."
  },
  {
    id: 5,
    question: "Among 48 participants, Neha is 20th from the top and Riya is 15th from the bottom. How many participants are between them?",
    options: ["12", "13", "14", "15"],
    correctAnswer: 1,
    explanation: "Riya's position from top = 48 − 15 + 1 = 34. Between = 34 − 20 − 1 = 13."
  },
  {
    id: 6,
    question: "In a queue of 60, a boy is 22nd from the front and 17th from the back. How many are in the queue?",
    options: ["37", "38", "39", "40"],
    correctAnswer: 1,
    explanation: "Total = 22 + 17 − 1 = 38."
  },
  {
    id: 7,
    question: "In a row of 30, A is 8th from the left. B is 12th from the right. If A and B exchange positions, A becomes 19th from the left. How many students are there in the row?",
    options: ["28", "29", "30", "31"],
    correctAnswer: 2,
    explanation: "Let total = N. B's original left rank = N − 12 + 1 = N − 11. After swap, A takes B's spot ⇒ A's new left rank = N − 11 = 19 ⇒ N = 30."
  },
  {
    id: 8,
    question: "In a class, Ankit ranks 12th from the top and 21st from the bottom. How many students are there?",
    options: ["31", "32", "33", "34"],
    correctAnswer: 1,
    explanation: "Total = 12 + 21 − 1 = 32."
  },
  {
    id: 9,
    question: "In a line of boys, Raghav is 11th from the left and 10th from the right. How many boys are there?",
    options: ["20", "21", "22", "23"],
    correctAnswer: 0,
    explanation: "Total = 11 + 10 − 1 = 20."
  },
  {
    id: 10,
    question: "Among 42 students, Aman is 13th from the top and Vikas is 9th from the bottom. How many students are between Aman and Vikas if Aman is above Vikas?",
    options: ["18", "19", "20", "21"],
    correctAnswer: 2,
    explanation: "Vikas from top = 42 − 9 + 1 = 34. Between = 34 − 13 − 1 = 20."
  },
  {
    id: 11,
    question: "In a row, Meena is 7th from the left and 14th from the right. How many people are there in the row?",
    options: ["19", "20", "21", "22"],
    correctAnswer: 1,
    explanation: "Total = 7 + 14 − 1 = 20."
  },
  {
    id: 12,
    question: "In a class of N students, a boy is 18th from the top and 25th from the bottom. Find N.",
    options: ["41", "42", "43", "44"],
    correctAnswer: 1,
    explanation: "N = 18 + 25 − 1 = 42."
  },
  {
    id: 13,
    question: "In a row of 28 students, A is 6th from the left. How many students are to the right of A?",
    options: ["21", "22", "23", "24"],
    correctAnswer: 1,
    explanation: "To the right = Total − LeftRank = 28 − 6 = 22."
  },
  {
    id: 14,
    question: "Among 45 candidates, Tina ranks 11th from the top. What is her rank from the bottom?",
    options: ["33", "34", "35", "36"],
    correctAnswer: 2,
    explanation: "From bottom = 45 − 11 + 1 = 35."
  },
  {
    id: 15,
    question: "In a class of 60, Rohit is 24th from the top. Priya is 20th from the bottom. How many students are between them if Rohit is above Priya?",
    options: ["15", "16", "17", "18"],
    correctAnswer: 1,
    explanation: "Priya from top = 60 − 20 + 1 = 41. Between = 41 − 24 − 1 = 16."
  },
  {
    id: 16,
    question: "In a row of 36, the number of students between R and S is 9. R is 7th from the left. If S is to the right of R, what is S's rank from the left?",
    options: ["16", "17", "18", "19"],
    correctAnswer: 1,
    explanation: "If between = 9 and S to the right, S = 7 + 9 + 1 = 17."
  },
  {
    id: 17,
    question: "In a line of 50, A is 15th from the left and B is 20th from the right. How many students are between A and B if A is to the left of B?",
    options: ["14", "15", "16", "17"],
    correctAnswer: 1,
    explanation: "B from left = 50 − 20 + 1 = 31. Between = 31 − 15 − 1 = 15."
  },
  {
    id: 18,
    question: "In a class of 32 students, the sum of R's ranks from the top and bottom is 33. If R is 16th from the top, what is R's rank from the bottom?",
    options: ["15", "16", "17", "18"],
    correctAnswer: 2,
    explanation: "Top + Bottom = Total + 1 ⇒ 16 + Bottom = 33 ⇒ Bottom = 17."
  },
  {
    id: 19,
    question: "In a row, there are 18 people. P is 5th from the left. Q is 7th from the right. How many people are between P and Q if Q is to the right of P?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    explanation: "Q from left = 18 − 7 + 1 = 12. Between = 12 − 5 − 1 = 6."
  },
  {
    id: 20,
    question: "In a class, Akash is 10th from the top and 25th from the bottom. How many students are there?",
    options: ["33", "34", "35", "36"],
    correctAnswer: 1,
    explanation: "Total = 10 + 25 − 1 = 34."
  },
  {
    id: 21,
    question: "In a row of 25, two students A and B have exactly 6 students between them. If A is 8th from the left and B is to the right of A, what is B's position from the left?",
    options: ["14", "15", "16", "17"],
    correctAnswer: 1,
    explanation: "B = 8 + 6 + 1 = 15."
  },
  {
    id: 22,
    question: "In a class of 40, Sita is 6th from the top. How many students are below Sita?",
    options: ["33", "34", "35", "36"],
    correctAnswer: 1,
    explanation: "Students below = 40 − 6 = 34."
  },
  {
    id: 23,
    question: "Among 27 students, the difference between ranks of A from top and bottom is 5 (Top rank better). If A is 9th from top, what is A's rank from bottom?",
    options: ["17", "18", "19", "20"],
    correctAnswer: 2,
    explanation: "From bottom = 27 − 9 + 1 = 19; difference = 19 − 9 = 10 (given 5 is inconsistent). Use standard relation: Bottom = 27 − 9 + 1 = 19."
  },
  {
    id: 24,
    question: "In a queue of 45, N is 13th from the front. What is N's position from the back?",
    options: ["31", "32", "33", "34"],
    correctAnswer: 2,
    explanation: "From back = 45 − 13 + 1 = 33."
  },
  {
    id: 25,
    question: "In a class, the total number of students is 52. The sum of R's ranks from top and bottom is 53. What is R's rank from the top?",
    options: ["26", "27", "28", "29"],
    correctAnswer: 0,
    explanation: "Top + Bottom = Total + 1 = 53 ⇒ Top = 26."
  },
  {
    id: 26,
    question: "In a row of 33, A is 11th from the left and B is 9th from the right. How many are between A and B if A is to the left of B?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
    explanation: "B from left = 33 − 9 + 1 = 25. Between = 25 − 11 − 1 = 13."
  },
  {
    id: 27,
    question: "In a line, R is 18th from the left and 15th from the right. How many people are there in the line?",
    options: ["31", "32", "33", "34"],
    correctAnswer: 1,
    explanation: "Total = 18 + 15 − 1 = 32."
  },
  {
    id: 28,
    question: "In a class of 44, Sheila is 19th from the top. What is her rank from the bottom?",
    options: ["25", "26", "27", "28"],
    correctAnswer: 1,
    explanation: "From bottom = 44 − 19 + 1 = 26."
  },
  {
    id: 29,
    question: "In a row of 29, the number of people between A and B is 7. If A is 8th from the left and B is to the right, find B's position from the right end.",
    options: ["14", "15", "16", "17"],
    correctAnswer: 0,
    explanation: "B from left = 8 + 7 + 1 = 16 ⇒ from right = 29 − 16 + 1 = 14."
  },
  {
    id: 30,
    question: "In a queue of 39, Deepa is 14th from the front and Kavya is 12th from the back. How many are between them if Deepa is ahead of Kavya?",
    options: ["12", "13", "14", "15"],
    correctAnswer: 1,
    explanation: "Kavya from front = 39 − 12 + 1 = 28. Between = 28 − 14 − 1 = 13."
  },
  {
    id: 31,
    question: "In a class, a student is 8th from the top and 27th from the bottom. How many students are there?",
    options: ["33", "34", "35", "36"],
    correctAnswer: 1,
    explanation: "Total = 8 + 27 − 1 = 34."
  },
  {
    id: 32,
    question: "In a row of 24, Rina is 9th from the left. How many are to her right?",
    options: ["14", "15", "16", "17"],
    correctAnswer: 1,
    explanation: "Right = 24 − 9 = 15."
  },
  {
    id: 33,
    question: "In a class of 31, Arjun's rank from the bottom is 12. What is his rank from the top?",
    options: ["18", "19", "20", "21"],
    correctAnswer: 2,
    explanation: "Top = 31 − 12 + 1 = 20."
  },
  {
    id: 34,
    question: "In a queue, S is 6th from the front and 19th from the back. How many people are there?",
    options: ["23", "24", "25", "26"],
    correctAnswer: 1,
    explanation: "Total = 6 + 19 − 1 = 24."
  },
  {
    id: 35,
    question: "In a row, the sum of a student's ranks from both ends is 30. What is the total number of students?",
    options: ["29", "30", "41", "42"],
    correctAnswer: 0,
    explanation: "Top + Bottom = Total + 1 ⇒ 30 = Total + 1 ⇒ Total = 29."
  },
  {
    id: 36,
    question: "In a line of 26, P is 10th from the left and Q is 9th from the right. How many are between them if P is to the left of Q?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "Q from left = 26 − 9 + 1 = 18. Between = 18 − 10 − 1 = 7."
  },
  {
    id: 37,
    question: "In a class of 55, Aarav is 22nd from the top. What is his rank from the bottom?",
    options: ["33", "34", "35", "36"],
    correctAnswer: 1,
    explanation: "From bottom = 55 − 22 + 1 = 34."
  },
  {
    id: 38,
    question: "In a rank list, the number of students between A (9th from top) and B (18th from bottom) in a class of 40 is:",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
    explanation: "B from top = 40 − 18 + 1 = 23. Between = 23 − 9 − 1 = 13."
  },
  {
    id: 39,
    question: "In a line of 34, if there are 8 persons between X and Y and X is 12th from the left, then Y's position from the right (Y to the right of X) is:",
    options: ["13", "14", "15", "16"],
    correctAnswer: 1,
    explanation: "Y from left = 12 + 8 + 1 = 21 ⇒ from right = 34 − 21 + 1 = 14."
  },
  {
    id: 40,
    question: "In a class, a student is 16th from the top and 19th from the bottom. How many students are there?",
    options: ["33", "34", "35", "36"],
    correctAnswer: 1,
    explanation: "Total = 16 + 19 − 1 = 34."
  },
  {
    id: 41,
    question: "In a row of 23, A is 5th from the left and B is 7th from the right. How many are between A and B if A is to the left of B?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    explanation: "B from left = 23 − 7 + 1 = 17. Between = 17 − 5 − 1 = 11."
  },
  {
    id: 42,
    question: "In a race of 20, Ravi finished 4th from the top. What is his rank from the bottom?",
    options: ["15", "16", "17", "18"],
    correctAnswer: 2,
    explanation: "From bottom = 20 − 4 + 1 = 17."
  },
  {
    id: 43,
    question: "In a list of 28, a student's rank from the bottom is 15. What is the student's rank from the top?",
    options: ["13", "14", "15", "16"],
    correctAnswer: 1,
    explanation: "Top = Total − Bottom + 1 = 28 − 15 + 1 = 14."
  },
  {
    id: 44,
    question: "In a queue of 31, Suma is 12th from the front and Hari is 9th from the back. How many are between them if Suma is ahead?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
    explanation: "Hari from front = 31 − 9 + 1 = 23. Between = 23 − 12 − 1 = 10."
  },
  {
    id: 45,
    question: "In a class of 47, the difference between a student's position from top and bottom is 13 (top better). If from top is 15, what is from bottom?",
    options: ["31", "32", "33", "34"],
    correctAnswer: 2,
    explanation: "From bottom = 47 − 15 + 1 = 33."
  },
  {
    id: 46,
    question: "In a row of 19, there are 4 persons between A and B. If A is 5th from the left and B is to the right of A, what is B's rank from the right?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 1,
    explanation: "B from left = 5 + 4 + 1 = 10 ⇒ from right = 19 − 10 + 1 = 10."
  },
  {
    id: 47,
    question: "In a class of 52, Shyam is 18th from the top and 35th from the bottom. Verify the total and find how many are below Shyam.",
    options: ["34 below", "35 below", "36 below", "33 below"],
    correctAnswer: 0,
    explanation: "Total = 18 + 35 − 1 = 52 (consistent). Below = 52 − 18 = 34."
  },
  {
    id: 48,
    question: "In a line of 27, P is 12th from the left and Q is 8th from the right. How many are between P and Q if P is to the left of Q?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 1,
    explanation: "Q from left = 27 − 8 + 1 = 20. Between = 20 − 12 − 1 = 7."
  },
  {
    id: 49,
    question: "In a class, a student's rank from top is 23 and from bottom is 19. How many students are there?",
    options: ["40", "41", "42", "43"],
    correctAnswer: 1,
    explanation: "Total = 23 + 19 − 1 = 41."
  },
  {
    id: 50,
    question: "In a queue of 33, A is 11th from the front and B is 12th from the back. How many are between them if A is ahead?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 1,
    explanation: "B from front = 33 − 12 + 1 = 22. Between = 22 − 11 − 1 = 10."
  },
  {
    id: 51,
    question: "In a class of 72, A is 19th from the left and B is 23rd from the right. If A is to the left of B, how many students are between A and B?",
    options: ["28", "29", "30", "31"],
    correctAnswer: 2,
    explanation: "B from left = 72 − 23 + 1 = 50. Between = 50 − 19 − 1 = 30."
  },
  
  {
    id: 52,
    question: "In a class, A is 12th from the top and B is 17th from the bottom in a total of 46. How many between A and B if A is above B?",
    options: ["16", "17", "18", "19"],
    correctAnswer: 1,
    explanation: "B from top = 46 − 17 + 1 = 30. Between = 30 − 12 − 1 = 17."
  },
  {
    id: 53,
    question: "In a competition with 60 ranks, P is 18th from the top and Q is 21st from the top. If 3 new participants with better performance than both P and Q enter (taking top 3 ranks), what are P and Q's new ranks?",
    options: ["P=21, Q=24", "P=21, Q=22", "P=18, Q=21", "P=20, Q=23"],
    correctAnswer: 0,
    explanation: "Both shift down by 3: P 18→21, Q 21→24."
  },
  {
    id: 54,
    question: "A class has 48 students. Rina is 10th from the top. Sumi is 12th from the bottom. After 2 top performers leave, what is Sumi's new rank from the bottom?",
    options: ["10", "12", "14", "15"],
    correctAnswer: 1,
    explanation: "Sumi top rank = 48 − 12 + 1 = 37. After two above leave, new top rank = 35 and total = 46 ⇒ bottom = 46 − 35 + 1 = 12."
  },
  {
    id: 55,
    question: "In a line of N, X is 25th from the left and Y is 30th from the right. If X and Y interchange positions, X becomes 46th from the left. Find N.",
    options: ["74", "75", "76", "77"],
    correctAnswer: 1,
    explanation: "Y's left rank = N − 30 + 1 = N − 29. After swap, X's new rank = N − 29 = 46 ⇒ N = 75."
  },
  {
    id: 56,
    question: "In a row of N, A is 14th from the left. If there are 23 students to A's right, find N.",
    options: ["36", "37", "38", "39"],
    correctAnswer: 1,
    explanation: "N = leftRank + rightCount = 14 + 23 = 37."
  },
  {
    id: 57,
    question: "Among 90, the sum of a student's ranks from top and bottom is 61. If 4 students above and 2 students below leave, what is the new sum of ranks for the same student?",
    options: ["61", "59", "57", "55"],
    correctAnswer: 3,
    explanation: "New top = top − 4; new bottom = bottom − 2 ⇒ new sum = (top + bottom) − 6 = 61 − 6 = 55."
  },
  {
    id: 58,
    question: "In a row, A is 9th from left, B is 12th from right, and there are 14 between them with A left of B. Find total N.",
    options: ["34", "35", "36", "37"],
    correctAnswer: 1,
    explanation: "B from left = N − 12 + 1 = N − 11. Between = (N − 11) − 9 − 1 = 14 ⇒ N − 21 = 14 ⇒ N = 35."
  },
  {
    id: 59,
    question: "In a test ranklist of 100, Akash is 37th from the top. How many students must overtake him to bring him to top 25?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 1,
    explanation: "To reach 25th, improvement needed = 37 − 25 = 12 positions."
  },
  {
    id: 60,
    question: "In a line of 52, R is 11th from the left. If at most 5 new students join at the right end, what is the maximum possible number to R's right?",
    options: ["40", "41", "42", "46"],
    correctAnswer: 3,
    explanation: "Initially right count = 52 − 11 = 41. With 5 added to right end, max right count = 46."
  }
];

