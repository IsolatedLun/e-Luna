import React from 'react'
import { STAR_ICON } from '../../../consts'
import { INF_Star } from './types'

const Star = (props: INF_Star) => {
  return (
    <p id={`star-${props.idx}`} className="[ star ] [ icon ] [ pos-relative select-none ]" data-variant='none'>
        { STAR_ICON }
    </p>
  )
}

export default Star