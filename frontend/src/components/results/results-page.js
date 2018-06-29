import React, { Component } from 'react';
import FilterBtn from './results-filter-btn';
import FilterModal from './results-filter-modal';
import RouteModal from './route-modal';
import RouteMap from './results-map';

class Results extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: false
        };

        this.togglePullUpBar = this.togglePullUpBar.bind(this);
    }

    togglePullUpBar() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <div>
                <RouteMap handleClick={this.togglePullUpBar} />
                <div className="bottom-bar" onClick={this.togglePullUpBar}>this is the piece</div>
                <RouteModal display={this.state.toggle ? 'show' : ''} />
            </div>
        )
    }
}



export default Results;