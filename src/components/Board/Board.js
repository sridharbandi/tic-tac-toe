import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';


class Board extends Component {

    board = (size) =>
        Array.from({length: size},
            () => Array.from({length: size},
                () => 0
            )
        );

    render() {
        const rows = this.board(3).map((row, rowInd) => {
            const columns = row.map((columns, cellInd) => {
                console.log(cell)
                return 's'
            });
            return cells
        });


        return (
            <Aux>
                <Header/>


            </Aux>
        )
    }
}

export default Board;