import { connect } from 'react-redux'
import NextGeneration from '../components/NextGeneration'
import { incrementTime } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(incrementTime());
		}
	}
}

const NextGenerationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NextGeneration)

export default NextGenerationContainer