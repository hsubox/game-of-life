import { connect } from 'react-redux'
import Grid from '../components/Grid'

const mapStateToProps = (state, ownProps) => {
  return {
    height: state.height,
    width: state.width
  }
}

const GridContainer = connect(
  mapStateToProps
)(Grid)

export default GridContainer
