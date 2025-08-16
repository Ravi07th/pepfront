// Cognizant Coding Questions
// This file contains coding questions specifically for Cognizant interviews

import { additionalCognizantMediumQuestions } from './cognizantMediumQuestions';

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

export const allCognizantQuestions: Question[] = [
  {
    id: 'find-duplicate-number',
    title: 'Find the Duplicate Number',
    description: `Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.`,
    difficulty: 'Easy',
    category: ['Array', 'Two Pointers', 'Binary Search'],
    input1: 'nums = [1,3,4,2,2]',
    input2: 'nums = [3,1,3,4,2]',
    explanation: `## Problem Statement

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

## Examples

### Example 1:
**Input:** nums = [1,3,4,2,2]  
**Output:** 2  
**Explanation:** The duplicate number is 2.

### Example 2:
**Input:** nums = [3,1,3,4,2]  
**Output:** 3  
**Explanation:** The duplicate number is 3.

## Intuition

Since we have n+1 numbers in range [1,n], by pigeonhole principle, there must be at least one duplicate. We can use Floyd's Cycle Detection Algorithm (Tortoise and Hare) to find the duplicate.

The key insight is that we can treat the array as a linked list where each value points to the index of the next value. Since there's a duplicate, this creates a cycle.

## Approach

### Approach 1: Floyd's Cycle Detection (Optimal)
1. Use two pointers: slow and fast
2. Move slow by 1 step, fast by 2 steps
3. When they meet, reset slow to start
4. Move both pointers by 1 step until they meet again
5. The meeting point is the duplicate

### Approach 2: Binary Search
1. Search for the duplicate in range [1, n]
2. For each mid value, count numbers <= mid
3. If count > mid, duplicate is in left half
4. Otherwise, duplicate is in right half

### Approach 3: Using Array as Hash Table
1. Use the array indices as hash table
2. Mark visited numbers by negating them
3. If we encounter a negative number, it's the duplicate

## Dry Run

Let's trace through Example 1: nums = [1,3,4,2,2]

### Floyd's Cycle Detection:
- slow = 0, fast = 0
- slow = nums[0] = 1, fast = nums[nums[0]] = nums[1] = 3
- slow = nums[1] = 3, fast = nums[nums[3]] = nums[2] = 4
- slow = nums[2] = 4, fast = nums[nums[4]] = nums[2] = 4
- They meet at index 4, value 2
- Reset slow = 0
- slow = nums[0] = 1, fast = nums[4] = 2
- slow = nums[1] = 3, fast = nums[2] = 4
- slow = nums[3] = 2, fast = nums[4] = 2
- They meet at value 2, which is the duplicate

## Key Insights

1. **Pigeonhole Principle**: With n+1 numbers in range [1,n], there must be a duplicate
2. **Linked List Cycle**: The array can be treated as a linked list with a cycle
3. **Floyd's Algorithm**: Efficient way to find cycle start point
4. **Constant Space**: No extra space needed for optimal solution

## Edge Cases

1. **Single element**: Array with only one element
2. **All same numbers**: Array with all elements being the same
3. **Large range**: Array with large values but small range

## Time and Space Complexity

- **Time Complexity**: O(n) - Linear time with Floyd's algorithm
- **Space Complexity**: O(1) - Only constant extra space used`,
    output1: '2',
    output2: '3',
    constraints: `## Constraints
- 1 <= n <= 10⁵
- nums.length == n + 1
- 1 <= nums[i] <= n
- All the integers in nums appear only once except for precisely one integer which appears two or more times.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

int findDuplicate(int* nums, int numsSize) {
    int slow = nums[0];
    int fast = nums[0];
    
    // Find the meeting point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    // Find the start of the cycle
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}

int main() {
    int nums1[] = {1,3,4,2,2};
    int nums2[] = {3,1,3,4,2};
    
    printf("Input: nums = [1,3,4,2,2]\\n");
    printf("Output: %d\\n", findDuplicate(nums1, 5));
    
    printf("\\nInput: nums = [3,1,3,4,2]\\n");
    printf("Output: %d\\n", findDuplicate(nums2, 5));
    
    printf("\\nFloyd's Cycle Detection Approach:\\n");
    printf("Treat array as linked list with cycle\\n");
    printf("Use two pointers to find cycle start\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using Floyd\'s Cycle Detection Algorithm. It treats the array as a linked list and finds the cycle start point, which is the duplicate number.'
        },
        average: {
          code: `#include <stdio.h>

int findDuplicate(int* nums, int numsSize) {
    int left = 1, right = numsSize - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        int count = 0;
        
        // Count numbers <= mid
        for (int i = 0; i < numsSize; i++) {
            if (nums[i] <= mid) {
                count++;
            }
        }
        
        if (count > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

int main() {
    int nums1[] = {1,3,4,2,2};
    int nums2[] = {3,1,3,4,2};
    
    printf("Input: nums = [1,3,4,2,2]\\n");
    printf("Output: %d\\n", findDuplicate(nums1, 5));
    
    printf("\\nInput: nums = [3,1,3,4,2]\\n");
    printf("Output: %d\\n", findDuplicate(nums2, 5));
    
    printf("\\nBinary Search Approach:\\n");
    printf("Search for duplicate in range [1, n]\\n");
    printf("Count numbers <= mid to determine direction\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach uses binary search to find the duplicate. It counts numbers less than or equal to mid to determine which half contains the duplicate.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int findDuplicate(int* nums, int numsSize) {
    // Create a hash table to track visited numbers
    int* visited = (int*)calloc(numsSize, sizeof(int));
    
    for (int i = 0; i < numsSize; i++) {
        if (visited[nums[i]] == 1) {
            free(visited);
            return nums[i];
        }
        visited[nums[i]] = 1;
    }
    
    free(visited);
    return -1;
}

int main() {
    int nums1[] = {1,3,4,2,2};
    int nums2[] = {3,1,3,4,2};
    
    printf("Input: nums = [1,3,4,2,2]\\n");
    printf("Output: %d\\n", findDuplicate(nums1, 5));
    
    printf("\\nInput: nums = [3,1,3,4,2]\\n");
    printf("Output: %d\\n", findDuplicate(nums2, 5));
    
    printf("\\nHash Table Approach:\\n");
    printf("Use hash table to track visited numbers\\n");
    printf("Return first number that appears twice\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses a hash table to track visited numbers. It is straightforward but requires extra space.'
        }
      }
    }
  },
  {
    id: 'missing-number',
    title: 'Missing Number',
    description: `Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

The array contains n distinct numbers in the range [0, n], so there is exactly one missing number.`,
    difficulty: 'Easy',
    category: ['Array', 'Mathematics', 'Bit Manipulation'],
    input1: 'nums = [3,0,1]',
    input2: 'nums = [0,1]',
    explanation: `## Problem Statement

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

The array contains n distinct numbers in the range [0, n], so there is exactly one missing number.

## Examples

### Example 1:
**Input:** nums = [3,0,1]  
**Output:** 2  
**Explanation:** n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number since it does not appear in nums.

### Example 2:
**Input:** nums = [0,1]  
**Output:** 2  
**Explanation:** n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number since it does not appear in nums.

## Intuition

Since we have n distinct numbers in range [0, n], the sum of all numbers from 0 to n should be n*(n+1)/2. The missing number is the difference between this expected sum and the actual sum of the array.

Alternatively, we can use XOR operation since XOR of a number with itself is 0, and XOR is associative and commutative.

## Approach

### Approach 1: Mathematical Sum (Optimal)
1. Calculate expected sum: n*(n+1)/2
2. Calculate actual sum of array
3. Return difference: expected - actual

### Approach 2: XOR Operation
1. XOR all numbers from 0 to n
2. XOR all numbers in the array
3. The result is the missing number

### Approach 3: Sorting and Linear Search
1. Sort the array
2. Check if each number from 0 to n exists
3. Return the first missing number

## Dry Run

Let's trace through Example 1: nums = [3,0,1]

### Mathematical Sum Approach:
- n = 3 (array length)
- Expected sum = 3*(3+1)/2 = 6
- Actual sum = 3 + 0 + 1 = 4
- Missing number = 6 - 4 = 2

### XOR Approach:
- XOR all numbers from 0 to 3: 0^1^2^3 = 0
- XOR all numbers in array: 3^0^1 = 2
- Result = 0^2 = 2

## Key Insights

1. **Sum Formula**: Sum of first n natural numbers is n*(n+1)/2
2. **XOR Properties**: XOR of a number with itself is 0
3. **Range Property**: Numbers are in range [0, n] with exactly one missing
4. **Mathematical Solution**: Most efficient and intuitive

## Edge Cases

1. **Single element**: Array with only one element
2. **Missing 0**: Array missing the first number
3. **Missing n**: Array missing the last number
4. **Empty array**: Edge case (though constraints prevent this)

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through array
- **Space Complexity**: O(1) - Only constant extra space used`,
    output1: '2',
    output2: '2',
    constraints: `## Constraints
- n == nums.length
- 1 <= n <= 10⁴
- 0 <= nums[i] <= n
- All the numbers of nums are unique.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

int missingNumber(int* nums, int numsSize) {
    int expectedSum = numsSize * (numsSize + 1) / 2;
    int actualSum = 0;
    
    for (int i = 0; i < numsSize; i++) {
        actualSum += nums[i];
    }
    
    return expectedSum - actualSum;
}

int main() {
    int nums1[] = {3,0,1};
    int nums2[] = {0,1};
    
    printf("Input: nums = [3,0,1]\\n");
    printf("Output: %d\\n", missingNumber(nums1, 3));
    
    printf("\\nInput: nums = [0,1]\\n");
    printf("Output: %d\\n", missingNumber(nums2, 2));
    
    printf("\\nMathematical Sum Approach:\\n");
    printf("Calculate expected sum: n*(n+1)/2\\n");
    printf("Subtract actual sum to find missing number\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using mathematical sum. It calculates the expected sum and subtracts the actual sum to find the missing number.'
        },
        average: {
          code: `#include <stdio.h>

int missingNumber(int* nums, int numsSize) {
    int result = numsSize;
    
    for (int i = 0; i < numsSize; i++) {
        result ^= i ^ nums[i];
    }
    
    return result;
}

int main() {
    int nums1[] = {3,0,1};
    int nums2[] = {0,1};
    
    printf("Input: nums = [3,0,1]\\n");
    printf("Output: %d\\n", missingNumber(nums1, 3));
    
    printf("\\nInput: nums = [0,1]\\n");
    printf("Output: %d\\n", missingNumber(nums2, 2));
    
    printf("\\nXOR Approach:\\n");
    printf("XOR all numbers from 0 to n with array elements\\n");
    printf("Result is the missing number\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach uses XOR operation. It XORs all numbers from 0 to n with the array elements, and the result is the missing number.'
        },
        worst: {
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
    int nums1[] = {3,0,1};
    int nums2[] = {0,1};
    
    printf("Input: nums = [3,0,1]\\n");
    printf("Output: %d\\n", missingNumber(nums1, 3));
    
    printf("\\nInput: nums = [0,1]\\n");
    printf("Output: %d\\n", missingNumber(nums2, 2));
    
    printf("\\nSorting Approach:\\n");
    printf("Sort array and check for missing number\\n");
    printf("Return first number that doesn't match index\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach sorts the array and then checks for the missing number by comparing each element with its index. It is less efficient due to sorting.'
        }
      }
    }
  },
  {
    id: 'longest-common-prefix',
    title: 'Longest Common Prefix',
    description: `Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".`,
    difficulty: 'Easy',
    category: ['String', 'Horizontal Scanning'],
    input1: 'strs = ["flower","flow","flight"]',
    input2: 'strs = ["dog","racecar","car"]',
    explanation: `## Problem Statement

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## Examples

### Example 1:
**Input:** strs = ["flower","flow","flight"]  
**Output:** "fl"  
**Explanation:** The longest common prefix is "fl".

### Example 2:
**Input:** strs = ["dog","racecar","car"]  
**Output:** ""  
**Explanation:** There is no common prefix among the input strings.

## Intuition

We need to find the longest prefix that is common to all strings in the array. We can compare characters at the same position across all strings until we find a mismatch.

## Approach

### Approach 1: Horizontal Scanning (Optimal)
1. Start with the first string as the prefix
2. For each subsequent string, find the common prefix
3. Update the prefix to be the common part
4. Return the final prefix

### Approach 2: Vertical Scanning
1. Compare characters at the same index across all strings
2. Stop when characters don't match or we reach the end of any string
3. Return the prefix found so far

### Approach 3: Divide and Conquer
1. Divide the array into two halves
2. Find common prefix for each half recursively
3. Find common prefix between the two results

## Dry Run

Let's trace through Example 1: strs = ["flower","flow","flight"]

### Horizontal Scanning:
- prefix = "flower"
- Compare with "flow": common = "flow"
- Compare with "flight": common = "fl"
- Return "fl"

### Vertical Scanning:
- Compare index 0: 'f' == 'f' == 'f' ✓
- Compare index 1: 'l' == 'l' == 'l' ✓
- Compare index 2: 'o' == 'o' == 'i' ✗ (mismatch)
- Return "fl"

## Key Insights

1. **Horizontal Scanning**: Compare strings one by one
2. **Vertical Scanning**: Compare characters at same position
3. **Early Termination**: Stop when no common prefix found
4. **Edge Cases**: Empty array, single string, no common prefix

## Edge Cases

1. **Empty array**: Return ""
2. **Single string**: Return the string itself
3. **No common prefix**: Return ""
4. **All same strings**: Return any string
5. **Strings with different lengths**: Handle carefully

## Time and Space Complexity

- **Time Complexity**: O(S) where S is the sum of all characters in all strings
- **Space Complexity**: O(1) - Only constant extra space used`,
    output1: '"fl"',
    output2: '""',
    constraints: `## Constraints
- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    if (strsSize == 0) return "";
    if (strsSize == 1) return strs[0];
    
    // Start with first string as prefix
    int prefixLen = strlen(strs[0]);
    char* prefix = (char*)malloc((prefixLen + 1) * sizeof(char));
    strcpy(prefix, strs[0]);
    
    // Compare with each string
    for (int i = 1; i < strsSize; i++) {
        int j = 0;
        while (j < prefixLen && j < strlen(strs[i]) && prefix[j] == strs[i][j]) {
            j++;
        }
        prefixLen = j;
        prefix[prefixLen] = '\\0';
    }
    
    return prefix;
}

int main() {
    char* strs1[] = {"flower", "flow", "flight"};
    char* strs2[] = {"dog", "racecar", "car"};
    
    printf("Input: strs = [\\"flower\\",\\"flow\\",\\"flight\\"]\\n");
    printf("Output: \\"%s\\"\\n", longestCommonPrefix(strs1, 3));
    
    printf("\\nInput: strs = [\\"dog\\",\\"racecar\\",\\"car\\"]\\n");
    printf("Output: \\"%s\\"\\n", longestCommonPrefix(strs2, 3));
    
    printf("\\nHorizontal Scanning Approach:\\n");
    printf("Compare strings one by one to find common prefix\\n");
    
    return 0;
}`,
          timeComplexity: 'O(S)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using horizontal scanning. It compares strings one by one to find the longest common prefix.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    if (strsSize == 0) return "";
    if (strsSize == 1) return strs[0];
    
    // Find minimum length
    int minLen = strlen(strs[0]);
    for (int i = 1; i < strsSize; i++) {
        int len = strlen(strs[i]);
        if (len < minLen) minLen = len;
    }
    
    // Compare characters vertically
    char* result = (char*)malloc((minLen + 1) * sizeof(char));
    int resultLen = 0;
    
    for (int i = 0; i < minLen; i++) {
        char currentChar = strs[0][i];
        for (int j = 1; j < strsSize; j++) {
            if (strs[j][i] != currentChar) {
                result[resultLen] = '\\0';
                return result;
            }
        }
        result[resultLen++] = currentChar;
    }
    
    result[resultLen] = '\\0';
    return result;
}

int main() {
    char* strs1[] = {"flower", "flow", "flight"};
    char* strs2[] = {"dog", "racecar", "car"};
    
    printf("Input: strs = [\\"flower\\",\\"flow\\",\\"flight\\"]\\n");
    printf("Output: \\"%s\\"\\n", longestCommonPrefix(strs1, 3));
    
    printf("\\nInput: strs = [\\"dog\\",\\"racecar\\",\\"car\\"]\\n");
    printf("Output: \\"%s\\"\\n", longestCommonPrefix(strs2, 3));
    
    printf("\\nVertical Scanning Approach:\\n");
    printf("Compare characters at same position across all strings\\n");
    
    return 0;
}`,
          timeComplexity: 'O(S)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach uses vertical scanning to compare characters at the same position across all strings.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    if (strsSize == 0) return "";
    if (strsSize == 1) return strs[0];
    
    // Sort the array (inefficient but simple)
    for (int i = 0; i < strsSize - 1; i++) {
        for (int j = i + 1; j < strsSize; j++) {
            if (strcmp(strs[i], strs[j]) > 0) {
                char* temp = strs[i];
                strs[i] = strs[j];
                strs[j] = temp;
            }
        }
    }
    
    // Find common prefix between first and last string
    int minLen = strlen(strs[0]);
    int lastLen = strlen(strs[strsSize - 1]);
    if (lastLen < minLen) minLen = lastLen;
    
    char* result = (char*)malloc((minLen + 1) * sizeof(char));
    int resultLen = 0;
    
    for (int i = 0; i < minLen; i++) {
        if (strs[0][i] == strs[strsSize - 1][i]) {
            result[resultLen++] = strs[0][i];
        } else {
            break;
        }
    }
    
    result[resultLen] = '\\0';
    return result;
}

int main() {
    char* strs1[] = {"flower", "flow", "flight"};
    char* strs2[] = {"dog", "racecar", "car"};
    
    printf("Input: strs = [\\"flower\\",\\"flow\\",\\"flight\\"]\\n");
    printf("Output: \\"%s\\"\\n", longestCommonPrefix(strs1, 3));
    
    printf("\\nInput: strs = [\\"dog\\",\\"racecar\\",\\"car\\"]\\n");
    printf("Output: \\"%s\\"\\n", longestCommonPrefix(strs2, 3));
    
    printf("\\nSorting Approach:\\n");
    printf("Sort array and find common prefix between first and last\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n² log n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach sorts the array and finds the common prefix between the first and last string. It is inefficient due to sorting.'
        }
      }
    }
  },
  {
    id: 'ransom-note',
    title: 'Ransom Note',
    description: `Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.`,
    difficulty: 'Easy',
    category: ['String', 'Hash Table'],
    input1: 'ransomNote = "a", magazine = "b"',
    input2: 'ransomNote = "aa", magazine = "ab"',
    explanation: `## Problem Statement

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

## Examples

### Example 1:
**Input:** ransomNote = "a", magazine = "b"  
**Output:** false  
**Explanation:** The letter 'a' is not available in magazine.

### Example 2:
**Input:** ransomNote = "aa", magazine = "ab"  
**Output:** false  
**Explanation:** The letter 'a' appears only once in magazine, but we need it twice.

### Example 3:
**Input:** ransomNote = "aa", magazine = "aab"  
**Output:** true  
**Explanation:** We can construct "aa" using the letters from "aab".

## Intuition

We need to check if we have enough letters in the magazine to construct the ransom note. We can count the frequency of each letter in both strings and compare them.

## Approach

### Approach 1: Hash Table (Optimal)
1. Count frequency of each character in magazine
2. For each character in ransomNote, check if we have enough letters
3. Decrease the count as we use letters
4. Return false if we don't have enough letters

### Approach 2: Array Counter
1. Use an array of size 26 to count letters (for lowercase)
2. Count magazine letters, then check ransomNote
3. More efficient for lowercase letters only

### Approach 3: Sorting
1. Sort both strings
2. Use two pointers to match characters
3. Return false if we can't match all characters

## Dry Run

Let's trace through Example 3: ransomNote = "aa", magazine = "aab"

### Hash Table Approach:
- Count magazine: {'a': 2, 'b': 1}
- Check 'a' in ransomNote: count['a'] = 2 > 0 ✓, decrement to 1
- Check 'a' in ransomNote: count['a'] = 1 > 0 ✓, decrement to 0
- All characters used successfully ✓
- Return true

## Key Insights

1. **Character Frequency**: Count letters in magazine
2. **Greedy Approach**: Use letters as needed
3. **Early Termination**: Return false if insufficient letters
4. **Case Sensitivity**: Handle uppercase/lowercase properly

## Edge Cases

1. **Empty ransomNote**: Return true (can always construct empty string)
2. **Empty magazine**: Return false if ransomNote is not empty
3. **Same strings**: Return true
4. **Magazine shorter than ransomNote**: Return false
5. **Repeated characters**: Handle frequency correctly

## Time and Space Complexity

- **Time Complexity**: O(m + n) where m and n are lengths of magazine and ransomNote
- **Space Complexity**: O(1) - Only constant space for character counts`,
    output1: 'false',
    output2: 'false',
    constraints: `## Constraints
- 1 <= ransomNote.length, magazine.length <= 10⁵
- ransomNote and magazine consist of lowercase English letters.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool canConstruct(char* ransomNote, char* magazine) {
    int count[26] = {0}; // Count for each lowercase letter
    
    // Count letters in magazine
    for (int i = 0; magazine[i] != '\\0'; i++) {
        count[magazine[i] - 'a']++;
    }
    
    // Check if we can construct ransomNote
    for (int i = 0; ransomNote[i] != '\\0'; i++) {
        int index = ransomNote[i] - 'a';
        if (count[index] <= 0) {
            return false;
        }
        count[index]--;
    }
    
    return true;
}

int main() {
    char ransomNote1[] = "a";
    char magazine1[] = "b";
    char ransomNote2[] = "aa";
    char magazine2[] = "ab";
    char ransomNote3[] = "aa";
    char magazine3[] = "aab";
    
    printf("Input: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote1, magazine1);
    printf("Output: %s\\n", canConstruct(ransomNote1, magazine1) ? "true" : "false");
    
    printf("\\nInput: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote2, magazine2);
    printf("Output: %s\\n", canConstruct(ransomNote2, magazine2) ? "true" : "false");
    
    printf("\\nInput: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote3, magazine3);
    printf("Output: %s\\n", canConstruct(ransomNote3, magazine3) ? "true" : "false");
    
    printf("\\nArray Counter Approach:\\n");
    printf("Use array to count character frequencies\\n");
    
    return 0;
}`,
          timeComplexity: 'O(m + n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using an array counter. It counts character frequencies and checks if ransomNote can be constructed.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool canConstruct(char* ransomNote, char* magazine) {
    int ransomLen = strlen(ransomNote);
    int magazineLen = strlen(magazine);
    
    // If ransomNote is longer than magazine, impossible
    if (ransomLen > magazineLen) {
        return false;
    }
    
    // Create a copy of magazine to mark used characters
    char* magazineCopy = (char*)malloc((magazineLen + 1) * sizeof(char));
    strcpy(magazineCopy, magazine);
    
    // Check each character in ransomNote
    for (int i = 0; i < ransomLen; i++) {
        bool found = false;
        for (int j = 0; j < magazineLen; j++) {
            if (magazineCopy[j] == ransomNote[i]) {
                magazineCopy[j] = '\\0'; // Mark as used
                found = true;
                break;
            }
        }
        if (!found) {
            free(magazineCopy);
            return false;
        }
    }
    
    free(magazineCopy);
    return true;
}

int main() {
    char ransomNote1[] = "a";
    char magazine1[] = "b";
    char ransomNote2[] = "aa";
    char magazine2[] = "ab";
    char ransomNote3[] = "aa";
    char magazine3[] = "aab";
    
    printf("Input: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote1, magazine1);
    printf("Output: %s\\n", canConstruct(ransomNote1, magazine1) ? "true" : "false");
    
    printf("\\nInput: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote2, magazine2);
    printf("Output: %s\\n", canConstruct(ransomNote2, magazine2) ? "true" : "false");
    
    printf("\\nInput: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote3, magazine3);
    printf("Output: %s\\n", canConstruct(ransomNote3, magazine3) ? "true" : "false");
    
    printf("\\nLinear Search Approach:\\n");
    printf("Search for each character in magazine\\n");
    
    return 0;
}`,
          timeComplexity: 'O(mn)',
          spaceComplexity: 'O(m)',
          explanation: 'This approach searches for each character in ransomNote within the magazine. It is less efficient but straightforward.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

int compare(const void* a, const void* b) {
    return (*(char*)a - *(char*)b);
}

bool canConstruct(char* ransomNote, char* magazine) {
    int ransomLen = strlen(ransomNote);
    int magazineLen = strlen(magazine);
    
    // If ransomNote is longer than magazine, impossible
    if (ransomLen > magazineLen) {
        return false;
    }
    
    // Create sorted copies
    char* ransomSorted = (char*)malloc((ransomLen + 1) * sizeof(char));
    char* magazineSorted = (char*)malloc((magazineLen + 1) * sizeof(char));
    
    strcpy(ransomSorted, ransomNote);
    strcpy(magazineSorted, magazine);
    
    // Sort both strings
    qsort(ransomSorted, ransomLen, sizeof(char), compare);
    qsort(magazineSorted, magazineLen, sizeof(char), compare);
    
    // Use two pointers to match characters
    int ransomPtr = 0;
    int magazinePtr = 0;
    
    while (ransomPtr < ransomLen && magazinePtr < magazineLen) {
        if (ransomSorted[ransomPtr] == magazineSorted[magazinePtr]) {
            ransomPtr++;
            magazinePtr++;
        } else if (ransomSorted[ransomPtr] > magazineSorted[magazinePtr]) {
            magazinePtr++;
        } else {
            // ransomSorted[ransomPtr] < magazineSorted[magazinePtr]
            break; // Can't find this character
        }
    }
    
    bool result = (ransomPtr == ransomLen);
    
    free(ransomSorted);
    free(magazineSorted);
    
    return result;
}

int main() {
    char ransomNote1[] = "a";
    char magazine1[] = "b";
    char ransomNote2[] = "aa";
    char magazine2[] = "ab";
    char ransomNote3[] = "aa";
    char magazine3[] = "aab";
    
    printf("Input: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote1, magazine1);
    printf("Output: %s\\n", canConstruct(ransomNote1, magazine1) ? "true" : "false");
    
    printf("\\nInput: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote2, magazine2);
    printf("Output: %s\\n", canConstruct(ransomNote2, magazine2) ? "true" : "false");
    
    printf("\\nInput: ransomNote = \\"%s\\", magazine = \\"%s\\"\\n", ransomNote3, magazine3);
    printf("Output: %s\\n", canConstruct(ransomNote3, magazine3) ? "true" : "false");
    
    printf("\\nSorting Approach:\\n");
    printf("Sort both strings and use two pointers\\n");
    
    return 0;
}`,
          timeComplexity: 'O(m log m + n log n)',
          spaceComplexity: 'O(m + n)',
          explanation: 'This approach sorts both strings and uses two pointers to match characters. It is inefficient due to sorting.'
        }
      }
    }
  },
  {
    id: 'decode-string',
    title: 'Decode String',
    description: `Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].`,
    difficulty: 'Medium',
    category: ['String', 'Stack'],
    input1: 's = "3[a]2[bc]"',
    input2: 's = "3[a2[c]]"',
    explanation: `## Problem Statement

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

## Examples

### Example 1:
**Input:** s = "3[a]2[bc]"  
**Output:** "aaabcbc"  
**Explanation:** "3[a]" means "aaa", "2[bc]" means "bcbc".

### Example 2:
**Input:** s = "3[a2[c]]"  
**Output:** "accaccacc"  
**Explanation:** "3[a2[c]]" means "3[acc]" which is "accaccacc".

## Intuition

This is a nested decoding problem where we need to handle brackets within brackets. We can use a stack to keep track of the current string and the number of repetitions.

## Approach

### Approach 1: Stack (Optimal)
1. Use two stacks: one for numbers and one for strings
2. When we encounter a digit, build the number
3. When we encounter '[', push current string and number to stacks
4. When we encounter ']', pop and repeat the string
5. When we encounter a letter, append to current string

## Key Insights

1. **Stack Data Structure**: Perfect for nested bracket problems
2. **Number Building**: Handle multi-digit numbers
3. **String Concatenation**: Build result incrementally
4. **Nested Processing**: Handle brackets within brackets

## Time and Space Complexity

- **Time Complexity**: O(n) where n is the length of the output string
- **Space Complexity**: O(n) for the stack storage`,
    output1: '"aaabcbc"',
    output2: '"accaccacc"',
    constraints: `## Constraints
- 1 <= s.length <= 30
- s consists of lowercase English letters, digits, and square brackets '[]'.
- s is guaranteed to be a valid input.
- All the integers in s are in the range [1, 300].`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

char* decodeString(char* s) {
    int len = strlen(s);
    char* result = (char*)malloc(10000);
    result[0] = '\\0';
    int resultLen = 0;
    
    for (int i = 0; i < len; i++) {
        if (isdigit(s[i])) {
            int num = 0;
            while (i < len && isdigit(s[i])) {
                num = num * 10 + (s[i] - '0');
                i++;
            }
            i++; // Skip '['
            
            // Find matching ']'
            int bracketCount = 1;
            int start = i;
            while (bracketCount > 0 && i < len) {
                if (s[i] == '[') bracketCount++;
                else if (s[i] == ']') bracketCount--;
                i++;
            }
            
            // Recursively decode substring
            char* substring = (char*)malloc(i - start);
            strncpy(substring, s + start, i - start - 1);
            substring[i - start - 1] = '\\0';
            
            char* decoded = decodeString(substring);
            int decodedLen = strlen(decoded);
            
            // Repeat the decoded string
            for (int j = 0; j < num; j++) {
                strcpy(result + resultLen, decoded);
                resultLen += decodedLen;
            }
            
            free(substring);
            free(decoded);
            i--; // Adjust for loop increment
        } else if (isalpha(s[i])) {
            result[resultLen++] = s[i];
            result[resultLen] = '\\0';
        }
    }
    
    return result;
}

int main() {
    char s1[] = "3[a]2[bc]";
    char s2[] = "3[a2[c]]";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: \\"%s\\"\\n", decodeString(s1));
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: \\"%s\\"\\n", decodeString(s2));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This is the optimal solution using recursion. It handles nested brackets efficiently by recursively decoding substrings.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

char* decodeString(char* s) {
    int len = strlen(s);
    char* result = (char*)malloc(10000);
    result[0] = '\\0';
    int resultLen = 0;
    
    for (int i = 0; i < len; i++) {
        if (isdigit(s[i])) {
            int num = 0;
            while (i < len && isdigit(s[i])) {
                num = num * 10 + (s[i] - '0');
                i++;
            }
            i++; // Skip '['
            
            // Find matching ']' by counting brackets
            int bracketCount = 1;
            int start = i;
            while (bracketCount > 0 && i < len) {
                if (s[i] == '[') bracketCount++;
                else if (s[i] == ']') bracketCount--;
                i++;
            }
            
            // Extract substring manually
            char* substring = (char*)malloc(i - start);
            int subLen = 0;
            for (int j = start; j < i - 1; j++) {
                substring[subLen++] = s[j];
            }
            substring[subLen] = '\\0';
            
            // Simple string repetition
            for (int j = 0; j < num; j++) {
                for (int k = 0; k < subLen; k++) {
                    result[resultLen++] = substring[k];
                }
            }
            result[resultLen] = '\\0';
            
            free(substring);
            i--; // Adjust for loop increment
        } else if (isalpha(s[i])) {
            result[resultLen++] = s[i];
            result[resultLen] = '\\0';
        }
    }
    
    return result;
}

int main() {
    char s1[] = "3[a]2[bc]";
    char s2[] = "3[a2[c]]";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: \\"%s\\"\\n", decodeString(s1));
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: \\"%s\\"\\n", decodeString(s2));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses manual string manipulation without proper data structures, making it less efficient.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

char* decodeString(char* s) {
    int len = strlen(s);
    char* result = (char*)malloc(10000);
    result[0] = '\\0';
    int resultLen = 0;
    
    for (int i = 0; i < len; i++) {
        if (isdigit(s[i])) {
            int num = 0;
            while (i < len && isdigit(s[i])) {
                num = num * 10 + (s[i] - '0');
                i++;
            }
            i++; // Skip '['
            
            // Find matching ']' by counting brackets
            int bracketCount = 1;
            int start = i;
            while (bracketCount > 0 && i < len) {
                if (s[i] == '[') bracketCount++;
                else if (s[i] == ']') bracketCount--;
                i++;
            }
            
            // Extract substring manually
            char* substring = (char*)malloc(i - start);
            int subLen = 0;
            for (int j = start; j < i - 1; j++) {
                substring[subLen++] = s[j];
            }
            substring[subLen] = '\\0';
            
            // Simple string repetition (inefficient)
            for (int j = 0; j < num; j++) {
                for (int k = 0; k < subLen; k++) {
                    result[resultLen++] = substring[k];
                }
            }
            result[resultLen] = '\\0';
            
            free(substring);
            i--; // Adjust for loop increment
        } else if (isalpha(s[i])) {
            result[resultLen++] = s[i];
            result[resultLen] = '\\0';
        }
    }
    
    return result;
}

int main() {
    char s1[] = "3[a]2[bc]";
    char s2[] = "3[a2[c]]";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: \\"%s\\"\\n", decodeString(s1));
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: \\"%s\\"\\n", decodeString(s2));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses manual string manipulation without proper data structures, making it inefficient for complex nested structures.'
        }
      }
    }
  },
  {
    id: 'isomorphic-strings',
    title: 'Isomorphic Strings',
    description: `Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.`,
    difficulty: 'Medium',
    category: ['String', 'Hash Table'],
    input1: 's = "egg", t = "add"',
    input2: 's = "foo", t = "bar"',
    explanation: `## Problem Statement

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

## Examples

### Example 1:
**Input:** s = "egg", t = "add"  
**Output:** true  
**Explanation:** 'e' → 'a', 'g' → 'd'

### Example 2:
**Input:** s = "foo", t = "bar"  
**Output:** false  
**Explanation:** 'f' → 'b', 'o' → 'a', 'o' → 'r' (conflict)

### Example 3:
**Input:** s = "paper", t = "title"  
**Output:** true  
**Explanation:** 'p' → 't', 'a' → 'i', 'e' → 'l', 'r' → 'e'

## Intuition

We need to establish a one-to-one mapping between characters in s and t. We can use two hash maps to ensure both directions of mapping are consistent.

## Approach

### Approach 1: Two Hash Maps (Optimal)
1. Use two arrays to track character mappings
2. Map s[i] to t[i] and t[i] to s[i]
3. Check for conflicts in both directions
4. Return false if any conflict is found

### Approach 2: Single Hash Map with Set
1. Use one hash map for s to t mapping
2. Use a set to track used characters in t
3. Check for conflicts in mapping and usage

### Approach 3: Character Frequency Analysis
1. Analyze character positions and frequencies
2. Check if the pattern of character occurrences matches
3. More complex but provides insight into structure

## Dry Run

Let's trace through Example 1: s = "egg", t = "add"

### Two Hash Maps Approach:
- sMap: {}, tMap: {}
- i=0: s[0]='e', t[0]='a'
  - sMap['e'] = 'a', tMap['a'] = 'e' ✓
- i=1: s[1]='g', t[1]='d'
  - sMap['g'] = 'd', tMap['d'] = 'g' ✓
- i=2: s[2]='g', t[2]='d'
  - sMap['g'] = 'd' (consistent) ✓
- Return true

### Example 2: s = "foo", t = "bar"
- i=0: sMap['f'] = 'b', tMap['b'] = 'f' ✓
- i=1: sMap['o'] = 'a', tMap['a'] = 'o' ✓
- i=2: sMap['o'] = 'a' but t[2] = 'r' ✗ (conflict)
- Return false

## Key Insights

1. **Bijective Mapping**: Each character must map to exactly one character
2. **Two-way Check**: Need to verify both s→t and t→s mappings
3. **Order Preservation**: Character order must be maintained
4. **Conflict Detection**: Same character in s cannot map to different characters in t

## Edge Cases

1. **Same strings**: "abc", "abc" → true
2. **Different lengths**: "abc", "abcd" → false
3. **Empty strings**: "", "" → true
4. **Single character**: "a", "b" → true
5. **All same characters**: "aaa", "bbb" → true

## Time and Space Complexity

- **Time Complexity**: O(n) where n is the length of the strings
- **Space Complexity**: O(1) since we use fixed-size arrays (ASCII characters)`,
    output1: 'true',
    output2: 'false',
    constraints: `## Constraints
- 1 <= s.length <= 5 * 10⁴
- t.length == s.length
- s and t consist of any valid ascii character.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isIsomorphic(char* s, char* t) {
    int sMap[128] = {0}; // Map s characters to t characters
    int tMap[128] = {0}; // Map t characters to s characters
    
    for (int i = 0; s[i] != '\\0'; i++) {
        char sChar = s[i];
        char tChar = t[i];
        
        // Check if s[i] is already mapped
        if (sMap[sChar] == 0) {
            // Check if t[i] is already mapped to another character
            if (tMap[tChar] != 0 && tMap[tChar] != sChar) {
                return false;
            }
            sMap[sChar] = tChar;
            tMap[tChar] = sChar;
        } else {
            // Check if current mapping is consistent
            if (sMap[sChar] != tChar) {
                return false;
            }
        }
    }
    
    return true;
}

int main() {
    char s1[] = "egg";
    char t1[] = "add";
    char s2[] = "foo";
    char t2[] = "bar";
    char s3[] = "paper";
    char t3[] = "title";
    
    printf("Input: s = \\"%s\\", t = \\"%s\\"\\n", s1, t1);
    printf("Output: %s\\n", isIsomorphic(s1, t1) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\", t = \\"%s\\"\\n", s2, t2);
    printf("Output: %s\\n", isIsomorphic(s2, t2) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\", t = \\"%s\\"\\n", s3, t3);
    printf("Output: %s\\n", isIsomorphic(s3, t3) ? "true" : "false");
    
    printf("\\nTwo Hash Maps Approach:\\n");
    printf("Use two arrays to track bidirectional mappings\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using two hash maps. It ensures both directions of character mapping are consistent.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isIsomorphic(char* s, char* t) {
    int sMap[128] = {0}; // Map s characters to t characters
    bool used[128] = {false}; // Track used characters in t
    
    for (int i = 0; s[i] != '\\0'; i++) {
        char sChar = s[i];
        char tChar = t[i];
        
        // Check if s[i] is already mapped
        if (sMap[sChar] == 0) {
            // Check if t[i] is already used by another character
            if (used[tChar]) {
                return false;
            }
            sMap[sChar] = tChar;
            used[tChar] = true;
        } else {
            // Check if current mapping is consistent
            if (sMap[sChar] != tChar) {
                return false;
            }
        }
    }
    
    return true;
}

int main() {
    char s1[] = "egg";
    char t1[] = "add";
    char s2[] = "foo";
    char t2[] = "bar";
    char s3[] = "paper";
    char t3[] = "title";
    
    printf("Input: s = \\"%s\\", t = \\"%s\\"\\n", s1, t1);
    printf("Output: %s\\n", isIsomorphic(s1, t1) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\", t = \\"%s\\"\\n", s2, t2);
    printf("Output: %s\\n", isIsomorphic(s2, t2) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\", t = \\"%s\\"\\n", s3, t3);
    printf("Output: %s\\n", isIsomorphic(s3, t3) ? "true" : "false");
    
    printf("\\nSingle Hash Map with Set Approach:\\n");
    printf("Use one map and a boolean array to track used characters\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach uses a single hash map and a boolean array to track used characters in the target string.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

bool isIsomorphic(char* s, char* t) {
    int len = strlen(s);
    
    // Check if lengths are different
    if (len != strlen(t)) {
        return false;
    }
    
    // For each character in s, check all its occurrences
    for (int i = 0; i < len; i++) {
        char sChar = s[i];
        char tChar = t[i];
        
        // Check all occurrences of sChar in s
        for (int j = 0; j < len; j++) {
            if (s[j] == sChar) {
                // All occurrences of sChar must map to tChar
                if (t[j] != tChar) {
                    return false;
                }
            }
        }
        
        // Check all occurrences of tChar in t
        for (int j = 0; j < len; j++) {
            if (t[j] == tChar) {
                // All occurrences of tChar must come from sChar
                if (s[j] != sChar) {
                    return false;
                }
            }
        }
    }
    
    return true;
}

int main() {
    char s1[] = "egg";
    char t1[] = "add";
    char s2[] = "foo";
    char t2[] = "bar";
    char s3[] = "paper";
    char t3[] = "title";
    
    printf("Input: s = \\"%s\\", t = \\"%s\\"\\n", s1, t1);
    printf("Output: %s\\n", isIsomorphic(s1, t1) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\", t = \\"%s\\"\\n", s2, t2);
    printf("Output: %s\\n", isIsomorphic(s2, t2) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\", t = \\"%s\\"\\n", s3, t3);
    printf("Output: %s\\n", isIsomorphic(s3, t3) ? "true" : "false");
    
    printf("\\nBrute Force Approach:\\n");
    printf("Check all character occurrences for consistency\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach uses nested loops to check all character occurrences for consistency. It is inefficient but straightforward.'
        }
      }
    }
  }
];

// Add the medium string questions
allCognizantQuestions.push(...additionalCognizantMediumQuestions);

export default allCognizantQuestions;
