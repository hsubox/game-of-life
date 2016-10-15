import { connect } from 'react-redux'
import { clearGrid, changeStatus } from '../actions'
import Toggle from '../components/Toggle'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.status === state.status
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.status == 'CLEAR') {
    return {
      onClick: () => {
        dispatch(clearGrid())
      }
    }
  } else {
    return {
      onClick: () => {
        dispatch(changeStatus(ownProps.status))
      }
    }
  }
}

const RunSimulationToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle)

export default RunSimulationToggle
