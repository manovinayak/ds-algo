import { BST } from './BST';

const myBST = new BST();

myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

console.log(JSON.stringify(myBST, null, 2));
console.log(myBST.contains(27));
console.log(myBST.contains(82));
console.log(myBST.contains(100));
