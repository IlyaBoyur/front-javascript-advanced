'use strict';
/*
Научиться преобразовывать прототипы персонажей (Орк и Эльф)
в классы с использованием синтаксиса ES6 и освоить принципы преопределения методов.

Шаги Реализации:
Создание Базового Класса "Персонаж":
Параметры класса: Раса, Имя, Язык.
Метод: Говорить (можно сделать приватным на ваше усмотрение).
Наследование и Расширение Класса "Персонаж":
Создание класса "Орк":
Новый параметр: Оружие.
Новый метод: Удар.
Преопределить метод Говорить специфично для Орка.
Создание класса "Эльф":
Новый параметр: Заклинание.
Новый метод: Создать Заклинание.
Преопределить метод Говорить специфично для Эльфа.
Применение Синтаксиса ES6:
Использование классов ES6 для реализации наследования и расширения функциональности базового класса "Персонаж".
*/
class Hero {
    constructor (race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    };
    get claim() {
        return `${this.language}: мое имя - ${this.name}`;
    }
    speak() {
        console.log(this.claim);
    }
};


class Ork extends Hero {
    constructor (name, weapon='Дубина') {
        super('ork', name, 'Оркский');
        this.weapon = weapon;
    }
    hit() {
        const msg = `${this.name} бьет с помощью '${this.weapon}'!`
        console.log(msg);
    };
    speak() {
        console.log(this.claim + '. ' + `Аргх! У меня ${this.weapon}!`);
    }
};


class Elf extends Hero {
    constructor (name, spellType='Огненный шар') {
        super('elf', name, 'Эльфийский');
        this.spellType = spellType;
    };
    castSpell() {
        const msg = `${this.name} произносит '${this.spellType}'!`
        console.log(msg);
    };
    speak() {
        console.log(this.claim + '. ' + `Моё уважение.`);
    }
};


(function() {
    const ork = new Ork('Злыдень');
    const elf = new Elf('Великолепный');
    ork.speak();
    ork.hit();
    elf.speak();
    elf.castSpell();
})();