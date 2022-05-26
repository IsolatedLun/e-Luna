import { useEffect, useState } from 'react'
import LinkButton from '../../Interactibles/Buttons/LinkButton';
import Image from '../Image/Image';
import { INF_ProductPreviewCard } from './types'

const ProductPreviewCard = (props: INF_ProductPreviewCard) => {
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
                <img alt={`${props.title} product`} src={img} />
              ))
            }
        </div>
        <h2 className='[ card__title ] [ text-ellipsis ] [ text-center margin-top-05rem fs-500  ]'>
          { props.title }
        </h2>
        <LinkButton 
          ariaLabel='Explore' 
          to={props.to} 
          class='[ width-100pct margin-top-05rem text-center ]' 
          variant='interactive'
          >
          Explore
        </LinkButton>
    </div>
  )
}

export default ProductPreviewCard