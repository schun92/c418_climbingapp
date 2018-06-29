import React, { Component } from 'react';
import './route-modal.css';

class RouteModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        return (
            <div className={`routes-modal ${this.props.display}`} >
                <div onClick={this.props.handleClick}>
                    <h1>{this.props.locationName}</h1>
                    <p>{this.props.routes.length} routes</p>
                </div>
                <ul>
                    {this.props.routes.map((route, i) => (
                        <li key={i}>
                            <a href="./route-details-page.html">
                                <p>{route.routeName}</p>
                                <p>{route.difficulty}</p>
                                <i className="material-icons">arrow_forward_ios</i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default RouteModal;