const simulationTime = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_TIME':
      return state+1
    default:
      return state
  }
}

export default simulationTime
