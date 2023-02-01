//Advanced Types.
/*1-Intersection Types*/
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

interface Human {
  age: number;
}

type ElevatedEmployee = Admin & Employee & Human;

const e1: ElevatedEmployee = {
  name: "Yousef",
  privileges: ["Create-Server"],
  startDate: new Date(),
  age: 40,
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Number; // => type Universal = number
const u: Universal = 5;

/*2- Type Guard
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a}${b}`;
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) console.log(`Privileges: ${emp.privileges}`);

  if ("startDate" in emp) console.log(`Start Date: ${emp.startDate}`);
}

// printEmployeeInfo(e1);
// printEmployeeInfo({ name: "Joe", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

/* 3-Union Discriminated 

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 20 });

// const userInputEl = <HTMLInputElement>document.getElementById("user-input")! or as HTMLInputElement;
const userInputEl = document.getElementById("user-input");

if (userInputEl) (userInputEl as HTMLInputElement).value = "Hi There!";
*/

/* Index Properties 

interface ErrorContainer {
  // {email: 'Not a valid Email', username: 'Must start with a char'}
  [prop: string]: string;
}

const error: ErrorContainer = {
  email: "Not a valid Email",
  username: "Must Start with a capital character",
};
*/
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a}${b}`;
  }
  return a + b;
}

const result = add(11, 5);
const result2 = add("you", "sef");
// console.log(result2.split("u"));

/* Optional Chaining */

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? "Default";

console.log(storedData);
