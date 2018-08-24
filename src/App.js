import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import { BrowserRouter as Router, Route} from "react-router-dom";

import './css/main.css';
import Sidebar from './components/sidebar';
import TopBar from './components/topbar';
import Content from './components/content';
import Pickup from './components/pickup';
import Training from './components/training';
import ReportModal from './components/modals/reportModal';
import AddEventModal from './components/modals/addEventModal';

//store.dispatch({type: 'INC', payload: 1});
/*
store.subscribe(() => {
	console.log(store.getState());
});
*/


class App extends Component {
	render() {
		return (
			<Router>
				<div id="container">
					<ReactTooltip effect='solid' delayShow={50} className="react-tooltip" />
					<ReportModal />
					<AddEventModal />
					<Sidebar />				
					<TopBar />					
					<div id="content" className="container-fluid">
						<div className="row">
							<div id="content-inside" className="col">							
								<Route exact path="/" component={ Content } />
								<Route path="/pickup" component={ Pickup } />
								<Route path="/training" component={ Training } />								
							</div>
						</div>
					</div>					
				</div>
			</Router>
		);
	}
}

export default App;
