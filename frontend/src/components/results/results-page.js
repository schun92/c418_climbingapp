import React, { Component } from 'react';
import FilterBtn from './results-filter-btn';
import FilterModal from './results-filter-modal';
import RouteModal from './route-modal';
import RouteMap from './results-map';

class Results extends Component {
    constructor(props) {
        super(props)

    }
    render(){
        return(
            <div>
                <FilterBtn />
                <RouteMap />
            </div>
        )
    }
}



export default Results;