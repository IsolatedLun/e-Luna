import React from 'react'
import StarRating from '../../Interactibles/StarRating/StarRating'

const ItemCard = () => {
  return (
    <div className='[ card-container ] [ flex ]'>
      <div className='[ card__img-container ] [ border-radius-6px margin-right-05rem ]'>
        <img src="https://c4.wallpaperflare.com/wallpaper/610/19/620/minecraft-planet-cube-cubes-wallpaper-preview.jpg" alt="" />
      </div>

      <div className='[ card ] [ flex-col flex-justify-between ]' data-variant='item'>
            <h2 className='[ fs-300 fw-normal ]'>
                <a href="">
                    NERF Minecraft Stormlander Dart-Blasting Hammer, 
                    Fires 3 Darts, Includes 3 Official Elite Darts, Pull-Back Priming Handle
                </a>
            </h2>
            
            <div className='[ flex flex-justify-between flex-align-center ]'>
              <p className='[ fs-300 text-muted ]'>Seller: <a href="">joe biden</a></p>
              <StarRating />
            </div>
      </div>
    </div>
  )
}

export default ItemCard