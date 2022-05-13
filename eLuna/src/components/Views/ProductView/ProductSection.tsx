import React from 'react'
import { INF_ProductSection } from './types'

const ProductSection = (props: INF_ProductSection) => {
  return (
    <section className='[ product__section ] [ margin-block-1rem ]' role={props.role}>
        <h2 className='[ section__title ] [ fs-300 fw-normal text-upper margin-block-end-05rem ]'>
            { props.title }
        </h2>
        
        { props.children }
    </section>
  )
}

export default ProductSection