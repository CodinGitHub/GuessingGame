//Game Variables
let mysteryNumber = Math.floor(Math.random()*10);
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
  gameState = "Intentos restantes: " + guessesRemaining;

  if (playerGuess < mysteryNumber){
    if(playerGuess == (mysteryNumber -1 )){
      output1.innerHTML = "¿" + playerGuess + "? " + "Casi, estás muy cerca ;)";
      output2.innerHTML = gameState;
    }else{
      output1.innerHTML = "¿" + playerGuess + "? " + "Muy BAJO :(";
      output2.innerHTML = gameState;
    }
    // Check for the end of the game
    if(guessesRemaining < 1){
      endGame();
    }
  }
  else if(playerGuess > mysteryNumber){
    if(playerGuess == (mysteryNumber + 1)){
      output1.innerHTML = "¿" + playerGuess + "? " + "Casi, estás muy cerca ;)";
      output2.innerHTML = gameState;
    }else{
      output1.innerHTML = "¿" + playerGuess + "? " + "Muy ALTO :(";
      output2.innerHTML = gameState;
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
    output1.innerHTML = "Genial acertaste! es " + mysteryNumber;
    output2.innerHTML = "Sólo te tomó " + guessesMade + " intentos.";
  }else{
    output1.innerHTML = "Lo siento :( se acabaron los intentos.";
    output2.innerHTML = "El número es: " + mysteryNumber + ".";
  }
  // Disable de button
  button.removeEventListener("Click", clickHandler, false);
  button.disabled = true;

  // Disable the enter key
  //window.removeEventListener("keydown", keyDownHandler, false);

  // Disable the input field
  input.disabled = true;

}