'use strict'

class Rectangle {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }

   calcArea() {
      return this.height * this.width;
   }
}

class ColoredRectangleWithText extends Rectangle {
   constructor(height, width, text, bgColor) {
      super(height, width);
      this.bgColor = bgColor;
      this.text = text;
   }

   showMyProps() {
      console.log(`Text: ${this.text}, bgColor: ${this.bgColor}`);
   }
}

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 200)

// console.log(square.calcArea());
// console.log(long.calcArea());

const res = new ColoredRectangleWithText(30, 30, 'Reha is the best!', 'green');

res.showMyProps();
console.log(res.calcArea());