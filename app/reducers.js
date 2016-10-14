const initialState = {
	time: 0,
	grid: [[]],
	height: 30,
	size: 'S',
	speed: 'FAST',
	status: 'RUN',
	width: 50,
}

function update(state, mutations) {
	return Object.assign({}, state, mutations);
}

function reducers(state = initialState, action) {
	switch (action.type) {
    	case 'SET_BOARD_SIZE':
      		return update(state, {size: action.size });

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