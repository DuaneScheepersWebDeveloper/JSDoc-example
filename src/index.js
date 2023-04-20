// @ts-nocheck
const {add,subtract,divide,multiply} = require('./calculator');

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Smith";
/**
 * @file index.js is the root file for this example app.
 * @author Duane Scheepers
 * @see <a href="https://duanescheeperswebdeveloper.github.io/Duane-Scheepers-Personal-Resume/">
 * Duane Scheepers</a>
 */



/**
 * Array
 * @type {Array<number>}
 */
const grades = [98, 89, 12.4, 3, 8];

/**
 * @type{{id:number, text:string|2}}
 */
const todo = {
  id: 1,
  text: "Hello",
};
/**
 *
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};
console.log(calculateTax(100, 0.5));

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student1 = {
  id: 1,
  name: "Jerry",
  age: 20,
  isActive: false,
};
/**
 * Class to create a person object
 *
 */
class Person {
  /**
   *
   * @param {Object} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons Name
     */
    this.name = personInfo.name;
    /**
     * @property {number} age Persons Age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting function with name and age
   * @returns void
   */
  greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age}`);
  }
}
/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
    name:'Kyle',
    age:30
});

console.log(person1.greet());

console.log(add(20,50));

/**
 * Free CodeCamp example
 * 
 * 
 */
// import subtract from "./math_functions.js";
// Only change code above this line
// subtract(7,4);
console.log(subtract(7,4));

