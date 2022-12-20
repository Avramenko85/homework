'use strict';

let ageOfBirth = +prompt('Скільки вам років?');
let birthdayDate = new Date().getFullYear() - ageOfBirth;
let userCity = prompt('В якому місті ви живете?');
let favSport = prompt('Ваш улюблений вид спорту?');
let year;
let city;
let sport;

if (birthdayDate === null) {
    year = 'Шкода що ви не вказали свій вік';
} else if (birthdayDate) {
    year = `Ви народились в ${birthdayDate} році!`;
} 

if (userCity === null) {
    city = 'Жаль що ви не вказали місто';
} else if (userCity === '') {
    city = 'Ви нічого не вказали';
} else if (userCity === 'Київ') {
    city=`${userCity} Прекрасна столиця України!`;
} else if (userCity === 'Москва') {
    city=`${userCity} Столиця Мордору!!`;
} else if (userCity === 'Брест') {
    city=`${userCity} Трохи краще ніж москва!`;
} else if (userCity) {
    city=`Ви проживаєте в місті ${userCity}`;
}

if (favSport === null) {
    sport ='Вас не цікавить спорт?';
} else if (favSport === '') {
    sport = 'Ви нічого не вказали';
}else if (favSport === 'Баскетбол') {
    sport = `Любиш ${favSport} ? Класно хочеш бути як Майкл Джордан?:)`;
}
 else if (favSport === 'Футбол') {
    sport = `Любиш ${favSport} ? Класно хочеш бути як Роналду?:)`;
}
 else if (favSport === 'Бокс') {
    sport = `Любиш ${favSport} ? Класно хочеш бути як Кличко?:)`;
    } 


alert(`${year}
${city}
${sport}`);






        
