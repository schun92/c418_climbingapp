import React, { Component } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

class Nav extends Component {
	constructor(props) {
		super(props);

		this.goBack = this.goBack.bind(this);
		this.handleBurgerMenuClick = this.handleBurgerMenuClick.bind(this);
		this.state = {
			showNavMenu: false
		};
	}
	goBack() {
		window.history.back();
	}

	handleBurgerMenuClick() {
		this.setState({ showNavMenu: !this.state.showNavMenu });
	}

	render() {
		return (
			<nav className="navbar">
				<i className="material-icons" onClick={this.goBack}>
					arrow_back_ios
				</i>
				<div className="brand">CJ</div>
				<div
					className={this.state.showNavMenu ? "burger-menu close" : "burger-menu"}
					onClick={this.handleBurgerMenuClick}
				>
					<span />
					<span />
					<span />
				</div>
				<ul className={this.state.showNavMenu ? "show" : ""} onClick={this.toggleBurgerMenu}>
					<li>
						<NavLink to="/">home</NavLink>
					</li>
					<li>
						<NavLink to="/itinerary">itinerary</NavLink>
					</li>
					<li>
						<NavLink to="/about">about</NavLink>
					</li>
					<li>
						<NavLink to="/team">team</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
