import { INF_Rating } from "../../Interactibles/StarRating/types";
import { INF_SellerPreview } from "../Seller/types";

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

    seller: INF_SellerPreview;
}