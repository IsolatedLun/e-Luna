import React from 'react'
import { INF_SmoothBar } from './types'

const SmoothBar = (props: INF_SmoothBar) => {
  return (
    <div 
      data-variant={props.variant ? props.variant : 'default'}
      className="[ smooth-bar ] [ grid-center ] [ pos-relative margin-block-05rem ]">
    </div>
  )
}

export default SmoothBar