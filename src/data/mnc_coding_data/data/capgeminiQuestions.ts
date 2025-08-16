// Capgemini Coding Questions
// This file contains coding questions specifically for Capgemini interviews

export interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string[];
  input1: string;
  input2: string;
  explanation: string;
  output1: string;
  output2: string;
  constraints: string;
  isCompleted?: boolean;
  timeEstimate?: string;
  successRate?: number;
  lastAttempted?: string;
  solutions?: {
    [languageId: string]: {
      [approachId: string]: {
        code: string;
        explanation: string;
        timeComplexity: string;
        spaceComplexity: string;
      };
    };
  };
}

export const allCapgeminiQuestions: Question[] = [
  {
    id: 'remove-linked-list-elements',
    title: 'Remove Linked List Elements',
    description: `Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

The linked list is defined as:
- Each node contains a value and a reference to the next node
- The head is the first node of the linked list`,
    difficulty: 'Easy',
    category: ['Linked List', 'Recursion'],
    input1: 'head = [1,2,6,3,4,5,6], val = 6',
    input2: 'head = [], val = 1',
    explanation: `## Problem Statement

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

The linked list is defined as:
- Each node contains a value and a reference to the next node
- The head is the first node of the linked list

## Examples

### Example 1:
**Input:** head = [1,2,6,3,4,5,6], val = 6  
**Output:** [1,2,3,4,5]  
**Explanation:** Remove all nodes with value 6.

### Example 2:
**Input:** head = [], val = 1  
**Output:** []  
**Explanation:** Empty list remains empty.

### Example 3:
**Input:** head = [7,7,7,7], val = 7  
**Output:** []  
**Explanation:** Remove all nodes with value 7.

## Intuition

We need to traverse the linked list and remove all nodes that have the target value. We can use a dummy node to handle the case where the head node needs to be removed.

## Approach

### Approach 1: Dummy Node (Optimal)
1. Create a dummy node pointing to head
2. Use a pointer to traverse the list
3. When current node's next has target value, skip it
4. Return dummy.next as new head

### Approach 2: Recursion
1. Base case: if head is null, return null
2. If head.val == val, return removeElements(head.next, val)
3. Otherwise, head.next = removeElements(head.next, val)
4. Return head

### Approach 3: Iterative without Dummy
1. Handle head removal separately
2. Use two pointers: prev and current
3. When current.val == val, update prev.next
4. Update pointers accordingly

## Dry Run

Let's trace through Example 1: head = [1,2,6,3,4,5,6], val = 6

### Dummy Node Approach:
- Create dummy → [1,2,6,3,4,5,6]
- curr = dummy
- curr.next = 1, 1 != 6 → move curr
- curr.next = 2, 2 != 6 → move curr
- curr.next = 6, 6 == 6 → curr.next = curr.next.next
- curr.next = 3, 3 != 6 → move curr
- curr.next = 4, 4 != 6 → move curr
- curr.next = 5, 5 != 6 → move curr
- curr.next = 6, 6 == 6 → curr.next = curr.next.next
- curr.next = null
- Return dummy.next = [1,2,3,4,5]

## Key Insights

1. **Dummy Node**: Simplifies handling head removal
2. **Two Pointers**: Use prev and curr for efficient removal
3. **Memory Management**: Update pointers to avoid memory leaks
4. **Edge Cases**: Handle empty list and all nodes being removed

## Edge Cases

1. **Empty list**: Return null
2. **Head removal**: First node has target value
3. **All nodes removed**: Return empty list
4. **Consecutive removals**: Multiple target values in a row
5. **Last node removal**: Target value at end

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through list
- **Space Complexity**: O(1) - Only constant extra space used`,
    output1: '[1,2,3,4,5]',
    output2: '[]',
    constraints: `## Constraints
- The number of nodes in the list is in the range [0, 10⁴].
- 1 <= Node.val <= 50
- 0 <= val <= 50`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* removeElements(struct ListNode* head, int val) {
    // Create dummy node
    struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
    dummy->next = head;
    dummy->val = 0; // Dummy value
    
    struct ListNode* curr = dummy;
    
    while (curr->next != NULL) {
        if (curr->next->val == val) {
            // Remove the node
            struct ListNode* temp = curr->next;
            curr->next = curr->next->next;
            free(temp);
        } else {
            curr = curr->next;
        }
    }
    
    struct ListNode* result = dummy->next;
    free(dummy);
    return result;
}

// Helper function to create a linked list
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* curr = head;
    for (int i = 1; i < size; i++) {
        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        curr = curr->next;
        curr->val = arr[i];
        curr->next = NULL;
    }
    
    return head;
}

// Helper function to print linked list
void printList(struct ListNode* head) {
    printf("[");
    struct ListNode* curr = head;
    while (curr != NULL) {
        printf("%d", curr->val);
        if (curr->next != NULL) printf(",");
        curr = curr->next;
    }
    printf("]");
}

int main() {
    int arr1[] = {1,2,6,3,4,5,6};
    int arr2[] = {};
    
    struct ListNode* head1 = createList(arr1, 7);
    struct ListNode* head2 = createList(arr2, 0);
    
    printf("Input: head = ");
    printList(head1);
    printf(", val = 6\\n");
    
    struct ListNode* result1 = removeElements(head1, 6);
    printf("Output: ");
    printList(result1);
    printf("\\n");
    
    printf("\\nInput: head = ");
    printList(head2);
    printf(", val = 1\\n");
    
    struct ListNode* result2 = removeElements(head2, 1);
    printf("Output: ");
    printList(result2);
    printf("\\n");
    
    printf("\\nDummy Node Approach:\\n");
    printf("Use dummy node to handle head removal\\n");
    printf("Traverse and remove nodes with target value\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using a dummy node. It simplifies handling head removal and efficiently removes all nodes with the target value.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* removeElements(struct ListNode* head, int val) {
    // Handle empty list
    if (head == NULL) return NULL;
    
    // Handle head removal
    while (head != NULL && head->val == val) {
        struct ListNode* temp = head;
        head = head->next;
        free(temp);
    }
    
    // Handle rest of the list
    struct ListNode* curr = head;
    while (curr != NULL && curr->next != NULL) {
        if (curr->next->val == val) {
            struct ListNode* temp = curr->next;
            curr->next = curr->next->next;
            free(temp);
        } else {
            curr = curr->next;
        }
    }
    
    return head;
}

// Helper function to create a linked list
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* curr = head;
    for (int i = 1; i < size; i++) {
        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        curr = curr->next;
        curr->val = arr[i];
        curr->next = NULL;
    }
    
    return head;
}

// Helper function to print linked list
void printList(struct ListNode* head) {
    printf("[");
    struct ListNode* curr = head;
    while (curr != NULL) {
        printf("%d", curr->val);
        if (curr->next != NULL) printf(",");
        curr = curr->next;
    }
    printf("]");
}

int main() {
    int arr1[] = {1,2,6,3,4,5,6};
    int arr2[] = {};
    
    struct ListNode* head1 = createList(arr1, 7);
    struct ListNode* head2 = createList(arr2, 0);
    
    printf("Input: head = ");
    printList(head1);
    printf(", val = 6\\n");
    
    struct ListNode* result1 = removeElements(head1, 6);
    printf("Output: ");
    printList(result1);
    printf("\\n");
    
    printf("\\nInput: head = ");
    printList(head2);
    printf(", val = 1\\n");
    
    struct ListNode* result2 = removeElements(head2, 1);
    printf("Output: ");
    printList(result2);
    printf("\\n");
    
    printf("\\nIterative Approach:\\n");
    printf("Handle head removal separately\\n");
    printf("Use two pointers for efficient removal\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This approach handles head removal separately and then uses two pointers to remove nodes with the target value. It is efficient but requires special handling for the head.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* removeElements(struct ListNode* head, int val) {
    // Base case: empty list
    if (head == NULL) return NULL;
    
    // Recursive case: remove from rest of list
    head->next = removeElements(head->next, val);
    
    // If current node has target value, remove it
    if (head->val == val) {
        struct ListNode* temp = head->next;
        free(head);
        return temp;
    }
    
    return head;
}

// Helper function to create a linked list
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* curr = head;
    for (int i = 1; i < size; i++) {
        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        curr = curr->next;
        curr->val = arr[i];
        curr->next = NULL;
    }
    
    return head;
}

// Helper function to print linked list
void printList(struct ListNode* head) {
    printf("[");
    struct ListNode* curr = head;
    while (curr != NULL) {
        printf("%d", curr->val);
        if (curr->next != NULL) printf(",");
        curr = curr->next;
    }
    printf("]");
}

int main() {
    int arr1[] = {1,2,6,3,4,5,6};
    int arr2[] = {};
    
    struct ListNode* head1 = createList(arr1, 7);
    struct ListNode* head2 = createList(arr2, 0);
    
    printf("Input: head = ");
    printList(head1);
    printf(", val = 6\\n");
    
    struct ListNode* result1 = removeElements(head1, 6);
    printf("Output: ");
    printList(result1);
    printf("\\n");
    
    printf("\\nInput: head = ");
    printList(head2);
    printf(", val = 1\\n");
    
    struct ListNode* result2 = removeElements(head2, 1);
    printf("Output: ");
    printList(result2);
    printf("\\n");
    
    printf("\\nRecursive Approach:\\n");
    printf("Use recursion to handle list removal\\n");
    printf("Base case: empty list, recursive case: process rest\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses recursion to remove elements. It is conceptually clear but uses stack space proportional to the list length.'
        }
      }
    }
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    description: `Given the head of a singly linked list, reverse the list, and return the reversed list.

The linked list is defined as:
- Each node contains a value and a reference to the next node
- The head is the first node of the linked list`,
    difficulty: 'Easy',
    category: ['Linked List', 'Recursion'],
    input1: 'head = [1,2,3,4,5]',
    input2: 'head = [1,2]',
    explanation: `## Problem Statement

Given the head of a singly linked list, reverse the list, and return the reversed list.

The linked list is defined as:
- Each node contains a value and a reference to the next node
- The head is the first node of the linked list

## Examples

### Example 1:
**Input:** head = [1,2,3,4,5]  
**Output:** [5,4,3,2,1]  
**Explanation:** The list is reversed completely.

### Example 2:
**Input:** head = [1,2]  
**Output:** [2,1]  
**Explanation:** The list is reversed.

### Example 3:
**Input:** head = []  
**Output:** []  
**Explanation:** Empty list remains empty.

## Intuition

We can reverse the linked list by changing the direction of all the next pointers. We need to keep track of the previous, current, and next nodes during the reversal process.

## Approach

### Approach 1: Iterative (Optimal)
1. Initialize prev = NULL, curr = head
2. While curr is not NULL:
   - Store next node: next = curr->next
   - Reverse link: curr->next = prev
   - Move pointers: prev = curr, curr = next
3. Return prev as new head

### Approach 2: Recursive
1. Base case: if head is NULL or head->next is NULL, return head
2. Recursive call: newHead = reverseList(head->next)
3. Reverse link: head->next->next = head
4. Set head->next = NULL
5. Return newHead

### Approach 3: Stack
1. Push all nodes onto a stack
2. Pop nodes to create reversed list
3. Update pointers accordingly

## Dry Run

Let's trace through Example 1: head = [1,2,3,4,5]

### Iterative Approach:
- prev = NULL, curr = 1
- next = 2, curr->next = NULL, prev = 1, curr = 2
- next = 3, curr->next = 1, prev = 2, curr = 3
- next = 4, curr->next = 2, prev = 3, curr = 4
- next = 5, curr->next = 3, prev = 4, curr = 5
- next = NULL, curr->next = 4, prev = 5, curr = NULL
- Return prev = 5 → [5,4,3,2,1]

## Key Insights

1. **Three Pointers**: Need prev, curr, and next for reversal
2. **Link Reversal**: curr->next = prev changes direction
3. **Pointer Movement**: Move prev and curr forward
4. **New Head**: prev becomes the new head

## Edge Cases

1. **Empty list**: Return NULL
2. **Single node**: Return the same node
3. **Two nodes**: Simple reversal
4. **Long list**: Handle multiple reversals

## Time and Space Complexity

- **Time Complexity**: O(n) - Single pass through list
- **Space Complexity**: O(1) - Only constant extra space used`,
    output1: '[5,4,3,2,1]',
    output2: '[2,1]',
    constraints: `## Constraints
- The number of nodes in the list is in the range [0, 5000].
- -5000 <= Node.val <= 5000`,
    solutions: {
      c: {
        best: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* curr = head;
    
    while (curr != NULL) {
        struct ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}

// Helper function to create a linked list
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* curr = head;
    for (int i = 1; i < size; i++) {
        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        curr = curr->next;
        curr->val = arr[i];
        curr->next = NULL;
    }
    
    return head;
}

// Helper function to print linked list
void printList(struct ListNode* head) {
    printf("[");
    struct ListNode* curr = head;
    while (curr != NULL) {
        printf("%d", curr->val);
        if (curr->next != NULL) printf(",");
        curr = curr->next;
    }
    printf("]");
}

int main() {
    int arr1[] = {1,2,3,4,5};
    int arr2[] = {1,2};
    
    struct ListNode* head1 = createList(arr1, 5);
    struct ListNode* head2 = createList(arr2, 2);
    
    printf("Input: head = ");
    printList(head1);
    printf("\\n");
    
    struct ListNode* result1 = reverseList(head1);
    printf("Output: ");
    printList(result1);
    printf("\\n");
    
    printf("\\nInput: head = ");
    printList(head2);
    printf("\\n");
    
    struct ListNode* result2 = reverseList(head2);
    printf("Output: ");
    printList(result2);
    printf("\\n");
    
    printf("\\nIterative Approach:\\n");
    printf("Use three pointers: prev, curr, next\\n");
    printf("Reverse links and move pointers forward\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          explanation: 'This is the optimal solution using iteration. It uses three pointers to efficiently reverse the linked list in constant space.'
        },
        average: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* reverseList(struct ListNode* head) {
    // Base case: empty list or single node
    if (head == NULL || head->next == NULL) {
        return head;
    }
    
    // Recursive call to reverse rest of list
    struct ListNode* newHead = reverseList(head->next);
    
    // Reverse the link
    head->next->next = head;
    head->next = NULL;
    
    return newHead;
}

// Helper function to create a linked list
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* curr = head;
    for (int i = 1; i < size; i++) {
        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        curr = curr->next;
        curr->val = arr[i];
        curr->next = NULL;
    }
    
    return head;
}

// Helper function to print linked list
void printList(struct ListNode* head) {
    printf("[");
    struct ListNode* curr = head;
    while (curr != NULL) {
        printf("%d", curr->val);
        if (curr->next != NULL) printf(",");
        curr = curr->next;
    }
    printf("]");
}

int main() {
    int arr1[] = {1,2,3,4,5};
    int arr2[] = {1,2};
    
    struct ListNode* head1 = createList(arr1, 5);
    struct ListNode* head2 = createList(arr2, 2);
    
    printf("Input: head = ");
    printList(head1);
    printf("\\n");
    
    struct ListNode* result1 = reverseList(head1);
    printf("Output: ");
    printList(result1);
    printf("\\n");
    
    printf("\\nInput: head = ");
    printList(head2);
    printf("\\n");
    
    struct ListNode* result2 = reverseList(head2);
    printf("Output: ");
    printList(result2);
    printf("\\n");
    
    printf("\\nRecursive Approach:\\n");
    printf("Use recursion to reverse the list\\n");
    printf("Base case: empty or single node\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses recursion to reverse the linked list. It is conceptually elegant but uses stack space proportional to the list length.'
        },
        worst: {
          code: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list
struct ListNode {
    int val;
    struct ListNode *next;
};

// Stack implementation
struct Stack {
    struct ListNode** nodes;
    int top;
    int capacity;
};

struct Stack* createStack(int capacity) {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
    stack->nodes = (struct ListNode**)malloc(capacity * sizeof(struct ListNode*));
    stack->top = -1;
    stack->capacity = capacity;
    return stack;
}

void push(struct Stack* stack, struct ListNode* node) {
    if (stack->top < stack->capacity - 1) {
        stack->nodes[++stack->top] = node;
    }
}

struct ListNode* pop(struct Stack* stack) {
    if (stack->top >= 0) {
        return stack->nodes[stack->top--];
    }
    return NULL;
}

struct ListNode* reverseList(struct ListNode* head) {
    if (head == NULL) return NULL;
    
    // Count nodes
    int count = 0;
    struct ListNode* curr = head;
    while (curr != NULL) {
        count++;
        curr = curr->next;
    }
    
    // Create stack and push all nodes
    struct Stack* stack = createStack(count);
    curr = head;
    while (curr != NULL) {
        push(stack, curr);
        curr = curr->next;
    }
    
    // Pop nodes to create reversed list
    struct ListNode* newHead = pop(stack);
    curr = newHead;
    while (stack->top >= 0) {
        curr->next = pop(stack);
        curr = curr->next;
    }
    curr->next = NULL;
    
    // Clean up
    free(stack->nodes);
    free(stack);
    
    return newHead;
}

// Helper function to create a linked list
struct ListNode* createList(int arr[], int size) {
    if (size == 0) return NULL;
    
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    
    struct ListNode* curr = head;
    for (int i = 1; i < size; i++) {
        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        curr = curr->next;
        curr->val = arr[i];
        curr->next = NULL;
    }
    
    return head;
}

// Helper function to print linked list
void printList(struct ListNode* head) {
    printf("[");
    struct ListNode* curr = head;
    while (curr != NULL) {
        printf("%d", curr->val);
        if (curr->next != NULL) printf(",");
        curr = curr->next;
    }
    printf("]");
}

int main() {
    int arr1[] = {1,2,3,4,5};
    int arr2[] = {1,2};
    
    struct ListNode* head1 = createList(arr1, 5);
    struct ListNode* head2 = createList(arr2, 2);
    
    printf("Input: head = ");
    printList(head1);
    printf("\\n");
    
    struct ListNode* result1 = reverseList(head1);
    printf("Output: ");
    printList(result1);
    printf("\\n");
    
    printf("\\nInput: head = ");
    printList(head2);
    printf("\\n");
    
    struct ListNode* result2 = reverseList(head2);
    printf("Output: ");
    printList(result2);
    printf("\\n");
    
    printf("\\nStack Approach:\\n");
    printf("Push all nodes to stack, pop to reverse\\n");
    printf("Uses extra space but conceptually simple\\n");
    
    return 0;
}`,
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          explanation: 'This approach uses a stack to reverse the linked list. It pushes all nodes onto a stack and then pops them to create the reversed list. It uses extra space but is conceptually simple.'
        }
      }
    }
  }
];

export default allCapgeminiQuestions;
