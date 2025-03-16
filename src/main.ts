import {LinkedList} from "./linked-list/LinkedList";

const testLinkedList = () => {
    const linkedList = new LinkedList('Mano');
    linkedList.push('Mithraa');
    linkedList.push('Venba');
    console.log(`Final Linked List:`, linkedList);
}

testLinkedList();
