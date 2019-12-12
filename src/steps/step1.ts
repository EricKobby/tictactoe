export enum Player {
    None = 0,
    One = '0',
    Two = 'X'
  }
  
  export interface IState {
    board: Player[];
    gameIsWon: number;
    nextPlayerTurn: Player;
  }