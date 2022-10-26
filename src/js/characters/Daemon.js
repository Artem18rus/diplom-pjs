import Character from '../Character';

export default class Daemon extends Character {
  constructor(level, type) {
    super(level, type);
    this.attack = 10;
    this.defence = 10;
    this.type = 'daemon';
  }
}

// const daemonGen = new Daemon(2);
// console.log(daemonGen.level) // 2