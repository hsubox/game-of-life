import { connect } from 'react-redux'
import { setGridSize } from '../actions'
import Toggle from '../components/Toggle'

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

const SetGridSizeToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle)

export default SetGridSizeToggle
