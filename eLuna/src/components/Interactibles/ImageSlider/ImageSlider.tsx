import React, { useEffect, useState } from 'react'

let transitionTimeout: NodeJS.Timeout;
let transitionInterval: NodeJS.Timer;
const ImageSlider = ({ imgUrls, alt } : { imgUrls: string[], alt: string }) => {
    const [idx, setIdx] = useState(0);
    const imgRef = React.createRef<HTMLImageElement>();

    function handleClick() {
        if(idx + 2 > imgUrls.length)
            setIdx(0);
        else
            setIdx(idx + 1);
    }

    useEffect(() => { // Like the CSS Transition but more specific
        imgRef.current?.classList.remove('image-enter');
        imgRef.current?.classList.add('image-exit');

        transitionTimeout = setTimeout(() => {
            imgRef.current?.classList.remove('image-exit');
            imgRef.current?.classList.add('image-enter');
        }, 200)

    }, [idx])

    useEffect(() => {
        transitionInterval = setInterval(() => {
            handleClick();
        }, 5000)

        return () => { clearInterval(transitionInterval) };
    }, [])

    return (
        <div className='[ image-slider ]' onClick={() => handleClick()}>
            <img ref={imgRef} className='[ image-slider__img ]' src={imgUrls[idx]} alt={alt} />
        </div>
    )
}

export default ImageSlider