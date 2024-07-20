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
        return;
        // Exibe uma mensagem de erro se o limite de caracteres for atingido
        // displayValue = 'Limite excedido';
        // updateDisplay();
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

function checkDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Dispositivo é Android
        alert('Esta página só está disponível para iPhone.');
        // Opcionalmente, você pode redirecionar o usuário para uma página específica ou ocultar o conteúdo da página
        document.body.innerHTML = '<h1>Esta página só está disponível para iPhone.</h1>';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Dispositivo é iOS
        // A página está disponível, não precisa fazer nada
    } else {
        // Outros dispositivos
        alert('Esta página só está disponível para iPhone.');
        document.body.innerHTML = '<h1>Esta página só está disponível para iPhone.</h1>';
    }
}

// Chame a função ao carregar a página
window.onload = checkDevice;


function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}
