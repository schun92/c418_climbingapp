import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./itinerary.css";
import axios from "axios";
import { connect } from "react-redux";
import { setItineraryItem } from "../../actions";
import { setSelectedItineraryItem } from "../../actions";
import { Field, reduxForm } from 'redux-form';
import Card from "./card";

class Itinerary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itineraryItems: {}
    };
  }

  async handleAddItem(values){
    console.log('form values: ', values);
    // await this.props.sendTodoItem(values)
    // this.props.history.push('/');

}

        
  
  componentDidMount() {
    const { itinItem } = this.props.match.params;
  }


  renderInput({label, input, meta: {touched, error}}){
        
    return(
        <div className='form-component'>
            <label className='itinerary-label'>{label}</label>
            <input className='itinerary-input' {...input} type="text" autoComplete='off'/>
            <p className='error-text'>{touched && error}</p>
        </div>
    )
  }
  render() {

    const { handleSubmit } = this.props;

    console.log("props", this.props);
    return (
      <div className='itinerary-page'>
        <div className="itinerary-title">
          <h1>Itinerary</h1>
        </div>
        <section className="cards">
          {this.props.routes.map((route, index) => <Card key={index} route={route} />)}
        </section>
        <div>
          <form>
            <div>
              <Field name='email' type='email' component={this.renderInput} label='Email Address: ' placeholder='Email Address' />
            </div>
            <button type='submit' className="btn is-primary is-fullwidth is-uppercase" >Send My intinerary</button>
          </form>
        </div>

        {/* <input type="email" placeholder="email address" className="input" /> */}
        

      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state:", state);
  const itineraryInfo = state.itinerary.routes;
  return {
    routes: itineraryInfo
  };
}

function validate(values){
  const { email } = values;
  const errors = {};

  if(!email){
      errors.email = 'Please add your email address'
  }
   return errors;
}

Itinerary = reduxForm({
  form: 'email',
  validate: validate
})(Itinerary)



export default connect(mapStateToProps)(Itinerary);
