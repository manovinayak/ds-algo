import { LinkedList } from './linked-list';

const print = (linkedList: LinkedList) => {
  console.log(JSON.stringify(linkedList, null, 2));
};

const main = () => {
  const linkedList = new LinkedList('Melbourne');
  linkedList.push('Sydney');
  linkedList.push('Adelaide');
  linkedList.pop();
  linkedList.pop();
  linkedList.pop();
  linkedList.unshift('Melbourne');
  linkedList.unshift('Perth');
  linkedList.pop();
  linkedList.pop();
  console.log(linkedList.shift());
  linkedList.push('Adelaide');
  linkedList.push('Melbourne');
  linkedList.shift();
  linkedList.shift();
  linkedList.push('Adelaide');
  linkedList.push('Melbourne');
  linkedList.push('Perth');
  linkedList.push('Sydney');
  linkedList.push('Hobart');
  linkedList.remove(3);
  linkedList.push('Darwin');
  linkedList.set(2, 'Brisbane');
  print(linkedList);
};

main();
