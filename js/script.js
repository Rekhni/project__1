'use strict'

// function showThis(a, b) {
//    console.log(this);
//    function sum() {
//       console.log(this);
//       return a + b;
//    }
//    console.log(sum());
// }

// showThis(4, 5);


// const obj = {
//    a: 20,
//    b: 15,
//    sum: function() {
//       function shout() {
//          console.log(this);
//       }
//       shout();
//    }
// };

// obj.sum();

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function() {
//       console.log(`Hello ${this.name}`);
//    }
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + ' ' + surname);
// }

// const user = {
//    name: 'Reha'
// };

// sayName.call(user, 'Kuanysh');
// sayName.apply(user, ['Kuanysh']);

// function count(num) {
//    return this * num;
// }

// const double = count.bind(2);
// console.log(double(5));



// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта


// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//    this.style.backgroundColor = 'green';
// });


// const obj = {
//    num: 5,
//    sayNumber: function() {
//       const say = () => {
//          console.log(this.num);
//       };
//       say();
//    }
// }  

// obj.sayNumber();


const double = (a, b) => a * b;

console.log(double(11, 3));
