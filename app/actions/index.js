export const setSpeed = (speed) => {
  return {
    type: 'SET_SPEED',
    speed
  }
}

export const setBoardSize = (size, width, height) => {
  return {
    type: 'SET_BOARD_SIZE',
    size,
    width,
    height
  }
}

export const changeSimulationStatus = (status) => {
  return {
    type: 'CHANGE_SIMULATION_STATUS',
    status
  }
}
