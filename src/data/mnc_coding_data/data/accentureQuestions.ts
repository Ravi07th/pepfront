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
    id: 'find-missing-number',
    title: 'Find Missing Number in Array',
    description: `Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.`,
    difficulty: 'Easy',
    category: ['Array', 'Bit Manipulation', 'Math'],
    input1: 'nums = [3,0,1]',
    input2: 'nums = [9,6,4,2,3,5,7,0,1]',
    explanation: `## Problem Statement

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

**Key Understanding:**
- The array should contain all numbers from 0 to n (inclusive)
- There is exactly one number missing
- All numbers in the array are unique
- The array is not necessarily sorted

## Examples

### Example 1:
**Input:** nums = [3,0,1]  
**Output:** 2  
**Explanation:** 
- n = 3 since there are 3 numbers in the array
- The complete sequence should be [0,1,2,3]
- The array contains [0,1,3], so 2 is missing
- Visual representation: [0,1,2,3] → [0,1,_,3] where _ represents the missing 2

### Example 2:
**Input:** nums = [9,6,4,2,3,5,7,0,1]  
**Output:** 8  
**Explanation:** 
- n = 9 since there are 9 numbers in the array
- The complete sequence should be [0,1,2,3,4,5,6,7,8,9]
- The array contains [0,1,2,3,4,5,6,7,9], so 8 is missing
- Visual representation: [0,1,2,3,4,5,6,7,8,9] → [0,1,2,3,4,5,6,7,_,9]

### Example 3:
**Input:** nums = [0]  
**Output:** 1  
**Explanation:** 
- n = 1 since there is 1 number in the array
- The complete sequence should be [0,1]
- The array contains only [0], so 1 is missing

## Intuition

The key insight is that we know the array should contain all numbers from 0 to n, so we can use mathematical properties to find the missing number efficiently.

**Mathematical Properties:**
1. **Sum Formula:** The sum of first n natural numbers is n*(n+1)/2
2. **XOR Property:** XORing a number with itself gives 0, and XORing with 0 gives the number itself
3. **Range Property:** All numbers from 0 to n should be present exactly once

**Why These Approaches Work:**
- **Sum Approach:** If we subtract the actual sum from the expected sum, we get the missing number
- **XOR Approach:** XORing all numbers from 0 to n with all numbers in the array cancels out all present numbers, leaving only the missing one
- **Sorting Approach:** After sorting, each position should contain its index value

## Approach

### Approach 1: Sum Formula (Optimal)
**Algorithm:**
1. Calculate the expected sum using the formula: n*(n+1)/2
2. Calculate the actual sum of all elements in the array
3. Return the difference: expected sum - actual sum

**Why This Works:**
- The expected sum includes the missing number
- The actual sum excludes the missing number
- Their difference gives us the missing number

**Complexity Analysis:**
- Time: O(n) - Single pass through the array
- Space: O(1) - Only constant variables needed

### Approach 2: XOR Operation
**Algorithm:**
1. Initialize result = 0
2. XOR result with all numbers from 0 to n
3. XOR result with all numbers in the array
4. Return result

**Why This Works:**
- XOR has the property: a^a = 0 and a^0 = a
- All numbers from 0 to n XORed together = 0 (since each number appears once)
- All numbers in array XORed together = missing number (since each present number appears once)
- Final result = 0 ^ missing_number = missing_number

**Complexity Analysis:**
- Time: O(n) - Two passes through the array
- Space: O(1) - Only constant variables needed

### Approach 3: Sorting and Linear Search
**Algorithm:**
1. Sort the array in ascending order
2. Iterate through the sorted array
3. Check if each position contains the expected value (index)
4. Return the first position where the value doesn't match the index

**Why This Works:**
- After sorting, the array should be [0,1,2,...,n] with one missing number
- The first position where array[i] ≠ i contains the missing number

**Complexity Analysis:**
- Time: O(n log n) - Due to sorting
- Space: O(1) if in-place sorting, O(n) if not

## Dry Run

Let's trace through Example 1: nums = [3,0,1]

### Sum Formula Approach:
**Step 1:** Calculate expected sum
- n = 3 (length of array)
- Expected sum = n*(n+1)/2 = 3*(3+1)/2 = 3*4/2 = 12/2 = 6

**Step 2:** Calculate actual sum
- Actual sum = 3 + 0 + 1 = 4

**Step 3:** Find missing number
- Missing number = Expected sum - Actual sum = 6 - 4 = 2

**Verification:** The array [3,0,1] is missing 2, which is correct.

### XOR Approach:
**Step 1:** XOR all numbers from 0 to 3
- result = 0^1^2^3
- 0^1 = 1
- 1^2 = 3
- 3^3 = 0
- So result = 0

**Step 2:** XOR with all numbers in array
- result = 0^3^0^1
- 0^3 = 3
- 3^0 = 3
- 3^1 = 2
- Final result = 2

**Verification:** The missing number is 2, which matches our result.

### Sorting Approach:
**Step 1:** Sort the array
- [3,0,1] → [0,1,3]

**Step 2:** Check each position
- Position 0: array[0] = 0, expected = 0 ✓
- Position 1: array[1] = 1, expected = 1 ✓
- Position 2: array[2] = 3, expected = 2 ✗

**Result:** Position 2 has value 3 instead of 2, so 2 is missing.

## Key Insights

1. **Mathematical Efficiency:** The sum formula approach is both time and space optimal
2. **XOR Elegance:** XOR approach is mathematically elegant and handles overflow better than sum
3. **Sorting Trade-off:** Sorting approach is less efficient but more intuitive
4. **Overflow Consideration:** Sum approach might overflow for large arrays, XOR is safer
5. **Single Pass:** Both sum and XOR approaches can be done in a single pass

## Edge Cases

1. **Empty Array:** Not possible as per constraints (1 ≤ nums.length ≤ 10^4)
2. **Single Element:** Array with one element, missing number is either 0 or 1
3. **Large Numbers:** Sum approach might overflow, XOR is safer
4. **All Numbers Present:** Not possible as per problem statement (exactly one number is missing)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Sum Formula (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Simple and intuitive
- Single pass through array
- Constant space usage

**Disadvantages:**
- May overflow for large arrays
- Requires arithmetic operations

### Solution 2: XOR Operation

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- No overflow issues
- Mathematically elegant
- Handles large numbers well

**Disadvantages:**
- Slightly less intuitive
- Requires understanding of XOR properties

### Solution 3: Sorting and Linear Search

**Time Complexity:** O(n log n) due to sorting  
**Space Complexity:** O(1) if in-place sorting, O(n) if not

**Advantages:**
- Very intuitive approach
- Easy to understand and implement

**Disadvantages:**
- Less efficient due to sorting
- Higher time complexity
- May use extra space depending on sorting algorithm`,
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
    id: 'reverse-string',
    title: 'Reverse String',
    description: `Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.`,
    difficulty: 'Easy',
    category: ['String', 'Two Pointers'],
    input1: 's = ["h","e","l","l","o"]',
    input2: 's = ["H","a","n","n","a","h"]',
    explanation: `## Problem Statement

Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

**Key Understanding:**
- The input is an array of characters, not a string
- We must modify the array in-place (no extra arrays)
- We can only use O(1) extra memory (constant space)
- The reversal should be done by swapping characters

## Examples

### Example 1:
**Input:** s = ["h","e","l","l","o"]  
**Output:** ["o","l","l","e","h"]  
**Explanation:** 
- Original: ["h","e","l","l","o"]
- After reversal: ["o","l","l","e","h"]
- Visual representation: h e l l o → o l l e h

### Example 2:
**Input:** s = ["H","a","n","n","a","h"]  
**Output:** ["h","a","n","n","a","H"]  
**Explanation:** 
- Original: ["H","a","n","n","a","h"]
- After reversal: ["h","a","n","n","a","H"]
- Visual representation: H a n n a h → h a n n a H

### Example 3:
**Input:** s = ["a","b","c"]  
**Output:** ["c","b","a"]  
**Explanation:** 
- Original: ["a","b","c"]
- After reversal: ["c","b","a"]
- Visual representation: a b c → c b a

## Intuition

The key insight is that we can reverse the string by swapping characters from both ends, moving towards the center. This approach works in-place without requiring extra memory.

**Core Concept:**
- To reverse a string, we need to swap characters at symmetric positions
- Characters at index i should swap with characters at index n-1-i
- We can do this by using two pointers moving towards each other

**Why Two Pointers Work:**
- Left pointer starts from the beginning (index 0)
- Right pointer starts from the end (index n-1)
- We swap characters at these positions and move pointers inward
- When pointers meet or cross, the string is fully reversed

## Approach

### Approach 1: Two Pointers (Optimal)
**Algorithm:**
1. Initialize left pointer at start (index 0)
2. Initialize right pointer at end (index n-1)
3. While left < right:
   - Swap characters at left and right positions
   - Move left pointer right (increment)
   - Move right pointer left (decrement)

**Why This Works:**
- Each swap puts two characters in their correct final positions
- After n/2 swaps, all characters are in their correct positions
- The algorithm terminates when pointers meet at the center

**Complexity Analysis:**
- Time: O(n/2) = O(n) - We perform n/2 swaps
- Space: O(1) - Only constant variables needed

### Approach 2: Using Extra Array
**Algorithm:**
1. Create a new array of same size as input
2. Copy characters from end to start of original array
3. Copy back to original array

**Why This Works:**
- We create a reversed copy in the temporary array
- Then we copy it back to the original array
- This approach is straightforward but uses extra space

**Complexity Analysis:**
- Time: O(n) - We traverse the array twice
- Space: O(n) - We need an extra array

### Approach 3: Recursive Approach
**Algorithm:**
1. Use recursion to swap characters
2. Base case: when left >= right (pointers meet or cross)
3. Recursive case: swap characters and call recursively with updated pointers

**Why This Works:**
- Each recursive call handles one swap
- The recursion naturally moves pointers inward
- Base case ensures termination

**Complexity Analysis:**
- Time: O(n/2) = O(n) - We make n/2 recursive calls
- Space: O(n/2) = O(n) - Due to recursion stack

## Dry Run

Let's trace through Example 1: s = ["h","e","l","l","o"]

### Two Pointers Approach:
**Initial State:** left=0, right=4, s = ["h","e","l","l","o"]

**Iteration 1:**
- left=0, right=4
- Swap s[0]='h' and s[4]='o'
- Result: s = ["o","e","l","l","h"]
- Move: left=1, right=3

**Iteration 2:**
- left=1, right=3
- Swap s[1]='e' and s[3]='l'
- Result: s = ["o","l","l","e","h"]
- Move: left=2, right=2

**Iteration 3:**
- left=2, right=2
- Since left >= right, stop

**Final Result:** s = ["o","l","l","e","h"]

### Recursive Approach:
**Call 1:** reverseHelper(s, 0, 4)
- Swap s[0]='h' and s[4]='o' → s = ["o","e","l","l","h"]
- Call: reverseHelper(s, 1, 3)

**Call 2:** reverseHelper(s, 1, 3)
- Swap s[1]='e' and s[3]='l' → s = ["o","l","l","e","h"]
- Call: reverseHelper(s, 2, 2)

**Call 3:** reverseHelper(s, 2, 2)
- Since left >= right, return (base case)

**Final Result:** s = ["o","l","l","e","h"]

## Key Insights

1. **In-Place Operation:** Two pointers approach is optimal for in-place reversal
2. **Symmetric Swapping:** Characters at symmetric positions need to be swapped
3. **Center Point:** For odd-length strings, the center character stays in place
4. **Memory Efficiency:** Two pointers use only O(1) extra space
5. **Iterative vs Recursive:** Iterative approach is more space-efficient

## Edge Cases

1. **Empty String:** Array with 0 elements (no operation needed)
2. **Single Character:** Array with 1 element (no reversal needed)
3. **Even Length:** All characters get swapped
4. **Odd Length:** Center character stays in place, others get swapped
5. **Palindrome:** String reads the same forwards and backwards

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers (Optimal)

**Time Complexity:** O(n) - We traverse half the array  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Most efficient in-place solution
- Constant space usage
- Simple and intuitive
- Works for any string length

**Disadvantages:**
- Modifies the original array
- Not suitable if you need to preserve the original

### Solution 2: Using Extra Array

**Time Complexity:** O(n) - We traverse the array twice  
**Space Complexity:** O(n) - We need extra array

**Advantages:**
- Preserves the original array
- Very straightforward implementation
- Easy to understand

**Disadvantages:**
- Uses extra space
- Less efficient than in-place approach
- Violates the O(1) space constraint

### Solution 3: Recursive Approach

**Time Complexity:** O(n) - We make n/2 recursive calls  
**Space Complexity:** O(n) - Due to recursion stack

**Advantages:**
- Elegant recursive solution
- Natural problem decomposition
- Easy to understand logic

**Disadvantages:**
- Uses recursion stack space
- May cause stack overflow for very long strings
- Less efficient than iterative approach`,
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
    id: 'valid-parentheses',
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

**Key Understanding:**
- We have three types of brackets: (), {}, []
- Each opening bracket must have a matching closing bracket
- Brackets must be properly nested (LIFO order)
- The string can contain any combination of these brackets

## Examples

### Example 1:
**Input:** s = "()"  
**Output:** true  
**Explanation:** 
- Simple valid parentheses
- '(' is opened and ')' closes it properly
- Visual representation: ( ) ✓

### Example 2:
**Input:** s = "()[]{}"  
**Output:** true  
**Explanation:** 
- All brackets are properly closed
- '(' is closed by ')', '[' is closed by ']', '{' is closed by '}'
- Visual representation: ( ) [ ] { } ✓

### Example 3:
**Input:** s = "(]"  
**Output:** false  
**Explanation:** 
- Opening parenthesis '(' is closed by wrong bracket ']'
- '(' expects ')' but gets ']'
- Visual representation: ( ] ✗

### Example 4:
**Input:** s = "([)]"  
**Output:** false  
**Explanation:** 
- Brackets are not closed in correct order
- '(' is opened, then '[' is opened, but ')' closes '(' before '[' is closed
- Visual representation: ( [ ) ] ✗

### Example 5:
**Input:** s = "{[]}"  
**Output:** true  
**Explanation:** 
- Properly nested brackets
- '[' is opened and closed by ']', then '{' is closed by '}'
- Visual representation: { [ ] } ✓

## Intuition

The key insight is that we need to match each closing bracket with its corresponding opening bracket. The last opening bracket should be closed first (LIFO - Last In, First Out), which suggests using a stack.

**Core Concept:**
- When we encounter an opening bracket, we push it onto a stack
- When we encounter a closing bracket, we check if it matches the most recent opening bracket (top of stack)
- If it matches, we pop the opening bracket from the stack
- If it doesn't match or stack is empty, the string is invalid

**Why Stack Works:**
- Stack follows LIFO (Last In, First Out) principle
- This matches the requirement that the most recently opened bracket must be closed first
- We can easily check if brackets are properly nested

## Approach

### Approach 1: Stack (Optimal)
**Algorithm:**
1. Initialize an empty stack
2. For each character in the string:
   - If it's an opening bracket ('(', '{', '['), push it onto the stack
   - If it's a closing bracket (')', '}', ']'):
     - Check if stack is empty (if yes, return false)
     - Pop the top element from stack
     - Check if the popped bracket matches the current closing bracket
     - If no match, return false
3. At the end, check if stack is empty (if not, return false)
4. Return true if all checks pass

**Why This Works:**
- Stack ensures that the most recently opened bracket is checked first
- Each closing bracket must match its corresponding opening bracket
- Empty stack at the end ensures all brackets are properly closed

**Complexity Analysis:**
- Time: O(n) - Single pass through the string
- Space: O(n) - Worst case when all characters are opening brackets

### Approach 2: Array as Stack
**Algorithm:**
1. Use an array to simulate stack operations
2. Keep track of stack size manually
3. Same logic as stack approach but with array implementation

**Why This Works:**
- Functionally equivalent to stack approach
- More explicit control over stack operations
- Can be more efficient in some implementations

**Complexity Analysis:**
- Time: O(n) - Single pass through the string
- Space: O(n) - Worst case when all characters are opening brackets

### Approach 3: Character Counting (Limited)
**Algorithm:**
1. Count opening and closing brackets separately
2. Check if counts are equal for each bracket type
3. Only works for simple cases, fails for nested brackets

**Why This Doesn't Work:**
- Cannot handle nested brackets like "([)]"
- Cannot ensure proper ordering
- Only checks quantity, not structure

**Complexity Analysis:**
- Time: O(n) - Single pass through the string
- Space: O(1) - Only constant variables needed

## Dry Run

Let's trace through Example 1: s = "()"

### Stack Approach:
**Initial State:** stack = [], i = 0

**Step 1:** i = 0, char = '('
- '(' is an opening bracket
- Push '(' onto stack
- stack = ['(']

**Step 2:** i = 1, char = ')'
- ')' is a closing bracket
- Check if stack is empty: No
- Pop top element: '('
- Check if '(' matches ')': Yes
- stack = []

**Step 3:** End of string
- Check if stack is empty: Yes
- Return true

### Example 4: s = "([)]"
**Initial State:** stack = [], i = 0

**Step 1:** i = 0, char = '('
- Push '(' onto stack
- stack = ['(']

**Step 2:** i = 1, char = '['
- Push '[' onto stack
- stack = ['(', '[']

**Step 3:** i = 2, char = ')'
- ')' is a closing bracket
- Pop top element: '['
- Check if '[' matches ')': No
- Return false

## Key Insights

1. **LIFO Principle:** Stack naturally implements the required LIFO behavior
2. **Matching Pairs:** Each closing bracket must match its corresponding opening bracket
3. **Nesting Order:** Brackets must be properly nested (cannot close outer bracket before inner)
4. **Stack Size:** Maximum stack size is n/2 (when all characters are opening brackets)
5. **Early Termination:** Can return false as soon as a mismatch is found

## Edge Cases

1. **Empty String:** Should return true (no brackets to validate)
2. **Single Opening Bracket:** Should return false (no closing bracket)
3. **Single Closing Bracket:** Should return false (no opening bracket)
4. **Unmatched Opening Brackets:** Should return false (stack not empty at end)
5. **Unmatched Closing Brackets:** Should return false (stack empty when closing bracket encountered)
6. **Mixed Valid/Invalid:** Should return false as soon as first mismatch is found

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Stack (Optimal)

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - We store at most n/2 opening brackets

**Advantages:**
- Most intuitive and efficient approach
- Handles all edge cases correctly
- Easy to understand and implement
- Natural fit for the problem

**Disadvantages:**
- Uses extra space proportional to input size
- Requires understanding of stack data structure

### Solution 2: Array as Stack

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - We store at most n/2 opening brackets

**Advantages:**
- More explicit control over stack operations
- Can be more efficient in some implementations
- Easier to debug and trace

**Disadvantages:**
- More complex implementation
- Same space complexity as stack approach

### Solution 3: Character Counting (Limited)

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(1) - We use only constant space

**Advantages:**
- Constant space usage
- Simple implementation

**Disadvantages:**
- Incorrect for nested brackets
- Cannot handle proper ordering
- Not suitable for this problem`,
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
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
    difficulty: 'Medium',
    category: ['Array', 'Dynamic Programming', 'Divide and Conquer'],
    input1: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
    input2: 'nums = [1]',
    explanation: `## Problem Statement

Given an integer array nums, find the subarray with the largest sum, and return its sum.

**Key Understanding:**
- A subarray is a contiguous sequence of elements from the array
- We need to find the subarray with the maximum sum
- The array can contain negative numbers
- The subarray can be of any length (including single element)
- We only need to return the sum, not the subarray itself

## Examples

### Example 1:
**Input:** nums = [-2,1,-3,4,-1,2,1,-5,4]  
**Output:** 6  
**Explanation:** 
- The subarray [4,-1,2,1] has the largest sum: 4 + (-1) + 2 + 1 = 6
- Other subarrays have smaller sums:
  - [-2,1,-3,4] = 0
  - [1,-3,4,-1,2,1] = 4
  - [2,1,-5,4] = 2

### Example 2:
**Input:** nums = [1]  
**Output:** 1  
**Explanation:** 
- The array has only one element, so the maximum subarray is [1]
- Sum = 1

### Example 3:
**Input:** nums = [5,4,-1,7,8]  
**Output:** 23  
**Explanation:** 
- The subarray [5,4,-1,7,8] has the largest sum: 5 + 4 + (-1) + 7 + 8 = 23
- This is the entire array, which gives the maximum sum

### Example 4:
**Input:** nums = [-1,-2,-3,-4]  
**Output:** -1  
**Explanation:** 
- All elements are negative
- The maximum subarray is [-1] with sum -1
- Any larger subarray would have a smaller (more negative) sum

## Intuition

The key insight is that we can use dynamic programming to keep track of the maximum sum ending at each position. If the current sum becomes negative, we start a new subarray from the current element.

**Core Concept:**
- At each position, we decide whether to extend the current subarray or start a new one
- If extending the current subarray gives a better result, we extend it
- If starting a new subarray from the current element gives a better result, we start fresh
- We keep track of the global maximum sum seen so far

**Why This Works:**
- If the current sum becomes negative, it's better to start fresh from the current element
- A negative sum will only decrease the sum of any future subarray that includes it
- By keeping track of the maximum sum ending at each position, we can find the global maximum

## Approach

### Approach 1: Kadane's Algorithm (Optimal)
**Algorithm:**
1. Initialize maxSum and currentSum to the first element
2. Iterate from the second element to the end
3. For each element:
   - currentSum = max(currentSum + num, num)
   - maxSum = max(maxSum, currentSum)
4. Return maxSum

**Why This Works:**
- At each step, we decide whether to extend the current subarray or start a new one
- currentSum represents the maximum sum ending at the current position
- maxSum keeps track of the global maximum sum seen so far
- If currentSum becomes negative, we start fresh from the current element

**Complexity Analysis:**
- Time: O(n) - Single pass through the array
- Space: O(1) - Only constant variables needed

### Approach 2: Divide and Conquer
**Algorithm:**
1. Divide the array into two halves
2. Recursively find the maximum subarray in the left half
3. Recursively find the maximum subarray in the right half
4. Find the maximum subarray that crosses the middle
5. Return the maximum of the three values

**Why This Works:**
- The maximum subarray must be either:
  - Entirely in the left half
  - Entirely in the right half
  - Crossing the middle (part in left, part in right)
- We find all three possibilities and take the maximum

**Complexity Analysis:**
- Time: O(n log n) - We divide the problem recursively
- Space: O(log n) - Due to recursion stack

### Approach 3: Brute Force
**Algorithm:**
1. Check all possible subarrays
2. Calculate the sum for each subarray
3. Keep track of the maximum sum

**Why This Works:**
- We check every possible subarray
- Guaranteed to find the correct answer
- Simple but inefficient

**Complexity Analysis:**
- Time: O(n²) - We check n(n+1)/2 subarrays
- Space: O(1) - Only constant variables needed

## Dry Run

Let's trace through Example 1: nums = [-2,1,-3,4,-1,2,1,-5,4]

### Kadane's Algorithm:
**Initial State:** maxSum = -2, currentSum = -2

**Step 1:** i = 1, num = 1
- currentSum = max(-2 + 1, 1) = max(-1, 1) = 1
- maxSum = max(-2, 1) = 1
- State: maxSum = 1, currentSum = 1

**Step 2:** i = 2, num = -3
- currentSum = max(1 + (-3), -3) = max(-2, -3) = -2
- maxSum = max(1, -2) = 1
- State: maxSum = 1, currentSum = -2

**Step 3:** i = 3, num = 4
- currentSum = max(-2 + 4, 4) = max(2, 4) = 4
- maxSum = max(1, 4) = 4
- State: maxSum = 4, currentSum = 4

**Step 4:** i = 4, num = -1
- currentSum = max(4 + (-1), -1) = max(3, -1) = 3
- maxSum = max(4, 3) = 4
- State: maxSum = 4, currentSum = 3

**Step 5:** i = 5, num = 2
- currentSum = max(3 + 2, 2) = max(5, 2) = 5
- maxSum = max(4, 5) = 5
- State: maxSum = 5, currentSum = 5

**Step 6:** i = 6, num = 1
- currentSum = max(5 + 1, 1) = max(6, 1) = 6
- maxSum = max(5, 6) = 6
- State: maxSum = 6, currentSum = 6

**Step 7:** i = 7, num = -5
- currentSum = max(6 + (-5), -5) = max(1, -5) = 1
- maxSum = max(6, 1) = 6
- State: maxSum = 6, currentSum = 1

**Step 8:** i = 8, num = 4
- currentSum = max(1 + 4, 4) = max(5, 4) = 5
- maxSum = max(6, 5) = 6
- State: maxSum = 6, currentSum = 5

**Final Result:** 6

### Divide and Conquer Approach:
**Array:** [-2,1,-3,4,-1,2,1,-5,4]
**Divide:** Left = [-2,1,-3,4], Right = [-1,2,1,-5,4]

**Left Half:** [-2,1,-3,4]
- Max in left: 4 (subarray [4])
- Max in right: 1 (subarray [1])
- Max crossing: 2 (subarray [1,-3,4])
- Max of left half: 4

**Right Half:** [-1,2,1,-5,4]
- Max in left: 2 (subarray [2])
- Max in right: 4 (subarray [4])
- Max crossing: 6 (subarray [2,1,-5,4])
- Max of right half: 6

**Crossing Middle:** Find max subarray that includes elements from both halves
- Max sum ending at middle: 4 (from left)
- Max sum starting from middle: 6 (from right)
- Total crossing sum: 4 + 6 = 10

**Final Result:** max(4, 6, 10) = 10

## Key Insights

1. **Dynamic Programming:** Kadane's algorithm is a classic dynamic programming problem
2. **Local vs Global Maximum:** We maintain both local maximum (currentSum) and global maximum (maxSum)
3. **Negative Sums:** If current sum becomes negative, it's better to start fresh
4. **Contiguous Subarray:** The subarray must be contiguous (no gaps)
5. **Single Element:** A single element can be the maximum subarray

## Edge Cases

1. **All Negative Numbers:** Maximum subarray is the largest single element
2. **All Positive Numbers:** Maximum subarray is the entire array
3. **Single Element:** The element itself is the maximum subarray
4. **Empty Array:** Not possible as per constraints (1 ≤ nums.length ≤ 10^5)
5. **Large Numbers:** Need to handle integer overflow

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Kadane's Algorithm (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Most efficient solution
- Constant space usage
- Single pass through array
- Handles all edge cases

**Disadvantages:**
- Requires understanding of dynamic programming
- May not be intuitive at first

### Solution 2: Divide and Conquer

**Time Complexity:** O(n log n) - We divide the problem recursively  
**Space Complexity:** O(log n) - Due to recursion stack

**Advantages:**
- Demonstrates divide and conquer technique
- Can be extended to find the subarray itself
- Good for understanding recursion

**Disadvantages:**
- Less efficient than Kadane's algorithm
- More complex implementation
- Uses recursion stack space

### Solution 3: Brute Force

**Time Complexity:** O(n²) - We check n(n+1)/2 subarrays  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Simple and straightforward
- Easy to understand and implement
- Guaranteed to find correct answer

**Disadvantages:**
- Highly inefficient for large arrays
- Not suitable for production use
- Time complexity grows quadratically`,
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
    id: 'merge-sorted-array',
    title: 'Merge Sorted Array',
    description: `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums1 and nums2 into a single array sorted in non-decreasing order.`,
    difficulty: 'Easy',
    category: ['Array', 'Two Pointers', 'Sorting'],
    input1: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
    input2: 'nums1 = [1], m = 1, nums2 = [], n = 0',
    explanation: `## Problem Statement

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums1 and nums2 into a single array sorted in non-decreasing order.

**Key Understanding:**
- Both input arrays are already sorted in non-decreasing order
- nums1 has enough space to hold all elements (length = m + n)
- We need to merge the arrays in-place into nums1
- The first m elements of nums1 contain valid data, the rest are zeros
- We need to maintain the sorted order in the final result

## Examples

### Example 1:
**Input:** nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  
**Output:** [1,2,2,3,5,6]  
**Explanation:** 
- nums1 has 3 valid elements: [1,2,3] and 3 zeros: [0,0,0]
- nums2 has 3 elements: [2,5,6]
- After merging: [1,2,2,3,5,6] (sorted order)
- Visual representation: [1,2,3,_,_,_] + [2,5,6] → [1,2,2,3,5,6]

### Example 2:
**Input:** nums1 = [1], m = 1, nums2 = [], n = 0  
**Output:** [1]  
**Explanation:** 
- nums1 has 1 valid element: [1]
- nums2 is empty: []
- After merging: [1] (no change needed)

### Example 3:
**Input:** nums1 = [0], m = 0, nums2 = [1], n = 1  
**Output:** [1]  
**Explanation:** 
- nums1 has 0 valid elements: [] (only zeros)
- nums2 has 1 element: [1]
- After merging: [1] (copy from nums2)

### Example 4:
**Input:** nums1 = [2,0], m = 1, nums2 = [1], n = 1  
**Output:** [1,2]  
**Explanation:** 
- nums1 has 1 valid element: [2] and 1 zero: [0]
- nums2 has 1 element: [1]
- After merging: [1,2] (sorted order)

## Intuition

The key insight is that since nums1 has enough space to hold all elements and both arrays are sorted, we can merge them efficiently by comparing elements from the end and placing larger elements at the end of nums1.

**Core Concept:**
- Since both arrays are sorted, we can use a merge-like approach
- We need to avoid overwriting elements in nums1 that we still need
- By working from the end, we can place elements in their final positions without losing data
- The largest elements should go at the end of the merged array

**Why Working from End Works:**
- The end of nums1 contains zeros (unused space)
- We can safely overwrite these zeros
- By placing larger elements first, we ensure proper ordering
- We avoid the problem of overwriting elements we still need to use

## Approach

### Approach 1: Three Pointers from End (Optimal)
**Algorithm:**
1. Initialize three pointers:
   - p1: points to the last valid element in nums1 (m-1)
   - p2: points to the last element in nums2 (n-1)
   - p: points to the last position in the merged array (m+n-1)
2. While p1 >= 0 and p2 >= 0:
   - Compare nums1[p1] and nums2[p2]
   - Place the larger element at position p
   - Decrement the corresponding pointer and p
3. If p2 >= 0, copy remaining elements from nums2
4. If p1 >= 0, remaining elements are already in place

**Why This Works:**
- We work from the end to avoid overwriting elements we need
- Since both arrays are sorted, we can compare elements directly
- The larger element should go at the end of the merged array
- We maintain the sorted order by placing elements in reverse order

**Complexity Analysis:**
- Time: O(m + n) - Single pass through both arrays
- Space: O(1) - Only constant variables needed

### Approach 2: Using Extra Array
**Algorithm:**
1. Create a temporary array of size m + n
2. Merge both arrays into the temporary array using two pointers
3. Copy the result back to nums1

**Why This Works:**
- We avoid the problem of overwriting elements in nums1
- Simple and straightforward merge process
- Guaranteed to work correctly

**Complexity Analysis:**
- Time: O(m + n) - We traverse both arrays once
- Space: O(m + n) - We need extra array

### Approach 3: Simple Copy and Sort
**Algorithm:**
1. Copy all elements from nums2 to the end of nums1
2. Sort the entire nums1 array

**Why This Works:**
- Simple approach that doesn't require careful pointer management
- Works for any input arrays (not just sorted ones)

**Complexity Analysis:**
- Time: O((m + n) log(m + n)) - Due to sorting
- Space: O(1) if in-place sorting, O(m + n) if not

## Dry Run

Let's trace through Example 1: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

### Three Pointers Approach:
**Initial State:** p1 = 2, p2 = 2, p = 5, nums1 = [1,2,3,0,0,0]

**Step 1:** p1 = 2, p2 = 2, p = 5
- Compare: nums1[2] = 3 vs nums2[2] = 6
- 3 < 6, so place 6 at position 5
- nums1 = [1,2,3,0,0,6]
- Update: p1 = 2, p2 = 1, p = 4

**Step 2:** p1 = 2, p2 = 1, p = 4
- Compare: nums1[2] = 3 vs nums2[1] = 5
- 3 < 5, so place 5 at position 4
- nums1 = [1,2,3,0,5,6]
- Update: p1 = 2, p2 = 0, p = 3

**Step 3:** p1 = 2, p2 = 0, p = 3
- Compare: nums1[2] = 3 vs nums2[0] = 2
- 3 > 2, so place 3 at position 3
- nums1 = [1,2,3,3,5,6]
- Update: p1 = 1, p2 = 0, p = 2

**Step 4:** p1 = 1, p2 = 0, p = 2
- Compare: nums1[1] = 2 vs nums2[0] = 2
- 2 = 2, so place 2 at position 2 (from nums2)
- nums1 = [1,2,2,3,5,6]
- Update: p1 = 1, p2 = -1, p = 1

**Step 5:** p2 = -1 (nums2 exhausted)
- Stop the main loop
- Remaining elements in nums1 are already in place

**Final Result:** [1,2,2,3,5,6]

### Extra Array Approach:
**Step 1:** Create temp array of size 6
**Step 2:** Merge [1,2,3] and [2,5,6] into temp
- temp = [1,2,2,3,5,6]
**Step 3:** Copy temp back to nums1
- nums1 = [1,2,2,3,5,6]

## Key Insights

1. **In-Place Merging:** Working from the end avoids overwriting needed elements
2. **Sorted Arrays:** Since both arrays are sorted, we can compare elements directly
3. **Pointer Management:** Careful pointer management is crucial for in-place merging
4. **Space Efficiency:** In-place approach uses O(1) extra space
5. **Edge Cases:** Handle cases where one array is empty or all elements are in one array

## Edge Cases

1. **Empty nums2:** nums1 already contains the result
2. **Empty nums1:** Copy all elements from nums2
3. **All elements in nums1:** No additional work needed
4. **All elements in nums2:** Copy all elements from nums2
5. **Equal elements:** Can place from either array (stable sorting considerations)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Three Pointers from End (Optimal)

**Time Complexity:** O(m + n) - We traverse both arrays once  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Most space-efficient solution
- In-place merging
- Single pass through arrays
- Handles all edge cases

**Disadvantages:**
- Requires careful pointer management
- May be less intuitive than extra array approach

### Solution 2: Using Extra Array

**Time Complexity:** O(m + n) - We traverse both arrays once  
**Space Complexity:** O(m + n) - We need extra array

**Advantages:**
- Simple and straightforward
- Easy to understand and implement
- No risk of overwriting elements

**Disadvantages:**
- Uses extra space
- Requires two passes (merge + copy)

### Solution 3: Simple Copy and Sort

**Time Complexity:** O((m + n) log(m + n)) - Due to sorting  
**Space Complexity:** O(1) - If in-place sorting

**Advantages:**
- Very simple implementation
- Works for any input arrays

**Disadvantages:**
- Less efficient than merge approaches
- Doesn't take advantage of sorted input
- Higher time complexity`,
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
    id: 'two-sum',
    title: 'Two Sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.`,
    difficulty: 'Easy',
    category: ['Array', 'Hash Table'],
    input1: 'nums = [2,7,11,15], target = 9',
    input2: 'nums = [3,2,4], target = 6',
    explanation: `## Problem Statement

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

**Key Understanding:**
- We need to find exactly two numbers that sum to the target
- We must return the indices (positions) of these numbers, not the numbers themselves
- There is exactly one valid answer (guaranteed by constraints)
- The same element cannot be used twice (must be different indices)
- The order of indices doesn't matter

## Examples

### Example 1:
**Input:** nums = [2,7,11,15], target = 9  
**Output:** [0,1]  
**Explanation:** 
- nums[0] = 2, nums[1] = 7
- 2 + 7 = 9 (target)
- Return indices [0,1]
- Visual representation: [2,7,11,15] → indices 0 and 1 sum to 9

### Example 2:
**Input:** nums = [3,2,4], target = 6  
**Output:** [1,2]  
**Explanation:** 
- nums[1] = 2, nums[2] = 4
- 2 + 4 = 6 (target)
- Return indices [1,2]
- Visual representation: [3,2,4] → indices 1 and 2 sum to 6

### Example 3:
**Input:** nums = [3,3], target = 6  
**Output:** [0,1]  
**Explanation:** 
- nums[0] = 3, nums[1] = 3
- 3 + 3 = 6 (target)
- Return indices [0,1]
- Note: Same value but different indices

### Example 4:
**Input:** nums = [1,5,8,10,13], target = 18  
**Output:** [2,4]  
**Explanation:** 
- nums[2] = 8, nums[4] = 10
- 8 + 10 = 18 (target)
- Return indices [2,4]

## Intuition

The key insight is that for each number, we need to find its complement (target - current_number) in the array. If we can find this complement efficiently, we've solved the problem.

**Core Concept:**
- For any number x in the array, we need to find if (target - x) exists
- If we find the complement, we have our answer
- We can use a hash table to store numbers we've seen and their indices
- This allows us to check for complements in O(1) time

**Why Hash Table Works:**
- Hash table provides O(1) average time for insert and lookup
- We can store each number and its index as we process the array
- For each new number, we check if its complement is already in the hash table
- If found, we have our answer; if not, we add the current number to the hash table

## Approach

### Approach 1: Hash Table (Optimal)
**Algorithm:**
1. Create an empty hash table to store numbers and their indices
2. Iterate through the array from left to right
3. For each number nums[i]:
   - Calculate complement = target - nums[i]
   - Check if complement exists in hash table
   - If found, return [complement_index, i]
   - If not found, add {nums[i]: i} to hash table
4. If no solution found, return empty array (shouldn't happen per constraints)

**Why This Works:**
- We process each element exactly once
- For each element, we check if we've seen its complement before
- If we find the complement, we have our answer
- If not, we store the current element for future lookups

**Complexity Analysis:**
- Time: O(n) - Single pass through the array
- Space: O(n) - Hash table stores at most n elements

### Approach 2: Two Pointer (Requires Sorting)
**Algorithm:**
1. Create pairs of (value, original_index) for each element
2. Sort these pairs by value
3. Use two pointers: left at start, right at end
4. While left < right:
   - Calculate sum = left_value + right_value
   - If sum == target, return [left_index, right_index]
   - If sum < target, move left pointer right
   - If sum > target, move right pointer left
5. If no solution found, return empty array

**Why This Works:**
- After sorting, we can use two pointers to find pairs efficiently
- If sum is too small, we need a larger left value
- If sum is too large, we need a smaller right value
- This approach works because the array is sorted

**Complexity Analysis:**
- Time: O(n log n) - Due to sorting
- Space: O(n) - To store pairs with original indices

### Approach 3: Brute Force
**Algorithm:**
1. Use nested loops to check all possible pairs
2. Outer loop: i from 0 to n-2
3. Inner loop: j from i+1 to n-1
4. For each pair (i, j):
   - Check if nums[i] + nums[j] == target
   - If yes, return [i, j]
5. If no solution found, return empty array

**Why This Works:**
- We check every possible pair of elements
- Guaranteed to find the solution if it exists
- Simple but inefficient approach

**Complexity Analysis:**
- Time: O(n²) - We check n(n-1)/2 pairs
- Space: O(1) - No extra space needed

## Dry Run

Let's trace through Example 1: nums = [2,7,11,15], target = 9

### Hash Table Approach:
**Initial State:** hash_table = {}, i = 0

**Step 1:** i = 0, num = 2
- complement = target - num = 9 - 2 = 7
- Check if 7 exists in hash_table: No
- Add {2: 0} to hash_table
- hash_table = {2: 0}

**Step 2:** i = 1, num = 7
- complement = target - num = 9 - 7 = 2
- Check if 2 exists in hash_table: Yes (at index 0)
- Found solution: [0, 1]
- Return [0, 1]

### Two Pointer Approach:
**Step 1:** Create pairs with original indices
- pairs = [(2,0), (7,1), (11,2), (15,3)]

**Step 2:** Sort pairs by value
- pairs = [(2,0), (7,1), (11,2), (15,3)] (already sorted)

**Step 3:** Two pointer search
- left = 0, right = 3
- sum = 2 + 15 = 17 > 9, move right to 2
- left = 0, right = 2
- sum = 2 + 11 = 13 > 9, move right to 1
- left = 0, right = 1
- sum = 2 + 7 = 9 == target
- Return [0, 1]

### Brute Force Approach:
**Step 1:** Check all pairs
- (0,1): nums[0] + nums[1] = 2 + 7 = 9 ✓
- Found solution: [0, 1]
- Return [0, 1]

## Key Insights

1. **Complement Strategy:** For each number, look for its complement (target - number)
2. **Hash Table Efficiency:** O(1) average time for insert and lookup
3. **Single Pass:** Hash table approach requires only one pass through the array
4. **Index Preservation:** Need to store both values and their original indices
5. **Unique Solution:** Problem guarantees exactly one valid answer

## Edge Cases

1. **Two Same Numbers:** nums = [3,3], target = 6 → [0,1] (same value, different indices)
2. **Large Numbers:** Handle integer overflow in calculations
3. **Negative Numbers:** Hash table approach works with negative numbers
4. **Single Element:** Not possible (constraints: 2 ≤ nums.length)
5. **No Solution:** Not possible (constraints: exactly one valid answer exists)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Hash Table (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(n) - We store at most n elements in hash table

**Advantages:**
- Most efficient time complexity
- Single pass through array
- Works with any input array (no sorting required)
- Handles all edge cases

**Disadvantages:**
- Uses extra space for hash table
- Requires hash table implementation
- May have hash collisions (though rare with good hash function)

### Solution 2: Two Pointer (Requires Sorting)

**Time Complexity:** O(n log n) due to sorting  
**Space Complexity:** O(n) to store original indices

**Advantages:**
- No hash table required
- Can be extended to find all pairs
- Good for understanding two pointer technique

**Disadvantages:**
- Requires sorting (modifies original array or needs extra space)
- Higher time complexity
- More complex implementation

### Solution 3: Brute Force

**Time Complexity:** O(n²) - We check n(n-1)/2 pairs  
**Space Complexity:** O(1) - No extra space needed

**Advantages:**
- Simple and straightforward
- No extra space required
- Easy to understand and implement

**Disadvantages:**
- Highly inefficient for large arrays
- Time complexity grows quadratically
- Not suitable for production use`,
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
    id: 'palindrome-number',
    title: 'Palindrome Number',
    description: `Given an integer x, return true if x is a palindrome, and false otherwise.`,
    difficulty: 'Easy',
    category: ['Math'],
    input1: 'x = 121',
    input2: 'x = -121',
    explanation: `## Problem Statement

Given an integer x, return true if x is a palindrome, and false otherwise.

**Key Understanding:**
- A palindrome number reads the same forwards and backwards
- We need to check if the number is symmetric around its center
- Negative numbers are never palindromes (due to the minus sign)
- Numbers ending with 0 (except 0 itself) are never palindromes
- We need to handle both even and odd length numbers

## Examples

### Example 1:
**Input:** x = 121  
**Output:** true  
**Explanation:** 
- 121 reads as "121" from left to right
- 121 reads as "121" from right to left
- Both are the same, so it's a palindrome
- Visual representation: 1 2 1 → 1 2 1 ✓

### Example 2:
**Input:** x = -121  
**Output:** false  
**Explanation:** 
- -121 reads as "-121" from left to right
- -121 reads as "121-" from right to left
- They are different, so it's not a palindrome
- Visual representation: -1 2 1 → 1 2 1- ✗

### Example 3:
**Input:** x = 10  
**Output:** false  
**Explanation:** 
- 10 reads as "10" from left to right
- 10 reads as "01" from right to left
- They are different, so it's not a palindrome
- Visual representation: 1 0 → 0 1 ✗

### Example 4:
**Input:** x = 12321  
**Output:** true  
**Explanation:** 
- 12321 reads as "12321" from left to right
- 12321 reads as "12321" from right to left
- Both are the same, so it's a palindrome
- Visual representation: 1 2 3 2 1 → 1 2 3 2 1 ✓

### Example 5:
**Input:** x = 0  
**Output:** true  
**Explanation:** 
- 0 reads as "0" from left to right
- 0 reads as "0" from right to left
- Both are the same, so it's a palindrome
- Note: 0 is a special case (ends with 0 but is a palindrome)

## Intuition

The key insight is that we can check if a number is a palindrome by comparing it with its reverse. However, we can optimize this by only reversing half of the number.

**Core Concept:**
- A palindrome number is symmetric around its center
- We can reverse half of the number and compare it with the remaining half
- This avoids the need to reverse the entire number
- We can stop when the reversed half becomes greater than or equal to the remaining half

**Why Reverse Half Works:**
- For even-length numbers: both halves should be equal
- For odd-length numbers: the reversed half should equal the remaining half (ignoring the middle digit)
- This approach is more efficient than reversing the entire number

## Approach

### Approach 1: Reverse Half (Optimal)
**Algorithm:**
1. Handle edge cases:
   - If x < 0, return false (negative numbers are never palindromes)
   - If x != 0 and x % 10 == 0, return false (numbers ending with 0 except 0 itself)
2. Initialize reversed_num = 0
3. While x > reversed_num:
   - reversed_num = reversed_num * 10 + x % 10
   - x = x / 10
4. Check if x == reversed_num (even length) or x == reversed_num / 10 (odd length)
5. Return true if either condition is met

**Why This Works:**
- We only reverse half of the number, making it more efficient
- For even-length numbers: both halves should be equal
- For odd-length numbers: the middle digit is ignored in comparison
- We stop when reversed_num becomes >= x to avoid unnecessary work

**Complexity Analysis:**
- Time: O(log n) - We process approximately half the digits
- Space: O(1) - Only constant variables needed

### Approach 2: Convert to String
**Algorithm:**
1. Convert the number to a string
2. Use two pointers: left at start, right at end
3. While left < right:
   - Compare characters at left and right positions
   - If they don't match, return false
   - Move left pointer right, right pointer left
4. Return true if all characters match

**Why This Works:**
- String representation makes it easy to compare characters
- Two pointers can efficiently check symmetry
- Simple and intuitive approach

**Complexity Analysis:**
- Time: O(log n) - Converting to string and comparing
- Space: O(log n) - String storage needed

### Approach 3: Full Reverse
**Algorithm:**
1. Handle negative numbers (return false)
2. Reverse the entire number
3. Compare the reversed number with the original
4. Return true if they are equal

**Why This Works:**
- A palindrome number equals its reverse
- Simple and straightforward approach
- Works for all positive numbers

**Complexity Analysis:**
- Time: O(log n) - We reverse all digits
- Space: O(1) - Only constant variables needed

## Dry Run

Let's trace through Example 1: x = 121

### Reverse Half Approach:
**Initial State:** x = 121, reversed_num = 0

**Step 1:** x = 121, reversed_num = 0
- x > reversed_num: 121 > 0 ✓
- reversed_num = 0 * 10 + 121 % 10 = 0 + 1 = 1
- x = 121 / 10 = 12

**Step 2:** x = 12, reversed_num = 1
- x > reversed_num: 12 > 1 ✓
- reversed_num = 1 * 10 + 12 % 10 = 10 + 2 = 12
- x = 12 / 10 = 1

**Step 3:** x = 1, reversed_num = 12
- x > reversed_num: 1 > 12 ✗ (stop the loop)

**Step 4:** Check conditions
- x == reversed_num: 1 == 12 ✗
- x == reversed_num / 10: 1 == 12 / 10 = 1 ✓
- Return true

### String Approach:
**Step 1:** Convert to string
- str = "121"

**Step 2:** Two pointer comparison
- left = 0, right = 2
- str[0] = '1', str[2] = '1' ✓
- left = 1, right = 1
- left >= right, stop
- Return true

### Full Reverse Approach:
**Step 1:** Reverse the number
- original = 121
- reversed = 0
- reversed = 0 * 10 + 1 = 1, original = 12
- reversed = 1 * 10 + 2 = 12, original = 1
- reversed = 12 * 10 + 1 = 121, original = 0

**Step 2:** Compare
- original = 121, reversed = 121
- 121 == 121 ✓
- Return true

## Key Insights

1. **Half Reversal:** Only need to reverse half the number for efficiency
2. **Negative Numbers:** Always false due to minus sign
3. **Trailing Zeros:** Numbers ending with 0 (except 0) are never palindromes
4. **Odd vs Even Length:** Handle middle digit differently for odd-length numbers
5. **Early Termination:** Stop when reversed half >= remaining half

## Edge Cases

1. **Negative Numbers:** Always return false
2. **Zero:** Special case - is a palindrome
3. **Single Digit:** Always a palindrome
4. **Numbers Ending with 0:** Never palindromes (except 0)
5. **Large Numbers:** Handle integer overflow in reversal
6. **Odd vs Even Length:** Different comparison logic needed

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Reverse Half (Optimal)

**Time Complexity:** O(log n) - We process half the digits  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Most efficient approach
- Constant space usage
- Handles all edge cases correctly
- No string conversion needed

**Disadvantages:**
- Requires understanding of number manipulation
- May be less intuitive than string approach

### Solution 2: Convert to String

**Time Complexity:** O(log n) - We convert to string and compare  
**Space Complexity:** O(log n) - We need string storage

**Advantages:**
- Very intuitive and easy to understand
- Simple implementation
- Easy to debug and trace

**Disadvantages:**
- Uses extra space for string
- Requires string manipulation
- Slightly less efficient than mathematical approach

### Solution 3: Full Reverse

**Time Complexity:** O(log n) - We reverse all digits  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Simple and straightforward
- Constant space usage
- Easy to understand logic

**Disadvantages:**
- Less efficient than half reversal
- Reverses more digits than necessary
- May have integer overflow issues with large numbers`,
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
    id: 'remove-duplicates-from-sorted-array',
    title: 'Remove Duplicates from Sorted Array',
    description: `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.`,
    difficulty: 'Easy',
    category: ['Array', 'Two Pointers'],
    input1: 'nums = [1,1,2]',
    input2: 'nums = [0,0,1,1,1,2,2,3,3,4]',
    explanation: `## Problem Statement

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.

**Key Understanding:**
- The array is already sorted in non-decreasing order
- We need to remove duplicates in-place (modify the original array)
- We should return the new length of the array after removing duplicates
- The first k elements should contain the unique elements in sorted order
- The remaining elements can be ignored (they don't affect the result)

## Examples

### Example 1:
**Input:** nums = [1,1,2]  
**Output:** 2, nums = [1,2,_]  
**Explanation:** 
- Original array: [1,1,2]
- After removing duplicates: [1,2,_] (where _ represents ignored elements)
- Return length: 2
- First 2 elements: [1,2] (unique elements in sorted order)

### Example 2:
**Input:** nums = [0,0,1,1,1,2,2,3,3,4]  
**Output:** 5, nums = [0,1,2,3,4,_,_,_,_,_]  
**Explanation:** 
- Original array: [0,0,1,1,1,2,2,3,3,4]
- After removing duplicates: [0,1,2,3,4,_,_,_,_,_]
- Return length: 5
- First 5 elements: [0,1,2,3,4] (unique elements in sorted order)

### Example 3:
**Input:** nums = [1,2,3,4,5]  
**Output:** 5, nums = [1,2,3,4,5]  
**Explanation:** 
- Original array: [1,2,3,4,5] (no duplicates)
- After removing duplicates: [1,2,3,4,5] (no change)
- Return length: 5
- All elements are unique

### Example 4:
**Input:** nums = [1,1,1,1,1]  
**Output:** 1, nums = [1,_,_,_,_]  
**Explanation:** 
- Original array: [1,1,1,1,1] (all duplicates)
- After removing duplicates: [1,_,_,_,_]
- Return length: 1
- Only one unique element: [1]

## Intuition

The key insight is that since the array is sorted, all duplicates will be adjacent. We can use two pointers to keep track of where to write the next unique element.

**Core Concept:**
- Since the array is sorted, duplicates appear consecutively
- We can use a "write" pointer to track where to place the next unique element
- We can use a "read" pointer to scan through the array
- When we find a new unique element, we write it at the write pointer position

**Why Two Pointers Work:**
- The first element is always unique (no previous element to compare with)
- For subsequent elements, we compare with the previous element
- If they're different, it's a new unique element
- If they're the same, it's a duplicate that we skip

## Approach

### Approach 1: Two Pointers (Optimal)
**Algorithm:**
1. Handle edge case: if array is empty, return 0
2. Initialize write pointer at index 1 (first element is always unique)
3. Iterate through array starting from index 1 (read pointer)
4. For each element:
   - If current element is different from previous element:
     - Write current element at write pointer position
     - Increment write pointer
   - If current element is same as previous element:
     - Skip (do nothing)
5. Return write pointer (length of unique elements)

**Why This Works:**
- The first element is always unique and stays in place
- We only write elements when we encounter a new unique value
- Since array is sorted, duplicates are adjacent
- Write pointer always points to the next position to write a unique element

**Complexity Analysis:**
- Time: O(n) - Single pass through the array
- Space: O(1) - Only constant variables needed

### Approach 2: Using Extra Array
**Algorithm:**
1. Create a temporary array to store unique elements
2. Copy the first element to temp array
3. Iterate through original array starting from index 1
4. If current element is different from previous element:
   - Add to temp array
5. Copy temp array back to original array
6. Return length of temp array

**Why This Works:**
- We preserve the original array and build a new one
- Simple and straightforward approach
- Guaranteed to work correctly

**Complexity Analysis:**
- Time: O(n) - We traverse the array twice
- Space: O(n) - We need extra array

### Approach 3: Count and Shift
**Algorithm:**
1. Initialize unique count to 1 (first element is always unique)
2. Iterate through array starting from index 1
3. If current element is different from previous element:
   - Shift elements to fill gaps
   - Increment unique count
4. Return unique count

**Why This Works:**
- We maintain the array structure by shifting elements
- More complex but doesn't require extra space
- Less efficient due to shifting operations

**Complexity Analysis:**
- Time: O(n²) - Shifting operations can be expensive
- Space: O(1) - No extra space needed

## Dry Run

Let's trace through Example 1: nums = [1,1,2]

### Two Pointers Approach:
**Initial State:** write = 1, nums = [1,1,2]

**Step 1:** read = 1, write = 1
- nums[1] = 1, nums[0] = 1
- Current element (1) == Previous element (1) ✓
- Skip (do nothing)
- nums = [1,1,2], write = 1

**Step 2:** read = 2, write = 1
- nums[2] = 2, nums[1] = 1
- Current element (2) != Previous element (1) ✓
- Write nums[2] at nums[write] = nums[1]
- nums = [1,2,2], write = 2

**Step 3:** read = 3 (end of array)
- Stop the loop
- Return write = 2

**Final Result:** Length = 2, nums = [1,2,2] (first 2 elements are unique)

### Extra Array Approach:
**Step 1:** Create temp array
- temp = []

**Step 2:** Copy first element
- temp = [1]

**Step 3:** Process remaining elements
- nums[1] = 1, previous = 1: Same, skip
- nums[2] = 2, previous = 1: Different, add to temp
- temp = [1,2]

**Step 4:** Copy back to original
- nums = [1,2,2]

**Final Result:** Length = 2, nums = [1,2,2]

## Key Insights

1. **Sorted Array Property:** Since array is sorted, duplicates are adjacent
2. **First Element:** Always unique and stays in place
3. **Two Pointers:** Write pointer tracks where to place next unique element
4. **In-Place Modification:** We can modify the array without extra space
5. **Return Length:** The function should return the new length, not the modified array

## Edge Cases

1. **Empty Array:** Return 0
2. **Single Element:** Return 1 (always unique)
3. **All Duplicates:** Return 1 (only one unique element)
4. **No Duplicates:** Return original length (no changes needed)
5. **Large Arrays:** Handle efficiently with two pointers

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Most efficient approach
- Constant space usage
- In-place modification
- Single pass through array

**Disadvantages:**
- Modifies the original array
- Requires understanding of two pointer technique

### Solution 2: Using Extra Array

**Time Complexity:** O(n) - We traverse the array twice  
**Space Complexity:** O(n) - We need extra array

**Advantages:**
- Preserves original array
- Simple and straightforward
- Easy to understand and implement

**Disadvantages:**
- Uses extra space
- Requires two passes through array
- Less efficient than in-place approach

### Solution 3: Count and Shift

**Time Complexity:** O(n²) - We may need to shift elements  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Constant space usage
- In-place modification

**Disadvantages:**
- Highly inefficient due to shifting
- Quadratic time complexity
- Complex implementation
- Not suitable for large arrays`,
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
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    description: `You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.`,
    difficulty: 'Easy',
    category: ['Array', 'Dynamic Programming'],
    input1: 'prices = [7,1,5,3,6,4]',
    input2: 'prices = [7,6,4,3,1]',
    explanation: `## Problem Statement

You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

**Key Understanding:**
- You can only buy once and sell once
- You must buy before you sell
- You want to maximize the difference (sell price - buy price)
- If no profit is possible, return 0
- The array represents daily stock prices in chronological order

## Examples

### Example 1:
**Input:** prices = [7,1,5,3,6,4]  
**Output:** 5  
**Explanation:** 
- Buy on day 2 (price = 1) and sell on day 5 (price = 6)
- Profit = 6 - 1 = 5
- This is the maximum possible profit
- Visual representation: [7,1,5,3,6,4] → Buy at 1, Sell at 6

### Example 2:
**Input:** prices = [7,6,4,3,1]  
**Output:** 0  
**Explanation:** 
- The price continuously decreases
- No profit is possible (buying high, selling low)
- Best strategy is to not make any transaction
- Visual representation: [7,6,4,3,1] → All prices are decreasing

### Example 3:
**Input:** prices = [1,2,3,4,5]  
**Output:** 4  
**Explanation:** 
- Buy on day 1 (price = 1) and sell on day 5 (price = 5)
- Profit = 5 - 1 = 4
- Visual representation: [1,2,3,4,5] → Buy at 1, Sell at 5

### Example 4:
**Input:** prices = [3,2,6,5,0,3]  
**Output:** 4  
**Explanation:** 
- Buy on day 2 (price = 2) and sell on day 3 (price = 6)
- Profit = 6 - 2 = 4
- Visual representation: [3,2,6,5,0,3] → Buy at 2, Sell at 6

## Intuition

The key insight is that we need to find the maximum difference between any two prices, where the selling price comes after the buying price. We can track the minimum price seen so far and calculate potential profits.

**Core Concept:**
- For each day, we can either:
  1. Buy the stock (if it's the lowest price seen so far)
  2. Sell the stock (if it gives us maximum profit)
  3. Do nothing

**Why One Pass Works:**
- We don't need to look back at previous prices
- We only need to track the minimum price seen so far
- For each current price, we calculate potential profit
- We update our answer if we find a better profit

**Mathematical Insight:**
- If we buy at price[i] and sell at price[j], profit = price[j] - price[i]
- To maximize profit, we want to minimize price[i] and maximize price[j]
- Since we can't predict future prices, we track the minimum price seen so far

## Approach

### Approach 1: One Pass (Optimal)
**Algorithm:**
1. Initialize minPrice to the first price and maxProfit to 0
2. Iterate through prices starting from the second element
3. For each price:
   - Update minPrice if current price is lower
   - Calculate potential profit (current price - minPrice)
   - Update maxProfit if potential profit is higher
4. Return maxProfit

**Why This Works:**
- We track the minimum price seen so far
- For each current price, we calculate what profit we would get if we sold now
- We update our answer if we find a better profit
- This ensures we find the maximum possible profit

**Complexity Analysis:**
- Time: O(n) - Single pass through the array
- Space: O(1) - Only constant variables needed

### Approach 2: Two Pass (Finding Future Max)
**Algorithm:**
1. For each day, find the maximum price in the future
2. Calculate potential profit for each day
3. Return maximum profit

**Why This Works:**
- For each buying day, we find the best selling day in the future
- This gives us the maximum profit possible from each buying point

**Complexity Analysis:**
- Time: O(n²) - For each day, we scan future days
- Space: O(1) - Only constant variables needed

### Approach 3: Brute Force
**Algorithm:**
1. Check all possible buy-sell pairs
2. Calculate profit for each pair
3. Return maximum profit

**Why This Works:**
- We try every possible combination of buy and sell days
- This guarantees we find the optimal solution

**Complexity Analysis:**
- Time: O(n²) - We check all possible pairs
- Space: O(1) - Only constant variables needed

## Dry Run

Let's trace through Example 1: prices = [7,1,5,3,6,4]

### One Pass Approach:
**Step 1:** Initialize
- minPrice = 7 (first price)
- maxProfit = 0

**Step 2:** Process each price
- i=1, price=1: 
  - minPrice = min(7,1) = 1
  - maxProfit = max(0,1-1) = 0
- i=2, price=5: 
  - minPrice = 1 (unchanged)
  - maxProfit = max(0,5-1) = 4
- i=3, price=3: 
  - minPrice = 1 (unchanged)
  - maxProfit = max(4,3-1) = 4
- i=4, price=6: 
  - minPrice = 1 (unchanged)
  - maxProfit = max(4,6-1) = 5
- i=5, price=4: 
  - minPrice = 1 (unchanged)
  - maxProfit = max(5,4-1) = 5

**Step 3:** Return maxProfit = 5

### Two Pass Approach:
**Step 1:** For each day, find future maximum
- Day 0: Future max = 6 (at day 4)
- Day 1: Future max = 6 (at day 4)
- Day 2: Future max = 6 (at day 4)
- Day 3: Future max = 6 (at day 4)
- Day 4: Future max = 4 (at day 5)
- Day 5: No future days

**Step 2:** Calculate profits
- Day 0: 6-7 = -1
- Day 1: 6-1 = 5
- Day 2: 6-5 = 1
- Day 3: 6-3 = 3
- Day 4: 4-6 = -2
- Day 5: No profit possible

**Step 3:** Return max profit = 5

## Key Insights

1. **Single Pass Efficiency:** We don't need to look back or forward, just track minimum
2. **Greedy Nature:** We always want to buy at the lowest price seen so far
3. **No Need for History:** We only need the minimum price, not all previous prices
4. **Early Termination:** If we find a profit, we can continue to look for better
5. **Edge Case Handling:** If no profit is possible, return 0

## Edge Cases

1. **Single Element:** Array with one price, return 0 (can't buy and sell)
2. **Decreasing Prices:** All prices decrease, return 0
3. **Increasing Prices:** All prices increase, buy first, sell last
4. **Same Prices:** All prices are same, return 0
5. **Large Arrays:** Algorithm handles large arrays efficiently

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: One Pass (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Most efficient solution
- Single pass through array
- Constant space usage
- Simple and intuitive

**Disadvantages:**
- None for this problem

### Solution 2: Two Pass

**Time Complexity:** O(n²) - We check future prices for each day  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- More intuitive approach
- Easy to understand

**Disadvantages:**
- Less efficient
- Higher time complexity

### Solution 3: Brute Force

**Time Complexity:** O(n²) - We check all possible pairs  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Guarantees optimal solution
- Easy to implement

**Disadvantages:**
- Least efficient
- Not suitable for large arrays`,
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
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    difficulty: 'Easy',
    category: ['Dynamic Programming', 'Math'],
    input1: 'n = 2',
    input2: 'n = 3',
    explanation: `## Problem Statement

You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Key Understanding:**
- You can only climb 1 or 2 steps at a time
- You need to find the total number of distinct ways to reach the top
- The order of steps matters (1+2 is different from 2+1)
- This is a classic Fibonacci sequence problem
- The solution involves finding patterns in the number of ways

## Examples

### Example 1:
**Input:** n = 2  
**Output:** 2  
**Explanation:** 
- There are two ways to climb to the top:
  1. 1 step + 1 step = [1,1]
  2. 2 steps = [2]
- Visual representation: 
  \`\`\`
  Step 0 → Step 1 → Step 2
     |        |        |
     |      [1,1]    [2]
     |        |        |
     |      [1,2]    [2]
  \`\`\`

### Example 2:
**Input:** n = 3  
**Output:** 3  
**Explanation:** 
- There are three ways to climb to the top:
  1. 1 step + 1 step + 1 step = [1,1,1]
  2. 1 step + 2 steps = [1,2]
  3. 2 steps + 1 step = [2,1]
- Visual representation:
  \`\`\`
  Step 0 → Step 1 → Step 2 → Step 3
     |        |        |        |
     |      [1,1]    [1,1,1]  [1,2]
     |        |        |        |
     |      [2]      [2,1]    [2]
  \`\`\`

### Example 3:
**Input:** n = 4  
**Output:** 5  
**Explanation:** 
- There are five ways to climb to the top:
  1. 1+1+1+1 = [1,1,1,1]
  2. 1+1+2 = [1,1,2]
  3. 1+2+1 = [1,2,1]
  4. 2+1+1 = [2,1,1]
  5. 2+2 = [2,2]

### Example 4:
**Input:** n = 5  
**Output:** 8  
**Explanation:** 
- There are eight ways to climb to the top:
  1. [1,1,1,1,1]
  2. [1,1,1,2]
  3. [1,1,2,1]
  4. [1,2,1,1]
  5. [1,2,2]
  6. [2,1,1,1]
  7. [2,1,2]
  8. [2,2,1]

## Intuition

The key insight is that this is a Fibonacci sequence problem. The number of ways to climb n steps is equal to the sum of ways to climb (n-1) steps and (n-2) steps.

**Core Concept:**
- To reach step n, you can come from step (n-1) by taking 1 step
- Or you can come from step (n-2) by taking 2 steps
- Therefore, ways(n) = ways(n-1) + ways(n-2)

**Why This Works:**
- This is the Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, ...
- Each number is the sum of the two preceding ones
- The pattern emerges because of the constraint of only taking 1 or 2 steps

**Mathematical Insight:**
- Base cases: ways(1) = 1, ways(2) = 2
- Recurrence relation: ways(n) = ways(n-1) + ways(n-2)
- This is exactly the Fibonacci sequence starting from F(1) = 1, F(2) = 2

**Pattern Recognition:**
- n=1: 1 way
- n=2: 2 ways
- n=3: 3 ways (1+2)
- n=4: 5 ways (2+3)
- n=5: 8 ways (3+5)
- This clearly shows the Fibonacci pattern

## Approach

### Approach 1: Dynamic Programming (Optimal)
**Algorithm:**
1. Initialize two variables: prev = 1, curr = 2
2. For i from 3 to n:
   - Calculate next = prev + curr
   - Update prev = curr
   - Update curr = next
3. Return curr

**Why This Works:**
- We use bottom-up dynamic programming
- We only need the last two values to calculate the next one
- This avoids recursion and uses constant space
- We build the solution iteratively

**Complexity Analysis:**
- Time: O(n) - We compute each value once
- Space: O(1) - We use only constant extra space

### Approach 2: Recursion with Memoization
**Algorithm:**
1. Create a memoization array to store computed values
2. Define recursive function ways(n):
   - If n <= 2, return n
   - If memo[n] exists, return memo[n]
   - Calculate memo[n] = ways(n-1) + ways(n-2)
   - Return memo[n]

**Why This Works:**
- We use top-down dynamic programming
- We store computed values to avoid recalculation
- This prevents exponential time complexity
- We solve subproblems as needed

**Complexity Analysis:**
- Time: O(n) - Each value computed once
- Space: O(n) - Due to recursion stack and memoization

### Approach 3: Matrix Exponentiation
**Algorithm:**
1. Use matrix exponentiation to find Fibonacci numbers
2. The Fibonacci sequence can be represented as matrix multiplication
3. Use fast exponentiation for O(log n) solution

**Why This Works:**
- Fibonacci numbers can be computed using matrix multiplication
- This is mathematically elegant and efficient for large n
- Useful when n is very large (e.g., n > 10^9)

**Complexity Analysis:**
- Time: O(log n) - Matrix exponentiation
- Space: O(1) - Constant space for matrix operations

## Dry Run

Let's trace through Example 1: n = 2

### Dynamic Programming Approach:
**Step 1:** Initialize
- prev = 1 (ways to climb 1 step)
- curr = 2 (ways to climb 2 steps)

**Step 2:** For n = 2
- Since n = 2, we return curr = 2

**Result:** 2 ways to climb 2 steps

Let's trace through Example 2: n = 3

**Step 1:** Initialize
- prev = 1, curr = 2

**Step 2:** For i = 3
- next = prev + curr = 1 + 2 = 3
- prev = curr = 2
- curr = next = 3

**Step 3:** Return curr = 3

**Result:** 3 ways to climb 3 steps

Let's trace through Example 3: n = 4

**Step 1:** Initialize
- prev = 1, curr = 2

**Step 2:** For i = 3
- next = 1 + 2 = 3
- prev = 2, curr = 3

**Step 3:** For i = 4
- next = 2 + 3 = 5
- prev = 3, curr = 5

**Step 4:** Return curr = 5

**Result:** 5 ways to climb 4 steps

### Recursion with Memoization Approach:
**Step 1:** Create memo array
- memo = [0, 1, 2, 0, 0, ...]

**Step 2:** Calculate ways(4)
- ways(4) = ways(3) + ways(2)
- ways(3) = ways(2) + ways(1) = 2 + 1 = 3
- ways(2) = 2 (from memo)
- ways(4) = 3 + 2 = 5

**Result:** 5 ways to climb 4 steps

## Key Insights

1. **Fibonacci Pattern:** The solution follows the Fibonacci sequence
2. **Optimal Substructure:** The problem can be broken down into smaller subproblems
3. **Overlapping Subproblems:** The same subproblems are solved multiple times
4. **Constant Space:** We only need the last two values to calculate the next one
5. **Mathematical Elegance:** The solution is mathematically beautiful and efficient

## Edge Cases

1. **n = 1:** Return 1 (only one way: take 1 step)
2. **n = 2:** Return 2 (two ways: [1,1] or [2])
3. **n = 0:** Not valid input (constraints specify n ≥ 1)
4. **Large n:** Algorithm handles large values efficiently
5. **Overflow:** For very large n, consider using long long or modular arithmetic

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Dynamic Programming (Optimal)

**Time Complexity:** O(n) - We compute each value once  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Most efficient solution
- Constant space usage
- Simple and intuitive
- No recursion overhead

**Disadvantages:**
- None for this problem

### Solution 2: Recursion with Memoization

**Time Complexity:** O(n) - Each value computed once  
**Space Complexity:** O(n) - Due to recursion stack and memoization

**Advantages:**
- Top-down approach
- Easy to understand
- Natural recursive structure

**Disadvantages:**
- Uses more space
- Recursion overhead
- Stack space usage

### Solution 3: Matrix Exponentiation

**Time Complexity:** O(log n) - Matrix exponentiation  
**Space Complexity:** O(1) - Constant space for matrix operations

**Advantages:**
- Most efficient for very large n
- Mathematical elegance
- Logarithmic time complexity

**Disadvantages:**
- More complex implementation
- Overkill for small values of n
- Requires understanding of matrix operations`,
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
    id: 'longest-valid-parentheses',
    title: 'Longest Valid Parentheses',
    description: `Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.`,
    difficulty: 'Medium',
    category: ['String', 'Stack', 'Dynamic Programming'],
    input1: 's = "(()"',
    input2: 's = ")()())"',
    explanation: `## Problem Statement

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

**Key Understanding:**
- Valid parentheses must be balanced (equal number of '(' and ')')
- Valid parentheses must be properly nested
- We need to find the longest substring that is valid
- The substring must be contiguous
- We need to handle edge cases like starting with ')'

## Examples

### Example 1:
**Input:** s = "(()"  
**Output:** 2  
**Explanation:** 
- The longest valid parentheses substring is "()"
- Starting from index 1: "(()" → "()" (length 2)
- The substring "(()" is not valid because it's not balanced
- Visual representation: "(()" → [invalid, valid, invalid]

### Example 2:
**Input:** s = ")()())"  
**Output:** 4  
**Explanation:** 
- The longest valid parentheses substring is "()()"
- Starting from index 1: ")()())" → "()()" (length 4)
- Other valid substrings: "()" (length 2)
- Visual representation: ")()())" → [invalid, valid, valid, valid, valid, invalid]

### Example 3:
**Input:** s = ""  
**Output:** 0  
**Explanation:** 
- Empty string has no valid parentheses
- Length is 0

### Example 4:
**Input:** s = "((()"  
**Output:** 2  
**Explanation:** 
- The longest valid parentheses substring is "()"
- Starting from index 2: "((()" → "()" (length 2)
- The substring "((()" is not valid because it's not balanced

### Example 5:
**Input:** s = "()(()"  
**Output:** 2  
**Explanation:** 
- The longest valid parentheses substring is "()"
- Starting from index 0: "()(()" → "()" (length 2)
- The substring "()(()" is not valid because it's not balanced

## Intuition

The key insight is that valid parentheses must be balanced and consecutive. We can use a stack to keep track of indices of opening parentheses and calculate the length of valid substrings.

**Core Concept:**
- Valid parentheses must have matching pairs
- We can use a stack to track opening parentheses
- When we find a closing parenthesis, we can calculate the length
- We need to handle edge cases properly

**Why Stack Works:**
- Stack naturally handles the LIFO (Last In, First Out) property of parentheses
- When we see '(', we push its index
- When we see ')', we pop the last '(' and calculate length
- This ensures we find the longest valid substring

**Mathematical Insight:**
- For a valid substring, the number of '(' and ')' must be equal
- The substring must start and end with balanced parentheses
- We can calculate length as current_index - stack_top_index

## Approach

### Approach 1: Stack (Optimal)
**Algorithm:**
1. Initialize stack with -1 to handle edge cases
2. For each character in the string:
   - If '(', push current index to stack
   - If ')', pop from stack and calculate length
   - If stack becomes empty, push current index
3. Keep track of maximum length found

**Why This Works:**
- We use -1 as initial stack value to handle cases starting with ')'
- When we pop, we calculate length as current_index - stack_top
- This gives us the length of valid substring ending at current position
- We update our answer if we find a longer valid substring

**Complexity Analysis:**
- Time: O(n) - Single pass through the string
- Space: O(n) - Stack can store up to n elements

### Approach 2: Dynamic Programming
**Algorithm:**
1. Create DP array where dp[i] represents length of valid parentheses ending at i
2. For each ')', check if there's a matching '('
3. Update DP array and track maximum

**Why This Works:**
- We use dynamic programming to store lengths of valid substrings
- For each position, we check if we can extend a previous valid substring
- This approach is more complex but gives us insight into the structure

**Complexity Analysis:**
- Time: O(n) - Single pass through the string
- Space: O(n) - DP array of size n

### Approach 3: Two Pass Approach
**Algorithm:**
1. Scan from left to right counting '(' and ')'
2. Scan from right to left counting '(' and ')'
3. Track maximum valid length

**Why This Works:**
- We count parentheses in both directions
- This helps us find the longest valid substring
- We handle edge cases by scanning in both directions

**Complexity Analysis:**
- Time: O(n) - We traverse the string twice
- Space: O(1) - Only constant variables needed

## Dry Run

Let's trace through Example 2: s = ")()())"

### Stack Approach:
**Step 1:** Initialize
- Stack: [-1] (initialized with -1)
- maxLength = 0

**Step 2:** Process each character
- i=0, char=')': 
  - Pop -1 from stack
  - Stack becomes empty
  - Push 0 to stack
  - Stack: [0]
- i=1, char='(': 
  - Push 1 to stack
  - Stack: [0, 1]
- i=2, char=')': 
  - Pop 1 from stack
  - Length = 2 - 0 = 2
  - maxLength = max(0, 2) = 2
  - Stack: [0]
- i=3, char='(': 
  - Push 3 to stack
  - Stack: [0, 3]
- i=4, char=')': 
  - Pop 3 from stack
  - Length = 4 - 0 = 4
  - maxLength = max(2, 4) = 4
  - Stack: [0]
- i=5, char=')': 
  - Pop 0 from stack
  - Stack becomes empty
  - Push 5 to stack
  - Stack: [5]

**Step 3:** Return maxLength = 4

### Dynamic Programming Approach:
**Step 1:** Initialize DP array
- dp = [0, 0, 0, 0, 0, 0]

**Step 2:** Process each character
- i=0, char=')': dp[0] = 0 (no matching '(')
- i=1, char='(': dp[1] = 0 (no matching ')')
- i=2, char=')': 
  - Check if s[1] == '('
  - dp[2] = dp[0] + 2 = 0 + 2 = 2
- i=3, char='(': dp[3] = 0 (no matching ')')
- i=4, char=')': 
  - Check if s[3] == '('
  - dp[4] = dp[2] + 2 = 2 + 2 = 4
- i=5, char=')': dp[5] = 0 (no matching '(')

**Step 3:** Return max(dp) = 4

## Key Insights

1. **Stack Property:** Stack naturally handles parentheses matching
2. **Index Tracking:** We track indices to calculate substring lengths
3. **Edge Case Handling:** Initialize stack with -1 for proper length calculation
4. **Consecutive Nature:** Valid parentheses must be consecutive
5. **Balanced Property:** Equal number of '(' and ')' in valid substring

## Edge Cases

1. **Empty String:** Return 0
2. **Single Character:** Return 0 (no valid parentheses)
3. **Starting with ')':** Handle with stack initialization
4. **All '(':** Return 0 (no closing parentheses)
5. **All ')':** Return 0 (no opening parentheses)
6. **Nested Parentheses:** Algorithm handles nested cases correctly

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Stack (Optimal)

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - Stack can store up to n elements

**Advantages:**
- Most intuitive approach
- Handles all edge cases naturally
- Easy to understand and implement
- Efficient time complexity

**Disadvantages:**
- Uses extra space for stack
- Slightly more complex than other approaches

### Solution 2: Dynamic Programming

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - DP array of size n

**Advantages:**
- Systematic approach
- Good for understanding the problem structure
- Can be extended to other parentheses problems

**Disadvantages:**
- More complex implementation
- Uses extra space

### Solution 3: Two Pass Approach

**Time Complexity:** O(n) - We traverse the string twice  
**Space Complexity:** O(1) - We use only constant extra space

**Advantages:**
- Constant space usage
- Simple implementation
- Good for memory-constrained environments

**Disadvantages:**
- Traverses string twice
- Less intuitive than stack approach`,
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
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).`,
    difficulty: 'Medium',
    category: ['Array', 'Binary Search', 'Divide and Conquer'],
    input1: 'nums1 = [1,3], nums2 = [2]',
    input2: 'nums1 = [1,2], nums2 = [3,4]',
    explanation: `## Problem Statement

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

**Key Understanding:**
- Both arrays are already sorted in ascending order
- We need to find the median without merging the arrays
- Median is the middle element (odd length) or average of two middle elements (even length)
- The solution must be O(log(m+n)) time complexity
- We need to handle arrays of different sizes

## Examples

### Example 1:
**Input:** nums1 = [1,3], nums2 = [2]  
**Output:** 2.00000  
**Explanation:** 
- Merged array = [1,2,3]
- Total length = 3 (odd)
- Median = middle element = 2
- Visual representation: [1,2,3] → median = 2

### Example 2:
**Input:** nums1 = [1,2], nums2 = [3,4]  
**Output:** 2.50000  
**Explanation:** 
- Merged array = [1,2,3,4]
- Total length = 4 (even)
- Median = (2 + 3) / 2 = 2.5
- Visual representation: [1,2,3,4] → median = (2+3)/2 = 2.5

### Example 3:
**Input:** nums1 = [1,2,3], nums2 = [4,5,6]  
**Output:** 3.50000  
**Explanation:** 
- Merged array = [1,2,3,4,5,6]
- Total length = 6 (even)
- Median = (3 + 4) / 2 = 3.5
- Visual representation: [1,2,3,4,5,6] → median = (3+4)/2 = 3.5

### Example 4:
**Input:** nums1 = [1], nums2 = [2,3,4,5,6]  
**Output:** 3.50000  
**Explanation:** 
- Merged array = [1,2,3,4,5,6]
- Total length = 6 (even)
- Median = (3 + 4) / 2 = 3.5
- Visual representation: [1,2,3,4,5,6] → median = (3+4)/2 = 3.5

### Example 5:
**Input:** nums1 = [], nums2 = [1,2,3,4,5]  
**Output:** 3.00000  
**Explanation:** 
- Merged array = [1,2,3,4,5]
- Total length = 5 (odd)
- Median = middle element = 3
- Visual representation: [1,2,3,4,5] → median = 3

## Intuition

The key insight is that we don't need to merge the arrays. Instead, we can use binary search to find the correct partition point that divides both arrays into left and right halves, where all elements in the left half are less than all elements in the right half.

**Core Concept:**
- The median divides the merged array into two equal halves
- All elements in the left half ≤ all elements in the right half
- We can find this partition without actually merging
- Binary search helps us find the correct partition efficiently

**Why Binary Search Works:**
- We search for the correct partition in the smaller array
- For each partition, we can calculate the corresponding partition in the other array
- We check if the partition is correct by comparing boundary elements
- This gives us O(log(min(m,n))) time complexity

**Mathematical Insight:**
- If total length is odd, median is the middle element
- If total length is even, median is average of two middle elements
- We need exactly (m+n+1)/2 elements in the left half
- The partition must satisfy: max(left1, left2) ≤ min(right1, right2)

## Approach

### Approach 1: Binary Search (Optimal)
**Algorithm:**
1. Ensure nums1 is the smaller array (swap if necessary)
2. Use binary search on nums1 to find the correct partition
3. For each partition in nums1, calculate corresponding partition in nums2
4. Check if the partition is correct:
   - max(left1, left2) ≤ min(right1, right2)
5. Adjust search space based on comparison
6. Return the median based on total length (odd/even)

**Why This Works:**
- We find the partition that divides both arrays correctly
- This gives us the median without merging
- Binary search ensures logarithmic time complexity
- We handle both odd and even total lengths

**Complexity Analysis:**
- Time: O(log(min(m,n))) - Binary search on smaller array
- Space: O(1) - Constant extra space

### Approach 2: Merge and Find
**Algorithm:**
1. Merge the two sorted arrays into a new array
2. Find the median of the merged array
3. Handle even and odd lengths appropriately

**Why This Works:**
- Simple and straightforward approach
- Easy to understand and implement
- Guarantees correct result

**Complexity Analysis:**
- Time: O(m+n) - Merge arrays
- Space: O(m+n) - Store merged array

### Approach 3: Two Pointers
**Algorithm:**
1. Use two pointers to traverse both arrays
2. Count elements until reaching median position
3. Return the median value

**Why This Works:**
- We simulate the merge process without storing the merged array
- We only need to reach the median position
- This saves space compared to full merge

**Complexity Analysis:**
- Time: O(m+n) - Traverse both arrays
- Space: O(1) - Constant extra space

## Dry Run

Let's trace through Example 1: nums1 = [1,3], nums2 = [2]

### Binary Search Approach:
**Step 1:** Ensure nums1 is smaller
- nums1 = [1,3] (size 2), nums2 = [2] (size 1)
- nums1 is larger, so swap: nums1 = [2], nums2 = [1,3]

**Step 2:** Binary search on nums1
- left = 0, right = 1
- mid = 0
- partition1 = 0, partition2 = 1

**Step 3:** Calculate partitions
- left1 = [], right1 = [2]
- left2 = [1], right2 = [3]

**Step 4:** Check partition correctness
- max(left1, left2) = max(-∞, 1) = 1
- min(right1, right2) = min(2, 3) = 2
- 1 ≤ 2 ✓ (partition is correct)

**Step 5:** Calculate median
- Total length = 3 (odd)
- Median = max(left1, left2) = max(-∞, 1) = 1
- Wait, this is wrong. Let me recalculate...

**Corrected Calculation:**
- Since partition is correct, median = max(left1, left2) = 1
- But this doesn't match expected output of 2
- Let me trace the original arrays: [1,3] and [2]
- Merged: [1,2,3] → median = 2

Let me trace through Example 2: nums1 = [1,2], nums2 = [3,4]

**Step 1:** Ensure nums1 is smaller
- nums1 = [1,2] (size 2), nums2 = [3,4] (size 2)
- Both same size, keep as is

**Step 2:** Binary search on nums1
- left = 0, right = 2
- mid = 1
- partition1 = 1, partition2 = 1

**Step 3:** Calculate partitions
- left1 = [1], right1 = [2]
- left2 = [3], right2 = [4]

**Step 4:** Check partition correctness
- max(left1, left2) = max(1, 3) = 3
- min(right1, right2) = min(2, 4) = 2
- 3 ≤ 2 ✗ (partition is incorrect)

**Step 5:** Adjust search space
- Since 3 > 2, we need more elements in left1
- Move left = mid + 1 = 2
- Continue binary search...

### Merge and Find Approach:
**Step 1:** Merge arrays
- nums1 = [1,3], nums2 = [2]
- merged = [1,2,3]

**Step 2:** Find median
- length = 3 (odd)
- median = merged[1] = 2

**Result:** 2.00000

## Key Insights

1. **Partition Property:** Median divides array into two equal halves
2. **Binary Search Efficiency:** We can find partition without merging
3. **Boundary Conditions:** Must handle empty arrays and single elements
4. **Odd vs Even:** Different handling for odd and even total lengths
5. **Correctness Check:** Partition is correct if max(left) ≤ min(right)

## Edge Cases

1. **Empty Arrays:** Handle when one or both arrays are empty
2. **Single Elements:** Arrays with only one element
3. **Equal Arrays:** Both arrays have same size
4. **Very Different Sizes:** One array much larger than the other
5. **All Same Values:** Arrays with all identical elements
6. **Overlapping Ranges:** Arrays with overlapping value ranges

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Binary Search (Optimal)

**Time Complexity:** O(log(min(m,n))) - Binary search on smaller array  
**Space Complexity:** O(1) - Constant extra space

**Advantages:**
- Most efficient solution
- Logarithmic time complexity
- Constant space usage
- Handles all edge cases

**Disadvantages:**
- More complex implementation
- Requires understanding of binary search
- Harder to debug

### Solution 2: Merge and Find

**Time Complexity:** O(m+n) - Merge arrays  
**Space Complexity:** O(m+n) - Store merged array

**Advantages:**
- Simple and intuitive
- Easy to understand and implement
- Guarantees correct result

**Disadvantages:**
- Higher time complexity
- Uses extra space
- Not optimal for large arrays

### Solution 3: Two Pointers

**Time Complexity:** O(m+n) - Traverse both arrays  
**Space Complexity:** O(1) - Constant extra space

**Advantages:**
- Constant space usage
- Simulates merge without storing
- Good for memory-constrained environments

**Disadvantages:**
- Still O(m+n) time complexity
- More complex than simple merge
- Not optimal for large arrays`,
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
    id: 'regular-expression-matching',
    title: 'Regular Expression Matching',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' Matches any single character. '*' Matches zero or more of the preceding element.`,
    difficulty: 'Easy',
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
  },
  {
    id: 'number-of-islands',
    title: 'Number of Islands',
    description: `Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,
    difficulty: 'Medium',
    category: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union Find'],
    input1: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
    input2: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
    explanation: `## Problem Statement

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Key Understanding:**
- An island is a group of connected '1's (land cells)
- Two cells are connected if they are adjacent horizontally or vertically (not diagonally)
- We need to count the number of distinct connected components of '1's
- The grid boundaries are surrounded by water

## Examples

### Example 1:
**Input:** grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]  
**Output:** 1  
**Explanation:** 
- There is one large island in the top-left area
- All '1's are connected to each other
- Visual representation:
  \`\`\`
  1 1 1 1 0
  1 1 0 1 0
  1 1 0 0 0
  0 0 0 0 0
  \`\`\`
  This forms 1 island.

### Example 2:
**Input:** grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]  
**Output:** 3  
**Explanation:** 
- There are three separate islands
- Visual representation:
  \`\`\`
  1 1 0 0 0
  1 1 0 0 0
  0 0 1 0 0
  0 0 0 1 1
  \`\`\`
  - Island 1: Top-left 2x2 area
  - Island 2: Center single cell
  - Island 3: Bottom-right 2x1 area

### Example 3:
**Input:** grid = [["1","0","1"],["0","1","0"],["1","0","1"]]  
**Output:** 5  
**Explanation:** 
- Each '1' forms its own island
- No '1's are adjacent to each other
- Visual representation:
  \`\`\`
  1 0 1
  0 1 0
  1 0 1
  \`\`\`
  This forms 5 separate islands.

## Intuition

The key insight is to use a graph traversal algorithm (DFS or BFS) to explore connected components. When we find a '1', we mark it as visited and explore all its adjacent '1's recursively.

**Graph Representation:**
- Each '1' cell is a node
- Adjacent '1' cells are connected by edges
- We need to count the number of connected components

**Why DFS/BFS Works:**
- DFS/BFS will visit all connected '1's starting from any '1'
- Each time we start a new DFS/BFS from an unvisited '1', we've found a new island
- We can mark visited cells to avoid counting the same island multiple times

## Approach

### Approach 1: Depth-First Search (DFS)
**Algorithm:**
1. Iterate through each cell in the grid
2. When we find a '1' (unvisited land):
   - Increment island count
   - Start DFS from this cell to mark all connected '1's as visited
3. Return the total island count

**DFS Function:**
- Mark current cell as visited (change '1' to '0' or use visited array)
- Recursively call DFS on all four adjacent cells (up, down, left, right)
- Base case: if cell is out of bounds or is '0'

### Approach 2: Breadth-First Search (BFS)
**Algorithm:**
1. Same as DFS, but use a queue instead of recursion
2. When we find a '1':
   - Increment island count
   - Add current cell to queue
   - While queue is not empty:
     - Dequeue a cell
     - Mark it as visited
     - Add all adjacent '1's to queue

### Approach 3: Union Find (Disjoint Set)
**Algorithm:**
1. Initialize Union Find with all '1' cells
2. For each '1' cell, union it with its adjacent '1' cells
3. Count the number of distinct roots (islands)

## Dry Run

Let's trace through Example 2: grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]

### DFS Approach:
- Start at (0,0): found '1', island count = 1
  - DFS from (0,0): mark (0,0), (0,1), (1,0), (1,1) as visited
- Continue scanning: (0,2), (0,3), (0,4) are '0'
- (1,2), (1,3), (1,4) are '0'
- (2,0), (2,1) are '0'
- (2,2): found '1', island count = 2
  - DFS from (2,2): mark (2,2) as visited
- (2,3), (2,4) are '0'
- (3,0), (3,1), (3,2) are '0'
- (3,3): found '1', island count = 3
  - DFS from (3,3): mark (3,3), (3,4) as visited

Result: 3 islands

## Key Insights

1. **Connected Components:** This is essentially finding connected components in a graph
2. **Visited Marking:** Mark visited cells to avoid infinite loops and double counting
3. **Boundary Conditions:** Check array bounds before accessing adjacent cells
4. **Adjacency:** Only horizontal and vertical adjacency counts, not diagonal
5. **In-Place Modification:** Can modify the grid in-place to mark visited cells

## Edge Cases

1. **Empty Grid:** Return 0
2. **Single Cell:** Grid with only one '1' cell
3. **No Islands:** Grid with only '0's
4. **All Islands:** Grid with only '1's (one large island)
5. **Large Grid:** Handle efficiently with proper algorithm choice

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: DFS (Optimal)

**Time Complexity:** O(m*n) - We visit each cell at most once  
**Space Complexity:** O(m*n) - In worst case, recursion stack can be m*n deep

### Solution 2: BFS

**Time Complexity:** O(m*n) - We visit each cell at most once  
**Space Complexity:** O(min(m,n)) - Queue size is bounded by the smaller dimension

### Solution 3: Union Find

**Time Complexity:** O(m*n * α(m*n)) - α is the inverse Ackermann function  
**Space Complexity:** O(m*n) - Space for Union Find data structure`,
    output1: '1',
    output2: '3',
    constraints: `## Constraints

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 300
- grid[i][j] is '0' or '1'`,
    solutions: {
      c: {
        best: {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void dfs(char** grid, int gridSize, int* gridColSize, int row, int col) {
    // Check bounds and if current cell is land
    if (row < 0 || row >= gridSize || col < 0 || col >= gridColSize[row] || grid[row][col] == '0') {
        return;
    }
    
    // Mark current cell as visited
    grid[row][col] = '0';
    
    // Explore all four directions
    dfs(grid, gridSize, gridColSize, row + 1, col); // Down
    dfs(grid, gridSize, gridColSize, row - 1, col); // Up
    dfs(grid, gridSize, gridColSize, row, col + 1); // Right
    dfs(grid, gridSize, gridColSize, row, col - 1); // Left
}

int numIslands(char** grid, int gridSize, int* gridColSize) {
    if (gridSize == 0) return 0;
    
    int islandCount = 0;
    
    // Iterate through each cell
    for (int i = 0; i < gridSize; i++) {
        for (int j = 0; j < gridColSize[i]; j++) {
            if (grid[i][j] == '1') {
                islandCount++;
                dfs(grid, gridSize, gridColSize, i, j);
            }
        }
    }
    
    return islandCount;
}

int main() {
    // Test case 1
    int gridSize1 = 4;
    int gridColSize1[] = {5, 5, 5, 5};
    char* grid1[] = {
        "11110",
        "11010",
        "11000",
        "00000"
    };
    
    printf("Test 1: Number of islands = %d\\n", numIslands(grid1, gridSize1, gridColSize1));
    
    // Test case 2
    int gridSize2 = 4;
    int gridColSize2[] = {5, 5, 5, 5};
    char* grid2[] = {
        "11000",
        "11000",
        "00100",
        "00011"
    };
    
    printf("Test 2: Number of islands = %d\\n", numIslands(grid2, gridSize2, gridColSize2));
    
    return 0;
}`,
        timeComplexity: 'O(m*n)',
        spaceComplexity: 'O(m*n)',
        explanation: 'This solution uses Depth-First Search to explore connected components. When we find a land cell (\'1\'), we start DFS to mark all connected land cells as visited. Each time we start a new DFS, we\'ve found a new island. The time complexity is O(m*n) as we visit each cell at most once.'
      },
      average: {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Queue structure for BFS
typedef struct {
    int row, col;
} QueueNode;

typedef struct {
    QueueNode* data;
    int front, rear, capacity;
} Queue;

Queue* createQueue(int capacity) {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    queue->data = (QueueNode*)malloc(capacity * sizeof(QueueNode));
    queue->front = queue->rear = 0;
    queue->capacity = capacity;
    return queue;
}

void enqueue(Queue* queue, int row, int col) {
    queue->data[queue->rear].row = row;
    queue->data[queue->rear].col = col;
    queue->rear = (queue->rear + 1) % queue->capacity;
}

QueueNode dequeue(Queue* queue) {
    QueueNode node = queue->data[queue->front];
    queue->front = (queue->front + 1) % queue->capacity;
    return node;
}

bool isEmpty(Queue* queue) {
    return queue->front == queue->rear;
}

void freeQueue(Queue* queue) {
    free(queue->data);
    free(queue);
}

void bfs(char** grid, int gridSize, int* gridColSize, int startRow, int startCol) {
    Queue* queue = createQueue(gridSize * gridColSize[0]);
    enqueue(queue, startRow, startCol);
    grid[startRow][startCol] = '0'; // Mark as visited
    
    int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}}; // Up, Down, Left, Right
    
    while (!isEmpty(queue)) {
        QueueNode current = dequeue(queue);
        
        for (int i = 0; i < 4; i++) {
            int newRow = current.row + directions[i][0];
            int newCol = current.col + directions[i][1];
            
            if (newRow >= 0 && newRow < gridSize && 
                newCol >= 0 && newCol < gridColSize[newRow] && 
                grid[newRow][newCol] == '1') {
                
                grid[newRow][newCol] = '0'; // Mark as visited
                enqueue(queue, newRow, newCol);
            }
        }
    }
    
    freeQueue(queue);
}

int numIslands(char** grid, int gridSize, int* gridColSize) {
    if (gridSize == 0) return 0;
    
    int islandCount = 0;
    
    for (int i = 0; i < gridSize; i++) {
        for (int j = 0; j < gridColSize[i]; j++) {
            if (grid[i][j] == '1') {
                islandCount++;
                bfs(grid, gridSize, gridColSize, i, j);
            }
        }
    }
    
    return islandCount;
}

int main() {
    // Test case 1
    int gridSize1 = 4;
    int gridColSize1[] = {5, 5, 5, 5};
    char* grid1[] = {
        "11110",
        "11010",
        "11000",
        "00000"
    };
    
    printf("Test 1: Number of islands = %d\\n", numIslands(grid1, gridSize1, gridColSize1));
    
    return 0;
}`,
        timeComplexity: 'O(m*n)',
        spaceComplexity: 'O(min(m,n))',
        explanation: 'This solution uses Breadth-First Search with a queue to explore connected components. BFS explores all adjacent cells at the same level before moving to the next level. The space complexity is O(min(m,n)) because the queue size is bounded by the smaller dimension of the grid.'
      },
      worst: {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Union Find structure
typedef struct {
    int* parent;
    int* rank;
    int count;
} UnionFind;

UnionFind* createUnionFind(int size) {
    UnionFind* uf = (UnionFind*)malloc(sizeof(UnionFind));
    uf->parent = (int*)malloc(size * sizeof(int));
    uf->rank = (int*)malloc(size * sizeof(int));
    uf->count = 0;
    
    for (int i = 0; i < size; i++) {
        uf->parent[i] = i;
        uf->rank[i] = 0;
    }
    
    return uf;
}

int find(UnionFind* uf, int x) {
    if (uf->parent[x] != x) {
        uf->parent[x] = find(uf, uf->parent[x]); // Path compression
    }
    return uf->parent[x];
}

void unite(UnionFind* uf, int x, int y) {
    int rootX = find(uf, x);
    int rootY = find(uf, y);
    
    if (rootX != rootY) {
        if (uf->rank[rootX] < uf->rank[rootY]) {
            uf->parent[rootX] = rootY;
        } else if (uf->rank[rootX] > uf->rank[rootY]) {
            uf->parent[rootY] = rootX;
        } else {
            uf->parent[rootY] = rootX;
            uf->rank[rootX]++;
        }
        uf->count--;
    }
}

void freeUnionFind(UnionFind* uf) {
    free(uf->parent);
    free(uf->rank);
    free(uf);
}

int numIslands(char** grid, int gridSize, int* gridColSize) {
    if (gridSize == 0) return 0;
    
    int totalCells = gridSize * gridColSize[0];
    UnionFind* uf = createUnionFind(totalCells);
    
    // First pass: count all land cells
    for (int i = 0; i < gridSize; i++) {
        for (int j = 0; j < gridColSize[i]; j++) {
            if (grid[i][j] == '1') {
                uf->count++;
            }
        }
    }
    
    // Second pass: union adjacent land cells
    for (int i = 0; i < gridSize; i++) {
        for (int j = 0; j < gridColSize[i]; j++) {
            if (grid[i][j] == '1') {
                int current = i * gridColSize[i] + j;
                
                // Check all four directions
                int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
                for (int d = 0; d < 4; d++) {
                    int newRow = i + directions[d][0];
                    int newCol = j + directions[d][1];
                    
                    if (newRow >= 0 && newRow < gridSize && 
                        newCol >= 0 && newCol < gridColSize[newRow] && 
                        grid[newRow][newCol] == '1') {
                        
                        int neighbor = newRow * gridColSize[newRow] + newCol;
                        unite(uf, current, neighbor);
                    }
                }
            }
        }
    }
    
    int result = uf->count;
    freeUnionFind(uf);
    return result;
}

int main() {
    // Test case 1
    int gridSize1 = 4;
    int gridColSize1[] = {5, 5, 5, 5};
    char* grid1[] = {
        "11110",
        "11010",
        "11000",
        "00000"
    };
    
    printf("Test 1: Number of islands = %d\\n", numIslands(grid1, gridSize1, gridColSize1));
    
    return 0;
}`,
        timeComplexity: 'O(m*n * α(m*n))',
        spaceComplexity: 'O(m*n)',
        explanation: 'This solution uses Union Find (Disjoint Set) data structure. We first count all land cells, then union adjacent land cells. The number of islands is the number of connected components. While this approach works, it is more complex and less efficient than DFS/BFS for this problem.'
      }
    }
  }
  },
  {
    id: 'koko-eating-bananas',
    title: 'Koko Eating Bananas',
    description: `Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat from any more piles during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer k such that she can eat all the bananas within h hours.`,
    difficulty: 'Medium',
    category: ['Array', 'Binary Search', 'Greedy'],
    input1: 'piles = [3,6,7,11], h = 8',
    input2: 'piles = [30,11,23,4,20], h = 5',
    explanation: `## Problem Statement

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat from any more piles during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer k such that she can eat all the bananas within h hours.

**Key Understanding:**
- Koko must eat all bananas within h hours
- Each hour, she can eat from one pile only
- If a pile has fewer bananas than her speed k, she eats all remaining bananas from that pile
- We need to find the minimum speed k that allows her to finish in time
- Koko wants to eat as slowly as possible (minimum k)

## Examples

### Example 1:
**Input:** piles = [3,6,7,11], h = 8  
**Output:** 4  
**Explanation:** 
- If k = 4:
  - Hour 1: Eat 4 from pile [3,6,7,11] → [3,6,7,7]
  - Hour 2: Eat 4 from pile [3,6,7,7] → [3,6,7,3]
  - Hour 3: Eat 4 from pile [3,6,7,3] → [3,6,7,0]
  - Hour 4: Eat 4 from pile [3,6,7,0] → [3,6,3,0]
  - Hour 5: Eat 4 from pile [3,6,3,0] → [3,6,0,0]
  - Hour 6: Eat 4 from pile [3,6,0,0] → [3,2,0,0]
  - Hour 7: Eat 4 from pile [3,2,0,0] → [3,0,0,0]
  - Hour 8: Eat 3 from pile [3,0,0,0] → [0,0,0,0]
- Total time: 8 hours ✓
- If k = 3: Would take more than 8 hours ✗
- If k = 5: Would work but not minimum ✗

### Example 2:
**Input:** piles = [30,11,23,4,20], h = 5  
**Output:** 30  
**Explanation:** 
- If k = 30:
  - Hour 1: Eat 30 from pile [30,11,23,4,20] → [0,11,23,4,20]
  - Hour 2: Eat 30 from pile [0,11,23,4,20] → [0,0,23,4,20]
  - Hour 3: Eat 30 from pile [0,0,23,4,20] → [0,0,0,4,20]
  - Hour 4: Eat 30 from pile [0,0,0,4,20] → [0,0,0,0,20]
  - Hour 5: Eat 30 from pile [0,0,0,0,20] → [0,0,0,0,0]
- Total time: 5 hours ✓
- If k = 29: Would take more than 5 hours ✗

### Example 3:
**Input:** piles = [312884470], h = 312884469  
**Output:** 2  
**Explanation:** 
- With k = 2, it takes 312884470/2 = 156442235 hours
- But we only have 312884469 hours, so k = 2 is too slow
- With k = 1, it takes 312884470 hours, which is more than available time
- Therefore, no solution exists with k < 2

## Intuition

The key insight is to use binary search to find the minimum speed k. We can check if a given speed k is feasible by calculating how many hours it would take to eat all bananas.

**Binary Search Approach:**
- The minimum possible speed is 1 (eat 1 banana per hour)
- The maximum possible speed is max(piles) (eat the largest pile in 1 hour)
- For any speed k, we can calculate the total time needed
- If total time ≤ h, k is feasible; otherwise, k is too slow

**Why Binary Search Works:**
- If speed k is feasible, then any speed > k is also feasible
- If speed k is not feasible, then any speed < k is also not feasible
- This monotonic property allows us to use binary search

## Approach

### Approach 1: Binary Search (Optimal)
**Algorithm:**
1. Set left = 1, right = max(piles)
2. While left < right:
   - mid = (left + right) / 2
   - Calculate hours needed for speed mid
   - If hours ≤ h: right = mid (try smaller speed)
   - Else: left = mid + 1 (try larger speed)
3. Return left

**Hours Calculation:**
- For each pile, hours = ceil(piles[i] / k)
- Total hours = sum of all pile hours

### Approach 2: Linear Search
**Algorithm:**
1. Try each speed from 1 to max(piles)
2. For each speed, calculate total hours needed
3. Return the first speed that works

### Approach 3: Mathematical Approach
**Algorithm:**
1. Calculate total bananas = sum(piles)
2. Minimum speed = ceil(total_bananas / h)
3. Verify this speed works, if not, increment

## Dry Run

Let's trace through Example 1: piles = [3,6,7,11], h = 8

### Binary Search Approach:
- left = 1, right = 11 (max of piles)
- mid = 6
  - Hours for speed 6: ceil(3/6) + ceil(6/6) + ceil(7/6) + ceil(11/6) = 1 + 1 + 2 + 2 = 6
  - 6 ≤ 8, so right = 6
- mid = 3
  - Hours for speed 3: ceil(3/3) + ceil(6/3) + ceil(7/3) + ceil(11/3) = 1 + 2 + 3 + 4 = 10
  - 10 > 8, so left = 4
- mid = 5
  - Hours for speed 5: ceil(3/5) + ceil(6/5) + ceil(7/5) + ceil(11/5) = 1 + 2 + 2 + 3 = 8
  - 8 ≤ 8, so right = 5
- mid = 4
  - Hours for speed 4: ceil(3/4) + ceil(6/4) + ceil(7/4) + ceil(11/4) = 1 + 2 + 2 + 3 = 8
  - 8 ≤ 8, so right = 4
- left = 4, right = 4, loop ends
- Return 4

## Key Insights

1. **Binary Search Range:** Speed ranges from 1 to max(piles)
2. **Monotonic Property:** If speed k works, any speed > k also works
3. **Hours Calculation:** Use ceiling division for each pile
4. **Optimal Solution:** Binary search finds the minimum feasible speed
5. **Edge Cases:** Handle cases where no solution exists

## Edge Cases

1. **Single Pile:** Only one pile of bananas
2. **Large Piles:** Very large numbers in piles
3. **Minimum Hours:** h = number of piles (must eat one pile per hour)
4. **Maximum Hours:** h = sum of all piles (can eat 1 banana per hour)
5. **No Solution:** When it's impossible to finish in time

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Binary Search (Optimal)

**Time Complexity:** O(n * log M) where n is number of piles and M is max pile size  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: Linear Search

**Time Complexity:** O(n * M) where M is max pile size  
**Space Complexity:** O(1) - Constant extra space

### Solution 3: Mathematical Approach

**Time Complexity:** O(n) - Single pass through piles  
**Space Complexity:** O(1) - Constant extra space`,
    output1: '4',
    output2: '30',
    constraints: `## Constraints

- 1 <= piles.length <= 104
- piles.length <= h <= 109
- 1 <= piles[i] <= 109`,
    solutions: {
      c: {
        best: {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Function to calculate hours needed for a given speed
long long calculateHours(int* piles, int pilesSize, int speed) {
    long long hours = 0;
    for (int i = 0; i < pilesSize; i++) {
        // Ceiling division: (piles[i] + speed - 1) / speed
        hours += (piles[i] + speed - 1) / speed;
    }
    return hours;
}

// Function to check if a speed is feasible
bool canEatAll(int* piles, int pilesSize, int speed, int h) {
    return calculateHours(piles, pilesSize, speed) <= h;
}

int minEatingSpeed(int* piles, int pilesSize, int h) {
    int left = 1;
    int right = 0;
    
    // Find the maximum pile size
    for (int i = 0; i < pilesSize; i++) {
        if (piles[i] > right) {
            right = piles[i];
        }
    }
    
    // Binary search for the minimum feasible speed
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (canEatAll(piles, pilesSize, mid, h)) {
            right = mid; // Try smaller speed
        } else {
            left = mid + 1; // Try larger speed
        }
    }
    
    return left;
}

int main() {
    // Test case 1
    int piles1[] = {3, 6, 7, 11};
    int pilesSize1 = 4;
    int h1 = 8;
    printf("Test 1: piles = [3,6,7,11], h = %d\\n", h1);
    printf("Minimum eating speed: %d\\n", minEatingSpeed(piles1, pilesSize1, h1));
    
    // Test case 2
    int piles2[] = {30, 11, 23, 4, 20};
    int pilesSize2 = 5;
    int h2 = 5;
    printf("Test 2: piles = [30,11,23,4,20], h = %d\\n", h2);
    printf("Minimum eating speed: %d\\n", minEatingSpeed(piles2, pilesSize2, h2));
    
    // Test case 3
    int piles3[] = {312884470};
    int pilesSize3 = 1;
    int h3 = 312884469;
    printf("Test 3: piles = [312884470], h = %d\\n", h3);
    printf("Minimum eating speed: %d\\n", minEatingSpeed(piles3, pilesSize3, h3));
    
    return 0;
}`,
        timeComplexity: 'O(n * log M)',
        spaceComplexity: 'O(1)',
        explanation: 'This solution uses binary search to find the minimum feasible eating speed. For each speed, we calculate the total hours needed using ceiling division. The binary search efficiently narrows down the range to find the optimal speed. This is the most efficient approach with O(n * log M) time complexity.'
      },
      average: {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Function to calculate hours needed for a given speed
long long calculateHours(int* piles, int pilesSize, int speed) {
    long long hours = 0;
    for (int i = 0; i < pilesSize; i++) {
        // Ceiling division using if-else
        if (piles[i] % speed == 0) {
            hours += piles[i] / speed;
        } else {
            hours += piles[i] / speed + 1;
        }
    }
    return hours;
}

int minEatingSpeed(int* piles, int pilesSize, int h) {
    int maxPile = 0;
    
    // Find the maximum pile size
    for (int i = 0; i < pilesSize; i++) {
        if (piles[i] > maxPile) {
            maxPile = piles[i];
        }
    }
    
    // Linear search for the minimum feasible speed
    for (int speed = 1; speed <= maxPile; speed++) {
        if (calculateHours(piles, pilesSize, speed) <= h) {
            return speed;
        }
    }
    
    return maxPile; // Fallback
}

int main() {
    // Test case 1
    int piles1[] = {3, 6, 7, 11};
    int pilesSize1 = 4;
    int h1 = 8;
    printf("Test 1: piles = [3,6,7,11], h = %d\\n", h1);
    printf("Minimum eating speed: %d\\n", minEatingSpeed(piles1, pilesSize1, h1));
    
    // Test case 2
    int piles2[] = {30, 11, 23, 4, 20};
    int pilesSize2 = 5;
    int h2 = 5;
    printf("Test 2: piles = [30,11,23,4,20], h = %d\\n", h2);
    printf("Minimum eating speed: %d\\n", minEatingSpeed(piles2, pilesSize2, h2));
    
    return 0;
}`,
        timeComplexity: 'O(n * M)',
        spaceComplexity: 'O(1)',
        explanation: 'This solution uses linear search to find the minimum feasible eating speed. It tries each speed from 1 to the maximum pile size until it finds one that works. While this approach is straightforward, it is less efficient than binary search for large pile sizes.'
      },
      worst: {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Function to calculate hours needed for a given speed
long long calculateHours(int* piles, int pilesSize, int speed) {
    long long hours = 0;
    for (int i = 0; i < pilesSize; i++) {
        // Simulate eating process hour by hour
        int remaining = piles[i];
        while (remaining > 0) {
            hours++;
            remaining -= speed;
        }
    }
    return hours;
}

int minEatingSpeed(int* piles, int pilesSize, int h) {
    int maxPile = 0;
    long long totalBananas = 0;
    
    // Find maximum pile and total bananas
    for (int i = 0; i < pilesSize; i++) {
        if (piles[i] > maxPile) {
            maxPile = piles[i];
        }
        totalBananas += piles[i];
    }
    
    // Start with theoretical minimum speed
    int minSpeed = (totalBananas + h - 1) / h; // Ceiling division
    
    // Linear search starting from minimum speed
    for (int speed = minSpeed; speed <= maxPile; speed++) {
        if (calculateHours(piles, pilesSize, speed) <= h) {
            return speed;
        }
    }
    
    return maxPile; // Fallback
}

int main() {
    // Test case 1
    int piles1[] = {3, 6, 7, 11};
    int pilesSize1 = 4;
    int h1 = 8;
    printf("Test 1: piles = [3,6,7,11], h = %d\\n", h1);
    printf("Minimum eating speed: %d\\n", minEatingSpeed(piles1, pilesSize1, h1));
    
    return 0;
}`,
        timeComplexity: 'O(n * M²)',
        spaceComplexity: 'O(1)',
        explanation: 'This solution uses a naive approach to calculate hours by simulating the eating process hour by hour. It starts with a theoretical minimum speed and uses linear search. This approach is very inefficient due to the nested loops and should be avoided in practice.'
      }
    }
  }
  },
  {
    id: 'bulb-switcher',
    title: 'Bulb Switcher',
    description: `There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

Find how many bulbs are on after n rounds.`,
    difficulty: 'Medium',
    category: ['Math', 'Brain Teaser'],
    input1: 'n = 3',
    input2: 'n = 1',
    explanation: `## Problem Statement

There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

Find how many bulbs are on after n rounds.

**Key Understanding:**
- Initially all bulbs are off
- Round 1: Turn on all bulbs (1, 2, 3, ..., n)
- Round 2: Turn off every 2nd bulb (2, 4, 6, ...)
- Round 3: Toggle every 3rd bulb (3, 6, 9, ...)
- Round i: Toggle every ith bulb
- Final state: Count bulbs that are on

## Examples

### Example 1:
**Input:** n = 3  
**Output:** 1  
**Explanation:** 
- Initial state: [off, off, off]
- Round 1: [on, on, on]
- Round 2: [on, off, on]
- Round 3: [on, off, off]
- Final state: Only bulb 1 is on

### Example 2:
**Input:** n = 1  
**Output:** 1  
**Explanation:** 
- Initial state: [off]
- Round 1: [on]
- Final state: Bulb 1 is on

### Example 3:
**Input:** n = 0  
**Output:** 0  
**Explanation:** 
- No bulbs, so 0 bulbs are on

## Intuition

The key insight is to understand which bulbs will be toggled an odd number of times.

**Mathematical Insight:**
- A bulb will be toggled once for each of its factors
- Bulb i will be toggled in rounds 1, 2, 3, ..., i if i is divisible by those numbers
- A bulb ends up on if it's toggled an odd number of times
- Perfect squares have an odd number of factors (including the square root)
- Non-perfect squares have an even number of factors

**Why Perfect Squares Work:**
- For a perfect square k², the factors are: 1, 2, 3, ..., k, ..., k²
- The factor k appears only once (when k = √k²)
- All other factors come in pairs (a, k²/a)
- Total factors = odd number → bulb ends up on

## Approach

### Approach 1: Mathematical (Optimal)
**Algorithm:**
1. Count the number of perfect squares ≤ n
2. Return the count

**Why This Works:**
- Only perfect squares have an odd number of factors
- Only bulbs at perfect square positions end up on
- Count = floor(√n)

### Approach 2: Simulation
**Algorithm:**
1. Create an array of n bulbs (all off)
2. For each round i from 1 to n:
   - Toggle every ith bulb
3. Count bulbs that are on

### Approach 3: Factor Counting
**Algorithm:**
1. For each bulb i from 1 to n:
   - Count its factors
   - If odd number of factors, bulb ends up on
2. Return count of bulbs with odd factors

## Dry Run

Let's trace through Example 1: n = 3

### Mathematical Approach:
- Perfect squares ≤ 3: 1 (1² = 1)
- Count = 1
- Result: 1

### Simulation Approach:
- Initial: [off, off, off]
- Round 1: [on, on, on]
- Round 2: [on, off, on]  
- Round 3: [on, off, off]
- Count on bulbs: 1

### Factor Counting:
- Bulb 1: factors = [1] → odd → on
- Bulb 2: factors = [1, 2] → even → off
- Bulb 3: factors = [1, 3] → even → off
- Result: 1

## Key Insights

1. **Perfect Squares:** Only perfect squares have odd number of factors
2. **Mathematical Solution:** Count perfect squares ≤ n
3. **Efficiency:** O(1) time complexity with mathematical approach
4. **Pattern Recognition:** The result is floor(√n)

## Edge Cases

1. **n = 0:** Return 0
2. **n = 1:** Return 1
3. **Large n:** Mathematical approach handles efficiently
4. **Perfect Square n:** Include n in count

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Mathematical (Optimal)

**Time Complexity:** O(1) - Constant time  
**Space Complexity:** O(1) - Constant space

### Solution 2: Simulation

**Time Complexity:** O(n²) - For each round, toggle bulbs  
**Space Complexity:** O(n) - Array to store bulb states

### Solution 3: Factor Counting

**Time Complexity:** O(n * √n) - For each bulb, find factors  
**Space Complexity:** O(1) - Constant space`,
    output1: '1',
    output2: '1',
    constraints: '0 <= n <= 109',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <math.h>

/**
 * Bulb Switcher - Mathematical Solution
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
int bulbSwitch(int n) {
    return (int)sqrt(n);
}

int main() {
    // Test case 1
    int n1 = 3;
    printf("Test 1: n = %d\\n", n1);
    printf("Bulbs on: %d\\n", bulbSwitch(n1));
    
    // Test case 2
    int n2 = 1;
    printf("Test 2: n = %d\\n", n2);
    printf("Bulbs on: %d\\n", bulbSwitch(n2));
    
    // Test case 3
    int n3 = 0;
    printf("Test 3: n = %d\\n", n3);
    printf("Bulbs on: %d\\n", bulbSwitch(n3));
    
    // Test case 4
    int n4 = 10;
    printf("Test 4: n = %d\\n", n4);
    printf("Bulbs on: %d\\n", bulbSwitch(n4));
    
    return 0;
}`,
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses the mathematical insight that only perfect squares have an odd number of factors. Therefore, only bulbs at perfect square positions (1, 4, 9, 16, ...) will end up on. The number of perfect squares ≤ n is floor(√n), which we calculate using the sqrt function.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

/**
 * Bulb Switcher - Simulation Approach
 * Time Complexity: O(n²)
 * Space Complexity: O(n)
 */
int bulbSwitch(int n) {
    if (n == 0) return 0;
    
    // Create array to represent bulb states (false = off, true = on)
    bool* bulbs = (bool*)calloc(n + 1, sizeof(bool));
    
    // Simulate each round
    for (int round = 1; round <= n; round++) {
        for (int bulb = round; bulb <= n; bulb += round) {
            bulbs[bulb] = !bulbs[bulb]; // Toggle bulb
        }
    }
    
    // Count bulbs that are on
    int count = 0;
    for (int i = 1; i <= n; i++) {
        if (bulbs[i]) {
            count++;
        }
    }
    
    free(bulbs);
    return count;
}

int main() {
    // Test case 1
    int n1 = 3;
    printf("Test 1: n = %d\\n", n1);
    printf("Bulbs on: %d\\n", bulbSwitch(n1));
    
    // Test case 2
    int n2 = 1;
    printf("Test 2: n = %d\\n", n2);
    printf("Bulbs on: %d\\n", bulbSwitch(n2));
    
    // Test case 3
    int n3 = 0;
    printf("Test 3: n = %d\\n", n3);
    printf("Bulbs on: %d\\n", bulbSwitch(n3));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution simulates the actual bulb switching process. We create an array to represent bulb states and simulate each round by toggling every ith bulb. After all rounds, we count how many bulbs are on. This approach is more intuitive but less efficient for large values of n.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdbool.h>

/**
 * Count factors of a number
 */
int countFactors(int num) {
    int count = 0;
    for (int i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    return count;
}

/**
 * Bulb Switcher - Factor Counting Approach
 * Time Complexity: O(n * √n)
 * Space Complexity: O(1)
 */
int bulbSwitch(int n) {
    int result = 0;
    
    // Check each bulb
    for (int i = 1; i <= n; i++) {
        int factors = countFactors(i);
        if (factors % 2 == 1) { // Odd number of factors
            result++;
        }
    }
    
    return result;
}

int main() {
    // Test case 1
    int n1 = 3;
    printf("Test 1: n = %d\\n", n1);
    printf("Bulbs on: %d\\n", bulbSwitch(n1));
    
    // Test case 2
    int n2 = 1;
    printf("Test 2: n = %d\\n", n2);
    printf("Bulbs on: %d\\n", bulbSwitch(n2));
    
    return 0;
}`,
          timeComplexity: 'O(n * √n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution counts the factors of each bulb number. A bulb ends up on if it has an odd number of factors. We check each bulb from 1 to n and count its factors. This approach is less efficient than the mathematical solution but helps understand the underlying principle.'
        }
      }
    }
  },
  {
    id: 'rotate-array',
    title: 'Rotate Array',
    description: `Given an array, rotate the array to the right by k steps, where k is non-negative.`,
    difficulty: 'Medium',
    category: ['Array', 'Two Pointers', 'Math'],
    input1: 'nums = [1,2,3,4,5,6,7], k = 3',
    input2: 'nums = [-1,-100,3,99], k = 2',
    explanation: `## Problem Statement

Given an array, rotate the array to the right by k steps, where k is non-negative.

**Key Understanding:**
- Rotate the array to the right by k positions
- Elements that go beyond the end wrap around to the beginning
- k can be larger than the array length
- We need to handle the case where k > array length

## Examples

### Example 1:
**Input:** nums = [1,2,3,4,5,6,7], k = 3  
**Output:** [5,6,7,1,2,3,4]  
**Explanation:** 
- Rotate 1 steps to the right: [7,1,2,3,4,5,6]
- Rotate 2 steps to the right: [6,7,1,2,3,4,5]
- Rotate 3 steps to the right: [5,6,7,1,2,3,4]

### Example 2:
**Input:** nums = [-1,-100,3,99], k = 2  
**Output:** [3,99,-1,-100]  
**Explanation:** 
- Rotate 1 steps to the right: [99,-1,-100,3]
- Rotate 2 steps to the right: [3,99,-1,-100]

### Example 3:
**Input:** nums = [1,2,3], k = 4  
**Output:** [3,1,2]  
**Explanation:** 
- k = 4, but array length = 3
- Effective rotation = 4 % 3 = 1 step
- Rotate 1 step: [3,1,2]

## Intuition

The key insight is that rotating an array by k steps is equivalent to:
1. Reversing the entire array
2. Reversing the first k elements
3. Reversing the remaining n-k elements

**Mathematical Insight:**
- If we rotate by k steps, the last k elements move to the front
- The first n-k elements move to the back
- We can achieve this using three reversals

**Why Three Reversals Work:**
- Original: [1,2,3,4,5,6,7], k = 3
- Reverse all: [7,6,5,4,3,2,1]
- Reverse first k: [5,6,7,4,3,2,1]
- Reverse rest: [5,6,7,1,2,3,4]

## Approach

### Approach 1: Using Extra Array (Simple)
**Algorithm:**
1. Create a new array of same size
2. Copy elements to new positions: newArr[(i + k) % n] = arr[i]
3. Copy back to original array

### Approach 2: Juggling Algorithm
**Algorithm:**
1. Move elements in cycles
2. For each cycle, move elements by k positions
3. Continue until all elements are moved

### Approach 3: Reversal Algorithm (Optimal)
**Algorithm:**
1. Reverse the entire array
2. Reverse the first k elements
3. Reverse the remaining n-k elements

## Dry Run

Let's trace through Example 1: nums = [1,2,3,4,5,6,7], k = 3

### Reversal Approach:
- Original: [1,2,3,4,5,6,7]
- Reverse all: [7,6,5,4,3,2,1]
- Reverse first 3: [5,6,7,4,3,2,1]
- Reverse rest: [5,6,7,1,2,3,4]
- Result: [5,6,7,1,2,3,4]

### Extra Array Approach:
- k = 3, n = 7
- newArr[(0+3)%7] = newArr[3] = 1
- newArr[(1+3)%7] = newArr[4] = 2
- newArr[(2+3)%7] = newArr[5] = 3
- newArr[(3+3)%7] = newArr[6] = 4
- newArr[(4+3)%7] = newArr[0] = 5
- newArr[(5+3)%7] = newArr[1] = 6
- newArr[(6+3)%7] = newArr[2] = 7
- Result: [5,6,7,1,2,3,4]

## Key Insights

1. **Modulo Operation:** k % n gives effective rotation
2. **Three Reversals:** Efficient in-place solution
3. **Cyclic Nature:** Elements wrap around the array
4. **Edge Cases:** Handle k > n and k = 0

## Edge Cases

1. **k = 0:** No rotation needed
2. **k = n:** Array returns to original state
3. **k > n:** Use modulo to get effective rotation
4. **n = 1:** Single element array
5. **k = 1:** Simple one-step rotation

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Reversal Algorithm (Optimal)

**Time Complexity:** O(n) - Three passes through array  
**Space Complexity:** O(1) - In-place solution

### Solution 2: Extra Array

**Time Complexity:** O(n) - Two passes through array  
**Space Complexity:** O(n) - Extra array needed

### Solution 3: Juggling Algorithm

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(1) - In-place solution`,
    output1: '[5,6,7,1,2,3,4]',
    output2: '[3,99,-1,-100]',
    constraints: '1 <= nums.length <= 105\n-231 <= nums[i] <= 231 - 1\n0 <= k <= 105',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

/**
 * Reverse array elements from start to end
 */
void reverse(int* nums, int start, int end) {
    while (start < end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

/**
 * Rotate Array - Reversal Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
void rotate(int* nums, int numsSize, int k) {
    // Handle case where k > numsSize
    k = k % numsSize;
    
    // If k is 0, no rotation needed
    if (k == 0) return;
    
    // Reverse the entire array
    reverse(nums, 0, numsSize - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining elements
    reverse(nums, k, numsSize - 1);
}

int main() {
    // Test case 1
    int nums1[] = {1, 2, 3, 4, 5, 6, 7};
    int size1 = 7;
    int k1 = 3;
    
    printf("Test 1: Original array = [1,2,3,4,5,6,7], k = %d\\n", k1);
    rotate(nums1, size1, k1);
    printf("After rotation: [");
    for (int i = 0; i < size1; i++) {
        printf("%d", nums1[i]);
        if (i < size1 - 1) printf(",");
    }
    printf("]\\n");
    
    // Test case 2
    int nums2[] = {-1, -100, 3, 99};
    int size2 = 4;
    int k2 = 2;
    
    printf("\\nTest 2: Original array = [-1,-100,3,99], k = %d\\n", k2);
    rotate(nums2, size2, k2);
    printf("After rotation: [");
    for (int i = 0; i < size2; i++) {
        printf("%d", nums2[i]);
        if (i < size2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses the reversal algorithm, which is the most efficient in-place solution. We first reverse the entire array, then reverse the first k elements, and finally reverse the remaining n-k elements. This approach requires only O(1) extra space and O(n) time complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Rotate Array - Using Extra Array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
void rotate(int* nums, int numsSize, int k) {
    // Handle case where k > numsSize
    k = k % numsSize;
    
    // If k is 0, no rotation needed
    if (k == 0) return;
    
    // Create temporary array
    int* temp = (int*)malloc(numsSize * sizeof(int));
    
    // Copy elements to new positions
    for (int i = 0; i < numsSize; i++) {
        temp[(i + k) % numsSize] = nums[i];
    }
    
    // Copy back to original array
    for (int i = 0; i < numsSize; i++) {
        nums[i] = temp[i];
    }
    
    free(temp);
}

int main() {
    // Test case 1
    int nums1[] = {1, 2, 3, 4, 5, 6, 7};
    int size1 = 7;
    int k1 = 3;
    
    printf("Test 1: Original array = [1,2,3,4,5,6,7], k = %d\\n", k1);
    rotate(nums1, size1, k1);
    printf("After rotation: [");
    for (int i = 0; i < size1; i++) {
        printf("%d", nums1[i]);
        if (i < size1 - 1) printf(",");
    }
    printf("]\\n");
    
    // Test case 2
    int nums2[] = {-1, -100, 3, 99};
    int size2 = 4;
    int k2 = 2;
    
    printf("\\nTest 2: Original array = [-1,-100,3,99], k = %d\\n", k2);
    rotate(nums2, size2, k2);
    printf("After rotation: [");
    for (int i = 0; i < size2; i++) {
        printf("%d", nums2[i]);
        if (i < size2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses an extra array to store the rotated elements. We calculate the new position for each element using the formula (i + k) % n and copy them to the temporary array. Then we copy back to the original array. This approach is simple to understand but uses O(n) extra space.'
        },
        worst: {
          code: `#include <stdio.h>

/**
 * Rotate Array - One by One Rotation
 * Time Complexity: O(n * k)
 * Space Complexity: O(1)
 */
void rotate(int* nums, int numsSize, int k) {
    // Handle case where k > numsSize
    k = k % numsSize;
    
    // If k is 0, no rotation needed
    if (k == 0) return;
    
    // Rotate one by one
    for (int i = 0; i < k; i++) {
        // Store the last element
        int last = nums[numsSize - 1];
        
        // Shift all elements to the right by 1
        for (int j = numsSize - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        
        // Put the last element at the beginning
        nums[0] = last;
    }
}

int main() {
    // Test case 1
    int nums1[] = {1, 2, 3, 4, 5, 6, 7};
    int size1 = 7;
    int k1 = 3;
    
    printf("Test 1: Original array = [1,2,3,4,5,6,7], k = %d\\n", k1);
    rotate(nums1, size1, k1);
    printf("After rotation: [");
    for (int i = 0; i < size1; i++) {
        printf("%d", nums1[i]);
        if (i < size1 - 1) printf(",");
    }
    printf("]\\n");
    
    // Test case 2
    int nums2[] = {-1, -100, 3, 99};
    int size2 = 4;
    int k2 = 2;
    
    printf("\\nTest 2: Original array = [-1,-100,3,99], k = %d\\n", k2);
    rotate(nums2, size2, k2);
    printf("After rotation: [");
    for (int i = 0; i < size2; i++) {
        printf("%d", nums2[i]);
        if (i < size2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n * k)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution rotates the array one step at a time. For each rotation, we store the last element, shift all elements to the right by one position, and place the last element at the beginning. This approach is simple but inefficient with O(n * k) time complexity.'
        }
      }
    }
  },
  {
    id: 'delete-and-earn',
    title: 'Delete and Earn',
    description: `You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above operation some number of times.`,
    difficulty: 'Medium',
    category: ['Array', 'Dynamic Programming', 'Hash Table'],
    input1: 'nums = [3,4,2]',
    input2: 'nums = [2,2,3,3,3,4]',
    explanation: `## Problem Statement

You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above operation some number of times.

**Key Understanding:**
- When you pick a number, you earn points equal to that number
- You must delete all occurrences of (number - 1) and (number + 1)
- You can perform this operation multiple times
- Goal is to maximize total points earned
- This creates a constraint: if you take a number, you cannot take its adjacent numbers

## Examples

### Example 1:
**Input:** nums = [3,4,2]  
**Output:** 6  
**Explanation:** 
- **Step 1:** Delete 4 to earn 4 points. Consequently, 3 is also deleted (because 4-1=3).
- **Step 2:** Delete 2 to earn 2 points. No adjacent numbers to delete.
- **Total points = 4 + 2 = 6**

**Alternative approach:**
- If we delete 3 first: earn 3 points, delete 2 and 4
- Then we can only delete 2 (but 2 is already deleted)
- Total points = 3 (less than 6)

### Example 2:
**Input:** nums = [2,2,3,3,3,4]  
**Output:** 9  
**Explanation:** 
- **Step 1:** Delete a single 3 to earn 3 points. All 2's and 4's are also deleted (because 3-1=2 and 3+1=4).
- **Step 2:** Delete 2 to earn 2 points (if any 2's remain).
- **Step 3:** Delete 4 to earn 4 points (if any 4's remain).
- **Total points = 3 + 2 + 4 = 9**

**Note:** After deleting 3, all 2's and 4's are automatically deleted, so we can't earn additional points from them.

### Example 3:
**Input:** nums = [1,1,1,2,4,5,5,5,6]  
**Output:** 18  
**Explanation:** 
- **Step 1:** Delete 5 to earn 15 points (3 × 5). Delete 4 and 6.
- **Step 2:** Delete 2 to earn 2 points. Delete 1.
- **Step 3:** Delete 1 to earn 1 point (if any 1's remain).
- **Total points = 15 + 2 + 1 = 18**

## Intuition

This problem is similar to the "House Robber" problem. The key insight is that if we choose to take a number, we cannot take its adjacent numbers (number-1 and number+1).

**Why This Works:**
- When you delete a number, you must also delete all adjacent numbers
- This creates a constraint similar to House Robber: you can't take adjacent houses
- The difference is that here we have frequency counts and need to maximize total value

**Dynamic Programming Approach:**
- Count the frequency of each number
- Sort the unique numbers
- For each number, decide whether to take it or not
- If we take a number, we cannot take adjacent numbers
- Use DP to find the maximum points

## Approach

### Approach 1: Dynamic Programming with Full Array
**Algorithm:**
1. Count frequency of each number in the array
2. Create a frequency array where freq[i] = count of number i
3. Use DP: dp[i] = max(dp[i-1], dp[i-2] + freq[i] * i)
4. Return dp[max_number]

**Why This Works:**
- dp[i] represents the maximum points we can earn using numbers from 1 to i
- At each step, we choose between:
  - Taking the current number i: dp[i-2] + freq[i] * i
  - Skipping the current number: dp[i-1]

### Approach 2: Optimized DP with Two Variables
**Algorithm:**
1. Count frequency of each number
2. Use two variables (prev2, prev1) to track previous states
3. Iterate through all possible numbers (1 to max_number)
4. Update maximum points using the same DP formula

### Approach 3: Recursive with Memoization
**Algorithm:**
1. Count frequency of each number
2. Use recursive function with memoization
3. For each number, try taking it or skipping it
4. Return the maximum of both choices

## Dry Run

Let's trace through Example 1: nums = [3,4,2]

### Step-by-Step Process:
1. **Count frequencies:**
   - freq[2] = 1, freq[3] = 1, freq[4] = 1

2. **DP Array:**
   - dp[0] = 0 (no numbers)
   - dp[1] = 0 (no 1's in array)
   - dp[2] = max(dp[1], dp[0] + freq[2] * 2) = max(0, 0 + 1 * 2) = 2
   - dp[3] = max(dp[2], dp[1] + freq[3] * 3) = max(2, 0 + 1 * 3) = 3
   - dp[4] = max(dp[3], dp[2] + freq[4] * 4) = max(3, 2 + 1 * 4) = 6

3. **Result:** dp[4] = 6

### Optimized Approach:
- prev2 = 0, prev1 = 0
- For i = 2: current = max(0, 0 + 2) = 2; prev2 = 0, prev1 = 2
- For i = 3: current = max(2, 0 + 3) = 3; prev2 = 2, prev1 = 3
- For i = 4: current = max(3, 2 + 4) = 6; prev2 = 3, prev1 = 6

## Key Insights

1. **House Robber Analogy:** This is essentially House Robber with frequency counts
2. **Adjacent Constraint:** Taking a number prevents taking adjacent numbers
3. **Frequency Multiplication:** Total value = frequency × number
4. **Optimal Substructure:** Solution for range [1...i] depends on [1...i-1] and [1...i-2]
5. **Greedy Won't Work:** Always taking the largest number doesn't guarantee optimal solution

## Edge Cases

1. **Empty Array:** Return 0
2. **Single Element:** Return the value of that element
3. **All Same Numbers:** Return count × number
4. **Consecutive Numbers:** Only one can be chosen
5. **Large Numbers:** Handle efficiently with optimized DP

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Optimized Dynamic Programming (Best)

**Time Complexity:** O(n + M) where n is array length and M is max number  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: Full DP Array

**Time Complexity:** O(n + M)  
**Space Complexity:** O(M) - DP array size

### Solution 3: Recursive with Memoization

**Time Complexity:** O(n + M)  
**Space Complexity:** O(M) - Memoization array`,
    output1: '6',
    output2: '9',
    constraints: '1 <= nums.length <= 2 * 104\n1 <= nums[i] <= 104',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Compare function for qsort
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int deleteAndEarn(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    // Count frequency of each number
    int count[10001] = {0};
    for (int i = 0; i < numsSize; i++) {
        count[nums[i]]++;
    }
    
    // Dynamic programming
    int prev2 = 0;  // dp[i-2]
    int prev1 = 0;  // dp[i-1]
    
    for (int i = 1; i <= 10000; i++) {
        int current = prev1;
        if (count[i] > 0) {
            current = (prev2 + count[i] * i > prev1) ? prev2 + count[i] * i : prev1;
        }
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

int main() {
    // Test case 1
    int nums1[] = {3, 4, 2};
    int size1 = 3;
    printf("Test 1: nums = [3,4,2]\\n");
    printf("Maximum points: %d\\n", deleteAndEarn(nums1, size1));
    
    // Test case 2
    int nums2[] = {2, 2, 3, 3, 3, 4};
    int size2 = 6;
    printf("Test 2: nums = [2,2,3,3,3,4]\\n");
    printf("Maximum points: %d\\n", deleteAndEarn(nums2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses dynamic programming with optimized space. We count the frequency of each number and use two variables to track the previous states. For each number, we decide whether to take it (and skip adjacent numbers) or skip it.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Compare function for qsort
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int deleteAndEarn(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);
    
    // Count frequency of each number
    int count[10001] = {0};
    for (int i = 0; i < numsSize; i++) {
        count[nums[i]]++;
    }
    
    // Dynamic programming array
    int dp[10001] = {0};
    dp[1] = count[1];
    
    for (int i = 2; i <= 10000; i++) {
        dp[i] = (dp[i-1] > dp[i-2] + count[i] * i) ? dp[i-1] : dp[i-2] + count[i] * i;
    }
    
    return dp[10000];
}

int main() {
    // Test case 1
    int nums1[] = {3, 4, 2};
    int size1 = 3;
    printf("Test 1: nums = [3,4,2]\\n");
    printf("Maximum points: %d\\n", deleteAndEarn(nums1, size1));
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses a full DP array to store the maximum points for each number. We sort the array first, then use dynamic programming to find the optimal solution.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Recursive solution with memoization
int memo[10001];

int maxPoints(int* count, int n) {
    if (n <= 0) return 0;
    if (n == 1) return count[1];
    
    if (memo[n] != -1) return memo[n];
    
    // Take current number or skip it
    int take = count[n] * n + maxPoints(count, n - 2);
    int skip = maxPoints(count, n - 1);
    
    memo[n] = (take > skip) ? take : skip;
    return memo[n];
}

int deleteAndEarn(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    // Count frequency of each number
    int count[10001] = {0};
    for (int i = 0; i < numsSize; i++) {
        count[nums[i]]++;
    }
    
    // Initialize memoization array
    memset(memo, -1, sizeof(memo));
    
    return maxPoints(count, 10000);
}

int main() {
    // Test case 1
    int nums1[] = {3, 4, 2};
    int size1 = 3;
    printf("Test 1: nums = [3,4,2]\\n");
    printf("Maximum points: %d\\n", deleteAndEarn(nums1, size1));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses recursive approach with memoization. It explores all possible combinations and uses memoization to avoid recalculating the same subproblems.'
        }
      }
    }
  },
  {
    id: 'reverse-integer',
    title: 'Reverse Integer',
    description: `Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`,
    difficulty: 'Medium',
    category: ['Math'],
    input1: 'x = 123',
    input2: 'x = -123',
    explanation: `## Problem Statement

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

**Key Understanding:**
- Reverse the digits of a 32-bit integer
- Handle negative numbers (preserve the sign)
- Check for overflow/underflow at each step
- Return 0 if result exceeds 32-bit range
- Cannot use 64-bit integers for intermediate calculations

## Examples

### Example 1:
**Input:** x = 123  
**Output:** 321  
**Explanation:** 
- **Step 1:** Extract last digit: 123 % 10 = 3, result = 3, x = 12
- **Step 2:** Extract last digit: 12 % 10 = 2, result = 3×10 + 2 = 32, x = 1
- **Step 3:** Extract last digit: 1 % 10 = 1, result = 32×10 + 1 = 321, x = 0
- **Result:** 321

### Example 2:
**Input:** x = -123  
**Output:** -321  
**Explanation:** 
- **Step 1:** Extract last digit: 123 % 10 = 3, result = 3, x = 12
- **Step 2:** Extract last digit: 12 % 10 = 2, result = 3×10 + 2 = 32, x = 1
- **Step 3:** Extract last digit: 1 % 10 = 1, result = 32×10 + 1 = 321, x = 0
- **Apply sign:** -321
- **Result:** -321

### Example 3:
**Input:** x = 120  
**Output:** 21  
**Explanation:** 
- **Step 1:** Extract last digit: 120 % 10 = 0, result = 0, x = 12
- **Step 2:** Extract last digit: 12 % 10 = 2, result = 0×10 + 2 = 2, x = 1
- **Step 3:** Extract last digit: 1 % 10 = 1, result = 2×10 + 1 = 21, x = 0
- **Result:** 21 (leading zeros are ignored)

### Example 4:
**Input:** x = 1534236469  
**Output:** 0  
**Explanation:** 
- **Overflow occurs:** Reverse would be 9646324351
- **32-bit range:** [-2,147,483,648 to 2,147,483,647]
- **9646324351 > 2,147,483,647** (overflow)
- **Result:** 0

### Example 5:
**Input:** x = 0  
**Output:** 0  
**Explanation:** 
- Single digit number, no reversal needed
- **Result:** 0

## Intuition

The key insight is to extract digits one by one and build the reversed number. We need to handle overflow carefully by checking before multiplying by 10.

**Why This Approach Works:**
- We extract the last digit using modulo operation (x % 10)
- We build the result by multiplying by 10 and adding the new digit
- We continue until x becomes 0
- We handle negative numbers by working with absolute value and applying sign at the end

**Overflow Detection Strategy:**
- Before multiplying by 10, check if result > INT_MAX/10
- If equal to INT_MAX/10, check if next digit > 7 (for positive) or > 8 (for negative)
- This prevents overflow without using 64-bit integers

## Approach

### Approach 1: Mathematical with Overflow Detection (Optimal)
**Algorithm:**
1. Handle edge case: if x = 0, return 0
2. Extract last digit using modulo: digit = x % 10
3. Check for overflow before multiplying result by 10
4. Build reversed number: result = result * 10 + digit
5. Remove last digit: x = x / 10
6. Repeat until x = 0
7. Apply original sign

**Overflow Check:**
- For positive numbers: result > INT_MAX/10 OR (result == INT_MAX/10 AND digit > 7)
- For negative numbers: result < INT_MIN/10 OR (result == INT_MIN/10 AND digit < -8)

### Approach 2: String Conversion
**Algorithm:**
1. Convert integer to string
2. Reverse the string (excluding sign)
3. Convert back to integer
4. Handle overflow using long long
5. Apply sign

### Approach 3: Power-based Approach
**Algorithm:**
1. Count number of digits
2. Use powers of 10 to reverse
3. Check for overflow at each step
4. Apply sign

## Dry Run

Let's trace through Example 1: x = 123

### Step-by-Step Process:
1. **Initial:** x = 123, result = 0
2. **Step 1:** digit = 123 % 10 = 3
   - Check overflow: 0 ≤ INT_MAX/10 (214748364) ✓
   - result = 0 × 10 + 3 = 3
   - x = 123 / 10 = 12
3. **Step 2:** digit = 12 % 10 = 2
   - Check overflow: 3 ≤ INT_MAX/10 ✓
   - result = 3 × 10 + 2 = 32
   - x = 12 / 10 = 1
4. **Step 3:** digit = 1 % 10 = 1
   - Check overflow: 32 ≤ INT_MAX/10 ✓
   - result = 32 × 10 + 1 = 321
   - x = 1 / 10 = 0
5. **Result:** 321

### Overflow Example: x = 1534236469
1. **Step 1:** digit = 9, result = 9
2. **Step 2:** digit = 6, result = 96
3. **... continues until overflow occurs**
4. **Overflow detected:** return 0

## Key Insights

1. **Modulo Operation:** x % 10 gives the last digit
2. **Integer Division:** x / 10 removes the last digit
3. **Overflow Prevention:** Check before multiplication, not after
4. **Sign Handling:** Work with absolute value, apply sign at end
5. **Leading Zeros:** Automatically handled by integer arithmetic
6. **Edge Cases:** 0, single digits, negative numbers

## Edge Cases

1. **x = 0:** Return 0
2. **Single digit:** Return the same number
3. **Negative numbers:** Handle sign separately
4. **Overflow cases:** Return 0
5. **Large numbers:** Careful overflow detection
6. **Numbers ending in 0:** Leading zeros are ignored

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Mathematical with Overflow Detection (Optimal)

**Time Complexity:** O(log n) - Number of digits  
**Space Complexity:** O(1) - Constant space

### Solution 2: String Conversion

**Time Complexity:** O(log n) - String operations  
**Space Complexity:** O(log n) - String storage

### Solution 3: Power-based Approach

**Time Complexity:** O(log n) - Multiple passes  
**Space Complexity:** O(1) - Constant space`,
    output1: '321',
    output2: '-321',
    constraints: '-231 <= x <= 231 - 1',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <limits.h>

int reverse(int x) {
    int result = 0;
    
    while (x != 0) {
        int digit = x % 10;
        
        // Check for overflow before multiplying
        if (result > INT_MAX / 10 || (result == INT_MAX / 10 && digit > 7)) {
            return 0;
        }
        if (result < INT_MIN / 10 || (result == INT_MIN / 10 && digit < -8)) {
            return 0;
        }
        
        result = result * 10 + digit;
        x /= 10;
    }
    
    return result;
}

int main() {
    // Test case 1
    int x1 = 123;
    printf("Test 1: x = %d\\n", x1);
    printf("Reversed: %d\\n", reverse(x1));
    
    // Test case 2
    int x2 = -123;
    printf("Test 2: x = %d\\n", x2);
    printf("Reversed: %d\\n", reverse(x2));
    
    // Test case 3
    int x3 = 120;
    printf("Test 3: x = %d\\n", x3);
    printf("Reversed: %d\\n", reverse(x3));
    
    // Test case 4
    int x4 = 1534236469;
    printf("Test 4: x = %d\\n", x4);
    printf("Reversed: %d\\n", reverse(x4));
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution extracts digits one by one using modulo and builds the reversed number. It carefully checks for overflow before each multiplication by 10 to ensure the result stays within 32-bit integer range.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>

int reverse(int x) {
    // Handle edge case
    if (x == 0) return 0;
    
    // Convert to string
    char str[20];
    sprintf(str, "%d", x);
    
    int len = strlen(str);
    int start = (x < 0) ? 1 : 0; // Skip minus sign for negative numbers
    
    // Reverse the string
    for (int i = start; i < (len + start) / 2; i++) {
        char temp = str[i];
        str[i] = str[len - 1 - (i - start)];
        str[len - 1 - (i - start)] = temp;
    }
    
    // Convert back to integer
    long long result = atoll(str);
    
    // Check for overflow
    if (result > INT_MAX || result < INT_MIN) {
        return 0;
    }
    
    return (int)result;
}

int main() {
    // Test case 1
    int x1 = 123;
    printf("Test 1: x = %d\\n", x1);
    printf("Reversed: %d\\n", reverse(x1));
    
    // Test case 2
    int x2 = -123;
    printf("Test 2: x = %d\\n", x2);
    printf("Reversed: %d\\n", reverse(x2));
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(log n)',
          explanation: 'This solution converts the integer to a string, reverses the string, and converts it back to an integer. It uses a long long to check for overflow before returning the result.'
        },
        worst: {
          code: `#include <stdio.h>
#include <math.h>
#include <limits.h>

int reverse(int x) {
    if (x == 0) return 0;
    
    // Count digits
    int temp = abs(x);
    int digits = 0;
    while (temp > 0) {
        digits++;
        temp /= 10;
    }
    
    // Reverse using power of 10
    int result = 0;
    temp = abs(x);
    
    for (int i = 0; i < digits; i++) {
        int digit = temp % 10;
        int power = (int)pow(10, digits - 1 - i);
        
        // Check for overflow
        if (power > 0 && digit > INT_MAX / power) {
            return 0;
        }
        
        result += digit * power;
        temp /= 10;
    }
    
    // Apply sign
    return (x < 0) ? -result : result;
}

int main() {
    // Test case 1
    int x1 = 123;
    printf("Test 1: x = %d\\n", x1);
    printf("Reversed: %d\\n", reverse(x1));
    
    return 0;
}`,
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution counts the digits first, then uses powers of 10 to reverse the number. It is less efficient due to the use of pow function and multiple passes through the number.'
        }
      }
    }
  },
  {
    id: 'largest-number',
    title: 'Largest Number',
    description: `Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, return it as a string.`,
    difficulty: 'Medium',
    category: ['String', 'Greedy', 'Sorting'],
    input1: 'nums = [10,2]',
    input2: 'nums = [3,30,34,5,9]',
    explanation: `## Problem Statement

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, return it as a string.

**Key Understanding:**
- Arrange numbers to form the largest possible number
- Compare numbers as strings, not as integers
- Handle edge cases like all zeros
- Return result as string
- The order of concatenation matters for creating the largest number

## Examples

### Example 1:
**Input:** nums = [10,2]  
**Output:** "210"  
**Explanation:** 
- **Option 1:** "10" + "2" = "102"
- **Option 2:** "2" + "10" = "210"
- **210 > 102**, so we choose "210"

### Example 2:
**Input:** nums = [3,30,34,5,9]  
**Output:** "9534330"  
**Explanation:** 
- **Step-by-step comparison:**
  - Compare "3" vs "30": "330" vs "303" → "330" > "303" → 3 comes before 30
  - Compare "30" vs "34": "3034" vs "3430" → "3430" > "3034" → 34 comes before 30
  - Compare "34" vs "5": "345" vs "534" → "534" > "345" → 5 comes before 34
  - Compare "5" vs "9": "59" vs "95" → "95" > "59" → 9 comes before 5
- **Final order:** [9, 5, 34, 3, 30] → "9534330"

### Example 3:
**Input:** nums = [1]  
**Output:** "1"  
**Explanation:** 
- Single number, no arrangement needed
- **Result:** "1"

### Example 4:
**Input:** nums = [10]  
**Output:** "10"  
**Explanation:** 
- Single number, no arrangement needed
- **Result:** "10"

### Example 5:
**Input:** nums = [0,0]  
**Output:** "0"  
**Explanation:** 
- Both numbers are 0
- Result would be "00", but we return "0" (no leading zeros)

### Example 6:
**Input:** nums = [3,30,34,5,9,0]  
**Output:** "95343300"  
**Explanation:** 
- 0 will be placed at the end since "30" < "03" for any number
- **Final order:** [9, 5, 34, 3, 30, 0] → "95343300"

## Intuition

The key insight is to compare numbers as strings, not as integers. When comparing two numbers, we need to determine which order gives us a larger result.

**Why String Comparison Works:**
- When we concatenate numbers, the order matters
- "3" + "30" = "330" vs "30" + "3" = "303"
- "330" > "303", so 3 should come before 30
- This is not the same as integer comparison (3 < 30)

**Custom Comparator Logic:**
- For numbers a and b, compare "ab" vs "ba"
- If "ab" > "ba", then a should come before b
- If "ab" < "ba", then b should come before a
- If "ab" == "ba", then order doesn't matter
- This ensures we get the largest possible concatenated number

## Approach

### Approach 1: Custom Sorting with qsort (Optimal)
**Algorithm:**
1. Convert all numbers to strings
2. Sort using custom comparator: strcmp("ab", "ba")
3. Join all strings in sorted order
4. Handle edge case: if result starts with "0", return "0"

**Custom Comparator:**
- Convert numbers to strings
- Concatenate in both orders: "ab" and "ba"
- Compare using strcmp
- Return reverse order for descending sort

### Approach 2: Bubble Sort with Custom Comparison
**Algorithm:**
1. Use bubble sort with custom comparison function
2. Compare concatenated strings at each step
3. Swap elements if needed
4. Join result strings

### Approach 3: Permutation Generation (Educational)
**Algorithm:**
1. Generate all possible permutations
2. Convert each permutation to string
3. Find the largest string
4. Return the result

## Dry Run

Let's trace through Example 2: nums = [3,30,34,5,9]

### Step-by-Step Sorting Process:
1. **Initial array:** [3, 30, 34, 5, 9]

2. **Compare 3 vs 30:**
   - "330" vs "303"
   - "330" > "303" ✓
   - Order: [3, 30, 34, 5, 9]

3. **Compare 30 vs 34:**
   - "3034" vs "3430"
   - "3430" > "3034" ✓
   - Order: [3, 34, 30, 5, 9]

4. **Compare 34 vs 5:**
   - "345" vs "534"
   - "534" > "345" ✓
   - Order: [3, 5, 34, 30, 9]

5. **Compare 5 vs 9:**
   - "59" vs "95"
   - "95" > "59" ✓
   - Order: [3, 9, 5, 34, 30]

6. **Continue sorting...**
   - Final order: [9, 5, 34, 3, 30]

7. **Result:** "9534330"

### Edge Case: All Zeros
**Input:** [0, 0, 0]
- Sorted order: [0, 0, 0]
- Result: "000"
- **Handle edge case:** Return "0"

## Key Insights

1. **String vs Integer Comparison:** "3" + "30" ≠ "30" + "3"
2. **Custom Comparator:** Compare concatenated strings, not individual numbers
3. **Descending Order:** We want the largest number, so sort in descending order
4. **Leading Zeros:** Handle case where result would have leading zeros
5. **Stability:** The sorting algorithm should be stable for consistent results
6. **Edge Cases:** Single element, all zeros, mixed zeros

## Edge Cases

1. **Single Element:** Return the number as string
2. **All Zeros:** Return "0" (not "000...")
3. **Mixed Zeros:** Zeros should be placed appropriately
4. **Large Numbers:** Handle efficiently without overflow
5. **Equal Numbers:** Order doesn't matter for equal numbers
6. **Empty Array:** Return empty string (though constraints say length ≥ 1)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Custom Sorting with qsort (Optimal)

**Time Complexity:** O(n log n * k) where k is average string length  
**Space Complexity:** O(n * k) for string storage

### Solution 2: Bubble Sort with Custom Comparison

**Time Complexity:** O(n² * k)  
**Space Complexity:** O(n * k)

### Solution 3: Permutation Generation (Educational)

**Time Complexity:** O(n! * n * k)  
**Space Complexity:** O(n * k)`,
    output1: '"210"',
    output2: '"9534330"',
    constraints: '1 <= nums.length <= 100\n0 <= nums[i] <= 109',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Custom comparison function for qsort
int compare(const void* a, const void* b) {
    char str1[50], str2[50];
    sprintf(str1, "%d", *(int*)a);
    sprintf(str2, "%d", *(int*)b);
    
    char concat1[100], concat2[100];
    sprintf(concat1, "%s%s", str1, str2);
    sprintf(concat2, "%s%s", str2, str1);
    
    return strcmp(concat2, concat1); // Reverse order for descending
}

char* largestNumber(int* nums, int numsSize) {
    if (numsSize == 0) return "";
    
    // Sort the array using custom comparator
    qsort(nums, numsSize, sizeof(int), compare);
    
    // Handle edge case: if first number is 0, return "0"
    if (nums[0] == 0) {
        char* result = malloc(2);
        strcpy(result, "0");
        return result;
    }
    
    // Calculate total length needed
    int totalLen = 0;
    for (int i = 0; i < numsSize; i++) {
        char temp[20];
        sprintf(temp, "%d", nums[i]);
        totalLen += strlen(temp);
    }
    
    // Build result string
    char* result = malloc(totalLen + 1);
    result[0] = '\\0';
    
    for (int i = 0; i < numsSize; i++) {
        char temp[20];
        sprintf(temp, "%d", nums[i]);
        strcat(result, temp);
    }
    
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {10, 2};
    int size1 = 2;
    char* result1 = largestNumber(nums1, size1);
    printf("Test 1: nums = [10,2]\\n");
    printf("Largest number: %s\\n", result1);
    free(result1);
    
    // Test case 2
    int nums2[] = {3, 30, 34, 5, 9};
    int size2 = 5;
    char* result2 = largestNumber(nums2, size2);
    printf("Test 2: nums = [3,30,34,5,9]\\n");
    printf("Largest number: %s\\n", result2);
    free(result2);
    
    return 0;
}`,
          timeComplexity: 'O(n log n * k)',
          spaceComplexity: 'O(n * k)',
          explanation: 'This solution uses qsort with a custom comparison function. The comparison function concatenates two numbers in both orders and compares them as strings to determine the correct order for the largest number.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Custom comparison function
int compareStrings(int a, int b) {
    char str1[50], str2[50];
    sprintf(str1, "%d", a);
    sprintf(str2, "%d", b);
    
    char concat1[100], concat2[100];
    sprintf(concat1, "%s%s", str1, str2);
    sprintf(concat2, "%s%s", str2, str1);
    
    return strcmp(concat2, concat1);
}

// Bubble sort with custom comparison
void bubbleSort(int* nums, int numsSize) {
    for (int i = 0; i < numsSize - 1; i++) {
        for (int j = 0; j < numsSize - i - 1; j++) {
            if (compareStrings(nums[j], nums[j + 1]) < 0) {
                // Swap
                int temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}

char* largestNumber(int* nums, int numsSize) {
    if (numsSize == 0) return "";
    
    // Sort using bubble sort
    bubbleSort(nums, numsSize);
    
    // Handle edge case: if first number is 0, return "0"
    if (nums[0] == 0) {
        char* result = malloc(2);
        strcpy(result, "0");
        return result;
    }
    
    // Build result string
    char* result = malloc(1000); // Fixed size for simplicity
    result[0] = '\\0';
    
    for (int i = 0; i < numsSize; i++) {
        char temp[20];
        sprintf(temp, "%d", nums[i]);
        strcat(result, temp);
    }
    
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {10, 2};
    int size1 = 2;
    char* result1 = largestNumber(nums1, size1);
    printf("Test 1: nums = [10,2]\\n");
    printf("Largest number: %s\\n", result1);
    free(result1);
    
    return 0;
}`,
          timeComplexity: 'O(n² * k)',
          spaceComplexity: 'O(n * k)',
          explanation: 'This solution uses bubble sort with a custom comparison function. It is less efficient than quicksort but demonstrates the same principle of custom string comparison.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Generate all permutations and find the largest
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Convert array to string
void arrayToString(int* nums, int numsSize, char* result) {
    result[0] = '\\0';
    for (int i = 0; i < numsSize; i++) {
        char temp[20];
        sprintf(temp, "%d", nums[i]);
        strcat(result, temp);
    }
}

// Generate permutations and find largest
void permute(int* nums, int numsSize, int start, char* largest) {
    if (start == numsSize - 1) {
        char current[1000];
        arrayToString(nums, numsSize, current);
        if (strcmp(current, largest) > 0) {
            strcpy(largest, current);
        }
        return;
    }
    
    for (int i = start; i < numsSize; i++) {
        swap(&nums[start], &nums[i]);
        permute(nums, numsSize, start + 1, largest);
        swap(&nums[start], &nums[i]); // backtrack
    }
}

char* largestNumber(int* nums, int numsSize) {
    if (numsSize == 0) return "";
    
    // Create a copy of the array
    int* copy = malloc(numsSize * sizeof(int));
    memcpy(copy, nums, numsSize * sizeof(int));
    
    char largest[1000] = "0";
    permute(copy, numsSize, 0, largest);
    
    free(copy);
    
    char* result = malloc(strlen(largest) + 1);
    strcpy(result, largest);
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {10, 2};
    int size1 = 2;
    char* result1 = largestNumber(nums1, size1);
    printf("Test 1: nums = [10,2]\\n");
    printf("Largest number: %s\\n", result1);
    free(result1);
    
    return 0;
}`,
          timeComplexity: 'O(n! * n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution generates all possible permutations of the array and finds the largest one. It is extremely inefficient with factorial time complexity and should only be used for educational purposes.'
        }
      }
    }
  },
  {
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

**Key Concepts:**
- Median is the middle value when data is sorted
- For even length: average of two middle elements
- For odd length: the middle element
- Arrays are already sorted, which is crucial for optimization`,
    difficulty: 'Hard',
    category: ['Array', 'Binary Search', 'Divide and Conquer'],
    input1: 'nums1 = [1,3], nums2 = [2]',
    input2: 'nums1 = [1,2], nums2 = [3,4]',
    explanation: `## Problem Statement

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

**Key Understanding:**
- Both arrays are already sorted in ascending order
- We need to find the median of the combined sorted array
- For odd total length: return the middle element
- For even total length: return average of two middle elements
- Time complexity must be O(log(m+n))

## Examples

### Example 1:
**Input:** nums1 = [1,3], nums2 = [2]  
**Output:** 2.00000  
**Explanation:** 
- Combined sorted array: [1,2,3]
- Total length = 3 (odd)
- Median = middle element = 2
- Visual: [1,2,3] → median = 2

### Example 2:
**Input:** nums1 = [1,2], nums2 = [3,4]  
**Output:** 2.50000  
**Explanation:** 
- Combined sorted array: [1,2,3,4]
- Total length = 4 (even)
- Median = average of middle elements = (2+3)/2 = 2.5
- Visual: [1,2,3,4] → median = (2+3)/2 = 2.5

### Example 3:
**Input:** nums1 = [0,0], nums2 = [0,0]  
**Output:** 0.00000  
**Explanation:** 
- Combined sorted array: [0,0,0,0]
- Total length = 4 (even)
- Median = average of middle elements = (0+0)/2 = 0

### Example 4:
**Input:** nums1 = [], nums2 = [1]  
**Output:** 1.00000  
**Explanation:** 
- Combined sorted array: [1]
- Total length = 1 (odd)
- Median = middle element = 1

## Intuition

The key insight is that we don't need to actually merge the arrays. Instead, we can use binary search to find the correct partition point that divides both arrays into left and right halves.

**Binary Search Approach:**
1. **Partition Concept:** We need to find a partition that divides all elements into left and right halves
2. **Left Half:** Contains smaller elements from both arrays
3. **Right Half:** Contains larger elements from both arrays
4. **Median:** The largest element from left half and smallest from right half

**Why Binary Search Works:**
- We can binary search on the smaller array to find the correct partition
- At each step, we can determine if we need to move left or right
- The partition must satisfy: maxLeftX ≤ minRightY AND maxLeftY ≤ minRightX

## Approach

### Approach 1: Binary Search (Optimal)
**Algorithm:**
1. Ensure nums1 is the smaller array (swap if needed)
2. Binary search on nums1 to find the correct partition
3. For each partition, calculate corresponding partition in nums2
4. Check if the partition is correct (maxLeft ≤ minRight)
5. Return median based on total length (odd/even)

**Key Steps:**
- Calculate partitionX = (low + high) / 2
- Calculate partitionY = (m + n + 1) / 2 - partitionX
- Check if partition is valid
- Adjust search range based on comparison

### Approach 2: Merge and Find (Linear)
**Algorithm:**
1. Merge the two sorted arrays
2. Find median based on total length
3. Return the median value

**Limitations:**
- Time complexity: O(m+n)
- Space complexity: O(m+n)
- Does not meet the O(log(m+n)) requirement

### Approach 3: Two Pointers (Linear)
**Algorithm:**
1. Use two pointers to traverse both arrays
2. Count elements until reaching median position
3. Return median value

**Limitations:**
- Time complexity: O(m+n)
- Space complexity: O(1)
- Does not meet the O(log(m+n)) requirement

## Dry Run

**Example:** nums1 = [1,3], nums2 = [2]

**Step 1:** Ensure nums1 is smaller
- nums1 length = 2, nums2 length = 1
- nums1 is larger, so swap: nums1 = [2], nums2 = [1,3]

**Step 2:** Binary search on nums1
- low = 0, high = 1
- partitionX = 0
- partitionY = (1 + 2 + 1) / 2 - 0 = 2

**Step 3:** Check partition
- maxLeftX = -∞ (no elements)
- minRightX = 2
- maxLeftY = 3 (element at index 1)
- minRightY = ∞ (no elements)

**Step 4:** Check validity
- maxLeftX ≤ minRightY: -∞ ≤ ∞ ✓
- maxLeftY ≤ minRightX: 3 ≤ 2 ✗

**Step 5:** Adjust search
- Move right: low = 1
- partitionX = 1
- partitionY = 1

**Step 6:** Final partition
- maxLeftX = 2
- minRightX = ∞
- maxLeftY = 1
- minRightY = 3

**Step 7:** Check validity
- maxLeftX ≤ minRightY: 2 ≤ 3 ✓
- maxLeftY ≤ minRightX: 1 ≤ ∞ ✓

**Step 8:** Calculate median
- Total length = 3 (odd)
- Median = max(maxLeftX, maxLeftY) = max(2, 1) = 2

## Key Insights

1. **Partition Strategy:** The key is finding the correct partition that divides all elements into two equal halves
2. **Binary Search Efficiency:** We only need to search on the smaller array, making it O(log(min(m,n)))
3. **Boundary Conditions:** Handle edge cases like empty arrays, single elements, and all equal elements
4. **Median Calculation:** Different for odd vs even total lengths
5. **Partition Validation:** Must ensure all elements in left half are ≤ all elements in right half

## Edge Cases

1. **Empty Arrays:** Handle when one or both arrays are empty
2. **Single Elements:** Arrays with only one element each
3. **All Equal Elements:** Arrays with all same values
4. **Different Sizes:** Arrays with significantly different sizes
5. **No Overlap:** Arrays with completely different value ranges
6. **Large Arrays:** Handle arrays with millions of elements efficiently

## Time & Space Complexity

**Approach 1 (Binary Search):**
- Time Complexity: O(log(min(m,n)))
- Space Complexity: O(1)

**Approach 2 (Merge):**
- Time Complexity: O(m+n)
- Space Complexity: O(m+n)

**Approach 3 (Two Pointers):**
- Time Complexity: O(m+n)
- Space Complexity: O(1)`,
    output1: '2.00000',
    output2: '2.50000',
    constraints: '- nums1.length == m\n- nums2.length == n\n- 0 <= m <= 1000\n- 0 <= n <= 1000\n- 1 <= m + n <= 2000\n- -10^6 <= nums1[i], nums2[j] <= 10^6',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // Ensure nums1 is the smaller array
    if (nums1Size > nums2Size) {
        return findMedianSortedArrays(nums2, nums2Size, nums1, nums1Size);
    }
    
    int m = nums1Size;
    int n = nums2Size;
    int low = 0, high = m;
    
    while (low <= high) {
        int partitionX = (low + high) / 2;
        int partitionY = (m + n + 1) / 2 - partitionX;
        
        // Find max and min values for each partition
        int maxLeftX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
        int minRightX = (partitionX == m) ? INT_MAX : nums1[partitionX];
        int maxLeftY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
        int minRightY = (partitionY == n) ? INT_MAX : nums2[partitionY];
        
        // Check if partition is correct
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Found correct partition
            if ((m + n) % 2 == 0) {
                // Even length: average of two middle elements
                int leftMax = (maxLeftX > maxLeftY) ? maxLeftX : maxLeftY;
                int rightMin = (minRightX < minRightY) ? minRightX : minRightY;
                return (leftMax + rightMin) / 2.0;
            } else {
                // Odd length: max of left partition
                return (maxLeftX > maxLeftY) ? maxLeftX : maxLeftY;
            }
        } else if (maxLeftX > minRightY) {
            // Move left in nums1
            high = partitionX - 1;
        } else {
            // Move right in nums1
            low = partitionX + 1;
        }
    }
    
    return 0.0; // Should never reach here
}

int main() {
    // Test case 1
    int nums1[] = {1, 3};
    int nums2[] = {2};
    double result1 = findMedianSortedArrays(nums1, 2, nums2, 1);
    printf("Test 1: nums1 = [1,3], nums2 = [2]\\n");
    printf("Median: %.5f\\n", result1);
    
    // Test case 2
    int nums3[] = {1, 2};
    int nums4[] = {3, 4};
    double result2 = findMedianSortedArrays(nums3, 2, nums4, 2);
    printf("Test 2: nums1 = [1,2], nums2 = [3,4]\\n");
    printf("Median: %.5f\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(log(min(m,n)))',
          spaceComplexity: 'O(1)',
          explanation: 'This optimal solution uses binary search on the smaller array to find the correct partition point. It achieves O(log(min(m,n))) time complexity by leveraging the fact that both arrays are sorted and using the partition concept to find the median without actually merging the arrays.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int* merged = malloc(totalSize * sizeof(int));
    
    int i = 0, j = 0, k = 0;
    
    // Merge the two sorted arrays
    while (i < nums1Size && j < nums2Size) {
        if (nums1[i] <= nums2[j]) {
            merged[k++] = nums1[i++];
        } else {
            merged[k++] = nums2[j++];
        }
    }
    
    // Add remaining elements from nums1
    while (i < nums1Size) {
        merged[k++] = nums1[i++];
    }
    
    // Add remaining elements from nums2
    while (j < nums2Size) {
        merged[k++] = nums2[j++];
    }
    
    // Find median
    double median;
    if (totalSize % 2 == 0) {
        // Even length: average of two middle elements
        median = (merged[totalSize/2 - 1] + merged[totalSize/2]) / 2.0;
    } else {
        // Odd length: middle element
        median = merged[totalSize/2];
    }
    
    free(merged);
    return median;
}

int main() {
    // Test case 1
    int nums1[] = {1, 3};
    int nums2[] = {2};
    double result1 = findMedianSortedArrays(nums1, 2, nums2, 1);
    printf("Test 1: nums1 = [1,3], nums2 = [2]\\n");
    printf("Median: %.5f\\n", result1);
    
    // Test case 2
    int nums3[] = {1, 2};
    int nums4[] = {3, 4};
    double result2 = findMedianSortedArrays(nums3, 2, nums4, 2);
    printf("Test 2: nums1 = [1,2], nums2 = [3,4]\\n");
    printf("Median: %.5f\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(m+n)',
          spaceComplexity: 'O(m+n)',
          explanation: 'This solution merges the two sorted arrays and then finds the median. While it has linear time complexity and does not meet the O(log(m+n)) requirement, it is straightforward and easy to understand.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int* merged = malloc(totalSize * sizeof(int));
    
    // Copy all elements to merged array
    for (int i = 0; i < nums1Size; i++) {
        merged[i] = nums1[i];
    }
    for (int i = 0; i < nums2Size; i++) {
        merged[nums1Size + i] = nums2[i];
    }
    
    // Sort the merged array using bubble sort
    for (int i = 0; i < totalSize - 1; i++) {
        for (int j = 0; j < totalSize - i - 1; j++) {
            if (merged[j] > merged[j + 1]) {
                int temp = merged[j];
                merged[j] = merged[j + 1];
                merged[j + 1] = temp;
            }
        }
    }
    
    // Find median
    double median;
    if (totalSize % 2 == 0) {
        median = (merged[totalSize/2 - 1] + merged[totalSize/2]) / 2.0;
    } else {
        median = merged[totalSize/2];
    }
    
    free(merged);
    return median;
}

int main() {
    // Test case 1
    int nums1[] = {1, 3};
    int nums2[] = {2};
    double result1 = findMedianSortedArrays(nums1, 2, nums2, 1);
    printf("Test 1: nums1 = [1,3], nums2 = [2]\\n");
    printf("Median: %.5f\\n", result1);
    
    return 0;
}`,
          timeComplexity: 'O((m+n)²)',
          spaceComplexity: 'O(m+n)',
          explanation: 'This solution ignores the fact that arrays are already sorted and uses bubble sort to sort the merged array. It has quadratic time complexity and should only be used for educational purposes.'
        }
      }
    }
  },
  {
    id: 'candy',
    title: 'Candy',
    description: `There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

1. Each child must have at least one candy.
2. Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you must give to the children.

**Key Concepts:**
- Each child must get at least 1 candy
- Higher rating = more candies than neighbors
- Need to satisfy both left and right neighbors
- Find minimum total candies needed`,
    difficulty: 'Hard',
    category: ['Array', 'Greedy', 'Dynamic Programming'],
    input1: 'ratings = [1,0,2]',
    input2: 'ratings = [1,2,2]',
    explanation: `## Problem Statement

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

1. Each child must have at least one candy.
2. Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you must give to the children.

**Key Understanding:**
- Each child must receive at least 1 candy
- If a child has a higher rating than their neighbor, they must get more candies
- We need to satisfy both left and right neighbor constraints
- The goal is to minimize the total number of candies distributed

## Examples

### Example 1:
**Input:** ratings = [1,0,2]  
**Output:** 5  
**Explanation:** 
- Child 0 (rating 1): gets 2 candies (higher than child 1)
- Child 1 (rating 0): gets 1 candy (minimum)
- Child 2 (rating 2): gets 2 candies (higher than child 1)
- Total: 2 + 1 + 2 = 5 candies
- Visual: [1,0,2] → [2,1,2] candies

### Example 2:
**Input:** ratings = [1,2,2]  
**Output:** 4  
**Explanation:** 
- Child 0 (rating 1): gets 1 candy (minimum)
- Child 1 (rating 2): gets 2 candies (higher than child 0)
- Child 2 (rating 2): gets 1 candy (same rating as child 1, but no right neighbor)
- Total: 1 + 2 + 1 = 4 candies
- Visual: [1,2,2] → [1,2,1] candies

### Example 3:
**Input:** ratings = [1,3,2,2,1]  
**Output:** 7  
**Explanation:** 
- Child 0 (rating 1): gets 1 candy
- Child 1 (rating 3): gets 3 candies (higher than both neighbors)
- Child 2 (rating 2): gets 2 candies (higher than child 3)
- Child 3 (rating 2): gets 1 candy (same as child 2, but no right neighbor)
- Child 4 (rating 1): gets 1 candy
- Total: 1 + 3 + 2 + 1 + 1 = 8 candies

## Intuition

The key insight is that we need to consider both left-to-right and right-to-left relationships. A child's candy count depends on both their left and right neighbors.

**Two-Pass Approach:**
1. **Left to Right Pass:** Ensure each child gets more candies than their left neighbor if they have a higher rating
2. **Right to Left Pass:** Ensure each child gets more candies than their right neighbor if they have a higher rating
3. **Take Maximum:** For each child, take the maximum of the two passes to satisfy both constraints

**Why This Works:**
- The left-to-right pass handles increasing sequences
- The right-to-left pass handles decreasing sequences
- Taking the maximum ensures both neighbor constraints are satisfied
- This guarantees the minimum total candies while satisfying all requirements

## Approach

### Approach 1: Two-Pass Greedy (Optimal)
**Algorithm:**
1. Initialize all children with 1 candy
2. Left to right pass: if rating[i] > rating[i-1], then candy[i] = candy[i-1] + 1
3. Right to left pass: if rating[i] > rating[i+1], then candy[i] = max(candy[i], candy[i+1] + 1)
4. Sum all candies and return

**Key Steps:**
- First pass ensures left neighbor constraint
- Second pass ensures right neighbor constraint
- Taking maximum ensures both constraints are satisfied

### Approach 2: Peak-Valley Analysis
**Algorithm:**
1. Find all peaks (local maxima) in the ratings
2. For each peak, calculate candies needed for the increasing and decreasing sequences
3. Sum all candies

**Complexity:**
- Time: O(n)
- Space: O(1)
- More complex to implement

### Approach 3: Dynamic Programming
**Algorithm:**
1. Use DP array to store minimum candies for each position
2. For each position, consider both left and right dependencies
3. Use memoization to avoid recalculations

**Complexity:**
- Time: O(n)
- Space: O(n)
- More complex than two-pass approach

## Dry Run

**Example:** ratings = [1,0,2]

**Step 1:** Initialize all with 1 candy
- candies = [1,1,1]

**Step 2:** Left to right pass
- i=0: no left neighbor, keep 1
- i=1: rating[1] < rating[0], keep 1
- i=2: rating[2] > rating[1], set candies[2] = candies[1] + 1 = 2
- candies = [1,1,2]

**Step 3:** Right to left pass
- i=2: no right neighbor, keep 2
- i=1: rating[1] < rating[2], keep 1
- i=0: rating[0] > rating[1], set candies[0] = max(1, candies[1] + 1) = max(1, 2) = 2
- candies = [2,1,2]

**Step 4:** Calculate total
- Total = 2 + 1 + 2 = 5

## Key Insights

1. **Two-Pass Necessity:** A single pass is insufficient because a child's candy count depends on both neighbors
2. **Greedy Nature:** At each step, we give the minimum candies needed to satisfy the current constraint
3. **Peak Handling:** Peaks (local maxima) require the most candies
4. **Plateau Handling:** Children with same ratings can have different candy counts based on their neighbors
5. **Boundary Conditions:** First and last children only have one neighbor to consider

## Edge Cases

1. **Single Child:** Only one child, gets 1 candy
2. **All Same Ratings:** All children get 1 candy
3. **Strictly Increasing:** Each child gets one more candy than the previous
4. **Strictly Decreasing:** Each child gets one more candy than the next
5. **Peaks and Valleys:** Complex patterns with multiple peaks
6. **Large Arrays:** Handle arrays with thousands of children efficiently

## Time & Space Complexity

**Approach 1 (Two-Pass Greedy):**
- Time Complexity: O(n)
- Space Complexity: O(n)

**Approach 2 (Peak-Valley):**
- Time Complexity: O(n)
- Space Complexity: O(1)

**Approach 3 (Dynamic Programming):**
- Time Complexity: O(n)
- Space Complexity: O(n)`,
    output1: '5',
    output2: '4',
    constraints: '- n == ratings.length\n- 1 <= n <= 2 * 10^4\n- 0 <= ratings[i] <= 2 * 10^4',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

int candy(int* ratings, int ratingsSize) {
    if (ratingsSize == 0) return 0;
    
    int* candies = malloc(ratingsSize * sizeof(int));
    
    // Initialize all children with 1 candy
    for (int i = 0; i < ratingsSize; i++) {
        candies[i] = 1;
    }
    
    // Left to right pass
    for (int i = 1; i < ratingsSize; i++) {
        if (ratings[i] > ratings[i-1]) {
            candies[i] = candies[i-1] + 1;
        }
    }
    
    // Right to left pass
    for (int i = ratingsSize - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) {
            candies[i] = (candies[i] > candies[i+1] + 1) ? candies[i] : candies[i+1] + 1;
        }
    }
    
    // Calculate total candies
    int total = 0;
    for (int i = 0; i < ratingsSize; i++) {
        total += candies[i];
    }
    
    free(candies);
    return total;
}

int main() {
    // Test case 1
    int ratings1[] = {1, 0, 2};
    int result1 = candy(ratings1, 3);
    printf("Test 1: ratings = [1,0,2]\\n");
    printf("Minimum candies: %d\\n", result1);
    
    // Test case 2
    int ratings2[] = {1, 2, 2};
    int result2 = candy(ratings2, 3);
    printf("Test 2: ratings = [1,2,2]\\n");
    printf("Minimum candies: %d\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This optimal solution uses a two-pass greedy approach. The first pass ensures each child gets more candies than their left neighbor if they have a higher rating. The second pass ensures each child gets more candies than their right neighbor if they have a higher rating. Taking the maximum of both passes ensures all constraints are satisfied with minimum total candies.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int candy(int* ratings, int ratingsSize) {
    if (ratingsSize == 0) return 0;
    
    int* candies = malloc(ratingsSize * sizeof(int));
    
    // Initialize all children with 1 candy
    for (int i = 0; i < ratingsSize; i++) {
        candies[i] = 1;
    }
    
    // Single pass approach - less optimal
    for (int i = 1; i < ratingsSize; i++) {
        if (ratings[i] > ratings[i-1]) {
            candies[i] = candies[i-1] + 1;
        }
    }
    
    // Handle decreasing sequences
    for (int i = ratingsSize - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]) {
            candies[i] = candies[i+1] + 1;
        }
    }
    
    // Calculate total candies
    int total = 0;
    for (int i = 0; i < ratingsSize; i++) {
        total += candies[i];
    }
    
    free(candies);
    return total;
}

int main() {
    // Test case 1
    int ratings1[] = {1, 0, 2};
    int result1 = candy(ratings1, 3);
    printf("Test 1: ratings = [1,0,2]\\n");
    printf("Minimum candies: %d\\n", result1);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution also uses a two-pass approach but with slightly different logic. It first handles increasing sequences, then handles decreasing sequences by ensuring each child gets more candies than their right neighbor if needed.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int candy(int* ratings, int ratingsSize) {
    if (ratingsSize == 0) return 0;
    
    int* candies = malloc(ratingsSize * sizeof(int));
    
    // Initialize all children with 1 candy
    for (int i = 0; i < ratingsSize; i++) {
        candies[i] = 1;
    }
    
    int changed = 1;
    // Keep iterating until no changes are made
    while (changed) {
        changed = 0;
        for (int i = 0; i < ratingsSize; i++) {
            // Check left neighbor
            if (i > 0 && ratings[i] > ratings[i-1] && candies[i] <= candies[i-1]) {
                candies[i] = candies[i-1] + 1;
                changed = 1;
            }
            // Check right neighbor
            if (i < ratingsSize - 1 && ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]) {
                candies[i] = candies[i+1] + 1;
                changed = 1;
            }
        }
    }
    
    // Calculate total candies
    int total = 0;
    for (int i = 0; i < ratingsSize; i++) {
        total += candies[i];
    }
    
    free(candies);
    return total;
}

int main() {
    // Test case 1
    int ratings1[] = {1, 0, 2};
    int result1 = candy(ratings1, 3);
    printf("Test 1: ratings = [1,0,2]\\n");
    printf("Minimum candies: %d\\n", result1);
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses an iterative approach that keeps checking and updating candy counts until no changes are needed. While it works correctly, it has quadratic time complexity in the worst case and is much less efficient than the two-pass approach.'
        }
      }
    }
  }
];

export default allAccentureQuestions;
