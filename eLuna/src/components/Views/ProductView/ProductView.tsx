import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../../services/productService'
import FlexItems from '../../Modules/Flex/FlexItems'
import GridSplit from '../../Modules/Grids/GridSplit'
import Section from '../../Modules/Section/Section'
import ProductViewHeader from './ProductViewHeader'
import ProductAboutSection from './Sections/ProductAboutSection'

const ProductView = () => {
  const { id, name } = useParams();
  const { data: product } = useGetProductQuery({ id, name });

  if(product)
    return (
      <div className="[ product-view-container ] [ margin-block-1rem ]">
          <ProductViewHeader { ...product } />

          <GridSplit>
            <div className='[ product__details ]' role={'Product details'}>
              <ProductAboutSection product={product} />

              <Section name='product' role='Product comments' title='Reviews on this product'>

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
      return <></>
}

export default ProductView