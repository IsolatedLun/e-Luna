import { INF_Children } from "../../../types";
import { INF_ProductView } from "../../Modules/Cards/types";
import { INF_Tag } from "../../Modules/Tags/types";

export interface INF_Product extends INF_ProductView {
    description: string;
    type: string;

    images: string[];
    reviews: any[];
    tags: INF_Tag[];

    type_path: string;
}

export interface INF_ProductSection extends INF_Children {
    title: string;
    role: string;
}