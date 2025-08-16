// Wipro Coding Questions
// This file contains coding questions specifically for Wipro interviews

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

export const allWiproQuestions: Question[] = [
  {
    id: 'reverse-words-in-string',
    title: 'Reverse Words in a String',
    description: `Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.`,
    difficulty: 'Easy',
    category: ['String', 'Two Pointers'],
    input1: 's = "the sky is blue"',
    input2: 's = "  hello world  "',
    explanation: `## Problem Statement

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Examples

### Example 1:
**Input:** s = "the sky is blue"  
**Output:** "blue is sky the"  
**Explanation:** The words are reversed while maintaining single space separation.

### Example 2:
**Input:** s = "  hello world  "  
**Output:** "world hello"  
**Explanation:** Leading and trailing spaces are removed, and multiple spaces between words are reduced to single spaces.

## Intuition

We need to split the string into words, reverse their order, and join them back with single spaces. We also need to handle leading/trailing spaces and multiple spaces between words.

## Approach

### Approach 1: Split and Reverse (Optimal)
1. Split the string by whitespace to get words
2. Filter out empty strings (from multiple spaces)
3. Reverse the array of words
4. Join with single space

### Approach 2: Two Pointers
1. Trim leading and trailing spaces
2. Use two pointers to find word boundaries
3. Extract words and store in array
4. Reverse and join

### Approach 3: Stack
1. Split string into words
2. Push words onto stack
3. Pop words to get reverse order
4. Join with spaces

## Dry Run

Let's trace through Example 1: s = "the sky is blue"

### Split and Reverse Approach:
- Split: ["the", "sky", "is", "blue"]
- Filter: ["the", "sky", "is", "blue"] (no empty strings)
- Reverse: ["blue", "is", "sky", "the"]
- Join: "blue is sky the"

### Example 2: s = "  hello world  "
- Split: ["", "", "hello", "world", "", ""]
- Filter: ["hello", "world"]
- Reverse: ["world", "hello"]
- Join: "world hello"

## Key Insights

1. **String Splitting**: Use split() to separate words
2. **Space Handling**: Filter out empty strings from multiple spaces
3. **Array Reversal**: Simple array reversal gives word reversal
4. **String Joining**: Join with single space for clean output

## Edge Cases

1. **Leading spaces**: "  hello world" → "world hello"
2. **Trailing spaces**: "hello world  " → "world hello"
3. **Multiple spaces**: "hello   world" → "world hello"
4. **Single word**: "hello" → "hello"
5. **Empty string**: "" → ""

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through string
- **Space Complexity**: O(n) - Space for storing words`,
    output1: '"blue is sky the"',
    output2: '"world hello"',
    constraints: `## Constraints
- 1 <= s.length <= 10⁴
- s contains English letters (upper-case and lower-case), digits, and spaces ' '.
- There is at least one word in s.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* reverseWords(char* s) {
    int len = strlen(s);
    char* result = (char*)malloc((len + 1) * sizeof(char));
    char* words[1000]; // Array to store word pointers
    int wordCount = 0;
    
    // Skip leading spaces
    while (*s == ' ') s++;
    
    // Extract words
    char* word = strtok(s, " ");
    while (word != NULL) {
        words[wordCount++] = word;
        word = strtok(NULL, " ");
    }
    
    // Build result in reverse order
    int pos = 0;
    for (int i = wordCount - 1; i >= 0; i--) {
        int wordLen = strlen(words[i]);
        strcpy(result + pos, words[i]);
        pos += wordLen;
        if (i > 0) {
            result[pos++] = ' ';
        }
    }
    result[pos] = '\\0';
    
    return result;
}

int main() {
    char s1[] = "the sky is blue";
    char s2[] = "  hello world  ";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: \\"%s\\"\\n", reverseWords(s1));
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: \\"%s\\"\\n", reverseWords(s2));
    
    printf("\\nSplit and Reverse Approach:\\n");
    printf("Split string by spaces, reverse words, join\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This is the optimal solution using string splitting. It extracts words, reverses their order, and joins them back with single spaces.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* reverseWords(char* s) {
    int len = strlen(s);
    char* result = (char*)malloc((len + 1) * sizeof(char));
    char* stack[1000]; // Stack to store words
    int top = -1;
    
    // Skip leading spaces
    while (*s == ' ') s++;
    
    // Extract words and push to stack
    char* word = strtok(s, " ");
    while (word != NULL) {
        stack[++top] = word;
        word = strtok(NULL, " ");
    }
    
    // Pop words from stack to get reverse order
    int pos = 0;
    while (top >= 0) {
        int wordLen = strlen(stack[top]);
        strcpy(result + pos, stack[top]);
        pos += wordLen;
        if (top > 0) {
            result[pos++] = ' ';
        }
        top--;
    }
    result[pos] = '\\0';
    
    return result;
}

int main() {
    char s1[] = "the sky is blue";
    char s2[] = "  hello world  ";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: \\"%s\\"\\n", reverseWords(s1));
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: \\"%s\\"\\n", reverseWords(s2));
    
    printf("\\nStack Approach:\\n");
    printf("Push words to stack, pop to get reverse order\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses a stack to store words and then pops them to get the reverse order. It is conceptually clear but uses extra space.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* reverseWords(char* s) {
    int len = strlen(s);
    char* result = (char*)malloc((len + 1) * sizeof(char));
    char* words[1000];
    int wordCount = 0;
    
    // Manual word extraction
    int i = 0;
    while (i < len) {
        // Skip spaces
        while (i < len && s[i] == ' ') i++;
        if (i >= len) break;
        
        // Find word end
        int start = i;
        while (i < len && s[i] != ' ') i++;
        
        // Extract word
        int wordLen = i - start;
        words[wordCount] = (char*)malloc((wordLen + 1) * sizeof(char));
        strncpy(words[wordCount], s + start, wordLen);
        words[wordCount][wordLen] = '\\0';
        wordCount++;
    }
    
    // Build result in reverse order
    int pos = 0;
    for (int j = wordCount - 1; j >= 0; j--) {
        int wordLen = strlen(words[j]);
        strcpy(result + pos, words[j]);
        pos += wordLen;
        if (j > 0) {
            result[pos++] = ' ';
        }
        free(words[j]);
    }
    result[pos] = '\\0';
    
    return result;
}

int main() {
    char s1[] = "the sky is blue";
    char s2[] = "  hello world  ";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: \\"%s\\"\\n", reverseWords(s1));
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: \\"%s\\"\\n", reverseWords(s2));
    
    printf("\\nManual Extraction Approach:\\n");
    printf("Manually extract words using two pointers\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach manually extracts words using two pointers. It is more complex but gives full control over the process.'
        }
      }
    }
  },
  {
    id: 'valid-palindrome-ii',
    title: 'Valid Palindrome II',
    description: `Given a string s, return true if the s can be palindrome after deleting at most one character from it.

A palindrome is a string that reads the same forward and backward.`,
    difficulty: 'Easy',
    category: ['String', 'Two Pointers', 'Greedy'],
    input1: 's = "aba"',
    input2: 's = "abca"',
    explanation: `## Problem Statement

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

A palindrome is a string that reads the same forward and backward.

## Examples

### Example 1:
**Input:** s = "aba"  
**Output:** true  
**Explanation:** The string is already a palindrome, so no deletion is needed.

### Example 2:
**Input:** s = "abca"  
**Output:** true  
**Explanation:** We can delete the character 'c' to get "aba" which is a palindrome.

### Example 3:
**Input:** s = "abc"  
**Output:** false  
**Explanation:** No single character deletion can make it a palindrome.

## Intuition

We can use two pointers to check if the string is a palindrome. When we find a mismatch, we can try deleting either the left or right character and check if the remaining string is a palindrome.

## Approach

### Approach 1: Two Pointers with Recursion (Optimal)
1. Use two pointers (left and right) to check palindrome
2. When characters don't match, try deleting left or right character
3. Check if remaining string is palindrome
4. Return true if either deletion works

### Approach 2: Helper Function
1. Create a helper function to check if substring is palindrome
2. When mismatch found, check two possibilities:
   - Delete left character: check s[left+1, right]
   - Delete right character: check s[left, right-1]
3. Return true if either works

### Approach 3: Brute Force
1. Try deleting each character one by one
2. Check if resulting string is palindrome
3. Return true if any deletion works

## Dry Run

Let's trace through Example 2: s = "abca"

### Two Pointers Approach:
- left = 0, right = 3
- s[0] = 'a', s[3] = 'a' → match, move pointers
- left = 1, right = 2
- s[1] = 'b', s[2] = 'c' → mismatch
- Try deleting 'b': check "aca" → not palindrome
- Try deleting 'c': check "aba" → palindrome
- Return true

## Key Insights

1. **Two Pointers**: Efficient way to check palindrome
2. **Single Deletion**: Only need to try one deletion when mismatch found
3. **Greedy Choice**: Try both possibilities when mismatch occurs
4. **Early Return**: Return true as soon as one deletion works

## Edge Cases

1. **Already palindrome**: "aba" → true
2. **Single character**: "a" → true
3. **Two characters**: "ab" → true (delete either)
4. **No solution**: "abc" → false
5. **Even length**: "abba" → true

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through string
- **Space Complexity**: O(1) - Only constant extra space used`,
    output1: 'true',
    output2: 'true',
    constraints: `## Constraints
- 1 <= s.length <= 10⁵
- s consists of lowercase English letters.`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isPalindrome(char* s, int left, int right) {
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

bool validPalindrome(char* s) {
    int left = 0;
    int right = strlen(s) - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            // Try deleting left character
            if (isPalindrome(s, left + 1, right)) {
                return true;
            }
            // Try deleting right character
            if (isPalindrome(s, left, right - 1)) {
                return true;
            }
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

int main() {
    char s1[] = "aba";
    char s2[] = "abca";
    char s3[] = "abc";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: %s\\n", validPalindrome(s1) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: %s\\n", validPalindrome(s2) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\"\\n", s3);
    printf("Output: %s\\n", validPalindrome(s3) ? "true" : "false");
    
    printf("\\nTwo Pointers with Helper Function:\\n");
    printf("Use two pointers, try both deletions when mismatch found\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using two pointers with a helper function. It efficiently checks both deletion possibilities when a mismatch is found.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool validPalindrome(char* s) {
    int left = 0;
    int right = strlen(s) - 1;
    bool deleted = false;
    
    while (left < right) {
        if (s[left] != s[right]) {
            if (deleted) {
                return false;
            }
            
            // Try deleting left character
            if (s[left + 1] == s[right]) {
                left++;
                deleted = true;
            }
            // Try deleting right character
            else if (s[left] == s[right - 1]) {
                right--;
                deleted = true;
            }
            else {
                return false;
            }
        }
        else {
            left++;
            right--;
        }
    }
    
    return true;
}

int main() {
    char s1[] = "aba";
    char s2[] = "abca";
    char s3[] = "abc";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: %s\\n", validPalindrome(s1) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: %s\\n", validPalindrome(s2) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\"\\n", s3);
    printf("Output: %s\\n", validPalindrome(s3) ? "true" : "false");
    
    printf("\\nSingle Pass Approach:\\n");
    printf("Use flag to track if deletion has been used\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach uses a single pass with a flag to track if a deletion has been used. It is efficient but slightly more complex logic.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isPalindrome(char* s) {
    int left = 0;
    int right = strlen(s) - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

bool validPalindrome(char* s) {
    int len = strlen(s);
    
    // Try deleting each character
    for (int i = 0; i < len; i++) {
        char temp[100001];
        int pos = 0;
        
        // Create string without character at index i
        for (int j = 0; j < len; j++) {
            if (j != i) {
                temp[pos++] = s[j];
            }
        }
        temp[pos] = '\\0';
        
        if (isPalindrome(temp)) {
            return true;
        }
    }
    
    return false;
}

int main() {
    char s1[] = "aba";
    char s2[] = "abca";
    char s3[] = "abc";
    
    printf("Input: s = \\"%s\\"\\n", s1);
    printf("Output: %s\\n", validPalindrome(s1) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\"\\n", s2);
    printf("Output: %s\\n", validPalindrome(s2) ? "true" : "false");
    
    printf("\\nInput: s = \\"%s\\"\\n", s3);
    printf("Output: %s\\n", validPalindrome(s3) ? "true" : "false");
    
    printf("\\nBrute Force Approach:\\n");
    printf("Try deleting each character and check if palindrome\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach tries deleting each character and checks if the resulting string is a palindrome. It is inefficient but straightforward to understand.'
        }
      }
    }
  }
];

export default allWiproQuestions;
