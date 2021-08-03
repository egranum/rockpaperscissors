const weapon = ["rock", "paper", "scissors"];

function generateComputerMove() {
    const random = Math.floor(Math.random() * weapon.length);
    return weapon[random];
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

function textOutput(stringInput) {
    const results = document.querySelector('.results');
    let text = document.createElement('p');
    text.textContent = stringInput;
    results.appendChild(text);
}

function findWinner(first, second) {
    if (winTable[first] === second) {
        textOutput(`${capitalizeFirstLetter(first)} beats ${second}`)
        return 1
    } 
    if (winTable[second] === first) {
        textOutput(`${capitalizeFirstLetter(second)} beats ${first}`)
        return -1
    }
    textOutput(`${capitalizeFirstLetter(first)} ties ${second}`)
    return 0
}



function playRound(playerSelection) {
    generateComputerMove()

    if (!winTable?.[playerSelection]) {
        return null
    }
    textOutput(`Your choice: ${playerSelection}`);
    textOutput(`Computer's choice: ${computerSelection}`);
    const winner = findWinner(playerSelection ,computerSelection)
    
    return winner
}

const buttons = document.querySelector('.buttons')

let currentPlayerSelection;

/*
after button click complete the rest of the round
*/
function completeRound() 

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {

        buttons.addEventListener('click', function(e) {
            currentPlayerSelection = e.target.className.toString();
        })

        const lastPlayerSelection = currentPlayerSelection;
        while (true) {
            if (currentPlayerSelection !== lastPlayerSelection) {
                break
            }

        }
        const playerSelection = getPlayerSelection();
        const result = playRound(playerSelection);

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
