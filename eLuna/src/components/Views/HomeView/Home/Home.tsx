import { useGetProductsQuery } from '../../../../services/productService'
import MediaScroller from '../../../Interactibles/ItemScroller/MediaScroller'
import ItemCard from '../../../Modules/Cards/ProductCard'
import ProductCard from '../../../Modules/Cards/ProductPreviewCard'
import HomeShowcase from './HomeShowcase'

const Home = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="[ home ]">
        <HomeShowcase />
        
        <MediaScroller items={[<ProductCard title='Gaming' images={[""]} />]} />

        { data && data.map(item => <ItemCard { ...item } />) }
    </div>
  )
}

export default Home