function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer's score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations. You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Game Over! You lost!");
    } else {
        console.log("It's a draw. Game Over!");
    }

    function playRound(humanChoice, computerChoice) {
        if(humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
            console.log(`Computer chose ${computerChoice}`);
            console.log("It's a tie!!");
            computerScore++;
            humanScore++;
        }

        if(humanChoice.toLowerCase() == "Rock".toLowerCase() && computerChoice == "Paper") {
            console.log(`Computer chose ${computerChoice}`);
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
    
        if(humanChoice.toLowerCase() == "Paper".toLowerCase() && computerChoice == "Rock") {
            console.log(`Computer chose ${computerChoice}`);
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
    
        if(humanChoice.toLowerCase() == "Rock".toLowerCase() && computerChoice == "Scissors") {
            console.log(`Computer chose ${computerChoice}`);
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    
        if(humanChoice.toLowerCase() == "Scissors".toLowerCase() && computerChoice == "Rock") {
            console.log(`Computer chose ${computerChoice}`);
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
    
        if(humanChoice.toLowerCase() == "Paper" && computerChoice.toLowerCase() == "Scissors") {
            console.log(`Computer chose ${computerChoice}`);
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    
        if(humanChoice.toLowerCase() == "Scissors".toLowerCase() && computerChoice == "Paper") {
            console.log(`Computer chose ${computerChoice}`);
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
    }
}

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

function getHumanChoice() {
    let input = prompt("Please enter Rock or Paper or Scissors");

    return input;
}

playGame();