let display = document.querySelector('.display');
let historyList = document.querySelector('#history-list');

let calculationHistory = [];
let operation = '';
let operand1 = '';
let operand2 = '';


function appendNumber(number) {
    if (operation === '') {
        operand1 += number;
        display.value = operand1;
    } else {
        operand2 += number;
        display.value = operand2;
    }
}

function appendOperator(operator) {
    operation = operator;
    display.value += ` ${operation} `;
}

function calculateResult() {
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            break;
    }

    if (result || result === 0) {
        display.value = result;
        addToHistory(result);
    }
    else if (isNaN(result) || !isFinite(result)) {
        alert('Error: Please enter valid operands and operator.');
    }
    else {
        alert('Please enter valid operands and operator.');
    }

}
function addToHistory(result) {
    // Create a new history item element

    let newHistoryItem = document.createElement('li');

    // Set the text content of the new history item
    newHistoryItem.textContent = `${operand1} ${operation} ${operand2} = ${result}  `;

    // Append the new history item to the history list
    historyList.appendChild(newHistoryItem);

    // Save the result to the calculation history array
    calculationHistory.push({
        expression: `${operand1} ${operation} ${operand2} `,
        result: result
    });
}


function Back() {

    display.value = display.value.slice(0, -1);
}
function clearDisplay2() {
    setTimeout(() => {
        clearDisplay();
    }, 900);
}
function clearDisplay() {
    display.value = '';
    operation = '';
    operand1 = '';
    operand2 = '';
}
function clearHistory() {
    historyList.innerHTML = '';
}
