import React, { Component } from 'react';
import Navigation from '../components/navigation/navigation'

class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            pokemon:''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.pokemon)
    }

    render() {
        return (
            <div>
                <Navigation handleInput={this.handleInput}/>
            </div>
        );
    }
}

export default Homepage;
