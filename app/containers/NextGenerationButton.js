import {connect} from 'react-redux';
import {incrementTime} from '../actions';
import Button from '../components/Button';

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(incrementTime());
		},
	};
};

const NextGenerationButton = connect(
  null,
  mapDispatchToProps
)(Button);

export default NextGenerationButton;
