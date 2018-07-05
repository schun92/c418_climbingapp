import React, { Component } from "react";
import "./route-details.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getSelectedRoute } from "../../actions";

class RouteDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			routeDetailInfo: {}
		};
	}

	async componentDidMount() {
		this.props.getRouteData();
	}

	render() {
		let content;

		if (this.props.selectedRoute) {
			const {
				description,
				difficulty,
				location,
				name,
				pitches,
				star_votes,
				stars,
				type
			} = this.props.selectedRoute;

			content = (
				<div className="container">
					<div className="thumbnail">
						<h1 className="title">{name}</h1>
						<h2 className="subtitle">{location}</h2>
					</div>
					<div className="details">
						<div className="bar">
							<div>
								<p>{difficulty}</p>
								<p>difficulty</p>
							</div>
							<div>
								<p>
									<span>★★★★</span>☆
								</p>
								<p>{star_votes} votes</p>
							</div>
						</div>
						<div className="bar">
							<div>
								<p>{type}</p>
								<p>rock</p>
							</div>
						</div>
						<p>{description}</p>
						<button className="btn-group">
							<NavLink to="./itinerary">add to itinerary</NavLink>
						</button>
					</div>
				</div>
			);
		} else {
			content = null;
		}

		return content;
	}
}

const mapStateToProps = state => ({
	selectedRoute: state.route.selectedRoute
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getRouteData() {
		dispatch(getSelectedRoute(ownProps.match.params.routeID));
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RouteDetails);
