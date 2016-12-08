import emptyGrid from './emptyGrid';

// Given: dimensions r and c
// Returns: random (0 or 1) array of dimensions r*c
// Note: cellDensity represents likelihood of 1 appearing

function randomizeGrid(r, c) {
  const cellDensity = 0.25;
  let grid = emptyGrid(r, c).map(function(row) {
    return row.map(function() {
      return (Math.random() < cellDensity) ? 1 : 0;
    });
  });
  return grid;
}

export default randomizeGrid;
