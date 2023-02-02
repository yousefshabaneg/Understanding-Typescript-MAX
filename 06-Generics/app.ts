/* Generics 
// Better type safety!!!
const names: Array<string> = [];
// names[0].split(' ');

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!.");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Joe", hobbies: ["Sports"] }, { age: 24 });
// const mergedObj2 = merge<string, number>("Sports", 24);
console.log(mergedObj);
// console.log(mergedObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no Value.";
  if (element.length === 1) {
    descriptionText = `Got 1 elements`;
  } else if (element.length > 1) {
    descriptionText = `Got  ${element.length} elements`;
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi There!"));
console.log(countAndDescribe(["Sports", "Text"]));
// console.log(countAndDescribe(10));error

// KEY OF

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Yousef" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: Array<T> = [];
  // private data: (string | number | boolean)[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const numberStorage = new DataStorage<number>();
numberStorage.addItem(5);
numberStorage.addItem(10);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj); //same object in memory
// objStorage.addItem({ name: "Yousef" });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

/* Generic Utility Types */

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // return { title, description, completeUntil: date };
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Yousef"];
// names.push("Sems");//error: readonly.
