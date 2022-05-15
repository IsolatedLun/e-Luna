export interface INF_ImageSlider {
    imgUrls: string[];
    productName: string;
    alt: string;

    showSlides: boolean;
}

export interface INF_ImageSliderCollection {
    imgUrls: string[];
    productName: string;

    setIdx: React.Dispatch<React.SetStateAction<number>>;
}