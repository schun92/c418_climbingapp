import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./route-modal.css";

class RouteModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggle: false
		};

		this.togglePullUpBar = this.togglePullUpBar.bind(this);
	}

	togglePullUpBar() {
		this.setState({
			toggle: !this.state.toggle
		});
	}

	render() {
		return (
			<div
				className={`routes-modal ${this.props.location ? (this.state.toggle ? "show" : "") : "hide-modal"}`}
			>
				<div onClick={this.togglePullUpBar}>
					<h1>{this.props.location ? this.props.location.name : ""}</h1>
					<p>
						{this.props.location ? this.props.location.numRoutes : ""} routes <span />
						{this.props.location ? this.props.location.climbType : ""}
					</p>
				</div>
				<ul>
					{this.props.routes.map((route, i) => (
						<li key={i}>
							<NavLink to="/route-details">
								<p>{route.name}</p>
								<p>{route.difficulty}</p>
								<i className="material-icons">arrow_forward_ios</i>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	location: state.location.selectedLocation,
	routes: state.route.routes
});

export default connect(mapStateToProps)(RouteModal);
