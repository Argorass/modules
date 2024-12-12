// calculator.js

import {
  display,
  numberButtons,
  operatorButtons,
  equalsButton,
  clearButton,
} from "./domElements.js";
import { add, subtract } from "./mathOperations.js";

let currentInput = "";
let previousInput = "";
let operator = null;

// Function to update the display
function updateDisplay() {
  display.textContent = currentInput || "0";
}

// Function to handle number button clicks
function handleNumberClick(event) {
  const number = event.target.textContent;
  if (currentInput.length < 10) {
    // Limit to 10 digits
    currentInput += number;
    updateDisplay();
  }
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
  if (currentInput === "") return; // Ignore if there's no number
  if (previousInput !== "") {
    handleEqualsClick(); // If there's a previous input, calculate the result first
  }
  operator = event.target.textContent;
  previousInput = currentInput;
  currentInput = "";
}

// Function to handle equals button click
function handleEqualsClick() {
  if (operator === null || currentInput === "") return;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  if (operator === "+") {
    result = add(prev, current);
  } else if (operator === "-") {
    result = subtract(prev, current);
  }

  currentInput = result.toString();
  operator = null;
  previousInput = "";
  updateDisplay();
}

// Function to handle clear button click
function handleClearClick() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay();
}

// Adding event listeners to number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

// Adding event listeners to operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

// Adding event listener to equals button
equalsButton.addEventListener("click", handleEqualsClick);

// Adding event listener to clear button
clearButton.addEventListener("click", handleClearClick);
