import React, { Component } from 'react';
import Navigation from '../components/navigation/navigation'
import Container from '../components/container/container'
import axios from 'axios'

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
    }

    componentDidMount = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(
            response => {
                console.log(response.data.results)
            }
        )
    }

    reportMark = () =>{
        
    }

    render() {
        return (
            <div>
                <Navigation handleInput={this.handleInput}/>
                <Container/>
            </div>
        );
    }
}

export default Homepage;
