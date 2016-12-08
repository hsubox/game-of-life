// Given: i, j, and grid of dimensions r and c
// Returns: copy of grid of dimensions r and c, where grid[i,j] == 0 or 1 (opposite of what it was)
// grid itself is not actually modified

function modifyCell(i, j, grid) {
  if (i < 0 || i > grid.length-1 || j < 0 || j > grid[0].length-1) {
    throw new Error('outside grid dimensions');
  }
  let gridCopy = grid.map(function(row) {
    return row.slice();
  });
  gridCopy[i][j] = (gridCopy[i][j] ? 0 : 1);
  return gridCopy;
}

export default modifyCell;
