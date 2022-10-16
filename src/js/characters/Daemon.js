import Character from '../Character';

export default class Daemon extends Character {
  constructor(level, attack, defence, health, type) {
    super(level, health);
    this.attack = 10;
    this.defence = 10;
    this.type = 'daemon';
  }
}