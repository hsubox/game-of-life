import React from 'react'
import Grid from './Grid'
import GenerationContainer from '../containers/GenerationContainer'
import RunSimulationControls from './RunSimulationControls'
import BoardSizeControls from './BoardSizeControls'
import SpeedControls from './SpeedControls'

const App = () => (
  <div>
    <Grid />
    <GenerationContainer />
    <RunSimulationControls />
    <BoardSizeControls />
    <SpeedControls />
  </div>
)

export default App
