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

let result: number = 0;

function displayNumbers(this: HTMLButtonElement) {
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

    if (
        this.textContent && parseInt(this.textContent) >= 1 &&
        parseInt(this.textContent) <= 9 &&
        currentNumber.innerHTML === "0"
      ) {
        return (currentNumber.innerHTML = parseInt(this.textContent).toString());
    }

    currentNumber.innerHTML += this.textContent;
}

function operate(this: HTMLButtonElement) {
    if (currentNumber.innerHTML === "" && this.textContent === "-") {
        currentNumber.innerHTML = "-";
        return;
      } else if (currentNumber.innerHTML === "") {
        return;
    }

    if (mathSign.innerHTML !== "") {
        showResult();
      }
      previousNumber.innerHTML = currentNumber.innerHTML;
      mathSign.innerHTML = this.textContent ?? "";
      currentNumber.innerHTML = "";
}

function showResult() {
    if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") return;

    const a = Number(currentNumber.innerHTML);
    const b = Number(previousNumber.innerHTML);
    const operator = mathSign.innerHTML;

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
          result = b ** a;
          break;
    }

    result = Math.round(result * 100000) / 100000;
    addToHistory();
    historyBtn.classList.add("js-active");
    currentNumber.innerHTML = result.toString();
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";
}

function addToHistory() {
  const newHistoryItem = document.createElement("li");
  newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`;
  newHistoryItem.classList.add("history__item");
  calculatorHistory.appendChild(newHistoryItem);
}
    

function clearScreen() {
  result = 0;
  currentNumber.innerHTML = "";
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

function clearHistory() {
  calculatorHistory.textContent = "";
  historyBtn.classList.remove("js-active");
}

function init() {
    operatorsButtons.forEach((button) =>
        button.addEventListener("click", operate)
    );
    equalsButton.addEventListener("click", showResult);
    clearButton.addEventListener("click", clearScreen);
    numbersButtons.forEach((button) => {
         button.addEventListener("click", displayNumbers);
    });
    historyBtn.addEventListener("click", clearHistory);
}

init();