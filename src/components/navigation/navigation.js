import React, { Component } from 'react';
import './navigation.css';
import { Link } from 'react-router-dom'

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
        this.props.reportMark(this.state.pokemon)
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Pokemon</a>
                    <ul id="nav-mobile" className="right">
                        <li className="btn">
                            <Link to="/detail">Pagina de Busqueda</Link>
                        </li>
                        <li>
                            <form>
                                <input id="search" type="search" name="pokemon" onChange={this.handleInput}/>
                                <input type="submit" onClick={this.handleClick} value="Search"/>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;