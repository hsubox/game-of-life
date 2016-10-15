import { connect } from 'react-redux'
import { setSpeed } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.speed === state.speed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSpeed(ownProps.speed, ownProps.interval))
    }
  }
}

const SetSpeedLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SetSpeedLink
