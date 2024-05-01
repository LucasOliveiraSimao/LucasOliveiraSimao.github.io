let displayValue = '';

function appendChar(char) {
    if (displayValue.length < 4) {
        // Verifica se o caractere já foi digitado e se é um ponto decimal
        if (char === '.' && displayValue.includes('.')) {
            return; // Evita múltiplos pontos decimais
        }

        // Concatena o caractere ao valor atual na tela
        displayValue += char;
        updateDisplay();
    } else {
        // Exibe uma mensagem de erro se o limite de caracteres for atingido
        displayValue = 'Limite excedido';
        updateDisplay();
    }
    
    //displayValue += char;
   // updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteChar() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    const inputValue = parseFloat(displayValue);

    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 10) {
        // Calcula o resultado conforme especificado
        const result = 15 - (inputValue * 2);

        // Exibe o resultado na tela
        displayValue = result.toString();
        updateDisplay();
    } else {
        // Exibe uma mensagem de erro se o valor estiver fora do intervalo
        displayValue = 'Erro';
        updateDisplay();
    }
    
    /*
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
    */
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}
