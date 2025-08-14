#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

// Best solution: Two Pointers
int maxArea_best(int* height, int heightSize) {
    int left = 0;
    int right = heightSize - 1;
    int maxArea = 0;
    
    while (left < right) {
        // Calculate current area
        int currentArea = min(height[left], height[right]) * (right - left);
        maxArea = max(maxArea, currentArea);
        
        // Move the pointer with shorter height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

// Average solution: Two Pointers with Optimizations
int maxArea_average(int* height, int heightSize) {
    int left = 0;
    int right = heightSize - 1;
    int maxArea = 0;
    int maxHeight = 0;
    
    while (left < right) {
        // Calculate current area
        int currentArea = min(height[left], height[right]) * (right - left);
        maxArea = max(maxArea, currentArea);
        
        // Update maximum height seen
        maxHeight = max(maxHeight, min(height[left], height[right]));
        
        // Move the pointer with shorter height
        if (height[left] < height[right]) {
            left++;
            // Skip lines shorter than current max height
            while (left < right && height[left] <= maxHeight) {
                left++;
            }
        } else {
            right--;
            // Skip lines shorter than current max height
            while (left < right && height[right] <= maxHeight) {
                right--;
            }
        }
    }
    
    return maxArea;
}

// Worst solution: Brute Force
int maxArea_worst(int* height, int heightSize) {
    int maxArea = 0;
    
    // Check all possible pairs
    for (int i = 0; i < heightSize; i++) {
        for (int j = i + 1; j < heightSize; j++) {
            int currentArea = min(height[i], height[j]) * (j - i);
            maxArea = max(maxArea, currentArea);
        }
    }
    
    return maxArea;
}

// Test function
void test_solution(const char* test_name, int (*func)(int*, int), int* height, int size, int expected) {
    int result = func(height, size);
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
    printf("=== Testing Container With Most Water ===\n\n");
    
    // Test cases
    int test_cases[][10] = {
        {1, 8, 6, 2, 5, 4, 8, 3, 7},  // Expected: 49
        {1, 1},                       // Expected: 1
        {4, 3, 2, 1, 4},             // Expected: 16
        {1, 2, 1},                   // Expected: 2
        {2, 3, 4, 5, 18, 17, 6},     // Expected: 17
        {1, 2, 3, 4, 5, 25, 24, 3, 4}, // Expected: 24
        {10, 9, 8, 7, 6, 5, 4, 3, 2, 1}, // Expected: 25
        {1, 8, 6, 2, 5, 4, 8, 3, 7},  // Expected: 49
        {2, 3, 10, 5, 7, 8, 9},       // Expected: 36
        {1, 3, 2, 5, 25, 24, 5},      // Expected: 24
    };
    
    int sizes[] = {9, 2, 5, 3, 7, 9, 10, 9, 7, 7};
    int expected[] = {49, 1, 16, 2, 17, 24, 25, 49, 36, 24};
    
    int num_tests = sizeof(expected) / sizeof(expected[0]);
    
    for (int i = 0; i < num_tests; i++) {
        printf("Test %d: ", i + 1);
        print_array(test_cases[i], sizes[i]);
        printf(" (Expected: %d)\n", expected[i]);
        
        test_solution("  Best (Two Pointers)", maxArea_best, test_cases[i], sizes[i], expected[i]);
        test_solution("  Average (Optimized)", maxArea_average, test_cases[i], sizes[i], expected[i]);
        test_solution("  Worst (Brute Force)", maxArea_worst, test_cases[i], sizes[i], expected[i]);
        printf("\n");
    }
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same results.\n");
    printf("- Best: Two Pointers - O(n) time, O(1) space\n");
    printf("- Average: Two Pointers with Optimizations - O(n) time, O(1) space\n");
    printf("- Worst: Brute Force - O(n²) time, O(1) space\n");
    
    return 0;
}
