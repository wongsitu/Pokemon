import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li>
                            <form action="#">
                                <input class="mdl-textfield__input" type="text" id="sample6" name="pokemon" onChange={this.props.handleInput}/>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;