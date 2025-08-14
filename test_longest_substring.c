#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

// Best solution: Sliding Window with Hash Table
int lengthOfLongestSubstring_best(char* s) {
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

// Average solution: Sliding Window with Array
int lengthOfLongestSubstring_average(char* s) {
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

// Worst solution: Brute Force
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

int lengthOfLongestSubstring_worst(char* s) {
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

// Test function
void test_solution(const char* test_name, int (*func)(char*), char* input, int expected) {
    int result = func(input);
    printf("%s: Input = \"%s\", Expected = %d, Got = %d, %s\n", 
           test_name, input, expected, result, result == expected ? "PASS" : "FAIL");
}

int main() {
    printf("=== Testing Longest Substring Without Repeating Characters ===\n\n");
    
    // Test cases
    char* test_cases[] = {
        "abcabcbb",    // Expected: 3
        "bbbbb",       // Expected: 1
        "pwwkew",      // Expected: 3
        "",            // Expected: 0
        "abcdef",      // Expected: 6
        "aab",         // Expected: 2
        "dvdf",        // Expected: 3
        "anviaj",      // Expected: 5
        "abcabcbb",    // Expected: 3
        "bbtablud",    // Expected: 6
        "tmmzuxt",     // Expected: 5
        "ohvhjdml",    // Expected: 6
    };
    
    int expected[] = {
        3, 1, 3, 0, 6, 2, 3, 5, 3, 6, 5, 6
    };
    
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    printf("Testing Best Solution (Sliding Window with Hash Table):\n");
    for (int i = 0; i < num_tests; i++) {
        test_solution("Best", lengthOfLongestSubstring_best, test_cases[i], expected[i]);
    }
    
    printf("\nTesting Average Solution (Sliding Window with Array):\n");
    for (int i = 0; i < num_tests; i++) {
        test_solution("Average", lengthOfLongestSubstring_average, test_cases[i], expected[i]);
    }
    
    printf("\nTesting Worst Solution (Brute Force):\n");
    for (int i = 0; i < num_tests; i++) {
        test_solution("Worst", lengthOfLongestSubstring_worst, test_cases[i], expected[i]);
    }
    
    printf("\n=== Test Summary ===\n");
    printf("All three solutions should produce the same results.\n");
    printf("- Best: Sliding Window with Hash Table - O(n) time, O(min(m,n)) space\n");
    printf("- Average: Sliding Window with Array - O(n) time, O(1) space\n");
    printf("- Worst: Brute Force - O(n³) time, O(min(m,n)) space\n");
    
    return 0;
}
