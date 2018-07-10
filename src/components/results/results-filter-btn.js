import React, { Component } from 'react';
import FilterModal from './results-filter-modal';
import './results-filter-btn.css'

class FilterBtn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showFilterModal: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
    }

    handleClick(e) {
        this.setState({
            showFilterModal: true
        });
    }

    handleHideModal() {
        console.log('hide modal')
        this.setState({
            showFilterModal: false
        })
    }

    render() {
        return (
            <div>
                <div className="filter">
                    <button className="filter-modal-button" type="button" onClick={this.handleClick}>Filter</button>
                </div>
                <FilterModal handleHideModal = {this.handleHideModal} showModal={this.state.showFilterModal}/>
            </div>
        )

    }

}



export default FilterBtn;