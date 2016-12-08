import React, {PropTypes} from 'react';

const GenerationDisplay = ({time}) => {
  return (
    <p className="generation-display">
      <strong>Generation:</strong> {time}
    </p>
  );
};

GenerationDisplay.propTypes = {
  time: PropTypes.number.isRequired,
};

export default GenerationDisplay;
