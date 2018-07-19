import React, { Component } from "react";
import "./itinerary.css";
import axios from "axios";
import { connect } from "react-redux";
import { getItenaryRoutes } from "../../actions";
import { Field, reduxForm } from "redux-form";
import Card from "./card";
import Loading from "../loading";
import queryString from "query-string";
import NoResults from '../results/no-results-modal';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined


class Itinerary extends Component {
	constructor(props) {
		super(props);
		//create a state that will take routes from route-details.js Stored cookie or local storage
		// use this state to render card.js instead of the props. 
		//make sure to always updatede the Cookie or local storage every time user changes the location.
		this.state = {
			itineraryItems: {},
			loading: false,
			emailSent: false
		};
	}

	buildEmailCard(){
		console.log('buildEmail', this.props)
	const mapImage = function(item){
		return (`
			<div class ="card">	
				<img src="${item.image}"/>              
			<div class="card-content">
				<div>${item.name}</div>
				<div>${item.location}</div>
				<div>${item.difficulty}</div>
				<div>${item.description}</div>
			</div>
		</div>`)
	}
		return this.props.routes.map(mapImage);
		
	}

	async handleAddItem(values) {
		// await this.props.sendTodoItem(values)
		// this.props.history.push('/');
	}

	handleClick = async e => {
		console.log('propers', this.props)
		this.setState({
			emailSent: true
		})
		e.preventDefault();

		var params = new URLSearchParams();
		params.append("email", this.props.emailInput.values.email);
		params.append(
			"body",
			`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
    </head>
      <style>
      .cards{
        width: 100%;
        padding: 0.5em;
        box-sizing: border-box;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
      }  
      .cards{
        width: 100%;
        padding: 0.5em;
        box-sizing: border-box;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
      }  
      
      .card {
          height: auto;
          width: auto;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
					margin-bottom: 1em;
					padding: .5em;
					display: flex;
					box-sizing: border-box;
					align-items: center
				}

      .card img{
        height: 14em;
        background-position: center;
        background-size: cover;
        position: relative;
				display: flex;
				margin-right: .5em;
      }

      .card-content {
				height: auto
        padding: .8em;
        align-items: center;
        box-sizing: border-box;
				font-family: "Quicksand", sans-serif;
				display: flex;
				flex-flow: column wrap;
			}
			
			@media only screen and (max-width: 600px){
				.card {
				 display: flex;
				 flex-flow: column wrap;
				 justify-content: center;
				}

				.card img { 
					width: 18em;
					height: auto;
					text-align: center;
					display: block;
					background-size: contain;
				}
			}

			.card-content div{
				padding-top: .3em;
			}
      </style>
    <body>  
      <h1>Thank you for using Peaky Finder, here's your itinerary! Enjoy your trip to ${this.props.routes[0].location}, by order of the Peaky Finders!</h1>
      <div class="cards">
			${this.buildEmailCard()}
			</div>
    </body>
    </html>`
		);
		await axios.post("/api/mail_handler.php", params);
		
	};

	componentDidMount() {
		const { routes } = queryString.parse(this.props.history.location.search);
		Array.isArray(routes)
			? this.props.getItenaryRoutes(...routes)
			: this.props.getItenaryRoutes(routes);
	}

	renderInput({ label, input, meta: { touched, error } }) {
		return (
			<div className="form-component">
				<label className="itinerary-label">{label}</label>
				<input className="itinerary-input" {...input} type="text" autoComplete="off" />
				<p className="error-text">{touched && error}</p>
			</div>
		);
	}
	
	emailSentMsg(){
		if(this.state.emailSent){
			 return (
				 <p className="email-sent-msg">email sent</p>
			 )
		}
		return
	}
	
	render() {
		const { handleSubmit } = this.props;
		
		if(!this.props.routes.length){
            return (
                <NoResults />
            )
        }

		if (!this.state.loading) {
			console.log('ITINERARY PROPS', this.props)
			return (
				<div className="itinerary-page">
					<div className="itinerary-title">
						<h1>Itinerary</h1>
					</div>
					<section className="cards">
						{this.props.routes.map((route, index) => <Card key={index} route={route} />)}
					</section>
					<div className = {this.props.routes.length ? '' : "hide-itinerary"}>
						
						<form onSubmit={this.handleClick}>
							<div>
								<Field
									name="email"
									type="email"
									component={this.renderInput}
									label="Email Address: "
									placeholder="Email Address"
									validate={email}
								/>
							</div>
								{this.emailSentMsg()}
							<button type="submit" className="itinerary-button btn is-primary is-fullwidth">
								Send My intinerary
							</button>
						</form>
					</div>
				</div>
			);
		} else {
			return <Loading />;
		}
	}
}
function mapStateToProps(state) {
	const itineraryInfo = state.itinerary.routes;
	const emailInput = state.form.email;
	return {
		routes: itineraryInfo,
		emailInput: emailInput
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getItenaryRoutes(...routeIds) {
			dispatch(getItenaryRoutes(...routeIds));
		}
	};
}

function validate(values) {
	const { email } = values;
	const errors = {};

	if (!email) {
		errors.email = "Please add your email address";
	}
	return errors;
}

Itinerary = reduxForm({
	form: "email",
	validate: validate
})(Itinerary);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Itinerary);
