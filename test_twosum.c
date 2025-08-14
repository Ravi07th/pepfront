#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

typedef struct {
    int value;
    int index;
} Pair;

int comparePairs(const void* a, const void* b) {
    return ((Pair*)a)->value - ((Pair*)b)->value;
}

// Best Solution - Brute Force (simplified for C)
int* twoSumBest(int* nums, int numsSize, int target, int* returnSize) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                int* result = (int*)malloc(2 * sizeof(int));
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }
    
    *returnSize = 0;
    return NULL;
}

// Average Solution - Two Pointer with Sorting
int* twoSumAverage(int* nums, int numsSize, int target, int* returnSize) {
    Pair* pairs = (Pair*)malloc(numsSize * sizeof(Pair));
    
    // Create pairs of (value, index)
    for (int i = 0; i < numsSize; i++) {
        pairs[i].value = nums[i];
        pairs[i].index = i;
    }
    
    // Sort by values
    qsort(pairs, numsSize, sizeof(Pair), comparePairs);
    
    int left = 0, right = numsSize - 1;
    
    while (left < right) {
        int currentSum = pairs[left].value + pairs[right].value;
        
        if (currentSum == target) {
            int* result = (int*)malloc(2 * sizeof(int));
            result[0] = pairs[left].index;
            result[1] = pairs[right].index;
            *returnSize = 2;
            free(pairs);
            return result;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    free(pairs);
    *returnSize = 0;
    return NULL;
}

// Worst Solution - Brute Force
int* twoSumWorst(int* nums, int numsSize, int target, int* returnSize) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                int* result = (int*)malloc(2 * sizeof(int));
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }
    
    *returnSize = 0;
    return NULL;
}

// Test helper function
void testSolution(const char* name, int* nums, int numsSize, int target, int expected1, int expected2) {
    int returnSize;
    int* result = NULL;
    
    if (strcmp(name, "Best") == 0) {
        result = twoSumBest(nums, numsSize, target, &returnSize);
    } else if (strcmp(name, "Average") == 0) {
        result = twoSumAverage(nums, numsSize, target, &returnSize);
    } else if (strcmp(name, "Worst") == 0) {
        result = twoSumWorst(nums, numsSize, target, &returnSize);
    }
    
    printf("Input: nums=[");
    for (int i = 0; i < numsSize; i++) {
        printf("%d", nums[i]);
        if (i < numsSize - 1) printf(", ");
    }
    printf("], target=%d\n", target);
    
    if (result != NULL && returnSize == 2) {
        printf("Expected: [%d, %d], Got: [%d, %d]\n", expected1, expected2, result[0], result[1]);
        
        bool passed = (result[0] == expected1 && result[1] == expected2) ||
                     (result[0] == expected2 && result[1] == expected1);
        
        printf("%s\n", passed ? "✓ PASS" : "✗ FAIL");
        free(result);
    } else {
        printf("Expected: [%d, %d], Got: No solution\n", expected1, expected2);
        printf("✗ FAIL\n");
    }
    printf("\n");
}

int main() {
    printf("Testing Two Sum Solutions in C\n\n");
    
    // Test case 1: [2, 7, 11, 15], target = 9
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    
    printf("=== Testing C Best Solution ===\n");
    testSolution("Best", nums1, 4, target1, 0, 1);
    
    printf("=== Testing C Average Solution ===\n");
    testSolution("Average", nums1, 4, target1, 0, 1);
    
    printf("=== Testing C Worst Solution ===\n");
    testSolution("Worst", nums1, 4, target1, 0, 1);
    
    // Test case 2: [3, 2, 4], target = 6
    int nums2[] = {3, 2, 4};
    int target2 = 6;
    
    printf("=== Testing C Best Solution ===\n");
    testSolution("Best", nums2, 3, target2, 1, 2);
    
    printf("=== Testing C Average Solution ===\n");
    testSolution("Average", nums2, 3, target2, 1, 2);
    
    printf("=== Testing C Worst Solution ===\n");
    testSolution("Worst", nums2, 3, target2, 1, 2);
    
    // Test case 3: [3, 3], target = 6
    int nums3[] = {3, 3};
    int target3 = 6;
    
    printf("=== Testing C Best Solution ===\n");
    testSolution("Best", nums3, 2, target3, 0, 1);
    
    printf("=== Testing C Average Solution ===\n");
    testSolution("Average", nums3, 2, target3, 0, 1);
    
    printf("=== Testing C Worst Solution ===\n");
    testSolution("Worst", nums3, 2, target3, 0, 1);
    
    printf("All C tests completed!\n");
    return 0;
}
