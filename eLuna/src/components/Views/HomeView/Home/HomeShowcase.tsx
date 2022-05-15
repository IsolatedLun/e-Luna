import React from 'react'
import ImageSlider from '../../../Interactibles/ImageSlider/ImageSlider'

const HomeShowcase = () => {
  return (
    <div className="[ home__showcase ] [ margin-block-1rem ]">
        <div className="[ showcase__container ] [ container ]">
            <ImageSlider 
                imgUrls={['https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-01.jpg',
              'https://www.techniknews.net/wp-content/uploads/2020/11/nvidia-geforce-rtx-3000-serie.jpg']}
                alt='Product'
                showSlides
                productName=''
            />
        </div>
    </div>
  )
}

export default HomeShowcase