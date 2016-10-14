import { connect } from 'react-redux'
import GenerationDisplay from '../components/GenerationDisplay'

const mapStateToProps = (state, ownProps) => {
  return {
    generation: state.simulationTime
  }
}

const GenerationContainer = connect(
  mapStateToProps
)(GenerationDisplay)

export default GenerationContainer
