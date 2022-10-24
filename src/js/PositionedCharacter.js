import Character from './Character';
import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import GamePlay from './GamePlay';


export default class PositionedCharacter {
  constructor(character, position) {
    if (!(character instanceof Character)) {
      throw new Error('character must be instance of Character or its children');
    }

    if (typeof position !== 'number') {
      throw new Error('position must be a number');
    }

    this.character = character;
    this.position = position;
  }
}
const character = new Bowman(2);
const position = 8; // для поля 8x8 лучник будет находиться слева на второй строке
const positionedCharacter = new PositionedCharacter(character, position);

const eks1 = new GamePlay();
eks1.redrawPositions(positionedCharacter)
// //.redrawPositions([Bowman, Swordsman, Magician])