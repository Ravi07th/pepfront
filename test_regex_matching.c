#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Best solution: Dynamic Programming approach
bool isMatch_best(char* s, char* p) {
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

// Average solution: Recursive with Memoization
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

bool isMatch_average(char* s, char* p) {
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

// Worst solution: Backtracking approach
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

bool isMatch_worst(char* s, char* p) {
    return isMatchBacktrack(s, p, 0, 0);
}

// Test function
void test_solution(const char* test_name, bool (*func)(char*, char*), char* s, char* p, bool expected) {
    bool result = func(s, p);
    printf("%s: Input = \"%s\", Pattern = \"%s\", Expected = %s, Got = %s, %s\n", 
           test_name, s, p, expected ? "true" : "false", result ? "true" : "false", 
           result == expected ? "PASS" : "FAIL");
}

int main() {
    printf("=== Testing Regular Expression Matching ===\n\n");
    
    // Test case 1: s = "aa", p = "a"
    printf("Test 1: s = \"aa\", p = \"a\"\n");
    char* s1 = "aa";
    char* p1 = "a";
    bool expected1 = false;
    
    test_solution("  Best (DP)", isMatch_best, s1, p1, expected1);
    test_solution("  Average (Recursive + Memo)", isMatch_average, s1, p1, expected1);
    test_solution("  Worst (Backtracking)", isMatch_worst, s1, p1, expected1);
    printf("\n");
    
    // Test case 2: s = "aa", p = "a*"
    printf("Test 2: s = \"aa\", p = \"a*\"\n");
    char* s2 = "aa";
    char* p2 = "a*";
    bool expected2 = true;
    
    test_solution("  Best (DP)", isMatch_best, s2, p2, expected2);
    test_solution("  Average (Recursive + Memo)", isMatch_average, s2, p2, expected2);
    test_solution("  Worst (Backtracking)", isMatch_worst, s2, p2, expected2);
    printf("\n");
    
    // Test case 3: s = "ab", p = ".*"
    printf("Test 3: s = \"ab\", p = \".*\"\n");
    char* s3 = "ab";
    char* p3 = ".*";
    bool expected3 = true;
    
    test_solution("  Best (DP)", isMatch_best, s3, p3, expected3);
    test_solution("  Average (Recursive + Memo)", isMatch_average, s3, p3, expected3);
    test_solution("  Worst (Backtracking)", isMatch_worst, s3, p3, expected3);
    printf("\n");
    
    // Test case 4: s = "aab", p = "c*a*b"
    printf("Test 4: s = \"aab\", p = \"c*a*b\"\n");
    char* s4 = "aab";
    char* p4 = "c*a*b";
    bool expected4 = true;
    
    test_solution("  Best (DP)", isMatch_best, s4, p4, expected4);
    test_solution("  Average (Recursive + Memo)", isMatch_average, s4, p4, expected4);
    test_solution("  Worst (Backtracking)", isMatch_worst, s4, p4, expected4);
    printf("\n");
    
    // Test case 5: s = "mississippi", p = "mis*is*p*."
    printf("Test 5: s = \"mississippi\", p = \"mis*is*p*.\"\n");
    char* s5 = "mississippi";
    char* p5 = "mis*is*p*.";
    bool expected5 = false;
    
    test_solution("  Best (DP)", isMatch_best, s5, p5, expected5);
    test_solution("  Average (Recursive + Memo)", isMatch_average, s5, p5, expected5);
    test_solution("  Worst (Backtracking)", isMatch_worst, s5, p5, expected5);
    printf("\n");
    
    // Test case 6: s = "a", p = "ab*"
    printf("Test 6: s = \"a\", p = \"ab*\"\n");
    char* s6 = "a";
    char* p6 = "ab*";
    bool expected6 = true;
    
    test_solution("  Best (DP)", isMatch_best, s6, p6, expected6);
    test_solution("  Average (Recursive + Memo)", isMatch_average, s6, p6, expected6);
    test_solution("  Worst (Backtracking)", isMatch_worst, s6, p6, expected6);
    printf("\n");
    
    // Test case 7: s = "", p = "a*"
    printf("Test 7: s = \"\", p = \"a*\"\n");
    char* s7 = "";
    char* p7 = "a*";
    bool expected7 = true;
    
    test_solution("  Best (DP)", isMatch_best, s7, p7, expected7);
    test_solution("  Average (Recursive + Memo)", isMatch_average, s7, p7, expected7);
    test_solution("  Worst (Backtracking)", isMatch_worst, s7, p7, expected7);
    printf("\n");
    
    // Test case 8: s = "aaa", p = "a*a"
    printf("Test 8: s = \"aaa\", p = \"a*a\"\n");
    char* s8 = "aaa";
    char* p8 = "a*a";
    bool expected8 = true;
    
    test_solution("  Best (DP)", isMatch_best, s8, p8, expected8);
    test_solution("  Average (Recursive + Memo)", isMatch_average, s8, p8, expected8);
    test_solution("  Worst (Backtracking)", isMatch_worst, s8, p8, expected8);
    printf("\n");
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same pattern matching results.\n");
    printf("- Best: Dynamic Programming - O(m*n) time, O(m*n) space\n");
    printf("- Average: Recursive + Memoization - O(m*n) time, O(m*n) space\n");
    printf("- Worst: Backtracking - O((m+n)*2^(m+n)) time, O(m+n) space\n");
    
    return 0;
}
