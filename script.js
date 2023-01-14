const input = document.getElementById("input");
const addedNumber = document.getElementById("added-num");
const evenOrOdd = document.getElementById("even-odd");

let even = "even";
let odd = "odd";

function getAddedNumber(value) {
    if (value > 0) {
        return Number.parseInt(value, 10) + 1;
    } else {
        return 0;
    }
}

function numberVerification(input) {
    if (input % 2) {
        return even;
    }else {
        return odd;
    }
}

function getnumber() {
    addedNumber.textContent = getAddedNumber(input.value);
    getEvenOrOdd();
    return
}

function getEvenOrOdd() {
    evenOrOdd.textContent = numberVerification(Number.parseInt(input.value, 10))
}


input.addEventListener("keyup", getnumber)