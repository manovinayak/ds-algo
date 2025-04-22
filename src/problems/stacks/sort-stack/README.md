## Stack: Sort Stack ( ** Interview Question)

Implement a function called sortStack() that takes a stack of integers as input and sorts the stack in ascending order (with the smallest element on top) using an additional temporary stack.

Input:

- A Stack object stack containing integer values.

Output:

- The function should modify the original input stack, sorting its elements in ascending order.

Constraints:

- You must use the provided Stack class to store and manipulate the elements.

- You cannot use any other data structures or built-in sorting methods for this task.

Function Signature:
```typescript
function sortStack(stack) {
    // Your implementation goes here
}
```

Example 1:

Suppose you have a Stack object, stack, with the following values:
[5, 3, 1, 4, 2]

After calling the sortStack() function:
```typescript
sortStack(stack);
```

The stack should now have the following values:
[5, 4, 3, 2, 1]

Example 2:

Suppose you have a Stack object, stack, with the following values:
[-3, 0, 7, 1, -2]

After calling the sortStack() function:
```typescript
sortStack(stack);
```

The stack should now have the following values:
[7, 1, 0, -2, -3]