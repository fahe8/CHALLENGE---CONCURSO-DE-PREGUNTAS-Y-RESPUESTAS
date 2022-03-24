import { Player } from "./modulos/Player.js";
import { Round } from "../modulos/Round.js";
import { Questions } from "./modulos/Questions.js";
import { arrayQuestions } from "./Data/data.js";
import { Game } from "./modulos/Game.js";

const respuestas = document.getElementById('containerAnswer'),
      preguntahtml = document.getElementById('pregunta'),
      cambiarRespuestas = document.querySelectorAll('.answer'),
      roundhtml = document.getElementById('round'),
      table = document.getElementById('table'),
      exit = document.getElementById('exit'),
      htmlPoints = document.getElementById('htmlPoints'),
      htmlMaxRound = document.getElementById('htmlMaxRound')

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

  const newPlayer = new Player();

  const startGame = new Game(newPlayer,numRound)


function resetQuestion() {
  cambiarRespuestas.forEach((e,i) => {
    e.innerHTML = startGame.round.question.answers[i]
  })
  
  roundhtml.innerHTML = `Round: ${numRound.round}`
  preguntahtml.innerHTML = startGame.round.question.question
}
resetQuestion()

//Probemos el localStorage
export function save_localStorage() {
  
  const nickName= prompt(`Ingrese su NickName: `)
  newPlayer.setName(nickName)
  let arrayLocalStorage = JSON.parse(localStorage.getItem('datos'))|| [];
  const a = {
    nombre:newPlayer.playerName,
    puntos: startGame.player.pts
  }
  arrayLocalStorage.push(a)
  localStorage.setItem('datos', JSON.stringify(arrayLocalStorage));

}


export function getLocalStorage() {
  // const nombre = localStorage.getItem('name');
  // const puntos = JSON.parse(localStorage.getItem('points'));
  const recupere = JSON.parse(localStorage.getItem('datos'))
  const result = `${recupere[0].nombre} ${recupere[0].puntos}`
  return result
}



respuestas.addEventListener('click', clicker)
function clicker(event){
  const userAnswer = event.target.textContent;
  const validateAns = numRound.validateAnswer(userAnswer)
  if(validateAns){
    //pasa de ronda y arroja otra pregunta
    startGame.player.addPoints(startGame.round.round * 10)
    startGame.player.increaseMaxRound()
    startGame.round.increaseRound()
    htmlPoints.innerHTML = `Puntaje: ${startGame.player.pts}`
    startGame.setNewRound();
    resetQuestion()

    if(startGame.round.round> 5){
      save_localStorage();

      table.classList.add('table')
      table.innerHTML = 'GANASTE '
      a = document.createElement("div")
      disableAnswer();
    }
  }
  
}

exit.addEventListener('click', () => {
  table.classList.add('table')
  table.innerHTML = 'Te retiraste'
  save_localStorage()

  disableAnswer();
  
})

export function disableAnswer() {
  cambiarRespuestas.forEach((e) => {
    e.setAttribute('disabled','')
  })
}



