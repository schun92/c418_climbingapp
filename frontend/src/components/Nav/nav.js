import React, { Component } from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props)

        this.goBack = this.goBack.bind(this);
        this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
        this.state = {
            showNavMenu: false
        }

    }
    goBack() {
        window.history.back()
    }

    toggleBurgerMenu() {
        this.setState({ showNavMenu: !this.state.showNavMenu })
    }

    render() {
        return (
            <nav>
                <i className='material-icons' onClick={this.goBack}>
                    arrow_back_ios
            </i>
                <div className='brand'>CJ</div>
                <i className='material-icons burger-menu' onClick={this.toggleBurgerMenu}>
                    menu
            </i>
                <ul className={this.state.showNavMenu ? 'nav-ul show' : 'nav-ul'} onClick={this.toggleBurgerMenu}>
                    <li>
                        <NavLink to='/'>home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/itinerary'>itinerary</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>about</NavLink>
                    </li>
                    <li>
                        <NavLink to='/team'>team</NavLink>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Nav;


