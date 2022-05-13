import React from 'react'
import { INF_CC } from '../../../../types'

const ProductAboutItemKey = (props: INF_CC) => {
    return (
        <p className='button' data-variant='interactive' data-hover-disable>{ props.children }</p>
    )
}

const ProductAboutListItem = (props: INF_CC) => {
    return (
      <li className='[ flex gap-05 flex-align-center ]'>
          { props.children }
      </li>
    )
}

const ProductAboutList = (props: INF_CC) => {
  return (
    <ul className='[ flex flex-col gap-05 ]'>
        { props.children }
    </ul>
  )
}

export { ProductAboutList, ProductAboutListItem, ProductAboutItemKey };