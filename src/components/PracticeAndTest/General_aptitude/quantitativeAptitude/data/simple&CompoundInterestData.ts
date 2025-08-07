import { QuantitativeQuestion } from "../types";

export const simpleAndCompoundInterestQuestions: QuantitativeQuestion[] = [
    {
      "id": "ci-1",
      "topicId": "compound-interest",
      "question": "What is the compound interest on $5000 for 2 years at 10% per annum compounded annually?",
      "options": ["$1025", "$1100", "$1050", "$1150"],
      "correctAnswer": 0,
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
      "options": ["$478.32", "$470", "$460", "$480"],
      "correctAnswer": 0,
      "explanation": "Amount = 2500 × (1.06)^3 = 2500 × 1.191016 = 2977.54; CI = 2977.54 - 2500 = $477.54",
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
      "correctAnswer": 0,
      "explanation": "Rate per half year = 7.5%; Amount = 1000 × (1 + 0.075)^2 = 1000 × 1.155625 = 1155.63; CI = 155.63",
      "difficulty": "medium"
    },
    {
      "id": "ci-10",
      "topicId": "compound-interest",
      "question": "The amount after 2 years on $3600 at 6% per annum compounded annually is:",
      "options": ["$4041.6", "$4040", "$4100", "$4050"],
      "correctAnswer": 0,
      "explanation": "Amount = 3600 × (1.06)^2 = 3600 × 1.1236 = 4044.96",
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
      {
        "id": "ci-16",
        "topicId": "compound-interest",
        "question": "If Rs. 4000 becomes Rs. 4320 in 2 years at compound interest compounded annually, what is the rate of interest?",
        "options": ["3%", "4%", "5%", "6%"],
        "correctAnswer": 1,
        "explanation": "Amount = 4000 × (1 + r)^2 = 4320; (1 + r)^2 = 4320/4000 = 1.08; 1 + r = √1.08 = 1.03923; r ≈ 3.92% (close to 4%)",
        "difficulty": "medium"
      },
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
    
    
  ];
  