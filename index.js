const choices = ["Rock", "Paper", "Scissors"]
let playerScoreNum = 0 
let computerScoreNum = 0

const rockBtn = document.createElement('button')
const paperBtn = document.createElement('button')
const scissorsBtn = document.createElement('button')
const resetBtn = document.createElement('span')
const playerChoice = document.createElement('h3')
const playerScoreText = document.createElement('p')
const computerScoreText = document.createElement('p')
const winnerMessage = document.createElement('p')
const playerInfo = document.createElement('div')
const computerInfo = document.createElement('div')
let playerTotal = document.createElement('p')
let computerTotal = document.createElement('p')

const container = document.getElementById('container')

resetBtn.innerHTML = 'Reset Game'
rockBtn.innerHTML = 'Rock'
paperBtn.innerHTML = 'Paper'
scissorsBtn.innerHTML = 'Scissors'
playerChoice.innerHTML = 'Please choose from one of the choices below to get started!'
playerScoreText.innerHTML = 'Player Score: '
computerScoreText.innerHTML = 'Computer Score: '
playerTotal.innerHTML = playerScoreNum
computerTotal.innerHTML = computerScoreNum

container.appendChild(playerChoice)
container.appendChild(rockBtn)
container.appendChild(paperBtn)
container.appendChild(scissorsBtn)
container.appendChild(winnerMessage)
container.appendChild(playerInfo)
container.appendChild(computerInfo)
playerInfo.appendChild(playerScoreText)
playerInfo.appendChild(playerTotal)
computerInfo.appendChild(computerScoreText)
computerInfo.appendChild(computerTotal)
container.appendChild(resetBtn)

container.style.textAlign = 'center'
resetBtn.style.border = '1px solid black'
resetBtn.style.padding = '6px'
resetBtn.style.borderRadius = '4px'
resetBtn.style.cursor = 'pointer'

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice]
}
getComputerChoice()

let buttons = document.querySelectorAll('button')
let buttonsArr = [...buttons]

buttonsArr.forEach((x) => {
    x.addEventListener('click', () => {
        if (x.innerHTML === 'Rock') {
            if (getComputerChoice() === 'Scissors') {
                winnerMessage.innerHTML = 'Rock beats Scissors, you win!'
                playerTotal.innerHTML = playerScoreNum += 1
            } else {
                winnerMessage.innerHTML = 'Paper covers Rock, you lose.'
                computerTotal.innerHTML = computerScoreNum += 1
            }
        } else if (x.innerHTML === 'Paper') {
            if (getComputerChoice() === 'Rock') {
                winnerMessage.innerHTML = 'Paper covers Rock, you win!'
                playerTotal.innerHTML = playerScoreNum += 1
            } else {
                winnerMessage.innerHTML = 'Scissors cuts Paper, you lose.'
                computerTotal.innerHTML = computerScoreNum += 1
            }
        } else if (x.innerHTML === 'Scissors') {
            if (getComputerChoice() === 'Paper') {
                winnerMessage.innerHTML = 'Scissors cuts Paper, you win!'
                playerTotal.innerHTML = playerScoreNum += 1
            } else {
                winnerMessage.innerHTML = 'Rock beats Scissors, you lose.'
                computerTotal.innerHTML = computerScoreNum += 1
            }
        } else {
            winnerMessage.innerHTML = "It's a tie! Try again!"
        }
    })
})

resetBtn.addEventListener('click', () => {
    playerScoreNum = 0
    computerScoreNum = 0
    playerTotal.innerHTML = 0
    computerTotal.innerHTML = 0
})