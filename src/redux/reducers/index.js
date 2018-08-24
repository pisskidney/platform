import { combineReducers } from 'redux';
import binReducer from './binReducer';

export default combineReducers({
	bins: binReducer,
});