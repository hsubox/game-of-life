import React, { PropTypes } from 'react'
import Cell from './Cell'

const Grid = () => (
  <ul>
    <Cell />
  </ul>
)

/*TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}*/

export default Grid
