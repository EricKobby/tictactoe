import { Player } from './step1';

const ONGOING_GAME = -1
let state = {
  board: [
    Player.None,
    Player.None,
    Player.None,
    Player.None,
    Player.None,
    Player.None,
    Player.None,
    Player.None,
    Player.None
  ],
  gameIsWon: ONGOING_GAME,
  nextPlayerTurn: Player.One
};

const sliceWinCheck = (slice: Player[]) => {
  if (slice[0] === slice[1] && slice[1] === slice[2] && slice[2] !== Player.None) {
    return slice[0]
  }
  return -1
}

const checkIfGameIsOver = (board: Player[]) => {
  let winCheckSlices = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ]

  for (let i = 0; i < winCheckSlices.length; i++) {
    const winResult = this.sliceWinCheck(winCheckSlices[i])
    if (winResult !== -1) {
      return winResult
    }
  }

  if (board.some(cell => cell === Player.None)) {
    return ONGOING_GAME
  }

  return -1
}
