import { connect } from 'react-redux'
import Grid from '../components/Grid'
import { setGrid, randomizeGrid } from '../actions/'

const mapStateToProps = (state) => {
  return {
    height: state.grid.length,
    width: state.grid[0].length,
    grid: state.grid
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
    randomizeGrid: () => {
			dispatch(randomizeGrid());
    }
	}
}

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GridContainer
