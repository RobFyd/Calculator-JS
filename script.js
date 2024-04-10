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
const result = 0;
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
