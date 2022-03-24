import { disableAnswer } from "../app.js";


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
         return 'true';
          
      }
      const table = document.getElementById('table')
      table.classList.add('table')
      table.innerHTML='perdio'
      disableAnswer();
      console.log("paila");
      return  'false';
    }
  
  
  
  }