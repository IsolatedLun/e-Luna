import ImageSlider from '../../Interactibles/ImageSlider/ImageSlider'
import StarRating from '../../Interactibles/StarRating/StarRating'
import Tags from '../../Compounds/Tags/Tags'
import { INF_Product } from './types'
import ProductMainDetails from './_More/ProductMainDetails'

const ProductViewHeader = (props: INF_Product) => {

  return (
    <header className='[ flex-col margin-bottom-1 gap-05 ]'>
        <h2 className='[ text-ellipsis-2 ] [ fw-normal text-center fs-500 ]'>{ props.name }</h2>

        <div className="[ product__stats ] [ flex-align-center flex-justify-between margin-inline-05 ]" data-flex-collapse>
            <div className="[ tags ] [ flex flex-wrap flex-justify-center ] [ gap-05 ]">
                <Tags tags={props.tags} />
            </div>
            <StarRating { ...props.product_rating } isViewOnly showControl={true} isReview={false} />
        </div>

        <section className='[ ] [ flex-justify-between gap-05 ]' data-flex-collapse>
            <div className="[ product__img-slider ] [ container ]">
                <ImageSlider 
                    imgUrls={props.images} alt={`${props.name}'s images`} 
                    showSlides 
                    productName={props.name} />
            </div>

            <ProductMainDetails { ...props } />
        </section>
    </header>
  )
}

export default ProductViewHeader