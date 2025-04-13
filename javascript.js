let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
const playerScore = document.createElement("p");
const compScore = document.createElement("p");
const playerChoice = document.createElement("p");
const compChoice = document.createElement("p");
const result = document.createElement("p");
const gameResult = document.createElement("p");
container.appendChild(compChoice);
container.appendChild(playerChoice)
container.appendChild(result);
container.appendChild(compScore);
container.appendChild(playerScore);
container.appendChild(gameResult);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        playerChoice.textContent = `You chose ${humanChoice}`;
        const computerChoice = getComputerChoice();
        compChoice.textContent = `Computer chose ${computerChoice}`;

        playRound(humanChoice, computerChoice);
        playerScore.textContent = `Your score: ${humanScore}`;
        compScore.textContent = `Computer score: ${computerScore}`;

        if (humanScore === 5) {
            gameResult.textContent = "Congratulations, you won!";
        }
        if (computerScore === 5) {
            gameResult.textContent = "Hard luck, the computer won!";
        }
    });
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        result.textContent = "It's a tie!";
    }

    if(humanChoice.toLowerCase() == "Rock".toLowerCase() && computerChoice == "Paper") {
        result.textContent = "You lose! Paper beats Rock";
        computerScore++;
    }
    
    if(humanChoice.toLowerCase() == "Paper".toLowerCase() && computerChoice == "Rock") {
        result.textContent = "You win! Paper beats Rock";
        humanScore++;
    }
    
    if(humanChoice.toLowerCase() == "Rock".toLowerCase() && computerChoice == "Scissors") {
        result.textContent = "You win! Rock beats Scissors";
        humanScore++;
    }
    
    if(humanChoice.toLowerCase() == "Scissors".toLowerCase() && computerChoice == "Rock") {
        result.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    }
    
    if(humanChoice.toLowerCase() == "Paper" && computerChoice.toLowerCase() == "Scissors") {
        result.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    }
    
    if(humanChoice.toLowerCase() == "Scissors".toLowerCase() && computerChoice == "Paper") {
        result.textContent = "You win! Scissors beats Paper";
        humanScore++;
    }
}