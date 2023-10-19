"use strict";
const bot1 = {
    id: 1,
    name: 'fulano',
};
const bot2 = {
    id: '2',
    name: 'fulano 2',
};
const bot3 = {
    id: 3,
    name: 'fulano 2',
};
const bot4 = {
    id: '4',
    name: 'fulano 4',
};
console.log(bot1, bot2, bot3, bot4);
// console.log(bot4.id = 5)
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Olá, meu nome é ${this.name}`;
    }
}
const p = new Pessoa(5, 'John');
console.log(p.sayHello());
