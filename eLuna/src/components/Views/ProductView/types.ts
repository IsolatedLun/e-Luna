import { INF_ProductView } from "../../Modules/Cards/types";

export interface INF_Product extends INF_ProductView {
    description: string;
    type: string;

    images: string[];
    reviews: any[];
}