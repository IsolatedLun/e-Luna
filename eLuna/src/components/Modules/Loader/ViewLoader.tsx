import React from 'react'
import Loader from './Loader'
import { INF_ViewLoader } from './types'

const ViewLoader = (props: INF_ViewLoader) => {
  return (
    <Loader class='[ flow gap-05 ] [ text-center ]'>
        <h2>Loading { props.headerName }</h2>
        <p className='[ text-muted ]'>{ props.text }</p>
    </Loader>
  )
}

export default ViewLoader