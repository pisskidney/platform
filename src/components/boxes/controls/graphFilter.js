import React, { Component } from 'react';
import store from '../../../redux/store';

export default class GraphFilter extends Component {
		
	render() {		
		return (
			<div id="graph-filter">
				<Checkbox room={ this.props.room } checked={ this.props.checkboxData["Paper"] } label="Paper" />
				<Checkbox room={ this.props.room } checked={ this.props.checkboxData["Plastic"] } label="Plastic" />
				<Checkbox room={ this.props.room } checked={ this.props.checkboxData["Glass"] } label="Glass" />
			</div>
		);
	}
}


class Checkbox extends Component {
	
	handleChange() {
		store.dispatch({type: 'TOGGLE_BIN_WEEKLY_LINE', payload: {room: this.props.room, type: this.props.label}});
	}
	
	render() {	
		return (
			<label className="checkbox-wrapper">{ this.props.label }
				<input id={"checkbox-" + this.props.room + "-" + this.props.label} type="checkbox" checked={ this.props.checked } onChange={ this.handleChange.bind(this) } />	
				<span className="checkmark"></span>
			</label>
		);
	}
}

/*
	<label htmlFor={"checkbox-" + this.props.room + "-" + this.props.label}>{ this.props.label }</label>
	<input id={"checkbox-" + this.props.room + "-" + this.props.label} type="checkbox" checked={ this.props.checked } onChange={ this.handleChange.bind(this) } />	
*/