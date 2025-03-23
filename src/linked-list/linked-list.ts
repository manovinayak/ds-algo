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
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
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
    this.length++;
    return this;
  }

  shift(): LinkedList | boolean {
    if (!this.head) {
      return false;
    } else {
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
    }
    return this;
  }

  get(index: number): LNode | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      for (let i = 0; i < this.length; i++) {
        if (i === index) {
          return temp;
        }
        if (temp.next) {
          temp = temp.next;
        }
      }
    }
  }

  set(index: number, value: string): LinkedList | boolean {
    const node = this.get(index);
    if (node) {
      node.value = value;
    } else {
      return false;
    }
    return this;
  }

  remove(index: number): LinkedList {
    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      let previous = this.get(index - 1);
      let next = this.get(index + 1);
    }
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
  console.log(`----------------SHIFT---------------`);
  console.log(linkedList.shift());
  console.log(`----------------PUSH---------------`);
  console.log(linkedList.push('Sydney'));
  console.log(linkedList.push('Melbourne'));
  console.log(`----------------SHIFT---------------`);
  console.log(linkedList.shift());
  console.log(`----------------POP---------------`);
  console.log(linkedList.pop());
  console.log(`----------------SHIFT---------------`);
  console.log(linkedList.shift());
  console.log(`----------------PUSH---------------`);
  console.log(linkedList.push('Sydney'));
  console.log(linkedList.push('Melbourne'));
  console.log(linkedList.push('Perth'));
  console.log(JSON.stringify(linkedList.push('Adelaide'), null, 2));
  console.log(`----------------GET---------------`);
  console.log(linkedList.get(2));
  console.log(`----------------SET---------------`);
  console.log(JSON.stringify(linkedList.set(2, 'Brisbane'), null, 2));
  console.log(JSON.stringify(linkedList.set(9, 'Brisbane'), null, 2));
};

main();
