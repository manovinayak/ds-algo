//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the length of the longest     |
//   |   consecutive sequence of integers in the given     |
//   |   array.                                            |
//   |                                                     |
//   | Return type: number                                 |
//   | - Returns the length of the longest consecutive     |
//   |   sequence.                                         |
//   | - Returns 0 if the array is empty.                  |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to track unique numbers.        |
//   | - The function iterates through each unique number  |
//   |   and finds streaks of consecutive numbers.         |
//   +=====================================================+

const longestConsecutiveSequence = (arr: number[] = []) => {
  const numSet = new Set(arr);
  let longestStreak = 0;

  for (const num of arr) {
    if (!numSet.has(num - 1)) {
      let currentStreak = 1;
      let currentNum = num;

      while (numSet.has(currentNum + 1)) {
        currentStreak++;
        currentNum++;
      }
      longestStreak = Math.max(currentStreak, longestStreak);
    }
  }

  return longestStreak;
};

// -------------------
// No Consecutive Sequence
// -------------------
console.log('No Consecutive Sequence:');
console.log('Input: [1, 3, 5]');
console.log('Output: ', longestConsecutiveSequence([1, 3, 5]));
console.log('---------------');

// -------------------
// Single Element
// -------------------
console.log('Single Element:');
console.log('Input: [1]');
console.log('Output: ', longestConsecutiveSequence([1]));
console.log('---------------');

// -------------------
// Consecutive Sequence
// -------------------
console.log('Consecutive Sequence:');
console.log('Input: [1, 2, 3, 4, 5]');
console.log('Output: ', longestConsecutiveSequence([1, 2, 3, 4, 5]));
console.log('---------------');

// -------------------
// Unordered Input
// -------------------
console.log('Unordered Input:');
console.log('Input: [5, 2, 3, 1, 4]');
console.log('Output: ', longestConsecutiveSequence([5, 2, 3, 1, 4]));
console.log('---------------');

// -------------------
// Empty Array
// -------------------
console.log('Empty Array:');
console.log('Input: []');
console.log('Output: ', longestConsecutiveSequence([]));
console.log('---------------');

// -------------------
// Multiple Sequences
// -------------------
console.log('Multiple Sequences:');
console.log('Input: [1, 2, 3, 10, 11, 12]');
console.log('Output: ', longestConsecutiveSequence([1, 2, 3, 10, 11, 12]));
console.log('---------------');

// -------------------
// Multiple Sequences ending with no
// -------------------
console.log('Multiple Sequences with no:');
console.log('Input: [1, 2, 3, 10, 11, 12, 78, 89]');
console.log(
  'Output: ',
  longestConsecutiveSequence([1, 2, 3, 10, 11, 12, 78, 89, 5, 6, 7, 8, 9]),
);
console.log('---------------');
