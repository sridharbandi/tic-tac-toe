export default class MonteCarlo {

    constructor(board) {
        this.board = board;
    }

    zeroSquares = () => {
        var zeros = [];
        this.board.forEach((row, rowId) => {
            row.forEach((col, colId) => {
                if (this.board[rowId][colId] === 0) {
                    zeros.push([rowId, colId])
                }
            })
        });
        return zeros;
    }


}