// Given: 2-d grid
// checks if 2-d grid is empty (all 0's) -> true
// Returns: boolean

function isGridEmpty(grid) {
  return grid.every((r) => {
    return r.every((cell) => {
      return cell == "0"
    })
  })
}

export default isGridEmpty
