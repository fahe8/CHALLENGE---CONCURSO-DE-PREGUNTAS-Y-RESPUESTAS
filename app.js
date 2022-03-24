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


const pregunta = new Questions(
arrayQuestions[0].question,
arrayQuestions[0].correct,
arrayQuestions[0].answers,
arrayQuestions[0].category,
);

const numRound = new Round()

numRound.setQuestion(pregunta)

function resetQuestion() {
  cambiarRespuestas.forEach((e,i) => {
    e.innerHTML = pregunta.answers[i]
  })
  
  roundhtml.innerHTML = `Round: ${numRound.round}`
  preguntahtml.innerHTML = pregunta.question
}
resetQuestion()


numRound.validateAnswer('15')



