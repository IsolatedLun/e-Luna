import { INF_CVC } from "../../../types";
import { INF_Rating } from "../../Interactibles/StarRating/types";
import { INF_SellerUserPreview } from "../Seller/types";

export interface INF_Card extends INF_CVC {
    spacing?: string;
}

export interface INF_ProductCard {
    title: string;
    images: string[];
}

export interface INF_ProductView {
    id: number;
    name: string;
    thumbnail: string;

    actual_price: number;
    discount_pct: number;

    rating: INF_Rating;

    seller: INF_SellerUserPreview;
}