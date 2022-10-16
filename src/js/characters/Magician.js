import Character from '../Character';

export default class Magician extends Character {
  constructor(level, attack, defence, health, type) {
    super(health);
    this.level = 3;
    this.health = 70;
    this.attack = 10;
    this.defence = 40;
    this.type = 'magician';
  }
}

// const magicianGen = new Magician(3);
// console.log(magicianGen.level) // 3