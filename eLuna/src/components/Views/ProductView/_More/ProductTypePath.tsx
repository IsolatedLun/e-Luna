import React from 'react'
import { INF_ProductTypePath } from './types'

const ProductTypePath = (props: INF_ProductTypePath) => {
    const res = getPaths()

    function getPaths() {
        return props.value.split('-');
    }
  
    return (
    <div className='[ flex gap-025 ]'>
        { res.map((type, idx) => (
            <>
                <a className='[ text-muted text-capital ]' href={`/search?type=${type}`}>{ type }</a>
                <span>{ idx < res.length - 1 ? '->' : ''}</span>
            </>
        )) }
    </div>
  )
}

export default ProductTypePath;