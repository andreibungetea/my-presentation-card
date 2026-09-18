// ----  Verific daca butoanele exista in HTML -----
// const buttons = [
//     "plus",
//     "minus",
//     "multiply",
//     "divide",
//     "equals",
//     "reset",
// ];

// buttons.forEach ((id) => {
//     const button = document.querySelector(`#${id}`);

//     if (button) {
//         console.log(`Butonul ${id} exista`)
//     } else {
//         console.log(`Butonul ${id} nu exista`)
//     }
// });

// ----- Verific daca butoanele exista si pot fi apasate -----
const buttons = [
    "plus",
    "minus",
    "multiply",
    "divide",
    "equals",
    "reset",
];

buttons.forEach ((id) => {
    const button = document.querySelector(`#${id}`);

    if (button && !button.disabled) {
        console.log(`Buton apasat: ${id}`)
    } else {
        console.log(`Buton apasat: ${id}`)
    }
});

function clickButton(text) {
    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        if(button.textContent.trim() === text) {
            button.click();
            return;
        }
    }
}

clickButton("+");
clickButton("=");

// ---- Selectez elementele -----
const input = document.querySelector(".input-container");

const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");
const resetButton = document.querySelector("#reset");

let firstNumber = null; /*primul nr introdus*/
let selectedOperator = null; /*selectam operatorul*/

// --- functia pt selectarea operatiei ---
function selectOperator(operator) {
    firstNumber = Number(input.value);
    selectedOperator = operator;

    input.value = "";
}

// ---Adaugam evenimentele pt operatori --
plusButton.addEventListener("click", ()=> {
    selectedOperator("+");
});

minusButton.addEventListener("click", () => {
    selectOperator("-");
});

multiplyButton.addEventListener("click", () => {
    selectOperator("*");
});

divideButton.addEventListener("click", () => {
    selectOperator("/");
});

//  ----- Calcul ---
function calculate() {
    const secondNumber = Number(input.value);

    if (firstNumber === null || secondNumber === null) {
        return;
    }
    let result;

    switch (selectOperator) {
        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":
            result = firstNumber / secondNumber;
            break;
    
        default:
            return;
    }
    input.value = String(result);

    firstNumber = null;
    selectOperator = null;
}

// --Butonul egal---
equalsButton.addEventListener("clicl", calculate);

// ---Butonul reset ---
resetButton.addEventListener("click", () => {
    input.value = "";

    firstNumber = null;

    selectOperator = null;
});