import React, { Component } from 'react';
import './about-content.css'
import HtmlCssJs from '../../assets/images/html-css-js-icon.png';
import ReactRedux from '../../assets/images/react-redux-icon.png'



class MainContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                <div className="container about-info">
                    <h1 className="about-header">About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita ducimus neque tempore exercitationem rem reiciendis alias eligendi inventore debitis vero! Aspernatur officia quae minus. Fugit veniam labore blanditiis aperiam.</p>
                </div>
                <div className="tech-info-wrapper">
                    <h3>Technologies used:</h3>
                    <div className="tech-icons">
                        <img src={HtmlCssJs} alt="html css javascript icons" width="140px" />
                        <img className="react-redux-icon" src={ReactRedux} alt="react redux icon" width="120px" />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent;