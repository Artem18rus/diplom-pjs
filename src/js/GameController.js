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

    this.userHeroes = [Bowman, Swordsman, Magician];
    this.rivalHeroes = [Daemon, Undead, Vampire];

    this.userTeam = new Team([Bowman, Swordsman, Magician]);
    this.rivalTeam = new Team([Daemon, Undead, Vampire]);
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);

    console.log(this.userTeam.char); 
    
    // const character = new Bowman(2);
    // const position = 8; // для поля 8x8 лучник будет находиться слева на второй строке
    // const positionedCharacter = new PositionedCharacter(character, position);    
    // this.gamePlay.redrawPositions([positionedCharacter]);

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



