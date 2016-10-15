import React from 'react'
import SetSpeedToggle from '../containers/SetSpeedToggle'

const SpeedControls = () => (
  <p>
    Sim Speed:
    {" "}
    <SetSpeedToggle speed="SLOW" interval="3000">
      Slow
    </SetSpeedToggle>
    {", "}
    <SetSpeedToggle speed="MED" interval="1500">
      Medium
    </SetSpeedToggle>
    {", "}
    <SetSpeedToggle speed="FAST" interval="700">
      Fast
    </SetSpeedToggle>
  </p>
)

export default SpeedControls
