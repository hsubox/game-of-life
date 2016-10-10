import { connect } from 'react-redux'
import { setBoardSize } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.size === state.simulationSize
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setBoardSize(ownProps.size))
    }
  }
}

const SetBoardSizeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SetBoardSizeLink
