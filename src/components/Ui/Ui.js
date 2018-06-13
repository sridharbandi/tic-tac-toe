import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Header from './Header/Header';
import Board from "./Board/Board";

class Ui extends Component {
    render(){
        return(
            <Aux>
                <Header/>
                <Board size = {this.props.size}/>
            </Aux>
        )
    }
}

export default Ui;