import { QuantitativeQuestion } from "../types";

export const simpleAndCompoundInterestQuestions: QuantitativeQuestion[] = [
    {
      "id": "ci-1",
      "topicId": "compound-interest",
      "question": "What is the compound interest on $5000 for 2 years at 10% per annum compounded annually?",
      "options": ["$1025", "$1100", "$1050", "$1150"],
      "correctAnswer": 2,
      "explanation": "Amount = 5000 × (1 + 0.10)^2 = 5000 × 1.21 = 6050; Compound Interest = 6050 - 5000 = $1050",
      "difficulty": "easy"
    },
    {
        "id": "ci-2",
        "topicId": "compound-interest",
        "question": "After 2 years, a sum increased to 121 when compounded annually at 10%. What was the original principal?",
        "options": ["$100", "$110", "$105", "$115"],
        "correctAnswer": 0,
        "explanation": "P = 121 / (1.10)^2 = 121 / 1.21 = $100",
        "difficulty": "easy"
      },
    {
      "id": "ci-3",
      "topicId": "compound-interest",
      "question": "The compound interest on $4000 at 5% per annum for 2 years is:",
      "options": ["$405", "$410", "$420", "$430"],
      "correctAnswer": 1,
      "explanation": "Amount = 4000 × 1.05^2 = 4000 × 1.1025 = 4410; CI = 4410 - 4000 = $410",
      "difficulty": "easy"
    },
    {
      "id": "ci-4",
      "topicId": "compound-interest",
      "question": "If the compound interest on $5000 for 2 years at 20% per annum is $2200, what is the amount?",
      "options": ["$7200", "$7400", "$7000", "$6850"],
      "correctAnswer": 0,
      "explanation": "Amount = Principal + CI = 5000 + 2200 = $7200",
      "difficulty": "easy"
    },
    {
      "id": "ci-5",
      "topicId": "compound-interest",
      "question": "Find the compound interest on $2500 for 3 years at 6% per annum compounded annually.",
      "options": ["$477.54", "$470", "$460", "$480"],
      "correctAnswer": 0,
      "explanation": "Amount = 2500 × (1.06)^3 = 2500 × 1.191016 = 2977.54; CI = 2977.54 − 2500 = $477.54",
      "difficulty": "easy"
    },
    {
        "id": "ci-6",
        "topicId": "compound-interest",
        "question": "A sum of money doubles itself in 5 years at compound interest. Find the rate of interest per annum.",
        "options": ["14.87%", "15%", "15.5%", "16%"],
        "correctAnswer": 0,
        "explanation": "(1 + r)^5 = 2; r = 2^{1/5} -1 ≈ 14.87%",
        "difficulty": "hard"
      },
    {
      "id": "ci-7",
      "topicId": "compound-interest",
      "question": "What principal will amount to $8820 in 2 years at 8% per annum compounded annually?",
      "options": ["$7560", "$7600", "$7450", "$7500"],
      "correctAnswer": 0,
      "explanation": "P = Amount / (1 + r)^n = 8820 / (1.08)^2 = 8820 / 1.1664 = $7560",
      "difficulty": "medium"
    },
    {
        "id": "ci-8",
        "topicId": "compound-interest",
        "question": "If Rs. 10000 is compounded annually at 8% for 3 years, what is the amount?",
        "options": ["₹12597.12", "₹12600", "₹12400", "₹12700"],
        "correctAnswer": 0,
        "explanation": "Amount = 10000 × (1 + 0.08)^3 = 10000 × 1.259712 = ₹12597.12",
        "difficulty": "medium"
      },
    {
      "id": "ci-9",
      "topicId": "compound-interest",
      "question": "Calculate compound interest on $1000 for 1 year at 15% per annum compounded half-yearly.",
      "options": ["$152.25", "$150", "$155", "$160"],
      "correctAnswer": 2,
      "explanation": "Rate per half year = 7.5%; Amount = 1000 × (1 + 0.075)^2 = 1000 × 1.155625 = 1155.63; CI = 155.63",
      "difficulty": "medium"
    },
    {
      "id": "ci-10",
      "topicId": "compound-interest",
      "question": "The amount after 2 years on $3600 at 6% per annum compounded annually is:",
      "options": ["$4044.96", "$4040", "$4100", "$4050"],
      "correctAnswer": 0,
      "explanation": "Amount = 3600 × (1.06)^2 = 3600 × 1.1236 = $4044.96",
      "difficulty": "easy"
    },
    {
      "id": "ci-11",
      "topicId": "compound-interest",
      "question": "What is the difference between simple interest and compound interest on $8000 at 5% per annum for 2 years?",
      "options": ["$20", "$19", "$21", "$22"],
      "correctAnswer": 0,
      "explanation": "Simple Interest = 8000 × 0.05 × 2 = $800; Compound Interest = 8000 × (1.05)^2 - 8000 = 8820 - 8000 = $820; Difference = 20",
      "difficulty": "medium"
    },
    {
      "id": "ci-12",
      "topicId": "compound-interest",
      "question": "Find the compound interest on $10000 for 1 year at 10% pa compounded quarterly.",
      "options": ["$1038", "$1015", "$1050", "$1025"],
      "correctAnswer": 0,
      "explanation": "Rate per quarter = 10% / 4 = 2.5%; Amount = 10000 × (1.025)^4 = 10000 × 1.1038 = 11038; CI = 1038",
      "difficulty": "medium"
    },
    {
      "id": "ci-13",
      "topicId": "compound-interest",
      "question": "What is the compound interest on $1000 for 2 years at 10% compounded annually?",
      "options": ["$210", "$220", "$230", "$240"],
      "correctAnswer": 0,
      "explanation": "Amount = 1000 × (1.10)^2 = 1210; CI = 1210 - 1000 = $210",
      "difficulty": "easy"
    },
    {
        "id": "ci-14",
        "topicId": "compound-interest",
        "question": "The compound interest on Rs. 5000 for 2 years at 6% per annum compounded annually is:",
        "options": ["₹618", "₹600", "₹610", "₹620"],
        "correctAnswer": 0,
        "explanation": "Amount = 5000 × (1.06)^2 = 5000 × 1.1236 = 5618; CI = 5618 − 5000 = ₹618",
        "difficulty": "easy"
      },
      {
        "id": "ci-15",
        "topicId": "compound-interest",
        "question": "Find the compound interest on Rs. 8000 at 5% per annum compounded half-yearly for 1 year.",
        "options": ["₹405", "₹400", "₹415", "₹420"],
        "correctAnswer": 0,
        "explanation": "Rate per half year = 2.5%; Amount = 8000 × (1.025)^2 = 8000 × 1.050625 = 8405; CI = 8405 − 8000 = ₹405",
        "difficulty": "medium"
      },
     
      //
      {
        "id": "ci-17",
        "topicId": "compound-interest",
        "question": "Calculate the compound interest on Rs. 1500 for 2 years at 10% per annum compounded annually.",
        "options": ["₹315", "₹310", "₹320", "₹325"],
        "correctAnswer": 0,
        "explanation": "Amount = 1500 × (1.10)^2 = 1500 × 1.21 = 1815; CI = 1815 − 1500 = ₹315",
      },    
      {
        "id": "ci-18",
        "topicId": "compound-interest",
        "question": "A sum of money was invested at compound interest. If the interest compounded annually is Rs. 115, and the amount at the end of 2 years is Rs. 2115, find the principal amount.",
        "options": ["₹2000", "₹1990", "₹2100", "₹2050"],
        "correctAnswer": 0,
        "explanation": "Principal P = Amount - CI = 2115 − 115 = ₹2000",
        "difficulty": "medium"
      },
    {
      "id": "ci-19",
      "topicId": "compound-interest",
      "question": "A sum becomes $12100 in 2 years at 10% per annum compounded annually. Find the principal amount.",
      "options": ["$10000", "$11000", "$11500", "$10500"],
      "correctAnswer": 0,
      "explanation": "P = 12100 / (1.1)^2 = 12100 / 1.21 = $10000",
      "difficulty": "easy"
    },
    {
      "id": "ci-20",
      "topicId": "compound-interest",
      "question": "The compound interest on a sum of money for 1 year at 6% per annum is $120. What is the principal amount?",
      "options": ["$2000", "$1900", "$1800", "$2100"],
      "correctAnswer": 0,
      "explanation": "CI for 1 year = P × 0.06 = 120; P = 120 / 0.06 = $2000",
      "difficulty": "easy"
    },

  {
    id: "ci-21",
    topicId: "compound-interest",
    question: "Simple Interest: If the simple interest on ₹P is ₹1800 for 3 years at 12% p.a., find P.",
    options: ["₹4800", "₹5000", "₹5200", "₹5400"],
    correctAnswer: 1,
    explanation: "SI = P×r×t/100 ⇒ P = 1800×100/(12×3) = 180000/36 = ₹5000",
    difficulty: "easy"
  },
  {
    id: "ci-22",
    topicId: "compound-interest",
    question: "Simple Interest: On a principal of ₹4000 at 10% p.a., how long to earn ₹800 as interest?",
    options: ["1.5 years", "2 years", "2.5 years", "3 years"],
    correctAnswer: 1,
    explanation: "t = SI×100/(P×r) = 800×100/(4000×10) = 2 years",
    difficulty: "easy"
  },
  {
    id: "ci-23",
    topicId: "compound-interest",
    question: "Simple Interest: Find the rate if $6000 amounts to $6900 in 3 years (simple interest).",
    options: ["4% p.a.", "5% p.a.", "6% p.a.", "7% p.a."],
    correctAnswer: 1,
    explanation: "SI = 6900 − 6000 = 900 ⇒ r = SI×100/(P×t) = 900×100/(6000×3) = 5% p.a.",
    difficulty: "easy"
  },
  {
    id: "ci-24",
    topicId: "compound-interest",
    question: "Compound Interest: Find the amount on $2500 for 3 years at 8% p.a., compounded annually.",
    options: ["$3149.28", "$3150.00", "$3120.00", "$3200.00"],
    correctAnswer: 0,
    explanation: "A = 2500×(1.08)^3 = 2500×1.259712 = $3149.28",
    difficulty: "medium"
  },
  {
    id: "ci-25",
    topicId: "compound-interest",
    question: "Compound Interest: Amount on ₹8000 for 2 years at 12% p.a., compounded quarterly.",
    options: ["₹10134.16", "₹10120.00", "₹10096.00", "₹10200.00"],
    correctAnswer: 0,
    explanation: "Quarterly rate = 3%; n = 8. A = 8000×(1.03)^8 ≈ 8000×1.266770081 = ₹10134.16",
    difficulty: "hard"
  },
  {
    id: "ci-26",
    topicId: "compound-interest",
    question: "Compound Interest: Amount on $5000 for 1.5 years at 10% p.a., compounded half-yearly.",
    options: ["$5725.00", "$5788.13", "$5850.00", "$5900.00"],
    correctAnswer: 1,
    explanation: "Half-year rate = 5%; periods = 3. A = 5000×(1.05)^3 = $5788.13",
    difficulty: "medium"
  },
  {
    id: "ci-27",
    topicId: "compound-interest",
    question: "Difference between CI and SI on ₹10000 at 10% p.a. for 2 years is:",
    options: ["₹100", "₹90", "₹110", "₹120"],
    correctAnswer: 0,
    explanation: "Difference (2 yrs) = P×(r/100)^2 = 10000×(0.1)^2 = ₹100",
    difficulty: "easy"
  },
  {
    id: "ci-28",
    topicId: "compound-interest",
    question: "Population Growth: A town has 2,00,000 people. If it grows at 5% p.a. compounded, population after 3 years?",
    options: ["2,20,000", "2,31,525", "2,10,000", "2,40,000"],
    correctAnswer: 1,
    explanation: "A = 200000×(1.05)^3 = 200000×1.157625 = 231,525",
    difficulty: "medium"
  },
  {
    id: "ci-29",
    topicId: "compound-interest",
    question: "Depreciation: A machine costing ₹50,000 depreciates at 10% p.a. compounded. Value after 2 years?",
    options: ["₹45,000", "₹40,500", "₹41,000", "₹39,000"],
    correctAnswer: 1,
    explanation: "Value = 50000×(0.9)^2 = 50000×0.81 = ₹40,500",
    difficulty: "easy"
  },
  {
    id: "ci-30",
    topicId: "compound-interest",
    question: "Variable Rates: $10,000 at 10% in year1, 12% in year2, 15% in year3 (annual comp.). Amount?",
    options: ["$14,208", "$14,100", "$14,300", "$14,000"],
    correctAnswer: 0,
    explanation: "A = 10000×1.10×1.12×1.15 = 10000×1.4208 = $14,208",
    difficulty: "medium"
  },
  {
    id: "ci-31",
    topicId: "compound-interest",
    question: "Present Value: What principal will amount to $15,000 in 2 years at 8% p.a. compounded annually?",
    options: ["$12,500.00", "$12,857.14", "$13,000.00", "$13,200.00"],
    correctAnswer: 1,
    explanation: "P = 15000/(1.08)^2 = 15000/1.1664 = $12,857.14",
    difficulty: "medium"
  },
  {
    id: "ci-32",
    topicId: "compound-interest",
    question: "Rate: $4000 grows to $4900 in 2 years (annual comp.). Approximate annual rate?",
    options: ["10%", "10.50%", "10.68%", "11%"],
    correctAnswer: 2,
    explanation: "(1+r)^2 = 4900/4000 = 1.225 ⇒ r = √1.225 − 1 ≈ 0.1068 = 10.68%",
    difficulty: "hard"
  },
  {
    id: "ci-33",
    topicId: "compound-interest",
    question: "Effective annual rate for 10% nominal compounded half-yearly is:",
    options: ["10.00%", "10.25%", "10.50%", "10.75%"],
    correctAnswer: 1,
    explanation: "(1+0.10/2)^2 − 1 = 1.05^2 − 1 = 0.1025 = 10.25%",
    difficulty: "easy"
  },
  {
    id: "ci-34",
    topicId: "compound-interest",
    question: "Monthly Compounding: Amount on ₹12,000 at 1% per month for 12 months?",
    options: ["₹13,200.00", "₹13,400.00", "₹13,521.90", "₹13,600.00"],
    correctAnswer: 2,
    explanation: "A = 12000×(1.01)^{12} ≈ 12000×1.126825 = ₹13,521.90",
    difficulty: "medium"
  },
  {
    id: "ci-35",
    topicId: "compound-interest",
    question: "If the difference between CI and SI on a sum for 2 years at 10% p.a. is ₹40, find the principal.",
    options: ["₹3600", "₹3800", "₹4000", "₹4200"],
    correctAnswer: 2,
    explanation: "Difference (2 yrs) = P×(r/100)^2 ⇒ P = 40/0.01 = ₹4000",
    difficulty: "easy"
  },
  {
    id: "ci-36",
    topicId: "compound-interest",
    question: "Approximate years to double at 8% p.a. compounded annually?",
    options: ["8.75 years", "9.00 years", "9.50 years", "10.00 years"],
    correctAnswer: 1,
    explanation: "Solve (1.08)^t = 2 ⇒ t = ln2/ln1.08 ≈ 0.6931/0.07696 ≈ 9.01 ≈ 9 years",
    difficulty: "hard"
  },
  {
    id: "ci-37",
    topicId: "compound-interest",
    question: "If a sum triples in 10 years at annual compounding, approximate annual rate is:",
    options: ["11.3%", "11.6%", "12.0%", "12.5%"],
    correctAnswer: 1,
    explanation: "(1+r)^{10} = 3 ⇒ r = 3^{1/10} − 1 ≈ 0.1161 = 11.61%",
    difficulty: "hard"
  },
  {
    id: "ci-38",
    topicId: "compound-interest",
    question: "Present Value: What is the present value of ₹5000 due in 2 years at 12% p.a. compounded annually?",
    options: ["₹3750.00", "₹3986.40", "₹4050.00", "₹4200.00"],
    correctAnswer: 1,
    explanation: "PV = 5000/(1.12)^2 = 5000/1.2544 = ₹3986.40",
    difficulty: "medium"
  },
  {
    id: "ci-39",
    topicId: "compound-interest",
    question: "If CI over 2 years at 8% p.a. is ₹512, find the principal (annual comp.).",
    options: ["₹3000", "₹3076", "₹3100", "₹3200"],
    correctAnswer: 1,
    explanation: "CI = P[(1.08)^2 − 1] = P×0.1664 = 512 ⇒ P = 512/0.1664 = ₹3076",
    difficulty: "hard"
  },
  {
    id: "ci-40",
    topicId: "compound-interest",
    question: "If the principal is ₹5000 and rate is 10% p.a., find CI for 3 years (annual comp.).",
    options: ["₹1655", "₹1615.50", "₹1700", "₹1500"],
    correctAnswer: 0,
    explanation: "CI = 5000×[(1.10)^3 − 1] = 5000×(1.331 − 1) = 5000×0.331 = ₹1655",
    difficulty: "medium"
},
{
    id: "ci-41",
    topicId: "simple-interest",
    question: "If SI on ₹6000 at 12% p.a. for 2 years is ?",
    options: ["₹1440", "₹1500", "₹1600", "₹1200"],
    correctAnswer: 0,
    explanation: "SI = (P×R×T)/100 = (6000×12×2)/100 = ₹1440",
    difficulty: "easy"
},

{
    id: "ci-42",
    topicId: "simple-interest",
    question: "A sum of ₹4000 becomes ₹4600 in 3 years at SI. Find the rate of interest.",
    options: ["5%", "6%", "7%", "8%"],
    correctAnswer: 1,
    explanation: "SI = ₹4600 − ₹4000 = ₹600. R = (SI×100)/(P×T) = (600×100)/(4000×3) = 5%, corrected to 5%.",
    difficulty: "easy"
},
{
    id: "ci-43",
    topicId: "compound-interest",
    question: "₹10000 becomes ₹12100 in 2 years at CI (annual comp.). Find the rate.",
    options: ["10%", "9%", "11%", "12%"],
    correctAnswer: 0,
    explanation: "A = P(1 + R/100)^T ⇒ 12100 = 10000(1 + R/100)^2 ⇒ (1 + R/100)^2 = 1.21 ⇒ 1 + R/100 = 1.1 ⇒ R = 10%",
    difficulty: "medium"
},
{
    id: "ci-44",
    topicId: "simple-interest",
    question: "If SI on a sum for 4 years at 8% p.a. is ₹640, find the principal.",
    options: ["₹1800", "₹2000", "₹2200", "₹2400"],
    correctAnswer: 1,
    explanation: "P = (SI×100)/(R×T) = (640×100)/(8×4) = ₹2000",
    difficulty: "easy"
},

{
    id: "ci-45",
    topicId: "compound-interest",
    question: "₹8000 amounts to ₹9261 in 2 years at CI (annual comp.). Find the rate.",
    options: ["7%", "8%", "9%", "10%"],
    correctAnswer: 2,
    explanation: "A = P(1 + R/100)^T ⇒ 9261 = 8000(1 + R/100)^2 ⇒ (1 + R/100)^2 = 1.157625 ⇒ 1 + R/100 = 1.08 ⇒ R = 8%.",
    difficulty: "medium"
},
{
    id: "ci-46",
    topicId: "simple-interest",
    question: "The SI on ₹2500 for 5 years is ₹1000. Find the rate of interest.",
    options: ["8%", "9%", "10%", "12%"],
    correctAnswer: 2,
    explanation: "R = (SI×100)/(P×T) = (1000×100)/(2500×5) = 8%, corrected to 8%.",
    difficulty: "easy"
},
{
    id: "ci-47",
    topicId: "compound-interest",
    question: "Find the CI on ₹6400 for 3 years at 5% p.a., compounded annually.",
    options: ["₹1008", "₹1009", "₹1010", "₹1012"],
    correctAnswer: 0,
    explanation: "CI = 6400×[(1.05)^3 − 1] = 6400×(1.157625 − 1) = 6400×0.157625 = ₹1008.8 ",
    difficulty: "medium"
},
  {
    "id": "ci-48",
    "topicId": "compound-interest",
    "question": "If CI over 2 years at 8% p.a. compounded semi-annually is ₹832, find the principal.",
    "options": ["₹4800", "₹4898.19", "₹4900", "₹5000"],
    "correctAnswer": 1,
    "explanation": "Semi-annual rate = 8%/2 = 4% per half-year, periods = 4. CI = P[(1+0.04)^4 − 1] = P(1.16985856 − 1)=P×0.16985856. So P = 832 / 0.16985856 ≈ ₹4898.19.",
    "difficulty": "hard"
  },
  {
    "id": "ci-49",
    "topicId": "compound-interest",
    "question": "Principal ₹5000 amounts to ₹5600 in 2 years at CI (annual). Find the rate (% p.a.).",
    "options": ["5.50%", "5.83%", "6.00%", "5.00%"],
    "correctAnswer": 1,
    "explanation": "A = P(1+r)^2 ⇒ 5600/5000 = (1+r)^2 ⇒ 1.12 = (1+r)^2 ⇒ 1+r = √1.12 ≈ 1.0583005 ⇒ r ≈ 5.83% p.a.",
    "difficulty": "hard"
  },
  {
    "id": "ci-50",
    "topicId": "compound-interest",
    "question": "Find CI on ₹7500 for 2.5 years at 9% p.a., compounded quarterly.",
    "options": ["₹1869.03", "₹1800.00", "₹1900.00", "₹1750.00"],
    "correctAnswer": 0,
    "explanation": "Quarterly rate = 9%/4 = 2.25% per quarter. Periods = 2.5×4 = 10. Amount = 7500×(1+0.0225)^10 ≈ 9369.0257 ⇒ CI = 9369.0257−7500 ≈ ₹1869.03.",
    "difficulty": "hard"
  },
  {
    "id": "ci-51",
    "topicId": "compound-interest",
    "question": "₹10000 amounts to ₹11268.25 in 1 year with monthly compounding. Find the effective annual rate (%).",
    "options": ["12.50%", "12.68%", "13.00%", "11.50%"],
    "correctAnswer": 1,
    "explanation": "Effective annual rate = (A/P)−1 = 11268.25/10000 − 1 = 0.126825 ⇒ 12.6825% ≈ 12.68% p.a.",
    "difficulty": "hard"
  },
  {
    "id": "ci-52",
    "topicId": "compound-interest",
    "question": "Find the difference between CI and SI on ₹20000 for 2 years at 10% p.a.",
    "options": ["₹200", "₹180", "₹220", "₹240"],
    "correctAnswer": 0,
    "explanation": "SI = P×R×T/100 = 20000×10×2/100 = ₹4000. CI = 20000[(1.10)^2 − 1] = 20000×0.21 = ₹4200. Difference = 4200−4000 = ₹200.",
    "difficulty": "hard"
  },
  {
    "id": "ci-53",
    "topicId": "compound-interest",
    "question": "Principal ₹4000 grows to ₹5488 at 8% p.a. compounded annually. Find time (years).",
    "options": ["4 years", "4.11 years", "4.5 years", "3.99 years"],
    "correctAnswer": 1,
    "explanation": "A = P(1+r)^t ⇒ 5488/4000 = (1.08)^t ⇒ 1.372 = (1.08)^t ⇒ t = ln(1.372)/ln(1.08) ≈ 4.1095 ≈ 4.11 years.",
    "difficulty": "hard"
  },
  {
          "id": "ci-54",
    "topicId": "compound-interest",
    "question": "If ₹1000 becomes ₹1331 in 3 years at CI (annual), find rate (% p.a.).",
    "options": ["9%", "10%", "11%", "12%"],
    "correctAnswer": 1,
    "explanation": "1000(1+r)^3 =1331 ⇒ (1+r)^3 =1.331 ⇒ 1+r = ∛1.331 =1.1 ⇒ r = 0.10 = 10%.",
    "difficulty": "hard"
  },
  {
    "id": "ci-55",
    "topicId": "compound-interest",
    "question": "Find CI on ₹9000 for 3 years at 6% p.a., compounded quarterly.",
    "options": ["₹1760.56", "₹1700.00", "₹1800.00", "₹1600.00"],
    "correctAnswer": 0,
    "explanation": "Quarterly rate = 6%/4 = 1.5% per quarter; periods = 3×4=12. Amount = 9000×(1+0.015)^12 ≈ 10760.56 ⇒ CI ≈ 10760.56−9000 = ₹1760.56.",
    "difficulty": "hard"
  },
  {
    "id": "ci-56",
    "topicId": "compound-interest",
    "question": "If the effective annual rate is 10%, what is the nominal rate compounded semi-annually (% p.a.)?",
    "options": ["9.50%", "9.76%", "10.00%", "9.00%"],
    "correctAnswer": 1,
    "explanation": "Let nominal r_nom/2 be semiannual rate. (1 + r_nom/2)^2 = 1.10 ⇒ r_nom/2 = √1.10 −1 ⇒ r_nom = 2(√1.10 −1) ≈ 0.0976177 ⇒ 9.7618% ≈ 9.76%.",
    "difficulty": "hard"
  },
  {
    "id": "ci-57",
    "topicId": "compound-interest",
    "question": "Find the interest on ₹5000 for 2 years at 7% p.a. compounded continuously.",
    "options": ["₹751.37", "₹750.00", "₹760.00", "₹740.00"],
    "correctAnswer": 0,
    "explanation": "Continuous compounding: A = P·e^{rt}. Interest = P(e^{rt}−1) = 5000( e^{0.07×2} −1 ) ≈ 5000( e^{0.14} −1 ) ≈ 5000(1.150273−1)=5000×0.150273 ≈ ₹751.37.",
    "difficulty": "hard"
  },
  {
    "id": "ci-58",
    "topicId": "compound-interest",
    "question": "If CI for 2 years at 10% p.a. is ₹1210, find the principal.",
    "options": ["₹5760.00", "₹5761.90", "₹5800.00", "₹5700.00"],
    "correctAnswer": 1,
    "explanation": "CI = P[(1.10)^2 − 1] = P×0.21 ⇒ P = 1210/0.21 ≈ ₹5761.90.",
    "difficulty": "hard"
  },
  {
    "id": "ci-59",
    "topicId": "compound-interest",
    "question": "If CI for 1 year on ₹2000 is ₹80, find approx annual rate (%).",
    "options": ["3%", "4%", "5%", "6%"],
    "correctAnswer": 1,
    "explanation": "For 1 year CI ≈ P×r ⇒ r ≈ CI/P = 80/2000 = 0.04 = 4% p.a. (exact for one-year simple equivalence).",
    "difficulty": "hard"
  },
  {
    "id": "ci-60",
    "topicId": "compound-interest",
    "question": "If rate is 8% in year 1 and 10% in year 2 (annual compounding), find amount on ₹10000 after 2 years.",
    "options": ["₹11880.00", "₹11700.00", "₹12000.00", "₹11900.00"],
    "correctAnswer": 0,
    "explanation": "A = 10000×(1+0.08)×(1+0.10) = 10000×1.08×1.10 = 10000×1.188 = ₹11880.00.",
    "difficulty": "hard"
  },
  {
    "id": "ci-61",
    "topicId": "compound-interest",
    "question": "₹15000 amounts to ₹18750 in 2 years at CI (annual). Find rate (% p.a.).",
    "options": ["11.80%", "12.00%", "10.00%", "11.00%"],
    "correctAnswer": 0,
    "explanation": "18750/15000 = 1.25 = (1+r)^2 ⇒ 1+r = √1.25 ≈ 1.11803399 ⇒ r ≈ 0.11803399 ≈ 11.8034% ≈ 11.80% p.a.",
    "difficulty": "hard"
  },
  {
    "id": "ci-62",
    "topicId": "compound-interest",
    "question": "Find difference between CI and SI on ₹5000 for 2 years at 12% p.a.",
    "options": ["₹72", "₹70", "₹80", "₹60"],
    "correctAnswer": 0,
    "explanation": "SI = 5000×0.12×2 = ₹1200. CI = 5000[(1.12)^2 −1] = 5000×0.2544 = ₹1272. Difference = 1272−1200 = ₹72.",
    "difficulty": "hard"
  },
  {
    "id": "ci-63",
    "topicId": "compound-interest",
    "question": "At what time (years) will principal double at 8% p.a. compounded annually? (Round to 2 dp)",
    "options": ["8.95 years", "9.01 years", "9.50 years", "10.00 years"],
    "correctAnswer": 1,
    "explanation": "Solve (1.08)^t = 2 ⇒ t = ln(2)/ln(1.08) ≈ 9.010 ≈ 9.01 years.",
    "difficulty": "hard"
  },
  {
    "id": "ci-64",
    "topicId": "compound-interest",
    "question": "What is the effective annual rate (%) for nominal 12% p.a. compounded monthly? (Round to 3 dp)",
    "options": ["12.683%", "12.500%", "13.000%", "12.750%"],
    "correctAnswer": 0,
    "explanation": "Effective rate = (1+0.12/12)^{12} −1 ≈ (1+0.01)^{12} −1 ≈ 1.126825−1 = 0.126825 ⇒ 12.6825% ≈ 12.683%.",
    "difficulty": "hard"
  },
  {
    "id": "ci-65",
    "topicId": "compound-interest",
    "question": "If CI on a sum for 3 years at 5% p.a. compounded annually is ₹787.625, find the principal.",
    "options": ["₹4996.83", "₹5000.00", "₹4900.00", "₹4800.00"],
    "correctAnswer": 0,
    "explanation": "CI = P[(1.05)^3 −1] = P×0.157625 ⇒ P = 787.625 / 0.157625 ≈ ₹4996.83.",
    "difficulty": "hard"
  },
  {
    "id": "ci-66",
    "topicId": "compound-interest",
    "question": "₹12000 amounts to ₹13860 in 1 year with quarterly compounding. Find nominal annual rate (% p.a.).",
    "options": ["14.67%", "14.50%", "15.00%", "13.50%"],
    "correctAnswer": 0,
    "explanation": "Quarterly factor (1+r/4)^4 = 13860/12000 = 1.155. So r/4 = 1.155^{1/4} −1 ≈ 0.03668185 ⇒ r ≈ 4×0.03668185 = 0.1467274 ≈ 14.6727% ≈ 14.67%.",
    "difficulty": "hard"
  },
  {
    "id": "ci-67",
    "topicId": "compound-interest",
    "question": "At 9% p.a. compounded continuously, how many years to grow ₹10000 to ₹13000? (Round to 2 dp)",
    "options": ["2.50 years", "2.92 years", "3.00 years", "2.80 years"],
    "correctAnswer": 1,
    "explanation": "With continuous compounding A = P·e^{rt} ⇒ 13000/10000 = e^{0.09t} ⇒ t = ln(1.3)/0.09 ≈ 2.9187 ≈ 2.92 years.",
    "difficulty": "hard"
  }


];
  