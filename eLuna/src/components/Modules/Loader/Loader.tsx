import React from 'react'
import SmoothBar from '../SmoothBar/SmoothBar'
import { INF_Loader } from './types'

const Loader = (props: INF_Loader) => {
  return (
    <div className={`${props.class} [ absolute-center ]`}>
        { props.children }
        <SmoothBar />
    </div>
  )
}

export default Loader