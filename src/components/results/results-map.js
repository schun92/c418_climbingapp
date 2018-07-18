import React, { Component } from "react";
import { connect } from "react-redux";
import "./results-map.css";
import mapStyle from "./map-style.json";
import { setSelectedLocation, getRoutes, setMapCenter, setRoutes } from "../../actions";
import { getLocations } from "../../actions";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Loading from "../loading";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
	width: "100%",
	height: "100%"
};

class RouteMap extends Component {
	constructor(props) {
		super(props);
		this.map = null;
		this.ref = React.createRef();

		this.handleMarkerClick = this.handleMarkerClick.bind(this);
		this.handleMapClick = this.handleMapClick.bind(this);
	}

	async componentDidMount() {
		await this.props.getLocationsData();
		const params = queryString.parse(this.props.history.location.search);
		const { avgLat, avgLong, ID } = params;
		if (ID) {
			this.props.handleLocationSelect(params);
			this.props.setMapCenter(avgLat, avgLong);
		}
	}

	handleMapClick() {
		this.props.handleLocationSelect(null);
	}

	handleMarkerClick({ location }) {
		this.props.handleLocationSelect(location);
		const { avgLat, avgLong } = location;
		this.props.setMapCenter(avgLat, avgLong);

		const { pathname, search } = this.props.history.location;
		const queryParamsData = queryString.parse(search);
		const queryParams = queryString.stringify({ ...queryParamsData, ...location });
		const newUrl = `${pathname}?${queryParams}`;
		this.props.history.replace(newUrl);
	}

	render() {
		console.log(this.props.locations);
		return !this.props.mapCenter ? null : (
			<Map
				styles={mapStyle}
				google={this.props.google}
				zoom={10}
				initialCenter={this.props.mapCenter}
				center={this.props.mapCenter}
				onClick={this.handleMapClick}
				disableDefaultUI={true}
			>
				{this.props.locations.map(location => {
					let { avgLat: lat, avgLong: lng } = location;
					return (
						<Marker
							label={{
								text: location.numRoutes,
								color: "white"
							}}
							onClick={this.handleMarkerClick}
							location={location}
							key={location.ID}
							position={{ lat: Number(lat), lng: Number(lng) }}
						/>
					);
				})}
			</Map>
		);
	}
}

const mapStateToProps = state => ({
	locations: state.location.locations,
	mapCenter: state.map.center
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getLocationsData() {
		return dispatch(getLocations(ownProps.searchTerm));
	},
	handleLocationSelect(location) {
		dispatch(setSelectedLocation(location));
		location ? dispatch(getRoutes(location.ID)) : dispatch(setRoutes([]));
	},
	setMapCenter(lat, lng) {
		dispatch(setMapCenter(lat, lng));
	}
});

RouteMap = GoogleApiWrapper({
	apiKey: "AIzaSyDN78Uy_AYEXBfiTgSQ_O7Bg41PwUczn10",
	LoadingContainer: Loading
})(RouteMap);

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(RouteMap)
);
