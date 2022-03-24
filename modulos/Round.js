import { disableAnswer } from "../app.js";
import { save_localStorage } from "../app.js";
import { getLocalStorage } from "../app.js";


export class Round {
    constructor() {
      this.round = 1;
    }

    setQuestion(question) {
        this.question = question
    }

    increaseRound() {
      this.round += 1
    }
  
    validateAnswer(userAnswer) {
      if (userAnswer === this.question.getAnsCorrect()) {
         return true;
          
      }
      save_localStorage()
      const table = document.getElementById('table')
      table.classList.add('table')
      table.innerHTML='perdio';
      const a = document.createElement("div")
      table.appendChild(a)
      a.innerHTML = getLocalStorage();
      disableAnswer();
      console.log("paila");
      return  false;
    }
  
  
  
  }