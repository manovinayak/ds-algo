class LNode {
  value: string;
  next: LNode | null;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LNode | null;
  tail: LNode | null;
  length: number;

  constructor(value: string) {
    const node = new LNode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value: string): LinkedList {
    const newNode = new LNode(value);
    if (this.head) {
      this.head.next = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  pop(): LinkedList | boolean {
    let temp, pre;
    if (!this.head) {
      return false;
    } else {
      temp = this.head;
      pre = this.head;
      while (temp.next !== null) {
        pre = temp;
        temp = temp.next;
      }
      pre.next = null;
      this.tail = pre;
      this.length--;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return this;
    }
  }

  unshift(value: string): LinkedList {
    const node = new LNode(value);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    return this;
  }
}

const main = () => {
  const linkedList = new LinkedList('Melbourne');
  console.log(linkedList);
  console.log(`----------------PUSH---------------`);
  console.log(linkedList.push('Sydney'));
  console.log(`----------------POP---------------`);
  console.log(linkedList.pop());
  console.log(linkedList.pop());
  console.log(`----------------PUSH---------------`);
  console.log(linkedList.push('Brisbane'));
  console.log(`----------------UNSHIFT---------------`);
  console.log(linkedList.unshift('Perth'));
  console.log(`----------------POP---------------`);
  console.log(linkedList.pop());
  console.log(linkedList.pop());
  console.log(`----------------UNSHIFT---------------`);
  console.log(linkedList.unshift('Brisbane'));
};

main();
