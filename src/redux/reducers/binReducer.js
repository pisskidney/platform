import { FETCH_BIN_DATA_WEEK, TOGGLE_LINE_WEEK, TOGGLE_GRID_MAIN } from '../actions/types';


const initialState = {
	bins: [],
	linesToggleWeek: {},
	binsSettings: {}
};


function formatLinesInitial(data) {
	var linesToggle = {};
	for (var i = 0; i < data.length; i++) {
		linesToggle[data[i].id] = {};
		for (var j = 0; j < data[i].types.length; j++) {
			linesToggle[data[i].id][data[i].types[j]] = true;
		}
	}
	return linesToggle;
}


const binsReducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_BIN_DATA_WEEK:
			var nextState = {
				...state,
				bins: action.payload,
				linesToggleWeek: formatLinesInitial(action.payload)
			};			
			for (var i = 0; i < nextState.bins.length; i++) {
				nextState.binsSettings[nextState.bins[i].id] = {
					mainGrid: true,
					test: false
				};
			}		
			return nextState;
			
		case TOGGLE_LINE_WEEK:
			const linesToggle = {
				...state.linesToggleWeek
			};		
			linesToggle[action.payload.room] = {
				...state.linesToggleWeek[action.payload.room]
			};
			linesToggle[action.payload.room][action.payload.type] = !linesToggle[action.payload.room][action.payload.type];
			return {
				...state,
				linesToggleWeek: linesToggle
			}
			
		case TOGGLE_GRID_MAIN:
			var nextState = {
				...state,
			}
			nextState['binsSettings'][action.payload.room]['mainGrid'] = !nextState['binsSettings'][action.payload.room]['mainGrid'];
			return nextState;

		default:
			return state	
	}
}

export default binsReducer;