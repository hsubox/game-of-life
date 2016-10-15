import React from 'react'
import SetSpeedLink from '../containers/SetSpeedLink'

const SpeedControls = () => (
  <p>
    Sim Speed:
    {" "}
    <SetSpeedLink speed="SLOW" interval="3000">
      Slow
    </SetSpeedLink>
    {", "}
    <SetSpeedLink speed="MED" interval="1500">
      Medium
    </SetSpeedLink>
    {", "}
    <SetSpeedLink speed="FAST" interval="700">
      Fast
    </SetSpeedLink>
  </p>
)

export default SpeedControls
