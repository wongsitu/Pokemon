import React, { Component } from 'react';
import './navigation.css';
import { Route, Switch, Redirect } from 'react-router-dom'

class Navigation extends Component {
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

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state.pokemon)
        this.props.reportMark(this.state.pokemon)
    }

    render() {
        let link = `/detail?pokemonObj=${this.state.pokemon}`
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Pokemon</a>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <form>
                                <input className="mdl-textfield__input" type="text" name="pokemon" onChange={this.handleInput}/>
                                <input type="submit" href={link} onClick={this.handleClick} value="search"/>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;