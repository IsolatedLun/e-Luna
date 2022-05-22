import React from 'react'
import { INF_FilterType } from './types'

const TextFilter = (props: INF_FilterType) => {
  return (
    <a 
      onClick={() => 
        props.setter!(props)}
      href='#'>{ props.name }</a>
  )
}

export default TextFilter