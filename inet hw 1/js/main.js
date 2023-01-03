'use strict';
let age = +prompt('how old are you?');
let text = null;


let year = age % 100;
if (isNaN(age)) {
    alert('not ok');
    }
	else if (year >= 5 && year <= 20) {
    text = 'лет';
    alert (`${age} ${text}`);
	} else {
		year = year % 10;
		if (year === 1) {
			text = 'год';
		} else if (year >= 2 && year <= 4) {
			text = 'года';
		} else {
			text = 'лет';
    }
    alert (`${age} ${text}`);
}
    
	

