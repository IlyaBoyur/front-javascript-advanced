'use strict';
/*
Сделать функцию валидации возраста.
На вход передаётся строка даты рождения пользователя вида “2022-01-01”.

Необходимо вывести true, если ему больше 14 лет и false, если меньше
*/
function validateAge(birthdayString, age=14) {
    const birthDate = new Date(birthdayString);
    const now = new Date()
    const diffYears = now.getFullYear() - birthDate.getFullYear();
    if (diffYears > age) {
        return true;
    } else if (diffYears < age) {
        return false;
    }
    const diffMonths = now.getMonth() - birthDate.getMonth();
    if (diffMonths > 0) {
        return true;
    } else if (diffMonths < 0) {
        return false;
    }
    const diffDates = now.getDate() - birthDate.getDate();
    if (diffDates >= 0) {
        return true;
    }
    return false;
}


console.log(validateAge('2000-01-01'));
console.log(validateAge('2025-01-01'));
console.log(validateAge('2012-05-25'));
console.log(validateAge('2012-06-25'));
console.log(validateAge('2012-06-26'));
console.log(validateAge('2012-06-27'));