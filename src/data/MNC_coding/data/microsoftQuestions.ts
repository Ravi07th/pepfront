// Microsoft Coding Questions - MNC Coding Platform
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

export const allMicrosoftQuestions: Question[] = [
  {
    id: 'ms-1',
    title: 'Longest Valid Parentheses',
    description: `Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.`,
    difficulty: 'Medium',
    category: ['String', 'Dynamic Programming', 'Stack'],
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
**Explanation:** Empty string has no valid parentheses.

### Example 4:
**Input:** s = "((()))"  
**Output:** 6  
**Explanation:** The entire string is a valid parentheses substring.

### Example 5:
**Input:** s = "()(()"  
**Output:** 2  
**Explanation:** The longest valid parentheses substring is "()".

## Intuition

The key insight is that valid parentheses must be balanced. We can use a stack to keep track of indices of opening parentheses and calculate the length of valid substrings. The crucial observation is that when we encounter a closing parenthesis, we need to find its matching opening parenthesis and calculate the length of the valid substring ending at the current position.

## Approach

### Approach 1: Stack (Optimal)
1. Use a stack to store indices of opening parentheses
2. Initialize stack with -1 to handle edge cases (this helps calculate length correctly)
3. For each character:
   - If '(': push current index to stack
   - If ')': pop from stack, calculate length if stack is not empty
4. Keep track of maximum length found

### Approach 2: Dynamic Programming
1. Create a DP array where dp[i] represents length of valid parentheses ending at i
2. For each ')', check if there's a matching '(' before it
3. Update DP values and track maximum

### Approach 3: Two Pass (Space Optimized)
1. Count '(' and ')' in both directions
2. Reset counters when they become unbalanced
3. Track maximum length in both passes

## Dry Run

Let's trace through Example 2: s = ")()())"

### Stack Approach:
- i=0, char=')': pop(), stack=[-1], maxLen=0
- i=1, char='(': push(1), stack=[-1,1]
- i=2, char=')': pop(), stack=[-1], len=2-(-1)=3, maxLen=3
- i=3, char='(': push(3), stack=[-1,3]
- i=4, char=')': pop(), stack=[-1], len=4-(-1)=5, maxLen=5
- i=5, char=')': pop(), stack=[-1], maxLen=5

### DP Approach:
- dp[0] = 0, dp[1] = 0, dp[2] = 2, dp[3] = 0, dp[4] = 4, dp[5] = 0
- maxLen = 4 (from dp[4])

## Solution

**Note:** This solution provides multiple approaches to solve the problem. Choose the one that best fits your understanding and requirements.

### Key Insights:
1. **Stack Approach**: The key insight is using -1 as the initial stack value to handle edge cases properly
2. **DP Approach**: We can build the solution incrementally by considering valid parentheses ending at each position
3. **Two Pass**: We can optimize space by counting in both directions and resetting when unbalanced

### Edge Cases:
- Empty string: return 0
- Single character: return 0
- All opening parentheses: return 0
- All closing parentheses: return 0

## Time Complexity

- **Best Case:** O(n) - Single pass through the string
- **Average Case:** O(n) - Stack operations are O(1) amortized
- **Worst Case:** O(n) - When all characters are '('

## Space Complexity

- **Best Case:** O(1) - Two pass approach
- **Average Case:** O(n) - Stack approach
- **Worst Case:** O(n) - When all characters are '('`,
    output1: '2',
    output2: '4',
    constraints: '0 <= s.length <= 3 * 10^4\ns[i] is \'(\', or \')\'',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int longestValidParentheses(char* s) {
    int n = strlen(s);
    if (n <= 1) return 0;
    
    int stack[n + 1];
    int top = 0;
    stack[top++] = -1;  // Base case
    
    int maxLen = 0;
    
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') {
            stack[top++] = i;
        } else {
            top--;  // Pop the matching '('
            if (top == 0) {
                stack[top++] = i;  // New base case
            } else {
                int len = i - stack[top - 1];
                if (len > maxLen) {
                    maxLen = len;
                }
            }
        }
    }
    
    return maxLen;
}

int main() {
    char s1[] = "(()";
    printf("Test 1: %d\\n", longestValidParentheses(s1));
    
    char s2[] = ")()())";
    printf("Test 2: %d\\n", longestValidParentheses(s2));
    
    return 0;
}`,
          explanation: 'This is the optimal stack-based solution. We use a stack to keep track of indices of opening parentheses. When we encounter a closing parenthesis, we pop from the stack and calculate the length of the valid substring.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>

int longestValidParentheses(char* s) {
    int n = strlen(s);
    if (n <= 1) return 0;
    
    int dp[n];
    memset(dp, 0, sizeof(dp));
    
    int maxLen = 0;
    
    for (int i = 1; i < n; i++) {
        if (s[i] == ')') {
            if (s[i-1] == '(') {
                dp[i] = (i >= 2 ? dp[i-2] : 0) + 2;
            } else if (i - dp[i-1] > 0 && s[i - dp[i-1] - 1] == '(') {
                dp[i] = dp[i-1] + 2 + (i - dp[i-1] - 2 >= 0 ? dp[i - dp[i-1] - 2] : 0);
            }
            if (dp[i] > maxLen) {
                maxLen = dp[i];
            }
        }
    }
    
    return maxLen;
}

int main() {
    char s1[] = "(()";
    printf("Test 1: %d\\n", longestValidParentheses(s1));
    
    char s2[] = ")()())";
    printf("Test 2: %d\\n", longestValidParentheses(s2));
    
    return 0;
}`,
          explanation: 'This is the dynamic programming approach. We create a DP array where dp[i] represents the length of valid parentheses ending at position i.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>

int longestValidParentheses(char* s) {
    int n = strlen(s);
    if (n <= 1) return 0;
    
    int maxLen = 0;
    
    // Forward pass
    int left = 0, right = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') left++;
        else right++;
        
        if (left == right) {
            maxLen = (left + right > maxLen) ? left + right : maxLen;
        } else if (right > left) {
            left = right = 0;
        }
    }
    
    // Backward pass
    left = right = 0;
    for (int i = n - 1; i >= 0; i--) {
        if (s[i] == '(') left++;
        else right++;
        
        if (left == right) {
            maxLen = (left + right > maxLen) ? left + right : maxLen;
        } else if (left > right) {
            left = right = 0;
        }
    }
    
    return maxLen;
}

int main() {
    char s1[] = "(()";
    printf("Test 1: %d\\n", longestValidParentheses(s1));
    
    char s2[] = ")()())";
    printf("Test 2: %d\\n", longestValidParentheses(s2));
    
    return 0;
}`,
          explanation: 'This is the two-pass approach that optimizes space complexity. We count opening and closing parentheses in both directions and reset counters when they become unbalanced.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      }
    }
  },
  {
    id: 'ms-2',
    title: 'Median of Two Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).`,
    difficulty: 'Medium',
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

### Example 3:
**Input:** nums1 = [0,0], nums2 = [0,0]  
**Output:** 0.00000  
**Explanation:** merged array = [0,0,0,0] and median is (0 + 0) / 2 = 0.

### Example 4:
**Input:** nums1 = [], nums2 = [1]  
**Output:** 1.00000  
**Explanation:** merged array = [1] and median is 1.

### Example 5:
**Input:** nums1 = [2], nums2 = []  
**Output:** 2.00000  
**Explanation:** merged array = [2] and median is 2.

## Intuition

The key insight is that we don't need to merge the arrays. Instead, we can use binary search to find the correct partition that divides both arrays into left and right halves such that all elements in the left half are less than all elements in the right half. The median will be the average of the maximum element from the left partition and the minimum element from the right partition.

## Approach

### Approach 1: Binary Search (Optimal)
1. Ensure nums1 is the smaller array for efficiency
2. Use binary search on the smaller array to find the correct partition
3. Calculate corresponding partition in the larger array
4. Check if the partition is correct (all left elements ≤ all right elements)
5. Calculate median based on partition

### Approach 2: Merge and Find
1. Merge the two sorted arrays
2. Find the median of the merged array
3. Time complexity: O(m+n), Space: O(m+n)

### Approach 3: Two Pointers
1. Use two pointers to traverse both arrays
2. Count elements until we reach the median position
3. Time complexity: O((m+n)/2)

## Dry Run

Let's trace through Example 1: nums1 = [1,3], nums2 = [2]

### Binary Search Approach:
- Ensure nums1 is smaller: nums1=[1,3], nums2=[2]
- Binary search on nums1: low=0, high=2
- mid=1: partition1=1, partition2=0
- Check: maxLeft1=1, minRight1=3, maxLeft2=-∞, minRight2=2
- Condition: maxLeft1(1) ≤ minRight2(2) ✓, maxLeft2(-∞) ≤ minRight1(3) ✓
- Median = max(maxLeft1, maxLeft2) = max(1, -∞) = 1

### Merge Approach:
- Merged array: [1,2,3]
- Median = 2 (middle element)

## Solution

**Note:** This solution provides multiple approaches to solve the problem. Choose the one that best fits your understanding and requirements.

### Key Insights:
1. **Binary Search**: The key insight is that we don't need to merge arrays - we just need to find the correct partition point
2. **Partition Logic**: A correct partition ensures all elements in left half ≤ all elements in right half
3. **Edge Cases**: Handle empty arrays and arrays of different sizes properly

### Edge Cases:
- One array is empty: return median of the other array
- Both arrays have same size: partition logic becomes simpler
- Arrays have very different sizes: ensure we search on the smaller array

## Time Complexity

- **Best Case:** O(log(min(m,n))) - Binary search on smaller array
- **Average Case:** O(log(min(m,n))) - Binary search approach
- **Worst Case:** O(m+n) - Merge approach

## Space Complexity

- **Best Case:** O(1) - Binary search approach
- **Average Case:** O(1) - In-place operations
- **Worst Case:** O(m+n) - Merge approach`,
    output1: '2.00000',
    output2: '2.50000',
    constraints: 'nums1.length == m\nnums2.length == n\n0 <= m <= 1000\n0 <= n <= 1000\n1 <= m + n <= 2000\n-10^6 <= nums1[i], nums2[i] <= 10^6',
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
    
    int low = 0, high = nums1Size;
    
    while (low <= high) {
        int partitionX = (low + high) / 2;
        int partitionY = (nums1Size + nums2Size + 1) / 2 - partitionX;
        
        int maxLeftX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
        int minRightX = (partitionX == nums1Size) ? INT_MAX : nums1[partitionX];
        
        int maxLeftY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
        int minRightY = (partitionY == nums2Size) ? INT_MAX : nums2[partitionY];
        
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Found the correct partition
            if ((nums1Size + nums2Size) % 2 == 0) {
                return (double)((max(maxLeftX, maxLeftY) + min(minRightX, minRightY))) / 2.0;
            } else {
                return (double)max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    
    return 0.0;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

int min(int a, int b) {
    return (a < b) ? a : b;
}

int main() {
    int nums1[] = {1, 3};
    int nums2[] = {2};
    printf("Test 1: %.5f\\n", findMedianSortedArrays(nums1, 2, nums2, 1));
    
    int nums3[] = {1, 2};
    int nums4[] = {3, 4};
    printf("Test 2: %.5f\\n", findMedianSortedArrays(nums3, 2, nums4, 2));
    
    return 0;
}`,
          explanation: 'This is the optimal binary search solution. We ensure the first array is smaller, then use binary search to find the correct partition that divides both arrays into left and right halves.',
          timeComplexity: 'O(log(min(m,n)))',
          spaceComplexity: 'O(1)'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

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
    int nums1[] = {1, 3};
    int nums2[] = {2};
    printf("Test 1: %.5f\\n", findMedianSortedArrays(nums1, 2, nums2, 1));
    
    int nums3[] = {1, 2};
    int nums4[] = {3, 4};
    printf("Test 2: %.5f\\n", findMedianSortedArrays(nums3, 2, nums4, 2));
    
    return 0;
}`,
          explanation: 'This is the merge approach. We merge the two sorted arrays into a single sorted array, then find the median. This approach is straightforward but uses O(m+n) extra space.',
          timeComplexity: 'O(m+n)',
          spaceComplexity: 'O(m+n)'
        },
        worst: {
          code: `#include <stdio.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int medianPos = totalSize / 2;
    
    int i = 0, j = 0, count = 0;
    int prev = 0, curr = 0;
    
    // Use two pointers to find median
    while (count <= medianPos) {
        prev = curr;
        
        if (i < nums1Size && (j >= nums2Size || nums1[i] <= nums2[j])) {
            curr = nums1[i++];
        } else {
            curr = nums2[j++];
        }
        
        count++;
    }
    
    if (totalSize % 2 == 0) {
        return (double)(prev + curr) / 2.0;
    } else {
        return (double)curr;
    }
}

int main() {
    int nums1[] = {1, 3};
    int nums2[] = {2};
    printf("Test 1: %.5f\\n", findMedianSortedArrays(nums1, 2, nums2, 1));
    
    int nums3[] = {1, 2};
    int nums4[] = {3, 4};
    printf("Test 2: %.5f\\n", findMedianSortedArrays(nums3, 2, nums4, 2));
    
    return 0;
}`,
          explanation: 'This is the two-pointer approach. We use two pointers to traverse both arrays and count elements until we reach the median position. This approach doesn\'t require extra space.',
          timeComplexity: 'O((m+n)/2)',
          spaceComplexity: 'O(1)'
        }
      }
    }
  },
  {
    id: 'ms-3',
    title: 'Regular Expression Matching',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' Matches any single character. '*' Matches zero or more of the preceding element.`,
    difficulty: 'Medium',
    category: ['String', 'Dynamic Programming', 'Recursion'],
    input1: 's = "aa", p = "a"',
    input2: 's = "aa", p = "a*"',
    explanation: `## Problem Statement

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' Matches any single character. '*' Matches zero or more of the preceding element.

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
**Explanation:** c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".

### Example 5:
**Input:** s = "mississippi", p = "mis*is*p*."  
**Output:** false  
**Explanation:** The pattern doesn't match the entire string.

## Intuition

The key insight is that this is a dynamic programming problem where we need to match the string against the pattern character by character, handling the special cases of '.' and '*' appropriately. The '*' character is particularly tricky as it can match zero or more of the preceding character, which requires us to consider multiple possibilities.

## Approach

### Approach 1: Dynamic Programming (Optimal)
1. Create a 2D DP table where dp[i][j] represents if s[0...i-1] matches p[0...j-1]
2. Handle base cases: empty string and empty pattern
3. For each character in pattern:
   - If it's a regular character or '.', check if it matches current string character
   - If it's '*', handle zero or more repetitions of the preceding character
4. Fill the DP table bottom-up

### Approach 2: Recursion with Memoization
1. Use recursive function with memoization
2. Handle each case: regular character, '.', and '*'
3. Cache results to avoid redundant calculations

### Approach 3: Backtracking
1. Try all possible matches for '*' patterns
2. Backtrack when a match fails
3. Time complexity can be exponential in worst case

## Dry Run

Let's trace through Example 2: s = "aa", p = "a*"

### DP Approach:
- Initialize dp[0][0] = true (empty matches empty)
- dp[0][1] = false (empty string doesn't match "a")
- dp[0][2] = true (empty string matches "a*" with zero repetitions)
- dp[1][0] = false (non-empty string doesn't match empty pattern)
- dp[1][1] = true (first 'a' matches first 'a')
- dp[1][2] = true (second 'a' matches "a*" with one repetition)

### Recursion Approach:
- s="aa", p="a*"
- firstMatch = true (first characters match)
- Check p[1] = '*'
- Try zero occurrence: isMatch("aa", "") = false
- Try one occurrence: isMatch("a", "a*") = true
- Result: true

## Solution

**Note:** This solution provides multiple approaches to solve the problem. Choose the one that best fits your understanding and requirements.

### Key Insights:
1. **DP Approach**: The key insight is building the solution incrementally using a 2D table
2. **Star Handling**: When we encounter '*', we need to consider both zero and one-or-more occurrences
3. **Base Cases**: Empty pattern matches empty string, but not non-empty strings

### Edge Cases:
- Empty string with empty pattern: true
- Empty string with non-empty pattern: depends on pattern
- Non-empty string with empty pattern: false
- Pattern with consecutive stars: handled by DP logic

## Time Complexity

- **Best Case:** O(m*n) - DP approach where m and n are lengths of string and pattern
- **Average Case:** O(m*n) - DP approach
- **Worst Case:** O(2^(m+n)) - Backtracking approach

## Space Complexity

- **Best Case:** O(m*n) - DP table
- **Average Case:** O(m*n) - DP approach
- **Worst Case:** O(m*n) - Memoization table`,
    output1: 'false',
    output2: 'true',
    constraints: '1 <= s.length <= 20\n1 <= p.length <= 30\ns contains only lowercase English letters\np contains only lowercase English letters, \'.\', and \'*\'\nIt is guaranteed for each appearance of the character \'*\', there will be a previous valid character to repeat.',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isMatch(char* s, char* p) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Create DP table
    bool dp[m + 1][n + 1];
    memset(dp, false, sizeof(dp));
    
    // Base case: empty pattern matches empty string
    dp[0][0] = true;
    
    // Handle patterns like a*, a*b*, a*b*c*
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
                    dp[i][j] = dp[i][j] || dp[i - 1][j];  // One or more occurrence
                }
            }
        }
    }
    
    return dp[m][n];
}

int main() {
    char s1[] = "aa";
    char p1[] = "a";
    printf("Test 1: %s\\n", isMatch(s1, p1) ? "true" : "false");
    
    char s2[] = "aa";
    char p2[] = "a*";
    printf("Test 2: %s\\n", isMatch(s2, p2) ? "true" : "false");
    
    return 0;
}`,
          explanation: 'This is the optimal dynamic programming solution. We create a 2D DP table where dp[i][j] represents whether the first i characters of string match the first j characters of pattern.',
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)'
        },
        average: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isMatchHelper(char* s, char* p, int sIndex, int pIndex, int** memo) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Base cases
    if (pIndex == n) {
        return sIndex == m;
    }
    
    if (memo[sIndex][pIndex] != -1) {
        return memo[sIndex][pIndex];
    }
    
    bool firstMatch = (sIndex < m) && (p[pIndex] == '.' || p[pIndex] == s[sIndex]);
    
    if (pIndex + 1 < n && p[pIndex + 1] == '*') {
        bool result = isMatchHelper(s, p, sIndex, pIndex + 2, memo) ||  // Zero occurrence
                     (firstMatch && isMatchHelper(s, p, sIndex + 1, pIndex, memo));  // One or more
        memo[sIndex][pIndex] = result;
        return result;
    } else {
        bool result = firstMatch && isMatchHelper(s, p, sIndex + 1, pIndex + 1, memo);
        memo[sIndex][pIndex] = result;
        return result;
    }
}

bool isMatch(char* s, char* p) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Create memoization table
    int** memo = (int**)malloc((m + 1) * sizeof(int*));
    for (int i = 0; i <= m; i++) {
        memo[i] = (int*)malloc((n + 1) * sizeof(int));
        memset(memo[i], -1, (n + 1) * sizeof(int));
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
    char s1[] = "aa";
    char p1[] = "a";
    printf("Test 1: %s\\n", isMatch(s1, p1) ? "true" : "false");
    
    char s2[] = "aa";
    char p2[] = "a*";
    printf("Test 2: %s\\n", isMatch(s2, p2) ? "true" : "false");
    
    return 0;
}`,
          explanation: 'This is the recursion with memoization approach. We use a recursive function that handles each case and caches results in a memoization table to avoid redundant calculations.',
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isMatchHelper(char* s, char* p, int sIndex, int pIndex) {
    int m = strlen(s);
    int n = strlen(p);
    
    // Base cases
    if (pIndex == n) {
        return sIndex == m;
    }
    
    bool firstMatch = (sIndex < m) && (p[pIndex] == '.' || p[pIndex] == s[sIndex]);
    
    if (pIndex + 1 < n && p[pIndex + 1] == '*') {
        return isMatchHelper(s, p, sIndex, pIndex + 2) ||  // Zero occurrence
               (firstMatch && isMatchHelper(s, p, sIndex + 1, pIndex));  // One or more
    } else {
        return firstMatch && isMatchHelper(s, p, sIndex + 1, pIndex + 1);
    }
}

bool isMatch(char* s, char* p) {
    return isMatchHelper(s, p, 0, 0);
}

int main() {
    char s1[] = "aa";
    char p1[] = "a";
    printf("Test 1: %s\\n", isMatch(s1, p1) ? "true" : "false");
    
    char s2[] = "aa";
    char p2[] = "a*";
    printf("Test 2: %s\\n", isMatch(s2, p2) ? "true" : "false");
    
    return 0;
}`,
          explanation: 'This is the pure recursion approach without memoization. It tries all possible matches for \'*\' patterns and backtracks when a match fails. This approach is simple but can have exponential time complexity.',
          timeComplexity: 'O(2^(m+n))',
          spaceComplexity: 'O(m+n)'
        }
      }
    }
  }
];
