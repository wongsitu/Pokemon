import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage'
import Detail from './pages/detail'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navigation from './components/navigation/navigation'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        pokemon:[],
        order:'',
        types:[],
        evolutions:[],
        moves: [],
        abilities: []
      }
  }

  reportMark = (name) =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(
        pokemon => {
            let move = []
            for(let i=0;i<pokemon.data.moves.length;i++){
              move.push(pokemon.data.moves[i].move.name)
            }
            let type = []
            for(let i=0;i<pokemon.data.types.length;i++){
              type.push(pokemon.data.types[i].type.name)
            }
            console.log(type)
            this.setState({
                pokemon:pokemon.data,
                order: pokemon.data.order,
                types: type,
                moves: move,
            })
            axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemon.data.order}/`).then(
              evolution => {
                console.log(evolution.data.chain.evolves_to)
                this.setState({
                  evolutions:evolution.data.chain.evolves_to[0].species.name
                })
              })
        }
    )}

  render() {
    return (
      <div>
        <Navigation reportMark={this.reportMark}/>
        <Switch>
          <Route path='/detail' render={(props) => { return <Detail pokemon={this.state.pokemon} order={this.state.order} types={this.state.types} moves={this.state.moves} evolutions={this.state.evolutions}/> }}/>
          <Route path='/' render={(props) => { return <Homepage/> }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
