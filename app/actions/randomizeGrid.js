import emptyGrid from './emptyGrid'

// Given: dimensions r and c
// Returns: random (0 or 1) array of dimensions r*c
// Note: cellDensity represents likelihood of 1 appearing

function randomizeGrid(r,c) {

  const cellDensity = 0.25

  var grid = emptyGrid(r,c)
  grid = grid.map(function(row) {
    return row.map(function() {
      if (Math.random() < cellDensity) {
        return 1
      } else {
        return 0
      }
    })
  })
  return grid
}

export default randomizeGrid
