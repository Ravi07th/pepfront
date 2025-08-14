#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

// Best solution: Two Pointers with Sorting
void threeSum_best(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    if (numsSize < 3) {
        *returnSize = 0;
        return;
    }
    
    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);
    
    // Allocate memory for result
    int maxTriplets = numsSize * numsSize / 6;
    int** result = (int**)malloc(maxTriplets * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxTriplets * sizeof(int));
    *returnSize = 0;
    
    for (int i = 0; i < numsSize - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] == nums[i-1]) continue;
        
        int left = i + 1;
        int right = numsSize - 1;
        
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            
            if (sum == 0) {
                // Add triplet to result
                result[*returnSize] = (int*)malloc(3 * sizeof(int));
                result[*returnSize][0] = nums[i];
                result[*returnSize][1] = nums[left];
                result[*returnSize][2] = nums[right];
                (*returnColumnSizes)[*returnSize] = 3;
                (*returnSize)++;
                
                // Skip duplicates
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
}

// Average solution: Two Pointers with Optimizations
void threeSum_average(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    if (numsSize < 3) {
        *returnSize = 0;
        return;
    }
    
    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);
    
    // Allocate memory for result
    int maxTriplets = numsSize * numsSize / 6;
    int** result = (int**)malloc(maxTriplets * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxTriplets * sizeof(int));
    *returnSize = 0;
    
    for (int i = 0; i < numsSize - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] == nums[i-1]) continue;
        
        // Early termination: if nums[i] > 0, no triplet can sum to 0
        if (nums[i] > 0) break;
        
        int left = i + 1;
        int right = numsSize - 1;
        
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            
            if (sum == 0) {
                // Add triplet to result
                result[*returnSize] = (int*)malloc(3 * sizeof(int));
                result[*returnSize][0] = nums[i];
                result[*returnSize][1] = nums[left];
                result[*returnSize][2] = nums[right];
                (*returnColumnSizes)[*returnSize] = 3;
                (*returnSize)++;
                
                // Skip duplicates efficiently
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
}

// Worst solution: Brute Force
unsigned int hashTriplet(int a, int b, int c) {
    return (a * 31 + b) * 31 + c;
}

void threeSum_worst(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    if (numsSize < 3) {
        *returnSize = 0;
        return;
    }
    
    // Allocate memory for result
    int maxTriplets = numsSize * numsSize * numsSize / 6;
    int** result = (int**)malloc(maxTriplets * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxTriplets * sizeof(int));
    *returnSize = 0;
    
    // Hash set to avoid duplicates (simplified)
    int* seen = (int*)calloc(maxTriplets, sizeof(int));
    int seenSize = 0;
    
    for (int i = 0; i < numsSize - 2; i++) {
        for (int j = i + 1; j < numsSize - 1; j++) {
            for (int k = j + 1; k < numsSize; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    // Create sorted triplet to avoid duplicates
                    int triplet[3] = {nums[i], nums[j], nums[k]};
                    qsort(triplet, 3, sizeof(int), compare);
                    
                    // Check if triplet already exists
                    int hash = hashTriplet(triplet[0], triplet[1], triplet[2]);
                    int found = 0;
                    for (int s = 0; s < seenSize; s++) {
                        if (seen[s] == hash) {
                            found = 1;
                            break;
                        }
                    }
                    
                    if (!found) {
                        // Add triplet to result
                        result[*returnSize] = (int*)malloc(3 * sizeof(int));
                        result[*returnSize][0] = triplet[0];
                        result[*returnSize][1] = triplet[1];
                        result[*returnSize][2] = triplet[2];
                        (*returnColumnSizes)[*returnSize] = 3;
                        (*returnSize)++;
                        
                        // Add hash to seen
                        seen[seenSize++] = hash;
                    }
                }
            }
        }
    }
    
    free(seen);
}

// Test function
void test_solution(const char* test_name, void (*func)(int*, int, int*, int**), int* nums, int size, int expected_count) {
    int returnSize;
    int* returnColumnSizes;
    int** result = (int**)malloc(size * size / 6 * sizeof(int*));
    
    func(nums, size, &returnSize, &returnColumnSizes);
    
    printf("%s: Expected %d triplets, Got %d triplets, %s\n", 
           test_name, expected_count, returnSize, returnSize == expected_count ? "PASS" : "FAIL");
    
    // Print triplets
    for (int i = 0; i < returnSize; i++) {
        printf("  [%d, %d, %d]\n", result[i][0], result[i][1], result[i][2]);
    }
    
    // Free memory
    for (int i = 0; i < returnSize; i++) {
        free(result[i]);
    }
    free(result);
    free(returnColumnSizes);
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
    printf("=== Testing 3Sum Solutions ===\n\n");
    
    // Test cases
    int test_cases[][10] = {
        {-1, 0, 1, 2, -1, -4},  // Expected: 2 triplets
        {0, 1, 1},              // Expected: 0 triplets
        {0, 0, 0},              // Expected: 1 triplet
        {-2, 0, 1, 1, 2},       // Expected: 2 triplets
        {-1, -1, 0, 1},         // Expected: 1 triplet
        {-2, -1, 0, 1, 2},      // Expected: 3 triplets
        {1, 2, -2, -1},         // Expected: 1 triplet
        {-1, 0, 1, 2, -1, -4},  // Expected: 2 triplets
    };
    
    int sizes[] = {6, 3, 3, 5, 4, 6, 4, 6};
    int expected[] = {2, 0, 1, 2, 1, 3, 1, 2};
    
    int num_tests = sizeof(expected) / sizeof(expected[0]);
    
    for (int i = 0; i < num_tests; i++) {
        printf("Test %d: ", i + 1);
        print_array(test_cases[i], sizes[i]);
        printf(" (Expected: %d triplets)\n", expected[i]);
        
        // Create a copy of the array for each test
        int* nums_copy = (int*)malloc(sizes[i] * sizeof(int));
        memcpy(nums_copy, test_cases[i], sizes[i] * sizeof(int));
        
        test_solution("  Best (Two Pointers)", threeSum_best, nums_copy, sizes[i], expected[i]);
        
        // Reset array for next test
        memcpy(nums_copy, test_cases[i], sizes[i] * sizeof(int));
        test_solution("  Average (Optimized)", threeSum_average, nums_copy, sizes[i], expected[i]);
        
        // Reset array for next test
        memcpy(nums_copy, test_cases[i], sizes[i] * sizeof(int));
        test_solution("  Worst (Brute Force)", threeSum_worst, nums_copy, sizes[i], expected[i]);
        
        free(nums_copy);
        printf("\n");
    }
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same number of triplets.\n");
    printf("- Best: Two Pointers with Sorting - O(n²) time, O(1) space\n");
    printf("- Average: Two Pointers with Optimizations - O(n²) time, O(1) space\n");
    printf("- Worst: Brute Force - O(n³) time, O(n) space\n");
    
    return 0;
}
