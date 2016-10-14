import React, { PropTypes } from 'react'

const Cell = ({posX, posY}) => (
  <td className="cell">
    {posX}_{posY}
  </td>
)

Cell.propTypes = {
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired
}

export default Cell
