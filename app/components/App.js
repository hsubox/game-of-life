import React from 'react'
import GridContainer from '../containers/GridContainer'
import GenerationContainer from '../containers/GenerationContainer'
import RunSimulationControls from './RunSimulationControls'
import GridSizeControls from './GridSizeControls'
import SpeedControls from './SpeedControls'

const App = () => (
  <div>
    <GridContainer />
    <GenerationContainer />
    <RunSimulationControls />
    <GridSizeControls />
    <SpeedControls />
  </div>
)

export default App
