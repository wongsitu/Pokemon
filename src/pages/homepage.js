import React, { Component } from 'react';
import Navigation from '../components/navigation/navigation'
import Container from '../components/container/container'
import axios from 'axios'

class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            response:[],
        }
    }

    componentDidMount = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20').then(
            response => {
                this.setState({
                    response:response.data.results
                })
            }
        )
    }

    render() {
        return (
            <div>
                <Container response={this.state.response}/>
            </div>
        );
    }
}

export default Homepage;