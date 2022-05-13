import React from 'react'
import { INF_CC } from '../../../types'

const GridSplit = (props: INF_CC) => {
  return (
    <div className={`[ grid-repeater ] [ ] ${props.class}`} data-grid-collapse>
        { props.children }
    </div>
  )
}

export default GridSplit