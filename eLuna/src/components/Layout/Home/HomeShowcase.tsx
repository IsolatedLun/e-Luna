import React from 'react'
import ImageSlider from '../../Interactibles/ImageSlider/ImageSlider'

const HomeShowcase = () => {
  return (
    <div className="[ home__showcase ] [ margin-block-1rem ]">
        <div className="[ showcase__container ] [ width-100pct ]">
            <ImageSlider 
                imgUrls={[
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HA244?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1631831826000',
              'https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-01.jpg']}
                alt='Product'
            />
        </div>
    </div>
  )
}

export default HomeShowcase