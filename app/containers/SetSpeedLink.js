import { connect } from 'react-redux'
import { setSpeed } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.speed === state.simulationSpeed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSpeed(ownProps.speed))
    }
  }
}

const SetSpeedLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SetSpeedLink
