const simulationStatus = (state = 'RUN', action) => {
  switch (action.type) {
    case 'CHANGE_SIMULATION_STATUS':
      return action.status
    default:
      return state
  }
}

export default simulationStatus
