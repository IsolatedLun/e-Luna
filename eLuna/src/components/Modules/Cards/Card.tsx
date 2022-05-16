import React from 'react'
import { INF_Card } from './types'

const Card = (props: INF_Card) => {
  return (
    <div 
        className={`[ card ] ${ props.class } `} 
        data-variant={props.variant ? props.variant : 'defailt'}
        data-spacing={props.spacing ? props.spacing : 'default'}
        >
        { props.children }
    </div>
  )
}

export default Card