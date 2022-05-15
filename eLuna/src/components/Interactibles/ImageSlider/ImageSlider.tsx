import React, { useEffect, useState } from 'react'
import { CARET_LEFT, CARET_RIGHT } from '../../../consts';
import Image from '../../Modules/Image/Image';
import IconButton from '../Buttons/IconButton';
import ImageSliderCollection from './ImageSliderCollection';
import { INF_ImageSlider } from './types';


const ImageSlider = (props: INF_ImageSlider) => {
    const [idx, setIdx] = useState(0);
    const [prevIdx, setPrevIdx] = useState(0);
    const imgRef = React.createRef<HTMLImageElement>();

    function handleClick(n: number) {
        toggleImage();

        setTimeout(() => {
            setPrevIdx(idx);

            if(n === -1 && idx - 1 < 0)
                setIdx(props.imgUrls.length - 1);
            else if (idx + 1 > props.imgUrls.length - 1)
                setIdx(0);
            else
                setIdx(idx + 1);
        }, 210)
    }

    function toggleImage() {
        imgRef.current?.classList.remove('image-enter');
        imgRef.current?.classList.add('image-exit');

        setTimeout(() => {
            imgRef.current?.classList.remove('image-exit');
            imgRef.current?.classList.add('image-enter');
        }, 200)
    }

    return (
        <div className='[ image-slider ] [ flex ] [ overflow-hidden text-center gap-05 ]'>
            {
                props.showSlides && <ImageSliderCollection 
                    setIdx={setIdx} 
                    imgUrls={props.imgUrls} 
                    productName={props.productName}
                    />
            }

            <div className='[ pos-relative width-100pct ]'>
                <IconButton 
                    ariaLabel='Left' 
                    class='[ slider__button pos-absolute ]'
                    onClick={() => handleClick(-1)}
                    >
                    { CARET_LEFT }
                </IconButton>

                <img 
                    ref={imgRef} 
                    data-testid='slider-img' 
                    className='[ image-slider__img ]' 
                    src={props.imgUrls[idx]} 
                    data-animation-mode='fade'
                    alt={props.alt} />

                <IconButton 
                    ariaLabel='Right' 
                    class='[ slider__button pos-absolute ]'
                    onClick={() => handleClick(1)}
                    >
                    { CARET_RIGHT }
                </IconButton>
            </div>
        </div>
    )
}

export default ImageSlider