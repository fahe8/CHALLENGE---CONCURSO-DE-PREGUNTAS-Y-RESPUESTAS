import { arrayQuestions } from "../Data/data.js";
import { Questions } from "./Questions.js";

export class Game {
  constructor(player, round, localStorageInfo) {
    this.player = player;
    this.round = round;
    this.localStorage = localStorageInfo;
  }
  // Un metodo que permite filtrar las preguntas dependiendo de la ronda actual,
  // luego selecciona una de las 5 preguntas aleatoriamente
  filterQuestion() {
    const filtrarpregunta = arrayQuestions.filter((e) => {
      return e.category == this.round.round;
    });
    const rand = Math.floor(Math.random() * filtrarpregunta.length);
    const nuevaArray = filtrarpregunta[rand];
    return nuevaArray;
  }
  //Un metodo que muestre la pregunta mientras la ronda actual sea menor o igual a 5
  //Se guarda en una constante la pregunta seleccionada y se procede a inicializarla usando la clase Question
  setNewRound() {
    if (this.round.round < 6) {
      const newQuestion = this.filterQuestion();
      this.round.setQuestion(
        new Questions(
          newQuestion.question,
          newQuestion.correct,
          newQuestion.answers,
          newQuestion.category
        )
      );
    }
  }
}
