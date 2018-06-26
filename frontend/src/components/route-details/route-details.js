import React, {Component} from 'react';
import './route-details.css';
import {NavLink} from 'react-router-dom';

export default class RouteDetails extends Component{
    render(){
        return(
            <div className="container">
            <div className="thumbnail">
                <h1 className="title">Not Even Chips</h1>
                <h2 className="subtitle">Pirate's Cove</h2>
            </div>
            <div className="details">
                <div className="bar">
                    <div>
                        <p>V3- PG13</p>
                        <p>difficulty</p>
                    </div>
                    <div>
                        <p>
                            <span>★★★★</span>☆</p>
                        <p> 23 votes</p>
                    </div>
                </div>
                <div className="bar">
                    <div>
                        <p>Boulder</p>
                        <p>type</p>
                    </div>
                </div>
                <img src="https://cdn-files.apstatic.com/climb/107655293_smallMed_1494202770.jpg" alt=""/>
                <img src="https://cdn-files.apstatic.com/climb/107655293_smallMed_1494202770.jpg" alt=""/>
                <section className="btn-group">
                    
                       <NavLink to = './itinerary'>add to itinerary</NavLink>
                    
                </section>
            </div>
        </div>
        )
    }

}