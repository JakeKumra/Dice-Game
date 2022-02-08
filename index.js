const player1Dice = document.getElementById("dice-one")
const player2Dice = document.getElementById("dice-two")
const playerOneScore = document.getElementById("player-one-score")
const playerTwoScore = document.getElementById("player-two-score")
const message = document.getElementById("player-message")
let resetGameBtn = document.getElementById("new-game-btn").style.display = "none";
let playerOneScoreCount = 0;
let playerTwoScoreCount = 0;
let playerOneTurn = true;
let gameOver = false;

document.getElementById("new-game-btn").addEventListener("click", resetGame);
document.getElementById("roll-dice-btn").addEventListener("click", playDiceGame);

function playDiceGame() {
    document.getElementById("new-game-btn").style.display = "inline-block";
    if (playerOneTurn === true && gameOver === false) {
        let diceNumber = rollDice()
        player1Dice.textContent = diceNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        playerOneScoreCount += diceNumber
        playerOneScore.textContent = `Score: ${playerOneScoreCount}`
        message.textContent = "Player 2 Turn"
        checkWinner()
    } else if (gameOver === false) {
        let diceNumber = rollDice()
        player2Dice.innerText = diceNumber
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
        playerTwoScoreCount += diceNumber
        playerTwoScore.textContent = `Score: ${playerTwoScoreCount}`
        message.textContent = "Player 1 Turn"
        checkWinner()
        }
        playerOneTurn =! playerOneTurn
}


function rollDice() {
   return Math.floor( Math.random() * 6 + 1 )
}

function checkWinner () {
    if (playerOneScoreCount >= 20 ) {
        message.textContent = "Player 1 has won!"
        hasWon()
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
    } else if (playerTwoScoreCount >= 20) {
        message.textContent = "Player 2 has won!"
        player2Dice.classList.add("active")
        player1Dice.classList.remove("active")
        hasWon()
    } else gameOver = false
}

function hasWon() {
    document.getElementById("roll-dice-btn").style.display = "none";
    gameOver = true
}

function resetGame() {
    playerOneScoreCount = 0;
    playerTwoScoreCount = 0;
    playerOneScore.textContent = "Score: 0";
    playerTwoScore.textContent = "Score: 0";
    player1Dice.textContent = " - "
    player2Dice.textContent = " - "
    playerOneTurn = true;
    gameOver = false;
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active") 
    message.textContent = "Player 1 Turn"
    document.getElementById("new-game-btn").style.display = "none";
    document.getElementById("roll-dice-btn").style.display = "inline-block"
}

// old edition
// const diceOne = document.getElementById("dice-one")
// const diceTwo = document.getElementById("dice-two")
// const playerOneScore = document.getElementById("player-one-score")
// const playerTwoScore = document.getElementById("player-two-score")
// const playerMessage = document.getElementById("player-message")
// let playerOneScoreCount = 0;
// let playerTwoScoreCount = 0;
// let playerTurn = 1;
// let gameOver = false;

// document.getElementById("new-game-btn").addEventListener("click", resetGame);
// document.getElementById("roll-dice-btn").addEventListener("click", playDiceGame);

// function playDiceGame() {
//     if (playerTurn === 1 && gameOver === false) {
//         let diceNumber = rollDice()
//         diceOne.textContent = diceNumber
//         diceOne.style.boxShadow = "0 0 5px #999999";
//         diceTwo.style.boxShadow = "none"
//         playerOneScoreCount += diceNumber
//         playerOneScore.textContent = `Score: ${playerOneScoreCount}`
//         playerTurn = 2
//         playerMessage.textContent = "Player 2 Turn"
//         checkWinner()
//     } else if (gameOver === false) {
//         let diceNumber = rollDice()
//         diceTwo.innerText = diceNumber
//         diceOne.style.boxShadow = "none";
//         diceTwo.style.boxShadow = "0 0 5px #999999"
//         playerTwoScoreCount += diceNumber
//         playerTwoScore.textContent = `Score: ${playerTwoScoreCount}`
//         playerTurn = 1
//         playerMessage.textContent = "Player 1 Turn"
//         checkWinner()
//         }
// }


// function rollDice() {
//    return Math.floor( Math.random() * 6 + 1 )
// }

// function checkWinner () {
//     if (playerOneScoreCount > 19 ) {
//         playerMessage.textContent = "Player 1 has won, well done!"
//         gameOver = true
//     } else if (playerTwoScoreCount > 19) {
//         playerMessage.textContent = "Player 1 has won, well done!"
//         gameOver = true
//     } else gameOver = false
// }

// function resetGame() {
//     playerOneScoreCount = 0;
//     playerTwoScoreCount = 0;
//     playerOneScore.textContent = "Score: 0";
//     playerTwoScore.textContent = "Score: 0";
//     diceOne.textContent = " - "
//     diceTwo.textContent = " - "
//     gameOver = false
//     playerMessage.textContent = "Player 1 to roll the dice!"
//     playerTurn = 1;
// }


