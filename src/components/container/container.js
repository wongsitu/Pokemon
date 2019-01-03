import React, { Component } from 'react';
import './container.css'

class Container extends Component {
    constructor(props){
        super(props)
        this.state={
        
        }
    }

    render() {
        let pokemons = this.props.response
        let pokes = pokemons.map((poke, index) => {
            return (<div key={index} id="cd">
                        <div className="col s12 m7">
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src="https://lorempixel.com/100/190/nature/6"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h5>{poke.name}</h5>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">{poke.url}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            })
        return (
            <div className="alignment">
                {pokes}
            </div>
        );
    }
}

export default Container;