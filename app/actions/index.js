export const clearGrid = () => {
  return {
    type: 'CLEAR_GRID',
  };
};

export const setGridSize = (size, width, height) => {
  return {
    type: 'SET_GRID_SIZE',
    size,
    width,
    height,
  };
};

export const randomizeGrid = () => {
  return {
    type: 'RANDOMIZE_GRID',
  };
};

export const modifyCell = (i, j) => {
  return {
    type: 'MODIFY_CELL',
    i,
    j,
  };
};

export const setSpeed = (speed, interval) => {
  return {
    type: 'SET_SPEED',
    speed,
    interval,
  };
};

export const changeStatus = (status) => {
  return {
    type: 'CHANGE_STATUS',
    status,
  };
};

export const incrementTime = () => {
  return {
    type: 'INCREMENT_TIME',
  };
};
