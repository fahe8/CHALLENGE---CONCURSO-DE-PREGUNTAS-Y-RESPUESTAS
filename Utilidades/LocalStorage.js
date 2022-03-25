import { startGame } from "../app.js";

// Una funcion que agrega una ventana que muestra si ganaste o perdiste,
// luego pide el nickname para guardarlo junto a su puntuación en el localStorage
export function saveLocalStorage(youwinornot) {
  table.classList.add("winOrLose");
  table.innerHTML = youwinornot;
  setTimeout(() => {
    const nickName = prompt(`Ingrese su NickName: `);
    startGame.player.setName(nickName);
    let arrayLocalStorage = JSON.parse(localStorage.getItem("datos")) || [];
    const playerScore = {
      nombre: startGame.player.playerName,
      puntos: startGame.player.pts,
    };
    arrayLocalStorage.push(playerScore);
    localStorage.setItem("datos", JSON.stringify(arrayLocalStorage));
  }, 1000);
}


//Una funcion que permite obtener los datos del localStorage para crear una ventana
// con la tabla de clasificación de mayor puntaje a menor
export function getLocalStorage() {
  setTimeout(() => {
    table.classList.toggle("table");
    table.innerHTML = "TABLA DE PUNTUACIÓN";
    const recupere = JSON.parse(localStorage.getItem("datos"));
    recupere.sort((a, b) => b.puntos - a.puntos);
    for (let i = 0; i <= recupere.length; i++) {
      const newElement = document.createElement("p");
      table.appendChild(newElement);
      newElement.innerHTML += `${recupere[i].nombre}: ${recupere[i].puntos}`;
    }
  }, 1000);
}
