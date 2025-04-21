class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: BSTNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: number): BST | undefined {
    const bstNode = new BSTNode(value);
    if (this.root === null) {
      this.root = bstNode;
    }
    let temp = this.root;
    while (true) {
      if (temp.value === value) {
        return undefined;
      }
      if (value < temp.value) {
        if (temp.left === null) {
          temp.left = bstNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = bstNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value: number): boolean {
    if (this.root === null) {
      return false;
    }
    let temp: BSTNode | null = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
