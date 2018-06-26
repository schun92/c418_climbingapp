import React from 'react';
import '../assets/css/app.css';
import {Route} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import Results from './results-page';
import Nav from './nav';
import Landing from './landing-page'

const App = () => (
    <div>
        <Nav/>
        <Route exact path = '/' component = {Landing}/>
       
        {/* <Results /> */}
        
        
    </div>
);

export default App;
