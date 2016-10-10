import { combineReducers } from 'redux'
import simulationSize from './simulationSize'
import simulationSpeed from './simulationSpeed'

const gameOfLifeApp = combineReducers({
  simulationSize,
  simulationSpeed
})

export default gameOfLifeApp
