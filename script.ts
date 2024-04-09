console.log('Hello, world!');

const currentNumber = document.querySelector(".js-currentNumber")as HTMLParagraphElement;
const previousNumber = document.querySelector(".js-previousNumber")as HTMLParagraphElement;
const mathSign = document.querySelector(".js-mathSign")as HTMLSpanElement;
const numbersButtons = document.querySelectorAll(".js-number")as NodeListOf<HTMLButtonElement>;
const operatorsButtons = document.querySelectorAll(".js-operator")as NodeListOf<HTMLButtonElement>;
const equalsButton = document.querySelector(".js-equals")as HTMLButtonElement;
const clearButton = document.querySelector(".js-clear")as HTMLButtonElement;
const calculatorHistory = document.querySelector(".js-history")as HTMLDivElement;
const historyBtn = document.querySelector(".js-historyBtn")as HTMLButtonElement;

const result: number = 0;