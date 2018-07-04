import React, { Component } from "react";
import "./landing.css";
import { NavLink } from "react-router-dom";

import axios from "axios";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        location: ""
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    const { form } = this.state;

    // create a new form state
    // destructure the form
    // replace the input state with the new value
    // the name from the input has to match the state name
    const newState = {
      form: { ...form, [name]: value }
    };

    this.setState(newState);
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const { location } = this.state.form;

    console.log(this.props.history.push(`/results?location=${location}`));
  }
  
  async componentDidMount() {
    const resp = await axios.get("/api/test.php");

    console.log("Test Response:", resp);
  }

  render() {
    const { location } = this.state.form;
    return (
      <div className="landing-page">
        <h1>Climbing Journal</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name="location"
            className="landing-page-input"
            type="text"
            placeholder="Enter City or Zip"
            onChange={this.handleInputChange}
            value={location}
          />
        </form>

        <button className="search-locations-button">Seach Locations</button>
      </div>
    );
  }
}

export default LandingPage;
