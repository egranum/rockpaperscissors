const weapon = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const random = Math.floor(Math.random() * weapon.length);
    return weapon[random];
}

console.log(computerPlay());