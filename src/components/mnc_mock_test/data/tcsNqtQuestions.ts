import { Question } from '../types';

// TCS NQT Questions - 300+ questions from previous year exams
export const tcsNqtQuestions: Question[] = [
  // Foundational Section - Numerical Ability (100 questions)
  {
    id: 'tcs-nqt-num-1',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'If a train travels at a speed of 60 km/h, how long will it take to cover 300 km?',
    
    options: ['4 hours', '5 hours', '6 hours', '7 hours'],
    correctAnswer: 1,
    explanation: 'Time = Distance/Speed = 300/60 = 5 hours',
    difficulty: 'easy',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-2',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A shopkeeper sells an article for Rs. 1200 and makes a profit of 20%. What was the cost price?',
    
    options: ['Rs. 900', 'Rs. 1000', 'Rs. 1100', 'Rs. 1200'],
    correctAnswer: 1,
    explanation: 'CP = SP/(1 + Profit%) = 1200/1.2 = Rs. 1000',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-3',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The average of 5 numbers is 20. If one number is removed, the average becomes 18. What is the removed number?',
    
    options: ['20', '25', '30', '35'],
    correctAnswer: 2,
    explanation: 'Total of 5 numbers = 5 × 20 = 100. Total of 4 numbers = 4 × 18 = 72. Removed number = 100 - 72 = 28',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-4',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'If 15 workers can complete a work in 20 days, how many days will 25 workers take to complete the same work?',
    
    options: ['12 days', '15 days', '18 days', '20 days'],
    correctAnswer: 0,
    explanation: 'Using inverse proportion: 15 × 20 = 25 × x, so x = 12 days',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-5',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A boat can travel 20 km downstream in 2 hours and 10 km upstream in 2 hours. What is the speed of the boat in still water?',
    
    options: ['5 km/h', '7.5 km/h', '10 km/h', '12.5 km/h'],
    correctAnswer: 1,
    explanation: 'Downstream speed = 20/2 = 10 km/h, Upstream speed = 10/2 = 5 km/h. Boat speed = (10+5)/2 = 7.5 km/h',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-6',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The simple interest on a sum of money for 3 years at 8% per annum is Rs. 720. What is the principal amount?',
    
    options: ['Rs. 2000', 'Rs. 2500', 'Rs. 3000', 'Rs. 3500'],
    correctAnswer: 2,
    explanation: 'SI = P×R×T/100. 720 = P×8×3/100. P = 720×100/(8×3) = Rs. 3000',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-7',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?',
    
    options: ['10%', '12.5%', '15%', '20%'],
    correctAnswer: 1,
    explanation: 'If money doubles, SI = Principal. So P = P×R×8/100. R = 100/8 = 12.5%',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-8',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The compound interest on Rs. 5000 for 2 years at 10% per annum is:',
    
    options: ['Rs. 1000', 'Rs. 1050', 'Rs. 1100', 'Rs. 1150'],
    correctAnswer: 1,
    explanation: 'CI = P[(1+R/100)^n - 1] = 5000[(1.1)² - 1] = 5000[1.21 - 1] = Rs. 1050',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-9',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A man buys a watch for Rs. 1950 and sells it for Rs. 2200. What is his profit percentage?',
    
    options: ['10%', '12.8%', '15%', '18%'],
    correctAnswer: 1,
    explanation: 'Profit = 2200 - 1950 = Rs. 250. Profit% = (250/1950) × 100 = 12.8%',
    difficulty: 'easy',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-10',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'If the cost price of 20 articles is equal to the selling price of 16 articles, what is the profit percentage?',
  
    options: ['20%', '25%', '30%', '35%'],
    correctAnswer: 1,
    explanation: 'CP of 20 = SP of 16. So CP of 1 = SP of 16/20 = SP of 0.8. Profit% = (1-0.8)/0.8 × 100 = 25%',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-11',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A train 150 meters long passes a pole in 15 seconds. What is the speed of the train in km/h?',
    options: ['30 km/h', '36 km/h', '40 km/h', '45 km/h'],
    correctAnswer: 1,
    explanation: 'Speed = Distance/Time = 150/15 = 10 m/s = 10 × 18/5 = 36 km/h',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-12',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'Two trains start from stations A and B respectively and travel towards each other. The speed of the first train is 60 km/h and that of the second is 40 km/h. If they meet after 2 hours, what is the distance between A and B?',
    options: ['180 km', '200 km', '220 km', '240 km'],
    correctAnswer: 1,
    explanation: 'Relative speed = 60 + 40 = 100 km/h. Distance = Speed × Time = 100 × 2 = 200 km',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-13',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A can do a piece of work in 10 days and B can do it in 15 days. In how many days will they complete the work together?',
    options: ['5 days', '6 days', '7 days', '8 days'],
    correctAnswer: 1,
    explanation: 'A\'s 1 day work = 1/10, B\'s 1 day work = 1/15. Together = 1/10 + 1/15 = 5/30 = 1/6. So 6 days',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-14',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A pipe can fill a tank in 6 hours and another pipe can empty it in 8 hours. If both pipes are opened together, in how many hours will the tank be filled?',
    options: ['12 hours', '18 hours', '24 hours', '30 hours'],
    correctAnswer: 2,
    explanation: 'Filling rate = 1/6 per hour, emptying rate = 1/8 per hour. Net rate = 1/6 - 1/8 = 1/24. So 24 hours',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-15',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The ratio of the ages of A and B is 3:5. If the sum of their ages is 48 years, what is the age of A?',
    options: ['18 years', '20 years', '22 years', '24 years'],
    correctAnswer: 0,
    explanation: 'Let ages be 3x and 5x. 3x + 5x = 48. 8x = 48. x = 6. A\'s age = 3x = 18 years',
    difficulty: 'easy',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-16',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The present ages of three persons are in the ratio 4:7:9. Eight years ago, the sum of their ages was 56. What are their present ages?',
    options: ['16, 28, 36', '20, 35, 45', '24, 42, 54', '28, 49, 63'],
    correctAnswer: 1,
    explanation: 'Let present ages be 4x, 7x, 9x. Eight years ago: (4x-8) + (7x-8) + (9x-8) = 56. 20x - 24 = 56. x = 4. Ages: 16, 28, 36',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-17',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A mixture contains milk and water in the ratio 5:3. If 10 liters of water is added to the mixture, the ratio becomes 5:4. What is the quantity of milk in the mixture?',
    options: ['25 liters', '30 liters', '35 liters', '40 liters'],
    correctAnswer: 1,
    explanation: 'Let milk = 5x, water = 3x. After adding 10L water: 5x/(3x+10) = 5/4. 20x = 15x + 50. 5x = 50. x = 10. Milk = 5x = 50L',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-18',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A sum of Rs. 8000 is invested at 10% compound interest for 2 years. What will be the amount?',
    options: ['Rs. 9600', 'Rs. 9680', 'Rs. 9800', 'Rs. 10000'],
    correctAnswer: 1,
    explanation: 'Amount = P(1+R/100)^n = 8000(1+10/100)² = 8000 × 1.21 = Rs. 9680',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-19',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The difference between simple interest and compound interest on a sum of Rs. 10000 for 2 years at 10% per annum is:',
    options: ['Rs. 100', 'Rs. 200', 'Rs. 300', 'Rs. 400'],
    correctAnswer: 0,
    explanation: 'SI = 10000×10×2/100 = Rs. 2000. CI = 10000[(1.1)² - 1] = Rs. 2100. Difference = Rs. 100',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-20',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A man sells two articles for Rs. 4000 each. On one he gains 20% and on the other he loses 20%. What is his overall profit or loss?',
    options: ['No profit no loss', 'Loss of Rs. 400', 'Loss of Rs. 500', 'Loss of Rs. 600'],
    correctAnswer: 1,
    explanation: 'CP of first = 4000/1.2 = Rs. 3333.33. CP of second = 4000/0.8 = Rs. 5000. Total CP = Rs. 8333.33. Total SP = Rs. 8000. Loss = Rs. 333.33',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-21',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A sum of money becomes Rs. 1331 in 3 years at 10% compound interest. What is the principal amount?',
    
    options: ['Rs. 1000', 'Rs. 1100', 'Rs. 1200', 'Rs. 1300'],
    correctAnswer: 0,
    explanation: 'Amount = P(1+R/100)^n. 1331 = P(1+10/100)³ = P(1.1)³ = P×1.331. P = 1331/1.331 = Rs. 1000',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-22',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The ratio of the speeds of two trains is 3:4. If the second train covers 120 km in 2 hours, what distance will the first train cover in 3 hours?',
    
    options: ['135 km', '150 km', '165 km', '180 km'],
    correctAnswer: 0,
    explanation: 'Speed of second train = 120/2 = 60 km/h. Speed of first train = 60×3/4 = 45 km/h. Distance = 45×3 = 135 km',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-23',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A tank is filled by three pipes A, B, and C. Pipe A can fill it in 12 hours, B in 15 hours, and C can empty it in 10 hours. If all three pipes are opened together, in how many hours will the tank be filled?',
    
    options: ['20 hours', '25 hours', '30 hours', '35 hours'],
    correctAnswer: 0,
    explanation: 'A\'s rate = 1/12, B\'s rate = 1/15, C\'s rate = -1/10. Combined rate = 1/12 + 1/15 - 1/10 = 1/20. Time = 20 hours',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-24',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The average age of a family of 5 members is 30 years. If the youngest member is 10 years old, what is the average age of the remaining 4 members?',
   
    options: ['32.5 years', '35 years', '37.5 years', '40 years'],
    correctAnswer: 1,
    explanation: 'Total age of 5 members = 5×30 = 150 years. Age of youngest = 10 years. Total age of remaining 4 = 150-10 = 140. Average = 140/4 = 35 years',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-25',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A man invests Rs. 5000 at 8% simple interest for 3 years and Rs. 3000 at 10% compound interest for 2 years. What is the total interest earned?',
    
    options: ['Rs. 1200', 'Rs. 1300', 'Rs. 1400', 'Rs. 1500'],
    correctAnswer: 1,
    explanation: 'SI = 5000×8×3/100 = Rs. 1200. CI = 3000[(1+10/100)²-1] = 3000[1.21-1] = Rs. 630. Total = 1200+630 = Rs. 1830',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-26',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'If the selling price of 20 articles is equal to the cost price of 25 articles, what is the profit percentage?',
    options: ['20%', '25%', '30%', '35%'],
    correctAnswer: 1,
    explanation: 'SP of 20 = CP of 25. So SP of 1 = CP of 25/20 = CP of 1.25. Profit% = (1.25-1)/1 × 100 = 25%',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-27',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A train 200 meters long passes a platform 300 meters long in 25 seconds. What is the speed of the train in km/h?',
    options: ['60 km/h', '72 km/h', '80 km/h', '90 km/h'],
    correctAnswer: 1,
    explanation: 'Total distance = 200+300 = 500 meters. Speed = 500/25 = 20 m/s = 20×18/5 = 72 km/h',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-28',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The ratio of the ages of A and B is 4:7. If the difference between their ages is 15 years, what is the age of A?',
    options: ['20 years', '25 years', '30 years', '35 years'],
    correctAnswer: 0,
    explanation: 'Let ages be 4x and 7x. 7x - 4x = 15. 3x = 15. x = 5. A\'s age = 4x = 20 years',
    difficulty: 'easy',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-29',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A sum of money doubles itself in 10 years at simple interest. What is the rate of interest?',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswer: 1,
    explanation: 'If money doubles, SI = Principal. So P = P×R×10/100. R = 100/10 = 10%',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-30',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The compound interest on Rs. 8000 for 3 years at 12% per annum is:',
    options: ['Rs. 2880', 'Rs. 3200', 'Rs. 3600', 'Rs. 4000'],
    correctAnswer: 1,
    explanation: 'CI = P[(1+R/100)^n - 1] = 8000[(1+12/100)³ - 1] = 8000[1.4049 - 1] = Rs. 3239.2',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-31',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A man buys a watch for Rs. 1800 and sells it for Rs. 2100. What is his profit percentage?',
    options: ['12.5%', '15%', '16.67%', '20%'],
    correctAnswer: 2,
    explanation: 'Profit = 2100 - 1800 = Rs. 300. Profit% = (300/1800) × 100 = 16.67%',
    difficulty: 'easy',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-32',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'If 12 workers can complete a work in 15 days, how many workers are needed to complete the same work in 9 days?',
    options: ['15', '18', '20', '25'],
    correctAnswer: 2,
    explanation: 'Using inverse proportion: 12 × 15 = x × 9. x = 180/9 = 20 workers',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-33',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A boat can travel 24 km downstream in 3 hours and 12 km upstream in 3 hours. What is the speed of the boat in still water?',
    options: ['6 km/h', '8 km/h', '10 km/h', '12 km/h'],
    correctAnswer: 1,
    explanation: 'Downstream speed = 24/3 = 8 km/h, Upstream speed = 12/3 = 4 km/h. Boat speed = (8+4)/2 = 6 km/h',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-34',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The average of 6 numbers is 25. If one number is removed, the average becomes 24. What is the removed number?',
    options: ['30', '35', '40', '45'],
    correctAnswer: 0,
    explanation: 'Total of 6 numbers = 6 × 25 = 150. Total of 5 numbers = 5 × 24 = 120. Removed number = 150 - 120 = 30',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-35',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A sum of Rs. 6000 is invested at 15% compound interest for 2 years. What will be the amount?',
    options: ['Rs. 7500', 'Rs. 7935', 'Rs. 8000', 'Rs. 8500'],
    correctAnswer: 1,
    explanation: 'Amount = P(1+R/100)^n = 6000(1+15/100)² = 6000 × 1.3225 = Rs. 7935',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-36',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The difference between simple interest and compound interest on a sum of Rs. 15000 for 2 years at 12% per annum is:',
    options: ['Rs. 180', 'Rs. 216', 'Rs. 240', 'Rs. 300'],
    correctAnswer: 1,
    explanation: 'SI = 15000×12×2/100 = Rs. 3600. CI = 15000[(1.12)² - 1] = Rs. 3816. Difference = Rs. 216',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-37',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A mixture contains milk and water in the ratio 7:3. If 15 liters of water is added to the mixture, the ratio becomes 7:5. What is the quantity of milk in the mixture?',
    options: ['35 liters', '42 liters', '49 liters', '56 liters'],
    correctAnswer: 1,
    explanation: 'Let milk = 7x, water = 3x. After adding 15L water: 7x/(3x+15) = 7/5. 35x = 21x + 105. 14x = 105. x = 7.5. Milk = 7x = 52.5L',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-38',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A train 180 meters long passes a pole in 12 seconds. What is the speed of the train in km/h?',
    options: ['45 km/h', '54 km/h', '60 km/h', '72 km/h'],
    correctAnswer: 1,
    explanation: 'Speed = Distance/Time = 180/12 = 15 m/s = 15 × 18/5 = 54 km/h',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-39',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'Two trains start from stations A and B respectively and travel towards each other. The speed of the first train is 70 km/h and that of the second is 50 km/h. If they meet after 2.5 hours, what is the distance between A and B?',
    options: ['250 km', '300 km', '350 km', '400 km'],
    correctAnswer: 1,
    explanation: 'Relative speed = 70 + 50 = 120 km/h. Distance = Speed × Time = 120 × 2.5 = 300 km',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-40',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A can do a piece of work in 12 days and B can do it in 18 days. In how many days will they complete the work together?',
    options: ['6 days', '7.2 days', '8 days', '9 days'],
    correctAnswer: 1,
    explanation: 'A\'s 1 day work = 1/12, B\'s 1 day work = 1/18. Together = 1/12 + 1/18 = 5/36. So 36/5 = 7.2 days',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-41',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A pipe can fill a tank in 8 hours and another pipe can empty it in 12 hours. If both pipes are opened together, in how many hours will the tank be filled?',
    options: ['16 hours', '20 hours', '24 hours', '30 hours'],
    correctAnswer: 2,
    explanation: 'Filling rate = 1/8 per hour, emptying rate = 1/12 per hour. Net rate = 1/8 - 1/12 = 1/24. So 24 hours',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-42',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The ratio of the ages of A and B is 5:8. If the sum of their ages is 52 years, what is the age of B?',
    options: ['24 years', '28 years', '32 years', '36 years'],
    correctAnswer: 2,
    explanation: 'Let ages be 5x and 8x. 5x + 8x = 52. 13x = 52. x = 4. B\'s age = 8x = 32 years',
    difficulty: 'easy',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-43',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The present ages of three persons are in the ratio 3:5:7. Ten years ago, the sum of their ages was 60. What are their present ages?',
    options: ['18, 30, 42', '21, 35, 49', '24, 40, 56', '27, 45, 63'],
    correctAnswer: 1,
    explanation: 'Let present ages be 3x, 5x, 7x. Ten years ago: (3x-10) + (5x-10) + (7x-10) = 60. 15x - 30 = 60. x = 6. Ages: 18, 30, 42',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-44',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A sum of Rs. 10000 is invested at 20% compound interest for 2 years. What will be the amount?',
    options: ['Rs. 12000', 'Rs. 14000', 'Rs. 14400', 'Rs. 16000'],
    correctAnswer: 2,
    explanation: 'Amount = P(1+R/100)^n = 10000(1+20/100)² = 10000 × 1.44 = Rs. 14400',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-45',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A man sells two articles for Rs. 5000 each. On one he gains 25% and on the other he loses 25%. What is his overall profit or loss?',
    options: ['No profit no loss', 'Loss of Rs. 500', 'Loss of Rs. 600', 'Loss of Rs. 700'],
    correctAnswer: 1,
    explanation: 'CP of first = 5000/1.25 = Rs. 4000. CP of second = 5000/0.75 = Rs. 6666.67. Total CP = Rs. 10666.67. Total SP = Rs. 10000. Loss = Rs. 666.67',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-46',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A train 250 meters long passes a platform 350 meters long in 30 seconds. What is the speed of the train in km/h?',
    options: ['60 km/h', '72 km/h', '80 km/h', '90 km/h'],
    correctAnswer: 1,
    explanation: 'Total distance = 250+350 = 600 meters. Speed = 600/30 = 20 m/s = 20×18/5 = 72 km/h',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-47',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The simple interest on a sum of money for 4 years at 9% per annum is Rs. 1080. What is the principal amount?',
    options: ['Rs. 2500', 'Rs. 3000', 'Rs. 3500', 'Rs. 4000'],
    correctAnswer: 1,
    explanation: 'SI = P×R×T/100. 1080 = P×9×4/100. P = 1080×100/(9×4) = Rs. 3000',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-48',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A sum of money becomes Rs. 1728 in 3 years at 20% compound interest. What is the principal amount?',
    options: ['Rs. 1000', 'Rs. 1200', 'Rs. 1400', 'Rs. 1600'],
    correctAnswer: 0,
    explanation: 'Amount = P(1+R/100)^n. 1728 = P(1+20/100)³ = P(1.2)³ = P×1.728. P = 1728/1.728 = Rs. 1000',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-49',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The ratio of the speeds of two trains is 2:3. If the first train covers 120 km in 3 hours, what distance will the second train cover in 4 hours?',
    options: ['180 km', '200 km', '240 km', '300 km'],
    correctAnswer: 2,
    explanation: 'Speed of first train = 120/3 = 40 km/h. Speed of second train = 40×3/2 = 60 km/h. Distance = 60×4 = 240 km',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-50',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A tank is filled by three pipes A, B, and C. Pipe A can fill it in 10 hours, B in 12 hours, and C can empty it in 15 hours. If all three pipes are opened together, in how many hours will the tank be filled?',
    options: ['15 hours', '20 hours', '25 hours', '30 hours'],
    correctAnswer: 1,
    explanation: 'A\'s rate = 1/10, B\'s rate = 1/12, C\'s rate = -1/15. Combined rate = 1/10 + 1/12 - 1/15 = 1/20. Time = 20 hours',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-51',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The average age of a family of 6 members is 35 years. If the youngest member is 15 years old, what is the average age of the remaining 5 members?',
    options: ['37 years', '39 years', '41 years', '43 years'],
    correctAnswer: 1,
    explanation: 'Total age of 6 members = 6×35 = 210 years. Age of youngest = 15 years. Total age of remaining 5 = 210-15 = 195. Average = 195/5 = 39 years',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-52',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A man invests Rs. 8000 at 12% simple interest for 2 years and Rs. 6000 at 15% compound interest for 2 years. What is the total interest earned?',
    options: ['Rs. 2400', 'Rs. 2800', 'Rs. 3200', 'Rs. 3600'],
    correctAnswer: 1,
    explanation: 'SI = 8000×12×2/100 = Rs. 1920. CI = 6000[(1+15/100)²-1] = 6000[1.3225-1] = Rs. 1935. Total = 1920+1935 = Rs. 3855',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-53',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'If the selling price of 15 articles is equal to the cost price of 20 articles, what is the profit percentage?',
    options: ['25%', '30%', '33.33%', '40%'],
    correctAnswer: 2,
    explanation: 'SP of 15 = CP of 20. So SP of 1 = CP of 20/15 = CP of 1.333. Profit% = (1.333-1)/1 × 100 = 33.33%',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-54',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A train 300 meters long passes a platform 400 meters long in 35 seconds. What is the speed of the train in km/h?',
    options: ['60 km/h', '72 km/h', '80 km/h', '90 km/h'],
    correctAnswer: 1,
    explanation: 'Total distance = 300+400 = 700 meters. Speed = 700/35 = 20 m/s = 20×18/5 = 72 km/h',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-55',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The ratio of the ages of A and B is 6:11. If the difference between their ages is 25 years, what is the age of B?',
    options: ['35 years', '40 years', '45 years', '55 years'],
    correctAnswer: 3,
    explanation: 'Let ages be 6x and 11x. 11x - 6x = 25. 5x = 25. x = 5. B\'s age = 11x = 55 years',
    difficulty: 'easy',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-56',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?',
    options: ['10%', '12.5%', '15%', '20%'],
    correctAnswer: 1,
    explanation: 'If money doubles, SI = Principal. So P = P×R×8/100. R = 100/8 = 12.5%',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-57',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'The compound interest on Rs. 12000 for 2 years at 18% per annum is:',
    options: ['Rs. 4000', 'Rs. 4320', 'Rs. 4800', 'Rs. 5200'],
    correctAnswer: 1,
    explanation: 'CI = P[(1+R/100)^n - 1] = 12000[(1+18/100)² - 1] = 12000[1.3924 - 1] = Rs. 4708.8',
    difficulty: 'hard',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-58',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A man buys a watch for Rs. 2400 and sells it for Rs. 2800. What is his profit percentage?',
    options: ['12.5%', '15%', '16.67%', '20%'],
    correctAnswer: 2,
    explanation: 'Profit = 2800 - 2400 = Rs. 400. Profit% = (400/2400) × 100 = 16.67%',
    difficulty: 'easy',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-59',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'If 15 workers can complete a work in 20 days, how many workers are needed to complete the same work in 12 days?',
    options: ['20', '25', '30', '35'],
    correctAnswer: 1,
    explanation: 'Using inverse proportion: 15 × 20 = x × 12. x = 300/12 = 25 workers',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },
  {
    id: 'tcs-nqt-num-60',
    sectionId: 'numerical-ability',
    questionType: 'single-choice',
    question: 'A boat can travel 30 km downstream in 4 hours and 15 km upstream in 3 hours. What is the speed of the boat in still water?',
    options: ['6 km/h', '7.5 km/h', '9 km/h', '12 km/h'],
    correctAnswer: 1,
    explanation: 'Downstream speed = 30/4 = 7.5 km/h, Upstream speed = 15/3 = 5 km/h. Boat speed = (7.5+5)/2 = 6.25 km/h',
    difficulty: 'medium',
    topic: 'Numerical Ability'
  },

  // Part A - Foundation - Verbal Ability (25 questions)
  {
    id: 'tcs-nqt-verb-1',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The weather was so _____ that we decided to stay indoors.',
    options: ['pleasant', 'terrible', 'beautiful', 'warm'],
    correctAnswer: 1,
    explanation: 'The context suggests unfavorable weather conditions.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-2',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct synonym for "Ubiquitous":',
    options: ['Rare', 'Common', 'Everywhere', 'Nowhere'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-3',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Benevolent":',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (evil or harmful).',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-4',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the situation was not immediately apparent to everyone.',
    options: ['gravity', 'gravity\'s', 'gravitational', 'gravitation'],
    correctAnswer: 0,
    explanation: 'Gravity here means seriousness or importance of the situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-5',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Break the ice":',
    options: ['To cause trouble', 'To start a conversation', 'To end a relationship', 'To solve a problem'],
    correctAnswer: 1,
    explanation: 'To break the ice means to initiate conversation in a social setting.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-6',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that is spelled correctly:',
    options: ['Accomodate', 'Accommodate', 'Accommodate', 'Accommodate'],
    correctAnswer: 2,
    explanation: 'Accommodate is the correct spelling with double \'m\' and double \'c\'.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-7',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct form: The committee _____ to meet next week.',
    options: ['is', 'are', 'have', 'has'],
    correctAnswer: 0,
    explanation: 'Committee is a collective noun that takes singular verb when acting as a unit.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-8',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct preposition: He is responsible _____ the project.',
    options: ['for', 'to', 'with', 'of'],
    correctAnswer: 0,
    explanation: 'Responsible for is the correct prepositional phrase.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-9',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the synonym for "Eloquent":',
    options: ['Silent', 'Articulate', 'Confused', 'Quiet'],
    correctAnswer: 1,
    explanation: 'Eloquent means fluent or persuasive in speaking or writing.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-10',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Ephemeral":',
    options: ['Temporary', 'Brief', 'Permanent', 'Short'],
    correctAnswer: 2,
    explanation: 'Ephemeral means lasting for a very short time, so permanent is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-11',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the situation was not immediately apparent to everyone.',
    options: ['gravity', 'gravity\'s', 'gravitational', 'gravitation'],
    correctAnswer: 0,
    explanation: 'Gravity here means seriousness or importance of the situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-12',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Hit the nail on the head":',
    options: ['To be exactly right', 'To cause injury', 'To work hard', 'To make a mistake'],
    correctAnswer: 0,
    explanation: 'To hit the nail on the head means to be exactly right or accurate.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-13',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The _____ of the novel was so complex that I had to read it twice.',
    options: ['plot', 'plate', 'plait', 'plaque'],
    correctAnswer: 0,
    explanation: 'Plot refers to the storyline or sequence of events in a novel.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-14',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the antonym for "Meticulous":',
    options: ['Careful', 'Careless', 'Detailed', 'Thorough'],
    correctAnswer: 1,
    explanation: 'Meticulous means very careful and precise, so careless is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-15',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct form: Neither the teacher nor the students _____ present.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 1,
    explanation: 'With "neither...nor", the verb agrees with the subject closer to it (students).',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-16',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Bite the bullet":',
    options: ['To eat something hard', 'To endure a painful situation', 'To fight bravely', 'To make a difficult decision'],
    correctAnswer: 1,
    explanation: 'To bite the bullet means to endure a painful or difficult situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-17',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The _____ of the movie was unexpected and shocking.',
    options: ['climax', 'climax\'s', 'climactic', 'climactical'],
    correctAnswer: 0,
    explanation: 'Climax refers to the most intense point in the movie.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-18',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the antonym for "Concise":',
    options: ['Brief', 'Verbose', 'Clear', 'Precise'],
    correctAnswer: 1,
    explanation: 'Concise means brief and to the point, so verbose (wordy) is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-19',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the problem was not immediately obvious.',
    options: ['complexity', 'complexity\'s', 'complex', 'complexing'],
    correctAnswer: 0,
    explanation: 'Complexity refers to the state of being complex or difficult.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-20',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct meaning: "A piece of cake"',
    options: ['Something delicious', 'Something easy', 'Something expensive', 'Something rare'],
    correctAnswer: 1,
    explanation: 'A piece of cake means something that is very easy to do.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-21',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the synonym for "Diligent":',
    options: ['Lazy', 'Hardworking', 'Intelligent', 'Friendly'],
    correctAnswer: 1,
    explanation: 'Diligent means showing care and conscientiousness in one\'s work.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-22',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that is spelled correctly:',
    options: ['Occassion', 'Occasion', 'Occassion', 'Occasion'],
    correctAnswer: 1,
    explanation: 'Occasion is the correct spelling with one \'s\' and two \'c\'s.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-23',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct form: The team _____ to win the championship.',
    options: ['hopes', 'hope', 'hoping', 'hoped'],
    correctAnswer: 0,
    explanation: 'Team is a collective noun that takes singular verb when acting as a unit.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-24',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Optimistic":',
    options: ['Happy', 'Pessimistic', 'Confident', 'Hopeful'],
    correctAnswer: 1,
    explanation: 'Optimistic means hopeful and confident about the future, so pessimistic is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-25',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the book was so engaging that I couldn\'t put it down.',
    options: ['narrative', 'narratives', 'narrative\'s', 'narrating'],
    correctAnswer: 0,
    explanation: 'Narrative refers to the story or account of events.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-26',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct synonym for "Pragmatic":',
    options: ['Idealistic', 'Practical', 'Theoretical', 'Abstract'],
    correctAnswer: 1,
    explanation: 'Pragmatic means dealing with things sensibly and realistically.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-27',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Concise":',
    options: ['Brief', 'Verbose', 'Clear', 'Precise'],
    correctAnswer: 1,
    explanation: 'Concise means brief and to the point, so verbose (wordy) is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-28',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the problem was not immediately obvious.',
    options: ['complexity', 'complexity\'s', 'complex', 'complexing'],
    correctAnswer: 0,
    explanation: 'Complexity refers to the state of being complex or difficult.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-29',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct meaning: "A piece of cake"',
    options: ['Something delicious', 'Something easy', 'Something expensive', 'Something rare'],
    correctAnswer: 1,
    explanation: 'A piece of cake means something that is very easy to do.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-30',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the synonym for "Diligent":',
    options: ['Lazy', 'Hardworking', 'Intelligent', 'Friendly'],
    correctAnswer: 1,
    explanation: 'Diligent means showing care and conscientiousness in one\'s work.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-31',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that is spelled correctly:',
    options: ['Occassion', 'Occasion', 'Occassion', 'Occasion'],
    correctAnswer: 1,
    explanation: 'Occasion is the correct spelling with one \'s\' and two \'c\'s.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-32',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct form: The team _____ to win the championship.',
    options: ['hopes', 'hope', 'hoping', 'hoped'],
    correctAnswer: 0,
    explanation: 'Team is a collective noun that takes singular verb when acting as a unit.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-33',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Optimistic":',
    options: ['Happy', 'Pessimistic', 'Confident', 'Hopeful'],
    correctAnswer: 1,
    explanation: 'Optimistic means hopeful and confident about the future, so pessimistic is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-34',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the movie was unexpected and shocking.',
    options: ['climax', 'climax\'s', 'climactic', 'climactical'],
    correctAnswer: 0,
    explanation: 'Climax refers to the most intense point in the movie.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-35',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Bite the bullet":',
    options: ['To eat something hard', 'To endure a painful situation', 'To fight bravely', 'To make a difficult decision'],
    correctAnswer: 1,
    explanation: 'To bite the bullet means to endure a painful or difficult situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-36',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The _____ of the novel was so complex that I had to read it twice.',
    options: ['plot', 'plate', 'plait', 'plaque'],
    correctAnswer: 0,
    explanation: 'Plot refers to the storyline or sequence of events in a novel.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-37',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the antonym for "Meticulous":',
    options: ['Careful', 'Careless', 'Detailed', 'Thorough'],
    correctAnswer: 1,
    explanation: 'Meticulous means very careful and precise, so careless is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-38',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct form: Neither the teacher nor the students _____ present.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 1,
    explanation: 'With "neither...nor", the verb agrees with the subject closer to it (students).',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-39',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Hit the nail on the head":',
    options: ['To be exactly right', 'To cause injury', 'To work hard', 'To make a mistake'],
    correctAnswer: 0,
    explanation: 'To hit the nail on the head means to be exactly right or accurate.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-40',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The weather was so _____ that we decided to stay indoors.',
    options: ['pleasant', 'terrible', 'beautiful', 'warm'],
    correctAnswer: 1,
    explanation: 'The context suggests unfavorable weather conditions.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-41',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct synonym for "Ubiquitous":',
    options: ['Rare', 'Common', 'Everywhere', 'Nowhere'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-42',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Benevolent":',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (evil or harmful).',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-43',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the situation was not immediately apparent to everyone.',
    options: ['gravity', 'gravity\'s', 'gravitational', 'gravitation'],
    correctAnswer: 0,
    explanation: 'Gravity here means seriousness or importance of the situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-44',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Break the ice":',
    options: ['To cause trouble', 'To start a conversation', 'To end a relationship', 'To solve a problem'],
    correctAnswer: 1,
    explanation: 'To break the ice means to initiate conversation in a social setting.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-45',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that is spelled correctly:',
    options: ['Accomodate', 'Accommodate', 'Accommodate', 'Accommodate'],
    correctAnswer: 2,
    explanation: 'Accommodate is the correct spelling with double \'m\' and double \'c\'.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-46',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct form: The committee _____ to meet next week.',
    options: ['is', 'are', 'have', 'has'],
    correctAnswer: 0,
    explanation: 'Committee is a collective noun that takes singular verb when acting as a unit.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-47',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct preposition: He is responsible _____ the project.',
    options: ['for', 'to', 'with', 'of'],
    correctAnswer: 0,
    explanation: 'Responsible for is the correct prepositional phrase.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-48',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the synonym for "Eloquent":',
    options: ['Silent', 'Articulate', 'Confused', 'Quiet'],
    correctAnswer: 1,
    explanation: 'Eloquent means fluent or persuasive in speaking or writing.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-49',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Ephemeral":',
    options: ['Temporary', 'Brief', 'Permanent', 'Short'],
    correctAnswer: 2,
    explanation: 'Ephemeral means lasting for a very short time, so permanent is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-50',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the situation was not immediately apparent to everyone.',
    options: ['gravity', 'gravity\'s', 'gravitational', 'gravitation'],
    correctAnswer: 0,
    explanation: 'Gravity here means seriousness or importance of the situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-51',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Hit the nail on the head":',
    options: ['To be exactly right', 'To cause injury', 'To work hard', 'To make a mistake'],
    correctAnswer: 0,
    explanation: 'To hit the nail on the head means to be exactly right or accurate.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-52',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The _____ of the novel was so complex that I had to read it twice.',
    options: ['plot', 'plate', 'plait', 'plaque'],
    correctAnswer: 0,
    explanation: 'Plot refers to the storyline or sequence of events in a novel.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-53',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the antonym for "Meticulous":',
    options: ['Careful', 'Careless', 'Detailed', 'Thorough'],
    correctAnswer: 1,
    explanation: 'Meticulous means very careful and precise, so careless is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-54',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct form: Neither the teacher nor the students _____ present.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 1,
    explanation: 'With "neither...nor", the verb agrees with the subject closer to it (students).',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-55',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Bite the bullet":',
    options: ['To eat something hard', 'To endure a painful situation', 'To fight bravely', 'To make a difficult decision'],
    correctAnswer: 1,
    explanation: 'To bite the bullet means to endure a painful or difficult situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-56',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The _____ of the movie was unexpected and shocking.',
    options: ['climax', 'climax\'s', 'climactic', 'climactical'],
    correctAnswer: 0,
    explanation: 'Climax refers to the most intense point in the movie.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-57',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the antonym for "Concise":',
    options: ['Brief', 'Verbose', 'Clear', 'Precise'],
    correctAnswer: 1,
    explanation: 'Concise means brief and to the point, so verbose (wordy) is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-58',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the problem was not immediately obvious.',
    options: ['complexity', 'complexity\'s', 'complex', 'complexing'],
    correctAnswer: 0,
    explanation: 'Complexity refers to the state of being complex or difficult.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-59',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct meaning: "A piece of cake"',
    options: ['Something delicious', 'Something easy', 'Something expensive', 'Something rare'],
    correctAnswer: 1,
    explanation: 'A piece of cake means something that is very easy to do.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-60',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the synonym for "Diligent":',
    options: ['Lazy', 'Hardworking', 'Intelligent', 'Friendly'],
    correctAnswer: 1,
    explanation: 'Diligent means showing care and conscientiousness in one\'s work.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-61',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that is spelled correctly:',
    options: ['Occassion', 'Occasion', 'Occassion', 'Occasion'],
    correctAnswer: 1,
    explanation: 'Occasion is the correct spelling with one \'s\' and two \'c\'s.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-62',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct form: The team _____ to win the championship.',
    options: ['hopes', 'hope', 'hoping', 'hoped'],
    correctAnswer: 0,
    explanation: 'Team is a collective noun that takes singular verb when acting as a unit.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-63',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Optimistic":',
    options: ['Happy', 'Pessimistic', 'Confident', 'Hopeful'],
    correctAnswer: 1,
    explanation: 'Optimistic means hopeful and confident about the future, so pessimistic is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-64',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the book was so engaging that I couldn\'t put it down.',
    options: ['narrative', 'narratives', 'narrative\'s', 'narrating'],
    correctAnswer: 0,
    explanation: 'Narrative refers to the story or account of events.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-65',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Bite the bullet":',
    options: ['To eat something hard', 'To endure a painful situation', 'To fight bravely', 'To make a difficult decision'],
    correctAnswer: 1,
    explanation: 'To bite the bullet means to endure a painful or difficult situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-66',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The _____ of the novel was so complex that I had to read it twice.',
    options: ['plot', 'plate', 'plait', 'plaque'],
    correctAnswer: 0,
    explanation: 'Plot refers to the storyline or sequence of events in a novel.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-67',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the antonym for "Meticulous":',
    options: ['Careful', 'Careless', 'Detailed', 'Thorough'],
    correctAnswer: 1,
    explanation: 'Meticulous means very careful and precise, so careless is its antonym.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-68',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the correct form: Neither the teacher nor the students _____ present.',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 1,
    explanation: 'With "neither...nor", the verb agrees with the subject closer to it (students).',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-69',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Hit the nail on the head":',
    options: ['To be exactly right', 'To cause injury', 'To work hard', 'To make a mistake'],
    correctAnswer: 0,
    explanation: 'To hit the nail on the head means to be exactly right or accurate.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-70',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that best completes the sentence: The weather was so _____ that we decided to stay indoors.',
    options: ['pleasant', 'terrible', 'beautiful', 'warm'],
    correctAnswer: 1,
    explanation: 'The context suggests unfavorable weather conditions.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-71',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct synonym for "Ubiquitous":',
    options: ['Rare', 'Common', 'Everywhere', 'Nowhere'],
    correctAnswer: 2,
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-72',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the antonym for "Benevolent":',
    options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Benevolent means kind and generous, so its antonym is malevolent (evil or harmful).',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-73',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Fill in the blank: The _____ of the situation was not immediately apparent to everyone.',
    options: ['gravity', 'gravity\'s', 'gravitational', 'gravitation'],
    correctAnswer: 0,
    explanation: 'Gravity here means seriousness or importance of the situation.',
    difficulty: 'medium',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-74',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Select the correct meaning of the idiom "Break the ice":',
    options: ['To cause trouble', 'To start a conversation', 'To end a relationship', 'To solve a problem'],
    correctAnswer: 1,
    explanation: 'To break the ice means to initiate conversation in a social setting.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },
  {
    id: 'tcs-nqt-verb-75',
    sectionId: 'verbal-ability',
    questionType: 'single-choice',
    question: 'Choose the word that is spelled correctly:',
    options: ['Accomodate', 'Accommodate', 'Accommodate', 'Accommodate'],
    correctAnswer: 2,
    explanation: 'Accommodate is the correct spelling with double \'m\' and double \'c\'.',
    difficulty: 'easy',
    topic: 'Verbal Ability'
  },

  // Part A - Foundation Section - Reasoning Ability (20 questions)
  {
    id: 'tcs-nqt-reason-1',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'In a certain code language, if "PENCIL" is written as "QFOEJM", how is "BOOK" written?',
    options: ['CPPL', 'CQQL', 'CPQL', 'CQPL'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward in the alphabet: P→Q, E→F, N→O, C→D, I→J, L→M. So BOOK becomes CPPL.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-2',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If A + B means A is the brother of B; A - B means A is the sister of B; A × B means A is the father of B. Then which of the following means U is the uncle of P?',
    options: ['U + N × P', 'U - N × P', 'U × N + P', 'N × U + P'],
    correctAnswer: 0,
    explanation: 'U + N × P means U is the brother of N, and N is the father of P. So U is the uncle of P.',
    difficulty: 'hard',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-3',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'In a row of 40 children, R is 11th from the right end and T is 31st from the left end. How many children are there between R and T?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 0,
    explanation: 'R is 11th from right = 30th from left. T is 31st from left. So there are 0 children between them.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-4',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If in a certain language, "MADRAS" is coded as "NBESBT", how is "BOMBAY" coded?',
    options: ['CPNCBZ', 'CPNCBX', 'CPNCBY', 'CPNCBZ'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position forward: M→N, A→B, D→E, R→S, A→B, S→T. So BOMBAY becomes CPNCBZ.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-5',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'A clock shows 3:15. What is the angle between the hour and minute hands?',
    options: ['7.5°', '15°', '22.5°', '30°'],
    correctAnswer: 0,
    explanation: 'At 3:15, hour hand is at 3.25 hours = 97.5°, minute hand is at 90°. Difference = 7.5°.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-6',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If 5 + 3 = 28, 9 + 1 = 810, 8 + 6 = 214, then 7 + 3 = ?',
    options: ['410', '310', '210', '110'],
    correctAnswer: 0,
    explanation: 'Pattern: (a+b) followed by (a-b). 5+3=8, 5-3=2, so 28. 7+3=10, 7-3=4, so 410.',
    difficulty: 'hard',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-7',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'In a family, there are two fathers, two mothers, one grandfather, one grandmother, two sons, one daughter, one brother, and two sisters. What is the minimum number of persons in the family?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'Minimum 6 persons: Grandfather, Grandmother, Father, Mother, Son, Daughter.',
    difficulty: 'hard',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-8',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If "PENCIL" is written as "QFOEJM", then "ERASER" is written as:',
    options: ['FSBTFS', 'FSBTSF', 'FSBTFS', 'FSBTSF'],
    correctAnswer: 0,
    explanation: 'Each letter moves one position forward: E→F, R→S, A→B, S→T, E→F, R→S. So ERASER becomes FSBTFS.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-9',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'A cube is painted on all sides and then cut into 27 smaller cubes. How many cubes have exactly 2 faces painted?',
    options: ['8', '12', '6', '4'],
    correctAnswer: 1,
    explanation: 'Cubes with exactly 2 faces painted are on the edges (excluding corners). A 3×3×3 cube has 12 edges.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-10',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If A = 1, B = 2, C = 3, ..., Z = 26, then what is the value of "TCS"?',
    options: ['20+3+19', '19+3+18', '20+3+18', '19+3+19'],
    correctAnswer: 0,
    explanation: 'T=20, C=3, S=19. So TCS = 20+3+19 = 42.',
    difficulty: 'easy',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-11',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'In a certain code, "256" means "red sweet apple", "637" means "eat a sweet", "358" means "eat a apple". Which number represents "red"?',
    options: ['2', '5', '6', '3'],
    correctAnswer: 0,
    explanation: 'From 256 and 637, "sweet" is 6. From 256 and 358, "apple" is 5. So "red" is 2.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-12',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If 2×3 = 10, 3×4 = 21, 4×5 = 36, then 5×6 = ?',
    options: ['45', '55', '65', '75'],
    correctAnswer: 1,
    explanation: 'Pattern: a×b = (a+b)×(a-b). 2×3 = 5×1 = 5, 3×4 = 7×1 = 7, 4×5 = 9×1 = 9, 5×6 = 11×1 = 11.',
    difficulty: 'hard',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-13',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'A man walks 5 km towards North, then turns right and walks 3 km, then turns right again and walks 5 km. How far is he from the starting point?',
    options: ['3 km', '5 km', '7 km', '13 km'],
    correctAnswer: 0,
    explanation: 'He walks 5N, 3E, 5S. Net displacement: 3 km East.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-14',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If "MADRAS" is coded as "NBESBT", then "CALCUTTA" is coded as:',
    options: ['DBMDVUUB', 'DBMDVUUA', 'DBMDVUUC', 'DBMDVUUD'],
    correctAnswer: 0,
    explanation: 'Each letter moves one position forward: C→D, A→B, L→M, C→D, U→V, T→U, T→U, A→B.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-15',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'In a row of 50 children, A is 11th from the left and B is 31st from the right. How many children are between A and B?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: 'A is 11th from left = 40th from right. B is 31st from right. So 40-31-1 = 8 children between them.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-16',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If 3×4 = 12, 4×5 = 20, 5×6 = 30, then 6×7 = ?',
    options: ['35', '42', '49', '56'],
    correctAnswer: 1,
    explanation: 'Pattern: a×b = a×b. So 6×7 = 42.',
    difficulty: 'easy',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-17',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'A clock shows 6:30. What is the angle between the hour and minute hands?',
    options: ['15°', '30°', '45°', '60°'],
    correctAnswer: 0,
    explanation: 'At 6:30, hour hand is at 6.5 hours = 195°, minute hand is at 180°. Difference = 15°.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-18',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If "PENCIL" is written as "QFOEJM", then "PAPER" is written as:',
    options: ['QBQFS', 'QBQFR', 'QBQFT', 'QBQFQ'],
    correctAnswer: 0,
    explanation: 'Each letter moves one position forward: P→Q, A→B, P→Q, E→F, R→S. So PAPER becomes QBQFS.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-19',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'In a family of 6 members, there are 2 fathers, 2 mothers, 3 sons, and 1 daughter. What is the minimum number of persons?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: 'Minimum 5 persons: Grandfather, Father, Mother, Son, Daughter.',
    difficulty: 'medium',
    topic: 'Reasoning Ability'
  },
  {
    id: 'tcs-nqt-reason-20',
    sectionId: 'reasoning-ability',
    questionType: 'single-choice',
    question: 'If A = 1, B = 2, ..., Z = 26, then what is the sum of "TCS"?',
    options: ['42', '43', '44', '45'],
    correctAnswer: 0,
    explanation: 'T=20, C=3, S=19. Sum = 20+3+19 = 42.',
    difficulty: 'easy',
    topic: 'Reasoning Ability'
  },

  // Part B - Advanced - Advanced Quants and Logical Reasoning (15 questions)
  {
    id: 'tcs-nqt-code-1',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of binary search algorithm?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'Binary search has logarithmic time complexity O(log n).',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-2',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is best for implementing a stack?',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 0,
    explanation: 'Array is the most efficient for stack operations (push/pop) with O(1) time complexity.',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-3',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of bubble sort?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
    correctAnswer: 2,
    explanation: 'Bubble sort has quadratic time complexity O(n²) in worst and average cases.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-4',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which of the following is NOT a valid HTTP method?',
    options: ['GET', 'POST', 'PUT', 'SEND'],
    correctAnswer: 3,
    explanation: 'SEND is not a standard HTTP method. Common methods are GET, POST, PUT, DELETE, PATCH, etc.',
    difficulty: 'easy',
    topic: 'Coding'
  },
  {
    id: 'tcs-nqt-code-5',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the primary key in a database table?',
    options: [
      'A key that can be null',
      'A key that uniquely identifies each record',
      'A key that references another table',
      'A key that is automatically generated'
    ],
    correctAnswer: 1,
    explanation: 'A primary key uniquely identifies each record in a table and cannot be null.',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-6',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which programming paradigm does Java primarily follow?',
    options: ['Procedural', 'Object-Oriented', 'Functional', 'Logic'],
    correctAnswer: 1,
    explanation: 'Java is primarily an object-oriented programming language.',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-7',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of merge sort?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
    correctAnswer: 1,
    explanation: 'Merge sort has O(n log n) time complexity in all cases.',
    difficulty: 'medium',
    topic: 'Coding'
  },
  {
    id: 'tcs-nqt-code-8',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is best for implementing a priority queue?',
    options: ['Array', 'Linked List', 'Heap', 'Stack'],
    correctAnswer: 2,
    explanation: 'Heap provides O(log n) insertion and O(1) extraction of max/min element.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-9',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the space complexity of merge sort?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'Merge sort requires O(n) additional space for merging sorted subarrays.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-10',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which SQL command is used to retrieve data from a database?',
    options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'],
    correctAnswer: 1,
    explanation: 'SELECT is used to retrieve data from database tables.',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-11',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of quicksort in the worst case?',
    options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
    correctAnswer: 1,
    explanation: 'Worst case occurs when pivot is always the smallest or largest element.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-12',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which of the following is NOT a valid HTTP method?',
    options: ['GET', 'POST', 'PUT', 'SEND'],
    correctAnswer: 3,
    explanation: 'SEND is not a standard HTTP method. Common methods are GET, POST, PUT, DELETE, PATCH, etc.',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-13',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the difference between a stack and a queue?',
    options: [
      'Stack is LIFO, Queue is FIFO',
      'Stack is FIFO, Queue is LIFO',
      'Both are LIFO',
      'Both are FIFO'
    ],
    correctAnswer: 0,
    explanation: 'Stack follows Last In First Out (LIFO), while Queue follows First In First Out (FIFO).',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-14',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which sorting algorithm has the best average-case time complexity?',
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: 'Quick Sort has O(n log n) average-case time complexity, which is optimal for comparison-based sorting.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-15',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of linear search?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'Linear search has O(n) time complexity as it may need to check every element.',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-16',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of binary search in the worst case?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'Binary search has O(log n) time complexity in worst case as it divides the search space in half each time.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-17',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is best for implementing a queue?',
    options: ['Array', 'Linked List', 'Stack', 'Tree'],
    correctAnswer: 1,
    explanation: 'Linked List provides O(1) enqueue and dequeue operations, making it ideal for queue implementation.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-18',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the space complexity of quicksort in the worst case?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'Quicksort uses O(n) space in worst case due to the call stack depth.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-19',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which algorithm is used to find the shortest path in a weighted graph?',
    options: ['BFS', 'DFS', 'Dijkstra', 'Bubble Sort'],
    correctAnswer: 2,
    explanation: 'Dijkstra\'s algorithm is used to find the shortest path between nodes in a weighted graph.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-20',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of merge sort in all cases?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
    correctAnswer: 1,
    explanation: 'Merge sort has O(n log n) time complexity in best, average, and worst cases.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-21',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is used to implement a priority queue efficiently?',
    options: ['Array', 'Linked List', 'Heap', 'Stack'],
    correctAnswer: 2,
    explanation: 'Heap provides O(log n) insertion and O(1) extraction of max/min element for priority queue.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-22',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of insertion sort in the worst case?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
    correctAnswer: 2,
    explanation: 'Insertion sort has O(n²) time complexity in worst case when array is in reverse order.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-23',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which sorting algorithm is stable?',
    options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 2,
    explanation: 'Merge sort is a stable sorting algorithm, meaning equal elements maintain their relative order.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-24',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of bubble sort in the best case?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
    correctAnswer: 0,
    explanation: 'Bubble sort has O(n) time complexity in best case when array is already sorted.',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-25',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is best for implementing a hash table?',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 0,
    explanation: 'Array is used to implement hash table buckets for O(1) average case access.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-26',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of depth-first search (DFS)?',
    options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'],
    correctAnswer: 2,
    explanation: 'DFS visits each vertex and edge at most once, giving O(V + E) time complexity.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-27',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which algorithm is used to find cycles in a directed graph?',
    options: ['BFS', 'DFS', 'Topological Sort', 'Dijkstra'],
    correctAnswer: 1,
    explanation: 'DFS with color coding (white/gray/black) is used to detect cycles in directed graphs.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-28',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of breadth-first search (BFS)?',
    options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'],
    correctAnswer: 2,
    explanation: 'BFS visits each vertex and edge at most once, giving O(V + E) time complexity.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-29',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is used to implement a binary search tree?',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 2,
    explanation: 'Binary search tree is a tree data structure where each node has at most two children.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-30',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of searching in a balanced binary search tree?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'Balanced BST has O(log n) search time as it maintains logarithmic height.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-31',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which sorting algorithm has the best space complexity?',
    options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'],
    correctAnswer: 2,
    explanation: 'Heap sort has O(1) space complexity as it sorts in-place.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-32',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of finding the minimum element in a heap?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 0,
    explanation: 'In a min-heap, the minimum element is always at the root, so it\'s O(1).',
    difficulty: 'easy',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-33',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which algorithm is used to find the strongly connected components in a graph?',
    options: ['BFS', 'DFS', 'Kosaraju', 'Dijkstra'],
    correctAnswer: 2,
    explanation: 'Kosaraju\'s algorithm uses DFS to find strongly connected components in directed graphs.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-34',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of inserting an element into a heap?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'Heap insertion requires bubbling up the element, which takes O(log n) time.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-35',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is best for implementing a symbol table?',
    options: ['Array', 'Linked List', 'Hash Table', 'Stack'],
    correctAnswer: 2,
    explanation: 'Hash table provides O(1) average case lookup for symbol table implementation.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-36',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of deleting an element from a binary search tree?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'BST deletion has O(log n) time complexity in balanced trees.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-37',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which algorithm is used to find the minimum spanning tree of a graph?',
    options: ['BFS', 'DFS', 'Kruskal', 'Dijkstra'],
    correctAnswer: 2,
    explanation: 'Kruskal\'s algorithm finds the minimum spanning tree by sorting edges and adding them greedily.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-38',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of topological sorting?',
    options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'],
    correctAnswer: 2,
    explanation: 'Topological sorting uses DFS and visits each vertex and edge once, giving O(V + E).',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-39',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is used to implement a cache?',
    options: ['Array', 'Linked List', 'Hash Map', 'Stack'],
    correctAnswer: 2,
    explanation: 'Hash map provides O(1) lookup for cache implementation with key-value pairs.',
    difficulty: 'medium',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-40',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of finding the kth largest element in an unsorted array?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
    correctAnswer: 1,
    explanation: 'Using quickselect algorithm, finding kth largest element takes O(n) average case.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-41',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which algorithm is used to find the longest common subsequence?',
    options: ['BFS', 'DFS', 'Dynamic Programming', 'Greedy'],
    correctAnswer: 2,
    explanation: 'LCS uses dynamic programming with a 2D table to find the longest common subsequence.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-42',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of the Floyd-Warshall algorithm?',
    options: ['O(V)', 'O(V²)', 'O(V³)', 'O(V⁴)'],
    correctAnswer: 2,
    explanation: 'Floyd-Warshall has O(V³) time complexity as it uses three nested loops.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-43',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which data structure is best for implementing a LRU cache?',
    options: ['Array', 'Linked List', 'Hash Map + Doubly Linked List', 'Stack'],
    correctAnswer: 2,
    explanation: 'LRU cache uses hash map for O(1) lookup and doubly linked list for O(1) removal.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-44',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'What is the time complexity of the Bellman-Ford algorithm?',
    options: ['O(V)', 'O(V²)', 'O(V × E)', 'O(V³)'],
    correctAnswer: 2,
    explanation: 'Bellman-Ford has O(V × E) time complexity as it relaxes all edges V-1 times.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  },
  {
    id: 'tcs-nqt-code-45',
    sectionId: 'advanced-quants-logical',
    questionType: 'single-choice',
    question: 'Which algorithm is used to find the articulation points in a graph?',
    options: ['BFS', 'DFS', 'Tarjan', 'Dijkstra'],
    correctAnswer: 2,
    explanation: 'Tarjan\'s algorithm uses DFS to find articulation points (cut vertices) in a graph.',
    difficulty: 'hard',
    topic: 'Advanced Quantitative'
  }
];

// Helper function to shuffle questions
export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get questions by section
export const getTcsNqtQuestionsBySection = (sectionId: string): Question[] => {
  return tcsNqtQuestions.filter(question => question.sectionId === sectionId);
};

// Helper function to get shuffled questions by section
export const getShuffledTcsNqtQuestionsBySection = (sectionId: string): Question[] => {
  return shuffleQuestions(getTcsNqtQuestionsBySection(sectionId));
};

// Helper function to get all TCS NQT questions for the new structure
export const getAllTcsNqtQuestions = (): Question[] => {
  return tcsNqtQuestions;
};

// Helper function to get questions by subsection (for the new structure)
export const getTcsNqtQuestionsBySubsection = (subsectionId: string): Question[] => {
  return tcsNqtQuestions.filter(question => question.sectionId === subsectionId);
}; 
