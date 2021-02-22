//Game Variables
let mysteryNumber = 5;
let playerGuess = 0;
let guessesRemaining = 5;
let guessesMade = 0;
let gameState = "";
let gameWon = false;

// The input and output fields
let input = document.querySelector("#input");
let output = document.querySelector("#output");

// The button
let button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
window.addEventListener("keydown", keyDownHandler, false);

// Functions

function keyDownHandler(event){
  if(event.keyCode === 13){
    validateInput();
  }
}

function clickHandler(){
  validateInput();
}

function validateInput(){
  playerGuess = parseInt(input.value);
  if(isNaN(playerGuess)){
    output.innerHTML = "Por favor ingresa un número."
  }else{
    playGame();
  }
}

function playGame(){

  guessesRemaining--;
  guessesMade++;
  gameState = "Intentos: " + guessesMade + ", Faltantes: " + guessesRemaining;

  if (playerGuess < mysteryNumber){
    if(playerGuess == (mysteryNumber -1 )){
      output.innerHTML = "¿" + playerGuess + "? " + "Casi, estás muy cerca ;) intenta de nuevo...<br><br>" + gameState;
    }else{
      output.innerHTML = "¿" + playerGuess + "? " + "Muy BAJO :( intenta de nuevo...<br><br>" + gameState;
    }
    // Check for the end of the game
    if(guessesRemaining < 1){
      endGame();
    }
  }
  else if(playerGuess > mysteryNumber){
    if(playerGuess == (mysteryNumber + 1)){
      output.innerHTML = "¿" + playerGuess + "? " + "Casi, estás muy cerca ;) intenta de nuevo...<br><br>" + gameState;
    }else{
      output.innerHTML = "¿" + playerGuess + "? " + "Muy ALTO :( intenta de nuevo...<br><br>" + gameState;
    }
    // Check for the end of the game
    if(guessesRemaining < 1){
      endGame();
    }
  }
  if(playerGuess === mysteryNumber)
  {
    gameWon = true;
    endGame();
  }
}

function endGame(){
  if(gameWon){
    output.innerHTML = "Genial acertaste... es " + mysteryNumber + "!<br><br>" + "Sólo te tomó " + guessesMade + " intentos.";
  }else{
    output.innerHTML = "Lo siento :( se acabaron los intentos.<br><br>" + "El número es: " + mysteryNumber + "." ;
  }
  // Disable de button
  button.removeEventListener("Click", clickHandler, false);
  button.disabled = true;

  // Disable the enter key
  //window.removeEventListener("keydown", keyDownHandler, false);

  // Disable the input field
  input.disabled = true;

}