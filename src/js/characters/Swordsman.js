import Character from '../Character';

export default class Swordsman extends Character {
  constructor(level, attack, defence, health, type) {
    super(health);
    this.level = 2;
    this.health = 80;
    this.attack = 40;
    this.defence = 10;
    this.type = 'swordsman';
  }
}

// const swordsmanGen = new Swordsman(1);
// console.log(swordsmanGen.level) // 1
