import { DoublyLinkedList } from './doubly-linked-list';

const doublyLinkedList = new DoublyLinkedList('Sydney');
console.log(`-------------------push-----------------`);
doublyLinkedList.push('Melbourne');
doublyLinkedList.push('Brisbane');
doublyLinkedList.printForward();

console.log(`-------------------pop-----------------`);
doublyLinkedList.pop();
doublyLinkedList.pop();
doublyLinkedList.pop();
doublyLinkedList.printForward();
console.log(`Length: `, doublyLinkedList.length);

console.log(`-------------------push-----------------`);
doublyLinkedList.push('Sydney');
doublyLinkedList.push('Melbourne');
doublyLinkedList.push('Brisbane');
doublyLinkedList.printForward();

console.log(`--------------------unshift-----------------`);
doublyLinkedList.unshift('Perth');
doublyLinkedList.printForward();
console.log(`--------------------unshift-----------------`);
doublyLinkedList.unshift('Darwin');
doublyLinkedList.printForward();
console.log(`--------------------shift-----------------`);
doublyLinkedList.shift();
doublyLinkedList.printForward();
