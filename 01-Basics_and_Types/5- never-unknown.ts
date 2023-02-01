let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "JOE";
console.log(userInput);
// userName = userInput; // Works with any only, with unknown the compiler knows that it may be any type.

if (typeof userInput === "string") {
  //extra type check with unknown.
  // the only benefit that the variable might be any type of value.
  userName = userInput;
}

// The Never type.
// Function guaranteed to be can't return any value.

function generateError(msg: string, code: number): never {
  // throw { message: msg, errorCode: code };
  while (true) {} // create infinite loop ?
}

generateError("An Error occurred", 500);
