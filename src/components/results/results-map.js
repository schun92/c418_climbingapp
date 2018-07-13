import React, { Component } from "react";
import { connect } from "react-redux";
import "./results-map.css";
import mapStyle from "./map-style.json";
import { setSelectedLocation, getRoutes } from "../../actions";
import { getLocations } from "../../actions";
import { withRouter } from "react-router-dom";
import { showModal } from "../../actions";
import queryString from "query-string";
import Loading from '../loading';

class RouteMap extends Component {
	constructor(props) {
		super(props);
		this.map = null;
		this.ref = React.createRef();

		this.state = {
			loading: false
		}
	}

	componentDidMount() {
		this.map = new google.maps.Map(this.ref.current, {
			zoom: 10,
			styles: mapStyle,
			disableDefaultUI: true
		});

		this.props.getLocationsData();

		//check if url has location data in it;
		const location = queryString.parse(this.props.history.location.search);
		if (location.name && location.ID) {
			this.props.handleLocationSelect(location);
		}
	}

	render() {
		if (this.map) {
			this.map.setCenter(this.props.mapCenter);
		}

		this.props.locations.map(location => {
			const { avgLat: lat, avgLong: lng } = location;
			var marker = new google.maps.Marker({
				position: { lat: Number(lat), lng: Number(lng) },
				map: this.map,
				label: location.numRoutes
			});

			marker.addListener("click", () => {
				this.props.handleLocationSelect(location);
				const { pathname, search } = this.props.history.location;
				const queryParamsData = queryString.parse(search);
				const queryParams = queryString.stringify({ ...queryParamsData, ...location });
				const newUrl = `${pathname}?${queryParams}`;
				this.props.history.push(newUrl);
			});
		});

		if(!this.state.loading) {
		return(
			<div className="map-container">
				<div ref={this.ref} />
			</div>
			)
		}else{
			return <Loading />
		}
	}
}

const mapStateToProps = state => ({
	locations: state.location.locations,
	mapCenter: state.map.center
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getLocationsData() {
		dispatch(getLocations(ownProps.searchTerm));
	},
	handleLocationSelect(location) {
		dispatch(setSelectedLocation(location));
		dispatch(getRoutes(location.ID));
	}
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(RouteMap)
);
