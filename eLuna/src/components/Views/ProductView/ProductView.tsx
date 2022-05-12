import ProductViewHeader from './ProductViewHeader'
import { INF_Product } from './types'

const ProductView = (props: INF_Product) => {

  return (
    <div className="[ product-view-container ] [ margin-block-1rem ]">
        <ProductViewHeader { ...props } />

        <section role='Product description'>
            <p className="[ desc ] [ fs-200 ]">ABOUT THIS PRODUCT</p>
        </section>
    </div>
  )
}

export default ProductView