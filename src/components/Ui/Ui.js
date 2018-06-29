import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Header from './Header/Header';
import Board from "./Board/Board";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "./Modal/Modal";
import Score from "./Score/Score";
import Refresh from '@material-ui/icons/Refresh';
import List from '@material-ui/icons/Menu';
import Settings from '@material-ui/icons/Settings';

class Ui extends Component {
    constructor(props) {
        super();
        this.winner = this.winner.bind(this);
        this.state = {
            board: <Board size={props.size} won={this.winner} key="1"/>,
            open: false,
            score: false,
            text: ''
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
            board: <Board size={this.props.size} won={this.winner} key={value}/>
        })
    };

    showScore = () => {
        this.setState({
            score: true
        })
    };
    handleClose = () => {
        this.setState({open: false});
        this.resetGame();
    };

    closeScore = () => {
        this.setState({score: false});
    };

    clearScore = () => {
        localStorage.setItem('DRAWS',0);
        localStorage.setItem('WONS',0);
        localStorage.setItem('LOSS',0);
        this.setState({score: false});
        this.setState({score: true});
    };

    render() {
        return (
            <Aux>
                <Header/>
                {this.state.board}
                <Grid container justify='center' spacing={16} className="Grid">
                    <Grid item>
                        <Button
                            onClick={this.resetGame}
                            variant="raised"
                            size="small"
                            color="default">
                            <Refresh style={{color:'#E91E63'}}/>
                            RESET
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={this.showScore}
                            variant="raised"
                            size="small"
                            color="default">
                            <List style={{color:'#E91E63'}}/>
                            Score
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="raised"
                            size="small"
                            color="default">
                            <Settings style={{color:'#E91E63'}}/>
                            Mode
                        </Button>
                    </Grid>
                </Grid>
                <Modal
                    text={this.state.text}
                    open={this.state.open}
                    onClose={this.handleClose}/>
                <Score
                    open={this.state.score}
                    onClose={this.closeScore}
                    clearScore={this.clearScore}
                />
            </Aux>
        )
    }
}

export default Ui;