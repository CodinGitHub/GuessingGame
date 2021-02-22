//Game Variables
let mysteryNumber = 5;
let playerGuess = 0;
let guessesRemaining = 5;
let guessesMade = 0;
let gameState = "";

// The input and output fields
let input = document.querySelector("#input");
let output = document.querySelector("#output");

// The button
let button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// Funciones
function clickHandler(){
  playGame();
}

function playGame(){

  guessesRemaining--;
  guessesMade++;
  gameState = "Intentos: " + guessesMade + ", Faltantes: " + guessesRemaining;

  playerGuess = parseInt(input.value);

  if (playerGuess < mysteryNumber){
    if(playerGuess == (mysteryNumber -1 )){
      output.innerHTML = "¿" + playerGuess + "? " + "Casi, estás muy cerca ;) intenta de nuevo...<br><br>" + gameState;
    }else{
      output.innerHTML = "¿" + playerGuess + "? " + "Muy BAJO :( intenta de nuevo...<br><br>" + gameState;
    }
  }
  else if(playerGuess > mysteryNumber){
    if(playerGuess == (mysteryNumber + 1)){
      output.innerHTML = "¿" + playerGuess + "? " + "Casi, estás muy cerca ;) intenta de nuevo...<br><br>" + gameState;
    }else{
      output.innerHTML = "¿" + playerGuess + "? " + "Muy ALTO :( intenta de nuevo...<br><br>" + gameState;
    }
  }
  if(playerGuess === mysteryNumber)
  {
    output.innerHTML = "Genial acertaste!";
  }
}