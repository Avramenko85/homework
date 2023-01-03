'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function array (arr) {
    const exampleArr = [];
    for (let i = 0; i < arr.length; i++) {       
    if (arr[i] > 0) {
        exampleArr.push(arr[i])      
    }        
    }
    if (exampleArr.length === 0) {
        console.log('null')
    } else {
console.log(exampleArr)
    }
}

    
array(arr);
