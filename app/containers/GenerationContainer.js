import { connect } from 'react-redux'
import GenerationDisplay from '../components/GenerationDisplay'


const mapStateToProps = (state, ownProps) => {
  return {
    time: state.time
  }
}

const GenerationContainer = connect(
  mapStateToProps
)(GenerationDisplay)

export default GenerationContainer
