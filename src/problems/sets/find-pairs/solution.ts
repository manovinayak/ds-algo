//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds all the pairs of numbers that |
//   |   sum up to a given target.                         |
//   | - One number is taken from arr1 and the other from  |
//   |   arr2.                                             |
//   |                                                     |
//   | Return type: Array of Arrays                        |
//   | - Returns an array of pairs that sum to the target. |
//   | - Each pair is an array [num1, num2].               |
//   | - Returns an empty array if no such pairs exist.    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to keep track of numbers from   |
//   |   arr1.                                             |
//   | - Then iterate through arr2 to find complementing   |
//   |   numbers.                                          |
//   +=====================================================+

const findPairs = (
  arr1: number[] = [],
  arr2: number[] = [],
  target: number,
): number[][] => {
  let result = new Set<number[]>();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const sum = arr1[i] + arr2[j];
      if (sum === target) {
        result.add([arr1[i], arr2[j]]);
      }
    }
  }
  return Array.from(result.values());
};

// -------------------
// Single Pair Matching
// -------------------
console.log('Single Pair Matching:');
console.log('Input: [1, 2, 3], [4, 5, 6], 7');
console.log('Output: ', findPairs([1, 2, 3], [4, 5, 6], 7));
console.log('---------------');

// -------------------
// Multiple Pairs
// -------------------
console.log('Multiple Pairs:');
console.log('Input: [1, 2, 3], [7, 6, 5], 8');
console.log('Output: ', findPairs([1, 2, 3], [7, 6, 5], 8));
console.log('---------------');

// -------------------
// No Matching Pairs
// -------------------
console.log('No Matching Pairs:');
console.log('Input: [1, 2, 3], [7, 8, 9], 5');
console.log('Output: ', findPairs([1, 2, 3], [7, 8, 9], 5));
console.log('---------------');

// -------------------
// Empty Arrays
// -------------------
console.log('Empty Arrays:');
console.log('Input: [], [], 10');
console.log('Output: ', findPairs([], [], 10));
console.log('---------------');

// -------------------
// One Empty Array
// -------------------
console.log('One Empty Array:');
console.log('Input: [1, 2, 3], [], 4');
console.log('Output: ', findPairs([1, 2, 3], [], 4));
console.log('---------------');
