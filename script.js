const weapon = ["rock", "paper", "scissors"];

let computerSelection;

function computerPlay() {
    let random = Math.floor(Math.random() * weapon.length);
    computerSelection = weapon[random];
}

let playerSelection;

function personPlay() {
    playerSelection = prompt("Choose your weapon: Rock, paper or scissors!", '').toLowerCase();
}


let result;

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection === "rock") {
        result = "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beat Paper";
    } else if (playerSelection == "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beat Paper";
    } else if (playerSelection == "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats Scissors";
    } else if (playerSelection == computerSelection) {
        result = "It's a draw!";
    } else {
        result = "You need to choose a weapon!";
    }

    console.log("Your choice: " + playerSelection);
    console.log("Computer's choice: " + computerSelection);
    console.log(result);
}

function game() {
    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);


    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);


    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);


    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);


    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
}

game();