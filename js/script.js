function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


/**
 * 
 * @param {String} playerSelection 
 * @param {String} computerSelection 
 */
function playRound(playerSelection, computerSelection) {
    // Convert user input to format "Xxxxx"
    let player = playerSelection.toUpperCase().charAt(0) + playerSelection.toLowerCase().slice(1);
    let computer = computerSelection;

    // Check and output winner
    if (
        (player == "Rock" && computer == "Scissors") ||
        (player == "Scissors" && computer == "Paper") ||
        (player == "Paper" && computer == "Rock")
    ) {
        return `You Win! ${player} beats ${computer}`;
    } else if (
        (player == "Rock" && computer == "Rock") ||
        (player == "Scissors" && computer == "Scissors") ||
        (player == "Paper" && computer == "Paper")
    ) {
        return "It's a draw!";
    } else {
        return `You Loose! ${player} looses against ${computer}`;
    }

}


function playGame() {
    let playerSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter: Rock, Scissors or Paper");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();
