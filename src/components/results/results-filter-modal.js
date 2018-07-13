import React, { Component } from "react";
import FilterBtn from "./results-filter-btn";
import "./results-filter-modal.css";
import axios from "axios";
import queryString from "query-string";

class FilterModal extends Component {
	constructor(props) {
		super(props);
	}

	handleApplyClick() {}

	render() {
		let showClass = "";
		if (this.props.showModal) {
			showClass = "show";
		}

		return (
			<div className={`filter-modal-shadow ${showClass}`}>
				<div className="filter-modal-body">
					<h1 className="text-center">Filter by</h1>
					<h2>Categories</h2>
					<div className="categories">
						{selection.rockOptions.map(option => {
							return (
								<div className="checkbox-container">
									<input type="checkbox" value={option} />
									<label for={option}>{option}</label>
								</div>
							);
						})}
					</div>
					<h2>Rock difficulty</h2>
					<div className="drop-menu">
						<select className="drop-menu-style" name="difficulty">
							{selection.rockDifficulty.map(difficulty => {
								return <option value={difficulty}>{difficulty}</option>;
							})}
						</select>
						<p>to</p>
						<select className="drop-menu-style" name="difficulty">
							{selection.rockDifficulty.map(difficulty => {
								return <option value={difficulty}>{difficulty}</option>;
							})}
						</select>
					</div>
					<h2>Boulder difficulty</h2>
					<div className="drop-menu">
						<select className="drop-menu-style" name="difficulty">
							{selection.boulderDifficulty.map(difficulty => {
								return <option value={difficulty}>{difficulty}</option>;
							})}
						</select>
						<p>to</p>
						<select className="drop-menu-style" name="difficulty">
							{selection.boulderDifficulty.map(difficulty => {
								return <option value={difficulty}>{difficulty}</option>;
							})}
						</select>
					</div>
					<div className="btn-group is-horizontal">
						<button onClick={this.handleApplyClick.bind(this)} className="btn is-secondary">
							CANCEL
						</button>
						<button onClick={this.handleApplyClick.bind(this)} className="btn is-primary">
							APPLY
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default FilterModal;

const selection = {
	rockOptions: ["Traditional", "Top Rope", "Sport", "Bouldering"],
	rockDifficulty: [
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
		"5.15d"
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
		"V14"
	]
};
