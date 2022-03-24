export class Player {
    constructor(name) {
      this.name = name;
      this.pts = 0;
      this.maxRound = 1;
    }
    addPoints(points) {
      this.pts += points;
    }
  
    increaseMaxRound() {
      this.maxRound += 1;
    }
    getName() {
      return this.name;
    }
  }
  