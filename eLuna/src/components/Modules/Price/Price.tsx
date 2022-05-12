import React from 'react'
import { INF_Price } from './types'

const Price = (props: INF_Price) => {

    // Returns the default price if the discount is 0
    // else returns the discouted price
    function calculatePrice() {
        return props.discount_pct > 0 
            ? (props.actual_price - (props.actual_price * props.discount_pct / 100) ).toFixed(2)
            : props.actual_price;
    }

  return (
    <p 
        data-discount={props.discount_pct}
        data-price={calculatePrice()}
        aria-label={`This product costs ${calculatePrice()}`}
        data-variant='price'
        data-alignment={props.alignment ? props.alignment : 'default'}
        className={`[ button price ] [ pos-relative fs-450 ] ${props?.class}`}>

        $&nbsp;
        { props.discount_pct > 0 && (
            <del>{ props.actual_price }</del>
        ) }

        { props.discount_pct === 0 && props.actual_price}
    </p>
  )
}

export default Price