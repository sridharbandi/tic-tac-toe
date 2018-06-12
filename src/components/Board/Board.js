import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';


class Board extends Component {

    board = () =>
        Array.from({length: 3},
            () => Array.from({length: 3},
                () => 0
            )
        );

    render() {
        return (
            <Aux>
                <Header/>


            </Aux>
        )
    }
}

export default Board;