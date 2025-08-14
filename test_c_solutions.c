#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// ==================== BEST SOLUTION (Hash Table) ====================
#define HASH_SIZE 10007

typedef struct HashNode {
    int key;
    int value;
    struct HashNode* next;
} HashNode;

HashNode* hashTable[HASH_SIZE];

int hash(int key) {
    return abs(key) % HASH_SIZE;
}

void insertHash(int key, int value) {
    int index = hash(key);
    HashNode* newNode = (HashNode*)malloc(sizeof(HashNode));
    newNode->key = key;
    newNode->value = value;
    newNode->next = hashTable[index];
    hashTable[index] = newNode;
}

int findHash(int key) {
    int index = hash(key);
    HashNode* current = hashTable[index];
    while (current != NULL) {
        if (current->key == key) {
            return current->value;
        }
        current = current->next;
    }
    return -1;
}

void clearHash() {
    for (int i = 0; i < HASH_SIZE; i++) {
        HashNode* current = hashTable[i];
        while (current != NULL) {
            HashNode* temp = current;
            current = current->next;
            free(temp);
        }
        hashTable[i] = NULL;
    }
}

int* twoSumBest(int* nums, int numsSize, int target, int* returnSize) {
    clearHash();
    
    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        int complementIndex = findHash(complement);
        
        if (complementIndex != -1) {
            int* result = (int*)malloc(2 * sizeof(int));
            result[0] = complementIndex;
            result[1] = i;
            *returnSize = 2;
            return result;
        }
        
        insertHash(nums[i], i);
    }
    
    *returnSize = 0;
    return NULL;
}

// ==================== AVERAGE SOLUTION (Two Pointer) ====================
typedef struct {
    int value;
    int index;
} Pair;

int comparePairs(const void* a, const void* b) {
    return ((Pair*)a)->value - ((Pair*)b)->value;
}

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

// ==================== WORST SOLUTION (Brute Force) ====================
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

// ==================== TEST HELPER FUNCTIONS ====================
void printArray(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%d", arr[i]);
        if (i < size - 1) printf(", ");
    }
    printf("]");
}

bool arraysEqual(int* arr1, int* arr2, int size) {
    if (size != 2) return false;
    return (arr1[0] == arr2[0] && arr1[1] == arr2[1]) ||
           (arr1[0] == arr2[1] && arr1[1] == arr2[0]);
}

void testSolution(const char* name, int* (*solution)(int*, int, int, int*), 
                 int* nums, int numsSize, int target, int* expected) {
    printf("\n=== Testing %s Solution ===\n", name);
    printf("Input: nums=");
    printArray(nums, numsSize);
    printf(", target=%d\n", target);
    
    int returnSize;
    int* result = solution(nums, numsSize, target, &returnSize);
    
    if (result != NULL && returnSize == 2) {
        printf("Expected: ");
        printArray(expected, 2);
        printf(", Got: ");
        printArray(result, 2);
        printf("\n");
        
        bool passed = arraysEqual(result, expected, 2);
        printf("%s\n", passed ? "✓ PASS" : "✗ FAIL");
        free(result);
    } else {
        printf("Expected: ");
        printArray(expected, 2);
        printf(", Got: No solution\n");
        printf("✗ FAIL\n");
    }
}

int main() {
    printf("Testing Two Sum Solutions in C\n");
    printf("================================\n");
    
    // Test case 1: [2, 7, 11, 15], target = 9
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int expected1[] = {0, 1};
    
    testSolution("Best (Hash Table)", twoSumBest, nums1, 4, target1, expected1);
    testSolution("Average (Two Pointer)", twoSumAverage, nums1, 4, target1, expected1);
    testSolution("Worst (Brute Force)", twoSumWorst, nums1, 4, target1, expected1);
    
    // Test case 2: [3, 2, 4], target = 6
    int nums2[] = {3, 2, 4};
    int target2 = 6;
    int expected2[] = {1, 2};
    
    testSolution("Best (Hash Table)", twoSumBest, nums2, 3, target2, expected2);
    testSolution("Average (Two Pointer)", twoSumAverage, nums2, 3, target2, expected2);
    testSolution("Worst (Brute Force)", twoSumWorst, nums2, 3, target2, expected2);
    
    // Test case 3: [3, 3], target = 6
    int nums3[] = {3, 3};
    int target3 = 6;
    int expected3[] = {0, 1};
    
    testSolution("Best (Hash Table)", twoSumBest, nums3, 2, target3, expected3);
    testSolution("Average (Two Pointer)", twoSumAverage, nums3, 2, target3, expected3);
    testSolution("Worst (Brute Force)", twoSumWorst, nums3, 2, target3, expected3);
    
    // Test case 4: [1, 5, 8, 10, 13, 18, 21, 25, 30], target = 23
    int nums4[] = {1, 5, 8, 10, 13, 18, 21, 25, 30};
    int target4 = 23;
    int expected4[] = {3, 4};
    
    testSolution("Best (Hash Table)", twoSumBest, nums4, 9, target4, expected4);
    testSolution("Average (Two Pointer)", twoSumAverage, nums4, 9, target4, expected4);
    testSolution("Worst (Brute Force)", twoSumWorst, nums4, 9, target4, expected4);
    
    printf("\n================================\n");
    printf("All C tests completed!\n");
    
    return 0;
}
