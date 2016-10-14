import React from 'react'
import GridContainer from '../containers/GridContainer'
import GenerationContainer from '../containers/GenerationContainer'
import RunSimulationControls from './RunSimulationControls'
import BoardSizeControls from './BoardSizeControls'
import SpeedControls from './SpeedControls'
import NextGenerationContainer from '../containers/NextGenerationContainer'

const App = () => (
  <div>
    <GridContainer />
    <GenerationContainer />
    <RunSimulationControls />
    <BoardSizeControls />
    <SpeedControls />
    <NextGenerationContainer />
  </div>
)

export default App
