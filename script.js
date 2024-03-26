function add(num1, num2) {
    return num1+num2;
};

function subtract(num1, num2) {
    return num1-num2;
};

function multiply(num1, num2) {
    return num1*num2;
};

function divide(num1, num2) {
    if (num2 <= 0) {
        throw new Error("Can't divide by zero");
    } else {
        return num1/num2;
    }
};

function equals() {
    operate(Number(firstNumber), Number(numberHolder), operator);
    result = firstNumber;
    firstNumber = undefined;
    numberHolder = ""
};

function operate(num1, num2, o) {
    // Solve whatever is there and display
    
    if (o == "+") {
        r = add(num1, num2);
    } else if (o == "-") {
        r = subtract(num1, num2);
    } else if (o == "*") {
        r = multiply(num1, num2);
    } else  {
        r = divide(num1, num2);
    };

    firstNumber = roundToFixedIfNeeded(r, 5);
    display.textContent = firstNumber;

};

function roundToFixedIfNeeded(number, decimals) {
    numberString = number.toString();
    const decimalIndex = numberString.indexOf('.');
    const numLength = numberString.length;

    if (numLength-decimalIndex-1 > decimals) {
        return number.toFixed(decimals);
    } else {
        return number;
    };
}


function addCharacter(char, what) {
    if (what == "number") {
        numberHolder = numberHolder + char;
        display.textContent = numberHolder;
    } else {
        if (result != undefined) {
            numberHolder = result;
            result = undefined;
        }
        if (firstNumber == undefined) {
            firstNumber = numberHolder;
            numberHolder = "";
            operator = char;
            display.textContent = char;
        } else {
            operate(Number(firstNumber), Number(numberHolder), operator);
            operator = char;
            numberHolder = "";
        }
    }
};

function clearAll() {
    numberHolder = "";
    firstNumber = undefined;
    operator = undefined;
    result = undefined;
    display.textContent = "";
};

function del() {
    if (display.textContent == "+" || display.textContent == "-" || display.textContent == "*" || display.textContent == "/") {
        ;
    } else if (numberHolder == "") {
        ;
    } else {
        numberHolder = numberHolder.slice(0,-1);
        display.textContent = numberHolder;
    }
};

//Build calculator
const numbers_container = document.querySelector("#numbers_container");
const bottom_container = document.querySelector("#bottom_container");
const right_container = document.querySelector("#right_container");
const results_container = document.querySelector("#results_container");
let display = document.querySelector("#results_bar");

// Add numpad
for (let i = 1; i <= 9; i++) {
    let newbutton = document.createElement("button");
    newbutton.classList.add("button");
    newbutton.classList.add("num_button");
    newbutton.id = `b${i}`;
    newbutton.textContent = i
    newbutton.addEventListener("click", (e) => addCharacter(e.target.textContent, "number"));
    numbers_container.appendChild(newbutton);
};

// BUILD UI
// Add bottom row
let newbutton = document.createElement("button");
newbutton.textContent = ".";
newbutton.classList.add("button");
newbutton.classList.add("other_button");
newbutton.addEventListener("click", (e) => addCharacter(e.target.textContent, "number"));
bottom_container.appendChild(newbutton);
let newbutton1 = document.createElement("button");
newbutton1.textContent = "0";
newbutton1.classList.add("button");
newbutton1.classList.add("other_button");
newbutton1.addEventListener("click", (e) => addCharacter(e.target.textContent, "number"));
bottom_container.appendChild(newbutton1);
let newbutton2 = document.createElement("button");
newbutton2.textContent = "=";
newbutton2.classList.add("button");
newbutton2.classList.add("other_button");
newbutton2.addEventListener("click", () => equals());
bottom_container.appendChild(newbutton2);

// Add right side
let newbutton3 = document.createElement("button");
newbutton3.textContent = "/";
newbutton3.classList.add("button");
newbutton3.classList.add("other_button");
newbutton3.addEventListener("click", (e) => addCharacter(e.target.textContent, "operator"));
right_container.appendChild(newbutton3);
let newbutton4 = document.createElement("button");
newbutton4.textContent = "*";
newbutton4.classList.add("button");
newbutton4.classList.add("other_button");
newbutton4.addEventListener("click", (e) => addCharacter(e.target.textContent, "operator"));
right_container.appendChild(newbutton4);
let newbutton5 = document.createElement("button");
newbutton5.textContent = "-";
newbutton5.classList.add("button");
newbutton5.classList.add("other_button");
newbutton5.addEventListener("click", (e) => addCharacter(e.target.textContent, "operator"));
right_container.appendChild(newbutton5);
let newbutton6 = document.createElement("button");
newbutton6.textContent = "+";
newbutton6.classList.add("button");
newbutton6.classList.add("other_button");
newbutton6.addEventListener("click", (e) => addCharacter(e.target.textContent, "operator"));
right_container.appendChild(newbutton6);

// Add more buttons
let newbutton7 = document.createElement("button");
newbutton7.textContent = "del";
newbutton7.classList.add("button");
newbutton7.classList.add("other_button");
newbutton7.addEventListener("click", (e) => del());
results_container.appendChild(newbutton7);
let newbutton8 = document.createElement("button");
newbutton8.textContent = "Clr";
newbutton8.classList.add("button");
newbutton8.classList.add("other_button");
newbutton8.addEventListener("click", (e) => clearAll());
results_container.appendChild(newbutton8);

// Initiate empty variables
let numberHolder = "";
let firstNumber;
let operator;
let result;

//add general eventlistner looking for keydown events. Get thje keydown-event, match it with a button, and do click() event
document.addEventListener("keydown", (e) => {
    const keyCode = e.code.replace("Numpad", "");
    validValues = ["1","2","3","4","5","6","7","8","9"];
    if (keyCode == "Enter") {
        newbutton2.click();
    } else if (keyCode == "Divide") {
        newbutton3.click();
    } else if (keyCode == "Multiply") {
        newbutton4.click();
    } else if (keyCode == "Subtract") {
        newbutton5.click();
    } else if (keyCode == "Add") {
        newbutton6.click();
    } else if (keyCode == "0") {
        newbutton1.click();
    } else if (keyCode == "Decimal") {
        newbutton.click();
    } else if (keyCode == "Delete") {
        newbutton7.click();
    } else {
        let butt = document.querySelector(`#b${keyCode}`);
        butt.click();
    }
})
