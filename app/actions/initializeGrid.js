// given dimensions r and c
// generates the array (of size r*c) with randomly initialized grid

function initializeGrid(r,c) {
  var row = Array(c).fill(0));
  var grid = Array(r).fill(row.slice());

  grid = grid.map(function(row) {
    row.map(function(cell) {
      cell = Math.floor(Math.random()*2);
    })
  });

  console.log(grid);
  return grid;
}

export default initializeGrid
