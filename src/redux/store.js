import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {};
const middleware = [thunk];

export default createStore(reducer, initialState, applyMiddleware(...middleware));