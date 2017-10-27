// Global variable declarations
let randomNumber = Math.floor(Math.random()*100) + 1; //random number generator
let mainDiv = document.getElementById("mainDiv");
let nameTitle = document.getElementById("nameTitle");

let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");

let guesses = document.getElementById("guesses");
let lastResult = document.getElementById("lastResult");
let lowOrHigh = document.getElementById("lowOrHigh");

let guessCount = 1;
let score = 10;
let resetButton;


$(document).ready(function () {
   let userName = prompt("Hello, Please your name: "); //allow user to enter a name.
    if (userName !==""){
        nameTitle.textContent = userName.toUpperCase()+", welcome to Mind Games."
    }
    guessSubmit.addEventListener("click", startGame);
});

function startGame() {
    "use strict";
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Previous Guesses: ";
    }
    guesses.textContent += userGuess + " ";
    console.log(userGuess);
    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations!, you just got it right! TOTAL SCORE = "+(guessCount*score);
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver(); //Function call

    }else if(guessCount === 7) {
        lastResult.textContent = "!!! It's GAME OVER !!!  TOTAL SCORE = "+(guessCount*score)/(guessCount*score) - 1;
        setGameOver(); //Function call
    } else{
        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = "red";

        if(userGuess < randomNumber){
            lowOrHigh.textContent = "Last guess was too low!";
        } else if(userGuess > randomNumber){
            lowOrHigh.textContent = "Last Guess was too high";
        }
    }
    guessCount++;
    guessField.value="";
    guessField.focus();
}



function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    //Create new button control
    resetButton = document.createElement("button");
    resetButton.className = "btn btn-outline-success ml-3 mb-4";
    resetButton.textContent = "Start a new game";
    //Append the button to the document body.
    mainDiv.appendChild(resetButton);
    guessSubmit.after(resetButton); //new stuff. nicely adds the button beside the submit button.
    resetButton.addEventListener("click", resetGame); //make another function call to reset the game
}

function resetGame() {

    guessCount = 1;
    let resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random()*100) + 1;
    console.log(randomNumber);
    guessField.focus();
}