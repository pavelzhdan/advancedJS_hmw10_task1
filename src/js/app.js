import read from './reader';
import json from './parser';

class GameSavingLoader {
  static load() {
    read().then((response) => json(response)).then((data) => data);
  }
}

GameSavingLoader.load().then((saving) => {
  const id = Number(saving.match(/(?<="id":)[0-9]+/));
  const created = Number(saving.match(/(?<="created":)[0-9]+/));
  const userInfoId = Number(saving.match(/(?<=:{"id":)[0-9]+/));
  const userInfoName = String(saving.match(/(?<=name":")[a-zA-Z]+/));
  const userInfoLevel = Number(saving.match(/(?<="level":)[0-9]+/));
  const userInfoPoints = Number(saving.match(/(?<="points":)[0-9]+/));
  return gameFile = new GameSaving(id, created, userInfoId, userInfoName, userInfoLevel, userInfoPoints);
}), (error) => {
  console.log(error);
};
