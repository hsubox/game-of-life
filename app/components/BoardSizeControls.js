import React from 'react'
import SetBoardSizeLink from '../containers/SetBoardSizeLink'

const BoardSizeControls = () => (
  <p>
    Board Size:
    {" "}
    <SetBoardSizeLink size="S">
      Small
    </SetBoardSizeLink>
    {", "}
    <SetBoardSizeLink size="M">
      Medium
    </SetBoardSizeLink>
    {", "}
    <SetBoardSizeLink size="L">
      Large
    </SetBoardSizeLink>
  </p>
)

export default BoardSizeControls
