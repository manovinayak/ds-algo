import { Queue } from './queue';

const myQueue = new Queue(1);

console.log(`-----------------initialise-----------------`);
myQueue.print();

console.log(`-----------------enqueue-----------------`);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.print();

console.log(`-----------------dequeue-----------------`);
myQueue.dequeue();
myQueue.dequeue();
myQueue.print();
