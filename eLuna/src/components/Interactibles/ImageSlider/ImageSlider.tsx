import React, { useEffect, useState } from 'react'
import { CARET_LEFT, CARET_RIGHT } from '../../../consts';
import IconButton from '../Buttons/IconButton';

let transitionInterval: NodeJS.Timer;
const ImageSlider = ({ imgUrls, alt } : { imgUrls: string[], alt: string }) => {
    const [idx, setIdx] = useState(0);
    const imgRef = React.createRef<HTMLImageElement>();

    function handleClick(n: number) {
        toggleImage();

        setTimeout(() => {
            if(n === -1 && idx - 1 < 0)
                setIdx(imgUrls.length - 1);
            else if (idx + 1 > imgUrls.length - 1)
                setIdx(0);
            else
                setIdx(idx + 1);
        }, 200)
    }

    function toggleImage() {
        imgRef.current?.classList.remove('image-enter');
        imgRef.current?.classList.add('image-exit');

        setTimeout(() => {
            imgRef.current?.classList.remove('image-exit');
            imgRef.current?.classList.add('image-enter');
        }, 200)
    }


    useEffect(() => {
        transitionInterval = setInterval(() => {
            if(imgUrls.length > 1)
                handleClick(1);
        }, 5000)

        return () => { clearInterval(transitionInterval) };
    }, [])

    return (
        <div className='[ image-slider ] [ pos-relative overflow-hidden text-center ]'>
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
                src={imgUrls[idx]} 
                alt={alt} />

            <IconButton 
                ariaLabel='Right' 
                class='[ slider__button pos-absolute ]'
                onClick={() => handleClick(1)}
                >
                { CARET_RIGHT }
            </IconButton>
        </div>
    )
}

export default ImageSlider