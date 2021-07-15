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
    let x = 0;
    let y = 0;
    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);

    switch (result) {
        case "You win! Rock beats Scissors":
        case "You win! Paper beats Rock":
        case "You win! Scissors beat Paper":
            x++;
            break;
        case "You lose! Paper beats Rock":
        case "You lose! Scissors beat Paper":
        case "You lose! Rock beats Scissors":
            y++;
            break;
    }


    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
    
    switch (result) {
        case "You win! Rock beats Scissors":
        case "You win! Paper beats Rock":
        case "You win! Scissors beat Paper":
            x++;
            break;
        case "You lose! Paper beats Rock":
        case "You lose! Scissors beat Paper":
        case "You lose! Rock beats Scissors":
            y++;
            break;
    }


    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);

    switch (result) {
        case "You win! Rock beats Scissors":
        case "You win! Paper beats Rock":
        case "You win! Scissors beat Paper":
            x++;
            break;
        case "You lose! Paper beats Rock":
        case "You lose! Scissors beat Paper":
        case "You lose! Rock beats Scissors":
            y++;
            break;
    }


    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);

    switch (result) {
        case "You win! Rock beats Scissors":
        case "You win! Paper beats Rock":
        case "You win! Scissors beat Paper":
            x++;
            break;
        case "You lose! Paper beats Rock":
        case "You lose! Scissors beat Paper":
        case "You lose! Rock beats Scissors":
            y++;
            break;
    }


    personPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);

    switch (result) {
        case "You win! Rock beats Scissors":
        case "You win! Paper beats Rock":
        case "You win! Scissors beat Paper":
            x++;
            break;
        case "You lose! Paper beats Rock":
        case "You lose! Scissors beat Paper":
        case "You lose! Rock beats Scissors":
            y++;
            break;
    }


    let score;

    if (x > y) {
        score = "Congrats! You won " + x + " out of 5 games";
    } else if (x < y) {
        score = "You lost! Computer won " + y + " games out of 5. Better luck next time";
    } else {
        score = "It's a tie, try again!";
    }

    console.log(score);
}

game();