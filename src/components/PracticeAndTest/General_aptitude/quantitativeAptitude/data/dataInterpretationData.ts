import { QuantitativeQuestion } from "../types";
export const dataInterpretationQuestions: QuantitativeQuestion[] = [
        {
          "id": "di-1",
          "topicId": "data-interpretation",
          "question": "The following table shows the number of calls received, selected, and finally received by three employees A, B, and C in a call center. If total calls received by the company are 24,000 and the total calls not received by C are 4,464 less than those received by A, find the percentage of final received calls by C.",
          "options": ["75%", "80%", "85%", "90%"],
          "correctAnswer": 2,
          "explanation": "Using the table data and given totals, calculate the value of y (final calls by C) using proportion and subtraction.",
          "difficulty": "medium",
          "diagram": "Table with columns A, B, C showing initial calls (%), lead calls (%), and final calls (%)"
        },
        {
          "id": "di-2",
          "topicId": "data-interpretation",
          "question": "Study the pie charts representing market shares of companies A to D in 1999 and 2000 (Market sizes 150 crore and 375 crore respectively). Which company shows the minimum growth in sales between these years?",
          "options": ["Company A", "Company B", "Company C", "Others"],
          "correctAnswer": 1,
          "explanation": "Compare percentage shares and total market size growth to calculate absolute sales growth for each company.",
          "difficulty": "hard",
          "diagram": "Two pie charts for 1999 and 2000 with company market shares"
        },
        {
          "id": "di-3",
          "topicId": "data-interpretation",
          "question": "From the given bar graph showing production of medicines (in 1000 tonnes) from 2010 to 2015, calculate the ratio of the percentage increase in production from 2011 to 2015.",
          "options": ["3:2", "2:3", "1:1", "4:3"],
          "correctAnswer": 0,
          "explanation": "Calculate percentage increase for 2011 and 2015 using the formula, then form the ratio.",
          "difficulty": "medium",
          "diagram": "Bar graph showing yearly production"
        },
        {
          "id": "di-4",
          "topicId": "data-interpretation",
          "question": "A line graph shows annual sales and production of a company over five years. If total sales in all years is 2,391 tonnes and total production is 3,048 tonnes, what percentage of the production is the total sales?",
          "options": ["78.44%", "80.17%", "75.90%", "79.12%"],
          "correctAnswer": 0,
          "explanation": "Percentage = (total sales / total production) × 100 = 2391 / 3048 × 100 = 78.44%",
          "difficulty": "medium",
          "diagram": "Line graph of sales and production over years"
        },
        {
          "id": "di-5",
          "topicId": "data-interpretation",
          "question": "A bar graph shows the number of employees in six departments of a company in 2015 and 2018. If the department C fired some employees between these years and total employees changed by 80, how many employees were fired from department C?",
          "options": ["40", "50", "60", "70"],
          "correctAnswer": 1,
          "explanation": "By comparing total increase and department-wise counts, derive the number fired in department C.",
          "difficulty": "hard",
          "diagram": "Bar chart displaying employee numbers by department and years"
        },
        {
          "id": "di-6",
          "topicId": "data-interpretation",
          "question": "Refer to the table showing train arrivals and departures from a station. Calculate the percentage of trains that arrived late if out of 1,400 trains, 150 arrived late.",
          "options": ["10.07%", "10.71%", "11%", "9.8%"],
          "correctAnswer": 1,
          "explanation": "Percentage late = (150 / 1400) × 100 = 10.71%",
          "difficulty": "medium",
          "diagram": "Table with train schedules and late arrivals"
        },
        {
          "id": "di-7",
          "topicId": "data-interpretation",
          "question": "Given a population contour plot relating height and weight, which interpretation is correct?\nA) No correlation between height and weight\nB) Taller individuals are generally heavier\nC) Taller and lighter individuals are more in number\nD) No individuals of medium height and weight",
          "options": ["A", "B", "C", "D"],
          "correctAnswer": 2,
          "explanation": "Contours show more lighter individuals among taller people, making C correct.",
          "difficulty": "hard",
          "diagram": "Contour plot showing population distribution by height and weight"
        },
        {
          "id": "di-8",
          "topicId": "data-interpretation",
          "question": "Study the given table that lists sales (in thousands) in cities A, B, C, D for newspapers P and Q. What is the ratio of total sales of P in A and C to total sales of Q in B and D?",
          "options": ["7:8", "8:7", "3:4", "4:3"],
          "correctAnswer": 0,
          "explanation": "Sum sales of P in A+C divided by sum sales of Q in B+D equals ratio 7:8.",
          "difficulty": "medium",
          "diagram": "Sales data table by city and newspaper"
        },
        {
          "id": "di-9",
          "topicId": "data-interpretation",
          "question": "A pie chart shows expenses distribution with interest on loans at 7.5% and taxes at 5%. By what percentage is interest on loans more than taxes?",
          "options": ["50%", "40%", "35%", "30%"],
          "correctAnswer": 0,
          "explanation": "Percentage increase = (7.5 - 5)/5 × 100 = 50%",
          "difficulty": "easy",
          "diagram": "Pie chart of expense categories"
        },
        {
          "id": "di-10",
          "topicId": "data-interpretation",
          "question": "The bar graph shows sales from six branches of a publishing company in 2000 and 2001. The average sales of B1, B3, and B6 in 2000 is what percentage of average sales of B1, B2, and B3 in 2001?",
          "options": ["87.5%", "90.2%", "92.4%", "95.1%"],
          "correctAnswer": 0,
          "explanation": "Calculate averages and divide to get 87.5%.",
          "difficulty": "medium",
          "diagram": "Bar graph comparing annual sales by branch"
        },
        {
          "id": "di-11",
          "topicId": "data-interpretation",
          "question": "In a line graph, candies produced in red and blue colors for six years are plotted. If total red candies produced are 190 lakhs and blue candies are 180 lakhs, find difference in production.",
          "options": ["10 lakhs", "15 lakhs", "20 lakhs", "25 lakhs"],
          "correctAnswer": 0,
          "explanation": "Difference = 190 - 180 = 10 lakhs.",
          "difficulty": "easy",
          "diagram": "Line graph of candy production numbers"
        },
        {
          "id": "di-12",
          "topicId": "data-interpretation",
          "question": "A table shows train departure and arrival times. If 82 trains departed late out of 1400, what is the percentage of late departures?",
          "options": ["5.85%", "6.5%", "7.1%", "8.3%"],
          "correctAnswer": 0,
          "explanation": "Percentage late = (82 / 1400) × 100 = 5.85%",
          "difficulty": "medium",
          "diagram": "Train schedule table"
        },
        {
          "id": "di-13",
          "topicId": "data-interpretation",
          "question": "From the given multiple pie charts, if company A had a 25% market share in 1999 and 30% in 2000 with market sizes of 150 and 375 crores respectively, what was the approximate sales growth?",
          "options": ["85 crores", "90 crores", "100 crores", "110 crores"],
          "correctAnswer": 0,
          "explanation": "Calculate sales in each year and find difference: 37.5 crores in 1999 and 112.5 in 2000, growth = 75 crores (closest to 85).",
          "difficulty": "hard",
          "diagram": "Pie charts showing market shares"
        },
        {
          "id": "di-14",
          "topicId": "data-interpretation",
          "question": "Using the given data table of employee count by department over years, if overall employee count increased by 80 but department C decreased, find the number of employees fired from department C.",
          "options": ["30", "40", "50", "60"],
          "correctAnswer": 2,
          "explanation": "By comparing totals and department increases, calculate decrease in C equals 50.",
          "difficulty": "hard",
          "diagram": "Employee count table by department and year"
        },
        {
          "id": "di-15",
          "topicId": "data-interpretation",
          "question": "The given stacked bar chart shows monthly expenses of a family. If the total expense is 12000, and food accounts for 25%, how much is spent on food?",
          "options": ["2500", "3000", "3500", "4000"],
          "correctAnswer": 1,
          "explanation": "Food expense = 25% of 12000 = 3000",
          "difficulty": "easy",
          "diagram": "Stacked bar chart of monthly expenses"
        },
        {
          "id": "di-16",
          "topicId": "data-interpretation",
          "question": "From the line graph of yearly production and sales, if production increased by 10% in 2015 compared to 2014, calculate production in 2015 given 2014 production was 500 tonnes.",
          "options": ["550", "600", "650", "700"],
          "correctAnswer": 0,
          "explanation": "Production 2015 = 500 + 10% of 500 = 550 tonnes.",
          "difficulty": "medium",
          "diagram": "Production and sales line graph"
        },
        {
          "id": "di-17",
          "topicId": "data-interpretation",
          "question": "The bar chart shows sales figures for two products over three years. If Product A sold 500 units in 2019 and 650 units in 2021, what is the percentage increase?",
          "options": ["20%", "25%", "30%", "35%"],
          "correctAnswer": 2,
          "explanation": "Percentage increase = (650 - 500)/500 × 100 = 30%",
          "difficulty": "medium",
          "diagram": "Sales bar chart over years"
        },
        {
          "id": "di-18",
          "topicId": "data-interpretation",
          "question": "The pie chart shows the distribution of students in four different departments. If department A has 40% students and total students are 200, what is the number of students in department A?",
          "options": ["70", "80", "90", "100"],
          "correctAnswer": 3,
          "explanation": "Number = 40% of 200 = 80",
          "difficulty": "easy",
          "diagram": "Pie chart of department-wise student distribution"
        },
        {
          "id": "di-19",
          "topicId": "data-interpretation",
          "question": "In a sales table, if the sales total for product X across 4 regions is 1200 and region-wise sales are 300, 350, 400, and X respectively, find the value of X.",
          "options": ["150", "200", "250", "300"],
          "correctAnswer": 2,
          "explanation": "Sum of known sales = 1050; so X = 1200 - 1050 = 150.",
          "difficulty": "medium",
          "diagram": "Sales data table by region"
        },
        {
          "id": "di-20",
          "topicId": "data-interpretation",
          "question": "The line graph depicts the annual rainfall over five years. If rainfall in 2020 was 900 mm and in 2021 it decreased by 10%, what was the rainfall in 2021?",
          "options": ["800 mm", "810 mm", "820 mm", "830 mm"],
          "correctAnswer": 1,
          "explanation": "Rainfall 2021 = 900 - 10% of 900 = 810 mm",
          "difficulty": "medium",
          "diagram": "Line graph showing annual rainfall"
        },
        
    ];
      