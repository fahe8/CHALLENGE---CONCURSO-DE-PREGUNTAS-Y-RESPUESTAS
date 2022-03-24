import { arrayQuestions } from "../Data/data.js";
import { Questions } from "./Questions.js";

export class Game {
    constructor(player, round) {
      this.player = player;
      this.round = round;
    }
  
    filterQuestion() {
        const filtrarpregunta = arrayQuestions.filter(e => {
            return e.category == this.round.round;
          })
        
          const rand = Math.floor(Math.random()*filtrarpregunta.length);
          const nuevaArray = filtrarpregunta[rand];
          return nuevaArray;
        
    }
  
    setNewRound(){
        if(this.round.round < 5) {
            const newQuestion = this.filterQuestion()
            this.round.setQuestion(new Questions(
             newQuestion.question,
             newQuestion.correct,
             newQuestion.answers,
             newQuestion.category));
         }
      
    }
  
  }