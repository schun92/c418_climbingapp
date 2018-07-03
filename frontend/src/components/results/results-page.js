import React, { Component } from "react";
import FilterBtn from "./results-filter-btn";
import FilterModal from "./results-filter-modal";
import RouteModal from "./route-modal";
import RouteMap from "./results-map";
import axios from "axios";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      locations: [],
      selectedLocation: null,
      selectedLocationRoutes: []
    };

    this.togglePullUpBar = this.togglePullUpBar.bind(this);
    this.handleSelectLocation = this.handleSelectLocation.bind(this);
  }

  togglePullUpBar() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  handleSelectLocation(location) {
    const routes = this.getRoutesByLocationId(location.id);
    this.setState({
      selectedLocation: location,
      selectedLocationRoutes: routes
    });
  }

  async componentDidMount() {
	  
    const response = await axios.get(
      "http://localhost:8000/c418_climbingapp/climbingappPHP/frontendAPI/get_location_data.php?data=irvine"
	);
	
	const locations = response.data.data.locations

    this.setState({ locations });
  }

  getRoutesByLocationId(id) {
    const routes = [
      {
        routeName: "Dihedral",
        difficulty: 5.7,
        popularity: 3.1,
        routeID: 29
      },
      {
        routeName: "Fingers",
        difficulty: 5.9,
        popularity: 3.4,
        routeID: 234
      },
      {
        routeName: "Splitter",
        difficulty: "5.10d",
        popularity: 3.5,
        routeID: 356
      }
    ];
    return routes;
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
