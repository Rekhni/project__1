const arr = ['Reha', 'Omir', 'Reha'];

const set = new Set(arr);

// set.add('Ivan')
//     .add('Reha');

// console.log(set);

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// console.log(unique(arr));

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);

// set.forEach((value, valueAgaing) => {
//     console.log(value, valueAgaing);
// })

console.log(set.values());
console.log(set.keys());
console.log(set.entries());