import React from 'react';
import NextGenerationButton from '../containers/NextGenerationButton';
import RunSimulationToggle from '../containers/RunSimulationToggle';

const RunSimulationControls = () => (
  <p className='run-simulation-controls'>
    <NextGenerationButton>
      Next
    </NextGenerationButton>
    {', '}
    <RunSimulationToggle status='RUN'>
      Run
    </RunSimulationToggle>
    {', '}
    <RunSimulationToggle status='PAUSE'>
      Pause
    </RunSimulationToggle>
    {', '}
    <RunSimulationToggle status='CLEAR'>
      Clear
    </RunSimulationToggle>
  </p>
);

export default RunSimulationControls;
