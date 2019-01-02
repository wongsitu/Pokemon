import React, { Component } from 'react';
import Navigation from '../components/navigation/navigation'
import Container from '../components/container/container'
import axios from 'axios'

class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            response:[],
            pokemon:[]
        }
    }

    componentDidMount = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20').then(
            response => {
                this.setState({
                    response:response.data.results
                })
                console.log(response)
            }
        )
    }

    reportMark = (name) =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(
            pokemon => {
                this.setState({
                    pokemon:pokemon
                })
                console.log(pokemon)
            }
        )
    }

    render() {
        return (
            <div>
                <Navigation handleInput={this.handleInput} reportMark={this.reportMark}/>
                <Container response={this.state.response}/>
            </div>
        );
    }
}

export default Homepage;