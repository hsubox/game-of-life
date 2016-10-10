import React, { PropTypes } from 'react'
import Cell from './Cell'

const Grid = () => (
  <table>
    <tbody>
      <tr><Cell /><Cell /><Cell /><Cell /><Cell /></tr>
      <tr><Cell /><Cell /><Cell /><Cell /><Cell /></tr>
      <tr><Cell /><Cell /><Cell /><Cell /><Cell /></tr>
      <tr><Cell /><Cell /><Cell /><Cell /><Cell /></tr>
      <tr><Cell /><Cell /><Cell /><Cell /><Cell /></tr>
    </tbody>
  </table>
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
