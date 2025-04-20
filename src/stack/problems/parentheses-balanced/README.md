## Stack: Parentheses Balanced ( ** Interview Question)

Implement a function called isBalancedParentheses() that checks if a given string containing parentheses is balanced or not.

Input:
 - A string parentheses.

Output:
 - The function should return a boolean value, true if the input string contains balanced parentheses, and false if not.

Constraints:

 - You must use the provided Stack class to check if the parentheses are balanced.

 - You cannot use built-in string manipulation methods for this task.

Function Signature:
```typescript
function isBalancedParentheses(parentheses) {
    // Your implementation goes here
}
```

Example 1:
```typescript
const input = "(()())";
const output = isBalancedParentheses(input);
```

The output should be true, as the input string contains balanced parentheses.

Example 2:
```typescript
const input = "(()";
const output = isBalancedParentheses(input);
```

The output should be false, as the input string contains unbalanced parentheses.

Example 3:
```typescript
const input = ")(";
const output = isBalancedParentheses(input);
```

The output should be false, as the input string contains unbalanced parentheses.