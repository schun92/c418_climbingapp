import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./itinerary.css";
import axios from "axios";
import { connect } from "react-redux";
import { setItineraryItem } from "../../actions";
import { setSelectedItineraryItem } from "../../actions";
import { Field, reduxForm } from 'redux-form';
import Card from "./card";
import Loading from '../loading';


class Itinerary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itineraryItems: {},
      loading: false
    };
  }

  async handleAddItem(values) {
    // await this.props.sendTodoItem(values)
    // this.props.history.push('/');

  }

  handleClick = async (e) => {
    e.preventDefault();


    var params = new URLSearchParams();
    params.append('email', this.props.emailInput.values.email)
    params.append('body', `<!DOCTYPE html>
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
          height: 16em;
          width: 100%;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          margin-bottom: 1em;
        }

      .card img{
        height: 50%;
        background-position: center;
        background-size: cover;
        position: relative;
        display: flex;
      }

      .card-content {
        padding: .8em;
        align-items: center;
        box-sizing: border-box;
        font-family: "Quicksand", sans-serif;
      }
      </style>
    <body>  
      <h1>Thank you for using Peaky Finder, here's your itinerary! Enjoy your climb, by order of the Peaky Finders!</h1>
      <div class="cards">
        <div class="card">

          <img src=${this.props.routes[0].image}>
            
              <div class='card-content'>
                  <div>${this.props.routes[0].name}</div>
                  <div>${this.props.routes[0].location}</div>
                  <div>${this.props.routes[0].difficulty}</div>
                  <div>${this.props.routes[0].description}</div>
              </div>
        
        </div>
        <div class="card">
          <img src=${this.props.routes[1].image}>
              
            <div class='card-content'>
              <div>${this.props.routes[1].name}</div>
              <div>${this.props.routes[1].location}</div>
              <div>${this.props.routes[1].difficulty}</div>
              <div>${this.props.routes[1].description}</div> 
            </div>
       </div>   
      </div> 



    </body>
    </html>`)
    await axios.post('/api/mail_handler.php', params);
  }

  componentDidMount() {
    const { itinItem } = this.props.match.params;

  }


  renderInput({ label, input, meta: { touched, error } }) {

    return (
      <div className='form-component'>
        <label className='itinerary-label'>{label}</label>
        <input className='itinerary-input' {...input} type="text" autoComplete='off' />
        <p className='error-text'>{touched && error}</p>
      </div>
    )
  }
  render() {
    console.log(this.props.routes);
    const { handleSubmit } = this.props;

    if (!this.state.loading) {
      return (
        <div className='itinerary-page'>
          <div className="itinerary-title">
            <h1>Itinerary</h1>
          </div>
          <section className="cards">
            {this.props.routes.map((route, index) => <Card key={index} route={route} />)}
          </section>
          <div>
            <form onSubmit={this.handleClick}>
              <div>
                <Field name='email' type='email' component={this.renderInput} label='Email Address: ' placeholder='Email Address' />
              </div>
              <button type='submit' className="btn is-primary is-fullwidth is-uppercase" >Send My intinerary</button>
            </form>
          </div>

          {/* <input type="email" placeholder="email address" className="input" /> */}


        </div>
      );
    } else {
      return <Loading />
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

function validate(values) {
  const { email } = values;
  const errors = {};

  if (!email) {
    errors.email = 'Please add your email address'
  }
  return errors;
}

Itinerary = reduxForm({
  form: 'email',
  validate: validate
})(Itinerary)



export default connect(mapStateToProps)(Itinerary);
