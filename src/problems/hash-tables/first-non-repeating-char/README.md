## HT: First Non-Repeating Character ( ** Interview Question)

In this exercise, your task is to write a JavaScript function named firstNonRepeatingChar.

The function will take a string as its only parameter. Your goal is to find and return the first character in the string that does not repeat. If every character in the string repeats, or if the string is empty, the function should return null.

Examples:

- firstNonRepeatingChar("aabbcc") should return null because all the characters appear more than once.
- firstNonRepeatingChar("aabbcde") should return 'd' because it's the first non-repeating character.

You can solve this problem using either of the two types of hash tables available in JavaScript:

1. Map: A built-in object that lets you store key-value pairs in an organized manner.
2. Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.

Feel free to try solving the exercise using both a Map and an Object to get the hang of using these different types of hash tables.