export class Player {
    constructor() {
      this.pts = 0;
      this.maxRound = 1;
    }

    setName(playerName) {
      this.playerName = playerName
    }

    addPoints(points) {
      this.pts += points;
    }
  
    increaseMaxRound() {
      this.maxRound += 1;
    }
    
  }
  