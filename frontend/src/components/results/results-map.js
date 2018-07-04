import React, { Component } from "react";
import RouteModal from "./route-modal";
import map from "../../assets/images/map.png";
import "./results-map.css";
import mapStyle from "./map-style.json";

class RouteMap extends Component {
	constructor(props) {
		super(props);
		// this.key = "AIzaSyBve0XPbDvrdzCZ18vda59aGZxBp8v_lU4";
		this.maps = null;
		this.ref = React.createRef();
	}

	componentDidMount() {
		this.map = new google.maps.Map(this.ref.current, {
			zoom: 10,
			styles: mapStyle
		});
	}

	render() {
		if(this.map) {
			this.map.setCenter(this.props.mapCenter);
		}

		this.props.locations.map(location => {
			const { avgLat: lat, avgLong: lng } = location;
			var marker = new google.maps.Marker({
				position: { lat: Number(lat), lng: Number(lng) },
				map: this.map
			});

			marker.addListener("click", () => this.props.selectLocation(location));
		});

		return (
			//   <div className="map-container" onClick={this.props.handleClick}>
			<div className="map-container">
				<div ref={this.ref} />
			</div>
		);
	}
}

export default RouteMap;
