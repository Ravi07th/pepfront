import { QuantitativeQuestion } from "../types";
export const averagesQuestions: QuantitativeQuestion[] = [
        {
          "id": "avg-1",
          "topicId": "average",
          "question": "The average marks of 13 papers is 40. The average marks of the first 7 papers are 42 and that of the last 7 papers is 35. Find the marks obtained in the 7th paper.",
          "options": ["23", "38", "19", "57"],
          "correctAnswer": 2,
          "explanation": "Total sum = 13 × 40 = 520; sum first 7 = 7 × 42 = 294; sum last 7 = 7 × 35 = 245; 7th paper = 294 + 245 - 520 = 19",
          "difficulty": "medium"
        },
        {
          "id": "avg-2",
          "topicId": "average",
          "question": "Mukul earned an average of $4200 for first 11 months. How much must he earn in the 12th month to have a yearly average of $5000?",
          "options": ["14600", "13800", "12800", "11800"],
          "correctAnswer": 1,
          "explanation": "Total yearly earning needed = 5000 × 12 = 60000; earned so far = 4200 × 11 = 46200; needed in 12th month = 60000 - 46200 = 13800",
          "difficulty": "medium"
        },
        {
          "id": "avg-3",
          "topicId": "average",
          "question": "The average of x, y, z is 45. x is as much more than average as y is less than average. Find z.",
          "options": ["45", "35", "60", "15"],
          "correctAnswer": 0,
          "explanation": "x + y = 2 × average = 90; total sum = 3 × 45 = 135; so z = 135 - 90 = 45",
          "difficulty": "hard"
        },
        {
          "id": "avg-4",
          "topicId": "average",
          "question": "In a class of 30 officers and some laborers, average salary of officers is 120, laborers 40, overall average 50. Find number of laborers.",
          "options": ["180", "420", "240", "210"],
          "correctAnswer": 3,
          "explanation": "Sum officers = 30 × 120 = 3600; let laborers = x; 3600 + 40x = 50(30 + x); Solving gives x = 210",
          "difficulty": "hard"
        },
        {
          "id": "avg-5",
          "topicId": "average",
          "question": "Average marks of 40 students is 52.15. Marks of one student was taken as 49 instead of 85. Find the corrected average.",
          "options": ["53.05", "53.15", "52.85", "52.95"],
          "correctAnswer": 0,
          "explanation": "Error difference = 85 - 49 = 36; correction = 36 / 40 = 0.9; new average = 52.15 + 0.9 = 53.05",
          "difficulty": "medium"
        },
        {
          "id": "avg-6",
          "topicId": "average",
          "question": "For 9 innings, Aman scores an average x runs. In the 10th innings, he scores 100 and increases average by 8. Find the new average.",
          "options": ["22", "26", "28", "32"],
          "correctAnswer": 2,
          "explanation": "Initial total = 9x; new avg = x + 8; equation: 9x + 100 = 10(x+8); solving x = 20; new avg = 28",
          "difficulty": "medium"
        },
        {
          "id": "avg-7",
          "topicId": "average",
          "question": "The average of 5 consecutive numbers is n. What is the new average if next two numbers are included?",
          "options": ["n + 2", "n - 1", "n - 2", "n + 1"],
          "correctAnswer": 3,
          "explanation": "The middle of first 5 numbers is n; with 7 consecutive numbers, the middle (4th) is n + 1; so new average = n + 1",
          "difficulty": "medium"
        },
        {
          "id": "avg-8",
          "topicId": "average",
          "question": "The run rate for first 20 overs is 5 runs per over, total target 300. What run rate needed for next 20 overs?",
          "options": ["15", "10", "28", "20"],
          "correctAnswer": 1,
          "explanation": "Runs scored = 20 × 5 = 100; left = 300 - 100 = 200; overs left = 20; required run rate = 200 / 20 = 10",
          "difficulty": "medium"
        },
        {
          "id": "avg-9",
          "topicId": "average",
          "question": "The average weight of 39 men is 30 kg. An obese man weighing 130 kg joins. New average weight?",
          "options": ["52", "30", "32.5", "130"],
          "correctAnswer": 2,
          "explanation": "Extra weight = 130 - 30 = 100; distributed among 40 people = 100 / 40 = 2.5; new avg = 30 + 2.5 = 32.5",
          "difficulty": "medium"
        },
        {
          "id": "avg-10",
          "topicId": "average",
          "question": "Average age of A, B, and C is 25. Average age of B and C is also 25. Find A’s age.",
          "options": ["30", "25", "40", "42"],
          "correctAnswer": 1,
          "explanation": "Sum A,B,C = 75; sum B,C = 50; so A = 75 - 50 = 25",
          "difficulty": "medium"
        },
        {
          "id": "avg-11",
          "topicId": "average",
          "question": "Calculate average of all even numbers between 10 and 30.",
          "options": ["18", "20", "22", "24"],
          "correctAnswer": 1,
          "explanation": "Even numbers between 10 and 30: 12,14,...,28; average = (12 + 28)/2 = 20",
          "difficulty": "easy"
        },
        {
          "id": "avg-12",
          "topicId": "average",
          "question": "The average of 4 terms is 20. The first term is one-third of the sum of the other three. Find the first term.",
          "options": ["30", "20", "60", "80"],
          "correctAnswer": 1,
          "explanation": "Sum = 4 × 20 = 80; let first term = A; 3A = 80 - A → 4A = 80 → A = 20",
          "difficulty": "hard"
        },
        {
          "id": "avg-13",
          "topicId": "average",
          "question": "The average of 7 consecutive numbers is 20. What is the largest number?",
          "options": ["25", "24", "23", "22"],
          "correctAnswer": 2,
          "explanation": "Middle number = average = 20; largest number = 20 + 3 = 23",
          "difficulty": "medium"
        },
        {
          "id": "avg-14",
          "topicId": "average",
          "question": "Sum of 10 numbers is 550. Find average number.",
          "options": ["45", "50", "55", "60"],
          "correctAnswer": 2,
          "explanation": "Average = sum / count = 550 / 10 = 55",
          "difficulty": "easy"
        },
        {
            "id": "avg-15",
            "topicId": "average",
            "question": "If the average weight of 10 students is 50 kg and one student weighing 60 kg leaves the group, what is the new average weight?",
            "options": ["48.9", "49.5", "50", "50.5"],
            "correctAnswer": 0,
            "explanation": "Total weight originally = 10 × 50 = 500 kg; after one student leaves, total weight = 500 - 60 = 440 kg; number of students = 9; new average = 440 / 9 ≈ 48.9",
            "difficulty": "medium"
          },
        {
          "id": "avg-16",
          "topicId": "average",
          "question": "Calculate average of first 10 odd numbers.",
          "options": ["10", "11", "12", "13"],
          "correctAnswer": 1,
          "explanation": "Average of first n odd numbers = n; so average here = (1 + 19) / 2 = 10",
          "difficulty": "easy"
        },
        {
            "id": "avg-17",
            "topicId": "average",
            "question": "The average age of a group of 5 people is 24 years. When a new person of age 30 years joins, the average rises to 25 years. What is the age of the new person?",
            "options": ["30", "29", "35", "28"],
            "correctAnswer": 0,
            "explanation": "Total age of original 5 people = 5 × 24 = 120; new average after adding one person = 25; total age of 6 people = 6 × 25 = 150; age of new person = 150 - 120 = 30",
            "difficulty": "easy"
          },
        {
          "id": "avg-18",
          "topicId": "average",
          "question": "Average weight of 50 people is 20. If two weighing 37 and 43 leave, find new average.",
          "options": ["19.2", "19.17", "19.1", "18.96"],
          "correctAnswer": 1,
          "explanation": "Total weight = 50×20=1000; removed sum=80; new total=920; new count=48; new avg=920/48=19.17",
          "difficulty": "medium"
        },
        {
          "id": "avg-19",
          "topicId": "average",
          "question": "The average monthly salary of A and B is Rs. 7000. The average monthly salary of B and C is Rs. 8500, and A’s salary is Rs. 2000 more than C’s. Find A's salary.",
          "options": ["7500", "8500", "9000", "10500"],
          "correctAnswer": 3,
          "explanation": "Let A = C + 2000; Using averages and sums, A is found as 10500",
          "difficulty": "hard"
        },
        {
          "id": "avg-20",
          "topicId": "average",
          "question": "In a class of 30 students, average marks is 70. If 5 students have an average of 84, find average marks of remaining students.",
          "options": ["67", "68", "69", "70"],
          "correctAnswer": 0,
          "explanation": "Total = 30×70=2100; marks of 5 students=5×84=420; remaining total=1680; average=1680/25=67.2(close to 67)",
          "difficulty": "medium"
        },
        {
          "id": "avg-21",
          "topicId": "average",
          "question": "Average of 8 numbers is 40 and average of first 6 numbers is 35. What is the average of remaining 2 numbers?",
          "options": ["55", "50", "45", "60"],
          "correctAnswer": 0,
          "explanation": "Sum total=320; sum first 6=210; sum last 2=110; avg last 2=110/2=55",
          "difficulty": "medium"
        },
        {
            "id": "avg-22",
            "topicId": "average",
            "question": "The average weight of 8 men is 65 kg and the average weight of 7 women is 55 kg. Find the average weight of the group.",
            "options": ["60", "58", "62", "64"],
            "correctAnswer": 0,
            "explanation": "Total weight of men = 8 × 65 = 520 kg; total weight of women = 7 × 55 = 385 kg; total people = 8 + 7 = 15; average weight = (520 + 385) / 15 = 905 / 15 = 60.33 (approximately 60)",
            "difficulty": "medium"
          },
          {
            "id": "avg-23",
            "topicId": "average",
            "question": "Aman's average salary for 8 months is Rs. 4500. What minimum salary should he earn in the 9th month to have an average of Rs. 5000?",
            "options": ["6000", "7500", "9000", "10000"],
            "correctAnswer": 2,
            "explanation": "Sum 8 months=4500×8=36000; desired total=5000×9=45000; required salary=45000-36000=9000",
            "difficulty": "medium"
          },
        {
          "id": "avg-24",
          "topicId": "average",
          "question": "The mean of 25 numbers is 36. If the mean of first 13 numbers is 32 and mean of last 13 numbers is 39, find the 13th number.",
          "options": ["23", "25", "27", "29"],
          "correctAnswer": 0,
          "explanation": "Sum total=900; sum first 13=416; sum last 13=507; 13th number=416+507-900=23",
          "difficulty": "medium"
        },
        
    ];
      