function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let userInput = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();

    while (!choices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userInput;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both players have selected " + humanChoice + ".");
        return "Tie";
    }
    else {
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You have lost! Computer has chosen paper.");
                return "Lost";
            }
            else {
                console.log("You have won! Computer has chosen scissors.");
                return "Won";
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You have won! Computer has chosen rock.");
                return "Won";
            }
            else {
                console.log("You have lost! Computer has chosen scissors.");
                return "Lost";
            }
        }
        else {
            if (computerChoice === "rock") {
                console.log("You have lost! Computer has chosen rock.");
                return "Lost";
            }
            else {
                console.log("You have won! Computer has chosen paper.");
                return "Won";
            }
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        if (result === "Won") {
            humanScore++;
        }
        else if (result === "Lost") {
            computerScore++;
        }
    }
    if (humanScore === 5) {
        console.log("You Win!");
    }
    else {
        console.log("You Lost!");
    }
}

playGame();