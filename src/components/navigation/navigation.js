import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li>
                            <form>
                                <input className="mdl-textfield__input" type="text" name="pokemon" onChange={this.props.handleInput}/>
                                <button type="submit" className="btn btn-primary" >Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;