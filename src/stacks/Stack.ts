class SNode {
  value: number;
  next: SNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  top: SNode | null;
  length: number;
  constructor(value: number) {
    this.top = new SNode(value);
    this.length = 1;
  }
  push(value: number): Stack {
    const sNode = new SNode(value);
    if (this.length === 0) {
      this.top = sNode;
    } else {
      sNode.next = this.top;
      this.top = sNode;
    }
    this.length++;
    return this;
  }

  pop(): SNode | undefined {
    if (this.length === 0) {
      return undefined;
    } else {
      if (!this.top) {
        return undefined;
      }
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  print() {
    let temp = this.top;
    let result: number[] = [];
    while (temp) {
      result.push(temp.value);
      temp = temp.next;
    }
    console.log(`length: `, this.length);
    console.log(`Stack: `, JSON.stringify(this, null, 2));
    console.log(`values: `, result.join(' <-- '));
  }
}
