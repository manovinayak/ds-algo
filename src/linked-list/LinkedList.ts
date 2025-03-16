
export class Node {
    value: string;
    next?: Node;
    constructor(value: string) {
        this.value = value;
        this.next = this;
    }
}

/**
 * Singly Connected Linked list
 */
export class LinkedList {
    head: Node;
    tail: Node;
    constructor(value: string) {
        const node = new Node(value);
        this.head = node;
        this.tail = node;
    }

    push(value: string): LinkedList {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }
}