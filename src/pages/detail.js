import React, { Component } from 'react';
import Navigation from '../components/navigation/navigation'
import Container from '../components/container/container'
import axios from 'axios'

class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render() {
        let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.order}.png`
        return (
            <div class="col s12 m7">
                <h2 class="header">{this.props.pokemon.name}</h2>
                <div class="card horizontal">
                <div class="card-image">
                    <img src={link}/>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">This is a link</a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Detail;