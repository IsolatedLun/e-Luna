export interface INF_Image {
    src: string;
    alt: string;

    idx: string | number;

    setIdx?: React.Dispatch<React.SetStateAction<number>>;
}