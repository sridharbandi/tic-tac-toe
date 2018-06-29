export default class MonteCarlo {

    constructor(board, width) {
        this.board = board;
        this.width = width;
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

    play = (x, y, player) => {
        return this.board[x][y] = player;
    };

    square = (x, y) => {
        return this.board[x][y];
    };

    initializeMove = (player) => {
        if(Math.floor(Math.random() * 2) === 0){
            this.mcMove(player);
        }
    };

    mcMove = (player) => {
        this.scoreboard = Array.from({length: this.width},
            () => Array.from({length: this.width},
                () => 0
            )
        );

        for(let i in [...Array(1000)]){
            this.currentboard = {...this.board};


        }

    };

    checkWinner = (x, y, movecount) => {
        const width = this.width;
        //Columns check

        let column = [];
        for (let i = 0; i < width; i++) {
            column.push(this.board[i][y]);
        }
        if (column.every((val, i, arr) => val === arr[0])) {
            //this.props.won('Player ' + column[0] + ' Won!!');
            console.log('Player ' + column[0] + ' Won!!');
            return 'Player ' + column[0] + ' Won!!'
        }

        //Rows check
        let row = this.board[x];
        if (row.every((val, i, arr) => val === arr[0])) {
            //this.props.won('Player ' + row[0] + ' Won!!');
            console.log('Player ' + row[0] + ' Won!!');
            return 'Player ' + row[0] + ' Won!!';
        }

        //Diagonal check
        let diagonal = [];
        if (x === y) {
            for (let i = 0; i < width; i++) {
                diagonal.push(this.board[i][i])
            }
            if (diagonal.every((val, i, arr) => val === arr[0])) {
                //this.props.won('Player ' + diagonal[0] + ' Won!!');
                console.log('Player ' + diagonal[0] + ' Won!!');
                return 'Player ' + diagonal[0] + ' Won!!';
            }
        }
        //Anti diagonal check
        diagonal = [];
        if ((parseInt(x, 10) + parseInt(y, 10)) === (width - 1)) {
            for (let i = 0; i < width; i++) {
                diagonal.push(this.board[i][(width - 1) - i])
            }
            if (diagonal.every((val, i, arr) => val === arr[0])) {
                //this.props.won('Player ' + diagonal[0] + ' Won!!');
                console.log('Player ' + diagonal[0] + ' Won!!');
                return 'Player ' + diagonal[0] + ' Won!!';
            }
        }
        //Check tie
        if (movecount === Math.pow(width, 2)) {
            //this.props.won('Its a tie!!');
            let oldvalue = localStorage.getItem('DRAWS');
            oldvalue = oldvalue===null?0:oldvalue;
            localStorage.setItem('DRAWS', parseInt(oldvalue, 10)+1);
            console.log('Its a tie!!');
            return 'Its a tie!!';
        }
    };


    mcSimulate = () => {

    }

}