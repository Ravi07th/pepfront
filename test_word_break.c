#include <stdio.h>
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

// Best solution: Dynamic Programming with Hash Set
bool wordBreak_best(char* s, char** wordDict, int wordDictSize) {
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
                substring[i - j] = '\0';
                
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

// Average solution: Dynamic Programming with Simple Set
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
void addWordToSet(WordSet* set, const char* word) {
    if (set->size >= set->capacity) return;
    set->words[set->size] = strdup(word);
    set->size++;
}

// Check if word exists in set
bool containsWordInSet(WordSet* set, const char* word) {
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

bool wordBreak_average(char* s, char** wordDict, int wordDictSize) {
    int n = strlen(s);
    
    // Create word set from dictionary
    WordSet* set = createWordSet(wordDictSize);
    for (int i = 0; i < wordDictSize; i++) {
        addWordToSet(set, wordDict[i]);
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
                substring[i - j] = '\0';
                
                // Check if substring is in dictionary
                if (containsWordInSet(set, substring)) {
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

// Worst solution: Recursive with Memoization
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
    word[end - start + 1] = '\0';
    
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

bool wordBreak_worst(char* s, char** wordDict, int wordDictSize) {
    Memoization* memo = createMemo();
    bool result = wordBreakRecursive(s, 0, wordDict, wordDictSize, memo);
    freeMemo(memo);
    return result;
}

// Test function
void test_solution(const char* test_name, bool (*func)(char*, char**, int), char* s, char** wordDict, int wordDictSize, bool expected) {
    bool result = func(s, wordDict, wordDictSize);
    printf("%s: Input = \"%s\", Expected = %s, Got = %s, %s\n", 
           test_name, s, expected ? "true" : "false", result ? "true" : "false", 
           result == expected ? "PASS" : "FAIL");
}

int main() {
    printf("=== Testing Word Break Solutions ===\n\n");
    
    // Test case 1: "leetcode" with ["leet","code"]
    printf("Test 1: s = \"leetcode\", wordDict = [\"leet\",\"code\"]\n");
    char* s1 = "leetcode";
    char* wordDict1[] = {"leet", "code"};
    int wordDictSize1 = 2;
    bool expected1 = true;
    
    test_solution("  Best (DP + Hash Set)", wordBreak_best, s1, wordDict1, wordDictSize1, expected1);
    test_solution("  Average (DP + Simple Set)", wordBreak_average, s1, wordDict1, wordDictSize1, expected1);
    test_solution("  Worst (Recursive + Memo)", wordBreak_worst, s1, wordDict1, wordDictSize1, expected1);
    printf("\n");
    
    // Test case 2: "applepenapple" with ["apple","pen"]
    printf("Test 2: s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]\n");
    char* s2 = "applepenapple";
    char* wordDict2[] = {"apple", "pen"};
    int wordDictSize2 = 2;
    bool expected2 = true;
    
    test_solution("  Best (DP + Hash Set)", wordBreak_best, s2, wordDict2, wordDictSize2, expected2);
    test_solution("  Average (DP + Simple Set)", wordBreak_average, s2, wordDict2, wordDictSize2, expected2);
    test_solution("  Worst (Recursive + Memo)", wordBreak_worst, s2, wordDict2, wordDictSize2, expected2);
    printf("\n");
    
    // Test case 3: "catsandog" with ["cats","dog","sand","and","cat"]
    printf("Test 3: s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]\n");
    char* s3 = "catsandog";
    char* wordDict3[] = {"cats", "dog", "sand", "and", "cat"};
    int wordDictSize3 = 5;
    bool expected3 = false;
    
    test_solution("  Best (DP + Hash Set)", wordBreak_best, s3, wordDict3, wordDictSize3, expected3);
    test_solution("  Average (DP + Simple Set)", wordBreak_average, s3, wordDict3, wordDictSize3, expected3);
    test_solution("  Worst (Recursive + Memo)", wordBreak_worst, s3, wordDict3, wordDictSize3, expected3);
    printf("\n");
    
    // Test case 4: "aaaaaaa" with ["aaaa","aaa"]
    printf("Test 4: s = \"aaaaaaa\", wordDict = [\"aaaa\",\"aaa\"]\n");
    char* s4 = "aaaaaaa";
    char* wordDict4[] = {"aaaa", "aaa"};
    int wordDictSize4 = 2;
    bool expected4 = true;
    
    test_solution("  Best (DP + Hash Set)", wordBreak_best, s4, wordDict4, wordDictSize4, expected4);
    test_solution("  Average (DP + Simple Set)", wordBreak_average, s4, wordDict4, wordDictSize4, expected4);
    test_solution("  Worst (Recursive + Memo)", wordBreak_worst, s4, wordDict4, wordDictSize4, expected4);
    printf("\n");
    
    // Test case 5: "a" with ["a"]
    printf("Test 5: s = \"a\", wordDict = [\"a\"]\n");
    char* s5 = "a";
    char* wordDict5[] = {"a"};
    int wordDictSize5 = 1;
    bool expected5 = true;
    
    test_solution("  Best (DP + Hash Set)", wordBreak_best, s5, wordDict5, wordDictSize5, expected5);
    test_solution("  Average (DP + Simple Set)", wordBreak_average, s5, wordDict5, wordDictSize5, expected5);
    test_solution("  Worst (Recursive + Memo)", wordBreak_worst, s5, wordDict5, wordDictSize5, expected5);
    printf("\n");
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same results for word break operations.\n");
    printf("- Best: Dynamic Programming + Hash Set - O(n² * m) time, O(n + k) space\n");
    printf("- Average: Dynamic Programming + Simple Set - O(n² * m * k) time, O(n + k) space\n");
    printf("- Worst: Recursive + Memoization - O(n² * m * k) time, O(n) space\n");
    
    return 0;
}
