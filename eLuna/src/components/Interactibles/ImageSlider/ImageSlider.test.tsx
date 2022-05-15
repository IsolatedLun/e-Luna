import { render, screen } from '@testing-library/react';
import 'jest';
import { act } from 'react-dom/test-utils';
import ImageSlider from './ImageSlider';

test('Slide between 2 images and click on an image slide to select it', () => {
    render(
        <ImageSlider imgUrls={['./img1', './img2']} alt='' showSlides productName='' />
    )

    const img = screen.getByTestId('slider-img') as HTMLImageElement;

    expect(img.src).toBe('./img1');

    const rightBtn = document.querySelectorAll('.slider__button')[1] as HTMLButtonElement;
    act(() => {
        rightBtn.click();
    })

    expect(img.src).toBe('./img2');

    // Clicking on a slide
    const button = document.getElementsByClassName('img-container-button')[0] as HTMLButtonElement;
    act(() => {
        button.click();
    })

    expect(img.src).toBe('./img1');

})