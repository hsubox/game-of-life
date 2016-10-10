import { connect } from 'react-redux'
import { changeSimulationStatus } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.status === state.simulationStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeSimulationStatus(ownProps.status))
    }
  }
}

const RunSimulationLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default RunSimulationLink
