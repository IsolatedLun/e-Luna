import { Link } from 'react-router-dom'
import StarRating from '../../Interactibles/StarRating/StarRating'
import Image from '../Image/Image'
import Price from '../Price/Price'
import Seller from '../Seller/SellerPreview'
import { INF_ProductView } from './types'

const ItemCard = (props: INF_ProductView) => {
  return (
    <section className='[ card-container ] [ flex ] [ width-100pct ]'>
      <div className='[ card__img-container ] [ border-radius-6px margin-right-05rem width-100pct ]' data-desktop-only>
        <Image src={props.images[0]} alt={`${props.name} image`} idx={props.id} isInteractible={false} />
      </div>

      <div className='[ card ] [ flex-col flex-justify-between ]' data-variant='item'>
            <h2 className='[ fs-300 fw-normal margin-bottom-1-5rem ]'>
                <Link to={`/product/${props.id}/${props.name}`} className='[ text-ellipsis-2 ]'>
                    { props.name }
                </Link>
            </h2>
            
            <div className='[ flex flex-justify-between flex-align-end ]'>
              <div className='[ flex-col flex-center gap-05 ]'>
                <Price { ...props.price } />
                <span className='[ text-muted ]'>Seller: <Seller { ...props.seller } /></span>
              </div>

              <StarRating 
                { ...props.product_rating }
                isViewOnly={true}
                showControl={true}
                isReview={false}
              />
            </div>
      </div>
    </section>
  )
}

export default ItemCard