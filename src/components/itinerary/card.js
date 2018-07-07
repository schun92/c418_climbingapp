import React, { Component } from "react";

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			expandCard: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			expandCard: !this.state.expandCard
		});
	}

	render() {
		return (
			<div className={this.state.expandCard ? "card expand" : "card"}>
				<div className="card-image" style={{ backgroundImage: `url(${this.props.route.image})` }} />
				<div onClick={this.handleClick} className="card-content">
					<div className="card-content-left">
						<h1>{this.props.route.name}</h1>
						<h2>{this.props.route.location}</h2>
						<p>{this.props.route.difficulty}</p>
					</div>
					<div className="card-content-right">
						<i className="material-icons">keyboard_arrow_down</i>
						<i className="material-icons">keyboard_arrow_up</i>
					</div>
				</div>
				<div className="card-details">
					{this.props.route.description}
				</div>
			</div>
		);
	}
}

export default Card;
