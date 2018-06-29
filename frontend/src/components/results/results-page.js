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

    togglePullUpBar(){
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render(){
        return(
            <div>
                <FilterBtn />
                <RouteMap toggle = {this.togglePullUpBar} handleclick = {this.togglePullUpBar} />
                <RouteModal display={this.state.togglePullUpBar ? 'hidden' : 'show'}/>
            </div>
        )
    }
}



export default Results;