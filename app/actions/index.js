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

export const changeStatus = (status) => {
  return {
    type: 'CHANGE_STATUS',
    status
  }
}
