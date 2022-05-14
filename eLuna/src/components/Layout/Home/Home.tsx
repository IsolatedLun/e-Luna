import React from 'react'
import MediaScroller from '../../Interactibles/ItemScroller/MediaScroller'
import ProductCard from '../../Modules/Cards/ProductPreviewCard'
import HomeShowcase from './HomeShowcase'

const Home = () => {
  return (
    <div className="[ home ]">
        <HomeShowcase />
        
        <MediaScroller items={[<ProductCard title='Gaming' images={[""]} />]} />
    </div>
  )
}

export default Home