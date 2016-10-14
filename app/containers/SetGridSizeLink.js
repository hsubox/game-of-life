import { connect } from 'react-redux'
import { setGridSize } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.size === state.simulationSize
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setGridSize(ownProps.size))
    }
  }
}

const SetGridSizeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SetGridSizeLink
