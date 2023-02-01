function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(res: number): void {
  console.log("Result: ", res);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(4, 2));

// Function Type Declaration
// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;

printResult(combineValues(6, 7));

addAndHandle(10, 20, (res) => {
  console.log("The Result: ", res);
});
