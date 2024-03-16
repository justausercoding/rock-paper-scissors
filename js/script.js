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
    console.log(`function was called: ${playerSelection}`)
    let player = playerSelection.toUpperCase().charAt(0) + playerSelection.toLowerCase().slice(1);
    let computer = computerSelection;

    // Check and output winner
    if (
        (player == "Rock" && computer == "Scissors") ||
        (player == "Paper" && computer == "Rock") ||
        (player == "Scissors" && computer == "Paper")
    ) {
        return {
            message : `You Win! ${player} beats ${computer}`,
            winner : "player"
        };
    } else if (
        (player == "Rock" && computer == "Rock") ||
        (player == "Paper" && computer == "Paper") ||
        (player == "Scissors" && computer == "Scissors")
    ) {
        return {
            message : "It's a draw",
            winner: "draw"
        }
    } else {
        return {
            message : `You Loose! ${player} looses against ${computer}`,
            winner: "computer"
        };
    }
}


/**
 * 
 * @param {String} playerSelection 
 */
function playGame(playerSelection) {
    // The main function of the game
    if (counterRounds <= 4) {
        // Allows 5 rounds of the game
        let computerSelection = getComputerChoice();
        resultOneRound = playRound(playerSelection, computerSelection);

        counterRounds++;
        result.textContent = resultOneRound.message;
        rounds.textContent = `Round ${counterRounds}`;

        if (resultOneRound.winner == "player") {
            winsPlayer++;
        } else if (resultOneRound.winner == "computer") {
            winsComputer++;
        }

    }
    if (counterRounds > 4) {
        // After the 5 round, the winner will be displayed
        if (winsPlayer > winsComputer) {
            winner.textContent = "End Result: You win!";
        } else if (winsPlayer == winsComputer) {
            winner.textContent = "End Result: Draw";
        } else {
            winner.textContent = "End Result: You loose!";
        }
    }

}


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});


const result = document.querySelector(".result");
const rounds = document.querySelector(".rounds");
const winner = document.querySelector(".winner");

let resultOneRound;
let counterRounds = 0;
let winsPlayer = 0;
let winsComputer = 0;
