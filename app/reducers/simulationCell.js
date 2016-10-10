const simulationCell = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CELL_STATUS':
      return {
        id: action.id,
        alive: action.alive
      }
    default:
      return state
  }
}

export default simulationCell
