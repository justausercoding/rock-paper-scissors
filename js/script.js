function getComputerChoice() {
    // Randomly return "Rock", "Paper" or "Scissors"
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
        (player == "Paper" && computer == "Rock") ||
        (player == "Scissors" && computer == "Paper")
    ) {
        return `You Win! ${player} beats ${computer}`;
    } else if (
        (player == "Rock" && computer == "Rock") ||
        (player == "Paper" && computer == "Paper") ||
        (player == "Scissors" && computer == "Scissors")
    ) {
        return "It's a draw!";
    } else {
        return `You Loose! ${player} looses against ${computer}`;
    }
}


function playGame() {
    // Play five rounds of the game
    let playerSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        // Ask user to enter selection and then output the winner
        playerSelection = prompt("Enter: Rock, Paper or Scissors");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}


playGame();
