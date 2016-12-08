import {connect} from 'react-redux';
import {setSpeed} from '../actions';
import Toggle from '../components/Toggle';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.speed === state.speed,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSpeed(ownProps.speed, parseInt(ownProps.interval)));
    },
  };
};

const SetSpeedToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);

export default SetSpeedToggle;
