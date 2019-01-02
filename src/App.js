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
        order:''
      }
  }

  reportMark = (name) =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(
        pokemon => {
            this.setState({
                pokemon:pokemon.data,
                order: pokemon.data.order
            })
        }
    )
}

  render() {
    return (
      <div>
        <Navigation reportMark={this.reportMark}/>
        <Switch>
          <Route path='/detail' render={(props) => { return <Detail pokemon={this.state.pokemon} order={this.state.order}/> }}/>
          <Route path='/' render={(props) => { return <Homepage/> }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
