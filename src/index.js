/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import json from './js/parser';
import read from './js/reader';

export default class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    const value = json(data); // возвращается Promise!
    return value;
  }
}

class GameSaving {
    {
        "id": <number>, // id сохранения
        "created": <timestamp>, // timestamp создания
        "userInfo": {
          "id": <number>, // user id
          "name": <string>, // user name
          "level": <number>, // user level
          "points": <number> // user points
        }
      }
}
