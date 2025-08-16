// Additional Medium String Questions for Cognizant
// These questions are unique and not in the Most Asked Questions collection

export const additionalCognizantMediumQuestions = [
  {
    id: 'decode-string',
    title: 'Decode String',
    description: `Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.`,
    difficulty: 'Medium',
    category: ['String', 'Stack'],
    input1: 's = "3[a]2[bc]"',
    input2: 's = "3[a2[c]]"',
    explanation: `## Problem Statement

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.

## Examples

### Example 1:
**Input:** s = "3[a]2[bc]"  
**Output:** "aaabcbc"  
**Explanation:** "3[a]" means "aaa", "2[bc]" means "bcbc".

### Example 2:
**Input:** s = "3[a2[c]]"  
**Output:** "accaccacc"  
**Explanation:** "3[a2[c]]" means "3[acc]" which is "accaccacc".

## Approach

### Stack Approach (Optimal)
1. Use two stacks: one for numbers and one for strings
2. When we encounter a digit, build the number
3. When we encounter '[', push current string and number to stacks
4. When we encounter ']', pop and repeat the string
5. When we encounter a letter, append to current string

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
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This is the optimal solution using recursion. It handles nested brackets efficiently by recursively decoding substrings.'
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

## Examples

### Example 1:
**Input:** s = "egg", t = "add"  
**Output:** true  
**Explanation:** 'e' → 'a', 'g' → 'd'

### Example 2:
**Input:** s = "foo", t = "bar"  
**Output:** false  
**Explanation:** 'f' → 'b', 'o' → 'a', 'o' → 'r' (conflict)

## Approach

### Two Hash Maps Approach (Optimal)
1. Use two arrays to track character mappings
2. Map s[i] to t[i] and t[i] to s[i]
3. Check for conflicts in both directions
4. Return false if any conflict is found

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
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using two hash maps. It ensures both directions of character mapping are consistent.'
        }
      }
    }
  }
];

export default additionalCognizantMediumQuestions;
