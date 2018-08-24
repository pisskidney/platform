import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import './css/main.css';
import {Login, AppContent, PrivateRoute} from './components/authentication';

//store.dispatch({type: 'INC', payload: 1});
/*
store.subscribe(() => {
	console.log(store.getState());
});
*/

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <PrivateRoute path='/' component={AppContent}/>
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
