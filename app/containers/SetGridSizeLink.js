import { connect } from 'react-redux'
import { setGridSize } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.size === state.size
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setGridSize(ownProps.size, parseInt(ownProps.width), parseInt(ownProps.height)))
    }
  }
}

const SetGridSizeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SetGridSizeLink
