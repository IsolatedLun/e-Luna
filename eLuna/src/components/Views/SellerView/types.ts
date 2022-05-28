import { INF_SellerUserPreview } from "../../Modules/Seller/types";
import { INF_Transaction } from "../../Modules/Transaction/types";

export interface INF_Seller extends INF_SellerUserPreview {
    email: string;
    business_email_address: string;

    telephone: string;
    location: string;
    profile: string;

    joined_at: string;

    transactions: INF_Transaction[];
}