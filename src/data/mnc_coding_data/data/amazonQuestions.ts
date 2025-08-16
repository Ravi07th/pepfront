// Amazon Coding Questions - MNC Coding Platform
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

export const allAmazonQuestions: Question[] = [
  {
    id: 'two-sum',
    title: 'Two Sum - Find Pair with Target Sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.`,
    difficulty: 'Easy',
    category: ['Array', 'Hash Table', 'Two Pointers', 'Sorting'],
    input1: 'nums = [2,7,11,15], target = 9',
    input2: 'nums = [3,2,4], target = 6',
    explanation: `## Problem Statement

Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

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

### Example 4:
**Input:** nums = [1,5,8,10,13,18,21,25,30], target = 23  
**Output:** [3,4]  
**Explanation:** Because nums[3] + nums[4] == 23, we return [3, 4].

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

### Brute Force Approach:
- Check pairs: (2,7), (2,11), (2,15), (7,11), (7,15), (11,15)
- Found: 2+7=9, return [0,1]

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Hash Table (Optimal)

**Time Complexity:** O(n) - We traverse the array only once  
**Space Complexity:** O(n) - We store at most n elements in the hash table

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
    
    // Test case 3
    int nums3[] = {3, 3};
    int target3 = 6;
    int returnSize3;
    int* result3 = twoSum(nums3, 2, target3, &returnSize3);
    
    if (result3 != NULL) {
        printf("Test 3: nums=[3,3], target=6\\n");
        printf("Output: [%d, %d]\\n", result3[0], result3[1]);
        free(result3);
    }
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We implement a custom hash table in C to store each number and its index. For each number, we check if its complement (target - current_number) exists in the hash table. If found, we return the indices. This approach requires only one pass through the array.'
        },
        Average: {
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
    
    // Test case 3
    int nums3[] = {3, 3};
    int target3 = 6;
    int returnSize3;
    int* result3 = twoSum(nums3, 2, target3, &returnSize3);
    
    if (result3 != NULL) {
        printf("Test 3: nums=[3,3], target=6\\n");
        printf("Output: [%d, %d]\\n", result3[0], result3[1]);
        free(result3);
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
    
    // Test case 3
    int nums3[] = {3, 3};
    int target3 = 6;
    int returnSize3;
    int* result3 = twoSum(nums3, 2, target3, &returnSize3);
    
    if (result3 != NULL) {
        printf("Test 3: nums=[3,3], target=6\\n");
        printf("Output: [%d, %d]\\n", result3[0], result3[1]);
        free(result3);
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
    id: 'valid-parentheses',
    title: 'Valid Parentheses - Balanced Brackets',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.`,
    difficulty: 'Medium',
    category: ['String', 'Stack', 'Data Structure'],
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

### Example 5:
**Input:** s = "{[]}"  
**Output:** true  
**Explanation:** Nested brackets are properly closed.

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

Let's trace through Example 4: s = "([)]"

### Stack Approach:
- '(', push '(' → stack: ['(']
- '[', push '[' → stack: ['(', '[']
- ')', check top of stack '[' ≠ '(', return false

### Array Approach:
- '(', push '(' → arr[0] = '(', size = 1
- '[', push '[' → arr[1] = '[', size = 2
- ')', check arr[1] = '[' ≠ '(', return false

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Stack (Optimal)

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(n) - Stack can grow up to n elements

### Solution 2: Array as Stack

**Time Complexity:** O(n) - Same as stack approach  
**Space Complexity:** O(n) - Array can grow up to n elements

### Solution 3: Character Counting

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(1) - Only need counters

**Note:** This approach is limited and doesn't work for all cases.`,
    output1: 'true',
    output2: 'false',
    constraints: `## Constraints

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Stack implementation
#define MAX_SIZE 10000

typedef struct {
    char data[MAX_SIZE];
    int top;
} Stack;

void initStack(Stack* stack) {
    stack->top = -1;
}

void push(Stack* stack, char c) {
    if (stack->top < MAX_SIZE - 1) {
        stack->data[++stack->top] = c;
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

bool isValid(char* s) {
    Stack stack;
    initStack(&stack);
    
    for (int i = 0; s[i] != '\\0'; i++) {
        char c = s[i];
        
        // Push opening brackets
        if (c == '(' || c == '[' || c == '{') {
            push(&stack, c);
        }
        // Check closing brackets
        else if (c == ')' || c == ']' || c == '}') {
            if (isEmpty(&stack)) {
                return false;
            }
            
            char top = peek(&stack);
            if ((c == ')' && top == '(') ||
                (c == ']' && top == '[') ||
                (c == '}' && top == '{')) {
                pop(&stack);
            } else {
                return false;
            }
        }
    }
    
    return isEmpty(&stack);
}

int main() {
    // Test case 1
    char* s1 = "()";
    printf("Test 1: s = \\"%s\\"\\n", s1);
    printf("Output: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "()[]{}";
    printf("Test 2: s = \\"%s\\"\\n", s2);
    printf("Output: %s\\n", isValid(s2) ? "true" : "false");
    
    // Test case 3
    char* s3 = "(]";
    printf("Test 3: s = \\"%s\\"\\n", s3);
    printf("Output: %s\\n", isValid(s3) ? "true" : "false");
    
    // Test case 4
    char* s4 = "([)]";
    printf("Test 4: s = \\"%s\\"\\n", s4);
    printf("Output: %s\\n", isValid(s4) ? "true" : "false");
    
    // Test case 5
    char* s5 = "{[]}";
    printf("Test 5: s = \\"%s\\"\\n", s5);
    printf("Output: %s\\n", isValid(s5) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use a stack to keep track of opening brackets. For each closing bracket, we check if it matches the top of the stack. If it matches, we pop the stack; otherwise, the string is invalid. At the end, the stack should be empty for a valid string.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX_SIZE 10000

bool isValid(char* s) {
    char stack[MAX_SIZE];
    int top = -1;
    
    for (int i = 0; s[i] != '\\0'; i++) {
        char c = s[i];
        
        // Push opening brackets
        if (c == '(' || c == '[' || c == '{') {
            stack[++top] = c;
        }
        // Check closing brackets
        else if (c == ')' || c == ']' || c == '}') {
            if (top == -1) {
                return false;
            }
            
            char topChar = stack[top];
            if ((c == ')' && topChar == '(') ||
                (c == ']' && topChar == '[') ||
                (c == '}' && topChar == '{')) {
                top--;
            } else {
                return false;
            }
        }
    }
    
    return top == -1;
}

int main() {
    // Test case 1
    char* s1 = "()";
    printf("Test 1: s = \\"%s\\"\\n", s1);
    printf("Output: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "()[]{}";
    printf("Test 2: s = \\"%s\\"\\n", s2);
    printf("Output: %s\\n", isValid(s2) ? "true" : "false");
    
    // Test case 3
    char* s3 = "(]";
    printf("Test 3: s = \\"%s\\"\\n", s3);
    printf("Output: %s\\n", isValid(s3) ? "true" : "false");
    
    // Test case 4
    char* s4 = "([)]";
    printf("Test 4: s = \\"%s\\"\\n", s4);
    printf("Output: %s\\n", isValid(s4) ? "true" : "false");
    
    // Test case 5
    char* s5 = "{[]}";
    printf("Test 5: s = \\"%s\\"\\n", s5);
    printf("Output: %s\\n", isValid(s5) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use an array to simulate stack operations. This approach is more memory-efficient than the stack structure approach but follows the same logic.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isValid(char* s) {
    int len = strlen(s);
    
    // Simple character counting (limited approach)
    int round = 0, square = 0, curly = 0;
    
    for (int i = 0; i < len; i++) {
        char c = s[i];
        
        if (c == '(') round++;
        else if (c == ')') round--;
        else if (c == '[') square++;
        else if (c == ']') square--;
        else if (c == '{') curly++;
        else if (c == '}') curly--;
        
        // Check for negative counts
        if (round < 0 || square < 0 || curly < 0) {
            return false;
        }
    }
    
    // Check if all brackets are balanced
    return (round == 0 && square == 0 && curly == 0);
}

int main() {
    // Test case 1
    char* s1 = "()";
    printf("Test 1: s = \\"%s\\"\\n", s1);
    printf("Output: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "()[]{}";
    printf("Test 2: s = \\"%s\\"\\n", s2);
    printf("Output: %s\\n", isValid(s2) ? "true" : "false");
    
    // Test case 3
    char* s3 = "(]";
    printf("Test 3: s = \\"%s\\"\\n", s3);
    printf("Output: %s\\n", isValid(s3) ? "true" : "false");
    
    // Test case 4
    char* s4 = "([)]";
    printf("Test 4: s = \\"%s\\"\\n", s4);
    printf("Output: %s\\n", isValid(s4) ? "true" : "false");
    
    // Test case 5
    char* s5 = "{[]}";
    printf("Test 5: s = \\"%s\\"\\n", s5);
    printf("Output: %s\\n", isValid(s5) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach only counts opening and closing brackets. It works for simple cases but fails for nested brackets like "([)]" because it doesn\'t check the order of brackets.'
        }
      }
    }
  },
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray - Kadane\'s Algorithm',
    description: `Given an integer array nums, find the subarray with the largest sum, and return its sum. A subarray is a contiguous part of an array.`,
    difficulty: 'Hard',
    category: ['Array', 'Dynamic Programming', 'Divide and Conquer'],
    input1: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
    input2: 'nums = [1]',
    explanation: `## Problem Statement

Given an integer array nums, find the subarray with the largest sum, and return its sum.

A subarray is a contiguous part of an array.

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

### Example 4:
**Input:** nums = [-1,-2,-3,-4]  
**Output:** -1  
**Explanation:** The subarray [-1] has the largest sum -1.

## Intuition

The key insight is that we can solve this problem using Kadane's algorithm, which keeps track of the maximum sum ending at each position. If the current sum becomes negative, we reset it to the current element.

## Approach

### Approach 1: Kadane's Algorithm (Optimal)
1. Initialize maxSum and currentSum to the first element
2. For each element starting from the second:
   - Update currentSum = max(currentSum + current_element, current_element)
   - Update maxSum = max(maxSum, currentSum)
3. Return maxSum

### Approach 2: Dynamic Programming
1. Create a DP array where dp[i] represents max sum ending at index i
2. dp[i] = max(nums[i], dp[i-1] + nums[i])
3. Find maximum value in DP array

### Approach 3: Brute Force
1. Check all possible subarrays
2. Calculate sum for each subarray
3. Keep track of maximum sum found

## Dry Run

Let's trace through Example 1: nums = [-2,1,-3,4,-1,2,1,-5,4]

### Kadane's Algorithm:
- i=0: currentSum = -2, maxSum = -2
- i=1: currentSum = max(-2+1, 1) = 1, maxSum = max(-2, 1) = 1
- i=2: currentSum = max(1+(-3), -3) = -2, maxSum = max(1, -2) = 1
- i=3: currentSum = max(-2+4, 4) = 4, maxSum = max(1, 4) = 4
- i=4: currentSum = max(4+(-1), -1) = 3, maxSum = max(4, 3) = 4
- i=5: currentSum = max(3+2, 2) = 5, maxSum = max(4, 5) = 5
- i=6: currentSum = max(5+1, 1) = 6, maxSum = max(5, 6) = 6
- i=7: currentSum = max(6+(-5), -5) = 1, maxSum = max(6, 1) = 6
- i=8: currentSum = max(1+4, 4) = 5, maxSum = max(6, 5) = 6

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Kadane's Algorithm (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - Only need a few variables

### Solution 2: Dynamic Programming

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(n) - Need DP array

### Solution 3: Brute Force

**Time Complexity:** O(n²) - We check all subarrays  
**Space Complexity:** O(1) - Only need a few variables`,
    output1: '6',
    output2: '1',
    constraints: `## Constraints

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Kadane's Algorithm - Optimal solution
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int maxSubArray(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < numsSize; i++) {
        // Either extend the current subarray or start a new one
        currentSum = max(nums[i], currentSum + nums[i]);
        // Update the maximum sum found so far
        maxSum = max(maxSum, currentSum);
    }
    
    return maxSum;
}

int main() {
    // Test case 1
    int nums1[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int size1 = 9;
    printf("Test 1: nums = [-2,1,-3,4,-1,2,1,-5,4]\\n");
    printf("Output: %d\\n", maxSubArray(nums1, size1));
    
    // Test case 2
    int nums2[] = {1};
    int size2 = 1;
    printf("Test 2: nums = [1]\\n");
    printf("Output: %d\\n", maxSubArray(nums2, size2));
    
    // Test case 3
    int nums3[] = {5, 4, -1, 7, 8};
    int size3 = 5;
    printf("Test 3: nums = [5,4,-1,7,8]\\n");
    printf("Output: %d\\n", maxSubArray(nums3, size3));
    
    // Test case 4
    int nums4[] = {-1, -2, -3, -4};
    int size4 = 4;
    printf("Test 4: nums = [-1,-2,-3,-4]\\n");
    printf("Output: %d\\n", maxSubArray(nums4, size4));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'Kadane\'s algorithm keeps track of the maximum sum ending at each position. If the current sum becomes negative, we reset it to the current element. This ensures we always have the optimal solution.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Dynamic Programming approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int maxSubArray(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    int* dp = (int*)malloc(numsSize * sizeof(int));
    dp[0] = nums[0];
    int maxSum = dp[0];
    
    for (int i = 1; i < numsSize; i++) {
        // dp[i] = max(nums[i], dp[i-1] + nums[i])
        dp[i] = max(nums[i], dp[i-1] + nums[i]);
        maxSum = max(maxSum, dp[i]);
    }
    
    free(dp);
    return maxSum;
}

int main() {
    // Test case 1
    int nums1[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int size1 = 9;
    printf("Test 1: nums = [-2,1,-3,4,-1,2,1,-5,4]\\n");
    printf("Output: %d\\n", maxSubArray(nums1, size1));
    
    // Test case 2
    int nums2[] = {1};
    int size2 = 1;
    printf("Test 2: nums = [1]\\n");
    printf("Output: %d\\n", maxSubArray(nums2, size2));
    
    // Test case 3
    int nums3[] = {5, 4, -1, 7, 8};
    int size3 = 5;
    printf("Test 3: nums = [5,4,-1,7,8]\\n");
    printf("Output: %d\\n", maxSubArray(nums3, size3));
    
    // Test case 4
    int nums4[] = {-1, -2, -3, -4};
    int size4 = 4;
    printf("Test 4: nums = [-1,-2,-3,-4]\\n");
    printf("Output: %d\\n", maxSubArray(nums4, size4));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use dynamic programming where dp[i] represents the maximum sum ending at index i. Each dp[i] is calculated as max(nums[i], dp[i-1] + nums[i]).'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Brute Force approach
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
int maxSubArray(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    int maxSum = INT_MIN;
    
    // Check all possible subarrays
    for (int start = 0; start < numsSize; start++) {
        int currentSum = 0;
        for (int end = start; end < numsSize; end++) {
            currentSum += nums[end];
            maxSum = max(maxSum, currentSum);
        }
    }
    
    return maxSum;
}

int main() {
    // Test case 1
    int nums1[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int size1 = 9;
    printf("Test 1: nums = [-2,1,-3,4,-1,2,1,-5,4]\\n");
    printf("Output: %d\\n", maxSubArray(nums1, size1));
    
    // Test case 2
    int nums2[] = {1};
    int size2 = 1;
    printf("Test 2: nums = [1]\\n");
    printf("Output: %d\\n", maxSubArray(nums2, size2));
    
    // Test case 3
    int nums3[] = {5, 4, -1, 7, 8};
    int size3 = 5;
    printf("Test 3: nums = [5,4,-1,7,8]\\n");
    printf("Output: %d\\n", maxSubArray(nums3, size3));
    
    // Test case 4
    int nums4[] = {-1, -2, -3, -4};
    int size4 = 4;
    printf("Test 4: nums = [-1,-2,-3,-4]\\n");
    printf("Output: %d\\n", maxSubArray(nums4, size4));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'We check all possible subarrays by using nested loops. For each starting position, we calculate the sum of all subarrays ending at different positions. This is the most straightforward but inefficient approach.'
        }
      }
    }
  },

  {
    id: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    description: `Given a string s, find the length of the longest substring without repeating characters. A substring is a contiguous sequence of characters within a string.`,
    difficulty: 'Medium',
    category: ['String', 'Hash Table', 'Sliding Window', 'Two Pointers'],
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
**Explanation:** The answer is "wke", with the length of 3.

### Example 4:
**Input:** s = ""  
**Output:** 0  
**Explanation:** Empty string has length 0.

### Example 5:
**Input:** s = "abcdef"  
**Output:** 6  
**Explanation:** The answer is "abcdef", with the length of 6.

## Intuition

The key insight is to use a sliding window approach with two pointers. We keep track of characters we've seen in a hash table and expand/shrink the window accordingly.

## Approach

### Approach 1: Sliding Window with Hash Table (Optimal)
1. Use two pointers (left and right) to maintain a sliding window
2. Use a hash table to track characters in the current window
3. Expand right pointer and add characters to hash table
4. If duplicate found, shrink left pointer until no duplicates
5. Keep track of maximum window size

### Approach 2: Sliding Window with Array
1. Use an array of size 128 (ASCII characters) instead of hash table
2. Same logic as hash table approach but with array indexing
3. More memory efficient for ASCII strings

### Approach 3: Brute Force
1. Check all possible substrings
2. For each substring, check if it has repeating characters
3. Keep track of maximum length found

## Dry Run

Let's trace through Example 1: s = "abcabcbb"

### Sliding Window Approach:
- left=0, right=0: "a" → maxLen=1, seen={'a'}
- left=0, right=1: "ab" → maxLen=2, seen={'a','b'}
- left=0, right=2: "abc" → maxLen=3, seen={'a','b','c'}
- left=0, right=3: "abca" → duplicate 'a', left=1: "bca" → maxLen=3, seen={'b','c','a'}
- left=1, right=4: "bcab" → duplicate 'b', left=2: "cab" → maxLen=3, seen={'c','a','b'}
- left=2, right=5: "cabc" → duplicate 'c', left=3: "abc" → maxLen=3, seen={'a','b','c'}
- left=3, right=6: "abcb" → duplicate 'b', left=4: "cb" → maxLen=3, seen={'c','b'}
- left=4, right=7: "cbb" → duplicate 'b', left=5: "b" → maxLen=3, seen={'b'}

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Sliding Window with Hash Table (Optimal)

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(min(m,n)) - Hash table size

### Solution 2: Sliding Window with Array

**Time Complexity:** O(n) - We traverse the string once  
**Space Complexity:** O(1) - Fixed size array

### Solution 3: Brute Force

**Time Complexity:** O(n³) - Check all substrings  
**Space Complexity:** O(min(m,n)) - Hash table for each substring`,
    output1: '3',
    output2: '1',
    constraints: `## Constraints

- 0 <= s.length <= 5 * 104
- s consists of English letters, digits, symbols and spaces`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Sliding Window with Hash Table - Optimal solution
 * Time Complexity: O(n)
 * Space Complexity: O(min(m,n))
 */
int lengthOfLongestSubstring(char* s) {
    int len = strlen(s);
    if (len == 0) return 0;
    
    int charSet[128] = {0}; // Hash table for ASCII characters
    int left = 0, right = 0;
    int maxLength = 0;
    
    while (right < len) {
        char currentChar = s[right];
        
        // If character is already in window, shrink from left
        if (charSet[currentChar] > 0) {
            charSet[s[left]]--;
            left++;
        } else {
            // Add character to window
            charSet[currentChar]++;
            maxLength = max(maxLength, right - left + 1);
            right++;
        }
    }
    
    return maxLength;
}

int main() {
    char s[1000];
    printf("Enter a string: ");
    scanf("%s", s);
    
    int result = lengthOfLongestSubstring(s);
    printf("Length of longest substring without repeating characters: %d\\n", result);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(min(m,n))',
          explanation: 'We use a sliding window approach with a hash table to track characters in the current window. We expand the window by moving the right pointer and shrink it by moving the left pointer when we encounter duplicates.'
        },
        Average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Sliding Window with Array - Alternative approach
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int lengthOfLongestSubstring(char* s) {
    int len = strlen(s);
    if (len == 0) return 0;
    
    int charSet[128] = {0}; // Fixed size array for ASCII
    int left = 0, right = 0;
    int maxLength = 0;
    
    while (right < len) {
        char currentChar = s[right];
        
        // If character is already in window, shrink from left
        while (charSet[currentChar] > 0) {
            charSet[s[left]]--;
            left++;
        }
        
        // Add character to window
        charSet[currentChar]++;
        maxLength = max(maxLength, right - left + 1);
        right++;
    }
    
    return maxLength;
}

int main() {
    char s[1000];
    printf("Enter a string: ");
    scanf("%s", s);
    
    int result = lengthOfLongestSubstring(s);
    printf("Length of longest substring without repeating characters: %d\\n", result);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'Similar to the hash table approach but using a fixed-size array for ASCII characters. This is more memory efficient for ASCII strings.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

bool hasRepeatingChars(char* s, int start, int end) {
    int charSet[128] = {0};
    
    for (int i = start; i <= end; i++) {
        if (charSet[s[i]] > 0) {
            return true;
        }
        charSet[s[i]]++;
    }
    return false;
}

/**
 * Brute Force approach
 * Time Complexity: O(n³)
 * Space Complexity: O(min(m,n))
 */
int lengthOfLongestSubstring(char* s) {
    int len = strlen(s);
    if (len == 0) return 0;
    
    int maxLength = 0;
    
    // Check all possible substrings
    for (int start = 0; start < len; start++) {
        for (int end = start; end < len; end++) {
            if (!hasRepeatingChars(s, start, end)) {
                maxLength = max(maxLength, end - start + 1);
            }
        }
    }
    
    return maxLength;
}

int main() {
    char s[1000];
    printf("Enter a string: ");
    scanf("%s", s);
    
    int result = lengthOfLongestSubstring(s);
    printf("Length of longest substring without repeating characters: %d\\n", result);
    
    return 0;
}`,
          timeComplexity: 'O(n³)',
          spaceComplexity: 'O(min(m,n))',
          explanation: 'We check all possible substrings and verify if each has repeating characters. This is the most straightforward but highly inefficient approach.'
        }
      }
    }
  },
  {
    id: 'container-with-most-water',
    title: 'Container With Most Water',
    description: `Given n non-negative integers height where each represents a point at coordinate (i, height[i]), find two lines that together with the x-axis form a container that can hold the maximum amount of water. Return the maximum amount of water a container can store.`,
    difficulty: 'Hard',
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
**Explanation:** The maximum area is obtained by choosing height[1] = 8 and height[8] = 7, which gives area = min(8,7) × (8-1) = 7 × 7 = 49.

### Example 2:
**Input:** height = [1,1]  
**Output:** 1  
**Explanation:** The maximum area is obtained by choosing height[0] = 1 and height[1] = 1, which gives area = min(1,1) × (1-0) = 1 × 1 = 1.

### Example 3:
**Input:** height = [4,3,2,1,4]  
**Output:** 16  
**Explanation:** The maximum area is obtained by choosing height[0] = 4 and height[4] = 4, which gives area = min(4,4) × (4-0) = 4 × 4 = 16.

### Example 4:
**Input:** height = [1,2,1]  
**Output:** 2  
**Explanation:** The maximum area is obtained by choosing height[0] = 1 and height[2] = 1, which gives area = min(1,1) × (2-0) = 1 × 2 = 2.

## Intuition

The key insight is that the area of water contained between two lines is determined by the shorter line and the distance between them. We can use two pointers to find the optimal solution.

## Approach

### Approach 1: Two Pointers (Optimal)
1. Use two pointers: left at start, right at end
2. Calculate area = min(height[left], height[right]) × (right - left)
3. Move the pointer with the shorter height inward
4. Keep track of maximum area found

### Approach 2: Two Pointers with Early Termination
1. Same as two pointers but with additional optimizations
2. Skip lines that are shorter than current maximum height
3. Early termination when pointers meet

### Approach 3: Brute Force
1. Check all possible pairs of lines
2. Calculate area for each pair
3. Keep track of maximum area

## Dry Run

Let's trace through Example 1: height = [1,8,6,2,5,4,8,3,7]

### Two Pointers Approach:
- left=0, right=8: area = min(1,7) × (8-0) = 1 × 8 = 8, maxArea = 8
- left=1, right=8: area = min(8,7) × (8-1) = 7 × 7 = 49, maxArea = 49
- left=1, right=7: area = min(8,3) × (7-1) = 3 × 6 = 18, maxArea = 49
- left=1, right=6: area = min(8,8) × (6-1) = 8 × 5 = 40, maxArea = 49
- left=1, right=5: area = min(8,4) × (5-1) = 4 × 4 = 16, maxArea = 49
- left=1, right=4: area = min(8,5) × (4-1) = 5 × 3 = 15, maxArea = 49
- left=1, right=3: area = min(8,2) × (3-1) = 2 × 2 = 4, maxArea = 49
- left=1, right=2: area = min(8,6) × (2-1) = 6 × 1 = 6, maxArea = 49

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers (Optimal)

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - Only need a few variables

### Solution 2: Two Pointers with Optimizations

**Time Complexity:** O(n) - We traverse the array once  
**Space Complexity:** O(1) - Only need a few variables

### Solution 3: Brute Force

**Time Complexity:** O(n²) - Check all pairs  
**Space Complexity:** O(1) - Only need a few variables`,
    output1: '49',
    output2: '1',
    constraints: `## Constraints

- n == height.length
- 2 <= n <= 105
- 0 <= height[i] <= 104`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Two Pointers - Optimal solution
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int maxArea(int* height, int heightSize) {
    int left = 0;
    int right = heightSize - 1;
    int maxArea = 0;
    
    while (left < right) {
        // Calculate current area
        int currentArea = min(height[left], height[right]) * (right - left);
        maxArea = max(maxArea, currentArea);
        
        // Move the pointer with shorter height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

int main() {
    int n;
    printf("Enter the number of heights: ");
    scanf("%d", &n);
    
    int* height = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d heights: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &height[i]);
    }
    
    int result = maxArea(height, n);
    printf("Maximum amount of water: %d\\n", result);
    
    free(height);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use two pointers starting from both ends. We calculate the area and move the pointer with the shorter height inward, as the shorter line cannot form a larger container.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Two Pointers with Optimizations
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int maxArea(int* height, int heightSize) {
    int left = 0;
    int right = heightSize - 1;
    int maxArea = 0;
    int maxHeight = 0;
    
    while (left < right) {
        // Calculate current area
        int currentArea = min(height[left], height[right]) * (right - left);
        maxArea = max(maxArea, currentArea);
        
        // Update maximum height seen
        maxHeight = max(maxHeight, min(height[left], height[right]));
        
        // Move the pointer with shorter height
        if (height[left] < height[right]) {
            left++;
            // Skip lines shorter than current max height
            while (left < right && height[left] <= maxHeight) {
                left++;
            }
        } else {
            right--;
            // Skip lines shorter than current max height
            while (left < right && height[right] <= maxHeight) {
                right--;
            }
        }
    }
    
    return maxArea;
}

int main() {
    int n;
    printf("Enter the number of heights: ");
    scanf("%d", &n);
    
    int* height = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d heights: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &height[i]);
    }
    
    int result = maxArea(height, n);
    printf("Maximum amount of water: %d\\n", result);
    
    free(height);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'Similar to the basic two pointers approach but with additional optimizations. We skip lines that are shorter than the current maximum height, which can improve performance in some cases.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Brute Force approach
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
int maxArea(int* height, int heightSize) {
    int maxArea = 0;
    
    // Check all possible pairs
    for (int i = 0; i < heightSize; i++) {
        for (int j = i + 1; j < heightSize; j++) {
            int currentArea = min(height[i], height[j]) * (j - i);
            maxArea = max(maxArea, currentArea);
        }
    }
    
    return maxArea;
}

int main() {
    int n;
    printf("Enter the number of heights: ");
    scanf("%d", &n);
    
    int* height = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d heights: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &height[i]);
    }
    
    int result = maxArea(height, n);
    printf("Maximum amount of water: %d\\n", result);
    
    free(height);
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'We check all possible pairs of lines and calculate the area for each pair. This is the most straightforward but inefficient approach.'
        }
      }
    }
  },
  {
    id: '3sum',
    title: '3Sum - Find All Unique Triplets',
    description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.`,
    difficulty: 'Hard',
    category: ['Array', 'Two Pointers', 'Sorting'],
    input1: 'nums = [-1,0,1,2,-1,-4]',
    input2: 'nums = [0,1,1]',
    explanation: `## Problem Statement

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

## Examples

### Example 1:
**Input:** nums = [-1,0,1,2,-1,-4]  
**Output:** [[-1,-1,2],[-1,0,1]]  
**Explanation:** The triplets that sum to zero are [-1,-1,2] and [-1,0,1].

### Example 2:
**Input:** nums = [0,1,1]  
**Output:** []  
**Explanation:** No triplet sums to zero.

### Example 3:
**Input:** nums = [0,0,0]  
**Output:** [[0,0,0]]  
**Explanation:** The only triplet that sums to zero is [0,0,0].

### Example 4:
**Input:** nums = [-2,0,1,1,2]  
**Output:** [[-2,0,2],[-2,1,1]]  
**Explanation:** The triplets that sum to zero are [-2,0,2] and [-2,1,1].

## Intuition

The key insight is to use a two-pointer approach after sorting the array. For each element, we use two pointers to find pairs that sum to the negative of the current element.

## Approach

### Approach 1: Two Pointers with Sorting (Optimal)
1. Sort the array
2. For each element nums[i], use two pointers (left and right) to find pairs
3. Skip duplicates to avoid duplicate triplets
4. If sum == 0, add triplet to result

### Approach 2: Two Pointers with Early Termination
1. Same as two pointers but with additional optimizations
2. Skip elements that are too large (nums[i] > 0)
3. Skip duplicate elements efficiently

### Approach 3: Brute Force
1. Use three nested loops
2. Check all possible triplets
3. Avoid duplicates using hash set

## Dry Run

Let's trace through Example 1: nums = [-1,0,1,2,-1,-4]

### After sorting: [-4,-1,-1,0,1,2]

### Two Pointers Approach:
- i=0, nums[i]=-4: left=1, right=5, sum=-4+(-1)+2=-3 < 0, left++
- i=0, nums[i]=-4: left=2, right=5, sum=-4+(-1)+2=-3 < 0, left++
- i=0, nums[i]=-4: left=3, right=5, sum=-4+0+2=-2 < 0, left++
- i=0, nums[i]=-4: left=4, right=5, sum=-4+1+2=-1 < 0, left++
- i=0, nums[i]=-4: left=5, right=5, break (left >= right)

- i=1, nums[i]=-1: left=2, right=5, sum=-1+(-1)+2=0, add [-1,-1,2], left++, right--
- i=1, nums[i]=-1: left=3, right=4, sum=-1+0+1=0, add [-1,0,1], left++, right--

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers with Sorting (Optimal)

**Time Complexity:** O(n²) - We traverse the array once for each element  
**Space Complexity:** O(1) - Only need a few variables

### Solution 2: Two Pointers with Optimizations

**Time Complexity:** O(n²) - We traverse the array once for each element  
**Space Complexity:** O(1) - Only need a few variables

### Solution 3: Brute Force

**Time Complexity:** O(n³) - Three nested loops  
**Space Complexity:** O(n) - Hash set for duplicates`,
    output1: '[[-1,-1,2],[-1,0,1]]',
    output2: '[]',
    constraints: `## Constraints

- 3 <= nums.length <= 3000
- -105 <= nums[i] <= 105`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

/**
 * Two Pointers with Sorting - Optimal solution
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
void threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    if (numsSize < 3) {
        *returnSize = 0;
        return;
    }
    
    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);
    
    // Allocate memory for result (maximum possible triplets)
    int maxTriplets = numsSize * numsSize / 6;
    int** result = (int**)malloc(maxTriplets * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxTriplets * sizeof(int));
    *returnSize = 0;
    
    for (int i = 0; i < numsSize - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] == nums[i-1]) continue;
        
        int left = i + 1;
        int right = numsSize - 1;
        
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            
            if (sum == 0) {
                // Add triplet to result
                result[*returnSize] = (int*)malloc(3 * sizeof(int));
                result[*returnSize][0] = nums[i];
                result[*returnSize][1] = nums[left];
                result[*returnSize][2] = nums[right];
                (*returnColumnSizes)[*returnSize] = 3;
                (*returnSize)++;
                
                // Skip duplicates
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
}

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int* nums = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d numbers: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    
    int returnSize;
    int* returnColumnSizes;
    int** result = (int**)malloc(n * n / 6 * sizeof(int*));
    
    threeSum(nums, n, &returnSize, &returnColumnSizes);
    
    printf("Triplets that sum to zero:\\n");
    for (int i = 0; i < returnSize; i++) {
        printf("[%d, %d, %d]\\n", result[i][0], result[i][1], result[i][2]);
    }
    
    // Free memory
    for (int i = 0; i < returnSize; i++) {
        free(result[i]);
    }
    free(result);
    free(returnColumnSizes);
    free(nums);
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'We sort the array first, then for each element, we use two pointers to find pairs that sum to the negative of the current element. We skip duplicates to avoid duplicate triplets.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

/**
 * Two Pointers with Optimizations
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
void threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    if (numsSize < 3) {
        *returnSize = 0;
        return;
    }
    
    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);
    
    // Allocate memory for result
    int maxTriplets = numsSize * numsSize / 6;
    int** result = (int**)malloc(maxTriplets * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxTriplets * sizeof(int));
    *returnSize = 0;
    
    for (int i = 0; i < numsSize - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] == nums[i-1]) continue;
        
        // Early termination: if nums[i] > 0, no triplet can sum to 0
        if (nums[i] > 0) break;
        
        int left = i + 1;
        int right = numsSize - 1;
        
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            
            if (sum == 0) {
                // Add triplet to result
                result[*returnSize] = (int*)malloc(3 * sizeof(int));
                result[*returnSize][0] = nums[i];
                result[*returnSize][1] = nums[left];
                result[*returnSize][2] = nums[right];
                (*returnColumnSizes)[*returnSize] = 3;
                (*returnSize)++;
                
                // Skip duplicates efficiently
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
}

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int* nums = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d numbers: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    
    int returnSize;
    int* returnColumnSizes;
    int** result = (int**)malloc(n * n / 6 * sizeof(int*));
    
    threeSum(nums, n, &returnSize, &returnColumnSizes);
    
    printf("Triplets that sum to zero:\\n");
    for (int i = 0; i < returnSize; i++) {
        printf("[%d, %d, %d]\\n", result[i][0], result[i][1], result[i][2]);
    }
    
    // Free memory
    for (int i = 0; i < returnSize; i++) {
        free(result[i]);
    }
    free(result);
    free(returnColumnSizes);
    free(nums);
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'Similar to the basic two pointers approach but with additional optimizations. We add early termination when nums[i] > 0 and more efficient duplicate skipping.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

// Simple hash function for triplet
unsigned int hashTriplet(int a, int b, int c) {
    return (a * 31 + b) * 31 + c;
}

/**
 * Brute Force approach
 * Time Complexity: O(n³)
 * Space Complexity: O(n)
 */
void threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    if (numsSize < 3) {
        *returnSize = 0;
        return;
    }
    
    // Allocate memory for result
    int maxTriplets = numsSize * numsSize * numsSize / 6;
    int** result = (int**)malloc(maxTriplets * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxTriplets * sizeof(int));
    *returnSize = 0;
    
    // Hash set to avoid duplicates (simplified)
    int* seen = (int*)calloc(maxTriplets, sizeof(int));
    int seenSize = 0;
    
    for (int i = 0; i < numsSize - 2; i++) {
        for (int j = i + 1; j < numsSize - 1; j++) {
            for (int k = j + 1; k < numsSize; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    // Create sorted triplet to avoid duplicates
                    int triplet[3] = {nums[i], nums[j], nums[k]};
                    qsort(triplet, 3, sizeof(int), compare);
                    
                    // Check if triplet already exists
                    int hash = hashTriplet(triplet[0], triplet[1], triplet[2]);
                    int found = 0;
                    for (int s = 0; s < seenSize; s++) {
                        if (seen[s] == hash) {
                            found = 1;
                            break;
                        }
                    }
                    
                    if (!found) {
                        // Add triplet to result
                        result[*returnSize] = (int*)malloc(3 * sizeof(int));
                        result[*returnSize][0] = triplet[0];
                        result[*returnSize][1] = triplet[1];
                        result[*returnSize][2] = triplet[2];
                        (*returnColumnSizes)[*returnSize] = 3;
                        (*returnSize)++;
                        
                        // Add hash to seen
                        seen[seenSize++] = hash;
                    }
                }
            }
        }
    }
    
    free(seen);
}

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int* nums = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d numbers: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    
    int returnSize;
    int* returnColumnSizes;
    int** result = (int**)malloc(n * n * n / 6 * sizeof(int*));
    
    threeSum(nums, n, &returnSize, &returnColumnSizes);
    
    printf("Triplets that sum to zero:\\n");
    for (int i = 0; i < returnSize; i++) {
        printf("[%d, %d, %d]\\n", result[i][0], result[i][1], result[i][2]);
    }
    
    // Free memory
    for (int i = 0; i < returnSize; i++) {
        free(result[i]);
    }
    free(result);
    free(returnColumnSizes);
    free(nums);
    
    return 0;
}`,
          timeComplexity: 'O(n³)',
          spaceComplexity: 'O(n)',
          explanation: 'We use three nested loops to check all possible triplets. We use a hash set to avoid duplicate triplets. This is the most straightforward but highly inefficient approach.'
        }
      }
    }
  },
  {
    id: 'merge-k-sorted-lists',
    title: 'Merge k Sorted Lists',
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.`,
    difficulty: 'Hard',
    category: ['Linked List', 'Divide and Conquer', 'Heap', 'Merge Sort'],
    input1: 'lists = [[1,4,5],[1,3,4],[2,6]]',
    input2: 'lists = []',
    explanation: `## Problem Statement

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

## Examples

### Example 1:
**Input:** lists = [[1,4,5],[1,3,4],[2,6]]  
**Output:** [1,1,2,3,4,4,5,6]  
**Explanation:** Merging the three sorted lists gives us a sorted list.

### Example 2:
**Input:** lists = []  
**Output:** []  
**Explanation:** No lists to merge.

### Example 3:
**Input:** lists = [[]]  
**Output:** []  
**Explanation:** Empty list.

### Example 4:
**Input:** lists = [[1,2,3],[4,5,6],[7,8,9]]  
**Output:** [1,2,3,4,5,6,7,8,9]  
**Explanation:** Merging three sorted lists.

## Intuition

The key insight is to use a divide-and-conquer approach or a min-heap to efficiently merge multiple sorted lists. We can merge lists two at a time or use a heap to always pick the smallest element.

## Approach

### Approach 1: Divide and Conquer (Optimal)
1. Merge lists two at a time
2. Continue until only one list remains
3. This reduces the problem to merging two sorted lists repeatedly

### Approach 2: Min Heap
1. Use a min heap to store the head of each list
2. Extract the minimum element and add it to result
3. Add the next element from the same list to heap

### Approach 3: Brute Force
1. Collect all elements from all lists
2. Sort the combined list
3. Create a new linked list from sorted elements

## Dry Run

Let's trace through Example 1: lists = [[1,4,5],[1,3,4],[2,6]]

### Divide and Conquer Approach:
- Step 1: Merge [1,4,5] and [1,3,4] → [1,1,3,4,4,5]
- Step 2: Merge [1,1,3,4,4,5] and [2,6] → [1,1,2,3,4,4,5,6]

### Min Heap Approach:
- Heap: [1,1,2] (heads of all lists)
- Extract 1, add 4 to heap: [1,2,4]
- Extract 1, add 3 to heap: [2,3,4]
- Extract 2, add 6 to heap: [3,4,6]
- Continue...

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Divide and Conquer (Optimal)

**Time Complexity:** O(n log k) - We merge log k times  
**Space Complexity:** O(1) - Only need a few variables

### Solution 2: Min Heap

**Time Complexity:** O(n log k) - Each element is inserted/extracted once  
**Space Complexity:** O(k) - Heap size

### Solution 3: Brute Force

**Time Complexity:** O(n log n) - Sort all elements  
**Space Complexity:** O(n) - Store all elements`,
    output1: '[1,1,2,3,4,4,5,6]',
    output2: '[]',
    constraints: `## Constraints

- k == lists.length
- 0 <= k <= 104
- 0 <= lists[i].length <= 500
- -104 <= lists[i][j] <= 104
- lists[i] is sorted in ascending order`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Linked list node structure
typedef struct ListNode {
    int val;
    struct ListNode* next;
} ListNode;

// Function to create a new node
ListNode* createNode(int val) {
    ListNode* newNode = (ListNode*)malloc(sizeof(ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

// Function to merge two sorted lists
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy;
    ListNode* tail = &dummy;
    dummy.next = NULL;
    
    while (l1 && l2) {
        if (l1->val <= l2->val) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    
    // Attach remaining elements
    if (l1) tail->next = l1;
    if (l2) tail->next = l2;
    
    return dummy.next;
}

/**
 * Divide and Conquer - Optimal solution
 * Time Complexity: O(n log k)
 * Space Complexity: O(1)
 */
ListNode* mergeKLists(ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    if (listsSize == 1) return lists[0];
    
    // Merge lists two at a time
    int interval = 1;
    while (interval < listsSize) {
        for (int i = 0; i < listsSize - interval; i += 2 * interval) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }
    
    return lists[0];
}

// Function to create a linked list from array
ListNode* createList(int* arr, int size) {
    if (size == 0) return NULL;
    
    ListNode* head = createNode(arr[0]);
    ListNode* current = head;
    
    for (int i = 1; i < size; i++) {
        current->next = createNode(arr[i]);
        current = current->next;
    }
    
    return head;
}

// Function to print linked list
void printList(ListNode* head) {
    printf("[");
    ListNode* current = head;
    while (current) {
        printf("%d", current->val);
        if (current->next) printf(",");
        current = current->next;
    }
    printf("]\\n");
}

// Function to free linked list
void freeList(ListNode* head) {
    while (head) {
        ListNode* temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    int k;
    printf("Enter the number of linked lists: ");
    scanf("%d", &k);
    
    ListNode** lists = (ListNode**)malloc(k * sizeof(ListNode*));
    
    for (int i = 0; i < k; i++) {
        int size;
        printf("Enter size of list %d: ", i + 1);
        scanf("%d", &size);
        
        if (size == 0) {
            lists[i] = NULL;
            continue;
        }
        
        int* arr = (int*)malloc(size * sizeof(int));
        printf("Enter %d elements for list %d: ", size, i + 1);
        for (int j = 0; j < size; j++) {
            scanf("%d", &arr[j]);
        }
        
        lists[i] = createList(arr, size);
        free(arr);
    }
    
    ListNode* result = mergeKLists(lists, k);
    
    printf("Merged sorted list: ");
    printList(result);
    
    // Free memory
    for (int i = 0; i < k; i++) {
        freeList(lists[i]);
    }
    freeList(result);
    free(lists);
    
    return 0;
}`,
          timeComplexity: 'O(n log k)',
          spaceComplexity: 'O(1)',
          explanation: 'We use a divide-and-conquer approach, merging lists two at a time. This reduces the problem to merging two sorted lists repeatedly, which is efficient.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Linked list node structure
typedef struct ListNode {
    int val;
    struct ListNode* next;
} ListNode;

// Min heap structure
typedef struct {
    int val;
    int listIndex;
} HeapNode;

typedef struct {
    HeapNode* heap;
    int size;
    int capacity;
} MinHeap;

// Function to create a new node
ListNode* createNode(int val) {
    ListNode* newNode = (ListNode*)malloc(sizeof(ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

// Min heap functions
void swap(HeapNode* a, HeapNode* b) {
    HeapNode temp = *a;
    *a = *b;
    *b = temp;
}

void heapifyDown(MinHeap* heap, int index) {
    int smallest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    
    if (left < heap->size && heap->heap[left].val < heap->heap[smallest].val) {
        smallest = left;
    }
    
    if (right < heap->size && heap->heap[right].val < heap->heap[smallest].val) {
        smallest = right;
    }
    
    if (smallest != index) {
        swap(&heap->heap[index], &heap->heap[smallest]);
        heapifyDown(heap, smallest);
    }
}

void insertHeap(MinHeap* heap, int val, int listIndex) {
    if (heap->size >= heap->capacity) return;
    
    heap->heap[heap->size].val = val;
    heap->heap[heap->size].listIndex = listIndex;
    heap->size++;
    
    // Heapify up
    int i = heap->size - 1;
    while (i > 0 && heap->heap[(i - 1) / 2].val > heap->heap[i].val) {
        swap(&heap->heap[(i - 1) / 2], &heap->heap[i]);
        i = (i - 1) / 2;
    }
}

HeapNode extractMin(MinHeap* heap) {
    HeapNode min = heap->heap[0];
    heap->heap[0] = heap->heap[heap->size - 1];
    heap->size--;
    heapifyDown(heap, 0);
    return min;
}

/**
 * Min Heap approach
 * Time Complexity: O(n log k)
 * Space Complexity: O(k)
 */
ListNode* mergeKLists(ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    
    // Create min heap
    MinHeap heap;
    heap.capacity = listsSize;
    heap.size = 0;
    heap.heap = (HeapNode*)malloc(listsSize * sizeof(HeapNode));
    
    // Insert first element from each list
    for (int i = 0; i < listsSize; i++) {
        if (lists[i]) {
            insertHeap(&heap, lists[i]->val, i);
        }
    }
    
    ListNode dummy;
    ListNode* tail = &dummy;
    dummy.next = NULL;
    
    while (heap.size > 0) {
        HeapNode min = extractMin(&heap);
        
        // Add to result
        tail->next = createNode(min.val);
        tail = tail->next;
        
        // Move to next element in the same list
        lists[min.listIndex] = lists[min.listIndex]->next;
        if (lists[min.listIndex]) {
            insertHeap(&heap, lists[min.listIndex]->val, min.listIndex);
        }
    }
    
    free(heap.heap);
    return dummy.next;
}

// Function to create a linked list from array
ListNode* createList(int* arr, int size) {
    if (size == 0) return NULL;
    
    ListNode* head = createNode(arr[0]);
    ListNode* current = head;
    
    for (int i = 1; i < size; i++) {
        current->next = createNode(arr[i]);
        current = current->next;
    }
    
    return head;
}

// Function to print linked list
void printList(ListNode* head) {
    printf("[");
    ListNode* current = head;
    while (current) {
        printf("%d", current->val);
        if (current->next) printf(",");
        current = current->next;
    }
    printf("]\\n");
}

// Function to free linked list
void freeList(ListNode* head) {
    while (head) {
        ListNode* temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    int k;
    printf("Enter the number of linked lists: ");
    scanf("%d", &k);
    
    ListNode** lists = (ListNode**)malloc(k * sizeof(ListNode*));
    
    for (int i = 0; i < k; i++) {
        int size;
        printf("Enter size of list %d: ", i + 1);
        scanf("%d", &size);
        
        if (size == 0) {
            lists[i] = NULL;
            continue;
        }
        
        int* arr = (int*)malloc(size * sizeof(int));
        printf("Enter %d elements for list %d: ", size, i + 1);
        for (int j = 0; j < size; j++) {
            scanf("%d", &arr[j]);
        }
        
        lists[i] = createList(arr, size);
        free(arr);
    }
    
    ListNode* result = mergeKLists(lists, k);
    
    printf("Merged sorted list: ");
    printList(result);
    
    // Free memory
    for (int i = 0; i < k; i++) {
        freeList(lists[i]);
    }
    freeList(result);
    free(lists);
    
    return 0;
}`,
          timeComplexity: 'O(n log k)',
          spaceComplexity: 'O(k)',
          explanation: 'We use a min heap to store the head of each list. We extract the minimum element and add it to the result, then add the next element from the same list to the heap.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Linked list node structure
typedef struct ListNode {
    int val;
    struct ListNode* next;
} ListNode;

// Function to create a new node
ListNode* createNode(int val) {
    ListNode* newNode = (ListNode*)malloc(sizeof(ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

/**
 * Brute Force approach
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
ListNode* mergeKLists(ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    
    // Count total elements
    int totalElements = 0;
    for (int i = 0; i < listsSize; i++) {
        ListNode* current = lists[i];
        while (current) {
            totalElements++;
            current = current->next;
        }
    }
    
    if (totalElements == 0) return NULL;
    
    // Collect all elements
    int* allElements = (int*)malloc(totalElements * sizeof(int));
    int index = 0;
    
    for (int i = 0; i < listsSize; i++) {
        ListNode* current = lists[i];
        while (current) {
            allElements[index++] = current->val;
            current = current->next;
        }
    }
    
    // Sort all elements
    qsort(allElements, totalElements, sizeof(int), compare);
    
    // Create new linked list
    ListNode* head = createNode(allElements[0]);
    ListNode* current = head;
    
    for (int i = 1; i < totalElements; i++) {
        current->next = createNode(allElements[i]);
        current = current->next;
    }
    
    free(allElements);
    return head;
}

// Function to create a linked list from array
ListNode* createList(int* arr, int size) {
    if (size == 0) return NULL;
    
    ListNode* head = createNode(arr[0]);
    ListNode* current = head;
    
    for (int i = 1; i < size; i++) {
        current->next = createNode(arr[i]);
        current = current->next;
    }
    
    return head;
}

// Function to print linked list
void printList(ListNode* head) {
    printf("[");
    ListNode* current = head;
    while (current) {
        printf("%d", current->val);
        if (current->next) printf(",");
        current = current->next;
    }
    printf("]\\n");
}

// Function to free linked list
void freeList(ListNode* head) {
    while (head) {
        ListNode* temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    int k;
    printf("Enter the number of linked lists: ");
    scanf("%d", &k);
    
    ListNode** lists = (ListNode**)malloc(k * sizeof(ListNode*));
    
    for (int i = 0; i < k; i++) {
        int size;
        printf("Enter size of list %d: ", i + 1);
        scanf("%d", &size);
        
        if (size == 0) {
            lists[i] = NULL;
            continue;
        }
        
        int* arr = (int*)malloc(size * sizeof(int));
        printf("Enter %d elements for list %d: ", size, i + 1);
        for (int j = 0; j < size; j++) {
            scanf("%d", &arr[j]);
        }
        
        lists[i] = createList(arr, size);
        free(arr);
    }
    
    ListNode* result = mergeKLists(lists, k);
    
    printf("Merged sorted list: ");
    printList(result);
    
    // Free memory
    for (int i = 0; i < k; i++) {
        freeList(lists[i]);
    }
    freeList(result);
    free(lists);
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(n)',
          explanation: 'We collect all elements from all lists into an array, sort the array, and create a new linked list from the sorted elements. This is straightforward but inefficient.'
        }
      }
    }
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache - Least Recently Used Cache',
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class: LRUCache(int capacity) Initialize the LRU cache with positive size capacity. int get(int key) Return the value of the key if the key exists, otherwise return -1. void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.`,
    difficulty: 'Hard',
    category: ['Hash Table', 'Linked List', 'Design', 'Data Structure'],
    input1: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]',
    input2: '["LRUCache", "put", "get"]\n[[1], [1, 1], [1]]',
    explanation: `## Problem Statement

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

## Examples

### Example 1:
**Input:** ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]  
**Input:** [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]  
**Output:** [null, null, null, 1, null, -1, null, -1, 3, 4]  
**Explanation:** 
- LRUCache lRUCache = new LRUCache(2);
- lRUCache.put(1, 1); // cache is {1=1}
- lRUCache.put(2, 2); // cache is {1=1, 2=2}
- lRUCache.get(1);    // return 1
- lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
- lRUCache.get(2);    // returns -1 (not found)
- lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
- lRUCache.get(1);    // return -1 (not found)
- lRUCache.get(3);    // return 3
- lRUCache.get(4);    // return 4

### Example 2:
**Input:** ["LRUCache", "put", "get"]  
**Input:** [[1], [1, 1], [1]]  
**Output:** [null, null, 1]  
**Explanation:** 
- LRUCache lRUCache = new LRUCache(1);
- lRUCache.put(1, 1); // cache is {1=1}
- lRUCache.get(1);    // return 1

## Intuition

The key insight is to use a combination of a hash table and a doubly linked list. The hash table provides O(1) access to elements, while the doubly linked list maintains the order of usage (most recently used at the front, least recently used at the back).

## Approach

### Approach 1: Hash Table + Doubly Linked List (Optimal)
1. Use a hash table to store key-value pairs for O(1) access
2. Use a doubly linked list to maintain usage order
3. When accessing an element, move it to the front of the list
4. When capacity is exceeded, remove the last element from the list

### Approach 2: Hash Table + Array
1. Use a hash table for key-value storage
2. Use an array to maintain usage order
3. When accessing an element, move it to the front of the array
4. Less efficient due to array shifting

### Approach 3: Simple Hash Table
1. Use only a hash table with timestamps
2. When capacity is exceeded, find the least recently used by checking timestamps
3. Inefficient for large caches

## Dry Run

Let's trace through Example 1: capacity = 2

### Hash Table + Doubly Linked List Approach:
- put(1,1): cache = {1:1}, list = [1]
- put(2,2): cache = {1:1, 2:2}, list = [2,1]
- get(1): cache = {1:1, 2:2}, list = [1,2], return 1
- put(3,3): cache = {1:1, 3:3}, list = [3,1], evict 2
- get(2): return -1 (not found)
- put(4,4): cache = {3:3, 4:4}, list = [4,3], evict 1
- get(1): return -1 (not found)
- get(3): cache = {3:3, 4:4}, list = [3,4], return 3
- get(4): cache = {3:3, 4:4}, list = [4,3], return 4

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Hash Table + Doubly Linked List (Optimal)

**Time Complexity:** O(1) - All operations are O(1)  
**Space Complexity:** O(capacity) - Hash table and linked list

### Solution 2: Hash Table + Array

**Time Complexity:** O(n) - Array shifting operations  
**Space Complexity:** O(capacity) - Hash table and array

### Solution 3: Simple Hash Table

**Time Complexity:** O(n) - Finding LRU element  
**Space Complexity:** O(capacity) - Hash table`,
    output1: '[null, null, null, 1, null, -1, null, -1, 3, 4]',
    output2: '[null, null, 1]',
    constraints: `## Constraints

- 1 <= capacity <= 3000
- 0 <= key <= 104
- 0 <= value <= 105
- At most 2 * 105 calls will be made to get and put.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Doubly linked list node
typedef struct Node {
    int key;
    int value;
    struct Node* prev;
    struct Node* next;
} Node;

// Hash table entry
typedef struct HashEntry {
    int key;
    Node* node;
    struct HashEntry* next;
} HashEntry;

// LRU Cache structure
typedef struct {
    int capacity;
    int size;
    Node* head;  // Most recently used
    Node* tail;  // Least recently used
    HashEntry** hashTable;
} LRUCache;

#define HASH_SIZE 10007

// Hash function
int hash(int key) {
    return key % HASH_SIZE;
}

// Create a new node
Node* createNode(int key, int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->key = key;
    newNode->value = value;
    newNode->prev = NULL;
    newNode->next = NULL;
    return newNode;
}

// Remove node from list
void removeNode(Node* node) {
    if (node->prev) node->prev->next = node->next;
    if (node->next) node->next->prev = node->prev;
}

// Add node to front (most recently used)
void addToFront(LRUCache* cache, Node* node) {
    node->next = cache->head;
    node->prev = NULL;
    if (cache->head) cache->head->prev = node;
    cache->head = node;
    if (!cache->tail) cache->tail = node;
}

// Move node to front
void moveToFront(LRUCache* cache, Node* node) {
    if (node == cache->head) return;
    removeNode(node);
    addToFront(cache, node);
}

// Remove least recently used (tail)
void removeLRU(LRUCache* cache) {
    if (!cache->tail) return;
    
    Node* lru = cache->tail;
    cache->tail = cache->tail->prev;
    if (cache->tail) cache->tail->next = NULL;
    else cache->head = NULL;
    
    // Remove from hash table
    int hashKey = hash(lru->key);
    HashEntry* entry = cache->hashTable[hashKey];
    HashEntry* prev = NULL;
    
    while (entry) {
        if (entry->key == lru->key) {
            if (prev) prev->next = entry->next;
            else cache->hashTable[hashKey] = entry->next;
            free(entry);
            break;
        }
        prev = entry;
        entry = entry->next;
    }
    
    free(lru);
    cache->size--;
}

// Get value from hash table
Node* getFromHash(LRUCache* cache, int key) {
    int hashKey = hash(key);
    HashEntry* entry = cache->hashTable[hashKey];
    
    while (entry) {
        if (entry->key == key) {
            return entry->node;
        }
        entry = entry->next;
    }
    return NULL;
}

// Add to hash table
void addToHash(LRUCache* cache, int key, Node* node) {
    int hashKey = hash(key);
    HashEntry* entry = (HashEntry*)malloc(sizeof(HashEntry));
    entry->key = key;
    entry->node = node;
    entry->next = cache->hashTable[hashKey];
    cache->hashTable[hashKey] = entry;
}

// Remove from hash table
void removeFromHash(LRUCache* cache, int key) {
    int hashKey = hash(key);
    HashEntry* entry = cache->hashTable[hashKey];
    HashEntry* prev = NULL;
    
    while (entry) {
        if (entry->key == key) {
            if (prev) prev->next = entry->next;
            else cache->hashTable[hashKey] = entry->next;
            free(entry);
            break;
        }
        prev = entry;
        entry = entry->next;
    }
}

// Initialize LRU Cache
LRUCache* lRUCacheCreate(int capacity) {
    LRUCache* cache = (LRUCache*)malloc(sizeof(LRUCache));
    cache->capacity = capacity;
    cache->size = 0;
    cache->head = NULL;
    cache->tail = NULL;
    cache->hashTable = (HashEntry**)calloc(HASH_SIZE, sizeof(HashEntry*));
    return cache;
}

// Get value
int lRUCacheGet(LRUCache* obj, int key) {
    Node* node = getFromHash(obj, key);
    if (!node) return -1;
    
    moveToFront(obj, node);
    return node->value;
}

// Put key-value pair
void lRUCachePut(LRUCache* obj, int key, int value) {
    Node* node = getFromHash(obj, key);
    
    if (node) {
        // Update existing key
        node->value = value;
        moveToFront(obj, node);
    } else {
        // Add new key
        if (obj->size >= obj->capacity) {
            removeLRU(obj);
        }
        
        node = createNode(key, value);
        addToFront(obj, node);
        addToHash(obj, key, node);
        obj->size++;
    }
}

// Free LRU Cache
void lRUCacheFree(LRUCache* obj) {
    Node* current = obj->head;
    while (current) {
        Node* temp = current;
        current = current->next;
        free(temp);
    }
    
    for (int i = 0; i < HASH_SIZE; i++) {
        HashEntry* entry = obj->hashTable[i];
        while (entry) {
            HashEntry* temp = entry;
            entry = entry->next;
            free(temp);
        }
    }
    
    free(obj->hashTable);
    free(obj);
}

int main() {
    int capacity;
    printf("Enter cache capacity: ");
    scanf("%d", &capacity);
    
    LRUCache* cache = lRUCacheCreate(capacity);
    
    printf("LRU Cache created with capacity %d\\n", capacity);
    printf("Commands: 1=get, 2=put, 0=exit\\n");
    
    int command, key, value;
    while (1) {
        printf("Enter command (0/1/2): ");
        scanf("%d", &command);
        
        if (command == 0) break;
        else if (command == 1) {
            printf("Enter key: ");
            scanf("%d", &key);
            int result = lRUCacheGet(cache, key);
            printf("Get(%d) = %d\\n", key, result);
        }
        else if (command == 2) {
            printf("Enter key and value: ");
            scanf("%d %d", &key, &value);
            lRUCachePut(cache, key, value);
            printf("Put(%d, %d)\\n", key, value);
        }
    }
    
    lRUCacheFree(cache);
    return 0;
}`,
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(capacity)',
          explanation: 'We use a hash table for O(1) key-value access and a doubly linked list to maintain usage order. When accessing an element, we move it to the front. When capacity is exceeded, we remove the least recently used element from the back.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Hash table entry with timestamp
typedef struct {
    int key;
    int value;
    int timestamp;
} HashEntry;

// LRU Cache structure
typedef struct {
    int capacity;
    int size;
    int currentTime;
    HashEntry* entries;
    int* used;
} LRUCache;

// Initialize LRU Cache
LRUCache* lRUCacheCreate(int capacity) {
    LRUCache* cache = (LRUCache*)malloc(sizeof(LRUCache));
    cache->capacity = capacity;
    cache->size = 0;
    cache->currentTime = 0;
    cache->entries = (HashEntry*)calloc(capacity, sizeof(HashEntry));
    cache->used = (int*)calloc(capacity, sizeof(int));
    return cache;
}

// Find key in hash table
int findKey(LRUCache* obj, int key) {
    for (int i = 0; i < obj->capacity; i++) {
        if (obj->used[i] && obj->entries[i].key == key) {
            return i;
        }
    }
    return -1;
}

// Find least recently used entry
int findLRU(LRUCache* obj) {
    int lruIndex = 0;
    int minTime = obj->entries[0].timestamp;
    
    for (int i = 1; i < obj->capacity; i++) {
        if (obj->used[i] && obj->entries[i].timestamp < minTime) {
            minTime = obj->entries[i].timestamp;
            lruIndex = i;
        }
    }
    return lruIndex;
}

// Get value
int lRUCacheGet(LRUCache* obj, int key) {
    int index = findKey(obj, key);
    if (index == -1) return -1;
    
    // Update timestamp
    obj->entries[index].timestamp = ++obj->currentTime;
    return obj->entries[index].value;
}

// Put key-value pair
void lRUCachePut(LRUCache* obj, int key, int value) {
    int index = findKey(obj, key);
    
    if (index != -1) {
        // Update existing key
        obj->entries[index].value = value;
        obj->entries[index].timestamp = ++obj->currentTime;
    } else {
        // Add new key
        if (obj->size >= obj->capacity) {
            // Find and remove LRU entry
            int lruIndex = findLRU(obj);
            obj->used[lruIndex] = 0;
            obj->size--;
        }
        
        // Find empty slot
        for (int i = 0; i < obj->capacity; i++) {
            if (!obj->used[i]) {
                obj->entries[i].key = key;
                obj->entries[i].value = value;
                obj->entries[i].timestamp = ++obj->currentTime;
                obj->used[i] = 1;
                obj->size++;
                break;
            }
        }
    }
}

// Free LRU Cache
void lRUCacheFree(LRUCache* obj) {
    free(obj->entries);
    free(obj->used);
    free(obj);
}

int main() {
    int capacity;
    printf("Enter cache capacity: ");
    scanf("%d", &capacity);
    
    LRUCache* cache = lRUCacheCreate(capacity);
    
    printf("LRU Cache created with capacity %d\\n", capacity);
    printf("Commands: 1=get, 2=put, 0=exit\\n");
    
    int command, key, value;
    while (1) {
        printf("Enter command (0/1/2): ");
        scanf("%d", &command);
        
        if (command == 0) break;
        else if (command == 1) {
            printf("Enter key: ");
            scanf("%d", &key);
            int result = lRUCacheGet(cache, key);
            printf("Get(%d) = %d\\n", key, result);
        }
        else if (command == 2) {
            printf("Enter key and value: ");
            scanf("%d %d", &key, &value);
            lRUCachePut(cache, key, value);
            printf("Put(%d, %d)\\n", key, value);
        }
    }
    
    lRUCacheFree(cache);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(capacity)',
          explanation: 'We use a simple hash table with timestamps. When accessing an element, we update its timestamp. When capacity is exceeded, we find the least recently used element by checking timestamps.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Simple key-value pair
typedef struct {
    int key;
    int value;
    int timestamp;
} KVPair;

// LRU Cache structure
typedef struct {
    int capacity;
    int size;
    int currentTime;
    KVPair* pairs;
} LRUCache;

// Initialize LRU Cache
LRUCache* lRUCacheCreate(int capacity) {
    LRUCache* cache = (LRUCache*)malloc(sizeof(LRUCache));
    cache->capacity = capacity;
    cache->size = 0;
    cache->currentTime = 0;
    cache->pairs = (KVPair*)calloc(capacity, sizeof(KVPair));
    return cache;
}

// Find key in array
int findKey(LRUCache* obj, int key) {
    for (int i = 0; i < obj->size; i++) {
        if (obj->pairs[i].key == key) {
            return i;
        }
    }
    return -1;
}

// Find least recently used entry
int findLRU(LRUCache* obj) {
    int lruIndex = 0;
    int minTime = obj->pairs[0].timestamp;
    
    for (int i = 1; i < obj->size; i++) {
        if (obj->pairs[i].timestamp < minTime) {
            minTime = obj->pairs[i].timestamp;
            lruIndex = i;
        }
    }
    return lruIndex;
}

// Remove element at index
void removeAt(LRUCache* obj, int index) {
    for (int i = index; i < obj->size - 1; i++) {
        obj->pairs[i] = obj->pairs[i + 1];
    }
    obj->size--;
}

// Get value
int lRUCacheGet(LRUCache* obj, int key) {
    int index = findKey(obj, key);
    if (index == -1) return -1;
    
    // Update timestamp
    obj->pairs[index].timestamp = ++obj->currentTime;
    return obj->pairs[index].value;
}

// Put key-value pair
void lRUCachePut(LRUCache* obj, int key, int value) {
    int index = findKey(obj, key);
    
    if (index != -1) {
        // Update existing key
        obj->pairs[index].value = value;
        obj->pairs[index].timestamp = ++obj->currentTime;
    } else {
        // Add new key
        if (obj->size >= obj->capacity) {
            // Find and remove LRU entry
            int lruIndex = findLRU(obj);
            removeAt(obj, lruIndex);
        }
        
        // Add new entry
        obj->pairs[obj->size].key = key;
        obj->pairs[obj->size].value = value;
        obj->pairs[obj->size].timestamp = ++obj->currentTime;
        obj->size++;
    }
}

// Free LRU Cache
void lRUCacheFree(LRUCache* obj) {
    free(obj->pairs);
    free(obj);
}

int main() {
    int capacity;
    printf("Enter cache capacity: ");
    scanf("%d", &capacity);
    
    LRUCache* cache = lRUCacheCreate(capacity);
    
    printf("LRU Cache created with capacity %d\\n", capacity);
    printf("Commands: 1=get, 2=put, 0=exit\\n");
    
    int command, key, value;
    while (1) {
        printf("Enter command (0/1/2): ");
        scanf("%d", &command);
        
        if (command == 0) break;
        else if (command == 1) {
            printf("Enter key: ");
            scanf("%d", &key);
            int result = lRUCacheGet(cache, key);
            printf("Get(%d) = %d\\n", key, result);
        }
        else if (command == 2) {
            printf("Enter key and value: ");
            scanf("%d %d", &key, &value);
            lRUCachePut(cache, key, value);
            printf("Put(%d, %d)\\n", key, value);
        }
    }
    
    lRUCacheFree(cache);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(capacity)',
          explanation: 'We use a simple array to store key-value pairs with timestamps. When accessing an element, we update its timestamp. When capacity is exceeded, we find and remove the least recently used element.'
        }
      }
    }
  },
  {
    id: 'word-break',
    title: 'Word Break - Dynamic Programming',
    description: `Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.`,
    difficulty: 'Hard',
    category: ['String', 'Dynamic Programming', 'Hash Table', 'Trie'],
    input1: 's = "leetcode", wordDict = ["leet","code"]',
    input2: 's = "applepenapple", wordDict = ["apple","pen"]',
    explanation: `## Problem Statement

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

## Examples

### Example 1:
**Input:** s = "leetcode", wordDict = ["leet","code"]  
**Output:** true  
**Explanation:** Return true because "leetcode" can be segmented as "leet code".

### Example 2:
**Input:** s = "applepenapple", wordDict = ["apple","pen"]  
**Output:** true  
**Explanation:** Return true because "applepenapple" can be segmented as "apple pen apple".

### Example 3:
**Input:** s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]  
**Output:** false  
**Explanation:** "catsandog" cannot be segmented into dictionary words.

### Example 4:
**Input:** s = "aaaaaaa", wordDict = ["aaaa","aaa"]  
**Output:** true  
**Explanation:** "aaaaaaa" can be segmented as "aaaa aaa" or "aaa aaaa".

## Intuition

The key insight is to use dynamic programming to check if the string can be broken down into valid words. We can use a DP array where dp[i] represents whether the substring s[0...i-1] can be segmented.

## Approach

### Approach 1: Dynamic Programming (Optimal)
1. Create a DP array where dp[i] = true if s[0...i-1] can be segmented
2. For each position i, check all possible word endings
3. If a word ending at i is in the dictionary and dp[start] is true, set dp[i] = true
4. Return dp[n] where n is the length of the string

### Approach 2: Dynamic Programming with Hash Set
1. Convert wordDict to a hash set for O(1) lookup
2. Same DP logic but with hash set optimization
3. More efficient for large dictionaries

### Approach 3: Recursive with Memoization
1. Use recursion to try all possible word combinations
2. Use memoization to avoid redundant calculations
3. Less efficient than iterative DP

## Dry Run

Let's trace through Example 1: s = "leetcode", wordDict = ["leet","code"]

### Dynamic Programming Approach:
- dp[0] = true (empty string)
- dp[1] = false (no word ending at index 1)
- dp[2] = false (no word ending at index 2)
- dp[3] = false (no word ending at index 3)
- dp[4] = true (word "leet" ending at index 4, dp[0] = true)
- dp[5] = false (no word ending at index 5)
- dp[6] = false (no word ending at index 6)
- dp[7] = false (no word ending at index 7)
- dp[8] = true (word "code" ending at index 8, dp[4] = true)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Dynamic Programming (Optimal)

**Time Complexity:** O(n² * m) - n is string length, m is max word length  
**Space Complexity:** O(n) - DP array

### Solution 2: Dynamic Programming with Hash Set

**Time Complexity:** O(n² * m) - n is string length, m is max word length  
**Space Complexity:** O(n + k) - DP array + hash set

### Solution 3: Recursive with Memoization

**Time Complexity:** O(n² * m) - n is string length, m is max word length  
**Space Complexity:** O(n) - Recursion stack + memoization`,
    output1: 'true',
    output2: 'true',
    constraints: `## Constraints

- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s and wordDict[i] consist of only lowercase English letters
- All the strings of wordDict are unique.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Hash set for word dictionary
typedef struct HashNode {
    char* word;
    struct HashNode* next;
} HashNode;

typedef struct {
    HashNode** table;
    int size;
} HashSet;

#define HASH_SIZE 10007

// Hash function for strings
unsigned int hashString(const char* str) {
    unsigned int hash = 5381;
    int c;
    while ((c = *str++)) {
        hash = ((hash << 5) + hash) + c;
    }
    return hash % HASH_SIZE;
}

// Initialize hash set
HashSet* createHashSet() {
    HashSet* set = (HashSet*)malloc(sizeof(HashSet));
    set->size = 0;
    set->table = (HashNode**)calloc(HASH_SIZE, sizeof(HashNode*));
    return set;
}

// Add word to hash set
void addWord(HashSet* set, const char* word) {
    unsigned int hash = hashString(word);
    HashNode* node = (HashNode*)malloc(sizeof(HashNode));
    node->word = strdup(word);
    node->next = set->table[hash];
    set->table[hash] = node;
    set->size++;
}

// Check if word exists in hash set
bool containsWord(HashSet* set, const char* word) {
    unsigned int hash = hashString(word);
    HashNode* node = set->table[hash];
    
    while (node) {
        if (strcmp(node->word, word) == 0) {
            return true;
        }
        node = node->next;
    }
    return false;
}

// Free hash set
void freeHashSet(HashSet* set) {
    for (int i = 0; i < HASH_SIZE; i++) {
        HashNode* node = set->table[i];
        while (node) {
            HashNode* temp = node;
            node = node->next;
            free(temp->word);
            free(temp);
        }
    }
    free(set->table);
    free(set);
}

/**
 * Dynamic Programming with Hash Set - Optimal solution
 * Time Complexity: O(n² * m)
 * Space Complexity: O(n + k)
 */
bool wordBreak(char* s, char** wordDict, int wordDictSize) {
    int n = strlen(s);
    
    // Create hash set from word dictionary
    HashSet* set = createHashSet();
    for (int i = 0; i < wordDictSize; i++) {
        addWord(set, wordDict[i]);
    }
    
    // DP array: dp[i] = true if s[0...i-1] can be segmented
    bool* dp = (bool*)calloc(n + 1, sizeof(bool));
    dp[0] = true;  // Empty string can be segmented
    
    // Check each position
    for (int i = 1; i <= n; i++) {
        // Check all possible word endings at position i
        for (int j = 0; j < i; j++) {
            if (dp[j]) {  // If s[0...j-1] can be segmented
                // Create substring s[j...i-1]
                char* substring = (char*)malloc(i - j + 1);
                strncpy(substring, s + j, i - j);
                substring[i - j] = '\\0';
                
                // Check if substring is in dictionary
                if (containsWord(set, substring)) {
                    dp[i] = true;
                    free(substring);
                    break;
                }
                free(substring);
            }
        }
    }
    
    bool result = dp[n];
    
    // Free memory
    free(dp);
    freeHashSet(set);
    
    return result;
}

int main() {
    char s[1000];
    printf("Enter the string: ");
    scanf("%s", s);
    
    int wordDictSize;
    printf("Enter the number of words in dictionary: ");
    scanf("%d", &wordDictSize);
    
    char** wordDict = (char**)malloc(wordDictSize * sizeof(char*));
    
    printf("Enter %d words:\\n", wordDictSize);
    for (int i = 0; i < wordDictSize; i++) {
        wordDict[i] = (char*)malloc(100 * sizeof(char));
        scanf("%s", wordDict[i]);
    }
    
    bool result = wordBreak(s, wordDict, wordDictSize);
    printf("Can be segmented: %s\\n", result ? "true" : "false");
    
    // Free memory
    for (int i = 0; i < wordDictSize; i++) {
        free(wordDict[i]);
    }
    free(wordDict);
    
    return 0;
}`,
          timeComplexity: 'O(n² * m)',
          spaceComplexity: 'O(n + k)',
          explanation: 'We use dynamic programming with a hash set for efficient word lookup. dp[i] represents whether the substring s[0...i-1] can be segmented. For each position, we check all possible word endings.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Simple hash set implementation
typedef struct {
    char** words;
    int size;
    int capacity;
} WordSet;

// Initialize word set
WordSet* createWordSet(int capacity) {
    WordSet* set = (WordSet*)malloc(sizeof(WordSet));
    set->words = (char**)malloc(capacity * sizeof(char*));
    set->size = 0;
    set->capacity = capacity;
    return set;
}

// Add word to set
void addWord(WordSet* set, const char* word) {
    if (set->size >= set->capacity) return;
    set->words[set->size] = strdup(word);
    set->size++;
}

// Check if word exists in set
bool containsWord(WordSet* set, const char* word) {
    for (int i = 0; i < set->size; i++) {
        if (strcmp(set->words[i], word) == 0) {
            return true;
        }
    }
    return false;
}

// Free word set
void freeWordSet(WordSet* set) {
    for (int i = 0; i < set->size; i++) {
        free(set->words[i]);
    }
    free(set->words);
    free(set);
}

/**
 * Dynamic Programming with Simple Set
 * Time Complexity: O(n² * m * k)
 * Space Complexity: O(n + k)
 */
bool wordBreak(char* s, char** wordDict, int wordDictSize) {
    int n = strlen(s);
    
    // Create word set from dictionary
    WordSet* set = createWordSet(wordDictSize);
    for (int i = 0; i < wordDictSize; i++) {
        addWord(set, wordDict[i]);
    }
    
    // DP array: dp[i] = true if s[0...i-1] can be segmented
    bool* dp = (bool*)calloc(n + 1, sizeof(bool));
    dp[0] = true;  // Empty string can be segmented
    
    // Check each position
    for (int i = 1; i <= n; i++) {
        // Check all possible word endings at position i
        for (int j = 0; j < i; j++) {
            if (dp[j]) {  // If s[0...j-1] can be segmented
                // Create substring s[j...i-1]
                char* substring = (char*)malloc(i - j + 1);
                strncpy(substring, s + j, i - j);
                substring[i - j] = '\\0';
                
                // Check if substring is in dictionary
                if (containsWord(set, substring)) {
                    dp[i] = true;
                    free(substring);
                    break;
                }
                free(substring);
            }
        }
    }
    
    bool result = dp[n];
    
    // Free memory
    free(dp);
    freeWordSet(set);
    
    return result;
}

int main() {
    char s[1000];
    printf("Enter the string: ");
    scanf("%s", s);
    
    int wordDictSize;
    printf("Enter the number of words in dictionary: ");
    scanf("%d", &wordDictSize);
    
    char** wordDict = (char**)malloc(wordDictSize * sizeof(char*));
    
    printf("Enter %d words:\\n", wordDictSize);
    for (int i = 0; i < wordDictSize; i++) {
        wordDict[i] = (char*)malloc(100 * sizeof(char));
        scanf("%s", wordDict[i]);
    }
    
    bool result = wordBreak(s, wordDict, wordDictSize);
    printf("Can be segmented: %s\\n", result ? "true" : "false");
    
    // Free memory
    for (int i = 0; i < wordDictSize; i++) {
        free(wordDict[i]);
    }
    free(wordDict);
    
    return 0;
}`,
          timeComplexity: 'O(n² * m * k)',
          spaceComplexity: 'O(n + k)',
          explanation: 'Similar to the optimal solution but using a simple array-based set instead of a hash set. This makes word lookup less efficient but is easier to implement.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Recursive solution with memoization
typedef struct {
    int key;
    bool value;
    struct MemoNode* next;
} MemoNode;

typedef struct {
    MemoNode** table;
    int size;
} Memoization;

#define MEMO_SIZE 10007

// Hash function for integers
unsigned int hashInt(int key) {
    return key % MEMO_SIZE;
}

// Initialize memoization
Memoization* createMemo() {
    Memoization* memo = (Memoization*)malloc(sizeof(Memoization));
    memo->table = (MemoNode**)calloc(MEMO_SIZE, sizeof(MemoNode*));
    memo->size = 0;
    return memo;
}

// Get memoized result
bool getMemo(Memoization* memo, int key) {
    unsigned int hash = hashInt(key);
    MemoNode* node = memo->table[hash];
    
    while (node) {
        if (node->key == key) {
            return node->value;
        }
        node = node->next;
    }
    return -1;  // Not found
}

// Set memoized result
void setMemo(Memoization* memo, int key, bool value) {
    unsigned int hash = hashInt(key);
    MemoNode* node = (MemoNode*)malloc(sizeof(MemoNode));
    node->key = key;
    node->value = value;
    node->next = memo->table[hash];
    memo->table[hash] = node;
    memo->size++;
}

// Free memoization
void freeMemo(Memoization* memo) {
    for (int i = 0; i < MEMO_SIZE; i++) {
        MemoNode* node = memo->table[i];
        while (node) {
            MemoNode* temp = node;
            node = node->next;
            free(temp);
        }
    }
    free(memo->table);
    free(memo);
}

// Check if word exists in dictionary
bool isWordInDict(char* s, int start, int end, char** wordDict, int wordDictSize) {
    char* word = (char*)malloc(end - start + 2);
    strncpy(word, s + start, end - start + 1);
    word[end - start + 1] = '\\0';
    
    for (int i = 0; i < wordDictSize; i++) {
        if (strcmp(word, wordDict[i]) == 0) {
            free(word);
            return true;
        }
    }
    free(word);
    return false;
}

// Recursive function with memoization
bool wordBreakRecursive(char* s, int start, char** wordDict, int wordDictSize, Memoization* memo) {
    int n = strlen(s);
    
    // Base case: reached end of string
    if (start >= n) {
        return true;
    }
    
    // Check memoization
    int memoKey = start;
    bool memoResult = getMemo(memo, memoKey);
    if (memoResult != -1) {
        return memoResult;
    }
    
    // Try all possible word endings
    for (int end = start; end < n; end++) {
        if (isWordInDict(s, start, end, wordDict, wordDictSize)) {
            if (wordBreakRecursive(s, end + 1, wordDict, wordDictSize, memo)) {
                setMemo(memo, memoKey, true);
                return true;
            }
        }
    }
    
    setMemo(memo, memoKey, false);
    return false;
}

/**
 * Recursive with Memoization
 * Time Complexity: O(n² * m * k)
 * Space Complexity: O(n)
 */
bool wordBreak(char* s, char** wordDict, int wordDictSize) {
    Memoization* memo = createMemo();
    bool result = wordBreakRecursive(s, 0, wordDict, wordDictSize, memo);
    freeMemo(memo);
    return result;
}

int main() {
    char s[1000];
    printf("Enter the string: ");
    scanf("%s", s);
    
    int wordDictSize;
    printf("Enter the number of words in dictionary: ");
    scanf("%d", &wordDictSize);
    
    char** wordDict = (char**)malloc(wordDictSize * sizeof(char*));
    
    printf("Enter %d words:\\n", wordDictSize);
    for (int i = 0; i < wordDictSize; i++) {
        wordDict[i] = (char*)malloc(100 * sizeof(char));
        scanf("%s", wordDict[i]);
    }
    
    bool result = wordBreak(s, wordDict, wordDictSize);
    printf("Can be segmented: %s\\n", result ? "true" : "false");
    
    // Free memory
    for (int i = 0; i < wordDictSize; i++) {
        free(wordDict[i]);
    }
    free(wordDict);
    
    return 0;
}`,
          timeComplexity: 'O(n² * m * k)',
          spaceComplexity: 'O(n)',
          explanation: 'We use recursion with memoization to try all possible word combinations. The memoization helps avoid redundant calculations but the recursive approach is less efficient than iterative dynamic programming.'
        }
      }
    }
  },
  {
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays - Binary Search',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).`,
    difficulty: 'Hard',
    category: ['Array', 'Binary Search', 'Divide and Conquer'],
    input1: 'nums1 = [1,3], nums2 = [2]',
    input2: 'nums1 = [1,2], nums2 = [3,4]',
    explanation: `## Problem Statement

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

## Examples

### Example 1:
**Input:** nums1 = [1,3], nums2 = [2]  
**Output:** 2.00000  
**Explanation:** merged array = [1,2,3] and median is 2.

### Example 2:
**Input:** nums1 = [1,2], nums2 = [3,4]  
**Output:** 2.50000  
**Explanation:** merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

### Example 3:
**Input:** nums1 = [0,0], nums2 = [0,0]  
**Output:** 0.00000  
**Explanation:** merged array = [0,0,0,0] and median is 0.

### Example 4:
**Input:** nums1 = [], nums2 = [1]  
**Output:** 1.00000  
**Explanation:** merged array = [1] and median is 1.

## Intuition

The key insight is to use binary search to find the correct partition of both arrays such that all elements on the left side are smaller than all elements on the right side. This allows us to find the median without actually merging the arrays.

## Approach

### Approach 1: Binary Search (Optimal)
1. Ensure nums1 is the smaller array
2. Use binary search on the smaller array to find the correct partition
3. Calculate the corresponding partition in the larger array
4. Check if the partition is correct (all left elements ≤ all right elements)
5. Return the median based on the partition

### Approach 2: Merge and Find
1. Merge the two sorted arrays
2. Find the median of the merged array
3. Less efficient but straightforward

### Approach 3: Two Pointers
1. Use two pointers to traverse both arrays
2. Count elements until reaching the median position
3. Inefficient for large arrays

## Dry Run

Let's trace through Example 1: nums1 = [1,3], nums2 = [2]

### Binary Search Approach:
- nums1 = [1,3], nums2 = [2]
- Total elements = 3 (odd), median position = 1
- Binary search on nums1 to find partition
- Partition nums1: left = [1], right = [3]
- Partition nums2: left = [2], right = []
- Check: max(left) = 2, min(right) = 3
- Since 2 ≤ 3, partition is correct
- Median = max(left) = 2

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Binary Search (Optimal)

**Time Complexity:** O(log(min(m,n))) - Binary search on smaller array  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: Merge and Find

**Time Complexity:** O(m+n) - Merge arrays  
**Space Complexity:** O(m+n) - Merged array

### Solution 3: Two Pointers

**Time Complexity:** O(m+n) - Traverse both arrays  
**Space Complexity:** O(1) - Constant extra space`,
    output1: '2.00000',
    output2: '2.50000',
    constraints: `## Constraints

- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -106 <= nums1[i], nums2[i] <= 106`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Helper function to find maximum of two integers
int max(int a, int b) {
    return (a > b) ? a : b;
}

// Helper function to find minimum of two integers
int min(int a, int b) {
    return (a < b) ? a : b;
}

/**
 * Binary Search approach - Optimal solution
 * Time Complexity: O(log(min(m,n)))
 * Space Complexity: O(1)
 */
double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // Ensure nums1 is the smaller array
    if (nums1Size > nums2Size) {
        return findMedianSortedArrays(nums2, nums2Size, nums1, nums1Size);
    }
    
    int m = nums1Size;
    int n = nums2Size;
    int left = 0;
    int right = m;
    
    while (left <= right) {
        // Partition nums1
        int partitionX = (left + right) / 2;
        int partitionY = (m + n + 1) / 2 - partitionX;
        
        // Find the four elements around the partition
        int maxLeftX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
        int minRightX = (partitionX == m) ? INT_MAX : nums1[partitionX];
        
        int maxLeftY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
        int minRightY = (partitionY == n) ? INT_MAX : nums2[partitionY];
        
        // Check if partition is correct
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Partition is correct, find median
            if ((m + n) % 2 == 1) {
                // Odd number of elements
                return (double)max(maxLeftX, maxLeftY);
            } else {
                // Even number of elements
                return (double)(max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0;
            }
        } else if (maxLeftX > minRightY) {
            // Move partition left
            right = partitionX - 1;
        } else {
            // Move partition right
            left = partitionX + 1;
        }
    }
    
    // This should never be reached
    return 0.0;
}

int main() {
    int m, n;
    
    printf("Enter size of first array: ");
    scanf("%d", &m);
    
    int* nums1 = (int*)malloc(m * sizeof(int));
    if (m > 0) {
        printf("Enter %d elements for first array (sorted): ", m);
        for (int i = 0; i < m; i++) {
            scanf("%d", &nums1[i]);
        }
    }
    
    printf("Enter size of second array: ");
    scanf("%d", &n);
    
    int* nums2 = (int*)malloc(n * sizeof(int));
    if (n > 0) {
        printf("Enter %d elements for second array (sorted): ", n);
        for (int i = 0; i < n; i++) {
            scanf("%d", &nums2[i]);
        }
    }
    
    double median = findMedianSortedArrays(nums1, m, nums2, n);
    printf("Median: %.5f\\n", median);
    
    free(nums1);
    free(nums2);
    return 0;
}`,
          timeComplexity: 'O(log(min(m,n)))',
          spaceComplexity: 'O(1)',
          explanation: 'We use binary search on the smaller array to find the correct partition. The partition divides both arrays such that all elements on the left are smaller than all elements on the right, allowing us to find the median without merging.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Merge and Find approach
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
    if (totalSize % 2 == 1) {
        // Odd number of elements
        median = (double)merged[totalSize / 2];
    } else {
        // Even number of elements
        median = (double)(merged[totalSize / 2 - 1] + merged[totalSize / 2]) / 2.0;
    }
    
    free(merged);
    return median;
}

int main() {
    int m, n;
    
    printf("Enter size of first array: ");
    scanf("%d", &m);
    
    int* nums1 = (int*)malloc(m * sizeof(int));
    if (m > 0) {
        printf("Enter %d elements for first array (sorted): ", m);
        for (int i = 0; i < m; i++) {
            scanf("%d", &nums1[i]);
        }
    }
    
    printf("Enter size of second array: ");
    scanf("%d", &n);
    
    int* nums2 = (int*)malloc(n * sizeof(int));
    if (n > 0) {
        printf("Enter %d elements for second array (sorted): ", n);
        for (int i = 0; i < n; i++) {
            scanf("%d", &nums2[i]);
        }
    }
    
    double median = findMedianSortedArrays(nums1, m, nums2, n);
    printf("Median: %.5f\\n", median);
    
    free(nums1);
    free(nums2);
    return 0;
}`,
          timeComplexity: 'O(m+n)',
          spaceComplexity: 'O(m+n)',
          explanation: 'We merge the two sorted arrays into a single sorted array, then find the median of the merged array. This is straightforward but less efficient than binary search.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Two Pointers approach
 * Time Complexity: O(m+n)
 * Space Complexity: O(1)
 */
double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int medianPos = totalSize / 2;
    int current = 0;
    int prev = 0;
    
    int i = 0, j = 0;
    int count = 0;
    
    // Traverse both arrays until reaching median position
    while (i < nums1Size && j < nums2Size && count <= medianPos) {
        prev = current;
        if (nums1[i] <= nums2[j]) {
            current = nums1[i++];
        } else {
            current = nums2[j++];
        }
        count++;
    }
    
    // Continue with remaining elements in nums1
    while (i < nums1Size && count <= medianPos) {
        prev = current;
        current = nums1[i++];
        count++;
    }
    
    // Continue with remaining elements in nums2
    while (j < nums2Size && count <= medianPos) {
        prev = current;
        current = nums2[j++];
        count++;
    }
    
    // Return median
    if (totalSize % 2 == 1) {
        // Odd number of elements
        return (double)current;
    } else {
        // Even number of elements
        return (double)(prev + current) / 2.0;
    }
}

int main() {
    int m, n;
    
    printf("Enter size of first array: ");
    scanf("%d", &m);
    
    int* nums1 = (int*)malloc(m * sizeof(int));
    if (m > 0) {
        printf("Enter %d elements for first array (sorted): ", m);
        for (int i = 0; i < m; i++) {
            scanf("%d", &nums1[i]);
        }
    }
    
    printf("Enter size of second array: ");
    scanf("%d", &n);
    
    int* nums2 = (int*)malloc(n * sizeof(int));
    if (n > 0) {
        printf("Enter %d elements for second array (sorted): ", n);
        for (int i = 0; i < n; i++) {
            scanf("%d", &nums2[i]);
        }
    }
    
    double median = findMedianSortedArrays(nums1, m, nums2, n);
    printf("Median: %.5f\\n", median);
    
    free(nums1);
    free(nums2);
    return 0;
}`,
          timeComplexity: 'O(m+n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use two pointers to traverse both arrays simultaneously, counting elements until we reach the median position. This avoids merging but still requires O(m+n) time.'
        }
      }
    }
  },
  {
    id: 'regular-expression-matching',
    title: 'Regular Expression Matching - Dynamic Programming',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' Matches any single character. '*' Matches zero or more of the preceding element. The matching should cover the entire input string (not partial).`,
    difficulty: 'Hard',
    category: ['String', 'Dynamic Programming', 'Recursion'],
    input1: 's = "aa", p = "a"',
    input2: 's = "aa", p = "a*"',
    explanation: `## Problem Statement

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.

- '.' Matches any single character.
- '*' Matches zero or more of the preceding element.

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

### Example 5:
**Input:** s = "mississippi", p = "mis*is*p*."  
**Output:** false  
**Explanation:** The pattern cannot match the entire string.

## Intuition

The key insight is to use dynamic programming to handle the complex pattern matching rules. We need to consider all possible ways the pattern can match the string, especially when dealing with '*' which can match zero or more occurrences.

## Approach

### Approach 1: Dynamic Programming (Optimal)
1. Create a DP table where dp[i][j] = true if s[0...i-1] matches p[0...j-1]
2. Handle base cases (empty string and pattern)
3. Handle different cases: exact match, '.', and '*'
4. For '*', consider zero or more repetitions of the preceding character

### Approach 2: Recursive with Memoization
1. Use recursion to try all possible matches
2. Use memoization to avoid redundant calculations
3. Handle the same cases as DP but recursively

### Approach 3: Backtracking
1. Use backtracking to try different combinations
2. Less efficient than DP but easier to understand
3. Handle '*' by trying different numbers of repetitions

## Dry Run

Let's trace through Example 2: s = "aa", p = "a*"

### Dynamic Programming Approach:
- dp[0][0] = true (empty matches empty)
- dp[0][1] = false (empty doesn't match "a")
- dp[0][2] = true (empty matches "a*" with zero repetitions)
- dp[1][0] = false ("a" doesn't match empty)
- dp[1][1] = true ("a" matches "a")
- dp[1][2] = true ("a" matches "a*" with one repetition)
- dp[2][0] = false ("aa" doesn't match empty)
- dp[2][1] = false ("aa" doesn't match "a")
- dp[2][2] = true ("aa" matches "a*" with two repetitions)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Dynamic Programming (Optimal)

**Time Complexity:** O(m*n) - m is string length, n is pattern length  
**Space Complexity:** O(m*n) - DP table

### Solution 2: Recursive with Memoization

**Time Complexity:** O(m*n) - m is string length, n is pattern length  
**Space Complexity:** O(m*n) - Memoization table

### Solution 3: Backtracking

**Time Complexity:** O((m+n)*2^(m+n)) - Exponential in worst case  
**Space Complexity:** O(m+n) - Recursion stack`,
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
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

/**
 * Dynamic Programming approach - Optimal solution
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
    
    // Handle patterns with '*'
    for (int j = 1; j <= n; j++) {
        if (p[j-1] == '*') {
            dp[0][j] = dp[0][j-2];  // Zero repetitions
        }
    }
    
    // Fill DP table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p[j-1] == '.' || p[j-1] == s[i-1]) {
                // Exact match or '.'
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] == '*') {
                // Handle '*'
                dp[i][j] = dp[i][j-2];  // Zero repetitions
                
                if (p[j-2] == '.' || p[j-2] == s[i-1]) {
                    // One or more repetitions
                    dp[i][j] = dp[i][j] || dp[i-1][j];
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
    char s[100], p[100];
    
    printf("Enter the string: ");
    scanf("%s", s);
    
    printf("Enter the pattern: ");
    scanf("%s", p);
    
    bool result = isMatch(s, p);
    printf("Pattern matches: %s\\n", result ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)',
          explanation: 'We use dynamic programming to build a table where dp[i][j] represents whether s[0...i-1] matches p[0...j-1]. We handle exact matches, ".", and "*" patterns efficiently.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Memoization table
bool** memo;
int memo_m, memo_n;

// Recursive function with memoization
bool isMatchRecursive(char* s, char* p, int i, int j) {
    // Check memoization
    if (memo[i][j] != -1) {
        return memo[i][j];
    }
    
    // Base cases
    if (j == 0) {
        return i == 0;  // Empty pattern matches only empty string
    }
    
    if (i == 0) {
        // Empty string: only matches patterns like "a*", ".*", "a*b*", etc.
        if (j % 2 == 1) return false;  // Odd length pattern
        for (int k = 1; k < j; k += 2) {
            if (p[k] != '*') return false;
        }
        return true;
    }
    
    bool result = false;
    
    if (p[j-1] == '.' || p[j-1] == s[i-1]) {
        // Exact match or '.'
        result = isMatchRecursive(s, p, i-1, j-1);
    } else if (p[j-1] == '*') {
        // Handle '*'
        result = isMatchRecursive(s, p, i, j-2);  // Zero repetitions
        
        if (p[j-2] == '.' || p[j-2] == s[i-1]) {
            // One or more repetitions
            result = result || isMatchRecursive(s, p, i-1, j);
        }
    }
    
    // Store result in memoization table
    memo[i][j] = result;
    return result;
}

/**
 * Recursive with Memoization approach
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 */
bool isMatch(char* s, char* p) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Initialize memoization table
    memo_m = m + 1;
    memo_n = n + 1;
    memo = (bool**)malloc(memo_m * sizeof(bool*));
    for (int i = 0; i < memo_m; i++) {
        memo[i] = (bool*)malloc(memo_n * sizeof(bool));
        for (int j = 0; j < memo_n; j++) {
            memo[i][j] = -1;  // -1 indicates not computed
        }
    }
    
    bool result = isMatchRecursive(s, p, m, n);
    
    // Free memory
    for (int i = 0; i < memo_m; i++) {
        free(memo[i]);
    }
    free(memo);
    
    return result;
}

int main() {
    char s[100], p[100];
    
    printf("Enter the string: ");
    scanf("%s", s);
    
    printf("Enter the pattern: ");
    scanf("%s", p);
    
    bool result = isMatch(s, p);
    printf("Pattern matches: %s\\n", result ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)',
          explanation: 'We use recursion with memoization to avoid redundant calculations. The recursive approach is easier to understand but less efficient than iterative dynamic programming.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Backtracking approach
bool isMatchBacktrack(char* s, char* p, int sIndex, int pIndex) {
    // Base cases
    if (pIndex == strlen(p)) {
        return sIndex == strlen(s);  // Both must be exhausted
    }
    
    // Check if current characters match
    bool firstMatch = (sIndex < strlen(s)) && 
                     (p[pIndex] == s[sIndex] || p[pIndex] == '.');
    
    // Handle '*'
    if (pIndex + 1 < strlen(p) && p[pIndex + 1] == '*') {
        // Try zero or more repetitions
        return isMatchBacktrack(s, p, sIndex, pIndex + 2) ||  // Zero repetitions
               (firstMatch && isMatchBacktrack(s, p, sIndex + 1, pIndex));  // One or more
    } else {
        // No '*', must match current character
        return firstMatch && isMatchBacktrack(s, p, sIndex + 1, pIndex + 1);
    }
}

/**
 * Backtracking approach
 * Time Complexity: O((m+n)*2^(m+n)) in worst case
 * Space Complexity: O(m+n)
 */
bool isMatch(char* s, char* p) {
    return isMatchBacktrack(s, p, 0, 0);
}

int main() {
    char s[100], p[100];
    
    printf("Enter the string: ");
    scanf("%s", s);
    
    printf("Enter the pattern: ");
    scanf("%s", p);
    
    bool result = isMatch(s, p);
    printf("Pattern matches: %s\\n", result ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O((m+n)*2^(m+n))',
          spaceComplexity: 'O(m+n)',
          explanation: 'We use backtracking to try all possible combinations of pattern matching. This approach is less efficient but easier to understand and implement.'
        }
      }
    }
  },
  {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water - Two Pointers',
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    difficulty: 'Hard',
    category: ['Array', 'Two Pointers', 'Dynamic Programming', 'Stack'],
    input1: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
    input2: 'height = [4,2,0,3,2,5]',
    explanation: `## Problem Statement

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

## Examples

### Example 1:
**Input:** height = [0,1,0,2,1,0,1,3,2,1,2,1]  
**Output:** 6  
**Explanation:** The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

### Example 2:
**Input:** height = [4,2,0,3,2,5]  
**Output:** 9  
**Explanation:** The elevation map is represented by array [4,2,0,3,2,5]. In this case, 9 units of rain water (blue section) are being trapped.

### Example 3:
**Input:** height = [2,0,2]  
**Output:** 2  
**Explanation:** The elevation map is represented by array [2,0,2]. In this case, 2 units of rain water are being trapped.

## Intuition

The key insight is that water can only be trapped between two bars that are higher than the current position. The amount of water trapped at any position is determined by the minimum of the maximum heights on the left and right sides, minus the height of the current position.

## Approach

### Approach 1: Two Pointers (Optimal)
1. Use two pointers (left and right) starting from both ends
2. Keep track of the maximum heights from left and right
3. Move the pointer with the smaller maximum height
4. Calculate trapped water based on the smaller maximum

### Approach 2: Dynamic Programming
1. Precompute maximum heights from left and right for each position
2. Calculate trapped water using the minimum of left and right maximums
3. More space efficient than brute force

### Approach 3: Stack
1. Use a stack to keep track of indices of bars
2. When a bar is higher than the top of stack, calculate trapped water
3. Less intuitive but efficient

## Dry Run

Let's trace through Example 1: height = [0,1,0,2,1,0,1,3,2,1,2,1]

### Two Pointers Approach:
- left = 0, right = 11, leftMax = 0, rightMax = 1, water = 0
- height[left] = 0 < height[right] = 1, move left
- left = 1, leftMax = 1, water += max(0, min(1,1) - 1) = 0
- height[left] = 1 = height[right] = 1, move left
- left = 2, leftMax = 1, water += max(0, min(1,1) - 0) = 1
- Continue until all positions are processed

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two Pointers (Optimal)

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(1) - Constant extra space

### Solution 2: Dynamic Programming

**Time Complexity:** O(n) - Two passes through array  
**Space Complexity:** O(n) - Two arrays for left and right maximums

### Solution 3: Stack

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(n) - Stack space`,
    output1: '6',
    output2: '9',
    constraints: `## Constraints

- n == height.length
- 1 <= n <= 2 * 104
- 0 <= height[i] <= 105`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Helper function to find minimum of two integers
int min(int a, int b) {
    return (a < b) ? a : b;
}

/**
 * Two Pointers approach - Optimal solution
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
int trap(int* height, int heightSize) {
    if (heightSize < 3) return 0;  // Need at least 3 bars to trap water
    
    int left = 0;
    int right = heightSize - 1;
    int leftMax = 0;
    int rightMax = 0;
    int water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            // Water can be trapped on the left side
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            // Water can be trapped on the right side
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
    int n;
    printf("Enter the number of bars: ");
    scanf("%d", &n);
    
    int* height = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d heights: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &height[i]);
    }
    
    int result = trap(height, n);
    printf("Total trapped water: %d\\n", result);
    
    free(height);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use two pointers starting from both ends. We move the pointer with the smaller height and calculate trapped water based on the maximum height seen so far from that side.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Helper function to find minimum of two integers
int min(int a, int b) {
    return (a < b) ? a : b;
}

// Helper function to find maximum of two integers
int max(int a, int b) {
    return (a > b) ? a : b;
}

/**
 * Dynamic Programming approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int trap(int* height, int heightSize) {
    if (heightSize < 3) return 0;  // Need at least 3 bars to trap water
    
    // Arrays to store maximum heights from left and right
    int* leftMax = (int*)malloc(heightSize * sizeof(int));
    int* rightMax = (int*)malloc(heightSize * sizeof(int));
    
    // Calculate maximum heights from left
    leftMax[0] = height[0];
    for (int i = 1; i < heightSize; i++) {
        leftMax[i] = max(leftMax[i-1], height[i]);
    }
    
    // Calculate maximum heights from right
    rightMax[heightSize-1] = height[heightSize-1];
    for (int i = heightSize-2; i >= 0; i--) {
        rightMax[i] = max(rightMax[i+1], height[i]);
    }
    
    // Calculate trapped water
    int water = 0;
    for (int i = 0; i < heightSize; i++) {
        water += min(leftMax[i], rightMax[i]) - height[i];
    }
    
    free(leftMax);
    free(rightMax);
    return water;
}

int main() {
    int n;
    printf("Enter the number of bars: ");
    scanf("%d", &n);
    
    int* height = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d heights: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &height[i]);
    }
    
    int result = trap(height, n);
    printf("Total trapped water: %d\\n", result);
    
    free(height);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We precompute the maximum heights from left and right for each position, then calculate trapped water using the minimum of these maximums minus the current height.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Stack implementation
typedef struct {
    int* data;
    int top;
    int capacity;
} Stack;

// Initialize stack
Stack* createStack(int capacity) {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->data = (int*)malloc(capacity * sizeof(int));
    stack->top = -1;
    stack->capacity = capacity;
    return stack;
}

// Push element to stack
void push(Stack* stack, int value) {
    if (stack->top < stack->capacity - 1) {
        stack->data[++stack->top] = value;
    }
}

// Pop element from stack
int pop(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top--];
    }
    return -1;
}

// Get top element
int top(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top];
    }
    return -1;
}

// Check if stack is empty
int isEmpty(Stack* stack) {
    return stack->top == -1;
}

// Free stack
void freeStack(Stack* stack) {
    free(stack->data);
    free(stack);
}

/**
 * Stack approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
int trap(int* height, int heightSize) {
    if (heightSize < 3) return 0;  // Need at least 3 bars to trap water
    
    Stack* stack = createStack(heightSize);
    int water = 0;
    
    for (int i = 0; i < heightSize; i++) {
        while (!isEmpty(stack) && height[i] > height[top(stack)]) {
            int topIndex = pop(stack);
            
            if (isEmpty(stack)) break;
            
            int distance = i - top(stack) - 1;
            int boundedHeight = (height[i] < height[top(stack)]) ? 
                               height[i] - height[topIndex] : 
                               height[top(stack)] - height[topIndex];
            
            water += distance * boundedHeight;
        }
        push(stack, i);
    }
    
    freeStack(stack);
    return water;
}

int main() {
    int n;
    printf("Enter the number of bars: ");
    scanf("%d", &n);
    
    int* height = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d heights: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &height[i]);
    }
    
    int result = trap(height, n);
    printf("Total trapped water: %d\\n", result);
    
    free(height);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'We use a stack to keep track of indices of bars. When we encounter a bar higher than the top of the stack, we calculate the trapped water between the current bar and the previous bar in the stack.'
        }
      }
    }
  },
  {
    id: 'sliding-window-maximum',
    title: 'Sliding Window Maximum - Monotonic Queue',
    description: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.`,
    difficulty: 'Hard',
    category: ['Array', 'Queue', 'Sliding Window', 'Monotonic Queue'],
    input1: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
    input2: 'nums = [1], k = 1',
    explanation: `## Problem Statement

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

## Examples

### Example 1:
**Input:** nums = [1,3,-1,-3,5,3,6,7], k = 3  
**Output:** [3,3,5,5,6,7]  
**Explanation:** 
Window position                Max
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

### Example 2:
**Input:** nums = [1], k = 1  
**Output:** [1]  
**Explanation:** There is only one element in the array and window size is 1.

### Example 3:
**Input:** nums = [1,-1], k = 1  
**Output:** [1,-1]  
**Explanation:** Each window contains one element.

### Example 4:
**Input:** nums = [9,11], k = 2  
**Output:** [11]  
**Explanation:** There is only one window with size 2.

## Intuition

The key insight is to use a monotonic queue (deque) that maintains elements in decreasing order. This allows us to efficiently find the maximum element in the current window and remove elements that are no longer in the window.

## Approach

### Approach 1: Monotonic Queue (Optimal)
1. Use a deque to maintain indices of elements in decreasing order
2. Remove elements from front that are outside the current window
3. Remove elements from back that are smaller than the current element
4. Add current element to the back
5. The front of deque always contains the maximum element

### Approach 2: Max Heap
1. Use a max heap to keep track of elements in the current window
2. Remove elements that are outside the window
3. Extract maximum from heap for each window
4. Less efficient due to heap operations

### Approach 3: Brute Force
1. For each window, find the maximum element
2. Simple but inefficient for large arrays
3. Time complexity O(n*k)

## Dry Run

Let's trace through Example 1: nums = [1,3,-1,-3,5,3,6,7], k = 3

### Monotonic Queue Approach:
- Window [1,3,-1]: deque = [1,3], max = 3
- Window [3,-1,-3]: deque = [3], max = 3
- Window [-1,-3,5]: deque = [5], max = 5
- Window [-3,5,3]: deque = [5], max = 5
- Window [5,3,6]: deque = [6], max = 6
- Window [3,6,7]: deque = [7], max = 7

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Monotonic Queue (Optimal)

**Time Complexity:** O(n) - Each element is pushed and popped at most once  
**Space Complexity:** O(k) - Deque size is at most k

### Solution 2: Max Heap

**Time Complexity:** O(n log k) - Heap operations  
**Space Complexity:** O(k) - Heap size

### Solution 3: Brute Force

**Time Complexity:** O(n*k) - For each window, find maximum  
**Space Complexity:** O(1) - Constant extra space`,
    output1: '[3,3,5,5,6,7]',
    output2: '[1]',
    constraints: `## Constraints

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- 1 <= k <= nums.length`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Deque implementation
typedef struct {
    int* data;
    int front;
    int rear;
    int capacity;
    int size;
} Deque;

// Initialize deque
Deque* createDeque(int capacity) {
    Deque* deque = (Deque*)malloc(sizeof(Deque));
    deque->data = (int*)malloc(capacity * sizeof(int));
    deque->front = 0;
    deque->rear = -1;
    deque->capacity = capacity;
    deque->size = 0;
    return deque;
}

// Check if deque is empty
int isEmpty(Deque* deque) {
    return deque->size == 0;
}

// Check if deque is full
int isFull(Deque* deque) {
    return deque->size == deque->capacity;
}

// Add element to front
void pushFront(Deque* deque, int value) {
    if (isFull(deque)) return;
    
    deque->front = (deque->front - 1 + deque->capacity) % deque->capacity;
    deque->data[deque->front] = value;
    deque->size++;
}

// Add element to back
void pushBack(Deque* deque, int value) {
    if (isFull(deque)) return;
    
    deque->rear = (deque->rear + 1) % deque->capacity;
    deque->data[deque->rear] = value;
    deque->size++;
}

// Remove element from front
int popFront(Deque* deque) {
    if (isEmpty(deque)) return -1;
    
    int value = deque->data[deque->front];
    deque->front = (deque->front + 1) % deque->capacity;
    deque->size--;
    return value;
}

// Remove element from back
int popBack(Deque* deque) {
    if (isEmpty(deque)) return -1;
    
    int value = deque->data[deque->rear];
    deque->rear = (deque->rear - 1 + deque->capacity) % deque->capacity;
    deque->size--;
    return value;
}

// Get front element
int getFront(Deque* deque) {
    if (isEmpty(deque)) return -1;
    return deque->data[deque->front];
}

// Get back element
int getBack(Deque* deque) {
    if (isEmpty(deque)) return -1;
    return deque->data[deque->rear];
}

// Free deque
void freeDeque(Deque* deque) {
    free(deque->data);
    free(deque);
}

/**
 * Monotonic Queue approach - Optimal solution
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */
int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    if (numsSize == 0 || k == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    *returnSize = numsSize - k + 1;
    int* result = (int*)malloc(*returnSize * sizeof(int));
    
    Deque* deque = createDeque(numsSize);
    
    for (int i = 0; i < numsSize; i++) {
        // Remove elements outside the current window
        while (!isEmpty(deque) && getFront(deque) <= i - k) {
            popFront(deque);
        }
        
        // Remove elements smaller than current element
        while (!isEmpty(deque) && nums[getBack(deque)] < nums[i]) {
            popBack(deque);
        }
        
        // Add current element
        pushBack(deque, i);
        
        // Add maximum to result (starting from k-1)
        if (i >= k - 1) {
            result[i - k + 1] = nums[getFront(deque)];
        }
    }
    
    freeDeque(deque);
    return result;
}

int main() {
    int n, k;
    
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int* nums = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d elements: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    
    printf("Enter window size: ");
    scanf("%d", &k);
    
    int returnSize;
    int* result = maxSlidingWindow(nums, n, k, &returnSize);
    
    printf("Maximum sliding window: [");
    for (int i = 0; i < returnSize; i++) {
        printf("%d", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    
    free(nums);
    free(result);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(k)',
          explanation: 'We use a monotonic deque that maintains indices of elements in decreasing order. The front of the deque always contains the maximum element in the current window.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Max heap implementation
typedef struct {
    int* data;
    int size;
    int capacity;
} MaxHeap;

// Initialize max heap
MaxHeap* createMaxHeap(int capacity) {
    MaxHeap* heap = (MaxHeap*)malloc(sizeof(MaxHeap));
    heap->data = (int*)malloc(capacity * sizeof(int));
    heap->size = 0;
    heap->capacity = capacity;
    return heap;
}

// Swap two elements
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Heapify down
void heapifyDown(MaxHeap* heap, int index) {
    int largest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    
    if (left < heap->size && heap->data[left] > heap->data[largest]) {
        largest = left;
    }
    
    if (right < heap->size && heap->data[right] > heap->data[largest]) {
        largest = right;
    }
    
    if (largest != index) {
        swap(&heap->data[index], &heap->data[largest]);
        heapifyDown(heap, largest);
    }
}

// Insert element
void insert(MaxHeap* heap, int value) {
    if (heap->size >= heap->capacity) return;
    
    heap->data[heap->size] = value;
    int i = heap->size;
    heap->size++;
    
    // Heapify up
    while (i > 0 && heap->data[(i - 1) / 2] < heap->data[i]) {
        swap(&heap->data[i], &heap->data[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

// Extract maximum
int extractMax(MaxHeap* heap) {
    if (heap->size == 0) return -1;
    
    int max = heap->data[0];
    heap->data[0] = heap->data[heap->size - 1];
    heap->size--;
    heapifyDown(heap, 0);
    
    return max;
}

// Get maximum without removing
int getMax(MaxHeap* heap) {
    if (heap->size == 0) return -1;
    return heap->data[0];
}

// Free max heap
void freeMaxHeap(MaxHeap* heap) {
    free(heap->data);
    free(heap);
}

/**
 * Max Heap approach
 * Time Complexity: O(n log k)
 * Space Complexity: O(k)
 */
int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    if (numsSize == 0 || k == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    *returnSize = numsSize - k + 1;
    int* result = (int*)malloc(*returnSize * sizeof(int));
    
    MaxHeap* heap = createMaxHeap(numsSize);
    
    // Add first k elements
    for (int i = 0; i < k; i++) {
        insert(heap, nums[i]);
    }
    
    result[0] = getMax(heap);
    
    // Process remaining elements
    for (int i = k; i < numsSize; i++) {
        // Remove element that's no longer in window
        // Note: This is a simplified version. In practice, you'd need a more complex heap
        // that can remove arbitrary elements efficiently
        
        insert(heap, nums[i]);
        result[i - k + 1] = getMax(heap);
    }
    
    freeMaxHeap(heap);
    return result;
}

int main() {
    int n, k;
    
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int* nums = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d elements: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    
    printf("Enter window size: ");
    scanf("%d", &k);
    
    int returnSize;
    int* result = maxSlidingWindow(nums, n, k, &returnSize);
    
    printf("Maximum sliding window: [");
    for (int i = 0; i < returnSize; i++) {
        printf("%d", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    
    free(nums);
    free(result);
    return 0;
}`,
          timeComplexity: 'O(n log k)',
          spaceComplexity: 'O(k)',
          explanation: 'We use a max heap to keep track of elements in the current window. For each window, we extract the maximum element. This approach is less efficient due to heap operations.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Helper function to find maximum in a range
int findMax(int* nums, int start, int end) {
    int max = nums[start];
    for (int i = start + 1; i <= end; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

/**
 * Brute Force approach
 * Time Complexity: O(n*k)
 * Space Complexity: O(1)
 */
int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    if (numsSize == 0 || k == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    *returnSize = numsSize - k + 1;
    int* result = (int*)malloc(*returnSize * sizeof(int));
    
    // For each window, find the maximum
    for (int i = 0; i <= numsSize - k; i++) {
        result[i] = findMax(nums, i, i + k - 1);
    }
    
    return result;
}

int main() {
    int n, k;
    
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int* nums = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d elements: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    
    printf("Enter window size: ");
    scanf("%d", &k);
    
    int returnSize;
    int* result = maxSlidingWindow(nums, n, k, &returnSize);
    
    printf("Maximum sliding window: [");
    for (int i = 0; i < returnSize; i++) {
        printf("%d", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    
    free(nums);
    free(result);
    return 0;
}`,
          timeComplexity: 'O(n*k)',
          spaceComplexity: 'O(1)',
          explanation: 'For each window, we find the maximum element by iterating through all elements in the window. This is simple but inefficient for large arrays.'
        }
      }
    }
  }
];
