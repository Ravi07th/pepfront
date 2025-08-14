export const pseudoCodeQuestions = [
    { 
      id: 1, 
      question: `What will be the output of the following pseudo code?
  -----------------
  SET x = 5
  SET y = 3
  PRINT x + y
  -----------------`, 
      options: ["8", "53", "2", "Error"], 
      correctAnswer: 0, 
      explanation: "5 + 3 = 8, so the output is 8.", 
      difficulty: 'easy' 
    },
    { 
      id: 2, 
      question: `What does this pseudo code print?
  -----------------
  SET a = 10
  SET b = a * 2
  PRINT b - a
  -----------------`, 
      options: ["10", "20", "0", "5"], 
      correctAnswer: 0, 
      explanation: "b = 20, so b - a = 10.", 
      difficulty: 'easy' 
    },
    { 
      id: 3, 
      question: `What will be the final value of sum?
  -----------------
  SET sum = 0
  FOR i = 1 TO 4
      sum = sum + i
  END FOR
  -----------------`, 
      options: ["4", "6", "10", "0"], 
      correctAnswer: 2, 
      explanation: "Sum of 1+2+3+4 = 10.", 
      difficulty: 'easy' 
    },
    { 
      id: 4, 
      question: `What does this pseudo code do?
  -----------------
  SET result = 1
  FOR i = 1 TO 3
      result = result * 2
  END FOR
  PRINT result
  -----------------`, 
      options: ["6", "8", "4", "2"], 
      correctAnswer: 1, 
      explanation: "Multiplies 2 three times: 1*2*2*2 = 8.", 
      difficulty: 'easy' 
    },
    { 
      id: 5, 
      question: `What is printed?
  -----------------
  SET x = 5
  IF x > 3 THEN
      PRINT "High"
  ELSE
      PRINT "Low"
  END IF
  -----------------`, 
      options: ["High", "Low", "5", "Error"], 
      correctAnswer: 0, 
      explanation: "x > 3 is true, so 'High' is printed.", 
      difficulty: 'easy' 
    },
    { 
      id: 6, 
      question: `What will be the output?
  -----------------
  SET count = 0
  WHILE count < 3
      PRINT count
      count = count + 1
  END WHILE
  -----------------`, 
      options: ["0 1 2", "0 1 2 3", "1 2 3", "0 1"], 
      correctAnswer: 0, 
      explanation: "Loop prints 0, 1, 2 before count reaches 3.", 
      difficulty: 'easy' 
    },
    { 
      id: 7, 
      question: `What will be the output of this pseudo code?
  -----------------
  SET a = 2
  SET b = 3
  SWAP a, b
  PRINT a, b
  -----------------`, 
      options: ["2 3", "3 2", "5", "Error"], 
      correctAnswer: 1, 
      explanation: "After swap, a=3 and b=2.", 
      difficulty: 'easy' 
    },
    { 
      id: 8, 
      question: `What is the output?
  -----------------
  SET n = 5
  SET fact = 1
  FOR i = 1 TO n
      fact = fact * i
  END FOR
  PRINT fact
  -----------------`, 
      options: ["5", "15", "120", "60"], 
      correctAnswer: 2, 
      explanation: "Calculates factorial of 5: 120.", 
      difficulty: 'medium' 
    },
    { 
      id: 9, 
      question: `What will be printed?
  -----------------
  SET sum = 0
  FOR i = 2 TO 6 STEP 2
      sum = sum + i
  END FOR
  PRINT sum
  -----------------`, 
      options: ["6", "8", "12", "14"], 
      correctAnswer: 2, 
      explanation: "Sum = 2 + 4 + 6 = 12.", 
      difficulty: 'medium' 
    },
    { 
      id: 10, 
      question: `What will be the final output?
  -----------------
  SET x = 10
  IF x MOD 2 = 0 THEN
      PRINT "Even"
  ELSE
      PRINT "Odd"
  END IF
  -----------------`, 
      options: ["Even", "Odd", "10", "Error"], 
      correctAnswer: 0, 
      explanation: "10 is divisible by 2, so it's 'Even'.", 
      difficulty: 'easy' 
    },
    { 
        id: 11, 
        question: `What will be the output?
    -----------------
    SET x = 10
    SET y = 20
    PRINT x + y
    -----------------`, 
        options: ["1020", "30", "10 20", "Error"], 
        correctAnswer: 1, 
        explanation: "10 + 20 = 30.", 
        difficulty: 'easy' 
      },
      { 
        id: 12, 
        question: `What will this code print?
    -----------------
    SET a = 5
    SET b = a * 4
    PRINT b / 2
    -----------------`, 
        options: ["5", "10", "20", "15"], 
        correctAnswer: 1, 
        explanation: "b = 20, so b/2 = 10.", 
        difficulty: 'easy' 
      },
      { 
        id: 13, 
        question: `What is the final value of sum?
    -----------------
    SET sum = 0
    FOR i = 1 TO 3
        sum = sum + i
    END FOR
    -----------------`, 
        options: ["3", "6", "0", "1"], 
        correctAnswer: 1, 
        explanation: "1 + 2 + 3 = 6.", 
        difficulty: 'easy' 
      },
      { 
        id: 14, 
        question: `What will this print?
    -----------------
    SET x = 4
    IF x % 2 == 0 THEN
        PRINT "Even"
    ELSE
        PRINT "Odd"
    END IF
    -----------------`, 
        options: ["Even", "Odd", "4", "Error"], 
        correctAnswer: 0, 
        explanation: "4 is divisible by 2, so 'Even' is printed.", 
        difficulty: 'easy' 
      },
      { 
        id: 15, 
        question: `What will the loop print?
    -----------------
    FOR i = 1 TO 3
        PRINT i
    END FOR
    -----------------`, 
        options: ["1 2 3", "0 1 2", "3 2 1", "Error"], 
        correctAnswer: 0, 
        explanation: "Loop starts at 1 and ends at 3.", 
        difficulty: 'easy' 
      },
      { 
        id: 16, 
        question: `What will be printed?
    -----------------
    SET count = 0
    WHILE count < 3
        PRINT count
        count = count + 1
    END WHILE
    -----------------`, 
        options: ["0 1 2", "0 1 2 3", "1 2 3", "0 1"], 
        correctAnswer: 0, 
        explanation: "Loop prints 0, 1, 2 before count reaches 3.", 
        difficulty: 'easy' 
      },
      { 
        id: 17, 
        question: `What is the output?
    -----------------
    SET a = 2
    SET b = 5
    SWAP a, b
    PRINT a, b
    -----------------`, 
        options: ["2 5", "5 2", "7", "Error"], 
        correctAnswer: 1, 
        explanation: "After swap, a=5 and b=2.", 
        difficulty: 'easy' 
      },
      { 
        id: 18, 
        question: `What will be printed?
    -----------------
    SET n = 4
    SET fact = 1
    FOR i = 1 TO n
        fact = fact * i
    END FOR
    PRINT fact
    -----------------`, 
        options: ["4", "16", "24", "120"], 
        correctAnswer: 2, 
        explanation: "Factorial of 4 = 24.", 
        difficulty: 'medium' 
      },
      { 
        id: 19, 
        question: `What will be printed?
    -----------------
    SET sum = 0
    FOR i = 2 TO 6 STEP 2
        sum = sum + i
    END FOR
    PRINT sum
    -----------------`, 
        options: ["6", "8", "12", "14"], 
        correctAnswer: 2, 
        explanation: "2 + 4 + 6 = 12.", 
        difficulty: 'medium' 
      },
      { 
        id: 20, 
        question: `What is the output?
    -----------------
    SET x = 7
    IF x % 2 == 0 THEN
        PRINT "Even"
    ELSE
        PRINT "Odd"
    END IF
    -----------------`, 
        options: ["Even", "Odd", "7", "Error"], 
        correctAnswer: 1, 
        explanation: "7 is not divisible by 2, so 'Odd' is printed.", 
        difficulty: 'easy' 
      },
      { 
        id: 21, 
        question: `What will be printed?
    -----------------
    SET arr = [1, 2, 3]
    FOR i = 0 TO 2
        PRINT arr[i]
    END FOR
    -----------------`, 
        options: ["1 2 3", "0 1 2", "2 3 4", "Error"], 
        correctAnswer: 0, 
        explanation: "Indexes 0, 1, 2 print values 1, 2, 3.", 
        difficulty: 'easy' 
      },
      { 
        id: 22, 
        question: `What is the output?
    -----------------
    SET total = 0
    FOR i = 1 TO 5
        IF i % 2 == 0 THEN
            total = total + i
        END IF
    END FOR
    PRINT total
    -----------------`, 
        options: ["6", "4", "2", "8"], 
        correctAnswer: 0, 
        explanation: "Adds only even numbers: 2 + 4 = 6.", 
        difficulty: 'medium' 
      },
      { 
        id: 23, 
        question: `What will be the result?
    -----------------
    SET sum = 0
    SET i = 1
    DO
        sum = sum + i
        i = i + 1
    WHILE i <= 3
    PRINT sum
    -----------------`, 
        options: ["3", "6", "1", "0"], 
        correctAnswer: 1, 
        explanation: "1 + 2 + 3 = 6.", 
        difficulty: 'easy' 
      },
      { 
        id: 24, 
        question: `What is printed?
    -----------------
    SET num = 3
    IF num < 5 THEN
        IF num > 0 THEN
            PRINT "Positive"
        END IF
    END IF
    -----------------`, 
        options: ["Positive", "Negative", "Error", "None"], 
        correctAnswer: 0, 
        explanation: "3 is less than 5 and greater than 0, so 'Positive' is printed.", 
        difficulty: 'medium' 
      },
      { 
        id: 25, 
        question: `What is printed?
    -----------------
    SET i = 0
    WHILE i < 5
        IF i == 3 THEN
            BREAK
        END IF
        PRINT i
        i = i + 1
    END WHILE
    -----------------`, 
        options: ["0 1 2", "0 1 2 3 4", "3 4 5", "0"], 
        correctAnswer: 0, 
        explanation: "Loop stops when i=3.", 
        difficulty: 'medium' 
      },
      { 
        id: 26, 
        question: "What is the output of the pseudo code: int a=2,b=3; print(a*b+a)?", 
        options: ["8", "10", "12", "9"], 
        correctAnswer: 1, 
        explanation: "a*b+a = 2*3+2 = 6+2 = 8.", 
        difficulty: 'easy' 
      },
      { 
        id: 27, 
        question: "If x=5, y=2, z= x++ + ++y, what will be z?", 
        options: ["8", "9", "7", "6"], 
        correctAnswer: 1, 
        explanation: "x++ returns 5, ++y returns 3, so z=5+3=8.", 
        difficulty: 'easy' 
      },
      { 
        id: 28, 
        question: "Pseudo code: int i=0; while(i<3){i++;} print(i); Output?", 
        options: ["2", "3", "4", "Infinite Loop"], 
        correctAnswer: 1, 
        explanation: "i increments to 3 and loop stops, printing 3.", 
        difficulty: 'easy' 
      },
      { 
        id: 29, 
        question: "In C pseudo code, what is the output of: printf(\"%d\", 5/2);", 
        options: ["2", "2.5", "3", "Error"], 
        correctAnswer: 0, 
        explanation: "Integer division in C truncates the decimal, so result is 2.", 
        difficulty: 'easy' 
      },
      { 
        id: 30, 
        question: "Pseudo code: int n=5; if(n%2==0) print(\"Even\"); else print(\"Odd\"); Output?", 
        options: ["Even", "Odd", "Error", "5"], 
        correctAnswer: 1, 
        explanation: "Since 5 is not divisible by 2, it prints Odd.", 
        difficulty: 'easy' 
      },
      { 
        id: 31, 
        question: "If int a=10; a-=3; print(a); what is the output?", 
        options: ["7", "13", "3", "Error"], 
        correctAnswer: 0, 
        explanation: "a = 10 - 3, so result is 7.", 
        difficulty: 'easy' 
      },
      { 
        id: 32, 
        question: "Pseudo code: int sum=0; for(i=1;i<=3;i++){sum+=i;} print(sum); Output?", 
        options: ["3", "6", "5", "7"], 
        correctAnswer: 1, 
        explanation: "Sum = 1+2+3 = 6.", 
        difficulty: 'easy' 
      },
      { 
        id: 33, 
        question: "Pseudo code: int a=3; int b= a<<1; print(b); Output?", 
        options: ["3", "6", "1", "2"], 
        correctAnswer: 1, 
        explanation: "Left shift by 1 multiplies by 2, so 3<<1 = 6.", 
        difficulty: 'medium' 
      },
      { 
        id: 34, 
        question: "If int a=5; a*=a; print(a); Output?", 
        options: ["5", "10", "25", "30"], 
        correctAnswer: 2, 
        explanation: "a = 5 * 5 = 25.", 
        difficulty: 'easy' 
      },
      { 
                    id: 35, 
        question: "Pseudo code: int x=1; for(i=0;i<3;i++){x+=2;} print(x); Output?", 
        options: ["7", "6", "5", "4"], 
        correctAnswer: 2, 
        explanation: "Loop adds 2 three times: 1→3→5→7, final value is 7.", 
        difficulty: 'easy' 
      },
      { 
        id: 36, 
        question: "If int a=5,b=2; print(a%b); Output?", 
        options: ["2", "1", "0", "Error"], 
        correctAnswer: 1, 
        explanation: "5 % 2 = 1.", 
        difficulty: 'easy' 
      },
      { 
        id: 37, 
        question: "Pseudo code: int a=2,b=4; if(a>b) print(a); else print(b); Output?", 
        options: ["2", "4", "6", "Error"], 
        correctAnswer: 1, 
        explanation: "Since 2<4, it prints 4.", 
        difficulty: 'easy' 
      },
      { 
        id: 38, 
        question: "If int i=0; do{i++;}while(i<3); print(i); Output?", 
        options: ["2", "3", "4", "Error"], 
        correctAnswer: 1, 
        explanation: "Loop runs until i=3, so prints 3.", 
        difficulty: 'easy' 
      },
      { 
        id: 39, 
        question: "Pseudo code: int x=5; x=x/2; print(x); Output?", 
        options: ["2", "2.5", "3", "Error"], 
        correctAnswer: 0, 
        explanation: "Integer division, so 5/2 = 2.", 
        difficulty: 'easy' 
      },
      { 
        id: 40, 
        question: "Pseudo code: int n=4; switch(n){case 4: print(\"A\"); break; default: print(\"B\");}", 
        options: ["A", "B", "Error", "None"], 
        correctAnswer: 0, 
        explanation: "Case 4 matches, prints 'A'.", 
        difficulty: 'easy' 
      },
      { 
        id: 41, 
        question: "If int x=2; print(x++ * ++x); Output?", 
        options: ["6", "8", "9", "4"], 
        correctAnswer: 2, 
        explanation: "x++ returns 2, ++x makes x=4, so 2*4=8. But note: In C, modifying a variable multiple times without a sequence point is undefined behavior.", 
        difficulty: 'hard' 
      },
      { 
        id: 42, 
        question: "Pseudo code: int a=1; a=a<<3; print(a); Output?", 
        options: ["1", "3", "8", "9"], 
        correctAnswer: 2, 
        explanation: "Left shift by 3 multiplies by 8, so 1<<3 = 8.", 
        difficulty: 'medium' 
      },
      { 
        id: 43, 
        question: "If int a=4,b=5; printf(\"%d%d\",a,b); Output?", 
        options: ["45", "54", "4 5", "Error"], 
        correctAnswer: 0, 
        explanation: "Without space, the output is directly concatenated as 45.", 
        difficulty: 'easy' 
      },
      { 
        id: 44, 
        question: "Pseudo code: int arr[3]={1,2,3}; print(arr[1]); Output?", 
        options: ["1", "2", "3", "Error"], 
        correctAnswer: 1, 
        explanation: "arr[1] accesses the second element, which is 2.", 
        difficulty: 'easy' 
      },
      { 
                    id: 45, 
        question: "Pseudo code: int i=5; while(--i){ print(i); } Output?", 
        options: ["5 4 3 2 1", "4 3 2 1", "3 2 1 0", "Infinite Loop"], 
        correctAnswer: 1, 
        explanation: "Loop starts at i=4 and stops when i=0.", 
        difficulty: 'easy' 
      },
      {
        id: 46,
        question: `Given the pseudo code:
    
    FUNCTION mystery(A[1..n]):
        count ← 0
        FOR i ← 1 TO n:
            FOR j ← i+1 TO n:
                IF A[i] + A[j] = 0:
                    count ← count + 1
        RETURN count
    
    What does this function return?`,
        options: [
          "Number of pairs with equal values",
          "Number of pairs whose sum is zero",
          "Number of pairs whose product is zero",
          "Number of zero elements in array"
        ],
        correctAnswer: 1,
        explanation: "The function counts how many distinct pairs of elements sum to zero.",
        difficulty: "hard"
      },
      {
        id: 47,
        question: `Consider the pseudo code:
    
    x ← 1
    y ← 1
    FOR i ← 1 TO n:
        temp ← y
        y ← x + y
        x ← temp
    RETURN x
    
    What is returned when n = 6?`,
        options: ["8", "13", "21", "34"],
        correctAnswer: 1,
        explanation: "This is a Fibonacci-like calculation; with n = 6, x becomes the 7th Fibonacci number = 13.",
        difficulty: "hard"
      },
      {
        id: 48,
        question: `Pseudo code:
    
    FUNCTION isMagicNumber(num):
        WHILE num > 9:
            sum ← 0
            WHILE num > 0:
                sum ← sum + (num MOD 10)
                num ← num DIV 10
            num ← sum
        RETURN num = 1
    
    What does the function check?`,
        options: [
          "If the number is prime",
          "If the number is a magic number",
          "If the number is Armstrong",
          "If the number is palindrome"
        ],
        correctAnswer: 1,
        explanation: "It repeatedly sums the digits until a single digit is left; if it equals 1, it's called a magic number.",
        difficulty: "hard"
      },
      {
        id: 49,
        question: `Given:
    
    FUNCTION mystery(A[1..n]):
        FOR i ← 1 TO n:
            minIndex ← i
            FOR j ← i+1 TO n:
                IF A[j] < A[minIndex]:
                    minIndex ← j
            SWAP A[i] WITH A[minIndex]
        RETURN A
    
    Which sorting algorithm does this implement?`,
        options: [
          "Bubble Sort",
          "Selection Sort",
          "Insertion Sort",
          "Quick Sort"
        ],
        correctAnswer: 1,
        explanation: "This repeatedly selects the smallest remaining element; it's Selection Sort.",
        difficulty: "hard"
      },
      {
        id: 50,
        question: `Pseudo code:
    
    sum ← 0
    FOR i ← 1 TO n:
        FOR j ← 1 TO i:
            sum ← sum + 1
    
    What is the time complexity?`,
        options: [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        correctAnswer: 2,
        explanation: "The nested loop runs roughly n(n+1)/2 times, which is O(n²).",
        difficulty: "hard"
      },
      {
        id: 51,
        question: `Pseudo code:
    
    FUNCTION reverseWords(sentence):
        words ← SPLIT(sentence, ' ')
        REVERSE(words)
        RETURN JOIN(words, ' ')
    
    What does this function do?`,
        options: [
          "Reverses each word individually",
          "Reverses the order of words",
          "Reverses the characters of the entire sentence",
          "Sorts words alphabetically"
        ],
        correctAnswer: 1,
        explanation: "It splits the sentence into words, reverses their order, then rejoins them.",
        difficulty: "hard"
      },
      {
        id: 52,
        question: `Given pseudo code:
    
    count ← 0
    FOR i ← 1 TO n:
        IF n MOD i = 0:
            count ← count + 1
    RETURN count
    
    What does the output represent?`,
        options: [
          "Number of prime factors",
          "Number of divisors",     
          "Number of digits",
          "Number of multiples"
        ],
        correctAnswer: 1,
        explanation: "It counts all integers that divide n without remainder — the number of divisors.",
        difficulty: "hard"
      },
      {
        id: 53,
        question: `Pseudo code:
    
    FOR i ← 2 TO n:
        isPrime ← true
        FOR j ← 2 TO √i:
            IF i MOD j = 0:
                isPrime ← false
                BREAK
        IF isPrime:
            PRINT i
    
    What is printed?`,
        options: [
          "All odd numbers up to n",
          "All even numbers up to n",
          "All prime numbers up to n",
          "Only n if it is prime"
        ],
        correctAnswer: 2,
        explanation: "It checks each number from 2 to n for primality and prints the primes.",
        difficulty: "hard"
      },
      {
        id: 54,
        question: `Given:
    
    FUNCTION sumDigitsUntilStable(num):
        prev ← -1
        WHILE num ≠ prev:
            prev ← num
            num ← SUM_OF_DIGITS(num)
        RETURN num
    
    What does the function return?`,
        options: [
          "Sum of digits once",
          "Digital root of the number",
          "Count of digits",
          "Product of digits"
        ],
        correctAnswer: 1,
        explanation: "It keeps summing digits until the value stabilizes — the digital root.",
        difficulty: "hard"
      },
      {
                    id: 55,
        question: `Pseudo code:
    
    FUNCTION binarySearch(A[1..n], target):
        low ← 1
        high ← n
        WHILE low ≤ high:
            mid ← (low + high) DIV 2
            IF A[mid] = target:
                RETURN mid
            ELSE IF A[mid] < target:
                low ← mid + 1
            ELSE:
                high ← mid - 1
        RETURN -1
    
    What assumption must be true for this to work correctly?`,
        options: [
          "Array must contain only positive integers",
          "Array must be sorted",
          "Array must have unique elements",
          "Array length must be a power of two"
        ],
        correctAnswer: 1,
        explanation: "Binary search only works correctly on a sorted array.",
        difficulty: "hard"
        },
        { 
            id: 56, 
            question: "A pseudocode uses divide-and-conquer but also repeatedly recomputes subproblems. Which optimization can fix this?", 
            options: ["Increase recursion depth", "Memoization", "Remove base cases", "Use nested loops"], 
            correctAnswer: 1, 
            explanation: "Memoization avoids redundant recomputation of overlapping subproblems in divide-and-conquer algorithms.", 
            difficulty: 'hard' 
          },
          { 
            id: 57, 
            question: "A pseudocode for matrix multiplication runs in O(n³). Which algorithm can asymptotically improve this?", 
            options: ["Kruskal’s Algorithm", "Floyd-Warshall", "Strassen’s Algorithm", "Bellman-Ford"], 
            correctAnswer: 2, 
            explanation: "Strassen’s Algorithm improves matrix multiplication time complexity to ~O(n^2.81).", 
            difficulty: 'hard' 
          },{ 
            id: 58, 
            question: "In pseudocode, if you have a nested loop with both loops running n times, what is the time complexity?", 
            options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], 
            correctAnswer: 2, 
            explanation: "A nested loop with both loops running n times results in O(n × n) = O(n²) time complexity.", 
            difficulty: 'hard' 
          },
          { 
            id: 59, 
            question: "When converting a recursive pseudocode for factorial to iterative form, what is the main advantage?", 
            options: ["Less code", "Avoids stack overflow", "Better readability", "Supports floating-point values"], 
            correctAnswer: 1, 
            explanation: "Iterative solutions avoid excessive stack usage from deep recursion, preventing stack overflow.", 
            difficulty: 'hard' 
          },
          { 
            id: 60, 
            question: "If a pseudocode sorts data in O(n log n) but also requires O(n) extra space, what sorting algorithm might it be?", 
            options: ["Merge Sort", "Quick Sort", "Heap Sort", "Insertion Sort"], 
            correctAnswer: 0, 
            explanation: "Merge Sort has O(n log n) time complexity and requires O(n) extra space for merging arrays.", 
            difficulty: 'hard' 
          },
          
  ];
  