import React from 'react'
import StarRating from '../../Interactibles/StarRating/StarRating'
import { INF_Product } from '../../Views/ProductView/types'
import Image from '../Image/Image'

const CartItem = (props: INF_Product) => {
  return (
    <div className="[ card ] [ flex flex-justify-between ] [ width-100pct fs-200 ]">
        <Image 
          src={props.thumbnail} 
          alt={`${props.name} in cart`} 
          idx={props.name} 
          isInteractible={false} />

        <div className='[ flex-col flex-align-center gap-05 ]'>
            <h2 className='[ text-ellipsis ] [ fs-300 ]'>{ props.name }</h2>
            <StarRating { ...props.rating } isViewOnly showControl={false} isReview={false} />
        </div>
    </div>
  )
}

export default CartItem