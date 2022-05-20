import { ProductAboutItemKey, 
    ProductAboutList, ProductAboutListItem } from '../_More/ProductAboutList'
import ProductTypePath from '../_More/ProductTypePath'
import { INF_Product } from '../types'
import Seller from '../../../Modules/Seller/SellerPreview'
import Section from '../../../Modules/Section/Section'

const ProductAboutSection = ({ product } : { product: INF_Product }) => {
  return (
    <Section name='product' role='Product details' title='More about this product'>
        <ProductAboutList>
            <ProductAboutListItem>
                <ProductAboutItemKey>Type:</ProductAboutItemKey>
                <ProductTypePath value={product.type_path} />
            </ProductAboutListItem>

            <ProductAboutListItem>
                <ProductAboutItemKey>Seller:</ProductAboutItemKey>
                <Seller { ...product.seller } />
            </ProductAboutListItem>
        </ProductAboutList>
    </Section>
  )
}

export default ProductAboutSection