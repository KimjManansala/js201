// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null


const boardArray = [null, null, null, null, null, null, null, null, null]
const boardString = '******** \n'
' | ' + boardArray[0] + ' | ' + boardArray[1] + ' | ' + boardArray[2] + ' | \n'
' | ' + boardArray[3] + ' | ' + boardArray[4] + ' | ' + boardArray[5] + ' | \n'
' | ' + boardArray[6] + ' | ' + boardArray[7] + ' | ' + boardArray[8] + ' | \n'
"********"

//This is what is will look like
// "******** \n"
// " |' '|' '|' '| \n "         
// " |' '|' '|' '| \n"
// " |' '|' '|' '| \n"
// "********"

function ticTacToe(board) {
  buildBoard()
}

function checkWinner(boardArray) {
  if (boardArray[0] === 'X' && boardArray[1] === 'X' && boardArray[2]) return 'X' //across top
  else if (boardArray[3] === 'X' && boardArray[4] === 'X' && boardArray[5]) return 'X' //across middle
  else if ((boardArray[6] === 'X' && boardArray[7] === 'X' && boardArray[8])) return 'X' //across bottom
  else if ((boardArray[0] === 'X' && boardArray[4] === 'X' && boardArray[8])) return 'X' //diagonol
  else if ((boardArray[2] === 'X' && boardArray[4] === 'X' && boardArray[6])) return 'X' //diagonol
  else if ((boardArray[0] === 'X' && boardArray[3] === 'X' && boardArray[6])) return 'X' //down left
  else if ((boardArray[1] === 'X' && boardArray[4] === 'X' && boardArray[7])) return 'X' //down middle
}

function buildBoard() {
  console.log(boardString)
}
