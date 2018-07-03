import React, { Component } from "react";
import "./landing.css";
import { NavLink } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <h1>Climbing Journal</h1>
        <form>
          <input
            className="landing-page-input"
            type="text"
            placeholder="Enter City or Zip"
          />
        </form>
        {/* <div className="search-btn-wrapper">
                    <NavLink to='/results' className="search-btn">Seach Locations</NavLink>
                </div> */}
        <button className="search-locations-button">
          <NavLink to={`/resultsss/sdfsdfsd`} className="search-btn">
            Seach Locations
          </NavLink>
        </button>
      </div>
    );
  }
}

export default LandingPage;
