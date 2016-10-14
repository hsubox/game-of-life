import React from 'react'
import Grid from './Grid'
import GenerationContainer from '../containers/GenerationContainer'
import RunSimulationControls from './RunSimulationControls'
import BoardSizeControls from './BoardSizeControls'
import SpeedControls from './SpeedControls'
import NextGenerationContainer from '../containers/NextGenerationContainer'

const App = () => (
  <div>
    <Grid />
    <GenerationContainer />
    <RunSimulationControls />
    <BoardSizeControls />
    <SpeedControls />
    <NextGenerationContainer />
  </div>
)

export default App
