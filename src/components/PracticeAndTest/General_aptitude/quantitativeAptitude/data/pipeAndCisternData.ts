import { QuantitativeQuestion } from "../types";

export const pipeAndCisternQuestions: QuantitativeQuestion[] = [
    {
        "id": "pcis-1",
        "topicId": "pipes-cistern",
        "question": "Two pipes A and B can fill a tank separately in 12 and 16 hours respectively. If both pipes are opened together, how long will it take to fill the tank?",
        "options": ["6 hours", "7 hours", "8 hours", "9 hours"],
        "correctAnswer": 2,
        "explanation": "Part filled by A in 1 hour = 1/12; by B = 1/16; Together = 1/12 + 1/16 = 7/48; Time taken = 48/7 ≈ 6.86 hours ≈ 7 hours",
        "difficulty": "easy"
    },
    {
        "id": "pcis-2",
        "topicId": "pipes-cistern",
        "question": "A pipe can fill a tank in 20 minutes, and another pipe can empty the tank in 30 minutes. If both pipes are opened together, how long will it take to fill the tank?",
        "options": ["60 minutes", "50 minutes", "40 minutes", "35 minutes"],
        "correctAnswer": 1,
        "explanation": "Filling rate = 1/20; Emptying rate = 1/30; Net rate = 1/20 - 1/30 = 1/60; Time = 60 minutes",
        "difficulty": "medium"
    },
    {
        "id": "pcis-3",
        "topicId": "pipes-cistern",
        "question": "Two pipes, A and B, can fill a tank separately in 12 and 16 hours, respectively. If both of them are opened together when the tank is initially empty, how much time will it take to completely fill the tank?",
        "options": ["6 hours 52 minutes", "6 hours 50 minutes", "7 hours", "6 hours 40 minutes"],
        "correctAnswer": 0,
        "explanation": "Part of tank filled by pipe A in one hour = 1/12. By pipe B in one hour = 1/16. Together = 1/12 + 1/16 = 7/48. Time = 48/7 hours = 6 hours 52 minutes.",
        "difficulty": "easy"
    },
    {
        "id": "pcis-4",
        "topicId": "pipes-cistern",
        "question": "A cistern has two pipes. Both working together can fill it in 12 minutes. First pipe is 10 minutes faster than the second pipe. How long will the second pipe take to fill the cistern alone?",
        "options": ["20 minutes", "25 minutes", "30 minutes", "35 minutes"],
        "correctAnswer": 2,
        "explanation": "Let time taken by first pipe be t minutes. Then second pipe takes t+10 minutes. Together: 1/t + 1/(t+10) = 1/12; Solving: t=20; second pipe = 30 minutes",
        "difficulty": "medium"
    },
    {
        "id": "pcis-5",
        "topicId": "pipes-cistern",
        "question": "A cistern can be filled by pipe A in 9 hours and by pipe B in 12 hours. Pipe B is opened for 3 hours and then pipe A is opened with pipe B together. How long will they take to fill the tank?",
        "options": ["3 hours", "4 hours", "5 hours", "6 hours"],
        "correctAnswer": 3,
        "explanation": "Work done by B in 3 hours = 3/12=1/4; Remaining = 3/4; Together fill rate = 1/9 + 1/12 = 7/36; Time = (3/4)/(7/36) = 27/7 ≈ 3.86 hours; total ≈ 3 + 3.86 = 6.86 hours",
        "difficulty": "hard"
    },
    {
        "id": "pcis-6",
        "topicId": "pipes-cistern",
        "question": "Pipe A can fill a tank in 8 hours while pipe B can empty it in 10 hours. If both pipes are opened together, how long will it take to fill the tank?",
        "options": ["20 hours", "40 hours", "24 hours", "30 hours"],
        "correctAnswer": 2,
        "explanation": "Net filling rate = 1/8 - 1/10 = 1/40; Time = 40 hours",
        "difficulty": "medium"
    },
    {
        "id": "pcis-7",
        "topicId": "pipes-cistern",
        "question": "Three pipes, A, B, and C, are connected to a tank. A and B fill the tank in 10 and 12 hours respectively, and C empties the tank in 30 hours. If all three are opened simultaneously, how much time does it take to fill the tank?",
        "options": ["6 hours 40 minutes", "7 hours", "6 hours", "6 hours 20 minutes"],
        "correctAnswer": 0,
        "explanation": "A fills 1/10 per hour, B fills 1/12, C empties 1/30. Net fill rate = 1/10 + 1/12 - 1/30 = 3/20. Time to fill = 20/3 hours = 6 hours 40 minutes.",
        "difficulty": "medium"
    },
    {
        "id": "pcis-8",
        "topicId": "pipes-cistern",
        "question": "A cistern has two pipes. Both together fill it in 12 minutes. The first pipe is 10 minutes faster than the second pipe. What is the time taken by the second pipe to fill the cistern alone?",
        "options": ["30 minutes", "25 minutes", "20 minutes", "35 minutes"],
        "correctAnswer": 0,
        "explanation": "Let first pipe fill time = t. Second pipe time = t + 10. (1/t) + (1/(t+10)) = 1/12. Solving gives t=20. Second pipe time = 30 minutes.",
        "difficulty": "medium"
    },

    {
        "id": "pcis-9",
        "topicId": "pipes-cistern",
        "question": "Three pipes A, B, and C can fill a tank in 6 hours working together. After 2 hours, C is closed, and A and B fill the remaining tank in 7 hours. How long will C alone take to fill the tank?",
        "options": ["14 hours", "15 hours", "12 hours", "10 hours"],
        "correctAnswer": 0,
        "explanation": "Total work = 1 tank. Work in 2 hours by all = 2/6=1/3. Remaining work = 2/3 by A and B in 7 hrs. Work/hr of A and B = (2/3)/7=2/21. Combined work/hr of A, B, C = 1/6. So C's work/hr = 1/6 - 2/21 = 1/14. Time for C alone = 14 hours.",
        "difficulty": "hard"
    },
    {
        "id": "pcis-10",
        "topicId": "pipes-cistern",
        "question": "Two pipes A and B can fill a cistern in 20 and 30 minutes respectively, and a third pipe C can empty it in 40 minutes. If all three pipes are opened together, how much time will it take to fill the cistern?",
        "options": ["17 minutes", "20 minutes", "22 minutes", "24 minutes"],
        "correctAnswer": 0,
        "explanation": "Rates: A=1/20, B=1/30, C empties=1/40. Net rate = 1/20 + 1/30 - 1/40 = 7/120. Time = 120/7 ≈ 17 minutes.",
        "difficulty": "medium"
    },

    {
        "id": "pcis-11",
        "topicId": "pipes-cistern",
        "question": "A leak can empty a full tank in 10 hours. If a tap fills the tank at 4 liters per minute, and due to leak, it takes 15 hours to fill the tank. What is the capacity of the tank?",
        "options": ["7200 liters", "6000 liters", "4800 liters", "8400 liters"],
        "correctAnswer": 0,
        "explanation": "Leak rate = 1/10 per hour; combined rate = 1/15 per hour; Filling rate = tap rate = 4 liters/min = 240 liters/hour. Capacity = 240 × 30 = 7200 liters.",
        "difficulty": "medium"
    },
    {
        "id": "pcis-12",
        "topicId": "pipes-cistern",
        "question": "A large tank is filled by three pipes A, B, and C in 6, 8, and 12 hours respectively. How long will it take for all three pipes to fill the tank together?",
        "options": ["2 hours", "3 hours", "4 hours", "5 hours"],
        "correctAnswer": 1,
        "explanation": "Combined rate = 1/6 + 1/8 + 1/12 = 9/24 = 3/8; Time = 8/3 ≈ 2.67 hours ≈ 3 hours",
        "difficulty": "medium"
    },
    {
        "id": "pcis-13",
        "topicId": "pipes-cistern",
        "question": "Two pipes A and B fill a tank in 20 and 25 hours. A and B open together for 5 hours, then B is closed. How long will A take to fill the remaining tank?",
        "options": ["11 hours", "12 hours", "13 hours", "10 hours"],
        "correctAnswer": 0,
        "explanation": "Capacity LCM=100 units. A fills 5 units/hr, B 4 units/hr. Work done in 5 hrs = 45 units. Remaining=55 units. A alone time=55/5=11 hours.",
        "difficulty": "medium"
    },
    {
        "id": "pcis-14",
        "topicId": "pipes-cistern",
        "question": "Two pipes P and Q can fill a tank in 18 hours and 12 hours respectively. If the ratio of the combined efficiency of Pipe P and Q to that of Pipe S alone is 5:4, find the time taken by Pipe S alone to fill the same tank.",
        "options": ["9 hours", "10 hours", "12 hours", "15 hours"],
        "correctAnswer": 0,
        "explanation": "Efficiency of P = 1/18, Q = 1/12; combined = 5/36; Given ratio (P+Q):S = 5:4; so efficiency of S = 1/9; time by S = 9 hours.",
        "difficulty": "medium"
    },
    {
        "id": "pcis-15",
        "topicId": "pipes-cistern",
        "question": "One pipe can fill the tank in 9 minutes while another pipe can empty completely filled tank in 90 minutes. If both the pipes are operated together on empty tank, how long will it take to fill half of the tank?",
        "options": ["4 minutes", "5 minutes", "6 minutes", "7 minutes"],
        "correctAnswer": 1,
        "explanation": "Filling pipe fills at 1/9 per min, emptying pipe empties at 1/90 per min; net fill rate= 1/9 - 1/90= 1/10; So half tank (1/2) will fill in 5 minutes.",
        "difficulty": "medium"
    },
    {
        "id": "pcis-16",
        "topicId": "pipes-cistern",
        "question": "Pipe A can fill a tank in 18 minutes, while pipe B can empty the completely filled tank in 27 minutes. Initially, pipe A is opened and after 6 minutes pipe B is also opened. In how much time will the remaining tank be filled completely?",
        "options": ["30 minutes", "36 minutes", "40 minutes", "42 minutes"],
        "correctAnswer": 1,
        "explanation": "Pipe A fills 1/18 tank per min; B empties 1/27 per min; A works alone for 6 mins filling 6/18=1/3 tank; remaining 2/3 tank filled with net rate 1/18 - 1/27=1/54; time= (2/3)/(1/54)=36 mins.",
        "difficulty": "medium"
    },
    {
        "id": "pcis-17",
        "topicId": "pipes-cistern",
        "question": "A pipe can fill a tank in 8 hours. After 4 hours of filling, another pipe is opened and tank is filled in 6 hours from start. How long will the second pipe take to fill the tank alone?",
        "options": ["24 hours", "18 hours", "20 hours", "16 hours"],
        "correctAnswer": 0,
        "explanation": "Work done in 4 hours = 4/8 = 1/2; Remaining work = 1/2; Time for 2nd pipe alone = 8 * 3 = 24 hours",
        "difficulty": "hard"
    },
    {
        "id": "pcis-18",
        "topicId": "pipes-cistern",
        "question": "A cistern has two pipes; both working together can fill it in 12 minutes. The first pipe is 10 minutes faster than the second pipe. How long will the second pipe take to fill the cistern alone?",
        "options": ["30 minutes", "25 minutes", "20 minutes", "35 minutes"],
        "correctAnswer": 0,
        "explanation": "Let time by first pipe = t; second pipe = t+10; 1/t + 1/(t+10) = 1/12. Solving gives t=20; second pipe's time = 30 minutes.",
        "difficulty": "medium"
    },
    {
        "id": "pcis-19",
        "topicId": "pipes-cistern",
        "question": "Three pipes A, B, and C are connected to a tank. A fills in 10 hours; B, 12 hours; C empties in 30 hours. If all three are open, how long will it take to fill or empty the tank?",
        "options": ["6 hours 40 minutes (empties)", "7 hours (fills)", "6 hours (fills)", "6 hours 20 minutes (empties)"],
        "correctAnswer": 0,
        "explanation": "Rate of A=1/10, B=1/12, C empties=1/30; Net rate=1/10+1/12-1/30=3/20; positive rate implies filling; time=20/3=6 hr 40 min.",
        "difficulty": "medium"
    },
    {
        "id": "pcis-20",
        "topicId": "pipes-cistern",
        "question": "A pipe can fill a tank in 10 hours. Due to leakage, it takes 12 hours to fill the tank. Find the time in which the leak can empty the full tank.",
        "options": ["60 hours", "50 hours", "40 hours", "30 hours"],
        "correctAnswer": 0,
        "explanation": "Leak empties at rate = 1/10 - 1/12 = 1/60; So leak empties tank in 60 hours",
        "difficulty": "medium"
    }
];
