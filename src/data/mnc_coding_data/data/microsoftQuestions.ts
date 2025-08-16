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
    id: 'longest-valid-parentheses',
    title: 'Longest Valid Parentheses',
    description: `Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.`,
    difficulty: 'Easy',
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
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).`,
    difficulty: 'Easy',
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
    id: 'regular-expression-matching',
    title: 'Regular Expression Matching',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' Matches any single character. '*' Matches zero or more of the preceding element.`,
    difficulty: 'Hard',
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
  },
  {
    id: 'merge-k-sorted-lists',
    title: 'Merge k Sorted Lists',
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.`,
    difficulty: 'Hard',
    category: ['Linked List', 'Heap', 'Divide and Conquer'],
    input1: 'lists = [[1,4,5],[1,3,4],[2,6]]',
    input2: 'lists = []',
    explanation: `## Problem Statement

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.

## Examples

### Example 1:
**Input:** lists = [[1,4,5],[1,3,4],[2,6]]  
**Output:** [1,1,2,3,4,4,5,6]  
**Explanation:** Merging the three sorted lists gives us a sorted list.

### Example 2:
**Input:** lists = []  
**Output:** []  
**Explanation:** Empty input returns empty list.

### Example 3:
**Input:** lists = [[]]  
**Output:** []  
**Explanation:** Single empty list returns empty list.

### Example 4:
**Input:** lists = [[1,2,3],[4,5,6],[7,8,9]]  
**Output:** [1,2,3,4,5,6,7,8,9]  
**Explanation:** Three separate sorted lists merge into one.

### Example 5:
**Input:** lists = [[1],[2],[3]]  
**Output:** [1,2,3]  
**Explanation:** Single element lists merge in order.

## Intuition

The key insight is that we need to efficiently merge multiple sorted lists. We can use a min-heap to always pick the smallest element from all the current heads of the lists. This ensures we build the final sorted list efficiently.

## Approach

### Approach 1: Min Heap (Optimal)
1. Create a min-heap and add the first node from each non-empty list
2. While heap is not empty:
   - Extract the minimum node from heap
   - Add it to the result list
   - If the extracted node has a next node, add it to the heap
3. Return the merged list

### Approach 2: Divide and Conquer
1. Merge lists in pairs recursively
2. Continue until only one list remains
3. This reduces the problem to merging two lists at a time

### Approach 3: Brute Force
1. Collect all values from all lists
2. Sort the collected values
3. Create a new linked list from sorted values

## Dry Run

Let's trace through Example 1: lists = [[1,4,5],[1,3,4],[2,6]]

### Min Heap Approach:
- Initial heap: [1,1,2] (first elements from each list)
- Extract 1: result=[1], heap=[1,2,4] (add next from list 1)
- Extract 1: result=[1,1], heap=[2,3,4] (add next from list 2)
- Extract 2: result=[1,1,2], heap=[3,4,6] (add next from list 3)
- Continue until all elements are processed

## Solution

**Note:** This solution provides multiple approaches to solve the problem. Choose the one that best fits your understanding and requirements.

### Key Insights:
1. **Min Heap**: Always pick the smallest element from all current heads
2. **Divide and Conquer**: Reduce complexity by merging in pairs
3. **Brute Force**: Simple but less efficient for large inputs

### Edge Cases:
- Empty input array: return null
- Array with empty lists: return null
- Single list: return the list as is
- Lists with different lengths: handle gracefully

## Time Complexity
- **Min Heap**: O(N log k) where N is total nodes, k is number of lists
- **Divide and Conquer**: O(N log k)
- **Brute Force**: O(N log N)

## Space Complexity
- **Min Heap**: O(k) for heap storage
- **Divide and Conquer**: O(log k) for recursion stack
- **Brute Force**: O(N) for storing all values`,
    output1: '[1,1,2,3,4,4,5,6]',
    output2: '[]',
    constraints: '- 0 <= k <= 10^4\n- 0 <= lists[i].length <= 500\n- -10^4 <= lists[i][j] <= 10^4\n- lists[i] is sorted in ascending order',
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

// Min heap implementation
typedef struct {
    struct ListNode* node;
    int listIndex;
} HeapNode;

typedef struct {
    HeapNode* heap;
    int size;
    int capacity;
} MinHeap;

MinHeap* createMinHeap(int capacity) {
    MinHeap* heap = (MinHeap*)malloc(sizeof(MinHeap));
    heap->heap = (HeapNode*)malloc(capacity * sizeof(HeapNode));
    heap->size = 0;
    heap->capacity = capacity;
    return heap;
}

void swap(HeapNode* a, HeapNode* b) {
    HeapNode temp = *a;
    *a = *b;
    *b = temp;
}

void heapifyUp(MinHeap* heap, int index) {
    while (index > 0) {
        int parent = (index - 1) / 2;
        if (heap->heap[index].node->val < heap->heap[parent].node->val) {
            swap(&heap->heap[index], &heap->heap[parent]);
            index = parent;
        } else {
            break;
        }
    }
}

void heapifyDown(MinHeap* heap, int index) {
    while (true) {
        int smallest = index;
        int left = 2 * index + 1;
        int right = 2 * index + 2;
        
        if (left < heap->size && heap->heap[left].node->val < heap->heap[smallest].node->val) {
            smallest = left;
        }
        if (right < heap->size && heap->heap[right].node->val < heap->heap[smallest].node->val) {
            smallest = right;
        }
        
        if (smallest == index) break;
        
        swap(&heap->heap[index], &heap->heap[smallest]);
        index = smallest;
    }
}

void insert(MinHeap* heap, struct ListNode* node, int listIndex) {
    if (heap->size >= heap->capacity) return;
    
    heap->heap[heap->size].node = node;
    heap->heap[heap->size].listIndex = listIndex;
    heap->size++;
    heapifyUp(heap, heap->size - 1);
}

HeapNode extractMin(MinHeap* heap) {
    if (heap->size == 0) {
        HeapNode empty = {NULL, -1};
        return empty;
    }
    
    HeapNode min = heap->heap[0];
    heap->heap[0] = heap->heap[heap->size - 1];
    heap->size--;
    heapifyDown(heap, 0);
    return min;
}

struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    
    // Create min heap
    MinHeap* heap = createMinHeap(listsSize);
    
    // Add first node from each non-empty list
    for (int i = 0; i < listsSize; i++) {
        if (lists[i] != NULL) {
            insert(heap, lists[i], i);
        }
    }
    
    struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
    dummy->next = NULL;
    struct ListNode* current = dummy;
    
    // Extract minimum and build result
    while (heap->size > 0) {
        HeapNode minNode = extractMin(heap);
        current->next = minNode.node;
        current = current->next;
        
        // Add next node from the same list if it exists
        if (minNode.node->next != NULL) {
            insert(heap, minNode.node->next, minNode.listIndex);
        }
    }
    
    struct ListNode* result = dummy->next;
    free(dummy);
    free(heap->heap);
    free(heap);
    
    return result;
}

// Helper function to create a linked list from array
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* current = head;
    for (int i = 1; i < size; i++) {
        current->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        current = current->next;
        current->val = arr[i];
        current->next = NULL;
    }
    
    return head;
}

// Helper function to print linked list
void printList(struct ListNode* head) {
    printf("[");
    while (head != NULL) {
        printf("%d", head->val);
        if (head->next != NULL) printf(",");
        head = head->next;
    }
    printf("]\\n");
}

int main() {
    // Test case 1: [[1,4,5],[1,3,4],[2,6]]
    int arr1[] = {1, 4, 5};
    int arr2[] = {1, 3, 4};
    int arr3[] = {2, 6};
    
    struct ListNode* list1 = createList(arr1, 3);
    struct ListNode* list2 = createList(arr2, 3);
    struct ListNode* list3 = createList(arr3, 2);
    
    struct ListNode* lists[] = {list1, list2, list3};
    struct ListNode* result = mergeKLists(lists, 3);
    
    printf("Test 1: ");
    printList(result);
    
    // Test case 2: Empty lists
    struct ListNode* emptyLists[] = {};
    struct ListNode* result2 = mergeKLists(emptyLists, 0);
    printf("Test 2: ");
    printList(result2);
    
    return 0;
}`,
          explanation: 'This is the optimal min-heap approach. We use a min-heap to always pick the smallest element from all current list heads, ensuring efficient merging with O(N log k) time complexity.',
          timeComplexity: 'O(N log k)',
          spaceComplexity: 'O(k)'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

// Merge two sorted lists
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
    dummy->next = NULL;
    struct ListNode* current = dummy;
    
    while (l1 != NULL && l2 != NULL) {
        if (l1->val <= l2->val) {
            current->next = l1;
            l1 = l1->next;
        } else {
            current->next = l2;
            l2 = l2->next;
        }
        current = current->next;
    }
    
    if (l1 != NULL) current->next = l1;
    if (l2 != NULL) current->next = l2;
    
    struct ListNode* result = dummy->next;
    free(dummy);
    return result;
}

struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    if (listsSize == 1) return lists[0];
    
    // Divide and conquer approach
    int interval = 1;
    while (interval < listsSize) {
        for (int i = 0; i < listsSize - interval; i += interval * 2) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }
    
    return lists[0];
}

// Helper functions (same as before)
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* current = head;
    for (int i = 1; i < size; i++) {
        current->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        current = current->next;
        current->val = arr[i];
        current->next = NULL;
    }
    
    return head;
}

void printList(struct ListNode* head) {
    printf("[");
    while (head != NULL) {
        printf("%d", head->val);
        if (head->next != NULL) printf(",");
        head = head->next;
    }
    printf("]\\n");
}

int main() {
    // Test case 1: [[1,4,5],[1,3,4],[2,6]]
    int arr1[] = {1, 4, 5};
    int arr2[] = {1, 3, 4};
    int arr3[] = {2, 6};
    
    struct ListNode* list1 = createList(arr1, 3);
    struct ListNode* list2 = createList(arr2, 3);
    struct ListNode* list3 = createList(arr3, 2);
    
    struct ListNode* lists[] = {list1, list2, list3};
    struct ListNode* result = mergeKLists(lists, 3);
    
    printf("Test 1: ");
    printList(result);
    
    return 0;
}`,
          explanation: 'This is the divide and conquer approach. We merge lists in pairs recursively, reducing the problem to merging two lists at a time. This approach has good time complexity and is easier to implement than the heap approach.',
          timeComplexity: 'O(N log k)',
          spaceComplexity: 'O(log k)'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

// Compare function for qsort
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    
    // Count total nodes and collect all values
    int totalNodes = 0;
    for (int i = 0; i < listsSize; i++) {
        struct ListNode* current = lists[i];
        while (current != NULL) {
            totalNodes++;
            current = current->next;
        }
    }
    
    if (totalNodes == 0) return NULL;
    
    // Collect all values
    int* values = (int*)malloc(totalNodes * sizeof(int));
    int index = 0;
    
    for (int i = 0; i < listsSize; i++) {
        struct ListNode* current = lists[i];
        while (current != NULL) {
            values[index++] = current->val;
            current = current->next;
        }
    }
    
    // Sort all values
    qsort(values, totalNodes, sizeof(int), compare);
    
    // Create new linked list from sorted values
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = values[0];
    head->next = NULL;
    
    struct ListNode* current = head;
    for (int i = 1; i < totalNodes; i++) {
        current->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        current = current->next;
        current->val = values[i];
        current->next = NULL;
    }
    
    free(values);
    return head;
}

// Helper functions (same as before)
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* current = head;
    for (int i = 1; i < size; i++) {
        current->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        current = current->next;
        current->val = arr[i];
        current->next = NULL;
    }
    
    return head;
}

void printList(struct ListNode* head) {
    printf("[");
    while (head != NULL) {
        printf("%d", head->val);
        if (head->next != NULL) printf(",");
        head = head->next;
    }
    printf("]\\n");
}

int main() {
    // Test case 1: [[1,4,5],[1,3,4],[2,6]]
    int arr1[] = {1, 4, 5};
    int arr2[] = {1, 3, 4};
    int arr3[] = {2, 6};
    
    struct ListNode* list1 = createList(arr1, 3);
    struct ListNode* list2 = createList(arr2, 3);
    struct ListNode* list3 = createList(arr3, 2);
    
    struct ListNode* lists[] = {list1, list2, list3};
    struct ListNode* result = mergeKLists(lists, 3);
    
    printf("Test 1: ");
    printList(result);
    
    return 0;
}`,
          explanation: 'This is the brute force approach. We collect all values from all lists, sort them, and create a new linked list. This approach is simple but less efficient for large inputs.',
          timeComplexity: 'O(N log N)',
          spaceComplexity: 'O(N)'
        }
      }
    }
  },
  {
    id: 'string-to-integer-atoi',
    title: 'String to Integer (atoi)',
    description: `Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).`,
    difficulty: 'Hard',
    category: ['String', 'Math'],
    input1: 's = "42"',
    input2: 's = "   -42"',
    explanation: `## Problem Statement

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. If neither is present, then the result is positive.
3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.

## Examples

### Example 1:
**Input:** s = "42"  
**Output:** 42  
**Explanation:** Leading whitespace is ignored, and no sign is present.

### Example 2:
**Input:** s = "   -42"  
**Output:** -42  
**Explanation:** Leading whitespace is ignored, '-' is read, then digits are read.

### Example 3:
**Input:** s = "4193 with words"  
**Output:** 4193  
**Explanation:** Digits are read until a non-digit character is encountered.

### Example 4:
**Input:** s = "words and 987"  
**Output:** 0  
**Explanation:** No digits are read, so result is 0.

### Example 5:
**Input:** s = "-91283472332"  
**Output:** -2147483648  
**Explanation:** Result is clamped to INT_MIN.

## Intuition

The key insight is to process the string character by character, following the specific rules for atoi conversion. We need to handle whitespace, signs, digits, and overflow conditions carefully.

## Approach

### Approach 1: State Machine (Optimal)
1. Define states: WHITESPACE, SIGN, DIGIT, END
2. Process each character based on current state
3. Handle overflow by checking before multiplication
4. Return result with proper sign

### Approach 2: Simple Parsing
1. Skip leading whitespace
2. Handle sign character
3. Read digits and build number
4. Check for overflow at each step

### Approach 3: Regular Expression
1. Use regex to extract valid number pattern
2. Parse the extracted string
3. Handle edge cases separately

## Dry Run

Let's trace through Example 2: s = "   -42"

### State Machine Approach:
- State: WHITESPACE, char=' ': continue
- State: WHITESPACE, char=' ': continue  
- State: WHITESPACE, char='-': set sign=-1, state=SIGN
- State: SIGN, char='4': result=4, state=DIGIT
- State: DIGIT, char='2': result=42, state=DIGIT
- State: DIGIT, char=' ': stop, return -42

## Solution

**Note:** This solution provides multiple approaches to solve the problem. Choose the one that best fits your understanding and requirements.

### Key Insights:
1. **State Machine**: Clear separation of parsing phases
2. **Overflow Handling**: Check before multiplication to avoid overflow
3. **Edge Cases**: Handle empty strings, signs, and non-digits properly

### Edge Cases:
- Empty string: return 0
- Only whitespace: return 0
- No digits after sign: return 0
- Overflow: clamp to INT_MIN/INT_MAX
- Multiple signs: ignore after first

## Time Complexity
- **All Approaches**: O(n) where n is string length

## Space Complexity
- **All Approaches**: O(1) extra space`,
    output1: '42',
    output2: '-42',
    constraints: '- 0 <= s.length <= 200\n- s consists of English letters (lower-case and upper-case), digits (0-9), \' \', \'+\', \'-\', and \'.\'',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <limits.h>
#include <ctype.h>

int myAtoi(char* s) {
    int i = 0;
    int sign = 1;
    long result = 0;
    
    // Skip leading whitespace
    while (s[i] == ' ') {
        i++;
    }
    
    // Handle sign
    if (s[i] == '-' || s[i] == '+') {
        sign = (s[i] == '-') ? -1 : 1;
        i++;
    }
    
    // Read digits
    while (s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        
        // Check for overflow
        if (sign == 1 && result > INT_MAX) {
            return INT_MAX;
        }
        if (sign == -1 && result > (long)INT_MAX + 1) {
            return INT_MIN;
        }
        
        i++;
    }
    
    return (int)(sign * result);
}

int main() {
    // Test cases
    char* test1 = "42";
    printf("Test 1: \\"%s\\" -> %d\\n", test1, myAtoi(test1));
    
    char* test2 = "   -42";
    printf("Test 2: \\"%s\\" -> %d\\n", test2, myAtoi(test2));
    
    char* test3 = "4193 with words";
    printf("Test 3: \\"%s\\" -> %d\\n", test3, myAtoi(test3));
    
    char* test4 = "words and 987";
    printf("Test 4: \\"%s\\" -> %d\\n", test4, myAtoi(test4));
    
    char* test5 = "-91283472332";
    printf("Test 5: \\"%s\\" -> %d\\n", test5, myAtoi(test5));
    
    char* test6 = "2147483648";
    printf("Test 6: \\"%s\\" -> %d\\n", test6, myAtoi(test6));
    
    return 0;
}`,
          explanation: 'This is the optimal approach using simple parsing. We skip whitespace, handle the sign, read digits while checking for overflow, and return the result. This approach is efficient and handles all edge cases properly.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        average: {
          code: `#include <stdio.h>
#include <limits.h>
#include <ctype.h>

typedef enum {
    WHITESPACE,
    SIGN,
    DIGIT,
    END
} State;

int myAtoi(char* s) {
    State state = WHITESPACE;
    int sign = 1;
    long result = 0;
    int i = 0;
    
    while (s[i] != '\\0' && state != END) {
        char c = s[i];
        
        switch (state) {
            case WHITESPACE:
                if (c == ' ') {
                    // Continue reading whitespace
                } else if (c == '+' || c == '-') {
                    sign = (c == '-') ? -1 : 1;
                    state = SIGN;
                } else if (c >= '0' && c <= '9') {
                    result = c - '0';
                    state = DIGIT;
                } else {
                    state = END;
                }
                break;
                
            case SIGN:
                if (c >= '0' && c <= '9') {
                    result = c - '0';
                    state = DIGIT;
                } else {
                    state = END;
                }
                break;
                
            case DIGIT:
                if (c >= '0' && c <= '9') {
                    result = result * 10 + (c - '0');
                    
                    // Check for overflow
                    if (sign == 1 && result > INT_MAX) {
                        return INT_MAX;
                    }
                    if (sign == -1 && result > (long)INT_MAX + 1) {
                        return INT_MIN;
                    }
                } else {
                    state = END;
                }
                break;
                
            case END:
                break;
        }
        
        i++;
    }
    
    return (int)(sign * result);
}

int main() {
    // Test cases
    char* test1 = "42";
    printf("Test 1: \\"%s\\" -> %d\\n", test1, myAtoi(test1));
    
    char* test2 = "   -42";
    printf("Test 2: \\"%s\\" -> %d\\n", test2, myAtoi(test2));
    
    char* test3 = "4193 with words";
    printf("Test 3: \\"%s\\" -> %d\\n", test3, myAtoi(test3));
    
    char* test4 = "words and 987";
    printf("Test 4: \\"%s\\" -> %d\\n", test4, myAtoi(test4));
    
    char* test5 = "-91283472332";
    printf("Test 5: \\"%s\\" -> %d\\n", test5, myAtoi(test5));
    
    return 0;
}`,
          explanation: 'This is the state machine approach. We define clear states for different phases of parsing and transition between them based on the current character. This approach is more structured and easier to extend.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        worst: {
          code: `#include <stdio.h>
#include <limits.h>
#include <string.h>
#include <ctype.h>

int myAtoi(char* s) {
    int len = strlen(s);
    int i = 0;
    int sign = 1;
    long result = 0;
    int hasDigit = 0;
    
    // Skip leading whitespace
    while (i < len && s[i] == ' ') {
        i++;
    }
    
    // Check if string is empty or only whitespace
    if (i >= len) {
        return 0;
    }
    
    // Handle sign
    if (s[i] == '-') {
        sign = -1;
        i++;
    } else if (s[i] == '+') {
        i++;
    }
    
    // Read digits
    while (i < len && s[i] >= '0' && s[i] <= '9') {
        hasDigit = 1;
        int digit = s[i] - '0';
        
        // Check for overflow before multiplication
        if (result > INT_MAX / 10 || (result == INT_MAX / 10 && digit > INT_MAX % 10)) {
            return (sign == 1) ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    // If no digits were read, return 0
    if (!hasDigit) {
        return 0;
    }
    
    return (int)(sign * result);
}

int main() {
    // Test cases
    char* test1 = "42";
    printf("Test 1: \\"%s\\" -> %d\\n", test1, myAtoi(test1));
    
    char* test2 = "   -42";
    printf("Test 2: \\"%s\\" -> %d\\n", test2, myAtoi(test2));
    
    char* test3 = "4193 with words";
    printf("Test 3: \\"%s\\" -> %d\\n", test3, myAtoi(test3));
    
    char* test4 = "words and 987";
    printf("Test 4: \\"%s\\" -> %d\\n", test4, myAtoi(test4));
    
    char* test5 = "-91283472332";
    printf("Test 5: \\"%s\\" -> %d\\n", test5, myAtoi(test5));
    
    char* test6 = "2147483648";
    printf("Test 6: \\"%s\\" -> %d\\n", test6, myAtoi(test6));
    
    return 0;
}`,
          explanation: 'This is a more verbose approach with explicit overflow checking. We check for overflow before each multiplication and handle edge cases more explicitly. This approach is more defensive but slightly more complex.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      }
    }
  },

  {
    id: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    description: `Given a string s, return the longest palindromic substring in s.`,
    difficulty: 'Medium',
    category: ['String', 'Dynamic Programming'],
    input1: 's = "babad"',
    input2: 's = "cbbd"',
    explanation: `## Problem Statement

Given a string s, return the longest palindromic substring in s.

## Examples

### Example 1:
**Input:** s = "babad"  
**Output:** "bab"  
**Explanation:** "aba" is also a valid answer.

### Example 2:
**Input:** s = "cbbd"  
**Output:** "bb"  
**Explanation:** The longest palindromic substring is "bb".

### Example 3:
**Input:** s = "a"  
**Output:** "a"  
**Explanation:** Single character is always a palindrome.

### Example 4:
**Input:** s = "ac"  
**Output:** "a"  
**Explanation:** Either "a" or "c" is a valid answer.

### Example 5:
**Input:** s = "racecar"  
**Output:** "racecar"  
**Explanation:** The entire string is a palindrome.

## Intuition

The key insight is that a palindrome can be expanded from its center. For each position in the string, we can try to expand outward to find the longest palindrome centered at that position. We need to handle both odd-length (single character center) and even-length (two character center) palindromes.

## Approach

### Approach 1: Expand Around Center (Optimal)
1. For each position in the string, expand outward to find palindromes
2. Handle both odd and even length palindromes
3. Keep track of the longest palindrome found
4. Return the substring with maximum length

### Approach 2: Dynamic Programming
1. Create a DP table where dp[i][j] indicates if substring(i,j) is palindrome
2. Fill the table using the recurrence: dp[i][j] = (s[i]==s[j]) && dp[i+1][j-1]
3. Track the longest palindrome during the process

### Approach 3: Brute Force
1. Check all possible substrings
2. For each substring, check if it's a palindrome
3. Return the longest valid palindrome

## Dry Run

Let's trace through Example 1: s = "babad"

### Expand Around Center Approach:
- i=0, char='b': expand -> "b" (length=1)
- i=1, char='a': expand -> "a" (length=1)
- i=2, char='b': expand -> "bab" (length=3) - longest so far
- i=3, char='a': expand -> "a" (length=1)
- i=4, char='d': expand -> "d" (length=1)
- Result: "bab"

## Solution

**Note:** This solution provides multiple approaches to solve the problem. Choose the one that best fits your understanding and requirements.

### Key Insights:
1. **Expand Around Center**: Check palindromes from each center position
2. **Odd vs Even**: Handle both single character and two character centers
3. **Early Termination**: Stop expanding when characters don't match

### Edge Cases:
- Single character: return the character
- Two characters: return the longer palindrome
- All same characters: entire string is palindrome
- No palindromes: return first character

## Time Complexity
- **Expand Around Center**: O(n²)
- **Dynamic Programming**: O(n²)
- **Brute Force**: O(n³)

## Space Complexity
- **Expand Around Center**: O(1)
- **Dynamic Programming**: O(n²)
- **Brute Force**: O(1)`,
    output1: '"bab"',
    output2: '"bb"',
    constraints: '- 1 <= s.length <= 1000\n- s consist of only digits and English letters',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void expandAroundCenter(char* s, int left, int right, int* start, int* maxLen) {
    int len = strlen(s);
    
    // Expand outward while characters match and within bounds
    while (left >= 0 && right < len && s[left] == s[right]) {
        left--;
        right++;
    }
    
    // Calculate current palindrome length
    int currentLen = right - left - 1;
    
    // Update if this palindrome is longer
    if (currentLen > *maxLen) {
        *maxLen = currentLen;
        *start = left + 1;
    }
}

char* longestPalindrome(char* s) {
    int len = strlen(s);
    if (len < 2) {
        return s;
    }
    
    int start = 0;
    int maxLen = 1;
    
    // Check each position as a potential center
    for (int i = 0; i < len; i++) {
        // Expand for odd length palindromes (single character center)
        expandAroundCenter(s, i, i, &start, &maxLen);
        
        // Expand for even length palindromes (two character center)
        expandAroundCenter(s, i, i + 1, &start, &maxLen);
    }
    
    // Create result string
    char* result = (char*)malloc((maxLen + 1) * sizeof(char));
    strncpy(result, s + start, maxLen);
    result[maxLen] = '\\0';
    
    return result;
}

int main() {
    // Test case 1: s = "babad"
    char* test1 = "babad";
    char* result1 = longestPalindrome(test1);
    printf("Test 1: \\"%s\\" -> \\"%s\\"\\n", test1, result1);
    free(result1);
    
    // Test case 2: s = "cbbd"
    char* test2 = "cbbd";
    char* result2 = longestPalindrome(test2);
    printf("Test 2: \\"%s\\" -> \\"%s\\"\\n", test2, result2);
    free(result2);
    
    // Test case 3: s = "a"
    char* test3 = "a";
    char* result3 = longestPalindrome(test3);
    printf("Test 3: \\"%s\\" -> \\"%s\\"\\n", test3, result3);
    free(result3);
    
    // Test case 4: s = "racecar"
    char* test4 = "racecar";
    char* result4 = longestPalindrome(test4);
    printf("Test 4: \\"%s\\" -> \\"%s\\"\\n", test4, result4);
    free(result4);
    
    // Test case 5: s = "ac"
    char* test5 = "ac";
    char* result5 = longestPalindrome(test5);
    printf("Test 5: \\"%s\\" -> \\"%s\\"\\n", test5, result5);
    free(result5);
    
    return 0;
}`,
          explanation: 'This is the optimal expand around center approach. We check each position as a potential center and expand outward to find palindromes. This approach handles both odd and even length palindromes efficiently.',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

char* longestPalindrome(char* s) {
    int len = strlen(s);
    if (len < 2) {
        return s;
    }
    
    // Create DP table
    bool** dp = (bool**)malloc(len * sizeof(bool*));
    for (int i = 0; i < len; i++) {
        dp[i] = (bool*)calloc(len, sizeof(bool));
    }
    
    // All single characters are palindromes
    for (int i = 0; i < len; i++) {
        dp[i][i] = true;
    }
    
    int start = 0;
    int maxLen = 1;
    
    // Check for palindromes of length 2
    for (int i = 0; i < len - 1; i++) {
        if (s[i] == s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLen = 2;
        }
    }
    
    // Check for palindromes of length > 2
    for (int length = 3; length <= len; length++) {
        for (int i = 0; i <= len - length; i++) {
            int j = i + length - 1;
            
            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                
                if (length > maxLen) {
                    start = i;
                    maxLen = length;
                }
            }
        }
    }
    
    // Create result string
    char* result = (char*)malloc((maxLen + 1) * sizeof(char));
    strncpy(result, s + start, maxLen);
    result[maxLen] = '\\0';
    
    // Free DP table
    for (int i = 0; i < len; i++) {
        free(dp[i]);
    }
    free(dp);
    
    return result;
}

int main() {
    // Test case 1: s = "babad"
    char* test1 = "babad";
    char* result1 = longestPalindrome(test1);
    printf("Test 1: \\"%s\\" -> \\"%s\\"\\n", test1, result1);
    free(result1);
    
    // Test case 2: s = "cbbd"
    char* test2 = "cbbd";
    char* result2 = longestPalindrome(test2);
    printf("Test 2: \\"%s\\" -> \\"%s\\"\\n", test2, result2);
    free(result2);
    
    // Test case 3: s = "racecar"
    char* test3 = "racecar";
    char* result3 = longestPalindrome(test3);
    printf("Test 3: \\"%s\\" -> \\"%s\\"\\n", test3, result3);
    free(result3);
    
    return 0;
}`,
          explanation: 'This is the dynamic programming approach. We use a DP table to store whether substrings are palindromes and build up the solution from smaller subproblems. This approach is more systematic but uses more space.',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n²)'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

bool isPalindrome(char* s, int start, int end) {
    while (start < end) {
        if (s[start] != s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

char* longestPalindrome(char* s) {
    int len = strlen(s);
    if (len < 2) {
        return s;
    }
    
    int start = 0;
    int maxLen = 1;
    
    // Check all possible substrings
    for (int i = 0; i < len; i++) {
        for (int j = i + 1; j < len; j++) {
            // Check if substring(i,j) is palindrome
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
    // Test case 1: s = "babad"
    char* test1 = "babad";
    char* result1 = longestPalindrome(test1);
    printf("Test 1: \\"%s\\" -> \\"%s\\"\\n", test1, result1);
    free(result1);
    
    // Test case 2: s = "cbbd"
    char* test2 = "cbbd";
    char* result2 = longestPalindrome(test2);
    printf("Test 2: \\"%s\\" -> \\"%s\\"\\n", test2, result2);
    free(result2);
    
    // Test case 3: s = "racecar"
    char* test3 = "racecar";
    char* result3 = longestPalindrome(test3);
    printf("Test 3: \\"%s\\" -> \\"%s\\"\\n", test3, result3);
    free(result3);
    
    return 0;
}`,
          explanation: 'This is the brute force approach. We check all possible substrings and verify if each one is a palindrome. This approach is simple but inefficient with O(n³) time complexity.',
          timeComplexity: 'O(n³)',
          spaceComplexity: 'O(1)'
        }
      }
    }
  },
  {
    id: 'gas-station',
    title: 'Gas Station',
    description: `There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.`,
    difficulty: 'Medium',
    category: ['Array', 'Greedy'],
    input1: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]',
    input2: 'gas = [2,3,4], cost = [3,4,3]',
    explanation: `## Problem Statement

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.

## Examples

### Example 1:
**Input:** gas = [1,2,3,4,5], cost = [3,4,5,1,2]  
**Output:** 3  
**Explanation:** 
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

### Example 2:
**Input:** gas = [2,3,4], cost = [3,4,3]  
**Output:** -1  
**Explanation:** 
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 4 + 3 = 2
You can't travel back to station 2, as it requires 3 unit of gas but you only have 2.
Therefore, you can't travel around the circuit once no matter where you start.

### Example 3:
**Input:** gas = [5,1,2,3,4], cost = [4,4,1,5,1]  
**Output:** 4  
**Explanation:** 
Start at station 4 (index 4) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 1 + 5 = 8
Travel to station 1. Your tank = 8 - 4 + 1 = 5
Travel to station 2. Your tank = 5 - 4 + 2 = 3
Travel to station 3. Your tank = 3 - 1 + 3 = 5
Travel to station 4. The cost is 5. Your gas is just enough to travel back to station 4.
Therefore, return 4 as the starting index.

## Intuition

The key insight is that if the total gas available is less than the total cost, it's impossible to complete the circuit. If the total gas is greater than or equal to the total cost, there must be a solution.

The optimal approach is to:
1. Check if total gas >= total cost (if not, return -1)
2. Start from index 0 and keep track of current gas tank
3. If at any point the tank becomes negative, reset the starting point to the next station
4. Continue until we find a valid starting point

## Approach

### Approach 1: Greedy Algorithm (Optimal)
1. Calculate total gas and total cost
2. If total gas < total cost, return -1
3. Start from index 0, keep track of current tank
4. If tank becomes negative, reset start to next station and tank to 0
5. Return the starting index when we complete the circuit

### Approach 2: Brute Force
1. Try starting from each station
2. For each starting point, simulate the complete journey
3. Return the first valid starting point or -1

### Approach 3: Two Pass
1. First pass: find total gas and cost
2. Second pass: find the starting point using greedy approach

## Dry Run

Let's trace through Example 1: gas = [1,2,3,4,5], cost = [3,4,5,1,2]

### Greedy Approach:
- Total gas = 1+2+3+4+5 = 15, Total cost = 3+4+5+1+2 = 15 ✓
- Start at index 0: tank = 1, cost to next = 3, tank = 1-3 = -2 (negative)
- Reset: start = 1, tank = 0
- Start at index 1: tank = 2, cost to next = 4, tank = 2-4 = -2 (negative)
- Reset: start = 2, tank = 0
- Start at index 2: tank = 3, cost to next = 5, tank = 3-5 = -2 (negative)
- Reset: start = 3, tank = 0
- Start at index 3: tank = 4, cost to next = 1, tank = 4-1 = 3
- Continue: tank = 3+5-2 = 6, tank = 6+1-3 = 4, tank = 4+2-4 = 2
- Complete circuit: tank = 2+3-5 = 0 ✓
- Result: 3

## Key Insights

1. **Total Gas vs Total Cost**: If total gas < total cost, no solution exists
2. **Greedy Property**: If we can't reach station j from station i, we can't reach j from any station between i and j
3. **Single Pass**: We only need one pass through the array to find the solution
4. **Unique Solution**: If a solution exists, it's guaranteed to be unique

## Edge Cases

1. **No Solution**: Total gas < total cost
2. **Single Station**: Only one gas station
3. **All Same**: All gas stations have same gas and cost
4. **Exact Match**: Total gas equals total cost

## Solutions

### Best Approach: Greedy Algorithm
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Key Idea**: Use greedy approach with total gas/cost check

### Average Approach: Two Pass
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Key Idea**: Separate total calculation and starting point finding

### Worst Approach: Brute Force
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **Key Idea**: Try all possible starting points`,
    output1: '3',
    output2: '-1',
    constraints: `## Constraints

- n == gas.length == cost.length
- 1 <= n <= 10^5
- 0 <= gas[i], cost[i] <= 10^4`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>

int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
    int totalGas = 0;
    int totalCost = 0;
    int currentTank = 0;
    int start = 0;
    
    for (int i = 0; i < gasSize; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        
        currentTank += gas[i] - cost[i];
        
        if (currentTank < 0) {
            start = i + 1;
            currentTank = 0;
        }
    }
    
    return (totalGas >= totalCost) ? start : -1;
}

int main() {
    // Test case 1
    int gas1[] = {1, 2, 3, 4, 5};
    int cost1[] = {3, 4, 5, 1, 2};
    int size1 = 5;
    int result1 = canCompleteCircuit(gas1, size1, cost1, size1);
    printf("Test 1: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\\n");
    printf("Starting station: %d\\n", result1);
    
    // Test case 2
    int gas2[] = {2, 3, 4};
    int cost2[] = {3, 4, 3};
    int size2 = 3;
    int result2 = canCompleteCircuit(gas2, size2, cost2, size2);
    printf("Test 2: gas = [2,3,4], cost = [3,4,3]\\n");
    printf("Starting station: %d\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This greedy algorithm is the optimal solution. It checks if total gas >= total cost first, then uses a single pass to find the starting station. When the tank becomes negative, it resets the starting point to the next station.'
        },
        average: {
          code: `#include <stdio.h>

int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
    // First pass: calculate totals
    int totalGas = 0, totalCost = 0;
    for (int i = 0; i < gasSize; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }
    
    if (totalGas < totalCost) {
        return -1;
    }
    
    // Second pass: find starting point
    int currentTank = 0;
    int start = 0;
    
    for (int i = 0; i < gasSize; i++) {
        currentTank += gas[i] - cost[i];
        
        if (currentTank < 0) {
            start = i + 1;
            currentTank = 0;
        }
    }
    
    return start;
}

int main() {
    // Test case 1
    int gas1[] = {1, 2, 3, 4, 5};
    int cost1[] = {3, 4, 5, 1, 2};
    int size1 = 5;
    int result1 = canCompleteCircuit(gas1, size1, cost1, size1);
    printf("Test 1: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\\n");
    printf("Starting station: %d\\n", result1);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This two-pass approach first calculates the total gas and cost to check feasibility, then finds the starting point in a second pass. It has the same time complexity but separates the logic into two clear phases.'
        },
        worst: {
          code: `#include <stdio.h>

int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
    for (int start = 0; start < gasSize; start++) {
        int tank = 0;
        int current = start;
        int count = 0;
        
        while (count < gasSize) {
            tank += gas[current] - cost[current];
            
            if (tank < 0) {
                break;
            }
            
            current = (current + 1) % gasSize;
            count++;
        }
        
        if (count == gasSize) {
            return start;
        }
    }
    
    return -1;
}

int main() {
    // Test case 1
    int gas1[] = {1, 2, 3, 4, 5};
    int cost1[] = {3, 4, 5, 1, 2};
    int size1 = 5;
    int result1 = canCompleteCircuit(gas1, size1, cost1, size1);
    printf("Test 1: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\\n");
    printf("Starting station: %d\\n", result1);
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This brute force approach tries starting from each station and simulates the complete journey. It has O(n²) time complexity as it may need to check all stations for each starting point.'
        }
      }
    }
  },
  {
    id: 'letter-combinations-of-a-phone-number',
    title: 'Letter Combinations of a Phone Number',
    description: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.`,
    difficulty: 'Medium',
    category: ['String', 'Backtracking', 'Hash Table'],
    input1: 'digits = "23"',
    input2: 'digits = ""',
    explanation: `## Problem Statement

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

**Digit to Letter Mapping:**
- 2: "abc"
- 3: "def"
- 4: "ghi"
- 5: "jkl"
- 6: "mno"
- 7: "pqrs"
- 8: "tuv"
- 9: "wxyz"

## Examples

### Example 1:
**Input:** digits = "23"  
**Output:** ["ad","ae","af","bd","be","bf","cd","ce","cf"]  
**Explanation:** 
2 maps to "abc", 3 maps to "def"
Combinations: "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"

### Example 2:
**Input:** digits = ""  
**Output:** []  
**Explanation:** 
No digits provided, so no combinations possible.

### Example 3:
**Input:** digits = "2"  
**Output:** ["a","b","c"]  
**Explanation:** 
2 maps to "abc", so the result is ["a","b","c"].

### Example 4:
**Input:** digits = "9"  
**Output:** ["w","x","y","z"]  
**Explanation:** 
9 maps to "wxyz", so the result is ["w","x","y","z"].

## Intuition

The key insight is to use backtracking (recursion) to generate all possible combinations. For each digit, we need to try all possible letters that it can represent, and for each of those letters, we need to try all possible letters for the next digit, and so on.

This is essentially a Cartesian product of all the letter sets corresponding to each digit.

## Approach

### Approach 1: Backtracking (Optimal)
1. Create a mapping of digits to letters
2. Use recursion to build combinations
3. For each digit, try all possible letters
4. When we reach the end of digits, add the current combination to result
5. Backtrack by removing the last added letter

### Approach 2: Iterative with Queue
1. Start with an empty string in the queue
2. For each digit, process all strings in the queue
3. For each string, append each letter of the current digit
4. Replace the queue with new combinations
5. Continue until all digits are processed

### Approach 3: Iterative with Array
1. Start with an empty array
2. For each digit, create new combinations by appending letters
3. Build the result incrementally
4. Return the final array

## Dry Run

Let's trace through Example 1: digits = "23"

### Backtracking Approach:
- Initialize: result = [], current = ""
- Process digit '2' (maps to "abc"):
  - Try 'a': current = "a"
  - Process digit '3' (maps to "def"):
    - Try 'd': current = "ad" → add to result
    - Try 'e': current = "ae" → add to result
    - Try 'f': current = "af" → add to result
  - Backtrack: current = "a"
  - Try 'b': current = "b"
  - Process digit '3':
    - Try 'd': current = "bd" → add to result
    - Try 'e': current = "be" → add to result
    - Try 'f': current = "bf" → add to result
  - Backtrack: current = "b"
  - Try 'c': current = "c"
  - Process digit '3':
    - Try 'd': current = "cd" → add to result
    - Try 'e': current = "ce" → add to result
    - Try 'f': current = "cf" → add to result
- Result: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

## Key Insights

1. **Backtracking**: Perfect for generating all combinations
2. **Cartesian Product**: Each digit contributes to all possible combinations
3. **Base Case**: When we reach the end of digits, we have a complete combination
4. **State Management**: Keep track of current combination being built

## Edge Cases

1. **Empty String**: Return empty array
2. **Single Digit**: Return all letters for that digit
3. **All Same Digit**: Generate combinations with repeated letters
4. **Long Digits**: Handle multiple digits efficiently

## Solutions

### Best Approach: Backtracking
- **Time Complexity**: O(4^n × n) where n is the number of digits
- **Space Complexity**: O(n) for recursion stack
- **Key Idea**: Use recursion to generate all combinations

### Average Approach: Iterative with Queue
- **Time Complexity**: O(4^n × n)
- **Space Complexity**: O(4^n × n)
- **Key Idea**: Use queue to build combinations iteratively

### Worst Approach: Iterative with Array
- **Time Complexity**: O(4^n × n)
- **Space Complexity**: O(4^n × n)
- **Key Idea**: Build combinations using array operations`,
    output1: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
    output2: '[]',
    constraints: `## Constraints

- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** letterCombinations(char* digits, int* returnSize) {
    if (strlen(digits) == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    // Digit to letter mapping
    char* mapping[] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    
    // Calculate total combinations
    int totalCombinations = 1;
    for (int i = 0; i < strlen(digits); i++) {
        int digit = digits[i] - '0';
        totalCombinations *= strlen(mapping[digit]);
    }
    
    // Allocate result array
    char** result = (char**)malloc(totalCombinations * sizeof(char*));
    *returnSize = 0;
    
    // Helper function for backtracking
    void backtrack(char* current, int index) {
        if (index == strlen(digits)) {
            result[*returnSize] = strdup(current);
            (*returnSize)++;
            return;
        }
        
        int digit = digits[index] - '0';
        char* letters = mapping[digit];
        
        for (int i = 0; i < strlen(letters); i++) {
            current[index] = letters[i];
            current[index + 1] = '\\0';
            backtrack(current, index + 1);
        }
    }
    
    // Initialize current string
    char* current = (char*)malloc((strlen(digits) + 1) * sizeof(char));
    current[0] = '\\0';
    
    // Start backtracking
    backtrack(current, 0);
    
    free(current);
    return result;
}

int main() {
    // Test case 1
    char* digits1 = "23";
    int returnSize1;
    char** result1 = letterCombinations(digits1, &returnSize1);
    printf("Test 1: digits = \"23\"\\n");
    printf("Result: [");
    for (int i = 0; i < returnSize1; i++) {
        printf("\\"%s\\"", result1[i]);
        if (i < returnSize1 - 1) printf(",");
        free(result1[i]);
    }
    printf("]\\n");
    free(result1);
    
    // Test case 2
    char* digits2 = "";
    int returnSize2;
    char** result2 = letterCombinations(digits2, &returnSize2);
    printf("Test 2: digits = \"\"\\n");
    printf("Result: []\\n");
    
    return 0;
}`,
          timeComplexity: 'O(4^n × n)',
          spaceComplexity: 'O(n)',
          explanation: 'This backtracking solution is the optimal approach. It uses recursion to generate all possible combinations by trying each letter for each digit. The time complexity is O(4^n × n) where n is the number of digits.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** letterCombinations(char* digits, int* returnSize) {
    if (strlen(digits) == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    // Digit to letter mapping
    char* mapping[] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    
    // Calculate total combinations
    int totalCombinations = 1;
    for (int i = 0; i < strlen(digits); i++) {
        int digit = digits[i] - '0';
        totalCombinations *= strlen(mapping[digit]);
    }
    
    // Allocate result array
    char** result = (char**)malloc(totalCombinations * sizeof(char*));
    *returnSize = 0;
    
    // Initialize with empty string
    result[0] = strdup("");
    *returnSize = 1;
    
    // Process each digit
    for (int i = 0; i < strlen(digits); i++) {
        int digit = digits[i] - '0';
        char* letters = mapping[digit];
        int currentSize = *returnSize;
        
        // Create new combinations
        for (int j = 0; j < currentSize; j++) {
            char* base = result[j];
            for (int k = 1; k < strlen(letters); k++) {
                char* newComb = (char*)malloc((strlen(base) + 2) * sizeof(char));
                strcpy(newComb, base);
                newComb[strlen(base)] = letters[k];
                newComb[strlen(base) + 1] = '\\0';
                result[*returnSize] = newComb;
                (*returnSize)++;
            }
            // Update the base combination
            strcat(base, &letters[0]);
        }
    }
    
    return result;
}

int main() {
    // Test case 1
    char* digits1 = "23";
    int returnSize1;
    char** result1 = letterCombinations(digits1, &returnSize1);
    printf("Test 1: digits = \"23\"\\n");
    printf("Result: [");
    for (int i = 0; i < returnSize1; i++) {
        printf("\\"%s\\"", result1[i]);
        if (i < returnSize1 - 1) printf(",");
        free(result1[i]);
    }
    printf("]\\n");
    free(result1);
    
    return 0;
}`,
          timeComplexity: 'O(4^n × n)',
          spaceComplexity: 'O(4^n × n)',
          explanation: 'This iterative approach builds combinations incrementally by processing each digit and expanding existing combinations. It has the same time complexity but uses more space to store intermediate results.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** letterCombinations(char* digits, int* returnSize) {
    if (strlen(digits) == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    // Digit to letter mapping
    char* mapping[] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    
    // Calculate total combinations
    int totalCombinations = 1;
    for (int i = 0; i < strlen(digits); i++) {
        int digit = digits[i] - '0';
        totalCombinations *= strlen(mapping[digit]);
    }
    
    // Allocate result array
    char** result = (char**)malloc(totalCombinations * sizeof(char*));
    *returnSize = 0;
    
    // Generate all combinations using nested loops
    int* indices = (int*)calloc(strlen(digits), sizeof(int));
    int* maxIndices = (int*)malloc(strlen(digits) * sizeof(int));
    
    // Calculate max indices for each digit
    for (int i = 0; i < strlen(digits); i++) {
        int digit = digits[i] - '0';
        maxIndices[i] = strlen(mapping[digit]);
    }
    
    // Generate combinations
    while (1) {
        // Create current combination
        char* combination = (char*)malloc((strlen(digits) + 1) * sizeof(char));
        for (int i = 0; i < strlen(digits); i++) {
            int digit = digits[i] - '0';
            combination[i] = mapping[digit][indices[i]];
        }
        combination[strlen(digits)] = '\\0';
        result[*returnSize] = combination;
        (*returnSize)++;
        
        // Increment indices
        int carry = 1;
        for (int i = strlen(digits) - 1; i >= 0 && carry; i--) {
            indices[i] += carry;
            if (indices[i] >= maxIndices[i]) {
                indices[i] = 0;
                carry = 1;
            } else {
                carry = 0;
            }
        }
        
        if (carry) break; // All combinations generated
    }
    
    free(indices);
    free(maxIndices);
    return result;
}

int main() {
    // Test case 1
    char* digits1 = "23";
    int returnSize1;
    char** result1 = letterCombinations(digits1, &returnSize1);
    printf("Test 1: digits = \"23\"\\n");
    printf("Result: [");
    for (int i = 0; i < returnSize1; i++) {
        printf("\\"%s\\"", result1[i]);
        if (i < returnSize1 - 1) printf(",");
        free(result1[i]);
    }
    printf("]\\n");
    free(result1);
    
    return 0;
}`,
          timeComplexity: 'O(4^n × n)',
          spaceComplexity: 'O(4^n × n)',
          explanation: 'This approach uses nested loops with index tracking to generate all combinations. While it works, it\'s more complex and less readable than the backtracking approach, making it the worst choice for this problem.'
        }
      }
    }
  },
  {
    id: 'binary-tree-zigzag-level-order-traversal',
    title: 'Binary Tree Zigzag Level Order Traversal',
    description: `Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).`,
    difficulty: 'Medium',
    category: ['Tree', 'Breadth-First Search', 'Binary Tree'],
    input1: 'root = [3,9,20,null,null,15,7]',
    input2: 'root = [1]',
    explanation: `## Problem Statement

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

## Examples

### Example 1:
**Input:** root = [3,9,20,null,null,15,7]  
**Output:** [[3],[20,9],[15,7]]  
**Explanation:** 
- Level 0: [3] (left to right)
- Level 1: [20,9] (right to left)
- Level 2: [15,7] (left to right)

### Example 2:
**Input:** root = [1]  
**Output:** [[1]]  
**Explanation:** 
Only one level with one node.

### Example 3:
**Input:** root = []  
**Output:** []  
**Explanation:** 
Empty tree, no nodes to traverse.

### Example 4:
**Input:** root = [1,2,3,4,5,6,7]  
**Output:** [[1],[3,2],[4,5,6,7]]  
**Explanation:** 
- Level 0: [1] (left to right)
- Level 1: [3,2] (right to left)
- Level 2: [4,5,6,7] (left to right)

## Intuition

The key insight is to use a breadth-first search (BFS) approach with level tracking. We need to:
1. Use a queue to process nodes level by level
2. Keep track of the current level
3. Reverse the order of nodes at odd levels (1, 3, 5, ...)
4. Maintain the original order at even levels (0, 2, 4, ...)

This can be achieved by either:
- Using a flag to track level direction
- Using a stack for odd levels and queue for even levels
- Collecting all nodes at each level and reversing odd levels

## Approach

### Approach 1: BFS with Level Tracking (Optimal)
1. Use a queue for BFS traversal
2. Keep track of current level
3. For each level, collect all nodes
4. Reverse the order for odd levels
5. Add the level to result

### Approach 2: Two Stacks
1. Use two stacks: one for current level, one for next level
2. Process current level stack
3. Push children to next level stack in reverse order
4. Swap stacks when current level is empty

### Approach 3: BFS with Deque
1. Use a deque (double-ended queue)
2. Add nodes from front for even levels
3. Add nodes from back for odd levels
4. Process level by level

## Dry Run

Let's trace through Example 1: root = [3,9,20,null,null,15,7]

### BFS with Level Tracking:
- Initialize: queue = [3], level = 0, result = []
- Level 0: queue = [3]
  - Process: current = 3, level = 0 (even)
  - Add children: queue = [9, 20]
  - Add to result: [[3]]
- Level 1: queue = [9, 20]
  - Process: current = 9, level = 1 (odd)
  - Process: current = 20, level = 1 (odd)
  - Add children: queue = [15, 7]
  - Reverse level: [20, 9]
  - Add to result: [[3], [20, 9]]
- Level 2: queue = [15, 7]
  - Process: current = 15, level = 2 (even)
  - Process: current = 7, level = 2 (even)
  - Add to result: [[3], [20, 9], [15, 7]]

## Key Insights

1. **Level Tracking**: Use a counter or flag to track current level
2. **Direction Alternation**: Even levels (0, 2, 4...) go left to right, odd levels (1, 3, 5...) go right to left
3. **BFS Structure**: Process nodes level by level using a queue
4. **Reversal Strategy**: Collect all nodes at a level, then reverse if needed

## Edge Cases

1. **Empty Tree**: Return empty array
2. **Single Node**: Return [[root.val]]
3. **Linear Tree**: Handle single path correctly
4. **Complete Tree**: Handle all levels properly

## Solutions

### Best Approach: BFS with Level Tracking
- **Time Complexity**: O(n) where n is the number of nodes
- **Space Complexity**: O(n) for the queue
- **Key Idea**: Use BFS with level-based reversal

### Average Approach: Two Stacks
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)
- **Key Idea**: Use two stacks to alternate direction

### Worst Approach: BFS with Deque
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)
- **Key Idea**: Use deque operations for direction control`,
    output1: '[[3],[20,9],[15,7]]',
    output2: '[[1]]',
    constraints: `## Constraints

- The number of nodes in the tree is in the range [0, 2000]
- -100 <= Node.val <= 100`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for a binary tree node
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

// Queue structure for BFS
typedef struct {
    struct TreeNode** data;
    int front, rear, size, capacity;
} Queue;

Queue* createQueue(int capacity) {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    queue->data = (struct TreeNode**)malloc(capacity * sizeof(struct TreeNode*));
    queue->front = queue->rear = queue->size = 0;
    queue->capacity = capacity;
    return queue;
}

void enqueue(Queue* queue, struct TreeNode* node) {
    if (queue->size < queue->capacity) {
        queue->data[queue->rear] = node;
        queue->rear = (queue->rear + 1) % queue->capacity;
        queue->size++;
    }
}

struct TreeNode* dequeue(Queue* queue) {
    if (queue->size > 0) {
        struct TreeNode* node = queue->data[queue->front];
        queue->front = (queue->front + 1) % queue->capacity;
        queue->size--;
        return node;
    }
    return NULL;
}

void reverseArray(int* arr, int size) {
    for (int i = 0; i < size / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = temp;
    }
}

int** zigzagLevelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    if (!root) {
        *returnSize = 0;
        *returnColumnSizes = NULL;
        return NULL;
    }
    
    // Allocate result arrays
    int** result = (int**)malloc(2000 * sizeof(int*));
    *returnColumnSizes = (int*)malloc(2000 * sizeof(int));
    *returnSize = 0;
    
    Queue* queue = createQueue(2000);
    enqueue(queue, root);
    int level = 0;
    
    while (queue->size > 0) {
        int levelSize = queue->size;
        int* levelNodes = (int*)malloc(levelSize * sizeof(int));
        
        for (int i = 0; i < levelSize; i++) {
            struct TreeNode* current = dequeue(queue);
            levelNodes[i] = current->val;
            
            if (current->left) enqueue(queue, current->left);
            if (current->right) enqueue(queue, current->right);
        }
        
        // Reverse odd levels
        if (level % 2 == 1) {
            reverseArray(levelNodes, levelSize);
        }
        
        result[*returnSize] = levelNodes;
        (*returnColumnSizes)[*returnSize] = levelSize;
        (*returnSize)++;
        level++;
    }
    
    free(queue->data);
    free(queue);
    return result;
}

int main() {
    // Create test tree: [3,9,20,null,null,15,7]
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 9;
    root->left->left = root->left->right = NULL;
    
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 20;
    
    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 15;
    root->right->left->left = root->right->left->right = NULL;
    
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 7;
    root->right->right->left = root->right->right->right = NULL;
    
    int returnSize;
    int* returnColumnSizes;
    int** result = zigzagLevelOrder(root, &returnSize, &returnColumnSizes);
    
    printf("Zigzag Level Order: [");
    for (int i = 0; i < returnSize; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes[i]; j++) {
            printf("%d", result[i][j]);
            if (j < returnColumnSizes[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize - 1) printf(",");
        free(result[i]);
    }
    printf("]\\n");
    
    free(result);
    free(returnColumnSizes);
    
    // Free tree
    free(root->right->left);
    free(root->right->right);
    free(root->right);
    free(root->left);
    free(root);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This BFS solution with level tracking is the optimal approach. It processes nodes level by level and reverses the order for odd levels. The time complexity is O(n) where n is the number of nodes.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for a binary tree node
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

// Stack structure
typedef struct {
    struct TreeNode** data;
    int top, capacity;
} Stack;

Stack* createStack(int capacity) {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->data = (struct TreeNode**)malloc(capacity * sizeof(struct TreeNode*));
    stack->top = -1;
    stack->capacity = capacity;
    return stack;
}

void push(Stack* stack, struct TreeNode* node) {
    if (stack->top < stack->capacity - 1) {
        stack->data[++stack->top] = node;
    }
}

struct TreeNode* pop(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top--];
    }
    return NULL;
}

int isEmpty(Stack* stack) {
    return stack->top == -1;
}

int** zigzagLevelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    if (!root) {
        *returnSize = 0;
        *returnColumnSizes = NULL;
        return NULL;
    }
    
    int** result = (int**)malloc(2000 * sizeof(int*));
    *returnColumnSizes = (int*)malloc(2000 * sizeof(int));
    *returnSize = 0;
    
    Stack* currentStack = createStack(2000);
    Stack* nextStack = createStack(2000);
    push(currentStack, root);
    int level = 0;
    
    while (!isEmpty(currentStack)) {
        int levelSize = 0;
        int* levelNodes = (int*)malloc(2000 * sizeof(int));
        
        while (!isEmpty(currentStack)) {
            struct TreeNode* current = pop(currentStack);
            levelNodes[levelSize++] = current->val;
            
            if (level % 2 == 0) {
                // Left to right: push left first, then right
                if (current->left) push(nextStack, current->left);
                if (current->right) push(nextStack, current->right);
            } else {
                // Right to left: push right first, then left
                if (current->right) push(nextStack, current->right);
                if (current->left) push(nextStack, current->left);
            }
        }
        
        result[*returnSize] = levelNodes;
        (*returnColumnSizes)[*returnSize] = levelSize;
        (*returnSize)++;
        level++;
        
        // Swap stacks
        Stack* temp = currentStack;
        currentStack = nextStack;
        nextStack = temp;
    }
    
    free(currentStack->data);
    free(currentStack);
    free(nextStack->data);
    free(nextStack);
    
    return result;
}

int main() {
    // Create test tree: [3,9,20,null,null,15,7]
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 9;
    root->left->left = root->left->right = NULL;
    
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 20;
    
    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 15;
    root->right->left->left = root->right->left->right = NULL;
    
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 7;
    root->right->right->left = root->right->right->right = NULL;
    
    int returnSize;
    int* returnColumnSizes;
    int** result = zigzagLevelOrder(root, &returnSize, &returnColumnSizes);
    
    printf("Zigzag Level Order: [");
    for (int i = 0; i < returnSize; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes[i]; j++) {
            printf("%d", result[i][j]);
            if (j < returnColumnSizes[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize - 1) printf(",");
        free(result[i]);
    }
    printf("]\\n");
    
    free(result);
    free(returnColumnSizes);
    
    // Free tree
    free(root->right->left);
    free(root->right->right);
    free(root->right);
    free(root->left);
    free(root);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This two-stack approach uses two stacks to alternate the direction of traversal. It pushes children in the correct order based on the current level, eliminating the need for array reversal.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for a binary tree node
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

// Deque structure
typedef struct {
    struct TreeNode** data;
    int front, rear, size, capacity;
} Deque;

Deque* createDeque(int capacity) {
    Deque* deque = (Deque*)malloc(sizeof(Deque));
    deque->data = (struct TreeNode**)malloc(capacity * sizeof(struct TreeNode*));
    deque->front = deque->rear = deque->size = 0;
    deque->capacity = capacity;
    return deque;
}

void pushFront(Deque* deque, struct TreeNode* node) {
    if (deque->size < deque->capacity) {
        deque->front = (deque->front - 1 + deque->capacity) % deque->capacity;
        deque->data[deque->front] = node;
        deque->size++;
    }
}

void pushBack(Deque* deque, struct TreeNode* node) {
    if (deque->size < deque->capacity) {
        deque->data[deque->rear] = node;
        deque->rear = (deque->rear + 1) % deque->capacity;
        deque->size++;
    }
}

struct TreeNode* popFront(Deque* deque) {
    if (deque->size > 0) {
        struct TreeNode* node = deque->data[deque->front];
        deque->front = (deque->front + 1) % deque->capacity;
        deque->size--;
        return node;
    }
    return NULL;
}

struct TreeNode* popBack(Deque* deque) {
    if (deque->size > 0) {
        deque->rear = (deque->rear - 1 + deque->capacity) % deque->capacity;
        struct TreeNode* node = deque->data[deque->rear];
        deque->size--;
        return node;
    }
    return NULL;
}

int isEmpty(Deque* deque) {
    return deque->size == 0;
}

int** zigzagLevelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    if (!root) {
        *returnSize = 0;
        *returnColumnSizes = NULL;
        return NULL;
    }
    
    int** result = (int**)malloc(2000 * sizeof(int*));
    *returnColumnSizes = (int*)malloc(2000 * sizeof(int));
    *returnSize = 0;
    
    Deque* deque = createDeque(2000);
    pushBack(deque, root);
    int level = 0;
    
    while (!isEmpty(deque)) {
        int levelSize = deque->size;
        int* levelNodes = (int*)malloc(levelSize * sizeof(int));
        
        for (int i = 0; i < levelSize; i++) {
            struct TreeNode* current;
            if (level % 2 == 0) {
                current = popFront(deque);
                if (current->left) pushBack(deque, current->left);
                if (current->right) pushBack(deque, current->right);
            } else {
                current = popBack(deque);
                if (current->right) pushFront(deque, current->right);
                if (current->left) pushFront(deque, current->left);
            }
            levelNodes[i] = current->val;
        }
        
        result[*returnSize] = levelNodes;
        (*returnColumnSizes)[*returnSize] = levelSize;
        (*returnSize)++;
        level++;
    }
    
    free(deque->data);
    free(deque);
    return result;
}

int main() {
    // Create test tree: [3,9,20,null,null,15,7]
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 9;
    root->left->left = root->left->right = NULL;
    
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 20;
    
    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 15;
    root->right->left->left = root->right->left->right = NULL;
    
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 7;
    root->right->right->left = root->right->right->right = NULL;
    
    int returnSize;
    int* returnColumnSizes;
    int** result = zigzagLevelOrder(root, &returnSize, &returnColumnSizes);
    
    printf("Zigzag Level Order: [");
    for (int i = 0; i < returnSize; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes[i]; j++) {
            printf("%d", result[i][j]);
            if (j < returnColumnSizes[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize - 1) printf(",");
        free(result[i]);
    }
    printf("]\\n");
    
    free(result);
    free(returnColumnSizes);
    
    // Free tree
    free(root->right->left);
    free(root->right->right);
    free(root->right);
    free(root->left);
    free(root);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This deque approach uses a double-ended queue to control the direction of traversal. It adds and removes nodes from different ends based on the level, but the implementation is more complex than the other approaches.'
        }
      }
    }
  },
  {
    id: 'permutations',
    title: 'Permutations',
    description: `Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.`,
    difficulty: 'Medium',
    category: ['Array', 'Backtracking'],
    input1: 'nums = [1,2,3]',
    input2: 'nums = [0,1]',
    explanation: `## Problem Statement

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

A permutation is an arrangement of all the elements of a set in a specific order.

## Examples

### Example 1:
**Input:** nums = [1,2,3]  
**Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]  
**Explanation:** 
All possible permutations of [1,2,3] are:
- [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]

### Example 2:
**Input:** nums = [0,1]  
**Output:** [[0,1],[1,0]]  
**Explanation:** 
All possible permutations of [0,1] are:
- [0,1], [1,0]

### Example 3:
**Input:** nums = [1]  
**Output:** [[1]]  
**Explanation:** 
Only one element, so only one permutation.

### Example 4:
**Input:** nums = [1,2,3,4]  
**Output:** [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]

## Intuition

The key insight is to use backtracking (recursion) to generate all possible permutations. For each position in the permutation, we need to try all available numbers that haven't been used yet.

This is essentially generating all possible arrangements of the given numbers, where each number appears exactly once in each permutation.

## Approach

### Approach 1: Backtracking (Optimal)
1. Use recursion to build permutations
2. For each position, try all unused numbers
3. Mark numbers as used when placed
4. When permutation is complete, add to result
5. Backtrack by unmarking numbers

### Approach 2: Iterative with Next Permutation
1. Sort the array first
2. Generate next permutation using algorithm
3. Continue until all permutations are generated
4. Add each permutation to result

### Approach 3: Recursive with Swapping
1. Use recursion with array swapping
2. Swap elements to generate different arrangements
3. When reaching the end, add current arrangement
4. Backtrack by swapping back

## Dry Run

Let's trace through Example 1: nums = [1,2,3]

### Backtracking Approach:
- Initialize: used = [false, false, false], current = []
- Position 0:
  - Try 1: used[0] = true, current = [1]
  - Position 1:
    - Try 2: used[1] = true, current = [1,2]
    - Position 2:
      - Try 3: used[2] = true, current = [1,2,3] → add to result
      - used[2] = false
    - used[1] = false
    - Try 3: used[2] = true, current = [1,3]
    - Position 2:
      - Try 2: used[1] = true, current = [1,3,2] → add to result
      - used[1] = false
    - used[2] = false
  - used[0] = false
  - Try 2: used[1] = true, current = [2]
  - Continue similar process...
- Result: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

## Key Insights

1. **Backtracking**: Perfect for generating all permutations
2. **Used Array**: Track which numbers have been used in current permutation
3. **Base Case**: When current permutation length equals input array length
4. **State Management**: Keep track of current permutation being built

## Edge Cases

1. **Single Element**: Return [[element]]
2. **Two Elements**: Return both arrangements
3. **Empty Array**: Return empty array
4. **Large Arrays**: Handle factorial growth efficiently

## Solutions

### Best Approach: Backtracking
- **Time Complexity**: O(n!) where n is the number of elements
- **Space Complexity**: O(n) for recursion stack
- **Key Idea**: Use recursion to generate all permutations

### Average Approach: Next Permutation
- **Time Complexity**: O(n!)
- **Space Complexity**: O(n)
- **Key Idea**: Generate permutations iteratively

### Worst Approach: Recursive with Swapping
- **Time Complexity**: O(n!)
- **Space Complexity**: O(n)
- **Key Idea**: Use array swapping for permutations`,
    output1: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
    output2: '[[0,1],[1,0]]',
    constraints: `## Constraints

- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All the integers of nums are unique.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void backtrack(int* nums, int numsSize, int** result, int* returnSize, int* current, int currentSize, bool* used) {
    if (currentSize == numsSize) {
        // Add current permutation to result
        result[*returnSize] = (int*)malloc(numsSize * sizeof(int));
        for (int i = 0; i < numsSize; i++) {
            result[*returnSize][i] = current[i];
        }
        (*returnSize)++;
        return;
    }
    
    for (int i = 0; i < numsSize; i++) {
        if (!used[i]) {
            used[i] = true;
            current[currentSize] = nums[i];
            backtrack(nums, numsSize, result, returnSize, current, currentSize + 1, used);
            used[i] = false;
        }
    }
}

int** permute(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    // Calculate total permutations (n!)
    int totalPermutations = 1;
    for (int i = 1; i <= numsSize; i++) {
        totalPermutations *= i;
    }
    
    // Allocate result arrays
    int** result = (int**)malloc(totalPermutations * sizeof(int*));
    *returnColumnSizes = (int*)malloc(totalPermutations * sizeof(int));
    *returnSize = 0;
    
    // Initialize arrays
    int* current = (int*)malloc(numsSize * sizeof(int));
    bool* used = (bool*)calloc(numsSize, sizeof(bool));
    
    // Start backtracking
    backtrack(nums, numsSize, result, returnSize, current, 0, used);
    
    // Set column sizes
    for (int i = 0; i < *returnSize; i++) {
        (*returnColumnSizes)[i] = numsSize;
    }
    
    // Cleanup
    free(current);
    free(used);
    
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {1, 2, 3};
    int size1 = 3;
    int returnSize1;
    int* returnColumnSizes1;
    int** result1 = permute(nums1, size1, &returnSize1, &returnColumnSizes1);
    
    printf("Test 1: nums = [1,2,3]\\n");
    printf("Result: [");
    for (int i = 0; i < returnSize1; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes1[i]; j++) {
            printf("%d", result1[i][j]);
            if (j < returnColumnSizes1[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize1 - 1) printf(",");
        free(result1[i]);
    }
    printf("]\\n");
    
    free(result1);
    free(returnColumnSizes1);
    
    return 0;
}`,
          timeComplexity: 'O(n!)',
          spaceComplexity: 'O(n)',
          explanation: 'This backtracking solution is the optimal approach. It uses recursion to generate all possible permutations by trying each unused number at each position. The time complexity is O(n!) where n is the number of elements.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void reverse(int* arr, int start, int end) {
    while (start < end) {
        swap(&arr[start], &arr[end]);
        start++;
        end--;
    }
}

bool nextPermutation(int* nums, int numsSize) {
    int i = numsSize - 2;
    
    // Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i < 0) {
        return false; // No more permutations
    }
    
    // Find the element just larger than nums[i]
    int j = numsSize - 1;
    while (nums[j] <= nums[i]) {
        j--;
    }
    
    // Swap them
    swap(&nums[i], &nums[j]);
    
    // Reverse the suffix
    reverse(nums, i + 1, numsSize - 1);
    
    return true;
}

int** permute(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    // Calculate total permutations (n!)
    int totalPermutations = 1;
    for (int i = 1; i <= numsSize; i++) {
        totalPermutations *= i;
    }
    
    // Allocate result arrays
    int** result = (int**)malloc(totalPermutations * sizeof(int*));
    *returnColumnSizes = (int*)malloc(totalPermutations * sizeof(int));
    *returnSize = 0;
    
    // Create a copy of nums to work with
    int* numsCopy = (int*)malloc(numsSize * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        numsCopy[i] = nums[i];
    }
    
    // Sort the copy first
    for (int i = 0; i < numsSize - 1; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (numsCopy[i] > numsCopy[j]) {
                swap(&numsCopy[i], &numsCopy[j]);
            }
        }
    }
    
    // Generate all permutations
    do {
        result[*returnSize] = (int*)malloc(numsSize * sizeof(int));
        for (int i = 0; i < numsSize; i++) {
            result[*returnSize][i] = numsCopy[i];
        }
        (*returnColumnSizes)[*returnSize] = numsSize;
        (*returnSize)++;
    } while (nextPermutation(numsCopy, numsSize));
    
    free(numsCopy);
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {1, 2, 3};
    int size1 = 3;
    int returnSize1;
    int* returnColumnSizes1;
    int** result1 = permute(nums1, size1, &returnSize1, &returnColumnSizes1);
    
    printf("Test 1: nums = [1,2,3]\\n");
    printf("Result: [");
    for (int i = 0; i < returnSize1; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes1[i]; j++) {
            printf("%d", result1[i][j]);
            if (j < returnColumnSizes1[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize1 - 1) printf(",");
        free(result1[i]);
    }
    printf("]\\n");
    
    free(result1);
    free(returnColumnSizes1);
    
    return 0;
}`,
          timeComplexity: 'O(n!)',
          spaceComplexity: 'O(n)',
          explanation: 'This iterative approach uses the next permutation algorithm to generate all permutations. It sorts the array first, then generates each subsequent permutation until all are exhausted.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void permuteHelper(int* nums, int numsSize, int** result, int* returnSize, int start) {
    if (start == numsSize) {
        // Add current permutation to result
        result[*returnSize] = (int*)malloc(numsSize * sizeof(int));
        for (int i = 0; i < numsSize; i++) {
            result[*returnSize][i] = nums[i];
        }
        (*returnSize)++;
        return;
    }
    
    for (int i = start; i < numsSize; i++) {
        swap(&nums[start], &nums[i]);
        permuteHelper(nums, numsSize, result, returnSize, start + 1);
        swap(&nums[start], &nums[i]); // backtrack
    }
}

int** permute(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    // Calculate total permutations (n!)
    int totalPermutations = 1;
    for (int i = 1; i <= numsSize; i++) {
        totalPermutations *= i;
    }
    
    // Allocate result arrays
    int** result = (int**)malloc(totalPermutations * sizeof(int*));
    *returnColumnSizes = (int*)malloc(totalPermutations * sizeof(int));
    *returnSize = 0;
    
    // Create a copy of nums to work with
    int* numsCopy = (int*)malloc(numsSize * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        numsCopy[i] = nums[i];
    }
    
    // Start recursive permutation generation
    permuteHelper(numsCopy, numsSize, result, returnSize, 0);
    
    // Set column sizes
    for (int i = 0; i < *returnSize; i++) {
        (*returnColumnSizes)[i] = numsSize;
    }
    
    free(numsCopy);
    return result;
}

int main() {
    // Test case 1
    int nums1[] = {1, 2, 3};
    int size1 = 3;
    int returnSize1;
    int* returnColumnSizes1;
    int** result1 = permute(nums1, size1, &returnSize1, &returnColumnSizes1);
    
    printf("Test 1: nums = [1,2,3]\\n");
    printf("Result: [");
    for (int i = 0; i < returnSize1; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes1[i]; j++) {
            printf("%d", result1[i][j]);
            if (j < returnColumnSizes1[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize1 - 1) printf(",");
        free(result1[i]);
    }
    printf("]\\n");
    
    free(result1);
    free(returnColumnSizes1);
    
    return 0;
}`,
          timeComplexity: 'O(n!)',
          spaceComplexity: 'O(n)',
          explanation: 'This recursive swapping approach uses array swapping to generate permutations. While it works, it\'s less intuitive than the backtracking approach and can be harder to understand and debug.'
        }
      }
    }
  }
  
];
