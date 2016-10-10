const simulationGrid = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_CELL_STATUS':
      return state.map(c =>
        cell(c, action)
      )
    default:
      return state
  }
}

export default simulationGrid
