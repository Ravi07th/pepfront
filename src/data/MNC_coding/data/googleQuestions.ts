import { Question } from '../index';

export const allGoogleQuestions: Question[] = [
  {
    id: 'google-1',
    title: 'Minimum Domino Rotations For Equal Row',
    description: `In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1.`,
    difficulty: 'Medium',
    category: ['Array', 'Greedy'],
    input1: 'tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]',
    input2: 'tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]',
    explanation: `## Problem Statement

In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1.

## Examples

### Example 1:
**Input:** tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]  
**Output:** 2  
**Explanation:** 
The first figure represents the initial dominoes.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

### Example 2:
**Input:** tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]  
**Output:** -1  
**Explanation:** 
In this case, it is not possible to rotate the dominoes to make one row of values equal.

## Intuition

The key insight is that if we can make all values in either row equal, the target value must be either the first value in the top row or the first value in the bottom row. We need to check both possibilities and find the minimum rotations required.

## Approach

1. Check if we can make all values in the top row equal to tops[0]
2. Check if we can make all values in the top row equal to bottoms[0]
3. Check if we can make all values in the bottom row equal to tops[0]
4. Check if we can make all values in the bottom row equal to bottoms[0]
5. Return the minimum of all possible rotations, or -1 if none are possible

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution: Greedy Approach

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Constant extra space`,
    output1: '2',
    output2: '-1',
    constraints: `## Constraints

- 2 <= tops.length <= 2 * 104
- bottoms.length == tops.length
- 1 <= tops[i], bottoms[i] <= 6`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int min4(int a, int b, int c, int d) {
    return min(min(a, b), min(c, d));
}

int minDominoRotations(int* tops, int topsSize, int* bottoms, int bottomsSize) {
    if (topsSize == 0) return 0;
    
    int rotations1 = 0;
    for (int i = 0; i < topsSize; i++) {
        if (tops[i] != tops[0] && bottoms[i] != tops[0]) {
            rotations1 = INT_MAX;
            break;
        }
        if (tops[i] != tops[0]) {
            rotations1++;
        }
    }
    
    int rotations2 = 0;
    for (int i = 0; i < topsSize; i++) {
        if (tops[i] != bottoms[0] && bottoms[i] != bottoms[0]) {
            rotations2 = INT_MAX;
            break;
        }
        if (tops[i] != bottoms[0]) {
            rotations2++;
        }
    }
    
    int rotations3 = 0;
    for (int i = 0; i < topsSize; i++) {
        if (tops[i] != tops[0] && bottoms[i] != tops[0]) {
            rotations3 = INT_MAX;
            break;
        }
        if (bottoms[i] != tops[0]) {
            rotations3++;
        }
    }
    
    int rotations4 = 0;
    for (int i = 0; i < topsSize; i++) {
        if (tops[i] != bottoms[0] && bottoms[i] != bottoms[0]) {
            rotations4 = INT_MAX;
            break;
        }
        if (bottoms[i] != bottoms[0]) {
            rotations4++;
        }
    }
    
    int result = min4(rotations1, rotations2, rotations3, rotations4);
    return result == INT_MAX ? -1 : result;
}

int main() {
    int n;
    printf("Enter the number of dominoes: ");
    scanf("%d", &n);
    
    int* tops = (int*)malloc(n * sizeof(int));
    int* bottoms = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d values for tops: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &tops[i]);
    }
    
    printf("Enter %d values for bottoms: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &bottoms[i]);
    }
    
    int result = minDominoRotations(tops, n, bottoms, n);
    printf("Minimum rotations needed: %d\\n", result);
    
    free(tops);
    free(bottoms);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We check all four possibilities: making all tops equal to tops[0], making all tops equal to bottoms[0], making all bottoms equal to tops[0], and making all bottoms equal to bottoms[0]. We return the minimum rotations needed.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int countRotations(int* tops, int* bottoms, int size, int target, int makeTop) {
    int rotations = 0;
    for (int i = 0; i < size; i++) {
        if (tops[i] != target && bottoms[i] != target) {
            return INT_MAX;
        }
        if (makeTop && tops[i] != target) {
            rotations++;
        } else if (!makeTop && bottoms[i] != target) {
            rotations++;
        }
    }
    return rotations;
}

int minDominoRotations(int* tops, int topsSize, int* bottoms, int bottomsSize) {
    if (topsSize == 0) return 0;
    
    int target1 = tops[0];
    int target2 = bottoms[0];
    
    int rotationsTop1 = countRotations(tops, bottoms, topsSize, target1, 1);
    int rotationsTop2 = countRotations(tops, bottoms, topsSize, target2, 1);
    int rotationsBottom1 = countRotations(tops, bottoms, topsSize, target1, 0);
    int rotationsBottom2 = countRotations(tops, bottoms, topsSize, target2, 0);
    
    int result = min(min(rotationsTop1, rotationsTop2), 
                    min(rotationsBottom1, rotationsBottom2));
    
    return result == INT_MAX ? -1 : result;
}

int main() {
    int n;
    printf("Enter the number of dominoes: ");
    scanf("%d", &n);
    
    int* tops = (int*)malloc(n * sizeof(int));
    int* bottoms = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d values for tops: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &tops[i]);
    }
    
    printf("Enter %d values for bottoms: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &bottoms[i]);
    }
    
    int result = minDominoRotations(tops, n, bottoms, n);
    printf("Minimum rotations needed: %d\\n", result);
    
    free(tops);
    free(bottoms);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We use a helper function to count rotations needed for each target value. This approach is cleaner and more modular.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int canMakeEqual(int* tops, int* bottoms, int size, int target) {
    for (int i = 0; i < size; i++) {
        if (tops[i] != target && bottoms[i] != target) {
            return 0;
        }
    }
    return 1;
}

int countRotationsForTarget(int* tops, int* bottoms, int size, int target, int forTop) {
    if (!canMakeEqual(tops, bottoms, size, target)) {
        return INT_MAX;
    }
    
    int rotations = 0;
    for (int i = 0; i < size; i++) {
        if (forTop) {
            if (tops[i] != target) {
                rotations++;
            }
        } else {
            if (bottoms[i] != target) {
                rotations++;
            }
        }
    }
    return rotations;
}

int minDominoRotations(int* tops, int topsSize, int* bottoms, int bottomsSize) {
    if (topsSize == 0) return 0;
    
    int minRotations = INT_MAX;
    
    for (int target = 1; target <= 6; target++) {
        int rotationsTop = countRotationsForTarget(tops, bottoms, topsSize, target, 1);
        minRotations = min(minRotations, rotationsTop);
        
        int rotationsBottom = countRotationsForTarget(tops, bottoms, topsSize, target, 0);
        minRotations = min(minRotations, rotationsBottom);
    }
    
    return minRotations == INT_MAX ? -1 : minRotations;
}

int main() {
    int n;
    printf("Enter the number of dominoes: ");
    scanf("%d", &n);
    
    int* tops = (int*)malloc(n * sizeof(int));
    int* bottoms = (int*)malloc(n * sizeof(int));
    
    printf("Enter %d values for tops: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &tops[i]);
    }
    
    printf("Enter %d values for bottoms: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &bottoms[i]);
    }
    
    int result = minDominoRotations(tops, n, bottoms, n);
    printf("Minimum rotations needed: %d\\n", result);
    
    free(tops);
    free(bottoms);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We try all possible values (1-6) for both tops and bottoms. This approach is less efficient but more comprehensive.'
        }
      }
    }
  },
  {
    id: 'google-2',
    title: 'Guess the Word',
    description: `This is an interactive problem.

You are given an array of unique strings wordlist where wordlist[i] is 6 letters long, and one word in this list is chosen as secret.

You may call Master.guess(word) to guess a word. The guessed word should have type string and must be from the original list with 6 lowercase letters.

This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word. Also, if your guess is not in the given wordlist, it will return -1 instead.

For each test case, you have exactly 10 guesses to guess the word. You will be told the number of matches in your guess.

Given an array of strings wordlist and a master object, return the minimum number of calls to Master.guess to find the secret word.`,
    difficulty: 'Hard',
    category: ['String', 'Interactive', 'Minimax'],
    input1: 'wordlist = ["acckzz","ccbazz","eiowzz","abcczz"], secret = "acckzz"',
    input2: 'wordlist = ["hamada","khaled"], secret = "hamada"',
    explanation: `## Problem Statement

This is an interactive problem.

You are given an array of unique strings wordlist where wordlist[i] is 6 letters long, and one word in this list is chosen as secret.

You may call Master.guess(word) to guess a word. The guessed word should have type string and must be from the original list with 6 lowercase letters.

This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word. Also, if your guess is not in the given wordlist, it will return -1 instead.

For each test case, you have exactly 10 guesses to guess the word. You will be told the number of matches in your guess.

Given an array of strings wordlist and a master object, return the minimum number of calls to Master.guess to find the secret word.

## Examples

### Example 1:
**Input:** wordlist = ["acckzz","ccbazz","eiowzz","abcczz"], secret = "acckzz"  
**Output:** 1  
**Explanation:** 
- We guess "acckzz" and get 6 matches, so we found the secret word.

### Example 2:
**Input:** wordlist = ["hamada","khaled"], secret = "hamada"  
**Output:** 1  
**Explanation:** 
- We guess "hamada" and get 6 matches, so we found the secret word.

## Intuition

The key insight is to use a minimax strategy to minimize the maximum possible number of remaining words after each guess. We want to choose a word that, regardless of the response, leaves us with the smallest possible set of candidate words.

## Approach

1. **Minimax Strategy**: Choose the word that minimizes the maximum size of the remaining candidate set
2. **Word Filtering**: After each guess, filter the wordlist based on the response
3. **Match Counting**: Use a helper function to count exact character matches between two words
4. **Optimal Guessing**: Always choose the word that gives the most balanced split of remaining candidates

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution: Minimax Strategy

**Time Complexity:** O(n²) - For each guess, we may need to check all remaining words  
**Space Complexity:** O(n) - To store the filtered wordlist`,
    output1: '1',
    output2: '1',
    constraints: `## Constraints

- 1 <= wordlist.length <= 100
- wordlist[i].length == 6
- wordlist[i] consists of lowercase letters only
- All words in wordlist are unique
- secret exists in wordlist
- 10 calls to Master.guess are allowed`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int countMatches(char* word1, char* word2) {
    int matches = 0;
    for (int i = 0; i < 6; i++) {
        if (word1[i] == word2[i]) {
            matches++;
        }
    }
    return matches;
}

char* findBestGuess(char** wordlist, int wordlistSize) {
    int minMaxGroup = wordlistSize;
    char* bestWord = wordlist[0];
    
    for (int i = 0; i < wordlistSize; i++) {
        int groups[7] = {0};
        
        for (int j = 0; j < wordlistSize; j++) {
            if (i != j) {
                int matches = countMatches(wordlist[i], wordlist[j]);
                groups[matches]++;
            }
        }
        
        int maxGroup = 0;
        for (int j = 0; j < 7; j++) {
            if (groups[j] > maxGroup) {
                maxGroup = groups[j];
            }
        }
        
        if (maxGroup < minMaxGroup) {
            minMaxGroup = maxGroup;
            bestWord = wordlist[i];
        }
    }
    
    return bestWord;
}

void filterWordlist(char** wordlist, int* wordlistSize, char* guess, int matches) {
    int writeIndex = 0;
    for (int i = 0; i < *wordlistSize; i++) {
        if (countMatches(guess, wordlist[i]) == matches) {
            wordlist[writeIndex] = wordlist[i];
            writeIndex++;
        }
    }
    *wordlistSize = writeIndex;
}

int findSecretWord(char** wordlist, int wordlistSize, char* secret) {
    int guesses = 0;
    
    while (wordlistSize > 1) {
        char* guess = findBestGuess(wordlist, wordlistSize);
        guesses++;
        
        int matches = countMatches(guess, secret);
        
        if (matches == 6) {
            return guesses;
        }
        
        filterWordlist(wordlist, &wordlistSize, guess, matches);
    }
    
    if (wordlistSize == 1) {
        guesses++;
    }
    
    return guesses;
}

int main() {
    int n;
    printf("Enter the number of words in wordlist: ");
    scanf("%d", &n);
    
    char** wordlist = (char**)malloc(n * sizeof(char*));
    char secret[7];
    
    printf("Enter %d words (6 letters each):\\n", n);
    for (int i = 0; i < n; i++) {
        wordlist[i] = (char*)malloc(7 * sizeof(char));
        scanf("%s", wordlist[i]);
    }
    
    printf("Enter the secret word: ");
    scanf("%s", secret);
    
    int result = findSecretWord(wordlist, n, secret);
    printf("Minimum guesses needed: %d\\n", result);
    
    for (int i = 0; i < n; i++) {
        free(wordlist[i]);
    }
    free(wordlist);
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'We use a minimax strategy to choose the word that minimizes the maximum number of remaining candidates after each guess. This ensures optimal performance in the worst case.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int countMatches(char* word1, char* word2) {
    int matches = 0;
    for (int i = 0; i < 6; i++) {
        if (word1[i] == word2[i]) {
            matches++;
        }
    }
    return matches;
}

char* findBestGuess(char** wordlist, int wordlistSize) {
    return wordlist[0];
}

void filterWordlist(char** wordlist, int* wordlistSize, char* guess, int matches) {
    int writeIndex = 0;
    for (int i = 0; i < *wordlistSize; i++) {
        if (countMatches(guess, wordlist[i]) == matches) {
            wordlist[writeIndex] = wordlist[i];
            writeIndex++;
        }
    }
    *wordlistSize = writeIndex;
}

int findSecretWord(char** wordlist, int wordlistSize, char* secret) {
    int guesses = 0;
    
    while (wordlistSize > 1) {
        char* guess = findBestGuess(wordlist, wordlistSize);
        guesses++;
        
        int matches = countMatches(guess, secret);
        
        if (matches == 6) {
            return guesses;
        }
        
        filterWordlist(wordlist, &wordlistSize, guess, matches);
    }
    
    if (wordlistSize == 1) {
        guesses++;
    }
    
    return guesses;
}

int main() {
    int n;
    printf("Enter the number of words in wordlist: ");
    scanf("%d", &n);
    
    char** wordlist = (char**)malloc(n * sizeof(char*));
    char secret[7];
    
    printf("Enter %d words (6 letters each):\\n", n);
    for (int i = 0; i < n; i++) {
        wordlist[i] = (char*)malloc(7 * sizeof(char));
        scanf("%s", wordlist[i]);
    }
    
    printf("Enter the secret word: ");
    scanf("%s", secret);
    
    int result = findSecretWord(wordlist, n, secret);
    printf("Minimum guesses needed: %d\\n", result);
    
    for (int i = 0; i < n; i++) {
        free(wordlist[i]);
    }
    free(wordlist);
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'We use a simplified strategy where we always choose the first word in the remaining list. This is simpler but may not be as optimal as the minimax approach.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int countMatches(char* word1, char* word2) {
    int matches = 0;
    for (int i = 0; i < 6; i++) {
        if (word1[i] == word2[i]) {
            matches++;
        }
    }
    return matches;
}

int findSecretWord(char** wordlist, int wordlistSize, char* secret) {
    for (int i = 0; i < wordlistSize; i++) {
        int matches = countMatches(wordlist[i], secret);
        
        if (matches == 6) {
            return i + 1;
        }
    }
    
    return wordlistSize;
}

int main() {
    int n;
    printf("Enter the number of words in wordlist: ");
    scanf("%d", &n);
    
    char** wordlist = (char**)malloc(n * sizeof(char*));
    char secret[7];
    
    printf("Enter %d words (6 letters each):\\n", n);
    for (int i = 0; i < n; i++) {
        wordlist[i] = (char*)malloc(7 * sizeof(char));
        scanf("%s", wordlist[i]);
    }
    
    printf("Enter the secret word: ");
    scanf("%s", secret);
    
    int result = findSecretWord(wordlist, n, secret);
    printf("Guesses needed: %d\\n", result);
    
    for (int i = 0; i < n; i++) {
        free(wordlist[i]);
    }
    free(wordlist);
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'We simply try each word in order until we find the secret. This is the simplest approach but may require trying all words in the worst case.'
        }
      }
    }
  },
  {
    id: 'google-3',
    title: 'Expressive Words',
    description: `Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii". In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".

For some given string s, a query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has size 2, which is less than 3. Also, we could do another kind of extension on the group "l" to get "helllllooo", but we cannot get "helllloo" since the group "ll" has size 2, which is less than 3.

Given two strings s and words, return the number of words in words that are stretchy to s.`,
    difficulty: 'Medium',
    category: ['String', 'Two Pointers'],
    input1: 's = "heeellooo", words = ["hello", "hi", "helo"]',
    input2: 's = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]',
    explanation: `## Problem Statement

Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii". In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".

For some given string s, a query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has size 2, which is less than 3. Also, we could do another kind of extension on the group "l" to get "helllllooo", but we cannot get "helllloo" since the group "ll" has size 2, which is less than 3.

Given two strings s and words, return the number of words in words that are stretchy to s.

## Examples

### Example 1:
**Input:** s = "heeellooo", words = ["hello", "hi", "helo"]  
**Output:** 1  
**Explanation:** 
- "hello" can be stretched to "heeellooo" by extending "e" and "o"
- "hi" cannot be stretched to "heeellooo"
- "helo" cannot be stretched to "heeellooo"

### Example 2:
**Input:** s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]  
**Output:** 3  
**Explanation:** 
- All three words can be stretched to "zzzzzyyyyy"

## Intuition

The key insight is to compare groups of consecutive identical characters between the target string and each word. A word is stretchy if:
1. It has the same sequence of characters as the target
2. Each group in the word can be extended to match the corresponding group in the target
3. Extensions are only allowed if the target group has 3 or more characters

## Approach

1. **Group Comparison**: For each word, compare it character by character with the target string
2. **Group Counting**: Count consecutive identical characters in both strings
3. **Stretchability Check**: A group is stretchable if:
   - The characters match
   - Either both groups have the same length, or the target group has 3+ characters and is longer
4. **Two Pointers**: Use two pointers to traverse both strings simultaneously

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution: Two Pointers with Group Comparison

**Time Complexity:** O(n * m) - Where n is the number of words and m is the average word length  
**Space Complexity:** O(1) - Constant extra space`,
    output1: '1',
    output2: '3',
    constraints: `## Constraints

- 1 <= s.length <= 100
- 1 <= words.length <= 100
- 1 <= words[i].length <= 100
- s and words[i] consist of lowercase letters only`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void getNextGroup(char* s, int* start, int* end, char* c, int* count) {
    if (*start >= strlen(s)) {
        *count = 0;
        return;
    }
    
    *c = s[*start];
    *count = 1;
    *end = *start + 1;
    
    while (*end < strlen(s) && s[*end] == *c) {
        (*count)++;
        (*end)++;
    }
}

int isStretchy(char* s, char* word) {
    int sStart = 0, sEnd = 0;
    int wordStart = 0, wordEnd = 0;
    
    while (sStart < strlen(s) && wordStart < strlen(word)) {
        char sChar, wordChar;
        int sCount, wordCount;
        
        getNextGroup(s, &sStart, &sEnd, &sChar, &sCount);
        getNextGroup(word, &wordStart, &wordEnd, &wordChar, &wordCount);
        
        if (sChar != wordChar) {
            return 0;
        }
        
        if (sCount < wordCount) {
            return 0;
        }
        
        if (sCount != wordCount && sCount < 3) {
            return 0;
        }
        
        sStart = sEnd;
        wordStart = wordEnd;
    }
    
    return (sStart >= strlen(s) && wordStart >= strlen(word));
}

int expressiveWords(char* s, char** words, int wordsSize) {
    int count = 0;
    
    for (int i = 0; i < wordsSize; i++) {
        if (isStretchy(s, words[i])) {
            count++;
        }
    }
    
    return count;
}

int main() {
    char s[101];
    int n;
    
    printf("Enter the target string: ");
    scanf("%s", s);
    
    printf("Enter the number of words: ");
    scanf("%d", &n);
    
    char** words = (char**)malloc(n * sizeof(char*));
    
    printf("Enter %d words:\\n", n);
    for (int i = 0; i < n; i++) {
        words[i] = (char*)malloc(101 * sizeof(char));
        scanf("%s", words[i]);
    }
    
    int result = expressiveWords(s, words, n);
    printf("Number of stretchy words: %d\\n", result);
    
    for (int i = 0; i < n; i++) {
        free(words[i]);
    }
    free(words);
    return 0;
}`,
          timeComplexity: 'O(n * m)',
          spaceComplexity: 'O(1)',
          explanation: 'We use two pointers to compare groups of consecutive identical characters. A word is stretchy if each group can be extended according to the rules.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int isStretchy(char* s, char* word) {
    int sLen = strlen(s);
    int wordLen = strlen(word);
    int sIndex = 0, wordIndex = 0;
    
    while (sIndex < sLen && wordIndex < wordLen) {
        if (s[sIndex] != word[wordIndex]) {
            return 0;
        }
        
        char currentChar = s[sIndex];
        int sCount = 0;
        while (sIndex < sLen && s[sIndex] == currentChar) {
            sCount++;
            sIndex++;
        }
        
        int wordCount = 0;
        while (wordIndex < wordLen && word[wordIndex] == currentChar) {
            wordCount++;
            wordIndex++;
        }
        
        if (sCount < wordCount || (sCount != wordCount && sCount < 3)) {
            return 0;
        }
    }
    
    return (sIndex == sLen && wordIndex == wordLen);
}

int expressiveWords(char* s, char** words, int wordsSize) {
    int count = 0;
    
    for (int i = 0; i < wordsSize; i++) {
        if (isStretchy(s, words[i])) {
            count++;
        }
    }
    
    return count;
}

int main() {
    char s[101];
    int n;
    
    printf("Enter the target string: ");
    scanf("%s", s);
    
    printf("Enter the number of words: ");
    scanf("%d", &n);
    
    char** words = (char**)malloc(n * sizeof(char*));
    
    printf("Enter %d words:\\n", n);
    for (int i = 0; i < n; i++) {
        words[i] = (char*)malloc(101 * sizeof(char));
        scanf("%s", words[i]);
    }
    
    int result = expressiveWords(s, words, n);
    printf("Number of stretchy words: %d\\n", result);
    
    for (int i = 0; i < n; i++) {
        free(words[i]);
    }
    free(words);
    return 0;
}`,
          timeComplexity: 'O(n * m)',
          spaceComplexity: 'O(1)',
          explanation: 'We use a simplified approach that directly compares groups of consecutive characters without using a separate helper function.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int isStretchy(char* s, char* word) {
    int sLen = strlen(s);
    int wordLen = strlen(word);
    
    if (sLen < wordLen) {
        return 0;
    }
    
    int sIndex = 0, wordIndex = 0;
    
    while (sIndex < sLen && wordIndex < wordLen) {
        if (s[sIndex] != word[wordIndex]) {
            return 0;
        }
        
        char currentChar = s[sIndex];
        int sCount = 0, wordCount = 0;
        
        while (sIndex < sLen && s[sIndex] == currentChar) {
            sCount++;
            sIndex++;
        }
        
        while (wordIndex < wordLen && word[wordIndex] == currentChar) {
            wordCount++;
            wordIndex++;
        }
        
        if (sCount < wordCount) {
            return 0;
        }
    }
    
    return (sIndex == sLen && wordIndex == wordLen);
}

int expressiveWords(char* s, char** words, int wordsSize) {
    int count = 0;
    
    for (int i = 0; i < wordsSize; i++) {
        if (isStretchy(s, words[i])) {
            count++;
        }
    }
    
    return count;
}

int main() {
    char s[101];
    int n;
    
    printf("Enter the target string: ");
    scanf("%s", s);
    
    printf("Enter the number of words: ");
    scanf("%d", &n);
    
    char** words = (char**)malloc(n * sizeof(char*));
    
    printf("Enter %d words:\\n", n);
    for (int i = 0; i < n; i++) {
        words[i] = (char*)malloc(101 * sizeof(char));
        scanf("%s", words[i]);
    }
    
    int result = expressiveWords(s, words, n);
    printf("Number of stretchy words: %d\\n", result);
    
    for (int i = 0; i < n; i++) {
        free(words[i]);
    }
    free(words);
    return 0;
}`,
          timeComplexity: 'O(n * m)',
          spaceComplexity: 'O(1)',
          explanation: 'We use a basic character-by-character comparison approach. This is simpler but may not handle all edge cases as robustly as the optimal solution.'
        }
      }
    }
  },
  {
    id: 'google-4',
    title: 'Delete Nodes And Return Forest',
    description: `Given the root of a binary tree, each node has a value, and an integer target.

Return a forest (an array of trees) after deleting all nodes with a value equal to target.

A forest is a collection of disjoint trees. You may return the result in any order.`,
    difficulty: 'Hard',
    category: ['Tree', 'Depth-First Search'],
    input1: 'root = [1,2,3,4,5,6,7], target = 3',
    input2: 'root = [1,2,3,4,5,6,7], target = 7',
    explanation: `## Problem Statement

Given the root of a binary tree, each node has a value, and an integer target.

Return a forest (an array of trees) after deleting all nodes with a value equal to target.

A forest is a collection of disjoint trees. You may return the result in any order.

## Examples

### Example 1:
**Input:** root = [1,2,3,4,5,6,7], target = 3  
**Output:** [[1,2,4,5],[6,7]]  
**Explanation:** 
The first figure represents the initial tree.
After deleting node 3, the tree becomes two trees with disjoint nodes.

### Example 2:
**Input:** root = [1,2,3,4,5,6,7], target = 7  
**Output:** [[1,2,3,4,5,6]]  
**Explanation:** 
After deleting node 7, the tree becomes one tree with all nodes.

## Intuition

The problem can be approached using a Depth-First Search (DFS) to traverse the tree and identify nodes to delete. We need to handle the case where the root itself is the target value.

## Approach

1. Traverse the tree using DFS.
2. If the current node's value is equal to the target, we need to delete it.
3. If the current node is a leaf node, we can delete it directly.
4. If the current node has children, we need to decide which child to keep.
5. If the current node is not the target, we add it to the result forest.
6. If the current node is the target and is the root, we need to handle the case where the root itself is the target.

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution: DFS with Post-Order Traversal

**Time Complexity:** O(n) - Where n is the number of nodes in the tree  
**Space Complexity:** O(h) - Where h is the height of the tree, for recursion stack`,
    output1: '[[1,2,4,5],[6,7]]',
    output2: '[[1,2,3,4,5,6]]',
    constraints: `## Constraints

- The number of nodes in the given tree is at most 1000.
- Each node's value is between 1 and 1000.
- The target value is between 1 and 1000.`,
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

// Helper function to create a new tree node
struct TreeNode* createNode(int val) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// Helper function to add a tree to the forest
void addToForest(struct TreeNode*** forest, int* forestSize, struct TreeNode* root) {
    if (root != NULL) {
        (*forest) = realloc(*forest, (*forestSize + 1) * sizeof(struct TreeNode*));
        (*forest)[*forestSize] = root;
        (*forestSize)++;
    }
}

// DFS function to delete nodes and build forest
struct TreeNode* deleteNodesDFS(struct TreeNode* root, int target, struct TreeNode*** forest, int* forestSize) {
    if (root == NULL) {
        return NULL;
    }
    
    // Recursively process left and right children
    root->left = deleteNodesDFS(root->left, target, forest, forestSize);
    root->right = deleteNodesDFS(root->right, target, forest, forestSize);
    
    // If current node should be deleted
    if (root->val == target) {
        // Add children to forest before deleting current node
        if (root->left != NULL) {
            addToForest(forest, forestSize, root->left);
        }
        if (root->right != NULL) {
            addToForest(forest, forestSize, root->right);
        }
        
        // Free current node and return NULL
        free(root);
        return NULL;
    }
    
    return root;
}

// Main function to delete nodes and return forest
struct TreeNode** delNodes(struct TreeNode* root, int target, int* returnSize) {
    struct TreeNode** forest = NULL;
    *returnSize = 0;
    
    // If root itself is the target, handle specially
    if (root != NULL && root->val == target) {
        if (root->left != NULL) {
            addToForest(&forest, returnSize, root->left);
        }
        if (root->right != NULL) {
            addToForest(&forest, returnSize, root->right);
        }
        free(root);
    } else {
        // Process the tree normally
        root = deleteNodesDFS(root, target, &forest, returnSize);
        if (root != NULL) {
            addToForest(&forest, returnSize, root);
        }
    }
    
    return forest;
}

// Helper function to print tree (for testing)
void printTree(struct TreeNode* root) {
    if (root == NULL) {
        printf("null ");
        return;
    }
    printf("%d ", root->val);
    printTree(root->left);
    printTree(root->right);
}

int main() {
    int n, target;
    printf("Enter the number of nodes: ");
    scanf("%d", &n);
    
    printf("Enter the target value to delete: ");
    scanf("%d", &target);
    
    // Create a simple tree for testing
    struct TreeNode* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);
    root->right->left = createNode(6);
    root->right->right = createNode(7);
    
    int returnSize;
    struct TreeNode** forest = delNodes(root, target, &returnSize);
    
    printf("Forest after deletion (number of trees: %d):\\n", returnSize);
    for (int i = 0; i < returnSize; i++) {
        printf("Tree %d: ", i + 1);
        printTree(forest[i]);
        printf("\\n");
    }
    
    // Free memory
    for (int i = 0; i < returnSize; i++) {
        // Note: In a real implementation, you'd need a proper tree deletion function
        free(forest[i]);
    }
    free(forest);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)',
          explanation: 'We use DFS with post-order traversal to process the tree. When we encounter a target node, we add its children to the forest and delete the node itself.'
        },
        Average: {
          code: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createNode(int val) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

void addToForest(struct TreeNode*** forest, int* forestSize, struct TreeNode* root) {
    if (root != NULL) {
        (*forest) = realloc(*forest, (*forestSize + 1) * sizeof(struct TreeNode*));
        (*forest)[*forestSize] = root;
        (*forestSize)++;
    }
}

struct TreeNode* deleteNodesDFS(struct TreeNode* root, int target, struct TreeNode*** forest, int* forestSize) {
    if (root == NULL) {
        return NULL;
    }
    
    root->left = deleteNodesDFS(root->left, target, forest, forestSize);
    root->right = deleteNodesDFS(root->right, target, forest, forestSize);
    
    if (root->val == target) {
        if (root->left != NULL) {
            addToForest(forest, forestSize, root->left);
        }
        if (root->right != NULL) {
            addToForest(forest, forestSize, root->right);
        }
        free(root);
        return NULL;
    }
    
    return root;
}

struct TreeNode** delNodes(struct TreeNode* root, int target, int* returnSize) {
    struct TreeNode** forest = NULL;
    *returnSize = 0;
    
    if (root != NULL && root->val == target) {
        if (root->left != NULL) {
            addToForest(&forest, returnSize, root->left);
        }
        if (root->right != NULL) {
            addToForest(&forest, returnSize, root->right);
        }
        free(root);
    } else {
        root = deleteNodesDFS(root, target, &forest, returnSize);
        if (root != NULL) {
            addToForest(&forest, returnSize, root);
        }
    }
    
    return forest;
}

void printTree(struct TreeNode* root) {
    if (root == NULL) {
        printf("null ");
        return;
    }
    printf("%d ", root->val);
    printTree(root->left);
    printTree(root->right);
}

int main() {
    int n, target;
    printf("Enter the number of nodes: ");
    scanf("%d", &n);
    
    printf("Enter the target value to delete: ");
    scanf("%d", &target);
    
    struct TreeNode* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);
    root->right->left = createNode(6);
    root->right->right = createNode(7);
    
    int returnSize;
    struct TreeNode** forest = delNodes(root, target, &returnSize);
    
    printf("Forest after deletion (number of trees: %d):\\n", returnSize);
    for (int i = 0; i < returnSize; i++) {
        printf("Tree %d: ", i + 1);
        printTree(forest[i]);
        printf("\\n");
    }
    
    for (int i = 0; i < returnSize; i++) {
        free(forest[i]);
    }
    free(forest);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)',
          explanation: 'We use a simplified DFS approach that directly handles the deletion and forest building in a single pass.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createNode(int val) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

void addToForest(struct TreeNode*** forest, int* forestSize, struct TreeNode* root) {
    if (root != NULL) {
        (*forest) = realloc(*forest, (*forestSize + 1) * sizeof(struct TreeNode*));
        (*forest)[*forestSize] = root;
        (*forestSize)++;
    }
}

struct TreeNode* deleteNodesDFS(struct TreeNode* root, int target, struct TreeNode*** forest, int* forestSize) {
    if (root == NULL) {
        return NULL;
    }
    
    // Process children first
    if (root->left != NULL) {
        root->left = deleteNodesDFS(root->left, target, forest, forestSize);
    }
    if (root->right != NULL) {
        root->right = deleteNodesDFS(root->right, target, forest, forestSize);
    }
    
    // Check if current node should be deleted
    if (root->val == target) {
        // Add children to forest
        if (root->left != NULL) {
            addToForest(forest, forestSize, root->left);
        }
        if (root->right != NULL) {
            addToForest(forest, forestSize, root->right);
        }
        
        // Delete current node
        free(root);
        return NULL;
    }
    
    return root;
}

struct TreeNode** delNodes(struct TreeNode* root, int target, int* returnSize) {
    struct TreeNode** forest = NULL;
    *returnSize = 0;
    
    // Handle root deletion
    if (root != NULL && root->val == target) {
        if (root->left != NULL) {
            addToForest(&forest, returnSize, root->left);
        }
        if (root->right != NULL) {
            addToForest(&forest, returnSize, root->right);
        }
        free(root);
    } else {
        // Process normally
        root = deleteNodesDFS(root, target, &forest, returnSize);
        if (root != NULL) {
            addToForest(&forest, returnSize, root);
        }
    }
    
    return forest;
}

void printTree(struct TreeNode* root) {
    if (root == NULL) {
        printf("null ");
        return;
    }
    printf("%d ", root->val);
    printTree(root->left);
    printTree(root->right);
}

int main() {
    int n, target;
    printf("Enter the number of nodes: ");
    scanf("%d", &n);
    
    printf("Enter the target value to delete: ");
    scanf("%d", &target);
    
    struct TreeNode* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);
    root->right->left = createNode(6);
    root->right->right = createNode(7);
    
    int returnSize;
    struct TreeNode** forest = delNodes(root, target, &returnSize);
    
    printf("Forest after deletion (number of trees: %d):\\n", returnSize);
    for (int i = 0; i < returnSize; i++) {
        printf("Tree %d: ", i + 1);
        printTree(forest[i]);
        printf("\\n");
    }
    
    for (int i = 0; i < returnSize; i++) {
        free(forest[i]);
    }
    free(forest);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)',
          explanation: 'We use a basic DFS approach with explicit checks for NULL pointers. This is more verbose but easier to understand.'
        }
      }
    }
  }
];
