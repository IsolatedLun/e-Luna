import React from 'react'
import { CARET_DOWN } from '../../../consts'
import { INF_Children } from '../../../types'

const TooltipContainer = (props: INF_Children) => {
  return (
    <div className="tooltip-container">
        <p 
            data-variant='empty'
            className='[ tooltip__icon ] [ icon fw-bold ] [ select-none ]' 
            aria-label='Tooltip'>
            { CARET_DOWN }
        </p>

        { props.children }
    </div>
  )
}

export default TooltipContainer