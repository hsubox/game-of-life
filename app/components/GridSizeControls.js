import React from 'react'
import SetGridSizeLink from '../containers/SetGridSizeLink'

const GridSizeControls = () => (
  <p>
    Grid Size:
    {" "}
    <SetGridSizeLink size="S">
      Small
    </SetGridSizeLink>
    {", "}
    <SetGridSizeLink size="M">
      Medium
    </SetGridSizeLink>
    {", "}
    <SetGridSizeLink size="L">
      Large
    </SetGridSizeLink>
  </p>
)

export default GridSizeControls
