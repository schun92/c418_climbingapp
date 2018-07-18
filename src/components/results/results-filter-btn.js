import React, { Component } from 'react';
import FilterModal from './results-filter-modal';
import './results-filter-btn.css'
import axios from 'axios';

class FilterBtn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showFilterModal: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleApplyClick = this.handleApplyClick.bind(this);
    }

    toggle() {
        this.setState((prevState) => ({showFilterModal: !prevState.showFilterModal}));
    }

    async handleApplyClick() {
        this.toggle();
		const params = {
			traditional: true, //true or false
			topRope: true, //true or false
			sport: true, //true or false
			boulder: true, //true or fals
			rockDiffStart: "5.5", //3 to 5.15d
			rockDiffEnd: "5.15d", //3 to 5.15d
			boulderDiffStart: "V0", //V0 to V14
            boulderDiffEnd: "V14", //V0 to V14,
            mapCenterLat: 33.9277,
            mapCenterLong: -117.505,
            radius: 35
		};
        
        var urlParams = new URLSearchParams();
        urlParams.append('traditional', false);
        urlParams.append('topRope', false);
        urlParams.append('sport', false);
        urlParams.append('boulder', true);
        urlParams.append('rockDiffStart', '5.5');
        urlParams.append('rockDiffEnd', '5.15d');
        urlParams.append('boulderDiffStart', 'V0');
        urlParams.append('boulderDiffEnd', 'V14');
        urlParams.append('mapCenterLat', 33.6845673);
        urlParams.append('mapCenterLong', -117.8265049);
        urlParams.append('radius', 35);
        
		const response = await axios.post(`/api/filter_endpoint.php`, urlParams);
        console.log(Object.values(response.data.data).length);
	} 

    render() {
        return (
            <div>
                <div className="filter">
                    <button className="btn is-secondary is-very-small is-text-lighter" type="button" onClick={this.toggle}>FILTER</button>
                </div>
                <FilterModal  apply={this.handleApplyClick} toggle={this.toggle} show={this.state.showFilterModal}/>
            </div>
        )

    }

}



export default FilterBtn;