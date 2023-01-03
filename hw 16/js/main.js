'use strict';

let number = +prompt('enter your number');

if (number < 1) {
    console.log(NaN);
} else {
    for (let i = 2; number % i; i++) {
          console.log (i);
    }
}

