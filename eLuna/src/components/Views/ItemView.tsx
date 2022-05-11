import React from 'react'
import ItemCard from '../Modules/Cards/ItemCard'

const ItemView = () => {
  return (
    <div className="[ item-view ] [ flex-col ] [ margin-block-1rem gap-05 ]">
        <ItemCard 
          price={{ actual_price: 9000, discount_pct: 0.5 }} 
          name='Call of duty 2022' 
          id={0}
          seller={{ id: 1, username: 'lol' }} 
          product_rating={{
            _1_stars: 1,
            _2_stars: 0,
            _3_stars: 0,
            _4_stars: 0,
            _5_stars: 14,
            rating: 4
          }}
          />
    </div>
  )
}

export default ItemView