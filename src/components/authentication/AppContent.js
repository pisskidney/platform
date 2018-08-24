import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'
import {Redirect, Route, Switch} from 'react-router-dom';

import '../../css/main.css';
import Sidebar from '../sidebar';
import TopBar from '../topbar';
import Content from '../content';
import Pickup from '../pickup';
import Training from '../training';
import ReportModal from '../modals/reportModal';
import AddEventModal from '../modals/addEventModal';

export class AppContent extends Component {
    render() {
        return (
            <div id='container'>
                <ReactTooltip effect='solid' delayShow={50} className='react-tooltip'/>
                <ReportModal/>
                <AddEventModal/>
                <Sidebar/>
                <TopBar/>
                <div id='content' className='container-fluid'>
                    <div className='row'>
                        <div id='content-inside' className='col'>
                            <Switch>
                                <Route exact path='/' component={Content}/>
                                <Route path='/pickup' component={Pickup}/>
                                <Route path='/training' component={Training}/>
                                <Redirect from='*' to='/'/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}