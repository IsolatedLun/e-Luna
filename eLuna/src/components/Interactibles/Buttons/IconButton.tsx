import React from 'react'
import { INF_IconButton } from './types'

const IconButton = (props: INF_IconButton<HTMLButtonElement>) => {
  return (
    <button
      onClick={props?.onClick}
      aria-hidden
      aria-label={props.ariaLabel}
      className='[ button ] [ icon fw-bold fs-450 border-radius-50pct display-block ]'
      data-variant='icon'
    >
      { props.children }
    </button>
  )
}

export default IconButton