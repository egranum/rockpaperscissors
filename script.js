const weapon = ["rock", "paper", "scissors"];

let computerSelection;

function computerPlay() {
    let random = Math.floor(Math.random() * weapon.length);
    computerSelection = weapon[random];
}

// Old one, might be deleted
/*
function getPlayerSelection() {
    while (true) {
        const playerInput = prompt("Choose your weapon: Rock, paper or scissors!", '').toLowerCase();
        if (weapon.includes(playerInput)) {
            return playerInput
        }
        console.log("You need to choose a weapon!")
    }
}
*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const winTable = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

function findWinner(first, second) {
    if (winTable[first] === second) {
        console.log(`${capitalizeFirstLetter(first)} beats ${second}`)
        return 1
    } 
    if (winTable[second] === first) {
        console.log(`${capitalizeFirstLetter(second)} beats ${first}`)
        return -1
    }
    console.log(`${capitalizeFirstLetter(first)} ties ${second}`)
    return 0
}

function playRound(playerSelection, computerSelection) {

    if (!winTable?.[playerSelection]) {
        return null
    }
    console.log("Your choice: " + playerSelection);
    console.log("Computer's choice: " + computerSelection);
    const winner = findWinner(playerSelection ,computerSelection)
    
    return winner
}

const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', function(e) {
    const playerSelection = e.target.className.toString();
    computerPlay();
    playRound(playerSelection, computerSelection);
})

/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        computerPlay();
        const result = playRound(playerSelection, computerSelection);

        switch(result) {
            case 1:
                playerScore++;
                break;
            case -1: 
                computerScore++;
                break;
            case null:
                console.log("You need to choose a weapon!")
                break;
        }
    }

    if (playerScore < computerScore) {
        console.log("You lose");
    } else if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("It's a tie");
    }
}
*/