export default class MonteCarlo {

    constructor(board) {
        this.board = board;
    }

    zeroSquares = () => {
        let zeros = [];
        this.board.forEach((row, rowId) => {
            row.forEach((col, colId) => {
                if (this.board[rowId][colId] === 0) {
                    zeros.push([rowId, colId])
                }
            })
        });
        return zeros;
    };

    play = (x,y,player) =>{
        return this.board[x][y] = player;
    };

    square =(x,y) => {
        return this.board[x][y];
    }


}