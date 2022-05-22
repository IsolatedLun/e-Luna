import React from 'react'
import { TIMES_ICON } from '../../../consts'
import IconButton from '../../Interactibles/Buttons/IconButton'
import ItemCard from '../Cards/ProductCard'
import { INF_CartViewItem } from './types'

const CartViewItem = (props: INF_CartViewItem) => {
  return (
    <div className='[ flex-justify-between ] [ gap-05 ]'>
            <ItemCard { ...props.item } />
            <IconButton 
                onClick={() => props.removeItem(props.item)}
                scheme='danger'
                ariaLabel={`Remove ${props.item.name} from cart`} 
                variant='interactive'>
                { TIMES_ICON }
            </IconButton>
    </div>
  )
}

export default CartViewItem