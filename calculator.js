// calculator.js

import {
  display,
  numberButtons,
  operatorButtons,
  equalsButton,
  clearButton,
} from "./domElements.js";
import { add, subtract, divide } from "./mathOperations.js";

let currentInput = "";
let previousInput = "";
let operator = null;
let expression = "";

// Update the display with the current expression
const updateDisplay = () => (display.textContent = expression || "0");

// Handle number button clicks
const handleNumberClick = ({ target }) => {
  currentInput =
    operator && currentInput === ""
      ? target.textContent
      : currentInput + target.textContent;
  expression = previousInput + (operator ? ` ${operator} ` : "") + currentInput;
  updateDisplay();
};

// Handle operator button clicks
const handleOperatorClick = ({ target }) => {
  if (currentInput === "") return; // Ignore if there's no number
  if (previousInput) handleEqualsClick(); // Calculate result before operator if needed

  operator = target.textContent;
  previousInput = currentInput;
  currentInput = "";
  expression = previousInput + ` ${operator} `;
  updateDisplay();
};

// Handle equals button click
const handleEqualsClick = () => {
  if (!operator || currentInput === "") return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (operator === "+") {
    result = add(prev, current);
  } else if (operator === "-") {
    result = subtract(prev, current);
  } else if (operator === "/") {
    result = divide(prev, current);
  }

  currentInput = result.toString();
  expression = currentInput;
  operator = null;
  previousInput = "";
  updateDisplay();
};

// Handle clear button click
const handleClearClick = () => {
  currentInput = previousInput = operator = "";
  expression = "";
  updateDisplay();
};

// Adding event listeners to buttons
numberButtons.forEach((button) =>
  button.addEventListener("click", handleNumberClick)
);
operatorButtons.forEach((button) =>
  button.addEventListener("click", handleOperatorClick)
);
equalsButton.addEventListener("click", handleEqualsClick);
clearButton.addEventListener("click", handleClearClick);

// // calculator.js

// import {
//   display,
//   numberButtons,
//   operatorButtons,
//   equalsButton,
//   clearButton,
// } from "./domElements.js";
// import { add, subtract } from "./mathOperations.js";

// let currentInput = "";
// let previousInput = "";
// let operator = null;
// let expression = "";

// // Function to update the display with the expression
// function updateDisplay() {
//   display.textContent = expression || "0";
// }

// // Function to handle number button clicks
// function handleNumberClick(event) {
//   const number = event.target.textContent;

//   // If we have an operator and the current input is empty, we should allow adding a number after the operator
//   if (operator && currentInput === "") {
//     currentInput = number; // Start a new number after the operator
//   } else {
//     currentInput += number; // Continue building the current input number
//   }

//   expression = previousInput + (operator ? ` ${operator} ` : "") + currentInput; // Update the full expression
//   updateDisplay();
// }

// // Function to handle operator button clicks
// function handleOperatorClick(event) {
//   if (currentInput === "") return; // Ignore if there's no number to operate on

//   // If an operator was already clicked, we calculate the result before continuing
//   if (previousInput !== "" && currentInput !== "") {
//     handleEqualsClick(); // Calculate the result first before continuing with the new operator
//   }

//   operator = event.target.textContent; // Store the new operator
//   previousInput = currentInput; // Store the previous number
//   currentInput = ""; // Clear current input for the next number

//   expression = previousInput + ` ${operator} `; // Update the expression with operator
//   updateDisplay();
// }

// // Function to handle equals button click
// function handleEqualsClick() {
//   if (operator === null || currentInput === "") return; // No calculation if operator or current input is empty

//   const prev = parseFloat(previousInput);
//   const current = parseFloat(currentInput);
//   let result;

//   // Perform the calculation based on the selected operator
//   if (operator === "+") {
//     result = add(prev, current);
//   } else if (operator === "-") {
//     result = subtract(prev, current);
//   }

//   currentInput = result.toString(); // Set the result as the current input
//   expression = currentInput; // Update the expression to show the result
//   operator = null; // Clear the operator after calculation
//   previousInput = ""; // Clear the previous input
//   updateDisplay();
// }

// // Function to handle clear button click
// function handleClearClick() {
//   currentInput = "";
//   previousInput = "";
//   operator = null;
//   expression = ""; // Clear the entire expression
//   updateDisplay();
// }

// // Adding event listeners to number buttons
// numberButtons.forEach((button) => {
//   button.addEventListener("click", handleNumberClick);
// });

// // Adding event listeners to operator buttons
// operatorButtons.forEach((button) => {
//   button.addEventListener("click", handleOperatorClick);
// });

// // Adding event listener to equals button
// equalsButton.addEventListener("click", handleEqualsClick);

// // Adding event listener to clear button
// clearButton.addEventListener("click", handleClearClick);
