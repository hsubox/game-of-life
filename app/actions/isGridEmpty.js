// checks if 2-d grid is empty (all 0's)
// returns true; otherwise false

function isGridEmpty(grid) {
  grid.every((r) => {
    r.every((cell) => {
      return cell = "0"
    })
  })
}

export default isGridEmpty
