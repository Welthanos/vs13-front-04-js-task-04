// EX 01
const printOrderedList = () => {
    const list = [12, 14, 94, 34, 30, 35, 57, 24, 19, 10];
    const text = document.getElementById('ordered-list');

    text.innerText = list.sort().join(' ');
    text.style.display = 'inline';
}

// EX 02
const printEvenAndIndex = () => {
    const text = document.getElementById('even-list');
    const btn = document.getElementById('btn-section-2');

    const numbers = [];

    for (let i = 1; i <= 30; i++) numbers.push(i);
    text.style.display = 'inline';

    for (number of numbers) if (number % 2 === 0) text.innerText += `O número par é ${number} e seu índice é ${numbers.indexOf(number)}.\n`;
    btn.disabled = true;
}

// EX 03

// EX 04

// EX 05

// EX 06

// EX 07

// EX 08

// EX 09