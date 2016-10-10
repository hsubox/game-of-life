import React from 'react'
import SetBoardSizeLink from '../containers/SetBoardSizeLink'

const BoardSizeControls = () => (
  <p>
    Board Size:
    {" "}
    <SetBoardSizeLink size="S" width="50" height="30">
      Small
    </SetBoardSizeLink>
    {", "}
    <SetBoardSizeLink size="M" width="70" height="50">
      Medium
    </SetBoardSizeLink>
    {", "}
    <SetBoardSizeLink size="L" width="100" height="80">
      Large
    </SetBoardSizeLink>
  </p>
)

export default BoardSizeControls
