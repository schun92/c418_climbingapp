import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./route-modal.css";
import boulder from '../../assets/images/icons/boulder.png';
import { showModal, setSelectedLocation, getRoutes } from '../../actions';
import { withRouter } from 'react-router-dom'
import queryString from "query-string";

class RouteModal extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(this.props.show);
		console.log(this.props.location);
		console.log('before', this.props.show)
		this.props.toggleRouteModal(!this.props.show)
		console.log('after', this.props.show)

		// this.props.history.replace(this.props.history.location.pathname + this.props.history.location.search + '&location=' + this.props.location.name + '&show_modal=' + !this.props.show)
	}


	componentDidMount() {
		var searchTerm = queryString.parse(this.props.history.location.search)
		// this.props.handleLocationSelect(searchTerm.location);
		this.props.toggleRouteModal(searchTerm.show_modal == "true");
	}

	render() {
		console.log('this is the location', this.props.location)
		return (

			<div
				className={`routes-modal ${
					this.props.location ? (this.props.show ? "show" : "") : "hide-modal"
					}`}
			>
				<div onClick={this.handleClick}>
					<h1 className="is-text-lighter">
						({this.props.location ? this.props.location.numRoutes : ""}){" "}
						{this.props.location ? this.props.location.name : ""}
					</h1>
				</div>
				<ul>
					{this.props.routes.map((route, i) => {
						let abbreviate = null;
						//  if(route.type.toLowerCase() === 'trad'){
						//  	abbreviate =  <p>TRAD</p>
						//  }
						//  if(route.type.toLowerCase() === 'sport'){
						// 	 abbreviate = <p>S</p>
						//  }
						return (
							<li key={i}>
								<NavLink to={`/route-details/${route.id}`}>
									<p>{route.name}</p>
									{route.type}
									<p>{route.difficulty}</p>
								</NavLink>
							</li>
						)
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	location: state.location.selectedLocation,
	routes: state.route.routes,
	show: state.routeModal.show
});

const mapDispatchToProps = (dispatch) => ({
	toggleRouteModal(show) {
		console.log(show);
		dispatch(showModal(show))
	},
	handleLocationSelect(location) {
		dispatch(setSelectedLocation(location))
		dispatch(getRoutes(location.ID))
	}
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteModal));
