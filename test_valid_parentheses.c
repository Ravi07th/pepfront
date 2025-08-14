#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Stack implementation for Best solution
#define MAX_SIZE 10000

typedef struct {
    char data[MAX_SIZE];
    int top;
} Stack;

void initStack(Stack* stack) {
    stack->top = -1;
}

void push(Stack* stack, char c) {
    if (stack->top < MAX_SIZE - 1) {
        stack->data[++stack->top] = c;
    }
}

char pop(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top--];
    }
    return '\0';
}

char peek(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top];
    }
    return '\0';
}

bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

// Best solution: Stack approach
bool isValid_best(char* s) {
    Stack stack;
    initStack(&stack);
    
    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        
        // Push opening brackets
        if (c == '(' || c == '[' || c == '{') {
            push(&stack, c);
        }
        // Check closing brackets
        else if (c == ')' || c == ']' || c == '}') {
            if (isEmpty(&stack)) {
                return false;
            }
            
            char top = peek(&stack);
            if ((c == ')' && top == '(') ||
                (c == ']' && top == '[') ||
                (c == '}' && top == '{')) {
                pop(&stack);
            } else {
                return false;
            }
        }
    }
    
    return isEmpty(&stack);
}

// Average solution: Array as stack
bool isValid_average(char* s) {
    char stack[10000];
    int top = -1;
    
    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        
        if (c == '(' || c == '[' || c == '{') {
            stack[++top] = c;
        } else if (c == ')' || c == ']' || c == '}') {
            if (top == -1) {
                return false;
            }
            
            char topChar = stack[top];
            if ((c == ')' && topChar == '(') ||
                (c == ']' && topChar == '[') ||
                (c == '}' && topChar == '{')) {
                top--;
            } else {
                return false;
            }
        }
    }
    
    return top == -1;
}

// Worst solution: Character counting (limited)
bool isValid_worst(char* s) {
    int count1 = 0, count2 = 0, count3 = 0;
    
    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        if (c == '(') count1++;
        else if (c == ')') count1--;
        else if (c == '[') count2++;
        else if (c == ']') count2--;
        else if (c == '{') count3++;
        else if (c == '}') count3--;
        
        // Check for negative counts
        if (count1 < 0 || count2 < 0 || count3 < 0) {
            return false;
        }
    }
    
    return count1 == 0 && count2 == 0 && count3 == 0;
}

// Test function
void test_solution(const char* test_name, bool (*func)(char*), char* input, bool expected) {
    bool result = func(input);
    printf("%s: Input = \"%s\", Expected = %s, Got = %s, %s\n", 
           test_name, input, expected ? "true" : "false", result ? "true" : "false",
           result == expected ? "PASS" : "FAIL");
}

int main() {
    printf("=== Testing Valid Parentheses Solutions ===\n\n");
    
    // Test cases
    char* test_cases[] = {
        "()",           // true
        "()[]{}",       // true
        "(]",           // false
        "([)]",         // false
        "{[]}",         // true
        "(((",          // false
        ")))",          // false
        "([{}])",       // true
        "([{",          // false
        "}])",          // false
        "",             // true
        "a",            // true (no brackets)
        "([{}])()",     // true
        "([{}](",       // false
    };
    
    bool expected[] = {
        true, true, false, false, true, false, false, true, false, false, true, true, true, false
    };
    
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    printf("Testing Best Solution (Stack):\n");
    for (int i = 0; i < num_tests; i++) {
        test_solution("Best", isValid_best, test_cases[i], expected[i]);
    }
    
    printf("\nTesting Average Solution (Array as Stack):\n");
    for (int i = 0; i < num_tests; i++) {
        test_solution("Average", isValid_average, test_cases[i], expected[i]);
    }
    
    printf("\nTesting Worst Solution (Character Counting):\n");
    for (int i = 0; i < num_tests; i++) {
        test_solution("Worst", isValid_worst, test_cases[i], expected[i]);
    }
    
    printf("\n=== Test Summary ===\n");
    printf("Note: The 'worst' solution (character counting) may fail for some cases\n");
    printf("because it doesn't check the order of brackets properly.\n");
    
    return 0;
}
