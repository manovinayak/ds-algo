function lengthOfLongestSubstring(s: string): number {
  const seen = new Set<string>();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    console.log(`char: ${char}`);
    console.log(`seen: `, seen);

    // Shrink the window until there are no duplicates
    while (seen.has(char)) {
      seen.delete(s[start]);
      start++;
    }

    seen.add(char);

    // Update the max length if needed
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
//console.log(lengthOfLongestSubstring('abcabcbb')); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring('abcbacbb')); // Output: 3 ("abc")

/*
console.log(lengthOfLongestSubstring('bbbbb')); // Output: 1 ("b")
console.log(lengthOfLongestSubstring('pwwkew')); // Output: 3 ("wke")
*/
