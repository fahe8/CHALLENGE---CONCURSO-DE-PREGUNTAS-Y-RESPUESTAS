import { Player } from "./modulos/Player.js";
import { Round } from "../modulos/Round.js";
import { Game } from "./modulos/Game.js";
import {
  getLocalStorage,
  saveLocalStorage,
} from "./Utilidades/LocalStorage.js";
import { refreshDOM, disableAnswer } from "./Utilidades/DOM.js";

// import { LocalStorageClass } from "./modulos/LocalStorage.js";

const answersHtml = document.getElementById("containerAnswer"),
  exit = document.getElementById("exit"),
  htmlPoints = document.getElementById("htmlPoints"),
  exitText = "Te has rendindo",
  win = "Has acertado todas";

//Inicializa las clases en el orden correcto para poder darles uso
const numRound = new Round();
const newPlayer = new Player();
export const startGame = new Game(newPlayer, numRound);

//De la clase Game hago uso del metodo que corresponde a mostrar la pregunta por cada ronda
startGame.setNewRound();

refreshDOM();

answersHtml.addEventListener("click", clicker);
function clicker(event) {
  const userAnswer = event.target.textContent;
  const validateAns = numRound.validateAnswer(userAnswer);
  if (validateAns) {
    //pasa de ronda y arroja otra pregunta
    startGame.player.addPoints(startGame.round.round * 10);
    startGame.round.increaseRound();
    htmlPoints.innerHTML = `Puntaje: ${startGame.player.pts}`;
    startGame.setNewRound();
    refreshDOM();

    if (startGame.round.round > 5) {
      saveLocalStorage(win);
      getLocalStorage();
      disableAnswer();
    }
  }
}

exit.addEventListener("click", () => {
  saveLocalStorage(exitText);
  getLocalStorage();
  disableAnswer();
});
