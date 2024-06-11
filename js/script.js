class User {
   constructor(name, age) {
      this.Name = name;
      this.userAge = age;
   }

   say() {
      console.log(`Имя пользователя: ${this.Name}, Возраст: ${this.userAge}`);
   }

   get age() {
      return this.userAge;
   }

   set age(num) {
      this.userAge = num;
   }

   get name() {
      return this.Name;
   }

   set name(n) {
      this.Name = n;
   }
}

const user = new User('Reha', 24);

user.name = 'Zhanar';
user.age = 51;

user.say();

