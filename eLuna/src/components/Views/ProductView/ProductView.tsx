import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../../services/productService'
import FlexItems from '../../Modules/Flex/FlexItems'
import GridSplit from '../../Modules/Grids/GridSplit'
import Loader from '../../Modules/Loader/Loader'
import ViewLoader from '../../Modules/Loader/ViewLoader'
import Review from '../../Modules/Review/Review'
import Section from '../../Modules/Section/Section'
import SmoothBar from '../../Modules/SmoothBar/SmoothBar'
import ProductViewHeader from './ProductViewHeader'
import ProductAboutSection from './Sections/ProductAboutSection'

const ProductView = () => {
  const { id, name } = useParams();
  const { data: product, error } = useGetProductQuery({ id, name });
  const navigate = useNavigate();

  useEffect(() => {
    if(error)
      navigate('/404')
  }, [error])

  if(product)
    return (
      <div className="[ product-view-container ] [ margin-block-1rem ]">
          <ProductViewHeader { ...product } />

          <GridSplit>
            <div className='[ product__details ]' role={'Product details'}>
              <ProductAboutSection product={product} />

              <Section name='product' role='Product comments' title='Reviews on this product'>
                <Review description='I love this' rating={4.1} 
                    user={{id: 0, is_verified: true, profile: '/media/products/thumbnails/2022-03-30-image-4-j_1100.png', username: 'CheeseBurger'}} 
                    />
              </Section>
            </div>

            <Section name='product' role='Related products' title='Related products'>
              <FlexItems direction='y' blockCls='product__related'>
            
              </FlexItems>
            </Section>
          </GridSplit>
      </div>
  )

  else
      return <ViewLoader headerName='Product' text={name!} />
}

export default ProductView