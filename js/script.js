'use strict'

// const now = new Date('1999-08-02');

// console.log(now);
// console.log(now.setHours(20))
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

let start = new Date();

for (let i = 0; i < 100000; i++) {
   let some = i ** 3;
}

let end = new Date();

alert(`Операция выполнилась за ${end - start} миллисекунд`);

