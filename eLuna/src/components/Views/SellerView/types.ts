import { INF_SellerUserPreview } from "../../Modules/Seller/types";

export interface INF_Seller extends INF_SellerUserPreview {
    email: string;
    telephone: string;
    location: string;

    joined_at: string;
}