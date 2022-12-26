'use strict';

let number = +prompt('Вкажіть число');


for (let i = 2; i < number; i++) {
    
    if (number % i === 0) {
        console.log(false)
    } else {
        console.log(true)
    }

}
    
    

