import React from 'react'
import { INF_IconButton } from './types'

const IconButton = (props: INF_IconButton) => {
  return (
    <button
      onClick={props?.onClick}
      aria-hidden
      aria-label={props.ariaLabel}
      className={`[ button icon fw-bold ] ${props.class}`}
      data-variant='icon'
    >
      { props.children }
    </button>
  )
}

export default IconButton