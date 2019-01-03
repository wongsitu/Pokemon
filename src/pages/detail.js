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
        let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.id}.png`
        let link2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        if(!this.props.pokemon){
            let types = this.state.types.map((type, index) => {
                return (<div key={index} className="card">
                            {type}
                        </div>)
                })
        }
        return (
            <div class="col s12 m7">
                <h2 class="header">{this.props.pokemon.name}</h2>
                <div class="card horizontal">
                <div class="card-image">
                    <img src={link}/>
                    <img src={link2}/>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>Types: {this.props.types}</p>
                    <p>Abilities: {this.props.moves}</p>
                    <p>Evolution: {this.props.evolutions}</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Detail;