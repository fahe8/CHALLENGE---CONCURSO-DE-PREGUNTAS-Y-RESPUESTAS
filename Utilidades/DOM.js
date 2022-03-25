import { startGame } from "../app.js";

const   preguntahtml = document.getElementById("pregunta"),
        cambiarRespuestas = document.querySelectorAll(".answer"),
        roundhtml = document.getElementById("round");

  
// Una funcion que muestra en el DOM la pregunta, las respuestas y la ronda actual
export function refreshDOM() {
  cambiarRespuestas.forEach((e, i) => {
    e.innerHTML = startGame.round.question.answers[i];
  });

  roundhtml.innerHTML = `Round: ${startGame.round.round}`;
  preguntahtml.innerHTML = startGame.round.question.question;
}

// Una funcion para desabilitar los eventos posibles cuando se finaliza el juego
export function disableAnswer() {
  exit.setAttribute("disabled", "");
  cambiarRespuestas.forEach((e) => {
    e.setAttribute("disabled", "");
  });
}
