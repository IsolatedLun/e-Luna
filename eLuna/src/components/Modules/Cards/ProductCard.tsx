import React, { useEffect, useState } from 'react'
import Button from '../../Interactibles/Buttons/Button';
import { INF_ProductCard } from './types'

const ProductCard = (props: INF_ProductCard) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if(props.images.length > 4)
      setImages(props.images.slice(0, 4));
    else
      setImages(props.images);
  }, [])
    
  return (
    <div 
      className='[ card ] [ flex-center flex-col ]' 
      data-variant='product' 
      data-contains-single={props.images.length === 1}>

        <div className="[ card__img-grid ] [ gap-025 ]">
            {
              images.map(img => (
                <img 
                  className='[ card__img ]'
                  src={img}
                  alt={`${props.title} product`} />
              ))
            }
        </div>
        <h2 className='[ card__title ] [ text-ellipsis ] [ text-center margin-top-05rem fs-500  ]'>{ props.title }</h2>
        <Button class='[ width-100pct margin-top-05rem border-radius-100vw ]'>Explore</Button>
    </div>
  )
}

export default ProductCard