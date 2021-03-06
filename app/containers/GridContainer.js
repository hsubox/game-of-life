import {connect} from 'react-redux';
import {modifyCell, randomizeGrid, incrementTime} from '../actions/';
import Grid from '../components/Grid';

const mapStateToProps = (state) => {
  return {
    height: state.grid.length,
    width: state.grid[0].length,
    grid: state.grid,
    status: state.status,
    interval: state.interval,
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
    randomizeGrid: () => {
			dispatch(randomizeGrid());
    },
    incrementTime: () => {
			dispatch(incrementTime());
    },
    onCellClick: (i, j) => {
      dispatch(modifyCell(i, j));
    },
	};
};

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default GridContainer;
