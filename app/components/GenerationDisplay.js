import React, { PropTypes } from 'react'

const GenerationDisplay = ({generation}) => {
  return <p>Generation: {generation}</p>
}

GenerationDisplay.propTypes = {
  generation: PropTypes.number.isRequired
}

export default GenerationDisplay
