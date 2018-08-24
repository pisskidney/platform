import React, { Component } from 'react';


export default class AddEventModal extends Component {
	handleChange() {
		
	}
	
	render() {
		return (	
			<div className="modal fade" id="addEventModal" tabIndex="-1" role="dialog" aria-labelledby="addEventModal" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add event</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="modal-data">
								<div id="addEventMap"></div>
								<div className="form-group">
									<input type="text" id="inputPassword1" placeholder="Event name" className="form-control" aria-describedby="passwordHelpInline" />
								</div>
								<div className="form-group">
									<input type="datetime-local" id="inputPassword2" placeholder="Start date" className="form-control datetime-local" aria-describedby="passwordHelpInline" />
								</div>
								<div className="form-group">
									<input type="text" id="inputPassword3" placeholder="Duration" className="form-control" aria-describedby="passwordHelpInline" />
								</div>
								<p id="encoded-polyline"></p>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary simple-button">Save</button>
						</div>
					</div>
				</div>
			</div>	
		);
	}
}
