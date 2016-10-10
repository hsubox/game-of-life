import React from 'react'
import RunSimulationLink from '../containers/RunSimulationLink'

const RunSimulationControls = () => (
  <p>
    {" "}
    <RunSimulationLink status="RUN">
      Run
    </RunSimulationLink>
    {", "}
    <RunSimulationLink status="PAUSE">
      Pause
    </RunSimulationLink>
    {", "}
    <RunSimulationLink status="CLEAR">
      Clear
    </RunSimulationLink>
  </p>
)

export default RunSimulationControls
