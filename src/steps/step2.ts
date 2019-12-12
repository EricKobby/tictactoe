import { Player } from "./step1";

function isLegalMove(board: Player[][],col: number, row:number, player: string): boolean{
    return board[row][col] == player;
}