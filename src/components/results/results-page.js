import React, { Component } from "react";
import FilterBtn from "./results-filter-btn";
import FilterModal from "./results-filter-modal";
import RouteModal from "./route-modal";
import RouteMap from "./results-map";
import axios from "axios";
import queryString from "query-string";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      locations: [],
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
	const {location} = queryString.parse(this.props.location.search);
    console.log(location);
    const response = await axios.get(
      `http://localhost:8000/c418_climbingapp/climbingappPHP/frontendAPI/get_location_data.php?data=${location}`
    );
    const locations = response.data.data.locations;
    this.setState({
      mapCenter: {
        lat: response.data.data.mapCenterLat,
        lng: response.data.data.mapCenterLon
      }
    });

    this.setState({ locations });
  }

  async getRoutesByLocationId(id) {
    const response = await axios.get(
      `http://localhost:8000/c418_climbingapp/climbingappPHP/frontendAPI/get_route_data.php?data=${id}`
    );
    return response.data.data.routes;
  }

  render() {
    const {
      locations,
      selectedLocationRoutes,
      toggle,
      selectedLocation
    } = this.state;

    return (
      <div>
        <RouteMap
          mapCenter={this.state.mapCenter}
          locations={locations}
          handleClick={this.togglePullUpBar}
          selectLocation={this.handleSelectLocation}
        />
        <RouteModal
          location={selectedLocation}
          routes={selectedLocationRoutes}
          handleClick={this.togglePullUpBar}
          display={selectedLocation ? (toggle ? "show" : "") : "hide-modal"}
        />
      </div>
    );
  }
}

export default Results;
