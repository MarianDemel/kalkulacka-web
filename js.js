document.addEventListener('DOMContentLoaded', function () {
    let display = document.querySelector('#display');
    let currentOperation = '';
    let firstOperand = null;

    // čísla
    document.querySelectorAll('.number').forEach(function (button) {
        button.onclick = function () {
            display.value += button.dataset.num;
        };
    });

    // operační tlačítka
    document.querySelectorAll('.operation').forEach(function (button) {
        button.onclick = function () {
            firstOperand = parseFloat(display.value);
            currentOperation = button.dataset.op;
            display.value = '';
        };
    });

    // co se děje po tlačítku = (rovná se..)
    document.querySelector('#equals').onclick = function () {
        if (firstOperand !== null && currentOperation) {
            let secondOperand = parseFloat(display.value);
            switch (currentOperation) {
                case '+': display.value = firstOperand + secondOperand; break;
                case '-': display.value = firstOperand - secondOperand; break;
                case '*': display.value = firstOperand * secondOperand; break;
                case '/': display.value = firstOperand / secondOperand; break;
            }
            firstOperand = null;
            currentOperation = '';
        }
    };

    // clear tlačítko
    document.querySelector('#clear').onclick = function () {
        display.value = '';
        firstOperand = null;
        currentOperation = '';
    };
});
