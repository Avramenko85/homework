'use strict';

let firstOperand = parseInt(prompt('Вкажіть число!'));

let secondOperand = parseInt(prompt('Тепер друге!'));


function Add(a, b){
  return a + b;
}

function Sub(a, b){
  return a - b;
}

function Mul(a, b){
  return a * b;
}

function Div(a, b) {
    if (b == 0){
        return 'Error';
    }
     return a / b;
}


console.log('Add: ' + Add(firstOperand, secondOperand),
            'Sub: ' + Sub(firstOperand, secondOperand),           
            'Mul: ' + Mul(firstOperand, secondOperand),
            'Div: ' + Div(firstOperand, secondOperand));



