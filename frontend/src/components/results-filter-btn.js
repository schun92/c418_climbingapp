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
                {this.state.showFilterModal ? <FilterModal handleHideModal={this.handleHideModal} /> : null}
            </div>
        )

    }

}



export default FilterBtn;