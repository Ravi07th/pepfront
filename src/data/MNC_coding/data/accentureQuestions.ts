// Accenture Coding Questions - MNC Coding Platform
export interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string[];
  input1: string;
  input2: string;
  explanation: string;
  output1: string;
  output2: string;
  constraints: string;
  isCompleted?: boolean;
  timeEstimate?: string;
  successRate?: number;
  lastAttempted?: string;
  solutions?: {
    [languageId: string]: {
      [approachId: string]: {
        code: string;
        explanation: string;
        timeComplexity: string;
        spaceComplexity: string;
      };
    };
  };
}

export const allAccentureQuestions: Question[] = [
  {
    id: 'acc-1',
    title: 'Find Missing Number in Array',
    description: `Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.`,
    difficulty: 'Easy',
    category: ['Array', 'Bit Manipulation', 'Math'],
    input1: 'nums = [3,0,1]',
    input2: 'nums = [9,6,4,2,3,5,7,0,1]',
    explanation: `## Problem Statement

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

## Examples

### Example 1:
**Input:** nums = [3,0,1]  
**Output:** 2  
**Explanation:** n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number.

### Example 2:
**Input:** nums = [9,6,4,2,3,5,7,0,1]  
**Output:** 8  
**Explanation:** n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number.

## Intuition

The key insight is that we know the array should contain all numbers from 0 to n, so we can use mathematical properties to find the missing number efficiently.

## Approach

### Approach 1: Sum Formula (Optimal)
1. Calculate expected sum: n*(n+1)/2
2. Calculate actual sum of array
3. Return difference (expected sum - actual sum)

### Approach 2: XOR Operation
1. XOR all numbers from 0 to n
2. XOR all numbers in the array
3. The result is the missing number

### Approach 3: Sorting and Linear Search
1. Sort the array
2. Check each position for the expected number
3. Return the first missing number

## Dry Run

Let's trace through Example 1: nums = [3,0,1]

### Sum Formula Approach:
- n = 3 (length of array)
- Expected sum = 3*(3+1)/2 = 6
- Actual sum = 3 + 0 + 1 = 4
- Missing number = 6 - 4 = 2

### XOR Approach:
- XOR all numbers 0 to 3: 0^1^2^3 = 0
- XOR all numbers in array: 3^0^1 = 2
- Result = 0^2 = 2

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Sum Formula (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 2: XOR Operation

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 3: Sorting and Linear Search

**Time Complexity:** O(n log n) due to sorting  
**Space Complexity:** O(1) if in-place sorting, O(n) if not`,
    output1: '2',
    output2: '8',
    constraints: `## Constraints

- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= n
- All numbers are unique
- Only one number is missing`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

/**
 * Find missing number using sum formula (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int missingNumber(int* nums, int numsSize) {
    int expectedSum = numsSize * (numsSize + 1) / 2;
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
    int result1 = missingNumber(nums1, size1);
    printf("Test 1: nums=[3,0,1]\\n");
    printf("Output: %d\\n", result1);
    
    // Test case 2
    int nums2[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    int size2 = 9;
    int result2 = missingNumber(nums2, size2);
    printf("Test 2: nums=[9,6,4,2,3,5,7,0,1]\\n");
    printf("Output: %d\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use the mathematical formula for the sum of first n natural numbers: n*(n+1)/2. We calculate the expected sum and subtract the actual sum of the array to find the missing number. This approach is optimal in terms of both time and space complexity.'
        },
        average: {
          code: `#include <stdio.h>

/**
 * Find missing number using XOR operation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int missingNumber(int* nums, int numsSize) {
    int result = 0;
    
    // XOR all numbers from 0 to n
    for (int i = 0; i <= numsSize; i++) {
        result ^= i;
    }
    
    // XOR all numbers in the array
    for (int i = 0; i < numsSize; i++) {
        result ^= nums[i];
    }
    
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {3, 0, 1};
    int size1 = 3;
    int result1 = missingNumber(nums1, size1);
    printf("Test 1: nums=[3,0,1]\\n");
    printf("Output: %d\\n", result1);
    
    // Test case 2
    int nums2[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    int size2 = 9;
    int result2 = missingNumber(nums2, size2);
    printf("Test 2: nums=[9,6,4,2,3,5,7,0,1]\\n");
    printf("Output: %d\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use XOR operation to find the missing number. XOR has the property that a^a = 0 and a^0 = a. By XORing all numbers from 0 to n and then XORing with all numbers in the array, we get the missing number. This approach is mathematically elegant but slightly less intuitive.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Comparison function for qsort
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

/**
 * Find missing number using sorting and linear search
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) if in-place sorting
 */
int missingNumber(int* nums, int numsSize) {
    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);
    
    // Check each position for the expected number
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] != i) {
            return i;
        }
    }
    
    // If all numbers are in place, the missing number is n
    return numsSize;
}

int main() {
    // Test case 1
    int nums1[] = {3, 0, 1};
    int size1 = 3;
    int result1 = missingNumber(nums1, size1);
    printf("Test 1: nums=[3,0,1]\\n");
    printf("Output: %d\\n", result1);
    
    // Test case 2
    int nums2[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    int size2 = 9;
    int result2 = missingNumber(nums2, size2);
    printf("Test 2: nums=[9,6,4,2,3,5,7,0,1]\\n");
    printf("Output: %d\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(1)',
          explanation: 'We sort the array first, then check each position to see if it contains the expected number. If we find a mismatch, that position contains the missing number. This approach is less efficient due to sorting but demonstrates a different algorithmic technique.'
        }
      }
    }
  },
  {
    id: 'acc-2',
    title: 'Reverse String',
    description: `Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.`,
    difficulty: 'Easy',
    category: ['String', 'Two Pointers'],
    input1: 's = ["h","e","l","l","o"]',
    input2: 's = ["H","a","n","n","a","h"]',
    explanation: `## Problem Statement

Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

## Examples

### Example 1:
**Input:** s = ["h","e","l","l","o"]  
**Output:** ["o","l","l","e","h"]

### Example 2:
**Input:** s = ["H","a","n","n","a","h"]  
**Output:** ["h","a","n","n","a","H"]

## Intuition

The key insight is that we can reverse the string by swapping characters from both ends, moving towards the center. This approach works in-place without requiring extra memory.

## Approach

### Approach 1: Two Pointers (Optimal)
1. Initialize left pointer at start (index 0)
2. Initialize right pointer at end (index n-1)
3. While left < right:
   - Swap characters at left and right positions
   - Move left pointer right
   - Move right pointer left

### Approach 2: Using Extra Array
1. Create a new array of same size
2. Copy characters from end to start
3. Copy back to original array

### Approach 3: Recursive Approach
1. Use recursion to swap characters
2. Base case: when left >= right
3. Recursive case: swap and call recursively

## Dry Run

Let's trace through Example 1: s = ["h","e","l","l","o"]

### Two Pointers Approach:
- left=0, right=4: swap 'h' and 'o' → ["o","e","l","l","h"]
- left=1, right=3: swap 'e' and 'l' → ["o","l","l","e","h"]
- left=2, right=2: left >= right, stop

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers (Optimal)

**Time Complexity:** O(n) - We traverse half the array  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 2: Using Extra Array

**Time Complexity:** O(n) - We traverse the array twice  
**Space Complexity:** O(n) - We need extra array

### Solution 3: Recursive Approach

**Time Complexity:** O(n) - We make n/2 recursive calls  
**Space Complexity:** O(n) - Due to recursion stack`,
    output1: '["o","l","l","e","h"]',
    output2: '["h","a","n","n","a","H"]',
    constraints: `## Constraints

- 1 <= s.length <= 10^5
- s[i] is a printable ascii character
- You must modify the input array in-place`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>

/**
 * Reverse string using two pointers (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
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
    int size1 = strlen(s1);
    printf("Test 1: s=\"%s\"\\n", s1);
    reverseString(s1, size1);
    printf("Output: \"%s\"\\n", s1);
    
    // Test case 2
    char s2[] = "Hannah";
    int size2 = strlen(s2);
    printf("Test 2: s=\"%s\"\\n", s2);
    reverseString(s2, size2);
    printf("Output: \"%s\"\\n", s2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use two pointers starting from both ends of the string. We swap characters at these positions and move the pointers towards the center. This approach is optimal as it requires only O(n/2) swaps and constant extra space.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/**
 * Reverse string using extra array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
void reverseString(char* s, int sSize) {
    char* temp = (char*)malloc(sSize * sizeof(char));
    
    // Copy characters from end to start
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
    int size1 = strlen(s1);
    printf("Test 1: s=\"%s\"\\n", s1);
    reverseString(s1, size1);
    printf("Output: \"%s\"\\n", s1);
    
    // Test case 2
    char s2[] = "Hannah";
    int size2 = strlen(s2);
    printf("Test 2: s=\"%s\"\\n", s2);
    reverseString(s2, size2);
    printf("Output: \"%s\"\\n", s2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We create a temporary array and copy characters from the end of the original string to the beginning of the temp array. Then we copy back to the original array. This approach is less efficient in terms of space but demonstrates a different technique.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>

/**
 * Reverse string using recursion
 * Time Complexity: O(n)
 * Space Complexity: O(n) due to recursion stack
 */
void reverseStringHelper(char* s, int left, int right) {
    if (left >= right) {
        return;
    }
    
    // Swap characters
    char temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    
    // Recursive call
    reverseStringHelper(s, left + 1, right - 1);
}

void reverseString(char* s, int sSize) {
    reverseStringHelper(s, 0, sSize - 1);
}

int main() {
    // Test case 1
    char s1[] = "hello";
    int size1 = strlen(s1);
    printf("Test 1: s=\"%s\"\\n", s1);
    reverseString(s1, size1);
    printf("Output: \"%s\"\\n", s1);
    
    // Test case 2
    char s2[] = "Hannah";
    int size2 = strlen(s2);
    printf("Test 2: s=\"%s\"\\n", s2);
    reverseString(s2, size2);
    printf("Output: \"%s\"\\n", s2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use recursion to reverse the string. The base case is when left pointer meets or crosses the right pointer. In each recursive call, we swap characters and call recursively with updated pointers. This approach uses more space due to the recursion stack.'
        }
      }
    }
  },
  {
    id: 'acc-3',
    title: 'Valid Parentheses',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`,
    difficulty: 'Easy',
    category: ['String', 'Stack'],
    input1: 's = "()"',
    input2: 's = "([)]"',
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
**Explanation:** Simple valid parentheses.

### Example 2:
**Input:** s = "()[]{}"  
**Output:** true  
**Explanation:** All brackets are properly closed.

### Example 3:
**Input:** s = "(]"  
**Output:** false  
**Explanation:** Opening parenthesis is closed by wrong bracket.

### Example 4:
**Input:** s = "([)]"  
**Output:** false  
**Explanation:** Brackets are not closed in correct order.

## Intuition

The key insight is that we need to match each closing bracket with its corresponding opening bracket. The last opening bracket should be closed first (LIFO - Last In, First Out), which suggests using a stack.

## Approach

### Approach 1: Stack (Optimal)
1. Use a stack to keep track of opening brackets
2. For each character in the string:
   - If it's an opening bracket, push it onto the stack
   - If it's a closing bracket, check if it matches the top of the stack
   - If match found, pop the stack; otherwise return false
3. At the end, check if stack is empty

### Approach 2: Array as Stack
1. Use an array to simulate stack operations
2. Keep track of stack size manually
3. Same logic as stack approach but with array implementation

### Approach 3: Character Counting (Limited)
1. Count opening and closing brackets
2. Only works for simple cases, fails for nested brackets
3. Not recommended for this problem

## Dry Run

Let's trace through Example 1: s = "()"

### Stack Approach:
- char='(': push '(' onto stack → stack: ['(']
- char=')': check if stack is empty (no), pop '(' and check if matches ')' (yes) → stack: []
- End of string: check if stack is empty (yes) → return true

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Stack (Optimal)

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - We store at most n/2 opening brackets

### Solution 2: Array as Stack

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - We store at most n/2 opening brackets

### Solution 3: Character Counting (Limited)

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(1) - We use only constant space`,
    output1: 'true',
    output2: 'false',
    constraints: `## Constraints

- 1 <= s.length <= 10^4
- s consists of parentheses only '()[]{}'
- String may be empty`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_SIZE 10000

/**
 * Valid parentheses using stack (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int isValid(char* s) {
    char stack[MAX_SIZE];
    int top = -1;
    
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack[++top] = s[i];
        } else {
            if (top == -1) {
                return 0; // Stack is empty, no matching opening bracket
            }
            
            char topChar = stack[top--];
            if ((s[i] == ')' && topChar != '(') ||
                (s[i] == '}' && topChar != '{') ||
                (s[i] == ']' && topChar != '[')) {
                return 0; // Mismatch
            }
        }
    }
    
    return top == -1; // Stack should be empty
}

int main() {
    // Test case 1
    char s1[] = "()";
    printf("Test 1: s=\"%s\"\\n", s1);
    printf("Output: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char s2[] = "()[]{}";
    printf("Test 2: s=\"%s\"\\n", s2);
    printf("Output: %s\\n", isValid(s2) ? "true" : "false");
    
    // Test case 3
    char s3[] = "(]";
    printf("Test 3: s=\"%s\"\\n", s3);
    printf("Output: %s\\n", isValid(s3) ? "true" : "false");
    
    // Test case 4
    char s4[] = "([)]";
    printf("Test 4: s=\"%s\"\\n", s4);
    printf("Output: %s\\n", isValid(s4) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use a stack to keep track of opening brackets. For each closing bracket, we check if it matches the most recent opening bracket. This approach efficiently handles nested brackets and ensures proper ordering.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>

/**
 * Valid parentheses using array as stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int isValid(char* s) {
    char stack[10000];
    int top = 0;
    
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack[top++] = s[i];
        } else {
            if (top == 0) {
                return 0; // No opening bracket to match
            }
            
            char topChar = stack[--top];
            if ((s[i] == ')' && topChar != '(') ||
                (s[i] == '}' && topChar != '{') ||
                (s[i] == ']' && topChar != '[')) {
                return 0; // Mismatch
            }
        }
    }
    
    return top == 0; // All brackets should be matched
}

int main() {
    // Test case 1
    char s1[] = "()";
    printf("Test 1: s=\"%s\"\\n", s1);
    printf("Output: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char s2[] = "()[]{}";
    printf("Test 2: s=\"%s\"\\n", s2);
    printf("Output: %s\\n", isValid(s2) ? "true" : "false");
    
    // Test case 3
    char s3[] = "(]";
    printf("Test 3: s=\"%s\"\\n", s3);
    printf("Output: %s\\n", isValid(s3) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We implement a stack using an array with manual top pointer management. This approach is functionally equivalent to the stack approach but demonstrates array-based stack implementation.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>

/**
 * Valid parentheses using character counting (Limited)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Note: This approach only works for simple cases without nesting
 */
int isValid(char* s) {
    int count1 = 0, count2 = 0, count3 = 0;
    
    for (int i = 0; s[i] != '\\0'; i++) {
        switch (s[i]) {
            case '(': count1++; break;
            case ')': count1--; break;
            case '{': count2++; break;
            case '}': count2--; break;
            case '[': count3++; break;
            case ']': count3--; break;
        }
        
        // Check for negative counts (more closing than opening)
        if (count1 < 0 || count2 < 0 || count3 < 0) {
            return 0;
        }
    }
    
    // Check if all counts are zero
    return (count1 == 0 && count2 == 0 && count3 == 0);
}

int main() {
    // Test case 1
    char s1[] = "()";
    printf("Test 1: s=\"%s\"\\n", s1);
    printf("Output: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char s2[] = "()[]{}";
    printf("Test 2: s=\"%s\"\\n", s2);
    printf("Output: %s\\n", isValid(s2) ? "true" : "false");
    
    // Test case 3 - This will fail with character counting
    char s3[] = "([)]";
    printf("Test 3: s=\"%s\"\\n", s3);
    printf("Output: %s\\n", isValid(s3) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We count opening and closing brackets separately. This approach only works for simple cases without nesting and fails for cases like "([)]". It demonstrates why stack-based approaches are necessary for this problem.'
        }
      }
    }
  },
  {
    id: 'acc-4',
    title: 'Maximum Subarray',
    description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
    difficulty: 'Medium',
    category: ['Array', 'Dynamic Programming', 'Divide and Conquer'],
    input1: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
    input2: 'nums = [1]',
    explanation: `## Problem Statement

Given an integer array nums, find the subarray with the largest sum, and return its sum.

## Examples

### Example 1:
**Input:** nums = [-2,1,-3,4,-1,2,1,-5,4]  
**Output:** 6  
**Explanation:** The subarray [4,-1,2,1] has the largest sum 6.

### Example 2:
**Input:** nums = [1]  
**Output:** 1  
**Explanation:** The subarray [1] has the largest sum 1.

### Example 3:
**Input:** nums = [5,4,-1,7,8]  
**Output:** 23  
**Explanation:** The subarray [5,4,-1,7,8] has the largest sum 23.

## Intuition

The key insight is that we can use dynamic programming to keep track of the maximum sum ending at each position. If the current sum becomes negative, we start a new subarray from the current element.

## Approach

### Approach 1: Kadane's Algorithm (Optimal)
1. Initialize maxSum and currentSum to first element
2. Iterate from second element to end
3. For each element:
   - currentSum = max(currentSum + num, num)
   - maxSum = max(maxSum, currentSum)
4. Return maxSum

### Approach 2: Divide and Conquer
1. Divide array into two halves
2. Find max subarray in left half, right half, and crossing middle
3. Return maximum of the three

### Approach 3: Brute Force
1. Check all possible subarrays
2. Calculate sum for each subarray
3. Keep track of maximum sum

## Dry Run

Let's trace through Example 1: nums = [-2,1,-3,4,-1,2,1,-5,4]

### Kadane's Algorithm:
- Initialize: maxSum = -2, currentSum = -2
- i=1, num=1: currentSum = max(-2+1, 1) = 1, maxSum = max(-2, 1) = 1
- i=2, num=-3: currentSum = max(1+(-3), -3) = -2, maxSum = max(1, -2) = 1
- i=3, num=4: currentSum = max(-2+4, 4) = 4, maxSum = max(1, 4) = 4
- i=4, num=-1: currentSum = max(4+(-1), -1) = 3, maxSum = max(4, 3) = 4
- i=5, num=2: currentSum = max(3+2, 2) = 5, maxSum = max(4, 5) = 5
- i=6, num=1: currentSum = max(5+1, 1) = 6, maxSum = max(5, 6) = 6
- i=7, num=-5: currentSum = max(6+(-5), -5) = 1, maxSum = max(6, 1) = 6
- i=8, num=4: currentSum = max(1+4, 4) = 5, maxSum = max(6, 5) = 6

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Kadane's Algorithm (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 2: Divide and Conquer

**Time Complexity:** O(n log n) - We divide the problem recursively  
**Space Complexity:** O(log n) - Due to recursion stack

### Solution 3: Brute Force

**Time Complexity:** O(n²) - We check n(n+1)/2 subarrays  
**Space Complexity:** O(1) - We use only constant extra space`,
    output1: '6',
    output2: '1',
    constraints: `## Constraints

- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- Array may contain negative numbers`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

/**
 * Maximum subarray using Kadane's algorithm (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int maxSubArray(int* nums, int numsSize) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < numsSize; i++) {
        currentSum = (currentSum + nums[i] > nums[i]) ? currentSum + nums[i] : nums[i];
        maxSum = (currentSum > maxSum) ? currentSum : maxSum;
    }
    
    return maxSum;
}

int main() {
    // Test case 1
    int nums1[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int size1 = 9;
    printf("Test 1: nums=[-2,1,-3,4,-1,2,1,-5,4]\\n");
    printf("Output: %d\\n", maxSubArray(nums1, size1));
    
    // Test case 2
    int nums2[] = {1};
    int size2 = 1;
    printf("Test 2: nums=[1]\\n");
    printf("Output: %d\\n", maxSubArray(nums2, size2));
    
    // Test case 3
    int nums3[] = {5, 4, -1, 7, 8};
    int size3 = 5;
    printf("Test 3: nums=[5,4,-1,7,8]\\n");
    printf("Output: %d\\n", maxSubArray(nums3, size3));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use Kadane\'s algorithm which maintains two variables: currentSum (maximum sum ending at current position) and maxSum (overall maximum sum). For each element, we decide whether to extend the current subarray or start a new one.'
        },
        average: {
          code: `#include <stdio.h>

/**
 * Maximum subarray using divide and conquer
 * Time Complexity: O(n log n)
 * Space Complexity: O(log n)
 */
int maxCrossingSum(int* nums, int left, int mid, int right) {
    int leftSum = -10000;
    int sum = 0;
    
    // Find maximum sum in left half
    for (int i = mid; i >= left; i--) {
        sum += nums[i];
        if (sum > leftSum) {
            leftSum = sum;
        }
    }
    
    int rightSum = -10000;
    sum = 0;
    
    // Find maximum sum in right half
    for (int i = mid + 1; i <= right; i++) {
        sum += nums[i];
        if (sum > rightSum) {
            rightSum = sum;
        }
    }
    
    return leftSum + rightSum;
}

int maxSubArrayHelper(int* nums, int left, int right) {
    if (left == right) {
        return nums[left];
    }
    
    int mid = (left + right) / 2;
    
    int leftMax = maxSubArrayHelper(nums, left, mid);
    int rightMax = maxSubArrayHelper(nums, mid + 1, right);
    int crossMax = maxCrossingSum(nums, left, mid, right);
    
    int max1 = (leftMax > rightMax) ? leftMax : rightMax;
    return (max1 > crossMax) ? max1 : crossMax;
}

int maxSubArray(int* nums, int numsSize) {
    return maxSubArrayHelper(nums, 0, numsSize - 1);
}

int main() {
    // Test case 1
    int nums1[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int size1 = 9;
    printf("Test 1: nums=[-2,1,-3,4,-1,2,1,-5,4]\\n");
    printf("Output: %d\\n", maxSubArray(nums1, size1));
    
    // Test case 2
    int nums2[] = {1};
    int size2 = 1;
    printf("Test 2: nums=[1]\\n");
    printf("Output: %d\\n", maxSubArray(nums2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(log n)',
          explanation: 'We use divide and conquer approach. We divide the array into two halves, find the maximum subarray in each half, and also find the maximum subarray that crosses the middle. The result is the maximum of these three values.'
        },
        worst: {
          code: `#include <stdio.h>

/**
 * Maximum subarray using brute force
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
int maxSubArray(int* nums, int numsSize) {
    int maxSum = nums[0];
    
    for (int i = 0; i < numsSize; i++) {
        int currentSum = 0;
        for (int j = i; j < numsSize; j++) {
            currentSum += nums[j];
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    
    return maxSum;
}

int main() {
    // Test case 1
    int nums1[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int size1 = 9;
    printf("Test 1: nums=[-2,1,-3,4,-1,2,1,-5,4]\\n");
    printf("Output: %d\\n", maxSubArray(nums1, size1));
    
    // Test case 2
    int nums2[] = {1};
    int size2 = 1;
    printf("Test 2: nums=[1]\\n");
    printf("Output: %d\\n", maxSubArray(nums2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'We check all possible subarrays by using nested loops. For each starting position, we calculate the sum of all subarrays ending at different positions. This approach is straightforward but highly inefficient for large arrays.'
        }
      }
    }
  },
  {
    id: 'acc-5',
    title: 'Merge Sorted Array',
    description: `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums1 and nums2 into a single array sorted in non-decreasing order.`,
    difficulty: 'Easy',
    category: ['Array', 'Two Pointers', 'Sorting'],
    input1: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
    input2: 'nums1 = [1], m = 1, nums2 = [], n = 0',
    explanation: `## Problem Statement

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums1 and nums2 into a single array sorted in non-decreasing order.

## Examples

### Example 1:
**Input:** nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  
**Output:** [1,2,2,3,5,6]

### Example 2:
**Input:** nums1 = [1], m = 1, nums2 = [], n = 0  
**Output:** [1]

### Example 3:
**Input:** nums1 = [0], m = 0, nums2 = [1], n = 1  
**Output:** [1]

## Intuition

The key insight is that since nums1 has enough space to hold all elements and both arrays are sorted, we can merge them efficiently by comparing elements from the end and placing larger elements at the end of nums1.

## Approach

### Approach 1: Three Pointers from End (Optimal)
1. Initialize three pointers: p1 (end of nums1), p2 (end of nums2), p (end of merged array)
2. While p1 >= 0 and p2 >= 0:
   - If nums1[p1] > nums2[p2], place nums1[p1] at p and decrement p1
   - Else, place nums2[p2] at p and decrement p2
   - Decrement p
3. If p2 >= 0, copy remaining elements from nums2

### Approach 2: Using Extra Array
1. Create a new array of size m + n
2. Merge both arrays into the new array
3. Copy back to nums1

### Approach 3: Simple Copy and Sort
1. Copy nums2 to the end of nums1
2. Sort the entire nums1 array

## Dry Run

Let's trace through Example 1: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

### Three Pointers Approach:
- p1=2, p2=2, p=5: nums1[2]=3 > nums2[2]=6? No, place 6 at p=5 → nums1=[1,2,3,0,0,6]
- p1=2, p2=1, p=4: nums1[2]=3 > nums2[1]=5? No, place 5 at p=4 → nums1=[1,2,3,0,5,6]
- p1=2, p2=0, p=3: nums1[2]=3 > nums2[0]=2? Yes, place 3 at p=3 → nums1=[1,2,3,3,5,6]
- p1=1, p2=0, p=2: nums1[1]=2 > nums2[0]=2? No, place 2 at p=2 → nums1=[1,2,2,3,5,6]
- p1=1, p2=-1: p2 < 0, stop

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Three Pointers from End (Optimal)

**Time Complexity:** O(m + n) - We traverse both arrays once  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 2: Using Extra Array

**Time Complexity:** O(m + n) - We traverse both arrays once  
**Space Complexity:** O(m + n) - We need extra array

### Solution 3: Simple Copy and Sort

**Time Complexity:** O((m + n) log(m + n)) - Due to sorting  
**Space Complexity:** O(1) - If in-place sorting`,
    output1: '[1,2,2,3,5,6]',
    output2: '[1]',
    constraints: `## Constraints

- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -10^9 <= nums1[i], nums2[j] <= 10^9`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

/**
 * Merge sorted arrays using three pointers from end (Optimal)
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */
void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    int p1 = m - 1;
    int p2 = n - 1;
    int p = m + n - 1;
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    
    // Copy remaining elements from nums2
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

int main() {
    // Test case 1
    int nums1[6] = {1, 2, 3, 0, 0, 0};
    int nums2[3] = {2, 5, 6};
    int m = 3, n = 3;
    
    printf("Test 1: nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3\\n");
    merge(nums1, 6, m, nums2, 3, n);
    printf("Output: [");
    for (int i = 0; i < m + n; i++) {
        printf("%d", nums1[i]);
        if (i < m + n - 1) printf(",");
    }
    printf("]\\n");
    
    // Test case 2
    int nums3[1] = {1};
    int nums4[0] = {};
    int m2 = 1, n2 = 0;
    
    printf("Test 2: nums1=[1], m=1, nums2=[], n=0\\n");
    merge(nums3, 1, m2, nums4, 0, n2);
    printf("Output: [%d]\\n", nums3[0]);
    
    return 0;
}`,
          timeComplexity: 'O(m + n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use three pointers starting from the end of both arrays and the end of the merged array. We compare elements and place the larger one at the end, working backwards. This approach avoids overwriting elements in nums1 that we still need.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Merge sorted arrays using extra array
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 */
void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    int* temp = (int*)malloc((m + n) * sizeof(int));
    int i = 0, j = 0, k = 0;
    
    // Merge both arrays into temp
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            temp[k++] = nums1[i++];
        } else {
            temp[k++] = nums2[j++];
        }
    }
    
    // Copy remaining elements from nums1
    while (i < m) {
        temp[k++] = nums1[i++];
    }
    
    // Copy remaining elements from nums2
    while (j < n) {
        temp[k++] = nums2[j++];
    }
    
    // Copy back to nums1
    for (i = 0; i < m + n; i++) {
        nums1[i] = temp[i];
    }
    
    free(temp);
}

int main() {
    // Test case 1
    int nums1[6] = {1, 2, 3, 0, 0, 0};
    int nums2[3] = {2, 5, 6};
    int m = 3, n = 3;
    
    printf("Test 1: nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3\\n");
    merge(nums1, 6, m, nums2, 3, n);
    printf("Output: [");
    for (int i = 0; i < m + n; i++) {
        printf("%d", nums1[i]);
        if (i < m + n - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(m + n)',
          spaceComplexity: 'O(m + n)',
          explanation: 'We create a temporary array and merge both sorted arrays into it. Then we copy the result back to nums1. This approach is straightforward but requires extra space.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Comparison function for qsort
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

/**
 * Merge sorted arrays using copy and sort
 * Time Complexity: O((m + n) log(m + n))
 * Space Complexity: O(1) if in-place sorting
 */
void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    // Copy nums2 to the end of nums1
    for (int i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    
    // Sort the entire nums1 array
    qsort(nums1, m + n, sizeof(int), compare);
}

int main() {
    // Test case 1
    int nums1[6] = {1, 2, 3, 0, 0, 0};
    int nums2[3] = {2, 5, 6};
    int m = 3, n = 3;
    
    printf("Test 1: nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3\\n");
    merge(nums1, 6, m, nums2, 3, n);
    printf("Output: [");
    for (int i = 0; i < m + n; i++) {
        printf("%d", nums1[i]);
        if (i < m + n - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,
          timeComplexity: 'O((m + n) log(m + n))',
          spaceComplexity: 'O(1)',
          explanation: 'We simply copy nums2 to the end of nums1 and then sort the entire array. This approach is simple but inefficient as it doesn\'t take advantage of the fact that both arrays are already sorted.'
        }
      }
    }
  },
  {
    id: 'acc-6',
    title: 'Two Sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.`,
    difficulty: 'Easy',
    category: ['Array', 'Hash Table'],
    input1: 'nums = [2,7,11,15], target = 9',
    input2: 'nums = [3,2,4], target = 6',
    explanation: `## Problem Statement

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

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

The key insight is that for each number, we need to find its complement (target - current_number) in the array. If we can find this complement efficiently, we've solved the problem.

## Approach

### Approach 1: Hash Table (Optimal)
1. Create a hash table to store numbers and their indices
2. Iterate through the array
3. For each number, calculate its complement (target - current_number)
4. If complement exists in hash table, return [complement_index, current_index]
5. Otherwise, add current number and its index to hash table

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

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Hash Table (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(n) - We store at most n elements in hash table

### Solution 2: Two Pointer (Requires Sorting)

**Time Complexity:** O(n log n) due to sorting  
**Space Complexity:** O(n) to store original indices

### Solution 3: Brute Force

**Time Complexity:** O(n²) - We check n(n-1)/2 pairs  
**Space Complexity:** O(1) - No extra space needed`,
    output1: '[0,1]',
    output2: '[1,2]',
    constraints: `## Constraints

- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Simple hash table implementation for C
#define HASH_SIZE 10007

typedef struct HashNode {
    int key;
    int value;
    struct HashNode* next;
} HashNode;

HashNode* hashTable[HASH_SIZE];

int hash(int key) {
    return abs(key) % HASH_SIZE;
}

void insertHash(int key, int value) {
    int index = hash(key);
    HashNode* newNode = (HashNode*)malloc(sizeof(HashNode));
    newNode->key = key;
    newNode->value = value;
    newNode->next = hashTable[index];
    hashTable[index] = newNode;
}

int findHash(int key) {
    int index = hash(key);
    HashNode* current = hashTable[index];
    while (current != NULL) {
        if (current->key == key) {
            return current->value;
        }
        current = current->next;
    }
    return -1;
}

void clearHash() {
    for (int i = 0; i < HASH_SIZE; i++) {
        HashNode* current = hashTable[i];
        while (current != NULL) {
            HashNode* temp = current;
            current = current->next;
            free(temp);
        }
        hashTable[i] = NULL;
    }
}

/**
 * Note: The return array must be malloced, assume caller calls free().
 * Optimal solution using hash table
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Clear hash table
    clearHash();
    
    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        int complementIndex = findHash(complement);
        
        if (complementIndex != -1) {
            int* result = (int*)malloc(2 * sizeof(int));
            result[0] = complementIndex;
            result[1] = i;
            *returnSize = 2;
            return result;
        }
        
        insertHash(nums[i], i);
    }
    
    *returnSize = 0;
    return NULL;
}

int main() {
    // Test case 1
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int returnSize1;
    int* result1 = twoSum(nums1, 4, target1, &returnSize1);
    
    if (result1 != NULL) {
        printf("Test 1: nums=[2,7,11,15], target=9\\n");
        printf("Output: [%d, %d]\\n", result1[0], result1[1]);
        free(result1);
    }
    
    // Test case 2
    int nums2[] = {3, 2, 4};
    int target2 = 6;
    int returnSize2;
    int* result2 = twoSum(nums2, 3, target2, &returnSize2);
    
    if (result2 != NULL) {
        printf("Test 2: nums=[3,2,4], target=6\\n");
        printf("Output: [%d, %d]\\n", result2[0], result2[1]);
        free(result2);
    }
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We implement a custom hash table in C to store each number and its index. For each number, we check if its complement (target - current_number) exists in the hash table. If found, we return the indices. This approach requires only one pass through the array.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int value;
    int index;
} Pair;

int comparePairs(const void* a, const void* b) {
    return ((Pair*)a)->value - ((Pair*)b)->value;
}

/**
 * Note: The return array must be malloced, assume caller calls free().
 * Two-pointer approach with sorting
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    Pair* pairs = (Pair*)malloc(numsSize * sizeof(Pair));
    
    // Create pairs of (value, index)
    for (int i = 0; i < numsSize; i++) {
        pairs[i].value = nums[i];
        pairs[i].index = i;
    }
    
    // Sort by values
    qsort(pairs, numsSize, sizeof(Pair), comparePairs);
    
    int left = 0, right = numsSize - 1;
    
    while (left < right) {
        int currentSum = pairs[left].value + pairs[right].value;
        
        if (currentSum == target) {
            int* result = (int*)malloc(2 * sizeof(int));
            result[0] = pairs[left].index;
            result[1] = pairs[right].index;
            *returnSize = 2;
            free(pairs);
            return result;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    free(pairs);
    *returnSize = 0;
    return NULL;
}

int main() {
    // Test case 1
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int returnSize1;
    int* result1 = twoSum(nums1, 4, target1, &returnSize1);
    
    if (result1 != NULL) {
        printf("Test 1: nums=[2,7,11,15], target=9\\n");
        printf("Output: [%d, %d]\\n", result1[0], result1[1]);
        free(result1);
    }
    
    // Test case 2
    int nums2[] = {3, 2, 4};
    int target2 = 6;
    int returnSize2;
    int* result2 = twoSum(nums2, 3, target2, &returnSize2);
    
    if (result2 != NULL) {
        printf("Test 2: nums=[3,2,4], target=6\\n");
        printf("Output: [%d, %d]\\n", result2[0], result2[1]);
        free(result2);
    }
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(n)',
          explanation: 'We sort the array with their original indices, then use two pointers to find the target sum. This approach is less efficient due to sorting but demonstrates a different algorithmic technique.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The return array must be malloced, assume caller calls free().
 * Brute force approach
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                int* result = (int*)malloc(2 * sizeof(int));
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }
    
    *returnSize = 0;
    return NULL;
}

int main() {
    // Test case 1
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int returnSize1;
    int* result1 = twoSum(nums1, 4, target1, &returnSize1);
    
    if (result1 != NULL) {
        printf("Test 1: nums=[2,7,11,15], target=9\\n");
        printf("Output: [%d, %d]\\n", result1[0], result1[1]);
        free(result1);
    }
    
    // Test case 2
    int nums2[] = {3, 2, 4};
    int target2 = 6;
    int returnSize2;
    int* result2 = twoSum(nums2, 3, target2, &returnSize2);
    
    if (result2 != NULL) {
        printf("Test 2: nums=[3,2,4], target=6\\n");
        printf("Output: [%d, %d]\\n", result2[0], result2[1]);
        free(result2);
    }
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'We check every possible pair of numbers in the array using nested loops. This is the most straightforward approach but highly inefficient for large arrays.'
        }
      }
    }
  },
  {
    id: 'acc-7',
    title: 'Palindrome Number',
    description: `Given an integer x, return true if x is a palindrome, and false otherwise.`,
    difficulty: 'Easy',
    category: ['Math'],
    input1: 'x = 121',
    input2: 'x = -121',
    explanation: `## Problem Statement

Given an integer x, return true if x is a palindrome, and false otherwise.

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

## Intuition

The key insight is that we can check if a number is a palindrome by comparing it with its reverse. However, we can optimize this by only reversing half of the number.

## Approach

### Approach 1: Reverse Half (Optimal)
1. Handle negative numbers (always false)
2. Handle numbers ending with 0 (except 0 itself)
3. Reverse the second half of the number
4. Compare with the first half

### Approach 2: Convert to String
1. Convert number to string
2. Use two pointers to compare characters from both ends
3. Return true if all characters match

### Approach 3: Full Reverse
1. Reverse the entire number
2. Compare with original number
3. Return true if they are equal

## Dry Run

Let's trace through Example 1: x = 121

### Reverse Half Approach:
- x = 121, reversed_num = 0
- x > reversed_num: reversed_num = 0*10 + 1 = 1, x = 12
- x > reversed_num: reversed_num = 1*10 + 2 = 12, x = 1
- x <= reversed_num: stop
- Check: x == reversed_num (1 == 12)? No
- Check: x == reversed_num//10 (1 == 1)? Yes
- Return true

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Reverse Half (Optimal)

**Time Complexity:** O(log n) - We process half the digits  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 2: Convert to String

**Time Complexity:** O(log n) - We convert to string and compare  
**Space Complexity:** O(log n) - We need string storage

### Solution 3: Full Reverse

**Time Complexity:** O(log n) - We reverse all digits  
**Space Complexity:** O(1) - We use only constant extra space`,
    output1: 'true',
    output2: 'false',
    constraints: `## Constraints

- -2^31 <= x <= 2^31 - 1
- x is an integer`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdbool.h>

/**
 * Check if number is palindrome using reverse half (Optimal)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
bool isPalindrome(int x) {
    // Handle negative numbers and numbers ending with 0
    if (x < 0 || (x != 0 && x % 10 == 0)) {
        return false;
    }
    
    int reversed_num = 0;
    while (x > reversed_num) {
        reversed_num = reversed_num * 10 + x % 10;
        x /= 10;
    }
    
    // For even length: x == reversed_num
    // For odd length: x == reversed_num / 10
    return x == reversed_num || x == reversed_num / 10;
}

int main() {
    // Test case 1
    int x1 = 121;
    printf("Test 1: x = %d\\n", x1);
    printf("Output: %s\\n", isPalindrome(x1) ? "true" : "false");
    
    // Test case 2
    int x2 = -121;
    printf("Test 2: x = %d\\n", x2);
    printf("Output: %s\\n", isPalindrome(x2) ? "true" : "false");
    
    // Test case 3
    int x3 = 10;
    printf("Test 3: x = %d\\n", x3);
    printf("Output: %s\\n", isPalindrome(x3) ? "true" : "false");
    
    // Test case 4
    int x4 = 12321;
    printf("Test 4: x = %d\\n", x4);
    printf("Output: %s\\n", isPalindrome(x4) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'We reverse only half of the number and compare it with the remaining half. This approach is optimal as it avoids reversing the entire number and handles both even and odd length numbers correctly.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

/**
 * Check if number is palindrome using string conversion
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */
bool isPalindrome(int x) {
    if (x < 0) {
        return false;
    }
    
    char str[20];
    sprintf(str, "%d", x);
    int len = strlen(str);
    
    int left = 0, right = len - 1;
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
    // Test case 1
    int x1 = 121;
    printf("Test 1: x = %d\\n", x1);
    printf("Output: %s\\n", isPalindrome(x1) ? "true" : "false");
    
    // Test case 2
    int x2 = -121;
    printf("Test 2: x = %d\\n", x2);
    printf("Output: %s\\n", isPalindrome(x2) ? "true" : "false");
    
    // Test case 3
    int x3 = 10;
    printf("Test 3: x = %d\\n", x3);
    printf("Output: %s\\n", isPalindrome(x3) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(log n)',
          explanation: 'We convert the number to a string and use two pointers to compare characters from both ends. This approach is intuitive but requires extra space for string storage.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdbool.h>

/**
 * Check if number is palindrome using full reverse
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
bool isPalindrome(int x) {
    if (x < 0) {
        return false;
    }
    
    int original = x;
    int reversed = 0;
    
    while (x != 0) {
        int digit = x % 10;
        reversed = reversed * 10 + digit;
        x /= 10;
    }
    
    return original == reversed;
}

int main() {
    // Test case 1
    int x1 = 121;
    printf("Test 1: x = %d\\n", x1);
    printf("Output: %s\\n", isPalindrome(x1) ? "true" : "false");
    
    // Test case 2
    int x2 = -121;
    printf("Test 2: x = %d\\n", x2);
    printf("Output: %s\\n", isPalindrome(x2) ? "true" : "false");
    
    // Test case 3
    int x3 = 10;
    printf("Test 3: x = %d\\n", x3);
    printf("Output: %s\\n", isPalindrome(x3) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'We reverse the entire number and compare it with the original. This approach is straightforward but less efficient as it processes all digits even when we could stop halfway.'
        }
      }
    }
  },
  {
    id: 'acc-8',
    title: 'Remove Duplicates from Sorted Array',
    description: `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.`,
    difficulty: 'Easy',
    category: ['Array', 'Two Pointers'],
    input1: 'nums = [1,1,2]',
    input2: 'nums = [0,0,1,1,1,2,2,3,3,4]',
    explanation: `## Problem Statement

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.

## Examples

### Example 1:
**Input:** nums = [1,1,2]  
**Output:** 2, nums = [1,2,_]  
**Explanation:** Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.

### Example 2:
**Input:** nums = [0,0,1,1,1,2,2,3,3,4]  
**Output:** 5, nums = [0,1,2,3,4,_,_,_,_,_]  
**Explanation:** Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

## Intuition

The key insight is that since the array is sorted, all duplicates will be adjacent. We can use two pointers to keep track of where to write the next unique element.

## Approach

### Approach 1: Two Pointers (Optimal)
1. Initialize write pointer at index 1
2. Iterate through array starting from index 1
3. If current element is different from previous element:
   - Write current element at write pointer
   - Increment write pointer
4. Return write pointer (length of unique elements)

### Approach 2: Using Extra Array
1. Create a new array to store unique elements
2. Copy unique elements to new array
3. Copy back to original array

### Approach 3: Count and Shift
1. Count consecutive duplicates
2. Shift elements to fill gaps
3. Update array length

## Dry Run

Let's trace through Example 1: nums = [1,1,2]

### Two Pointers Approach:
- write = 1, read = 1: nums[1] = 1, nums[0] = 1, same, continue
- write = 1, read = 2: nums[2] = 2, nums[1] = 1, different, nums[1] = 2, write = 2
- Return 2

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 2: Using Extra Array

**Time Complexity:** O(n) - We traverse the array twice  
**Space Complexity:** O(n) - We need extra array

### Solution 3: Count and Shift

**Time Complexity:** O(n²) - We may need to shift elements  
**Space Complexity:** O(1) - We use only constant extra space`,
    output1: '2',
    output2: '5',
    constraints: `## Constraints

- 1 <= nums.length <= 3 * 10^4
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order
- Array may be empty`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

/**
 * Remove duplicates from sorted array using two pointers (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0) {
        return 0;
    }
    
    int write = 1;
    for (int read = 1; read < numsSize; read++) {
        if (nums[read] != nums[read - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    
    return write;
}

int main() {
    // Test case 1
    int nums1[] = {1, 1, 2};
    int size1 = 3;
    printf("Test 1: nums=[1,1,2]\\n");
    int result1 = removeDuplicates(nums1, size1);
    printf("Output: %d, nums=[", result1);
    for (int i = 0; i < result1; i++) {
        printf("%d", nums1[i]);
        if (i < result1 - 1) printf(",");
    }
    printf("]\\n");
    
    // Test case 2
    int nums2[] = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
    int size2 = 10;
    printf("Test 2: nums=[0,0,1,1,1,2,2,3,3,4]\\n");
    int result2 = removeDuplicates(nums2, size2);
    printf("Output: %d, nums=[", result2);
    for (int i = 0; i < result2; i++) {
        printf("%d", nums2[i]);
        if (i < result2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use two pointers: one to read through the array and another to write unique elements. Since the array is sorted, we only need to check if the current element is different from the previous one.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Remove duplicates from sorted array using extra array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0) {
        return 0;
    }
    
    int* temp = (int*)malloc(numsSize * sizeof(int));
    int uniqueCount = 0;
    
    // Copy first element
    temp[uniqueCount++] = nums[0];
    
    // Copy unique elements
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] != nums[i - 1]) {
            temp[uniqueCount++] = nums[i];
        }
    }
    
    // Copy back to original array
    for (int i = 0; i < uniqueCount; i++) {
        nums[i] = temp[i];
    }
    
    free(temp);
    return uniqueCount;
}

int main() {
    // Test case 1
    int nums1[] = {1, 1, 2};
    int size1 = 3;
    printf("Test 1: nums=[1,1,2]\\n");
    int result1 = removeDuplicates(nums1, size1);
    printf("Output: %d, nums=[", result1);
    for (int i = 0; i < result1; i++) {
        printf("%d", nums1[i]);
        if (i < result1 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We create a temporary array to store unique elements, then copy them back to the original array. This approach is straightforward but requires extra space.'
        },
        worst: {
          code: `#include <stdio.h>

/**
 * Remove duplicates from sorted array using count and shift
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0) {
        return 0;
    }
    
    int uniqueCount = 1;
    
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] != nums[i - 1]) {
            // Shift elements to fill gap
            for (int j = uniqueCount; j < i; j++) {
                nums[j] = nums[i];
            }
            uniqueCount++;
        }
    }
    
    return uniqueCount;
}

int main() {
    // Test case 1
    int nums1[] = {1, 1, 2};
    int size1 = 3;
    printf("Test 1: nums=[1,1,2]\\n");
    int result1 = removeDuplicates(nums1, size1);
    printf("Output: %d, nums=[", result1);
    for (int i = 0; i < result1; i++) {
        printf("%d", nums1[i]);
        if (i < result1 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'We shift elements to fill gaps when we find duplicates. This approach is inefficient as it may require shifting elements multiple times, leading to quadratic time complexity.'
        }
      }
    }
  },
  {
    id: 'acc-9',
    title: 'Best Time to Buy and Sell Stock',
    description: `You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.`,
    difficulty: 'Easy',
    category: ['Array', 'Dynamic Programming'],
    input1: 'prices = [7,1,5,3,6,4]',
    input2: 'prices = [7,6,4,3,1]',
    explanation: `## Problem Statement

You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

## Examples

### Example 1:
**Input:** prices = [7,1,5,3,6,4]  
**Output:** 5  
**Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

### Example 2:
**Input:** prices = [7,6,4,3,1]  
**Output:** 0  
**Explanation:** In this case, no transactions are done and the max profit = 0.

### Example 3:
**Input:** prices = [1,2,3,4,5]  
**Output:** 4  
**Explanation:** Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.

## Intuition

The key insight is that we need to find the maximum difference between any two prices, where the selling price comes after the buying price. We can track the minimum price seen so far and calculate potential profits.

## Approach

### Approach 1: One Pass (Optimal)
1. Initialize minPrice to first price and maxProfit to 0
2. Iterate through prices starting from second element
3. For each price:
   - Update minPrice if current price is lower
   - Calculate potential profit (current price - minPrice)
   - Update maxProfit if potential profit is higher
4. Return maxProfit

### Approach 2: Two Pass
1. For each day, find the maximum price in the future
2. Calculate potential profit for each day
3. Return maximum profit

### Approach 3: Brute Force
1. Check all possible buy-sell pairs
2. Calculate profit for each pair
3. Return maximum profit

## Dry Run

Let's trace through Example 1: prices = [7,1,5,3,6,4]

### One Pass Approach:
- minPrice = 7, maxProfit = 0
- i=1, price=1: minPrice = min(7,1) = 1, maxProfit = max(0,1-1) = 0
- i=2, price=5: minPrice = 1, maxProfit = max(0,5-1) = 4
- i=3, price=3: minPrice = 1, maxProfit = max(4,3-1) = 4
- i=4, price=6: minPrice = 1, maxProfit = max(4,6-1) = 5
- i=5, price=4: minPrice = 1, maxProfit = max(5,4-1) = 5
- Return 5

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: One Pass (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 2: Two Pass

**Time Complexity:** O(n²) - We check future prices for each day  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 3: Brute Force

**Time Complexity:** O(n²) - We check all possible pairs  
**Space Complexity:** O(1) - We use only constant extra space`,
    output1: '5',
    output2: '0',
    constraints: `## Constraints

- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^4
- Array may contain duplicate prices`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

/**
 * Best time to buy and sell stock using one pass (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int maxProfit(int* prices, int pricesSize) {
    if (pricesSize <= 1) {
        return 0;
    }
    
    int minPrice = prices[0];
    int maxProfit = 0;
    
    for (int i = 1; i < pricesSize; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            int currentProfit = prices[i] - minPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }
    
    return maxProfit;
}

int main() {
    // Test case 1
    int prices1[] = {7, 1, 5, 3, 6, 4};
    int size1 = 6;
    printf("Test 1: prices=[7,1,5,3,6,4]\\n");
    printf("Output: %d\\n", maxProfit(prices1, size1));
    
    // Test case 2
    int prices2[] = {7, 6, 4, 3, 1};
    int size2 = 5;
    printf("Test 2: prices=[7,6,4,3,1]\\n");
    printf("Output: %d\\n", maxProfit(prices2, size2));
    
    // Test case 3
    int prices3[] = {1, 2, 3, 4, 5};
    int size3 = 5;
    printf("Test 3: prices=[1,2,3,4,5]\\n");
    printf("Output: %d\\n", maxProfit(prices3, size3));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We track the minimum price seen so far and calculate potential profits for each day. This approach is optimal as it requires only one pass through the array and constant extra space.'
        },
        average: {
          code: `#include <stdio.h>

/**
 * Best time to buy and sell stock using two pass
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
int maxProfit(int* prices, int pricesSize) {
    if (pricesSize <= 1) {
        return 0;
    }
    
    int maxProfit = 0;
    
    for (int i = 0; i < pricesSize - 1; i++) {
        // Find maximum price in the future
        int maxFuturePrice = prices[i + 1];
        for (int j = i + 2; j < pricesSize; j++) {
            if (prices[j] > maxFuturePrice) {
                maxFuturePrice = prices[j];
            }
        }
        
        int currentProfit = maxFuturePrice - prices[i];
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
    printf("Test 1: prices=[7,1,5,3,6,4]\\n");
    printf("Output: %d\\n", maxProfit(prices1, size1));
    
    // Test case 2
    int prices2[] = {7, 6, 4, 3, 1};
    int size2 = 5;
    printf("Test 2: prices=[7,6,4,3,1]\\n");
    printf("Output: %d\\n", maxProfit(prices2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'For each day, we find the maximum price in the future and calculate potential profit. This approach is less efficient due to nested loops but demonstrates a different algorithmic technique.'
        },
        worst: {
          code: `#include <stdio.h>

/**
 * Best time to buy and sell stock using brute force
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
int maxProfit(int* prices, int pricesSize) {
    if (pricesSize <= 1) {
        return 0;
    }
    
    int maxProfit = 0;
    
    for (int i = 0; i < pricesSize - 1; i++) {
        for (int j = i + 1; j < pricesSize; j++) {
            int currentProfit = prices[j] - prices[i];
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }
    
    return maxProfit;
}

int main() {
    // Test case 1
    int prices1[] = {7, 1, 5, 3, 6, 4};
    int size1 = 6;
    printf("Test 1: prices=[7,1,5,3,6,4]\\n");
    printf("Output: %d\\n", maxProfit(prices1, size1));
    
    // Test case 2
    int prices2[] = {7, 6, 4, 3, 1};
    int size2 = 5;
    printf("Test 2: prices=[7,6,4,3,1]\\n");
    printf("Output: %d\\n", maxProfit(prices2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'We check all possible buy-sell pairs using nested loops. This approach is straightforward but highly inefficient for large arrays as it checks n(n-1)/2 pairs.'
        }
      }
    }
  },
  {
    id: 'acc-10',
    title: 'Climbing Stairs',
    description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    difficulty: 'Easy',
    category: ['Dynamic Programming', 'Math'],
    input1: 'n = 2',
    input2: 'n = 3',
    explanation: `## Problem Statement

You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Examples

### Example 1:
**Input:** n = 2  
**Output:** 2  
**Explanation:** There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

### Example 2:
**Input:** n = 3  
**Output:** 3  
**Explanation:** There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

### Example 3:
**Input:** n = 4  
**Output:** 5  
**Explanation:** There are five ways to climb to the top.
1. 1+1+1+1
2. 1+1+2
3. 1+2+1
4. 2+1+1
5. 2+2

## Intuition

The key insight is that this is a Fibonacci sequence problem. The number of ways to climb n steps is equal to the sum of ways to climb (n-1) steps and (n-2) steps, because from step n-1 we can take 1 step, and from step n-2 we can take 2 steps.

## Approach

### Approach 1: Dynamic Programming (Optimal)
1. This is a Fibonacci sequence problem
2. For n steps, ways(n) = ways(n-1) + ways(n-2)
3. Use bottom-up approach to avoid recursion
4. Initialize dp[1] = 1, dp[2] = 2
5. Build up to n using the recurrence relation

### Approach 2: Recursion with Memoization
1. Use recursive approach with memoization
2. Store computed values to avoid recalculation
3. Base cases: ways(1) = 1, ways(2) = 2

### Approach 3: Matrix Exponentiation
1. Use matrix exponentiation for O(log n) solution
2. More complex but mathematically elegant
3. Useful for very large values of n

## Dry Run

Let's trace through Example 1: n = 2

### Dynamic Programming Approach:
- Initialize: prev = 1, curr = 2
- For n = 2: return curr = 2

Let's trace through Example 2: n = 3
- Initialize: prev = 1, curr = 2
- i = 3: prev = 2, curr = 1 + 2 = 3
- Return curr = 3

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Dynamic Programming (Optimal)

**Time Complexity:** O(n) - We compute each value once  
**Space Complexity:** O(1) - We use only constant extra space

### Solution 2: Recursion with Memoization

**Time Complexity:** O(n) - Each value computed once  
**Space Complexity:** O(n) - Due to recursion stack and memoization

### Solution 3: Matrix Exponentiation

**Time Complexity:** O(log n) - Matrix exponentiation  
**Space Complexity:** O(1) - Constant space for matrix operations`,
    output1: '2',
    output2: '3',
    constraints: `## Constraints

- 1 <= n <= 45
- n is a positive integer`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

/**
 * Climbing stairs using dynamic programming (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int climbStairs(int n) {
    if (n <= 2) {
        return n;
    }
    
    int prev = 1, curr = 2;
    for (int i = 3; i <= n; i++) {
        int temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    
    return curr;
}

int main() {
    // Test case 1
    int n1 = 2;
    printf("Test 1: n = %d\\n", n1);
    printf("Output: %d\\n", climbStairs(n1));
    
    // Test case 2
    int n2 = 3;
    printf("Test 2: n = %d\\n", n2);
    printf("Output: %d\\n", climbStairs(n2));
    
    // Test case 3
    int n3 = 4;
    printf("Test 3: n = %d\\n", n3);
    printf("Output: %d\\n", climbStairs(n3));
    
    // Test case 4
    int n4 = 5;
    printf("Test 4: n = %d\\n", n4);
    printf("Output: %d\\n", climbStairs(n4));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use dynamic programming with constant space optimization. We maintain only two variables to store the previous two values in the Fibonacci sequence, building up to the nth value iteratively.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Climbing stairs using recursion with memoization
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int climbStairsHelper(int n, int* memo) {
    if (n <= 2) {
        return n;
    }
    
    if (memo[n] != 0) {
        return memo[n];
    }
    
    memo[n] = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo);
    return memo[n];
}

int climbStairs(int n) {
    int* memo = (int*)calloc(n + 1, sizeof(int));
    int result = climbStairsHelper(n, memo);
    free(memo);
    return result;
}

int main() {
    // Test case 1
    int n1 = 2;
    printf("Test 1: n = %d\\n", n1);
    printf("Output: %d\\n", climbStairs(n1));
    
    // Test case 2
    int n2 = 3;
    printf("Test 2: n = %d\\n", n2);
    printf("Output: %d\\n", climbStairs(n2));
    
    // Test case 3
    int n3 = 4;
    printf("Test 3: n = %d\\n", n3);
    printf("Output: %d\\n", climbStairs(n3));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use recursion with memoization to avoid recalculating the same subproblems. This approach is more intuitive but uses more space due to the recursion stack and memoization array.'
        },
        worst: {
          code: `#include <stdio.h>

/**
 * Climbing stairs using simple recursion (inefficient)
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */
int climbStairs(int n) {
    if (n <= 2) {
        return n;
    }
    
    return climbStairs(n - 1) + climbStairs(n - 2);
}

int main() {
    // Test case 1
    int n1 = 2;
    printf("Test 1: n = %d\\n", n1);
    printf("Output: %d\\n", climbStairs(n1));
    
    // Test case 2
    int n2 = 3;
    printf("Test 2: n = %d\\n", n2);
    printf("Output: %d\\n", climbStairs(n2));
    
    // Note: This approach is very slow for larger values of n
    // Test case 3
    int n3 = 4;
    printf("Test 3: n = %d\\n", n3);
    printf("Output: %d\\n", climbStairs(n3));
    
    return 0;
}`,
          timeComplexity: 'O(2^n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use simple recursion without memoization. This approach recalculates the same subproblems multiple times, leading to exponential time complexity. It demonstrates why dynamic programming is necessary for this problem.'
        }
      }
    }
  },
  {
    id: 'acc-11',
    title: 'Longest Valid Parentheses',
    description: `Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.`,
    difficulty: 'Hard',
    category: ['String', 'Stack', 'Dynamic Programming'],
    input1: 's = "(()"',
    input2: 's = ")()())"',
    explanation: `## Problem Statement

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

## Examples

### Example 1:
**Input:** s = "(()"  
**Output:** 2  
**Explanation:** The longest valid parentheses substring is "()".

### Example 2:
**Input:** s = ")()())"  
**Output:** 4  
**Explanation:** The longest valid parentheses substring is "()()".

### Example 3:
**Input:** s = ""  
**Output:** 0

## Intuition

The key insight is that valid parentheses must be balanced and consecutive. We can use a stack to keep track of indices of opening parentheses and calculate the length of valid substrings.

## Approach

### Approach 1: Stack (Optimal)
1. Use a stack to store indices of opening parentheses
2. Initialize stack with -1 to handle edge cases
3. For each character:
   - If '(', push index to stack
   - If ')', pop from stack and calculate length
4. Keep track of maximum length found

### Approach 2: Dynamic Programming
1. Create DP array where dp[i] represents length of valid parentheses ending at i
2. For each ')', check if there's a matching '('
3. Update DP array and track maximum

### Approach 3: Two Pass Approach
1. Scan from left to right counting '(' and ')'
2. Scan from right to left counting '(' and ')'
3. Track maximum valid length

## Dry Run

Let's trace through Example 2: s = ")()())"

### Stack Approach:
- Stack: [-1] (initialized)
- i=0, char=')': pop -1, stack empty, push 0
- i=1, char='(': push 1
- i=2, char=')': pop 1, length = 2-(-1) = 3, max = 3
- i=3, char='(': push 3
- i=4, char=')': pop 3, length = 4-1 = 3, max = 3
- i=5, char=')': pop 1, stack empty, push 5
- Final max = 4 (from "()()")

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Stack (Optimal)

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - Stack can store up to n elements

### Solution 2: Dynamic Programming

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - DP array of size n

### Solution 3: Two Pass Approach

**Time Complexity:** O(n) - We traverse the string twice  
**Space Complexity:** O(1) - We use only constant extra space`,
    output1: '2',
    output2: '4',
    constraints: '1 <= s.length <= 3 * 10^4\ns[i] is \'(\', or \')\'',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>

/**
 * Longest Valid Parentheses using Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int longestValidParentheses(char* s) {
    int len = strlen(s);
    if (len <= 1) return 0;
    
    int* stack = (int*)malloc((len + 1) * sizeof(int));
    int top = 0;
    stack[top++] = -1;  // Initialize with -1
    
    int maxLen = 0;
    
    for (int i = 0; i < len; i++) {
        if (s[i] == '(') {
            stack[top++] = i;
        } else {
            top--;  // Pop the top element
            if (top == 0) {
                stack[top++] = i;  // Push current index
            } else {
                int currentLen = i - stack[top - 1];
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                }
            }
        }
    }
    
    free(stack);
    return maxLen;
}

int main() {
    // Test case 1
    char* s1 = "(()";
    printf("Test 1: s = \\"%s\\"\\n", s1);
    printf("Output: %d\\n", longestValidParentheses(s1));
    
    // Test case 2
    char* s2 = ")()())";
    printf("Test 2: s = \\"%s\\"\\n", s2);
    printf("Output: %d\\n", longestValidParentheses(s2));
    
    // Test case 3
    char* s3 = "";
    printf("Test 3: s = \\"%s\\"\\n", s3);
    printf("Output: %d\\n", longestValidParentheses(s3));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use a stack to keep track of indices of opening parentheses. We initialize the stack with -1 to handle edge cases. For each closing parenthesis, we pop from the stack and calculate the length of the valid substring. This approach efficiently handles all cases and provides optimal time and space complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>

/**
 * Longest Valid Parentheses using Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int longestValidParentheses(char* s) {
    int len = strlen(s);
    if (len <= 1) return 0;
    
    int* dp = (int*)calloc(len, sizeof(int));
    int maxLen = 0;
    
    for (int i = 1; i < len; i++) {
        if (s[i] == ')') {
            if (s[i - 1] == '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == '(') {
                dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
            }
            if (dp[i] > maxLen) {
                maxLen = dp[i];
            }
        }
    }
    
    free(dp);
    return maxLen;
}

int main() {
    // Test case 1
    char* s1 = "(()";
    printf("Test 1: s = \\"%s\\"\\n", s1);
    printf("Output: %d\\n", longestValidParentheses(s1));
    
    // Test case 2
    char* s2 = ")()())";
    printf("Test 2: s = \\"%s\\"\\n", s2);
    printf("Output: %d\\n", longestValidParentheses(s2));
    
    // Test case 3
    char* s3 = "";
    printf("Test 3: s = \\"%s\\"\\n", s3);
    printf("Output: %d\\n", longestValidParentheses(s3));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use dynamic programming where dp[i] represents the length of the longest valid parentheses ending at index i. For each closing parenthesis, we check if there is a matching opening parenthesis and update the DP array accordingly. This approach is more complex but provides the same time complexity.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>

/**
 * Longest Valid Parentheses using Two Pass Approach
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int longestValidParentheses(char* s) {
    int len = strlen(s);
    if (len <= 1) return 0;
    
    int left = 0, right = 0;
    int maxLen = 0;
    
    // Left to right pass
    for (int i = 0; i < len; i++) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        
        if (left == right) {
            maxLen = (left + right > maxLen) ? left + right : maxLen;
        } else if (right > left) {
            left = right = 0;
        }
    }
    
    left = right = 0;
    
    // Right to left pass
    for (int i = len - 1; i >= 0; i--) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        
        if (left == right) {
            maxLen = (left + right > maxLen) ? left + right : maxLen;
        } else if (left > right) {
            left = right = 0;
        }
    }
    
    return maxLen;
}

int main() {
    // Test case 1
    char* s1 = "(()";
    printf("Test 1: s = \\"%s\\"\\n", s1);
    printf("Output: %d\\n", longestValidParentheses(s1));
    
    // Test case 2
    char* s2 = ")()())";
    printf("Test 2: s = \\"%s\\"\\n", s2);
    printf("Output: %d\\n", longestValidParentheses(s2));
    
    // Test case 3
    char* s3 = "";
    printf("Test 3: s = \\"%s\\"\\n", s3);
    printf("Output: %d\\n", longestValidParentheses(s3));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use a two-pass approach where we scan the string from left to right and right to left, counting opening and closing parentheses. This approach uses constant space but requires two passes through the string. It is less intuitive than the stack approach.'
        }
      }
    }
  },
  {
    id: 'acc-12',
    title: 'Median of Two Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).`,
    difficulty: 'Hard',
    category: ['Array', 'Binary Search', 'Divide and Conquer'],
    input1: 'nums1 = [1,3], nums2 = [2]',
    input2: 'nums1 = [1,2], nums2 = [3,4]',
    explanation: `## Problem Statement

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

## Examples

### Example 1:
**Input:** nums1 = [1,3], nums2 = [2]  
**Output:** 2.00000  
**Explanation:** merged array = [1,2,3] and median is 2.

### Example 2:
**Input:** nums1 = [1,2], nums2 = [3,4]  
**Output:** 2.50000  
**Explanation:** merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

## Intuition

The key insight is that we don't need to merge the arrays. Instead, we can use binary search to find the correct partition point that divides both arrays into left and right halves, where all elements in the left half are less than all elements in the right half.

## Approach

### Approach 1: Binary Search (Optimal)
1. Ensure nums1 is the smaller array
2. Use binary search on the smaller array
3. Calculate partition points for both arrays
4. Check if the partition is correct
5. Adjust search space based on comparison

### Approach 2: Merge and Find
1. Merge the two sorted arrays
2. Find the median of the merged array
3. Handle even and odd lengths

### Approach 3: Two Pointers
1. Use two pointers to traverse both arrays
2. Count elements until reaching median position
3. Return the median value

## Dry Run

Let's trace through Example 1: nums1 = [1,3], nums2 = [2]

### Binary Search Approach:
- nums1 = [1,3], nums2 = [2]
- Binary search on nums1 (smaller array)
- Partition nums1 at index 1: left1 = [1], right1 = [3]
- Partition nums2 at index 0: left2 = [], right2 = [2]
- Check: max(left1, left2) <= min(right1, right2)
- max(1, -∞) <= min(3, 2) → 1 <= 2 ✓
- max(-∞, 2) <= min(3, ∞) → 2 <= 3 ✓
- Median = max(1, 2) = 2

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Binary Search (Optimal)

**Time Complexity:** O(log(min(m,n))) - Binary search on smaller array  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: Merge and Find

**Time Complexity:** O(m+n) - Merge arrays  
**Space Complexity:** O(m+n) - Store merged array

### Solution 3: Two Pointers

**Time Complexity:** O(m+n) - Traverse both arrays  
**Space Complexity:** O(1) - Constant extra space`,
    output1: '2.00000',
    output2: '2.50000',
    constraints: 'nums1.length == m\nnums2.length == n\n0 <= m <= 1000\n0 <= n <= 1000\n1 <= m + n <= 2000\n-10^6 <= nums1[i], nums2[j] <= 10^6',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Median of Two Sorted Arrays using Binary Search
 * Time Complexity: O(log(min(m,n)))
 * Space Complexity: O(1)
 */
double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // Ensure nums1 is the smaller array
    if (nums1Size > nums2Size) {
        return findMedianSortedArrays(nums2, nums2Size, nums1, nums1Size);
    }
    
    int left = 0, right = nums1Size;
    int totalLeft = (nums1Size + nums2Size + 1) / 2;
    
    while (left <= right) {
        int partition1 = (left + right) / 2;
        int partition2 = totalLeft - partition1;
        
        int maxLeft1 = (partition1 == 0) ? -1000001 : nums1[partition1 - 1];
        int minRight1 = (partition1 == nums1Size) ? 1000001 : nums1[partition1];
        int maxLeft2 = (partition2 == 0) ? -1000001 : nums2[partition2 - 1];
        int minRight2 = (partition2 == nums2Size) ? 1000001 : nums2[partition2];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Found the correct partition
            if ((nums1Size + nums2Size) % 2 == 0) {
                return (double)((maxLeft1 > maxLeft2 ? maxLeft1 : maxLeft2) + 
                               (minRight1 < minRight2 ? minRight1 : minRight2)) / 2.0;
            } else {
                return (double)(maxLeft1 > maxLeft2 ? maxLeft1 : maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }
    
    return 0.0;
}

int main() {
    // Test case 1
    int nums1[] = {1, 3};
    int nums2[] = {2};
    printf("Test 1: nums1 = [1,3], nums2 = [2]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums1, 2, nums2, 1));
    
    // Test case 2
    int nums3[] = {1, 2};
    int nums4[] = {3, 4};
    printf("Test 2: nums1 = [1,2], nums2 = [3,4]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums3, 2, nums4, 2));
    
    // Test case 3
    int nums5[] = {0, 0};
    int nums6[] = {0, 0};
    printf("Test 3: nums1 = [0,0], nums2 = [0,0]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums5, 2, nums6, 2));
    
    return 0;
}`,
          timeComplexity: 'O(log(min(m,n)))',
          spaceComplexity: 'O(1)',
          explanation: 'We use binary search on the smaller array to find the correct partition point. We ensure that all elements in the left partition are less than all elements in the right partition. This approach achieves the required O(log(m+n)) time complexity by using binary search on the smaller array.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Median of Two Sorted Arrays using Merge Approach
 * Time Complexity: O(m+n)
 * Space Complexity: O(m+n)
 */
double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int* merged = (int*)malloc(totalSize * sizeof(int));
    
    int i = 0, j = 0, k = 0;
    
    // Merge the two sorted arrays
    while (i < nums1Size && j < nums2Size) {
        if (nums1[i] <= nums2[j]) {
            merged[k++] = nums1[i++];
        } else {
            merged[k++] = nums2[j++];
        }
    }
    
    // Copy remaining elements
    while (i < nums1Size) {
        merged[k++] = nums1[i++];
    }
    while (j < nums2Size) {
        merged[k++] = nums2[j++];
    }
    
    // Find median
    double median;
    if (totalSize % 2 == 0) {
        median = (double)(merged[totalSize/2 - 1] + merged[totalSize/2]) / 2.0;
    } else {
        median = (double)merged[totalSize/2];
    }
    
    free(merged);
    return median;
}

int main() {
    // Test case 1
    int nums1[] = {1, 3};
    int nums2[] = {2};
    printf("Test 1: nums1 = [1,3], nums2 = [2]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums1, 2, nums2, 1));
    
    // Test case 2
    int nums3[] = {1, 2};
    int nums4[] = {3, 4};
    printf("Test 2: nums1 = [1,2], nums2 = [3,4]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums3, 2, nums4, 2));
    
    // Test case 3
    int nums5[] = {0, 0};
    int nums6[] = {0, 0};
    printf("Test 3: nums1 = [0,0], nums2 = [0,0]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums5, 2, nums6, 2));
    
    return 0;
}`,
          timeComplexity: 'O(m+n)',
          spaceComplexity: 'O(m+n)',
          explanation: 'We merge the two sorted arrays into a single sorted array and then find the median. This approach is straightforward and easy to understand, but it uses extra space to store the merged array and has a higher time complexity than the optimal solution.'
        },
        worst: {
          code: `#include <stdio.h>

/**
 * Median of Two Sorted Arrays using Two Pointers
 * Time Complexity: O(m+n)
 * Space Complexity: O(1)
 */
double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int medianPos = totalSize / 2;
    int current = 0, prev = 0;
    int i = 0, j = 0;
    
    // Find the median using two pointers
    for (int count = 0; count <= medianPos; count++) {
        prev = current;
        
        if (i < nums1Size && (j >= nums2Size || nums1[i] <= nums2[j])) {
            current = nums1[i++];
        } else {
            current = nums2[j++];
        }
    }
    
    // Return median based on total size
    if (totalSize % 2 == 0) {
        return (double)(prev + current) / 2.0;
    } else {
        return (double)current;
    }
}

int main() {
    // Test case 1
    int nums1[] = {1, 3};
    int nums2[] = {2};
    printf("Test 1: nums1 = [1,3], nums2 = [2]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums1, 2, nums2, 1));
    
    // Test case 2
    int nums3[] = {1, 2};
    int nums4[] = {3, 4};
    printf("Test 2: nums1 = [1,2], nums2 = [3,4]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums3, 2, nums4, 2));
    
    // Test case 3
    int nums5[] = {0, 0};
    int nums6[] = {0, 0};
    printf("Test 3: nums1 = [0,0], nums2 = [0,0]\\n");
    printf("Output: %.5f\\n", findMedianSortedArrays(nums5, 2, nums6, 2));
    
    return 0;
}`,
          timeComplexity: 'O(m+n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use two pointers to traverse both arrays and count elements until we reach the median position. This approach uses constant space but still has linear time complexity. It is less efficient than the binary search approach but more space-efficient than the merge approach.'
        }
      }
    }
  },
  {
    id: 'acc-13',
    title: 'Regular Expression Matching',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' Matches any single character. '*' Matches zero or more of the preceding element.`,
    difficulty: 'Hard',
    category: ['String', 'Dynamic Programming', 'Recursion'],
    input1: 's = "aa", p = "a"',
    input2: 's = "aa", p = "a*"',
    explanation: `## Problem Statement

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
- '.' Matches any single character
- '*' Matches zero or more of the preceding element

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

## Intuition

The key insight is that this is a dynamic programming problem where we need to match the string against the pattern character by character, handling the special cases of '.' and '*' recursively.

## Approach

### Approach 1: Dynamic Programming (Optimal)
1. Create a 2D DP table
2. Base cases: empty string and empty pattern
3. Handle '.' and '*' cases separately
4. Fill the DP table bottom-up

### Approach 2: Recursion with Memoization
1. Use recursive function with memoization
2. Handle base cases first
3. Check for '*' and '.' patterns
4. Memoize results to avoid recalculation

### Approach 3: Backtracking
1. Use backtracking approach
2. Try different combinations of '*' matches
3. Return true if any combination works

## Dry Run

Let's trace through Example 2: s = "aa", p = "a*"

### DP Approach:
- Create DP table: dp[3][3] (for "aa" and "a*")
- dp[0][0] = true (empty matches empty)
- dp[0][1] = false (empty doesn't match "a")
- dp[0][2] = true (empty matches "a*" with 0 repetitions)
- dp[1][0] = false (non-empty doesn't match empty)
- dp[1][1] = true (first 'a' matches first 'a')
- dp[1][2] = true (first 'a' matches "a*")
- dp[2][0] = false
- dp[2][1] = false (second 'a' doesn't match single 'a')
- dp[2][2] = true (second 'a' matches "a*")
- Final result: dp[2][2] = true

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Dynamic Programming (Optimal)

**Time Complexity:** O(m*n) - Fill DP table  
**Space Complexity:** O(m*n) - DP table space

### Solution 2: Recursion with Memoization

**Time Complexity:** O(m*n) - With memoization  
**Space Complexity:** O(m*n) - Recursion stack + memoization

### Solution 3: Backtracking

**Time Complexity:** O((m+n)*2^(m+n)) - Exponential  
**Space Complexity:** O(m+n) - Recursion stack`,
    output1: 'false',
    output2: 'true',
    constraints: '1 <= s.length <= 20\n1 <= p.length <= 30\ns contains only lowercase English letters\np contains only lowercase English letters, \'.\', and \'*\'',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

/**
 * Regular Expression Matching using Dynamic Programming
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 */
bool isMatch(char* s, char* p) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Create DP table
    bool** dp = (bool**)malloc((m + 1) * sizeof(bool*));
    for (int i = 0; i <= m; i++) {
        dp[i] = (bool*)calloc(n + 1, sizeof(bool));
    }
    
    // Base case: empty pattern matches empty string
    dp[0][0] = true;
    
    // Handle patterns with *
    for (int j = 1; j <= n; j++) {
        if (p[j - 1] == '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    // Fill DP table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == '*') {
                dp[i][j] = dp[i][j - 2];  // Zero occurrence
                if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    
    bool result = dp[m][n];
    
    // Free memory
    for (int i = 0; i <= m; i++) {
        free(dp[i]);
    }
    free(dp);
    
    return result;
}

int main() {
    // Test case 1
    char* s1 = "aa";
    char* p1 = "a";
    printf("Test 1: s = \\"%s\\", p = \\"%s\\"\\n", s1, p1);
    printf("Output: %s\\n", isMatch(s1, p1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "aa";
    char* p2 = "a*";
    printf("Test 2: s = \\"%s\\", p = \\"%s\\"\\n", s2, p2);
    printf("Output: %s\\n", isMatch(s2, p2) ? "true" : "false");
    
    // Test case 3
    char* s3 = "ab";
    char* p3 = ".*";
    printf("Test 3: s = \\"%s\\", p = \\"%s\\"\\n", s3, p3);
    printf("Output: %s\\n", isMatch(s3, p3) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)',
          explanation: 'We use dynamic programming with a 2D table where dp[i][j] represents whether the first i characters of the string match the first j characters of the pattern. We handle the special cases of \'.\' and \'*\' by checking previous states in the DP table. This approach efficiently handles all pattern matching scenarios.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

/**
 * Regular Expression Matching using Recursion with Memoization
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 */
bool isMatchHelper(char* s, char* p, int i, int j, bool** memo) {
    if (memo[i][j] != -1) {
        return memo[i][j];
    }
    
    if (j == strlen(p)) {
        return i == strlen(s);
    }
    
    bool firstMatch = (i < strlen(s) && (p[j] == s[i] || p[j] == '.'));
    
    if (j + 1 < strlen(p) && p[j + 1] == '*') {
        bool result = isMatchHelper(s, p, i, j + 2, memo) || 
                     (firstMatch && isMatchHelper(s, p, i + 1, j, memo));
        memo[i][j] = result;
        return result;
    } else {
        bool result = firstMatch && isMatchHelper(s, p, i + 1, j + 1, memo);
        memo[i][j] = result;
        return result;
    }
}

bool isMatch(char* s, char* p) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Create memoization table
    bool** memo = (bool**)malloc((m + 1) * sizeof(bool*));
    for (int i = 0; i <= m; i++) {
        memo[i] = (bool*)malloc((n + 1) * sizeof(bool));
        for (int j = 0; j <= n; j++) {
            memo[i][j] = -1;
        }
    }
    
    bool result = isMatchHelper(s, p, 0, 0, memo);
    
    // Free memory
    for (int i = 0; i <= m; i++) {
        free(memo[i]);
    }
    free(memo);
    
    return result;
}

int main() {
    // Test case 1
    char* s1 = "aa";
    char* p1 = "a";
    printf("Test 1: s = \\"%s\\", p = \\"%s\\"\\n", s1, p1);
    printf("Output: %s\\n", isMatch(s1, p1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "aa";
    char* p2 = "a*";
    printf("Test 2: s = \\"%s\\", p = \\"%s\\"\\n", s2, p2);
    printf("Output: %s\\n", isMatch(s2, p2) ? "true" : "false");
    
    // Test case 3
    char* s3 = "ab";
    char* p3 = ".*";
    printf("Test 3: s = \\"%s\\", p = \\"%s\\"\\n", s3, p3);
    printf("Output: %s\\n", isMatch(s3, p3) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)',
          explanation: 'We use recursion with memoization to avoid recalculating the same subproblems. The recursive function checks if the current characters match and handles the \'*\' pattern by trying zero or more repetitions. Memoization ensures that we don\'t recalculate the same states multiple times.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

/**
 * Regular Expression Matching using Backtracking
 * Time Complexity: O((m+n)*2^(m+n))
 * Space Complexity: O(m+n)
 */
bool isMatch(char* s, char* p) {
    if (strlen(p) == 0) {
        return strlen(s) == 0;
    }
    
    bool firstMatch = (strlen(s) > 0 && (p[0] == s[0] || p[0] == '.'));
    
    if (strlen(p) >= 2 && p[1] == '*') {
        return isMatch(s, p + 2) || (firstMatch && isMatch(s + 1, p));
    } else {
        return firstMatch && isMatch(s + 1, p + 1);
    }
}

int main() {
    // Test case 1
    char* s1 = "aa";
    char* p1 = "a";
    printf("Test 1: s = \\"%s\\", p = \\"%s\\"\\n", s1, p1);
    printf("Output: %s\\n", isMatch(s1, p1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "aa";
    char* p2 = "a*";
    printf("Test 2: s = \\"%s\\", p = \\"%s\\"\\n", s2, p2);
    printf("Output: %s\\n", isMatch(s2, p2) ? "true" : "false");
    
    // Test case 3
    char* s3 = "ab";
    char* p3 = ".*";
    printf("Test 3: s = \\"%s\\", p = \\"%s\\"\\n", s3, p3);
    printf("Output: %s\\n", isMatch(s3, p3) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O((m+n)*2^(m+n))',
          spaceComplexity: 'O(m+n)',
          explanation: 'We use a simple backtracking approach that tries all possible combinations of pattern matching. For \'*\' patterns, we try both zero repetitions and one or more repetitions. This approach is very slow for complex patterns due to exponential time complexity, but it is the most straightforward to understand.'
        }
      }
    }
  }
];
