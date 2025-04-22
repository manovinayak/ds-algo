//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the first non-repeating       |
//   |   character in a string.                            |
//   |                                                     |
//   | Return type: string/null                            |
//   | - Returns the first non-repeating character if      |
//   |   found, otherwise returns null.                    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to count    |
//   |   the occurrences of each character.                |
//   | - Example with Map:                                 |
//   |   charCounts.set(c, (charCounts.get(c) || 0) + 1);  |
//   | - Example with object:                              |
//   |   charCounts[c] = (charCounts[c] || 0) + 1;         |
//   +=====================================================+

const firstNonRepeatingChar = (word: string) => {
  const valuesMap = new Map<string, number>();
  if (!word) {
    return null;
  }
  for (let i = 0; i < word.length; i++) {
    if (valuesMap.has(word[i])) {
      let count = valuesMap.get(word[i]) ?? 0;
      valuesMap.set(word[i], count + 1);
    } else {
      valuesMap.set(word[i], 1);
    }
  }

  for (const [key, value] of valuesMap.entries()) {
    if (value === 1) {
      return key;
    }
  }

  return null;
};

// ---------------
// All Unique
// ---------------
console.log('All Unique:');
console.log("Input: 'abcde'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('abcde')));
console.log('---------------');

// ---------------
// Some Duplicates
// ---------------
console.log('Some Duplicates:');
console.log("Input: 'aabbccdef'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log('---------------');

// ---------------
// All Duplicates
// ---------------
console.log('All Duplicates:');
console.log("Input: 'aabbcc'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('aabbcc')));
console.log('---------------');

// ---------------
// Empty String
// ---------------
console.log('Empty String:');
console.log("Input: ''");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('')));
console.log('---------------');

// ---------------
// Single Character
// ---------------
console.log('Single Character:');
console.log("Input: 'a'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('a')));
console.log('---------------');

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log('Multiple Non-Repeating Chars:');
console.log("Input: 'abcdaef'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('abcdaef')));
console.log('---------------');
