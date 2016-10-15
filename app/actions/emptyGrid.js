// Given: dimensions r and c
// Returns: generates the array (of size r*c) filled with 0's

function emptyGrid(r,c) {
  var row = Array(c).fill(0)
  var grid = Array(r).fill(row.slice())
  return grid
}

export default emptyGrid
