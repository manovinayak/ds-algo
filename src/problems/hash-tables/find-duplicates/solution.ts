//   +======================================================+
//   |                WRITE YOUR CODE HERE                  |
//   | Description:                                         |
//   | - This function finds duplicate numbers in an array. |
//   |                                                      |
//   | Return type: array                                   |
//   | - Returns an array containing the duplicate numbers. |
//   |                                                      |
//   | Tips:                                                |
//   | - You can use either a Map or an object for          |
//   |   counting occurrences of each number.               |
//   | - Example with Map:                                  |
//   |   numCounts.set(num, (numCounts.get(num) || 0) + 1); |
//   | - Example with object:                               |
//   |   numCounts[num] = (numCounts[num] || 0) + 1;        |
//   +======================================================+

const findDuplicates = (arr: number[] = []): number[] => {
  const valuesMap = new Map<number, number>();
  const duplicates: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let count = valuesMap.get(arr[i]);
    if (count) {
      count++;
      valuesMap.set(arr[i], count);
      if (count > 1) {
        duplicates.push(arr[i]);
      }
    } else {
      valuesMap.set(arr[i], 1);
    }
  }
  return duplicates;
};

// ---------------
// No Duplicates
// ---------------
console.log('No Duplicates:');
console.log('Input: [1, 2, 3, 4, 5]');
console.log('Output: ', JSON.stringify(findDuplicates([1, 2, 3, 4, 5])));
console.log('---------------');

// ---------------
// Single Duplicate
// ---------------
console.log('Single Duplicate:');
console.log('Input: [1, 2, 2, 3, 4]');
console.log('Output: ', JSON.stringify(findDuplicates([1, 2, 2, 3, 4])));
console.log('---------------');

// ---------------
// Multiple Duplicates
// ---------------
console.log('Multiple Duplicates:');
console.log('Input: [1, 1, 2, 2, 3, 4]');
console.log('Output: ', JSON.stringify(findDuplicates([1, 1, 2, 2, 3, 4])));
console.log('---------------');

// ---------------
// Repeating Duplicates
// ---------------
console.log('Repeating Duplicates:');
console.log('Input: [1, 1, 1, 2, 2, 2, 3]');
console.log('Output: ', JSON.stringify(findDuplicates([1, 1, 1, 2, 2, 2, 3])));
console.log('---------------');

// ---------------
// Empty Array
// ---------------
console.log('Empty Array:');
console.log('Input: []');
console.log('Output: ', JSON.stringify(findDuplicates([])));
console.log('---------------');

// ---------------
// Single Element
// ---------------
console.log('Single Element:');
console.log('Input: [1]');
console.log('Output: ', JSON.stringify(findDuplicates([1])));
console.log('---------------');
