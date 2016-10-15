import React, { PropTypes } from 'react'

const GenerationDisplay = ({time}) => {
  return <p>Generation: {time}</p>
}

GenerationDisplay.propTypes = {
  time: PropTypes.number.isRequired
}

export default GenerationDisplay
