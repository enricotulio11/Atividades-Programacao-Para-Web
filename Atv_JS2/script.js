let counter = 0;
const counterValueSpan = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValueSpan.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterValueSpan.textContent = counter;
    } else {
        alert('O contador já está em zero!');
    }
});

const textInput = document.getElementById('textInput');
const textContainer = document.getElementById('textContainer');
const charCountSpan = document.getElementById('charCount');

textInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const text = textInput.value;
        if (text.trim() !== '') {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = text;
            textContainer.appendChild(newParagraph);
            textInput.value = '';
        }
    }
});

textInput.addEventListener('input', () => {
    const textWithoutSpaces = textInput.value.replace(/\s/g, '');
    charCountSpan.textContent = textWithoutSpaces.length;
});

const addItemBtn = document.getElementById('addItemBtn');
const itemTypeSelect = document.getElementById('itemType');
const listContainer = document.getElementById('listContainer');

addItemBtn.addEventListener('click', () => {
    const selectedType = itemTypeSelect.value;
    let list = document.querySelector(`#listContainer > ${selectedType}`);
    
    if (!list) {
        list = document.createElement(selectedType);
        listContainer.appendChild(list);
    }
    
    const newItem = document.createElement('li');
    const itemNumber = list.children.length + 1;
    newItem.textContent = `Novo item ${itemNumber} - (${selectedType === 'ol' ? 'Ordenado' : 'Não Ordenado'})`;
    list.appendChild(newItem);
});

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValueSpan.textContent = counter;
    textContainer.innerHTML = '';
    textInput.value = '';
    charCountSpan.textContent = '0';
    listContainer.innerHTML = '';
});