import React, { Component } from "react";
import { connect } from "react-redux";

import { setLocation } from "../../actions";
import "./landing.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { location } = this.props;

    this.props.history.push(`/results?location=${location}`);
  }

  render() {
    const { location, handleLocationChange } = this.props;
    return (
      <div className="landing-page">
        <h1>Climbing Journal</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name="location"
            className="landing-page-input"
            type="text"
            placeholder="Enter City or Zip"
            onChange={handleLocationChange}
            value={location}
          />
        </form>
        <button className="search-locations-button">Seach Locations</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

const mapDispatchToProps = dispatch => ({
  handleLocationChange(event) {
    dispatch(setLocation(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
