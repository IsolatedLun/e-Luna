import React from 'react'
import ProductCard from '../../Modules/Cards/ProductCard'
import { INF_Products_CMP } from './types'

const Products = (props: INF_Products_CMP) => {
  return (
    <div className='[ flex-col gap-05 ]'>
        {
            props.products.map(product => <ProductCard { ...product } />)
        }
    </div>
  )
}

export default Products