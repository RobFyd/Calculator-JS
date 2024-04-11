"use strict";
console.log('Hello, world!');
const currentNumber = document.querySelector(".js-currentNumber");
const previousNumber = document.querySelector(".js-previousNumber");
const mathSign = document.querySelector(".js-mathSign");
const numbersButtons = document.querySelectorAll(".js-number");
const operatorsButtons = document.querySelectorAll(".js-operator");
const equalsButton = document.querySelector(".js-equals");
const clearButton = document.querySelector(".js-clear");
const calculatorHistory = document.querySelector(".js-history");
const historyBtn = document.querySelector(".js-historyBtn");
function displayNumbers() {
    if (this.textContent === "." && currentNumber.innerHTML.includes("."))
        return;
    if (this.textContent === "." && currentNumber.innerHTML === "") {
        return (currentNumber.innerHTML = "0.");
    }
    if (this.textContent === "00" && currentNumber.innerHTML === "") {
        return (currentNumber.innerHTML = "0.");
    }
    if (this.textContent === "0" && currentNumber.innerHTML === "0") {
        return (currentNumber.innerHTML = "0.");
    }
    if (this.textContent === "00" && currentNumber.innerHTML === "0") {
        return (currentNumber.innerHTML = "0.");
    }
    if (this.textContent && parseInt(this.textContent) >= 1 &&
        parseInt(this.textContent) <= 9 &&
        currentNumber.innerHTML === "0") {
        return (currentNumber.innerHTML = parseInt(this.textContent).toString());
    }
    currentNumber.innerHTML += this.textContent;
}
function operate() {
    var _a;
    if (currentNumber.innerHTML === "" && this.textContent === "-") {
        currentNumber.innerHTML = "-";
        return;
    }
    else if (currentNumber.innerHTML === "") {
        return;
    }
    if (mathSign.innerHTML !== "") {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = (_a = this.textContent) !== null && _a !== void 0 ? _a : "";
    currentNumber.innerHTML = "";
}
function showResult() {
    if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "")
        return;
    const a = Number(currentNumber.innerHTML);
    const b = Number(previousNumber.innerHTML);
    const operator = mathSign.innerHTML;
    let result = 0;
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = b - a;
            break;
        case "x":
            result = a * b;
            break;
        case ":":
            result = b / a;
            break;
        case "2^":
            result = Math.pow(b, a);
            break;
    }
    addToHistory();
    historyBtn.classList.add("js-active");
    currentNumber.innerHTML = result.toString();
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";
}
function addToHistory() {
}
function clearScreen() {
}
function clearHistory() {
}
function init() {
    operatorsButtons.forEach((button) => button.addEventListener("click", operate));
    equalsButton.addEventListener("click", showResult);
    clearButton.addEventListener("click", clearScreen);
    numbersButtons.forEach((button) => {
        button.addEventListener("click", displayNumbers);
    });
    historyBtn.addEventListener("click", clearHistory);
}
init();
