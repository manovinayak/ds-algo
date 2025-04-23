//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds two numbers in the array      |
//   |   that add up to the target value.                  |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array containing the indices of the    |
//   |   two numbers that sum to the target.               |
//   | - Returns an empty array if no such numbers exist.  |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to track    |
//   |   the numbers and their indices.                    |
//   | - Example with Map:                                 |
//   |   numMap.set(num, i);                               |
//   | - Example with object:                              |
//   |   numObject[num] = i;                               |
//   +=====================================================+

const twoSum = (arr: number[], sum: number): number[] => {
  const resultMap = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const complement = sum - arr[i];
    if (resultMap.has(complement)) {
      return [resultMap.get(complement)!, i];
    } else {
      resultMap.set(arr[i], i);
    }
  }
  return [];
};

// ---------------
// Unique Solution
// ---------------
console.log('Unique Solution:');
console.log('Input: [2, 7, 11, 15], Target: 9');
console.log('Output: ', JSON.stringify(twoSum([2, 7, 11, 15], 9)));
console.log('---------------');

// ---------------
// Duplicate Numbers
// ---------------
console.log('Duplicate Numbers:');
console.log('Input: [3, 3, 11, 15], Target: 6');
console.log('Output: ', JSON.stringify(twoSum([3, 3, 11, 15], 6)));
console.log('---------------');

// ---------------
// No Solution
// ---------------
console.log('No Solution:');
console.log('Input: [2, 7, 11, 15], Target: 30');
console.log('Output: ', JSON.stringify(twoSum([2, 7, 11, 15], 30)));
console.log('---------------');

// ---------------
// Negative Numbers
// ---------------
console.log('Negative Numbers:');
console.log('Input: [-1, -2, -3, -4, -5], Target: -8');
console.log('Output: ', JSON.stringify(twoSum([-1, -2, -3, -4, -5], -8)));
console.log('---------------');

// ---------------
// Empty Array
// ---------------
console.log('Empty Array:');
console.log('Input: [], Target: 0');
console.log('Output: ', JSON.stringify(twoSum([], 0)));
console.log('---------------');
// ---------------
// Same Elements
// ---------------
console.log('Same Elements:');
console.log('Input: [7, 7, 7, 7], Target: 14');
console.log('Output: ', JSON.stringify(twoSum([7, 7, 7, 7], 14)));
console.log('---------------');
