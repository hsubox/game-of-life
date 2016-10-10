import React from 'react'
import SetSpeedLink from '../containers/SetSpeedLink'

const SpeedControls = () => (
  <p>
    Sim Speed:
    {" "}
    <SetSpeedLink speed="SIM_SPEED_SLOW">
      Slow
    </SetSpeedLink>
    {", "}
    <SetSpeedLink speed="SIM_SPEED_MED">
      Medium
    </SetSpeedLink>
    {", "}
    <SetSpeedLink speed="SIM_SPEED_FAST">
      Fast
    </SetSpeedLink>
  </p>
)

export default SpeedControls
