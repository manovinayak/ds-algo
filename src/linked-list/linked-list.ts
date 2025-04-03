class LNode {
  value: string;
  next: LNode | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: LNode | null;
  tail: LNode | null;
  length: number = 0;

  constructor(value: string) {
    const temp = new LNode(value);
    this.head = temp;
    this.tail = temp;
    this.length++;
  }

  push(value: string): LinkedList {
    const temp = new LNode(value);
    if (!this.head && !this.tail) {
      this.head = temp;
      this.tail = temp;
    }
    if (this.tail) {
      this.tail.next = temp;
      this.tail = temp;
    }
    this.length++;
    return this;
  }

  pop(): LinkedList | undefined {
    if (!this.head || !this.tail) {
      return undefined;
    }

    let prev = this.head;
    let temp = this.head;
    while (temp.next !== null) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  unshift(value: string): LinkedList {
    const temp = new LNode(value);
    if (!this.head || !this.tail) {
      this.head = temp;
      this.tail = temp;
      this.length++;
      return this;
    }

    temp.next = this.head;
    this.head = temp;
    this.length++;
    return this;
  }

  shift(): LinkedList | boolean {
    if (!this.head || !this.tail) {
      return false;
    }

    if (this.head && this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return this;
  }

  get(index: number): LNode | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      if (temp?.next) {
        temp = temp.next;
      }
    }

    return temp ?? undefined;
  }

  set(index: number, value: string): LinkedList | boolean {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
    } else {
      return false;
    }

    return this;
  }

  remove(index: number): LinkedList | boolean | undefined {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let temp = this.head;
    let prev = this.head;

    for (let i = 0; i < index; i++) {
      if (temp?.next) {
        prev = temp;
        temp = temp.next;
      }
    }

    if (temp?.next && prev) {
      prev.next = temp.next;
    }
    this.length--;

    return this;
  }
}
