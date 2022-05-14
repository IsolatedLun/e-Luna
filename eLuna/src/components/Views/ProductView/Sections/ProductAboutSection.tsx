import React from 'react'
import { Link } from 'react-router-dom'
import { ProductAboutItemKey, 
    ProductAboutList, ProductAboutListItem } from '../_More/ProductAboutList'
import ProductTypePath from '../_More/ProductTypePath'
import ProductSection from '../ProductSection'
import { INF_Product } from '../types'
import Seller from '../../../Modules/Seller/SellerPreview'

const ProductAboutSection = ({ product } : { product: INF_Product }) => {
  return (
    <ProductSection role='Product details' title='More about this product'>
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
    </ProductSection>
  )
}

export default ProductAboutSection