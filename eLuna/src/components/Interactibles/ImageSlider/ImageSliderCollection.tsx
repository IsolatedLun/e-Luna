import React from 'react'
import Image from '../../Modules/Image/Image'
import { INF_ImageSliderCollection } from './types'

const ImageSliderCollection = (props: INF_ImageSliderCollection) => {
  return (
    <div className="[ image-slide-collection ] [ flex-col gap-05 ] [ overflow-y-auto overflow-x-hidden ]">
        { props.imgUrls.map((imgUrl, idx) => 
                <Image 
                    idx={idx}
                    key={idx}
                    setIdx={props.setIdx} 
                    src={imgUrl} 
                    alt={`${props.productName} image ${idx}`} />
            ) 
        }
    </div>
  )
}

export default ImageSliderCollection