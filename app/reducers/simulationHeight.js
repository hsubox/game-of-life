const simulationHeight = (state = 30, action) => {
  switch (action.type) {
    case 'SET_BOARD_SIZE':
      switch(action.size) {
        case 'S':
          return 30
        case 'M':
          return 50
        case 'L':
          return 80
      }
    default:
      return state
  }
}

export default simulationHeight
