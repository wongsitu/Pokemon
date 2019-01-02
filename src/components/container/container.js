import React, { Component } from 'react';

class Container extends Component {
    constructor(props){
        super(props)
        this.state={
        
        }
    }

    render() {
        let pokemons = this.props.response
        let pokes = pokemons.map((poke, index) => {
            return (<div key={index} className="card">
                        {poke.name}
                        {poke.url}
                    </div>)
            })
        return (
            <div>
                {pokes}
            </div>
        );
    }
}

export default Container;