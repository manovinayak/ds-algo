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
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
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

    this.length = this.length - 1;
    return temp;
  }

  get(index: number): DLNode | undefined | null {
    if (this.length === 0 || index < 0 || index >= this.length) {
      return undefined;
    }
    if (index < this.length / 2) {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        if (temp) {
          temp = temp.next;
        }
      }
      return temp;
    } else {
      let temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        if (temp) {
          temp = temp.prev;
        }
      }
      return temp;
    }
  }

  set(index: number, value: string): boolean {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: string): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length - 1) {
      this.push(value);
      return true;
    }
    const newNode = new DLNode(value);
    let before = this.get(index - 1);
    if (before && before.next) {
      let after = before.next;
      before.next = newNode;
      newNode.prev = before;
      newNode.next = after;
      after.prev = newNode;
      this.length++;
    }
    return true;
  }

  remove(index: number): DLNode | undefined | null {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.get(index);
    if (temp && temp.prev && temp.next) {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      temp.prev = null;
      temp.next = null;
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
    console.log(`Length: `, this.length);
    console.log(results.join(' <-> '));
  }
}
