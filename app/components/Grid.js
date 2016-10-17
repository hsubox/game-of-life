import React, { PropTypes } from 'react'

var cleared = true; // this prevents multiple timers from being triggered

class Grid extends React.Component {
  componentWillMount() {
    this.props.randomizeGrid();
  }
  componentDidUpdate() {
    if (cleared == true) {
      var x = setTimeout(() => {
        cleared = true;
        if (this.props.status == "RUN") {
          this.props.incrementTime();
        }
      }, this.props.interval)
      cleared = false;
    }
  }
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
      var alive = this.props.grid[i][j];
      cols.push(
        <td key={[i,j]} data-ij={[i,j]} className={alive ? "cell alive" : "cell"} onClick={this.props.onCellClick.bind(undefined,i,j)}></td>
      );
    }
    return <tr key={[i]}>{cols}</tr>
  }
  render() {
    return (
      <div className="grid-container">
        <table id="grid">
          {this.displayRows(this.props.height,this.props.width)}
        </table>
      </div>
    )
  }
}

Grid.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  grid: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  interval: PropTypes.number.isRequired,
  randomizeGrid: PropTypes.func.isRequired,
  incrementTime: PropTypes.func.isRequired
}

export default Grid
