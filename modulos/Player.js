export class Player {
  constructor() {
    this.pts = 0;
    this.maxRound = 1;
  }
  //Crear el nombre del nombre del jugador
  setName(playerName) {
    this.playerName = playerName;
  }
  //Acumulador de puntos
  addPoints(points) {
    this.pts += points;
  }
}
