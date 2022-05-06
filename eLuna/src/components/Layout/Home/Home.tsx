import React from 'react'
import ProductCard from '../../Modules/Cards/ProductCard'
import HomeShowcase from './HomeShowcase'

const Home = () => {
  return (
    <div className="[ home ]">
        <HomeShowcase />
        
        <div className="[ card-grid ] [ grid-auto-columns ] [ gap-025 ]">
          <ProductCard title='Gaming' images={[
            "https://www.lenovo.com/medias/desktop-large-blade.png?context=bWFzdGVyfHJvb3R8MTc2MzgxfGltYWdlL3BuZ3xoZDIvaGNiLzkyNDUzNTcxNDYxNDIucG5nfDRmMGExYWVkYjJjNTJiZThkZjhiNzVhMzBlMmJkMjFkMzFjODhhYjg0ZWJmZDQzNTAxYjhlYjM0YTM0ZjE3MGQ"
          ]} />

        </div>
    </div>
  )
}

export default Home