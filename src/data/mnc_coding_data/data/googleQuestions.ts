import { Question } from '../index';

export const allGoogleQuestions: Question[] = [
  {
    id: 'minimum-domino-rotations',
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
    id: 'guess-the-word',
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
    id: 'expressive-words',
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
    id: 'delete-nodes-and-return-forest',
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
  },
  {
    id: 'text-justification',
    title: 'Text Justification',
    description: `Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:
- A word is defined as a character sequence consisting of non-space characters only.
- Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
- An input word array contains at least one word.`,
    difficulty: 'Hard',
    category: ['String', 'Array', 'Simulation'],
    input1: 'words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16',
    input2: 'words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16',
    explanation: `## Problem Statement

Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

## Examples

### Example 1:
**Input:** words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16  
**Output:** [
  "This    is    an",
  "example  of text",
  "justification.  "
]  
**Explanation:** 
- Line 1: "This    is    an" (16 characters)
- Line 2: "example  of text" (16 characters)
- Line 3: "justification.  " (16 characters, left-justified)

### Example 2:
**Input:** words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16  
**Output:** [
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]  
**Explanation:** 
- Line 1: "What   must   be" (16 characters)
- Line 2: "acknowledgment  " (16 characters, left-justified)
- Line 3: "shall be        " (16 characters, left-justified)

### Example 3:
**Input:** words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20  
**Output:** [
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

## Intuition

The key insight is to process words line by line, calculating how many words can fit in each line while maintaining the maxWidth constraint. For each line, we need to distribute spaces evenly between words, with extra spaces going to the left slots.

## Approach

### Approach 1: Greedy Line Packing (Optimal)
1. Process words one by one, building lines
2. For each line, calculate how many words can fit
3. Distribute spaces evenly between words
4. Handle the last line specially (left-justified)

### Approach 2: Dynamic Programming
1. Use DP to find optimal line breaks
2. Calculate minimum raggedness
3. Reconstruct the justified text

### Approach 3: Brute Force
1. Try all possible line break combinations
2. Calculate space distribution for each
3. Choose the best arrangement

## Dry Run

Let's trace through Example 1: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16

### Line 1: "This is an"
- Words: ["This", "is", "an"] (3 words)
- Total word length: 3 + 2 + 2 = 7
- Available spaces: 16 - 7 = 9
- Spaces between words: 9 / (3-1) = 4.5 → 5, 4
- Result: "This    is    an"

### Line 2: "example of text"
- Words: ["example", "of", "text"] (3 words)
- Total word length: 7 + 2 + 4 = 13
- Available spaces: 16 - 13 = 3
- Spaces between words: 3 / (3-1) = 1.5 → 2, 1
- Result: "example  of text"

### Line 3: "justification."
- Words: ["justification."] (1 word)
- Last line: left-justified
- Result: "justification.  "

## Solution

**Note:** This solution provides multiple approaches to solve the problem. Choose the one that best fits your understanding and requirements.

### Key Insights:
1. **Greedy Packing**: Always try to fit as many words as possible in each line
2. **Space Distribution**: Distribute spaces evenly, with extra spaces on the left
3. **Last Line**: Always left-justified with single spaces between words

### Edge Cases:
- Single word per line: no spaces between words
- Last line: left-justified regardless of space distribution
- Words that exceed maxWidth: should not occur per problem constraints

## Time Complexity
- **Greedy Approach**: O(n) where n is total number of words
- **Dynamic Programming**: O(n²)
- **Brute Force**: O(2^n)

## Space Complexity
- **Greedy Approach**: O(n) for output
- **Dynamic Programming**: O(n²)
- **Brute Force**: O(n)`,
    output1: '["This    is    an","example  of text","justification.  "]',
    output2: '["What   must   be","acknowledgment  ","shall be        "]',
    constraints: '- 1 <= words.length <= 300\n- 1 <= words[i].length <= 20\n- words[i] consists of only English letters and symbols\n- 1 <= maxWidth <= 100\n- words[i].length <= maxWidth',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** fullJustify(char** words, int wordsSize, int maxWidth, int* returnSize) {
    char** result = (char**)malloc(wordsSize * sizeof(char*));
    *returnSize = 0;
    
    int i = 0;
    while (i < wordsSize) {
        // Find how many words can fit in current line
        int lineStart = i;
        int lineLength = strlen(words[i]);
        i++;
        
        while (i < wordsSize && lineLength + 1 + strlen(words[i]) <= maxWidth) {
            lineLength += 1 + strlen(words[i]);
            i++;
        }
        
        int wordCount = i - lineStart;
        int totalSpaces = maxWidth - lineLength + wordCount - 1;
        
        // Create the line
        char* line = (char*)malloc((maxWidth + 1) * sizeof(char));
        line[0] = '\\0';
        
        if (i == wordsSize || wordCount == 1) {
            // Last line or single word: left-justified
            strcpy(line, words[lineStart]);
            for (int j = lineStart + 1; j < i; j++) {
                strcat(line, " ");
                strcat(line, words[j]);
            }
            // Pad with spaces to maxWidth
            int currentLength = strlen(line);
            for (int j = currentLength; j < maxWidth; j++) {
                line[j] = ' ';
            }
            line[maxWidth] = '\\0';
        } else {
            // Middle lines: fully justified
            strcpy(line, words[lineStart]);
            
            if (wordCount > 1) {
                int spacesBetween = totalSpaces / (wordCount - 1);
                int extraSpaces = totalSpaces % (wordCount - 1);
                
                for (int j = lineStart + 1; j < i; j++) {
                    int spacesToAdd = spacesBetween + (extraSpaces > 0 ? 1 : 0);
                    if (extraSpaces > 0) extraSpaces--;
                    
                    for (int k = 0; k < spacesToAdd; k++) {
                        strcat(line, " ");
                    }
                    strcat(line, words[j]);
                }
            }
        }
        
        result[*returnSize] = line;
        (*returnSize)++;
    }
    
    return result;
}

int main() {
    // Test case 1
    char* words1[] = {"This", "is", "an", "example", "of", "text", "justification."};
    int maxWidth1 = 16;
    int returnSize1;
    
    char** result1 = fullJustify(words1, 7, maxWidth1, &returnSize1);
    
    printf("Test 1:\\n");
    for (int i = 0; i < returnSize1; i++) {
        printf("\\"%s\\"\\n", result1[i]);
        free(result1[i]);
    }
    free(result1);
    
    // Test case 2
    char* words2[] = {"What", "must", "be", "acknowledgment", "shall", "be"};
    int maxWidth2 = 16;
    int returnSize2;
    
    char** result2 = fullJustify(words2, 6, maxWidth2, &returnSize2);
    
    printf("\\nTest 2:\\n");
    for (int i = 0; i < returnSize2; i++) {
        printf("\\"%s\\"\\n", result2[i]);
        free(result2[i]);
    }
    free(result2);
    
    return 0;
}`,
          explanation: 'This is the optimal greedy approach. We process words line by line, calculating how many words can fit in each line and distributing spaces evenly. The last line is handled specially with left justification.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** fullJustify(char** words, int wordsSize, int maxWidth, int* returnSize) {
    char** result = (char**)malloc(wordsSize * sizeof(char*));
    *returnSize = 0;
    
    int i = 0;
    while (i < wordsSize) {
        // Find words for current line
        int lineStart = i;
        int currentLength = strlen(words[i]);
        i++;
        
        while (i < wordsSize) {
            int nextLength = currentLength + 1 + strlen(words[i]);
            if (nextLength > maxWidth) break;
            currentLength = nextLength;
            i++;
        }
        
        int wordCount = i - lineStart;
        int spacesNeeded = maxWidth - currentLength + wordCount - 1;
        
        // Build the line
        char* line = (char*)malloc((maxWidth + 1) * sizeof(char));
        int lineIndex = 0;
        
        if (i == wordsSize || wordCount == 1) {
            // Last line or single word
            for (int j = lineStart; j < i; j++) {
                strcpy(line + lineIndex, words[j]);
                lineIndex += strlen(words[j]);
                if (j < i - 1) {
                    line[lineIndex++] = ' ';
                }
            }
            // Fill remaining spaces
            while (lineIndex < maxWidth) {
                line[lineIndex++] = ' ';
            }
        } else {
            // Middle lines
            for (int j = lineStart; j < i; j++) {
                strcpy(line + lineIndex, words[j]);
                lineIndex += strlen(words[j]);
                
                if (j < i - 1) {
                    int spacesToAdd = spacesNeeded / (wordCount - 1);
                    if (j - lineStart < spacesNeeded % (wordCount - 1)) {
                        spacesToAdd++;
                    }
                    for (int k = 0; k < spacesToAdd; k++) {
                        line[lineIndex++] = ' ';
                    }
                }
            }
        }
        
        line[maxWidth] = '\\0';
        result[*returnSize] = line;
        (*returnSize)++;
    }
    
    return result;
}

int main() {
    // Test case 1
    char* words1[] = {"This", "is", "an", "example", "of", "text", "justification."};
    int maxWidth1 = 16;
    int returnSize1;
    
    char** result1 = fullJustify(words1, 7, maxWidth1, &returnSize1);
    
    printf("Test 1:\\n");
    for (int i = 0; i < returnSize1; i++) {
        printf("\\"%s\\"\\n", result1[i]);
        free(result1[i]);
    }
    free(result1);
    
    return 0;
}`,
          explanation: 'This is a more explicit approach that builds each line character by character. It handles space distribution more carefully and is easier to debug.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** fullJustify(char** words, int wordsSize, int maxWidth, int* returnSize) {
    char** result = (char**)malloc(wordsSize * sizeof(char*));
    *returnSize = 0;
    
    int i = 0;
    while (i < wordsSize) {
        // Find words for current line
        int lineStart = i;
        int currentLength = 0;
        int wordCount = 0;
        
        // Count words that can fit
        while (i < wordsSize) {
            int wordLen = strlen(words[i]);
            int newLength = currentLength + wordLen;
            if (wordCount > 0) newLength++; // Add space
            
            if (newLength > maxWidth) break;
            
            currentLength = newLength;
            wordCount++;
            i++;
        }
        
        // Build the line
        char* line = (char*)malloc((maxWidth + 1) * sizeof(char));
        memset(line, ' ', maxWidth);
        line[maxWidth] = '\\0';
        
        int lineIndex = 0;
        
        if (i == wordsSize || wordCount == 1) {
            // Last line or single word: left-justified
            for (int j = 0; j < wordCount; j++) {
                strcpy(line + lineIndex, words[lineStart + j]);
                lineIndex += strlen(words[lineStart + j]);
                if (j < wordCount - 1) {
                    lineIndex++; // Single space
                }
            }
        } else {
            // Middle lines: fully justified
            int totalSpaces = maxWidth - currentLength + wordCount - 1;
            
            for (int j = 0; j < wordCount; j++) {
                strcpy(line + lineIndex, words[lineStart + j]);
                lineIndex += strlen(words[lineStart + j]);
                
                if (j < wordCount - 1) {
                    int spacesToAdd = totalSpaces / (wordCount - 1);
                    if (j < totalSpaces % (wordCount - 1)) {
                        spacesToAdd++;
                    }
                    lineIndex += spacesToAdd;
                }
            }
        }
        
        result[*returnSize] = line;
        (*returnSize)++;
    }
    
    return result;
}

int main() {
    // Test case 1
    char* words1[] = {"This", "is", "an", "example", "of", "text", "justification."};
    int maxWidth1 = 16;
    int returnSize1;
    
    char** result1 = fullJustify(words1, 7, maxWidth1, &returnSize1);
    
    printf("Test 1:\\n");
    for (int i = 0; i < returnSize1; i++) {
        printf("\\"%s\\"\\n", result1[i]);
        free(result1[i]);
    }
    free(result1);
    
    return 0;
}`,
          explanation: 'This is a more verbose approach that pre-fills the line with spaces and then places words at calculated positions. It is less efficient but more explicit about space distribution.',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      }
    }
  },
  {
    id: 'minimum-window-substring',
    title: 'Minimum Window Substring',
    description: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.`,
    difficulty: 'Hard',
    category: ['String', 'Hash Table', 'Sliding Window'],
    input1: 's = "ADOBECODEBANC", t = "ABC"',
    input2: 's = "a", t = "a"',
    explanation: `## Problem Statement

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

## Examples

### Example 1:
**Input:** s = "ADOBECODEBANC", t = "ABC"  
**Output:** "BANC"  
**Explanation:** The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

### Example 2:
**Input:** s = "a", t = "a"  
**Output:** "a"  
**Explanation:** The entire string s is the minimum window.

### Example 3:
**Input:** s = "a", t = "aa"  
**Output:** ""  
**Explanation:** Both 'a's from t must be included in the window. The substring of s has length 1, so there is no window that includes both 'a's.

### Example 4:
**Input:** s = "ADOBECODEBANC", t = "ABC"  
**Output:** "BANC"  
**Explanation:** The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

### Example 5:
**Input:** s = "cabwefgewcwaefgcf", t = "cae"  
**Output:** "cwae"  
**Explanation:** The minimum window substring "cwae" includes 'c', 'a', and 'e' from string t.

## Intuition

The key insight is to use a sliding window approach with two pointers. We expand the window to include all required characters, then contract it to find the minimum valid window. We use a hash table to track character frequencies.

## Approach

### Approach 1: Sliding Window (Optimal)
1. Use two pointers (left and right) to maintain a window
2. Expand the window by moving the right pointer until all characters from t are included
3. Contract the window by moving the left pointer to find the minimum valid window
4. Track character frequencies using hash tables

### Approach 2: Optimized Sliding Window
1. Pre-filter string s to only include characters from t
2. Use the filtered array to find the minimum window
3. Map back to original string positions

### Approach 3: Brute Force
1. Check all possible substrings of s
2. For each substring, verify if it contains all characters from t
3. Return the minimum valid substring

## Dry Run

Let's trace through Example 1: s = "ADOBECODEBANC", t = "ABC"

### Sliding Window Approach:
- Initialize: left=0, right=0, need={'A':1, 'B':1, 'C':1}, have={}
- right=0: s[0]='A', have={'A':1}, need={'A':0, 'B':1, 'C':1}
- right=1: s[1]='D', have={'A':1, 'D':1}, need={'A':0, 'B':1, 'C':1}
- right=2: s[2]='O', have={'A':1, 'D':1, 'O':1}, need={'A':0, 'B':1, 'C':1}
- right=3: s[3]='B', have={'A':1, 'D':1, 'O':1, 'B':1}, need={'A':0, 'B':0, 'C':1}
- right=4: s[4]='E', have={'A':1, 'D':1, 'O':1, 'B':1, 'E':1}, need={'A':0, 'B':0, 'C':1}
- right=5: s[5]='C', have={'A':1, 'D':1, 'O':1, 'B':1, 'E':1, 'C':1}, need={'A':0, 'B':0, 'C':0}
- All characters found! Window: "ADOBEC" (length=6)
- Contract: left=0, s[0]='A', can't remove 'A' (need it), left=1
- Continue contracting until we can't remove any more characters
- Final result: "BANC" (length=4)

## Solution

**Note:** This solution provides multiple approaches to solve the problem. Choose the one that best fits your understanding and requirements.

### Key Insights:
1. **Sliding Window**: Use two pointers to maintain a dynamic window
2. **Character Counting**: Track required and current character frequencies
3. **Optimization**: Contract the window as much as possible while maintaining validity

### Edge Cases:
- Empty strings: return empty string
- Single character: check if it matches
- No valid window: return empty string
- Duplicate characters in t: must include all occurrences

## Time Complexity
- **Sliding Window**: O(m + n) where m is length of s, n is length of t
- **Optimized Sliding Window**: O(m + n)
- **Brute Force**: O(m² * n)

## Space Complexity
- **Sliding Window**: O(k) where k is the size of character set
- **Optimized Sliding Window**: O(k)
- **Brute Force**: O(m)`,
    output1: '"BANC"',
    output2: '"a"',
    constraints: '- m == s.length\n- n == t.length\n- 1 <= m, n <= 105\n- s and t consist of uppercase and lowercase English letters',
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

char* minWindow(char* s, char* t) {
    int sLen = strlen(s);
    int tLen = strlen(t);
    
    if (sLen == 0 || tLen == 0 || sLen < tLen) {
        return "";
    }
    
    // Count characters in t
    int need[128] = {0};
    int have[128] = {0};
    int required = 0;
    
    for (int i = 0; i < tLen; i++) {
        need[t[i]]++;
        if (need[t[i]] == 1) {
            required++;
        }
    }
    
    int left = 0, right = 0;
    int formed = 0;
    int minLen = INT_MAX;
    int minStart = 0;
    
    while (right < sLen) {
        char c = s[right];
        have[c]++;
        
        // Check if this character completes a requirement
        if (need[c] > 0 && have[c] == need[c]) {
            formed++;
        }
        
        // Try to contract the window
        while (left <= right && formed == required) {
            char leftChar = s[left];
            
            // Update minimum window
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            
            // Remove leftmost character
            have[leftChar]--;
            
            // Check if removing this character breaks the window
            if (need[leftChar] > 0 && have[leftChar] < need[leftChar]) {
                formed--;
            }
            
            left++;
        }
        
        right++;
    }
    
    if (minLen == INT_MAX) {
        return "";
    }
    
    // Create result string
    char* result = (char*)malloc((minLen + 1) * sizeof(char));
    strncpy(result, s + minStart, minLen);
    result[minLen] = '\\0';
    
    return result;
}

int main() {
    // Test case 1
    char* s1 = "ADOBECODEBANC";
    char* t1 = "ABC";
    char* result1 = minWindow(s1, t1);
    printf("Test 1: s=\\"%s\\", t=\\"%s\\" -> \\"%s\\"\\n", s1, t1, result1);
    free(result1);
    
    // Test case 2
    char* s2 = "a";
    char* t2 = "a";
    char* result2 = minWindow(s2, t2);
    printf("Test 2: s=\\"%s\\", t=\\"%s\\" -> \\"%s\\"\\n", s2, t2, result2);
    free(result2);
    
    // Test case 3
    char* s3 = "a";
    char* t3 = "aa";
    char* result3 = minWindow(s3, t3);
    printf("Test 3: s=\\"%s\\", t=\\"%s\\" -> \\"%s\\"\\n", s3, t3, result3);
    free(result3);
    
    // Test case 4
    char* s4 = "cabwefgewcwaefgcf";
    char* t4 = "cae";
    char* result4 = minWindow(s4, t4);
    printf("Test 4: s=\\"%s\\", t=\\"%s\\" -> \\"%s\\"\\n", s4, t4, result4);
    free(result4);
    
    return 0;
}`,
          explanation: 'This is the optimal sliding window approach. We use two pointers to maintain a dynamic window, expanding to include all required characters and contracting to find the minimum valid window.',
          timeComplexity: 'O(m + n)',
          spaceComplexity: 'O(k) where k is character set size'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

char* minWindow(char* s, char* t) {
    int sLen = strlen(s);
    int tLen = strlen(t);
    
    if (sLen == 0 || tLen == 0 || sLen < tLen) {
        return "";
    }
    
    // Count characters in t
    int need[128] = {0};
    int have[128] = {0};
    int uniqueChars = 0;
    
    for (int i = 0; i < tLen; i++) {
        need[t[i]]++;
        if (need[t[i]] == 1) {
            uniqueChars++;
        }
    }
    
    int left = 0, right = 0;
    int matched = 0;
    int minLen = INT_MAX;
    int minStart = 0;
    
    while (right < sLen) {
        char currentChar = s[right];
        
        // Add current character to window
        have[currentChar]++;
        
        // Check if this character helps complete a requirement
        if (need[currentChar] > 0 && have[currentChar] == need[currentChar]) {
            matched++;
        }
        
        // Try to minimize window size
        while (matched == uniqueChars) {
            // Update minimum window if current window is smaller
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            
            // Remove leftmost character
            char leftChar = s[left];
            have[leftChar]--;
            
            // Check if removing this character breaks the window
            if (need[leftChar] > 0 && have[leftChar] < need[leftChar]) {
                matched--;
            }
            
            left++;
        }
        
        right++;
    }
    
    if (minLen == INT_MAX) {
        return "";
    }
    
    // Create result string
    char* result = (char*)malloc((minLen + 1) * sizeof(char));
    strncpy(result, s + minStart, minLen);
    result[minLen] = '\\0';
    
    return result;
}

int main() {
    // Test case 1
    char* s1 = "ADOBECODEBANC";
    char* t1 = "ABC";
    char* result1 = minWindow(s1, t1);
    printf("Test 1: s=\\"%s\\", t=\\"%s\\" -> \\"%s\\"\\n", s1, t1, result1);
    free(result1);
    
    // Test case 2
    char* s2 = "a";
    char* t2 = "a";
    char* result2 = minWindow(s2, t2);
    printf("Test 2: s=\\"%s\\", t=\\"%s\\" -> \\"%s\\"\\n", s2, t2, result2);
    free(result2);
    
    return 0;
}`,
          explanation: 'This is a more explicit sliding window approach with clearer variable names and logic flow. It follows the same algorithm but is easier to understand and debug.',
          timeComplexity: 'O(m + n)',
          spaceComplexity: 'O(k) where k is character set size'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>
#include <stdbool.h>

bool isValidWindow(char* s, int start, int end, char* t) {
    int tLen = strlen(t);
    int sLen = end - start + 1;
    
    if (sLen < tLen) return false;
    
    // Count characters in the window
    int windowCount[128] = {0};
    for (int i = start; i <= end; i++) {
        windowCount[s[i]]++;
    }
    
    // Count characters in t
    int tCount[128] = {0};
    for (int i = 0; i < tLen; i++) {
        tCount[t[i]]++;
    }
    
    // Check if window contains all characters from t
    for (int i = 0; i < 128; i++) {
        if (tCount[i] > 0 && windowCount[i] < tCount[i]) {
            return false;
        }
    }
    
    return true;
}

char* minWindow(char* s, char* t) {
    int sLen = strlen(s);
    int tLen = strlen(t);
    
    if (sLen == 0 || tLen == 0 || sLen < tLen) {
        return "";
    }
    
    int minLen = INT_MAX;
    int minStart = 0;
    bool found = false;
    
    // Check all possible substrings
    for (int start = 0; start < sLen; start++) {
        for (int end = start; end < sLen; end++) {
            if (isValidWindow(s, start, end, t)) {
                int currentLen = end - start + 1;
                if (currentLen < minLen) {
                    minLen = currentLen;
                    minStart = start;
                    found = true;
                }
                break; // Found valid window starting at 'start', no need to check longer windows
            }
        }
    }
    
    if (!found) {
        return "";
    }
    
    // Create result string
    char* result = (char*)malloc((minLen + 1) * sizeof(char));
    strncpy(result, s + minStart, minLen);
    result[minLen] = '\\0';
    
    return result;
}

int main() {
    // Test case 1
    char* s1 = "ADOBECODEBANC";
    char* t1 = "ABC";
    char* result1 = minWindow(s1, t1);
    printf("Test 1: s=\\"%s\\", t=\\"%s\\" -> \\"%s\\"\\n", s1, t1, result1);
    free(result1);
    
    // Test case 2
    char* s2 = "a";
    char* t2 = "a";
    char* result2 = minWindow(s2, t2);
    printf("Test 2: s=\\"%s\\", t=\\"%s\\" -> \\"%s\\"\\n", s2, t2, result2);
    free(result2);
    
    return 0;
}`,
          explanation: 'This is the brute force approach that checks all possible substrings. For each substring, it verifies if it contains all characters from t. This approach is simple but inefficient.',
          timeComplexity: 'O(m² * n)',
          spaceComplexity: 'O(m)'
        }
      }
    }
  },
  {
    id: 'bulls-and-cows',
    title: 'Bulls and Cows',
    description: `You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

- The number of "bulls", which are digits in the guess that are in the correct position.
- The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.

Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.`,
    difficulty: 'Hard',
    category: ['String', 'Hash Table', 'Counting'],
    input1: 'secret = "1807", guess = "7810"',
    input2: 'secret = "1123", guess = "0111"',
    explanation: `## Problem Statement

You are playing the Bulls and Cows game with your friend. You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

- The number of "bulls", which are digits in the guess that are in the correct position.
- The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position.

**Key Understanding:**
- Bulls are digits that match both in value and position
- Cows are digits that exist in the secret but are in wrong positions
- Both secret and guess may contain duplicate digits
- We need to count bulls first, then count cows from remaining digits
- The hint format is "xAyB" where x = bulls, y = cows

## Examples

### Example 1:
**Input:** secret = "1807", guess = "7810"  
**Output:** "1A3B"  
**Explanation:** 
- Bulls: 8 is in the correct position (index 2)
- Cows: 1, 0, and 7 are in the secret but in wrong positions
- Visual representation:
  \`\`\`
  Secret:  1 8 0 7
  Guess:   7 8 1 0
  Result:  C B C C  (B=Bull, C=Cow)
  \`\`\`

### Example 2:
**Input:** secret = "1123", guess = "0111"  
**Output:** "1A1B"  
**Explanation:** 
- Bulls: 1 is in the correct position (index 2)
- Cows: 1 is in the secret but in wrong position
- Visual representation:
  \`\`\`
  Secret:  1 1 2 3
  Guess:   0 1 1 1
  Result:  C C B C  (B=Bull, C=Cow)
  \`\`\`

### Example 3:
**Input:** secret = "1234", guess = "5678"  
**Output:** "0A0B"  
**Explanation:** 
- No bulls or cows - no digits match
- Visual representation:
  \`\`\`
  Secret:  1 2 3 4
  Guess:   5 6 7 8
  Result:  X X X X  (X=No match)
  \`\`\`

### Example 4:
**Input:** secret = "1234", guess = "1234"  
**Output:** "4A0B"  
**Explanation:** 
- All digits are bulls (perfect match)
- Visual representation:
  \`\`\`
  Secret:  1 2 3 4
  Guess:   1 2 3 4
  Result:  B B B B  (B=Bull)
  \`\`\`

## Intuition

The key insight is to process the digits in two phases: first count bulls (exact matches), then count cows from the remaining unmatched digits.

**Core Concept:**
- Bulls are easy to count - just compare digits at same positions
- For cows, we need to count remaining digits that exist in both strings
- We must handle duplicates carefully - each digit can only be used once

**Why Two-Phase Approach Works:**
- First phase: Count exact matches (bulls) and mark them as used
- Second phase: Count remaining digits that exist in both strings (cows)
- This ensures we don't double-count digits

**Mathematical Insight:**
- Total matches = bulls + cows
- Bulls are position-dependent matches
- Cows are value-dependent matches (ignoring position)
- We need to track frequency of each digit

## Approach

### Approach 1: Two-Pass Hash Table (Optimal)
**Algorithm:**
1. First pass: Count bulls and create frequency maps
2. For each position, if digits match, increment bulls
3. If digits don't match, add to frequency maps
4. Second pass: Count cows from frequency maps
5. For each digit in guess frequency map, add min(freq_secret, freq_guess) to cows
6. Return formatted string

**Why This Works:**
- We handle bulls and cows separately
- Frequency maps track remaining unmatched digits
- We use minimum frequency to avoid double-counting
- This handles duplicates correctly

**Complexity Analysis:**
- Time: O(n) - Two passes through the strings
- Space: O(1) - Fixed size arrays for digit frequencies

### Approach 2: Single Pass with Array
**Algorithm:**
1. Use arrays to track digit frequencies
2. In single pass, count bulls and update frequencies
3. Calculate cows from frequency arrays
4. Return formatted string

**Why This Works:**
- More efficient with single pass
- Uses arrays instead of hash maps
- Still handles duplicates correctly

**Complexity Analysis:**
- Time: O(n) - Single pass through the strings
- Space: O(1) - Fixed size arrays

### Approach 3: Brute Force
**Algorithm:**
1. Count bulls by comparing positions
2. For each unmatched digit in guess, check if it exists in secret
3. Count cows manually
4. Return formatted string

**Why This Works:**
- Simple and straightforward
- Easy to understand and implement
- Less efficient but correct

**Complexity Analysis:**
- Time: O(n²) - For each guess digit, scan secret
- Space: O(1) - Constant extra space

## Dry Run

Let's trace through Example 1: secret = "1807", guess = "7810"

### Two-Pass Hash Table Approach:
**Step 1:** Initialize
- bulls = 0
- secretFreq = [0,0,0,0,0,0,0,0,0,0]
- guessFreq = [0,0,0,0,0,0,0,0,0,0]

**Step 2:** First pass - Count bulls
- i=0: secret[0]='1', guess[0]='7' → No match, add to freq
  - secretFreq[1]++, guessFreq[7]++
- i=1: secret[1]='8', guess[1]='8' → Match! bulls++
  - bulls = 1
- i=2: secret[2]='0', guess[2]='1' → No match, add to freq
  - secretFreq[0]++, guessFreq[1]++
- i=3: secret[3]='7', guess[3]='0' → No match, add to freq
  - secretFreq[7]++, guessFreq[0]++

**Step 3:** Second pass - Count cows
- secretFreq = [1,1,0,0,0,0,0,1,0,0]
- guessFreq = [1,1,0,0,0,0,0,1,0,0]
- cows = min(1,1) + min(1,1) + min(1,1) = 1 + 1 + 1 = 3

**Step 4:** Return result
- Result = "1A3B"

### Single Pass Array Approach:
**Step 1:** Initialize arrays
- secretCount = [0,0,0,0,0,0,0,0,0,0]
- guessCount = [0,0,0,0,0,0,0,0,0,0]

**Step 2:** Single pass
- i=0: '1' vs '7' → No match, count[1]++, count[7]++
- i=1: '8' vs '8' → Match! bulls++
- i=2: '0' vs '1' → No match, count[0]++, count[1]++
- i=3: '7' vs '0' → No match, count[7]++, count[0]++

**Step 3:** Calculate cows
- cows = sum(min(secretCount[i], guessCount[i])) = 3

**Step 4:** Return "1A3B"

## Key Insights

1. **Two-Phase Processing:** Count bulls first, then cows
2. **Frequency Tracking:** Use arrays to track digit frequencies
3. **Duplicate Handling:** Each digit can only be used once
4. **Position vs Value:** Bulls care about position, cows only care about value
5. **Minimum Frequency:** Use min(freq1, freq2) to avoid double-counting

## Edge Cases

1. **Perfect Match:** All digits are bulls
2. **No Match:** No bulls or cows
3. **Duplicate Digits:** Handle multiple occurrences of same digit
4. **Single Digit:** Strings of length 1
5. **All Same Digits:** Strings with all identical digits
6. **Empty Strings:** Handle edge cases (though constraints prevent this)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Two-Pass Hash Table (Optimal)

**Time Complexity:** O(n) - Two passes through the strings  
**Space Complexity:** O(1) - Fixed size arrays for digit frequencies

**Advantages:**
- Clear separation of bulls and cows counting
- Handles duplicates correctly
- Easy to understand and debug
- Efficient time complexity

**Disadvantages:**
- Requires two passes
- Slightly more complex than single pass

### Solution 2: Single Pass with Array

**Time Complexity:** O(n) - Single pass through the strings  
**Space Complexity:** O(1) - Fixed size arrays

**Advantages:**
- Most efficient approach
- Single pass through strings
- Simple implementation
- Optimal space usage

**Disadvantages:**
- Slightly harder to understand
- Requires careful frequency calculation

### Solution 3: Brute Force

**Time Complexity:** O(n²) - For each guess digit, scan secret  
**Space Complexity:** O(1) - Constant extra space

**Advantages:**
- Simple and straightforward
- Easy to implement
- No complex data structures

**Disadvantages:**
- Less efficient
- Higher time complexity
- Not suitable for large inputs`,
    output1: '"1A3B"',
    output2: '"1A1B"',
    constraints: `## Constraints

- 1 <= secret.length, guess.length <= 1000
- secret.length == guess.length
- secret and guess consist of digits only`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/**
 * Bulls and Cows using Two-Pass Hash Table (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
char* getHint(char* secret, char* guess) {
    int len = strlen(secret);
    int bulls = 0;
    int cows = 0;
    
    // Arrays to track digit frequencies (0-9)
    int secretFreq[10] = {0};
    int guessFreq[10] = {0};
    
    // First pass: Count bulls and build frequency maps
    for (int i = 0; i < len; i++) {
        if (secret[i] == guess[i]) {
            bulls++;
        } else {
            secretFreq[secret[i] - '0']++;
            guessFreq[guess[i] - '0']++;
        }
    }
    
    // Second pass: Count cows from frequency maps
    for (int i = 0; i < 10; i++) {
        cows += (secretFreq[i] < guessFreq[i]) ? secretFreq[i] : guessFreq[i];
    }
    
    // Format result string
    char* result = (char*)malloc(10 * sizeof(char));
    sprintf(result, "%dA%dB", bulls, cows);
    
    return result;
}

int main() {
    // Test case 1
    char* secret1 = "1807";
    char* guess1 = "7810";
    char* result1 = getHint(secret1, guess1);
    printf("Test 1: secret=\\"%s\\", guess=\\"%s\\" -> %s\\n", secret1, guess1, result1);
    free(result1);
    
    // Test case 2
    char* secret2 = "1123";
    char* guess2 = "0111";
    char* result2 = getHint(secret2, guess2);
    printf("Test 2: secret=\\"%s\\", guess=\\"%s\\" -> %s\\n", secret2, guess2, result2);
    free(result2);
    
    // Test case 3
    char* secret3 = "1234";
    char* guess3 = "5678";
    char* result3 = getHint(secret3, guess3);
    printf("Test 3: secret=\\"%s\\", guess=\\"%s\\" -> %s\\n", secret3, guess3, result3);
    free(result3);
    
    // Test case 4
    char* secret4 = "1234";
    char* guess4 = "1234";
    char* result4 = getHint(secret4, guess4);
    printf("Test 4: secret=\\"%s\\", guess=\\"%s\\" -> %s\\n", secret4, guess4, result4);
    free(result4);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using two-pass hash table approach. First, we count bulls and build frequency maps for unmatched digits. Then, we count cows by taking the minimum frequency of each digit in both maps.'
        },
        average: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/**
 * Bulls and Cows using Single Pass with Array
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
char* getHint(char* secret, char* guess) {
    int len = strlen(secret);
    int bulls = 0;
    int cows = 0;
    
    // Arrays to track digit frequencies
    int secretCount[10] = {0};
    int guessCount[10] = {0};
    
    // Single pass: Count bulls and update frequencies
    for (int i = 0; i < len; i++) {
        if (secret[i] == guess[i]) {
            bulls++;
        } else {
            secretCount[secret[i] - '0']++;
            guessCount[guess[i] - '0']++;
        }
    }
    
    // Calculate cows from frequency arrays
    for (int i = 0; i < 10; i++) {
        cows += (secretCount[i] < guessCount[i]) ? secretCount[i] : guessCount[i];
    }
    
    // Format result string
    char* result = (char*)malloc(10 * sizeof(char));
    sprintf(result, "%dA%dB", bulls, cows);
    
    return result;
}

int main() {
    // Test case 1
    char* secret1 = "1807";
    char* guess1 = "7810";
    char* result1 = getHint(secret1, guess1);
    printf("Test 1: secret=\\"%s\\", guess=\\"%s\\" -> %s\\n", secret1, guess1, result1);
    free(result1);
    
    // Test case 2
    char* secret2 = "1123";
    char* guess2 = "0111";
    char* result2 = getHint(secret2, guess2);
    printf("Test 2: secret=\\"%s\\", guess=\\"%s\\" -> %s\\n", secret2, guess2, result2);
    free(result2);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses a single pass approach with arrays to track digit frequencies. It counts bulls and updates frequency arrays in one pass, then calculates cows from the frequency arrays.'
        },
        worst: {
          code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

/**
 * Bulls and Cows using Brute Force
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
char* getHint(char* secret, char* guess) {
    int len = strlen(secret);
    int bulls = 0;
    int cows = 0;
    
    // Count bulls
    for (int i = 0; i < len; i++) {
        if (secret[i] == guess[i]) {
            bulls++;
        }
    }
    
    // Count cows using brute force
    bool secretUsed[1000] = {false};
    bool guessUsed[1000] = {false};
    
    // Mark bulls as used
    for (int i = 0; i < len; i++) {
        if (secret[i] == guess[i]) {
            secretUsed[i] = true;
            guessUsed[i] = true;
        }
    }
    
    // Count cows
    for (int i = 0; i < len; i++) {
        if (!guessUsed[i]) {
            for (int j = 0; j < len; j++) {
                if (!secretUsed[j] && guess[i] == secret[j]) {
                    cows++;
                    secretUsed[j] = true;
                    break;
                }
            }
        }
    }
    
    // Format result string
    char* result = (char*)malloc(10 * sizeof(char));
    sprintf(result, "%dA%dB", bulls, cows);
    
    return result;
}

int main() {
    // Test case 1
    char* secret1 = "1807";
    char* guess1 = "7810";
    char* result1 = getHint(secret1, guess1);
    printf("Test 1: secret=\\"%s\\", guess=\\"%s\\" -> %s\\n", secret1, guess1, result1);
    free(result1);
    
    // Test case 2
    char* secret2 = "1123";
    char* guess2 = "0111";
    char* result2 = getHint(secret2, guess2);
    printf("Test 2: secret=\\"%s\\", guess=\\"%s\\" -> %s\\n", secret2, guess2, result2);
    free(result2);
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'This is the brute force approach that counts bulls first, then for each unmatched digit in guess, scans the secret to find matching digits. This approach is simple but inefficient.'
        }
      }
    }
  },
  {
    id: 'maximal-square',
    title: 'Maximal Square',
    description: `Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.`,
    difficulty: 'Medium',
    category: ['Dynamic Programming', 'Matrix'],
    input1: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
    input2: 'matrix = [["0","1"],["1","0"]]',
    explanation: `## Problem Statement

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

**Key Understanding:**
- We need to find the largest square (not rectangle) of 1's
- A square has equal width and height
- The area is the side length squared
- We need to handle edge cases like single 1's and all 0's
- The matrix can be of any size m x n

## Examples

### Example 1:
**Input:** matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]  
**Output:** 4  
**Explanation:** 
- The largest square has side length 2
- Area = 2² = 4
- Visual representation:
  \`\`\`
  1 0 1 0 0
  1 0 1 1 1
  1 1 1 1 1  ← Largest square (2x2)
  1 0 0 1 0
  \`\`\`

### Example 2:
**Input:** matrix = [["0","1"],["1","0"]]  
**Output:** 1  
**Explanation:** 
- No square larger than 1x1 exists
- Area = 1² = 1
- Visual representation:
  \`\`\`
  0 1
  1 0  ← Only 1x1 squares possible
  \`\`\`

### Example 3:
**Input:** matrix = [["1","1","1"],["1","1","1"],["1","1","1"]]  
**Output:** 9  
**Explanation:** 
- The entire matrix is a 3x3 square of 1's
- Area = 3² = 9
- Visual representation:
  \`\`\`
  1 1 1
  1 1 1  ← 3x3 square
  1 1 1
  \`\`\`

### Example 4:
**Input:** matrix = [["0"]]  
**Output:** 0  
**Explanation:** 
- No square of 1's exists
- Area = 0

### Example 5:
**Input:** matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"],["1","1","1","1","1"]]  
**Output:** 9  
**Explanation:** 
- The largest square has side length 3
- Area = 3² = 9
- Visual representation:
  \`\`\`
  1 0 1 0 0
  1 0 1 1 1
  1 1 1 1 1
  1 0 0 1 0
  1 1 1 1 1  ← 3x3 square
  \`\`\`

## Intuition

The key insight is that we can use dynamic programming to build the solution incrementally. For each cell, if it's a 1, the size of the largest square ending at that cell depends on the minimum of the three adjacent cells (top, left, and top-left).

**Core Concept:**
- If a cell is 0, it cannot be part of any square
- If a cell is 1, the largest square ending at that cell is 1 + min(top, left, top-left)
- This works because a square requires all four corners to be 1's

**Why Dynamic Programming Works:**
- We build the solution bottom-up
- Each cell's value depends on previously computed values
- We can reuse computed results to avoid recalculation
- This gives us optimal substructure

**Mathematical Insight:**
- For a square of size k ending at (i,j), we need:
  - (i,j) = 1
  - (i-1,j) ≥ k-1
  - (i,j-1) ≥ k-1
  - (i-1,j-1) ≥ k-1
- Therefore, dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])

## Approach

### Approach 1: Dynamic Programming (Optimal)
**Algorithm:**
1. Create a DP table of same size as input matrix
2. Initialize first row and column with matrix values
3. For each cell (i,j) where i > 0 and j > 0:
   - If matrix[i][j] == '1', dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
   - Else dp[i][j] = 0
4. Track maximum value in DP table
5. Return maximum value squared

**Why This Works:**
- We build squares incrementally
- Each cell's value represents the side length of largest square ending there
- We take minimum of three adjacent cells to ensure square property
- This guarantees we find the largest possible square

**Complexity Analysis:**
- Time: O(m*n) - We visit each cell once
- Space: O(m*n) - We need a DP table

### Approach 2: Dynamic Programming with Space Optimization
**Algorithm:**
1. Use a single row to store DP values
2. Keep track of previous row's values
3. Update current row using previous row and current matrix values
4. Track maximum value
5. Return maximum value squared

**Why This Works:**
- We only need the previous row to compute current row
- This reduces space complexity significantly
- Still maintains the same logic as full DP

**Complexity Analysis:**
- Time: O(m*n) - We visit each cell once
- Space: O(n) - We only store one row

### Approach 3: Brute Force
**Algorithm:**
1. For each cell, try all possible square sizes
2. Check if the square contains only 1's
3. Track the largest valid square found
4. Return the area of largest square

**Why This Works:**
- We try all possible squares
- This guarantees we find the optimal solution
- Simple to understand and implement

**Complexity Analysis:**
- Time: O(m*n*min(m,n)²) - For each cell, try all square sizes
- Space: O(1) - Constant extra space

## Dry Run

Let's trace through Example 1: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

### Dynamic Programming Approach:
**Step 1:** Initialize DP table
\`\`\`
Matrix:     DP Table:
1 0 1 0 0   1 0 1 0 0
1 0 1 1 1   1 0 1 1 1
1 1 1 1 1   1 1 1 1 1
1 0 0 1 0   1 0 0 1 0
\`\`\`

**Step 2:** Fill DP table (starting from row 1, col 1)
- (1,1): matrix[1][1] = '0' → dp[1][1] = 0
- (1,2): matrix[1][2] = '1' → dp[1][2] = 1 + min(0,1,0) = 1
- (1,3): matrix[1][3] = '1' → dp[1][3] = 1 + min(0,1,1) = 1
- (1,4): matrix[1][4] = '1' → dp[1][4] = 1 + min(0,1,1) = 1
- (2,0): matrix[2][0] = '1' → dp[2][0] = 1 + min(1,0,0) = 1
- (2,1): matrix[2][1] = '1' → dp[2][1] = 1 + min(1,1,0) = 1
- (2,2): matrix[2][2] = '1' → dp[2][2] = 1 + min(1,1,1) = 2
- (2,3): matrix[2][3] = '1' → dp[2][3] = 1 + min(1,1,2) = 2
- (2,4): matrix[2][4] = '1' → dp[2][4] = 1 + min(1,1,2) = 2

**Step 3:** Final DP table
\`\`\`
DP Table:
1 0 1 0 0
1 0 1 1 1
1 1 2 2 2
1 0 0 1 0
\`\`\`

**Step 4:** Find maximum value
- Maximum value = 2
- Area = 2² = 4

### Space Optimized Approach:
**Step 1:** Initialize
- prevRow = [1,0,1,0,0]
- maxSide = 1

**Step 2:** Process each row
- Row 1: currRow = [1,0,1,1,1] → maxSide = 1
- Row 2: currRow = [1,1,2,2,2] → maxSide = 2
- Row 3: currRow = [1,0,0,1,0] → maxSide = 2

**Step 3:** Return maxSide² = 4

## Key Insights

1. **Optimal Substructure:** Each cell depends on three adjacent cells
2. **Square Property:** A square requires all four corners to be 1's
3. **Minimum Rule:** Take minimum of three adjacent cells to ensure square
4. **Space Optimization:** Only need previous row for current computation
5. **Edge Cases:** Handle first row and column separately

## Edge Cases

1. **Single Element:** Matrix with one element
2. **All Zeros:** Matrix with no 1's
3. **All Ones:** Matrix with all 1's
4. **Single Row/Column:** Matrix with only one row or column
5. **Large Matrix:** Handle large matrices efficiently
6. **Mixed Values:** Matrix with both 0's and 1's

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution 1: Dynamic Programming (Optimal)

**Time Complexity:** O(m*n) - We visit each cell once  
**Space Complexity:** O(m*n) - We need a DP table

**Advantages:**
- Most intuitive approach
- Easy to understand and implement
- Handles all edge cases
- Optimal time complexity

**Disadvantages:**
- Uses extra space for DP table
- Not space optimized

### Solution 2: Dynamic Programming with Space Optimization

**Time Complexity:** O(m*n) - We visit each cell once  
**Space Complexity:** O(n) - We only store one row

**Advantages:**
- Space efficient
- Same time complexity as full DP
- Good for large matrices

**Disadvantages:**
- Slightly more complex implementation
- Harder to understand

### Solution 3: Brute Force

**Time Complexity:** O(m*n*min(m,n)²) - For each cell, try all square sizes  
**Space Complexity:** O(1) - Constant extra space

**Advantages:**
- Simple and straightforward
- Easy to implement
- No extra space needed

**Disadvantages:**
- Less efficient
- Higher time complexity
- Not suitable for large matrices`,
    output1: '4',
    output2: '1',
    constraints: `## Constraints

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] is '0' or '1'`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int min3(int a, int b, int c) {
    return min(min(a, b), c);
}

/**
 * Maximal Square using Dynamic Programming (Optimal)
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 */
int maximalSquare(char** matrix, int matrixSize, int* matrixColSize) {
    if (matrixSize == 0 || matrixColSize[0] == 0) {
        return 0;
    }
    
    int m = matrixSize;
    int n = matrixColSize[0];
    
    // Create DP table
    int** dp = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        dp[i] = (int*)malloc(n * sizeof(int));
    }
    
    int maxSide = 0;
    
    // Fill first row
    for (int j = 0; j < n; j++) {
        dp[0][j] = matrix[0][j] - '0';
        if (dp[0][j] == 1) maxSide = 1;
    }
    
    // Fill first column
    for (int i = 0; i < m; i++) {
        dp[i][0] = matrix[i][0] - '0';
        if (dp[i][0] == 1) maxSide = 1;
    }
    
    // Fill rest of the table
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][j] == '1') {
                dp[i][j] = 1 + min3(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
                if (dp[i][j] > maxSide) {
                    maxSide = dp[i][j];
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }
    
    // Free memory
    for (int i = 0; i < m; i++) {
        free(dp[i]);
    }
    free(dp);
    
    return maxSide * maxSide;
}

int main() {
    // Test case 1
    char* matrix1[] = {"10100", "10111", "11111", "10010"};
    int cols1[] = {5, 5, 5, 5};
    int result1 = maximalSquare(matrix1, 4, cols1);
    printf("Test 1: %d\\n", result1);
    
    // Test case 2
    char* matrix2[] = {"01", "10"};
    int cols2[] = {2, 2};
    int result2 = maximalSquare(matrix2, 2, cols2);
    printf("Test 2: %d\\n", result2);
    
    // Test case 3
    char* matrix3[] = {"111", "111", "111"};
    int cols3[] = {3, 3, 3};
    int result3 = maximalSquare(matrix3, 3, cols3);
    printf("Test 3: %d\\n", result3);
    
    return 0;
}`,
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)',
          explanation: 'This is the optimal solution using dynamic programming. We create a DP table where each cell represents the side length of the largest square ending at that position. We fill the table using the recurrence relation dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int min3(int a, int b, int c) {
    return min(min(a, b), c);
}

/**
 * Maximal Square using Space Optimized DP
 * Time Complexity: O(m*n)
 * Space Complexity: O(n)
 */
int maximalSquare(char** matrix, int matrixSize, int* matrixColSize) {
    if (matrixSize == 0 || matrixColSize[0] == 0) {
        return 0;
    }
    
    int m = matrixSize;
    int n = matrixColSize[0];
    
    // Use single row for DP
    int* dp = (int*)malloc(n * sizeof(int));
    int maxSide = 0;
    
    // Initialize first row
    for (int j = 0; j < n; j++) {
        dp[j] = matrix[0][j] - '0';
        if (dp[j] == 1) maxSide = 1;
    }
    
    // Process remaining rows
    for (int i = 1; i < m; i++) {
        int prev = dp[0]; // Store previous value for top-left
        dp[0] = matrix[i][0] - '0';
        if (dp[0] == 1) maxSide = 1;
        
        for (int j = 1; j < n; j++) {
            int temp = dp[j]; // Store current value for next iteration
            if (matrix[i][j] == '1') {
                dp[j] = 1 + min3(dp[j-1], dp[j], prev);
                if (dp[j] > maxSide) {
                    maxSide = dp[j];
                }
            } else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }
    
    free(dp);
    return maxSide * maxSide;
}

int main() {
    // Test case 1
    char* matrix1[] = {"10100", "10111", "11111", "10010"};
    int cols1[] = {5, 5, 5, 5};
    int result1 = maximalSquare(matrix1, 4, cols1);
    printf("Test 1: %d\\n", result1);
    
    // Test case 2
    char* matrix2[] = {"01", "10"};
    int cols2[] = {2, 2};
    int result2 = maximalSquare(matrix2, 2, cols2);
    printf("Test 2: %d\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses space optimization by storing only one row of the DP table. We keep track of the previous value to compute the current cell value. This reduces space complexity from O(m*n) to O(n).'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

/**
 * Check if a square is valid (contains only 1's)
 */
bool isValidSquare(char** matrix, int startRow, int startCol, int size, int m, int n) {
    for (int i = startRow; i < startRow + size; i++) {
        for (int j = startCol; j < startCol + size; j++) {
            if (i >= m || j >= n || matrix[i][j] != '1') {
                return false;
            }
        }
    }
    return true;
}

/**
 * Maximal Square using Brute Force
 * Time Complexity: O(m*n*min(m,n)²)
 * Space Complexity: O(1)
 */
int maximalSquare(char** matrix, int matrixSize, int* matrixColSize) {
    if (matrixSize == 0 || matrixColSize[0] == 0) {
        return 0;
    }
    
    int m = matrixSize;
    int n = matrixColSize[0];
    int maxSide = 0;
    
    // Try all possible squares
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (matrix[i][j] == '1') {
                // Try all possible square sizes starting from this position
                int maxPossibleSize = (m - i < n - j) ? m - i : n - j;
                for (int size = 1; size <= maxPossibleSize; size++) {
                    if (isValidSquare(matrix, i, j, size, m, n)) {
                        if (size > maxSide) {
                            maxSide = size;
                        }
                    } else {
                        break; // No larger square possible from this position
                    }
                }
            }
        }
    }
    
    return maxSide * maxSide;
}

int main() {
    // Test case 1
    char* matrix1[] = {"10100", "10111", "11111", "10010"};
    int cols1[] = {5, 5, 5, 5};
    int result1 = maximalSquare(matrix1, 4, cols1);
    printf("Test 1: %d\\n", result1);
    
    // Test case 2
    char* matrix2[] = {"01", "10"};
    int cols2[] = {2, 2};
    int result2 = maximalSquare(matrix2, 2, cols2);
    printf("Test 2: %d\\n", result2);
    
    return 0;
}`,
          timeComplexity: 'O(m*n*min(m,n)²)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the brute force approach that tries all possible squares starting from each position. For each cell, it checks all possible square sizes and validates if the square contains only 1\'s. This approach is simple but inefficient.'
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
    difficulty: 'Medium',
    category: ['Stack', 'String'],
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
**Explanation:** Valid parentheses with different types.

### Example 3:
**Input:** s = "(]"  
**Output:** false  
**Explanation:** Invalid - closing bracket doesn't match opening bracket.

### Example 4:
**Input:** s = "([)]"  
**Output:** false  
**Explanation:** Invalid - brackets are not closed in correct order.

## Intuition

The key insight is that we need to use a stack to keep track of opening brackets. When we encounter a closing bracket, we check if it matches the most recent opening bracket (top of stack). If it matches, we pop the opening bracket; if not, the string is invalid.

## Approach

1. Use a stack to store opening brackets
2. For each character in the string:
   - If it's an opening bracket, push it onto the stack
   - If it's a closing bracket, check if it matches the top of the stack
   - If it matches, pop the top element; if not, return false
3. At the end, check if the stack is empty (all brackets are properly closed)

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution: Stack Approach

**Time Complexity:** O(n) - Single pass through the string  
**Space Complexity:** O(n) - Stack can grow up to n elements`,
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

#define MAX_SIZE 10000

typedef struct {
    char data[MAX_SIZE];
    int top;
} Stack;

void initStack(Stack* stack) {
    stack->top = -1;
}

void push(Stack* stack, char value) {
    stack->data[++stack->top] = value;
}

char pop(Stack* stack) {
    if (stack->top == -1) return '\\0';
    return stack->data[stack->top--];
}

char peek(Stack* stack) {
    if (stack->top == -1) return '\\0';
    return stack->data[stack->top];
}

bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

bool isValid(char* s) {
    Stack stack;
    initStack(&stack);
    
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            push(&stack, s[i]);
        } else {
            if (isEmpty(&stack)) {
                return false;
            }
            
            char top = pop(&stack);
            if ((s[i] == ')' && top != '(') ||
                (s[i] == '}' && top != '{') ||
                (s[i] == ']' && top != '[')) {
                return false;
            }
        }
    }
    
    return isEmpty(&stack);
}

int main() {
    // Test case 1
    char* s1 = "()";
    printf("Test 1: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "()[]{}";
    printf("Test 2: %s\\n", isValid(s2) ? "true" : "false");
    
    // Test case 3
    char* s3 = "(]";
    printf("Test 3: %s\\n", isValid(s3) ? "true" : "false");
    
    // Test case 4
    char* s4 = "([)]";
    printf("Test 4: %s\\n", isValid(s4) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses a stack to keep track of opening brackets. When we encounter a closing bracket, we check if it matches the most recent opening bracket. This approach is efficient and handles all edge cases correctly.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isValid(char* s) {
    int len = strlen(s);
    char* stack = (char*)malloc(len * sizeof(char));
    int top = -1;
    
    for (int i = 0; i < len; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack[++top] = s[i];
        } else {
            if (top == -1) {
                free(stack);
                return false;
            }
            
            char topChar = stack[top--];
            if ((s[i] == ')' && topChar != '(') ||
                (s[i] == '}' && topChar != '{') ||
                (s[i] == ']' && topChar != '[')) {
                free(stack);
                return false;
            }
        }
    }
    
    bool result = (top == -1);
    free(stack);
    return result;
}

int main() {
    // Test case 1
    char* s1 = "()";
    printf("Test 1: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "()[]{}";
    printf("Test 2: %s\\n", isValid(s2) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses dynamic memory allocation for the stack. It\'s similar to the best solution but uses malloc/free instead of a fixed-size array. This approach is more flexible but requires memory management.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isValid(char* s) {
    int len = strlen(s);
    
    // Check if length is odd (invalid)
    if (len % 2 != 0) {
        return false;
    }
    
    // Use a simple array as stack
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
    
    return (top == -1);
}

int main() {
    // Test case 1
    char* s1 = "()";
    printf("Test 1: %s\\n", isValid(s1) ? "true" : "false");
    
    // Test case 2
    char* s2 = "()[]{}";
    printf("Test 2: %s\\n", isValid(s2) ? "true" : "false");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses a fixed-size array as a stack. It\'s simpler but less flexible than dynamic allocation. The approach is straightforward but doesn\'t handle very large strings efficiently.'
        }
      }
    }
  },
  {
    id: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    description: `Given a string s, find the length of the longest substring without repeating characters.`,
    difficulty: 'Medium',
    category: ['String', 'Sliding Window', 'Hash Table'],
    input1: 's = "abcabcbb"',
    input2: 's = "bbbbb"',
    explanation: `## Problem Statement

Given a string s, find the length of the longest substring without repeating characters.

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

## Intuition

The key insight is to use a sliding window approach with a hash table to track the last occurrence of each character. When we encounter a repeating character, we move the start of the window to the position after the last occurrence of that character.

## Approach

1. Use two pointers (start and end) to represent the current window
2. Use a hash table to store the last occurrence of each character
3. For each character:
   - If it's already in the window, move start to after its last occurrence
   - Update the last occurrence of current character
   - Update the maximum length

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution: Sliding Window with Hash Table

**Time Complexity:** O(n) - Single pass through the string  
**Space Complexity:** O(min(m, n)) - Hash table size`,
    output1: '3',
    output2: '1',
    constraints: `## Constraints

- 0 <= s.length <= 5 * 104
- s consists of English letters, digits, symbols and spaces`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int len = strlen(s);
    int charIndex[128]; // ASCII characters
    memset(charIndex, -1, sizeof(charIndex));
    
    int maxLength = 0;
    int start = 0;
    
    for (int end = 0; end < len; end++) {
        char currentChar = s[end];
        
        // If character is already in current window
        if (charIndex[currentChar] >= start) {
            start = charIndex[currentChar] + 1;
        }
        
        charIndex[currentChar] = end;
        int currentLength = end - start + 1;
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    
    return maxLength;
}

int main() {
    // Test case 1
    char* s1 = "abcabcbb";
    printf("Test 1: %d\\n", lengthOfLongestSubstring(s1));
    
    // Test case 2
    char* s2 = "bbbbb";
    printf("Test 2: %d\\n", lengthOfLongestSubstring(s2));
    
    // Test case 3
    char* s3 = "pwwkew";
    printf("Test 3: %d\\n", lengthOfLongestSubstring(s3));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(min(m, n))',
          explanation: 'This solution uses a sliding window approach with a hash table to track the last occurrence of each character. It efficiently handles all cases and provides optimal time complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int lengthOfLongestSubstring(char* s) {
    int len = strlen(s);
    bool visited[128] = {false};
    
    int maxLength = 0;
    int start = 0;
    
    for (int end = 0; end < len; end++) {
        char currentChar = s[end];
        
        // If character is already visited in current window
        while (visited[currentChar]) {
            visited[s[start]] = false;
            start++;
        }
        
        visited[currentChar] = true;
        int currentLength = end - start + 1;
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    
    return maxLength;
}

int main() {
    // Test case 1
    char* s1 = "abcabcbb";
    printf("Test 1: %d\\n", lengthOfLongestSubstring(s1));
    
    // Test case 2
    char* s2 = "bbbbb";
    printf("Test 2: %d\\n", lengthOfLongestSubstring(s2));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(min(m, n))',
          explanation: 'This solution uses a boolean array to track visited characters. When we encounter a repeating character, we move the start pointer until we remove the duplicate. This approach is simpler but may have worse time complexity in some cases.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int lengthOfLongestSubstring(char* s) {
    int len = strlen(s);
    int maxLength = 0;
    
    for (int i = 0; i < len; i++) {
        bool visited[128] = {false};
        int currentLength = 0;
        
        for (int j = i; j < len; j++) {
            if (visited[s[j]]) {
                break;
            }
            visited[s[j]] = true;
            currentLength++;
        }
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    
    return maxLength;
}

int main() {
    // Test case 1
    char* s1 = "abcabcbb";
    printf("Test 1: %d\\n", lengthOfLongestSubstring(s1));
    
    // Test case 2
    char* s2 = "bbbbb";
    printf("Test 2: %d\\n", lengthOfLongestSubstring(s2));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(min(m, n))',
          explanation: 'This is the brute force approach that checks all possible substrings. For each starting position, it checks all possible ending positions. This approach is simple but inefficient for large strings.'
        }
      }
    }
  },
  {
    id: 'container-with-most-water',
    title: 'Container With Most Water',
    description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines, which, together with the x-axis, forms a container, such that the container contains the maximum amount of water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.`,
    difficulty: 'Medium',
    category: ['Array', 'Two Pointers', 'Greedy'],
    input1: 'height = [1,8,6,2,5,4,8,3,7]',
    input2: 'height = [1,1]',
    explanation: `## Problem Statement

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines, which, together with the x-axis, forms a container, such that the container contains the maximum amount of water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

## Examples

### Example 1:
**Input:** height = [1,8,6,2,5,4,8,3,7]  
**Output:** 49  
**Explanation:** The maximum area is obtained by choosing height[1] = 8 and height[8] = 7.

### Example 2:
**Input:** height = [1,1]  
**Output:** 1  
**Explanation:** The maximum area is obtained by choosing height[0] = 1 and height[1] = 1.

## Intuition

The key insight is to use two pointers starting from the ends of the array. The area is limited by the shorter of the two heights, so we always move the pointer with the shorter height inward, as this gives us the best chance of finding a larger area.

## Approach

1. Use two pointers (left and right) starting from the ends
2. Calculate the area between the two pointers
3. Move the pointer with the shorter height inward
4. Keep track of the maximum area found

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution: Two Pointers Approach

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Constant extra space`,
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

int maxArea(int* height, int heightSize) {
    int maxWater = 0;
    int left = 0;
    int right = heightSize - 1;
    
    while (left < right) {
        int width = right - left;
        int h = (height[left] < height[right]) ? height[left] : height[right];
        int area = width * h;
        
        if (area > maxWater) {
            maxWater = area;
        }
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}

int main() {
    // Test case 1
    int height1[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int size1 = 9;
    printf("Test 1: %d\\n", maxArea(height1, size1));
    
    // Test case 2
    int height2[] = {1, 1};
    int size2 = 2;
    printf("Test 2: %d\\n", maxArea(height2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses the two pointers approach starting from the ends of the array. It efficiently finds the maximum area by always moving the pointer with the shorter height, which is the optimal strategy.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int maxArea(int* height, int heightSize) {
    int maxWater = 0;
    
    for (int i = 0; i < heightSize; i++) {
        for (int j = i + 1; j < heightSize; j++) {
            int width = j - i;
            int h = (height[i] < height[j]) ? height[i] : height[j];
            int area = width * h;
            
            if (area > maxWater) {
                maxWater = area;
            }
        }
    }
    
    return maxWater;
}

int main() {
    // Test case 1
    int height1[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int size1 = 9;
    printf("Test 1: %d\\n", maxArea(height1, size1));
    
    // Test case 2
    int height2[] = {1, 1};
    int size2 = 2;
    printf("Test 2: %d\\n", maxArea(height2, size2));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This solution uses a brute force approach by checking all possible pairs of lines. It\'s simple to understand but inefficient for large arrays.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int maxArea(int* height, int heightSize) {
    int maxWater = 0;
    
    // Try all possible combinations
    for (int i = 0; i < heightSize - 1; i++) {
        for (int j = i + 1; j < heightSize; j++) {
            int width = j - i;
            int h = (height[i] < height[j]) ? height[i] : height[j];
            int area = width * h;
            
            if (area > maxWater) {
                maxWater = area;
            }
        }
    }
    
    return maxWater;
}

int main() {
    // Test case 1
    int height1[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int size1 = 9;
    printf("Test 1: %d\\n", maxArea(height1, size1));
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          explanation: 'This is another brute force approach that checks all possible pairs. It\'s straightforward but not efficient for large inputs.'
        }
      }
    }
  },
  {
    id: 'insert-interval',
    title: 'Insert Interval',
    description: `You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.`,
    difficulty: 'Medium',
    category: ['Array', 'Sorting'],
    input1: 'intervals = [[1,3],[6,9]], newInterval = [2,5]',
    input2: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]',
    explanation: `## Problem Statement

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

## Examples

### Example 1:
**Input:** intervals = [[1,3],[6,9]], newInterval = [2,5]  
**Output:** [[1,5],[6,9]]  
**Explanation:** 
The new interval [2,5] overlaps with [1,3], so we merge them into [1,5].

### Example 2:
**Input:** intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]  
**Output:** [[1,2],[3,10],[12,16]]  
**Explanation:** 
The new interval [4,8] overlaps with [3,5], [6,7], and [8,10], so we merge them into [3,10].

### Example 3:
**Input:** intervals = [], newInterval = [5,7]  
**Output:** [[5,7]]  
**Explanation:** 
Since intervals is empty, we just insert the new interval.

## Intuition

The key insight is that we need to handle three cases:
1. Intervals that come before the new interval (no overlap)
2. Intervals that overlap with the new interval (need to merge)
3. Intervals that come after the new interval (no overlap)

We can process the intervals in order and merge overlapping ones as we go.

## Approach

1. Initialize an empty result array
2. Add all intervals that end before the new interval starts (no overlap)
3. Merge all overlapping intervals with the new interval
4. Add all intervals that start after the new interval ends (no overlap)
5. Return the result

## Solution

**⚠️ Disclaimer:** Don't jump directly to the solution, try it out yourself first. Only look at the solution after you've given it a good attempt.

### Solution: Linear Scan Approach

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(n) - Space for the result array`,
    output1: '[[1,5],[6,9]]',
    output2: '[[1,2],[3,10],[12,16]]',
    constraints: `## Constraints

- 0 <= intervals.length <= 104
- intervals[i].length == 2
- 0 <= starti <= endi <= 105
- intervals is sorted by starti in ascending order
- newInterval.length == 2
- 0 <= start <= end <= 105`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** insert(int** intervals, int intervalsSize, int* intervalsColSize, int* newInterval, int newIntervalSize, int* returnSize, int** returnColumnSizes) {
    int** result = (int**)malloc((intervalsSize + 1) * sizeof(int*));
    *returnColumnSizes = (int*)malloc((intervalsSize + 1) * sizeof(int));
    *returnSize = 0;
    
    int i = 0;
    
    // Add all intervals that end before newInterval starts
    while (i < intervalsSize && intervals[i][1] < newInterval[0]) {
        result[*returnSize] = (int*)malloc(2 * sizeof(int));
        result[*returnSize][0] = intervals[i][0];
        result[*returnSize][1] = intervals[i][1];
        (*returnColumnSizes)[*returnSize] = 2;
        (*returnSize)++;
        i++;
    }
    
    // Merge overlapping intervals
    if (i < intervalsSize && intervals[i][0] <= newInterval[1]) {
        int start = (intervals[i][0] < newInterval[0]) ? intervals[i][0] : newInterval[0];
        int end = newInterval[1];
        
        while (i < intervalsSize && intervals[i][0] <= newInterval[1]) {
            if (intervals[i][1] > end) {
                end = intervals[i][1];
            }
            i++;
        }
        
        result[*returnSize] = (int*)malloc(2 * sizeof(int));
        result[*returnSize][0] = start;
        result[*returnSize][1] = end;
        (*returnColumnSizes)[*returnSize] = 2;
        (*returnSize)++;
    } else {
        // No overlap, add newInterval as is
        result[*returnSize] = (int*)malloc(2 * sizeof(int));
        result[*returnSize][0] = newInterval[0];
        result[*returnSize][1] = newInterval[1];
        (*returnColumnSizes)[*returnSize] = 2;
        (*returnSize)++;
    }
    
    // Add remaining intervals
    while (i < intervalsSize) {
        result[*returnSize] = (int*)malloc(2 * sizeof(int));
        result[*returnSize][0] = intervals[i][0];
        result[*returnSize][1] = intervals[i][1];
        (*returnColumnSizes)[*returnSize] = 2;
        (*returnSize)++;
        i++;
    }
    
    return result;
}

int main() {
    // Test case 1
    int intervals1[][2] = {{1,3}, {6,9}};
    int newInterval1[] = {2,5};
    int returnSize1, *returnColumnSizes1;
    
    int** intervals1_ptr = (int**)malloc(2 * sizeof(int*));
    for (int i = 0; i < 2; i++) {
        intervals1_ptr[i] = (int*)malloc(2 * sizeof(int));
        intervals1_ptr[i][0] = intervals1[i][0];
        intervals1_ptr[i][1] = intervals1[i][1];
    }
    
    int** result1 = insert(intervals1_ptr, 2, NULL, newInterval1, 2, &returnSize1, &returnColumnSizes1);
    
    printf("Test 1: ");
    for (int i = 0; i < returnSize1; i++) {
        printf("[%d,%d] ", result1[i][0], result1[i][1]);
    }
    printf("\\n");
    
    // Cleanup
    for (int i = 0; i < 2; i++) {
        free(intervals1_ptr[i]);
    }
    free(intervals1_ptr);
    
    for (int i = 0; i < returnSize1; i++) {
        free(result1[i]);
    }
    free(result1);
    free(returnColumnSizes1);
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses a linear scan approach. It processes intervals in three phases: intervals before the new interval, overlapping intervals that need merging, and intervals after the new interval. This is the most efficient approach with optimal time and space complexity.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

int** insert(int** intervals, int intervalsSize, int* intervalsColSize, int* newInterval, int newIntervalSize, int* returnSize, int** returnColumnSizes) {
    // Create a new array with the new interval included
    int** allIntervals = (int**)malloc((intervalsSize + 1) * sizeof(int*));
    for (int i = 0; i < intervalsSize; i++) {
        allIntervals[i] = (int*)malloc(2 * sizeof(int));
        allIntervals[i][0] = intervals[i][0];
        allIntervals[i][1] = intervals[i][1];
    }
    allIntervals[intervalsSize] = (int*)malloc(2 * sizeof(int));
    allIntervals[intervalsSize][0] = newInterval[0];
    allIntervals[intervalsSize][1] = newInterval[1];
    
    // Sort intervals by start time (simple insertion sort)
    for (int i = 1; i <= intervalsSize; i++) {
        int* key = allIntervals[i];
        int j = i - 1;
        while (j >= 0 && allIntervals[j][0] > key[0]) {
            allIntervals[j + 1] = allIntervals[j];
            j--;
        }
        allIntervals[j + 1] = key;
    }
    
    // Merge overlapping intervals
    int** result = (int**)malloc((intervalsSize + 1) * sizeof(int*));
    *returnColumnSizes = (int*)malloc((intervalsSize + 1) * sizeof(int));
    *returnSize = 0;
    
    if (intervalsSize + 1 > 0) {
        result[0] = (int*)malloc(2 * sizeof(int));
        result[0][0] = allIntervals[0][0];
        result[0][1] = allIntervals[0][1];
        (*returnColumnSizes)[0] = 2;
        *returnSize = 1;
        
        for (int i = 1; i <= intervalsSize; i++) {
            if (allIntervals[i][0] <= result[*returnSize - 1][1]) {
                // Overlapping intervals, merge them
                if (allIntervals[i][1] > result[*returnSize - 1][1]) {
                    result[*returnSize - 1][1] = allIntervals[i][1];
                }
            } else {
                // Non-overlapping interval, add to result
                result[*returnSize] = (int*)malloc(2 * sizeof(int));
                result[*returnSize][0] = allIntervals[i][0];
                result[*returnSize][1] = allIntervals[i][1];
                (*returnColumnSizes)[*returnSize] = 2;
                (*returnSize)++;
            }
        }
    }
    
    // Cleanup
    for (int i = 0; i <= intervalsSize; i++) {
        free(allIntervals[i]);
    }
    free(allIntervals);
    
    return result;
}

int main() {
    // Test case 1
    int intervals1[][2] = {{1,3}, {6,9}};
    int newInterval1[] = {2,5};
    int returnSize1, *returnColumnSizes1;
    
    int** intervals1_ptr = (int**)malloc(2 * sizeof(int*));
    for (int i = 0; i < 2; i++) {
        intervals1_ptr[i] = (int*)malloc(2 * sizeof(int));
        intervals1_ptr[i][0] = intervals1[i][0];
        intervals1_ptr[i][1] = intervals1[i][1];
    }
    
    int** result1 = insert(intervals1_ptr, 2, NULL, newInterval1, 2, &returnSize1, &returnColumnSizes1);
    
    printf("Test 1: ");
    for (int i = 0; i < returnSize1; i++) {
        printf("[%d,%d] ", result1[i][0], result1[i][1]);
    }
    printf("\\n");
    
    // Cleanup
    for (int i = 0; i < 2; i++) {
        free(intervals1_ptr[i]);
    }
    free(intervals1_ptr);
    
    for (int i = 0; i < returnSize1; i++) {
        free(result1[i]);
    }
    free(result1);
    free(returnColumnSizes1);
    
    return 0;
}`,
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution first adds the new interval to the array, then sorts all intervals by start time, and finally merges overlapping intervals. The sorting step makes this approach less efficient than the optimal solution.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

int** insert(int** intervals, int intervalsSize, int* intervalsColSize, int* newInterval, int newIntervalSize, int* returnSize, int** returnColumnSizes) {
    // Create a new array with the new interval included
    int** allIntervals = (int**)malloc((intervalsSize + 1) * sizeof(int*));
    for (int i = 0; i < intervalsSize; i++) {
        allIntervals[i] = (int*)malloc(2 * sizeof(int));
        allIntervals[i][0] = intervals[i][0];
        allIntervals[i][1] = intervals[i][1];
    }
    allIntervals[intervalsSize] = (int*)malloc(2 * sizeof(int));
    allIntervals[intervalsSize][0] = newInterval[0];
    allIntervals[intervalsSize][1] = newInterval[1];
    
    // Bubble sort (inefficient sorting)
    for (int i = 0; i <= intervalsSize; i++) {
        for (int j = 0; j <= intervalsSize - i - 1; j++) {
            if (allIntervals[j][0] > allIntervals[j + 1][0]) {
                // Swap intervals
                int temp0 = allIntervals[j][0];
                int temp1 = allIntervals[j][1];
                allIntervals[j][0] = allIntervals[j + 1][0];
                allIntervals[j][1] = allIntervals[j + 1][1];
                allIntervals[j + 1][0] = temp0;
                allIntervals[j + 1][1] = temp1;
            }
        }
    }
    
    // Merge overlapping intervals
    int** result = (int**)malloc((intervalsSize + 1) * sizeof(int*));
    *returnColumnSizes = (int*)malloc((intervalsSize + 1) * sizeof(int));
    *returnSize = 0;
    
    if (intervalsSize + 1 > 0) {
        result[0] = (int*)malloc(2 * sizeof(int));
        result[0][0] = allIntervals[0][0];
        result[0][1] = allIntervals[0][1];
        (*returnColumnSizes)[0] = 2;
        *returnSize = 1;
        
        for (int i = 1; i <= intervalsSize; i++) {
            if (allIntervals[i][0] <= result[*returnSize - 1][1]) {
                // Overlapping intervals, merge them
                if (allIntervals[i][1] > result[*returnSize - 1][1]) {
                    result[*returnSize - 1][1] = allIntervals[i][1];
                }
            } else {
                // Non-overlapping interval, add to result
                result[*returnSize] = (int*)malloc(2 * sizeof(int));
                result[*returnSize][0] = allIntervals[i][0];
                result[*returnSize][1] = allIntervals[i][1];
                (*returnColumnSizes)[*returnSize] = 2;
                (*returnSize)++;
            }
        }
    }
    
    // Cleanup
    for (int i = 0; i <= intervalsSize; i++) {
        free(allIntervals[i]);
    }
    free(allIntervals);
    
    return result;
}

int main() {
    // Test case 1
    int intervals1[][2] = {{1,3}, {6,9}};
    int newInterval1[] = {2,5};
    int returnSize1, *returnColumnSizes1;
    
    int** intervals1_ptr = (int**)malloc(2 * sizeof(int*));
    for (int i = 0; i < 2; i++) {
        intervals1_ptr[i] = (int*)malloc(2 * sizeof(int));
        intervals1_ptr[i][0] = intervals1[i][0];
        intervals1_ptr[i][1] = intervals1[i][1];
    }
    
    int** result1 = insert(intervals1_ptr, 2, NULL, newInterval1, 2, &returnSize1, &returnColumnSizes1);
    
    printf("Test 1: ");
    for (int i = 0; i < returnSize1; i++) {
        printf("[%d,%d] ", result1[i][0], result1[i][1]);
    }
    printf("\\n");
    
    // Cleanup
    for (int i = 0; i < 2; i++) {
        free(intervals1_ptr[i]);
    }
    free(intervals1_ptr);
    
    for (int i = 0; i < returnSize1; i++) {
        free(result1[i]);
    }
    free(result1);
    free(returnColumnSizes1);
    
    return 0;
}`,
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n)',
          explanation: 'This solution uses bubble sort which has O(n²) time complexity. It\'s the least efficient approach but is simple to understand and implement.'
        }
      }
    }
  }
];
