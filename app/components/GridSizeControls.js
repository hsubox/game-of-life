import React from 'react'
import SetGridSizeLink from '../containers/SetGridSizeLink'

const GridSizeControls = () => (
  <p>
    Grid Size:
    {" "}
    <SetGridSizeLink size="S" width="50" height="30">
      Small
    </SetGridSizeLink>
    {", "}
    <SetGridSizeLink size="M" width="70" height="50">
      Medium
    </SetGridSizeLink>
    {", "}
    <SetGridSizeLink size="L" width="100" height="80">
      Large
    </SetGridSizeLink>
  </p>
)

export default GridSizeControls
