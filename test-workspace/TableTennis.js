// #region Test 1
function ping() {
  return "pong";
}
// #endregion Test 1

class Table {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
  }

  get() {
    return this.data;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// #region Player

class Player extends User {
  constructor(name) {
    super(name);
    this.points = 0;
  }

  addPoint() {
    this.points++;
  }

  getPoints() {
    return this.points;
  }
}
// #endregion Player

// #region Game

class Game {
  constructor(id) {
    this.scoreboard = [0, 0];
    this.id = id;
  }

  getScore() {
    return this.scoreboard;
  }

  setScore(score) {
    this.scoreboard = score;
  }
}
// #endregion Game

// #region Referee
class Referee {
  constructor(name) {
    this.name = name;
  }
}
// #endregion Referee
