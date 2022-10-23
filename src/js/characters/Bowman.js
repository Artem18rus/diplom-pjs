import Character from '../Character';

export default class Bowman extends Character {
  constructor(level, attack, defence, health, type) {
    super(health);
    this.level = 4;
    this.health = 100;
    this.attack = 25;
    this.defence = 25;
    this.type = 'bowman';
  }
}

// const bowmanGen = new Bowman(2);
// console.log(bowmanGen.level) // 2
