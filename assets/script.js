var number = document.getElementById('number')
var newNumber = 0;

function increment() {
    newNumber = newNumber + 1;
    number.innerHTML = newNumber;
}

function decrement() {
    newNumber = newNumber - 1;
    number.innerHTML = newNumber;
}