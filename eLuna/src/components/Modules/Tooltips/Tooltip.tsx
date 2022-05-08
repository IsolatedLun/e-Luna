import React from 'react'
import { INF_CVC } from '../../../types'

const Tooltip = (props: INF_CVC) => {
  return (
    <div 
        className={`[ tooltip card ] ${props.class} 
            [ pos-absolute overflow-x-hidden ]`} 
        data-variant='tooltip'>
            
        { props.children }
    </div>
  )
}

export default Tooltip