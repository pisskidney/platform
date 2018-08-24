import React, { Component } from 'react';
import Bin from './boxes/bin';
import SustainBox from './boxes/sustainabilityBox';
import PredictionBox from './boxes/predictionBox';
import { connect } from 'react-redux';
import { fetchBins } from '../redux/actions/binAction';


class Content extends Component {
	
	componentWillMount() {
		this.props.fetchBins();
	}	
	
	render() {
		const bins = this.props.bins.bins.map((bin) => <div key={bin.id} className="col-lg-6 p-0"><Bin room={ bin.id } data={ bin.data } name={ bin.name } checkboxData={ this.props.bins.linesToggleWeek[bin.id] } settings={ this.props.bins.binsSettings[bin.id] }/></div>);

		return (
			<div>
				<div className="row">
					{ bins }
				</div>
				<div className="row">
					<div className="col-12 p-0">					
						<PredictionBox />				
					</div>					
				</div>
				<div className="row">
					<div className="col-12 p-0">
						<SustainBox />
					</div>
				</div>				
			</div>
		);
	}
}


const mapStateToProps = state => ({
	bins: state.bins
});


export default connect(mapStateToProps, { fetchBins })(Content);



