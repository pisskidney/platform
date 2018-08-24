import React, { Component } from 'react';
import {} from 'recharts';


const strokeColors = [
	'#8884d8',
	'#82ca9d',
	'#3282bc',
]


export default class Radar extends Component {
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
				<h3 className="box-title">{ this.props.name }</h3>
				<GraphFilter room={ this.props.room } checkboxData={ this.props.checkboxData } />
				<GraphSettings room={ this.props.room } settingsData={ this.props.settings } />
				<ResponsiveContainer width='100%' height={250}>
					<LineChart data={ this.props.data } margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
						<Tooltip labelFormatter={ this.formatter } animationDuration={100} separator="" label="name" />
						<Legend />
						<YAxis />
						<XAxis dataKey="date" tickFormatter={ this.formatter } />
						{ lines }
						{ grid }
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
