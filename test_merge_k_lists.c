#include <stdio.h>
#include <stdlib.h>

// Linked list node structure
typedef struct ListNode {
    int val;
    struct ListNode* next;
} ListNode;

// Function to create a new node
ListNode* createNode(int val) {
    ListNode* newNode = (ListNode*)malloc(sizeof(ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

// Function to merge two sorted lists
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy;
    ListNode* tail = &dummy;
    dummy.next = NULL;
    
    while (l1 && l2) {
        if (l1->val <= l2->val) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    
    // Attach remaining elements
    if (l1) tail->next = l1;
    if (l2) tail->next = l2;
    
    return dummy.next;
}

// Best solution: Divide and Conquer
ListNode* mergeKLists_best(ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    if (listsSize == 1) return lists[0];
    
    // Merge lists two at a time
    int interval = 1;
    while (interval < listsSize) {
        for (int i = 0; i < listsSize - interval; i += 2 * interval) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }
    
    return lists[0];
}

// Average solution: Min Heap
typedef struct {
    int val;
    int listIndex;
} HeapNode;

typedef struct {
    HeapNode* heap;
    int size;
    int capacity;
} MinHeap;

void swap(HeapNode* a, HeapNode* b) {
    HeapNode temp = *a;
    *a = *b;
    *b = temp;
}

void heapifyDown(MinHeap* heap, int index) {
    int smallest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    
    if (left < heap->size && heap->heap[left].val < heap->heap[smallest].val) {
        smallest = left;
    }
    
    if (right < heap->size && heap->heap[right].val < heap->heap[smallest].val) {
        smallest = right;
    }
    
    if (smallest != index) {
        swap(&heap->heap[index], &heap->heap[smallest]);
        heapifyDown(heap, smallest);
    }
}

void insertHeap(MinHeap* heap, int val, int listIndex) {
    if (heap->size >= heap->capacity) return;
    
    heap->heap[heap->size].val = val;
    heap->heap[heap->size].listIndex = listIndex;
    heap->size++;
    
    // Heapify up
    int i = heap->size - 1;
    while (i > 0 && heap->heap[(i - 1) / 2].val > heap->heap[i].val) {
        swap(&heap->heap[(i - 1) / 2], &heap->heap[i]);
        i = (i - 1) / 2;
    }
}

HeapNode extractMin(MinHeap* heap) {
    HeapNode min = heap->heap[0];
    heap->heap[0] = heap->heap[heap->size - 1];
    heap->size--;
    heapifyDown(heap, 0);
    return min;
}

ListNode* mergeKLists_average(ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    
    // Create min heap
    MinHeap heap;
    heap.capacity = listsSize;
    heap.size = 0;
    heap.heap = (HeapNode*)malloc(listsSize * sizeof(HeapNode));
    
    // Insert first element from each list
    for (int i = 0; i < listsSize; i++) {
        if (lists[i]) {
            insertHeap(&heap, lists[i]->val, i);
        }
    }
    
    ListNode dummy;
    ListNode* tail = &dummy;
    dummy.next = NULL;
    
    while (heap.size > 0) {
        HeapNode min = extractMin(&heap);
        
        // Add to result
        tail->next = createNode(min.val);
        tail = tail->next;
        
        // Move to next element in the same list
        lists[min.listIndex] = lists[min.listIndex]->next;
        if (lists[min.listIndex]) {
            insertHeap(&heap, lists[min.listIndex]->val, min.listIndex);
        }
    }
    
    free(heap.heap);
    return dummy.next;
}

// Worst solution: Brute Force
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

ListNode* mergeKLists_worst(ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    
    // Count total elements
    int totalElements = 0;
    for (int i = 0; i < listsSize; i++) {
        ListNode* current = lists[i];
        while (current) {
            totalElements++;
            current = current->next;
        }
    }
    
    if (totalElements == 0) return NULL;
    
    // Collect all elements
    int* allElements = (int*)malloc(totalElements * sizeof(int));
    int index = 0;
    
    for (int i = 0; i < listsSize; i++) {
        ListNode* current = lists[i];
        while (current) {
            allElements[index++] = current->val;
            current = current->next;
        }
    }
    
    // Sort all elements
    qsort(allElements, totalElements, sizeof(int), compare);
    
    // Create new linked list
    ListNode* head = createNode(allElements[0]);
    ListNode* current = head;
    
    for (int i = 1; i < totalElements; i++) {
        current->next = createNode(allElements[i]);
        current = current->next;
    }
    
    free(allElements);
    return head;
}

// Function to create a linked list from array
ListNode* createList(int* arr, int size) {
    if (size == 0) return NULL;
    
    ListNode* head = createNode(arr[0]);
    ListNode* current = head;
    
    for (int i = 1; i < size; i++) {
        current->next = createNode(arr[i]);
        current = current->next;
    }
    
    return head;
}

// Function to print linked list
void printList(ListNode* head) {
    printf("[");
    ListNode* current = head;
    while (current) {
        printf("%d", current->val);
        if (current->next) printf(",");
        current = current->next;
    }
    printf("]");
}

// Function to free linked list
void freeList(ListNode* head) {
    while (head) {
        ListNode* temp = head;
        head = head->next;
        free(temp);
    }
}

// Test function
void test_solution(const char* test_name, ListNode* (*func)(ListNode**, int), ListNode** lists, int listsSize, int* expected, int expectedSize) {
    // Create a copy of lists for testing
    ListNode** lists_copy = (ListNode**)malloc(listsSize * sizeof(ListNode*));
    for (int i = 0; i < listsSize; i++) {
        // Create a copy of each list
        ListNode* current = lists[i];
        ListNode* copy_head = NULL;
        ListNode* copy_tail = NULL;
        
        while (current) {
            ListNode* newNode = createNode(current->val);
            if (!copy_head) {
                copy_head = newNode;
                copy_tail = newNode;
            } else {
                copy_tail->next = newNode;
                copy_tail = newNode;
            }
            current = current->next;
        }
        lists_copy[i] = copy_head;
    }
    
    ListNode* result = func(lists_copy, listsSize);
    
    printf("%s: ", test_name);
    printList(result);
    printf("\n");
    
    // Free memory
    freeList(result);
    for (int i = 0; i < listsSize; i++) {
        freeList(lists_copy[i]);
    }
    free(lists_copy);
}

int main() {
    printf("=== Testing Merge k Sorted Lists ===\n\n");
    
    // Test case 1: [[1,4,5],[1,3,4],[2,6]]
    printf("Test 1: [[1,4,5],[1,3,4],[2,6]]\n");
    int arr1[] = {1, 4, 5};
    int arr2[] = {1, 3, 4};
    int arr3[] = {2, 6};
    int expected1[] = {1, 1, 2, 3, 4, 4, 5, 6};
    
    ListNode* lists1[3];
    lists1[0] = createList(arr1, 3);
    lists1[1] = createList(arr2, 3);
    lists1[2] = createList(arr3, 2);
    
    test_solution("  Best (Divide & Conquer)", mergeKLists_best, lists1, 3, expected1, 8);
    test_solution("  Average (Min Heap)", mergeKLists_average, lists1, 3, expected1, 8);
    test_solution("  Worst (Brute Force)", mergeKLists_worst, lists1, 3, expected1, 8);
    
    // Free original lists
    for (int i = 0; i < 3; i++) {
        freeList(lists1[i]);
    }
    printf("\n");
    
    // Test case 2: [[1,2,3],[4,5,6],[7,8,9]]
    printf("Test 2: [[1,2,3],[4,5,6],[7,8,9]]\n");
    int arr4[] = {1, 2, 3};
    int arr5[] = {4, 5, 6};
    int arr6[] = {7, 8, 9};
    int expected2[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    
    ListNode* lists2[3];
    lists2[0] = createList(arr4, 3);
    lists2[1] = createList(arr5, 3);
    lists2[2] = createList(arr6, 3);
    
    test_solution("  Best (Divide & Conquer)", mergeKLists_best, lists2, 3, expected2, 9);
    test_solution("  Average (Min Heap)", mergeKLists_average, lists2, 3, expected2, 9);
    test_solution("  Worst (Brute Force)", mergeKLists_worst, lists2, 3, expected2, 9);
    
    // Free original lists
    for (int i = 0; i < 3; i++) {
        freeList(lists2[i]);
    }
    printf("\n");
    
    // Test case 3: Empty lists
    printf("Test 3: []\n");
    ListNode* lists3[0];
    test_solution("  Best (Divide & Conquer)", mergeKLists_best, lists3, 0, NULL, 0);
    test_solution("  Average (Min Heap)", mergeKLists_average, lists3, 0, NULL, 0);
    test_solution("  Worst (Brute Force)", mergeKLists_worst, lists3, 0, NULL, 0);
    printf("\n");
    
    // Test case 4: Single list
    printf("Test 4: [[1,2,3]]\n");
    int arr7[] = {1, 2, 3};
    int expected4[] = {1, 2, 3};
    
    ListNode* lists4[1];
    lists4[0] = createList(arr7, 3);
    
    test_solution("  Best (Divide & Conquer)", mergeKLists_best, lists4, 1, expected4, 3);
    test_solution("  Average (Min Heap)", mergeKLists_average, lists4, 1, expected4, 3);
    test_solution("  Worst (Brute Force)", mergeKLists_worst, lists4, 1, expected4, 3);
    
    // Free original lists
    freeList(lists4[0]);
    printf("\n");
    
    printf("=== Test Summary ===\n");
    printf("All three solutions should produce the same merged sorted list.\n");
    printf("- Best: Divide and Conquer - O(n log k) time, O(1) space\n");
    printf("- Average: Min Heap - O(n log k) time, O(k) space\n");
    printf("- Worst: Brute Force - O(n log n) time, O(n) space\n");
    
    return 0;
}
