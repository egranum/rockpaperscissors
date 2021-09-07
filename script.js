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

function removeOutput() {
    const results = document.querySelector('.results');
    results.textContent = ''
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
    //clear all text
    removeOutput()

    const computerSelection = generateComputerMove()

    if (!winTable?.[playerSelection]) {
        return null
    }
    textOutput(`Your choice: ${playerSelection}`);
    textOutput(`Computer's choice: ${computerSelection}`);
    const winner = findWinner(playerSelection ,computerSelection)
    
    return winner
}


const determineGameWinner = (playerScore, computerScore) => {
    if (playerScore < computerScore) return "Computer"
    return "Player"
}

const addRestartButton = () => {
    const body = document.querySelector('body')
    const restartButton = document.createElement('button')
    restartButton.textContent = 'Restart'
    restartButton.classList.add('restart')
    body.appendChild(restartButton)

}

const reload = () => {
    window.location.reload()
}

const finishGame = (playerScore, computerScore, buttons, completeRound) => {
    const winner = determineGameWinner(playerScore, computerScore)
    textOutput(`Game Complete. The Winner Is ${winner}`)
    buttons.removeEventListener('click', completeRound)
    buttons.remove()
    addRestartButton()
    const restart = document.querySelector('.restart')
    restart.addEventListener('click', reload)
}


function setupGame() {
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelector('.buttons')
    /*
    after button click complete the rest of the round
    */
    function completeRound(e) {
        const playerSelection = e.target.className.toString();
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

        if ((playerScore >= 5) || (computerScore >= 5)) finishGame(playerScore, computerScore, buttons, completeRound);
    }
    buttons.addEventListener('click', completeRound)
    
}
setupGame()