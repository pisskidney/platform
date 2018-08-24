import React, { Component } from 'react';
import { MdInfoOutline, MdRefresh, MdMenu }  from 'react-icons/lib/md';


export default class TopBar extends Component {
	render() {
		return (
			<div id="topbar" className="container-fluid sticky-top">
				<div className="row justify-content-between">
					<div className="col-md-6">
						<div className="topbar-section">Dashboard</div>
						<div className="leftmenu">
							<input type="text" className="topbar-title" spellCheck="false" defaultValue="OakRiver Mall Dashboard" />
							<button data-tip="<p>Owner: Richard Feyman</p><p>Created: 27 days ago</p>" data-place="bottom" data-html={true} ><MdInfoOutline /></button>
							<button data-tip="Refresh" data-place="bottom" data-html={true}><MdRefresh /></button>
						</div>
					</div>
					<div className="col-md-6 align-self-end text-right rightmenu">
						<button><MdMenu /></button>
						<button className="rightmenu-main-button" type="button" data-toggle="modal" data-target="#reportModal">Generate Report</button>
					</div>				
				</div>
			</div>	
		);
	}
}
