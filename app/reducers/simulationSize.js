const simulationSize = (state = 'S', action) => {
  switch (action.type) {
    case 'SET_BOARD_SIZE':
      return action.size
    default:
      return state
  }
}

export default simulationSize
