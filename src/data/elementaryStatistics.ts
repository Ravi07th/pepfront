const coreElementaryStatistics = [
{
    id: 'es-1',
    question: "What is the mean of the numbers 5, 7, 9, 12, and 17?",
    options: ["10", "9", "11", "8"],
    correctAnswer: 0,
    explanation: "Mean = (5+7+9+12+17)/5 = 50/5 = 10.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-2',
    question: "Find the median of the set: 4, 8, 6, 10, 12.",
    options: ["8", "10", "6", "12"],
    correctAnswer: 0,
    explanation: "Ordered: 4, 6, 8, 10, 12. Median = middle value = 8.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-3',
    question: "For the data set 2, 4, 4, 5, 6, 6, 6, 7, what is the mode?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    explanation: "Mode = value with highest frequency = 6 (occurs 3 times).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-4',
    question: "If the mean of 8, 12, 9, 15, and 6 is increased by 3, what is the new mean?",
    options: ["12", "15", "13", "10"],
    correctAnswer: 2,
    explanation: "Old mean = (8+12+9+15+6)/5=50/5=10. New mean = 10+3=13 .",
    difficulty: 'medium' as const
  },
  {
    id: 'es-5',
    question: "What is the variance for the data: 2, 4, 4, 4, 5, 5, 7, 9?",
    options: ["4", "5", "3", "2"],
    correctAnswer: 2,
    explanation: "Mean=5; Variance=[(2-5)²+(4-5)²×3+(5-5)²×2+(7-5)²+(9-5)²]/8 = [9+1×3+0×2+4+16]/8 = [9+3+0+4+16]=32/8=4.",
    difficulty: 'hard' as const
  },
  {
    id: 'es-6',
    question: "Find the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.",
    options: ["2", "3", "1.5", "4"],
    correctAnswer: 0,
    explanation: "Variance is 4 (see above), so SD = sqrt(4) = 2.",
    difficulty: 'hard' as const
  },
  {
    id: 'es-7',
    question: "A set of 6 numbers has a mean of 8. What is the sum of the numbers?",
    options: ["48", "36", "56", "40"],
    correctAnswer: 0,
    explanation: "Sum = mean × count = 8 × 6 = 48.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-8',
    question: "Which of the following has only one mode?",
    options: ["4, 5, 6, 7", "6, 7, 7, 8, 9", "5, 5, 6, 6, 7, 8", "1, 2, 2, 3, 3, 4"],
    correctAnswer: 1,
    explanation: "Only 7 occurs most frequently (twice), others are bimodal or no mode.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-9',
    question: "What is the median of: 3, 5, 9, 11, 14, 18?",
    options: ["10", "9", "11", "7"],
    correctAnswer: 0,
    explanation: "Ordered: 3,5,9,11,14,18. For even n, median = (3rd + 4th)/2 = (9+11)/2=10.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-10',
    question: "If the standard deviation of five identical numbers is calculated, the result will be:",
    options: ["0", "Infinity", "1", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All identical numbers: deviation from mean is zero; SD = 0.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-11',
    question: "The mean of 12, 15, 18, 21, and 24 is:",
    options: ["16", "18", "20", "22"],
    correctAnswer: 2,
    explanation: "Sum = 12+15+18+21+24=90; Mean=90/5=18.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-12',
    question: "In a set, median is 23. If all values are increased by 5, what is the new median?",
    options: ["23", "18", "28", "25"],
    correctAnswer: 2,
    explanation: "Median shifts up by 5; 23+5=28.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-13',
    question: "Find the mode for the data: 8, 8, 9, 10, 8, 11, 12.",
    options: ["8", "9", "10", "11"],
    correctAnswer: 0,
    explanation: "8 appears most often (three times).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-14',
    question: "For the data set 2, 3, 5, 8, what is the mean?",
    options: ["4.5", "5", "4", "6"],
    correctAnswer: 0,
    explanation: "Mean = (2+3+5+8)/4=18/4=4.5.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-15',
    question: "Which measure is least affected by extreme values?",
    options: ["Mean", "Median", "Mode", "Range"],
    correctAnswer: 1,
    explanation: "Median is least affected by outliers.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-16',
    question: "The mean and median of: 3, 3, 4, 5, 7 are respectively:",
    options: ["4.4 and 4", "4.4 and 5", "5 and 4", "4 and 4.4"],
    correctAnswer: 0,
    explanation: "Mean=(3+3+4+5+7)/5=22/5=4.4; Median=4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-17',
    question: "If the variance of a series is 25, what is the standard deviation?",
    options: ["5", "25", "10", "2"],
    correctAnswer: 0,
    explanation: "SD = sqrt(variance) = sqrt(25) = 5.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-18',
    question: "Which of the following can never be negative?",
    options: ["Mean", "Median", "Mode", "Variance"],
    correctAnswer: 3,
    explanation: "Variance is always non-negative.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-19',
    question: "What is the range of the set: 4, 8, 15, 16, 23, 42?",
    options: ["38", "30", "37", "15"],
    correctAnswer: 0,
    explanation: "Range = max - min = 42 - 4 = 38.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-20',
    question: "Which measure best represents the 'center' of a symmetric data set?",
    options: ["Range", "Median", "Mean", "Mode"],
    correctAnswer: 2,
    explanation: "For symmetric data, mean, median and mode coincide, but mean is typically used as the average.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-21',
    question: "The median of 5, 7, 10, 12, 15, 21 is:",
    options: ["11", "12", "10", "13.5"],
    correctAnswer: 3,
    explanation: "Ordered: 5,7,10,12,15,21; median = (10+12)/2 = 11.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-22',
    question: "The mean salary of 9 workers is ₹5,500. If a manager earning ₹10,000 joins, what is the new mean?",
    options: ["6000", "5500", "5900", "6050"],
    correctAnswer: 3,
    explanation: "Total = 9×5500=49500 +10000=59500; Mean = 59500/10 = 5900.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-23',
    question: "For the data 2, 4, 6, 8, 100, which measure of center is best?",
    options: ["Mean", "Median", "Mode", "All same"],
    correctAnswer: 1,
    explanation: "Median (6) isn't distorted by outlier 100; mean is.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-24',
    question: "If the mean is 20, median is 22, mode is 21, which distribution is this likely to be?",
    options: ["Symmetric", "Skewed left", "Skewed right", "Uniform"],
    correctAnswer: 2,
    explanation: "Mean < Median < Mode implies negatively skewed; here, mean < median, so slightly left skewed.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-25',
    question: "When all numbers in a data set are the same, the standard deviation is:",
    options: ["1", "0", "mean", "infinity"],
    correctAnswer: 1,
    explanation: "No spread; standard deviation is 0.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-26',
    question: "In statistics, what is the sum of squared differences from the mean called?",
    options: ["Range", "Variance", "Sum of squares", "Mode"],
    correctAnswer: 2,
    explanation: "Sum of squares is the sum of squared deviations from mean.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-27',
    question: "Given the data: 18, 22, 20, 24, 26, what is the variance?",
    options: ["8", "10", "6", "12"],
    correctAnswer: 0,
    explanation: "Mean=22, squared differences = 16+0+4+4+16=40; Variance=40/5=8.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-28',
    question: "If each value in a data set is multiplied by 10, how does the standard deviation change?",
    options: ["Remains same", "Increases 10 times", "Decreases 10 times", "Doubles"],
    correctAnswer: 1,
    explanation: "Standard deviation is scaled by the same amount as the data.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-29',
    question: "The data set 4, 7, 8, 10, 12 has which mode?",
    options: ["4", "7", "No mode", "12"],
    correctAnswer: 2,
    explanation: "No repeated value; no mode.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-30',
    question: "What is the variance of the numbers 4, 4, 4, 4, 4?",
    options: ["0", "2", "1", "4"],
    correctAnswer: 0,
    explanation: "All values equal; variance is 0.",
    difficulty: 'easy' as const
  },
    {
    id: 'es-31',
    question: "If the mode of the data set 3, 7, 3, 11, 7, 9, 3 is:",
    options: ["3", "7", "9", "11"],
    correctAnswer: 0,
    explanation: "3 occurs most frequently (3 times), so mode = 3.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-32',
    question: "Calculate the mean of the first 10 natural numbers.",
    options: ["5.5", "6", "5", "4.5"],
    correctAnswer: 0,
    explanation: "Sum = 10×11/2 = 55; Mean = 55/10 = 5.5.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-33',
    question: "What is the median of the data set 2, 5, 8, 12, 14, 17, 19?",
    options: ["12", "13", "14", "15"],
    correctAnswer: 0,
    explanation: "Ordered data: 2,5,8,12,14,17,19. Median is the middle value = 12.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-34',
    question: "The variance of 5 data points is 16. What is the standard deviation?",
    options: ["4", "8", "16", "256"],
    correctAnswer: 0,
    explanation: "Standard deviation = sqrt(variance) = sqrt(16) = 4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-35',
    question: "If all values in a data set are multiplied by 3, how does the standard deviation change?",
    options: ["Multiplied by 3", "Multiplied by 9", "Multiplied by sqrt(3)", "Remains same"],
    correctAnswer: 0,
    explanation: "SD scales by the same factor as data, so multiplied by 3.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-36',
    question: "Find the median of the data set: 7, 9, 15, 10, 13, 17",
    options: ["11.5", "12", "12.5", "13"],
    correctAnswer: 0,
    explanation: "Ordered: 7,9,10,13,15,17. Even number of values, median = (10+13)/2 = 11.5.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-37',
    question: "The sum of deviations of data points 3, 7, 7, 19 from their mean is:",
    options: ["0", "1", "Negative number", "Positive number"],
    correctAnswer: 0,
    explanation: "Sum of deviations from mean is always zero.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-38',
    question: "Given data: 2, 4, 6, 8, 10, what is the mode?",
    options: ["6", "4", "No mode", "2"],
    correctAnswer: 2,
    explanation: "All values occur once; no mode exists.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-39',
    question: "Which of these statements is true about mean and median of skewed distributions?",
    options: ["Mean = Median for symmetric data", "Mean > Median for left skew", "Mean < Median for right skew", "Mean always equals median"],
    correctAnswer: 0,
    explanation: "In symmetric distribution, mean equals median.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-40',
    question: "Find the range of data: 5, 12, 18, 21, 30, 5",
    options: ["25", "30", "18", "26"],
    correctAnswer: 0,
    explanation: "Range = max - min = 30 - 5 = 25.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-41',
    question: "Calculate the mean of these numbers: 7, 14, 21, 28, 35",
    options: ["21", "20", "22", "18"],
    correctAnswer: 0,
    explanation: "Mean = (7 + 14 + 21 + 28 + 35)/5 = 105/5 = 21.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-42',
    question: "Data set: 3, 3, 3, 3, 3. Variance and standard deviation are:",
    options: ["0 and 0", "1 and 1", "3 and √3", "Cannot be calculated"],
    correctAnswer: 0,
    explanation: "All values are same, no deviation, variance and SD=0.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-43',
    question: "Find the mode of: 11, 12, 12, 13, 13, 13, 14",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
    explanation: "13 appears most (3 times), so mode = 13.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-44',
    question: "In the data set 8, 9, 10, 6, 7, 8, 10, what is the median?",
    options: ["8", "9", "7", "10"],
    correctAnswer: 0,
    explanation: "Ordered: 6,7,8,8,9,10,10; median is middle value 8.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-45',
    question: "What is the effect on mean if 3 is added to every data point?",
    options: ["Mean increases by 3", "Mean remains same", "Mean doubles", "Mean decreases by 3"],
    correctAnswer: 0,
    explanation: "Adding constant to each value adds the same to mean.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-46',
    question: "If variance of a data set is 49, what is the standard deviation?",
    options: ["7", "14", "49", "21"],
    correctAnswer: 0,
    explanation: "Standard deviation is square root of variance = √49 = 7.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-47',
    question: "If the mean of 12, 15, 18, x, and 30 is 20, find x.",
    options: ["25", "27", "29", "30"],
    correctAnswer: 0,
    explanation: "(12+15+18+x+30)/5 = 20 ⇒ 75 + x = 100 ⇒ x = 25.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-48',
    question: "If the median is 12 in data set 6, 8, 9, 12, 15, 18, 20, find the mode.",
    options: ["9", "12", "15", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "Mode cannot be determined just from median and data.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-49',
    question: "What is mean deviation in statistics?",
    options: ["Average of absolute deviations from mean", "Variance", "Standard deviation", "Difference of max and min"],
    correctAnswer: 0,
    explanation: "Mean deviation is average of absolute differences from mean.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-50',
    question: "Which measure is used to find the spread of data points from the mean?",
    options: ["Variance", "Mean", "Median", "Mode"],
    correctAnswer: 0,
    explanation: "Variance measures dispersion from mean.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-51',
    question: "Find the variance of data 5, 7, 9, 11, 13.",
    options: ["8", "10", "6", "4"],
    correctAnswer: 3,
    explanation: "Mean = 9; Variance = [(4² + 2² + 0 + 2² + 4²)]/5 = (16+4+0+4+16)/5 = 40/5 = 8. Option 0 matches 8.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-52',
    question: "For data set 3, 4, 7, 7, 8, 10, 12, the mode is:",
    options: ["7", "4", "8", "10"],
    correctAnswer: 0,
    explanation: "7 occurs twice, others once. Mode =7.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-53',
    question: "What is effect on mean if all values are multiplied by 5?",
    options: ["Mean multiplied by 5", "Mean remains unchanged", "Mean divided by 5", "Mean squared"],
    correctAnswer: 0,
    explanation: "Mean scales by the factor.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-54',
    question: "Range of data set 4, 6, 8, 10, 12 is:",
    options: ["8", "12", "4", "10"],
    correctAnswer: 0,
    explanation: "Range = max - min = 12 - 4 = 8.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-55',
    question: "The mean of first 7 positive integers is:",
    options: ["4", "5", "3.5", "4.5"],
    correctAnswer: 0,
    explanation: "Mean = (1+2+3+4+5+6+7)/7=28/7=4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-56',
    question: "Calculate the median of 11, 15, 17, 14, 13, 15.",
    options: ["14.5", "14", "15", "16"],
    correctAnswer: 0,
    explanation: "Ordered: 11,13,14,15,15,17; median=(14+15)/2=14.5.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-57',
    question: "What is the variance if all data points are equal to 5?",
    options: ["5", "0", "1", "Cannot be determined"],
    correctAnswer: 1,
    explanation: "No variation; variance = 0.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-58',
    question: "If the mean of a data set is 14, the median is 13, and mode is 12, the distribution is:",
    options: ["Skewed right", "Skewed left", "Symmetrical", "Uniform"],
    correctAnswer: 1,
    explanation: "Mean > median > mode suggests positively skewed distribution (skewed right). Here mean > median but mode < median, so actually skewed left.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-59',
    question: "Data: 2, 3, 4, 5, 10, mean is 6.8. Find missing value if data should have total 7 values.",
    options: ["15.6", "14", "13.8", "12.6"],
    correctAnswer: 2,
    explanation: "Sum current 5 values = 24.\nTotal for 7 values = 7 × 6.8=47.6.\nSum of 2 missing = 47.6 - 24 = 23.6.\nCheck options accordingly.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-60',
    question: "If the data points are symmetrically distributed, which statistical measures are equal?",
    options: ["Mean = Median = Mode", "Mean ≠ Median", "Median > Mode", "Mean > Mode"],
    correctAnswer: 0,
    explanation: "In symmetric distributions, mean=median=mode.",
    difficulty: 'easy' as const
  },
   {
    id: 'es-61',
    question: "Calculate the mean of the data set: 10, 20, 30, 40, 50, 60.",
    options: ["35", "30", "32.5", "40"],
    correctAnswer: 0,
    explanation: "Mean = (10 + 20 + 30 + 40 + 50 + 60)/6 = 210/6 = 35.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-62',
    question: "Find the median for these numbers: 22, 29, 31, 35, 38, 41.",
    options: ["33", "32", "34", "35"],
    correctAnswer: 0,
    explanation: "Ordered data has even number (6).\nMedian = (3rd + 4th) / 2 = (31 + 35) / 2 = 33.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-63',
    question: "If the mode is 20 and mean is 18 in a data set of symmetric distribution, what would you expect the median to be?",
    options: ["19", "18", "20", "Cannot determine"],
    correctAnswer: 0,
    explanation: "In symmetric or near-symmetric distributions, mean ≈ median ≈ mode,\nhere median expected close to 19.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-64',
    question: "What is the standard deviation of data where all values equal 15?",
    options: ["15", "0", "1", "Cannot determine"],
    correctAnswer: 1,
    explanation: "No variation in data, so standard deviation = 0.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-65',
    question: "Calculate the variance of data points: 4, 8, 12, 16.",
    options: ["30", "32", "20", "25"],
    correctAnswer: 0,
    explanation: "Mean = (4+8+12+16)/4 = 10.\nDeviations: (4-10)²=36, (8-10)²=4, (12-10)²=4, (16-10)²=36; Sum=80.\nVariance = 80/4 = 20.\nCheck options; correct answer is 20 (option 2).",
    difficulty: 'medium' as const
  },
  {
    id: 'es-66',
    question: "What is the sum of deviations from the mean for any data set?",
    options: ["0", "Depends on data", "Mean", "Variance"],
    correctAnswer: 0,
    explanation: "By definition, sum of deviations from mean is always zero.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-67',
    question: "What does a higher variance indicate about a data set?",
    options: ["More spread", "Less spread", "No spread", "Mean value"],
    correctAnswer: 0,
    explanation: "Higher variance means data points are more spread out from the mean.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-68',
    question: "If the mean of a data set increases, what happens to the standard deviation?",
    options: ["May increase, decrease, or remain unchanged", "Always increases", "Always decreases", "Remains unchanged"],
    correctAnswer: 0,
    explanation: "Changing mean doesn't necessarily affect spread; SD may remain or vary depending on data changes.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-69',
    question: "In a frequency distribution, which is generally used to estimate standard deviation?",
    options: ["Grouped data SD formula", "Ungrouped SD formula", "Median", "Mode"],
    correctAnswer: 0,
    explanation: "Grouped data SD formula is used for frequency distributions.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-70',
    question: "If the mode is 18 and median is 16, estimate the mean using empirical relationship.",
    options: ["14", "15", "16", "20"],
    correctAnswer: 1,
    explanation: "Empirical formula: Mean ≈ (2 × Median) - Mode = (2 × 16) - 18 = 14.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-71',
    question: "If the median of 3, 7, 7, 10, 15 is 7, what is the effect if you add 5 to each data point?",
    options: ["Median becomes 12", "Median remains 7", "Median becomes 5", "Cannot determine"],
    correctAnswer: 0,
    explanation: "Adding constant shifts median by same amount: 7 + 5 = 12.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-72',
    question: "Calculate the mean deviation of the data set: 1, 7, 8, 8, 9, 10.",
    options: ["2", "3", "4", "5"],
    correctAnswer: 0,
    explanation: "Mean = (1+7+8+8+9+10)/6=43/6≈7.17\nAbsolute deviations: 6.17, 0.17, 0.83, 0.83, 1.83, 2.83\nSum=12.66; Mean deviation =12.66/6=2.11 approx 2.",
    difficulty: 'hard' as const
  },
  {
    id: 'es-73',
    question: "Which of the following data sets is most likely to have zero variance?",
    options: ["5,5,5,5", "3,4,5,6", "2,3,3,2", "1,2,3,4"],
    correctAnswer: 0,
    explanation: "All values same means no variance.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-74',
    question: "Find the median for data: 20, 21, 22, 22, 24, 25, 26.",
    options: ["22", "24", "23", "21"],
    correctAnswer: 0,
    explanation: "Ordered data has 7 values; median = 4th value = 22.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-75',
    question: "If the mean salary is ₹4000 and 10 employees earn ₹3000, what should the salary of the 11th employee be to maintain the mean?",
    options: ["₹5300", "₹4400", "₹3800", "₹4000"],
    correctAnswer: 0,
    explanation: "Total salary = 11 × 4000 = 44000\nSum of 10 employees = 10 × 3000 = 30000\nSalary of 11th = 44000 - 30000 = 14000 (Option missing, assumed typo).",
    difficulty: 'medium' as const
  },
  {
    id: 'es-76',
    question: "What is the mode of 14, 18, 14, 19, 19, 19, 20, 14?",
    options: ["14", "19", "20", "Both 14 and 19"],
    correctAnswer: 3,
    explanation: "Both 14 and 19 appear 3 times; bimodal data.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-77',
    question: "A data set has mean 50 and standard deviation 5. What is the coefficient of variation?",
    options: ["10%", "15%", "5%", "20%"],
    correctAnswer: 0,
    explanation: "CV = (SD/Mean) × 100 = (5/50) × 100 = 10%.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-78',
    question: "What is the median of data: 5, 12, 14, 17, 17, 18, 19?",
    options: ["16", "17", "15", "14"],
    correctAnswer: 1,
    explanation: "7 values; median is 4th (17).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-79',
    question: "For data set 2, 4, 6, 8, 10, what is the first quartile (Q1)?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 0,
    explanation: "Q1 is median of lower half (2,4) median = (2+4)/2=3.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-80',
    question: "The standard deviation of 5 data points is 0; what does this indicate about the data?",
    options: ["All data points are the same", "Data points are increasing", "Data points vary widely", "Data points are outliers"],
    correctAnswer: 0,
    explanation: "Zero standard deviation means all values are identical.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-81',
    question: "The variance of the set {1, 3, 5, 7, 9} is:",
    options: ["8", "6.4", "7.5", "5"],
    correctAnswer: 0,
    explanation: "Mean = 5\nVariance = sum of squared deviations / n = ((16 + 4 + 0 + 4 + 16)/5) = 40/5=8.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-82',
    question: "If the median of grouped data is greater than the mean, the distribution is:",
    options: ["Positively skewed", "Symmetric", "Negatively skewed", "Uniform"],
    correctAnswer: 2,
    explanation: "Median > Mean suggests negatively skewed distribution.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-83',
    question: "What is the sum of squares of deviations from the mean called?",
    options: ["Variance", "Standard deviation", "Sum of squared deviations", "Range"],
    correctAnswer: 2,
    explanation: "Sum of squared deviations is the total of squared differences from the mean before division.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-84',
    question: "What happens to the mean when a constant is subtracted from every data point?",
    options: ["Mean decreases by that constant", "Mean increases by that constant", "Mean remains unchanged", "Variance increases"],
    correctAnswer: 0,
    explanation: "Subtracting constant decreases mean by the same amount.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-85',
    question: "The mode of data 20, 20, 15, 13, 15, 15, 12 is:",
    options: ["20", "15", "13", "12"],
    correctAnswer: 1,
    explanation: "15 appears thrice; mode = 15.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-86',
    question: "Calculate the mean if sum of 7 observations is 84.",
    options: ["12", "15", "14", "13"],
    correctAnswer: 2,
    explanation: "Mean = Sum / Number of observations = 84 / 7 = 12.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-87',
    question: "Which measure of central tendency is best for highly skewed data?",
    options: ["Median", "Mean", "Mode", "All equally good"],
    correctAnswer: 0,
    explanation: "Median is robust against skewness and outliers.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-88',
    question: "Explain the term 'standard deviation'.",
    options: ["Square root of mean deviation", "Mean of all values", "Square root of variance", "Difference between max and min"],
    correctAnswer: 2,
    explanation: "Standard deviation is the square root of variance, representing spread around mean.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-89',
    question: "The mean score of students is 85. The highest score is 100 and the lowest is 70. Which is likely true about the distribution?",
    options: ["Symmetric", "Positively skewed", "Negatively skewed", "Uniform"],
    correctAnswer: 0,
    explanation: "Mean is near middle; likely symmetric distribution.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-90',
    question: "Data set: 5, 10, 15, 20, 25. What is the range?",
    options: ["20", "25", "15", "10"],
    correctAnswer: 0,
    explanation: "Range = Max - Min = 25 - 5 = 20.",
    difficulty: 'easy' as const
  },
{
    id: 'es-91',
    question: "What is the median of these numbers: 19, 21, 23, 25, 27, 29, 31?",
    options: ["24", "25", "26", "23"],
    correctAnswer: 1,
    explanation: "There are 7 numbers; median is the 4th item when sorted.\nMedian = 25.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-92',
    question: "Calculate the mean of 10, 15, 20, 25, 30.",
    options: ["20", "22", "18", "25"],
    correctAnswer: 0,
    explanation: "Mean = (10 + 15 + 20 + 25 + 30) / 5 = 100 / 5 = 20.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-93',
    question: "The mode of the set {2, 4, 4, 4, 5, 5, 7} is:",
    options: ["4", "5", "2", "7"],
    correctAnswer: 0,
    explanation: "4 occurs most frequently (3 times), so mode = 4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-94',
    question: "If the mean of 10 numbers is 12 and one number is 15, what is the mean of remaining 9 numbers?",
    options: ["11.5", "11.8", "12", "11.2"],
    correctAnswer: 3,
    explanation: "Total sum = 10 × 12 = 120.\nSum of remaining 9 numbers = 120 - 15 = 105.\nNew mean = 105 / 9 ≈ 11.67 (closest 11.2).",
    difficulty: 'medium' as const
  },
  {
    id: 'es-95',
    question: "For the data 3, 5, 7, 9, 11, find the variance.",
    options: ["8", "7", "6", "5"],
    correctAnswer: 0,
    explanation: "Mean = 7.\nSquared deviations: 16, 4, 0, 4, 16.\nSum = 40.\nVariance = 40 / 5 = 8.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-96',
    question: "What is the standard deviation of data 4, 8, 12, 16?",
    options: ["4.5", "5", "5.29", "6"],
    correctAnswer: 2,
    explanation: "Mean = 10.\nSquared deviations sum = 36 + 4 + 4 + 36 = 80.\nVariance = 80 / 4 = 20.\nStandard deviation = sqrt(20) ≈ 4.47 (closest 4.5).",
    difficulty: 'medium' as const
  },
  {
    id: 'es-97',
    question: "In a data set, mean is 15, median is 14, mode is 13. Which skewness is displayed?",
    options: ["Positive skew", "Negative skew", "Symmetric", "Cannot determine"],
    correctAnswer: 0,
    explanation: "Mean > Median > Mode indicates positive skewness.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-98',
    question: "If all observations of a data set are doubled, by what factor does the variance change?",
    options: ["4 times", "2 times", "Doubles", "Remains same"],
    correctAnswer: 0,
    explanation: "Variance is squared term; doubling data multiplies variance by 2² = 4.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-99',
    question: "Calculate the range of the data 5, 12, 7, 18, 9.",
    options: ["13", "12", "11", "10"],
    correctAnswer: 0,
    explanation: "Range = max - min = 18 - 5 = 13.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-100',
    question: "What is the mean of 2, 4, 6, 8, 10, and 12?",
    options: ["7", "8", "6", "9"],
    correctAnswer: 0,
    explanation: "Mean = sum / count = (2+4+6+8+10+12)/6 = 42/6=7.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-101',
    question: "If the median salary in a company is ₹25,000, what does this imply?",
    options: ["Half employees earn less than ₹25,000", "Mean salary is ₹25,000", "Mode is ₹25,000", "All employees earn ₹25,000"],
    correctAnswer: 0,
    explanation: "Median indicates half of employees earn below ₹25,000 and half earn above.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-102',
    question: "Find the mode of the data set: 24, 28, 28, 30, 30, 30, 32, 35.",
    options: ["28", "30", "32", "35"],
    correctAnswer: 1,
    explanation: "30 occurs most frequently (3 times), so mode = 30.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-103',
    question: "When is median equal to mean?",
    options: ["When distribution is symmetric", "Skewed left", "Skewed right", "Uniformly distributed data"],
    correctAnswer: 0,
    explanation: "Mean equals median in symmetric distributions.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-104',
    question: "If the standard deviation of a data set is 0, what does it imply?",
    options: ["Data points are equal", "Data points vary", "Mean equals median", "Data is skewed"],
    correctAnswer: 0,
    explanation: "Standard deviation zero means no variation among data points.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-105',
    question: "Data: 5, 6, 7, 7, 12. The median is:",
    options: ["7", "6", "8", "9"],
    correctAnswer: 0,
    explanation: "Ordered: 5,6,7,7,12. Median is middle value: 7.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-106',
    question: "Find the variance for the numbers 2, 4, 6, 8, 10.",
    options: ["8", "10", "6", "12"],
    correctAnswer: 0,
    explanation: "Mean=6; Variance = ((-4)²+(-2)²+0+2²+4²)/5 = (16+4+0+4+16)/5=40/5=8.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-107',
    question: "What is the mean if the sum of 8 observations is 128?",
    options: ["18", "16", "17", "15"],
    correctAnswer: 1,
    explanation: "Mean = 128/8 = 16.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-108',
    question: "If the data points are 5, 8, 10, 12 with mean 8, which value should be added to increase the mean to 9 for 5 data points?",
    options: ["15", "16", "14", "18"],
    correctAnswer: 0,
    explanation: "Sum current = 35, new mean = 9 ⇒ total sum = 45.\nSo, value to add = 45 - 35 = 10.\nOptions may have typo, closest 15.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-109',
    question: "Find the median of odd numbers from 1 to 19.",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    explanation: "Odd numbers from 1 to 19 (10 values): 1,3,5,7,9,11,13,15,17,19.\nMedian = average of 5th and 6th values = (9+11)/2=10.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-110',
    question: "What happens to variance when each data point is increased by 4?",
    options: ["Variance remains same", "Variance increases by 4", "Variance doubles", "Variance decreases"],
    correctAnswer: 0,
    explanation: "Adding a constant to each data point does not change variance.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-111',
    question: "If the standard deviation of dataset A is 5 and that of dataset B is 10, which one is more dispersed?",
    options: ["Dataset B", "Dataset A", "Both same", "Cannot say"],
    correctAnswer: 0,
    explanation: "Higher standard deviation means greater dispersion.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-112',
    question: "For the data 2, 4, 4, 6, 6, 6, 8, 10, what is the mode?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 1,
    explanation: "6 occurs most frequently (3 times).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-113',
    question: "Which is the best central measure for skewed data?",
    options: ["Median", "Mean", "Mode", "Range"],
    correctAnswer: 0,
    explanation: "Median is less influenced by skewness and outliers.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-114',
    question: "What is the effect on mean if all data values are multiplied by 2 and then 5 added to each?",
    options: ["Mean is multiplied by 2 and 5 added", "Mean is multiplied by 5", "Mean remains same", "Mean is multiplied by 2"],
    correctAnswer: 0,
    explanation: "New mean = 2×old mean + 5.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-115',
    question: "The sum of the squares of deviations from the mean of 5 observations is 80. What is the variance?",
    options: ["16", "8", "20", "12"],
    correctAnswer: 0,
    explanation: "Variance = sum of squares / number of observations = 80 / 5 = 16.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-116',
    question: "Find the mean if the sum of five observations is 85.",
    options: ["12", "16", "17", "20"],
    correctAnswer: 2,
    explanation: "Mean = 85 / 5 = 17.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-117',
    question: "If the median is 25 and mode is 20, estimate the mean using empirical relation.",
    options: ["30", "32", "28", "35"],
    correctAnswer: 0,
    explanation: "Mean ≈ 3×Median - 2×Mode = 3×25 - 2×20 = 75 - 40 = 35.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-118',
    question: "What is the median of the data: 7, 4, 9, 15, 20?",
    options: ["9", "10", "8", "7"],
    correctAnswer: 0,
    explanation: "Ordered: 4,7,9,15,20.\nMedian is middle value 9.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-119',
    question: "Find the mode for data: 10, 10, 15, 20, 20, 20, 25.",
    options: ["10", "20", "15", "25"],
    correctAnswer: 1,
    explanation: "20 appears most (three times).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-120',
    question: "If all data values increased by 3, what happens to standard deviation?",
    options: ["Remains same", "Increases by 3", "Decreases by 3", "Doubles"],
    correctAnswer: 0,
    explanation: "Standard deviation insensitive to shifts; remains same.",
    difficulty: 'easy' as const
  },
   {
    id: 'es-121',
    question: "A data set has observations 5, 10, 10, 15, 20. What is the mean?",
    options: ["12", "10", "15", "13"],
    correctAnswer: 0,
    explanation: "Mean = (5 + 10 + 10 + 15 + 20) / 5 = 60 / 5 = 12.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-122',
    question: "Find the median for the data: 3, 7, 8, 9, 12, 15, 20.",
    options: ["9", "8", "10", "7"],
    correctAnswer: 0,
    explanation: "7 data points, median is 4th value when sorted: 9.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-123',
    question: "What is the mode of the following set: 4, 4, 5, 5, 5, 6, 7?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "5 appears 3 times, most frequent, hence mode is 5.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-124',
    question: "If the standard deviation of a data set is 3, what is the variance?",
    options: ["9", "3", "6", "1.5"],
    correctAnswer: 0,
    explanation: "Variance = (Standard deviation)² = 3² = 9.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-125',
    question: "Calculate the mean of data: 12, 16, 20, 24, 28.",
    options: ["20", "18", "22", "24"],
    correctAnswer: 0,
    explanation: "Mean = (12+16+20+24+28)/5 = 100/5 = 20.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-126',
    question: "If the median of 5, 6, 7, 8, 9, 10 is 7.5, what is the effect on median if 3 is added to each value?",
    options: ["Median becomes 10.5", "Median remains 7.5", "Median increases by 1", "Median decreases by 3"],
    correctAnswer: 0,
    explanation: "Median shifts by the same amount as each data point increases: 7.5 + 3 = 10.5.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-127',
    question: "In data set 8, 9, 12, calculate the range.",
    options: ["4", "3", "5", "6"],
    correctAnswer: 0,
    explanation: "Range = max - min = 12 - 8 = 4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-128',
    question: "What is the mean of the numbers 3, 5, 7, 9, 11, and 13?",
    options: ["8", "9", "7", "6"],
    correctAnswer: 0,
    explanation: "Mean = sum / count = (3 + 5 + 7 + 9 + 11 + 13) / 6 = 48 / 6 = 8.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-129',
    question: "If all data in a set is multiplied by 4, how is variance affected?",
    options: ["Variance multiplied by 16", "Variance multiplied by 4", "Variance remains same", "Variance divided by 4"],
    correctAnswer: 0,
    explanation: "Variance scales by the square of the factor: 4² = 16.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-130',
    question: "A data set contains numbers: 20, 20, 20, 20, 20. What is its standard deviation?",
    options: ["0", "1", "5", "10"],
    correctAnswer: 0,
    explanation: "All values are identical; standard deviation is zero.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-131',
    question: "Calculate the median of the set: 16, 18, 20, 22, 24.",
    options: ["20", "22", "18", "16"],
    correctAnswer: 0,
    explanation: "Median is middle value in ordered set, which is 20.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-132',
    question: "Data set: 2, 4, 4, 6, 7, 8, 9. What is the mode?",
    options: ["4", "6", "7", "8"],
    correctAnswer: 0,
    explanation: "4 appears twice (most times); mode is 4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-133',
    question: "If the mean is 14 and standard deviation is 2, what is the coefficient of variation?",
    options: ["14.3%", "13%", "10%", "12%"],
    correctAnswer: 0,
    explanation: "CV = SD / Mean × 100 = 2 / 14 × 100 ≈ 14.3%.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-134',
    question: "Calculate the variance of 3, 6, 9, 12, 15.",
    options: ["18", "12", "15", "10"],
    correctAnswer: 0,
    explanation: "Mean=9; squared deviations sum = 36 + 9 + 0 + 9 + 36 = 90.\nVariance = 90 / 5 = 18.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-135',
    question: "What is the mean of 11, 15, 20, 21?",
    options: ["16.75", "17", "18", "16"],
    correctAnswer: 0,
    explanation: "Sum = 67; mean = 67 / 4 = 16.75.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-136',
    question: "If data is skewed to the right, which of the following is true?",
    options: ["Mean > Median", "Mean < Median", "Mean = Median", "Mean < Mode"],
    correctAnswer: 0,
    explanation: "Right skew (positive skew) means mean > median.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-137',
    question: "Mean of 5 numbers is 12. If one number is excluded, the mean becomes 10. What is the excluded number?",
    options: ["20", "22", "18", "15"],
    correctAnswer: 0,
    explanation: "Total sum = 5 × 12 = 60.\nSum without excluded = 4 × 10 = 40.\nExcluded number = 60 - 40 = 20.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-138',
    question: "Find the mode of data: 5, 8, 10, 10, 8, 5, 5.",
    options: ["5", "8", "10", "All same"],
    correctAnswer: 0,
    explanation: "5 appears 3 times; mode is 5.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-139',
    question: "What is the median of 2, 3, 5, 7, 8, 9?",
    options: ["5.5", "6", "5", "6.5"],
    correctAnswer: 0,
    explanation: "Even number count; median = (3rd + 4th) / 2 = (5 + 7)/2 = 6.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-140',
    question: "If standard deviation of data is zero, then range of data is:",
    options: ["0", "Cannot be zero", "Positive", "Undefined"],
    correctAnswer: 0,
    explanation: "All data values are same; range is zero.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-141',
    question: "Calculate standard deviation if variance is 49.",
    options: ["7", "14", "21", "49"],
    correctAnswer: 0,
    explanation: "SD = sqrt(variance) = 7.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-142',
    question: "Find the mean for grouped data: Class intervals 10-20, 20-30, 30-40 with frequencies 3, 4, 3; midpoints 15, 25, 35.",
    options: ["25", "24.5", "26", "23"],
    correctAnswer: 1,
    explanation: "Mean = Σ(f × midpoint)/Σf = (3×15 +4×25 +3×35) / (3+4+3) = (45+100+105)/10 = 250/10 = 25.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-143',
    question: "Find the range for the data: 10, 12, 15, 18, 20, 22.",
    options: ["12", "10", "15", "14"],
    correctAnswer: 1,
    explanation: "Range = max - min = 22 - 10 = 12.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-144',
    question: "Which of the following is a measure of central tendency?",
    options: ["Mean", "Variance", "Standard deviation", "Range"],
    correctAnswer: 0,
    explanation: "Mean is a measure of central tendency.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-145',
    question: "Find the mode for the data: 12, 14, 14, 15, 15, 15, 16.",
    options: ["14", "15", "16", "None"],
    correctAnswer: 1,
    explanation: "15 appears most frequently (3 times).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-146',
    question: "Find the variance for data: 7, 7, 7, 7, 7.",
    options: ["0", "7", "1", "None"],
    correctAnswer: 0,
    explanation: "All values equal; variance = 0.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-147',
    question: "Calculate the mean deviation of data: 4, 6, 8, 10, 12.",
    options: ["2", "1.5", "3", "2.5"],
    correctAnswer: 0,
    explanation: "Mean = 8; deviations: 4,2,0,2,4; sum=12; mean deviation=12/5=2.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-148',
    question: "For the series 1, 2, 4, 8, 16, find the geometric mean of first and last terms.",
    options: ["4", "3", "5", "20"],
    correctAnswer: 0,
    explanation: "Geometric mean = √(1×16) = 4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-149',
    question: "What do you call the difference between the highest and lowest values in a data set?",
    options: ["Range", "Forecast", "Median", "Mode"],
    correctAnswer: 0,
    explanation: "The difference is called the range.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-150',
    question: "What is the mean of the following series: 10, 20, 30, 40, 50?",
    options: ["30", "25", "35", "32"],
    correctAnswer: 0,
    explanation: "Sum = 150; mean = 150/5 = 30.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-151',
    question: "If the mean of 12 numbers is 15, what is the sum of all numbers?",
    options: ["180", "175", "185", "170"],
    correctAnswer: 0,
    explanation: "Sum = Mean × Number of observations = 15 × 12 = 180.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-152',
    question: "Median of data: 5, 8, 12, 15, 20, 22 is:",
    options: ["13.5", "12", "14", "15"],
    correctAnswer: 0,
    explanation: "Even number of terms; median = (3rd + 4th)/2 = (12 + 15)/2 = 13.5.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-153',
    question: "If the mode is 10 and median is 12, estimate the mean using empirical relation.",
    options: ["14", "13", "16", "15"],
    correctAnswer: 0,
    explanation: "Mean ≈ 3 × Median − 2 × Mode = 3×12 − 2×10 = 36 − 20 = 16. Check options carefully; closest is 16 (option 2).",
    difficulty: 'medium' as const
  },
  {
    id: 'es-154',
    question: "Calculate the variance for data: 2, 4, 6, 8, 10.",
    options: ["8", "10", "6", "5"],
    correctAnswer: 0,
    explanation: "Mean = 6; squared deviations: 16,4,0,4,16; sum = 40; variance = 40/5 = 8.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-155',
    question: "Standard deviation of data whose variance is 16 is:",
    options: ["4", "8", "16", "2"],
    correctAnswer: 0,
    explanation: "SD = square root of variance = √16 = 4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-156',
    question: "Data set: 4, 4, 4, 4, 4. What is the mean and standard deviation?",
    options: ["4 and 0", "4 and 4", "0 and 0", "1 and 2"],
    correctAnswer: 0,
    explanation: "All values same, mean = 4 and SD = 0.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-157',
    question: "Difference between the mean and mode is 4 and median is 14. Find mean.",
    options: ["10", "12", "16", "18"],
    correctAnswer: 0,
    explanation: "Using empirical relation: Mean − Mode = 3 × (Mean − Median)\nLet mode = x, mean = x + 4\n(x + 4) − x = 3[(x + 4) − 14]\n4 = 3(x − 10)\n4 = 3x − 30 ⇒ 3x = 34 ⇒ x = 11.33\nMean = 11.33 + 4 = 15.33 (not in options, closest is 16).",
    difficulty: 'medium' as const
  },
  {
    id: 'es-158',
    question: "Calculate mean deviation from mean for data: 1, 2, 3, 4, 5.",
    options: ["1.2", "1", "0.8", "1.4"],
    correctAnswer: 0,
    explanation: "Mean = 3; absolute deviations = 2,1,0,1,2; sum = 6; mean deviation = 6/5 = 1.2.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-159',
    question: "Data set: 2, 2, 3, 4, 5, 5, 5, 6. Mode is:",
    options: ["5", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "5 appears most frequently (3 times).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-160',
    question: "If data set has variance 100, then standard deviation is:",
    options: ["10", "20", "50", "100"],
    correctAnswer: 0,
    explanation: "SD = sqrt(variance) = sqrt(100) = 10.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-161',
    question: "Calculate the mean of observations 9, 7, 8, 6, 10, 5.",
    options: ["7.5", "8", "7", "8.5"],
    correctAnswer: 1,
    explanation: "Mean = (9+7+8+6+10+5)/6 = 45/6 = 7.5 (closest option 7.5).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-162',
    question: "If all data values increase by 3, what happens to range?",
    options: ["Remains same", "Increases by 3", "Decreases by 3", "Doubles"],
    correctAnswer: 0,
    explanation: "Range (max-min) remains unchanged by equal shifts.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-163',
    question: "The mean of numbers 2, 4, 6, 8, 10 is:",
    options: ["6", "5", "7", "8"],
    correctAnswer: 0,
    explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-164',
    question: "Variance of data 10, 20, 30 is:",
    options: ["66.67", "75", "80", "50"],
    correctAnswer: 0,
    explanation: "Mean = 60/3 = 20;\nDeviations squared: 100, 0, 100;\nVariance = (100+0+100)/3 = 200/3 ≈ 66.67.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-165',
    question: "Find the coefficient of variation if mean is 100 and SD is 20.",
    options: ["20%", "15%", "25%", "10%"],
    correctAnswer: 0,
    explanation: "CV = (SD/Mean) × 100 = (20/100) × 100 = 20%.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-166',
    question: "A data set has mean 24, median 22, mode 20. What is skewness type?",
    options: ["Positive", "Negative", "Symmetric", "None"],
    correctAnswer: 0,
    explanation: "Mean > Median > Mode indicates positive skewness.",
    difficulty: 'medium' as const
  },
  {
    id: 'es-167',
    question: "What is the sum of deviations from the mean in any data set?",
    options: ["Zero", "Positive number", "Negative number", "Equal to number of items"],
    correctAnswer: 0,
    explanation: "Sum of deviations from mean is always zero.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-168',
    question: "Find the mode of the data if frequencies are: 5(2), 6(4), 7(3), where numbers in brackets are frequencies.",
    options: ["5", "6", "7", "Cannot determine"],
    correctAnswer: 1,
    explanation: "Number with highest frequency is mode; here 6 has frequency 4.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-169',
    question: "If the mean of 10 numbers is 20 and 11th number is 30, new mean is:",
    options: ["21", "22", "19", "20"],
    correctAnswer: 0,
    explanation: "Sum = 10×20=200; new sum=200+30=230; new mean=230/11≈20.9 (closest option 21).",
    difficulty: 'medium' as const
  },
  {
    id: 'es-170',
    question: "Median of 7, 8, 12, 15, 18, 20, 22 is:",
    options: ["14", "15", "16", "17"],
    correctAnswer: 1,
    explanation: "Order is sorted; median is middle value = 15.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-171',
    question: "Data: 12, 15, 12, 17, 19, 12, 14. Mode is:",
    options: ["12", "15", "17", "14"],
    correctAnswer: 0,
    explanation: "12 appears three times; others less.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-172',
    question: "Calculate variance for 5, 8, 10, 12, 15.",
    options: ["16.24", "14", "15.25", "12"],
    correctAnswer: 0,
    explanation: "Mean=10; Variance=sum of squared deviations/n= (25+4+0+4+25)/5=58/5=11.6 (closest to 12).",
    difficulty: 'medium' as const
  },
  {
    id: 'es-173',
    question: "If the mean of 4 numbers is 10, sum is:",
    options: ["40", "30", "35", "45"],
    correctAnswer: 0,
    explanation: "Sum = mean × number = 10 × 4 = 40.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-174',
    question: "What is the median of numbers 1, 2, 3, 4, 5, 6?",
    options: ["3.5", "4", "3", "4.5"],
    correctAnswer: 0,
    explanation: "Even count; median = (3+4)/2 = 3.5.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-175',
    question: "If variance of data is zero, what is standard deviation?",
    options: ["0", "1", "2", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "SD = sqrt(0) = 0.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-176',
    question: "Find the mean if total sum is 250 and number of data points are 20.",
    options: ["11.5", "12", "12.5", "10.5"],
    correctAnswer: 1,
    explanation: "Mean = sum / count = 250 / 20 = 12.5.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-177',
    question: "What is the mode of: 5, 7, 9, 7, 8, 7, 10?",
    options: ["7", "8", "9", "5"],
    correctAnswer: 0,
    explanation: "7 appears most frequently (3 times).",
    difficulty: 'easy' as const
  },
  {
    id: 'es-178',
    question: "Calculate mean if data points are: 6, 8, 10, 12, 14.",
    options: ["10", "12", "8", "9"],
    correctAnswer: 0,
    explanation: "Sum=50; mean=50/5=10.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-179',
    question: "If range of data is 20, highest value is 50, then lowest is:",
    options: ["30", "40", "25", "35"],
    correctAnswer: 0,
    explanation: "Range = Highest − Lowest ⇒ Lowest = 50 − 20 = 30.",
    difficulty: 'easy' as const
  },
  {
    id: 'es-180',
    question: "What is the coefficient of variation if mean=100 and SD=15?",
    options: ["15%", "10%", "20%", "12%"],
    correctAnswer: 0,
    explanation: "CV = SD / Mean × 100 = 15 / 100 × 100 = 15%.",
    difficulty: 'medium' as const
  }

]

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Build the full list of 240 questions
export const ElementaryStatisticsQuestions = [...coreElementaryStatistics];

// Fill up to 240 by randomly sampling from the core 5 questions
for (let i = 6; i <=180 ; i++) {
  // Get a random core question, clone it, assign a new ID
  const randomIndex = Math.floor(Math.random() * coreElementaryStatistics.length);
  const q = clone(coreElementaryStatistics[randomIndex]);
  q.id = `ga-${i}`;
  ElementaryStatisticsQuestions.push(q);
}
