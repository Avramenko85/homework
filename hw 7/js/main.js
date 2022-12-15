'use strict';


let NumberOfHours = prompt('Вкажіть кількість годин!!');

const hour = NumberOfHours;

if (isNaN(hour)) {
    alert('введіть число')
} else  {
    alert(`В ${hour} годинах ${hour * 3600} секунд!!!`);
};
