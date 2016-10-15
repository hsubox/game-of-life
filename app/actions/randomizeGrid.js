import emptyGrid from './emptyGrid'

// given dimensions r and c
// generates the array (of size r*c) with randomly initialized grid

function randomizeGrid(r,c) {

  const cellDensity = 0.25;

  var grid = emptyGrid(r,c);

  grid = grid.map(function(row) {
    return row.map(function() {
      if (Math.random() < cellDensity) {
        return 1
      } else {
        return 0
      }
    })
  });

  return grid;
}

export default randomizeGrid
