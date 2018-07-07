import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getSelectedRoute, addRouteToItinerary } from "../../actions";
import ReactStars from "react-stars";
import "./route-details.css";

class RouteDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			routeDetailInfo: {}
		};
		this.handleClick = this.handleClick.bind(this);
	}

	async componentDidMount() {
		this.props.getRouteData();
	}

	handleClick() {
		this.props.addToItinerary(this.props.selectedRoute);
	}

	render() {
		console.log("Props:", this.props);
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
						<p className="stars">
							<ReactStars value={stars} edit={false} count={5} size={18} color2={"#fff"} />
							<span>({star_votes})</span>
						</p>
					</div>
					<div className="details">
						<div className="bar">
							<div>
								<p>{type}</p>
								<p>type</p>
							</div>
							<div>
								<p>{pitches}</p>
								<p>pitches</p>
							</div>
							<div>
								<p>{difficulty}</p>
								<p>difficulty</p>
							</div>
						</div>
						<p className="description">{description}</p>
						<div className="btn-group">
							<button className="btn is-primary is-text-ligther" onClick={this.handleClick}>
								add to itinerary
							</button>
							<button className="btn is-secondary  is-text-ligther" onClick={this.handleClick}>
								go to itinerary
							</button>
						</div>
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
	selectedRoute: state.route.selectedRoute,
	itineraryRoutes: state.itinerary.routes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getRouteData() {
		dispatch(getSelectedRoute(ownProps.match.params.routeID));
	},
	addToItinerary(route) {
		dispatch(addRouteToItinerary(route));
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RouteDetails);
