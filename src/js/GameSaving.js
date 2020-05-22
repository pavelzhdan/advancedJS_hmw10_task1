/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable quote-props */
export default class GameSaving {
  constructor(id, created, userInfoId, userInfoName, userInfoLevel, userInfoPoints) {
    this.id = id,
    this.created = created,
    this.userInfo = {
      'id': userInfoId,
      'name': userInfoName,
      'level': userInfoLevel,
      'point': userInfoPoints,
    };
  }
}
