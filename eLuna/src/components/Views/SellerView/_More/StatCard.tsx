import React from 'react'
import { INF_StatCard } from './types'

const StatCard = (props: INF_StatCard) => {
  return (
    <div 
        className="[ card ] [ flex-col gap-05 ] [ text-center ]" 
        data-variant='tag' 
        data-spacing='half-spacious'
        >
        <h2>{ props.title }</h2>
        <p>{ props.text }</p>
    </div>
  )
}

export default StatCard