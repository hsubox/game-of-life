export const setSpeed = (speed) => {
  return {
    type: 'SET_SPEED',
    speed
  }
}

export const setGridSize = (size) => {
  return {
    type: 'SET_GRID_SIZE',
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
