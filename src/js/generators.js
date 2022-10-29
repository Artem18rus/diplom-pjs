import Character from './Character';
import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Vampire from './characters/Vampire';
import Undead from './characters/Undead';
import Daemon from './characters/Daemon';
import Team from './Team';
/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  for (;;) {
    const type = Math.floor(Math.random() * allowedTypes.length);
    const level = Math.floor(Math.random() * maxLevel) + 1;
    yield new allowedTypes[type](level);
  }
}

// const playerTypes = [Bowman, Swordsman, Magician]; // доступные классы игрока
// // //console.log(characterGenerator(playerTypes, 2));
// const playerGenerator = characterGenerator(playerTypes, 2); // в данном примере персонажи игрока могут быть 1 или 2-ого уровней
// const a = playerGenerator.next().value.type;
// console.log(a);
// const character1 = playerGenerator.next().value; // случайный персонаж из списка playerTypes с уровнем 1 или 2
// console.log(character1.attack); // 10

// const character2 = playerGenerator.next().value; // ещё один случайный персонаж
// console.log(character2.level); // 1
// //character2.type; // swordsman

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  const character = characterGenerator(allowedTypes, maxLevel);

  for (; team.length < characterCount;) {
    team.push(character.next().value);
  }
  return team;
}

// const characters = [new Swordsman(2), new Bowman(3)]; // Обратите внимание на new в отличие от playerTypes в прошлом примере
// console.log(characters)
// const team = new Team(characters);
// console.log(team.char) // [swordsman, bowman]

// const playerTypes = [Bowman, Swordsman]; // доступные классы игрока
// //const team1 = generateTeam(playerTypes, 3, 4); // массив из 4 случайных персонажей playerTypes с уровнем 1, 2 или 3
// console.log(playerTypes)
// //console.log(team1.characters)

// console.log(team.characters[0].level) // 3
// console.log(team.characters[1].level) // 3
// console.log(team.characters[2].level) // 1
