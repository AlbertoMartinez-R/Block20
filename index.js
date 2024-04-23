// Reference to DOM elements
const numberInput = document.getElementById('numberInput');
const addNumberButton = document.getElementById('addNumberButton');
const sortOneButton = document.getElementById('sortOneButton');
const sortAllButton = document.getElementById('sortAllButton');
const numberBank = document.getElementById('numberBank');
const oddNumbers = document.getElementById('oddNumbers');
const evenNumbers = document.getElementById('evenNumbers');

// State to hold numbers
let numbers = [];
let odds = [];
let evens = [];

// Add a number to the bank
addNumberButton.addEventListener('click', function() {
    const num = parseInt(numberInput.value, 10);
    if (!isNaN(num)) {
        numbers.push(num);
        numberBank.textContent = numbers.join(', ');
        numberInput.value = ''; // Clear input after adding
    }
});

// Sort the first number in the bank
sortOneButton.addEventListener('click', function() {
    if (numbers.length > 0) {
        sortNumber(numbers.shift()); // Remove the first number and sort it
        numberBank.textContent = numbers.join(', '); // Update display
    }
});

// Sort all numbers in the bank
sortAllButton.addEventListener('click', function() {
    numbers.forEach(num => sortNumber(num)); // Sort each number
    numbers = []; // Clear the bank
    numberBank.textContent = ''; // Update display
});

// Function to sort a number into odd or even
function sortNumber(num) {
    if (num % 2 === 0) {
        evens.push(num);
        evenNumbers.textContent = evens.join(', ');
    } else {
        odds.push(num);
        oddNumbers.textContent = odds.join(', ');
    }
}

// Clear input and refresh the state display
function updateDisplay() {
    numberInput.value = '';
    numberBank.textContent = numbers.join(', ');
    oddNumbers.textContent = odds.join(', ');
    evenNumbers.textContent = evens.join(', ');
}
