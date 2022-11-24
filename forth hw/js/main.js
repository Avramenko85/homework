'use strict';

let firstNumber = parseInt(prompt('Введіть перше число'));
let secondNumber = parseInt(prompt('Введіть друге число'));


function Add(a, b){
  return a + b;
}

function Sub(a, b){
  return a - b;
}

function Mul(a, b){
  return a * b;
}

function Div(a, b){
     return a / b;
}


console.log('Add: ' + Add(firstNumber, secondNumber),
            'Sub: ' + Sub(firstNumber, secondNumber),           
            'Mul: ' + Mul(firstNumber, secondNumber),
            'Div: ' + Div(firstNumber, secondNumber));