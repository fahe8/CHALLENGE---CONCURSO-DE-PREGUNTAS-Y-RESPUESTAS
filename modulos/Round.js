import { saveLocalStorage, getLocalStorage } from "../Utilidades/LocalStorage.js";
import { disableAnswer } from "../Utilidades/DOM.js";

export class Round {
  constructor() {
    this.round = 1;
  }

  //*NOTA*
  //Debido a que para poder filtrar las preguntas necesitaba el uso de esta clase no podia inicializarla de inmediado con question
  setQuestion(question) {
    this.question = question;
  }

  //Metodo para incrementar las rondas
  increaseRound() {
    this.round += 1;
  }
  //Un metodo para validar la respuesta, y si es incorrecta llamo a los metodos encargados
  // de crear y guardar los datos en una tabla de clasificación
  validateAnswer(userAnswer) {
    if (userAnswer === this.question.getAnsCorrect()) {
      return true;
    }
    const lose = "Has perdido";
    saveLocalStorage(lose);
    getLocalStorage();
    disableAnswer();
    return false;
  }
}
