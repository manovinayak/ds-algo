## HT: Subarray Sum ( ** Interview Question)

In this exercise, you are tasked with writing a JavaScript function named subarraySum.

This function should take in an array of integers (nums) and another integer (target).

Your goal is to find a contiguous subarray whose elements sum up to the given target integer. The function should return an array containing the starting and ending indices of the subarray. If no such subarray exists, return an empty array.

### Examples:

- subarraySum([1, 4, 20, 3, 10, 5], 33) should return [2, 4] because the subarray from index 2 to index 4 sums to 33.
- subarraySum([1, 2, 3], 3) should return [0, 1] because the subarray from index 0 to index 1 sums to 3.

For this exercise, you can make use of two types of hash tables:

1. Map: This is a built-in object in JavaScript designed to store key-value pairs.
2. Object: This is another JavaScript data structure that can function as a hash table for storing key-value pairs.

You are encouraged to solve this problem using both a Map and an Object to understand their capabilities and differences.