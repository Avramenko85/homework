'use strict';

let number = prompt('число?');
let degree = prompt('ступінь?');

function sum(number, degree) {

    // degree = 1;

    if (isNaN(number) || isNaN(degree)) {
        return 'some error';
    }

    return Math.pow(number, degree);

}

let result = sum(number,degree);

alert(result);
