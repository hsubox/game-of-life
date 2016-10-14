// given dimensions r and c
// generates the array (of size r*c) with randomly initialized board

function initializeBoard(r,c) {
  var row = Array(c).fill(0));
  var board = Array(r).fill(row.slice());

  board = board.map(function(row) {
    row.map(function(cell) {
      cell = Math.floor(Math.random()*2);
    })
  });

  console.log(board);
  return board;
}

export default initializeBoard
