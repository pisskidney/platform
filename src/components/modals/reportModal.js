import React, { Component } from 'react';
import invoice from '../../images/invoice.jpg';

export default class ReportModal extends Component {
	handleChange() {
		
	}
	
	render() {
		return (	
			<div className="modal fade" id="reportModal" tabIndex="-1" role="dialog" aria-labelledby="reportModal" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Generate Report</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-settings-wrapper">
							<div className="modal-settings">
								<label className="checkbox-wrapper">
									Zara Home
									<input type="checkbox" checked={ true } onChange={ this.handleChange.bind(this) } />	
									<span className="checkmark"></span>
								</label>
								<label className="checkbox-wrapper">
									H&M
									<input type="checkbox" checked={ true } onChange={ this.handleChange.bind(this) } />	
									<span className="checkmark"></span>
								</label>
								<label className="checkbox-wrapper">
									Nike
									<input type="checkbox" checked={ true } onChange={ this.handleChange.bind(this) } />	
									<span className="checkmark"></span>
								</label>
								<label className="checkbox-wrapper">
									Auchan
									<input type="checkbox" checked={ true } onChange={ this.handleChange.bind(this) } />
									<span className="checkmark"></span>
								</label>						
							</div>
						</div>
						<div className="modal-body">
							<div className="modal-data">
								<img src={ invoice } alt="" />
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary simple-button">Download</button>
							<button type="button" className="btn btn-primary simple-button">Send</button>
						</div>
					</div>
				</div>
			</div>	
		);
	}
}
