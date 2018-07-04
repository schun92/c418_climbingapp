import React, { Component } from "react";
import "./route-details.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class RouteDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routeDetailInfo: {}
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:8000/c418_climbingapp/climbingappPHP/frontendAPI/get_route_details.php?data=114506401"
    );

    const routeDetailInfo = response.data.data[0];
    console.log(routeDetailInfo);
    this.setState({
      routeDetailInfo
    });
  }

  render() {
    return (
      <div className="container">
        <div className="thumbnail">
          <h1 className="title">{this.state.routeDetailInfo.name}</h1>
          <h2 className="subtitle">
            {this.state.routeDetailInfo.mountainLocation}
          </h2>
        </div>
        <div className="details">
          <div className="bar">
            <div>
              <p>{this.state.routeDetailInfo.difficulty}</p>
              <p>difficulty</p>
            </div>
            <div>
              <p>
                <span>★★★★</span>☆
              </p>
              <p>{this.state.routeDetailInfo.star_votes} votes</p>
            </div>
          </div>
          <div className="bar">
            <div>
              <p>{this.state.routeDetailInfo.type}</p>
              <p>rock</p>
            </div>
          </div>
          <p>{this.state.routeDetailInfo.description}</p>
          <button className="btn-group">
            <NavLink to="./itinerary">add to itinerary</NavLink>
          </button>
        </div>
      </div>
    );
  }
}
