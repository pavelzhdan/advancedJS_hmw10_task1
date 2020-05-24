/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => json(response)).then((data) => data);
  }
}

GameSavingLoader.load().then((saving) => {
  const id = Number(saving.match(/(?<="id":)[0-9]+/));
  const created = Number(saving.match(/(?<="created":)[0-9]+/));
  const userInfoId = Number(saving.match(/(?<=:{"id":)[0-9]+/));
  const userInfoName = String(saving.match(/(?<=name":")[a-zA-Z]+/));
  const userInfoLevel = Number(saving.match(/(?<="level":)[0-9]+/));
  const userInfoPoints = Number(saving.match(/(?<="points":)[0-9]+/));
  const gameFile = new GameSaving(id, created, userInfoId, userInfoName,
    userInfoLevel, userInfoPoints);
  return gameFile;
}), (error) => {
  console.log(error);
};
