import GridSplit from '../../Modules/Grids/GridSplit'
import ProductSection from './ProductSection'
import ProductViewHeader from './ProductViewHeader'
import ProductAboutSection from './Sections/ProductAboutSection'
import { INF_Product } from './types'

const ProductView = (props: INF_Product) => {

  return (
    <div className="[ product-view-container ] [ margin-block-1rem ]">
        <ProductViewHeader { ...props } />

        <GridSplit>
          <div>
            <ProductAboutSection product={props} />

            <ProductSection role='Product comments' title='Reviews on this product'>

            </ProductSection>
          </div>

          <ProductSection role='Related products' title='Related products'>
          </ProductSection>
        </GridSplit>
    </div>
  )
}

export default ProductView