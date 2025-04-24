## Set: Find Pairs ( ** Interview Question)

Your task is to write a function named findPairs that takes in two lists of numbers (arr1 and arr2) and a target number (target).

The function should find all pairs where one number from arr1 and one number from arr2 sum up to the target number.

The function should return these pairs as a list.

Example

- Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6], target = 7
- Output: [[1, 6], [2, 5], [3, 4]]

In this example, 1 from arr1 and 6 from arr2 add up to 7. Similarly, 2 and 5, and 3 and 4 also add up to 7. So, the function returns these pairs.

Requirements
1. The function should take in two lists of numbers (arr1 and arr2) and a target number (target).
2. The function should return a list of pairs that sum up to the target.

Notes

- The numbers in arr1 and arr2 can be in any order.
- If no pairs are found that sum up to the target, return an empty list.
- Each pair should be a list where the first number is from arr1 and the second is from arr2.