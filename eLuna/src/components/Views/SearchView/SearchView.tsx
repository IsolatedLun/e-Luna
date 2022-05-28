import { useState } from 'react'
import { useGetFilteredProductsMutation } from '../../../services/productService'
import Section from '../../Modules/Section/Section'
import { INF_FilterTag } from '../../Modules/Tags/types'
import SearchControls from './Sections/SearchControls'
import { useAppSelector } from '../../../rootHooks'
import Products from '../../Compounds/Products/Products'

const SearchView = () => {
  const [filters, setFilters] = useState<INF_FilterTag[]>([]);
  const [getProducts] = useGetFilteredProductsMutation();

  const { products } = useAppSelector(state => state.product);

  return (
    <div className='[ search-view ] [ grid-varied ] [ gap-05 ]' data-grid-collapse>
        <SearchControls fetchProducts={getProducts as any} filters={filters} setFilters={setFilters} />

        <Section name='products' title='Products' role='Searched products'>
            <Products products={products} />
        </Section>
    </div>
  )
}

export default SearchView