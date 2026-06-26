'use strict';
/*
Сделать функцию для настольных игр. 
Она которая принимает тип dice, который надо бросить:
d4, d6, d8, d10, d12, d16, d20
и возвращает случайное целое число на этом интервале с включёнными границами.

d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/
const DICE_2_BOUNDS = new Map(Object.entries({
    d4: [1,4],
    d6: [1,6],
    d8: [1,8],
    d10: [1,10],
    d12: [1,12],
    d16: [1,16],
    d20: [1,20]
}));

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function throwDice(dice) {
    if (!DICE_2_BOUNDS.has(dice)) {
        console.log('Не поддерживаемый dice');
        return;
    }
    return randomInt(...DICE_2_BOUNDS.get(dice));
}

const tries = Array.from({'length': 20});

console.log(DICE_2_BOUNDS);
tries.forEach(_ => {
    console.log(throwDice('d20'));
});
