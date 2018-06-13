import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './Board.css';
import ButtonBase from "@material-ui/core/ButtonBase";
import Circle from '@material-ui/icons/FiberManualRecord';
import Cross from '@material-ui/icons/NotInterested';
import Icon from '@material-ui/core/Icon';


class Board extends Component {

    board =
        Array.from({length: this.props.size},
            () => Array.from({length: this.props.size},
                () => 0
            )
        );

    render() {
        const boardgui = this.board.map((row, rowId) => {
            const columns = row.map((column, columnId) => (
                <Grid key={columnId} item>
                    <ButtonBase>
                        <Paper elevation={4} className="Paper">
                            <Icon color="action"  style={{ fontSize: 78 }}>
                                fiber_manual_record
                            </Icon>
                        </Paper>
                    </ButtonBase>
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