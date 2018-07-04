import React, { Component } from 'react';
import './route-details.css';
import { NavLink } from 'react-router-dom';

export default class RouteDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            routeDetailInfo: {}
        }
    }

    componentDidMount() {

        //Response from backend 
        this.setState({
            routeDetailInfo: {
                mountainLocation: 'Ortega Falls',
                routeName: 'Dihedral',
                difficulty: 5.7,
                popularity: 3.1,
                popVotes: 49,
                climbType: 'Trad, TR',
                pic: 'https://cdn-files.apstatic.com/climb/112528611_medium_1494310683.jpg'
            }
        })
    }

    render() {
        console.log(this.state.routeDetailInfo);
        return (
            <div className="container">
                <div className="thumbnail">
                    <h1 className="title">{this.state.routeDetailInfo.routeName}</h1>
                    <h2 className="subtitle">{this.state.routeDetailInfo.mountainLocation}</h2>
                </div>
                <div className="details">
                    <div className="bar">
                        <div>
                            <p>{this.state.routeDetailInfo.difficulty}</p>
                            <p>difficulty</p>
                        </div>
                        <div>
                            <p>
                                <span>★★★★</span>☆</p>
                            <p>{this.state.routeDetailInfo.popVotes} votes</p>
                        </div>
                    </div>
                    <div className="bar">
                        <div>
                            <p>{this.state.routeDetailInfo.climbType}</p>
                            <p>rock</p>
                        </div>
                    </div>
                    <img src={this.state.routeDetailInfo.pic} />
                    {/* <img src={this.state.routeDetailInfo.pic} /> */}
                    <button className="btn-group">

                        <NavLink to='./itinerary'>add to itinerary</NavLink>

                    </button>
                </div>
            </div>
        )
    }

}