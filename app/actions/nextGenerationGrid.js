import emptyGrid from './emptyGrid'

// given a 2-d grid
// uses the Conway's Game of Life rules
// generates resulting 2-d grid

function nextGenerationGrid(cells) {
  // cells array does not get modified

  const r = cells.length;
  const c = cells[0].length;

  const next_generation = cells.map(function(row, i) {
    return row.map(function(cell, j) {
      var n1 = (i == 0 || j == 0 ? 0 : cells[i-1][j-1]);
      var n2 = (i == 0 ? 0 : cells[i-1][j]);
      var n3 = (i == 0 || j == c-1 ? 0 : cells[i-1][j+1]);
      var n4 = (j == 0 ? 0 : cells[i][j-1]);
      var n5 = (j == c-1 ? 0 : cells[i][j+1]);
      var n6 = (i == r-1 || j == 0 ? 0 : cells[i+1][j-1]);
      var n7 = (i == r-1 ? 0 : cells[i+1][j]);
      var n8 = (i == r-1 || j == c-1 ? 0 : cells[i+1][j+1]);
      var n_total = n1+n2+n3+n4+n5+n6+n7+n8;

      if (n_total == 3 || (n_total == 2 && cells[i][j] == 1)) {
        return 1
      }
      else {
        return 0
      }
    })
  });

  return next_generation;
}

export default nextGenerationGrid
