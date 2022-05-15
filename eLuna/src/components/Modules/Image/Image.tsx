import React from 'react'
import { INF_Image } from './types'

const Image = (props: INF_Image) => {
  return (
    <button 
      aria-label='Change image slide'
      onClick={props?.setIdx ? () => props.setIdx!(props.idx as number) : () => null} 
      className='[ img-container-button img-container ]'>
        <img src={props.src} alt={props.alt} />
    </button>
  )
}

export default Image