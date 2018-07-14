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
    console.log('form values: ', values);
    // await this.props.sendTodoItem(values)
    // this.props.history.push('/');

  }

  handleClick = async (e) => {
    e.preventDefault();
    console.log('hey button')
    var params = new URLSearchParams();
    params.append('email', 'paulglujan@gmail.com')
    params.append('body', `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
    </head>
      <style>
        .card {
          color: red;
          background-color: green;
        }
      </style>
    <body>
      <div class="card">This is card</div>
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

    const { handleSubmit } = this.props;

    console.log("props", this.props);
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
  console.log("state:", state);
  const itineraryInfo = state.itinerary.routes;
  return {
    routes: itineraryInfo
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
