//boolean,string,number

function add(n1: number, n2: number, printResult: boolean = false) {
  const result = n1 + n2;
  if (printResult) console.log(result);
  return result;
}

let number1 = 6;
const number2 = 7.3;
const printResult = true;

const result = add(number1, number2);
add(number1, number2, true);
console.log(result);
