/* eslint-disable no-unused-vars */
import GameSavingLoader from '../app';
import GameSaving from '../GameSaving';

test('return object', async () => {
  const exapmle = new GameSaving(9, 1546300800, 1, 'Hitman', 10, 2000);


  expect(await GameSavingLoader.load().then((saving) => {
    const id = Number(saving.match(/(?<="id":)[0-9]+/));
    const created = Number(saving.match(/(?<="created":)[0-9]+/));
    const userInfoId = Number(saving.match(/(?<=:{"id":)[0-9]+/));
    const userInfoName = String(saving.match(/(?<=name":")[a-zA-Z]+/));
    const userInfoLevel = Number(saving.match(/(?<="level":)[0-9]+/));
    const userInfoPoints = Number(saving.match(/(?<="points":)[0-9]+/));
    const gameFile = new GameSaving(id, created, userInfoId, userInfoName,
      userInfoLevel, userInfoPoints);
    return gameFile;
  })).toEqual(exapmle);
});
