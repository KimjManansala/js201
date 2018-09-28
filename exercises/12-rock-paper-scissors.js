// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors(player1, player2) {
  if (player1.toLowerCase() === 'rock') {
    if (player2.toLowerCase() === 'rock') return 'draw'
    else if (player2.toLowerCase() === 'paper') return 'player 2'
    else if (player2.toLowerCase() === 'scissors') return 'player 1'
    else return 'Player 2: Invalid Response'
  } else if (player1.toLowerCase() === 'paper') {
    if (player2.toLowerCase() === 'rock') return 'player 1'
    else if (player2.toLowerCase() === 'paper') return 'draw'
    else if (player2.toLowerCase() === 'scissors') return 'player 2'
    else return 'Player 2: Invalid Response'
  } else if (player1.toLowerCase() === "scissors") {
    if (player2.toLowerCase() === 'rock') return 'player 2'
    else if (player2.toLowerCase() === 'paper') return 'player 1'
    else if (player2.toLowerCase() === 'scissors') return 'draw'
    else return 'Player 2: Invalid Response'

  } else return "Player 1: Invalid Response"
}

rockPaperScissors('rock', 'scissors')
rockPaperScissors('paper','rock')
rockPaperScissors('scissors', 'scissors')