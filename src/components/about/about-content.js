import React, { Component } from 'react';
import './about-content.css'
import HtmlCssJs from '../../assets/images/html-css-js-icon.png';
import ReactRedux from '../../assets/images/react-redux-icon.png';
import Php from '../../assets/images/php_mysql.png';
import background from '../../assets/images/aboutpage.jpeg';




class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-container about-page">
                <div className="about-container">
                    <h1 className="about-header">About</h1>
                    <p className="about-text">Peaky Finder is an application for climbers in the orange county area to be able to locate and save different routes into an itinerary to map out a day's worth of climbing!</p>
                    <h3>Technologies used:</h3>
                    <div className="tech-icons">
                        <img src={HtmlCssJs} alt="html css javascript icons" width="140px" />
                        <img className="react-redux-icon" src={ReactRedux} alt="react redux icon" width="120px" />
                        <img className="react-redux-icon" src={Php} alt="php, mysql icon" width="120px" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;