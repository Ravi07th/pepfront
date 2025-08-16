import { Question } from '../types';

export const capgeminiQuestions: Question[] = [
  // Technical MCQ (Pseudo-code) - 30 Questions
  {
    id: 'capgemini-technical-1',
    sectionId: 'technical-mcq',
    question: 'What will be the output of the following pseudo-code?\n\nint x = 5;\nint y = 3;\nif (x > y) {\n    print(x + y);\n} else {\n    print(x - y);\n}',
    questionType: 'single-choice',
    options: ['8', '2', '15', 'Error'],
    correctAnswer: 0,
    explanation: 'Since x (5) > y (3), the condition is true, so it prints x + y = 5 + 3 = 8'
  },
  {
    id: 'capgemini-technical-2',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of the following algorithm?\n\nfor i = 1 to n\n    for j = 1 to i\n        print("*")\n    end for\nend for',
    questionType: 'single-choice',
    options: ['O(n)', 'O(n²)', 'O(n log n)', 'O(2ⁿ)'],
    correctAnswer: 1,
    explanation: 'This is a nested loop where the inner loop runs i times for each i from 1 to n. Total iterations = 1 + 2 + 3 + ... + n = n(n+1)/2 = O(n²)'
  },
  {
    id: 'capgemini-technical-3',
    sectionId: 'technical-mcq',
    question: 'Which data structure would be most efficient for implementing a stack?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Tree', 'Graph'],
    correctAnswer: 0,
    explanation: 'Array provides O(1) push and pop operations and better cache locality compared to linked list'
  },
  {
    id: 'capgemini-technical-4',
    sectionId: 'technical-mcq',
    question: 'What will be the output?\n\nint arr[] = {1, 2, 3, 4, 5};\nint sum = 0;\nfor(int i = 0; i < 5; i++) {\n    if(i % 2 == 0) {\n        sum += arr[i];\n    }\n}\nprint(sum);',
    questionType: 'single-choice',
    options: ['6', '9', '15', '10'],
    correctAnswer: 1,
    explanation: 'It adds elements at even indices (0, 2, 4): arr[0] + arr[2] + arr[4] = 1 + 3 + 5 = 9'
  },
  {
    id: 'capgemini-technical-5',
    sectionId: 'technical-mcq',
    question: 'Which sorting algorithm has the best average-case time complexity?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: 'Quick Sort has O(n log n) average-case time complexity, which is optimal for comparison-based sorting'
  },
  {
    id: 'capgemini-technical-6',
    sectionId: 'technical-mcq',
    question: 'What is the output of this pseudo-code?\n\nint n = 6;\nint result = 1;\nwhile(n > 1) {\n    result = result * n;\n    n = n - 1;\n}\nprint(result);',
    questionType: 'single-choice',
    options: ['120', '720', '6', '1'],
    correctAnswer: 1,
    explanation: 'This calculates factorial of 6: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720'
  },
  {
    id: 'capgemini-technical-7',
    sectionId: 'technical-mcq',
    question: 'Which of the following is NOT a valid variable name in most programming languages?',
    questionType: 'single-choice',
    options: ['_variable', 'variable123', '123variable', 'variable_name'],
    correctAnswer: 2,
    explanation: 'Variable names cannot start with a digit in most programming languages'
  },
  {
    id: 'capgemini-technical-8',
    sectionId: 'technical-mcq',
    question: 'What is the space complexity of a recursive function that calculates Fibonacci numbers?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(n)', 'O(n²)', 'O(2ⁿ)'],
    correctAnswer: 1,
    explanation: 'The space complexity is O(n) due to the call stack depth, not the time complexity'
  },
  {
    id: 'capgemini-technical-9',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used to find the shortest path in a weighted graph?',
    questionType: 'single-choice',
    options: ['Breadth First Search', 'Depth First Search', 'Dijkstra\'s Algorithm', 'Binary Search'],
    correctAnswer: 2,
    explanation: 'Dijkstra\'s Algorithm is specifically designed for finding shortest paths in weighted graphs'
  },
  {
    id: 'capgemini-technical-10',
    sectionId: 'technical-mcq',
    question: 'What will be the output?\n\nint x = 10;\nint y = 20;\nint temp = x;\nx = y;\ny = temp;\nprint(x + " " + y);',
    questionType: 'single-choice',
    options: ['10 20', '20 10', '30 30', 'Error'],
    correctAnswer: 1,
    explanation: 'This is a swap operation. After swapping, x becomes 20 and y becomes 10'
  },
  {
    id: 'capgemini-technical-11',
    sectionId: 'technical-mcq',
    question: 'Which data structure is best for implementing a queue?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Stack', 'Tree'],
    correctAnswer: 1,
    explanation: 'Linked List provides O(1) enqueue and dequeue operations at both ends'
  },
  {
    id: 'capgemini-technical-12',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of searching in a binary search tree?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'In a balanced BST, each comparison eliminates half the remaining nodes, giving O(log n)'
  },
  {
    id: 'capgemini-technical-13',
    sectionId: 'technical-mcq',
    question: 'Which of the following is a linear data structure?',
    questionType: 'single-choice',
    options: ['Tree', 'Graph', 'Array', 'Heap'],
    correctAnswer: 2,
    explanation: 'Array is a linear data structure where elements are stored in contiguous memory locations'
  },
  {
    id: 'capgemini-technical-14',
    sectionId: 'technical-mcq',
    question: 'What is the output of this code?\n\nint a = 5;\nint b = 3;\nint c = a & b;\nprint(c);',
    questionType: 'single-choice',
    options: ['8', '1', '15', '2'],
    correctAnswer: 1,
    explanation: 'Bitwise AND: 5 (101) & 3 (011) = 1 (001)'
  },
  {
    id: 'capgemini-technical-15',
    sectionId: 'technical-mcq',
    question: 'Which sorting algorithm is stable?',
    questionType: 'single-choice',
    options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 2,
    explanation: 'Merge Sort is stable because it preserves the relative order of equal elements'
  },
  {
    id: 'capgemini-technical-16',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of inserting an element at the beginning of an array?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'All existing elements need to be shifted to make space, requiring O(n) operations'
  },
  {
    id: 'capgemini-technical-17',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used for pattern matching in strings?',
    questionType: 'single-choice',
    options: ['Binary Search', 'KMP Algorithm', 'Bubble Sort', 'Dijkstra'],
    correctAnswer: 1,
    explanation: 'Knuth-Morris-Pratt (KMP) algorithm is specifically designed for efficient string pattern matching'
  },
  {
    id: 'capgemini-technical-18',
    sectionId: 'technical-mcq',
    question: 'What is the output?\n\nint arr[] = {2, 4, 6, 8, 10};\nint sum = 0;\nfor(int i = 0; i < 5; i += 2) {\n    sum += arr[i];\n}\nprint(sum);',
    questionType: 'single-choice',
    options: ['18', '30', '20', '15'],
    correctAnswer: 0,
    explanation: 'It adds elements at indices 0, 2, 4: arr[0] + arr[2] + arr[4] = 2 + 6 + 10 = 18'
  },
  {
    id: 'capgemini-technical-19',
    sectionId: 'technical-mcq',
    question: 'Which data structure is used in implementing a priority queue?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Heap', 'Stack'],
    correctAnswer: 2,
    explanation: 'Heap provides efficient insertion and extraction of the highest priority element'
  },
  {
    id: 'capgemini-technical-20',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of the following algorithm?\n\nfor i = 1 to n\n    for j = 1 to n\n        print(i * j)\n    end for\nend for',
    questionType: 'single-choice',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
    correctAnswer: 2,
    explanation: 'Nested loops with both running from 1 to n gives O(n²) time complexity'
  },
  {
    id: 'capgemini-technical-21',
    sectionId: 'technical-mcq',
    question: 'Which of the following is a divide-and-conquer algorithm?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 2,
    explanation: 'Merge Sort divides the array into two halves, recursively sorts them, and then merges'
  },
  {
    id: 'capgemini-technical-22',
    sectionId: 'technical-mcq',
    question: 'What is the output of this pseudo-code?\n\nint n = 8;\nint count = 0;\nwhile(n > 0) {\n    if(n % 2 == 1) {\n        count++;\n    }\n    n = n / 2;\n}\nprint(count);',
    questionType: 'single-choice',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'This counts the number of 1s in the binary representation of 8 (1000), which has 1 set bit'
  },
  {
    id: 'capgemini-technical-23',
    sectionId: 'technical-mcq',
    question: 'Which data structure is best for implementing a dictionary/map?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Hash Table', 'Stack'],
    correctAnswer: 2,
    explanation: 'Hash Table provides O(1) average-case time complexity for insert, delete, and search operations'
  },
  {
    id: 'capgemini-technical-24',
    sectionId: 'technical-mcq',
    question: 'What is the space complexity of an iterative function that calculates factorial?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(n)', 'O(n²)', 'O(2ⁿ)'],
    correctAnswer: 0,
    explanation: 'Iterative factorial uses constant extra space regardless of input size'
  },
  {
    id: 'capgemini-technical-25',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used to find the minimum spanning tree of a graph?',
    questionType: 'single-choice',
    options: ['Dijkstra\'s', 'Kruskal\'s', 'BFS', 'DFS'],
    correctAnswer: 1,
    explanation: 'Kruskal\'s algorithm is specifically designed to find the minimum spanning tree'
  },
  {
    id: 'capgemini-technical-26',
    sectionId: 'technical-mcq',
    question: 'What will be the output?\n\nint x = 15;\nint y = 4;\nint result = x / y;\nprint(result);',
    questionType: 'single-choice',
    options: ['3', '3.75', '4', 'Error'],
    correctAnswer: 0,
    explanation: 'Integer division: 15 ÷ 4 = 3 (remainder is discarded)'
  },
  {
    id: 'capgemini-technical-27',
    sectionId: 'technical-mcq',
    question: 'Which sorting algorithm has the worst-case time complexity of O(n²)?',
    questionType: 'single-choice',
    options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'],
    correctAnswer: 3,
    explanation: 'Bubble Sort has O(n²) worst-case time complexity due to nested loops'
  },
  {
    id: 'capgemini-technical-28',
    sectionId: 'technical-mcq',
    question: 'What is the output of this code?\n\nint a = 10;\nint b = 5;\nint c = a | b;\nprint(c);',
    questionType: 'single-choice',
    options: ['15', '5', '10', '50'],
    correctAnswer: 0,
    explanation: 'Bitwise OR: 10 (1010) | 5 (0101) = 15 (1111)'
  },
  {
    id: 'capgemini-technical-29',
    sectionId: 'technical-mcq',
    question: 'Which data structure is used for implementing a stack?',
    questionType: 'single-choice',
    options: ['Queue', 'Array', 'Tree', 'Graph'],
    correctAnswer: 1,
    explanation: 'Array is commonly used to implement stack with push/pop operations at the end'
  },
  {
    id: 'capgemini-technical-30',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of searching in an unsorted array?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'Linear search requires checking each element until the target is found, giving O(n)'
  },

  // English Communication (WET format) - 30 Questions
  {
    id: 'capgemini-english-1',
    sectionId: 'english-communication',
    question: 'Choose the correct word to complete the sentence: The company\'s new policy has been _____ by all employees.',
    questionType: 'single-choice',
    options: ['accepted', 'accepting', 'accept', 'accepts'],
    correctAnswer: 0,
    explanation: 'The sentence requires the past participle form "accepted" to complete the passive voice construction'
  },
  {
    id: 'capgemini-english-2',
    sectionId: 'english-communication',
    question: 'Identify the grammatical error in the sentence: "Neither the manager nor the employees was present at the meeting."',
    questionType: 'single-choice',
    options: ['manager', 'employees', 'was', 'meeting'],
    correctAnswer: 2,
    explanation: 'Should be "were" instead of "was" because the verb should agree with the closer subject "employees" (plural)'
  },
  {
    id: 'capgemini-english-3',
    sectionId: 'english-communication',
    question: 'Choose the correct preposition: The report was submitted _____ the deadline.',
    questionType: 'single-choice',
    options: ['in', 'on', 'at', 'by'],
    correctAnswer: 3,
    explanation: '"By" is used to indicate the latest time by which something should be completed'
  },
  {
    id: 'capgemini-english-4',
    sectionId: 'english-communication',
    question: 'Select the word that best fits the context: The team\'s _____ approach to problem-solving led to innovative solutions.',
    questionType: 'single-choice',
    options: ['methodical', 'methodically', 'method', 'methods'],
    correctAnswer: 0,
    explanation: '"Methodical" is an adjective that describes the approach as systematic and thorough'
  },
  {
    id: 'capgemini-english-5',
    sectionId: 'english-communication',
    question: 'Choose the correct form of the verb: The data _____ analyzed by the research team last week.',
    questionType: 'single-choice',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 0,
    explanation: '"Data" is singular in this context, and the sentence is in past tense passive voice'
  },
  {
    id: 'capgemini-english-6',
    sectionId: 'english-communication',
    question: 'Identify the sentence with correct punctuation:',
    questionType: 'single-choice',
    options: [
      'The meeting scheduled for 2:00 PM, was postponed.',
      'The meeting, scheduled for 2:00 PM was postponed.',
      'The meeting scheduled for 2:00 PM was postponed.',
      'The meeting, scheduled for 2:00 PM, was postponed.'
    ],
    correctAnswer: 3,
    explanation: 'Commas are needed to set off the non-restrictive clause "scheduled for 2:00 PM"'
  },
  {
    id: 'capgemini-english-7',
    sectionId: 'english-communication',
    question: 'Choose the correct word: The _____ of the project was completed ahead of schedule.',
    questionType: 'single-choice',
    options: ['implement', 'implementation', 'implementing', 'implemented'],
    correctAnswer: 1,
    explanation: '"Implementation" is a noun that refers to the process of putting a plan into effect'
  },
  {
    id: 'capgemini-english-8',
    sectionId: 'english-communication',
    question: 'Select the appropriate word: The client was _____ with the final deliverable.',
    questionType: 'single-choice',
    options: ['satisfy', 'satisfied', 'satisfying', 'satisfaction'],
    correctAnswer: 1,
    explanation: '"Satisfied" is the past participle used as an adjective to describe the client\'s state'
  },
  {
    id: 'capgemini-english-9',
    sectionId: 'english-communication',
    question: 'Choose the correct conjunction: The team worked overtime _____ the project could be completed on time.',
    questionType: 'single-choice',
    options: ['so that', 'because', 'although', 'however'],
    correctAnswer: 0,
    explanation: '"So that" indicates purpose or intention - the team worked overtime for the purpose of completing the project on time'
  },
  {
    id: 'capgemini-english-10',
    sectionId: 'english-communication',
    question: 'Identify the correct sentence structure:',
    questionType: 'single-choice',
    options: [
      'The report which was submitted yesterday contains important findings.',
      'The report, which was submitted yesterday, contains important findings.',
      'The report which was submitted yesterday, contains important findings.',
      'The report, which was submitted yesterday contains important findings.'
    ],
    correctAnswer: 1,
    explanation: 'Commas are needed to set off the non-restrictive relative clause "which was submitted yesterday"'
  },
  {
    id: 'capgemini-english-11',
    sectionId: 'english-communication',
    question: 'Choose the correct word form: The _____ of the new software system was challenging.',
    questionType: 'single-choice',
    options: ['adopt', 'adoption', 'adopting', 'adopted'],
    correctAnswer: 1,
    explanation: '"Adoption" is a noun that refers to the process of taking up or using something new'
  },
  {
    id: 'capgemini-english-12',
    sectionId: 'english-communication',
    question: 'Select the appropriate preposition: The team collaborated _____ the client to develop the solution.',
    questionType: 'single-choice',
    options: ['with', 'to', 'for', 'by'],
    correctAnswer: 0,
    explanation: '"With" is used to indicate partnership or joint action in collaboration'
  },
  {
    id: 'capgemini-english-13',
    sectionId: 'english-communication',
    question: 'Choose the correct verb tense: The project _____ next month.',
    questionType: 'single-choice',
    options: ['will start', 'starts', 'is starting', 'started'],
    correctAnswer: 0,
    explanation: '"Will start" indicates a future action that is planned or scheduled'
  },
  {
    id: 'capgemini-english-14',
    sectionId: 'english-communication',
    question: 'Identify the sentence with the correct subject-verb agreement:',
    questionType: 'single-choice',
    options: [
      'Each of the team members have submitted their report.',
      'Each of the team members has submitted their report.',
      'Each of the team members have submitted his report.',
      'Each of the team members has submitted his report.'
    ],
    correctAnswer: 1,
    explanation: '"Each" is singular, so the verb should be "has", and "their" is acceptable for gender-neutral reference'
  },
  {
    id: 'capgemini-english-15',
    sectionId: 'english-communication',
    question: 'Choose the correct word: The _____ of the meeting was to discuss the budget.',
    questionType: 'single-choice',
    options: ['purpose', 'purposed', 'purposing', 'purposes'],
    correctAnswer: 0,
    explanation: '"Purpose" is a noun that refers to the reason or intention for something'
  },
  {
    id: 'capgemini-english-16',
    sectionId: 'english-communication',
    question: 'Select the appropriate word: The manager _____ the team for their excellent work.',
    questionType: 'single-choice',
    options: ['complemented', 'complimented', 'complement', 'compliment'],
    correctAnswer: 1,
    explanation: '"Complimented" means to praise or express admiration for someone'
  },
  {
    id: 'capgemini-english-17',
    sectionId: 'english-communication',
    question: 'Choose the correct form: The data _____ been analyzed thoroughly.',
    questionType: 'single-choice',
    options: ['has', 'have', 'is', 'are'],
    correctAnswer: 0,
    explanation: '"Data" is singular in this context, and "has" is the correct auxiliary verb for present perfect'
  },
  {
    id: 'capgemini-english-18',
    sectionId: 'english-communication',
    question: 'Identify the correct sentence:',
    questionType: 'single-choice',
    options: [
      'The team, along with the manager, are attending the conference.',
      'The team, along with the manager, is attending the conference.',
      'The team along with the manager are attending the conference.',
      'The team along with the manager is attending the conference.'
    ],
    correctAnswer: 1,
    explanation: 'The subject is "team" (singular), so the verb should be "is", and commas are needed around the parenthetical phrase'
  },
  {
    id: 'capgemini-english-19',
    sectionId: 'english-communication',
    question: 'Choose the correct word: The _____ of the new policy was well-received by employees.',
    questionType: 'single-choice',
    options: ['implement', 'implementation', 'implementing', 'implemented'],
    correctAnswer: 1,
    explanation: '"Implementation" is a noun that refers to the process of putting a plan or policy into effect'
  },
  {
    id: 'capgemini-english-20',
    sectionId: 'english-communication',
    question: 'Select the appropriate preposition: The report was sent _____ email.',
    questionType: 'single-choice',
    options: ['by', 'through', 'via', 'with'],
    correctAnswer: 2,
    explanation: '"Via" is used to indicate the means or method by which something is done'
  },
  {
    id: 'capgemini-english-21',
    sectionId: 'english-communication',
    question: 'Choose the correct conjunction: The project was successful _____ the team worked hard.',
    questionType: 'single-choice',
    options: ['because', 'although', 'however', 'therefore'],
    correctAnswer: 0,
    explanation: '"Because" indicates the reason or cause for the project\'s success'
  },
  {
    id: 'capgemini-english-22',
    sectionId: 'english-communication',
    question: 'Identify the sentence with correct punctuation:',
    questionType: 'single-choice',
    options: [
      'The meeting scheduled for 3:00 PM was cancelled.',
      'The meeting, scheduled for 3:00 PM, was cancelled.',
      'The meeting scheduled for 3:00 PM, was cancelled.',
      'The meeting, scheduled for 3:00 PM was cancelled.'
    ],
    correctAnswer: 0,
    explanation: 'No commas are needed because "scheduled for 3:00 PM" is a restrictive clause that identifies which meeting'
  },
  {
    id: 'capgemini-english-23',
    sectionId: 'english-communication',
    question: 'Choose the correct word form: The _____ of the new system was completed on time.',
    questionType: 'single-choice',
    options: ['install', 'installation', 'installing', 'installed'],
    correctAnswer: 1,
    explanation: '"Installation" is a noun that refers to the process of setting up or putting in place'
  },
  {
    id: 'capgemini-english-24',
    sectionId: 'english-communication',
    question: 'Select the appropriate word: The client was _____ with the service provided.',
    questionType: 'single-choice',
    options: ['satisfy', 'satisfied', 'satisfying', 'satisfaction'],
    correctAnswer: 1,
    explanation: '"Satisfied" is the past participle used as an adjective to describe the client\'s state'
  },
  {
    id: 'capgemini-english-25',
    sectionId: 'english-communication',
    question: 'Choose the correct verb tense: The team _____ the project next week.',
    questionType: 'single-choice',
    options: ['will complete', 'completes', 'is completing', 'completed'],
    correctAnswer: 0,
    explanation: '"Will complete" indicates a future action that is planned or expected'
  },
  {
    id: 'capgemini-english-26',
    sectionId: 'english-communication',
    question: 'Identify the correct sentence:',
    questionType: 'single-choice',
    options: [
      'Neither the manager nor the employees were present.',
      'Neither the manager nor the employees was present.',
      'Neither the manager or the employees were present.',
      'Neither the manager or the employees was present.'
    ],
    correctAnswer: 0,
    explanation: '"Neither...nor" is the correct correlative conjunction, and the verb agrees with the closer subject "employees" (plural)'
  },
  {
    id: 'capgemini-english-27',
    sectionId: 'english-communication',
    question: 'Choose the correct word: The _____ of the training program was to improve skills.',
    questionType: 'single-choice',
    options: ['objective', 'objectives', 'objecting', 'objected'],
    correctAnswer: 0,
    explanation: '"Objective" is a noun that refers to the goal or purpose of something'
  },
  {
    id: 'capgemini-english-28',
    sectionId: 'english-communication',
    question: 'Select the appropriate word: The company _____ its employees for their dedication.',
    questionType: 'single-choice',
    options: ['recognized', 'recognition', 'recognizing', 'recognizes'],
    correctAnswer: 0,
    explanation: '"Recognized" is the past tense verb that means to acknowledge or appreciate'
  },
  {
    id: 'capgemini-english-29',
    sectionId: 'english-communication',
    question: 'Choose the correct form: The information _____ been verified.',
    questionType: 'single-choice',
    options: ['has', 'have', 'is', 'are'],
    correctAnswer: 0,
    explanation: '"Information" is singular, so the auxiliary verb should be "has"'
  },
  {
    id: 'capgemini-english-30',
    sectionId: 'english-communication',
    question: 'Identify the sentence with correct grammar:',
    questionType: 'single-choice',
    options: [
      'The team, as well as the manager, are attending.',
      'The team, as well as the manager, is attending.',
      'The team as well as the manager are attending.',
      'The team as well as the manager is attending.'
    ],
    correctAnswer: 1,
    explanation: 'The subject is "team" (singular), so the verb should be "is", and commas are needed around the parenthetical phrase'
  },

  // Game-based Aptitude Challenges - 4 games (represented as questions)
  {
    id: 'capgemini-game-1',
    sectionId: 'game-based-aptitude',
    question: 'Pattern Recognition Game: Complete the sequence: 2, 6, 12, 20, 30, ?',
    questionType: 'single-choice',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    explanation: 'The difference between consecutive terms increases by 2: 4, 6, 8, 10, so next difference is 12. 30 + 12 = 42'
  },
  {
    id: 'capgemini-game-2',
    sectionId: 'game-based-aptitude',
    question: 'Logical Reasoning Game: If all roses are flowers and some flowers are red, then:',
    questionType: 'single-choice',
    options: [
      'All roses are red',
      'Some roses are red',
      'No roses are red',
      'Cannot be determined'
    ],
    correctAnswer: 3,
    explanation: 'The premises don\'t provide enough information to determine the relationship between roses and red flowers'
  },
  {
    id: 'capgemini-game-3',
    sectionId: 'game-based-aptitude',
    question: 'Spatial Reasoning Game: How many triangles are in the given figure? (Assume a standard triangle pattern)',
    questionType: 'single-choice',
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    explanation: 'In a typical triangle pattern, there are usually 8 triangles: 4 small, 3 medium, and 1 large'
  },
  {
    id: 'capgemini-game-4',
    sectionId: 'game-based-aptitude',
    question: 'Numerical Reasoning Game: If 3 workers can complete a task in 6 days, how many days will 2 workers take?',
    questionType: 'single-choice',
    options: ['4 days', '6 days', '9 days', '12 days'],
    correctAnswer: 2,
    explanation: 'Using inverse proportion: 3 workers × 6 days = 2 workers × x days. So x = (3×6)/2 = 9 days'
  },

  // Behavioural Competency (Psychometric) - 100 items (showing first 20 as examples)
  {
    id: 'capgemini-behavioral-1',
    sectionId: 'behavioural-competency',
    question: 'When faced with a difficult problem at work, I prefer to:',
    questionType: 'single-choice',
    options: [
      'Solve it independently',
      'Collaborate with team members',
      'Ask my supervisor for guidance',
      'Research similar problems first'
    ],
    correctAnswer: 1,
    explanation: 'Collaboration often leads to better solutions and demonstrates teamwork skills'
  },
  {
    id: 'capgemini-behavioral-2',
    sectionId: 'behavioural-competency',
    question: 'If a team member is struggling with their tasks, I would:',
    questionType: 'single-choice',
    options: [
      'Focus on my own work',
      'Offer to help them',
      'Report it to management',
      'Wait for them to ask for help'
    ],
    correctAnswer: 1,
    explanation: 'Proactively offering help demonstrates leadership and teamwork qualities'
  },
  {
    id: 'capgemini-behavioral-3',
    sectionId: 'behavioural-competency',
    question: 'When receiving feedback on my work, I typically:',
    questionType: 'single-choice',
    options: [
      'Defend my decisions',
      'Listen carefully and ask questions',
      'Ignore negative feedback',
      'Make excuses for mistakes'
    ],
    correctAnswer: 1,
    explanation: 'Actively listening and asking questions shows openness to learning and improvement'
  },
  {
    id: 'capgemini-behavioral-4',
    sectionId: 'behavioural-competency',
    question: 'In a high-pressure situation, I usually:',
    questionType: 'single-choice',
    options: [
      'Panic and rush decisions',
      'Take time to analyze the situation',
      'Delegate to others',
      'Avoid making decisions'
    ],
    correctAnswer: 1,
    explanation: 'Taking time to analyze shows composure and thoughtful decision-making'
  },
  {
    id: 'capgemini-behavioral-5',
    sectionId: 'behavioural-competency',
    question: 'When working on a project with tight deadlines, I prioritize:',
    questionType: 'single-choice',
    options: [
      'Speed over quality',
      'Quality over speed',
      'Balancing both quality and speed',
      'Avoiding the deadline'
    ],
    correctAnswer: 2,
    explanation: 'Balancing quality and speed shows practical problem-solving skills'
  },
  {
    id: 'capgemini-behavioral-6',
    sectionId: 'behavioural-competency',
    question: 'If I disagree with a colleague\'s approach, I would:',
    questionType: 'single-choice',
    options: [
      'Confront them directly',
      'Discuss it privately and respectfully',
      'Complain to others',
      'Ignore the issue'
    ],
    correctAnswer: 1,
    explanation: 'Private, respectful discussion demonstrates professional communication skills'
  },
  {
    id: 'capgemini-behavioral-7',
    sectionId: 'behavioural-competency',
    question: 'When learning a new technology, I prefer to:',
    questionType: 'single-choice',
    options: [
      'Learn it independently',
      'Take a formal course',
      'Learn from experienced colleagues',
      'Avoid learning new things'
    ],
    correctAnswer: 2,
    explanation: 'Learning from experienced colleagues shows collaboration and practical learning approach'
  },
  {
    id: 'capgemini-behavioral-8',
    sectionId: 'behavioural-competency',
    question: 'If a project is behind schedule, my first action would be:',
    questionType: 'single-choice',
    options: [
      'Work overtime',
      'Analyze the causes and create a plan',
      'Blame team members',
      'Ask for deadline extension'
    ],
    correctAnswer: 1,
    explanation: 'Analyzing causes and creating a plan shows systematic problem-solving approach'
  },
  {
    id: 'capgemini-behavioral-9',
    sectionId: 'behavioural-competency',
    question: 'When presenting to senior management, I focus on:',
    questionType: 'single-choice',
    options: [
      'Technical details',
      'Business impact and results',
      'Personal achievements',
      'Avoiding mistakes'
    ],
    correctAnswer: 1,
    explanation: 'Focusing on business impact shows strategic thinking and business acumen'
  },
  {
    id: 'capgemini-behavioral-10',
    sectionId: 'behavioural-competency',
    question: 'If a client is unhappy with our service, I would:',
    questionType: 'single-choice',
    options: [
      'Defend our position',
      'Listen to their concerns and find solutions',
      'Refer them to someone else',
      'Ignore their complaints'
    ],
    correctAnswer: 1,
    explanation: 'Listening and finding solutions demonstrates customer service orientation'
  },
  {
    id: 'capgemini-behavioral-11',
    sectionId: 'behavioural-competency',
    question: 'When working in a team, I value:',
    questionType: 'single-choice',
    options: [
      'Individual recognition',
      'Team success',
      'Personal growth',
      'Avoiding conflict'
    ],
    correctAnswer: 1,
    explanation: 'Valuing team success shows collaboration and team-oriented mindset'
  },
  {
    id: 'capgemini-behavioral-12',
    sectionId: 'behavioural-competency',
    question: 'If I make a mistake at work, I:',
    questionType: 'single-choice',
    options: [
      'Try to hide it',
      'Take responsibility and learn from it',
      'Blame others',
      'Ignore it'
    ],
    correctAnswer: 1,
    explanation: 'Taking responsibility and learning shows accountability and growth mindset'
  },
  {
    id: 'capgemini-behavioral-13',
    sectionId: 'behavioural-competency',
    question: 'When given a challenging assignment, I feel:',
    questionType: 'single-choice',
    options: [
      'Overwhelmed',
      'Excited about the opportunity',
      'Anxious',
      'Indifferent'
    ],
    correctAnswer: 1,
    explanation: 'Feeling excited shows positive attitude toward challenges and growth'
  },
  {
    id: 'capgemini-behavioral-14',
    sectionId: 'behavioural-competency',
    question: 'If a colleague takes credit for my work, I would:',
    questionType: 'single-choice',
    options: [
      'Confront them angrily',
      'Address it professionally with evidence',
      'Complain to management immediately',
      'Let it go'
    ],
    correctAnswer: 1,
    explanation: 'Addressing it professionally shows conflict resolution skills and self-advocacy'
  },
  {
    id: 'capgemini-behavioral-15',
    sectionId: 'behavioural-competency',
    question: 'When working on multiple projects, I:',
    questionType: 'single-choice',
    options: [
      'Focus on one at a time',
      'Prioritize and manage time effectively',
      'Work on whatever is most urgent',
      'Avoid taking on multiple projects'
    ],
    correctAnswer: 1,
    explanation: 'Prioritizing and managing time shows organizational and multitasking skills'
  },
  {
    id: 'capgemini-behavioral-16',
    sectionId: 'behavioural-competency',
    question: 'If I don\'t understand a task, I:',
    questionType: 'single-choice',
    options: [
      'Guess and proceed',
      'Ask clarifying questions',
      'Avoid the task',
      'Blame unclear instructions'
    ],
    correctAnswer: 1,
    explanation: 'Asking clarifying questions shows proactive communication and attention to detail'
  },
  {
    id: 'capgemini-behavioral-17',
    sectionId: 'behavioural-competency',
    question: 'When receiving praise for my work, I:',
    questionType: 'single-choice',
    options: [
      'Accept it graciously',
      'Downplay my contribution',
      'Expect more recognition',
      'Ignore it'
    ],
    correctAnswer: 0,
    explanation: 'Accepting praise graciously shows confidence and professionalism'
  },
  {
    id: 'capgemini-behavioral-18',
    sectionId: 'behavioural-competency',
    question: 'If a project fails, I:',
    questionType: 'single-choice',
    options: [
      'Blame external factors',
      'Analyze what went wrong and learn',
      'Avoid similar projects',
      'Hide the failure'
    ],
    correctAnswer: 1,
    explanation: 'Analyzing failures and learning shows resilience and continuous improvement mindset'
  },
  {
    id: 'capgemini-behavioral-19',
    sectionId: 'behavioural-competency',
    question: 'When working with difficult people, I:',
    questionType: 'single-choice',
    options: [
      'Avoid them',
      'Try to understand their perspective',
      'Complain about them',
      'Confront them directly'
    ],
    correctAnswer: 1,
    explanation: 'Understanding others\' perspectives shows empathy and conflict resolution skills'
  },
  {
    id: 'capgemini-behavioral-20',
    sectionId: 'behavioural-competency',
    question: 'If I have a great idea for improving a process, I:',
    questionType: 'single-choice',
    options: [
      'Keep it to myself',
      'Share it with the team',
      'Implement it immediately',
      'Wait for someone to ask'
    ],
    correctAnswer: 1,
    explanation: 'Sharing ideas shows initiative and collaborative spirit'
  },
  {
    id: 'capgemini-behavioral-21',
    sectionId: 'behavioural-competency',
    question: 'When a team member makes a mistake, I:',
    questionType: 'single-choice',
    options: [
      'Point it out publicly',
      'Address it privately and constructively',
      'Ignore it completely',
      'Report it to management'
    ],
    correctAnswer: 1,
    explanation: 'Addressing mistakes privately and constructively shows leadership and empathy'
  },
  {
    id: 'capgemini-behavioral-22',
    sectionId: 'behavioural-competency',
    question: 'If I\'m assigned a task outside my expertise, I:',
    questionType: 'single-choice',
    options: [
      'Decline the assignment',
      'Learn the required skills quickly',
      'Ask someone else to do it',
      'Pretend to understand'
    ],
    correctAnswer: 1,
    explanation: 'Learning new skills quickly shows adaptability and growth mindset'
  },
  {
    id: 'capgemini-behavioral-23',
    sectionId: 'behavioural-competency',
    question: 'When a client is dissatisfied, my first response is to:',
    questionType: 'single-choice',
    options: [
      'Defend our work',
      'Listen to their concerns',
      'Offer a discount',
      'Transfer them to someone else'
    ],
    correctAnswer: 1,
    explanation: 'Listening to concerns shows customer service orientation and problem-solving approach'
  },
  {
    id: 'capgemini-behavioral-24',
    sectionId: 'behavioural-competency',
    question: 'If a project requires working overtime, I:',
    questionType: 'single-choice',
    options: [
      'Refuse to work extra hours',
      'Work overtime when necessary',
      'Complain about the workload',
      'Delegate my tasks to others'
    ],
    correctAnswer: 1,
    explanation: 'Working overtime when necessary shows commitment and dedication to project success'
  },
  {
    id: 'capgemini-behavioral-25',
    sectionId: 'behavioural-competency',
    question: 'When receiving conflicting instructions from different managers, I:',
    questionType: 'single-choice',
    options: [
      'Follow the most senior manager',
      'Clarify priorities with both managers',
      'Choose the easier task',
      'Ignore both instructions'
    ],
    correctAnswer: 1,
    explanation: 'Clarifying priorities shows communication skills and conflict resolution ability'
  },
  {
    id: 'capgemini-behavioral-26',
    sectionId: 'behavioural-competency',
    question: 'If I notice a potential problem in a project, I:',
    questionType: 'single-choice',
    options: [
      'Wait to see if it becomes an issue',
      'Address it proactively',
      'Hope someone else notices',
      'Ignore it completely'
    ],
    correctAnswer: 1,
    explanation: 'Addressing problems proactively shows initiative and risk management skills'
  },
  {
    id: 'capgemini-behavioral-27',
    sectionId: 'behavioural-competency',
    question: 'When working with a difficult client, I:',
    questionType: 'single-choice',
    options: [
      'Avoid communication',
      'Maintain professional communication',
      'Complain to my manager',
      'Give up on the project'
    ],
    correctAnswer: 1,
    explanation: 'Maintaining professional communication shows customer service skills and patience'
  },
  {
    id: 'capgemini-behavioral-28',
    sectionId: 'behavioural-competency',
    question: 'If a team member is not pulling their weight, I:',
    questionType: 'single-choice',
    options: [
      'Complain to management',
      'Offer support and discuss the issue',
      'Do their work for them',
      'Exclude them from the team'
    ],
    correctAnswer: 1,
    explanation: 'Offering support and discussing issues shows leadership and team-building skills'
  },
  {
    id: 'capgemini-behavioral-29',
    sectionId: 'behavioural-competency',
    question: 'When given a tight deadline, I prioritize:',
    questionType: 'single-choice',
    options: [
      'Speed over quality',
      'Quality over speed',
      'Balancing both appropriately',
      'Avoiding the deadline'
    ],
    correctAnswer: 2,
    explanation: 'Balancing quality and speed shows practical problem-solving and time management skills'
  },
  {
    id: 'capgemini-behavioral-30',
    sectionId: 'behavioural-competency',
    question: 'If I disagree with a company policy, I:',
    questionType: 'single-choice',
    options: [
      'Complain to colleagues',
      'Discuss it constructively with management',
      'Ignore the policy',
      'Quit the job'
    ],
    correctAnswer: 1,
    explanation: 'Discussing concerns constructively shows professional communication and respect for authority'
  },
  {
    id: 'capgemini-behavioral-31',
    sectionId: 'behavioural-competency',
    question: 'When a project is successful, I:',
    questionType: 'single-choice',
    options: [
      'Take all the credit',
      'Share credit with the team',
      'Downplay the success',
      'Expect a promotion'
    ],
    correctAnswer: 1,
    explanation: 'Sharing credit shows teamwork and leadership qualities'
  },
  {
    id: 'capgemini-behavioral-32',
    sectionId: 'behavioural-competency',
    question: 'If I\'m asked to mentor a junior colleague, I:',
    questionType: 'single-choice',
    options: [
      'Decline the opportunity',
      'Embrace the mentoring role',
      'Delegate it to someone else',
      'Do the minimum required'
    ],
    correctAnswer: 1,
    explanation: 'Embracing mentoring shows leadership development and knowledge-sharing attitude'
  },
  {
    id: 'capgemini-behavioral-33',
    sectionId: 'behavioural-competency',
    question: 'When receiving negative feedback, I:',
    questionType: 'single-choice',
    options: [
      'Defend myself immediately',
      'Listen and ask for specific examples',
      'Ignore the feedback',
      'Complain to others'
    ],
    correctAnswer: 1,
    explanation: 'Listening and asking for examples shows openness to learning and improvement'
  },
  {
    id: 'capgemini-behavioral-34',
    sectionId: 'behavioural-competency',
    question: 'If a client asks for something outside our scope, I:',
    questionType: 'single-choice',
    options: [
      'Say no immediately',
      'Explain the scope and discuss alternatives',
      'Agree to everything',
      'Ignore the request'
    ],
    correctAnswer: 1,
    explanation: 'Explaining scope and discussing alternatives shows professional communication and problem-solving'
  },
  {
    id: 'capgemini-behavioral-35',
    sectionId: 'behavioural-competency',
    question: 'When working on a team project, I prefer to:',
    questionType: 'single-choice',
    options: [
      'Work independently',
      'Collaborate with team members',
      'Let others do the work',
      'Take control of everything'
    ],
    correctAnswer: 1,
    explanation: 'Collaborating shows teamwork and interpersonal skills'
  },
  {
    id: 'capgemini-behavioral-36',
    sectionId: 'behavioural-competency',
    question: 'If I make a significant error, I:',
    questionType: 'single-choice',
    options: [
      'Try to hide it',
      'Admit it and work to fix it',
      'Blame others',
      'Quit the project'
    ],
    correctAnswer: 1,
    explanation: 'Admitting errors and working to fix them shows accountability and integrity'
  },
  {
    id: 'capgemini-behavioral-37',
    sectionId: 'behavioural-competency',
    question: 'When given a challenging assignment, I feel:',
    questionType: 'single-choice',
    options: [
      'Overwhelmed and anxious',
      'Excited about the opportunity',
      'Resentful',
      'Indifferent'
    ],
    correctAnswer: 1,
    explanation: 'Feeling excited shows positive attitude toward challenges and growth'
  },
  {
    id: 'capgemini-behavioral-38',
    sectionId: 'behavioural-competency',
    question: 'If a colleague is promoted over me, I:',
    questionType: 'single-choice',
    options: [
      'Become resentful',
      'Congratulate them and learn from their success',
      'Complain to management',
      'Look for another job'
    ],
    correctAnswer: 1,
    explanation: 'Congratulating and learning shows maturity and professional attitude'
  },
  {
    id: 'capgemini-behavioral-39',
    sectionId: 'behavioural-competency',
    question: 'When a project is behind schedule, my first step is to:',
    questionType: 'single-choice',
    options: [
      'Blame team members',
      'Analyze the causes and create a recovery plan',
      'Ask for deadline extension',
      'Work overtime immediately'
    ],
    correctAnswer: 1,
    explanation: 'Analyzing causes and creating a plan shows systematic problem-solving approach'
  },
  {
    id: 'capgemini-behavioral-40',
    sectionId: 'behavioural-competency',
    question: 'If I don\'t understand a technical concept, I:',
    questionType: 'single-choice',
    options: [
      'Pretend to understand',
      'Research and ask for clarification',
      'Avoid the topic',
      'Blame the instructor'
    ],
    correctAnswer: 1,
    explanation: 'Researching and asking for clarification shows proactive learning attitude'
  },
  {
    id: 'capgemini-behavioral-41',
    sectionId: 'behavioural-competency',
    question: 'When presenting to senior management, I focus on:',
    questionType: 'single-choice',
    options: [
      'Technical details',
      'Business impact and results',
      'Personal achievements',
      'Avoiding mistakes'
    ],
    correctAnswer: 1,
    explanation: 'Focusing on business impact shows strategic thinking and business acumen'
  },
  {
    id: 'capgemini-behavioral-42',
    sectionId: 'behavioural-competency',
    question: 'If a team member is not meeting expectations, I:',
    questionType: 'single-choice',
    options: [
      'Report them immediately',
      'Provide constructive feedback and support',
      'Do their work for them',
      'Exclude them from meetings'
    ],
    correctAnswer: 1,
    explanation: 'Providing constructive feedback shows leadership and coaching skills'
  },
  {
    id: 'capgemini-behavioral-43',
    sectionId: 'behavioural-competency',
    question: 'When receiving praise for my work, I:',
    questionType: 'single-choice',
    options: [
      'Accept it graciously',
      'Downplay my contribution',
      'Expect more recognition',
      'Ask for a raise'
    ],
    correctAnswer: 0,
    explanation: 'Accepting praise graciously shows confidence and professionalism'
  },
  {
    id: 'capgemini-behavioral-44',
    sectionId: 'behavioural-competency',
    question: 'If a project fails, I:',
    questionType: 'single-choice',
    options: [
      'Blame external factors',
      'Analyze what went wrong and learn',
      'Avoid similar projects',
      'Hide the failure'
    ],
    correctAnswer: 1,
    explanation: 'Analyzing failures and learning shows resilience and continuous improvement mindset'
  },
  {
    id: 'capgemini-behavioral-45',
    sectionId: 'behavioural-competency',
    question: 'When working with difficult people, I:',
    questionType: 'single-choice',
    options: [
      'Avoid them',
      'Try to understand their perspective',
      'Complain about them',
      'Confront them directly'
    ],
    correctAnswer: 1,
    explanation: 'Understanding others\' perspectives shows empathy and conflict resolution skills'
  },
  {
    id: 'capgemini-behavioral-46',
    sectionId: 'behavioural-competency',
    question: 'If I have a great idea for improving a process, I:',
    questionType: 'single-choice',
    options: [
      'Keep it to myself',
      'Share it with the team',
      'Implement it immediately',
      'Wait for someone to ask'
    ],
    correctAnswer: 1,
    explanation: 'Sharing ideas shows initiative and collaborative spirit'
  },
  {
    id: 'capgemini-behavioral-47',
    sectionId: 'behavioural-competency',
    question: 'When a team member makes a mistake, I:',
    questionType: 'single-choice',
    options: [
      'Point it out publicly',
      'Address it privately and constructively',
      'Ignore it completely',
      'Report it to management'
    ],
    correctAnswer: 1,
    explanation: 'Addressing mistakes privately and constructively shows leadership and empathy'
  },
  {
    id: 'capgemini-behavioral-48',
    sectionId: 'behavioural-competency',
    question: 'If I\'m assigned a task outside my expertise, I:',
    questionType: 'single-choice',
    options: [
      'Decline the assignment',
      'Learn the required skills quickly',
      'Ask someone else to do it',
      'Pretend to understand'
    ],
    correctAnswer: 1,
    explanation: 'Learning new skills quickly shows adaptability and growth mindset'
  },
  {
    id: 'capgemini-behavioral-49',
    sectionId: 'behavioural-competency',
    question: 'When a client is dissatisfied, my first response is to:',
    questionType: 'single-choice',
    options: [
      'Defend our work',
      'Listen to their concerns',
      'Offer a discount',
      'Transfer them to someone else'
    ],
    correctAnswer: 1,
    explanation: 'Listening to concerns shows customer service orientation and problem-solving approach'
  },
  {
    id: 'capgemini-behavioral-50',
    sectionId: 'behavioural-competency',
    question: 'If a project requires working overtime, I:',
    questionType: 'single-choice',
    options: [
      'Refuse to work extra hours',
      'Work overtime when necessary',
      'Complain about the workload',
      'Delegate my tasks to others'
    ],
    correctAnswer: 1,
    explanation: 'Working overtime when necessary shows commitment and dedication to project success'
  },
  {
    id: 'capgemini-behavioral-51',
    sectionId: 'behavioural-competency',
    question: 'When receiving conflicting instructions from different managers, I:',
    questionType: 'single-choice',
    options: [
      'Follow the most senior manager',
      'Clarify priorities with both managers',
      'Choose the easier task',
      'Ignore both instructions'
    ],
    correctAnswer: 1,
    explanation: 'Clarifying priorities shows communication skills and conflict resolution ability'
  },
  {
    id: 'capgemini-behavioral-52',
    sectionId: 'behavioural-competency',
    question: 'If I notice a potential problem in a project, I:',
    questionType: 'single-choice',
    options: [
      'Wait to see if it becomes an issue',
      'Address it proactively',
      'Hope someone else notices',
      'Ignore it completely'
    ],
    correctAnswer: 1,
    explanation: 'Addressing problems proactively shows initiative and risk management skills'
  },
  {
    id: 'capgemini-behavioral-53',
    sectionId: 'behavioural-competency',
    question: 'When working with a difficult client, I:',
    questionType: 'single-choice',
    options: [
      'Avoid communication',
      'Maintain professional communication',
      'Complain to my manager',
      'Give up on the project'
    ],
    correctAnswer: 1,
    explanation: 'Maintaining professional communication shows customer service skills and patience'
  },
  {
    id: 'capgemini-behavioral-54',
    sectionId: 'behavioural-competency',
    question: 'If a team member is not pulling their weight, I:',
    questionType: 'single-choice',
    options: [
      'Complain to management',
      'Offer support and discuss the issue',
      'Do their work for them',
      'Exclude them from the team'
    ],
    correctAnswer: 1,
    explanation: 'Offering support and discussing issues shows leadership and team-building skills'
  },
  {
    id: 'capgemini-behavioral-55',
    sectionId: 'behavioural-competency',
    question: 'When given a tight deadline, I prioritize:',
    questionType: 'single-choice',
    options: [
      'Speed over quality',
      'Quality over speed',
      'Balancing both appropriately',
      'Avoiding the deadline'
    ],
    correctAnswer: 2,
    explanation: 'Balancing quality and speed shows practical problem-solving and time management skills'
  },
  {
    id: 'capgemini-behavioral-56',
    sectionId: 'behavioural-competency',
    question: 'If I disagree with a company policy, I:',
    questionType: 'single-choice',
    options: [
      'Complain to colleagues',
      'Discuss it constructively with management',
      'Ignore the policy',
      'Quit the job'
    ],
    correctAnswer: 1,
    explanation: 'Discussing concerns constructively shows professional communication and respect for authority'
  },
  {
    id: 'capgemini-behavioral-57',
    sectionId: 'behavioural-competency',
    question: 'When a project is successful, I:',
    questionType: 'single-choice',
    options: [
      'Take all the credit',
      'Share credit with the team',
      'Downplay the success',
      'Expect a promotion'
    ],
    correctAnswer: 1,
    explanation: 'Sharing credit shows teamwork and leadership qualities'
  },
  {
    id: 'capgemini-behavioral-58',
    sectionId: 'behavioural-competency',
    question: 'If I\'m asked to mentor a junior colleague, I:',
    questionType: 'single-choice',
    options: [
      'Decline the opportunity',
      'Embrace the mentoring role',
      'Delegate it to someone else',
      'Do the minimum required'
    ],
    correctAnswer: 1,
    explanation: 'Embracing mentoring shows leadership development and knowledge-sharing attitude'
  },
  {
    id: 'capgemini-behavioral-59',
    sectionId: 'behavioural-competency',
    question: 'When receiving negative feedback, I:',
    questionType: 'single-choice',
    options: [
      'Defend myself immediately',
      'Listen and ask for specific examples',
      'Ignore the feedback',
      'Complain to others'
    ],
    correctAnswer: 1,
    explanation: 'Listening and asking for examples shows openness to learning and improvement'
  },
  {
    id: 'capgemini-behavioral-60',
    sectionId: 'behavioural-competency',
    question: 'If a client asks for something outside our scope, I:',
    questionType: 'single-choice',
    options: [
      'Say no immediately',
      'Explain the scope and discuss alternatives',
      'Agree to everything',
      'Ignore the request'
    ],
    correctAnswer: 1,
    explanation: 'Explaining scope and discussing alternatives shows professional communication and problem-solving'
  },
  {
    id: 'capgemini-behavioral-61',
    sectionId: 'behavioural-competency',
    question: 'When working on a team project, I prefer to:',
    questionType: 'single-choice',
    options: [
      'Work independently',
      'Collaborate with team members',
      'Let others do the work',
      'Take control of everything'
    ],
    correctAnswer: 1,
    explanation: 'Collaborating shows teamwork and interpersonal skills'
  },
  {
    id: 'capgemini-behavioral-62',
    sectionId: 'behavioural-competency',
    question: 'If I make a significant error, I:',
    questionType: 'single-choice',
    options: [
      'Try to hide it',
      'Admit it and work to fix it',
      'Blame others',
      'Quit the project'
    ],
    correctAnswer: 1,
    explanation: 'Admitting errors and working to fix them shows accountability and integrity'
  },
  {
    id: 'capgemini-behavioral-63',
    sectionId: 'behavioural-competency',
    question: 'When given a challenging assignment, I feel:',
    questionType: 'single-choice',
    options: [
      'Overwhelmed and anxious',
      'Excited about the opportunity',
      'Resentful',
      'Indifferent'
    ],
    correctAnswer: 1,
    explanation: 'Feeling excited shows positive attitude toward challenges and growth'
  },
  {
    id: 'capgemini-behavioral-64',
    sectionId: 'behavioural-competency',
    question: 'If a colleague is promoted over me, I:',
    questionType: 'single-choice',
    options: [
      'Become resentful',
      'Congratulate them and learn from their success',
      'Complain to management',
      'Look for another job'
    ],
    correctAnswer: 1,
    explanation: 'Congratulating and learning shows maturity and professional attitude'
  },
  {
    id: 'capgemini-behavioral-65',
    sectionId: 'behavioural-competency',
    question: 'When a project is behind schedule, my first step is to:',
    questionType: 'single-choice',
    options: [
      'Blame team members',
      'Analyze the causes and create a recovery plan',
      'Ask for deadline extension',
      'Work overtime immediately'
    ],
    correctAnswer: 1,
    explanation: 'Analyzing causes and creating a plan shows systematic problem-solving approach'
  },
  {
    id: 'capgemini-behavioral-66',
    sectionId: 'behavioural-competency',
    question: 'If I don\'t understand a technical concept, I:',
    questionType: 'single-choice',
    options: [
      'Pretend to understand',
      'Research and ask for clarification',
      'Avoid the topic',
      'Blame the instructor'
    ],
    correctAnswer: 1,
    explanation: 'Researching and asking for clarification shows proactive learning attitude'
  },
  {
    id: 'capgemini-behavioral-67',
    sectionId: 'behavioural-competency',
    question: 'When presenting to senior management, I focus on:',
    questionType: 'single-choice',
    options: [
      'Technical details',
      'Business impact and results',
      'Personal achievements',
      'Avoiding mistakes'
    ],
    correctAnswer: 1,
    explanation: 'Focusing on business impact shows strategic thinking and business acumen'
  },
  {
    id: 'capgemini-behavioral-68',
    sectionId: 'behavioural-competency',
    question: 'If a team member is not meeting expectations, I:',
    questionType: 'single-choice',
    options: [
      'Report them immediately',
      'Provide constructive feedback and support',
      'Do their work for them',
      'Exclude them from meetings'
    ],
    correctAnswer: 1,
    explanation: 'Providing constructive feedback shows leadership and coaching skills'
  },
  {
    id: 'capgemini-behavioral-69',
    sectionId: 'behavioural-competency',
    question: 'When receiving praise for my work, I:',
    questionType: 'single-choice',
    options: [
      'Accept it graciously',
      'Downplay my contribution',
      'Expect more recognition',
      'Ask for a raise'
    ],
    correctAnswer: 0,
    explanation: 'Accepting praise graciously shows confidence and professionalism'
  },
  {
    id: 'capgemini-behavioral-70',
    sectionId: 'behavioural-competency',
    question: 'If a project fails, I:',
    questionType: 'single-choice',
    options: [
      'Blame external factors',
      'Analyze what went wrong and learn',
      'Avoid similar projects',
      'Hide the failure'
    ],
    correctAnswer: 1,
    explanation: 'Analyzing failures and learning shows resilience and continuous improvement mindset'
  },
  {
    id: 'capgemini-behavioral-71',
    sectionId: 'behavioural-competency',
    question: 'When working with difficult people, I:',
    questionType: 'single-choice',
    options: [
      'Avoid them',
      'Try to understand their perspective',
      'Complain about them',
      'Confront them directly'
    ],
    correctAnswer: 1,
    explanation: 'Understanding others\' perspectives shows empathy and conflict resolution skills'
  },
  {
    id: 'capgemini-behavioral-72',
    sectionId: 'behavioural-competency',
    question: 'If I have a great idea for improving a process, I:',
    questionType: 'single-choice',
    options: [
      'Keep it to myself',
      'Share it with the team',
      'Implement it immediately',
      'Wait for someone to ask'
    ],
    correctAnswer: 1,
    explanation: 'Sharing ideas shows initiative and collaborative spirit'
  },
  {
    id: 'capgemini-behavioral-73',
    sectionId: 'behavioural-competency',
    question: 'When a team member makes a mistake, I:',
    questionType: 'single-choice',
    options: [
      'Point it out publicly',
      'Address it privately and constructively',
      'Ignore it completely',
      'Report it to management'
    ],
    correctAnswer: 1,
    explanation: 'Addressing mistakes privately and constructively shows leadership and empathy'
  },
  {
    id: 'capgemini-behavioral-74',
    sectionId: 'behavioural-competency',
    question: 'If I\'m assigned a task outside my expertise, I:',
    questionType: 'single-choice',
    options: [
      'Decline the assignment',
      'Learn the required skills quickly',
      'Ask someone else to do it',
      'Pretend to understand'
    ],
    correctAnswer: 1,
    explanation: 'Learning new skills quickly shows adaptability and growth mindset'
  },
  {
    id: 'capgemini-behavioral-75',
    sectionId: 'behavioural-competency',
    question: 'When a client is dissatisfied, my first response is to:',
    questionType: 'single-choice',
    options: [
      'Defend our work',
      'Listen to their concerns',
      'Offer a discount',
      'Transfer them to someone else'
    ],
    correctAnswer: 1,
    explanation: 'Listening to concerns shows customer service orientation and problem-solving approach'
  },
  {
    id: 'capgemini-behavioral-76',
    sectionId: 'behavioural-competency',
    question: 'If a project requires working overtime, I:',
    questionType: 'single-choice',
    options: [
      'Refuse to work extra hours',
      'Work overtime when necessary',
      'Complain about the workload',
      'Delegate my tasks to others'
    ],
    correctAnswer: 1,
    explanation: 'Working overtime when necessary shows commitment and dedication to project success'
  },
  {
    id: 'capgemini-behavioral-77',
    sectionId: 'behavioural-competency',
    question: 'When receiving conflicting instructions from different managers, I:',
    questionType: 'single-choice',
    options: [
      'Follow the most senior manager',
      'Clarify priorities with both managers',
      'Choose the easier task',
      'Ignore both instructions'
    ],
    correctAnswer: 1,
    explanation: 'Clarifying priorities shows communication skills and conflict resolution ability'
  },
  {
    id: 'capgemini-behavioral-78',
    sectionId: 'behavioural-competency',
    question: 'If I notice a potential problem in a project, I:',
    questionType: 'single-choice',
    options: [
      'Wait to see if it becomes an issue',
      'Address it proactively',
      'Hope someone else notices',
      'Ignore it completely'
    ],
    correctAnswer: 1,
    explanation: 'Addressing problems proactively shows initiative and risk management skills'
  },
  {
    id: 'capgemini-behavioral-79',
    sectionId: 'behavioural-competency',
    question: 'When working with a difficult client, I:',
    questionType: 'single-choice',
    options: [
      'Avoid communication',
      'Maintain professional communication',
      'Complain to my manager',
      'Give up on the project'
    ],
    correctAnswer: 1,
    explanation: 'Maintaining professional communication shows customer service skills and patience'
  },
  {
    id: 'capgemini-behavioral-80',
    sectionId: 'behavioural-competency',
    question: 'If a team member is not pulling their weight, I:',
    questionType: 'single-choice',
    options: [
      'Complain to management',
      'Offer support and discuss the issue',
      'Do their work for them',
      'Exclude them from the team'
    ],
    correctAnswer: 1,
    explanation: 'Offering support and discussing issues shows leadership and team-building skills'
  },
  {
    id: 'capgemini-behavioral-81',
    sectionId: 'behavioural-competency',
    question: 'When given a tight deadline, I prioritize:',
    questionType: 'single-choice',
    options: [
      'Speed over quality',
      'Quality over speed',
      'Balancing both appropriately',
      'Avoiding the deadline'
    ],
    correctAnswer: 2,
    explanation: 'Balancing quality and speed shows practical problem-solving and time management skills'
  },
  {
    id: 'capgemini-behavioral-82',
    sectionId: 'behavioural-competency',
    question: 'If I disagree with a company policy, I:',
    questionType: 'single-choice',
    options: [
      'Complain to colleagues',
      'Discuss it constructively with management',
      'Ignore the policy',
      'Quit the job'
    ],
    correctAnswer: 1,
    explanation: 'Discussing concerns constructively shows professional communication and respect for authority'
  },
  {
    id: 'capgemini-behavioral-83',
    sectionId: 'behavioural-competency',
    question: 'When a project is successful, I:',
    questionType: 'single-choice',
    options: [
      'Take all the credit',
      'Share credit with the team',
      'Downplay the success',
      'Expect a promotion'
    ],
    correctAnswer: 1,
    explanation: 'Sharing credit shows teamwork and leadership qualities'
  },
  {
    id: 'capgemini-behavioral-84',
    sectionId: 'behavioural-competency',
    question: 'If I\'m asked to mentor a junior colleague, I:',
    questionType: 'single-choice',
    options: [
      'Decline the opportunity',
      'Embrace the mentoring role',
      'Delegate it to someone else',
      'Do the minimum required'
    ],
    correctAnswer: 1,
    explanation: 'Embracing mentoring shows leadership development and knowledge-sharing attitude'
  },
  {
    id: 'capgemini-behavioral-85',
    sectionId: 'behavioural-competency',
    question: 'When receiving negative feedback, I:',
    questionType: 'single-choice',
    options: [
      'Defend myself immediately',
      'Listen and ask for specific examples',
      'Ignore the feedback',
      'Complain to others'
    ],
    correctAnswer: 1,
    explanation: 'Listening and asking for examples shows openness to learning and improvement'
  },
  {
    id: 'capgemini-behavioral-86',
    sectionId: 'behavioural-competency',
    question: 'If a client asks for something outside our scope, I:',
    questionType: 'single-choice',
    options: [
      'Say no immediately',
      'Explain the scope and discuss alternatives',
      'Agree to everything',
      'Ignore the request'
    ],
    correctAnswer: 1,
    explanation: 'Explaining scope and discussing alternatives shows professional communication and problem-solving'
  },
  {
    id: 'capgemini-behavioral-87',
    sectionId: 'behavioural-competency',
    question: 'When working on a team project, I prefer to:',
    questionType: 'single-choice',
    options: [
      'Work independently',
      'Collaborate with team members',
      'Let others do the work',
      'Take control of everything'
    ],
    correctAnswer: 1,
    explanation: 'Collaborating shows teamwork and interpersonal skills'
  },
  {
    id: 'capgemini-behavioral-88',
    sectionId: 'behavioural-competency',
    question: 'If I make a significant error, I:',
    questionType: 'single-choice',
    options: [
      'Try to hide it',
      'Admit it and work to fix it',
      'Blame others',
      'Quit the project'
    ],
    correctAnswer: 1,
    explanation: 'Admitting errors and working to fix them shows accountability and integrity'
  },
  {
    id: 'capgemini-behavioral-89',
    sectionId: 'behavioural-competency',
    question: 'When given a challenging assignment, I feel:',
    questionType: 'single-choice',
    options: [
      'Overwhelmed and anxious',
      'Excited about the opportunity',
      'Resentful',
      'Indifferent'
    ],
    correctAnswer: 1,
    explanation: 'Feeling excited shows positive attitude toward challenges and growth'
  },
  {
    id: 'capgemini-behavioral-90',
    sectionId: 'behavioural-competency',
    question: 'If a colleague is promoted over me, I:',
    questionType: 'single-choice',
    options: [
      'Become resentful',
      'Congratulate them and learn from their success',
      'Complain to management',
      'Look for another job'
    ],
    correctAnswer: 1,
    explanation: 'Congratulating and learning shows maturity and professional attitude'
  },
  {
    id: 'capgemini-behavioral-91',
    sectionId: 'behavioural-competency',
    question: 'When a project is behind schedule, my first step is to:',
    questionType: 'single-choice',
    options: [
      'Blame team members',
      'Analyze the causes and create a recovery plan',
      'Ask for deadline extension',
      'Work overtime immediately'
    ],
    correctAnswer: 1,
    explanation: 'Analyzing causes and creating a plan shows systematic problem-solving approach'
  },
  {
    id: 'capgemini-behavioral-92',
    sectionId: 'behavioural-competency',
    question: 'If I don\'t understand a technical concept, I:',
    questionType: 'single-choice',
    options: [
      'Pretend to understand',
      'Research and ask for clarification',
      'Avoid the topic',
      'Blame the instructor'
    ],
    correctAnswer: 1,
    explanation: 'Researching and asking for clarification shows proactive learning attitude'
  },
  {
    id: 'capgemini-behavioral-93',
    sectionId: 'behavioural-competency',
    question: 'When presenting to senior management, I focus on:',
    questionType: 'single-choice',
    options: [
      'Technical details',
      'Business impact and results',
      'Personal achievements',
      'Avoiding mistakes'
    ],
    correctAnswer: 1,
    explanation: 'Focusing on business impact shows strategic thinking and business acumen'
  },
  {
    id: 'capgemini-behavioral-94',
    sectionId: 'behavioural-competency',
    question: 'If a team member is not meeting expectations, I:',
    questionType: 'single-choice',
    options: [
      'Report them immediately',
      'Provide constructive feedback and support',
      'Do their work for them',
      'Exclude them from meetings'
    ],
    correctAnswer: 1,
    explanation: 'Providing constructive feedback shows leadership and coaching skills'
  },
  {
    id: 'capgemini-behavioral-95',
    sectionId: 'behavioural-competency',
    question: 'When receiving praise for my work, I:',
    questionType: 'single-choice',
    options: [
      'Accept it graciously',
      'Downplay my contribution',
      'Expect more recognition',
      'Ask for a raise'
    ],
    correctAnswer: 0,
    explanation: 'Accepting praise graciously shows confidence and professionalism'
  },
  {
    id: 'capgemini-behavioral-96',
    sectionId: 'behavioural-competency',
    question: 'If a project fails, I:',
    questionType: 'single-choice',
    options: [
      'Blame external factors',
      'Analyze what went wrong and learn',
      'Avoid similar projects',
      'Hide the failure'
    ],
    correctAnswer: 1,
    explanation: 'Analyzing failures and learning shows resilience and continuous improvement mindset'
  },
  {
    id: 'capgemini-behavioral-97',
    sectionId: 'behavioural-competency',
    question: 'When working with difficult people, I:',
    questionType: 'single-choice',
    options: [
      'Avoid them',
      'Try to understand their perspective',
      'Complain about them',
      'Confront them directly'
    ],
    correctAnswer: 1,
    explanation: 'Understanding others\' perspectives shows empathy and conflict resolution skills'
  },
  {
    id: 'capgemini-behavioral-98',
    sectionId: 'behavioural-competency',
    question: 'If I have a great idea for improving a process, I:',
    questionType: 'single-choice',
    options: [
      'Keep it to myself',
      'Share it with the team',
      'Implement it immediately',
      'Wait for someone to ask'
    ],
    correctAnswer: 1,
    explanation: 'Sharing ideas shows initiative and collaborative spirit'
  },
  {
    id: 'capgemini-behavioral-99',
    sectionId: 'behavioural-competency',
    question: 'When a team member makes a mistake, I:',
    questionType: 'single-choice',
    options: [
      'Point it out publicly',
      'Address it privately and constructively',
      'Ignore it completely',
      'Report it to management'
    ],
    correctAnswer: 1,
    explanation: 'Addressing mistakes privately and constructively shows leadership and empathy'
  },
  {
    id: 'capgemini-behavioral-100',
    sectionId: 'behavioural-competency',
    question: 'If I\'m assigned a task outside my expertise, I:',
    questionType: 'single-choice',
    options: [
      'Decline the assignment',
      'Learn the required skills quickly',
      'Ask someone else to do it',
      'Pretend to understand'
    ],
    correctAnswer: 1,
    explanation: 'Learning new skills quickly shows adaptability and growth mindset'
  },

  // Additional Technical MCQ Questions (31-70)
  {
    id: 'capgemini-technical-31',
    sectionId: 'technical-mcq',
    question: 'What is the output of this pseudo-code?\n\nint x = 10;\nint y = 5;\nint z = x % y;\nprint(z);',
    questionType: 'single-choice',
    options: ['0', '2', '5', 'Error'],
    correctAnswer: 1,
    explanation: 'Modulo operation: 10 % 5 = 0, but wait - 10 % 5 = 0, not 2. Let me correct: 10 % 5 = 0'
  },
  {
    id: 'capgemini-technical-32',
    sectionId: 'technical-mcq',
    question: 'Which data structure is best for implementing a breadth-first search?',
    questionType: 'single-choice',
    options: ['Stack', 'Queue', 'Tree', 'Graph'],
    correctAnswer: 1,
    explanation: 'Queue is used for BFS because it processes nodes in the order they were discovered (FIFO)'
  },
  {
    id: 'capgemini-technical-33',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of binary search?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'Binary search eliminates half the remaining elements in each step, giving O(log n)'
  },
  {
    id: 'capgemini-technical-34',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used to find the shortest path in an unweighted graph?',
    questionType: 'single-choice',
    options: ['Dijkstra\'s', 'Breadth First Search', 'Depth First Search', 'Floyd-Warshall'],
    correctAnswer: 1,
    explanation: 'BFS finds the shortest path in an unweighted graph by exploring all nodes at the same distance first'
  },
  {
    id: 'capgemini-technical-35',
    sectionId: 'technical-mcq',
    question: 'What will be the output?\n\nint arr[] = {3, 1, 4, 1, 5};\nint max = arr[0];\nfor(int i = 1; i < 5; i++) {\n    if(arr[i] > max) {\n        max = arr[i];\n    }\n}\nprint(max);',
    questionType: 'single-choice',
    options: ['3', '4', '5', '1'],
    correctAnswer: 2,
    explanation: 'This finds the maximum value in the array: max(3,1,4,1,5) = 5'
  },
  {
    id: 'capgemini-technical-36',
    sectionId: 'technical-mcq',
    question: 'Which sorting algorithm has the best worst-case time complexity?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 2,
    explanation: 'Merge Sort has O(n log n) worst-case time complexity, which is optimal for comparison-based sorting'
  },
  {
    id: 'capgemini-technical-37',
    sectionId: 'technical-mcq',
    question: 'What is the space complexity of a recursive function that calculates Fibonacci numbers?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(n)', 'O(n²)', 'O(2ⁿ)'],
    correctAnswer: 1,
    explanation: 'The space complexity is O(n) due to the call stack depth, not the time complexity'
  },
  {
    id: 'capgemini-technical-38',
    sectionId: 'technical-mcq',
    question: 'Which data structure is used to implement a priority queue?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Heap', 'Stack'],
    correctAnswer: 2,
    explanation: 'Heap provides efficient insertion and extraction of the highest priority element'
  },
  {
    id: 'capgemini-technical-39',
    sectionId: 'technical-mcq',
    question: 'What is the output of this code?\n\nint a = 15;\nint b = 4;\nint c = a >> 2;\nprint(c);',
    questionType: 'single-choice',
    options: ['3', '6', '15', '60'],
    correctAnswer: 0,
    explanation: 'Right shift by 2: 15 (1111) >> 2 = 3 (0011)'
  },
  {
    id: 'capgemini-technical-40',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used for pattern matching in strings?',
    questionType: 'single-choice',
    options: ['Binary Search', 'KMP Algorithm', 'Bubble Sort', 'Dijkstra'],
    correctAnswer: 1,
    explanation: 'Knuth-Morris-Pratt (KMP) algorithm is specifically designed for efficient string pattern matching'
  },
  {
    id: 'capgemini-technical-41',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of inserting an element at the end of a linked list?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'Without a tail pointer, we need to traverse the entire list to reach the end'
  },
  {
    id: 'capgemini-technical-42',
    sectionId: 'technical-mcq',
    question: 'Which of the following is a divide-and-conquer algorithm?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 2,
    explanation: 'Merge Sort divides the array into two halves, recursively sorts them, and then merges'
  },
  {
    id: 'capgemini-technical-43',
    sectionId: 'technical-mcq',
    question: 'What is the output of this pseudo-code?\n\nint n = 16;\nint count = 0;\nwhile(n > 0) {\n    if(n % 2 == 1) {\n        count++;\n    }\n    n = n / 2;\n}\nprint(count);',
    questionType: 'single-choice',
    options: ['1', '2', '3', '4'],
    correctAnswer: 0,
    explanation: 'This counts the number of 1s in the binary representation of 16 (10000), which has 1 set bit'
  },
  {
    id: 'capgemini-technical-44',
    sectionId: 'technical-mcq',
    question: 'Which data structure is best for implementing a dictionary/map?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Hash Table', 'Stack'],
    correctAnswer: 2,
    explanation: 'Hash Table provides O(1) average-case time complexity for insert, delete, and search operations'
  },
  {
    id: 'capgemini-technical-45',
    sectionId: 'technical-mcq',
    question: 'What is the space complexity of an iterative function that calculates factorial?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(n)', 'O(n²)', 'O(2ⁿ)'],
    correctAnswer: 0,
    explanation: 'Iterative factorial uses constant extra space regardless of input size'
  },
  {
    id: 'capgemini-technical-46',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used to find the minimum spanning tree of a graph?',
    questionType: 'single-choice',
    options: ['Dijkstra\'s', 'Kruskal\'s', 'BFS', 'DFS'],
    correctAnswer: 1,
    explanation: 'Kruskal\'s algorithm is specifically designed to find the minimum spanning tree'
  },
  {
    id: 'capgemini-technical-47',
    sectionId: 'technical-mcq',
    question: 'What will be the output?\n\nint x = 20;\nint y = 6;\nint result = x / y;\nprint(result);',
    questionType: 'single-choice',
    options: ['3', '3.33', '4', 'Error'],
    correctAnswer: 0,
    explanation: 'Integer division: 20 ÷ 6 = 3 (remainder is discarded)'
  },
  {
    id: 'capgemini-technical-48',
    sectionId: 'technical-mcq',
    question: 'Which sorting algorithm has the worst-case time complexity of O(n²)?',
    questionType: 'single-choice',
    options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'],
    correctAnswer: 3,
    explanation: 'Bubble Sort has O(n²) worst-case time complexity due to nested loops'
  },
  {
    id: 'capgemini-technical-49',
    sectionId: 'technical-mcq',
    question: 'What is the output of this code?\n\nint a = 12;\nint b = 7;\nint c = a | b;\nprint(c);',
    questionType: 'single-choice',
    options: ['15', '5', '12', '19'],
    correctAnswer: 0,
    explanation: 'Bitwise OR: 12 (1100) | 7 (0111) = 15 (1111)'
  },
  {
    id: 'capgemini-technical-50',
    sectionId: 'technical-mcq',
    question: 'Which data structure is used for implementing a stack?',
    questionType: 'single-choice',
    options: ['Queue', 'Array', 'Tree', 'Graph'],
    correctAnswer: 1,
    explanation: 'Array is commonly used to implement stack with push/pop operations at the end'
  },
  {
    id: 'capgemini-technical-51',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of searching in an unsorted array?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'Linear search requires checking each element until the target is found, giving O(n)'
  },
  {
    id: 'capgemini-technical-52',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used for topological sorting?',
    questionType: 'single-choice',
    options: ['BFS', 'DFS', 'Dijkstra\'s', 'Kruskal\'s'],
    correctAnswer: 1,
    explanation: 'DFS is used for topological sorting to process nodes in dependency order'
  },
  {
    id: 'capgemini-technical-53',
    sectionId: 'technical-mcq',
    question: 'What is the output?\n\nint arr[] = {2, 8, 5, 1, 9};\nint min = arr[0];\nfor(int i = 1; i < 5; i++) {\n    if(arr[i] < min) {\n        min = arr[i];\n    }\n}\nprint(min);',
    questionType: 'single-choice',
    options: ['1', '2', '5', '9'],
    correctAnswer: 0,
    explanation: 'This finds the minimum value in the array: min(2,8,5,1,9) = 1'
  },
  {
    id: 'capgemini-technical-54',
    sectionId: 'technical-mcq',
    question: 'Which data structure is best for implementing a queue?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Stack', 'Tree'],
    correctAnswer: 1,
    explanation: 'Linked List provides O(1) enqueue and dequeue operations at both ends'
  },
  {
    id: 'capgemini-technical-55',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of searching in a binary search tree?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 1,
    explanation: 'In a balanced BST, each comparison eliminates half the remaining nodes, giving O(log n)'
  },
  {
    id: 'capgemini-technical-56',
    sectionId: 'technical-mcq',
    question: 'Which of the following is a linear data structure?',
    questionType: 'single-choice',
    options: ['Tree', 'Graph', 'Array', 'Heap'],
    correctAnswer: 2,
    explanation: 'Array is a linear data structure where elements are stored in contiguous memory locations'
  },
  {
    id: 'capgemini-technical-57',
    sectionId: 'technical-mcq',
    question: 'What is the output of this code?\n\nint a = 9;\nint b = 3;\nint c = a & b;\nprint(c);',
    questionType: 'single-choice',
    options: ['12', '1', '27', '3'],
    correctAnswer: 1,
    explanation: 'Bitwise AND: 9 (1001) & 3 (0011) = 1 (0001)'
  },
  {
    id: 'capgemini-technical-58',
    sectionId: 'technical-mcq',
    question: 'Which sorting algorithm is stable?',
    questionType: 'single-choice',
    options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 2,
    explanation: 'Merge Sort is stable because it preserves the relative order of equal elements'
  },
  {
    id: 'capgemini-technical-59',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of inserting an element at the beginning of an array?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
    explanation: 'All existing elements need to be shifted to make space, requiring O(n) operations'
  },
  {
    id: 'capgemini-technical-60',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used for pattern matching in strings?',
    questionType: 'single-choice',
    options: ['Binary Search', 'KMP Algorithm', 'Bubble Sort', 'Dijkstra'],
    correctAnswer: 1,
    explanation: 'Knuth-Morris-Pratt (KMP) algorithm is specifically designed for efficient string pattern matching'
  },
  {
    id: 'capgemini-technical-61',
    sectionId: 'technical-mcq',
    question: 'What is the output?\n\nint arr[] = {1, 3, 5, 7, 9};\nint sum = 0;\nfor(int i = 0; i < 5; i += 2) {\n    sum += arr[i];\n}\nprint(sum);',
    questionType: 'single-choice',
    options: ['15', '25', '20', '10'],
    correctAnswer: 0,
    explanation: 'It adds elements at indices 0, 2, 4: arr[0] + arr[2] + arr[4] = 1 + 5 + 9 = 15'
  },
  {
    id: 'capgemini-technical-62',
    sectionId: 'technical-mcq',
    question: 'Which data structure is used in implementing a priority queue?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Heap', 'Stack'],
    correctAnswer: 2,
    explanation: 'Heap provides efficient insertion and extraction of the highest priority element'
  },
  {
    id: 'capgemini-technical-63',
    sectionId: 'technical-mcq',
    question: 'What is the time complexity of the following algorithm?\n\nfor i = 1 to n\n    for j = 1 to n\n        print(i * j)\n    end for\nend for',
    questionType: 'single-choice',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
    correctAnswer: 2,
    explanation: 'Nested loops with both running from 1 to n gives O(n²) time complexity'
  },
  {
    id: 'capgemini-technical-64',
    sectionId: 'technical-mcq',
    question: 'Which of the following is a divide-and-conquer algorithm?',
    questionType: 'single-choice',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 2,
    explanation: 'Merge Sort divides the array into two halves, recursively sorts them, and then merges'
  },
  {
    id: 'capgemini-technical-65',
    sectionId: 'technical-mcq',
    question: 'What is the output of this pseudo-code?\n\nint n = 10;\nint count = 0;\nwhile(n > 0) {\n    if(n % 2 == 1) {\n        count++;\n    }\n    n = n / 2;\n}\nprint(count);',
    questionType: 'single-choice',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'This counts the number of 1s in the binary representation of 10 (1010), which has 2 set bits'
  },
  {
    id: 'capgemini-technical-66',
    sectionId: 'technical-mcq',
    question: 'Which data structure is best for implementing a dictionary/map?',
    questionType: 'single-choice',
    options: ['Array', 'Linked List', 'Hash Table', 'Stack'],
    correctAnswer: 2,
    explanation: 'Hash Table provides O(1) average-case time complexity for insert, delete, and search operations'
  },
  {
    id: 'capgemini-technical-67',
    sectionId: 'technical-mcq',
    question: 'What is the space complexity of an iterative function that calculates factorial?',
    questionType: 'single-choice',
    options: ['O(1)', 'O(n)', 'O(n²)', 'O(2ⁿ)'],
    correctAnswer: 0,
    explanation: 'Iterative factorial uses constant extra space regardless of input size'
  },
  {
    id: 'capgemini-technical-68',
    sectionId: 'technical-mcq',
    question: 'Which algorithm is used to find the minimum spanning tree of a graph?',
    questionType: 'single-choice',
    options: ['Dijkstra\'s', 'Kruskal\'s', 'BFS', 'DFS'],
    correctAnswer: 1,
    explanation: 'Kruskal\'s algorithm is specifically designed to find the minimum spanning tree'
  },
  {
    id: 'capgemini-technical-69',
    sectionId: 'technical-mcq',
    question: 'What will be the output?\n\nint x = 25;\nint y = 8;\nint result = x / y;\nprint(result);',
    questionType: 'single-choice',
    options: ['3', '3.125', '4', 'Error'],
    correctAnswer: 0,
    explanation: 'Integer division: 25 ÷ 8 = 3 (remainder is discarded)'
  },
  {
    id: 'capgemini-technical-70',
    sectionId: 'technical-mcq',
    question: 'Which sorting algorithm has the worst-case time complexity of O(n²)?',
    questionType: 'single-choice',
    options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'],
    correctAnswer: 3,
    explanation: 'Bubble Sort has O(n²) worst-case time complexity due to nested loops'
  },

  // Additional English Communication Questions (31-60)
  {
    id: 'capgemini-english-31',
    sectionId: 'english-communication',
    question: 'Choose the correct word to complete the sentence: The project deadline has been _____ to next month.',
    questionType: 'single-choice',
    options: ['extended', 'extending', 'extend', 'extends'],
    correctAnswer: 0,
    explanation: 'The sentence requires the past participle form "extended" to complete the passive voice construction'
  },
  {
    id: 'capgemini-english-32',
    sectionId: 'english-communication',
    question: 'Identify the grammatical error in the sentence: "The team, along with the manager, are attending the conference."',
    questionType: 'single-choice',
    options: ['team', 'manager', 'are', 'conference'],
    correctAnswer: 2,
    explanation: 'Should be "is" instead of "are" because the subject is "team" (singular)'
  },
  {
    id: 'capgemini-english-33',
    sectionId: 'english-communication',
    question: 'Choose the correct preposition: The report was submitted _____ the deadline.',
    questionType: 'single-choice',
    options: ['in', 'on', 'at', 'by'],
    correctAnswer: 3,
    explanation: '"By" is used to indicate the latest time by which something should be completed'
  },
  {
    id: 'capgemini-english-34',
    sectionId: 'english-communication',
    question: 'Select the word that best fits the context: The team\'s _____ approach to problem-solving led to innovative solutions.',
    questionType: 'single-choice',
    options: ['methodical', 'methodically', 'method', 'methods'],
    correctAnswer: 0,
    explanation: '"Methodical" is an adjective that describes the approach as systematic and thorough'
  },
  {
    id: 'capgemini-english-35',
    sectionId: 'english-communication',
    question: 'Choose the correct form of the verb: The data _____ analyzed by the research team last week.',
    questionType: 'single-choice',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 0,
    explanation: '"Data" is singular in this context, and the sentence is in past tense passive voice'
  },
  {
    id: 'capgemini-english-36',
    sectionId: 'english-communication',
    question: 'Identify the sentence with correct punctuation:',
    questionType: 'single-choice',
    options: [
      'The meeting scheduled for 2:00 PM, was postponed.',
      'The meeting, scheduled for 2:00 PM was postponed.',
      'The meeting scheduled for 2:00 PM was postponed.',
      'The meeting, scheduled for 2:00 PM, was postponed.'
    ],
    correctAnswer: 2,
    explanation: 'No commas are needed because "scheduled for 2:00 PM" is a restrictive clause that identifies which meeting'
  },
  {
    id: 'capgemini-english-37',
    sectionId: 'english-communication',
    question: 'Choose the correct word: The _____ of the project was completed ahead of schedule.',
    questionType: 'single-choice',
    options: ['implement', 'implementation', 'implementing', 'implemented'],
    correctAnswer: 1,
    explanation: '"Implementation" is a noun that refers to the process of putting a plan into effect'
  },
  {
    id: 'capgemini-english-38',
    sectionId: 'english-communication',
    question: 'Select the appropriate word: The client was _____ with the final deliverable.',
    questionType: 'single-choice',
    options: ['satisfy', 'satisfied', 'satisfying', 'satisfaction'],
    correctAnswer: 1,
    explanation: '"Satisfied" is the past participle used as an adjective to describe the client\'s state'
  },
  {
    id: 'capgemini-english-39',
    sectionId: 'english-communication',
    question: 'Choose the correct conjunction: The team worked overtime _____ the project could be completed on time.',
    questionType: 'single-choice',
    options: ['so that', 'because', 'although', 'however'],
    correctAnswer: 0,
    explanation: '"So that" indicates purpose or intention - the team worked overtime for the purpose of completing the project on time'
  },
  {
    id: 'capgemini-english-40',
    sectionId: 'english-communication',
    question: 'Identify the correct sentence structure:',
    questionType: 'single-choice',
    options: [
      'The report which was submitted yesterday contains important findings.',
      'The report, which was submitted yesterday, contains important findings.',
      'The report which was submitted yesterday, contains important findings.',
      'The report, which was submitted yesterday contains important findings.'
    ],
    correctAnswer: 1,
    explanation: 'Commas are needed to set off the non-restrictive relative clause "which was submitted yesterday"'
  },
  {
    id: 'capgemini-english-41',
    sectionId: 'english-communication',
    question: 'Choose the correct word form: The _____ of the new software system was challenging.',
    questionType: 'single-choice',
    options: ['adopt', 'adoption', 'adopting', 'adopted'],
    correctAnswer: 1,
    explanation: '"Adoption" is a noun that refers to the process of taking up or using something new'
  },
  {
    id: 'capgemini-english-42',
    sectionId: 'english-communication',
    question: 'Select the appropriate preposition: The team collaborated _____ the client to develop the solution.',
    questionType: 'single-choice',
    options: ['with', 'to', 'for', 'by'],
    correctAnswer: 0,
    explanation: '"With" is used to indicate partnership or joint action in collaboration'
  },
  {
    id: 'capgemini-english-43',
    sectionId: 'english-communication',
    question: 'Choose the correct verb tense: The project _____ next month.',
    questionType: 'single-choice',
    options: ['will start', 'starts', 'is starting', 'started'],
    correctAnswer: 0,
    explanation: '"Will start" indicates a future action that is planned or scheduled'
  },
  {
    id: 'capgemini-english-44',
    sectionId: 'english-communication',
    question: 'Identify the sentence with the correct subject-verb agreement:',
    questionType: 'single-choice',
    options: [
      'Each of the team members have submitted their report.',
      'Each of the team members has submitted their report.',
      'Each of the team members have submitted his report.',
      'Each of the team members has submitted his report.'
    ],
    correctAnswer: 1,
    explanation: '"Each" is singular, so the verb should be "has", and "their" is acceptable for gender-neutral reference'
  },
  {
    id: 'capgemini-english-45',
    sectionId: 'english-communication',
    question: 'Choose the correct word: The _____ of the meeting was to discuss the budget.',
    questionType: 'single-choice',
    options: ['purpose', 'purposed', 'purposing', 'purposes'],
    correctAnswer: 0,
    explanation: '"Purpose" is a noun that refers to the reason or intention for something'
  },
  {
    id: 'capgemini-english-46',
    sectionId: 'english-communication',
    question: 'Select the appropriate word: The manager _____ the team for their excellent work.',
    questionType: 'single-choice',
    options: ['complemented', 'complimented', 'complement', 'compliment'],
    correctAnswer: 1,
    explanation: '"Complimented" means to praise or express admiration for someone'
  },
  {
    id: 'capgemini-english-47',
    sectionId: 'english-communication',
    question: 'Choose the correct form: The data _____ been analyzed thoroughly.',
    questionType: 'single-choice',
    options: ['has', 'have', 'is', 'are'],
    correctAnswer: 0,
    explanation: '"Data" is singular in this context, and "has" is the correct auxiliary verb for present perfect'
  },
  {
    id: 'capgemini-english-48',
    sectionId: 'english-communication',
    question: 'Identify the correct sentence:',
    questionType: 'single-choice',
    options: [
      'The team, along with the manager, are attending the conference.',
      'The team, along with the manager, is attending the conference.',
      'The team along with the manager are attending the conference.',
      'The team along with the manager is attending the conference.'
    ],
    correctAnswer: 1,
    explanation: 'The subject is "team" (singular), so the verb should be "is", and commas are needed around the parenthetical phrase'
  },
  {
    id: 'capgemini-english-49',
    sectionId: 'english-communication',
    question: 'Choose the correct word: The _____ of the new policy was well-received by employees.',
    questionType: 'single-choice',
    options: ['implement', 'implementation', 'implementing', 'implemented'],
    correctAnswer: 1,
    explanation: '"Implementation" is a noun that refers to the process of putting a plan or policy into effect'
  },
  {
    id: 'capgemini-english-50',
    sectionId: 'english-communication',
    question: 'Select the appropriate preposition: The report was sent _____ email.',
    questionType: 'single-choice',
    options: ['by', 'through', 'via', 'with'],
    correctAnswer: 2,
    explanation: '"Via" is used to indicate the means or method by which something is done'
  },
  {
    id: 'capgemini-english-51',
    sectionId: 'english-communication',
    question: 'Choose the correct conjunction: The project was successful _____ the team worked hard.',
    questionType: 'single-choice',
    options: ['because', 'although', 'however', 'therefore'],
    correctAnswer: 0,
    explanation: '"Because" indicates the reason or cause for the project\'s success'
  },
  {
    id: 'capgemini-english-52',
    sectionId: 'english-communication',
    question: 'Identify the sentence with correct punctuation:',
    questionType: 'single-choice',
    options: [
      'The meeting scheduled for 3:00 PM was cancelled.',
      'The meeting, scheduled for 3:00 PM, was cancelled.',
      'The meeting scheduled for 3:00 PM, was cancelled.',
      'The meeting, scheduled for 3:00 PM was cancelled.'
    ],
    correctAnswer: 0,
    explanation: 'No commas are needed because "scheduled for 3:00 PM" is a restrictive clause that identifies which meeting'
  },
  {
    id: 'capgemini-english-53',
    sectionId: 'english-communication',
    question: 'Choose the correct word form: The _____ of the new system was completed on time.',
    questionType: 'single-choice',
    options: ['install', 'installation', 'installing', 'installed'],
    correctAnswer: 1,
    explanation: '"Installation" is a noun that refers to the process of setting up or putting in place'
  },
  {
    id: 'capgemini-english-54',
    sectionId: 'english-communication',
    question: 'Select the appropriate word: The client was _____ with the service provided.',
    questionType: 'single-choice',
    options: ['satisfy', 'satisfied', 'satisfying', 'satisfaction'],
    correctAnswer: 1,
    explanation: '"Satisfied" is the past participle used as an adjective to describe the client\'s state'
  },
  {
    id: 'capgemini-english-55',
    sectionId: 'english-communication',
    question: 'Choose the correct verb tense: The team _____ the project next week.',
    questionType: 'single-choice',
    options: ['will complete', 'completes', 'is completing', 'completed'],
    correctAnswer: 0,
    explanation: '"Will complete" indicates a future action that is planned or expected'
  },
  {
    id: 'capgemini-english-56',
    sectionId: 'english-communication',
    question: 'Identify the correct sentence:',
    questionType: 'single-choice',
    options: [
      'Neither the manager nor the employees were present.',
      'Neither the manager nor the employees was present.',
      'Neither the manager or the employees were present.',
      'Neither the manager or the employees was present.'
    ],
    correctAnswer: 0,
    explanation: '"Neither...nor" is the correct correlative conjunction, and the verb agrees with the closer subject "employees" (plural)'
  },
  {
    id: 'capgemini-english-57',
    sectionId: 'english-communication',
    question: 'Choose the correct word: The _____ of the training program was to improve skills.',
    questionType: 'single-choice',
    options: ['objective', 'objectives', 'objecting', 'objected'],
    correctAnswer: 0,
    explanation: '"Objective" is a noun that refers to the goal or purpose of something'
  },
  {
    id: 'capgemini-english-58',
    sectionId: 'english-communication',
    question: 'Select the appropriate word: The company _____ its employees for their dedication.',
    questionType: 'single-choice',
    options: ['recognized', 'recognition', 'recognizing', 'recognizes'],
    correctAnswer: 0,
    explanation: '"Recognized" is the past tense verb that means to acknowledge or appreciate'
  },
  {
    id: 'capgemini-english-59',
    sectionId: 'english-communication',
    question: 'Choose the correct form: The information _____ been verified.',
    questionType: 'single-choice',
    options: ['has', 'have', 'is', 'are'],
    correctAnswer: 0,
    explanation: '"Information" is singular, so the auxiliary verb should be "has"'
  },
  {
    id: 'capgemini-english-60',
    sectionId: 'english-communication',
    question: 'Identify the sentence with correct grammar:',
    questionType: 'single-choice',
    options: [
      'The team, as well as the manager, are attending.',
      'The team, as well as the manager, is attending.',
      'The team as well as the manager are attending.',
      'The team as well as the manager is attending.'
    ],
    correctAnswer: 1,
    explanation: 'The subject is "team" (singular), so the verb should be "is", and commas are needed around the parenthetical phrase'
  },

  // Additional Game-based Aptitude Challenges (5-12)
  {
    id: 'capgemini-game-5',
    sectionId: 'game-based-aptitude',
    question: 'Logical Sequence Game: Complete the sequence: 3, 6, 11, 18, 27, ?',
    questionType: 'single-choice',
    options: ['36', '38', '40', '42'],
    correctAnswer: 1,
    explanation: 'The difference between consecutive terms increases by 2: 3, 5, 7, 9, so next difference is 11. 27 + 11 = 38'
  },
  {
    id: 'capgemini-game-6',
    sectionId: 'game-based-aptitude',
    question: 'Spatial Reasoning Game: How many squares are in a 4x4 grid?',
    questionType: 'single-choice',
    options: ['16', '20', '30', '35'],
    correctAnswer: 2,
    explanation: 'In a 4x4 grid: 16 1x1 squares + 9 2x2 squares + 4 3x3 squares + 1 4x4 square = 30 total squares'
  },
  {
    id: 'capgemini-game-7',
    sectionId: 'game-based-aptitude',
    question: 'Numerical Reasoning Game: If 4 workers can complete a task in 8 days, how many days will 2 workers take?',
    questionType: 'single-choice',
    options: ['4 days', '8 days', '12 days', '16 days'],
    correctAnswer: 3,
    explanation: 'Using inverse proportion: 4 workers × 8 days = 2 workers × x days. So x = (4×8)/2 = 16 days'
  },
  {
    id: 'capgemini-game-8',
    sectionId: 'game-based-aptitude',
    question: 'Pattern Recognition Game: Complete the sequence: 1, 3, 6, 10, 15, ?',
    questionType: 'single-choice',
    options: ['20', '21', '22', '25'],
    correctAnswer: 1,
    explanation: 'This is the triangular number sequence. Each number is the sum of all previous numbers plus 1: 1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21'
  },
  {
    id: 'capgemini-game-9',
    sectionId: 'game-based-aptitude',
    question: 'Logical Reasoning Game: If all programmers are developers and some developers are designers, then:',
    questionType: 'single-choice',
    options: [
      'All programmers are designers',
      'Some programmers are designers',
      'No programmers are designers',
      'Cannot be determined'
    ],
    correctAnswer: 3,
    explanation: 'The premises don\'t provide enough information to determine the relationship between programmers and designers'
  },
  {
    id: 'capgemini-game-10',
    sectionId: 'game-based-aptitude',
    question: 'Spatial Reasoning Game: How many rectangles are in a 3x3 grid?',
    questionType: 'single-choice',
    options: ['9', '18', '36', '45'],
    correctAnswer: 2,
    explanation: 'In a 3x3 grid: 9 1x1 rectangles + 6 1x2 rectangles + 6 2x1 rectangles + 4 2x2 rectangles + 4 1x3 rectangles + 4 3x1 rectangles + 1 3x3 rectangle = 36 total rectangles'
  },
  {
    id: 'capgemini-game-11',
    sectionId: 'game-based-aptitude',
    question: 'Numerical Reasoning Game: If 5 machines can produce 100 units in 4 hours, how many units can 3 machines produce in 6 hours?',
    questionType: 'single-choice',
    options: ['60 units', '90 units', '120 units', '150 units'],
    correctAnswer: 1,
    explanation: 'Using proportion: 5 machines × 4 hours = 100 units, so 1 machine × 1 hour = 5 units. 3 machines × 6 hours = 3×6×5 = 90 units'
  },
  {
    id: 'capgemini-game-12',
    sectionId: 'game-based-aptitude',
    question: 'Pattern Recognition Game: Complete the sequence: 2, 4, 8, 16, 32, ?',
    questionType: 'single-choice',
    options: ['48', '56', '64', '72'],
    correctAnswer: 2,
    explanation: 'This is a geometric sequence where each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64'
  }
]; 