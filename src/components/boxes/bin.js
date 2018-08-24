import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';
import { MdMenu, MdSettings } from 'react-icons/lib/md';

import GraphFilter from './controls/graphFilter';
import GraphSettings from './controls/graphSettings';

const strokeColors = [
	'#8884d8',
	'#82ca9d',
	'#3282bc',
]

const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default class Bin extends Component {
	formatter(text) {
		return days[text.split('-')[2] % 7];
	}
		
	render() {
		var self = this;
		const lines = [];
		Object.keys(this.props.checkboxData).forEach(function(k, i) {
			if (self.props.checkboxData[k])
				lines.push(<Line key={ i } type="monotone" dataKey={ k } stroke={ strokeColors[i] } />);
		});
		
		var grid = null;
		if (this.props.settings.mainGrid) grid = <CartesianGrid strokeDasharray="3 3" />;
			
		return (
			<div className="white-box">
				<div className="box-title-wrapper">
					<button className="box-drag"><MdMenu /></button>
					<h3 className="box-title">{ this.props.name }</h3>				
					<div className="dropdown">
						<button className="box-settings" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MdSettings /></button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item"><GraphSettings room={ this.props.room } settingsData={ this.props.settings } /></a>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
				<div className="white-box-content">
					<GraphFilter room={ this.props.room } checkboxData={ this.props.checkboxData } />
					<ResponsiveContainer width='100%' height={250}>
						<LineChart data={ this.props.data } margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
							<Tooltip labelFormatter={ this.formatter } animationDuration={100} separator="" label="name" isAnimationActive={ false } />
							<Legend />
							<YAxis tickLine={false} />
							<XAxis tickLine={false} dataKey="date" tickFormatter={ this.formatter } />
							{ lines }
							{ grid }
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		);
	}
}
