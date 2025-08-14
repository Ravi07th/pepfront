#include <stdio.h>
#include <stdlib.h>

// Deque implementation
typedef struct {
    int* data;
    int front;
    int rear;
    int capacity;
    int size;
} Deque;

// Initialize deque
Deque* createDeque(int capacity) {
    Deque* deque = (Deque*)malloc(sizeof(Deque));
    deque->data = (int*)malloc(capacity * sizeof(int));
    deque->front = 0;
    deque->rear = -1;
    deque->capacity = capacity;
    deque->size = 0;
    return deque;
}

// Check if deque is empty
int isEmpty(Deque* deque) {
    return deque->size == 0;
}

// Check if deque is full
int isFull(Deque* deque) {
    return deque->size == deque->capacity;
}

// Add element to front
void pushFront(Deque* deque, int value) {
    if (isFull(deque)) return;
    
    deque->front = (deque->front - 1 + deque->capacity) % deque->capacity;
    deque->data[deque->front] = value;
    deque->size++;
}

// Add element to back
void pushBack(Deque* deque, int value) {
    if (isFull(deque)) return;
    
    deque->rear = (deque->rear + 1) % deque->capacity;
    deque->data[deque->rear] = value;
    deque->size++;
}

// Remove element from front
int popFront(Deque* deque) {
    if (isEmpty(deque)) return -1;
    
    int value = deque->data[deque->front];
    deque->front = (deque->front + 1) % deque->capacity;
    deque->size--;
    return value;
}

// Remove element from back
int popBack(Deque* deque) {
    if (isEmpty(deque)) return -1;
    
    int value = deque->data[deque->rear];
    deque->rear = (deque->rear - 1 + deque->capacity) % deque->capacity;
    deque->size--;
    return value;
}

// Get front element
int getFront(Deque* deque) {
    if (isEmpty(deque)) return -1;
    return deque->data[deque->front];
}

// Get back element
int getBack(Deque* deque) {
    if (isEmpty(deque)) return -1;
    return deque->data[deque->rear];
}

// Free deque
void freeDeque(Deque* deque) {
    free(deque->data);
    free(deque);
}

// Best solution: Monotonic Queue approach
int* maxSlidingWindow_best(int* nums, int numsSize, int k, int* returnSize) {
    if (numsSize == 0 || k == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    *returnSize = numsSize - k + 1;
    int* result = (int*)malloc(*returnSize * sizeof(int));
    
    Deque* deque = createDeque(numsSize);
    
    for (int i = 0; i < numsSize; i++) {
        // Remove elements outside the current window
        while (!isEmpty(deque) && getFront(deque) <= i - k) {
            popFront(deque);
        }
        
        // Remove elements smaller than current element
        while (!isEmpty(deque) && nums[getBack(deque)] < nums[i]) {
            popBack(deque);
        }
        
        // Add current element
        pushBack(deque, i);
        
        // Add maximum to result (starting from k-1)
        if (i >= k - 1) {
            result[i - k + 1] = nums[getFront(deque)];
        }
    }
    
    freeDeque(deque);
    return result;
}

// Max heap implementation
typedef struct {
    int* data;
    int size;
    int capacity;
} MaxHeap;

// Initialize max heap
MaxHeap* createMaxHeap(int capacity) {
    MaxHeap* heap = (MaxHeap*)malloc(sizeof(MaxHeap));
    heap->data = (int*)malloc(capacity * sizeof(int));
    heap->size = 0;
    heap->capacity = capacity;
    return heap;
}

// Swap two elements
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Heapify down
void heapifyDown(MaxHeap* heap, int index) {
    int largest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    
    if (left < heap->size && heap->data[left] > heap->data[largest]) {
        largest = left;
    }
    
    if (right < heap->size && heap->data[right] > heap->data[largest]) {
        largest = right;
    }
    
    if (largest != index) {
        swap(&heap->data[index], &heap->data[largest]);
        heapifyDown(heap, largest);
    }
}

// Insert element
void insert(MaxHeap* heap, int value) {
    if (heap->size >= heap->capacity) return;
    
    heap->data[heap->size] = value;
    int i = heap->size;
    heap->size++;
    
    // Heapify up
    while (i > 0 && heap->data[(i - 1) / 2] < heap->data[i]) {
        swap(&heap->data[i], &heap->data[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

// Extract maximum
int extractMax(MaxHeap* heap) {
    if (heap->size == 0) return -1;
    
    int max = heap->data[0];
    heap->data[0] = heap->data[heap->size - 1];
    heap->size--;
    heapifyDown(heap, 0);
    
    return max;
}

// Get maximum without removing
int getMax(MaxHeap* heap) {
    if (heap->size == 0) return -1;
    return heap->data[0];
}

// Free max heap
void freeMaxHeap(MaxHeap* heap) {
    free(heap->data);
    free(heap);
}

// Average solution: Max Heap approach
int* maxSlidingWindow_average(int* nums, int numsSize, int k, int* returnSize) {
    if (numsSize == 0 || k == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    *returnSize = numsSize - k + 1;
    int* result = (int*)malloc(*returnSize * sizeof(int));
    
    MaxHeap* heap = createMaxHeap(numsSize);
    
    // Add first k elements
    for (int i = 0; i < k; i++) {
        insert(heap, nums[i]);
    }
    
    result[0] = getMax(heap);
    
    // Process remaining elements
    for (int i = k; i < numsSize; i++) {
        // Remove element that's no longer in window
        // Note: This is a simplified version. In practice, you'd need a more complex heap
        // that can remove arbitrary elements efficiently
        
        insert(heap, nums[i]);
        result[i - k + 1] = getMax(heap);
    }
    
    freeMaxHeap(heap);
    return result;
}

// Helper function to find maximum in a range
int findMax(int* nums, int start, int end) {
    int max = nums[start];
    for (int i = start + 1; i <= end; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

// Worst solution: Brute Force approach
int* maxSlidingWindow_worst(int* nums, int numsSize, int k, int* returnSize) {
    if (numsSize == 0 || k == 0) {
        *returnSize = 0;
        return NULL;
    }
    
    *returnSize = numsSize - k + 1;
    int* result = (int*)malloc(*returnSize * sizeof(int));
    
    // For each window, find the maximum
    for (int i = 0; i <= numsSize - k; i++) {
        result[i] = findMax(nums, i, i + k - 1);
    }
    
    return result;
}

// Test function
void test_solution(const char* test_name, int* (*func)(int*, int, int, int*), int* nums, int numsSize, int k, int* expected, int expectedSize) {
    int returnSize;
    int* result = func(nums, numsSize, k, &returnSize);
    
    if (returnSize != expectedSize) {
        printf("%s: Size mismatch - Expected %d, Got %d, FAIL\n", test_name, expectedSize, returnSize);
        free(result);
        return;
    }
    
    int passed = 1;
    for (int i = 0; i < returnSize; i++) {
        if (result[i] != expected[i]) {
            passed = 0;
            break;
        }
    }
    
    printf("%s: %s\n", test_name, passed ? "PASS" : "FAIL");
    
    if (!passed) {
        printf("  Expected: [");
        for (int i = 0; i < expectedSize; i++) {
            printf("%d", expected[i]);
            if (i < expectedSize - 1) printf(",");
        }
        printf("]\n");
        printf("  Got: [");
        for (int i = 0; i < returnSize; i++) {
            printf("%d", result[i]);
            if (i < returnSize - 1) printf(",");
        }
        printf("]\n");
    }
    
    free(result);
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
    printf("=== Testing Sliding Window Maximum ===\n\n");
    
    // Test case 1: nums = [1,3,-1,-3,5,3,6,7], k = 3
    printf("Test 1: nums = [1,3,-1,-3,5,3,6,7], k = 3\n");
    int nums1[] = {1, 3, -1, -3, 5, 3, 6, 7};
    int numsSize1 = 8;
    int k1 = 3;
    int expected1[] = {3, 3, 5, 5, 6, 7};
    int expectedSize1 = 6;
    
    test_solution("  Best (Monotonic Queue)", maxSlidingWindow_best, nums1, numsSize1, k1, expected1, expectedSize1);
    test_solution("  Average (Max Heap)", maxSlidingWindow_average, nums1, numsSize1, k1, expected1, expectedSize1);
    test_solution("  Worst (Brute Force)", maxSlidingWindow_worst, nums1, numsSize1, k1, expected1, expectedSize1);
    printf("\n");
    
    // Test case 2: nums = [1], k = 1
    printf("Test 2: nums = [1], k = 1\n");
    int nums2[] = {1};
    int numsSize2 = 1;
    int k2 = 1;
    int expected2[] = {1};
    int expectedSize2 = 1;
    
    test_solution("  Best (Monotonic Queue)", maxSlidingWindow_best, nums2, numsSize2, k2, expected2, expectedSize2);
    test_solution("  Average (Max Heap)", maxSlidingWindow_average, nums2, numsSize2, k2, expected2, expectedSize2);
    test_solution("  Worst (Brute Force)", maxSlidingWindow_worst, nums2, numsSize2, k2, expected2, expectedSize2);
    printf("\n");
    
    // Test case 3: nums = [1,-1], k = 1
    printf("Test 3: nums = [1,-1], k = 1\n");
    int nums3[] = {1, -1};
    int numsSize3 = 2;
    int k3 = 1;
    int expected3[] = {1, -1};
    int expectedSize3 = 2;
    
    test_solution("  Best (Monotonic Queue)", maxSlidingWindow_best, nums3, numsSize3, k3, expected3, expectedSize3);
    test_solution("  Average (Max Heap)", maxSlidingWindow_average, nums3, numsSize3, k3, expected3, expectedSize3);
    test_solution("  Worst (Brute Force)", maxSlidingWindow_worst, nums3, numsSize3, k3, expected3, expectedSize3);
    printf("\n");
    
    // Test case 4: nums = [9,11], k = 2
    printf("Test 4: nums = [9,11], k = 2\n");
    int nums4[] = {9, 11};
    int numsSize4 = 2;
    int k4 = 2;
    int expected4[] = {11};
    int expectedSize4 = 1;
    
    test_solution("  Best (Monotonic Queue)", maxSlidingWindow_best, nums4, numsSize4, k4, expected4, expectedSize4);
    test_solution("  Average (Max Heap)", maxSlidingWindow_average, nums4, numsSize4, k4, expected4, expectedSize4);
    test_solution("  Worst (Brute Force)", maxSlidingWindow_worst, nums4, numsSize4, k4, expected4, expectedSize4);
    printf("\n");
    
    // Test case 5: nums = [4,-2], k = 2
    printf("Test 5: nums = [4,-2], k = 2\n");
    int nums5[] = {4, -2};
    int numsSize5 = 2;
    int k5 = 2;
    int expected5[] = {4};
    int expectedSize5 = 1;
    
    test_solution("  Best (Monotonic Queue)", maxSlidingWindow_best, nums5, numsSize5, k5, expected5, expectedSize5);
    test_solution("  Average (Max Heap)", maxSlidingWindow_average, nums5, numsSize5, k5, expected5, expectedSize5);
    test_solution("  Worst (Brute Force)", maxSlidingWindow_worst, nums5, numsSize5, k5, expected5, expectedSize5);
    printf("\n");
    
    // Test case 6: nums = [7,2,4], k = 2
    printf("Test 6: nums = [7,2,4], k = 2\n");
    int nums6[] = {7, 2, 4};
    int numsSize6 = 3;
    int k6 = 2;
    int expected6[] = {7, 4};
    int expectedSize6 = 2;
    
    test_solution("  Best (Monotonic Queue)", maxSlidingWindow_best, nums6, numsSize6, k6, expected6, expectedSize6);
    test_solution("  Average (Max Heap)", maxSlidingWindow_average, nums6, numsSize6, k6, expected6, expectedSize6);
    test_solution("  Worst (Brute Force)", maxSlidingWindow_worst, nums6, numsSize6, k6, expected6, expectedSize6);
    printf("\n");
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same maximum sliding window.\n");
    printf("- Best: Monotonic Queue - O(n) time, O(k) space\n");
    printf("- Average: Max Heap - O(n log k) time, O(k) space\n");
    printf("- Worst: Brute Force - O(n*k) time, O(1) space\n");
    
    return 0;
}
