import React, { Component } from "react";
import { connect } from "react-redux";
import "./results-map.css";
import mapStyle from "./map-style.json";
import { setSelectedLocation, getRoutes } from "../../actions";
import { getLocations } from "../../actions";
import { showModal } from '../../actions';


class RouteMap extends Component {
	constructor(props) {
		super(props);
		this.map = null;
		this.ref = React.createRef();
	}

	componentDidMount() {

		this.props.getLocationsData();
		this.map = new google.maps.Map(this.ref.current, {
			zoom: 10,
			styles: mapStyle,
			disableDefaultUI: true
		});

		
	}

	componentDidUpdate() {
		console.log('componeitdid update' ,this.props);
	}

	render() {
		console.log(this.props);
		if (this.map) {
			this.map.setCenter(this.props.mapCenter);
		}

		this.props.locations.map(location => {
			const { avgLat: lat, avgLong: lng } = location;
			var marker = new google.maps.Marker({
				position: { lat: Number(lat), lng: Number(lng) },
				map: this.map
			});

			marker.addListener("click", () => {
				this.props.handleLocationSelect(location)
			});
		});

		return (
			<div className="map-container" >
				<div ref={this.ref} />
			</div>
		);
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
		dispatch(setSelectedLocation(location))
		dispatch(getRoutes(location.ID))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RouteMap);
