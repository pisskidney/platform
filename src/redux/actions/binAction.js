import { FETCH_BIN_DATA_WEEK } from '../actions/types';


export function fetchBins() {
	console.log('fetching...');
	return function(dispatch) {
		fetch('https://demo4908093.mockable.io/')
		.then(res => res.json())
		.then(bins => dispatch({
			type: FETCH_BIN_DATA_WEEK,
			payload: bins.bins
		}));
	}	
}