import React from 'react'
import { INF_CVC, INF_CVCA } from '../../../types'

const Icon = (props: INF_CVCA) => {
  return (
    <span 
        aria-label={props.ariaLabel}
        aria-hidden
        className={`[ icon fw-bold ] ${props.class}`} 
        data-variant={props.variant ? props.variant : 'empty'}>
        
        { props.children }
    </span> 
  )
}

export default Icon