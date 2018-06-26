import React from 'react';
import '../assets/css/app.css';
import {Route} from 'react-router-dom';
import logo from '../assets/images/logo.svg';

import Results from './results-page';
import Nav from './nav';
import Landing from './landing-page'


        
import Results from './results/results-page';
import MainContent from './about/about-content';

const App = () => (
    <div>
        <Nav/>
        <Route exact path = '/' component = {Landing}/>
       
        {/* <Results /> */}


        <MainContent />
        {/* <Results /> */}

    </div>
);

export default App;
