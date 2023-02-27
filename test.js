// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Lion extends Cat {
//     speak() {
//       super.speak();
//       console.log(`${this.name} roars.`);
//     }
// }

// const l = new Lion("Fuzzy");
// l.speak();

// //

// class ValidationError extends Error {
//   constructor(message) {
//     super(message); // call parent class constructor
//     this.name = "ValidationError";
//     this.code = "42";
//   }

//   printCustomerMessage() {
//     return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
//   }
// }

// try {
//   throw new ValidationError("Not a valid phone number");
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.log(error.name); // Now this is ValidationError!
//     console.log(error.printCustomerMessage());
//   } else {
//     console.log("Unknown error", error);
//     throw error;
//   }
// }

// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }

//   getCarInfo() {
//     return "this is model " + this.model + " with color " + this.color;
//   }

//   customizeCar() {
//     return this.model + " will be painted to color black";
//   }
// }

// const tesla = new Car("x", "white");
// console.log(tesla);
// console.log(tesla.getCarInfo());
// console.log(tesla.customizeCar("aaa"));

var _ = require("lodash");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var listOfNumbers = "";

listOfNumbers = _.chunk(numbers, 2);
console.log(listOfNumbers);

listOfNumbers = _.chunk(numbers, 3);
console.log(listOfNumbers);

listOfNumbers = _.chunk(numbers, 1);
console.log(listOfNumbers);
