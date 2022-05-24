import React from 'react'
import { INF_FilterType } from './types'

const TextFilter = (props: INF_FilterType) => {
  return (
    <a 
      onClick={() => 
        props.setter!(props, true)}
      className='[ text-muted ]'
      href='#'>{ props.name }</a>
  )
}

export default TextFilter