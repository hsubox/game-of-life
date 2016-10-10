const simulationSpeed = (state = 'SIM_SPEED_FAST', action) => {
  switch (action.type) {
    case 'SET_SPEED':
      return action.speed
    default:
      return state
  }
}

export default simulationSpeed
