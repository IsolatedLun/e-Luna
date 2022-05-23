import React from 'react'
import { INF_FlexItems } from './types'

const FlexItems = (props: INF_FlexItems) => {
  return (
    <div 
        className={`[ ${props.blockCls} ] 
          [ ${props.direction === 'x' ? 'flex' : 'flex-col'} 
            gap-05 
            ${props.alignCenter ? 'flex-align-center' : ''} 
          ]`}
        >
            { props.children }
    </div>
  )
}

export default FlexItems