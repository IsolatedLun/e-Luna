import GridSplit from '../../Modules/Grids/GridSplit'
import Review from '../../Modules/Review/Review'
import Section from '../../Modules/Section/Section'
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

            <Section name='product' role='Product comments' title='Reviews on this product'>
              <Review 
                rating={1}
                description={'What the fuck was this game all about... 0/10'}
                user={{ id: 0, is_verified: false, profile: '', username: 'noob' }} />
            </Section>
          </div>

          <Section name='product' role='Related products' title='Related products'>

          </Section>
        </GridSplit>
    </div>
  )
}

export default ProductView