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

function add_button()

function operate(num1, num2, operator) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        alert("Cant divide by Zero");
        throw new Error("Input must be of type Number");
    } else {
        if (operator == "+") {
            console.log(add(num1,num2));
        } else if (operator == "-") {
            console.log(subtract(num1,num2));
        } else if (operator == "*") {
            console.log(multiply(num1,num2));
        } else {
            console.log(divide(num1,num2));
        };
    }
}

function addNumber(num) {
    tempdisplay = tempdisplay + num;
    display = display + num;
    display.textContent = display;
};

//Build calculator
const numbers_container = document.querySelector("#numbers_container");
const bottom_container = document.querySelector("#bottom_container");
const right_container = document.querySelector("#right_container");
let display = document.querySelector("#results_bar");

// Add numpad
for (let i = 1; i <= 9; i++) {
    let newbutton = document.createElement("button");
    newbutton.classList.add("button");
    newbutton.textContent = i
    newbutton.addEventListener("click", (e) => addNumber(Number(e.target.textContent)));
    numbers_container.appendChild(newbutton);
};

// Add bottom row
let newbutton = document.createElement("button");
newbutton.textContent = "Clr";
newbutton.classList.add("button");
newbutton.addEventListener("click", () => "Hey");
bottom_container.appendChild(newbutton);
let newbutton1 = document.createElement("button");
newbutton1.textContent = "0";
newbutton1.classList.add("button");
newbutton1.addEventListener("click", () => "Hey");
bottom_container.appendChild(newbutton1);
let newbutton2 = document.createElement("button");
newbutton2.textContent = "=";
newbutton2.classList.add("button");
newbutton2.addEventListener("click", () => "Hey");
bottom_container.appendChild(newbutton2);

// Add right side
let newbutton3 = document.createElement("button");
newbutton3.textContent = "/";
newbutton3.classList.add("button");
newbutton3.addEventListener("click", () => "Hey");
right_container.appendChild(newbutton3);
let newbutton4 = document.createElement("button");
newbutton4.textContent = "X";
newbutton4.classList.add("button");
newbutton4.addEventListener("click", () => "Hey");
right_container.appendChild(newbutton4);
let newbutton5 = document.createElement("button");
newbutton5.textContent = "-";
newbutton5.classList.add("button");
newbutton5.addEventListener("click", () => "Hey");
right_container.appendChild(newbutton5);
let newbutton6 = document.createElement("button");
newbutton6.textContent = "-";
newbutton6.classList.add("button");
newbutton6.addEventListener("click", () => "Hey");
right_container.appendChild(newbutton6);

// Initialise content array
let displaytext = "";
let tempdisplaytext = "";
let content = [];







