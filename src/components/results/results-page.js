import React, { Component } from "react";
import { connect } from "react-redux";
import RouteModal from "./route-modal";
import RouteMap from "./results-map";
import axios from "axios";
import queryString from "query-string";

import { getLocations } from "../../actions";

class Results extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggle: false,
			selectedLocation: null,
			selectedLocationRoutes: [],
			mapCenter: null
		};

		this.togglePullUpBar = this.togglePullUpBar.bind(this);
		this.handleSelectLocation = this.handleSelectLocation.bind(this);
	}

	togglePullUpBar() {
		this.setState({
			toggle: !this.state.toggle
		});
	}

	async handleSelectLocation(location) {
		const routes = await this.getRoutesByLocationId(location.ID);
		this.setState({
			selectedLocation: location,
			selectedLocationRoutes: routes
		});
	}

	async componentDidMount() {
		this.props.getLocationsData();
		// this.setState({
		// 	mapCenter: {
		// 		lat: response.data.data.mapCenterLat,
		// 		lng: response.data.data.mapCenterLon
		// 	}
		// });

		// this.setState({ locations });
	}

	async getRoutesByLocationId(id) {
		const response = await axios.get(`/api/get_route_data.php?data=${id}`);
		return response.data.data.routes;
	}

	render() {
		console.log(this.props);
		const { mapCenter, locations } = this.props;

		return (
			<div>
				<RouteMap
					mapCenter={mapCenter}
					locations={locations}
					// handleClick={this.togglePullUpBar}
					// selectLocation={this.handleSelectLocation}
				/>
				{/* 
				<RouteModal
					location={selectedLocation}
					routes={selectedLocationRoutes}
					handleClick={this.togglePullUpBar}
					display={selectedLocation ? (toggle ? "show" : "") : "hide-modal"}
				/> */}
			</div>
		);
	}
}

const mapsStateToProps = state => ({
	locations: state.location.locations,
	mapCenter: state.map.center
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getLocationsData() {
		const { location: searchTerm } = queryString.parse(ownProps.location.search);
		dispatch(getLocations(searchTerm));
	}
});

export default connect(
	mapsStateToProps,
	mapDispatchToProps
)(Results);
