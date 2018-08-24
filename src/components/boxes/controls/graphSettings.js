import React, { Component } from 'react';
import store from '../../../redux/store';

export default class GraphSettings extends Component {
		
	render() {		
		return (
			<div className="graph-settings">
				<Checkbox room={ this.props.room } checked={ this.props.settingsData.mainGrid } label="Grid" />
			</div>
		);
	}
}


class Checkbox extends Component {
	
	handleChange() {
		store.dispatch({type: 'TOGGLE_GRID_MAIN', payload: {room: this.props.room}});
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