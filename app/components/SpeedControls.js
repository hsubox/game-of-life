import React from 'react'
import SetSpeedLink from '../containers/SetSpeedLink'

const SpeedControls = () => (
  <p>
    Sim Speed:
    {" "}
    <SetSpeedLink speed="SLOW">
      Slow
    </SetSpeedLink>
    {", "}
    <SetSpeedLink speed="MED">
      Medium
    </SetSpeedLink>
    {", "}
    <SetSpeedLink speed="FAST">
      Fast
    </SetSpeedLink>
  </p>
)

export default SpeedControls
