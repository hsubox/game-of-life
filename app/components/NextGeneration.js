import React, { PropTypes } from 'react'

const NextGeneration = ({onClick}) => {
	return(
		<p>
			<a href="#"
	       onClick={e => {
	         e.preventDefault()
	         onClick()
	       }}
	    >
		nextGeneration
	</a></p>
	)
}

export default NextGeneration