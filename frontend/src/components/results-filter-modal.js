import React, { Component } from 'react';
import FilterBtn from './results-filter-btn';
import './results-filter-modal.css'

class FilterModal extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className="filter-modal-shadow">
                <div className="filter-modal-body">
                    <span className="close-filter-modal">
                        <button onClick={this.props.handleHideModal}>X</button>
                    </span>
                    <input type="checkbox" />Rock
            <ul>
                        <li>
                            <input type="checkbox" />Traditional</li>
                        <li>
                            <input type="checkbox" />Top Rope</li>
                        <li>
                            <input type="checkbox" />Sport</li>
                    </ul>
                    <form className="drop-menu" action="/action_page.php">
                        <select className="drop-menu-style" name="difficulty">
                            <option value="3rd">3rd</option>
                            <option value="4th">4th</option>
                            <option value="5.0">5.0</option>
                            <option value="5.1">5.1</option>
                            <option value="5.2">5.2</option>
                            <option value="5.3">5.3</option>
                            <option value="5.4">5.4</option>
                            <option value="5.5">5.5</option>
                            <option value="5.6">5.6</option>
                            <option value="5.7">5.7</option>
                            <option value="5.8">5.8</option>
                            <option value="5.9">5.9</option>
                            <option value="5.10a">5.10a</option>
                            <option value="5.11a">5.11a</option>
                            <option value="5.11b">5.11b</option>
                            <option value="5.11c">5.11c</option>
                            <option value="5.11d">5.11d</option>
                            <option value="5.12a">5.12a</option>
                            <option value="5.12b">5.12b</option>
                            <option value="5.12c">5.12c</option>
                            <option value="5.12d">5.12d</option>
                            <option value="5.13a">5.13a</option>
                            <option value="5.13b">5.13b</option>
                            <option value="5.13c">5.13c</option>
                            <option value="5.13d">5.13d</option>
                            <option value="5.14a">5.14a</option>
                            <option value="5.14b">5.14b</option>
                            <option value="5.14c">5.14c</option>
                            <option value="5.14d">5.14d</option>
                            <option value="5.15a">5.15a</option>
                            <option value="5.15b">5.15b</option>
                            <option value="5.15c">5.15c</option>
                            <option value="5.15d">5.15d</option>
                        </select> to
                <select className="drop-menu-style" name="difficulty">
                            <option value="3rd">3rd</option>
                            <option value="4th">4th</option>
                            <option value="5.0">5.0</option>
                            <option value="5.1">5.1</option>
                            <option value="5.2">5.2</option>
                            <option value="5.3">5.3</option>
                            <option value="5.4">5.4</option>
                            <option value="5.5">5.5</option>
                            <option value="5.6">5.6</option>
                            <option value="5.7">5.7</option>
                            <option value="5.8">5.8</option>
                            <option value="5.9">5.9</option>
                            <option value="5.10a">5.10a</option>
                            <option value="5.11a">5.11a</option>
                            <option value="5.11b">5.11b</option>
                            <option value="5.11c">5.11c</option>
                            <option value="5.11d">5.11d</option>
                            <option value="5.12a">5.12a</option>
                            <option value="5.12b">5.12b</option>
                            <option value="5.12c">5.12c</option>
                            <option value="5.12d">5.12d</option>
                            <option value="5.13a">5.13a</option>
                            <option value="5.13b">5.13b</option>
                            <option value="5.13c">5.13c</option>
                            <option value="5.13d">5.13d</option>
                            <option value="5.14a">5.14a</option>
                            <option value="5.14b">5.14b</option>
                            <option value="5.14c">5.14c</option>
                            <option value="5.14d">5.14d</option>
                            <option value="5.15a">5.15a</option>
                            <option value="5.15b">5.15b</option>
                            <option value="5.15c">5.15c</option>
                            <option value="5.15d">5.15d</option>
                        </select>
                    </form>

                    <input type="checkbox" />Boulder
            <form className="drop-menu" action="/action_page.php">
                        <select className="drop-menu-style" name="difficulty">
                            <option value="V0">V0</option>
                            <option value="V1">V1</option>
                            <option value="V2">V2</option>
                            <option value="V3">V3</option>
                            <option value="V4">V4</option>
                            <option value="V5">V5</option>
                            <option value="V6">V6</option>
                            <option value="V7">V7</option>
                            <option value="V8">V8</option>
                            <option value="V9">V9</option>
                            <option value="V10">V10</option>
                            <option value="V11">V11</option>
                            <option value="V12">V12</option>
                            <option value="V13">V13</option>
                            <option value="V14">V14</option>

                        </select> to
                <select className="drop-menu-style" name="difficulty">
                            <option value="V0">V0</option>
                            <option value="V1">V1</option>
                            <option value="V2">V2</option>
                            <option value="V3">V3</option>
                            <option value="V4">V4</option>
                            <option value="V5">V5</option>
                            <option value="V6">V6</option>
                            <option value="V7">V7</option>
                            <option value="V8">V8</option>
                            <option value="V9">V9</option>
                            <option value="V10">V10</option>
                            <option value="V11">V11</option>
                            <option value="V12">V12</option>
                            <option value="V13">V13</option>
                            <option value="V14">V14</option>
                        </select>
                    </form>

                    <input type="checkbox" />Difficulty
            <div className="apply-btn-wrapper">
                        <button className="filter-apply-btn">Apply</button>
                    </div>
                </div>
            </div>
        )
    }
}




export default FilterModal;