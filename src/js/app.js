import read from './reader';
import json from './parser';

class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    const value = json(data); // возвращается Promise!
    return value;
  }
}


read().then((response) => {
  console.log(response);
  return json(response);
  // console.log(String.fromCharCode.apply(null, new Uint16Array(response)))
}).then((data) => {
  console.log(data);
});
/* json(response).then((data) => {
    console.log(data)
  }); */
