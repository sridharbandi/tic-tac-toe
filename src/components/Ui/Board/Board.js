import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './Board.css';


class Board extends Component {

    board =
        Array.from({length: this.props.size},
            () => Array.from({length: this.props.size},
                () => 0
            )
        );

    render() {
        const boardgui = this.board.map((row, rowId) => {
            const columns = row.map((value, i) => (
                <Grid key={i} item >
                    <Paper elevation={4} className="Paper"/>
                </Grid>
            ));
            return <Grid key={rowId} className="Grid" container justify="center" spacing={16}>
                {columns}
            </Grid>
        });


        return (
            <Aux>
                {boardgui}
            </Aux>
        )
    }
}

export default Board;