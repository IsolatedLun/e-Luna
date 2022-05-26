import React from 'react'
import { API_URL } from '../../../consts'
import { INF_Image } from './types'

const Image = (props: INF_Image) => {
  if(props.isInteractible)
    return (
      <button 
        aria-label='Change image slide'
        onClick={props?.setIdx ? () => props.setIdx!(props.idx as number) : () => null} 
        className='[ img-container-button img-container ] [ width-100pct ]'>
          <img src={API_URL + props.src} alt={props.alt} />
      </button>
    )
  else
    return (
      <div 
        className='[ img-container ] [ width-100pct ]'>
          <img src={API_URL + props.src} alt={props.alt} />
      </div>
    )
}

export default Image