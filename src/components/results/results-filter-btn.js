import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./results-filter-btn.css";
import FilterModal from "./results-filter-modal";
import { getFilteredLocation } from "../../actions";

class FilterBtn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showFilterModal: true
		};

		this.toggle = this.toggle.bind(this);
		this.handleApplyClick = this.handleApplyClick.bind(this);
	}

	toggle(e) {
		this.setState(prevState => ({ showFilterModal: !prevState.showFilterModal }));
	}

	async handleApplyClick(formValues) {
		this.toggle();

		this.props.getFilteredLocation(formValues);
	}

	render() {
		return (
			<div>
				<div className="filter">
					<button
						className="btn is-secondary is-very-small is-text-lighter"
						type="button"
						onClick={this.toggle}
					>
						FILTER
					</button>
				</div>
				<FilterModal
					apply={this.handleApplyClick}
					toggle={this.toggle}
					show={this.state.showFilterModal}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getFilteredLocation: filterParams => dispatch(getFilteredLocation(filterParams))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(FilterBtn);
