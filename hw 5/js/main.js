'use strict';

// =====task #1========

// створив обєкт
const user = {
    name: 'John',
    surname: 'Smith'
};

console.log(user);

// змінив імя

user.name = 'Pete';

console.log(user);

// видалив імя

delete user.name;

console.log(user);

// ======Task #2============
// Відповідь ТАК це буде працювати, обєкти і масиви обявлені через const змінювати можна!

// ==========Task #3=====

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// варіант 1 стрілкова функція

// const sum = Object.values(salaries).reduce((a, b) => a + b);

// варіант 2 звичайна

const sum = Object.values(salaries).reduce(function (a, b) {
    return a + b
});
console.log(sum);

