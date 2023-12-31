type robot = {
    id: number  | string,
    name: string,
}

const bot1: robot = {
    id: 1,
    name: 'fulano',
}

const bot2: robot = {
    id: '2',
    name: 'fulano 2',
}

interface robot2 {
    readonly id: number | string,
    name: string,
}

const bot3: robot2 = {
    id: 3,
    name: 'fulano 2',
}

const bot4: robot2 = {
    id: '4',
    name: 'fulano 4',
}

console.log(bot1, bot2, bot3, bot4);
// console.log(bot4.id = 5)


class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Olá, meu nome é ${this.name}`;
    }

}

const p = new Pessoa(5, 'John');
console.log(p.sayHello());
