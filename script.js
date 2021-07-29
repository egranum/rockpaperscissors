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
        result = 1;
    } else if (playerSelection == "paper" && computerSelection === "rock") {
        result = 1;
    } else if (playerSelection == "scissors" && computerSelection === "paper") {
        result = 1;
    } else if (playerSelection == "rock" && computerSelection === "paper") {
        result = -1;
    } else if (playerSelection == "paper" && computerSelection === "scissors") {
        result = -1;
    } else if (playerSelection == "scissors" && computerSelection === "rock") {
        result = -1;
    } else if (playerSelection == computerSelection) {
        result = 0;
    } else {
        result = "You need to choose a weapon!";
    }

    console.log("Your choice: " + playerSelection);
    console.log("Computer's choice: " + computerSelection);
}

function game() {
    let x = 0;
    let y = 0;
    for (let i = 0; i < 5; i++) {
        personPlay();
        computerPlay();
        playRound(playerSelection, computerSelection);

        switch(result) {
            case 1: x++;
            break;
            case -1: y++;
            break;
        }
    }

    if (x < y) {
        console.log("You lose");
    } else if (x > y) {
        console.log("You win!");
    } else {
        console.log("It's a tie");
    }
}

game();