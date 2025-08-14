#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Helper function to find minimum of two integers
int min(int a, int b) {
    return (a < b) ? a : b;
}

// Helper function to find minimum of four integers
int min4(int a, int b, int c, int d) {
    return min(min(a, b), min(c, d));
}

// Best solution: Greedy approach
int minDominoRotations_best(int* tops, int topsSize, int* bottoms, int bottomsSize) {
    if (topsSize == 0) return 0;
    
    // Try to make all tops equal to tops[0]
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
    
    // Try to make all tops equal to bottoms[0]
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
    
    // Try to make all bottoms equal to tops[0]
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
    
    // Try to make all bottoms equal to bottoms[0]
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

// Average solution: Simplified Greedy approach
int countRotations(int* tops, int* bottoms, int size, int target, int makeTop) {
    int rotations = 0;
    for (int i = 0; i < size; i++) {
        if (tops[i] != target && bottoms[i] != target) {
            return INT_MAX;  // Impossible
        }
        if (makeTop && tops[i] != target) {
            rotations++;
        } else if (!makeTop && bottoms[i] != target) {
            rotations++;
        }
    }
    return rotations;
}

int minDominoRotations_average(int* tops, int topsSize, int* bottoms, int bottomsSize) {
    if (topsSize == 0) return 0;
    
    // Try both possible target values
    int target1 = tops[0];
    int target2 = bottoms[0];
    
    // Check rotations for tops
    int rotationsTop1 = countRotations(tops, bottoms, topsSize, target1, 1);
    int rotationsTop2 = countRotations(tops, bottoms, topsSize, target2, 1);
    
    // Check rotations for bottoms
    int rotationsBottom1 = countRotations(tops, bottoms, topsSize, target1, 0);
    int rotationsBottom2 = countRotations(tops, bottoms, topsSize, target2, 0);
    
    int result = min(min(rotationsTop1, rotationsTop2), 
                    min(rotationsBottom1, rotationsBottom2));
    
    return result == INT_MAX ? -1 : result;
}

// Worst solution: Brute Force approach
int canMakeEqual(int* tops, int* bottoms, int size, int target) {
    for (int i = 0; i < size; i++) {
        if (tops[i] != target && bottoms[i] != target) {
            return 0;  // False
        }
    }
    return 1;  // True
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

int minDominoRotations_worst(int* tops, int topsSize, int* bottoms, int bottomsSize) {
    if (topsSize == 0) return 0;
    
    int minRotations = INT_MAX;
    
    // Try all possible values (1-6) for both tops and bottoms
    for (int target = 1; target <= 6; target++) {
        // Try to make all tops equal to target
        int rotationsTop = countRotationsForTarget(tops, bottoms, topsSize, target, 1);
        minRotations = min(minRotations, rotationsTop);
        
        // Try to make all bottoms equal to target
        int rotationsBottom = countRotationsForTarget(tops, bottoms, topsSize, target, 0);
        minRotations = min(minRotations, rotationsBottom);
    }
    
    return minRotations == INT_MAX ? -1 : minRotations;
}

// Test function
void test_solution(const char* test_name, int (*func)(int*, int, int*, int), int* tops, int* bottoms, int size, int expected) {
    int result = func(tops, size, bottoms, size);
    printf("%s: Expected %d, Got %d, %s\n", 
           test_name, expected, result, result == expected ? "PASS" : "FAIL");
}

// Helper function to print arrays
void print_arrays(int* tops, int* bottoms, int size) {
    printf("tops = [");
    for (int i = 0; i < size; i++) {
        printf("%d", tops[i]);
        if (i < size - 1) printf(", ");
    }
    printf("], bottoms = [");
    for (int i = 0; i < size; i++) {
        printf("%d", bottoms[i]);
        if (i < size - 1) printf(", ");
    }
    printf("]");
}

int main() {
    printf("=== Testing Minimum Domino Rotations ===\n\n");
    
    // Test case 1: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
    printf("Test 1: ");
    int tops1[] = {2, 1, 2, 4, 2, 2};
    int bottoms1[] = {5, 2, 6, 2, 3, 2};
    int size1 = 6;
    int expected1 = 2;
    print_arrays(tops1, bottoms1, size1);
    printf("\n");
    
    test_solution("  Best (Greedy)", minDominoRotations_best, tops1, bottoms1, size1, expected1);
    test_solution("  Average (Simplified Greedy)", minDominoRotations_average, tops1, bottoms1, size1, expected1);
    test_solution("  Worst (Brute Force)", minDominoRotations_worst, tops1, bottoms1, size1, expected1);
    printf("\n");
    
    // Test case 2: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
    printf("Test 2: ");
    int tops2[] = {3, 5, 1, 2, 3};
    int bottoms2[] = {3, 6, 3, 3, 4};
    int size2 = 5;
    int expected2 = -1;
    print_arrays(tops2, bottoms2, size2);
    printf("\n");
    
    test_solution("  Best (Greedy)", minDominoRotations_best, tops2, bottoms2, size2, expected2);
    test_solution("  Average (Simplified Greedy)", minDominoRotations_average, tops2, bottoms2, size2, expected2);
    test_solution("  Worst (Brute Force)", minDominoRotations_worst, tops2, bottoms2, size2, expected2);
    printf("\n");
    
    // Test case 3: tops = [1,2,1,1,1,2,2,2], bottoms = [2,1,2,2,2,1,1,1]
    printf("Test 3: ");
    int tops3[] = {1, 2, 1, 1, 1, 2, 2, 2};
    int bottoms3[] = {2, 1, 2, 2, 2, 1, 1, 1};
    int size3 = 8;
    int expected3 = 1;
    print_arrays(tops3, bottoms3, size3);
    printf("\n");
    
    test_solution("  Best (Greedy)", minDominoRotations_best, tops3, bottoms3, size3, expected3);
    test_solution("  Average (Simplified Greedy)", minDominoRotations_average, tops3, bottoms3, size3, expected3);
    test_solution("  Worst (Brute Force)", minDominoRotations_worst, tops3, bottoms3, size3, expected3);
    printf("\n");
    
    // Test case 4: tops = [1,1,1,1,1], bottoms = [1,1,1,1,1]
    printf("Test 4: ");
    int tops4[] = {1, 1, 1, 1, 1};
    int bottoms4[] = {1, 1, 1, 1, 1};
    int size4 = 5;
    int expected4 = 0;
    print_arrays(tops4, bottoms4, size4);
    printf("\n");
    
    test_solution("  Best (Greedy)", minDominoRotations_best, tops4, bottoms4, size4, expected4);
    test_solution("  Average (Simplified Greedy)", minDominoRotations_average, tops4, bottoms4, size4, expected4);
    test_solution("  Worst (Brute Force)", minDominoRotations_worst, tops4, bottoms4, size4, expected4);
    printf("\n");
    
    // Test case 5: tops = [2,3,2,2,2], bottoms = [2,2,2,3,2]
    printf("Test 5: ");
    int tops5[] = {2, 3, 2, 2, 2};
    int bottoms5[] = {2, 2, 2, 3, 2};
    int size5 = 5;
    int expected5 = 1;
    print_arrays(tops5, bottoms5, size5);
    printf("\n");
    
    test_solution("  Best (Greedy)", minDominoRotations_best, tops5, bottoms5, size5, expected5);
    test_solution("  Average (Simplified Greedy)", minDominoRotations_average, tops5, bottoms5, size5, expected5);
    test_solution("  Worst (Brute Force)", minDominoRotations_worst, tops5, bottoms5, size5, expected5);
    printf("\n");
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same minimum rotations.\n");
    printf("- Best: Greedy - O(n) time, O(1) space\n");
    printf("- Average: Simplified Greedy - O(n) time, O(1) space\n");
    printf("- Worst: Brute Force - O(n) time, O(1) space\n");
    
    return 0;
}
