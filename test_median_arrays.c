#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Helper function to find maximum of two integers
int max(int a, int b) {
    return (a > b) ? a : b;
}

// Helper function to find minimum of two integers
int min(int a, int b) {
    return (a < b) ? a : b;
}

// Best solution: Binary Search approach
double findMedianSortedArrays_best(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // Ensure nums1 is the smaller array
    if (nums1Size > nums2Size) {
        return findMedianSortedArrays_best(nums2, nums2Size, nums1, nums1Size);
    }
    
    int m = nums1Size;
    int n = nums2Size;
    int left = 0;
    int right = m;
    
    while (left <= right) {
        // Partition nums1
        int partitionX = (left + right) / 2;
        int partitionY = (m + n + 1) / 2 - partitionX;
        
        // Find the four elements around the partition
        int maxLeftX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
        int minRightX = (partitionX == m) ? INT_MAX : nums1[partitionX];
        
        int maxLeftY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
        int minRightY = (partitionY == n) ? INT_MAX : nums2[partitionY];
        
        // Check if partition is correct
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Partition is correct, find median
            if ((m + n) % 2 == 1) {
                // Odd number of elements
                return (double)max(maxLeftX, maxLeftY);
            } else {
                // Even number of elements
                return (double)(max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0;
            }
        } else if (maxLeftX > minRightY) {
            // Move partition left
            right = partitionX - 1;
        } else {
            // Move partition right
            left = partitionX + 1;
        }
    }
    
    // This should never be reached
    return 0.0;
}

// Average solution: Merge and Find approach
double findMedianSortedArrays_average(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int* merged = (int*)malloc(totalSize * sizeof(int));
    
    int i = 0, j = 0, k = 0;
    
    // Merge the two sorted arrays
    while (i < nums1Size && j < nums2Size) {
        if (nums1[i] <= nums2[j]) {
            merged[k++] = nums1[i++];
        } else {
            merged[k++] = nums2[j++];
        }
    }
    
    // Add remaining elements from nums1
    while (i < nums1Size) {
        merged[k++] = nums1[i++];
    }
    
    // Add remaining elements from nums2
    while (j < nums2Size) {
        merged[k++] = nums2[j++];
    }
    
    // Find median
    double median;
    if (totalSize % 2 == 1) {
        // Odd number of elements
        median = (double)merged[totalSize / 2];
    } else {
        // Even number of elements
        median = (double)(merged[totalSize / 2 - 1] + merged[totalSize / 2]) / 2.0;
    }
    
    free(merged);
    return median;
}

// Worst solution: Two Pointers approach
double findMedianSortedArrays_worst(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int medianPos = totalSize / 2;
    int current = 0;
    int prev = 0;
    
    int i = 0, j = 0;
    int count = 0;
    
    // Traverse both arrays until reaching median position
    while (i < nums1Size && j < nums2Size && count <= medianPos) {
        prev = current;
        if (nums1[i] <= nums2[j]) {
            current = nums1[i++];
        } else {
            current = nums2[j++];
        }
        count++;
    }
    
    // Continue with remaining elements in nums1
    while (i < nums1Size && count <= medianPos) {
        prev = current;
        current = nums1[i++];
        count++;
    }
    
    // Continue with remaining elements in nums2
    while (j < nums2Size && count <= medianPos) {
        prev = current;
        current = nums2[j++];
        count++;
    }
    
    // Return median
    if (totalSize % 2 == 1) {
        // Odd number of elements
        return (double)current;
    } else {
        // Even number of elements
        return (double)(prev + current) / 2.0;
    }
}

// Test function
void test_solution(const char* test_name, double (*func)(int*, int, int*, int), int* nums1, int nums1Size, int* nums2, int nums2Size, double expected) {
    double result = func(nums1, nums1Size, nums2, nums2Size);
    printf("%s: Expected %.5f, Got %.5f, %s\n", 
           test_name, expected, result, 
           (result - expected) < 0.00001 && (result - expected) > -0.00001 ? "PASS" : "FAIL");
}

// Helper function to print array
void print_array(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%d", arr[i]);
        if (i < size - 1) printf(", ");
    }
    printf("]");
}

int main() {
    printf("=== Testing Median of Two Sorted Arrays ===\n\n");
    
    // Test case 1: nums1 = [1,3], nums2 = [2]
    printf("Test 1: nums1 = [1,3], nums2 = [2]\n");
    int nums1_1[] = {1, 3};
    int nums2_1[] = {2};
    double expected1 = 2.00000;
    
    test_solution("  Best (Binary Search)", findMedianSortedArrays_best, nums1_1, 2, nums2_1, 1, expected1);
    test_solution("  Average (Merge & Find)", findMedianSortedArrays_average, nums1_1, 2, nums2_1, 1, expected1);
    test_solution("  Worst (Two Pointers)", findMedianSortedArrays_worst, nums1_1, 2, nums2_1, 1, expected1);
    printf("\n");
    
    // Test case 2: nums1 = [1,2], nums2 = [3,4]
    printf("Test 2: nums1 = [1,2], nums2 = [3,4]\n");
    int nums1_2[] = {1, 2};
    int nums2_2[] = {3, 4};
    double expected2 = 2.50000;
    
    test_solution("  Best (Binary Search)", findMedianSortedArrays_best, nums1_2, 2, nums2_2, 2, expected2);
    test_solution("  Average (Merge & Find)", findMedianSortedArrays_average, nums1_2, 2, nums2_2, 2, expected2);
    test_solution("  Worst (Two Pointers)", findMedianSortedArrays_worst, nums1_2, 2, nums2_2, 2, expected2);
    printf("\n");
    
    // Test case 3: nums1 = [0,0], nums2 = [0,0]
    printf("Test 3: nums1 = [0,0], nums2 = [0,0]\n");
    int nums1_3[] = {0, 0};
    int nums2_3[] = {0, 0};
    double expected3 = 0.00000;
    
    test_solution("  Best (Binary Search)", findMedianSortedArrays_best, nums1_3, 2, nums2_3, 2, expected3);
    test_solution("  Average (Merge & Find)", findMedianSortedArrays_average, nums1_3, 2, nums2_3, 2, expected3);
    test_solution("  Worst (Two Pointers)", findMedianSortedArrays_worst, nums1_3, 2, nums2_3, 2, expected3);
    printf("\n");
    
    // Test case 4: nums1 = [], nums2 = [1]
    printf("Test 4: nums1 = [], nums2 = [1]\n");
    int nums1_4[] = {};
    int nums2_4[] = {1};
    double expected4 = 1.00000;
    
    test_solution("  Best (Binary Search)", findMedianSortedArrays_best, nums1_4, 0, nums2_4, 1, expected4);
    test_solution("  Average (Merge & Find)", findMedianSortedArrays_average, nums1_4, 0, nums2_4, 1, expected4);
    test_solution("  Worst (Two Pointers)", findMedianSortedArrays_worst, nums1_4, 0, nums2_4, 1, expected4);
    printf("\n");
    
    // Test case 5: nums1 = [2], nums2 = []
    printf("Test 5: nums1 = [2], nums2 = []\n");
    int nums1_5[] = {2};
    int nums2_5[] = {};
    double expected5 = 2.00000;
    
    test_solution("  Best (Binary Search)", findMedianSortedArrays_best, nums1_5, 1, nums2_5, 0, expected5);
    test_solution("  Average (Merge & Find)", findMedianSortedArrays_average, nums1_5, 1, nums2_5, 0, expected5);
    test_solution("  Worst (Two Pointers)", findMedianSortedArrays_worst, nums1_5, 1, nums2_5, 0, expected5);
    printf("\n");
    
    // Test case 6: nums1 = [1,3,5,7], nums2 = [2,4,6,8]
    printf("Test 6: nums1 = [1,3,5,7], nums2 = [2,4,6,8]\n");
    int nums1_6[] = {1, 3, 5, 7};
    int nums2_6[] = {2, 4, 6, 8};
    double expected6 = 4.50000;
    
    test_solution("  Best (Binary Search)", findMedianSortedArrays_best, nums1_6, 4, nums2_6, 4, expected6);
    test_solution("  Average (Merge & Find)", findMedianSortedArrays_average, nums1_6, 4, nums2_6, 4, expected6);
    test_solution("  Worst (Two Pointers)", findMedianSortedArrays_worst, nums1_6, 4, nums2_6, 4, expected6);
    printf("\n");
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same median value.\n");
    printf("- Best: Binary Search - O(log(min(m,n))) time, O(1) space\n");
    printf("- Average: Merge & Find - O(m+n) time, O(m+n) space\n");
    printf("- Worst: Two Pointers - O(m+n) time, O(1) space\n");
    
    return 0;
}
