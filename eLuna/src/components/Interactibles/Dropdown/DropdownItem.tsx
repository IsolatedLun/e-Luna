import React from 'react'
import { INF_DropdownItem } from './types'

const DropdownItem = (props: INF_DropdownItem) => {
  return (
    <a 
      href={props.to ? props.to : '#'} 
      onClick={() => props.toMenu && props.setActive!(props.toMenu)}
      className='[ dropdown-item hoverable ] [ flex-align-center gap-05 fs-450 ]
        [ border-radius-inherit ]'>
        {
          props.leftIcon && 
            <span className="[ icon ] [ fw-bold ]">{ props.leftIcon }</span>
        }

        <div className='[ flex-col fs-300 ]'>
        { 
            props.children
        }
        </div>
        
        {
          props.rightIcon && 
            <span className="[ icon ] [ margin-left-auto fw-bold ]">{ props.rightIcon }</span>
        }
    </a>
  )
}

export default DropdownItem