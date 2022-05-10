import React from 'react'
import StarRating from '../../Interactibles/StarRating/StarRating'
import Price from '../Price/Price'
import { INF_ProductView } from './types'

const ItemCard = (props: INF_ProductView) => {
  return (
    <section className='[ card-container ] [ flex ]'>
      <div className='[ card__img-container ] [ border-radius-6px margin-right-05rem width-100pct ]'>
        <img src="https://c4.wallpaperflare.com/wallpaper/610/19/620/minecraft-planet-cube-cubes-wallpaper-preview.jpg" alt="" />
      </div>

      <div className='[ card ] [ flex-col flex-justify-between ]' data-variant='item'>
            <h2 className='[ fs-300 fw-normal margin-bottom-1-5 ]'>
                <a href="" className='[ text-ellipsis-2 ]'>
                    { props.name }
                </a>
            </h2>
            
            <div className='[ flex flex-justify-between flex-align-end ]'>
              <div className='[ flex-col flex-center gap-05 ]'>
                <Price { ...props.price } />
                <p className='[ fs-300 text-muted ]'>Seller: <a href="">{ props.seller.username }</a></p>
              </div>

              <StarRating 
                { ...props.product_rating }
                isViewOnly={true}
              />
            </div>
      </div>
    </section>
  )
}

export default ItemCard