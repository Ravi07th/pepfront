#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

// Best solution: Kadane's Algorithm
int maxSubArray_best(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < numsSize; i++) {
        // Either extend the current subarray or start a new one
        currentSum = max(nums[i], currentSum + nums[i]);
        // Update the maximum sum found so far
        maxSum = max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Average solution: Dynamic Programming
int maxSubArray_average(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    int* dp = (int*)malloc(numsSize * sizeof(int));
    dp[0] = nums[0];
    int maxSum = dp[0];
    
    for (int i = 1; i < numsSize; i++) {
        // dp[i] = max(nums[i], dp[i-1] + nums[i])
        dp[i] = max(nums[i], dp[i-1] + nums[i]);
        maxSum = max(maxSum, dp[i]);
    }
    
    free(dp);
    return maxSum;
}

// Worst solution: Brute Force
int maxSubArray_worst(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    
    int maxSum = INT_MIN;
    
    // Check all possible subarrays
    for (int start = 0; start < numsSize; start++) {
        int currentSum = 0;
        for (int end = start; end < numsSize; end++) {
            currentSum += nums[end];
            maxSum = max(maxSum, currentSum);
        }
    }
    
    return maxSum;
}

// Test function
void test_solution(const char* test_name, int (*func)(int*, int), int* nums, int size, int expected) {
    int result = func(nums, size);
    printf("%s: Expected = %d, Got = %d, %s\n", 
           test_name, expected, result, result == expected ? "PASS" : "FAIL");
}

// Helper function to print array
void print_array(int* nums, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%d", nums[i]);
        if (i < size - 1) printf(", ");
    }
    printf("]");
}

int main() {
    printf("=== Testing Maximum Subarray Solutions ===\n\n");
    
    // Test cases
    int test_cases[][10] = {
        {-2, 1, -3, 4, -1, 2, 1, -5, 4},  // Expected: 6
        {1},                               // Expected: 1
        {5, 4, -1, 7, 8},                 // Expected: 23
        {-1, -2, -3, -4},                 // Expected: -1
        {2, 3, -2, 4},                    // Expected: 7
        {-2, -3, 4, -1, -2, 1, 5, -3},   // Expected: 7
        {0},                              // Expected: 0
        {-5},                             // Expected: -5
        {1, 2, 3, 4, 5},                 // Expected: 15
        {-1, -2, -3, -4, -5},            // Expected: -1
    };
    
    int sizes[] = {9, 1, 5, 4, 4, 8, 1, 1, 5, 5};
    int expected[] = {6, 1, 23, -1, 7, 7, 0, -5, 15, -1};
    
    int num_tests = sizeof(expected) / sizeof(expected[0]);
    
    for (int i = 0; i < num_tests; i++) {
        printf("Test %d: ", i + 1);
        print_array(test_cases[i], sizes[i]);
        printf(" (Expected: %d)\n", expected[i]);
        
        test_solution("  Best (Kadane)", maxSubArray_best, test_cases[i], sizes[i], expected[i]);
        test_solution("  Average (DP)", maxSubArray_average, test_cases[i], sizes[i], expected[i]);
        test_solution("  Worst (Brute)", maxSubArray_worst, test_cases[i], sizes[i], expected[i]);
        printf("\n");
    }
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same results.\n");
    printf("- Best: Kadane's Algorithm - O(n) time, O(1) space\n");
    printf("- Average: Dynamic Programming - O(n) time, O(n) space\n");
    printf("- Worst: Brute Force - O(n²) time, O(1) space\n");
    
    return 0;
}
