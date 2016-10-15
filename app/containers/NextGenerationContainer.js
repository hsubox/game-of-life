import { connect } from 'react-redux'
import NextGeneration from '../components/NextGeneration'
import { incrementTime } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(incrementTime());
		}
	}
}

const NextGenerationContainer = connect(
  null,
  mapDispatchToProps
)(NextGeneration)

export default NextGenerationContainer
