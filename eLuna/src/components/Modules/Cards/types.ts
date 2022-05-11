import { INF_Rating } from "../../Interactibles/StarRating/types";

export interface INF_ProductCard {
    title: string;
    images: string[];
}

export interface INF_ProductView {
    id: number;
    name: string;

    price: {
        actual_price: number;
        discount_pct: number;
    }
    product_rating: INF_Rating;

    seller: {
        id: number;
        username: string;
    }
}