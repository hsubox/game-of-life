// Given: dimensions r and c
// Returns: generates the array (of size r*c) filled with 0's

function emptyGrid(r, c) {
  const row = Array(c).fill(0);
  const grid = Array(r).fill(row.slice());
  return grid;
}

export default emptyGrid;
