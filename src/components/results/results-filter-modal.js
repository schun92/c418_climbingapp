import React, { Component } from 'react';
import FilterBtn from './results-filter-btn';
import './results-filter-modal.css';
import axios from 'axios';
import queryString from "query-string";

class FilterModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rockOptions: [
                'Traditional',
                'Top Rope',
                'Sport'
            ],
            rockDifficulty: [
                "3rd",
                "4th",
                "5.0",
                "5.1",
                "5.2",
                "5.3",
                "5.4",
                "5.5",
                "5.6",
                "5.7",
                "5.8",
                "5.9",
                "5.10a",
                "5.11a",
                "5.11b",
                "5.11c",
                "5.11d",
                "5.12a",
                "5.12b",
                "5.12c",
                "5.12d",
                "5.13a",
                "5.13b",
                "5.13c",
                "5.13d",
                "5.14a",
                "5.14b",
                "5.14c",
                "5.14d",
                "5.15a",
                "5.15b",
                "5.15c",
                "5.15d",
            ],
            boulderDifficulty: [
                "V0",
                "V1",
                "V2",
                "V3",
                "V4",
                "V5",
                "V6",
                "V7",
                "V8",
                "V9",
                "V10",
                "V11",
                "V12",
                "V13",
                "V14",
            ]
        }
    }

        async HandleApplyClick() {
            const params = {
                rock: true,
                traditional: true, //true or false
                topRope: true, //true or false
                sport: true, //true or false
                boulder: true, //true or false 
                rockDiffStart: '3', //3 to 5.15d
                rockDiffEnd: '5.11c', //3 to 5.15d
                boulderDiffStart: 'V0', //V0 to V14
                boulderDiffEnd: 'V14', //V0 to V14
            }
            const queryParams = queryString.stringify(params)
        const response = await axios.get(`/api/filter_endpoint.php?${queryParams}`);
        const apply = response;
        console.log('apply:', apply)

    }

    render() {
        let showClass = '';
        if (this.props.showModal) {
            showClass = 'show';
        }

        return (
            <div className={`filter-modal-shadow ${showClass}`}>
                <div className="filter-modal-body">
                    <h5>rock</h5>
                    <ul>
                        {this.state.rockOptions.map((option) => {
                            return (
                                <label className="container">{option}
                                    <input type="checkbox" checked="checked" />
                                    <span className="checkmark"></span>
                                </label>
                            )
                        })}
                    </ul>
                    <form className="drop-menu">
                        <select className="drop-menu-style" name="difficulty">
                            {this.state.rockDifficulty.map((difficulty) => {
                                return (
                                    <option value={difficulty}>{difficulty}</option>
                                )
                            })}
                        </select> to
                        <select className="drop-menu-style" name="difficulty">
                            {this.state.rockDifficulty.map((difficulty) => {
                                return (
                                    <option value={difficulty}>{difficulty}</option>
                                )
                            })}

                        </select>
                    </form>
                    <label className="container">boulder
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                    </label>
                    <form className="drop-menu" >
                        <select className="drop-menu-style" name="difficulty">
                            {this.state.boulderDifficulty.map((difficulty) => {
                                return (
                                    <option value={difficulty}>{difficulty}</option>
                                )
                            })}
                        </select> to
                        <select className="drop-menu-style" name="difficulty">
                            {this.state.boulderDifficulty.map((difficulty) => {
                                return (
                                    <option value={difficulty}>{difficulty}</option>
                                )
                            })}
                        </select>
                    </form>
                    <div className="apply-btn-wrapper">
                        <button onClick={this.HandleApplyClick.bind(this)} className="filter-apply-btn">apply</button>
                    </div>
                    <div className="close-filter-modal">
                        <button onClick={this.props.handleHideModal}>cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}




export default FilterModal;