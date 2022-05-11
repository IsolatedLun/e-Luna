import React from 'react'
import Button from '../../Interactibles/Buttons/Button'
import ImageSlider from '../../Interactibles/ImageSlider/ImageSlider'
import Price from '../../Modules/Price/Price'
import { INF_Product } from './types'

const ProductView = (props: INF_Product) => {

  return (
    <div className="[ product-view-container ] [ margin-block-1rem ]">
        <header className='[ grid-repeater margin-bottom-1 ]' data-grid-collapse>
            <div className="[ product__img-slider ] [ container ]">
                <ImageSlider imgUrls={props.images} alt={`${props.name}'s images`} />
            </div>

            <div className='[ flex-col gap-05 text-center flex-justify-between ]'>
                <h2 className='[ text-ellipsis-2 ] [ fw-normal ]'>{ props.name }</h2>

                <div className='[ flex-justify-between gap-05 ]'>
                    <Price { ...props.price } alignment='bottom' />
                    <Button variant='interactive'>Add to cart</Button>
                </div>
            </div>
        </header>

        <section role='Product description'>
            <p className="[ desc ] [ fs-200 ]">ABOUT THIS PRODUCT</p>
        </section>
    </div>
  )
}

export default ProductView