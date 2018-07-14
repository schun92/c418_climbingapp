import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getSelectedRoute, addRouteToItinerary, removeRouteFromItinerary } from "../../actions";
import ReactStars from "react-stars";
import "./route-details.css";

class RouteDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			routeDetailInfo: {},
			isAdded: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	async componentDidMount() {
		this.props.getRouteData();
	}

	handleClick() {
		const { isAdded } = this.state;

		if (isAdded) {
			this.props.removeFromItinerary(this.props.selectedRoute);
		} else {
			this.props.addToItinerary(this.props.selectedRoute);
		}

		this.setState({
			isAdded: !isAdded
		});
	}

	render() {
		console.log("Props:", this.props);
		const { isAdded } = this.state;
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
				<div className="detail-container">
					<div className="thumbnail">
						<h1 className="title">{name}</h1>
						<h2 className="subtitle">{location}</h2>
						<div className="stars">
							<ReactStars value={Number(stars)} edit={false} count={5} size={18} color2={"#fff"} />
							<span>({star_votes})</span>
						</div>
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
							<button className="btn is-primary is-text-ligther itinerary-toggle" onClick={this.handleClick}>
								{ isAdded ? "remove from itinerary" : "add to itinerary" }
							</button>
							<NavLink className="btn is-secondary  is-text-ligther" to="/itinerary">
								go to itinerary
							</NavLink>
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
	},
	removeFromItinerary(route) {
		dispatch(removeRouteFromItinerary(route))
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RouteDetails);
