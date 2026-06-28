'use strict';
/*
Создать базовый класс Персонажа с параметрами: 
раса, имя, язык и метод - говорить (выводит язык и имя в консоль).

Создать класс Орка, который наследуется от Персонажа,
у которого есть оружие и который имеет метод - удара.

Создать класс Эльфа, который наследуется от Персонажа,
у которого есть типа заклинаний и метод – создать заклинание.

Использовать прототипное наследование.
Все методы просто выводят что-то в консоль.
*/
const Hero = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}
Hero.prototype.speak = function () {
    console.log(`${this.language}: мое имя - ${this.name}`);
}


const Ork = function (name, weapon='Дубина') {
    Hero.call(this, 'ork', name, 'Оркский');
    this.weapon = weapon;
}
Ork.prototype = Object.create(Hero.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function () {
    const msg = `${this.name} бьет с помощью '${this.weapon}'!`
    console.log(msg);
}


const Elf = function (name, spellType='Огненный шар') {
    Hero.call(this, 'elf', name, 'Эльфийский');
    this.spellType = spellType;
}
Elf.prototype = Object.create(Hero.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.castSpell = function () {
    console.log(`${this.name} произносит '${this.spellType}'!`);
}


const ork = new Ork('Злыдень');
const elf = new Elf('Великолепный');
ork.speak();
ork.hit();
elf.speak();
elf.castSpell();