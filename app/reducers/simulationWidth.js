const simulationSize = (state = 50, action) => {
  switch (action.type) {
    case 'SET_BOARD_SIZE':
      switch(action.size) {
        case 'S':
          return 50
        case 'M':
          return 70
        case 'L':
          return 100
      }
    default:
      return state
  }
}

export default simulationSize
