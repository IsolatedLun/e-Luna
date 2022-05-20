import React, { useEffect, useState } from 'react'
import Button from '../../Interactibles/Buttons/Button';
import Image from '../Image/Image';
import { INF_ProductCard } from './types'

const ProductPreviewCard = (props: INF_ProductCard) => {
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
              images.map((img, idx) => (
                <Image alt={`${props.title} product`} src={img} idx={idx} isInteractible={false} />
              ))
            }
        </div>
        <h2 className='[ card__title ] [ text-ellipsis ] [ text-center margin-top-05rem fs-500  ]'>
          { props.title }
        </h2>
        <Button class='[ width-100pct margin-top-05rem ]' variant='interactive'>
          Explore
        </Button>
    </div>
  )
}

export default ProductPreviewCard