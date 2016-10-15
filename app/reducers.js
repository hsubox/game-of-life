import randomizeGrid from './actions/randomizeGrid'

const initialState = {
	time: 0,
	size: 'S',
	height: 30,
	width: 50,
	grid: [[0]],
	speed: 'FAST',
	status: 'RUN'
}

function update(state, mutations) {
	return Object.assign({}, state, mutations);
}

function reducers(state = initialState, action) {
	switch (action.type) {
    	case 'SET_GRID_SIZE':
      		return update(state, {size: action.size });
			case 'RANDOMIZE_GRID':
					return update(state, {grid: randomizeGrid(state.height, state.width)});
			case 'SET_GRID':
					return update(state, {grid: action.grid});
    	case 'SET_SPEED':
    		return update(state, {speed: action.speed});
    	case 'CHANGE_STATUS':
    		return update(state, {status: action.status});
    	case 'INCREMENT_TIME':
    		return update(state, {time: state.time + 1});
    	default: {
    		return state;
    	}
  }
}

export default reducers;
