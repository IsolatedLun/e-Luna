import { INF_SellerUserPreview } from "../Seller/types";

export interface INF_Review {
    user: INF_ReviewUserPreview;
   
    description: string;

    rating: number;
}

export interface INF_ReviewUserPreview extends INF_SellerUserPreview {
    profile: string;
}