import React from 'react'
import { Link } from 'react-router-dom'
import { INF_DropdownItem } from './types'

const DropdownItem = (props: INF_DropdownItem) => {
  return (
    <Link 
      to={props.to ? props.to : '#'} 
      onClick={() => props.toMenu && props.setActive!(props.toMenu)}
      data-variant='dropdown'
      className='[ dropdown-item hoverable ] [ flex-align-center gap-05 fs-450 ]
        [ border-radius-inherit ]'>
        {
          props.leftIcon && 
            <span className="[ icon ] [ fw-bold ]">{ props.leftIcon }</span>
        }

        <div className='[ flex-col fs-300 ] [ width-100pct ]'>
        { 
            props.children
        }
        </div>
        
        {
          props.rightIcon && 
            <span className="[ icon ] [ margin-left-auto fw-bold ]">{ props.rightIcon }</span>
        }
    </Link>
  )
}

export default DropdownItem