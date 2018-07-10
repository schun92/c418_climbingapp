import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./itinerary.css";
import axios from "axios";
import { connect } from "react-redux";
import { setItineraryItem } from "../../actions";
import { setSelectedItineraryItem } from "../../actions";
import Card from "./card";

class Itinerary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			itineraryItems: {}
		};
	}
	componentDidMount() {
		const { itinItem } = this.props.match.params;
	}

	render() {
		return (
			<div className="centered">
				<div className="itinerary-title">
					<h1>Itinerary</h1>
				</div>
				<section className="cards">
					{this.props.routes.map((route, index) => <Card key={index} route={route} />)}
				</section>
				<input type="email" placeholder="email address" className="input" />
				<button className="btn is-primary is-fullwidth is-uppercase">Send My intinerary</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log("state:", state);
	const itineraryInfo = state.itinerary.routes;
	return {
		routes: itineraryInfo
	};
}

export default connect(mapStateToProps)(Itinerary);
