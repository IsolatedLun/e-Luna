import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { CARET_DOWN } from '../../../consts'
import { INF_CC } from '../../../types'

const TooltipContainer = (props: INF_CC) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`[ tooltip-container ] ${props.class}`}>
        <button 
            data-variant='transparent'
            className='[ button tooltip__icon ] [ icon ] [ select-none fw-bold text-muted ]' 
            onClick={() => setShow(!show)}
            aria-label='Tooltip'>
            { CARET_DOWN }
        </button>

        <CSSTransition
          in={show}
          classNames={'tooltip'}
          unmountOnExit
          timeout={100}
        >
          { props.children }
        </CSSTransition>
    </div>
  )
}

export default TooltipContainer