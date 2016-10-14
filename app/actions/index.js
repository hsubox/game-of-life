export const setSpeed = (speed) => {
  return {
    type: 'SET_SPEED',
    speed
  }
}

export const setBoardSize = (size) => {
  return {
    type: 'SET_BOARD_SIZE',
    size
  }
}

export const changeStatus = (status) => {
  return {
    type: 'CHANGE_STATUS',
    status
  }
}

export const incrementTime = () => {
  return {
    type: 'INCREMENT_TIME'
  }
}
