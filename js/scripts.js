// EX 01
const printOrderedList = () => {
    const list = [12, 14, 94, 34, 30, 35, 57, 24, 19, 10];
    const text = document.getElementById('ordered-list');
    const btn = document.getElementById('btn-section-1');

    text.innerHTML += `<br>Lista ordenada:<br>[${list.sort().join(', ')}]`;
    btn.disabled = true;
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
const alterNumbersOfList = () => {
    const text = document.getElementById('alter-list');
    const btn = document.getElementById('btn-section-3');
    const list = [1.5, 6, 7.8, 19, 45, 89, 50.5, 25];
    const indexToAlter = [0, 2, 5];

    for (index of indexToAlter) list.splice(index, 1, (Math.random() * 50).toFixed(1));

    text.innerHTML += `<br>Lista alterada:<br>[${list.join(', ')}]`;
    btn.disabled = true;
}

// EX 04
const ageOfDarkness = [
    { 'Ouro': 45 },
    { 'Prata': 56 },
    { 'Madeira': 236 },
    { 'Pedra': 458 }
];

const ageOfCastles = [
    { 'Ouro': 345 },
    { 'Prata': 568 },
    { 'Madeira': 789 },
    { 'Pedra': 897 }
];

// Neste exercício utilizei o ChatGPT para estudar o comportamento do reduce e map com objetos
// Para testar outras formas de resolver a questão
const summarizeAOE = () => {
    const text = document.getElementById('aoe-summary');
    const btn = document.getElementById('btn-section-4');
    const countBags = items => items.reduce((acc, item) => acc + Object.values(item)[0], 0);

    const formatItemList = items => items.map(item => {
        const [key, value] = Object.entries(item)[0];
        return `${key} --> ${value}`;
    });

    const listAODItens = formatItemList(ageOfDarkness);
    const totalAODBags = countBags(ageOfDarkness);

    const listAOCItens = formatItemList(ageOfCastles);
    const totalAOCBags = countBags(ageOfCastles);

    text.innerHTML = `<strong>Objetos do meu inventário - Idade das Trevas:</strong> <br><br>
        ${listAODItens.join('<br>')} <br><br> <strong>Objetos do meu inventário - Idade dos Castelos:</strong> <br><br>
        ${listAOCItens.join('<br>')} <br><br> <strong>Status do inventário Idade das Trevas:</strong> <br><br>
        - Total de 4 tipos de itens com ${totalAODBags} sacas <br><br> <strong>Status do inventário Idade dos Castelos:</strong> 
        <br><br> - Total de 4 tipos de itens com ${totalAOCBags} sacas`;

    text.style.display = 'inline';
    btn.disabled = true;
}

// EX 05
const showCheeseMenu = () => {
    const text = document.getElementById('cheese-menu');
    const btn = document.getElementById('btn-section-5');
    const menu = ['Mussarela', 'Minas', 'Parmesão', 'Prato', 'Gorgonzola'];

    text.innerHTML = `${menu.join(', ')}.`;
    const menu1 = menu.concat(['Mascarpone', 'Ricota', 'Provolone']);

    text.innerHTML += `<br><br><strong>Lista atualizada:</strong> ${menu1.join(', ')}.`;
    menu1.sort();

    text.innerHTML += `<br><br><strong>Lista atualizada em ordem alfabética:</strong> ${menu1.join(', ')}.`;
    const menu2 = menu1.concat(['Cottage']);
    menu2.sort();

    text.innerHTML += `<br><br><strong>Lista atualizada:</strong> ${menu2.join(', ')}.`;
    text.style.display = 'inline';
    btn.disabled = true;
}

// EX 06


// EX 07

// EX 08

// EX 09