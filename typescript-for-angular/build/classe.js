"use strict";
class Character {
    attack() {
        console.log(`${this.stregth} atacou!`);
    }
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
}
const p1 = new Character(10, 5);
const p2 = new Character(5, 10);
