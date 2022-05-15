import React, { useState } from 'react'
import { INF_CVCD } from '../../../types'

const Dropdown = (props: INF_CVCD) => {

  return (
    <div 
      id={props.id}
      className="[ dropdown ] [ pos-absolute overflow-hidden ]" 
      data-variant={props.variant ? props.variant : 'default'}>
      { props.children }
    </div>
  )
}

export default Dropdown