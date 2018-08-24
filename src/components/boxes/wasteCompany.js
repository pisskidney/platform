import React, { Component } from 'react';
import { MdInfo } from 'react-icons/lib/md';


class WasteCompany extends Component {	
	render() {
		
		const selectedBox = (this.props.selected) ? <div className="wc-selected-box">selected</div> : null;
		const tags = this.props.data.tags.map((tag, i) => <span key={ i } className="wc-tag">best price</span>);
		
		return (
			<div className={ (this.props.selected) ? "white-box wc-selected": "white-box" }>
				{ selectedBox }
				<div className="wc-wrapper">
					<img className="wc-image" src={ this.props.data.image } alt="truck" />
					<div className="wc-content">
						<div className="wc-title-section">
						<div className="row">
							<div className="col-sm-11 text-left">
								<h3>{ this.props.data.name }</h3>
								{ tags }
							</div>					
							<div className="col-sm-1 text-right">
								<button data-tip="<p>How to select a waste collection company:</p>1. Look at each companies attributes</p><p>2. Pick one that best suits your needs</p><p>3. Click the 'SELECT' button.</p><p>Changing companies usually takes about 2 days.</p>" data-html={true} ><MdInfo size={16} color="#ddd" /></button>
							</div>
						</div>					
							<p>{ this.props.data.description }</p>
						</div>
						<div className="wc-info-section">
							<div className="row">
								<div className="col-4 text-center">
									<div className="wc-circle">
										<div className="wc-circle-title">
											<p>PROXIMITY</p>
											<p>SCORE</p>
										</div>
										<p className="wc-circle-value">{ this.props.data.proximity }%</p>
									</div>
								</div>
								<div className="col-4 text-center">
									<div className="wc-circle">
										<div className="wc-circle-title">
											<p>PRICE</p>
											<p>SCORE</p>
										</div>
										<p className="wc-circle-value">{ this.props.data.price }%</p>
									</div>												
								</div>
								<div className="col-4 text-center">
									<div className="wc-circle">
										<div className="wc-circle-title">
											<p>SUSTAINABILITY</p>
											<p>SCORE</p>
										</div>
										<p className="wc-circle-value">{ this.props.data.sustainability }%</p>
									</div>						
								</div>					
							</div>
							<div className="row wc-info-table">
								<div className="col-6 text-left">
									<p>Average pickup time</p>
									<p>Average distance travelled</p>
									<p>Average CO2 emissions</p>
									<p>Average price per collect</p>
								</div>
								<div className="col-6 text-right">
									<p>{ this.props.data.avgdata.time }</p>
									<p>{ this.props.data.avgdata.distance }</p>
									<p>{ this.props.data.avgdata.co2 }</p>
									<p>{ this.props.data.avgdata.price }</p>						
								</div>
							</div>
						</div>
						<div className="wc-footer text-right">
							<button type="button" className="btn btn-primary simple-button">{ (this.props.selected) ? "SELECTED" : "SELECT" }</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default WasteCompany;