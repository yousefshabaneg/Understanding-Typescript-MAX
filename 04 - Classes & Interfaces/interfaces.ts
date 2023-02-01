//interface as a function type
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;
  name?: string;
  constructor(n?: string) {
    if (n) this.name = n;
  }
  outputName?: string | undefined;

  greet(phrase: string): void {
    if (this.name) console.log(`${phrase} ${this.name}`);
    else console.log("Hi!");
  }
}

let user1: Greetable;
user1 = new Person();

// user1.name = "yOUSEF"; //readonly
user1.greet("Welcome");

console.log(add(1, 2));
