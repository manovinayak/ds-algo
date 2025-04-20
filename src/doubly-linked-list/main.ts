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

console.log(`--------------------get-----------------`);
console.log(doublyLinkedList.get(2));

console.log(`--------------------set-----------------`);
console.log(doublyLinkedList.set(2, 'Cairns'));
doublyLinkedList.printForward();

console.log(`--------------------insert-----------------`);
doublyLinkedList.insert(1, 'Hobart');
doublyLinkedList.printForward();

console.log(`--------------------remove-----------------`);
doublyLinkedList.remove(2);
doublyLinkedList.printForward();
