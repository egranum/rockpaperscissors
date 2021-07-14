const weapon = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const random = Math.floor(Math.random() * weapon.length);
    return weapon[random];
}

const playerSelection = prompt("Choose your weapon: Rock, paper or scissors!", '').toLowerCase();

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection == "rock" && computerSelection === "Scissors") {
        result = "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection === "Rock") {
        result = "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection === "Paper") {
        result = "You win! Scissors beat Paper";
    } else if (playerSelection == "rock" && computerSelection === "Paper") {
        result = "You lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection === "Scissors") {
        result = "You lose! Scissors beat Paper";
    } else if (playerSelection == "scissors" && computerSelection === "Rock") {
        result = "You lose! Rock beats Scissors";
    } else if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
        result = "You need to choose a weapon!";
    } else {
        result = "It's a draw! Try again";
    }

    return result;
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));