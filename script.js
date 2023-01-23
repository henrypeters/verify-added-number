const input = document.getElementById("input");
const dividedNumber = document.getElementById("divide");
const evenOrOdd = document.getElementById("even-odd");
const clearButton = document.getElementById("clear-button");
const squaredNumber = document.getElementById("square")

let even = "even";
let odd = "odd";

function getDividedNumber(value) {
    if (input.value > 0) {
        return value/2;
    }else{
        return 0;
    }
}

function numberVerification(input) {
    if (input % 2) {
        return odd;
    }else {
        return even;
    }
}

function squaredAnwer(x) {
    if (input.value > 0) {
        return x**2;
    }else {
        return 0;
    }
}

function getEvenOrOdd() {
    evenOrOdd.textContent = numberVerification(Number.parseInt(input.value, 10))
}

function getSquare() {
    squaredNumber.textContent = squaredAnwer(Number.parseInt(input.value, 10))
}

function getAnswer() {
    dividedNumber.textContent = getDividedNumber(Number.parseInt(input.value));
    getEvenOrOdd();
    getSquare();
    return
}

clearButton.addEventListener("click", function() {
    input.value = "";
})

input.addEventListener("keyup", getAnswer)