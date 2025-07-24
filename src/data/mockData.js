// Mock data for coding platform
export const companies = [
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '/images/amazon.jpg',
    description: 'Technical interview questions from Amazon',
    color: 'from-orange-400 to-orange-600',
    totalQuestions: 30
  },
  {
    id: 'tcs',
    name: 'TCS',
    logo: '💼',
    description: 'Technical interview questions from TCS',
    color: 'from-blue-400 to-blue-600',
    totalQuestions: 30
  },
  {
    id: 'wipro',
    name: 'WIPRO',
    logo: '⚡',
    description: 'Technical interview questions from WIPRO',
    color: 'from-purple-400 to-purple-600',
    totalQuestions: 30
  },
  {
    id: 'google',
    name: 'Google',
    logo: '👨‍💻',
    description: 'Technical interview questions from Google',
    color: 'from-blue-400 to-blue-600',
    totalQuestions: 30
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    logo: '👨‍💻',
    description: 'Technical interview questions from Cognizant',
    color: 'from-blue-400 to-blue-600',
    totalQuestions: 30
  },
  {
    id: 'infosys',
    name: 'Infosys',
    logo: '👨‍💻',
    description: 'Technical interview questions from Infosys',
    color: 'from-blue-400 to-blue-600',
    totalQuestions: 30
  }
];

export const languages = [
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'javascript', name: 'JavaScript', icon: '🟨' },
  { id: 'c', name: 'C', icon: '🔧' },
  { id: 'cpp', name: 'C++', icon: '⚙️' }
];

export const approaches = [
  { id: 'best', name: 'Best', description: 'Most optimal approach', color: 'text-green-500' },
  { id: 'better', name: 'Better', description: 'Optimized approach', color: 'text-yellow-500' },
  { id: 'worst', name: 'Worst', description: 'Brute force approach', color: 'text-red-500' },
];

export const sampleQuestions = {
  amazon: [
    {
      id: 'amz1',
      title: 'Jump To The End',
      difficulty: 'Easy',
      description: `Given a sequence of nonnegative integers A₁, A₂, A<sup>3</sup>..., A<sub>n</sub>.\nFind the maximum jumps to reach the end.
      `,
      
      category: 'Array',
      solutions: {
        python: {
          worst: {
            code: `def two_sum(nums, target):
    # Brute force approach - O(n²) time complexity
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            explanation: 'Check every pair of numbers to find the target sum. Inefficient for large arrays.'
          },
          better: {
            code: `def two_sum(nums, target):
    # Hash map approach - O(n) time complexity
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Use hash map to store seen numbers and their indices. Much faster lookup.'
          },
          best: {
            code: `def two_sum(nums, target):
    # Optimized hash map with early return
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Same as better approach but with optimized implementation and early return.'
          }
        },
        java: {
          worst: {
            code: `public int[] twoSum(int[] nums, int target) {
    // Brute force approach - O(n²) time complexity
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return new int[]{i, j};
            }
        }
    }
    return new int[]{};
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            explanation: 'Nested loops to check all pairs. Simple but inefficient.'
          },
          better: {
            code: `public int[] twoSum(int[] nums, int target) {
    // HashMap approach - O(n) time complexity
    Map<Integer, Integer> seen = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (seen.containsKey(complement)) {
            return new int[]{seen.get(complement), i};
        }
        seen.put(nums[i], i);
    }
    return new int[]{};
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Use HashMap for O(1) lookup time, significantly faster than brute force.'
          },
          best: {
            code: `public int[] twoSum(int[] nums, int target) {
    // Optimized HashMap with early validation
    if (nums.length < 2) return new int[]{};
    
    Map<Integer, Integer> seen = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (seen.containsKey(complement)) {
            return new int[]{seen.get(complement), i};
        }
        seen.put(nums[i], i);
    }
    return new int[]{};
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Added input validation and optimized for best practices.'
          }
        },
        javascript: {
          worst: {
            code: `function twoSum(nums, target) {
    // Brute force approach - O(n²) time complexity
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            explanation: 'Double loop to check every combination. Works but slow for large inputs.'
          },
          better: {
            code: `function twoSum(nums, target) {
    // Map approach - O(n) time complexity
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Use Map for fast lookups. Much more efficient than nested loops.'
          },
          best: {
            code: `function twoSum(nums, target) {
    // Optimized Map with input validation
    if (!nums || nums.length < 2) return [];
    
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Added input validation and follows JavaScript best practices.'
          }
        },
        c: {
          worst: {
            code: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Brute force approach - O(n²) time complexity
    *returnSize = 0;
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
    return NULL;
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            explanation: 'Nested loops with manual memory management. Simple but inefficient.'
          },
          better: {
            code: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Hash table simulation with arrays
    *returnSize = 0;
    typedef struct {
        int value;
        int index;
    } pair;
    
    pair* hash = (pair*)calloc(numsSize, sizeof(pair));
    int hashSize = 0;
    
    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        // Linear search in hash (can be optimized)
        for (int j = 0; j < hashSize; j++) {
            if (hash[j].value == complement) {
                int* result = (int*)malloc(2 * sizeof(int));
                result[0] = hash[j].index;
                result[1] = i;
                *returnSize = 2;
                free(hash);
                return result;
            }
        }
        hash[hashSize].value = nums[i];
        hash[hashSize].index = i;
        hashSize++;
    }
    
    free(hash);
    return NULL;
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(n)',
            explanation: 'Attempt to simulate hash table but still has linear search overhead.'
          },
          best: {
            code: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Optimized approach with sorted array technique
    *returnSize = 0;
    if (numsSize < 2) return NULL;
    
    typedef struct {
        int value;
        int original_index;
    } indexed_value;
    
    indexed_value* indexed_nums = (indexed_value*)malloc(numsSize * sizeof(indexed_value));
    for (int i = 0; i < numsSize; i++) {
        indexed_nums[i].value = nums[i];
        indexed_nums[i].original_index = i;
    }
    
    // Sort by value (simplified bubble sort for demo)
    for (int i = 0; i < numsSize - 1; i++) {
        for (int j = 0; j < numsSize - i - 1; j++) {
            if (indexed_nums[j].value > indexed_nums[j + 1].value) {
                indexed_value temp = indexed_nums[j];
                indexed_nums[j] = indexed_nums[j + 1];
                indexed_nums[j + 1] = temp;
            }
        }
    }
    
    // Two pointer technique
    int left = 0, right = numsSize - 1;
    while (left < right) {
        int sum = indexed_nums[left].value + indexed_nums[right].value;
        if (sum == target) {
            int* result = (int*)malloc(2 * sizeof(int));
            result[0] = indexed_nums[left].original_index;
            result[1] = indexed_nums[right].original_index;
            if (result[0] > result[1]) {
                int temp = result[0];
                result[0] = result[1];
                result[1] = temp;
            }
            *returnSize = 2;
            free(indexed_nums);
            return result;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    free(indexed_nums);
    return NULL;
}`,
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(n)',
            explanation: 'Uses sorting and two pointers. Better than brute force, optimal for C without hash tables.'
          }
        },
        cpp: {
          worst: {
            code: `vector<int> twoSum(vector<int>& nums, int target) {
    // Brute force approach - O(n²) time complexity
    for (int i = 0; i < nums.size(); i++) {
        for (int j = i + 1; j < nums.size(); j++) {
            if (nums[i] + nums[j] == target) {
                return {i, j};
            }
        }
    }
    return {};
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            explanation: 'Nested loops checking all pairs. Simple implementation but slow.'
          },
          better: {
            code: `vector<int> twoSum(vector<int>& nums, int target) {
    // unordered_map approach - O(n) time complexity
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.find(complement) != seen.end()) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Uses unordered_map for O(1) average lookup time. Much faster than brute force.'
          },
          best: {
            code: `vector<int> twoSum(vector<int>& nums, int target) {
    // Optimized unordered_map with move semantics
    if (nums.size() < 2) return {};
    
    unordered_map<int, int> seen;
    seen.reserve(nums.size()); // Pre-allocate for better performance
    
    for (int i = 0; i < nums.size(); ++i) {
        const int complement = target - nums[i];
        auto it = seen.find(complement);
        if (it != seen.end()) {
            return {it->second, i};
        }
        seen.emplace(nums[i], i); // Use emplace for efficiency
    }
    return {};
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Optimized with pre-allocation, const correctness, and emplace for maximum performance.'
          }
        }
      }
    },
    // Add more Amazon questions...
  ],
  tcs: [
    {
      id: 'tcs1',
      title: 'Reverse String',
      difficulty: 'Easy',
      description: 'Write a function that reverses a string. The input string is given as an array of characters s.',
      category: 'String',
      solutions: {
        python: {
          worst: {
            code: `def reverse_string(s):
    # Create new string by concatenation - O(n²) time
    result = ""
    for i in range(len(s) - 1, -1, -1):
        result += s[i]
    return result`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(n)',
            explanation: 'String concatenation in loop creates new string each time, very inefficient.'
          },
          better: {
            code: `def reverse_string(s):
    # Use built-in reverse - O(n) time
    return s[::-1]`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Python slice notation is efficient and readable.'
          },
          best: {
            code: `def reverse_string(s):
    # In-place reversal with two pointers - O(n) time, O(1) space
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return s`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            explanation: 'Two pointers approach with in-place swapping, most memory efficient.'
          }
        },
        // Add other languages for this question...
        java: {
          worst: {
            code: `public String reverseString(String s) {
    // String concatenation in loop - O(n²) time
    String result = "";
    for (int i = s.length() - 1; i >= 0; i--) {
        result += s.charAt(i);
    }
    return result;
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(n)',
            explanation: 'String is immutable in Java, so each concatenation creates new object.'
          },
          better: {
            code: `public String reverseString(String s) {
    // StringBuilder approach - O(n) time
    StringBuilder sb = new StringBuilder();
    for (int i = s.length() - 1; i >= 0; i--) {
        sb.append(s.charAt(i));
    }
    return sb.toString();
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'StringBuilder is mutable and efficient for string building operations.'
          },
          best: {
            code: `public String reverseString(String s) {
    // Built-in StringBuilder reverse - O(n) time
    return new StringBuilder(s).reverse().toString();
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Most concise and leverages optimized built-in reverse method.'
          }
        },
        javascript: {
          worst: {
            code: `function reverseString(s) {
    // String concatenation in loop - O(n²) time
    let result = "";
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(n)',
            explanation: 'String concatenation creates new strings each iteration.'
          },
          better: {
            code: `function reverseString(s) {
    // Array reverse method - O(n) time
    return s.split('').reverse().join('');
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Built-in array methods are optimized and readable.'
          },
          best: {
            code: `function reverseString(s) {
    // Two pointers in-place for character array
    if (typeof s === 'string') {
        s = s.split('');
    }
    
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            explanation: 'In-place reversal using destructuring assignment for elegant swapping.'
          }
        },
        c: {
          worst: {
            code: `char* reverseString(char* s) {
    // Create new string with malloc - O(n) time and space
    int len = strlen(s);
    char* result = (char*)malloc((len + 1) * sizeof(char));
    
    for (int i = 0; i < len; i++) {
        result[i] = s[len - 1 - i];
    }
    result[len] = '\\0';
    return result;
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Allocates new memory for result, requires manual memory management.'
          },
          better: {
            code: `void reverseString(char* s) {
    // In-place reversal - O(n) time, O(1) space
    int len = strlen(s);
    for (int i = 0; i < len / 2; i++) {
        char temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            explanation: 'In-place swapping using temporary variable, memory efficient.'
          },
          best: {
            code: `void reverseString(char* s) {
    // Optimized in-place with pointers - O(n) time, O(1) space
    if (!s) return;
    
    char* start = s;
    char* end = s + strlen(s) - 1;
    
    while (start < end) {
        // XOR swap (optional, but shows advanced technique)
        *start ^= *end;
        *end ^= *start;
        *start ^= *end;
        
        start++;
        end--;
    }
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            explanation: 'Pointer-based approach with XOR swap, demonstrates advanced C techniques.'
          }
        },
        cpp: {
          worst: {
            code: `string reverseString(string s) {
    // String concatenation - O(n²) time
    string result = "";
    for (int i = s.length() - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(n)',
            explanation: 'String concatenation can be inefficient due to repeated allocations.'
          },
          better: {
            code: `string reverseString(string s) {
    // STL reverse algorithm - O(n) time
    reverse(s.begin(), s.end());
    return s;
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            explanation: 'STL reverse is optimized and works in-place on the string.'
          },
          best: {
            code: `string reverseString(string s) {
    // Two pointers with move semantics - O(n) time
    if (s.empty()) return s;
    
    size_t left = 0, right = s.length() - 1;
    while (left < right) {
        swap(s[left], s[right]);
        ++left;
        --right;
    }
    return s;
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            explanation: 'Manual two-pointer approach with STL swap for educational purposes.'
          }
        }
      }
    }
    // Add more TCS questions...
  ],
  wipro: [
    {
      id: 'wip1',
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
      category: 'Stack',
      solutions: {
        python: {
          worst: {
            code: `def is_valid(s):
    # Brute force with string replacement - O(n²) time
    while '()' in s or '[]' in s or '{}' in s:
        s = s.replace('()', '')
        s = s.replace('[]', '')
        s = s.replace('{}', '')
    return len(s) == 0`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(n)',
            explanation: 'Repeatedly removes pairs until none left. Very inefficient string operations.'
          },
          better: {
            code: `def is_valid(s):
    # Stack approach - O(n) time
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return not stack`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Classic stack solution. Push opening brackets, pop and match closing ones.'
          },
          best: {
            code: `def is_valid(s):
    # Optimized stack with early termination - O(n) time
    if len(s) % 2 != 0:
        return False
    
    stack = []
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for char in s:
        if char in pairs:
            stack.append(char)
        elif not stack or pairs[stack.pop()] != char:
            return False
    
    return not stack`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Optimized with odd-length early return and cleaner bracket matching logic.'
          }
        },
        // Add other languages similarly...
        java: {
          worst: {
            code: `public boolean isValid(String s) {
    // Recursive approach - can cause stack overflow
    if (s.length() == 0) return true;
    if (s.length() % 2 != 0) return false;
    
    for (int i = 0; i < s.length() - 1; i++) {
        String pair = s.substring(i, i + 2);
        if (pair.equals("()") || pair.equals("[]") || pair.equals("{}")) {
            return isValid(s.substring(0, i) + s.substring(i + 2));
        }
    }
    return false;
}`,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(n²)',
            explanation: 'Recursive string manipulation, very inefficient and can overflow.'
          },
          better: {
            code: `public boolean isValid(String s) {
    // Stack implementation - O(n) time
    Stack<Character> stack = new Stack<>();
    
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Standard stack approach with explicit character comparisons.'
          },
          best: {
            code: `public boolean isValid(String s) {
    // Optimized with HashMap - O(n) time
    if (s.length() % 2 != 0) return false;
    
    Map<Character, Character> pairs = Map.of(')', '(', ']', '[', '}', '{');
    Deque<Character> stack = new ArrayDeque<>();
    
    for (char c : s.toCharArray()) {
        if (pairs.containsKey(c)) {
            if (stack.isEmpty() || !stack.pop().equals(pairs.get(c))) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    return stack.isEmpty();
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Modern Java with ArrayDeque and Map.of() for cleaner, more efficient code.'
          }
        },
        javascript: {
          worst: {
            code: `function isValid(s) {
    // Brute force replacement - O(n³) time
    let prev;
    do {
        prev = s;
        s = s.replace('()', '').replace('[]', '').replace('{}', '');
    } while (s !== prev);
    return s === '';
}`,
            timeComplexity: 'O(n³)',
            spaceComplexity: 'O(n)',
            explanation: 'Repeatedly replaces matching pairs. Very slow due to string operations.'
          },
          better: {
            code: `function isValid(s) {
    // Array as stack - O(n) time
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };
    
    for (const char of s) {
        if (char in pairs) {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Clean stack implementation using JavaScript array and object lookup.'
          },
          best: {
            code: `function isValid(s) {
    // Optimized with Map and early return - O(n) time
    if (s.length % 2 !== 0) return false;
    
    const stack = [];
    const closeToOpen = new Map([[')', '('], [']', '['], ['}', '{']]);
    
    for (const char of s) {
        if (closeToOpen.has(char)) {
            if (!stack.length || stack.pop() !== closeToOpen.get(char)) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return !stack.length;
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Uses Map for cleaner lookup and includes length optimization.'
          }
        },
        c: {
          worst: {
            code: `bool isValid(char* s) {
    // Brute force with string manipulation - O(n³) time
    int len = strlen(s);
    char* temp = (char*)malloc((len + 1) * sizeof(char));
    
    bool changed = true;
    while (changed) {
        changed = false;
        strcpy(temp, s);
        len = strlen(temp);
        
        for (int i = 0; i < len - 1; i++) {
            if ((temp[i] == '(' && temp[i+1] == ')') ||
                (temp[i] == '[' && temp[i+1] == ']') ||
                (temp[i] == '{' && temp[i+1] == '}')) {
                // Remove pair
                for (int j = i; j < len - 2; j++) {
                    temp[j] = temp[j + 2];
                }
                temp[len - 2] = '\\0';
                strcpy(s, temp);
                changed = true;
                break;
            }
        }
    }
    
    bool result = (strlen(s) == 0);
    free(temp);
    return result;
}`,
            timeComplexity: 'O(n³)',
            spaceComplexity: 'O(n)',
            explanation: 'Extremely inefficient with nested loops and string copying.'
          },
          better: {
            code: `bool isValid(char* s) {
    // Array-based stack - O(n) time
    int len = strlen(s);
    if (len % 2 != 0) return false;
    
    char* stack = (char*)malloc(len * sizeof(char));
    int top = -1;
    
    for (int i = 0; i < len; i++) {
        char c = s[i];
        if (c == '(' || c == '[' || c == '{') {
            stack[++top] = c;
        } else {
            if (top < 0) {
                free(stack);
                return false;
            }
            char open = stack[top--];
            if ((c == ')' && open != '(') ||
                (c == ']' && open != '[') ||
                (c == '}' && open != '{')) {
                free(stack);
                return false;
            }
        }
    }
    
    bool result = (top == -1);
    free(stack);
    return result;
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Proper stack implementation with manual memory management.'
          },
          best: {
            code: `bool isValid(char* s) {
    // Optimized stack with static array - O(n) time
    int len = strlen(s);
    if (len % 2 != 0 || len == 0) return len == 0;
    
    // Use VLA (Variable Length Array) for better performance
    char stack[len/2 + 1];
    int top = -1;
    
    for (int i = 0; i < len; i++) {
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                stack[++top] = s[i];
                break;
            case ')':
                if (top < 0 || stack[top--] != '(') return false;
                break;
            case ']':
                if (top < 0 || stack[top--] != '[') return false;
                break;
            case '}':
                if (top < 0 || stack[top--] != '{') return false;
                break;
        }
    }
    return top == -1;
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Most efficient with VLA and switch statement, no malloc overhead.'
          }
        },
        cpp: {
          worst: {
            code: `bool isValid(string s) {
    // Recursive with string manipulation - O(n³) time
    if (s.empty()) return true;
    if (s.length() % 2 != 0) return false;
    
    size_t pos = s.find("()");
    if (pos != string::npos) {
        return isValid(s.substr(0, pos) + s.substr(pos + 2));
    }
    pos = s.find("[]");
    if (pos != string::npos) {
        return isValid(s.substr(0, pos) + s.substr(pos + 2));
    }
    pos = s.find("{}");
    if (pos != string::npos) {
        return isValid(s.substr(0, pos) + s.substr(pos + 2));
    }
    return false;
}`,
            timeComplexity: 'O(n³)',
            spaceComplexity: 'O(n²)',
            explanation: 'Recursive approach with expensive string operations and substr calls.'
          },
          better: {
            code: `bool isValid(string s) {
    // Stack with unordered_map - O(n) time
    stack<char> stk;
    unordered_map<char, char> pairs = {{')', '('}, {']', '['}, {'}', '{'}};
    
    for (char c : s) {
        if (pairs.count(c)) {
            if (stk.empty() || stk.top() != pairs[c]) {
                return false;
            }
            stk.pop();
        } else {
            stk.push(c);
        }
    }
    return stk.empty();
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Clean STL stack solution with unordered_map for pair lookup.'
          },
          best: {
            code: `bool isValid(string s) {
    // Optimized with compile-time map - O(n) time
    if (s.length() % 2 != 0) return false;
    
    stack<char> stk;
    stk.reserve(s.length() / 2); // Optimize stack allocation
    
    for (char c : s) {
        switch (c) {
            case '(': case '[': case '{':
                stk.push(c);
                break;
            case ')':
                if (stk.empty() || stk.top() != '(') return false;
                stk.pop();
                break;
            case ']':
                if (stk.empty() || stk.top() != '[') return false;
                stk.pop();
                break;
            case '}':
                if (stk.empty() || stk.top() != '{') return false;
                stk.pop();
                break;
        }
    }
    return stk.empty();
}`,
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            explanation: 'Most optimized with switch statement and pre-allocated stack capacity.'
          }
        }
      }
    }
    // Add more WIPRO questions...
  ]
};

// Generate additional mock questions to reach 30 per company
const generateMockQuestions = (companyId, startId, count) => {
  const questionTypes = [
    { title: 'Binary Search', category: 'Search', difficulty: 'Medium' },
    { title: 'Merge Sort', category: 'Sorting', difficulty: 'Medium' },
    { title: 'Fibonacci Sequence', category: 'Dynamic Programming', difficulty: 'Easy' },
    { title: 'Linked List Cycle', category: 'Linked List', difficulty: 'Easy' },
    { title: 'Binary Tree Traversal', category: 'Tree', difficulty: 'Medium' },
    { title: 'Maximum Subarray', category: 'Array', difficulty: 'Easy' },
    { title: 'Palindrome Check', category: 'String', difficulty: 'Easy' },
    { title: 'Hash Table Implementation', category: 'Hash Table', difficulty: 'Medium' },
    { title: 'Depth First Search', category: 'Graph', difficulty: 'Medium' },
    { title: 'Quick Sort', category: 'Sorting', difficulty: 'Medium' }
  ];

  const questions = [];
  for (let i = 0; i < count; i++) {
    const typeIndex = i % questionTypes.length;
    const type = questionTypes[typeIndex];
    
    questions.push({
      id: `${companyId}${startId + i}`,
      title: `${type.title} ${Math.floor(i / questionTypes.length) + 1}`,
      difficulty: type.difficulty,
      description: `Implement ${type.title.toLowerCase()} algorithm efficiently.`,
      category: type.category,
      solutions: generateMockSolutions()
    });
  }
  return questions;
};

const generateMockSolutions = () => {
  const solution = {
    code: `// Implementation coming soon...
function solve() {
    // Your solution here
    return result;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    explanation: 'Efficient solution with optimal time and space complexity.'
  };

  return {
    python: { worst: solution, better: solution, best: solution },
    java: { worst: solution, better: solution, best: solution },
    javascript: { worst: solution, better: solution, best: solution },
    c: { worst: solution, better: solution, best: solution },
    cpp: { worst: solution, better: solution, best: solution }
  };
};

// Generate remaining questions for each company
sampleQuestions.amazon = [
  ...sampleQuestions.amazon,
  ...generateMockQuestions('amz', 2, 29)
];

sampleQuestions.tcs = [
  ...sampleQuestions.tcs,
  ...generateMockQuestions('tcs', 2, 29)
];

sampleQuestions.wipro = [
  ...sampleQuestions.wipro,
  ...generateMockQuestions('wip', 2, 29)
];