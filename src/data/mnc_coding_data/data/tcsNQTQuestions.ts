export const allTCSNQTQuestions = [
  {
    id: 'find-missing-number',
    title: 'Find Missing Number in Array',
    description: `Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

The array is not necessarily sorted.`,
    difficulty: 'Easy',
    category: ['Array', 'Mathematics'],
    input1: 'nums = [3,0,1]',
    input2: 'nums = [9,6,4,2,3,5,7,0,1]',
    explanation: `## Problem Statement

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

The array is not necessarily sorted.

## Examples

### Example 1:
**Input:** nums = [3,0,1]  
**Output:** 2  
**Explanation:** 
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number since it does not appear in nums.

### Example 2:
**Input:** nums = [9,6,4,2,3,5,7,0,1]  
**Output:** 8  
**Explanation:** 
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number since it does not appear in nums.

### Example 3:
**Input:** nums = [0]  
**Output:** 1  
**Explanation:** 
n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number since it does not appear in nums.

### Example 4:
**Input:** nums = [1,2,3,4,5,6,7,8,9]  
**Output:** 0  
**Explanation:** 
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 0 is the missing number since it does not appear in nums.

## Intuition

The key insight is that we can use the mathematical formula for the sum of first n natural numbers: sum = n*(n+1)/2. The missing number will be the difference between the expected sum and the actual sum of the array.

This works because:
- The array should contain numbers from 0 to n (inclusive)
- If one number is missing, the sum will be less than expected
- The difference between expected and actual sum gives us the missing number

## Approach

### Approach 1: Sum Formula (Optimal)
1. Calculate the expected sum of numbers from 0 to n using the formula: n*(n+1)/2
2. Calculate the actual sum of the given array
3. The missing number is the difference between expected and actual sum

### Approach 2: Sorting and Linear Search
1. Sort the array
2. Check each position i, if nums[i] != i, then i is the missing number
3. If all positions match, then n is the missing number

### Approach 3: XOR Operation
1. XOR all numbers from 0 to n with all numbers in the array
2. The result will be the missing number

## Dry Run

Let's trace through Example 1: nums = [3,0,1], n = 3

### Sum Formula Approach:
- Expected sum = 3*(3+1)/2 = 6
- Actual sum = 3 + 0 + 1 = 4
- Missing number = 6 - 4 = 2

### Sorting Approach:
- After sorting: [0,1,3]
- Check position 0: nums[0] = 0 ✓
- Check position 1: nums[1] = 1 ✓
- Check position 2: nums[2] = 3 ≠ 2, so 2 is missing

### XOR Approach:
- XOR all numbers 0 to 3: 0^1^2^3 = 0
- XOR with array elements: 0^3^0^1 = 2
- Result = 2

## Key Insights

1. **Mathematical Formula**: The sum of first n natural numbers is n*(n+1)/2
2. **Unique Property**: Each number from 0 to n appears exactly once, except the missing one
3. **Efficiency**: Sum formula gives O(n) time and O(1) space
4. **Edge Cases**: Handle cases where 0 or n is missing

## Edge Cases

1. **Missing 0**: Array contains [1,2,3,...,n]
2. **Missing n**: Array contains [0,1,2,...,n-1]
3. **Single element**: Array with one element
4. **Empty array**: Not possible as per constraints

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Sum Formula (Optimal)

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: Sorting and Linear Search

**Time Complexity:** O(n log n) - Due to sorting  
**Space Complexity:** O(1) - In-place sorting

### Solution 3: XOR Operation

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Constant extra space`,
    output1: '2',
    output2: '8',
    constraints: `## Constraints

- n == nums.length
- 1 <= n <= 104
- 0 <= nums[i] <= n
- All the numbers of nums are unique`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

int missingNumber(int* nums, int numsSize) {
    int expectedSum = (numsSize * (numsSize + 1)) / 2;
    int actualSum = 0;
    
    for (int i = 0; i < numsSize; i++) {
        actualSum += nums[i];
    }
    
    return expectedSum - actualSum;
}

int main() {
    // Test case 1
    int nums1[] = {3, 0, 1};
    int size1 = 3;
    printf("Test 1: Missing number = %d\\n", missingNumber(nums1, size1));
    
    // Test case 2
    int nums2[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    int size2 = 9;
    printf("Test 2: Missing number = %d\\n", missingNumber(nums2, size2));
    
    // Test case 3
    int nums3[] = {0};
    int size3 = 1;
    printf("Test 3: Missing number = %d\\n", missingNumber(nums3, size3));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses the mathematical formula for the sum of first n natural numbers. It calculates the expected sum and subtracts the actual sum to find the missing number. This is the most efficient approach with optimal time and space complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int missingNumber(int* nums, int numsSize) {
    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);
    
    // Check for missing number
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] != i) {
            return i;
        }
    }
    
    return numsSize;
}

int main() {
    // Test case 1
    int nums1[] = {3, 0, 1};
    int size1 = 3;
    printf("Test 1: Missing number = %d\\n", missingNumber(nums1, size1));
    
    // Test case 2
    int nums2[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    int size2 = 9;
    printf("Test 2: Missing number = %d\\n", missingNumber(nums2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution sorts the array first and then checks for the missing number by comparing each element with its index. The sorting step makes this approach less efficient than the optimal solution.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdbool.h>

int missingNumber(int* nums, int numsSize) {
    // Check each number from 0 to n
    for (int i = 0; i <= numsSize; i++) {
        bool found = false;
        
        // Search for the number in the array
        for (int j = 0; j < numsSize; j++) {
            if (nums[j] == i) {
                found = true;
                break;
            }
        }
        
        if (!found) {
            return i;
        }
    }
    
    return -1; // Should not reach here
}

int main() {
    // Test case 1
    int nums1[] = {3, 0, 1};
    int size1 = 3;
    printf("Test 1: Missing number = %d\\n", missingNumber(nums1, size1));
    
    // Test case 2
    int nums2[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    int size2 = 9;
    printf("Test 2: Missing number = %d\\n", missingNumber(nums2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses nested loops to check each number from 0 to n. For each number, it searches through the entire array to see if it exists. This is the least efficient approach with O(n²) time complexity.'
        }
      }
    }
  },
  {
    id: 'reverse-string',
    title: 'Reverse String',
    description: `Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.`,
    difficulty: 'Easy',
    category: ['String', 'Two Pointers'],
    input1: 's = ["h","e","l","l","o"]',
    input2: 's = ["H","a","n","n","a","h"]',
    explanation: `## Problem Statement

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

## Examples

### Example 1:
**Input:** s = ["h","e","l","l","o"]  
**Output:** ["o","l","l","e","h"]  
**Explanation:** 
The string "hello" is reversed to "olleh".

### Example 2:
**Input:** s = ["H","a","n","n","a","h"]  
**Output:** ["h","a","n","n","a","H"]  
**Explanation:** 
The string "Hannah" is reversed to "hannaH".

### Example 3:
**Input:** s = ["a"]  
**Output:** ["a"]  
**Explanation:** 
Single character remains the same.

### Example 4:
**Input:** s = ["p","r","o","g","r","a","m"]  
**Output:** ["m","a","r","g","o","r","p"]  
**Explanation:** 
The string "program" is reversed to "margorp".

## Intuition

The key insight is to use two pointers - one starting from the beginning and one from the end of the array. We swap characters at these positions and move the pointers towards the center until they meet.

This works because:
- We need to swap characters from opposite ends
- Moving pointers towards center ensures we don't swap the same characters twice
- When pointers meet or cross, the string is fully reversed

## Approach

### Approach 1: Two Pointers (Optimal)
1. Initialize two pointers: left = 0, right = length - 1
2. While left < right:
   - Swap characters at left and right positions
   - Increment left pointer
   - Decrement right pointer
3. The string will be reversed in-place

### Approach 2: Using Extra Array
1. Create a new array of the same size
2. Copy characters from end to beginning
3. Copy back to original array

### Approach 3: Recursive Approach
1. Swap first and last characters
2. Recursively reverse the middle substring
3. Base case: when string length ≤ 1

## Dry Run

Let's trace through Example 1: s = ["h","e","l","l","o"]

### Two Pointers Approach:
- Initial: left=0, right=4, s=["h","e","l","l","o"]
- Step 1: swap s[0] and s[4], left=1, right=3, s=["o","e","l","l","h"]
- Step 2: swap s[1] and s[3], left=2, right=2, s=["o","l","l","e","h"]
- left=2, right=2, loop ends
- Result: ["o","l","l","e","h"]

### Extra Array Approach:
- Create temp array: ["","","","",""]
- Copy from end: temp[0]="o", temp[1]="l", temp[2]="l", temp[3]="e", temp[4]="h"
- Copy back to s: ["o","l","l","e","h"]

## Key Insights

1. **In-Place Operation**: Two pointers allow reversal without extra space
2. **Symmetry**: Characters equidistant from center are swapped
3. **Termination**: Loop ends when pointers meet or cross
4. **Efficiency**: O(n/2) swaps = O(n) time complexity

## Edge Cases

1. **Empty string**: No operation needed
2. **Single character**: No operation needed
3. **Even length**: Pointers meet at center
4. **Odd length**: Pointers cross at center

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers (Optimal)

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: Using Extra Array

**Time Complexity:** O(n) - Two passes through the array  
**Space Complexity:** O(n) - Extra array needed

### Solution 3: Recursive Approach

**Time Complexity:** O(n) - n/2 recursive calls  
**Space Complexity:** O(n) - Recursion stack space`,
    output1: '["o","l","l","e","h"]',
    output2: '["h","a","n","n","a","H"]',
    constraints: `## Constraints

- 1 <= s.length <= 105
- s[i] is a printable ascii character`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

void reverseString(char* s, int sSize) {
    int left = 0;
    int right = sSize - 1;
    
    while (left < right) {
        // Swap characters
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        left++;
        right--;
    }
}

int main() {
    // Test case 1
    char s1[] = "hello";
    int size1 = 5;
    printf("Original: %s\\n", s1);
    reverseString(s1, size1);
    printf("Reversed: %s\\n", s1);
    
    // Test case 2
    char s2[] = "Hannah";
    int size2 = 6;
    printf("Original: %s\\n", s2);
    reverseString(s2, size2);
    printf("Reversed: %s\\n", s2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses two pointers to swap characters from both ends of the string, moving towards the center. This is the most efficient approach with optimal time and space complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>

void reverseString(char* s, int sSize) {
    // Create a temporary array
    char* temp = (char*)malloc(sSize * sizeof(char));
    
    // Copy characters in reverse order
    for (int i = 0; i < sSize; i++) {
        temp[i] = s[sSize - 1 - i];
    }
    
    // Copy back to original array
    for (int i = 0; i < sSize; i++) {
        s[i] = temp[i];
    }
    
    free(temp);
}

int main() {
    // Test case 1
    char s1[] = "hello";
    int size1 = 5;
    printf("Original: %s\\n", s1);
    reverseString(s1, size1);
    printf("Reversed: %s\\n", s1);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses extra space to store the reversed string temporarily. While it has the same time complexity, it uses O(n) extra space which violates the in-place requirement.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>

void reverseString(char* s, int sSize) {
    // Use recursion (not recommended for large strings)
    if (sSize <= 1) {
        return;
    }
    
    // Swap first and last characters
    char temp = s[0];
    s[0] = s[sSize - 1];
    s[sSize - 1] = temp;
    
    // Recursively reverse the middle part
    reverseString(s + 1, sSize - 2);
}

int main() {
    // Test case 1
    char s1[] = "hello";
    int size1 = 5;
    printf("Original: %s\\n", s1);
    reverseString(s1, size1);
    printf("Reversed: %s\\n", s1);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n) - due to recursion stack',
          explanation: 'This solution uses recursion to reverse the string. While it works, it uses O(n) space due to the recursion stack, making it less efficient than the iterative two-pointer approach.'
        }
      }
    }
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    difficulty: 'Easy',
    category: ['String', 'Stack'],
    input1: 's = "()"',
    input2: 's = "()[]{}"',
    explanation: `## Problem Statement

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Examples

### Example 1:
**Input:** s = "()"  
**Output:** true  
**Explanation:** 
Simple valid parentheses.

### Example 2:
**Input:** s = "()[]{}"  
**Output:** true  
**Explanation:** 
Each opening bracket is closed by the same type of bracket.

### Example 3:
**Input:** s = "(]"  
**Output:** false  
**Explanation:** 
Opening parenthesis is closed by a square bracket, which is invalid.

### Example 4:
**Input:** s = "([)]"  
**Output:** false  
**Explanation:** 
Brackets are not closed in the correct order.

### Example 5:
**Input:** s = "{[]}"  
**Output:** true  
**Explanation:** 
Nested brackets are valid as long as they are properly closed.

## Intuition

The key insight is to use a stack data structure. When we encounter an opening bracket, we push it onto the stack. When we encounter a closing bracket, we check if it matches the top of the stack.

This works because:
- Opening brackets must be closed in the reverse order (LIFO - Last In, First Out)
- Stack naturally provides LIFO behavior
- We can match each closing bracket with its corresponding opening bracket

## Approach

### Approach 1: Stack (Optimal)
1. Initialize an empty stack
2. For each character in the string:
   - If it's an opening bracket, push it onto the stack
   - If it's a closing bracket, check if it matches the top of the stack
   - If it matches, pop the top element
   - If it doesn't match, return false
3. After processing all characters, check if the stack is empty
4. Return true if stack is empty, false otherwise

### Approach 2: Using Array as Stack
1. Use a fixed-size array to simulate stack behavior
2. Keep track of top index
3. Same logic as stack approach

### Approach 3: Brute Force (Inefficient)
1. For each closing bracket, find its matching opening bracket
2. Check if they are properly nested
3. Mark used brackets to avoid double counting

## Dry Run

Let's trace through Example 2: s = "()[]{}"

### Stack Approach:
- i=0, char='(': push '(' → stack: ['(']
- i=1, char=')': matches top '(' → pop → stack: []
- i=2, char='[': push '[' → stack: ['[']
- i=3, char=']': matches top '[' → pop → stack: []
- i=4, char='{': push '{' → stack: ['{']
- i=5, char='}': matches top '{' → pop → stack: []
- Stack is empty → return true

### Example 4: s = "([)]"
- i=0, char='(': push '(' → stack: ['(']
- i=1, char='[': push '[' → stack: ['(', '[']
- i=2, char=')': doesn't match top '[' → return false

## Key Insights

1. **LIFO Principle**: Last opening bracket must be closed first
2. **Stack Property**: Stack naturally handles nested structures
3. **Matching Logic**: Each closing bracket must match the most recent opening bracket
4. **Empty Stack**: Valid string must have empty stack at the end

## Edge Cases

1. **Empty string**: Return true (no brackets to validate)
2. **Only opening brackets**: Stack not empty at end
3. **Only closing brackets**: Stack empty when trying to pop
4. **Mismatched types**: Closing bracket doesn't match opening bracket
5. **Unmatched opening**: Stack not empty at end

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Stack (Optimal)

**Time Complexity:** O(n) - Single pass through the string  
**Space Complexity:** O(n) - Space for the stack

### Solution 2: Array as Stack

**Time Complexity:** O(n) - Single pass through the string  
**Space Complexity:** O(n) - Fixed-size array

### Solution 3: Brute Force

**Time Complexity:** O(n²) - For each closing bracket, search for opening bracket  
**Space Complexity:** O(n) - To mark used brackets`,
    output1: 'true',
    output2: 'true',
    constraints: `## Constraints

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct {
    char* data;
    int top;
    int capacity;
} Stack;

Stack* createStack(int capacity) {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->data = (char*)malloc(capacity * sizeof(char));
    stack->top = -1;
    stack->capacity = capacity;
    return stack;
}

void push(Stack* stack, char value) {
    if (stack->top < stack->capacity - 1) {
        stack->data[++stack->top] = value;
    }
}

char pop(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top--];
    }
    return '\\0';
}

char peek(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top];
    }
    return '\\0';
}

bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

void freeStack(Stack* stack) {
    free(stack->data);
    free(stack);
}

bool isValid(char* s) {
    int len = 0;
    while (s[len] != '\\0') len++;
    
    Stack* stack = createStack(len);
    
    for (int i = 0; i < len; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            push(stack, s[i]);
        } else {
            if (isEmpty(stack)) {
                freeStack(stack);
                return false;
            }
            
            char top = pop(stack);
            if ((s[i] == ')' && top != '(') ||
                (s[i] == '}' && top != '{') ||
                (s[i] == ']' && top != '[')) {
                freeStack(stack);
                return false;
            }
        }
    }
    
    bool result = isEmpty(stack);
    freeStack(stack);
    return result;
}

int main() {
    // Test cases
    char* test1 = "()";
    printf("Test 1: %s -> %s\\n", test1, isValid(test1) ? "true" : "false");
    
    char* test2 = "()[]{}";
    printf("Test 2: %s -> %s\\n", test2, isValid(test2) ? "true" : "false");
    
    char* test3 = "(]";
    printf("Test 3: %s -> %s\\n", test3, isValid(test3) ? "true" : "false");
    
    char* test4 = "([)]";
    printf("Test 4: %s -> %s\\n", test4, isValid(test4) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses a stack to keep track of opening brackets. When we encounter a closing bracket, we check if it matches the most recent opening bracket. This is the most efficient approach for this problem.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdbool.h>

bool isValid(char* s) {
    int len = 0;
    while (s[len] != '\\0') len++;
    
    // Use array as stack
    char stack[10000];
    int top = -1;
    
    for (int i = 0; i < len; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack[++top] = s[i];
        } else {
            if (top == -1) {
                return false;
            }
            
            char topChar = stack[top--];
            if ((s[i] == ')' && topChar != '(') ||
                (s[i] == '}' && topChar != '{') ||
                (s[i] == ']' && topChar != '[')) {
                return false;
            }
        }
    }
    
    return top == -1;
}

int main() {
    // Test cases
    char* test1 = "()";
    printf("Test 1: %s -> %s\\n", test1, isValid(test1) ? "true" : "false");
    
    char* test2 = "()[]{}";
    printf("Test 2: %s -> %s\\n", test2, isValid(test2) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses a fixed-size array as a stack. While it works, it has a limitation on the maximum string length and is less flexible than a dynamic stack implementation.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isValid(char* s) {
    int len = strlen(s);
    
    // Brute force approach - check each pair
    for (int i = 0; i < len; i++) {
        if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            // Find matching opening bracket
            bool found = false;
            for (int j = i - 1; j >= 0; j--) {
                if (s[j] != 'X' && 
                    ((s[i] == ')' && s[j] == '(') ||
                     (s[i] == '}' && s[j] == '{') ||
                     (s[i] == ']' && s[j] == '['))) {
                    s[j] = 'X'; // Mark as used
                    s[i] = 'X';
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }
    }
    
    // Check if all characters are used
    for (int i = 0; i < len; i++) {
        if (s[i] != 'X') {
            return false;
        }
    }
    
    return true;
}

int main() {
    // Test cases
    char test1[] = "()";
    printf("Test 1: %s -> %s\\n", test1, isValid(test1) ? "true" : "false");
    
    char test2[] = "()[]{}";
    printf("Test 2: %s -> %s\\n", test2, isValid(test2) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses a brute force approach, searching for matching pairs of brackets. It has O(n²) time complexity and modifies the input string, making it less efficient and not recommended.'
        }
      }
    }
     },
   {
     id: 'two-sum',
     title: 'Two Sum',
     description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
     difficulty: 'Easy',
     category: ['Array', 'Hash Table'],
     input1: 'nums = [2,7,11,15], target = 9',
     input2: 'nums = [3,2,4], target = 6',
     explanation: `## Problem Statement

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples

### Example 1:
**Input:** nums = [2,7,11,15], target = 9  
**Output:** [0,1]  
**Explanation:** 
Because nums[0] + nums[1] == 9, we return [0, 1].

### Example 2:
**Input:** nums = [3,2,4], target = 6  
**Output:** [1,2]  
**Explanation:** 
Because nums[1] + nums[2] == 6, we return [1, 2].

### Example 3:
**Input:** nums = [3,3], target = 6  
**Output:** [0,1]  
**Explanation:** 
Because nums[0] + nums[1] == 6, we return [0, 1].

### Example 4:
**Input:** nums = [1,5,8,10,13,18,21,25,30], target = 23  
**Output:** [3,4]  
**Explanation:** 
Because nums[3] + nums[4] == 23, we return [3, 4].

## Intuition

The key insight is to use a hash table to store the complement of each number. For each number, we check if its complement (target - current_number) exists in the hash table.

This works because:
- For each number, we need to find its complement (target - current_number)
- If we can find this complement efficiently, we've solved the problem
- Hash table provides O(1) average lookup time

## Approach

### Approach 1: Hash Table (Optimal)
1. Initialize an empty hash table
2. For each number in the array:
   - Calculate the complement: target - current_number
   - If complement exists in hash table, return the indices
   - Otherwise, store the current number and its index in hash table
3. If no solution is found, return empty array

### Approach 2: Two Pointer (Requires Sorting)
1. Sort the array with their original indices
2. Use two pointers: left at start, right at end
3. If sum of elements at pointers equals target, return their original indices
4. If sum is less than target, move left pointer right
5. If sum is greater than target, move right pointer left

### Approach 3: Brute Force
1. Use nested loops to check all pairs
2. For each pair, check if their sum equals target
3. Return indices when found

## Dry Run

Let's trace through Example 1: nums = [2,7,11,15], target = 9

### Hash Table Approach:
- i=0, num=2: complement = 9-2 = 7, not in hash table, add {2:0}
- i=1, num=7: complement = 9-7 = 2, found in hash table at index 0
- Return [0,1]

### Two Pointer Approach:
- After sorting with indices: [(2,0), (7,1), (11,2), (15,3)]
- left=0, right=3: 2+15=17 > 9, move right to 2
- left=0, right=2: 2+11=13 > 9, move right to 1
- left=0, right=1: 2+7=9 == target, return [0,1]

### Brute Force Approach:
- Check pairs: (2,7), (2,11), (2,15), (7,11), (7,15), (11,15)
- Found: 2+7=9, return [0,1]

## Key Insights

1. **Complement Strategy**: For each number, find its complement (target - num)
2. **Hash Table Efficiency**: O(1) average lookup time for complements
3. **Single Pass**: We can solve in one pass through the array
4. **Unique Solution**: Problem guarantees exactly one solution exists

## Edge Cases

1. **Two identical numbers**: nums = [3,3], target = 6
2. **Negative numbers**: nums = [-1,-2,-3,-4], target = -7
3. **Large numbers**: nums = [1000000, 2000000], target = 3000000
4. **Minimum array**: nums = [1,2], target = 3

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Hash Table (Optimal)

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(n) - Space for the hash table

### Solution 2: Two Pointer (Requires Sorting)

**Time Complexity:** O(n log n) due to sorting  
**Space Complexity:** O(n) to store original indices

### Solution 3: Brute Force

**Time Complexity:** O(n²) - We check n(n-1)/2 pairs  
**Space Complexity:** O(1) - No extra space needed`,
     output1: '[0,1]',
     output2: '[1,2]',
     constraints: `## Constraints

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    
    // Simple approach for small arrays
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int returnSize1;
    int* result1 = twoSum(nums1, 4, target1, &returnSize1);
    printf("Test 1: [%d, %d]\\n", result1[0], result1[1]);
    free(result1);
    
    // Test case 2
    int nums2[] = {3, 2, 4};
    int target2 = 6;
    int returnSize2;
    int* result2 = twoSum(nums2, 3, target2, &returnSize2);
    printf("Test 2: [%d, %d]\\n", result2[0], result2[1]);
    free(result2);
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This solution uses nested loops to find two numbers that sum to the target. While not the most efficient, it is simple and works for small arrays.'
         },
         average: {
           code: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    
    // Sort the array with indices
    int** indexed = (int**)malloc(numsSize * sizeof(int*));
    for (int i = 0; i < numsSize; i++) {
        indexed[i] = (int*)malloc(2 * sizeof(int));
        indexed[i][0] = nums[i];
        indexed[i][1] = i;
    }
    
    // Simple bubble sort
    for (int i = 0; i < numsSize - 1; i++) {
        for (int j = 0; j < numsSize - i - 1; j++) {
            if (indexed[j][0] > indexed[j + 1][0]) {
                int temp_val = indexed[j][0];
                int temp_idx = indexed[j][1];
                indexed[j][0] = indexed[j + 1][0];
                indexed[j][1] = indexed[j + 1][1];
                indexed[j + 1][0] = temp_val;
                indexed[j + 1][1] = temp_idx;
            }
        }
    }
    
    // Two pointers approach
    int left = 0, right = numsSize - 1;
    while (left < right) {
        int sum = indexed[left][0] + indexed[right][0];
        if (sum == target) {
            result[0] = indexed[left][1];
            result[1] = indexed[right][1];
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    // Cleanup
    for (int i = 0; i < numsSize; i++) {
        free(indexed[i]);
    }
    free(indexed);
    
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int returnSize1;
    int* result1 = twoSum(nums1, 4, target1, &returnSize1);
    printf("Test 1: [%d, %d]\\n", result1[0], result1[1]);
    free(result1);
    
    return 0;
}`,
           timeComplexity: 'O(n log n)',
           spaceComplexity: 'O(n)',
           explanation: 'This solution sorts the array with indices and uses two pointers to find the target sum. The sorting step makes this approach less efficient than the optimal hash table solution.'
         },
         worst: {
           code: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    
    // Brute force approach
    for (int i = 0; i < numsSize; i++) {
        for (int j = 0; j < numsSize; j++) {
            if (i != j && nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int returnSize1;
    int* result1 = twoSum(nums1, 4, target1, &returnSize1);
    printf("Test 1: [%d, %d]\\n", result1[0], result1[1]);
    free(result1);
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This solution uses nested loops to check all possible pairs. It is the least efficient approach but is simple to understand and implement.'
         }
       }
     }
   },
   {
     id: 'palindrome-number',
     title: 'Palindrome Number',
     description: `Given an integer x, return true if x is a palindrome, and false otherwise.

A number is a palindrome when it reads the same backward as forward.`,
     difficulty: 'Easy',
     category: ['Math'],
     input1: 'x = 121',
     input2: 'x = -121',
     explanation: `## Problem Statement

Given an integer x, return true if x is a palindrome, and false otherwise.

A number is a palindrome when it reads the same backward as forward.

## Examples

### Example 1:
**Input:** x = 121  
**Output:** true  
**Explanation:** 
121 reads as 121 from left to right and from right to left.

### Example 2:
**Input:** x = -121  
**Output:** false  
**Explanation:** 
From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

### Example 3:
**Input:** x = 10  
**Output:** false  
**Explanation:** 
Reads 01 from right to left. Therefore it is not a palindrome.

### Example 4:
**Input:** x = 12321  
**Output:** true  
**Explanation:** 
12321 reads as 12321 from left to right and from right to left.

### Example 5:
**Input:** x = 0  
**Output:** true  
**Explanation:** 
Single digit 0 is a palindrome.

## Intuition

The key insight is to reverse the number and compare it with the original. If they are equal, the number is a palindrome.

This works because:
- A palindrome reads the same forward and backward
- Reversing the number gives us the "backward" version
- If original equals reversed, it's a palindrome
- Negative numbers can never be palindromes due to the minus sign

## Approach

### Approach 1: Reverse Number (Optimal)
1. Handle negative numbers (they are never palindromes)
2. Reverse the number by extracting digits from right to left
3. Compare the reversed number with the original
4. Return true if they are equal, false otherwise

### Approach 2: String Conversion
1. Convert the number to a string
2. Use two pointers to compare characters from both ends
3. Move pointers towards center until they meet

### Approach 3: Half Reversal
1. Only reverse the second half of the number
2. Compare first half with reversed second half
3. More efficient as we only reverse half the digits

## Dry Run

Let's trace through Example 1: x = 121

### Reverse Number Approach:
- original = 121, reversed = 0
- x = 121: digit = 1, reversed = 0*10 + 1 = 1, x = 12
- x = 12: digit = 2, reversed = 1*10 + 2 = 12, x = 1
- x = 1: digit = 1, reversed = 12*10 + 1 = 121, x = 0
- original (121) == reversed (121) → return true

### String Approach:
- Convert to string: "121"
- left = 0, right = 2: "1" == "1" ✓
- left = 1, right = 1: "2" == "2" ✓
- left = 2, right = 0: pointers crossed → return true

### Half Reversal Approach:
- Count digits: 3 (odd)
- Reverse second half: 121 → 12, reversed = 21
- Compare: 1 == 1 ✓ → return true

## Key Insights

1. **Negative Numbers**: All negative numbers are not palindromes
2. **Single Digits**: All single digit numbers (0-9) are palindromes
3. **Reversal Logic**: Extract digits from right to left using modulo and division
4. **Efficiency**: Half reversal is more efficient for large numbers

## Edge Cases

1. **Negative numbers**: Always return false
2. **Single digit**: Always return true (0-9)
3. **Zero**: Return true
4. **Large numbers**: Handle overflow in reversal
5. **Numbers ending with 0**: Can't be palindromes (except 0)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Reverse Number (Optimal)

**Time Complexity:** O(log n) - Number of digits in the number  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: String Conversion

**Time Complexity:** O(log n) - Convert to string and compare  
**Space Complexity:** O(log n) - Space for string conversion

### Solution 3: Half Reversal

**Time Complexity:** O(log n) - Only reverse half the digits  
**Space Complexity:** O(1) - Constant extra space`,
     output1: 'true',
     output2: 'false',
     constraints: `## Constraints

- -231 <= x <= 231 - 1`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int x) {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }
    
    // Single digit numbers are palindromes
    if (x < 10) {
        return true;
    }
    
    // Reverse the number
    int original = x;
    int reversed = 0;
    
    while (x > 0) {
        int digit = x % 10;
        reversed = reversed * 10 + digit;
        x /= 10;
    }
    
    return original == reversed;
}

int main() {
    // Test cases
    printf("Test 1: 121 -> %s\\n", isPalindrome(121) ? "true" : "false");
    printf("Test 2: -121 -> %s\\n", isPalindrome(-121) ? "true" : "false");
    printf("Test 3: 10 -> %s\\n", isPalindrome(10) ? "true" : "false");
    printf("Test 4: 12321 -> %s\\n", isPalindrome(12321) ? "true" : "false");
    
    return 0;
}`,
           timeComplexity: 'O(log n)',
           spaceComplexity: 'O(1)',
           explanation: 'This solution reverses the number by extracting digits and building the reversed number. It is the most efficient approach with optimal time and space complexity.'
         },
         average: {
           code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isPalindrome(int x) {
    // Convert to string
    char str[20];
    sprintf(str, "%d", x);
    
    int len = strlen(str);
    int left = 0, right = len - 1;
    
    // Check palindrome using two pointers
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

int main() {
    // Test cases
    printf("Test 1: 121 -> %s\\n", isPalindrome(121) ? "true" : "false");
    printf("Test 2: -121 -> %s\\n", isPalindrome(-121) ? "true" : "false");
    printf("Test 3: 10 -> %s\\n", isPalindrome(10) ? "true" : "false");
    
    return 0;
}`,
           timeComplexity: 'O(log n)',
           spaceComplexity: 'O(log n)',
           explanation: 'This solution converts the number to a string and uses two pointers to check if it is a palindrome. While it works, it uses extra space for the string conversion.'
         },
         worst: {
           code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isPalindrome(int x) {
    // Convert to string
    char str[20];
    sprintf(str, "%d", x);
    
    int len = strlen(str);
    
    // Create reversed string
    char reversed[20];
    for (int i = 0; i < len; i++) {
        reversed[i] = str[len - 1 - i];
    }
    reversed[len] = '\\0';
    
    // Compare strings
    return strcmp(str, reversed) == 0;
}

int main() {
    // Test cases
    printf("Test 1: 121 -> %s\\n", isPalindrome(121) ? "true" : "false");
    printf("Test 2: -121 -> %s\\n", isPalindrome(-121) ? "true" : "false");
    printf("Test 3: 10 -> %s\\n", isPalindrome(10) ? "true" : "false");
    
    return 0;
}`,
           timeComplexity: 'O(log n)',
           spaceComplexity: 'O(log n)',
           explanation: 'This solution converts the number to a string, creates a reversed copy, and compares them. It uses extra space for both strings and is less efficient than the mathematical approach.'
         }
       }
     }
   },
   {
     id: 'remove-duplicates-from-sorted-array',
     title: 'Remove Duplicates from Sorted Array',
     description: `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.`,
     difficulty: 'Easy',
     category: ['Array', 'Two Pointers'],
     input1: 'nums = [1,1,2]',
     input2: 'nums = [0,0,1,1,1,2,2,3,3,4]',
     explanation: `## Problem Statement

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

## Examples

### Example 1:
**Input:** nums = [1,1,2]  
**Output:** 2, nums = [1,2,_]  
**Explanation:** 
Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k.

### Example 2:
**Input:** nums = [0,0,1,1,1,2,2,3,3,4]  
**Output:** 5, nums = [0,1,2,3,4,_,_,_,_,_]  
**Explanation:** 
Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k.

### Example 3:
**Input:** nums = [1,1,1,1,1]  
**Output:** 1, nums = [1,_,_,_,_]  
**Explanation:** 
Your function should return k = 1, with the first element of nums being 1. All duplicates are removed.

### Example 4:
**Input:** nums = [1,2,3,4,5]  
**Output:** 5, nums = [1,2,3,4,5]  
**Explanation:** 
Your function should return k = 5, with all elements being unique and in the same order.

## Intuition

The key insight is to use two pointers - one to track the position where we should place the next unique element, and another to scan through the array.

This works because:
- The array is sorted, so duplicates are adjacent
- We can use a slow pointer to track where to place unique elements
- We use a fast pointer to scan for the next unique element
- When we find a different element, we place it at the slow pointer position

## Approach

### Approach 1: Two Pointers (Optimal)
1. Initialize two pointers: i = 0 (for placing unique elements) and j = 1 (for scanning)
2. While j < array length:
   - If nums[j] != nums[i], increment i and copy nums[j] to nums[i]
   - Increment j
3. Return i + 1 (the number of unique elements)

### Approach 2: Using Extra Array
1. Create a temporary array to store unique elements
2. Copy unique elements to the temp array
3. Copy back to the original array
4. Return the count of unique elements

### Approach 3: Brute Force (Inefficient)
1. For each element, check if it's a duplicate of any previous element
2. If not duplicate, place it at the next position
3. Return the count of unique elements

## Dry Run

Let's trace through Example 2: nums = [0,0,1,1,1,2,2,3,3,4]

### Two Pointers Approach:
- i = 0, j = 1: nums[1] == nums[0] (0 == 0), j++
- i = 0, j = 2: nums[2] != nums[0] (1 != 0), i++, nums[1] = 1, j++
- i = 1, j = 3: nums[3] == nums[1] (1 == 1), j++
- i = 1, j = 4: nums[4] == nums[1] (1 == 1), j++
- i = 1, j = 5: nums[5] != nums[1] (2 != 1), i++, nums[2] = 2, j++
- i = 2, j = 6: nums[6] == nums[2] (2 == 2), j++
- i = 2, j = 7: nums[7] != nums[2] (3 != 2), i++, nums[3] = 3, j++
- i = 3, j = 8: nums[8] == nums[3] (3 == 3), j++
- i = 3, j = 9: nums[9] != nums[3] (4 != 3), i++, nums[4] = 4, j++
- Return i + 1 = 5

### Extra Array Approach:
- Create temp array: []
- Scan array: [0,0,1,1,1,2,2,3,3,4]
- Add unique elements: [0,1,2,3,4]
- Copy back: nums = [0,1,2,3,4,_,_,_,_,_]
- Return 5

## Key Insights

1. **Sorted Property**: Since array is sorted, duplicates are adjacent
2. **In-Place Operation**: Two pointers allow modification without extra space
3. **Slow Pointer**: Tracks position for next unique element
4. **Fast Pointer**: Scans for next different element
5. **Efficiency**: Single pass through array gives O(n) time complexity

## Edge Cases

1. **Empty array**: Return 0
2. **Single element**: Return 1
3. **All duplicates**: Return 1
4. **No duplicates**: Return array length
5. **Large arrays**: Handle efficiently with two pointers

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers (Optimal)

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: Using Extra Array

**Time Complexity:** O(n) - Two passes through the array  
**Space Complexity:** O(n) - Extra array needed

### Solution 3: Brute Force

**Time Complexity:** O(n²) - For each element, check all previous elements  
**Space Complexity:** O(1) - Constant extra space`,
     output1: '2',
     output2: '5',
     constraints: `## Constraints

- 1 <= nums.length <= 3 * 104
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>

int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0) {
        return 0;
    }
    
    int i = 0; // Position to place next unique element
    
    for (int j = 1; j < numsSize; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
}

int main() {
    // Test case 1
    int nums1[] = {1, 1, 2};
    int size1 = 3;
    int result1 = removeDuplicates(nums1, size1);
    printf("Test 1: k = %d, nums = [", result1);
    for (int i = 0; i < result1; i++) {
        printf("%d", nums1[i]);
        if (i < result1 - 1) printf(", ");
    }
    printf("]\\n");
    
    // Test case 2
    int nums2[] = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
    int size2 = 10;
    int result2 = removeDuplicates(nums2, size2);
    printf("Test 2: k = %d, nums = [", result2);
    for (int i = 0; i < result2; i++) {
        printf("%d", nums2[i]);
        if (i < result2 - 1) printf(", ");
    }
    printf("]\\n");
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This solution uses two pointers to remove duplicates in-place. It is the most efficient approach with optimal time and space complexity.'
         },
         average: {
           code: `#include <stdio.h>
#include <stdlib.h>

int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0) {
        return 0;
    }
    
    // Create a temporary array
    int* temp = (int*)malloc(numsSize * sizeof(int));
    temp[0] = nums[0];
    int k = 1;
    
    // Copy unique elements to temp array
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] != nums[i - 1]) {
            temp[k] = nums[i];
            k++;
        }
    }
    
    // Copy back to original array
    for (int i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
    
    free(temp);
    return k;
}

int main() {
    // Test case 1
    int nums1[] = {1, 1, 2};
    int size1 = 3;
    int result1 = removeDuplicates(nums1, size1);
    printf("Test 1: k = %d, nums = [", result1);
    for (int i = 0; i < result1; i++) {
        printf("%d", nums1[i]);
        if (i < result1 - 1) printf(", ");
    }
    printf("]\\n");
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(n)',
           explanation: 'This solution uses extra space to store unique elements temporarily. While it works, it violates the in-place requirement and uses O(n) extra space.'
         },
         worst: {
           code: `#include <stdio.h>

int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0) {
        return 0;
    }
    
    int k = 1;
    
    // Check each element against all previous elements
    for (int i = 1; i < numsSize; i++) {
        bool isDuplicate = false;
        
        // Check if current element is duplicate
        for (int j = 0; j < k; j++) {
            if (nums[i] == nums[j]) {
                isDuplicate = true;
                break;
            }
        }
        
        if (!isDuplicate) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
}

int main() {
    // Test case 1
    int nums1[] = {1, 1, 2};
    int size1 = 3;
    int result1 = removeDuplicates(nums1, size1);
    printf("Test 1: k = %d, nums = [", result1);
    for (int i = 0; i < result1; i++) {
        printf("%d", nums1[i]);
        if (i < result1 - 1) printf(", ");
    }
    printf("]\\n");
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This solution uses nested loops to check each element against all previous elements. It has O(n²) time complexity and is the least efficient approach.'
         }
       }
     }
   },
   {
     id: 'best-time-to-buy-and-sell-stock',
     title: 'Best Time to Buy and Sell Stock',
     description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
     difficulty: 'Easy',
     category: ['Array', 'Dynamic Programming', 'Greedy'],
     input1: 'prices = [7,1,5,3,6,4]',
     input2: 'prices = [7,6,4,3,1]',
     explanation: `## Problem Statement

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## Examples

### Example 1:
**Input:** prices = [7,1,5,3,6,4]  
**Output:** 5  
**Explanation:** 
Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

### Example 2:
**Input:** prices = [7,6,4,3,1]  
**Output:** 0  
**Explanation:** 
In this case, no transactions are done and the max profit = 0.

### Example 3:
**Input:** prices = [1,2,3,4,5]  
**Output:** 4  
**Explanation:** 
Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.

### Example 4:
**Input:** prices = [3,2,6,5,0,3]  
**Output:** 4  
**Explanation:** 
Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.

## Intuition

The key insight is that we need to find the maximum difference between a selling price and a buying price, where the selling day comes after the buying day.

We can solve this by:
1. Keeping track of the minimum price seen so far
2. For each day, calculate the potential profit if we sell on that day
3. Update the maximum profit if the current profit is greater

This works because:
- We want to buy at the lowest possible price
- We want to sell at the highest possible price after buying
- The maximum profit will be the maximum difference between any selling price and the minimum buying price before it

## Approach

### Approach 1: One Pass (Optimal)
1. Initialize minPrice to the first price and maxProfit to 0
2. Iterate through the prices array
3. For each price:
   - Update minPrice if current price is lower
   - Calculate potential profit (current price - minPrice)
   - Update maxProfit if potential profit is greater
4. Return maxProfit

### Approach 2: Brute Force
1. For each buying day, try all possible selling days after it
2. Calculate profit for each combination
3. Keep track of the maximum profit found

### Approach 3: Dynamic Programming
1. Use DP to track the maximum profit achievable at each day
2. For each day, consider either holding or selling

## Dry Run

Let's trace through Example 1: prices = [7,1,5,3,6,4]

### One Pass Approach:
- Day 0: minPrice = 7, maxProfit = 0
- Day 1: minPrice = 1, potential profit = 1-1 = 0, maxProfit = 0
- Day 2: minPrice = 1, potential profit = 5-1 = 4, maxProfit = 4
- Day 3: minPrice = 1, potential profit = 3-1 = 2, maxProfit = 4
- Day 4: minPrice = 1, potential profit = 6-1 = 5, maxProfit = 5
- Day 5: minPrice = 1, potential profit = 4-1 = 3, maxProfit = 5

Result: 5

## Key Insights

1. **Single Transaction**: We can only buy once and sell once
2. **Order Matters**: Must buy before selling
3. **Minimum Price Tracking**: Keep track of the lowest price seen so far
4. **Greedy Approach**: For each day, calculate profit with the minimum price seen before

## Edge Cases

1. **No Profit**: All prices are decreasing
2. **Single Day**: Only one price given
3. **All Same Price**: All prices are equal
4. **Large Numbers**: Handle integer overflow

## Constraints

- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^4`,
     solutions: {
       best: {
         code: `#include <stdio.h>
#include <limits.h>

int maxProfit(int* prices, int pricesSize) {
    if (pricesSize < 2) {
        return 0;
    }
    
    int minPrice = prices[0];
    int maxProfit = 0;
    
    for (int i = 1; i < pricesSize; i++) {
        // Update minimum price seen so far
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        
        // Calculate potential profit
        int currentProfit = prices[i] - minPrice;
        
        // Update maximum profit
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }
    
    return maxProfit;
}

int main() {
    // Test case 1
    int prices1[] = {7, 1, 5, 3, 6, 4};
    int size1 = 6;
    printf("Test 1: %d\\n", maxProfit(prices1, size1)); // Expected: 5
    
    // Test case 2
    int prices2[] = {7, 6, 4, 3, 1};
    int size2 = 5;
    printf("Test 2: %d\\n", maxProfit(prices2, size2)); // Expected: 0
    
    // Test case 3
    int prices3[] = {1, 2, 3, 4, 5};
    int size3 = 5;
    printf("Test 3: %d\\n", maxProfit(prices3, size3)); // Expected: 4
    
    return 0;
}`,
         timeComplexity: 'O(n)',
         spaceComplexity: 'O(1)',
         explanation: 'This is the optimal solution that uses a single pass through the array. It keeps track of the minimum price seen so far and calculates the maximum profit possible at each step.'
       },
       average: {
         code: `#include <stdio.h>

int maxProfit(int* prices, int pricesSize) {
    if (pricesSize < 2) {
        return 0;
    }
    
    int maxProfit = 0;
    
    // Try all possible buying and selling combinations
    for (int i = 0; i < pricesSize - 1; i++) {
        for (int j = i + 1; j < pricesSize; j++) {
            int profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    
    return maxProfit;
}

int main() {
    // Test case 1
    int prices1[] = {7, 1, 5, 3, 6, 4};
    int size1 = 6;
    printf("Test 1: %d\\n", maxProfit(prices1, size1)); // Expected: 5
    
    // Test case 2
    int prices2[] = {7, 6, 4, 3, 1};
    int size2 = 5;
    printf("Test 2: %d\\n", maxProfit(prices2, size2)); // Expected: 0
    
    return 0;
}`,
         timeComplexity: 'O(n²)',
         spaceComplexity: 'O(1)',
         explanation: 'This solution uses nested loops to try all possible buying and selling combinations. While it works correctly, it is less efficient than the optimal solution.'
       },
       worst: {
         code: `#include <stdio.h>
#include <stdlib.h>

int maxProfit(int* prices, int pricesSize) {
    if (pricesSize < 2) {
        return 0;
    }
    
    int maxProfit = 0;
    
    // Create all possible subarrays and find max profit
    for (int start = 0; start < pricesSize; start++) {
        for (int end = start + 1; end < pricesSize; end++) {
            // Find minimum in subarray [start, end-1]
            int minPrice = prices[start];
            for (int k = start; k < end; k++) {
                if (prices[k] < minPrice) {
                    minPrice = prices[k];
                }
            }
            
            // Calculate profit
            int profit = prices[end] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    
    return maxProfit;
}

int main() {
    // Test case 1
    int prices1[] = {7, 1, 5, 3, 6, 4};
    int size1 = 6;
    printf("Test 1: %d\\n", maxProfit(prices1, size1)); // Expected: 5
    
    return 0;
}`,
         timeComplexity: 'O(n³)',
         spaceComplexity: 'O(1)',
         explanation: 'This solution uses three nested loops to find the maximum profit. It is the least efficient approach and should be avoided in practice.'
       }
     }
   },
   {
     id: 'divide-nodes-into-maximum-number-of-groups',
     title: 'Divide Nodes Into the Maximum Number of Groups',
     description: `You are given a positive integer n representing the number of nodes in an undirected graph. The nodes are numbered from 1 to n.

You are also given a 2D integer array edges, where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi.

Return the maximum number of groups you can create such that:
- Each node belongs to exactly one group
- Each group contains at least one node
- For any two nodes in the same group, there is no edge between them (they are not adjacent)

If it is impossible to create any groups, return -1.`,
     difficulty: 'Hard',
     category: ['Graph', 'Breadth-First Search', 'Bipartite Graph'],
     input1: 'n = 4, edges = [[1,2],[1,3],[2,4]]',
     input2: 'n = 3, edges = [[1,2],[2,3],[3,1]]',
     explanation: `## Problem Statement

You are given a positive integer n representing the number of nodes in an undirected graph. The nodes are numbered from 1 to n.

You are also given a 2D integer array edges, where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi.

Return the maximum number of groups you can create such that:
- Each node belongs to exactly one group
- Each group contains at least one node
- For any two nodes in the same group, there is no edge between them (they are not adjacent)

If it is impossible to create any groups, return -1.

## Examples

### Example 1:
**Input:** n = 4, edges = [[1,2],[1,3],[2,4]]  
**Output:** 2  
**Explanation:** 
We can create 2 groups: [1,4] and [2,3]. No two nodes in the same group are adjacent.

### Example 2:
**Input:** n = 3, edges = [[1,2],[2,3],[3,1]]  
**Output:** -1  
**Explanation:** 
It is impossible to create any groups because all nodes are connected in a cycle.

### Example 3:
**Input:** n = 5, edges = [[1,2],[2,3],[3,4],[4,5]]  
**Output:** 2  
**Explanation:** 
We can create 2 groups: [1,3,5] and [2,4].

### Example 4:
**Input:** n = 6, edges = [[1,2],[2,3],[3,4],[4,5],[5,6]]  
**Output:** 3  
**Explanation:** 
We can create 3 groups: [1,3,5], [2,4,6], and [].

## Intuition

This problem is essentially asking us to find the maximum number of independent sets we can create in a graph. An independent set is a set of vertices where no two vertices are adjacent.

The key insights are:
1. This is equivalent to finding the maximum number of colors needed to color the graph such that no adjacent vertices have the same color
2. The problem reduces to finding the maximum number of groups in any connected component
3. For a bipartite graph, we can use 2 colors
4. For a graph with odd cycles, we need more than 2 colors

## Approach

### Approach 1: BFS with Bipartite Check (Optimal)
1. For each connected component:
   - Use BFS to check if it's bipartite
   - If bipartite, we can use 2 groups
   - If not bipartite, we need more groups (use BFS to find the minimum number of colors needed)
2. The answer is the maximum number of groups needed across all components

### Approach 2: Graph Coloring with BFS
1. For each connected component:
   - Use BFS to assign colors to nodes
   - Keep track of the maximum number of colors used
2. Return the maximum number of colors needed

### Approach 3: DFS with Backtracking
1. Try to assign each node to different groups
2. Use backtracking to find the optimal grouping
3. This is less efficient but more intuitive

## Dry Run

Let's trace through Example 1: n = 4, edges = [[1,2],[1,3],[2,4]]

### BFS Approach:
- Start with node 1, assign color 0
- Neighbors of 1: [2,3], assign color 1
- Neighbors of 2: [1,4], 1 already colored, assign color 0 to 4
- Neighbors of 3: [1], already colored
- Neighbors of 4: [2], already colored

Colors used: 2 (0 and 1)
Result: 2 groups

## Key Insights

1. **Bipartite Graph**: If a graph is bipartite, we can use 2 colors
2. **Odd Cycles**: Graphs with odd cycles need more than 2 colors
3. **Connected Components**: Handle each connected component separately
4. **Maximum Groups**: The answer is the maximum number of groups needed in any component

## Edge Cases

1. **No Edges**: All nodes can be in separate groups
2. **Complete Graph**: Only one group possible
3. **Disconnected Graph**: Handle each component separately
4. **Single Node**: Can be in any group

## Constraints

- 1 <= n <= 500
- 0 <= edges.length <= 10^4
- 1 <= ai, bi <= n
- ai != bi`,
     solutions: {
       best: {
         code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_NODES 501

// Structure for adjacency list
typedef struct Node {
    int vertex;
    struct Node* next;
} Node;

// Structure for graph
typedef struct {
    Node* adjList[MAX_NODES];
    int color[MAX_NODES];
    bool visited[MAX_NODES];
} Graph;

// Create a new node
Node* createNode(int vertex) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->vertex = vertex;
    newNode->next = NULL;
    return newNode;
}

// Add edge to graph
void addEdge(Graph* graph, int src, int dest) {
    Node* newNode = createNode(dest);
    newNode->next = graph->adjList[src];
    graph->adjList[src] = newNode;
    
    newNode = createNode(src);
    newNode->next = graph->adjList[dest];
    graph->adjList[dest] = newNode;
}

// BFS to find maximum number of colors needed
int bfs(Graph* graph, int start, int n) {
    int queue[MAX_NODES];
    int front = 0, rear = 0;
    
    queue[rear++] = start;
    graph->visited[start] = true;
    graph->color[start] = 0;
    
    int maxColors = 1;
    
    while (front < rear) {
        int current = queue[front++];
        
        Node* temp = graph->adjList[current];
        while (temp != NULL) {
            int neighbor = temp->vertex;
            
            if (!graph->visited[neighbor]) {
                graph->visited[neighbor] = true;
                graph->color[neighbor] = (graph->color[current] + 1) % 2;
                queue[rear++] = neighbor;
            } else if (graph->color[neighbor] == graph->color[current]) {
                // Not bipartite, need more colors
                return -1;
            }
            
            temp = temp->next;
        }
    }
    
    return 2; // Bipartite
}

// Main function to find maximum number of groups
int magnificentSets(int n, int** edges, int edgesSize, int* edgesColSize) {
    Graph graph = {0};
    
    // Build adjacency list
    for (int i = 0; i < edgesSize; i++) {
        addEdge(&graph, edges[i][0], edges[i][1]);
    }
    
    int maxGroups = 0;
    
    // Process each connected component
    for (int i = 1; i <= n; i++) {
        if (!graph.visited[i]) {
            int groups = bfs(&graph, i, n);
            if (groups == -1) {
                return -1; // Impossible to create groups
            }
            if (groups > maxGroups) {
                maxGroups = groups;
            }
        }
    }
    
    return maxGroups;
}

int main() {
    // Test case 1
    int n1 = 4;
    int edges1[][2] = {{1,2}, {1,3}, {2,4}};
    int edgesSize1 = 3;
    
    int* edgesPtr1[3];
    for (int i = 0; i < 3; i++) {
        edgesPtr1[i] = edges1[i];
    }
    
    printf("Test 1: %d\\n", magnificentSets(n1, edgesPtr1, edgesSize1, NULL)); // Expected: 2
    
    return 0;
}`,
         timeComplexity: 'O(V + E)',
         spaceComplexity: 'O(V + E)',
         explanation: 'This solution uses BFS to check if each connected component is bipartite. If a component is bipartite, we can use 2 groups. If not, we need more groups.'
       },
       average: {
         code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_NODES 501

// Structure for adjacency list
typedef struct Node {
    int vertex;
    struct Node* next;
} Node;

// Structure for graph
typedef struct {
    Node* adjList[MAX_NODES];
    int color[MAX_NODES];
    bool visited[MAX_NODES];
} Graph;

// Create a new node
Node* createNode(int vertex) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->vertex = vertex;
    newNode->next = NULL;
    return newNode;
}

// Add edge to graph
void addEdge(Graph* graph, int src, int dest) {
    Node* newNode = createNode(dest);
    newNode->next = graph->adjList[src];
    graph->adjList[src] = newNode;
    
    newNode = createNode(src);
    newNode->next = graph->adjList[dest];
    graph->adjList[dest] = newNode;
}

// DFS to find maximum number of colors needed
int dfs(Graph* graph, int current, int parent, int currentColor) {
    graph->visited[current] = true;
    graph->color[current] = currentColor;
    
    int maxColors = currentColor + 1;
    
    Node* temp = graph->adjList[current];
    while (temp != NULL) {
        int neighbor = temp->vertex;
        
        if (neighbor != parent) {
            if (!graph->visited[neighbor]) {
                int colors = dfs(graph, neighbor, current, (currentColor + 1) % 2);
                if (colors == -1) return -1;
                if (colors > maxColors) maxColors = colors;
            } else if (graph->color[neighbor] == currentColor) {
                return -1; // Not bipartite
            }
        }
        
        temp = temp->next;
    }
    
    return maxColors;
}

// Main function to find maximum number of groups
int magnificentSets(int n, int** edges, int edgesSize, int* edgesColSize) {
    Graph graph = {0};
    
    // Build adjacency list
    for (int i = 0; i < edgesSize; i++) {
        addEdge(&graph, edges[i][0], edges[i][1]);
    }
    
    int maxGroups = 0;
    
    // Process each connected component
    for (int i = 1; i <= n; i++) {
        if (!graph.visited[i]) {
            int groups = dfs(&graph, i, -1, 0);
            if (groups == -1) {
                return -1; // Impossible to create groups
            }
            if (groups > maxGroups) {
                maxGroups = groups;
            }
        }
    }
    
    return maxGroups;
}

int main() {
    // Test case 1
    int n1 = 4;
    int edges1[][2] = {{1,2}, {1,3}, {2,4}};
    int edgesSize1 = 3;
    
    int* edgesPtr1[3];
    for (int i = 0; i < 3; i++) {
        edgesPtr1[i] = edges1[i];
    }
    
    printf("Test 1: %d\\n", magnificentSets(n1, edgesPtr1, edgesSize1, NULL)); // Expected: 2
    
    return 0;
}`,
         timeComplexity: 'O(V + E)',
         spaceComplexity: 'O(V + E)',
         explanation: 'This solution uses DFS to check if each connected component is bipartite. It is similar to the BFS approach but uses recursion instead of iteration.'
       },
       worst: {
         code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_NODES 501

// Structure for adjacency list
typedef struct Node {
    int vertex;
    struct Node* next;
} Node;

// Structure for graph
typedef struct {
    Node* adjList[MAX_NODES];
    int color[MAX_NODES];
    bool visited[MAX_NODES];
} Graph;

// Create a new node
Node* createNode(int vertex) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->vertex = vertex;
    newNode->next = NULL;
    return newNode;
}

// Add edge to graph
void addEdge(Graph* graph, int src, int dest) {
    Node* newNode = createNode(dest);
    newNode->next = graph->adjList[src];
    graph->adjList[src] = newNode;
    
    newNode = createNode(src);
    newNode->next = graph->adjList[dest];
    graph->adjList[dest] = newNode;
}

// Check if current coloring is valid
bool isValidColoring(Graph* graph, int n) {
    for (int i = 1; i <= n; i++) {
        Node* temp = graph->adjList[i];
        while (temp != NULL) {
            if (graph->color[i] == graph->color[temp->vertex]) {
                return false;
            }
            temp = temp->next;
        }
    }
    return true;
}

// Backtracking to find maximum number of colors
int backtrack(Graph* graph, int current, int n, int maxColors) {
    if (current > n) {
        if (isValidColoring(graph, n)) {
            int colorsUsed = 0;
            bool used[MAX_NODES] = {false};
            
            for (int i = 1; i <= n; i++) {
                if (!used[graph->color[i]]) {
                    used[graph->color[i]] = true;
                    colorsUsed++;
                }
            }
            return colorsUsed;
        }
        return 0;
    }
    
    int maxResult = 0;
    for (int color = 0; color < maxColors; color++) {
        graph->color[current] = color;
        int result = backtrack(graph, current + 1, n, maxColors);
        if (result > maxResult) {
            maxResult = result;
        }
    }
    
    return maxResult;
}

// Main function to find maximum number of groups
int magnificentSets(int n, int** edges, int edgesSize, int* edgesColSize) {
    Graph graph = {0};
    
    // Build adjacency list
    for (int i = 0; i < edgesSize; i++) {
        addEdge(&graph, edges[i][0], edges[i][1]);
    }
    
    // Try different numbers of colors
    for (int colors = 1; colors <= n; colors++) {
        int result = backtrack(&graph, 1, n, colors);
        if (result > 0) {
            return result;
        }
    }
    
    return -1;
}

int main() {
    // Test case 1
    int n1 = 4;
    int edges1[][2] = {{1,2}, {1,3}, {2,4}};
    int edgesSize1 = 3;
    
    int* edgesPtr1[3];
    for (int i = 0; i < 3; i++) {
        edgesPtr1[i] = edges1[i];
    }
    
    printf("Test 1: %d\\n", magnificentSets(n1, edgesPtr1, edgesSize1, NULL)); // Expected: 2
    
    return 0;
}`,
         timeComplexity: 'O(n^n)',
         spaceComplexity: 'O(n)',
         explanation: 'This solution uses backtracking to try all possible colorings. It is the least efficient approach and should be avoided for large graphs.'
       }
     }
   },
   {
     id: 'container-with-most-water',
     title: 'Container With Most Water',
     description: `Given n non-negative integers height where each represents a point at coordinate (i, height[i]), find two lines that together with the x-axis form a container that can hold the maximum amount of water.

Return the maximum amount of water a container can store.`,
     difficulty: 'Medium',
     category: ['Array', 'Two Pointers', 'Greedy'],
     input1: 'height = [1,8,6,2,5,4,8,3,7]',
     input2: 'height = [1,1]',
     explanation: `## Problem Statement

Given n non-negative integers height where each represents a point at coordinate (i, height[i]), find two lines that together with the x-axis form a container that can hold the maximum amount of water.

Return the maximum amount of water a container can store.

## Examples

### Example 1:
**Input:** height = [1,8,6,2,5,4,8,3,7]  
**Output:** 49  
**Explanation:** The maximum area is obtained by choosing height[1] = 8 and height[8] = 7. The area = min(8,7) * (8-1) = 7 * 7 = 49.

### Example 2:
**Input:** height = [1,1]  
**Output:** 1  
**Explanation:** The maximum area is obtained by choosing height[0] = 1 and height[1] = 1. The area = min(1,1) * (1-0) = 1 * 1 = 1.

### Example 3:
**Input:** height = [4,3,2,1,4]  
**Output:** 16  
**Explanation:** The maximum area is obtained by choosing height[0] = 4 and height[4] = 4. The area = min(4,4) * (4-0) = 4 * 4 = 16.

## Intuition

The key insight is that the area of water contained between two lines is determined by:
1. The height of the shorter line (water level cannot exceed the shorter line)
2. The distance between the two lines (width of the container)

The optimal approach is to use two pointers starting from the ends and move the pointer with the shorter height inward, as this gives us the best chance of finding a larger area.

## Approach

### Approach 1: Two Pointers (Optimal)
1. Initialize two pointers: left = 0, right = n-1
2. Calculate area = min(height[left], height[right]) * (right - left)
3. Update maxArea if current area is larger
4. Move the pointer with smaller height inward
5. Repeat until left < right

### Approach 2: Brute Force
1. Check all possible pairs of lines
2. Calculate area for each pair
3. Keep track of maximum area found

### Approach 3: Dynamic Programming (Less Efficient)
1. Use DP to store maximum area for each subarray
2. Build solution bottom-up

## Dry Run

Let's trace through Example 1: height = [1,8,6,2,5,4,8,3,7]

### Two Pointers Approach:
- left = 0, right = 8
- height[left] = 1, height[right] = 7
- area = min(1,7) * (8-0) = 1 * 8 = 8
- maxArea = 8
- Move left pointer (shorter height): left = 1

- left = 1, right = 8
- height[left] = 8, height[right] = 7
- area = min(8,7) * (8-1) = 7 * 7 = 49
- maxArea = 49
- Move right pointer (shorter height): right = 7

- left = 1, right = 7
- height[left] = 8, height[right] = 3
- area = min(8,3) * (7-1) = 3 * 6 = 18
- maxArea = 49 (unchanged)
- Move right pointer: right = 6

Continue until left >= right

## Key Insights

1. **Two Pointers**: Start from ends and move inward
2. **Greedy Choice**: Always move the pointer with smaller height
3. **Area Calculation**: area = min(height1, height2) * distance
4. **Optimal Substructure**: Each step considers the best possible area for current positions

## Edge Cases

1. **Two elements**: [1,1] → area = 1
2. **All same height**: [5,5,5] → area = 10
3. **Increasing heights**: [1,2,3,4,5] → area = 6
4. **Single element**: [5] → area = 0 (need at least 2 lines)`,
     output1: '49',
     output2: '1',
     constraints: `## Constraints
- n == height.length
- 2 <= n <= 10^5
- 0 <= height[i] <= 10^4`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>

int maxArea(int* height, int heightSize) {
    int left = 0;
    int right = heightSize - 1;
    int maxArea = 0;
    
    while (left < right) {
        int h = height[left] < height[right] ? height[left] : height[right];
        int area = h * (right - left);
        
        if (area > maxArea) {
            maxArea = area;
        }
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

int main() {
    int height1[] = {1,8,6,2,5,4,8,3,7};
    int size1 = 9;
    printf("Test 1: %d\\n", maxArea(height1, size1)); // Expected: 49
    
    int height2[] = {1,1};
    int size2 = 2;
    printf("Test 2: %d\\n", maxArea(height2, size2)); // Expected: 1
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This two-pointer approach is optimal. We start from both ends and move the pointer with smaller height inward, as this gives us the best chance of finding a larger area. Time complexity is O(n) and space complexity is O(1).'
         },
         average: {
           code: `#include <stdio.h>

int maxArea(int* height, int heightSize) {
    int maxArea = 0;
    
    for (int i = 0; i < heightSize; i++) {
        for (int j = i + 1; j < heightSize; j++) {
            int h = height[i] < height[j] ? height[i] : height[j];
            int area = h * (j - i);
            
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
    
    return maxArea;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This brute force approach checks all possible pairs of lines. It is simple but inefficient for large arrays.'
         },
         worst: {
           code: `#include <stdio.h>
#include <stdlib.h>

int maxArea(int* height, int heightSize) {
    if (heightSize < 2) return 0;
    
    int maxArea = 0;
    int* dp = (int*)malloc(heightSize * sizeof(int));
    
    // Initialize DP array
    for (int i = 0; i < heightSize; i++) {
        dp[i] = 0;
    }
    
    // Calculate maximum area for each position
    for (int i = 0; i < heightSize; i++) {
        for (int j = i + 1; j < heightSize; j++) {
            int h = height[i] < height[j] ? height[i] : height[j];
            int area = h * (j - i);
            
            if (area > dp[i]) {
                dp[i] = area;
            }
        }
        
        if (dp[i] > maxArea) {
            maxArea = dp[i];
        }
    }
    
    free(dp);
    return maxArea;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(n)',
           explanation: 'This DP approach uses extra space to store intermediate results but doesn\'t improve time complexity. It\'s less efficient than the two-pointer approach.'
         }
       }
     }
   },
   {
     id: 'longest-substring-without-repeating-characters',
     title: 'Longest Substring Without Repeating Characters',
     description: `Given a string s, find the length of the longest substring without repeating characters.

A substring is a contiguous sequence of characters within a string.`,
     difficulty: 'Medium',
     category: ['String', 'Hash Table', 'Sliding Window'],
     input1: 's = "abcabcbb"',
     input2: 's = "bbbbb"',
     explanation: `## Problem Statement

Given a string s, find the length of the longest substring without repeating characters.

A substring is a contiguous sequence of characters within a string.

## Examples

### Example 1:
**Input:** s = "abcabcbb"  
**Output:** 3  
**Explanation:** The answer is "abc", with the length of 3.

### Example 2:
**Input:** s = "bbbbb"  
**Output:** 1  
**Explanation:** The answer is "b", with the length of 1.

### Example 3:
**Input:** s = "pwwkew"  
**Output:** 3  
**Explanation:** The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

### Example 4:
**Input:** s = ""  
**Output:** 0  
**Explanation:** Empty string has length 0.

## Intuition

The key insight is to use a sliding window approach with a hash table to track the last occurrence of each character. When we encounter a repeating character, we move the start of the window to the position after the last occurrence of that character.

This ensures that our current window always contains unique characters.

## Approach

### Approach 1: Sliding Window with Hash Table (Optimal)
1. Use a hash table to store the last index of each character
2. Use two pointers: start and end of current window
3. When we encounter a character that's already in our window:
   - Move start pointer to max(start, lastIndex[char] + 1)
4. Update the hash table with current character's index
5. Update maxLength if current window is longer

### Approach 2: Sliding Window with Array
1. Use an array of size 128 (ASCII characters) instead of hash table
2. Same logic as Approach 1 but with array indexing

### Approach 3: Brute Force
1. Check all possible substrings
2. For each substring, check if it has unique characters
3. Keep track of maximum length found

## Dry Run

Let's trace through Example 1: s = "abcabcbb"

### Sliding Window Approach:
- start = 0, end = 0, char = 'a'
- lastIndex['a'] = 0, maxLength = 1

- start = 0, end = 1, char = 'b'
- lastIndex['b'] = 1, maxLength = 2

- start = 0, end = 2, char = 'c'
- lastIndex['c'] = 2, maxLength = 3

- start = 0, end = 3, char = 'a'
- 'a' already exists at index 0
- start = max(0, 0 + 1) = 1
- lastIndex['a'] = 3, maxLength = 3

- start = 1, end = 4, char = 'b'
- 'b' already exists at index 1
- start = max(1, 1 + 1) = 2
- lastIndex['b'] = 4, maxLength = 3

Continue until end reaches end of string

## Key Insights

1. **Sliding Window**: Maintain a window of unique characters
2. **Hash Table**: Track last occurrence of each character
3. **Window Adjustment**: Move start when duplicate is found
4. **Contiguous Substring**: Must be consecutive characters

## Edge Cases

1. **Empty string**: Return 0
2. **Single character**: Return 1
3. **All same characters**: Return 1
4. **No duplicates**: Return string length
5. **Unicode characters**: Consider extended ASCII or Unicode`,
     output1: '3',
     output2: '1',
     constraints: `## Constraints
- 0 <= s.length <= 5 * 10^4
- s consists of English letters, digits, symbols and spaces`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int n = strlen(s);
    int lastIndex[128]; // ASCII characters
    memset(lastIndex, -1, sizeof(lastIndex));
    
    int start = 0;
    int maxLength = 0;
    
    for (int end = 0; end < n; end++) {
        char currentChar = s[end];
        
        // If character is already in current window
        if (lastIndex[currentChar] >= start) {
            start = lastIndex[currentChar] + 1;
        }
        
        lastIndex[currentChar] = end;
        int currentLength = end - start + 1;
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    
    return maxLength;
}

int main() {
    char* s1 = "abcabcbb";
    printf("Test 1: %d\\n", lengthOfLongestSubstring(s1)); // Expected: 3
    
    char* s2 = "bbbbb";
    printf("Test 2: %d\\n", lengthOfLongestSubstring(s2)); // Expected: 1
    
    char* s3 = "pwwkew";
    printf("Test 3: %d\\n", lengthOfLongestSubstring(s3)); // Expected: 3
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This sliding window approach with array is optimal. We use an array to track the last occurrence of each character and adjust the window start when we encounter a duplicate. Time complexity is O(n) and space complexity is O(1) since we use a fixed-size array.'
         },
         average: {
           code: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int n = strlen(s);
    int maxLength = 0;
    
    for (int i = 0; i < n; i++) {
        int seen[128] = {0};
        int currentLength = 0;
        
        for (int j = i; j < n; j++) {
            if (seen[s[j]]) {
                break;
            }
            seen[s[j]] = 1;
            currentLength++;
        }
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    
    return maxLength;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This brute force approach checks all possible substrings starting from each position. It is simple but inefficient for long strings.'
         },
         worst: {
           code: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int n = strlen(s);
    int maxLength = 0;
    
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            // Check if substring from i to j has unique characters
            int unique = 1;
            int seen[128] = {0};
            
            for (int k = i; k <= j; k++) {
                if (seen[s[k]]) {
                    unique = 0;
                    break;
                }
                seen[s[k]] = 1;
            }
            
            if (unique && (j - i + 1) > maxLength) {
                maxLength = j - i + 1;
            }
        }
    }
    
    return maxLength;
}`,
           timeComplexity: 'O(n³)',
           spaceComplexity: 'O(1)',
           explanation: 'This approach checks all possible substrings and verifies uniqueness for each. It is the least efficient approach with cubic time complexity.'
         }
       }
     }
   },
   {
     id: 'reverse-string',
     title: 'Reverse String',
     description: `Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.`,
     difficulty: 'Easy',
     category: ['String', 'Two Pointers'],
     input1: 's = ["h","e","l","l","o"]',
     input2: 's = ["H","a","n","n","a","h"]',
     explanation: `## Problem Statement

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

## Examples

### Example 1:
**Input:** s = ["h","e","l","l","o"]  
**Output:** ["o","l","l","e","h"]  
**Explanation:** The string "hello" is reversed to "olleh".

### Example 2:
**Input:** s = ["H","a","n","n","a","h"]  
**Output:** ["h","a","n","n","a","H"]  
**Explanation:** The string "Hannah" is reversed to "hannaH".

### Example 3:
**Input:** s = ["a","b","c"]  
**Output:** ["c","b","a"]  
**Explanation:** The string "abc" is reversed to "cba".

## Intuition

The key insight is to use two pointers approach:
1. Start with one pointer at the beginning and another at the end
2. Swap the characters at these positions
3. Move the pointers inward until they meet in the middle

This approach modifies the array in-place without requiring extra memory.

## Approach

### Approach 1: Two Pointers (Optimal)
1. Initialize left pointer at index 0 and right pointer at index n-1
2. While left < right:
   - Swap characters at left and right positions
   - Increment left pointer
   - Decrement right pointer
3. The string is now reversed in-place

### Approach 2: Using Extra Array
1. Create a new array of the same size
2. Copy characters from end to beginning
3. Copy back to original array

### Approach 3: Recursive Approach
1. Base case: if left >= right, return
2. Swap characters at left and right positions
3. Recursively call with left+1 and right-1

## Dry Run

Let's trace through Example 1: s = ["h","e","l","l","o"]

### Two Pointers Approach:
- Initial: left = 0, right = 4
- Swap s[0] and s[4]: ["o","e","l","l","h"]
- left = 1, right = 3
- Swap s[1] and s[3]: ["o","l","l","e","h"]
- left = 2, right = 2
- Since left >= right, stop
- Result: ["o","l","l","e","h"]

## Key Insights

1. **In-place Modification**: No extra memory required
2. **Two Pointers**: Efficient O(n/2) swaps
3. **Symmetry**: Characters equidistant from center are swapped
4. **Termination**: Stop when pointers meet or cross

## Edge Cases

1. **Empty string**: No action needed
2. **Single character**: No action needed
3. **Even length**: Pointers meet at middle
4. **Odd length**: Pointers cross at middle`,
     output1: '["o","l","l","e","h"]',
     output2: '["h","a","n","n","a","H"]',
     constraints: `## Constraints
- 1 <= s.length <= 10^5
- s[i] is a printable ascii character`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>

void reverseString(char* s, int sSize) {
    int left = 0;
    int right = sSize - 1;
    
    while (left < right) {
        // Swap characters
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        left++;
        right--;
    }
}

int main() {
    char s1[] = "hello";
    int size1 = 5;
    printf("Original: %s\\n", s1);
    reverseString(s1, size1);
    printf("Reversed: %s\\n", s1); // Expected: olleh
    
    char s2[] = "Hannah";
    int size2 = 6;
    printf("Original: %s\\n", s2);
    reverseString(s2, size2);
    printf("Reversed: %s\\n", s2); // Expected: hannaH
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This two-pointer approach is optimal. We swap characters from both ends and move inward until the pointers meet. Time complexity is O(n) and space complexity is O(1) as we only use a temporary variable for swapping.'
         },
         average: {
           code: `#include <stdio.h>
#include <string.h>

void reverseString(char* s, int sSize) {
    char* temp = (char*)malloc(sSize * sizeof(char));
    
    // Copy characters in reverse order
    for (int i = 0; i < sSize; i++) {
        temp[i] = s[sSize - 1 - i];
    }
    
    // Copy back to original array
    for (int i = 0; i < sSize; i++) {
        s[i] = temp[i];
    }
    
    free(temp);
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(n)',
           explanation: 'This approach uses extra memory to store the reversed string temporarily, then copies it back. It is less efficient in terms of space complexity.'
         },
         worst: {
           code: `#include <stdio.h>

void reverseString(char* s, int sSize) {
    // Recursive approach
    if (sSize <= 1) return;
    
    // Swap first and last characters
    char temp = s[0];
    s[0] = s[sSize - 1];
    s[sSize - 1] = temp;
    
    // Recursively reverse the middle part
    reverseString(s + 1, sSize - 2);
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(n)',
           explanation: 'This recursive approach uses the call stack, which can lead to stack overflow for very long strings. It is less efficient than the iterative two-pointer approach.'
         }
       }
     }
   },
   {
     id: 'first-unique-character',
     title: 'First Unique Character in a String',
     description: `Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.`,
     difficulty: 'Easy',
     category: ['String', 'Hash Table'],
     input1: 's = "leetcode"',
     input2: 's = "loveleetcode"',
     explanation: `## Problem Statement

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

## Examples

### Example 1:
**Input:** s = "leetcode"  
**Output:** 0  
**Explanation:** The first non-repeating character is 'l' at index 0.

### Example 2:
**Input:** s = "loveleetcode"  
**Output:** 2  
**Explanation:** The first non-repeating character is 'v' at index 2.

### Example 3:
**Input:** s = "aabb"  
**Output:** -1  
**Explanation:** All characters repeat, so return -1.

### Example 4:
**Input:** s = "a"  
**Output:** 0  
**Explanation:** Single character is always unique.

## Intuition

The key insight is to use a hash table (or array) to count the frequency of each character, then scan the string again to find the first character with frequency 1.

This approach requires two passes:
1. First pass: Count frequency of each character
2. Second pass: Find first character with count = 1

## Approach

### Approach 1: Hash Table with Two Passes (Optimal)
1. Create a frequency array of size 26 (for lowercase letters) or 128 (for ASCII)
2. First pass: Count frequency of each character
3. Second pass: Find first character with frequency = 1
4. Return the index or -1 if not found

### Approach 2: Hash Table with Single Pass
1. Use a hash table to store character and its first occurrence
2. Use another hash table to track frequency
3. Scan once and maintain both maps
4. Find minimum index among characters with frequency = 1

### Approach 3: Brute Force
1. For each character, check if it appears again in the string
2. Return the first character that doesn't repeat

## Dry Run

Let's trace through Example 1: s = "leetcode"

### Hash Table Approach:
- Frequency array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
- First pass: count frequencies
  - 'l': freq[11] = 1
  - 'e': freq[4] = 1
  - 'e': freq[4] = 2
  - 't': freq[19] = 1
  - 'c': freq[2] = 1
  - 'o': freq[14] = 1
  - 'd': freq[3] = 1
  - 'e': freq[4] = 3
- Second pass: find first with freq = 1
  - s[0] = 'l', freq[11] = 1 ✓ (return 0)

## Key Insights

1. **Two Passes**: First count, then find
2. **Hash Table**: Efficient frequency counting
3. **Order Matters**: Must scan in original order to find "first" unique
4. **Edge Cases**: Handle empty string, single character, all repeating

## Edge Cases

1. **Empty string**: Return -1
2. **Single character**: Return 0
3. **All repeating**: Return -1
4. **Case sensitivity**: Usually lowercase letters only`,
     output1: '0',
     output2: '2',
     constraints: `## Constraints
- 1 <= s.length <= 10^5
- s consists of only lowercase English letters`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>
#include <string.h>

int firstUniqChar(char* s) {
    int freq[26] = {0};
    int n = strlen(s);
    
    // First pass: count frequency
    for (int i = 0; i < n; i++) {
        freq[s[i] - 'a']++;
    }
    
    // Second pass: find first unique
    for (int i = 0; i < n; i++) {
        if (freq[s[i] - 'a'] == 1) {
            return i;
        }
    }
    
    return -1;
}

int main() {
    char* s1 = "leetcode";
    printf("Test 1: %d\\n", firstUniqChar(s1)); // Expected: 0
    
    char* s2 = "loveleetcode";
    printf("Test 2: %d\\n", firstUniqChar(s2)); // Expected: 2
    
    char* s3 = "aabb";
    printf("Test 3: %d\\n", firstUniqChar(s3)); // Expected: -1
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This two-pass approach is optimal. We use a fixed-size array to count frequencies, then scan again to find the first unique character. Time complexity is O(n) and space complexity is O(1) since we use a fixed-size array.'
         },
         average: {
           code: `#include <stdio.h>
#include <string.h>

int firstUniqChar(char* s) {
    int n = strlen(s);
    
    for (int i = 0; i < n; i++) {
        int isUnique = 1;
        
        for (int j = 0; j < n; j++) {
            if (i != j && s[i] == s[j]) {
                isUnique = 0;
                break;
            }
        }
        
        if (isUnique) {
            return i;
        }
    }
    
    return -1;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This brute force approach checks each character against all others to find uniqueness. It is simple but inefficient for long strings.'
         },
         worst: {
           code: `#include <stdio.h>
#include <string.h>

int firstUniqChar(char* s) {
    int n = strlen(s);
    int freq[128] = {0}; // For all ASCII characters
    
    // Count frequency
    for (int i = 0; i < n; i++) {
        freq[s[i]]++;
    }
    
    // Find first unique
    for (int i = 0; i < n; i++) {
        if (freq[s[i]] == 1) {
            return i;
        }
    }
    
    return -1;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This approach uses a larger frequency array for all ASCII characters, which is unnecessary for lowercase letters only. It has the same complexity but uses more memory.'
         }
       }
     }
   },
   {
     id: 'valid-palindrome',
     title: 'Valid Palindrome',
     description: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.`,
     difficulty: 'Easy',
     category: ['String', 'Two Pointers'],
     input1: 's = "A man, a plan, a canal: Panama"',
     input2: 's = "race a car"',
     explanation: `## Problem Statement

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

## Examples

### Example 1:
**Input:** s = "A man, a plan, a canal: Panama"  
**Output:** true  
**Explanation:** After cleaning: "amanaplanacanalpanama" which reads the same forward and backward.

### Example 2:
**Input:** s = "race a car"  
**Output:** false  
**Explanation:** After cleaning: "raceacar" which is not a palindrome.

### Example 3:
**Input:** s = " "  
**Output:** true  
**Explanation:** After cleaning: "" (empty string) which is a palindrome.

### Example 4:
**Input:** s = "0P"  
**Output:** false  
**Explanation:** After cleaning: "0p" which is not a palindrome.

## Intuition

The key insight is to use two pointers approach after cleaning the string:
1. Convert to lowercase and remove non-alphanumeric characters
2. Use two pointers (left and right) to compare characters from both ends
3. Move inward until pointers meet, checking if characters match

## Approach

### Approach 1: Two Pointers with Cleaning (Optimal)
1. Convert string to lowercase
2. Remove all non-alphanumeric characters
3. Use two pointers to compare from both ends
4. Return true if all characters match, false otherwise

### Approach 2: Two Pointers In-place
1. Use two pointers without cleaning the string
2. Skip non-alphanumeric characters during comparison
3. Compare only alphanumeric characters

### Approach 3: Reverse and Compare
1. Clean the string (lowercase + alphanumeric only)
2. Create a reversed version
3. Compare original and reversed strings

## Dry Run

Let's trace through Example 1: s = "A man, a plan, a canal: Panama"

### Two Pointers with Cleaning:
- After cleaning: "amanaplanacanalpanama"
- left = 0, right = 19
- s[left] = 'a', s[right] = 'a' ✓
- left = 1, right = 18
- s[left] = 'm', s[right] = 'm' ✓
- Continue until left >= right
- All characters match ✓

### Two Pointers In-place:
- left = 0, right = 26
- s[left] = 'A' (alphanumeric), s[right] = 'a' (alphanumeric)
- Convert to lowercase: 'a' == 'a' ✓
- left = 1, right = 25
- s[left] = ' ' (skip), left = 2
- s[left] = 'm', s[right] = 'm' ✓
- Continue until left >= right

## Key Insights

1. **Case Insensitive**: Convert to lowercase before comparison
2. **Alphanumeric Only**: Ignore spaces, punctuation, etc.
3. **Two Pointers**: Efficient O(n) comparison
4. **Edge Cases**: Empty string, single character, all non-alphanumeric

## Edge Cases

1. **Empty string**: Return true
2. **Single character**: Return true
3. **All non-alphanumeric**: Return true (empty after cleaning)
4. **Mixed case**: "RaceCar" should return true
5. **Numbers**: "12321" should return true`,
     output1: 'true',
     output2: 'false',
     constraints: `## Constraints
- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isPalindrome(char* s) {
    int left = 0;
    int right = strlen(s) - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters from left
        while (left < right && !isalnum(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric characters from right
        while (left < right && !isalnum(s[right])) {
            right--;
        }
        
        // Compare characters (case-insensitive)
        if (tolower(s[left]) != tolower(s[right])) {
            return 0; // false
        }
        
        left++;
        right--;
    }
    
    return 1; // true
}

int main() {
    char* s1 = "A man, a plan, a canal: Panama";
    printf("Test 1: %s\\n", isPalindrome(s1) ? "true" : "false"); // Expected: true
    
    char* s2 = "race a car";
    printf("Test 2: %s\\n", isPalindrome(s2) ? "true" : "false"); // Expected: false
    
    char* s3 = " ";
    printf("Test 3: %s\\n", isPalindrome(s3) ? "true" : "false"); // Expected: true
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This two-pointer approach is optimal. We skip non-alphanumeric characters and compare only valid characters from both ends. Time complexity is O(n) and space complexity is O(1) as we modify the string in-place.'
         },
         average: {
           code: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isPalindrome(char* s) {
    int n = strlen(s);
    char* cleaned = (char*)malloc((n + 1) * sizeof(char));
    int j = 0;
    
    // Clean the string
    for (int i = 0; i < n; i++) {
        if (isalnum(s[i])) {
            cleaned[j++] = tolower(s[i]);
        }
    }
    cleaned[j] = '\\0';
    
    // Check if palindrome
    int left = 0;
    int right = j - 1;
    
    while (left < right) {
        if (cleaned[left] != cleaned[right]) {
            free(cleaned);
            return 0; // false
        }
        left++;
        right--;
    }
    
    free(cleaned);
    return 1; // true
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(n)',
           explanation: 'This approach creates a cleaned version of the string first, then checks if it is a palindrome. It uses extra memory but is easier to understand.'
         },
         worst: {
           code: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isPalindrome(char* s) {
    int n = strlen(s);
    
    // Create reversed string
    char* reversed = (char*)malloc((n + 1) * sizeof(char));
    int j = 0;
    
    // Build reversed string (alphanumeric only, lowercase)
    for (int i = n - 1; i >= 0; i--) {
        if (isalnum(s[i])) {
            reversed[j++] = tolower(s[i]);
        }
    }
    reversed[j] = '\\0';
    
    // Build original cleaned string
    char* original = (char*)malloc((n + 1) * sizeof(char));
    j = 0;
    
    for (int i = 0; i < n; i++) {
        if (isalnum(s[i])) {
            original[j++] = tolower(s[i]);
        }
    }
    original[j] = '\\0';
    
    // Compare strings
    int result = strcmp(original, reversed) == 0;
    
    free(reversed);
    free(original);
    return result;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(n)',
           explanation: 'This approach creates both original and reversed cleaned strings, then compares them. It uses more memory and is less efficient than the two-pointer approach.'
         }
       }
     }
   },
   {
     id: 'remove-duplicates-from-sorted-list',
     title: 'Remove Duplicates from Sorted List',
     description: `Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.`,
     difficulty: 'Easy',
     category: ['Linked List', 'Two Pointers'],
     input1: 'head = [1,1,2]',
     input2: 'head = [1,1,2,3,3]',
     explanation: `## Problem Statement

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

## Examples

### Example 1:
**Input:** head = [1,1,2]  
**Output:** [1,2]  
**Explanation:** The linked list becomes 1->2 after removing duplicates.

### Example 2:
**Input:** head = [1,1,2,3,3]  
**Output:** [1,2,3]  
**Explanation:** The linked list becomes 1->2->3 after removing duplicates.

### Example 3:
**Input:** head = [1,1,1]  
**Output:** [1]  
**Explanation:** The linked list becomes 1 after removing all duplicates.

## Intuition

Since the linked list is already sorted, duplicates will always be adjacent. We can use a single pointer to traverse the list and remove duplicates by adjusting the next pointers.

The key insight is:
1. If current node's value equals next node's value, skip the next node
2. If they are different, move to the next node
3. Continue until we reach the end of the list

## Approach

### Approach 1: Single Pointer (Optimal)
1. Start with current pointer at head
2. While current and current->next are not null:
   - If current->val == current->next->val, skip the next node
   - Else, move current to next node
3. Return the modified list

### Approach 2: Two Pointers
1. Use prev and curr pointers
2. If curr->val == curr->next->val, update prev->next to skip curr->next
3. Else, move both pointers forward

### Approach 3: Recursive Approach
1. Base case: if head is null or head->next is null, return head
2. If head->val == head->next->val, return recursive call on head->next
3. Else, head->next = recursive call on head->next, return head

## Dry Run

Let's trace through Example 1: head = [1,1,2]

### Single Pointer Approach:
- Initial: current = 1, list = 1->1->2
- current->val (1) == current->next->val (1): skip next node
- current->next = current->next->next: list = 1->2
- current = current->next: current = 2
- current->next is null: stop
- Result: 1->2

### Example 2: head = [1,1,2,3,3]
- Initial: current = 1, list = 1->1->2->3->3
- current->val (1) == current->next->val (1): skip next node
- list = 1->2->3->3
- current = current->next: current = 2
- current->val (2) != current->next->val (3): move to next
- current = current->next: current = 3
- current->val (3) == current->next->val (3): skip next node
- list = 1->2->3
- current->next is null: stop
- Result: 1->2->3

## Key Insights

1. **Sorted Property**: Since list is sorted, duplicates are always adjacent
2. **In-place Modification**: We modify the list structure by adjusting pointers
3. **Single Pass**: Only one traversal is needed
4. **Memory Efficient**: No extra space required

## Edge Cases

1. **Empty list**: Return null
2. **Single node**: Return the node as is
3. **All duplicates**: Return single node
4. **No duplicates**: Return list as is
5. **Duplicates at end**: Handle properly by stopping at null

## Time and Space Complexity

- **Time Complexity**: O(n) - we visit each node at most once
- **Space Complexity**: O(1) - we only use a constant amount of extra space`,
     output1: '[1,2]',
     output2: '[1,2,3]',
     constraints: `## Constraints
- The number of nodes in the list is in the range [0, 300]
- -100 <= Node.val <= 100
- The list is guaranteed to be sorted in ascending order`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* deleteDuplicates(struct ListNode* head) {
    if (head == NULL || head->next == NULL) {
        return head;
    }
    
    struct ListNode* current = head;
    
    while (current->next != NULL) {
        if (current->val == current->next->val) {
            // Skip the duplicate node
            struct ListNode* temp = current->next;
            current->next = current->next->next;
            free(temp);
        } else {
            current = current->next;
        }
    }
    
    return head;
}

// Helper function to create a new node
struct ListNode* createNode(int val) {
    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

// Helper function to print the list
void printList(struct ListNode* head) {
    struct ListNode* current = head;
    while (current != NULL) {
        printf("%d ", current->val);
        current = current->next;
    }
    printf("\\n");
}

int main() {
    // Test case 1: [1,1,2]
    struct ListNode* head1 = createNode(1);
    head1->next = createNode(1);
    head1->next->next = createNode(2);
    
    printf("Original: ");
    printList(head1);
    
    head1 = deleteDuplicates(head1);
    printf("After removing duplicates: ");
    printList(head1); // Expected: 1 2
    
    // Test case 2: [1,1,2,3,3]
    struct ListNode* head2 = createNode(1);
    head2->next = createNode(1);
    head2->next->next = createNode(2);
    head2->next->next->next = createNode(3);
    head2->next->next->next->next = createNode(3);
    
    printf("\\nOriginal: ");
    printList(head2);
    
    head2 = deleteDuplicates(head2);
    printf("After removing duplicates: ");
    printList(head2); // Expected: 1 2 3
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This single pointer approach is optimal. We traverse the list once and remove duplicates by adjusting pointers. Time complexity is O(n) and space complexity is O(1) as we only use a constant amount of extra space.'
         },
         average: {
           code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* deleteDuplicates(struct ListNode* head) {
    if (head == NULL || head->next == NULL) {
        return head;
    }
    
    struct ListNode* prev = head;
    struct ListNode* curr = head->next;
    
    while (curr != NULL) {
        if (prev->val == curr->val) {
            // Remove duplicate
            prev->next = curr->next;
            free(curr);
            curr = prev->next;
        } else {
            prev = curr;
            curr = curr->next;
        }
    }
    
    return head;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This two-pointer approach uses prev and curr pointers to track the previous and current nodes. It is slightly more complex but achieves the same result.'
         },
         worst: {
           code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* deleteDuplicates(struct ListNode* head) {
    if (head == NULL || head->next == NULL) {
        return head;
    }
    
    if (head->val == head->next->val) {
        // Skip current head and recursively process the rest
        return deleteDuplicates(head->next);
    } else {
        // Keep current head and recursively process the rest
        head->next = deleteDuplicates(head->next);
        return head;
    }
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(n)',
           explanation: 'This recursive approach uses the call stack, which can lead to stack overflow for very long lists. It is less efficient than the iterative approach.'
         }
       }
     }
   },
   {
     id: 'merge-two-sorted-lists',
     title: 'Merge Two Sorted Lists',
     description: `You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
     difficulty: 'Easy',
     category: ['Linked List', 'Two Pointers'],
     input1: 'list1 = [1,2,4], list2 = [1,3,4]',
     input2: 'list1 = [], list2 = [0]',
     explanation: `## Problem Statement

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Examples

### Example 1:
**Input:** list1 = [1,2,4], list2 = [1,3,4]  
**Output:** [1,1,2,3,4,4]  
**Explanation:** The merged list contains all nodes from both lists in sorted order.

### Example 2:
**Input:** list1 = [], list2 = [0]  
**Output:** [0]  
**Explanation:** Since list1 is empty, the merged list is just list2.

### Example 3:
**Input:** list1 = [], list2 = []  
**Output:** []  
**Explanation:** Both lists are empty, so the merged list is also empty.

### Example 4:
**Input:** list1 = [1,3,5], list2 = [2,4,6]  
**Output:** [1,2,3,4,5,6]  
**Explanation:** The lists are merged in alternating order.

## Intuition

Since both lists are already sorted, we can merge them efficiently by comparing the values at the current positions of both lists and choosing the smaller one to add to our result.

The key insight is:
1. Compare the current nodes of both lists
2. Choose the smaller value and move that pointer forward
3. Continue until one list is exhausted
4. Append the remaining nodes from the other list

## Approach

### Approach 1: Iterative with Dummy Node (Optimal)
1. Create a dummy node to simplify the merging process
2. Use a current pointer to build the merged list
3. While both lists have nodes:
   - Compare the values and choose the smaller one
   - Attach it to the current pointer
   - Move the chosen list's pointer forward
4. Attach the remaining nodes from the non-empty list
5. Return dummy->next

### Approach 2: Recursive Approach
1. Base case: if one list is null, return the other
2. Compare the heads of both lists
3. Choose the smaller head and recursively merge the rest
4. Return the chosen head with its next pointing to the merged result

### Approach 3: In-place Merging
1. Use one list as the base and merge the other into it
2. More complex but saves some memory

## Dry Run

Let's trace through Example 1: list1 = [1,2,4], list2 = [1,3,4]

### Iterative Approach:
- Initial: dummy = 0, current = dummy
- list1 = 1, list2 = 1: choose 1 from list1
- current->next = list1, current = 1, list1 = 2
- list1 = 2, list2 = 1: choose 1 from list2
- current->next = list2, current = 1, list2 = 3
- list1 = 2, list2 = 3: choose 2 from list1
- current->next = list1, current = 2, list1 = 4
- list1 = 4, list2 = 3: choose 3 from list2
- current->next = list2, current = 3, list2 = 4
- list1 = 4, list2 = 4: choose 4 from list1
- current->next = list1, current = 4, list1 = null
- list1 is null, attach remaining list2: current->next = 4
- Result: 1->1->2->3->4->4

## Key Insights

1. **Sorted Property**: Both lists are sorted, so we can merge efficiently
2. **Dummy Node**: Using a dummy node simplifies the merging process
3. **Pointer Manipulation**: We reuse existing nodes by adjusting pointers
4. **Remaining Nodes**: After one list is exhausted, we can directly attach the remaining nodes

## Edge Cases

1. **Empty lists**: Handle null inputs properly
2. **One empty list**: Return the non-empty list
3. **Different lengths**: Handle when one list is longer than the other
4. **Equal values**: Handle when both lists have the same value

## Time and Space Complexity

- **Time Complexity**: O(n + m) - we visit each node exactly once
- **Space Complexity**: O(1) - we only use a constant amount of extra space (dummy node)`,
     output1: '[1,1,2,3,4,4]',
     output2: '[0]',
     constraints: `## Constraints
- The number of nodes in both lists is in the range [0, 50]
- -100 <= Node.val <= 100
- Both list1 and list2 are sorted in non-decreasing order`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    // Create a dummy node to simplify merging
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* current = &dummy;
    
    // Merge while both lists have nodes
    while (list1 != NULL && list2 != NULL) {
        if (list1->val <= list2->val) {
            current->next = list1;
            list1 = list1->next;
        } else {
            current->next = list2;
            list2 = list2->next;
        }
        current = current->next;
    }
    
    // Attach remaining nodes from list1 or list2
    if (list1 != NULL) {
        current->next = list1;
    } else {
        current->next = list2;
    }
    
    return dummy.next;
}

// Helper function to create a new node
struct ListNode* createNode(int val) {
    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

// Helper function to print the list
void printList(struct ListNode* head) {
    struct ListNode* current = head;
    while (current != NULL) {
        printf("%d ", current->val);
        current = current->next;
    }
    printf("\\n");
}

int main() {
    // Test case 1: list1 = [1,2,4], list2 = [1,3,4]
    struct ListNode* list1 = createNode(1);
    list1->next = createNode(2);
    list1->next->next = createNode(4);
    
    struct ListNode* list2 = createNode(1);
    list2->next = createNode(3);
    list2->next->next = createNode(4);
    
    printf("List1: ");
    printList(list1);
    printf("List2: ");
    printList(list2);
    
    struct ListNode* merged = mergeTwoLists(list1, list2);
    printf("Merged: ");
    printList(merged); // Expected: 1 1 2 3 4 4
    
    // Test case 2: list1 = [], list2 = [0]
    struct ListNode* list3 = NULL;
    struct ListNode* list4 = createNode(0);
    
    printf("\\nList1: (empty)\\n");
    printf("List2: ");
    printList(list4);
    
    struct ListNode* merged2 = mergeTwoLists(list3, list4);
    printf("Merged: ");
    printList(merged2); // Expected: 0
    
    return 0;
}`,
           timeComplexity: 'O(n + m)',
           spaceComplexity: 'O(1)',
           explanation: 'This iterative approach with a dummy node is optimal. We traverse both lists once and merge them by comparing values. Time complexity is O(n + m) and space complexity is O(1) as we only use a dummy node.'
         },
         average: {
           code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    // Base cases
    if (list1 == NULL) return list2;
    if (list2 == NULL) return list1;
    
    // Recursive approach
    if (list1->val <= list2->val) {
        list1->next = mergeTwoLists(list1->next, list2);
        return list1;
    } else {
        list2->next = mergeTwoLists(list1, list2->next);
        return list2;
    }
}`,
           timeComplexity: 'O(n + m)',
           spaceComplexity: 'O(n + m)',
           explanation: 'This recursive approach is elegant but uses the call stack, which can lead to stack overflow for very long lists. Space complexity is O(n + m) due to recursion depth.'
         },
         worst: {
           code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    if (list1 == NULL) return list2;
    if (list2 == NULL) return list1;
    
    // Choose list1 as the base list
    struct ListNode* head = list1;
    struct ListNode* prev = NULL;
    
    while (list1 != NULL && list2 != NULL) {
        if (list1->val <= list2->val) {
            prev = list1;
            list1 = list1->next;
        } else {
            // Insert list2 node before list1 node
            struct ListNode* temp = list2->next;
            list2->next = list1;
            
            if (prev == NULL) {
                head = list2;
            } else {
                prev->next = list2;
            }
            
            prev = list2;
            list2 = temp;
        }
    }
    
    // If list2 still has nodes, attach them
    if (list2 != NULL) {
        if (prev == NULL) {
            head = list2;
        } else {
            prev->next = list2;
        }
    }
    
    return head;
}`,
           timeComplexity: 'O(n + m)',
           spaceComplexity: 'O(1)',
           explanation: 'This in-place merging approach is more complex and harder to understand. It modifies one list directly but achieves the same result with O(1) space complexity.'
         }
       }
     }
   },
   {
     id: 'palindrome-linked-list',
     title: 'Palindrome Linked List',
     description: `Given the head of a singly linked list, return true if it is a palindrome or false otherwise.`,
     difficulty: 'Easy',
     category: ['Linked List', 'Two Pointers'],
     input1: 'head = [1,2,2,1]',
     input2: 'head = [1,2]',
     explanation: `## Problem Statement

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

A palindrome is a sequence that reads the same backward as forward.

## Examples

### Example 1:
**Input:** head = [1,2,2,1]  
**Output:** true  
**Explanation:** The linked list reads the same forward and backward: 1->2->2->1.

### Example 2:
**Input:** head = [1,2]  
**Output:** false  
**Explanation:** The linked list reads 1->2 forward but 2->1 backward, so it is not a palindrome.

### Example 3:
**Input:** head = [1]  
**Output:** true  
**Explanation:** A single node is always a palindrome.

### Example 4:
**Input:** head = [1,2,3,2,1]  
**Output:** true  
**Explanation:** The linked list reads the same forward and backward: 1->2->3->2->1.

## Intuition

To check if a linked list is a palindrome, we need to compare the first half with the reversed second half. Since we can't easily access elements from the end, we need to:

1. Find the middle of the list
2. Reverse the second half
3. Compare the first half with the reversed second half
4. Restore the original list structure (optional)

## Approach

### Approach 1: Find Middle + Reverse Second Half (Optimal)
1. Find the middle of the linked list using fast and slow pointers
2. Reverse the second half of the list
3. Compare the first half with the reversed second half
4. Optionally restore the original list structure

### Approach 2: Convert to Array
1. Convert the linked list to an array
2. Use two pointers to check if the array is a palindrome
3. This approach uses extra space but is simpler

### Approach 3: Recursive Approach
1. Use recursion to reach the end of the list
2. Compare the first node with the last node
3. Move inward recursively
4. More complex but elegant

## Dry Run

Let's trace through Example 1: head = [1,2,2,1]

### Find Middle + Reverse Approach:
- Find middle: slow = 2, fast = null (reached end)
- Middle is at node with value 2
- Reverse second half: 2->1 becomes 1->2
- List becomes: 1->2->1->2 (second half reversed)
- Compare first half (1->2) with reversed second half (1->2)
- They match, so it's a palindrome

### Example 2: head = [1,2]
- Find middle: slow = 2, fast = null
- Middle is at node with value 2
- Reverse second half: 2 becomes 2 (single node)
- List becomes: 1->2
- Compare first half (1) with reversed second half (2)
- They don't match, so it's not a palindrome

## Key Insights

1. **Middle Finding**: Use fast and slow pointers to find the middle efficiently
2. **Reversing**: Reverse the second half to make comparison possible
3. **In-place**: The optimal solution modifies the list structure temporarily
4. **Restoration**: Optionally restore the original list structure after checking

## Edge Cases

1. **Empty list**: Return true (empty list is considered palindrome)
2. **Single node**: Return true
3. **Two nodes**: Compare the two values
4. **Odd length**: Middle element doesn't need to be compared
5. **Even length**: Compare all elements

## Time and Space Complexity

- **Time Complexity**: O(n) - we traverse the list at most 3 times (find middle, reverse, compare)
- **Space Complexity**: O(1) - we only use a constant amount of extra space`,
     output1: 'true',
     output2: 'false',
     constraints: `## Constraints
- The number of nodes in the list is in the range [1, 10^5]
- 0 <= Node.val <= 9`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

// Function to reverse a linked list
struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* current = head;
    
    while (current != NULL) {
        struct ListNode* next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}

bool isPalindrome(struct ListNode* head) {
    if (head == NULL || head->next == NULL) {
        return true;
    }
    
    // Find the middle of the list using fast and slow pointers
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    
    while (fast->next != NULL && fast->next->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    // Reverse the second half
    struct ListNode* secondHalf = reverseList(slow->next);
    struct ListNode* firstHalf = head;
    
    // Compare the first half with the reversed second half
    while (secondHalf != NULL) {
        if (firstHalf->val != secondHalf->val) {
            return false;
        }
        firstHalf = firstHalf->next;
        secondHalf = secondHalf->next;
    }
    
    return true;
}

// Helper function to create a new node
struct ListNode* createNode(int val) {
    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

// Helper function to print the list
void printList(struct ListNode* head) {
    struct ListNode* current = head;
    while (current != NULL) {
        printf("%d ", current->val);
        current = current->next;
    }
    printf("\\n");
}

int main() {
    // Test case 1: [1,2,2,1] - should be true
    struct ListNode* head1 = createNode(1);
    head1->next = createNode(2);
    head1->next->next = createNode(2);
    head1->next->next->next = createNode(1);
    
    printf("List 1: ");
    printList(head1);
    printf("Is palindrome: %s\\n", isPalindrome(head1) ? "true" : "false");
    
    // Test case 2: [1,2] - should be false
    struct ListNode* head2 = createNode(1);
    head2->next = createNode(2);
    
    printf("\\nList 2: ");
    printList(head2);
    printf("Is palindrome: %s\\n", isPalindrome(head2) ? "true" : "false");
    
    // Test case 3: [1] - should be true
    struct ListNode* head3 = createNode(1);
    
    printf("\\nList 3: ");
    printList(head3);
    printf("Is palindrome: %s\\n", isPalindrome(head3) ? "true" : "false");
    
    return 0;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(1)',
           explanation: 'This approach finds the middle using fast and slow pointers, reverses the second half, and compares with the first half. It is optimal with O(n) time and O(1) space complexity.'
         },
         average: {
           code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

bool isPalindrome(struct ListNode* head) {
    if (head == NULL) return true;
    
    // Convert linked list to array
    int* arr = (int*)malloc(100000 * sizeof(int));
    int size = 0;
    struct ListNode* current = head;
    
    while (current != NULL) {
        arr[size++] = current->val;
        current = current->next;
    }
    
    // Check if array is palindrome
    int left = 0;
    int right = size - 1;
    
    while (left < right) {
        if (arr[left] != arr[right]) {
            free(arr);
            return false;
        }
        left++;
        right--;
    }
    
    free(arr);
    return true;
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(n)',
           explanation: 'This approach converts the linked list to an array first, then checks if the array is a palindrome. It uses extra space but is simpler to understand.'
         },
         worst: {
           code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

// Global variable to store the front pointer
struct ListNode* front;

bool isPalindromeRecursive(struct ListNode* current) {
    if (current == NULL) {
        return true;
    }
    
    // Recursively check the rest of the list
    if (!isPalindromeRecursive(current->next)) {
        return false;
    }
    
    // Compare current node with front node
    if (current->val != front->val) {
        return false;
    }
    
    // Move front pointer forward
    front = front->next;
    return true;
}

bool isPalindrome(struct ListNode* head) {
    front = head;
    return isPalindromeRecursive(head);
}`,
           timeComplexity: 'O(n)',
           spaceComplexity: 'O(n)',
           explanation: 'This recursive approach uses the call stack to reach the end of the list, then compares nodes as it unwinds. It is elegant but uses O(n) space due to recursion depth.'
         }
       }
     }
   },
   {
     id: 'bubble-sort',
     title: 'Bubble Sort Implementation',
     description: `Implement the bubble sort algorithm to sort an array of integers in ascending order. Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.`,
     difficulty: 'Easy',
     category: ['Array', 'Sorting'],
     input1: 'arr = [64, 34, 25, 12, 22, 11, 90]',
     input2: 'arr = [5, 2, 4, 6, 1, 3]',
     explanation: `## Problem Statement

Implement the bubble sort algorithm to sort an array of integers in ascending order. Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

## Examples

### Example 1:
**Input:** arr = [64, 34, 25, 12, 22, 11, 90]  
**Output:** [11, 12, 22, 25, 34, 64, 90]  
**Explanation:** After applying bubble sort, the array is sorted in ascending order.

### Example 2:
**Input:** arr = [5, 2, 4, 6, 1, 3]  
**Output:** [1, 2, 3, 4, 5, 6]  
**Explanation:** The array is sorted from smallest to largest.

### Example 3:
**Input:** arr = [1]  
**Output:** [1]  
**Explanation:** Single element array is already sorted.

### Example 4:
**Input:** arr = [3, 3, 3, 3]  
**Output:** [3, 3, 3, 3]  
**Explanation:** Array with duplicate elements remains the same after sorting.

## Intuition

Bubble sort works by repeatedly stepping through the list and swapping adjacent elements if they are in the wrong order. The algorithm gets its name because smaller elements "bubble" to the top of the list.

Key insights:
1. After each pass, the largest unsorted element "bubbles up" to its correct position
2. We need n-1 passes to sort n elements
3. In each pass, we compare adjacent elements and swap if necessary
4. We can optimize by stopping early if no swaps occur in a pass

## Approach

### Approach 1: Standard Bubble Sort
1. Use two nested loops
2. Outer loop runs n-1 times (n-1 passes)
3. Inner loop compares adjacent elements and swaps if needed
4. After each pass, the largest element is in its correct position

### Approach 2: Optimized Bubble Sort
1. Add a flag to track if any swap occurred
2. If no swap occurs in a pass, the array is sorted
3. This optimization helps for partially sorted arrays

### Approach 3: Two-Way Bubble Sort (Cocktail Sort)
1. Sort in both directions (left to right and right to left)
2. This can be more efficient for some cases

## Dry Run

Let's trace through Example 1: arr = [64, 34, 25, 12, 22, 11, 90]

### Pass 1:
- Compare 64, 34: 64 > 34, swap → [34, 64, 25, 12, 22, 11, 90]
- Compare 64, 25: 64 > 25, swap → [34, 25, 64, 12, 22, 11, 90]
- Compare 64, 12: 64 > 12, swap → [34, 25, 12, 64, 22, 11, 90]
- Compare 64, 22: 64 > 22, swap → [34, 25, 12, 22, 64, 11, 90]
- Compare 64, 11: 64 > 11, swap → [34, 25, 12, 22, 11, 64, 90]
- Compare 64, 90: 64 < 90, no swap → [34, 25, 12, 22, 11, 64, 90]
- After Pass 1: [34, 25, 12, 22, 11, 64, 90] (90 is in correct position)

### Pass 2:
- Continue comparing and swapping...
- After Pass 2: [25, 12, 22, 11, 34, 64, 90] (64 is in correct position)

### Continue until sorted:
- Final result: [11, 12, 22, 25, 34, 64, 90]

## Key Insights

1. **Stable Sort**: Bubble sort is a stable sorting algorithm
2. **In-place**: No extra space required (O(1) space complexity)
3. **Adaptive**: Can be optimized to stop early if array is sorted
4. **Simple**: Easy to understand and implement
5. **Inefficient**: O(n²) time complexity makes it slow for large arrays

## Edge Cases

1. **Empty array**: Return empty array
2. **Single element**: Return the element as is
3. **Already sorted**: Should work correctly
4. **Reverse sorted**: Worst case scenario
5. **Duplicate elements**: Should handle correctly

## Time and Space Complexity

- **Time Complexity**: O(n²) in worst and average case, O(n) in best case (if optimized)
- **Space Complexity**: O(1) - in-place sorting algorithm`,
     output1: '[11, 12, 22, 25, 34, 64, 90]',
     output2: '[1, 2, 3, 4, 5, 6]',
     constraints: `## Constraints
- 1 <= arr.length <= 10^4
- -10^4 <= arr[i] <= 10^4
- All elements are integers`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    int swapped;
    
    for (i = 0; i < n-1; i++) {
        swapped = 0; // Flag to optimize
        
        // Last i elements are already in place
        for (j = 0; j < n-i-1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j+1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = 1;
            }
        }
        
        // If no swapping occurred, array is sorted
        if (swapped == 0) {
            break;
        }
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr1[] = {64, 34, 25, 12, 22, 11, 90};
    int n1 = sizeof(arr1)/sizeof(arr1[0]);
    
    printf("Original array: ");
    printArray(arr1, n1);
    
    bubbleSort(arr1, n1);
    
    printf("Sorted array: ");
    printArray(arr1, n1);
    
    // Test case 2
    int arr2[] = {5, 2, 4, 6, 1, 3};
    int n2 = sizeof(arr2)/sizeof(arr2[0]);
    
    printf("\\nOriginal array: ");
    printArray(arr2, n2);
    
    bubbleSort(arr2, n2);
    
    printf("Sorted array: ");
    printArray(arr2, n2);
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This optimized bubble sort implementation includes a flag to detect if any swaps occurred. If no swaps happen in a pass, the array is sorted and we can exit early. This gives O(n) time complexity for already sorted arrays.'
         },
         average: {
           code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    
    for (i = 0; i < n-1; i++) {
        // Last i elements are already in place
        for (j = 0; j < n-i-1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j+1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Original array: ");
    printArray(arr, n);
    
    bubbleSort(arr, n);
    
    printf("Sorted array: ");
    printArray(arr, n);
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This is the standard bubble sort implementation without optimization. It always performs n-1 passes regardless of whether the array is already sorted or not.'
         },
         worst: {
           code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    
    // Always perform n-1 passes
    for (i = 0; i < n-1; i++) {
        printf("Pass %d: ", i+1);
        for (j = 0; j < n; j++) {
            printf("%d ", arr[j]);
        }
        printf("\\n");
        
        // Compare and swap adjacent elements
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Original array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n\\n");
    
    bubbleSort(arr, n);
    
    printf("\\nFinal sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This implementation includes debug printing to show each pass, making it less efficient. It also doesn\'t use any optimization flags, so it always performs the maximum number of comparisons.'
         }
       }
     }
   },
   {
     id: 'selection-sort',
     title: 'Selection Sort Implementation',
     description: `Implement the selection sort algorithm to sort an array of integers in ascending order. Selection sort divides the array into a sorted and unsorted region, repeatedly selecting the smallest element from the unsorted region and placing it at the end of the sorted region.`,
     difficulty: 'Easy',
     category: ['Array', 'Sorting'],
     input1: 'arr = [64, 25, 12, 22, 11]',
     input2: 'arr = [5, 2, 4, 6, 1, 3]',
     explanation: `## Problem Statement

Implement the selection sort algorithm to sort an array of integers in ascending order. Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items.

## Examples

### Example 1:
**Input:** arr = [64, 25, 12, 22, 11]  
**Output:** [11, 12, 22, 25, 64]  
**Explanation:** 
- Pass 1: Find minimum (11) and swap with first element → [11, 25, 12, 22, 64]
- Pass 2: Find minimum in remaining (12) and swap with second element → [11, 12, 25, 22, 64]
- Pass 3: Find minimum in remaining (22) and swap with third element → [11, 12, 22, 25, 64]
- Pass 4: Find minimum in remaining (25) and swap with fourth element → [11, 12, 22, 25, 64]
- Pass 5: Last element (64) is already in place

### Example 2:
**Input:** arr = [5, 2, 4, 6, 1, 3]  
**Output:** [1, 2, 3, 4, 5, 6]  
**Explanation:** The array is sorted by repeatedly finding the minimum element.

### Example 3:
**Input:** arr = [1]  
**Output:** [1]  
**Explanation:** Single element array is already sorted.

### Example 4:
**Input:** arr = [3, 3, 3, 3]  
**Output:** [3, 3, 3, 3]  
**Explanation:** Array with duplicate elements remains the same after sorting.

## Intuition

Selection sort works by dividing the array into two parts:
1. **Sorted region**: Initially empty, grows from left to right
2. **Unsorted region**: Initially contains all elements, shrinks from left to right

In each iteration:
1. Find the minimum element in the unsorted region
2. Swap it with the first element of the unsorted region
3. Expand the sorted region by one element
4. Repeat until the unsorted region is empty

## Approach

### Approach 1: Standard Selection Sort
1. Use two nested loops
2. Outer loop runs n-1 times (we need n-1 swaps)
3. Inner loop finds the minimum element in the unsorted region
4. Swap the minimum element with the first element of unsorted region

### Approach 2: Selection Sort with Index Tracking
1. Keep track of the minimum element's index instead of value
2. This can be more efficient for some cases

### Approach 3: Bidirectional Selection Sort
1. Find both minimum and maximum in each pass
2. Place minimum at the beginning and maximum at the end
3. This reduces the number of passes by half

## Dry Run

Let's trace through Example 1: arr = [64, 25, 12, 22, 11]

### Pass 1:
- Find minimum in [64, 25, 12, 22, 11]: min = 11 at index 4
- Swap arr[0] with arr[4]: [11, 25, 12, 22, 64]
- Sorted region: [11], Unsorted region: [25, 12, 22, 64]

### Pass 2:
- Find minimum in [25, 12, 22, 64]: min = 12 at index 2
- Swap arr[1] with arr[2]: [11, 12, 25, 22, 64]
- Sorted region: [11, 12], Unsorted region: [25, 22, 64]

### Pass 3:
- Find minimum in [25, 22, 64]: min = 22 at index 3
- Swap arr[2] with arr[3]: [11, 12, 22, 25, 64]
- Sorted region: [11, 12, 22], Unsorted region: [25, 64]

### Pass 4:
- Find minimum in [25, 64]: min = 25 at index 3
- Swap arr[3] with arr[3]: [11, 12, 22, 25, 64] (no change)
- Sorted region: [11, 12, 22, 25], Unsorted region: [64]

### Pass 5:
- Find minimum in [64]: min = 64 at index 4
- Swap arr[4] with arr[4]: [11, 12, 22, 25, 64] (no change)
- Final result: [11, 12, 22, 25, 64]

## Key Insights

1. **In-place**: No extra space required (O(1) space complexity)
2. **Unstable**: May change the relative order of equal elements
3. **Simple**: Easy to understand and implement
4. **Consistent**: Always performs the same number of comparisons regardless of input
5. **Inefficient**: O(n²) time complexity makes it slow for large arrays

## Edge Cases

1. **Empty array**: Return empty array
2. **Single element**: Return the element as is
3. **Already sorted**: Will still perform all comparisons
4. **Reverse sorted**: Will still perform all comparisons
5. **Duplicate elements**: Will work correctly but may not preserve order

## Time and Space Complexity

- **Time Complexity**: O(n²) in all cases (best, average, worst)
- **Space Complexity**: O(1) - in-place sorting algorithm`,
     output1: '[11, 12, 22, 25, 64]',
     output2: '[1, 2, 3, 4, 5, 6]',
     constraints: `## Constraints
- 1 <= arr.length <= 10^4
- -10^4 <= arr[i] <= 10^4
- All elements are integers`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, min_idx, temp;
    
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Swap the found minimum element with the first element
        if (min_idx != i) {
            temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr1[] = {64, 25, 12, 22, 11};
    int n1 = sizeof(arr1)/sizeof(arr1[0]);
    
    printf("Original array: ");
    printArray(arr1, n1);
    
    selectionSort(arr1, n1);
    
    printf("Sorted array: ");
    printArray(arr1, n1);
    
    // Test case 2
    int arr2[] = {5, 2, 4, 6, 1, 3};
    int n2 = sizeof(arr2)/sizeof(arr2[0]);
    
    printf("\\nOriginal array: ");
    printArray(arr2, n2);
    
    selectionSort(arr2, n2);
    
    printf("Sorted array: ");
    printArray(arr2, n2);
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This is the standard selection sort implementation. It finds the minimum element in the unsorted region and swaps it with the first element of the unsorted region. The optimization of checking if min_idx != i before swapping is included.'
         },
         average: {
           code: `#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, min_idx, temp;
    
    for (i = 0; i < n-1; i++) {
        min_idx = i;
        
        // Find minimum element in unsorted array
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Always swap (no optimization check)
        temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Original array: ");
    printArray(arr, n);
    
    selectionSort(arr, n);
    
    printf("Sorted array: ");
    printArray(arr, n);
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This implementation always performs the swap operation even when the minimum element is already at the correct position. It is less efficient than the optimized version.'
         },
         worst: {
           code: `#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, min_idx, temp;
    
    for (i = 0; i < n-1; i++) {
        printf("Pass %d: ", i+1);
        for (int k = 0; k < n; k++) {
            printf("%d ", arr[k]);
        }
        printf("\\n");
        
        min_idx = i;
        
        // Find minimum element
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Swap elements
        temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
        
        printf("After swap: ");
        for (int k = 0; k < n; k++) {
            printf("%d ", arr[k]);
        }
        printf("\\n\\n");
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Original array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n\\n");
    
    selectionSort(arr, n);
    
    printf("Final sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This implementation includes debug printing to show each pass and swap operation, making it less efficient. It also doesn\'t use the optimization of checking if swap is necessary.'
         }
       }
     }
   },
   {
     id: 'insertion-sort',
     title: 'Insertion Sort Implementation',
     description: `Implement the insertion sort algorithm to sort an array of integers in ascending order. Insertion sort builds the final sorted array one item at a time by repeatedly inserting a new element into the sorted portion of the array.`,
     difficulty: 'Easy',
     category: ['Array', 'Sorting'],
     input1: 'arr = [12, 11, 13, 5, 6]',
     input2: 'arr = [64, 34, 25, 12, 22, 11, 90]',
     explanation: `## Problem Statement

Implement the insertion sort algorithm to sort an array of integers in ascending order. Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Examples

### Example 1:
**Input:** arr = [12, 11, 13, 5, 6]  
**Output:** [5, 6, 11, 12, 13]  
**Explanation:** 
- Pass 1: [12] (first element is sorted)
- Pass 2: [11, 12] (insert 11 before 12)
- Pass 3: [11, 12, 13] (insert 13 after 12)
- Pass 4: [5, 11, 12, 13] (insert 5 at beginning)
- Pass 5: [5, 6, 11, 12, 13] (insert 6 after 5)

### Example 2:
**Input:** arr = [64, 34, 25, 12, 22, 11, 90]  
**Output:** [11, 12, 22, 25, 34, 64, 90]  
**Explanation:** The array is sorted by repeatedly inserting elements into their correct positions.

### Example 3:
**Input:** arr = [1]  
**Output:** [1]  
**Explanation:** Single element array is already sorted.

### Example 4:
**Input:** arr = [3, 3, 3, 3]  
**Output:** [3, 3, 3, 3]  
**Explanation:** Array with duplicate elements remains the same after sorting.

## Intuition

Insertion sort works by dividing the array into two parts:
1. **Sorted region**: Initially contains only the first element, grows from left to right
2. **Unsorted region**: Contains the remaining elements

In each iteration:
1. Take the first element from the unsorted region
2. Insert it into the correct position in the sorted region
3. Expand the sorted region by one element
4. Repeat until the unsorted region is empty

The key insight is that we maintain the sorted region and insert new elements into their correct positions by shifting elements as needed.

## Approach

### Approach 1: Standard Insertion Sort
1. Start with the second element (index 1)
2. Compare it with all previous elements
3. Shift elements to make space for insertion
4. Insert the element in its correct position
5. Repeat for all remaining elements

### Approach 2: Binary Search Insertion Sort
1. Use binary search to find the correct insertion position
2. This reduces the number of comparisons but not shifts
3. Still O(n²) due to shifting operations

### Approach 3: Recursive Insertion Sort
1. Sort the first n-1 elements recursively
2. Insert the nth element into the sorted array
3. Uses more space due to recursion

## Dry Run

Let's trace through Example 1: arr = [12, 11, 13, 5, 6]

### Pass 1 (i=1, key=11):
- Compare 11 with 12: 11 < 12, shift 12 right
- Insert 11 at position 0: [11, 12, 13, 5, 6]

### Pass 2 (i=2, key=13):
- Compare 13 with 12: 13 > 12, no shift needed
- Insert 13 at position 2: [11, 12, 13, 5, 6]

### Pass 3 (i=3, key=5):
- Compare 5 with 13: 5 < 13, shift 13 right
- Compare 5 with 12: 5 < 12, shift 12 right
- Compare 5 with 11: 5 < 11, shift 11 right
- Insert 5 at position 0: [5, 11, 12, 13, 6]

### Pass 4 (i=4, key=6):
- Compare 6 with 13: 6 < 13, shift 13 right
- Compare 6 with 12: 6 < 12, shift 12 right
- Compare 6 with 11: 6 < 11, shift 11 right
- Compare 6 with 5: 6 > 5, insert 6 at position 1: [5, 6, 11, 12, 13]

### Final result: [5, 6, 11, 12, 13]

## Key Insights

1. **Stable**: Insertion sort is a stable sorting algorithm
2. **In-place**: No extra space required (O(1) space complexity)
3. **Adaptive**: Efficient for partially sorted arrays
4. **Simple**: Easy to understand and implement
5. **Online**: Can sort a list as it receives it

## Edge Cases

1. **Empty array**: Return empty array
2. **Single element**: Return the element as is
3. **Already sorted**: Very efficient, O(n) time complexity
4. **Reverse sorted**: Worst case, O(n²) time complexity
5. **Duplicate elements**: Will work correctly and preserve order

## Time and Space Complexity

- **Time Complexity**: O(n²) in worst and average case, O(n) in best case (already sorted)
- **Space Complexity**: O(1) - in-place sorting algorithm`,
     output1: '[5, 6, 11, 12, 13]',
     output2: '[11, 12, 22, 25, 34, 64, 90]',
     constraints: `## Constraints
- 1 <= arr.length <= 10^4
- -10^4 <= arr[i] <= 10^4
- All elements are integers`,
     solutions: {
       c: {
         best: {
           code: `#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, key, j;
    
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        
        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr1[] = {12, 11, 13, 5, 6};
    int n1 = sizeof(arr1)/sizeof(arr1[0]);
    
    printf("Original array: ");
    printArray(arr1, n1);
    
    insertionSort(arr1, n1);
    
    printf("Sorted array: ");
    printArray(arr1, n1);
    
    // Test case 2
    int arr2[] = {64, 34, 25, 12, 22, 11, 90};
    int n2 = sizeof(arr2)/sizeof(arr2[0]);
    
    printf("\\nOriginal array: ");
    printArray(arr2, n2);
    
    insertionSort(arr2, n2);
    
    printf("Sorted array: ");
    printArray(arr2, n2);
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This is the standard insertion sort implementation. It takes each element and inserts it into its correct position in the sorted portion of the array. It is adaptive and performs well on partially sorted arrays.'
         },
         average: {
           code: `#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, key, j;
    
    for (i = 1; i < n; i++) {
        key = arr[i];
        
        // Find the correct position for key
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > key) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Original array: ");
    printArray(arr, n);
    
    insertionSort(arr, n);
    
    printf("Sorted array: ");
    printArray(arr, n);
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This implementation uses a for loop instead of a while loop to find the correct insertion position. It is functionally equivalent but slightly different in structure.'
         },
         worst: {
           code: `#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, key, j;
    
    for (i = 1; i < n; i++) {
        printf("Pass %d: ", i);
        for (int k = 0; k < n; k++) {
            printf("%d ", arr[k]);
        }
        printf("\\n");
        
        key = arr[i];
        j = i - 1;
        
        // Move elements and print each step
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            
            printf("  Shift: ");
            for (int k = 0; k < n; k++) {
                printf("%d ", arr[k]);
            }
            printf("\\n");
        }
        arr[j + 1] = key;
        
        printf("  Insert %d: ", key);
        for (int k = 0; k < n; k++) {
            printf("%d ", arr[k]);
        }
        printf("\\n\\n");
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Original array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n\\n");
    
    insertionSort(arr, n);
    
    printf("Final sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`,
           timeComplexity: 'O(n²)',
           spaceComplexity: 'O(1)',
           explanation: 'This implementation includes extensive debug printing to show each pass, shift operation, and insertion. It is less efficient due to the additional output operations but helps in understanding the algorithm.'
         }
       }
     }
   }
 ];

// Add three more number problems, three medium array problems, three basic easy level problems, three medium string problems, and two hard level problems
export const additionalTCSNumberQuestions = [
  {
    id: 'count-primes',
    title: 'Count Primes',
    description: `Given an integer n, return the number of prime numbers that are strictly less than n.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.`,
    difficulty: 'Easy',
    category: ['Mathematics', 'Number Theory'],
    input1: 'n = 10',
    input2: 'n = 0',
    explanation: `## Problem Statement

Given an integer n, return the number of prime numbers that are strictly less than n.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

## Examples

### Example 1:
**Input:** n = 10  
**Output:** 4  
**Explanation:** There are 4 prime numbers less than 10: 2, 3, 5, 7.

### Example 2:
**Input:** n = 0  
**Output:** 0  
**Explanation:** There are no prime numbers less than 0.

### Example 3:
**Input:** n = 1  
**Output:** 0  
**Explanation:** There are no prime numbers less than 1.

### Example 4:
**Input:** n = 20  
**Output:** 8  
**Explanation:** There are 8 prime numbers less than 20: 2, 3, 5, 7, 11, 13, 17, 19.

## Intuition

The most efficient way to find all prime numbers up to n is using the Sieve of Eratosthenes algorithm. This algorithm works by:

1. Creating a boolean array of size n, initially marking all numbers as prime
2. Starting from 2, mark all multiples of each prime number as non-prime
3. Count the remaining prime numbers

The key insight is that if a number is prime, all its multiples (except itself) are composite.

## Approach

### Approach 1: Sieve of Eratosthenes (Optimal)
1. Create a boolean array \`isPrime\` of size n, initialized to true
2. Mark 0 and 1 as non-prime (false)
3. For each number i from 2 to sqrt(n):
   - If i is prime, mark all multiples of i as non-prime
4. Count all true values in the array

### Approach 2: Trial Division
1. For each number from 2 to n-1, check if it's prime
2. To check if a number is prime, try dividing by all numbers from 2 to sqrt(n)
3. Count the prime numbers found

### Approach 3: Optimized Trial Division
1. Only check odd numbers (except 2)
2. Only check divisibility up to sqrt(n)
3. Use early termination if a divisor is found

## Dry Run

Let's trace through Example 1: n = 10

### Sieve of Eratosthenes:
- Initialize: [true, true, true, true, true, true, true, true, true, true]
- Mark 0,1: [false, false, true, true, true, true, true, true, true, true]
- i=2: Mark multiples of 2: [false, false, true, true, false, true, false, true, false, true]
- i=3: Mark multiples of 3: [false, false, true, true, false, true, false, true, false, false]
- Count primes: 4 (positions 2,3,5,7)

### Trial Division:
- Check 2: prime ✓
- Check 3: prime ✓
- Check 4: not prime (divisible by 2)
- Check 5: prime ✓
- Check 6: not prime (divisible by 2)
- Check 7: prime ✓
- Check 8: not prime (divisible by 2)
- Check 9: not prime (divisible by 3)
- Total: 4 primes

## Key Insights

1. **Sieve Efficiency**: Sieve of Eratosthenes is O(n log log n) time complexity
2. **Square Root Optimization**: Only need to check up to sqrt(n) for primality
3. **Memory Trade-off**: Sieve uses O(n) space but is much faster
4. **Edge Cases**: Handle n ≤ 2 carefully

## Edge Cases

1. **n = 0**: Return 0
2. **n = 1**: Return 0
3. **n = 2**: Return 0 (no primes less than 2)
4. **Large n**: Consider memory constraints

## Time and Space Complexity

- **Time Complexity**: O(n log log n) for Sieve, O(n√n) for trial division
- **Space Complexity**: O(n) for Sieve, O(1) for trial division`,
    output1: '4',
    output2: '0',
    constraints: `## Constraints
- 0 <= n <= 5 * 10^6`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <math.h>

int countPrimes(int n) {
    if (n <= 2) return 0;
    
    bool* isPrime = (bool*)malloc(n * sizeof(bool));
    for (int i = 0; i < n; i++) {
        isPrime[i] = true;
    }
    
    isPrime[0] = isPrime[1] = false;
    
    // Sieve of Eratosthenes
    for (int i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Mark all multiples of i as non-prime
            for (int j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // Count primes
    int count = 0;
    for (int i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }
    
    free(isPrime);
    return count;
}

int main() {
    int n1 = 10;
    printf("Primes less than %d: %d\\n", n1, countPrimes(n1));
    
    int n2 = 20;
    printf("Primes less than %d: %d\\n", n2, countPrimes(n2));
    
    int n3 = 0;
    printf("Primes less than %d: %d\\n", n3, countPrimes(n3));
    
    return 0;
}`,
          timeComplexity: 'O(n log log n)',
          spaceComplexity: 'O(n)',
          explanation: 'This implementation uses the Sieve of Eratosthenes algorithm, which is the most efficient method for counting primes up to n. It marks all multiples of each prime number as non-prime, resulting in optimal time complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <math.h>

bool isPrime(int num) {
    if (num < 2) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    
    for (int i = 3; i <= sqrt(num); i += 2) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

int countPrimes(int n) {
    int count = 0;
    for (int i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

int main() {
    int n = 10;
    printf("Primes less than %d: %d\\n", n, countPrimes(n));
    
    // Print the primes
    printf("Prime numbers: ");
    for (int i = 2; i < n; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
        }
    }
    printf("\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n√n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach uses trial division to check each number for primality. It includes optimizations like checking only odd numbers and only up to the square root.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdbool.h>

bool isPrime(int num) {
    if (num < 2) return false;
    
    for (int i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

int countPrimes(int n) {
    int count = 0;
    printf("Checking numbers from 2 to %d:\\n", n-1);
    
    for (int i = 2; i < n; i++) {
        printf("Checking %d: ", i);
        if (isPrime(i)) {
            printf("PRIME\\n");
            count++;
        } else {
            printf("NOT PRIME\\n");
        }
    }
    
    return count;
}

int main() {
    int n = 10;
    printf("Primes less than %d: %d\\n", n, countPrimes(n));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most basic implementation that checks each number by trying all possible divisors. It is inefficient but easy to understand.'
        }
      }
    }
  },
  {
    id: 'power-of-two',
    title: 'Power of Two',
    description: `Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2^x.`,
    difficulty: 'Easy',
    category: ['Mathematics', 'Bit Manipulation'],
    input1: 'n = 1',
    input2: 'n = 16',
    explanation: `## Problem Statement

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2^x.

## Examples

### Example 1:
**Input:** n = 1  
**Output:** true  
**Explanation:** 2^0 = 1

### Example 2:
**Input:** n = 16  
**Output:** true  
**Explanation:** 2^4 = 16

### Example 3:
**Input:** n = 3  
**Output:** false  
**Explanation:** 3 is not a power of two.

### Example 4:
**Input:** n = 0  
**Output:** false  
**Explanation:** 0 is not a power of two.

### Example 5:
**Input:** n = 8  
**Output:** true  
**Explanation:** 2^3 = 8

## Intuition

A number is a power of two if and only if it has exactly one bit set to 1 in its binary representation. This is because powers of 2 in binary are:
- 2^0 = 1 = 1
- 2^1 = 2 = 10
- 2^2 = 4 = 100
- 2^3 = 8 = 1000
- 2^4 = 16 = 10000

Notice that each power of 2 has exactly one '1' bit.

## Approach

### Approach 1: Bit Manipulation (Optimal)
1. Check if n > 0 (powers of 2 are positive)
2. Use n & (n-1) to remove the least significant bit
3. If the result is 0, then n had exactly one bit set

### Approach 2: Division by 2
1. If n ≤ 0, return false
2. While n > 1, repeatedly divide by 2
3. If n becomes 1, it's a power of 2
4. If n becomes odd and > 1, it's not a power of 2

### Approach 3: Logarithm
1. If n ≤ 0, return false
2. Calculate log2(n)
3. Check if the result is an integer

### Approach 4: Count Set Bits
1. Count the number of set bits in n
2. If count == 1, it's a power of 2

## Dry Run

Let's trace through different examples:

### Example: n = 16
- Binary: 10000
- n-1 = 15, Binary: 01111
- n & (n-1) = 10000 & 01111 = 00000 = 0
- Result: true (power of 2)

### Example: n = 12
- Binary: 1100
- n-1 = 11, Binary: 1011
- n & (n-1) = 1100 & 1011 = 1000 = 8
- Result: false (not power of 2)

### Division Method: n = 16
- 16 ÷ 2 = 8
- 8 ÷ 2 = 4
- 4 ÷ 2 = 2
- 2 ÷ 2 = 1
- Result: true (reached 1)

## Key Insights

1. **Binary Pattern**: Powers of 2 have exactly one '1' bit
2. **Bit Manipulation**: n & (n-1) removes the least significant '1' bit
3. **Single Bit Check**: If n & (n-1) == 0 and n > 0, n is a power of 2
4. **Edge Case**: 0 is not a power of 2

## Edge Cases

1. **n = 0**: Not a power of 2
2. **n = 1**: 2^0 = 1, so it is a power of 2
3. **Negative numbers**: Not powers of 2
4. **Large numbers**: Handle overflow carefully

## Time and Space Complexity

- **Time Complexity**: O(1) for bit manipulation, O(log n) for division
- **Space Complexity**: O(1) for all approaches`,
    output1: 'true',
    output2: 'true',
    constraints: `## Constraints
- -2^31 <= n <= 2^31 - 1`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdbool.h>

bool isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

int main() {
    int test_cases[] = {1, 16, 3, 0, 8, 1024, 15};
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < num_tests; i++) {
        int n = test_cases[i];
        bool result = isPowerOfTwo(n);
        printf("%d is power of 2: %s\\n", n, result ? "true" : "false");
    }
    
    return 0;
}`,
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most efficient solution using bit manipulation. It checks if n is positive and has exactly one bit set by using the n & (n-1) operation.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdbool.h>

bool isPowerOfTwo(int n) {
    if (n <= 0) return false;
    
    while (n > 1) {
        if (n % 2 != 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

int main() {
    int test_cases[] = {1, 16, 3, 0, 8, 1024, 15};
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < num_tests; i++) {
        int n = test_cases[i];
        bool result = isPowerOfTwo(n);
        printf("%d is power of 2: %s\\n", n, result ? "true" : "false");
        
        // Show the division process
        if (n > 0) {
            printf("  Division process: ");
            int temp = n;
            while (temp > 1) {
                printf("%d -> ", temp);
                temp = temp / 2;
            }
            printf("%d\\n", temp);
        }
    }
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach repeatedly divides by 2 until we reach 1 or find an odd number greater than 1. It is more intuitive but less efficient than bit manipulation.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <math.h>

bool isPowerOfTwo(int n) {
    if (n <= 0) return false;
    
    // Count set bits
    int count = 0;
    int temp = n;
    
    printf("Binary representation of %d: ", n);
    while (temp > 0) {
        if (temp & 1) {
            count++;
            printf("1");
        } else {
            printf("0");
        }
        temp = temp >> 1;
    }
    printf("\\n");
    
    printf("Number of set bits: %d\\n", count);
    
    return count == 1;
}

int main() {
    int test_cases[] = {1, 16, 3, 0, 8, 1024, 15};
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < num_tests; i++) {
        int n = test_cases[i];
        printf("\\nTesting %d:\\n", n);
        bool result = isPowerOfTwo(n);
        printf("Result: %s\\n", result ? "true" : "false");
    }
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This implementation counts the number of set bits in the binary representation. It includes debug output to show the binary representation and bit count.'
        }
      }
    }
  },
  {
    id: 'factorial-trailing-zeroes',
    title: 'Factorial Trailing Zeroes',
    description: `Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.`,
    difficulty: 'Easy',
    category: ['Mathematics', 'Number Theory'],
    input1: 'n = 3',
    input2: 'n = 5',
    explanation: `## Problem Statement

Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

## Examples

### Example 1:
**Input:** n = 3  
**Output:** 0  
**Explanation:** 3! = 6, no trailing zero.

### Example 2:
**Input:** n = 5  
**Output:** 1  
**Explanation:** 5! = 120, one trailing zero.

### Example 3:
**Input:** n = 0  
**Output:** 0  
**Explanation:** 0! = 1, no trailing zero.

### Example 4:
**Input:** n = 10  
**Output:** 2  
**Explanation:** 10! = 3628800, two trailing zeros.

### Example 5:
**Input:** n = 25  
**Output:** 6  
**Explanation:** 25! = 15511210043330985984000000, six trailing zeros.

## Intuition

The key insight is that trailing zeros in a factorial come from pairs of 2 and 5 in the prime factorization. Since there are always more factors of 2 than 5 in factorials, we only need to count the number of factors of 5.

The number of trailing zeros = number of times 5 appears as a factor in n!.

## Approach

### Approach 1: Count Factors of 5 (Optimal)
1. Count how many numbers from 1 to n are divisible by 5
2. Count how many numbers are divisible by 25 (additional factor of 5)
3. Count how many numbers are divisible by 125 (additional factor of 5)
4. Continue for higher powers of 5
5. Sum all counts

### Approach 2: Iterative Division
1. Initialize count = 0
2. While n > 0:
   - Add n/5 to count
   - Divide n by 5
3. Return count

### Approach 3: Logarithmic Approach
1. Calculate log5(n)
2. Sum floor(n/5^i) for i from 1 to log5(n)

## Dry Run

Let's trace through Example 4: n = 10

### Count Factors of 5:
- Numbers divisible by 5: 5, 10 → count = 2
- Numbers divisible by 25: none → count = 2
- Numbers divisible by 125: none → count = 2
- Total trailing zeros = 2

### Verification:
- 10! = 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1
- = 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1
- = 2 × 5 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1
- = 2² × 5² × 9 × 8 × 7 × 6 × 4 × 3 × 1
- = 100 × (other factors)
- = 3628800 (ends with 00)

### Example 5: n = 25
- Numbers divisible by 5: 5, 10, 15, 20, 25 → count = 5
- Numbers divisible by 25: 25 → count = 5 + 1 = 6
- Numbers divisible by 125: none → count = 6
- Total trailing zeros = 6

## Key Insights

1. **Prime Factorization**: Trailing zeros come from 2×5 pairs
2. **2 vs 5**: There are always more factors of 2 than 5
3. **Power of 5**: Each power of 5 contributes an additional factor
4. **Efficiency**: Don't need to calculate the actual factorial

## Edge Cases

1. **n = 0**: 0! = 1, no trailing zeros
2. **n = 1**: 1! = 1, no trailing zeros
3. **n < 5**: No factors of 5, no trailing zeros
4. **Large n**: Handle overflow carefully

## Time and Space Complexity

- **Time Complexity**: O(log n) - we divide by 5 each time
- **Space Complexity**: O(1) - constant extra space`,
    output1: '0',
    output2: '1',
    constraints: `## Constraints
- 0 <= n <= 10^4`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

int trailingZeroes(int n) {
    int count = 0;
    while (n > 0) {
        count += n / 5;
        n = n / 5;
    }
    return count;
}

int main() {
    int test_cases[] = {3, 5, 0, 10, 25, 100};
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < num_tests; i++) {
        int n = test_cases[i];
        int result = trailingZeroes(n);
        printf("Trailing zeroes in %d!: %d\\n", n, result);
    }
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most efficient solution that counts factors of 5 by repeatedly dividing n by 5. It avoids calculating the actual factorial which would cause overflow for large numbers.'
        },
        average: {
          code: `#include <stdio.h>

int trailingZeroes(int n) {
    if (n == 0) return 0;
    
    int count = 0;
    int power = 5;
    
    while (power <= n) {
        count += n / power;
        power *= 5;
    }
    
    return count;
}

int main() {
    int test_cases[] = {3, 5, 0, 10, 25, 100};
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < num_tests; i++) {
        int n = test_cases[i];
        int result = trailingZeroes(n);
        printf("Trailing zeroes in %d!: %d\\n", n, result);
        
        // Show the calculation process
        if (n > 0) {
            printf("  Calculation: ");
            int power = 5;
            int total = 0;
            while (power <= n) {
                int contribution = n / power;
                printf("%d/%d=%d", n, power, contribution);
                total += contribution;
                power *= 5;
                if (power <= n) printf(" + ");
            }
            printf(" = %d\\n", total);
        }
    }
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach explicitly calculates the contribution from each power of 5. It is more verbose but shows the mathematical reasoning clearly.'
        },
        worst: {
          code: `#include <stdio.h>

int trailingZeroes(int n) {
    if (n == 0) return 0;
    
    // Calculate factorial (only for small numbers to avoid overflow)
    long long factorial = 1;
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    printf("Factorial of %d: %lld\\n", n, factorial);
    
    // Count trailing zeros
    int count = 0;
    while (factorial % 10 == 0) {
        count++;
        factorial /= 10;
    }
    
    return count;
}

int main() {
    int test_cases[] = {3, 5, 0, 10};  // Only small numbers to avoid overflow
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < num_tests; i++) {
        int n = test_cases[i];
        printf("\\nTesting %d:\\n", n);
        int result = trailingZeroes(n);
        printf("Result: %d\\n", result);
    }
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This implementation actually calculates the factorial and then counts trailing zeros. It is inefficient and will overflow for large numbers, but it demonstrates the concept clearly.'
        }
      }
    }
  },
  {
    id: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    description: `Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.`,
    difficulty: 'Medium',
    category: ['Array', 'Prefix Sum'],
    input1: 'nums = [1,2,3,4]',
    input2: 'nums = [-1,1,0,-3,3]',
    explanation: `## Problem Statement

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

## Examples

### Example 1:
**Input:** nums = [1,2,3,4]  
**Output:** [24,12,8,6]  
**Explanation:** 
- answer[0] = 2 × 3 × 4 = 24
- answer[1] = 1 × 3 × 4 = 12
- answer[2] = 1 × 2 × 4 = 8
- answer[3] = 1 × 2 × 3 = 6

### Example 2:
**Input:** nums = [-1,1,0,-3,3]  
**Output:** [0,0,9,0,0]  
**Explanation:** 
- answer[0] = 1 × 0 × (-3) × 3 = 0
- answer[1] = (-1) × 0 × (-3) × 3 = 0
- answer[2] = (-1) × 1 × (-3) × 3 = 9
- answer[3] = (-1) × 1 × 0 × 3 = 0
- answer[4] = (-1) × 1 × 0 × (-3) = 0

### Example 3:
**Input:** nums = [2,3,4,5]  
**Output:** [60,40,30,24]  
**Explanation:** 
- answer[0] = 3 × 4 × 5 = 60
- answer[1] = 2 × 4 × 5 = 40
- answer[2] = 2 × 3 × 5 = 30
- answer[3] = 2 × 3 × 4 = 24

## Intuition

The key insight is to use two passes through the array:
1. First pass: Calculate the product of all elements to the left of each position
2. Second pass: Calculate the product of all elements to the right of each position and multiply with the left product

This approach avoids division and achieves O(n) time complexity.

## Approach

### Approach 1: Two-Pass with Extra Space
1. Create a result array of the same size
2. First pass (left to right): Calculate left products
   - For each position i, result[i] = product of all elements from index 0 to i-1
3. Second pass (right to left): Calculate right products and combine
   - Use a running product variable for right side
   - Multiply result[i] with the running product

### Approach 2: Two-Pass with Constant Space (Optimal)
1. Use the result array to store left products in the first pass
2. Use a running product variable for right side in the second pass
3. Multiply and update the result array in-place

### Approach 3: Single Pass with Division (Not Allowed)
1. Calculate the total product of all elements
2. For each element, divide total product by the element
3. This approach is not allowed by the problem constraints

## Dry Run

Let's trace through Example 1: nums = [1,2,3,4]

### Two-Pass Approach:
**First Pass (Left Products):**
- result[0] = 1 (no elements to the left)
- result[1] = 1 (product of elements to the left: 1)
- result[2] = 2 (product of elements to the left: 1×2)
- result[3] = 6 (product of elements to the left: 1×2×3)

**Second Pass (Right Products):**
- rightProduct = 1
- result[3] = 6 × 1 = 6, rightProduct = 1 × 4 = 4
- result[2] = 2 × 4 = 8, rightProduct = 4 × 3 = 12
- result[1] = 1 × 12 = 12, rightProduct = 12 × 2 = 24
- result[0] = 1 × 24 = 24

**Final Result:** [24,12,8,6]

## Key Insights

1. **Two-Pass Strategy**: Use left and right products to avoid division
2. **In-Place Calculation**: Can use the result array to store intermediate values
3. **Running Product**: Use a variable to track the product of elements on the right
4. **Edge Cases**: Handle arrays with zeros and negative numbers

## Edge Cases

1. **Array with zeros**: Product becomes zero for positions with non-zero elements
2. **Single element**: Result is [1] (empty product is 1)
3. **All zeros**: Result is all zeros
4. **Negative numbers**: Handle sign changes correctly

## Time and Space Complexity

- **Time Complexity**: O(n) - Two passes through the array
- **Space Complexity**: O(1) - Only using the result array (not counting input/output)`,
    output1: '[24,12,8,6]',
    output2: '[0,0,9,0,0]',
    constraints: `## Constraints
- 2 <= nums.length <= 10^5
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

**Follow up:** Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    *returnSize = numsSize;
    
    // First pass: Calculate left products
    result[0] = 1;
    for (int i = 1; i < numsSize; i++) {
        result[i] = result[i-1] * nums[i-1];
    }
    
    // Second pass: Calculate right products and combine
    int rightProduct = 1;
    for (int i = numsSize - 1; i >= 0; i--) {
        result[i] = result[i] * rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}

int main() {
    int nums1[] = {1, 2, 3, 4};
    int size1 = 4;
    int returnSize1;
    
    int* result1 = productExceptSelf(nums1, size1, &returnSize1);
    printf("Input: [1,2,3,4]\\nOutput: [");
    for (int i = 0; i < returnSize1; i++) {
        printf("%d", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    free(result1);
    
    int nums2[] = {-1, 1, 0, -3, 3};
    int size2 = 5;
    int returnSize2;
    
    int* result2 = productExceptSelf(nums2, size2, &returnSize2);
    printf("Input: [-1,1,0,-3,3]\\nOutput: [");
    for (int i = 0; i < returnSize2; i++) {
        printf("%d", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    free(result2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using two passes. The first pass calculates left products, and the second pass calculates right products and combines them. It achieves O(1) space complexity by using the result array to store intermediate values.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    int* left = (int*)malloc(numsSize * sizeof(int));
    int* right = (int*)malloc(numsSize * sizeof(int));
    *returnSize = numsSize;
    
    // Calculate left products
    left[0] = 1;
    for (int i = 1; i < numsSize; i++) {
        left[i] = left[i-1] * nums[i-1];
    }
    
    // Calculate right products
    right[numsSize-1] = 1;
    for (int i = numsSize-2; i >= 0; i--) {
        right[i] = right[i+1] * nums[i+1];
    }
    
    // Combine left and right products
    for (int i = 0; i < numsSize; i++) {
        result[i] = left[i] * right[i];
    }
    
    free(left);
    free(right);
    return result;
}

int main() {
    int nums[] = {1, 2, 3, 4};
    int size = 4;
    int returnSize;
    
    int* result = productExceptSelf(nums, size, &returnSize);
    printf("Input: [1,2,3,4]\\nOutput: [");
    for (int i = 0; i < returnSize; i++) {
        printf("%d", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    
    // Show the calculation process
    printf("\\nCalculation process:\\n");
    printf("Left products:  [1, 1, 2, 6]\\n");
    printf("Right products: [24, 12, 4, 1]\\n");
    printf("Final result:   [24, 12, 8, 6]\\n");
    
    free(result);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses separate arrays for left and right products, making it easier to understand but using extra space. It clearly shows the two-step process of calculating left and right products separately.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    *returnSize = numsSize;
    
    for (int i = 0; i < numsSize; i++) {
        result[i] = 1;
        for (int j = 0; j < numsSize; j++) {
            if (i != j) {
                result[i] *= nums[j];
            }
        }
    }
    
    return result;
}

int main() {
    int nums[] = {1, 2, 3, 4};
    int size = 4;
    int returnSize;
    
    int* result = productExceptSelf(nums, size, &returnSize);
    printf("Input: [1,2,3,4]\\nOutput: [");
    for (int i = 0; i < returnSize; i++) {
        printf("%d", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    
    // Show the calculation process
    printf("\\nCalculation process:\\n");
    printf("For index 0: 2×3×4 = 24\\n");
    printf("For index 1: 1×3×4 = 12\\n");
    printf("For index 2: 1×2×4 = 8\\n");
    printf("For index 3: 1×2×3 = 6\\n");
    
    free(result);
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most straightforward approach that calculates the product for each position by iterating through all other elements. It is inefficient with O(n²) time complexity but is easy to understand.'
        }
      }
    }
  },
  {
    id: 'find-all-duplicates-in-array',
    title: 'Find All Duplicates in an Array',
    description: `Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write a solution that runs in O(n) time and uses only constant extra space.`,
    difficulty: 'Medium',
    category: ['Array', 'Hash Table'],
    input1: 'nums = [4,3,2,7,8,2,3,1]',
    input2: 'nums = [1,1,2]',
    explanation: `## Problem Statement

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write a solution that runs in O(n) time and uses only constant extra space.

## Examples

### Example 1:
**Input:** nums = [4,3,2,7,8,2,3,1]  
**Output:** [2,3]  
**Explanation:** 
- 2 appears twice (at indices 2 and 5)
- 3 appears twice (at indices 1 and 6)
- All other numbers appear only once

### Example 2:
**Input:** nums = [1,1,2]  
**Output:** [1]  
**Explanation:** 
- 1 appears twice (at indices 0 and 1)
- 2 appears only once

### Example 3:
**Input:** nums = [1]  
**Output:** []  
**Explanation:** 
- 1 appears only once, so there are no duplicates

### Example 4:
**Input:** nums = [3,3,3,3]  
**Output:** [3]  
**Explanation:** 
- 3 appears four times, but we only count it once in the result

## Intuition

The key insight is to use the array itself as a hash table. Since all numbers are in the range [1, n], we can use the array indices to mark which numbers we've seen.

When we encounter a number, we can mark its corresponding index (number-1) as negative to indicate we've seen it. If we encounter a negative number at that index, it means we've seen this number before.

## Approach

### Approach 1: Mark as Negative (Optimal)
1. Iterate through the array
2. For each number nums[i], calculate its corresponding index: abs(nums[i]) - 1
3. If the number at that index is negative, it means we've seen this number before
4. Mark the number at that index as negative
5. Collect all numbers that appear twice

### Approach 2: Using Extra Array
1. Create a boolean array of size n+1
2. Iterate through the input array
3. Mark each number as seen in the boolean array
4. If a number is already marked, add it to the result

### Approach 3: Sorting and Linear Scan
1. Sort the array
2. Scan through the sorted array
3. If consecutive elements are equal, add to result

## Dry Run

Let's trace through Example 1: nums = [4,3,2,7,8,2,3,1]

### Mark as Negative Approach:
**Initial array:** [4,3,2,7,8,2,3,1]

**Step 1:** i=0, nums[0]=4
- Index = abs(4)-1 = 3
- nums[3] = 7 (positive), mark as negative: nums[3] = -7
- Array: [4,3,2,-7,8,2,3,1]

**Step 2:** i=1, nums[1]=3
- Index = abs(3)-1 = 2
- nums[2] = 2 (positive), mark as negative: nums[2] = -2
- Array: [4,3,-2,-7,8,2,3,1]

**Step 3:** i=2, nums[2]=-2
- Index = abs(-2)-1 = 1
- nums[1] = 3 (positive), mark as negative: nums[1] = -3
- Array: [4,-3,-2,-7,8,2,3,1]

**Step 4:** i=3, nums[3]=-7
- Index = abs(-7)-1 = 6
- nums[6] = 3 (positive), mark as negative: nums[6] = -3
- Array: [4,-3,-2,-7,8,2,-3,1]

**Step 5:** i=4, nums[4]=8
- Index = abs(8)-1 = 7
- nums[7] = 1 (positive), mark as negative: nums[7] = -1
- Array: [4,-3,-2,-7,8,2,-3,-1]

**Step 6:** i=5, nums[5]=2
- Index = abs(2)-1 = 1
- nums[1] = -3 (negative), so 2 is a duplicate
- Mark as negative: nums[1] = 3 (already negative, stays negative)
- Array: [4,-3,-2,-7,8,2,-3,-1]

**Step 7:** i=6, nums[6]=-3
- Index = abs(-3)-1 = 2
- nums[2] = -2 (negative), so 3 is a duplicate
- Mark as negative: nums[2] = 2 (already negative, stays negative)
- Array: [4,-3,-2,-7,8,2,-3,-1]

**Step 8:** i=7, nums[7]=-1
- Index = abs(-1)-1 = 0
- nums[0] = 4 (positive), mark as negative: nums[0] = -4
- Array: [-4,-3,-2,-7,8,2,-3,-1]

**Result:** [2,3] (numbers that appeared twice)

## Key Insights

1. **Array as Hash Table**: Use the array indices to mark seen numbers
2. **Negative Marking**: Mark seen numbers by making them negative
3. **Absolute Value**: Use abs() to handle already marked numbers
4. **Range Constraint**: Numbers are in [1, n], so indices are valid

## Edge Cases

1. **Single element**: Return empty array
2. **All duplicates**: Return array with one element
3. **No duplicates**: Return empty array
4. **Multiple occurrences**: Only count each duplicate once

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through the array
- **Space Complexity**: O(1) - Only using the input array`,
    output1: '[2,3]',
    output2: '[1]',
    constraints: `## Constraints
- n == nums.length
- 1 <= n <= 10^5
- 1 <= nums[i] <= n
- Each element in nums appears once or twice.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int* findDuplicates(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    *returnSize = 0;
    
    for (int i = 0; i < numsSize; i++) {
        int index = abs(nums[i]) - 1;
        
        if (nums[index] < 0) {
            // This number has been seen before
            result[*returnSize] = abs(nums[i]);
            (*returnSize)++;
        } else {
            // Mark this number as seen
            nums[index] = -nums[index];
        }
    }
    
    return result;
}

int main() {
    int nums1[] = {4, 3, 2, 7, 8, 2, 3, 1};
    int size1 = 8;
    int returnSize1;
    
    int* result1 = findDuplicates(nums1, size1, &returnSize1);
    printf("Input: [4,3,2,7,8,2,3,1]\\nOutput: [");
    for (int i = 0; i < returnSize1; i++) {
        printf("%d", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    free(result1);
    
    int nums2[] = {1, 1, 2};
    int size2 = 3;
    int returnSize2;
    
    int* result2 = findDuplicates(nums2, size2, &returnSize2);
    printf("Input: [1,1,2]\\nOutput: [");
    for (int i = 0; i < returnSize2; i++) {
        printf("%d", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    free(result2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution that uses the array itself as a hash table. It marks seen numbers by making them negative and identifies duplicates when it encounters a negative number at the expected index.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int* findDuplicates(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    int* seen = (int*)calloc(numsSize + 1, sizeof(int));
    *returnSize = 0;
    
    for (int i = 0; i < numsSize; i++) {
        seen[nums[i]]++;
        if (seen[nums[i]] == 2) {
            result[*returnSize] = nums[i];
            (*returnSize)++;
        }
    }
    
    free(seen);
    return result;
}

int main() {
    int nums[] = {4, 3, 2, 7, 8, 2, 3, 1};
    int size = 8;
    int returnSize;
    
    int* result = findDuplicates(nums, size, &returnSize);
    printf("Input: [4,3,2,7,8,2,3,1]\\nOutput: [");
    for (int i = 0; i < returnSize; i++) {
        printf("%d", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    
    // Show the frequency count
    printf("\\nFrequency count:\\n");
    int* seen = (int*)calloc(size + 1, sizeof(int));
    for (int i = 0; i < size; i++) {
        seen[nums[i]]++;
    }
    for (int i = 1; i <= size; i++) {
        if (seen[i] > 0) {
            printf("Number %d appears %d times\\n", i, seen[i]);
        }
    }
    free(seen);
    free(result);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses an extra array to count the frequency of each number. It is easier to understand but uses O(n) extra space. It clearly shows which numbers appear more than once.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int* findDuplicates(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    int* sorted = (int*)malloc(numsSize * sizeof(int));
    *returnSize = 0;
    
    // Copy array to avoid modifying original
    for (int i = 0; i < numsSize; i++) {
        sorted[i] = nums[i];
    }
    
    // Sort the array
    qsort(sorted, numsSize, sizeof(int), compare);
    
    printf("Sorted array: [");
    for (int i = 0; i < numsSize; i++) {
        printf("%d", sorted[i]);
        if (i < numsSize - 1) printf(",");
    }
    printf("]\\n");
    
    // Find duplicates
    for (int i = 1; i < numsSize; i++) {
        if (sorted[i] == sorted[i-1]) {
            // Check if we already added this duplicate
            int alreadyAdded = 0;
            for (int j = 0; j < *returnSize; j++) {
                if (result[j] == sorted[i]) {
                    alreadyAdded = 1;
                    break;
                }
            }
            if (!alreadyAdded) {
                result[*returnSize] = sorted[i];
                (*returnSize)++;
            }
        }
    }
    
    free(sorted);
    return result;
}

int main() {
    int nums[] = {4, 3, 2, 7, 8, 2, 3, 1};
    int size = 8;
    int returnSize;
    
    int* result = findDuplicates(nums, size, &returnSize);
    printf("Input: [4,3,2,7,8,2,3,1]\\nOutput: [");
    for (int i = 0; i < returnSize; i++) {
        printf("%d", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    free(result);
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach sorts the array first and then scans for consecutive equal elements. It is inefficient with O(n log n) time complexity but is straightforward to implement.'
        }
      }
    }
  },
  {
    id: 'subarray-sum-equals-k',
    title: 'Subarray Sum Equals K',
    description: `Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.`,
    difficulty: 'Medium',
    category: ['Array', 'Hash Table', 'Prefix Sum'],
    input1: 'nums = [1,1,1], k = 2',
    input2: 'nums = [1,2,3], k = 3',
    explanation: `## Problem Statement

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

## Examples

### Example 1:
**Input:** nums = [1,1,1], k = 2  
**Output:** 2  
**Explanation:** 
- Subarray [1,1] starting at index 0: sum = 1+1 = 2
- Subarray [1,1] starting at index 1: sum = 1+1 = 2

### Example 2:
**Input:** nums = [1,2,3], k = 3  
**Output:** 2  
**Explanation:** 
- Subarray [1,2] starting at index 0: sum = 1+2 = 3
- Subarray [3] starting at index 2: sum = 3

### Example 3:
**Input:** nums = [1,-1,0], k = 0  
**Output:** 3  
**Explanation:** 
- Subarray [1,-1] starting at index 0: sum = 1+(-1) = 0
- Subarray [0] starting at index 2: sum = 0
- Subarray [-1,0] starting at index 1: sum = (-1)+0 = -1 (not equal to k)

### Example 4:
**Input:** nums = [3,4,7,2,-3,1,4,2], k = 7  
**Output:** 4  
**Explanation:** 
- Subarray [3,4] starting at index 0: sum = 3+4 = 7
- Subarray [7] starting at index 2: sum = 7
- Subarray [2,-3,1,4,2] starting at index 3: sum = 2+(-3)+1+4+2 = 6 (not equal to k)
- Subarray [4,2] starting at index 6: sum = 4+2 = 6 (not equal to k)

## Intuition

The key insight is to use prefix sums and a hash table. If we have a prefix sum at index i and another prefix sum at index j (where j > i), then the sum of the subarray from index i+1 to j is prefixSum[j] - prefixSum[i].

If we want this sum to equal k, then: prefixSum[j] - prefixSum[i] = k, which means prefixSum[i] = prefixSum[j] - k.

## Approach

### Approach 1: Prefix Sum with Hash Table (Optimal)
1. Use a hash table to store prefix sums and their frequencies
2. Initialize with prefixSum[0] = 0 and count = 1
3. For each element, calculate the current prefix sum
4. Check if (currentPrefixSum - k) exists in the hash table
5. Add the frequency of (currentPrefixSum - k) to the result
6. Update the hash table with the current prefix sum

### Approach 2: Brute Force with Prefix Sums
1. Calculate all prefix sums
2. For each pair of indices (i, j), check if prefixSum[j] - prefixSum[i] == k
3. Count all such pairs

### Approach 3: Brute Force
1. For each starting index, calculate the sum of all possible subarrays
2. Count subarrays with sum equal to k

## Dry Run

Let's trace through Example 1: nums = [1,1,1], k = 2

### Prefix Sum with Hash Table:
**Initial:** hash = {0: 1}, count = 0, prefixSum = 0

**Step 1:** i=0, nums[0]=1
- prefixSum = 0 + 1 = 1
- Check if (1 - 2) = -1 exists in hash: No
- Add 1 to hash: hash = {0: 1, 1: 1}
- count = 0

**Step 2:** i=1, nums[1]=1
- prefixSum = 1 + 1 = 2
- Check if (2 - 2) = 0 exists in hash: Yes, frequency = 1
- Add 1 to count: count = 1
- Add 2 to hash: hash = {0: 1, 1: 1, 2: 1}
- count = 1

**Step 3:** i=2, nums[2]=1
- prefixSum = 2 + 1 = 3
- Check if (3 - 2) = 1 exists in hash: Yes, frequency = 1
- Add 1 to count: count = 2
- Add 3 to hash: hash = {0: 1, 1: 1, 2: 1, 3: 1}
- count = 2

**Result:** 2

### Brute Force:
**All possible subarrays:**
- [1]: sum = 1 ≠ 2
- [1,1]: sum = 2 ✓
- [1,1,1]: sum = 3 ≠ 2
- [1]: sum = 1 ≠ 2
- [1,1]: sum = 2 ✓
- [1]: sum = 1 ≠ 2

**Result:** 2

## Key Insights

1. **Prefix Sum Property**: sum[i,j] = prefixSum[j] - prefixSum[i-1]
2. **Hash Table Lookup**: Use hash table for O(1) lookup of previous prefix sums
3. **Target Calculation**: If sum[i,j] = k, then prefixSum[i-1] = prefixSum[j] - k
4. **Frequency Counting**: Count all occurrences, not just existence

## Edge Cases

1. **Empty array**: Return 0
2. **Single element**: Check if it equals k
3. **All negative numbers**: Handle negative prefix sums
4. **Multiple occurrences**: Count all valid subarrays
5. **k = 0**: Handle case where target sum is zero

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through the array
- **Space Complexity**: O(n) - Hash table to store prefix sums`,
    output1: '2',
    output2: '2',
    constraints: `## Constraints
- 1 <= nums.length <= 2 * 10^4
- -1000 <= nums[i] <= 1000
- -10^7 <= k <= 10^7`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 20000

typedef struct {
    int key;
    int value;
} HashEntry;

typedef struct {
    HashEntry* entries;
    int size;
} HashMap;

HashMap* createHashMap() {
    HashMap* map = (HashMap*)malloc(sizeof(HashMap));
    map->entries = (HashEntry*)calloc(MAX_SIZE, sizeof(HashEntry));
    map->size = MAX_SIZE;
    return map;
}

void put(HashMap* map, int key, int value) {
    int index = abs(key) % map->size;
    while (map->entries[index].key != 0 && map->entries[index].key != key) {
        index = (index + 1) % map->size;
    }
    map->entries[index].key = key;
    map->entries[index].value = value;
}

int get(HashMap* map, int key) {
    int index = abs(key) % map->size;
    while (map->entries[index].key != 0 && map->entries[index].key != key) {
        index = (index + 1) % map->size;
    }
    return map->entries[index].key == key ? map->entries[index].value : 0;
}

void freeHashMap(HashMap* map) {
    free(map->entries);
    free(map);
}

int subarraySum(int* nums, int numsSize, int k) {
    HashMap* map = createHashMap();
    put(map, 0, 1);  // Initialize with prefix sum 0
    
    int count = 0;
    int prefixSum = 0;
    
    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        int target = prefixSum - k;
        count += get(map, target);
        put(map, prefixSum, get(map, prefixSum) + 1);
    }
    
    freeHashMap(map);
    return count;
}

int main() {
    int nums1[] = {1, 1, 1};
    int k1 = 2;
    int result1 = subarraySum(nums1, 3, k1);
    printf("Input: nums = [1,1,1], k = %d\\nOutput: %d\\n", k1, result1);
    
    int nums2[] = {1, 2, 3};
    int k2 = 3;
    int result2 = subarraySum(nums2, 3, k2);
    printf("Input: nums = [1,2,3], k = %d\\nOutput: %d\\n", k2, result2);
    
    int nums3[] = {1, -1, 0};
    int k3 = 0;
    int result3 = subarraySum(nums3, 3, k3);
    printf("Input: nums = [1,-1,0], k = %d\\nOutput: %d\\n", k3, result3);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This is the optimal solution using prefix sums and a hash table. It efficiently finds all subarrays with sum k by tracking the frequency of each prefix sum and looking for the target difference.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int subarraySum(int* nums, int numsSize, int k) {
    int* prefixSum = (int*)malloc((numsSize + 1) * sizeof(int));
    prefixSum[0] = 0;
    
    // Calculate prefix sums
    for (int i = 0; i < numsSize; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    printf("Prefix sums: [");
    for (int i = 0; i <= numsSize; i++) {
        printf("%d", prefixSum[i]);
        if (i < numsSize) printf(",");
    }
    printf("]\\n");
    
    int count = 0;
    
    // Check all possible subarrays
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j <= numsSize; j++) {
            int sum = prefixSum[j] - prefixSum[i];
            if (sum == k) {
                printf("Found subarray [%d,%d): sum = %d\\n", i, j, sum);
                count++;
            }
        }
    }
    
    free(prefixSum);
    return count;
}

int main() {
    int nums[] = {1, 1, 1};
    int k = 2;
    int result = subarraySum(nums, 3, k);
    printf("Input: nums = [1,1,1], k = %d\\nOutput: %d\\n", k, result);
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach calculates all prefix sums first and then checks all possible subarray combinations. It is more efficient than the brute force approach but still has O(n²) time complexity.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int subarraySum(int* nums, int numsSize, int k) {
    int count = 0;
    
    // Check all possible subarrays
    for (int start = 0; start < numsSize; start++) {
        int sum = 0;
        for (int end = start; end < numsSize; end++) {
            sum += nums[end];
            if (sum == k) {
                printf("Found subarray [%d,%d]: sum = %d\\n", start, end, sum);
                count++;
            }
        }
    }
    
    return count;
}

int main() {
    int nums[] = {1, 1, 1};
    int k = 2;
    int result = subarraySum(nums, 3, k);
    printf("Input: nums = [1,1,1], k = %d\\nOutput: %d\\n", k, result);
    
    // Show all possible subarrays
    printf("\\nAll possible subarrays:\\n");
    for (int start = 0; start < 3; start++) {
        for (int end = start; end < 3; end++) {
            printf("[%d,%d]: ", start, end);
            int sum = 0;
            for (int i = start; i <= end; i++) {
                printf("%d", nums[i]);
                sum += nums[i];
                if (i < end) printf("+");
            }
            printf(" = %d", sum);
            if (sum == k) printf(" ✓");
            printf("\\n");
        }
    }
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most straightforward approach that checks all possible subarrays by calculating the sum for each one. It is inefficient with O(n²) time complexity but is easy to understand and implement.'
        }
      }
    }
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    difficulty: 'Easy',
    category: ['Array', 'Hash Table'],
    input1: 'nums = [2,7,11,15], target = 9',
    input2: 'nums = [3,2,4], target = 6',
    explanation: `## Problem Statement

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples

### Example 1:
**Input:** nums = [2,7,11,15], target = 9  
**Output:** [0,1]  
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

### Example 2:
**Input:** nums = [3,2,4], target = 6  
**Output:** [1,2]  
**Explanation:** Because nums[1] + nums[2] == 6, we return [1, 2].

### Example 3:
**Input:** nums = [3,3], target = 6  
**Output:** [0,1]  
**Explanation:** Because nums[0] + nums[1] == 6, we return [0, 1].

## Intuition

The key insight is to use a hash table to store the complement of each number we've seen. For each number, we check if its complement (target - current_number) exists in the hash table.

This approach allows us to find the solution in a single pass through the array.

## Approach

### Approach 1: Hash Table (Optimal)
1. Create a hash table to store numbers and their indices
2. For each number in the array:
   - Calculate the complement = target - current_number
   - If complement exists in hash table, return [complement_index, current_index]
   - Otherwise, add current_number and its index to hash table

### Approach 2: Two-Pointer with Sorting
1. Create pairs of (number, index) and sort by number
2. Use two pointers (left and right) to find the pair
3. If sum < target, move left pointer right
4. If sum > target, move right pointer left
5. If sum == target, return the indices

### Approach 3: Brute Force
1. Check all possible pairs of numbers
2. Return the pair that sums to target

## Dry Run

Let's trace through Example 1: nums = [2,7,11,15], target = 9

### Hash Table Approach:
- i=0, num=2: complement=9-2=7, not in hash table, add {2:0}
- i=1, num=7: complement=9-7=2, found in hash table, return [0,1]

### Two-Pointer Approach:
- Pairs: [(2,0), (7,1), (11,2), (15,3)]
- Sorted: [(2,0), (7,1), (11,2), (15,3)]
- left=0, right=3: 2+15=17 > 9, right--
- left=0, right=2: 2+11=13 > 9, right--
- left=0, right=1: 2+7=9 == 9, return [0,1]

## Key Insights

1. **Hash Table Efficiency**: O(1) lookup time for complements
2. **Single Pass**: Only need to traverse the array once
3. **Complement Strategy**: Look for target - current_number
4. **Unique Solution**: Problem guarantees exactly one solution exists

## Edge Cases

1. **Same numbers**: nums = [3,3], target = 6
2. **Negative numbers**: nums = [-1,-2,-3,-4], target = -7
3. **Large numbers**: Ensure hash table can handle the range
4. **Array with two elements**: nums = [1,2], target = 3

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through the array
- **Space Complexity**: O(n) - Hash table to store numbers`,
    output1: '[0,1]',
    output2: '[1,2]',
    constraints: `## Constraints
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Simple hash table implementation for integers
typedef struct {
    int key;
    int value;
    int used;
} HashEntry;

typedef struct {
    HashEntry* entries;
    int size;
} HashTable;

HashTable* createHashTable(int size) {
    HashTable* ht = (HashTable*)malloc(sizeof(HashTable));
    ht->size = size;
    ht->entries = (HashEntry*)calloc(size, sizeof(HashEntry));
    return ht;
}

int hash(int key, int size) {
    return abs(key) % size;
}

void put(HashTable* ht, int key, int value) {
    int index = hash(key, ht->size);
    int original = index;
    
    do {
        if (!ht->entries[index].used) {
            ht->entries[index].key = key;
            ht->entries[index].value = value;
            ht->entries[index].used = 1;
            return;
        }
        index = (index + 1) % ht->size;
    } while (index != original);
}

int get(HashTable* ht, int key) {
    int index = hash(key, ht->size);
    int original = index;
    
    do {
        if (ht->entries[index].used && ht->entries[index].key == key) {
            return ht->entries[index].value;
        }
        index = (index + 1) % ht->size;
    } while (index != original);
    
    return -1; // Not found
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    HashTable* ht = createHashTable(numsSize * 2);
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    
    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        int complementIndex = get(ht, complement);
        
        if (complementIndex != -1) {
            result[0] = complementIndex;
            result[1] = i;
            free(ht->entries);
            free(ht);
            return result;
        }
        
        put(ht, nums[i], i);
    }
    
    free(ht->entries);
    free(ht);
    return result;
}

int main() {
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int returnSize1;
    
    int* result1 = twoSum(nums1, 4, target1, &returnSize1);
    printf("Input: nums = [2,7,11,15], target = %d\\n", target1);
    printf("Output: [%d,%d]\\n", result1[0], result1[1]);
    free(result1);
    
    int nums2[] = {3, 2, 4};
    int target2 = 6;
    int returnSize2;
    
    int* result2 = twoSum(nums2, 3, target2, &returnSize2);
    printf("Input: nums = [3,2,4], target = %d\\n", target2);
    printf("Output: [%d,%d]\\n", result2[0], result2[1]);
    free(result2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This is the optimal solution using a hash table to store numbers and their indices. For each number, we check if its complement exists in the hash table, allowing us to find the solution in a single pass.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Structure to store number and its index
typedef struct {
    int num;
    int index;
} NumIndex;

// Compare function for qsort
int compare(const void* a, const void* b) {
    return ((NumIndex*)a)->num - ((NumIndex*)b)->num;
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Create array of number-index pairs
    NumIndex* pairs = (NumIndex*)malloc(numsSize * sizeof(NumIndex));
    for (int i = 0; i < numsSize; i++) {
        pairs[i].num = nums[i];
        pairs[i].index = i;
    }
    
    // Sort by number
    qsort(pairs, numsSize, sizeof(NumIndex), compare);
    
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    
    // Two-pointer approach
    int left = 0, right = numsSize - 1;
    while (left < right) {
        int sum = pairs[left].num + pairs[right].num;
        if (sum == target) {
            result[0] = pairs[left].index;
            result[1] = pairs[right].index;
            free(pairs);
            return result;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    free(pairs);
    return result;
}

int main() {
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    int returnSize;
    
    int* result = twoSum(nums, 4, target, &returnSize);
    printf("Input: nums = [2,7,11,15], target = %d\\n", target);
    printf("Output: [%d,%d]\\n", result[0], result[1]);
    
    // Show the sorted pairs
    printf("\\nSorted pairs: [(2,0), (7,1), (11,2), (15,3)]\\n");
    printf("Two-pointer approach: left=0, right=3\\n");
    printf("2 + 15 = 17 > 9, move right pointer left\\n");
    printf("2 + 11 = 13 > 9, move right pointer left\\n");
    printf("2 + 7 = 9 == 9, found solution\\n");
    
    free(result);
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses sorting and two pointers. It sorts the array with indices preserved, then uses two pointers to find the pair that sums to the target. It is less efficient than hash table but shows an alternative approach.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    
    // Check all possible pairs
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    
    return result;
}

int main() {
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    int returnSize;
    
    int* result = twoSum(nums, 4, target, &returnSize);
    printf("Input: nums = [2,7,11,15], target = %d\\n", target);
    printf("Output: [%d,%d]\\n", result[0], result[1]);
    
    // Show all possible pairs
    printf("\\nAll possible pairs:\\n");
    for (int i = 0; i < 4; i++) {
        for (int j = i + 1; j < 4; j++) {
            printf("[%d,%d]: %d + %d = %d", i, j, nums[i], nums[j], nums[i] + nums[j]);
            if (nums[i] + nums[j] == target) printf(" ✓");
            printf("\\n");
        }
    }
    
    free(result);
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most straightforward approach that checks all possible pairs of numbers. It is inefficient with O(n²) time complexity but is easy to understand and implement.'
        }
      }
    }
  },
  {
    id: 'palindrome-number',
    title: 'Palindrome Number',
    description: `Given an integer x, return true if x is a palindrome, and false otherwise.

A number is a palindrome when it reads the same backward as forward.`,
    difficulty: 'Easy',
    category: ['Mathematics'],
    input1: 'x = 121',
    input2: 'x = -121',
    explanation: `## Problem Statement

Given an integer x, return true if x is a palindrome, and false otherwise.

A number is a palindrome when it reads the same backward as forward.

## Examples

### Example 1:
**Input:** x = 121  
**Output:** true  
**Explanation:** 121 reads as 121 from left to right and from right to left.

### Example 2:
**Input:** x = -121  
**Output:** false  
**Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

### Example 3:
**Input:** x = 10  
**Output:** false  
**Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.

### Example 4:
**Input:** x = 12321  
**Output:** true  
**Explanation:** 12321 reads the same backward and forward.

## Intuition

The key insight is to reverse the number and compare it with the original. However, we can optimize this by only reversing half of the number and comparing it with the other half.

This approach avoids potential integer overflow and is more efficient.

## Approach

### Approach 1: Reverse Half (Optimal)
1. Handle edge cases: negative numbers are not palindromes
2. Reverse the second half of the number
3. Compare the reversed half with the first half
4. For even digits: both halves should be equal
5. For odd digits: reversed half should equal first half / 10

### Approach 2: Full Reverse
1. Handle edge cases: negative numbers are not palindromes
2. Reverse the entire number
3. Compare with the original number

### Approach 3: String Conversion
1. Convert the number to string
2. Use two pointers to compare characters from both ends

## Dry Run

Let's trace through Example 1: x = 121

### Reverse Half Approach:
- x = 121, original = 121
- reversed = 0
- While x > reversed:
  - reversed = 0 * 10 + 1 = 1, x = 12
  - reversed = 1 * 10 + 2 = 12, x = 1
  - reversed = 12 * 10 + 1 = 121, x = 0
- x = 0, reversed = 121
- Since x == reversed / 10 (0 == 121/10 = 12), it's a palindrome

### Full Reverse Approach:
- x = 121, original = 121
- reversed = 0
- While x > 0:
  - reversed = 0 * 10 + 1 = 1, x = 12
  - reversed = 1 * 10 + 2 = 12, x = 1
  - reversed = 12 * 10 + 1 = 121, x = 0
- Compare: 121 == 121 ✓

## Key Insights

1. **Negative Numbers**: All negative numbers are not palindromes
2. **Half Reversal**: Only need to reverse half the digits
3. **Overflow Prevention**: Reversing half prevents integer overflow
4. **Odd vs Even**: Handle odd and even number of digits differently

## Edge Cases

1. **Negative numbers**: Always return false
2. **Single digit**: Always return true
3. **Numbers ending with 0**: Not palindromes (except 0 itself)
4. **Large numbers**: Handle potential overflow

## Time and Space Complexity

- **Time Complexity**: O(log n) - We divide the number by 10 in each iteration
- **Space Complexity**: O(1) - Only using a few variables`,
    output1: 'true',
    output2: 'false',
    constraints: `## Constraints
- -2^31 <= x <= 2^31 - 1

**Follow up:** Could you solve it without converting the integer to a string?`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;
    
    // Numbers ending with 0 are not palindromes (except 0 itself)
    if (x != 0 && x % 10 == 0) return false;
    
    int reversed = 0;
    int original = x;
    
    // Reverse only half of the number
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x /= 10;
    }
    
    // For even digits: x == reversed
    // For odd digits: x == reversed / 10
    return x == reversed || x == reversed / 10;
}

int main() {
    int test_cases[] = {121, -121, 10, 12321, 0, 1, 12345};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        int x = test_cases[i];
        bool result = isPalindrome(x);
        printf("Input: %d\\nOutput: %s\\n\\n", x, result ? "true" : "false");
    }
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution that reverses only half of the number. It handles edge cases efficiently and prevents integer overflow by not reversing the entire number.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;
    
    int original = x;
    int reversed = 0;
    
    // Reverse the entire number
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x /= 10;
    }
    
    return original == reversed;
}

int main() {
    int test_cases[] = {121, -121, 10, 12321};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        int x = test_cases[i];
        bool result = isPalindrome(x);
        printf("Input: %d\\nOutput: %s\\n", x, result ? "true" : "false");
        
        if (x >= 0) {
            int original = x;
            int reversed = 0;
            int temp = x;
            printf("Reversal process: ");
            while (temp > 0) {
                reversed = reversed * 10 + temp % 10;
                temp /= 10;
            }
            printf("%d -> %d\\n", original, reversed);
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach reverses the entire number and compares it with the original. It is straightforward but may cause integer overflow for very large numbers.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isPalindrome(int x) {
    // Convert to string
    char str[20];
    sprintf(str, "%d", x);
    
    int len = strlen(str);
    int left = 0, right = len - 1;
    
    // Compare characters from both ends
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

int main() {
    int test_cases[] = {121, -121, 10, 12321};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        int x = test_cases[i];
        bool result = isPalindrome(x);
        printf("Input: %d\\nOutput: %s\\n", x, result ? "true" : "false");
        
        char str[20];
        sprintf(str, "%d", x);
        printf("String representation: %s\\n", str);
        printf("Character comparison: ");
        int len = strlen(str);
        for (int j = 0; j < len; j++) {
            printf("%c", str[j]);
            if (j < len - 1) printf(" vs %c", str[len - 1 - j]);
        }
        printf("\\n\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(log n)',
          explanation: 'This approach converts the number to a string and uses two pointers to compare characters from both ends. It is less efficient due to string conversion overhead.'
        }
      }
    }
  },
  {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    description: `You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    difficulty: 'Easy',
    category: ['Dynamic Programming', 'Mathematics'],
    input1: 'n = 2',
    input2: 'n = 3',
    explanation: `## Problem Statement

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Examples

### Example 1:
**Input:** n = 2  
**Output:** 2  
**Explanation:** There are two ways to climb to the top:
1. 1 step + 1 step
2. 2 steps

### Example 2:
**Input:** n = 3  
**Output:** 3  
**Explanation:** There are three ways to climb to the top:
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

### Example 3:
**Input:** n = 4  
**Output:** 5  
**Explanation:** There are five ways to climb to the top:
1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 2 + 1
4. 2 + 1 + 1
5. 2 + 2

### Example 4:
**Input:** n = 5  
**Output:** 8  
**Explanation:** There are eight ways to climb to the top.

## Intuition

This is a classic dynamic programming problem. The key insight is that the number of ways to reach step n is equal to the sum of ways to reach step (n-1) and step (n-2).

This follows the Fibonacci sequence pattern: F(n) = F(n-1) + F(n-2)

## Approach

### Approach 1: Dynamic Programming with Array
1. Create an array dp[n+1] to store the number of ways for each step
2. Initialize dp[0] = 1, dp[1] = 1
3. For each step i from 2 to n: dp[i] = dp[i-1] + dp[i-2]
4. Return dp[n]

### Approach 2: Space-Optimized DP (Optimal)
1. Use only two variables to store the previous two values
2. Update the variables in each iteration
3. This reduces space complexity to O(1)

### Approach 3: Recursion with Memoization
1. Use recursive function with base cases
2. Store computed values to avoid recalculation
3. Return the memoized result

## Dry Run

Let's trace through Example 2: n = 3

### Dynamic Programming Approach:
- dp[0] = 1 (base case)
- dp[1] = 1 (base case)
- dp[2] = dp[1] + dp[0] = 1 + 1 = 2
- dp[3] = dp[2] + dp[1] = 2 + 1 = 3

### Space-Optimized Approach:
- prev = 1, curr = 1
- i = 2: next = 1 + 1 = 2, prev = 1, curr = 2
- i = 3: next = 1 + 2 = 3, prev = 2, curr = 3
- Result = 3

### Recursive Approach:
- climbStairs(3) = climbStairs(2) + climbStairs(1)
- climbStairs(2) = climbStairs(1) + climbStairs(0) = 1 + 1 = 2
- climbStairs(1) = 1
- Result = 2 + 1 = 3

## Key Insights

1. **Fibonacci Pattern**: The solution follows the Fibonacci sequence
2. **Optimal Substructure**: Solution for n depends on solutions for n-1 and n-2
3. **Space Optimization**: Only need to store the last two values
4. **Base Cases**: dp[0] = 1, dp[1] = 1

## Edge Cases

1. **n = 0**: Return 1 (one way to stay at ground level)
2. **n = 1**: Return 1 (one way to climb one step)
3. **n = 2**: Return 2 (two ways: 1+1 or 2)
4. **Large n**: Handle potential integer overflow

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through the steps
- **Space Complexity**: O(1) - Only using a few variables`,
    output1: '2',
    output2: '3',
    constraints: `## Constraints
- 1 <= n <= 45`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

int climbStairs(int n) {
    if (n <= 1) return 1;
    
    int prev = 1, curr = 1;
    
    for (int i = 2; i <= n; i++) {
        int next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}

int main() {
    int test_cases[] = {1, 2, 3, 4, 5, 6};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        int steps = test_cases[i];
        int result = climbStairs(steps);
        printf("Input: n = %d\\nOutput: %d\\n", steps, result);
        
        // Show the ways for small numbers
        if (steps <= 4) {
            printf("Ways: ");
            if (steps == 1) printf("1");
            else if (steps == 2) printf("1+1, 2");
            else if (steps == 3) printf("1+1+1, 1+2, 2+1");
            else if (steps == 4) printf("1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2");
            printf("\\n");
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using space-optimized dynamic programming. It only stores the previous two values and updates them in each iteration, achieving O(1) space complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int climbStairs(int n) {
    if (n <= 1) return 1;
    
    int* dp = (int*)malloc((n + 1) * sizeof(int));
    dp[0] = 1;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    int result = dp[n];
    free(dp);
    return result;
}

int main() {
    int test_cases[] = {1, 2, 3, 4, 5};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        int steps = test_cases[i];
        int result = climbStairs(steps);
        printf("Input: n = %d\\nOutput: %d\\n", steps, result);
        
        // Show the DP array for small numbers
        if (steps <= 4) {
            printf("DP array: ");
            int* dp = (int*)malloc((steps + 1) * sizeof(int));
            dp[0] = 1;
            dp[1] = 1;
            for (int j = 2; j <= steps; j++) {
                dp[j] = dp[j-1] + dp[j-2];
            }
            for (int j = 0; j <= steps; j++) {
                printf("%d", dp[j]);
                if (j < steps) printf(" -> ");
            }
            printf("\\n");
            free(dp);
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses a dynamic programming array to store the number of ways for each step. It clearly shows the Fibonacci pattern but uses O(n) space.'
        },
        worst: {
          code: `#include <stdio.h>

int climbStairs(int n) {
    if (n <= 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
}

int main() {
    int test_cases[] = {1, 2, 3, 4, 5};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        int steps = test_cases[i];
        int result = climbStairs(steps);
        printf("Input: n = %d\\nOutput: %d\\n", steps, result);
        
        // Show the recursive calls for small numbers
        if (steps <= 3) {
            printf("Recursive calls:\\n");
            if (steps == 1) printf("climbStairs(1) = 1\\n");
            else if (steps == 2) {
                printf("climbStairs(2) = climbStairs(1) + climbStairs(0)\\n");
                printf("climbStairs(2) = 1 + 1 = 2\\n");
            } else if (steps == 3) {
                printf("climbStairs(3) = climbStairs(2) + climbStairs(1)\\n");
                printf("climbStairs(2) = climbStairs(1) + climbStairs(0) = 1 + 1 = 2\\n");
                printf("climbStairs(3) = 2 + 1 = 3\\n");
            }
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(2^n)',
          spaceComplexity: 'O(n)',
          explanation: 'This is the most straightforward recursive approach. It is very inefficient with exponential time complexity due to repeated calculations, but it clearly shows the problem structure.'
        }
      }
    }
  },
  {
    id: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    description: `Given a string s, return the longest palindromic substring in s.

A string is palindromic if it reads the same forward and backward.`,
    difficulty: 'Medium',
    category: ['String', 'Dynamic Programming'],
    input1: 's = "babad"',
    input2: 's = "cbbd"',
    explanation: `## Problem Statement

Given a string s, return the longest palindromic substring in s.

A string is palindromic if it reads the same forward and backward.

## Examples

### Example 1:
**Input:** s = "babad"  
**Output:** "bab"  
**Explanation:** "bab" is the longest palindromic substring. "aba" is also a valid answer.

### Example 2:
**Input:** s = "cbbd"  
**Output:** "bb"  
**Explanation:** "bb" is the longest palindromic substring.

### Example 3:
**Input:** s = "a"  
**Output:** "a"  
**Explanation:** Single character is always a palindrome.

## Intuition

The key insight is to expand around each center (both single character and between two characters) to find palindromes. For each center, we expand outward as long as the characters match.

This approach works because:
- Every palindrome has a center
- We can find all palindromes by checking all possible centers
- The longest palindrome will be found during this expansion

## Approach

### Approach 1: Expand Around Center (Optimal)
1. For each position in the string, treat it as a center
2. Expand left and right as long as characters match
3. Keep track of the longest palindrome found
4. Handle both odd-length (single center) and even-length (two centers) palindromes

### Approach 2: Dynamic Programming
1. Create a 2D DP table where dp[i][j] = true if s[i...j] is palindrome
2. Base case: dp[i][i] = true (single character)
3. For length > 1: dp[i][j] = (s[i] == s[j]) && dp[i+1][j-1]
4. Track the longest palindrome found

### Approach 3: Brute Force
1. Check all possible substrings
2. For each substring, check if it's a palindrome
3. Return the longest one

## Dry Run

Let's trace through Example 1: s = "babad"

### Expand Around Center:
- Center at index 0 (b): expand → "b" (length 1)
- Center at index 1 (a): expand → "aba" (length 3) ✓
- Center at index 2 (b): expand → "b" (length 1)
- Center at index 3 (a): expand → "a" (length 1)
- Center at index 4 (d): expand → "d" (length 1)
- Even centers (between characters):
  - Between 0,1: expand → "b" (length 1)
  - Between 1,2: expand → "b" (length 1)
  - Between 2,3: expand → "b" (length 1)
  - Between 3,4: expand → "d" (length 1)

Longest palindrome: "aba" (length 3)

## Key Insights

1. **Center Expansion**: Every palindrome has a center, so check all possible centers
2. **Even vs Odd**: Handle both single-character centers and two-character centers
3. **Efficiency**: O(n²) time but O(1) space with expand around center
4. **Early Termination**: Can stop expanding when characters don't match

## Edge Cases

1. **Single character**: Always a palindrome
2. **All same characters**: Entire string is palindrome
3. **No palindromes**: Return first character
4. **Even-length palindromes**: Center between two characters

## Time and Space Complexity

- **Time Complexity**: O(n²) - We check each center and expand
- **Space Complexity**: O(1) - Only use a few variables to track longest palindrome`,
    output1: '"bab"',
    output2: '"bb"',
    constraints: `## Constraints
- 1 <= s.length <= 1000
- s consist of only digits and English letters.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void expandAroundCenter(char* s, int left, int right, int* start, int* maxLen) {
    while (left >= 0 && right < strlen(s) && s[left] == s[right]) {
        left--;
        right++;
    }
    
    int currentLen = right - left - 1;
    if (currentLen > *maxLen) {
        *maxLen = currentLen;
        *start = left + 1;
    }
}

char* longestPalindrome(char* s) {
    int n = strlen(s);
    if (n < 2) return s;
    
    int start = 0, maxLen = 1;
    
    // Check each center
    for (int i = 0; i < n; i++) {
        // Odd length palindromes
        expandAroundCenter(s, i, i, &start, &maxLen);
        // Even length palindromes
        expandAroundCenter(s, i, i + 1, &start, &maxLen);
    }
    
    // Create result string
    char* result = (char*)malloc((maxLen + 1) * sizeof(char));
    strncpy(result, s + start, maxLen);
    result[maxLen] = '\\0';
    
    return result;
}

int main() {
    char* test_cases[] = {"babad", "cbbd", "a", "racecar"};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i];
        char* result = longestPalindrome(s);
        printf("Input: s = \\"%s\\"\\n", s);
        printf("Output: \\"%s\\"\\n", result);
        
        // Show the expansion process for the first example
        if (i == 0) {
            printf("\\nExpansion process for \\"babad\\":\\n");
            printf("Center at index 0 (b): expand → \\"b\\" (length 1)\\n");
            printf("Center at index 1 (a): expand → \\"aba\\" (length 3) ✓\\n");
            printf("Center at index 2 (b): expand → \\"b\\" (length 1)\\n");
            printf("Center at index 3 (a): expand → \\"a\\" (length 1)\\n");
            printf("Center at index 4 (d): expand → \\"d\\" (length 1)\\n");
        }
        printf("\\n");
        free(result);
    }
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using expand around center approach. It checks each possible center and expands outward to find palindromes, achieving O(n²) time and O(1) space complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* longestPalindrome(char* s) {
    int n = strlen(s);
    if (n < 2) return s;
    
    // Create DP table
    int** dp = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)calloc(n, sizeof(int));
    }
    
    int start = 0, maxLen = 1;
    
    // Base case: single characters are palindromes
    for (int i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    
    // Check for palindromes of length 2
    for (int i = 0; i < n - 1; i++) {
        if (s[i] == s[i + 1]) {
            dp[i][i + 1] = 1;
            start = i;
            maxLen = 2;
        }
    }
    
    // Check for palindromes of length > 2
    for (int len = 3; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = 1;
                if (len > maxLen) {
                    start = i;
                    maxLen = len;
                }
            }
        }
    }
    
    // Create result string
    char* result = (char*)malloc((maxLen + 1) * sizeof(char));
    strncpy(result, s + start, maxLen);
    result[maxLen] = '\\0';
    
    // Free DP table
    for (int i = 0; i < n; i++) {
        free(dp[i]);
    }
    free(dp);
    
    return result;
}

int main() {
    char* test_cases[] = {"babad", "cbbd", "a"};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i];
        char* result = longestPalindrome(s);
        printf("Input: s = \\"%s\\"\\n", s);
        printf("Output: \\"%s\\"\\n", result);
        
        if (i == 0) {
            printf("\\nDP table for \\"babad\\":\\n");
            printf("Length 1: All diagonal elements = 1\\n");
            printf("Length 2: Check adjacent pairs\\n");
            printf("Length 3: Check with DP[i+1][j-1]\\n");
        }
        printf("\\n");
        free(result);
    }
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n²)',
          explanation: 'This approach uses dynamic programming to build a table of palindrome substrings. It is less space efficient but shows the DP approach clearly.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int isPalindrome(char* s, int start, int end) {
    while (start < end) {
        if (s[start] != s[end]) {
            return 0;
        }
        start++;
        end--;
    }
    return 1;
}

char* longestPalindrome(char* s) {
    int n = strlen(s);
    if (n < 2) return s;
    
    int start = 0, maxLen = 1;
    
    // Check all possible substrings
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            if (isPalindrome(s, i, j)) {
                int currentLen = j - i + 1;
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                    start = i;
                }
            }
        }
    }
    
    // Create result string
    char* result = (char*)malloc((maxLen + 1) * sizeof(char));
    strncpy(result, s + start, maxLen);
    result[maxLen] = '\\0';
    
    return result;
}

int main() {
    char* test_cases[] = {"babad", "cbbd"};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i];
        char* result = longestPalindrome(s);
        printf("Input: s = \\"%s\\"\\n", s);
        printf("Output: \\"%s\\"\\n", result);
        
        if (i == 0) {
            printf("\\nAll substrings of \\"babad\\":\\n");
            printf("Length 1: b, a, b, a, d\\n");
            printf("Length 2: ba, ab, ba, ad\\n");
            printf("Length 3: bab, aba, bad\\n");
            printf("Length 4: baba, abad\\n");
            printf("Length 5: babad\\n");
            printf("Checking each for palindrome...\\n");
        }
        printf("\\n");
        free(result);
    }
    
    return 0;
}`,
          timeComplexity: 'O(n³)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most straightforward approach that checks all possible substrings. It is very inefficient with O(n³) time complexity but is easy to understand.'
        }
      }
    }
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    description: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    difficulty: 'Medium',
    category: ['String', 'Hash Table'],
    input1: 'strs = ["eat","tea","tan","ate","nat","bat"]',
    input2: 'strs = [""]',
    explanation: `## Problem Statement

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Examples

### Example 1:
**Input:** strs = ["eat","tea","tan","ate","nat","bat"]  
**Output:** [["bat"],["nat","tan"],["ate","eat","tea"]]  
**Explanation:** 
- "bat" has no anagrams
- "nat" and "tan" are anagrams
- "ate", "eat", and "tea" are anagrams

### Example 2:
**Input:** strs = [""]  
**Output:** [[""]]  
**Explanation:** Empty string is grouped with itself.

### Example 3:
**Input:** strs = ["a"]  
**Output:** [["a"]]  
**Explanation:** Single character is grouped with itself.

## Intuition

The key insight is that anagrams have the same character frequency. We can use this property to group them together by:

1. Creating a sorted version of each string as a key
2. Or creating a character frequency count as a key
3. Grouping strings with the same key together

This works because anagrams will always have the same sorted representation or character count.

## Approach

### Approach 1: Sort as Key (Optimal)
1. For each string, create a sorted version as the key
2. Use a hash table to group strings with the same sorted key
3. Return all groups

### Approach 2: Character Count as Key
1. For each string, create a character frequency array
2. Convert the frequency array to a string key
3. Group strings with the same frequency key

### Approach 3: Prime Number Product
1. Assign prime numbers to each character
2. Calculate product of character primes for each string
3. Group strings with the same product

## Dry Run

Let's trace through Example 1: strs = ["eat","tea","tan","ate","nat","bat"]

### Sort as Key Approach:
- "eat" → sorted: "aet" → group: ["eat"]
- "tea" → sorted: "aet" → group: ["eat", "tea"]
- "tan" → sorted: "ant" → group: ["tan"]
- "ate" → sorted: "aet" → group: ["eat", "tea", "ate"]
- "nat" → sorted: "ant" → group: ["tan", "nat"]
- "bat" → sorted: "abt" → group: ["bat"]

Final groups: [["bat"], ["nat","tan"], ["ate","eat","tea"]]

### Character Count Approach:
- "eat" → count: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] → key: "1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1"
- "tea" → count: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] → same key

## Key Insights

1. **Character Frequency**: Anagrams have identical character counts
2. **Sorting as Key**: Sorted version of anagrams is always the same
3. **Hash Table**: Efficient grouping using sorted string as key
4. **Time vs Space**: Sort approach is simpler, count approach avoids sorting

## Edge Cases

1. **Empty strings**: Handle empty string grouping
2. **Single characters**: Single character strings
3. **No anagrams**: Each string is unique
4. **All anagrams**: All strings are anagrams of each other

## Time and Space Complexity

- **Time Complexity**: O(n * k * log k) - n strings, k is max string length
- **Space Complexity**: O(n * k) - Store all strings in hash table`,
    output1: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
    output2: '[[""]]',
    constraints: `## Constraints
- 1 <= strs.length <= 10^4
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Structure to store string groups
typedef struct {
    char** strings;
    int count;
    int capacity;
} StringGroup;

typedef struct {
    StringGroup* groups;
    int count;
    int capacity;
} GroupResult;

// Compare function for qsort
int compareChars(const void* a, const void* b) {
    return (*(char*)a - *(char*)b);
}

// Create a sorted key for a string
char* createSortedKey(const char* str) {
    int len = strlen(str);
    char* key = (char*)malloc((len + 1) * sizeof(char));
    strcpy(key, str);
    qsort(key, len, sizeof(char), compareChars);
    return key;
}

// Add string to a group
void addToGroup(StringGroup* group, const char* str) {
    if (group->count >= group->capacity) {
        group->capacity *= 2;
        group->strings = (char**)realloc(group->strings, group->capacity * sizeof(char*));
    }
    group->strings[group->count] = strdup(str);
    group->count++;
}

// Find or create group for a key
StringGroup* findOrCreateGroup(GroupResult* result, const char* key) {
    for (int i = 0; i < result->count; i++) {
        char* groupKey = createSortedKey(result->groups[i].strings[0]);
        if (strcmp(key, groupKey) == 0) {
            free(groupKey);
            return &result->groups[i];
        }
        free(groupKey);
    }
    
    // Create new group
    if (result->count >= result->capacity) {
        result->capacity *= 2;
        result->groups = (StringGroup*)realloc(result->groups, result->capacity * sizeof(StringGroup));
    }
    
    result->groups[result->count].strings = (char**)malloc(10 * sizeof(char*));
    result->groups[result->count].count = 0;
    result->groups[result->count].capacity = 10;
    
    return &result->groups[result->count++];
}

GroupResult* groupAnagrams(char** strs, int strsSize) {
    GroupResult* result = (GroupResult*)malloc(sizeof(GroupResult));
    result->groups = (StringGroup*)malloc(10 * sizeof(StringGroup));
    result->count = 0;
    result->capacity = 10;
    
    for (int i = 0; i < strsSize; i++) {
        char* key = createSortedKey(strs[i]);
        StringGroup* group = findOrCreateGroup(result, key);
        addToGroup(group, strs[i]);
        free(key);
    }
    
    return result;
}

int main() {
    char* strs[] = {"eat", "tea", "tan", "ate", "nat", "bat"};
    int strsSize = sizeof(strs) / sizeof(strs[0]);
    
    GroupResult* result = groupAnagrams(strs, strsSize);
    
    printf("Input: strs = [\\"eat\\",\\"tea\\",\\"tan\\",\\"ate\\",\\"nat\\",\\"bat\\"]\\n");
    printf("Output: [");
    
    for (int i = 0; i < result->count; i++) {
        printf("[");
        for (int j = 0; j < result->groups[i].count; j++) {
            printf("\\"%s\\"", result->groups[i].strings[j]);
            if (j < result->groups[i].count - 1) printf(",");
        }
        printf("]");
        if (i < result->count - 1) printf(",");
    }
    printf("]\\n");
    
    // Show the sorting process
    printf("\\nSorting process:\\n");
    for (int i = 0; i < strsSize; i++) {
        char* key = createSortedKey(strs[i]);
        printf("\\"%s\\" → sorted: \\"%s\\"\\n", strs[i], key);
        free(key);
    }
    
    // Cleanup
    for (int i = 0; i < result->count; i++) {
        for (int j = 0; j < result->groups[i].count; j++) {
            free(result->groups[i].strings[j]);
        }
        free(result->groups[i].strings);
    }
    free(result->groups);
    free(result);
    
    return 0;
}`,
          timeComplexity: 'O(n * k * log k)',
          spaceComplexity: 'O(n * k)',
          explanation: 'This is the optimal solution using sorting as the key. It sorts each string and uses the sorted version as a key to group anagrams together.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Structure to store string groups
typedef struct {
    char** strings;
    int count;
    int capacity;
} StringGroup;

typedef struct {
    StringGroup* groups;
    int count;
    int capacity;
} GroupResult;

// Create character count key
char* createCountKey(const char* str) {
    int count[26] = {0};
    int len = strlen(str);
    
    for (int i = 0; i < len; i++) {
        count[str[i] - 'a']++;
    }
    
    char* key = (char*)malloc(100 * sizeof(char));
    int pos = 0;
    for (int i = 0; i < 26; i++) {
        pos += sprintf(key + pos, "%d,", count[i]);
    }
    key[pos - 1] = '\\0'; // Remove last comma
    
    return key;
}

// Add string to a group
void addToGroup(StringGroup* group, const char* str) {
    if (group->count >= group->capacity) {
        group->capacity *= 2;
        group->strings = (char**)realloc(group->strings, group->capacity * sizeof(char*));
    }
    group->strings[group->count] = strdup(str);
    group->count++;
}

// Find or create group for a key
StringGroup* findOrCreateGroup(GroupResult* result, const char* key) {
    for (int i = 0; i < result->count; i++) {
        char* groupKey = createCountKey(result->groups[i].strings[0]);
        if (strcmp(key, groupKey) == 0) {
            free(groupKey);
            return &result->groups[i];
        }
        free(groupKey);
    }
    
    // Create new group
    if (result->count >= result->capacity) {
        result->capacity *= 2;
        result->groups = (StringGroup*)realloc(result->groups, result->capacity * sizeof(StringGroup));
    }
    
    result->groups[result->count].strings = (char**)malloc(10 * sizeof(char*));
    result->groups[result->count].count = 0;
    result->groups[result->count].capacity = 10;
    
    return &result->groups[result->count++];
}

GroupResult* groupAnagrams(char** strs, int strsSize) {
    GroupResult* result = (GroupResult*)malloc(sizeof(GroupResult));
    result->groups = (StringGroup*)malloc(10 * sizeof(StringGroup));
    result->count = 0;
    result->capacity = 10;
    
    for (int i = 0; i < strsSize; i++) {
        char* key = createCountKey(strs[i]);
        StringGroup* group = findOrCreateGroup(result, key);
        addToGroup(group, strs[i]);
        free(key);
    }
    
    return result;
}

int main() {
    char* strs[] = {"eat", "tea", "tan", "ate", "nat", "bat"};
    int strsSize = sizeof(strs) / sizeof(strs[0]);
    
    GroupResult* result = groupAnagrams(strs, strsSize);
    
    printf("Input: strs = [\\"eat\\",\\"tea\\",\\"tan\\",\\"ate\\",\\"nat\\",\\"bat\\"]\\n");
    printf("Output: [");
    
    for (int i = 0; i < result->count; i++) {
        printf("[");
        for (int j = 0; j < result->groups[i].count; j++) {
            printf("\\"%s\\"", result->groups[i].strings[j]);
            if (j < result->groups[i].count - 1) printf(",");
        }
        printf("]");
        if (i < result->count - 1) printf(",");
    }
    printf("]\\n");
    
    // Show the count process
    printf("\\nCharacter count process:\\n");
    for (int i = 0; i < strsSize; i++) {
        char* key = createCountKey(strs[i]);
        printf("\\"%s\\" → count key: %s\\n", strs[i], key);
        free(key);
    }
    
    // Cleanup
    for (int i = 0; i < result->count; i++) {
        for (int j = 0; j < result->groups[i].count; j++) {
            free(result->groups[i].strings[j]);
        }
        free(result->groups[i].strings);
    }
    free(result->groups);
    free(result);
    
    return 0;
}`,
          timeComplexity: 'O(n * k)',
          spaceComplexity: 'O(n * k)',
          explanation: 'This approach uses character frequency counting instead of sorting. It creates a key based on character counts, avoiding the need to sort each string.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Structure to store string groups
typedef struct {
    char** strings;
    int count;
    int capacity;
} StringGroup;

typedef struct {
    StringGroup* groups;
    int count;
    int capacity;
} GroupResult;

// Check if two strings are anagrams
int areAnagrams(const char* str1, const char* str2) {
    int len1 = strlen(str1);
    int len2 = strlen(str2);
    
    if (len1 != len2) return 0;
    
    int count[26] = {0};
    
    for (int i = 0; i < len1; i++) {
        count[str1[i] - 'a']++;
        count[str2[i] - 'a']--;
    }
    
    for (int i = 0; i < 26; i++) {
        if (count[i] != 0) return 0;
    }
    
    return 1;
}

// Add string to a group
void addToGroup(StringGroup* group, const char* str) {
    if (group->count >= group->capacity) {
        group->capacity *= 2;
        group->strings = (char**)realloc(group->strings, group->capacity * sizeof(char*));
    }
    group->strings[group->count] = strdup(str);
    group->count++;
}

GroupResult* groupAnagrams(char** strs, int strsSize) {
    GroupResult* result = (GroupResult*)malloc(sizeof(GroupResult));
    result->groups = (StringGroup*)malloc(10 * sizeof(StringGroup));
    result->count = 0;
    result->capacity = 10;
    
    int* used = (int*)calloc(strsSize, sizeof(int));
    
    for (int i = 0; i < strsSize; i++) {
        if (used[i]) continue;
        
        // Create new group
        if (result->count >= result->capacity) {
            result->capacity *= 2;
            result->groups = (StringGroup*)realloc(result->groups, result->capacity * sizeof(StringGroup));
        }
        
        result->groups[result->count].strings = (char**)malloc(10 * sizeof(char*));
        result->groups[result->count].count = 0;
        result->groups[result->count].capacity = 10;
        
        // Add current string to group
        addToGroup(&result->groups[result->count], strs[i]);
        used[i] = 1;
        
        // Find all anagrams of current string
        for (int j = i + 1; j < strsSize; j++) {
            if (!used[j] && areAnagrams(strs[i], strs[j])) {
                addToGroup(&result->groups[result->count], strs[j]);
                used[j] = 1;
            }
        }
        
        result->count++;
    }
    
    free(used);
    return result;
}

int main() {
    char* strs[] = {"eat", "tea", "tan", "ate", "nat", "bat"};
    int strsSize = sizeof(strs) / sizeof(strs[0]);
    
    GroupResult* result = groupAnagrams(strs, strsSize);
    
    printf("Input: strs = [\\"eat\\",\\"tea\\",\\"tan\\",\\"ate\\",\\"nat\\",\\"bat\\"]\\n");
    printf("Output: [");
    
    for (int i = 0; i < result->count; i++) {
        printf("[");
        for (int j = 0; j < result->groups[i].count; j++) {
            printf("\\"%s\\"", result->groups[i].strings[j]);
            if (j < result->groups[i].count - 1) printf(",");
        }
        printf("]");
        if (i < result->count - 1) printf(",");
    }
    printf("]\\n");
    
    // Show the comparison process
    printf("\\nAnagram comparison process:\\n");
    printf("Comparing \\"eat\\" with others:\\n");
    for (int i = 1; i < strsSize; i++) {
        printf("\\"eat\\" vs \\"%s\\": %s\\n", strs[i], areAnagrams("eat", strs[i]) ? "Anagrams" : "Not anagrams");
    }
    
    // Cleanup
    for (int i = 0; i < result->count; i++) {
        for (int j = 0; j < result->groups[i].count; j++) {
            free(result->groups[i].strings[j]);
        }
        free(result->groups[i].strings);
    }
    free(result->groups);
    free(result);
    
    return 0;
}`,
          timeComplexity: 'O(n² * k)',
          spaceComplexity: 'O(n * k)',
          explanation: 'This approach compares each string with every other string to find anagrams. It is very inefficient with O(n² * k) time complexity but is straightforward to understand.'
        }
      }
    }
  },
  {
    id: 'longest-substring-with-at-most-two-distinct-characters',
    title: 'Longest Substring with At Most Two Distinct Characters',
    description: `Given a string s, return the length of the longest substring that contains at most two distinct characters.`,
    difficulty: 'Medium',
    category: ['String', 'Sliding Window'],
    input1: 's = "eceba"',
    input2: 's = "ccaabbb"',
    explanation: `## Problem Statement

Given a string s, return the length of the longest substring that contains at most two distinct characters.

## Examples

### Example 1:
**Input:** s = "eceba"  
**Output:** 3  
**Explanation:** The substring is "ece" which its length is 3.

### Example 2:
**Input:** s = "ccaabbb"  
**Output:** 5  
**Explanation:** The substring is "aabbb" which its length is 5.

### Example 3:
**Input:** s = "a"  
**Output:** 1  
**Explanation:** The substring is "a" which its length is 1.

## Intuition

The key insight is to use a sliding window approach with a hash table to track character frequencies. We expand the window by adding characters from the right and shrink it from the left when we have more than two distinct characters.

This approach works because:
- We need to maintain at most two distinct characters in our window
- When we exceed two distinct characters, we shrink the window from the left
- We keep track of the maximum length found so far

## Approach

### Approach 1: Sliding Window with Hash Table (Optimal)
1. Use two pointers (left and right) to represent the window
2. Use a hash table to track character frequencies in the current window
3. Expand the window by moving the right pointer
4. When we have more than 2 distinct characters, shrink the window from the left
5. Keep track of the maximum length found

### Approach 2: Sliding Window with Array
1. Use a fixed-size array instead of hash table for character counting
2. Since we only have lowercase letters, we can use an array of size 26
3. Same logic as hash table approach but more efficient

### Approach 3: Brute Force
1. Check all possible substrings
2. For each substring, count distinct characters
3. Return the length of the longest valid substring

## Dry Run

Let's trace through Example 1: s = "eceba"

### Sliding Window Approach:
- left=0, right=0: window="e", distinct=1, maxLen=1
- left=0, right=1: window="ec", distinct=2, maxLen=2
- left=0, right=2: window="ece", distinct=2, maxLen=3
- left=0, right=3: window="eceb", distinct=3 → shrink left
- left=1, right=3: window="ceb", distinct=3 → shrink left
- left=2, right=3: window="eb", distinct=2, maxLen=3
- left=2, right=4: window="eba", distinct=3 → shrink left
- left=3, right=4: window="ba", distinct=2, maxLen=3

Final result: 3

## Key Insights

1. **Sliding Window**: Expand right, shrink left when needed
2. **Character Counting**: Track frequency of each character in window
3. **Distinct Count**: Maintain count of distinct characters in window
4. **Optimal Substructure**: Each valid window ending at right gives us a candidate

## Edge Cases

1. **Single character**: Return length 1
2. **All same characters**: Return entire string length
3. **Two distinct characters**: Return entire string length
4. **Empty string**: Return 0

## Time and Space Complexity

- **Time Complexity**: O(n) - Each character is visited at most twice
- **Space Complexity**: O(1) - Fixed size hash table/array`,
    output1: '3',
    output2: '5',
    constraints: `## Constraints
- 1 <= s.length <= 10^5
- s consists of English letters.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int lengthOfLongestSubstringTwoDistinct(char* s) {
    int n = strlen(s);
    if (n <= 2) return n;
    
    int count[128] = {0}; // ASCII character count
    int distinct = 0;
    int left = 0, right = 0;
    int maxLen = 0;
    
    while (right < n) {
        // Add character to window
        if (count[s[right]] == 0) {
            distinct++;
        }
        count[s[right]]++;
        
        // Shrink window if we have more than 2 distinct characters
        while (distinct > 2) {
            count[s[left]]--;
            if (count[s[left]] == 0) {
                distinct--;
            }
            left++;
        }
        
        // Update max length
        maxLen = (right - left + 1 > maxLen) ? right - left + 1 : maxLen;
        right++;
    }
    
    return maxLen;
}

int main() {
    char* test_cases[] = {"eceba", "ccaabbb", "a", "aa", "ab"};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i];
        int result = lengthOfLongestSubstringTwoDistinct(s);
        printf("Input: s = \\"%s\\"\\n", s);
        printf("Output: %d\\n", result);
        
        // Show the sliding window process for the first example
        if (i == 0) {
            printf("\\nSliding window process for \\"eceba\\":\\n");
            printf("left=0, right=0: window=\\"e\\", distinct=1, maxLen=1\\n");
            printf("left=0, right=1: window=\\"ec\\", distinct=2, maxLen=2\\n");
            printf("left=0, right=2: window=\\"ece\\", distinct=2, maxLen=3\\n");
            printf("left=0, right=3: window=\\"eceb\\", distinct=3 → shrink left\\n");
            printf("left=1, right=3: window=\\"ceb\\", distinct=3 → shrink left\\n");
            printf("left=2, right=3: window=\\"eb\\", distinct=2, maxLen=3\\n");
            printf("left=2, right=4: window=\\"eba\\", distinct=3 → shrink left\\n");
            printf("left=3, right=4: window=\\"ba\\", distinct=2, maxLen=3\\n");
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using sliding window with character counting. It maintains a window with at most two distinct characters and tracks the maximum length found.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Simple hash table for character counting
typedef struct {
    char key;
    int value;
    int used;
} HashEntry;

typedef struct {
    HashEntry* entries;
    int size;
} HashTable;

HashTable* createHashTable(int size) {
    HashTable* ht = (HashTable*)malloc(sizeof(HashTable));
    ht->size = size;
    ht->entries = (HashEntry*)calloc(size, sizeof(HashEntry));
    return ht;
}

int hash(char key, int size) {
    return key % size;
}

void put(HashTable* ht, char key, int value) {
    int index = hash(key, ht->size);
    int original = index;
    
    do {
        if (!ht->entries[index].used || ht->entries[index].key == key) {
            ht->entries[index].key = key;
            ht->entries[index].value = value;
            ht->entries[index].used = 1;
            return;
        }
        index = (index + 1) % ht->size;
    } while (index != original);
}

int get(HashTable* ht, char key) {
    int index = hash(key, ht->size);
    int original = index;
    
    do {
        if (ht->entries[index].used && ht->entries[index].key == key) {
            return ht->entries[index].value;
        }
        index = (index + 1) % ht->size;
    } while (index != original);
    
    return 0;
}

void remove(HashTable* ht, char key) {
    int index = hash(key, ht->size);
    int original = index;
    
    do {
        if (ht->entries[index].used && ht->entries[index].key == key) {
            ht->entries[index].used = 0;
            return;
        }
        index = (index + 1) % ht->size;
    } while (index != original);
}

int getDistinctCount(HashTable* ht) {
    int count = 0;
    for (int i = 0; i < ht->size; i++) {
        if (ht->entries[i].used) count++;
    }
    return count;
}

int lengthOfLongestSubstringTwoDistinct(char* s) {
    int n = strlen(s);
    if (n <= 2) return n;
    
    HashTable* ht = createHashTable(128);
    int left = 0, right = 0;
    int maxLen = 0;
    
    while (right < n) {
        // Add character to window
        int currentCount = get(ht, s[right]);
        put(ht, s[right], currentCount + 1);
        
        // Shrink window if we have more than 2 distinct characters
        while (getDistinctCount(ht) > 2) {
            int leftCount = get(ht, s[left]);
            if (leftCount == 1) {
                remove(ht, s[left]);
            } else {
                put(ht, s[left], leftCount - 1);
            }
            left++;
        }
        
        // Update max length
        maxLen = (right - left + 1 > maxLen) ? right - left + 1 : maxLen;
        right++;
    }
    
    free(ht->entries);
    free(ht);
    return maxLen;
}

int main() {
    char* test_cases[] = {"eceba", "ccaabbb", "a"};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i];
        int result = lengthOfLongestSubstringTwoDistinct(s);
        printf("Input: s = \\"%s\\"\\n", s);
        printf("Output: %d\\n", result);
        
        if (i == 0) {
            printf("\\nHash table approach:\\n");
            printf("Uses hash table to track character frequencies\\n");
            printf("More complex but shows hash table implementation\\n");
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach uses a hash table to track character frequencies instead of a fixed array. It is more complex but shows the hash table implementation.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Check if substring has at most two distinct characters
int hasAtMostTwoDistinct(char* s, int start, int end) {
    int count[128] = {0};
    int distinct = 0;
    
    for (int i = start; i <= end; i++) {
        if (count[s[i]] == 0) {
            distinct++;
        }
        count[s[i]]++;
    }
    
    return distinct <= 2;
}

int lengthOfLongestSubstringTwoDistinct(char* s) {
    int n = strlen(s);
    if (n <= 2) return n;
    
    int maxLen = 0;
    
    // Check all possible substrings
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            if (hasAtMostTwoDistinct(s, i, j)) {
                int currentLen = j - i + 1;
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                }
            }
        }
    }
    
    return maxLen;
}

int main() {
    char* test_cases[] = {"eceba", "ccaabbb"};
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i];
        int result = lengthOfLongestSubstringTwoDistinct(s);
        printf("Input: s = \\"%s\\"\\n", s);
        printf("Output: %d\\n", result);
        
        if (i == 0) {
            printf("\\nBrute force approach:\\n");
            printf("All substrings of \\"eceba\\":\\n");
            printf("Length 1: e, c, e, b, a\\n");
            printf("Length 2: ec, ce, eb, ba\\n");
            printf("Length 3: ece, ceb, eba\\n");
            printf("Length 4: eceb, ceba\\n");
            printf("Length 5: eceba\\n");
            printf("Checking each for at most 2 distinct characters...\\n");
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(n³)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most straightforward approach that checks all possible substrings. It is very inefficient with O(n³) time complexity but is easy to understand.'
        }
      }
    }
  },
  {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

The elevation map is represented by array height where height[i] is the height of the bar at index i.`,
    difficulty: 'Hard',
    category: ['Array', 'Dynamic Programming', 'Two Pointers'],
    input1: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
    input2: 'height = [4,2,0,3,2,5]',
    explanation: `## Problem Statement

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

The elevation map is represented by array height where height[i] is the height of the bar at index i.

## Examples

### Example 1:
**Input:** height = [0,1,0,2,1,0,1,3,2,1,2,1]  
**Output:** 6  
**Explanation:** The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.

### Example 2:
**Input:** height = [4,2,0,3,2,5]  
**Output:** 9  
**Explanation:** The elevation map is represented by array [4,2,0,3,2,5]. In this case, 9 units of rain water are being trapped.

## Intuition

The key insight is that the amount of water trapped at any position depends on the minimum of the maximum heights to the left and right of that position. The water level at any point cannot exceed this minimum.

This works because:
- Water can only be trapped if there are higher bars on both sides
- The water level is limited by the lower of the two maximum heights
- The actual water trapped is the difference between this level and the current bar height

## Approach

### Approach 1: Two Pointers (Optimal)
1. Use two pointers, left and right, starting from both ends
2. Keep track of leftMax and rightMax
3. Move the pointer with the smaller maximum height
4. Calculate water trapped at each position

### Approach 2: Dynamic Programming
1. Create two arrays: leftMax and rightMax
2. leftMax[i] = maximum height from left to i
3. rightMax[i] = maximum height from i to right
4. Water trapped = min(leftMax[i], rightMax[i]) - height[i]

### Approach 3: Brute Force
1. For each position, find the maximum height to the left and right
2. Calculate water trapped as min(leftMax, rightMax) - height[i]

## Dry Run

Let's trace through Example 1: height = [0,1,0,2,1,0,1,3,2,1,2,1]

### Two Pointers Approach:
- left = 0, right = 11, leftMax = 0, rightMax = 1
- height[left] = 0 < height[right] = 1, so move left
- Water at index 0: min(0, 1) - 0 = 0
- left = 1, leftMax = 1, rightMax = 1
- height[left] = 1 = height[right] = 1, move left
- Water at index 1: min(1, 1) - 1 = 0
- left = 2, leftMax = 1, rightMax = 1
- height[left] = 0 < height[right] = 1, move left
- Water at index 2: min(1, 1) - 0 = 1
- Continue this process...

Total water trapped = 6

## Key Insights

1. **Water Level**: Water level at any point is limited by the minimum of left and right maximum heights
2. **Two Pointers**: Efficient approach using two pointers from both ends
3. **Greedy Choice**: Always move the pointer with the smaller maximum height
4. **Edge Cases**: Handle cases where bars are in ascending/descending order

## Edge Cases

1. **Ascending order**: No water trapped
2. **Descending order**: No water trapped
3. **All same height**: No water trapped
4. **Single bar**: No water trapped

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through the array
- **Space Complexity**: O(1) - Only use a few variables`,
    output1: '6',
    output2: '9',
    constraints: `## Constraints
- n == height.length
- 1 <= n <= 2 * 10⁴
- 0 <= height[i] <= 10⁵`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

int trap(int* height, int heightSize) {
    if (heightSize < 3) return 0;
    
    int left = 0, right = heightSize - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}

int main() {
    int height1[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    int height2[] = {4,2,0,3,2,5};
    
    printf("Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\\n");
    printf("Output: %d\\n", trap(height1, 12));
    
    printf("\\nInput: height = [4,2,0,3,2,5]\\n");
    printf("Output: %d\\n", trap(height2, 6));
    
    printf("\\nTwo Pointers Approach:\\n");
    printf("Use two pointers from both ends\\n");
    printf("Move pointer with smaller maximum height\\n");
    printf("Calculate water trapped at each position\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using two pointers. It efficiently calculates trapped water by moving pointers from both ends and tracking maximum heights.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int trap(int* height, int heightSize) {
    if (heightSize < 3) return 0;
    
    // Create arrays to store maximum heights
    int* leftMax = (int*)malloc(heightSize * sizeof(int));
    int* rightMax = (int*)malloc(heightSize * sizeof(int));
    
    // Calculate left maximum heights
    leftMax[0] = height[0];
    for (int i = 1; i < heightSize; i++) {
        leftMax[i] = (height[i] > leftMax[i-1]) ? height[i] : leftMax[i-1];
    }
    
    // Calculate right maximum heights
    rightMax[heightSize-1] = height[heightSize-1];
    for (int i = heightSize-2; i >= 0; i--) {
        rightMax[i] = (height[i] > rightMax[i+1]) ? height[i] : rightMax[i+1];
    }
    
    // Calculate trapped water
    int water = 0;
    for (int i = 0; i < heightSize; i++) {
        int minHeight = (leftMax[i] < rightMax[i]) ? leftMax[i] : rightMax[i];
        if (minHeight > height[i]) {
            water += minHeight - height[i];
        }
    }
    
    free(leftMax);
    free(rightMax);
    return water;
}

int main() {
    int height1[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    int height2[] = {4,2,0,3,2,5};
    
    printf("Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\\n");
    printf("Output: %d\\n", trap(height1, 12));
    
    printf("\\nInput: height = [4,2,0,3,2,5]\\n");
    printf("Output: %d\\n", trap(height2, 6));
    
    printf("\\nDynamic Programming Approach:\\n");
    printf("Precompute left and right maximum heights\\n");
    printf("Calculate water trapped using min(leftMax, rightMax) - height[i]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses dynamic programming to precompute left and right maximum heights. It is less space efficient but shows the DP approach clearly.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int trap(int* height, int heightSize) {
    if (heightSize < 3) return 0;
    
    int water = 0;
    
    // For each position, find maximum heights to left and right
    for (int i = 1; i < heightSize - 1; i++) {
        int leftMax = 0, rightMax = 0;
        
        // Find maximum height to the left
        for (int j = 0; j < i; j++) {
            if (height[j] > leftMax) {
                leftMax = height[j];
            }
        }
        
        // Find maximum height to the right
        for (int j = i + 1; j < heightSize; j++) {
            if (height[j] > rightMax) {
                rightMax = height[j];
            }
        }
        
        // Calculate water trapped at this position
        int minHeight = (leftMax < rightMax) ? leftMax : rightMax;
        if (minHeight > height[i]) {
            water += minHeight - height[i];
        }
    }
    
    return water;
}

int main() {
    int height1[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    int height2[] = {4,2,0,3,2,5};
    
    printf("Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\\n");
    printf("Output: %d\\n", trap(height1, 12));
    
    printf("\\nInput: height = [4,2,0,3,2,5]\\n");
    printf("Output: %d\\n", trap(height2, 6));
    
    printf("\\nBrute Force Approach:\\n");
    printf("For each position, find maximum heights to left and right\\n");
    printf("Calculate water trapped using min(leftMax, rightMax) - height[i]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the most straightforward approach that finds maximum heights for each position. It is inefficient with O(n²) time complexity but is easy to understand.'
        }
      }
    }
  },
  {
    id: 'regular-expression-matching',
    title: 'Regular Expression Matching',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).`,
    difficulty: 'Hard',
    category: ['String', 'Dynamic Programming'],
    input1: 's = "aa", p = "a"',
    input2: 's = "aa", p = "a*"',
    explanation: `## Problem Statement

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

## Examples

### Example 1:
**Input:** s = "aa", p = "a"  
**Output:** false  
**Explanation:** "a" does not match the entire string "aa".

### Example 2:
**Input:** s = "aa", p = "a*"  
**Output:** true  
**Explanation:** '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

### Example 3:
**Input:** s = "ab", p = ".*"  
**Output:** true  
**Explanation:** ".*" means "zero or more (*) of any character (.)".

### Example 4:
**Input:** s = "aab", p = "c*a*b"  
**Output:** true  
**Explanation:** c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

## Intuition

The key insight is to use dynamic programming to build a table where dp[i][j] represents whether the first i characters of string s match the first j characters of pattern p.

This works because:
- We can break down the problem into smaller subproblems
- The result depends on previous matches and current character comparisons
- '*' requires special handling for zero or more repetitions

## Approach

### Approach 1: Dynamic Programming (Optimal)
1. Create a 2D DP table where dp[i][j] = true if s[0...i-1] matches p[0...j-1]
2. Base case: dp[0][0] = true (empty string matches empty pattern)
3. Handle special cases for '*' and '.'
4. Fill the table using recurrence relations

### Approach 2: Recursive with Memoization
1. Use recursion to match characters
2. Handle '*' by trying zero or more repetitions
3. Use memoization to avoid redundant calculations

### Approach 3: Brute Force Recursion
1. Recursively try all possible matches
2. Handle '*' by trying different numbers of repetitions
3. No optimization, very slow

## Dry Run

Let's trace through Example 2: s = "aa", p = "a*"

### DP Table Construction:
- dp[0][0] = true (empty matches empty)
- dp[0][1] = false (empty doesn't match "a")
- dp[0][2] = true (empty matches "a*" because * can match 0 times)
- dp[1][0] = false (non-empty doesn't match empty)
- dp[1][1] = true ("a" matches "a")
- dp[1][2] = true ("a" matches "a*" because * can match 1 time)
- dp[2][0] = false
- dp[2][1] = false ("aa" doesn't match "a")
- dp[2][2] = true ("aa" matches "a*" because * can match 2 times)

Result: dp[2][2] = true

## Key Insights

1. **DP Table**: Use 2D DP to track matches for all prefixes
2. **Base Cases**: Empty string and pattern matching
3. **Special Characters**: Handle '.' and '*' with specific logic
4. **Recurrence**: Current match depends on previous matches

## Edge Cases

1. **Empty string and pattern**: Should match
2. **Pattern with only '*'**: Can match empty string
3. **String with no pattern**: Should not match
4. **Multiple '*'**: Handle consecutive asterisks

## Time and Space Complexity

- **Time Complexity**: O(m*n) - Fill the entire DP table
- **Space Complexity**: O(m*n) - Store the DP table`,
    output1: 'false',
    output2: 'true',
    constraints: `## Constraints
- 1 <= s.length <= 20
- 1 <= p.length <= 30
- s contains only lowercase English letters.
- p contains only lowercase English letters, '.', and '*'.
- It is guaranteed for each appearance of the character '*', there will be a previous valid character to repeat.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int isMatch(char* s, char* p) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Create DP table
    int** dp = (int**)malloc((m + 1) * sizeof(int*));
    for (int i = 0; i <= m; i++) {
        dp[i] = (int*)calloc(n + 1, sizeof(int));
    }
    
    // Base case: empty string matches empty pattern
    dp[0][0] = 1;
    
    // Handle patterns that can match empty string
    for (int j = 1; j <= n; j++) {
        if (p[j-1] == '*') {
            dp[0][j] = dp[0][j-2];
        }
    }
    
    // Fill DP table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p[j-1] == '.' || p[j-1] == s[i-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] == '*') {
                dp[i][j] = dp[i][j-2]; // Match 0 times
                if (p[j-2] == '.' || p[j-2] == s[i-1]) {
                    dp[i][j] = dp[i][j] || dp[i-1][j]; // Match 1 or more times
                }
            }
        }
    }
    
    int result = dp[m][n];
    
    // Free DP table
    for (int i = 0; i <= m; i++) {
        free(dp[i]);
    }
    free(dp);
    
    return result;
}

int main() {
    char* test_cases[][2] = {
        {"aa", "a"},
        {"aa", "a*"},
        {"ab", ".*"},
        {"aab", "c*a*b"}
    };
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i][0];
        char* p = test_cases[i][1];
        int result = isMatch(s, p);
        printf("Input: s = \\"%s\\", p = \\"%s\\"\\n", s, p);
        printf("Output: %s\\n", result ? "true" : "false");
        
        if (i == 1) {
            printf("\\nDP table for s = \\"aa\\", p = \\"a*\\":\\n");
            printf("dp[0][0] = true (empty matches empty)\\n");
            printf("dp[0][2] = true (empty matches \\"a*\\" because * can match 0 times)\\n");
            printf("dp[2][2] = true (\\"aa\\" matches \\"a*\\" because * can match 2 times)\\n");
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)',
          explanation: 'This is the optimal solution using dynamic programming. It efficiently handles all cases including special characters and builds a complete matching table.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int isMatchRecursive(char* s, char* p, int sIndex, int pIndex, int** memo) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Check memoization
    if (memo[sIndex][pIndex] != -1) {
        return memo[sIndex][pIndex];
    }
    
    // Base cases
    if (pIndex == n) {
        return sIndex == m;
    }
    
    if (sIndex == m) {
        // Check if remaining pattern can match empty string
        if (pIndex + 1 < n && p[pIndex + 1] == '*') {
            return isMatchRecursive(s, p, sIndex, pIndex + 2, memo);
        }
        return 0;
    }
    
    // Check current character match
    int firstMatch = (sIndex < m) && (p[pIndex] == '.' || p[pIndex] == s[sIndex]);
    
    // Handle '*'
    if (pIndex + 1 < n && p[pIndex + 1] == '*') {
        int result = isMatchRecursive(s, p, sIndex, pIndex + 2, memo) || // Match 0 times
                    (firstMatch && isMatchRecursive(s, p, sIndex + 1, pIndex, memo)); // Match 1+ times
        memo[sIndex][pIndex] = result;
        return result;
    }
    
    // Handle normal character or '.'
    int result = firstMatch && isMatchRecursive(s, p, sIndex + 1, pIndex + 1, memo);
    memo[sIndex][pIndex] = result;
    return result;
}

int isMatch(char* s, char* p) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Create memoization table
    int** memo = (int**)malloc((m + 1) * sizeof(int*));
    for (int i = 0; i <= m; i++) {
        memo[i] = (int*)malloc((n + 1) * sizeof(int));
        for (int j = 0; j <= n; j++) {
            memo[i][j] = -1;
        }
    }
    
    int result = isMatchRecursive(s, p, 0, 0, memo);
    
    // Free memoization table
    for (int i = 0; i <= m; i++) {
        free(memo[i]);
    }
    free(memo);
    
    return result;
}

int main() {
    char* test_cases[][2] = {
        {"aa", "a"},
        {"aa", "a*"},
        {"ab", ".*"}
    };
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i][0];
        char* p = test_cases[i][1];
        int result = isMatch(s, p);
        printf("Input: s = \\"%s\\", p = \\"%s\\"\\n", s, p);
        printf("Output: %s\\n", result ? "true" : "false");
        
        if (i == 1) {
            printf("\\nRecursive with Memoization:\\n");
            printf("Use recursion to match characters\\n");
            printf("Handle '*' by trying zero or more repetitions\\n");
            printf("Use memoization to avoid redundant calculations\\n");
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)',
          explanation: 'This approach uses recursion with memoization. It is conceptually simpler than DP but uses the same time and space complexity.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>

int isMatchRecursive(char* s, char* p, int sIndex, int pIndex) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Base cases
    if (pIndex == n) {
        return sIndex == m;
    }
    
    if (sIndex == m) {
        // Check if remaining pattern can match empty string
        if (pIndex + 1 < n && p[pIndex + 1] == '*') {
            return isMatchRecursive(s, p, sIndex, pIndex + 2);
        }
        return 0;
    }
    
    // Check current character match
    int firstMatch = (sIndex < m) && (p[pIndex] == '.' || p[pIndex] == s[sIndex]);
    
    // Handle '*'
    if (pIndex + 1 < n && p[pIndex + 1] == '*') {
        return isMatchRecursive(s, p, sIndex, pIndex + 2) || // Match 0 times
               (firstMatch && isMatchRecursive(s, p, sIndex + 1, pIndex)); // Match 1+ times
    }
    
    // Handle normal character or '.'
    return firstMatch && isMatchRecursive(s, p, sIndex + 1, pIndex + 1);
}

int isMatch(char* s, char* p) {
    return isMatchRecursive(s, p, 0, 0);
}

int main() {
    char* test_cases[][2] = {
        {"aa", "a"},
        {"aa", "a*"},
        {"ab", ".*"}
    };
    int n = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < n; i++) {
        char* s = test_cases[i][0];
        char* p = test_cases[i][1];
        int result = isMatch(s, p);
        printf("Input: s = \\"%s\\", p = \\"%s\\"\\n", s, p);
        printf("Output: %s\\n", result ? "true" : "false");
        
        if (i == 1) {
            printf("\\nBrute Force Recursion:\\n");
            printf("Recursively try all possible matches\\n");
            printf("Handle '*' by trying different numbers of repetitions\\n");
            printf("No optimization, very slow\\n");
        }
        printf("\\n");
    }
    
    return 0;
}`,
          timeComplexity: 'O(3^(m+n))',
          spaceComplexity: 'O(m+n)',
          explanation: 'This is the most straightforward recursive approach without any optimization. It is very inefficient with exponential time complexity but is easy to understand.'
        }
      }
    }
  }
];

// Add the additional questions to the main array
allTCSNQTQuestions.push(...additionalTCSNumberQuestions);
