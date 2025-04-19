export class DLNode {
  value: string;
  next: DLNode | null;
  prev: DLNode | null;
  constructor(value: string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  head: DLNode | null;
  tail: DLNode | null;
  length: number;
  constructor(value: string) {
    const newNode = new DLNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value: string): DoublyLinkedList {
    const newNode = new DLNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop(): DLNode | undefined | null {
    if (this.length === 0) {
      return undefined;
    }
    const temp = this.tail;
    if (this.tail && temp) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        }
        temp.prev = null;
      }
    }

    this.length--;
    return temp;
  }

  unshift(value: string): DoublyLinkedList {
    const newNode = new DLNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
    this.length++;
    return this;
  }

  shift(): DLNode | undefined | null {
    if (this.length === 0 || !this.head) {
      return undefined;
    }
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head && temp) {
        this.head.prev = null;
        temp.next = null;
      }
    }

    this.length--;
    return temp;
  }

  printForward() {
    let results: string[] = [];
    let current = this.head;
    while (current) {
      results.push(current.value);
      current = current.next;
    }
    console.log(`Length: `, results.length);
    console.log(results.join(' <-> '));
  }
}
