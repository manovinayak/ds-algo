//   +=====================================================+
//   |                 WRITE YOUR CODE HERE                |
//   | Description:                                        |
//   | - This function groups anagrams from an array       |
//   |   of strings.                                       |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array of arrays where each array       |
//   |   contains anagrams.                                |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to manage   |
//   |   the groups of anagrams.                           |
//   | - Example with Map:                                 |
//   |   anagramGroups.set(canonical, group);              |
//   | - Example with object:                              |
//   |   anagramGroups[canonical] = group;                 |
//   +=====================================================+

const groupAnagrams1 = (words: string[]): string[][] => {
  const results: string[][] = [];
  const anagramsMap = new Map<number, string[]>();

  for (const word of words) {
    let key = 0;
    for (let j = 0; j < word.length; j++) {
      key = key + (word.charCodeAt(j) || 0);
    }
    if (anagramsMap.has(key)) {
      const values = anagramsMap.get(key) ?? [];
      values.push(word);
      anagramsMap.set(key, values);
    } else {
      anagramsMap.set(key, [word]);
    }
  }

  const iterator = anagramsMap.entries();

  for (const [key, value] of iterator) {
    results.push(value);
  }

  return results;
};

const groupAnagrams = (words: string[]): string[][] => {
  const anagramsMap = new Map<string, string[]>();
  for (const word of words) {
    const key = Array.from(word.toLowerCase()).sort().join('');
    if (anagramsMap.has(key)) {
      anagramsMap.get(key)!.push(word);
    } else {
      anagramsMap.set(key, [word]);
    }
  }

  return Array.from(anagramsMap.values());
};

// ---------------
// Lowercase Anagrams
// ---------------
console.log('Lowercase Anagrams:');
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log(
  'Output: ',
  JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])),
);
console.log('---------------');

// ---------------
// Mixed Case Anagrams
// ---------------
console.log('Mixed Case Anagrams:');
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log(
  'Output: ',
  JSON.stringify(groupAnagrams(['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat'])),
);
console.log('---------------');

// ---------------
// No Anagrams
// ---------------
console.log('No Anagrams:');
console.log("Input: ['hello', 'world', 'test']");
console.log(
  'Output: ',
  JSON.stringify(groupAnagrams(['hello', 'world', 'test'])),
);
console.log('---------------');

// ---------------
// Empty Strings
// ---------------
console.log('Empty Strings:');
console.log("Input: ['', '', '']");
console.log('Output: ', JSON.stringify(groupAnagrams(['', '', ''])));
console.log('---------------');

// ---------------
// Single Characters
// ---------------
console.log('Single Characters:');
console.log("Input: ['a', 'b', 'a']");
console.log('Output: ', JSON.stringify(groupAnagrams(['a', 'b', 'a'])));
console.log('---------------');
