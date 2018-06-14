import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Header from './Header/Header';
import Board from "./Board/Board";
import Button from "@material-ui/core/Button";

class Ui extends Component {
    state = {
        board: <Board size={this.props.size} key="1"/>
    };

    resetGame = () => {
        const value = Math.random().toString(36).substring(7);
        this.setState({
            board: <Board size={this.props.size} key={value}/>
        })
    };

    render() {
        return (
            <Aux>
                <Header/>
                {this.state.board}
                <Button
                    onClick={this.resetGame}
                    variant="raised"
                    fullWidth
                    color="secondary">
                    RESET
                </Button>
            </Aux>
        )
    }
}

export default Ui;