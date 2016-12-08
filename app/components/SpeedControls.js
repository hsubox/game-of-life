import React from 'react';
import SetSpeedToggle from '../containers/SetSpeedToggle';

const SpeedControls = () => (
  <p className='speed-controls'>
    <strong>Speed:</strong>
    {' '}
    <SetSpeedToggle speed='SLOW' interval='5000'>
      Slow
    </SetSpeedToggle>
    {', '}
    <SetSpeedToggle speed='MED' interval='3000'>
      Medium
    </SetSpeedToggle>
    {', '}
    <SetSpeedToggle speed='FAST' interval='1500'>
      Fast
    </SetSpeedToggle>
  </p>
);

export default SpeedControls;
