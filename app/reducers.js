import isGridEmpty from './actions/isGridEmpty'
import emptyGrid from './actions/emptyGrid'
import randomizeGrid from './actions/randomizeGrid'
import nextGenerationGrid from './actions/nextGenerationGrid'
import modifyCell from './actions/modifyCell'

const initialState = {
	time: 0,
	size: 'S',
	width: 50,
	height: 30,
	grid: [[0]],
	speed: 'FAST',
	interval: 1000,
	status: 'RUN'
}

function update(state, mutations) {
	return Object.assign({}, state, mutations);
}

function reducers(state = initialState, action) {
	switch (action.type) {
			case 'CLEAR_GRID':
				return update(state, {
					grid: emptyGrid(state.height, state.width),
					time: 0
				});
    	case 'SET_GRID_SIZE':
    		return update(state, {
					size: action.size,
					height: action.height,
					width: action.width,
					grid: randomizeGrid(action.height, action.width),
					time: 0
				});
			case 'RANDOMIZE_GRID':
				return update(state, {
					grid: randomizeGrid(state.height, state.width)
				});
			case 'MODIFY_CELL':
				return update(state, {
					grid: modifyCell(action.i, action.j, state.grid)
				});
    	case 'SET_SPEED':
    		return update(state, {
					speed: action.speed,
					interval: action.interval
				});
    	case 'CHANGE_STATUS':
    		return update(state, {
					status: action.status
				});
    	case 'INCREMENT_TIME':
				console.log(new Date());
    		return update(state, {
					time: state.time + 1,
					grid: nextGenerationGrid(state.grid),
					status: (state.status == "RUN" && isGridEmpty(state.grid)) ? "PAUSE" : state.status
				});
    	default: {
    		return state;
    	}
  }
}

export default reducers;
