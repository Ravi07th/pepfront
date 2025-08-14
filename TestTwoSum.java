import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

public class TestTwoSum {
    
    // Best Solution - Hash Table
    public static int[] twoSumBest(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }
        
        return new int[]{}; // No solution found
    }
    
    // Average Solution - Two Pointer with Sorting
    public static int[] twoSumAverage(int[] nums, int target) {
        // Create array of pairs (value, original_index)
        int[][] numsWithIndex = new int[nums.length][2];
        for (int i = 0; i < nums.length; i++) {
            numsWithIndex[i][0] = nums[i];
            numsWithIndex[i][1] = i;
        }
        
        // Sort by values
        Arrays.sort(numsWithIndex, (a, b) -> Integer.compare(a[0], b[0]));
        
        int left = 0, right = numsWithIndex.length - 1;
        
        while (left < right) {
            int currentSum = numsWithIndex[left][0] + numsWithIndex[right][0];
            
            if (currentSum == target) {
                return new int[]{numsWithIndex[left][1], numsWithIndex[right][1]};
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
        
        return new int[]{}; // No solution found
    }
    
    // Worst Solution - Brute Force
    public static int[] twoSumWorst(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        
        return new int[]{}; // No solution found
    }
    
    // Test helper method
    public static void testSolution(String name, int[] nums, int target, int[] expected) {
        int[] result = null;
        
        switch (name) {
            case "Best":
                result = twoSumBest(nums, target);
                break;
            case "Average":
                result = twoSumAverage(nums, target);
                break;
            case "Worst":
                result = twoSumWorst(nums, target);
                break;
        }
        
        System.out.println("Input: nums=" + Arrays.toString(nums) + ", target=" + target);
        System.out.println("Expected: " + Arrays.toString(expected) + ", Got: " + Arrays.toString(result));
        
        boolean passed = result.length == 2 && 
                        ((result[0] == expected[0] && result[1] == expected[1]) ||
                         (result[0] == expected[1] && result[1] == expected[0]));
        
        System.out.println(passed ? "✓ PASS" : "✗ FAIL");
        System.out.println();
    }
    
    public static void main(String[] args) {
        System.out.println("Testing Two Sum Solutions in Java\n");
        
        // Test cases
        int[][] testCases = {
            {2, 7, 11, 15}, 9, {0, 1},
            {3, 2, 4}, 6, {1, 2},
            {3, 3}, 6, {0, 1}
        };
        
        // Test Best Solution
        System.out.println("=== Testing Java Best Solution (Hash Table) ===");
        for (int i = 0; i < testCases.length; i += 3) {
            int[] nums = {testCases[i][0], testCases[i][1], testCases[i][2], testCases[i][3]};
            int target = testCases[i + 1];
            int[] expected = {testCases[i + 2][0], testCases[i + 2][1]};
            testSolution("Best", nums, target, expected);
        }
        
        // Test Average Solution
        System.out.println("=== Testing Java Average Solution (Two Pointer) ===");
        for (int i = 0; i < testCases.length; i += 3) {
            int[] nums = {testCases[i][0], testCases[i][1], testCases[i][2], testCases[i][3]};
            int target = testCases[i + 1];
            int[] expected = {testCases[i + 2][0], testCases[i + 2][1]};
            testSolution("Average", nums, target, expected);
        }
        
        // Test Worst Solution
        System.out.println("=== Testing Java Worst Solution (Brute Force) ===");
        for (int i = 0; i < testCases.length; i += 3) {
            int[] nums = {testCases[i][0], testCases[i][1], testCases[i][2], testCases[i][3]};
            int target = testCases[i + 1];
            int[] expected = {testCases[i + 2][0], testCases[i + 2][1]};
            testSolution("Worst", nums, target, expected);
        }
        
        System.out.println("All Java tests completed!");
    }
}
