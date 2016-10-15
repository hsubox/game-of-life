// given dimensions r and c
// generates the array (of size r*c) with randomly initialized grid

function randomizeGrid(r,c) {
  var row = Array(c).fill(0);
  var grid = Array(r).fill(row.slice());

  grid = grid.map(function(row) {
    return row.map(function(cell) {
      return cell = Math.floor(Math.random()*2);
    })
  });

  return grid;
}

export default randomizeGrid
