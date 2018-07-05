import React, { Component } from "react";
import { connect } from "react-redux";
import RouteModal from "./route-modal";
import RouteMap from "./results-map";
import queryString from "query-string";

const Results = props => (
	<div>
		<RouteMap searchTerm={props.searchTerm} />
		<RouteModal />
	</div>
);

const mapsStateToProps = (state, ownProps) => ({
	searchTerm: queryString.parse(ownProps.location.search).location
});

export default connect(mapsStateToProps)(Results);
