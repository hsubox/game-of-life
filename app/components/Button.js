import React, { PropTypes } from 'react'

const Button = ({ children, onClick }) => {
	return(
		<a href="#"
    	onClick={e => {
      	e.preventDefault()
      	onClick()
      }}
		>
			{children}
		</a>
	)
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
