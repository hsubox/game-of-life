import React from 'react'
import SetGridSizeToggle from '../containers/SetGridSizeToggle'

const GridSizeControls = () => (
  <p className="grid-size-controls">
    <strong>Size:</strong>
    {" "}
    <SetGridSizeToggle size="S" width="50" height="30">
      Small
    </SetGridSizeToggle>
    {", "}
    <SetGridSizeToggle size="M" width="70" height="50">
      Medium
    </SetGridSizeToggle>
    {", "}
    <SetGridSizeToggle size="L" width="100" height="80">
      Large
    </SetGridSizeToggle>
  </p>
)

export default GridSizeControls
