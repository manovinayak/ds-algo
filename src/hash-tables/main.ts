import { HashTable } from './HashTable';

const myHashTable = new HashTable();

myHashTable.set('washers', 92);
myHashTable.set('lumber', 192);
myHashTable.set('bolts', 902);

console.log(`--------------SET--------------`);
console.log(JSON.stringify(myHashTable, null, 2));

console.log(`--------------GET--------------`);
console.log(`Washers :`, myHashTable.get('washers'));
console.log(`Lumber :`, myHashTable.get('lumber'));
console.log(`Belts :`, myHashTable.get('belts'));

console.log(`--------------KEYS--------------`);
console.log(`keys: `, myHashTable.keys());
