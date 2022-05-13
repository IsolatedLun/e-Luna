import React from 'react'
import ImageSlider from '../../Interactibles/ImageSlider/ImageSlider'

const HomeShowcase = () => {
  return (
    <div className="[ home__showcase ] [ margin-block-1rem ]">
        <div className="[ showcase__container ] [ container ]">
            <ImageSlider 
                imgUrls={['']}
                alt='Product'
            />
        </div>
    </div>
  )
}

export default HomeShowcase