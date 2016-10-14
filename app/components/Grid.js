import React, { PropTypes } from 'react'
import Cell from './Cell'

class Grid extends React.Component {
  displayRows(r,c) {
    var rows = [];
    for (var i=0; i<r; i++) {
        rows.push(this.displayCells(i, c));
    }
    return <tbody>{rows}</tbody>
  }
  displayCells(i,c) {
    var cols = [];
    for (var j=0; j<c; j++) {
        cols.push(<Cell key={[i,j]} posX={i} posY={j}/>);
    }
    return <tr key={[i]}>{cols}</tr>
  }
  render() {
    return (
      <table>
        {this.displayRows(this.props.height,this.props.width)}
      </table>
    )
  }
}

Grid.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Grid
