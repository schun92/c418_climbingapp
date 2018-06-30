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
    console.log(mapStyle);
    this.map = new google.maps.Map(this.ref.current, {
      center: { lat: 33.6251, lng: -117.4273 },
      zoom: 12,
      styles: mapStyle
    });
  }

  render() {
    this.props.locations.map(({ latitude: lat, longitude: lng }) => {
      var marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.map
      });

      marker.addListener("click", function(e) {
        console.log(e);
        this.map.setZoom(15);
        this.map.setCenter(marker.getPosition());
      });
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
