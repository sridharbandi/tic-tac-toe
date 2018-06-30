import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './Board.css';
import ButtonBase from "@material-ui/core/ButtonBase";
import Icon from '@material-ui/core/Icon';


class Board extends Component {

    state = {
        myTurn: true,
        movecount: 0
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
        const [x, y] = target.dataset.coord.split(':');
        const className = parent.getAttribute("class");
        parent.setAttribute("class", className + " Clicked");
        const value = child.innerHTML;
        if (value === '') {
            if (this.state.myTurn) {
                child.innerHTML = 'fiber_manual_record';
                this.setState({myTurn: false});
                this.board[x][y] = 'O'
            } else {
                child.innerHTML = 'games';
                this.setState({myTurn: true});
                this.board[x][y] = 'X'
            }
        }
        this.setState((prevState) => ({
            movecount: prevState.movecount + 1
        }), function () {
            if (this.state.movecount >= (this.props.size * 2 - 1)) {
                this.checkWinner(x, y)
            }
        });
    };

    checkWinner = (x, y) => {
        const width = this.props.size;
        //Columns check
        let column = [];
        for (let i = 0; i < width; i++) {
            column.push(this.board[i][y]);
        }
        if (column.every((val, i, arr) => val === arr[0])) {
            this.announcement();
            return
        }

        //Rows check
        let row = this.board[x];
        if (row.every((val, i, arr) => val === arr[0])) {
            this.announcement();
            return
        }

        //Diagonal check
        let diagonal = [];
        if (x === y) {
            for (let i = 0; i < width; i++) {
                diagonal.push(this.board[i][i])
            }
            if (diagonal.every((val, i, arr) => val === arr[0])) {
                this.announcement();
                return
            }
        }
        //Anti diagonal check
        diagonal = [];
        if ((parseInt(x, 10) + parseInt(y, 10)) === (width - 1)) {
            for (let i = 0; i < width; i++) {
                diagonal.push(this.board[i][(width - 1) - i])
            }
            if (diagonal.every((val, i, arr) => val === arr[0])) {
                this.announcement();
                return
            }
        }
        //Check tie
        if (this.state.movecount === Math.pow(width, 2)) {
            this.props.won('Its a tie!!');
            this.setScore('DRAWS');
            return
        }
    };


    announcement = () => {
        if (!this.state.myTurn) {
            this.props.won('You won!!');
            this.setScore('WONS');
        }
        else {
            this.props.won('Opponent won!!');
            this.setScore('LOSS');
        }
    };

    setScore = (text) => {
        let oldvalue = localStorage.getItem(text);
        oldvalue = oldvalue === null ? 0 : oldvalue;
        localStorage.setItem(text, parseInt(oldvalue, 10) + 1);
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

Board.propTypes = {
    won: PropTypes.func,
    size: PropTypes.number
};

export default Board;