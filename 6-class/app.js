'use strict';
/*
Создайте класс Car у которого есть марка, модель и пробег
(все свойства приватные, задаются в конструкторе). 

Сделайте для него возможность менять пробег через get и set.
Добавьте метод info, который выводит в консоль марку, модели и пробег.
*/
class Car {
    #_brand;
    #_model;
    #_mileage;

    constructor(brand,model,mileage) {
        this.#_brand = brand;
        this.#_model = model;
        this.mileage = mileage;
    }

    get mileage(){
        return this.#_mileage;
    }
    set mileage(value){
        value = Number(value);
        if (isNaN(value) || !isFinite(value) || value <= 0) {
            throw new Error('Пробег должен быть больше нуля.')
        }
        this.#_mileage = value;
    }

    stringify() {
        return `${this.#_brand} ${this.#_model}, пробег ${this.mileage} км`;
    }
    info() {
        console.log(this.stringify());
    }
}

const myCar = new Car('Ford', 'Focus', 1000);
myCar.info();