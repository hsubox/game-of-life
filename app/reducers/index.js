import { combineReducers } from 'redux'
import simulationTime from './simulationTime'
import simulationSize from './simulationSize'
import simulationWidth from './simulationWidth'
import simulationHeight from './simulationHeight'
import simulationSpeed from './simulationSpeed'
import simulationStatus from './simulationStatus'
import simulationGrid from './simulationGrid'
import simulationCell from './simulationCell'

const gameOfLifeApp = combineReducers({
  simulationTime,
  simulationSize,
  simulationWidth,
  simulationHeight,
  simulationSpeed,
  simulationStatus,
  simulationGrid,
  simulationCell
})

export default gameOfLifeApp
