import React, { Component } from "react";
import "./landing.css";
import { NavLink } from "react-router-dom";

import axios from 'axios';

class LandingPage extends Component {
  async componentDidMount(){
    const resp = await axios.get('/api/test.php');

    console.log('Test Response:', resp);
  }

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
          <NavLink to={`/results`} className="search-btn">
            Seach Locations
          </NavLink>
        </button>
      </div>
    );
  }
}

export default LandingPage;
