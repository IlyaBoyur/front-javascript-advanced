/*
Спроектируйте класс Billing со свойством amount 
и методом calculateTotal для расчёта счёта. 
Сделайте разный calculateTotal для разных типов:

- fixBilling - где нужно вернуть amount как результат
- hourBilling - который считает amount * число часов
- itemBilling где считается amount * число элементов
Соблюдайте принцип открытости / закрытости!
*/
class Billing {
    constructor(amount) {
        this.amount = amount;
        this.name = 'Cчет';
    }
};


class FixBilling extends Billing{
    constructor(amount) {
        super(amount);
        this.name = 'Фиксированный счет';
    }
    calculateTotal(){
        return this.amount;
    }
}


class HourBilling extends Billing{
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
        this.name = 'Почасовой счет';

    }
    calculateTotal(){
        return this.amount * this.hours;
    }
}


class ItemBilling extends Billing{
    constructor(amount, items) {
        super(amount);
        this.items = items;
        this.name = 'Cчет за единицы работы';

    }
    calculateTotal(){
        return this.amount * this.items;
    }
}

const billings = [
    new FixBilling(100),
    new HourBilling(80, 3),
    new ItemBilling(30, 2)
]
billings.forEach(b => {
    console.log(`${b.name}: ${b.calculateTotal()}`);
});