import React, { useState } from 'react'
import { INF_Children } from '../../../types'

const Dropdown = (props: INF_Children) => {

  return (
    <div className="[ dropdown ] [ pos-absolute overflow-hidden ]">
      { props.children }
    </div>
  )
}

export default Dropdown