import React, { Component } from "react";
import { connect } from "react-redux";

import { setSearchTerm, setSelectedLocation, showModal } from "../../actions";
import "./landing.css";
import Loading from '../loading';

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.state = {
			loading: false
		}

	}

	componentDidMount() {
		this.props.clearSearchTerm();
		this.props.clearLocation();
		this.props.hideRouteModal();
	}

	handleFormSubmit(event) {
		event.preventDefault();
		const { searchTerm } = this.props;

		this.props.history.push(`/results?searchTerm=${searchTerm}`);
	}

	render() {
		const { searchTerm, handleSearchTermChange } = this.props;
		if (!this.state.loading) {
			return (
				<div className="landing-page">
					<form onSubmit={this.handleFormSubmit}>
						<input
						    autoComplete="off"
							name="location"
							className="landing-page-input"
							type="text"
							placeholder="Enter City or Zip"
							onChange={handleSearchTermChange}
							value={searchTerm}
						/>
						<button type="submit" className="btn is-primary is-fullwidth is-uppercase is-text-lighter landing-button">
							go
					</button>
					</form>
				</div>
			);
		} else {
			return <Loading />
		}
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
	}, clearSearchTerm() {
		dispatch(setSearchTerm(''))
	},
	clearLocation() {
		dispatch(setSelectedLocation(null))
	},
	hideRouteModal() {
		dispatch(showModal(false))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LandingPage);


