export interface INF_Image {
    src: string;
    alt: string;

    idx: string | number;

    isInteractible: boolean;

    setIdx?: React.Dispatch<React.SetStateAction<number>>;
}