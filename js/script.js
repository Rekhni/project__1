'use strict';

const birthday = Symbol('birthday');

const user = {
    name: "Alex",
    surname: "Smith",
    [birthday]: '02/08/1999',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'birthday', {value: "02/08/1999", writable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

for (let key in user) console.log(key);

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

console.log(Object.getOwnPropertyDescriptor(user, birthday));

// user.birthday = '02/02/2000';

// console.log(user);

// enumerable
// writable
// configurable