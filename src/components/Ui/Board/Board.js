import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './Board.css';
import ButtonBase from "@material-ui/core/ButtonBase";
import Icon from '@material-ui/core/Icon';


class Board extends Component {

    state = {
        myTurn: true
    };

    board =
        Array.from({length: this.props.size},
            () => Array.from({length: this.props.size},
                () => 0
            )
        );

    clickHandler = (event) => {
        var target = event.currentTarget;
        var parent = target.parentElement;
        var child = target.children[0];
        const className = parent.getAttribute("class");
        parent.setAttribute("class", className + " Clicked");
        const value = child.innerHTML;
        if (value === '') {
            if (this.state.myTurn) {
                child.innerHTML = 'fiber_manual_record';
                this.setState({myTurn: false})
            } else {
                child.innerHTML = 'games';
                this.setState({myTurn: true})
            }
        }
    };

    render() {
        const boardgui = this.board.map((row, rowId) => {
            const columns = row.map((column, columnId) => (
                <Grid key={columnId} item>
                    <ButtonBase>
                        <Paper
                            onClick={this.clickHandler}
                            elevation={4}
                            data-coord={rowId + ':' + columnId}
                            className="Paper">
                            <Icon
                                className="Icon"
                                style={{fontSize: 78}}>
                            </Icon>
                        </Paper>
                    </ButtonBase>
                </Grid>
            ));
            return <Grid
                key={rowId}
                className="Grid"
                container
                justify="center"
                spacing={16}>
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