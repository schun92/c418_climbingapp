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
		console.log('result props', this.props);
		return (
			
			<div
				className={`routes-modal ${
					this.props.location ? (this.state.toggle ? "show" : "") : "hide-modal"
				}`}
			>
				<div onClick={this.togglePullUpBar}>
					<h1 className="is-text-lighter">
						({this.props.location ? this.props.location.numRoutes : ""}){" "}
						{this.props.location ? this.props.location.name : ""}
					</h1>
				</div>
				<ul>
					{this.props.routes.map((route, i) => (
						<li key={i}>
							<NavLink to={`/route-details/${route.id}`}>
								<p>{route.name}</p>
								<p>{route.difficulty}</p>
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
