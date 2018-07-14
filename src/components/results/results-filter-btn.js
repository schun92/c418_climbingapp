import React, { Component } from 'react';
import FilterModal from './results-filter-modal';
import './results-filter-btn.css'

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
			traditional: false, //true or false
			topRope: false, //true or false
			sport: true, //true or false
			boulder: false, //true or false
			rockDiffStart: "5.5", //3 to 5.15d
			rockDiffEnd: "5.15d", //3 to 5.15d
			boulderDiffStart: "V0", //V0 to V14
			boulderDiffEnd: "V14" //V0 to V14
		};
		const queryParams = queryString.stringify(params);
		const response = await axios.get(`/api/filter_endpoint.php?${queryParams}`);
		const apply = response;
		console.log("apply:", apply);
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