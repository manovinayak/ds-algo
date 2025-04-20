import { Stack } from './Stack';

const myStack = new Stack(1);

console.log('-----------------initialise-----------------');
myStack.print();

console.log('-----------------push-----------------');
myStack.push(2);
myStack.print();

console.log('-----------------pop-----------------');
myStack.pop();
myStack.pop();
myStack.print();
