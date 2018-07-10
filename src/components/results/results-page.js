import React, { Component } from "react";
import { connect } from "react-redux";
import RouteModal from "./route-modal";
import RouteMap from "./results-map";
import queryString from "query-string";
import FilterBtn from './results-filter-btn';

const Results = props => {
	return (
		<div>
			<RouteMap searchTerm={props.searchTerm} />
			<FilterBtn />
			<RouteModal />
		</div>
	);
}

const mapsStateToProps = (state, ownProps) => ({
	searchTerm: queryString.parse(ownProps.location.search).search
});

export default connect(mapsStateToProps)(Results);