import React, { Component } from "react";
import { connect } from "react-redux";

import { setSearchTerm, setSelectedLocation } from "../../actions";
import "./landing.css";

class LandingPage extends Component {
	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);

	}

	componentDidMount(){
		this.props.clearSearchTerm();
	}

	handleFormSubmit(event) {
		event.preventDefault();
		const { searchTerm } = this.props;

		this.props.history.push(`/results?location=${searchTerm}`);
	}

	render() {
		const { searchTerm, handleSearchTermChange } = this.props;
		console.log('landing page props', this.props)
		return (
			<div className="landing-page">
				<form onSubmit={this.handleFormSubmit}>
					<h1 className="brand is-text-white">PEAKY FINDER</h1>
					<input
						name="location"
						className="landing-page-input"
						type="text"
						placeholder="Enter City or Zip"
						onChange={handleSearchTermChange}
						value={searchTerm}
					/>
					<button type="submit" className="btn is-primary is-fullwidth is-uppercase is-text-lighter">
						Seach Locations
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchTerm: state.searchTerm
	};
};

const mapDispatchToProps = dispatch => ({
	handleSearchTermChange(event) {
		dispatch(setSearchTerm(event.target.value));
	}, clearSearchTerm(){
		dispatch(setSearchTerm(''))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LandingPage);
