class Character {
    private name?: string;
    stregth: number;
    skill: number;

    attack(): void {
        console.log(`${this.stregth} atacou!`);
    }

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
}

const p1 = new Character('Fulano', 10, 5);
const p2 = new Character('Beltrano', 5, 10);

class Magician extends Character {

    constructor(name: string, stregth: number, skill: number) {
        super(name, stregth, skill);
    }
}
