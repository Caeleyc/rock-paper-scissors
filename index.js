const choices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let tieScore = 0

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

const playerChoice = () => {
    let choice = prompt("What's your choice? Rock, Paper, or Scissors?: ")
    let lower = choice.toLowerCase()
    return lower
}

const playGame = (computerSelection, playerSelection) => {
    console.log(`You chose: ${playerSelection}, the computer chose: ${computerSelection}`)
        if (computerSelection === playerSelection) {
            tieScore++
            return "It's a tie! Try again!"
        } else if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                playerScore++
                return "You win! Rock beats Scissors!"
            } else {
                computerScore++
                return "You lose. Paper covers Rock."
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                playerScore++
                return "You win! Scissors cuts Paper!"
            } else {
                computerScore++
                return "You lose. Rock beats Scissors."
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                playerScore++
                return "You win! Paper covers Rock!"
            } else {
                computerScore++
                return "You lose. Scissors cuts Paper."
            }
        }
}

function gameLoop() {
    let total = 0
    while (total < 5) {
        console.log(playGame(getComputerChoice(), playerChoice()))
        total++
    }
    if (playerScore > computerScore) {
        return `You win! You're score was ${playerScore}, the computer's score was ${computerScore} and you tied ${tieScore} times.`
    } else {
        return `You lose. Better luck next time, your score was ${playerScore}, the computer's score was ${computerScore} and you tied ${tieScore} time(s).`
    }
}

gameLoop()
