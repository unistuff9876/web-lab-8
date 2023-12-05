let elements = [];

function elementAdd() {
    const elemContainer = document.querySelector('#elements-container');
    const elemToAdd = document.createElement('div');
    elemToAdd.className = 'element';

    elemToAdd.innerHTML = `
                <label>
                    <input type="text">
                </label>
                <label>
                    <input type="number">
                </label>
                <button onclick="elementMoveUp(this.parentNode)" value="up">↑</button>
                <button onclick="elementMoveDown(this.parentNode)" value="down">↓</button>
                <button onclick="elementRemove(this.parentNode)" value="delete">x</button>
            `;

    elemContainer.appendChild(elemToAdd);
}

function printout() {
    const result = {};
    document.querySelectorAll('.element').forEach((element) => {
        const label = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        result[`${label}`] = `${number}`;
    });

    const resultOutput = document.querySelector('#result-output');
    resultOutput.textContent = JSON.stringify(result);
}

function elementMoveUp(element) {
    const previousElement = element.previousElementSibling;
    if (previousElement) {
        element.parentNode.insertBefore(element, previousElement);
        updateArray();
    }
}

function elementMoveDown(element) {
    const nextElement = element.nextElementSibling;
    if (nextElement) {
        element.parentNode.insertBefore(nextElement, element);
        updateArray();
    }
}

function elementRemove(element) {
    element.parentNode.removeChild(element);
}

function updateArray() {
    elements = [];
    document.querySelectorAll('.element').forEach(element => {
        const label = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        elements.push({ label, number });
    })
}

// populate w/ one at start
document.addEventListener('DOMContentLoaded', elementAdd);
