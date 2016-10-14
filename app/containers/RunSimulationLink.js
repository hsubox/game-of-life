import { connect } from 'react-redux'
import { changeStatus } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.status === state.status
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeStatus(ownProps.status))
    }
  }
}

const RunSimulationLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default RunSimulationLink
