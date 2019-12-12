import { Player } from './step1';
export function getMoves (board: Player[]) {
    // Receives a board, and returns an array of available moves.
    let availableMoves = []
    for (let row = 0 ; row<3 ; row++){
      for (let column = 0 ; column<3 ; column++){
        if (board[row][column]===""){
          availableMoves.push({row, column})
        }
      }
    }
    return availableMoves
  }
