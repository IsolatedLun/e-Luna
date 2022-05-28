import React from 'react'
import Image from '../../Modules/Image/Image'
import { INF_Seller } from './types'
import StatCard from './_More/StatCard'

const SellerViewHeader = (props: INF_Seller) => {
  return (
    <header className='[ seller__header ] [ flex-justify-between gap-05 ]' data-flex-collapse>
        <div className='[ flex-grow-1 flex-align-center gap-05 ]' data-flex-collapse>
            <Image 
              src={props.profile} 
              alt={`${props.username}'s profile`} 
              isInteractible={false} 
              idx={0} 
              />
            <h2>{ props.username }</h2>
        </div>

        <div className='[ flex-align-start flex-wrap gap-05 ]'>
            <StatCard title='0' text='products sold' />
            <StatCard title='0' text='products bought' />
        </div>
    </header>
  )
}

export default SellerViewHeader