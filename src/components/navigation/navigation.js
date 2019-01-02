import React, { Component } from 'react';

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
        console.log(e.target.value)
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state.pokemon)
        this.props.reportMark(this.state.pokemon)
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <form>
                                <input className="mdl-textfield__input" type="text" name="pokemon" onChange={this.handleInput}/>
                                <input type="submit" onClick={this.handleClick} value="search"/>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;