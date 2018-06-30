import React, { Component } from "react";
import FilterBtn from "./results-filter-btn";
import FilterModal from "./results-filter-modal";
import RouteModal from "./route-modal";
import RouteMap from "./results-map";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      locations: [],
      selectedLocationRoutes: []
    };

    this.togglePullUpBar = this.togglePullUpBar.bind(this);
  }

  togglePullUpBar() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  componentDidMount() {
    const locations = [
      {
        mountainLocation: "Ortega Falls",
        latitude: 33.6251, //avg latitude of routes,
        longitude: -117.4273, //avg longitude of routes,
        numberOfRoutes: 4, //Number of routes that fit filter,
        climbType: "Trad, TR",
        id: 1
      },
      {
        mountainLocation: "El Cariso",
        latitude: 33.6438,
        longitude: -117.4432,
        numberOfRoutes: 2,
        climbType: "Trad, TR",
        id: 2
      },
      {
        mountainLocation: "Upper San Juan Boulders",
        latitude: 33.6072,
        longitude: -117.4336,
        numberOfRoutes: 7,
        climbType: "Boulder",
        id: 3
      }
    ];

    const selectedLocationRoutes = this.getRouteLocationById(1);

    this.setState({ locations, selectedLocationRoutes });
  }

  getRouteLocationById(id) {
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
      locations: [location],
      selectedLocationRoutes,
      toggle
    } = this.state;

    return (
      <div>
        <RouteMap
          locations={this.state.locations}
          handleClick={this.togglePullUpBar}
        />
        <RouteModal
          location={location}
          routes={selectedLocationRoutes}
          handleClick={this.togglePullUpBar}
          display={toggle ? "show" : ""}
        />
      </div>
    );
  }
}

export default Results;
