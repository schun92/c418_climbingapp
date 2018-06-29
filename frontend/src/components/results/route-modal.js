import React, { Component } from 'react';
import './route-modal.css';

class RouteModal extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="routes-modal" >
            <h1>Pirate's Cove</h1>
            <p>7 routes</p>
            <ul>
                <li>
                    <a href="./route-details-page.html">
                        <p>Not Even</p>
                        <p>3.8</p>
                        <i className="material-icons">arrow_forward_ios</i>
                    </a>
                </li>
                <li>
                    <a href="./route-details-page.html">
                        <p>Iron Man</p>
                        <p>v3</p>
                        <i className="material-icons">arrow_forward_ios</i>
                    </a>
                </li>
                <li>
                    <a href="./route-details-page.html">
                        <p>Diamond Man</p>
                        <p>v4</p>
                        <i className="material-icons">arrow_forward_ios</i>
                    </a>
                </li>
                <li>
                    <a href="./route-details-page.html">
                        <p>Paper Boy</p>
                        <p>V7</p>
                        <i className="material-icons">arrow_forward_ios</i>
                    </a>
                </li>
                <li>
                    <a href="./route-details-page.html">
                        <p>Tin Man</p>
                        <p>V0+</p>
                        <i className="material-icons">arrow_forward_ios</i>
                    </a>
                </li>
                <li>
                    <a href="./route-details-page.html">
                        <p>Italian Fall</p>
                        <p>V3</p>
                        <i className="material-icons">arrow_forward_ios</i>
                    </a>
                </li>
                <li>
                    <a href="./route-details-page.html">
                        <p>Not Even Chips</p>
                        <p>V3- PG13</p>
                        <i className="material-icons">arrow_forward_ios</i>
                    </a>
                </li>
            </ul>
        </div>
        )
    }
}

export default RouteModal;