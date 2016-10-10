import React from 'react'
import Grid from './Grid'
import RunSimulationControls from './RunSimulationControls'
import BoardSizeControls from './BoardSizeControls'
import SpeedControls from './SpeedControls'
// import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Grid />
    <RunSimulationControls />
    <BoardSizeControls />
    <SpeedControls />
  </div>
)

export default App
