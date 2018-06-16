import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Header from './Header/Header';
import Board from "./Board/Board";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "./Modal/Modal";
import Score from "./Score/Score";

class Ui extends Component {
    constructor(props) {
        super();
        this.winner = this.winner.bind(this);
        this.state = {
            board: <Board size={props.size} won={this.winner} key="1" />,
            open: false,
            score: false,
            text:''
        }
    }

    winner = text => {
        this.setState({
            open: true,
            text: text
        })
    };

    resetGame = () => {
        const value = Math.random().toString(36).substring(7);
        this.setState({
            board: <Board size={this.props.size} won={this.winner} key={value} />
        })
    };
    resetGame = () => {
        this.setState({
            score: true
        })
    };
    handleClose = () => {
        this.setState({ open: false });
        this.resetGame();
    };

    closeScore = () => {
        this.setState({score: false});
    };

    render() {
        return (
            <Aux>
                <Header />
                {this.state.board}
                <Grid container justify='center' spacing={24}>
                    <Grid item>
                        <Button
                            onClick={this.resetGame}
                            variant="raised"
                            color="default">
                            RESET
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={this.showScore}
                            variant="raised"
                            color="default">
                            Score
                        </Button>
                    </Grid>
                </Grid>
                <Modal
                    text={this.state.text}
                    open={this.state.open}
                    onClose={this.handleClose} />
                <Score
                    open={this.state.score}
                    onClose={this.closeScore}
                  />
            </Aux>
        )
    }
}

export default Ui;