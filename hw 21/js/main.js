'use strict';

function mainFunction(callback) {
    let number = +prompt('number?');
    let degree = +prompt('degree?');
        
    callback(number, degree);
}


function exponentiation(number,degree) {
    let result = Math.pow(number, degree);
    alert(result);  
}
function multiplay(number,degree) {
    let result1 = number * degree;
    alert(result1);
}
function division(number,degree) {
    let result1 = number / degree;
    alert(result1);
}
function modulo(number,degree) {
    let result1 = number % degree;
    alert(result1);
}




mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);
// mainFunction(function modulo(number,degree) {
//     let result1 = number % degree;
//     alert(result1);
// });

