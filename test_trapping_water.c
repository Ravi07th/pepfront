#include <stdio.h>
#include <stdlib.h>

// Helper function to find minimum of two integers
int min(int a, int b) {
    return (a < b) ? a : b;
}

// Helper function to find maximum of two integers
int max(int a, int b) {
    return (a > b) ? a : b;
}

// Best solution: Two Pointers approach
int trap_best(int* height, int heightSize) {
    if (heightSize < 3) return 0;  // Need at least 3 bars to trap water
    
    int left = 0;
    int right = heightSize - 1;
    int leftMax = 0;
    int rightMax = 0;
    int water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            // Water can be trapped on the left side
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            // Water can be trapped on the right side
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}

// Average solution: Dynamic Programming approach
int trap_average(int* height, int heightSize) {
    if (heightSize < 3) return 0;  // Need at least 3 bars to trap water
    
    // Arrays to store maximum heights from left and right
    int* leftMax = (int*)malloc(heightSize * sizeof(int));
    int* rightMax = (int*)malloc(heightSize * sizeof(int));
    
    // Calculate maximum heights from left
    leftMax[0] = height[0];
    for (int i = 1; i < heightSize; i++) {
        leftMax[i] = max(leftMax[i-1], height[i]);
    }
    
    // Calculate maximum heights from right
    rightMax[heightSize-1] = height[heightSize-1];
    for (int i = heightSize-2; i >= 0; i--) {
        rightMax[i] = max(rightMax[i+1], height[i]);
    }
    
    // Calculate trapped water
    int water = 0;
    for (int i = 0; i < heightSize; i++) {
        water += min(leftMax[i], rightMax[i]) - height[i];
    }
    
    free(leftMax);
    free(rightMax);
    return water;
}

// Worst solution: Stack approach
typedef struct {
    int* data;
    int top;
    int capacity;
} Stack;

// Initialize stack
Stack* createStack(int capacity) {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->data = (int*)malloc(capacity * sizeof(int));
    stack->top = -1;
    stack->capacity = capacity;
    return stack;
}

// Push element to stack
void push(Stack* stack, int value) {
    if (stack->top < stack->capacity - 1) {
        stack->data[++stack->top] = value;
    }
}

// Pop element from stack
int pop(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top--];
    }
    return -1;
}

// Get top element
int top(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top];
    }
    return -1;
}

// Check if stack is empty
int isEmpty(Stack* stack) {
    return stack->top == -1;
}

// Free stack
void freeStack(Stack* stack) {
    free(stack->data);
    free(stack);
}

int trap_worst(int* height, int heightSize) {
    if (heightSize < 3) return 0;  // Need at least 3 bars to trap water
    
    Stack* stack = createStack(heightSize);
    int water = 0;
    
    for (int i = 0; i < heightSize; i++) {
        while (!isEmpty(stack) && height[i] > height[top(stack)]) {
            int topIndex = pop(stack);
            
            if (isEmpty(stack)) break;
            
            int distance = i - top(stack) - 1;
            int boundedHeight = (height[i] < height[top(stack)]) ? 
                               height[i] - height[topIndex] : 
                               height[top(stack)] - height[topIndex];
            
            water += distance * boundedHeight;
        }
        push(stack, i);
    }
    
    freeStack(stack);
    return water;
}

// Test function
void test_solution(const char* test_name, int (*func)(int*, int), int* height, int heightSize, int expected) {
    int result = func(height, heightSize);
    printf("%s: Expected %d, Got %d, %s\n", 
           test_name, expected, result, result == expected ? "PASS" : "FAIL");
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
    printf("=== Testing Trapping Rain Water ===\n\n");
    
    // Test case 1: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    printf("Test 1: height = [0,1,0,2,1,0,1,3,2,1,2,1]\n");
    int height1[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    int heightSize1 = 12;
    int expected1 = 6;
    
    test_solution("  Best (Two Pointers)", trap_best, height1, heightSize1, expected1);
    test_solution("  Average (Dynamic Programming)", trap_average, height1, heightSize1, expected1);
    test_solution("  Worst (Stack)", trap_worst, height1, heightSize1, expected1);
    printf("\n");
    
    // Test case 2: height = [4,2,0,3,2,5]
    printf("Test 2: height = [4,2,0,3,2,5]\n");
    int height2[] = {4, 2, 0, 3, 2, 5};
    int heightSize2 = 6;
    int expected2 = 9;
    
    test_solution("  Best (Two Pointers)", trap_best, height2, heightSize2, expected2);
    test_solution("  Average (Dynamic Programming)", trap_average, height2, heightSize2, expected2);
    test_solution("  Worst (Stack)", trap_worst, height2, heightSize2, expected2);
    printf("\n");
    
    // Test case 3: height = [2,0,2]
    printf("Test 3: height = [2,0,2]\n");
    int height3[] = {2, 0, 2};
    int heightSize3 = 3;
    int expected3 = 2;
    
    test_solution("  Best (Two Pointers)", trap_best, height3, heightSize3, expected3);
    test_solution("  Average (Dynamic Programming)", trap_average, height3, heightSize3, expected3);
    test_solution("  Worst (Stack)", trap_worst, height3, heightSize3, expected3);
    printf("\n");
    
    // Test case 4: height = [1,0,1]
    printf("Test 4: height = [1,0,1]\n");
    int height4[] = {1, 0, 1};
    int heightSize4 = 3;
    int expected4 = 1;
    
    test_solution("  Best (Two Pointers)", trap_best, height4, heightSize4, expected4);
    test_solution("  Average (Dynamic Programming)", trap_average, height4, heightSize4, expected4);
    test_solution("  Worst (Stack)", trap_worst, height4, heightSize4, expected4);
    printf("\n");
    
    // Test case 5: height = [3,0,0,2,0,4]
    printf("Test 5: height = [3,0,0,2,0,4]\n");
    int height5[] = {3, 0, 0, 2, 0, 4};
    int heightSize5 = 6;
    int expected5 = 10;
    
    test_solution("  Best (Two Pointers)", trap_best, height5, heightSize5, expected5);
    test_solution("  Average (Dynamic Programming)", trap_average, height5, heightSize5, expected5);
    test_solution("  Worst (Stack)", trap_worst, height5, heightSize5, expected5);
    printf("\n");
    
    // Test case 6: height = [0,1,2,3,4,5]
    printf("Test 6: height = [0,1,2,3,4,5]\n");
    int height6[] = {0, 1, 2, 3, 4, 5};
    int heightSize6 = 6;
    int expected6 = 0;
    
    test_solution("  Best (Two Pointers)", trap_best, height6, heightSize6, expected6);
    test_solution("  Average (Dynamic Programming)", trap_average, height6, heightSize6, expected6);
    test_solution("  Worst (Stack)", trap_worst, height6, heightSize6, expected6);
    printf("\n");
    
    // Test case 7: height = [5,4,3,2,1,0]
    printf("Test 7: height = [5,4,3,2,1,0]\n");
    int height7[] = {5, 4, 3, 2, 1, 0};
    int heightSize7 = 6;
    int expected7 = 0;
    
    test_solution("  Best (Two Pointers)", trap_best, height7, heightSize7, expected7);
    test_solution("  Average (Dynamic Programming)", trap_average, height7, heightSize7, expected7);
    test_solution("  Worst (Stack)", trap_worst, height7, heightSize7, expected7);
    printf("\n");
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same trapped water amount.\n");
    printf("- Best: Two Pointers - O(n) time, O(1) space\n");
    printf("- Average: Dynamic Programming - O(n) time, O(n) space\n");
    printf("- Worst: Stack - O(n) time, O(n) space\n");
    
    return 0;
}
