import React from 'react'
import { INF_Price } from './types'

const Price = (props: INF_Price) => {

  return (
    <p 
        data-discount={props.discount_pct}
        data-price={props.actual_price}
        aria-label={`This product costs ${props.actual_price}`}
        data-variant='price'
        data-alignment={props.alignment ? props.alignment : 'default'}
        className={`[ button price ] [ pos-relative fs-450 ] ${props?.class}`}>

        $&nbsp;
        { props.discount_pct > 0 && (
            <del>{ props.original_price }</del>
        ) }

        { props.discount_pct === 0 && props.actual_price}
    </p>
  )
}

export default Price