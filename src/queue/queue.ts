class QNode {
  value: number;
  next: QNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  first: QNode | null;
  last: QNode | null;
  length: number;

  constructor(value: number) {
    const qNode = new QNode(value);
    this.first = qNode;
    this.last = qNode;
    this.length = 1;
  }

  enqueue(value: number): Queue {
    const qNode = new QNode(value);
    if (this.length === 0) {
      this.first = qNode;
      this.last = qNode;
    } else {
      if (this.last) {
        this.last.next = qNode;
        this.last = qNode;
      }
    }
    this.length++;
    return this;
  }

  dequeue(): QNode | undefined {
    if (this.length === 0) {
      return undefined;
    } else {
      if (!this.first) {
        return undefined;
      }
      let temp = this.first;
      this.first = this.first.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  print() {
    console.log(`Queue: `, JSON.stringify(this, null, 2));
    console.log(`Length: `, this.length);
    let results: number[] = [];
    let temp = this.first;
    while (temp) {
      results.push(temp.value);
      temp = temp.next;
    }
    console.log(`Values: `, results.join(` <-- `));
  }
}
