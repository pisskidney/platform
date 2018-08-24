import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import MdDashboard from 'react-icons/lib/md/dashboard';
import MdExplore from 'react-icons/lib/md/explore';
import MdCloudCircle from 'react-icons/lib/md/cloud-circle';
import MdSettings from 'react-icons/lib/md/settings';
import MdHelpOutline from 'react-icons/lib/md/help-outline';
import MdCheckCircle from 'react-icons/lib/md/check-circle';
//import logo from '../images/logo.png';
import logoOrange from '../images/logo-orange.png';


export default class Sidebar extends Component {
	render() {		
		return (
			<div id="sidebar" className="sticky-top">
				<nav className="nav flex-lg-column">
					<div className="nav-link logo text-center">
						<img src={logoOrange} alt="" />
					</div>				
					<NavLink exact={true} className="nav-link" activeClassName="active" to="/" data-tip="Dashboard"><MdDashboard /></NavLink>
					<NavLink className="nav-link" activeClassName="active" to="/pickup" data-tip="Pickup"><MdExplore /></NavLink>
					<NavLink className="nav-link" activeClassName="active" to="/training" data-tip="Sustainability training"><MdCloudCircle /></NavLink>
				</nav>
				<nav className="nav flex-lg-column extra-menu">
					<button className="nav-link" data-tip="Settings"><MdSettings /></button>
					<button className="nav-link" data-tip="Help"><MdHelpOutline /></button>
					<button className="nav-link extra-menu-status hidden-md" data-tip="Status: OK!"><MdCheckCircle /></button>
				</nav>
			</div>
		);
	}
}
