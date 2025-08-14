#include <stdio.h>
#include <stdlib.h>

// Definition for a binary tree node
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

// Helper function to create a new tree node
struct TreeNode* createNode(int val) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// Helper function to add a tree to the forest
void addToForest(struct TreeNode*** forest, int* forestSize, struct TreeNode* root) {
    if (root != NULL) {
        (*forest) = realloc(*forest, (*forestSize + 1) * sizeof(struct TreeNode*));
        (*forest)[*forestSize] = root;
        (*forestSize)++;
    }
}

// DFS function to delete nodes and build forest
struct TreeNode* deleteNodesDFS(struct TreeNode* root, int target, struct TreeNode*** forest, int* forestSize) {
    if (root == NULL) {
        return NULL;
    }
    
    // Recursively process left and right children
    root->left = deleteNodesDFS(root->left, target, forest, forestSize);
    root->right = deleteNodesDFS(root->right, target, forest, forestSize);
    
    // If current node should be deleted
    if (root->val == target) {
        // Add children to forest before deleting current node
        if (root->left != NULL) {
            addToForest(forest, forestSize, root->left);
        }
        if (root->right != NULL) {
            addToForest(forest, forestSize, root->right);
        }
        
        // Free current node and return NULL
        free(root);
        return NULL;
    }
    
    return root;
}

// Main function to delete nodes and return forest
struct TreeNode** delNodes(struct TreeNode* root, int target, int* returnSize) {
    struct TreeNode** forest = NULL;
    *returnSize = 0;
    
    // If root itself is the target, handle specially
    if (root != NULL && root->val == target) {
        if (root->left != NULL) {
            addToForest(&forest, returnSize, root->left);
        }
        if (root->right != NULL) {
            addToForest(&forest, returnSize, root->right);
        }
        free(root);
    } else {
        // Process the tree normally
        root = deleteNodesDFS(root, target, &forest, returnSize);
        if (root != NULL) {
            addToForest(&forest, returnSize, root);
        }
    }
    
    return forest;
}

// Helper function to print tree (for testing)
void printTree(struct TreeNode* root) {
    if (root == NULL) {
        printf("null ");
        return;
    }
    printf("%d ", root->val);
    printTree(root->left);
    printTree(root->right);
}

// Test function for the solution
void testDeleteNodes() {
    printf("=== Testing Delete Nodes And Return Forest ===\n\n");
    
    // Test Case 1: Delete node 3
    printf("Test Case 1: Delete node 3\n");
    printf("Input: root = [1,2,3,4,5,6,7], target = 3\n");
    
    struct TreeNode* root1 = createNode(1);
    root1->left = createNode(2);
    root1->right = createNode(3);
    root1->left->left = createNode(4);
    root1->left->right = createNode(5);
    root1->right->left = createNode(6);
    root1->right->right = createNode(7);
    
    printf("Original tree: ");
    printTree(root1);
    printf("\n");
    
    int returnSize1;
    struct TreeNode** forest1 = delNodes(root1, 3, &returnSize1);
    
    printf("Forest after deletion (number of trees: %d):\n", returnSize1);
    for (int i = 0; i < returnSize1; i++) {
        printf("Tree %d: ", i + 1);
        printTree(forest1[i]);
        printf("\n");
    }
    printf("Expected: [[1,2,4,5],[6,7]]\n\n");
    
    // Free memory for test case 1
    for (int i = 0; i < returnSize1; i++) {
        free(forest1[i]);
    }
    free(forest1);
    
    // Test Case 2: Delete node 7
    printf("Test Case 2: Delete node 7\n");
    printf("Input: root = [1,2,3,4,5,6,7], target = 7\n");
    
    struct TreeNode* root2 = createNode(1);
    root2->left = createNode(2);
    root2->right = createNode(3);
    root2->left->left = createNode(4);
    root2->left->right = createNode(5);
    root2->right->left = createNode(6);
    root2->right->right = createNode(7);
    
    printf("Original tree: ");
    printTree(root2);
    printf("\n");
    
    int returnSize2;
    struct TreeNode** forest2 = delNodes(root2, 7, &returnSize2);
    
    printf("Forest after deletion (number of trees: %d):\n", returnSize2);
    for (int i = 0; i < returnSize2; i++) {
        printf("Tree %d: ", i + 1);
        printTree(forest2[i]);
        printf("\n");
    }
    printf("Expected: [[1,2,3,4,5,6]]\n\n");
    
    // Free memory for test case 2
    for (int i = 0; i < returnSize2; i++) {
        free(forest2[i]);
    }
    free(forest2);
    
    // Test Case 3: Delete root node
    printf("Test Case 3: Delete root node (1)\n");
    printf("Input: root = [1,2,3], target = 1\n");
    
    struct TreeNode* root3 = createNode(1);
    root3->left = createNode(2);
    root3->right = createNode(3);
    
    printf("Original tree: ");
    printTree(root3);
    printf("\n");
    
    int returnSize3;
    struct TreeNode** forest3 = delNodes(root3, 1, &returnSize3);
    
    printf("Forest after deletion (number of trees: %d):\n", returnSize3);
    for (int i = 0; i < returnSize3; i++) {
        printf("Tree %d: ", i + 1);
        printTree(forest3[i]);
        printf("\n");
    }
    printf("Expected: [[2],[3]]\n\n");
    
    // Free memory for test case 3
    for (int i = 0; i < returnSize3; i++) {
        free(forest3[i]);
    }
    free(forest3);
    
    printf("=== All tests completed ===\n");
}

int main() {
    testDeleteNodes();
    return 0;
}
