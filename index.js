const buttons = document.querySelectorAll(".numbers-btn");
const displayNumber = document.getElementById("current-value");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

let current = "";
let firstNumber = "";
let operator = "";
let finalNum;

const operate = (a, operator, b) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      if (b === 0) {
        return (displayNumber.textContent = "Error");
      } else {
        return a / b;
      }
    case "*":
      return a * b;
  }
};

clearButton.addEventListener("click", () => {
  current = "";
  firstNumber = "";
  operator = "";
  displayNumber.textContent = "0";
});

deleteButton.addEventListener("click", () => {
  current = current.slice(0, -1);

  if (current === "") {
    displayNumber.textContent = "0";
  } else {
    displayNumber.textContent = current;
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (!isNaN(value)) {
      current += value;
      displayNumber.textContent = current;
    } else if (value === "+") {
      firstNumber = current;
      operator = value;
      current = "";
    } else if (value === "-") {
      firstNumber = current;
      operator = value;
      current = "";
    } else if (value === "÷") {
      firstNumber = current;
      operator = "/";
      current = "";
    } else if (value === "ⅹ") {
      firstNumber = current;
      operator = "*";
      current = "";
    } else if (value === "=") {
      if (firstNumber === "" || operator === "" || current === "") {
        return;
      }
      finalNum = operate(
        parseFloat(firstNumber),
        operator,
        parseFloat(current),
      );
      displayNumber.textContent = finalNum;
      current = finalNum;
      firstNumber = "";
    }
  });
});
