## Queue Using Stacks: Dequeue ( ** Interview Question)

Implement a method called dequeue() for a MyQueue class that removes and returns the element from the front of the queue. The MyQueue class should use two Stack objects to store and manipulate the elements.

The function should remove the front element from the queue and return its value. If the queue is empty, the function should return null.

Constraints:

- The MyQueue class should be implemented using two Stack objects provided in the Stack class.
- You cannot use any other data structures or built-in queue manipulation methods for this task.

Class Definition:
```typescript
class MyQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
 
    // ... other methods ...
 
    dequeue() {
        // Your implementation goes here
    }
}
```

Example 1:

Suppose you have a MyQueue object, queue, with the following values:
[1, 2, 3, 4]

After calling the dequeue() function:
```typescript
let dequeuedValue = queue.dequeue();
```

The queue should now have the following values:
[2, 3, 4], and the dequeuedValue should be 1.

Example 2:

Now suppose you have a MyQueue object, queue, with the following values: ['apple', 'banana', 'orange', 'grape']

After calling the dequeue() function:
```typescript
let dequeuedValue = queue.dequeue();
```

The queue should now have the following values:
['banana', 'orange', 'grape'], and the dequeuedValue should be 'apple'.