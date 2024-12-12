// mathOperations.js

export function add(num1, num2) {
  return num1 + num2;
}

export function subtract(num1, num2) {
  return num1 - num2;
}

//add devide (Return 'Error' if trying to divide by zero)
export function divide(num1, num2) {
  if (num2 === 0) {
    return "Error";
  }
  return num1 / num2;
}

//add multiply
export function multiply(num1, num2) {
  return num1 * num2;
}
