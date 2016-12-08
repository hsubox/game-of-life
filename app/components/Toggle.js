import React, {PropTypes} from 'react'

const Toggle = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={(e) => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

Toggle.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
