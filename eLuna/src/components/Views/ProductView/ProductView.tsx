import GridSplit from '../../Modules/Grids/GridSplit'
import Review from '../../Modules/Review/Review'
import TimeDecrementer from '../../Modules/TimeDecrementer/TimeDecrementer'
import ProductSection from './ProductSection'
import ProductViewHeader from './ProductViewHeader'
import ProductAboutSection from './Sections/ProductAboutSection'
import { INF_Product } from './types'

const ProductView = (props: INF_Product) => {

  return (
    <div className="[ product-view-container ] [ margin-block-1rem ]">
        <ProductViewHeader { ...props } />

        <GridSplit>
          <div className='[ product__details ]' role={'Product details'}>
            <ProductAboutSection product={props} />

            <ProductSection role='Product comments' title='Reviews on this product'>
              <Review 
                rating={1}
                description={'What the fuck was this game all about... 0/10'}
                user={{ id: 0, is_verified: false, profile: '', username: 'noob' }} />
            </ProductSection>
          </div>

          <ProductSection role='Related products' title='Related products'>
          </ProductSection>
        </GridSplit>
    </div>
  )
}

export default ProductView