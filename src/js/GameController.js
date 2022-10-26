import themes from './themes';
import GamePlay from './GamePlay'
import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Vampire from './characters/Vampire';
import Undead from './characters/Undead';
import Daemon from './characters/Daemon';
import Team from './Team';
import PositionedCharacter from './PositionedCharacter';
import { characterGenerator } from './generators';
import { generateTeam } from './generators';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);

    const characters = [new Swordsman(2), new Bowman(3), new Magician(1)]; // Обратите внимание на new в отличие от playerTypes в прошлом примере
    const team = new Team(characters);
    //console.log(team.characters) // [swordsman, bowman]
    
    // const playerTypes = [Bowman, Swordsman, Magician]; // доступные классы игрока
    const team1 = generateTeam(team.characters, 3, 4); // массив из 4 случайных персонажей playerTypes с уровнем 1, 2 или 3
    //console.log(playerTypes)
    console.log(team1.characters)



    // const character = new Bowman(2);
    // console.log(character)
    // const position = 8; // для поля 8x8 лучник будет находиться слева на второй строке
    // const positionedCharacter = new PositionedCharacter(character, position);
    
    // this.gamePlay.redrawPositions([positionedCharacter]);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}



