import { Player } from "./modulos/Player.js";
import { Round } from "../modulos/Round.js";
import { Questions } from "./modulos/Questions.js";
import { arrayQuestions } from "./Data/data.js";
import { Game } from "./modulos/Game.js";

const respuestas = document.getElementById('containerAnswer');
const preguntahtml = document.getElementById('pregunta');
const cambiarRespuestas = document.querySelectorAll('.answer')
const roundhtml = document.getElementById('round');
const table = document.getElementById('table')
const exit = document.getElementById('exit')

const numRound = new Round()


function filterQuestion() {
  const filtrarpregunta = arrayQuestions.filter(e => {
    return e.category == numRound.round;
  })

  const rand = Math.floor(Math.random()*filtrarpregunta.length);
  const nuevaArray = filtrarpregunta[rand];
  return nuevaArray;
}

const jsonPregunta = filterQuestion()

const pregunta = new Questions(
  jsonPregunta.question,
  jsonPregunta.correct,
  jsonPregunta.answers,
  jsonPregunta.category
  );

  numRound.setQuestion(pregunta)

  const newPlayer = new Player("TWBauer");

  const startGame = new Game(newPlayer,numRound)


function resetQuestion() {
  cambiarRespuestas.forEach((e,i) => {
    e.innerHTML = startGame.round.question.answers[i]
  })
  
  roundhtml.innerHTML = `Round: ${numRound.round}`
  preguntahtml.innerHTML = startGame.round.question.question
}
resetQuestion()

respuestas.addEventListener('click', clicker)
function clicker(event){
  const userAnswer = event.target.textContent;
  const validateAns = numRound.validateAnswer(userAnswer)
  if(validateAns){
    //pasa de ronda y arroja otra pregunta
    startGame.round.increaseRound()
    startGame.setNewRound();
    resetQuestion()
  }
}



