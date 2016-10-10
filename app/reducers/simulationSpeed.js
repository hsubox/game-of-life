const simulationSpeed = (state = 'FAST', action) => {
  switch (action.type) {
    case 'SET_SPEED':
      return action.speed
    default:
      return state
  }
}

export default simulationSpeed
