/* let and const

let age = 30;
age = 54;

const userName = "yousef";
// userName = "Joe";

function add(a: number, b: number) {
  var result;
  result = a + b;
  return result;
}

// console.log(result);

if (age > 20) {
  var isOld = true;
}

// console.log(isOld);
*/

/* Arrow Function 
const add = (a: number, b: number = 1) => a + b;

console.log(add(5, 1));

const printOutput = (output: string | number) => {
  console.log(output);
};

const printOutput2: (a: string | number) => void = (output) =>
  console.log(output);

printOutput(add(5, 2));
*/

/* Spread Operator */
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  fName: "Yousef",
  age: 30,
};

const copiedPerson = { ...person };

/* Rest Operator */

const add = (...nums: number[]) => {
  let result = 0;
  // nums.forEach((n) => (result += n));
  result = nums.reduce((acc, cur) => acc + cur, 0);
  return result;
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remaining] = activeHobbies;
console.log(hobby1, hobby2, remaining);

const { fName, age } = person;
