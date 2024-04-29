// Variables para almacenar el primer operando, el operador y el segundo operando
let operand1 = '';
let operator = '';
let operand2 = '';

// Función para mostrar números en el display
function press(num) {
    // Si el operador está vacío, significa que estamos ingresando el primer operando
    if (operator === '') {
        operand1 += num;
        updateDisplay(operand1);
    } else {
        operand2 += num;
        updateDisplay(operand2);
    }
}

// Función para establecer el operador
function setOP(op) {
    if (operand1 !== '') {
        operator = op;
    }
}

function clr() {
    operand1 = '';
    operand2 = '';
    operator = '';
    updateDisplay('0');
}


function calculate() {
    let result;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    
    
    updateDisplay(result);
    
    // Reseteamos las variables para una nueva operación
    operand1 = result.toString();
    operand2 = '';
    operator = '';
}

// Función para actualizar el display con el resultado
function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}
