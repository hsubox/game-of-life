import emptyGrid from './emptyGrid';

// Given: 2-d grid
// uses the Conway's Game of Life rules
// Returns: 2-d grid representing the next generation
// Note: grid does not get modified

function nextGenerationGrid(cells) {
  const r = cells.length;
  const c = cells[0].length;

  const nextGeneration = cells.map(function(row, i) {
    return row.map(function(cell, j) {
      const n1 = (i == 0 || j == 0 ? 0 : cells[i-1][j-1]);
      const n2 = (i == 0 ? 0 : cells[i-1][j]);
      const n3 = (i == 0 || j == c-1 ? 0 : cells[i-1][j+1]);
      const n4 = (j == 0 ? 0 : cells[i][j-1]);
      const n5 = (j == c-1 ? 0 : cells[i][j+1]);
      const n6 = (i == r-1 || j == 0 ? 0 : cells[i+1][j-1]);
      const n7 = (i == r-1 ? 0 : cells[i+1][j]);
      const n8 = (i == r-1 || j == c-1 ? 0 : cells[i+1][j+1]);
      const n = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8;

      if (n == 3 || (n == 2 && cells[i][j] == 1)) {
        return 1; // alive
      }
      return 0; // dead
    });
  });

  return nextGeneration;
}

export default nextGenerationGrid;
