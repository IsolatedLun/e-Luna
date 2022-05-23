import { useState } from 'react'
import { FAKE_PRODUCT } from '../../../consts'
import ProductCard from '../../Modules/Cards/ProductCard'
import Section from '../../Modules/Section/Section'
import { INF_FilterTag } from '../../Modules/Tags/types'
import SearchControls from './Sections/SearchControls'

const SearchView = () => {
  const [filters, setFilters] = useState<INF_FilterTag[]>([]);

  return (
    <div className='[ search-view ] [ grid-varied ] [ gap-05 ]' data-grid-collapse>
        <SearchControls filters={filters} setFilters={setFilters} />

        <Section name='products' title='Products' role='Searched products'>
            <ProductCard {...FAKE_PRODUCT} />
        </Section>
    </div>
  )
}

export default SearchView