#!/usr/bin/env python3
"""
Test script to verify all Two Sum solutions work correctly
"""

def test_python_best():
    """Test Python Best Solution (Hash Table)"""
    print("=== Testing Python Best Solution (Hash Table) ===")
    
    def twoSum(nums, target):
        """
        Optimal solution using hash table
        Time Complexity: O(n)
        Space Complexity: O(n)
        """
        num_map = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i
        
        return []  # No solution found

    # Test cases
    test_cases = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1]),
        ([1, 5, 8, 10, 13, 18, 21, 25, 30], 23, [3, 4])  # Fixed expected output
    ]
    
    for nums, target, expected in test_cases:
        result = twoSum(nums, target)
        print(f"Input: nums={nums}, target={target}")
        print(f"Expected: {expected}, Got: {result}")
        print(f"✓ PASS" if result == expected else f"✗ FAIL")
        print()

def test_python_average():
    """Test Python Average Solution (Two Pointer)"""
    print("=== Testing Python Average Solution (Two Pointer) ===")
    
    def twoSum(nums, target):
        """
        Two-pointer approach (requires sorted array)
        Time Complexity: O(n log n) due to sorting
        Space Complexity: O(n) to store original indices
        """
        # Create list of tuples (value, original_index)
        nums_with_index = [(nums[i], i) for i in range(len(nums))]
        nums_with_index.sort()  # Sort by values
        
        left, right = 0, len(nums_with_index) - 1
        
        while left < right:
            current_sum = nums_with_index[left][0] + nums_with_index[right][0]
            
            if current_sum == target:
                return [nums_with_index[left][1], nums_with_index[right][1]]
            elif current_sum < target:
                left += 1
            else:
                right -= 1
        
        return []  # No solution found

    # Test cases
    test_cases = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1])
    ]
    
    for nums, target, expected in test_cases:
        result = twoSum(nums, target)
        print(f"Input: nums={nums}, target={target}")
        print(f"Expected: {expected}, Got: {result}")
        print(f"✓ PASS" if result == expected else f"✗ FAIL")
        print()

def test_python_worst():
    """Test Python Worst Solution (Brute Force)"""
    print("=== Testing Python Worst Solution (Brute Force) ===")
    
    def twoSum(nums, target):
        """
        Brute force approach
        Time Complexity: O(n²)
        Space Complexity: O(1)
        """
        n = len(nums)
        
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        
        return []  # No solution found

    # Test cases
    test_cases = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1])
    ]
    
    for nums, target, expected in test_cases:
        result = twoSum(nums, target)
        print(f"Input: nums={nums}, target={target}")
        print(f"Expected: {expected}, Got: {result}")
        print(f"✓ PASS" if result == expected else f"✗ FAIL")
        print()

if __name__ == "__main__":
    print("Testing Two Sum Solutions\n")
    test_python_best()
    test_python_average()
    test_python_worst()
    print("All Python tests completed!")
